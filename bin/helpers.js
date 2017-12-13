const Remarkable = require("remarkable");
const meta = require("remarkable-meta");
const toc = require('markdown-toc');
const fs = require("fs");
const hljs = require('highlight.js');
const path = require("path");

const CONTENT_DIR = path.resolve(__dirname, '../src/content');
const DIST_DIR = path.resolve(__dirname, '../docs');

function fileToString(fileAbsolutePath) {
    return fs
        .readFileSync(fileAbsolutePath, 'utf-8')
        .toString();
}

function getFileTargetPath(fileSystemPath) {
    return fileSystemPath
        .replace(CONTENT_DIR, DIST_DIR)
        .replace('.md', '.html');
}

function parseMarkdownFile(contentString) {
    let md = new Remarkable({
        html: true,
        langPrefix:'language-',
        typographer: true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                } catch (__) {}
            }

            try {
                return hljs.highlightAuto(str).value;
            } catch (__) {}

            return '';
        }
    });
    md.use(meta);
    let content = md.render(contentString);

    md.use(toc.plugin({}));
    let tableOfContent = md.render(contentString).json;

    return {
        ...md.meta,
        tableOfContent,
        content
    };
}


function getAssetsRelativePath(fileSystemPath) {
    let arrayFilePath = fileSystemPath
        .replace(CONTENT_DIR, "")
        .split("/")
    ;
    let trimmedFilePath = arrayFilePath.slice(1, arrayFilePath.length);

    let assetsRelativePath = trimmedFilePath.map(function(folder, index) {
        if (index > 0) {
            return "../";
        }

        return "./";
    });

    return assetsRelativePath.join("") + "assets";
}

module.exports = {
    parseMarkdownFile,
    fileToString,
    getFileTargetPath,
    getAssetsRelativePath
};