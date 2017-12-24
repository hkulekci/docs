const hogan = require("hogan.js");
const fsPath = require("fs-path");
const walk = require("walk");
const path = require("path");
const _ = require("lodash");
const exec = require('child_process').exec;


const apisearchTransformer = require("./apisearch/apisearchTransformer");
const fileToString = require("./helpers").fileToString;
const parseMarkdownFile = require("./helpers").parseMarkdownFile;
const loadPartials = require("./helpers").loadPartials;
const getAssetsRelativePath = require("./helpers").getAssetsRelativePath;
const getFileTargetPath = require("./helpers").getFileTargetPath;

const CONTENT_DIR = path.resolve(__dirname, '../src/content');
const DOCS_DIR = path.resolve(__dirname, '../docs');
const TEMPLATES_DIR = path.resolve(__dirname, '../src/templates');
const SRC_DIR = path.resolve(__dirname, '../src');

/**
 * Main executable function
 */
(function () {
    /**
     * remove docs dir
     */
    exec("rm -rf " + DOCS_DIR + "/**/*.html", (error) => {
        if (error) {
            console.log("Error cleaning docs directory.", error);
            return false;
        }

        console.log("Docs directory cleaned!");
    });

    /**
     * Walk content files
     */
    let walker = walk.walk(CONTENT_DIR, {
        followLinks: false
    });
    let files = [];

    walker.on('file', function (root, stat, next) {
        let systemPath = root + '/' + stat.name;

        /**
         * Parse MD file
         */
        let contentString = fileToString(systemPath);
        let parsedFile = parseMarkdownFile(contentString);

        parsedFile = {
            ...parsedFile,
            url: '/docs/' + parsedFile.source.replace('.md', '.html'),
            systemPath,
            originalContent: contentString,
            systemName: stat.name,
            assets: getAssetsRelativePath(systemPath)
        };

        /**
         * Create file list
         */
        files.push(parsedFile);

        next();
    });

    walker.on('end', function () {
        console.log(`Writing files...`);

        files.forEach(function(file) {
            /**
             * Compose the tree menu
             */
            let rootFiles = _.filter(files, 'root');
            let rootFileCategories = _.groupBy(rootFiles, 'category');
            let rootFileCategoryKeys = Object.keys(rootFileCategories);

            let tree = _.groupBy(files, "category");
            console.log(rootFileCategoryKeys);

            let composedMenu = rootFileCategoryKeys
                .map(function(category) {
                    let rootCategory = rootFileCategories[category];
                    let hasChildren = (tree[category].length !== 0);

                    return {
                        category_name: category,
                        page: rootCategory.page,
                        root: !!rootCategory.root,
                        has_children: hasChildren,
                        children: (tree[category].length !== 0)
                            ? _.orderBy(tree[category], "page")
                            : null
                    }
                });

            /**
             * Render data
             */
            let targetFile = getFileTargetPath(file.systemPath);
            let html = renderTemplate({
                ...file,
                menu:  _.orderBy(composedMenu, "page")
            });

            /**
             * Write file
             */
            writeFileInPublicFolder(targetFile, html);
        });

        /**
         * Create a Json data file
         * for the documentation search
         */
        createDataFile(files);
    })
})();

/**
 * Write File on directory
 */
const writeFileInPublicFolder = function(targetFile, html) {
    fsPath.writeFile(
        targetFile,
        html,
        function (err) {
            if (err) {
                console.log(`X --> ${targetFile}`);
            }

            console.log(`V --> ${targetFile}`);
        }
    );
};

/**
 * Render data into template
 */
const renderTemplate = function(parsedFile) {
    /**
     * Get file template and compile it
     */
    let templateString = fileToString(
        `${TEMPLATES_DIR}/${parsedFile.template}`
    );
    let template = hogan.compile(templateString);
    let partials = loadPartials();

    /**
     * Rendered template with the content
     */
    return template.render({
        ...parsedFile
    }, {
        ...partials
    });
};

/**
 * Create database
 */
const createDataFile = function(docsArray) {
    let transformedDocs = apisearchTransformer(docsArray);
    let targetFile = `${SRC_DIR}/docsdb.json`;

    fsPath.writeFile(
        targetFile,
        JSON.stringify(transformedDocs),
        function (err) {
            if (err) {
                console.log(`X --> ${err}`);
            }

            console.log(`V --> Docs database created`);
        }
    );
};