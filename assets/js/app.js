/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/* harmony export (immutable) */ __webpack_exports__["__importStar"] = __importStar;
/* harmony export (immutable) */ __webpack_exports__["__importDefault"] = __importDefault;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var VNode = function VNode() {};

var options = {};

var stack = [];

var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

function applyRef(ref, value) {
  if (ref != null) {
    if (typeof ref == 'function') ref(value);else ref.current = value;
  }
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p;
	while (p = items.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {} else if (name === 'ref') {
		applyRef(old, null);
		applyRef(value, node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		try {
			node[name] = value == null ? '' : value;
		} catch (e) {}
		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

var mounts = [];

var diffLevel = 0;

var isSvgMode = false;

var hydrating = false;

function flushMounts() {
	var c;
	while (c = mounts.shift()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	if (!diffLevel++) {
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	if (! --diffLevel) {
		hydrating = false;

		if (!componentRoot) flushMounts();
	}

	return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	if (typeof vnode === 'string' || typeof vnode === 'number') {
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			}
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	} else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	diffAttributes(out, vnode.attributes, props);

	isSvgMode = prevSvgMode;

	return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			} else if (min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		unmountComponent(component);
	} else {
		if (node['__preactattr_'] != null) applyRef(node['__preactattr_'].ref, null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

function diffAttributes(dom, attrs, old) {
	var name;

	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
	var inst,
	    i = recyclerComponents.length;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	while (i--) {
		if (recyclerComponents[i].constructor === Ctor) {
			inst.nextBase = recyclerComponents[i].nextBase;
			recyclerComponents.splice(i, 1);
			return inst;
		}
	}

	return inst;
}

function doRender(props, state, context) {
	return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	component.__ref = props.ref;
	component.__key = props.key;
	delete props.ref;
	delete props.key;

	if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
		if (!component.base || mountAll) {
			if (component.componentWillMount) component.componentWillMount();
		} else if (component.componentWillReceiveProps) {
			component.componentWillReceiveProps(props, context);
		}
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (renderMode !== 0) {
		if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	applyRef(component.__ref, component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    snapshot = previousContext,
	    rendered,
	    inst,
	    cbase;

	if (component.constructor.getDerivedStateFromProps) {
		state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
		component.state = state;
	}

	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		if (isUpdate && component.getSnapshotBeforeUpdate) {
			snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || renderMode === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.push(component);
	} else if (!skip) {

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, snapshot);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	while (component._renderCallbacks.length) {
		component._renderCallbacks.pop().call(component);
	}if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;

			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] != null) applyRef(base['__preactattr_'].ref, null);

		component.nextBase = base;

		removeNode(base);
		recyclerComponents.push(component);

		removeChildren(base);
	}

	applyRef(component.__ref, null);
}

function Component(props, context) {
	this._dirty = true;

	this.context = context;

	this.props = props;

	this.state = this.state || {};

	this._renderCallbacks = [];
}

extend(Component.prototype, {
	setState: function setState(state, callback) {
		if (!this.prevState) this.prevState = this.state;
		this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	},
	forceUpdate: function forceUpdate(callback) {
		if (callback) this._renderCallbacks.push(callback);
		renderComponent(this, 2);
	},
	render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

function createRef() {
	return {};
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	createRef: createRef,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* harmony default export */ __webpack_exports__["default"] = (preact);

//# sourceMappingURL=preact.mjs.map


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(24);
var isBuffer = __webpack_require__(56);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var ErrorWithMessage_1 = __webpack_require__(4);
/**
 * Class InvalidFormatError
 */
var InvalidFormatError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidFormatError, _super);
    function InvalidFormatError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get transportable http error
     *
     * @return {number}
     */
    InvalidFormatError.getTransportableHTTPError = function () {
        return 400;
    };
    /**
     * Item representation not valid
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.itemRepresentationNotValid = function () {
        return new InvalidFormatError("Item representation not valid. Expecting Item array serialized but found malformed data");
    };
    /**
     * Item UUID representation not valid
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.itemUUIDRepresentationNotValid = function () {
        return new InvalidFormatError("Item UUID representation not valid. Expecting UUID array serialized but found malformed data");
    };
    /**
     * Create Composed UUID bad format.
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.composedItemUUIDNotValid = function () {
        return new InvalidFormatError("A composed UUID should always follow this format: {id}~{type}.");
    };
    /**
     * Create Query sorted by distance without coordinate.
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.querySortedByDistanceWithoutCoordinate = function () {
        return new InvalidFormatError("In order to be able to sort by coordinates, you need to create a Query by using Query::createLocated() instead of Query::create()");
    };
    /**
     * Query representation not valid
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.queryFormatNotValid = function () {
        return new InvalidFormatError("Query Format not valid. Expecting a Query serialized but found malformed data");
    };
    /**
     * Coordinate representation not valid
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.coordinateFormatNotValid = function () {
        return new InvalidFormatError("A Coordinate should always contain a lat (Latitude) and a lon (Longitude)");
    };
    /**
     * Config representation not valid
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.configFormatNotValid = function () {
        return new InvalidFormatError("Config Format not valid. Expecting a Config serialized but found malformed data");
    };
    /**
     * Token representation not valid
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.tokenFormatNotValid = function () {
        return new InvalidFormatError("Token Format not valid. Expecting a Token serialized but found malformed data");
    };
    /**
     * Index format not valid.
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.indexFormatNotValid = function () {
        return new InvalidFormatError('Index Format not valid. Expecting an Index serialized but found malformed data');
    };
    /**
     * IndexUUI format not valid.
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.indexUUIDFormatNotValid = function () {
        return new InvalidFormatError('IndexUUID Format not valid. Expecting an IndexUUID serialized but found malformed data');
    };
    /**
     * App format not valid.
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.appUUIDFormatNotValid = function () {
        return new InvalidFormatError('AppUUID Format not valid. Expecting an AppUUID serialized but found malformed data');
    };
    /**
     * Campaign representation not valid
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.campaignFormatNotValid = function () {
        return new InvalidFormatError("Campaign Format not valid. Expecting a Campaign serialized but found malformed data");
    };
    /**
     * Changes representation not valid
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.changesFormatNotValid = function () {
        return new InvalidFormatError("Changes Format not valid. Expecting a Changes serialized but found malformed data");
    };
    /**
     * Boost clause representation not valid
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.boostClauseFormatNotValid = function () {
        return new InvalidFormatError("Boost clause Format not valid. Expecting a Boost clause serialized but found malformed data");
    };
    /**
     * token uuid representation not valid
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.tokenUUIDFormatNotValid = function () {
        return new InvalidFormatError("Token UUID Format not valid. Expecting a TokenUUID serialized but found malformed data");
    };
    /**
     * User representation not valid
     *
     * @return {InvalidFormatError}
     */
    InvalidFormatError.userFormatNotValid = function () {
        return new InvalidFormatError("User Format not valid. Expecting a User serialized but found malformed data");
    };
    return InvalidFormatError;
}(ErrorWithMessage_1.ErrorWithMessage));
exports.InvalidFormatError = InvalidFormatError;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * ConnectError
 */
var ErrorWithMessage = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param message
     */
    function ErrorWithMessage(message) {
        this.message = message;
    }
    return ErrorWithMessage;
}());
exports.ErrorWithMessage = ErrorWithMessage;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Service constants
 */
exports.APISEARCH_REPOSITORY = "apisearch_repository";
exports.APISEARCH_STORE = "apisearch_store";
exports.APISEARCH_DISPATCHER = "apisearch_dispatcher";
exports.APISEARCH_UI = "apisearch_ui";


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Apisearch Dependency Injection Container
 */
var Container = /** @class */ (function () {
    function Container() {
        this.services = {};
    }
    /**
     * Get service
     *
     * @param id
     */
    Container.prototype.get = function (id) {
        if (this.services[id]) {
            return this.services[id];
        }
        throw new Error("Service with id (" + id + ") is not registered.");
    };
    /**
     * Register service
     *
     * @param id
     * @param serviceCallback
     */
    Container.prototype.register = function (id, serviceCallback) {
        this.services[id] = serviceCallback();
    };
    return Container;
}());
exports["default"] = new Container;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * filter constants
 */
exports.FILTER_MUST_ALL = 4;
exports.FILTER_MUST_ALL_WITH_LEVELS = 5;
exports.FILTER_AT_LEAST_ONE = 8;
exports.FILTER_EXCLUDE = 16;
exports.FILTER_PROMOTE = 32;
exports.FILTER_TYPE_FIELD = "field";
exports.FILTER_TYPE_RANGE = "range";
exports.FILTER_TYPE_DATE_RANGE = "date_range";
exports.FILTER_TYPE_GEO = "geo";
exports.FILTER_TYPE_QUERY = "query";
/**
 * Filter class
 */
var Filter = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param field
     * @param values
     * @param applicationType
     * @param filterType
     * @param filterTerms
     */
    function Filter(field, values, applicationType, filterType, filterTerms) {
        this.field = field;
        this.values = values;
        this.applicationType = applicationType;
        this.filterType = filterType;
        this.filterTerms = filterTerms;
    }
    /**
     * Get field
     *
     * @returns {string}
     */
    Filter.prototype.getField = function () {
        return this.field;
    };
    /**
     * Get values
     *
     * @returns {any}
     */
    Filter.prototype.getValues = function () {
        return this.values;
    };
    /**
     * Has value
     *
     * @param value
     *
     * @returns {boolean}
     */
    Filter.prototype.hasValue = function (value) {
        return typeof this.values[value] == "undefined";
    };
    /**
     * getApplicationType
     *
     * @returns {number}
     */
    Filter.prototype.getApplicationType = function () {
        return this.applicationType;
    };
    /**
     * Get filter type
     *
     * @return {string}
     */
    Filter.prototype.getFilterType = function () {
        return this.filterType;
    };
    /**
     * Get filter type
     *
     * @return {{}}
     */
    Filter.prototype.getFilterTerms = function () {
        return this.filterTerms;
    };
    /**
     * Create
     *
     * @param field
     * @param values
     * @param applicationType
     * @param filterType
     * @param filterTerms
     *
     * @return {Filter}
     */
    Filter.create = function (field, values, applicationType, filterType, filterTerms) {
        if (filterTerms === void 0) { filterTerms = []; }
        return new Filter(field, values, applicationType, filterType, filterTerms);
    };
    /**
     * To array
     *
     * @returns {Array}
     */
    Filter.prototype.toArray = function () {
        var filterAsArray = {};
        if (this.field != "uuid.type") {
            filterAsArray.field = this.field;
        }
        if (this.values.length > 0 ||
            Object.keys(this.values).length > 0) {
            filterAsArray.values = this.values;
        }
        if (this.applicationType != exports.FILTER_AT_LEAST_ONE) {
            filterAsArray.application_type = this.applicationType;
        }
        if (this.filterType != exports.FILTER_TYPE_FIELD) {
            filterAsArray.filter_type = this.filterType;
        }
        if (this.filterTerms.length > 0) {
            filterAsArray.filter_terms = this.filterTerms;
        }
        return filterAsArray;
    };
    /**
     * Create from array
     *
     * @param array
     *
     * @returns {Filter}
     */
    Filter.createFromArray = function (array) {
        array = JSON.parse(JSON.stringify(array));
        if (typeof array.field == "undefined") {
            array.field = "uuid.type";
        }
        if (typeof array.values == "undefined") {
            array.values = [];
        }
        if (typeof array.application_type == "undefined") {
            array.application_type = exports.FILTER_AT_LEAST_ONE;
        }
        if (typeof array.filter_type == "undefined") {
            array.filter_type = exports.FILTER_TYPE_FIELD;
        }
        if (typeof array.filter_terms == "undefined") {
            array.filter_terms = [];
        }
        return Filter.create(array.field, array.values, array.application_type, array.filter_type, array.filter_terms);
    };
    return Filter;
}());
exports.Filter = Filter;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var Hogan = __webpack_require__(96);
/**
 * Template
 */
var Template = /** @class */ (function (_super) {
    __extends(Template, _super);
    function Template() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Render template
         *
         * @param template
         * @param result
         *
         * @return {any}
         */
        _this.renderTemplate = function (template, result) {
            /**
             * Compile template using hogan.js
             */
            var compiledTemplate = Hogan.compile(template);
            var output = compiledTemplate.render(result);
            return {
                __html: output
            };
        };
        return _this;
    }
    /**
     * Render
     *
     * @return {any}
     */
    Template.prototype.render = function () {
        var props = this.props;
        var template = props.template;
        var data = props.data;
        var className = props.className;
        return (template)
            ? preact_1.h("div", { className: className, dangerouslySetInnerHTML: this.renderTemplate(template, data) })
            : null;
    };
    return Template;
}(preact_1.Component));
exports["default"] = Template;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var InvalidFormatError_1 = __webpack_require__(3);
var Coordinate_1 = __webpack_require__(15);
var ItemUUID_1 = __webpack_require__(11);
/**
 * Item class
 */
var Item = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param uuid
     * @param coordinate
     * @param metadata
     * @param indexedMetadata
     * @param searchableMetadata
     * @param exactMatchingMetadata
     * @param suggest
     */
    function Item(uuid, coordinate, metadata, indexedMetadata, searchableMetadata, exactMatchingMetadata, suggest) {
        this.metadata = {};
        this.indexedMetadata = {};
        this.searchableMetadata = {};
        this.exactMatchingMetadata = [];
        this.suggest = [];
        this.highlights = {};
        this.promoted = false;
        this.uuid = uuid;
        this.coordinate = coordinate;
        this.metadata = metadata;
        this.indexedMetadata = indexedMetadata;
        this.searchableMetadata = searchableMetadata;
        this.exactMatchingMetadata = exactMatchingMetadata;
        this.suggest = suggest;
    }
    /**
     * Create new Item
     *
     * @param uuid
     * @param metadata
     * @param indexedMetadata
     * @param searchableMetadata
     * @param exactMatchingMetadata
     * @param suggest
     * @returns {Item}
     */
    Item.create = function (uuid, metadata, indexedMetadata, searchableMetadata, exactMatchingMetadata, suggest) {
        if (metadata === void 0) { metadata = {}; }
        if (indexedMetadata === void 0) { indexedMetadata = {}; }
        if (searchableMetadata === void 0) { searchableMetadata = {}; }
        if (exactMatchingMetadata === void 0) { exactMatchingMetadata = []; }
        if (suggest === void 0) { suggest = []; }
        return new Item(uuid, null, metadata, indexedMetadata, searchableMetadata, exactMatchingMetadata, suggest);
    };
    /**
     * Create new located Item
     *
     * @param uuid
     * @param coordinate
     * @param metadata
     * @param indexedMetadata
     * @param searchableMetadata
     * @param exactMatchingMetadata
     * @param suggest
     * @returns {Item}
     */
    Item.createLocated = function (uuid, coordinate, metadata, indexedMetadata, searchableMetadata, exactMatchingMetadata, suggest) {
        if (metadata === void 0) { metadata = {}; }
        if (indexedMetadata === void 0) { indexedMetadata = {}; }
        if (searchableMetadata === void 0) { searchableMetadata = {}; }
        if (exactMatchingMetadata === void 0) { exactMatchingMetadata = []; }
        if (suggest === void 0) { suggest = []; }
        return new Item(uuid, coordinate, metadata, indexedMetadata, searchableMetadata, exactMatchingMetadata, suggest);
    };
    /**
     * Get uuid
     *
     * @returns ItemUUID
     */
    Item.prototype.getUUID = function () {
        return this.uuid;
    };
    /**
     * Get id
     *
     * @returns string
     */
    Item.prototype.getId = function () {
        return this.uuid.getId();
    };
    /**
     * Get type
     *
     * @returns string
     */
    Item.prototype.getType = function () {
        return this.uuid.getType();
    };
    /**
     * Get coordinate
     *
     * @returns Coordinate|null
     */
    Item.prototype.getCoordinate = function () {
        return this.coordinate;
    };
    /**
     * Get distance
     *
     * @returns int
     */
    Item.prototype.getDistance = function () {
        return this.distance;
    };
    /**
     * Get metadata
     *
     * @returns Array
     */
    Item.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set metadata
     *
     * @param metadata
     */
    Item.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
    };
    /**
     * Add metadata
     *
     * @param key
     * @param value
     */
    Item.prototype.addMetadata = function (key, value) {
        this.metadata[key] = value;
    };
    /**
     * Get indexed metadata
     *
     * @returns Array
     */
    Item.prototype.getIndexedMetadata = function () {
        return this.indexedMetadata;
    };
    /**
     * Set indexed metadata
     *
     * @param indexedMetadata
     */
    Item.prototype.setIndexedMetadata = function (indexedMetadata) {
        this.indexedMetadata = indexedMetadata;
    };
    /**
     * Add indexed metadata
     *
     * @param key
     * @param value
     */
    Item.prototype.addIndexedMetadata = function (key, value) {
        this.indexedMetadata[key] = value;
    };
    /**
     * Get searchable metadata
     *
     * @returns Array
     */
    Item.prototype.getSearchableMetadata = function () {
        return this.searchableMetadata;
    };
    /**
     * Set searchable metadata
     *
     * @param searchableMetadata
     */
    Item.prototype.setSearchableMetadata = function (searchableMetadata) {
        this.searchableMetadata = searchableMetadata;
    };
    /**
     * Add searchable metadata
     *
     * @param key
     * @param value
     */
    Item.prototype.addSearchableMetadata = function (key, value) {
        this.searchableMetadata[key] = value;
    };
    /**
     * Get exactMatching metadata
     *
     * @returns Array
     */
    Item.prototype.getExactMatchingMetadata = function () {
        return this.exactMatchingMetadata;
    };
    /**
     * Set exactMatching metadata
     *
     * @param exactMatchingMetadata
     */
    Item.prototype.setExactMatchingMetadata = function (exactMatchingMetadata) {
        this.exactMatchingMetadata = exactMatchingMetadata;
    };
    /**
     * Add exactMatching metadata
     *
     * @param value
     */
    Item.prototype.addExactMatchingMetadata = function (value) {
        this.exactMatchingMetadata.push(value);
    };
    /**
     * Get all metadata
     *
     * @returns {{}}
     */
    Item.prototype.getAllMetadata = function () {
        return tslib_1.__assign({}, this.metadata, this.indexedMetadata);
    };
    /**
     * Get
     *
     * @param key
     *
     * @returns mixed|null
     */
    Item.prototype.get = function (key) {
        var allMetadata = this.getAllMetadata();
        return (typeof allMetadata[key] != "undefined")
            ? allMetadata[key]
            : null;
    };
    /**
     * Get suggest
     *
     * @returns Array
     */
    Item.prototype.getSuggest = function () {
        return this.suggest;
    };
    /**
     * Get highlights
     *
     * @returns Array
     */
    Item.prototype.getHighlights = function () {
        return this.highlights;
    };
    /**
     * Get highlight
     *
     * @param key
     *
     * @return string|null
     */
    Item.prototype.getHighlight = function (key) {
        return (typeof this.highlights[key] != "undefined")
            ? this.highlights[key]
            : null;
    };
    /**
     * Is promoted
     *
     * @returns boolean
     */
    Item.prototype.isPromoted = function () {
        return this.promoted;
    };
    /**
     * Set score
     *
     * @param score
     *
     * @return {Item}
     */
    Item.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    /**
     * Get score
     *
     * @return {number}
     */
    Item.prototype.getScore = function () {
        return this.score;
    };
    /**
     * To array
     */
    Item.prototype.toArray = function () {
        var itemAsArray = {
            uuid: this.uuid.toArray()
        };
        if (this.coordinate instanceof Coordinate_1.Coordinate) {
            itemAsArray.coordinate = this.coordinate.toArray();
        }
        if (Object.keys(this.metadata).length > 0) {
            itemAsArray.metadata = this.metadata;
        }
        if (Object.keys(this.indexedMetadata).length > 0) {
            itemAsArray.indexed_metadata = this.indexedMetadata;
        }
        if (Object.keys(this.searchableMetadata).length > 0) {
            itemAsArray.searchable_metadata = this.searchableMetadata;
        }
        if (this.exactMatchingMetadata.length > 0) {
            itemAsArray.exact_matching_metadata = this.exactMatchingMetadata;
        }
        if (this.suggest.length > 0) {
            itemAsArray.suggest = this.suggest;
        }
        if (Object.keys(this.highlights).length > 0) {
            itemAsArray.highlights = this.highlights;
        }
        if (this.isPromoted()) {
            itemAsArray.is_promoted = true;
        }
        if (typeof this.distance != "undefined") {
            itemAsArray.distance = this.distance;
        }
        if (typeof this.score != "undefined") {
            itemAsArray.score = this.score;
        }
        return itemAsArray;
    };
    /**
     * Create from array
     *
     * @param array
     */
    Item.createFromArray = function (array) {
        array = JSON.parse(JSON.stringify(array));
        if (typeof array.uuid != "object") {
            throw InvalidFormatError_1.InvalidFormatError.itemUUIDRepresentationNotValid();
        }
        if (typeof array.coordinate != "undefined" &&
            typeof array.coordinate != "object") {
            throw InvalidFormatError_1.InvalidFormatError.coordinateFormatNotValid();
        }
        var item = (typeof array.coordinate == "object" &&
            array.coordinate != null)
            ? Item.createLocated(ItemUUID_1.ItemUUID.createFromArray(array.uuid), Coordinate_1.Coordinate.createFromArray(array.coordinate), ((typeof array.metadata == "undefined") ? {} : array.metadata), ((typeof array.indexed_metadata == "undefined") ? {} : array.indexed_metadata), ((typeof array.searchable_metadata == "undefined") ? {} : array.searchable_metadata), ((typeof array.exact_matching_metadata == "undefined") ? [] : array.exact_matching_metadata), ((typeof array.suggest == "undefined") ? [] : array.suggest))
            : Item.create(ItemUUID_1.ItemUUID.createFromArray(array.uuid), ((typeof array.metadata == "undefined") ? {} : array.metadata), ((typeof array.indexed_metadata == "undefined") ? {} : array.indexed_metadata), ((typeof array.searchable_metadata == "undefined") ? {} : array.searchable_metadata), ((typeof array.exact_matching_metadata == "undefined") ? [] : array.exact_matching_metadata), ((typeof array.suggest == "undefined") ? [] : array.suggest));
        if (typeof array.distance != "undefined" &&
            array.distance != null) {
            item.distance = array.distance;
        }
        if (typeof array.highlights == "object" &&
            array.distance != null) {
            item.highlights = array.highlights;
        }
        if (typeof array.is_promoted != "undefined" &&
            array.is_promoted != null) {
            item.promoted = array.is_promoted;
        }
        if (typeof array.score != "undefined" &&
            array.score != null) {
            item.score = array.score;
        }
        return item;
    };
    /**
     * Compose uuid
     *
     * @returns string
     */
    Item.prototype.composeUUID = function () {
        return this.uuid.composedUUID();
    };
    /**
     * Get path by field.
     *
     * @param field
     *
     * @returns {string}
     */
    Item.getPathByField = function (field) {
        return (["id", "type"].indexOf(field) > -1)
            ? "uuid." + field
            : "indexed_metadata." + field;
    };
    return Item;
}());
exports.Item = Item;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Widget
 */
var Widget = /** @class */ (function () {
    function Widget() {
    }
    return Widget;
}());
exports["default"] = Widget;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var InvalidFormatError_1 = __webpack_require__(3);
/**
 * ItemUUID class
 */
var ItemUUID = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param id
     * @param type
     */
    function ItemUUID(id, type) {
        this.id = id;
        this.type = type;
    }
    /**
     * Create composed UUID
     *
     * @param composedUUID
     *
     * @returns {ItemUUID}
     */
    ItemUUID.createByComposedUUID = function (composedUUID) {
        var parts = composedUUID.split("~");
        if (2 != parts.length) {
            throw InvalidFormatError_1.InvalidFormatError.composedItemUUIDNotValid();
        }
        return new ItemUUID(parts[0], parts[1]);
    };
    /**
     * Return id
     *
     * @returns {string}
     */
    ItemUUID.prototype.getId = function () {
        return this.id;
    };
    /**
     * Get type
     *
     * @returns {string}
     */
    ItemUUID.prototype.getType = function () {
        return this.type;
    };
    /**
     * To array
     *
     * @returns {{id: *, type: *}}
     */
    ItemUUID.prototype.toArray = function () {
        return {
            id: this.id,
            type: this.type
        };
    };
    /**
     * Create from array
     *
     * @param array {{id:string, type:string}}
     *
     * @return {ItemUUID}
     */
    ItemUUID.createFromArray = function (array) {
        array = JSON.parse(JSON.stringify(array));
        return new ItemUUID(array.id, array.type);
    };
    /**
     * Compose unique id
     *
     * @returns {string}
     */
    ItemUUID.prototype.composedUUID = function () {
        return this.id + "~" + this.type;
    };
    return ItemUUID;
}());
exports.ItemUUID = ItemUUID;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependenices
 */

const clone = __webpack_require__(100);
const typeOf = __webpack_require__(47);
const isPlainObject = __webpack_require__(106);

function cloneDeep(val, instanceClone) {
  switch (typeOf(val)) {
    case 'object':
      return cloneObjectDeep(val, instanceClone);
    case 'array':
      return cloneArrayDeep(val, instanceClone);
    default: {
      return clone(val);
    }
  }
}

function cloneObjectDeep(val, instanceClone) {
  if (typeof instanceClone === 'function') {
    return instanceClone(val);
  }
  if (instanceClone || isPlainObject(val)) {
    const res = new val.constructor();
    for (let key in val) {
      res[key] = cloneDeep(val[key], instanceClone);
    }
    return res;
  }
  return val;
}

function cloneArrayDeep(val, instanceClone) {
  const res = new val.constructor(val.length);
  for (let i = 0; i < val.length; i++) {
    res[i] = cloneDeep(val[i], instanceClone);
  }
  return res;
}

/**
 * Expose `cloneDeep`
 */

module.exports = cloneDeep;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var Apisearch_1 = __webpack_require__(52);
exports["default"] = Apisearch_1["default"];
tslib_1.__exportStar(__webpack_require__(76), exports);
tslib_1.__exportStar(__webpack_require__(77), exports);
tslib_1.__exportStar(__webpack_require__(46), exports);
tslib_1.__exportStar(__webpack_require__(37), exports);
tslib_1.__exportStar(__webpack_require__(4), exports);
tslib_1.__exportStar(__webpack_require__(78), exports);
tslib_1.__exportStar(__webpack_require__(79), exports);
tslib_1.__exportStar(__webpack_require__(3), exports);
tslib_1.__exportStar(__webpack_require__(38), exports);
tslib_1.__exportStar(__webpack_require__(39), exports);
tslib_1.__exportStar(__webpack_require__(40), exports);
tslib_1.__exportStar(__webpack_require__(80), exports);
tslib_1.__exportStar(__webpack_require__(81), exports);
tslib_1.__exportStar(__webpack_require__(23), exports);
tslib_1.__exportStar(__webpack_require__(29), exports);
tslib_1.__exportStar(__webpack_require__(82), exports);
tslib_1.__exportStar(__webpack_require__(30), exports);
tslib_1.__exportStar(__webpack_require__(32), exports);
tslib_1.__exportStar(__webpack_require__(31), exports);
tslib_1.__exportStar(__webpack_require__(83), exports);
tslib_1.__exportStar(__webpack_require__(15), exports);
tslib_1.__exportStar(__webpack_require__(9), exports);
tslib_1.__exportStar(__webpack_require__(11), exports);
tslib_1.__exportStar(__webpack_require__(43), exports);
tslib_1.__exportStar(__webpack_require__(33), exports);
tslib_1.__exportStar(__webpack_require__(18), exports);
tslib_1.__exportStar(__webpack_require__(7), exports);
tslib_1.__exportStar(__webpack_require__(14), exports);
tslib_1.__exportStar(__webpack_require__(84), exports);
tslib_1.__exportStar(__webpack_require__(34), exports);
tslib_1.__exportStar(__webpack_require__(35), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);
tslib_1.__exportStar(__webpack_require__(36), exports);
tslib_1.__exportStar(__webpack_require__(44), exports);
tslib_1.__exportStar(__webpack_require__(41), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(42), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var Coordinate_1 = __webpack_require__(15);
var ItemUUID_1 = __webpack_require__(11);
var Item_1 = __webpack_require__(9);
var User_1 = __webpack_require__(33);
var Aggregation_1 = __webpack_require__(18);
var Filter_1 = __webpack_require__(7);
var Filter_2 = __webpack_require__(7);
var Aggregation_2 = __webpack_require__(18);
var InvalidFormatError_1 = __webpack_require__(3);
var Filter_3 = __webpack_require__(7);
var ScoreStrategies_1 = __webpack_require__(34);
var SortBy_1 = __webpack_require__(19);
/**
 * Query constants
 */
exports.QUERY_DEFAULT_FROM = 0;
exports.QUERY_DEFAULT_PAGE = 1;
exports.QUERY_DEFAULT_SIZE = 10;
exports.QUERY_INFINITE_SIZE = 1000;
exports.NO_MIN_SCORE = 0.0;
/**
 * Query class
 */
var Query = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param queryText
     */
    function Query(queryText) {
        this.fields = [];
        this.universeFilters = {};
        this.filters = {};
        this.itemsPromoted = [];
        this.aggregations = {};
        this.resultsEnabled = true;
        this.aggregationsEnabled = true;
        this.suggestionsEnabled = false;
        this.highlightsEnabled = false;
        this.filterFields = [];
        this.minScore = exports.NO_MIN_SCORE;
        this.sortByInstance = SortBy_1.SortBy.create();
        this.filters._query = Filter_1.Filter.create("", [queryText], 0, Filter_3.FILTER_TYPE_QUERY);
    }
    /**
     * Created located
     *
     * @param coordinate
     * @param queryText
     * @param page
     * @param size
     *
     * @returns {Query}
     */
    Query.createLocated = function (coordinate, queryText, page, size) {
        if (page === void 0) { page = exports.QUERY_DEFAULT_PAGE; }
        if (size === void 0) { size = exports.QUERY_DEFAULT_SIZE; }
        var query = Query.create(queryText, page, size);
        query.coordinate = coordinate;
        return query;
    };
    /**
     * Create
     *
     * @param queryText
     * @param page
     * @param size
     *
     * @returns {Query}
     */
    Query.create = function (queryText, page, size) {
        if (page === void 0) { page = exports.QUERY_DEFAULT_PAGE; }
        if (size === void 0) { size = exports.QUERY_DEFAULT_SIZE; }
        page = Math.max(1, page);
        var query = new Query(queryText);
        query.from = (page - 1) * size;
        query.size = size;
        query.page = page;
        return query;
    };
    /**
     * Create match all
     *
     * @return {Query}
     */
    Query.createMatchAll = function () {
        return Query.create("", exports.QUERY_DEFAULT_PAGE, exports.QUERY_DEFAULT_SIZE);
    };
    /**
     * Create by UUID
     *
     * @param uuid
     *
     * @return {Query}
     */
    Query.createByUUID = function (uuid) {
        return Query.createByUUIDs(uuid);
    };
    /**
     * Create by UUIDs
     *
     * @param uuids
     *
     * @return {Query}
     */
    Query.createByUUIDs = function () {
        var uuids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            uuids[_i] = arguments[_i];
        }
        var ids = [];
        for (var i in uuids) {
            ids.push(uuids[i].composedUUID());
        }
        var query = Query.create("", exports.QUERY_DEFAULT_PAGE, ids.length)
            .disableAggregations()
            .disableSuggestions();
        query.filters._id = Filter_1.Filter.create("_id", ids, Filter_2.FILTER_AT_LEAST_ONE, Filter_2.FILTER_TYPE_FIELD);
        return query;
    };
    /**
     * set fields
     *
     * @param fields
     *
     * @return {Query}
     */
    Query.prototype.setFields = function (fields) {
        this.fields = fields;
        return this;
    };
    /**
     * get fields
     *
     * @return {string[]}
     */
    Query.prototype.getFields = function () {
        return this.fields;
    };
    /**
     * Filter universe by types
     *
     * @param values
     *
     * @return {Query}
     */
    Query.prototype.filterUniverseByTypes = function (values) {
        var _a;
        var fieldPath = Item_1.Item.getPathByField("type");
        if (values.length > 0) {
            this.universeFilters = tslib_1.__assign({}, this.universeFilters, (_a = {}, _a["type"] = Filter_1.Filter.create(fieldPath, values, Filter_2.FILTER_AT_LEAST_ONE, Filter_2.FILTER_TYPE_FIELD), _a));
        }
        else {
            delete this.universeFilters.type;
        }
        return this;
    };
    /**
     * Filter by types
     *
     * @param values
     * @param aggregate
     * @param aggregationSort
     *
     * @return {Query}
     */
    Query.prototype.filterByTypes = function (values, aggregate, aggregationSort) {
        if (aggregate === void 0) { aggregate = true; }
        if (aggregationSort === void 0) { aggregationSort = Aggregation_2.AGGREGATION_SORT_BY_COUNT_DESC; }
        var _a, _b;
        var fieldPath = Item_1.Item.getPathByField("type");
        if (values.length > 0) {
            this.filters = tslib_1.__assign({}, this.filters, (_a = {}, _a["type"] = Filter_1.Filter.create(fieldPath, values, Filter_2.FILTER_AT_LEAST_ONE, Filter_2.FILTER_TYPE_FIELD), _a));
        }
        else {
            delete this.filters.type;
        }
        if (aggregate) {
            this.aggregations = tslib_1.__assign({}, this.aggregations, (_b = {}, _b["type"] = Aggregation_1.Aggregation.create("type", fieldPath, Filter_2.FILTER_AT_LEAST_ONE, Filter_2.FILTER_TYPE_FIELD, [], aggregationSort), _b));
        }
        return this;
    };
    /**
     * Filter universe by ids
     *
     * @param values
     *
     * @return {Query}
     */
    Query.prototype.filterUniverseByIds = function (values) {
        var _a;
        var fieldPath = Item_1.Item.getPathByField("id");
        if (values.length > 0) {
            this.universeFilters = tslib_1.__assign({}, this.universeFilters, (_a = {}, _a["id"] = Filter_1.Filter.create(fieldPath, values, Filter_2.FILTER_AT_LEAST_ONE, Filter_2.FILTER_TYPE_FIELD), _a));
        }
        else {
            delete this.universeFilters.id;
        }
        return this;
    };
    /**
     * Filter by ids
     *
     * @param values
     *
     * @return {Query}
     */
    Query.prototype.filterByIds = function (values) {
        var _a;
        var fieldPath = Item_1.Item.getPathByField("id");
        if (values.length > 0) {
            this.filters = tslib_1.__assign({}, this.filters, (_a = {}, _a["id"] = Filter_1.Filter.create(fieldPath, values, Filter_2.FILTER_AT_LEAST_ONE, Filter_2.FILTER_TYPE_FIELD), _a));
        }
        else {
            delete this.filters.id;
        }
        return this;
    };
    /**
     * Filter universe by
     *
     * @param field
     * @param values
     * @param applicationType
     *
     * @return {Query}
     */
    Query.prototype.filterUniverseBy = function (field, values, applicationType) {
        if (applicationType === void 0) { applicationType = Filter_2.FILTER_AT_LEAST_ONE; }
        var _a;
        var fieldPath = Item_1.Item.getPathByField(field);
        if (values.length > 0) {
            this.universeFilters = tslib_1.__assign({}, this.universeFilters, (_a = {}, _a[field] = Filter_1.Filter.create(fieldPath, values, applicationType, Filter_2.FILTER_TYPE_FIELD), _a));
        }
        else {
            delete this.universeFilters[field];
        }
        return this;
    };
    /**
     * Filter by
     *
     * @param filterName
     * @param field
     * @param values
     * @param applicationType
     * @param aggregate
     * @param aggregationSort
     *
     * @return {Query}
     */
    Query.prototype.filterBy = function (filterName, field, values, applicationType, aggregate, aggregationSort) {
        if (applicationType === void 0) { applicationType = Filter_2.FILTER_AT_LEAST_ONE; }
        if (aggregate === void 0) { aggregate = true; }
        if (aggregationSort === void 0) { aggregationSort = Aggregation_2.AGGREGATION_SORT_BY_COUNT_DESC; }
        var _a;
        var fieldPath = Item_1.Item.getPathByField(field);
        if (values.length > 0) {
            this.filters = tslib_1.__assign({}, this.filters, (_a = {}, _a[filterName] = Filter_1.Filter.create(fieldPath, values, applicationType, Filter_2.FILTER_TYPE_FIELD), _a));
        }
        else {
            delete this.filters[filterName];
        }
        if (aggregate) {
            this.aggregateBy(filterName, field, applicationType, aggregationSort);
        }
        return this;
    };
    /**
     * Filter universe by range
     *
     * @param field
     * @param values
     * @param applicationType
     * @param rangeType
     *
     * @return {Query}
     */
    Query.prototype.filterUniverseByRange = function (field, values, applicationType, rangeType) {
        if (applicationType === void 0) { applicationType = Filter_2.FILTER_AT_LEAST_ONE; }
        if (rangeType === void 0) { rangeType = Filter_2.FILTER_TYPE_RANGE; }
        var _a;
        var fieldPath = Item_1.Item.getPathByField(field);
        if (values.length > 0) {
            this.universeFilters = tslib_1.__assign({}, this.universeFilters, (_a = {}, _a[field] = Filter_1.Filter.create(fieldPath, values, applicationType, rangeType), _a));
        }
        else {
            delete this.universeFilters[field];
        }
        return this;
    };
    /**
     * Filter universe by date range
     *
     * @param field
     * @param values
     * @param applicationType
     *
     * @return {Query}
     */
    Query.prototype.filterUniverseByDateRange = function (field, values, applicationType) {
        if (applicationType === void 0) { applicationType = Filter_2.FILTER_AT_LEAST_ONE; }
        return this.filterUniverseByRange(field, values, applicationType, Filter_2.FILTER_TYPE_DATE_RANGE);
    };
    /**
     * Filter by range
     *
     * @param filterName
     * @param field
     * @param options
     * @param values
     * @param applicationType
     * @param rangeType
     * @param aggregate
     * @param aggregationSort
     *
     * @return {Query}
     */
    Query.prototype.filterByRange = function (filterName, field, options, values, applicationType, rangeType, aggregate, aggregationSort) {
        if (applicationType === void 0) { applicationType = Filter_2.FILTER_AT_LEAST_ONE; }
        if (rangeType === void 0) { rangeType = Filter_2.FILTER_TYPE_RANGE; }
        if (aggregate === void 0) { aggregate = true; }
        if (aggregationSort === void 0) { aggregationSort = Aggregation_2.AGGREGATION_SORT_BY_COUNT_DESC; }
        var _a;
        var fieldPath = Item_1.Item.getPathByField(field);
        if (values.length !== 0) {
            this.filters = tslib_1.__assign({}, this.filters, (_a = {}, _a[filterName] = Filter_1.Filter.create(fieldPath, values, applicationType, rangeType), _a));
        }
        else {
            delete this.filters[filterName];
        }
        if (aggregate) {
            this.aggregateByRange(filterName, fieldPath, options, applicationType, rangeType, aggregationSort);
        }
        return this;
    };
    /**
     * Filter by date range
     *
     * @param filterName
     * @param field
     * @param options
     * @param values
     * @param applicationType
     * @param aggregate
     * @param aggregationSort
     *
     * @return {Query}
     */
    Query.prototype.filterByDateRange = function (filterName, field, options, values, applicationType, aggregate, aggregationSort) {
        if (applicationType === void 0) { applicationType = Filter_2.FILTER_AT_LEAST_ONE; }
        if (aggregate === void 0) { aggregate = true; }
        if (aggregationSort === void 0) { aggregationSort = Aggregation_2.AGGREGATION_SORT_BY_COUNT_DESC; }
        return this.filterByRange(filterName, field, options, values, applicationType, Filter_2.FILTER_TYPE_DATE_RANGE, aggregate, aggregationSort);
    };
    /**
     * Filter universe by location
     *
     * @param locationRange
     *
     * @return {Query}
     */
    Query.prototype.filterUniverseByLocation = function (locationRange) {
        var _a;
        this.universeFilters = tslib_1.__assign({}, this.universeFilters, (_a = {}, _a["coordinate"] = Filter_1.Filter.create("coordinate", locationRange.toArray(), Filter_2.FILTER_AT_LEAST_ONE, Filter_2.FILTER_TYPE_GEO), _a));
        return this;
    };
    /**
     * Set filter fields
     *
     * @param filterFields
     *
     * @return {Query}
     */
    Query.prototype.setFilterFields = function (filterFields) {
        this.filterFields = filterFields;
        return this;
    };
    /**
     * Get filter fields
     *
     * @return {string[]}
     */
    Query.prototype.getFilterFields = function () {
        return this.filterFields;
    };
    /**
     * Sort by
     *
     * @param sortBy
     *
     * @return {Query}
     */
    Query.prototype.sortBy = function (sortBy) {
        if (sortBy.isSortedByGeoDistance()) {
            if (!(this.coordinate instanceof Coordinate_1.Coordinate)) {
                throw InvalidFormatError_1.InvalidFormatError.querySortedByDistanceWithoutCoordinate();
            }
            sortBy.setCoordinate(this.coordinate);
        }
        this.sortByInstance = sortBy;
        return this;
    };
    /**
     * Aggregate by
     *
     * @param filterName
     * @param field
     * @param applicationType
     * @param aggregationSort
     * @param limit
     *
     * @return {Query}
     */
    Query.prototype.aggregateBy = function (filterName, field, applicationType, aggregationSort, limit) {
        if (aggregationSort === void 0) { aggregationSort = Aggregation_2.AGGREGATION_SORT_BY_COUNT_DESC; }
        if (limit === void 0) { limit = Aggregation_2.AGGREGATION_NO_LIMIT; }
        var _a;
        this.aggregations = tslib_1.__assign({}, this.aggregations, (_a = {}, _a[filterName] = Aggregation_1.Aggregation.create(filterName, Item_1.Item.getPathByField(field), applicationType, Filter_2.FILTER_TYPE_FIELD, [], aggregationSort, limit), _a));
        return this;
    };
    /**
     * Aggregate by range
     *
     * @param filterName
     * @param field
     * @param options
     * @param applicationType
     * @param rangeType
     * @param aggregationSort
     * @param limit
     *
     * @return {Query}
     */
    Query.prototype.aggregateByRange = function (filterName, field, options, applicationType, rangeType, aggregationSort, limit) {
        if (rangeType === void 0) { rangeType = Filter_2.FILTER_TYPE_RANGE; }
        if (aggregationSort === void 0) { aggregationSort = Aggregation_2.AGGREGATION_SORT_BY_COUNT_DESC; }
        if (limit === void 0) { limit = Aggregation_2.AGGREGATION_NO_LIMIT; }
        var _a;
        if (options.length === 0) {
            return this;
        }
        this.aggregations = tslib_1.__assign({}, this.aggregations, (_a = {}, _a[filterName] = Aggregation_1.Aggregation.create(filterName, Item_1.Item.getPathByField(field), applicationType, rangeType, options, aggregationSort, limit), _a));
        return this;
    };
    /**
     * Aggregate by date range
     *
     * @param filterName
     * @param field
     * @param options
     * @param applicationType
     * @param aggregationSort
     * @param limit
     *
     * @return {Query}
     */
    Query.prototype.aggregateByDateRange = function (filterName, field, options, applicationType, aggregationSort, limit) {
        if (aggregationSort === void 0) { aggregationSort = Aggregation_2.AGGREGATION_SORT_BY_COUNT_DESC; }
        if (limit === void 0) { limit = Aggregation_2.AGGREGATION_NO_LIMIT; }
        return this.aggregateByRange(filterName, field, options, applicationType, Filter_2.FILTER_TYPE_DATE_RANGE, aggregationSort, limit);
    };
    /**
     * Get aggregations
     *
     * @return {{}}
     */
    Query.prototype.getAggregations = function () {
        return this.aggregations;
    };
    /**
     * Get aggregation by name
     *
     * @param aggregationName
     *
     * @return {Aggregation|null}
     */
    Query.prototype.getAggregation = function (aggregationName) {
        return this.aggregations[aggregationName] instanceof Aggregation_1.Aggregation
            ? this.aggregations[aggregationName]
            : null;
    };
    /**
     * Get query text
     *
     * @return {string}
     */
    Query.prototype.getQueryText = function () {
        var filter = this.filters._query;
        return filter instanceof Filter_1.Filter
            ? filter.getValues()[0]
            : "";
    };
    /**
     * Get universe filters
     *
     * @return {{}}
     */
    Query.prototype.getUniverseFilters = function () {
        return this.universeFilters;
    };
    /**
     * Get universe filter by name
     *
     * @param filterName
     *
     * @return {Filter|null}
     */
    Query.prototype.getUniverseFilter = function (filterName) {
        return this.universeFilters[filterName] instanceof Filter_1.Filter
            ? this.universeFilters[filterName]
            : null;
    };
    /**
     * Get filters
     *
     * @return {{}}
     */
    Query.prototype.getFilters = function () {
        return this.filters;
    };
    /**
     * Get filter by name
     *
     * @param filterName
     *
     * @return {Filter|null}
     */
    Query.prototype.getFilter = function (filterName) {
        return this.filters[filterName] instanceof Filter_1.Filter
            ? this.filters[filterName]
            : null;
    };
    /**
     * Get filter by field
     *
     * @param fieldName
     *
     * @return {Filter|null}
     */
    Query.prototype.getFilterByField = function (fieldName) {
        var fieldPath = Item_1.Item.getPathByField(fieldName);
        for (var i in this.filters) {
            if (this.filters[i].getField() == fieldPath) {
                return this.filters[i];
            }
        }
        return null;
    };
    /**
     * Get sort by
     *
     * @return {SortBy}
     */
    Query.prototype.getSortBy = function () {
        return this.sortByInstance;
    };
    /**
     * Get from
     *
     * @return {number}
     */
    Query.prototype.getFrom = function () {
        return this.from;
    };
    /**
     * Get size
     *
     * @return {number}
     */
    Query.prototype.getSize = function () {
        return this.size;
    };
    /**
     * Get page
     *
     * @return {number}
     */
    Query.prototype.getPage = function () {
        return this.page;
    };
    /**
     * Enable results
     *
     * @return {Query}
     */
    Query.prototype.enableResults = function () {
        this.resultsEnabled = true;
        return this;
    };
    /**
     * Disable results
     *
     * @return {Query}
     */
    Query.prototype.disableResults = function () {
        this.resultsEnabled = false;
        return this;
    };
    /**
     * Are results enabled
     *
     * @return {boolean}
     */
    Query.prototype.areResultsEnabled = function () {
        return this.resultsEnabled;
    };
    /**
     * Enable aggregations
     *
     * @return {Query}
     */
    Query.prototype.enableAggregations = function () {
        this.aggregationsEnabled = true;
        return this;
    };
    /**
     * Disable aggregations
     *
     * @return {Query}
     */
    Query.prototype.disableAggregations = function () {
        this.aggregationsEnabled = false;
        return this;
    };
    /**
     * Are aggregations enabled
     *
     * @return {boolean}
     */
    Query.prototype.areAggregationsEnabled = function () {
        return this.aggregationsEnabled;
    };
    /**
     * Enable suggestions
     *
     * @return {Query}
     */
    Query.prototype.enableSuggestions = function () {
        this.suggestionsEnabled = true;
        return this;
    };
    /**
     * Disable suggestions
     *
     * @return {Query}
     */
    Query.prototype.disableSuggestions = function () {
        this.suggestionsEnabled = false;
        return this;
    };
    /**
     * Are suggestions enabled
     *
     * @return {boolean}
     */
    Query.prototype.areSuggestionsEnabled = function () {
        return this.suggestionsEnabled;
    };
    /**
     * Enable highlights
     *
     * @return {Query}
     */
    Query.prototype.enableHighlights = function () {
        this.highlightsEnabled = true;
        return this;
    };
    /**
     * Disable highlights
     *
     * @return {Query}
     */
    Query.prototype.disableHighlights = function () {
        this.highlightsEnabled = false;
        return this;
    };
    /**
     * Are highlights enabled
     *
     * @return {boolean}
     */
    Query.prototype.areHighlightsEnabled = function () {
        return this.highlightsEnabled;
    };
    /**
     * Promote uuid
     *
     * @param itemUUID
     *
     * @return {Query}
     */
    Query.prototype.promoteUUID = function (itemUUID) {
        this
            .itemsPromoted
            .push(itemUUID);
        return this;
    };
    /**
     * Promote UUIDs
     *
     * @param uuids
     *
     * @return {Query}
     */
    Query.prototype.promoteUUIDs = function () {
        var uuids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            uuids[_i] = arguments[_i];
        }
        this.itemsPromoted = uuids;
        return this;
    };
    /**
     * Get promoted UUIDs
     *
     * @return {ItemUUID[]}
     */
    Query.prototype.getItemsPromoted = function () {
        return this.itemsPromoted;
    };
    /**
     * Exclude id
     *
     * @param itemUUID
     *
     * @return {Query}
     */
    Query.prototype.excludeUUID = function (itemUUID) {
        this.excludeUUIDs(itemUUID);
        return this;
    };
    /**
     * Exclude UUIDs
     *
     * @param uuids
     *
     * @return {Query}
     */
    Query.prototype.excludeUUIDs = function () {
        var uuids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            uuids[_i] = arguments[_i];
        }
        var _a;
        this.filters = tslib_1.__assign({}, this.filters, (_a = {}, _a["excluded_ids"] = Filter_1.Filter.create("_id", uuids.map(function (uuid) { return uuid.composedUUID(); }), Filter_2.FILTER_EXCLUDE, Filter_2.FILTER_TYPE_FIELD), _a));
        return this;
    };
    /**
     * Get score strategies
     *
     * @return {ScoreStrategies}
     */
    Query.prototype.getScoreStrategies = function () {
        return this.scoreStrategies;
    };
    /**
     * Set score strategies
     *
     * @param scoreStrategies
     */
    Query.prototype.setScoreStrategies = function (scoreStrategies) {
        this.scoreStrategies = scoreStrategies;
        return this;
    };
    /**
     * Get fuzziness
     *
     * @return any
     */
    Query.prototype.getFuzziness = function () {
        return this.fuzziness;
    };
    /**
     * Set fuzziness
     *
     * @param fuzziness
     *
     * @return {Query}
     */
    Query.prototype.setFuzziness = function (fuzziness) {
        this.fuzziness = fuzziness;
        return this;
    };
    /**
     * Set auto fuzziness
     *
     * @return {Query}
     */
    Query.prototype.setAutoFuzziness = function () {
        this.fuzziness = 'AUTO';
        return this;
    };
    /**
     * Get min score
     *
     * @return any
     */
    Query.prototype.getMinScore = function () {
        return this.minScore;
    };
    /**
     * Set min score
     *
     * @param minScore
     *
     * @return {Query}
     */
    Query.prototype.setMinScore = function (minScore) {
        this.minScore = minScore;
        return this;
    };
    /**
     * By user
     *
     * @param user
     *
     * @return {Query}
     */
    Query.prototype.byUser = function (user) {
        this.user = user;
        return this;
    };
    /**
     * By anyone
     *
     * @return {null}
     */
    Query.prototype.anonymously = function () {
        this.user = null;
        return null;
    };
    /**
     * Get user
     *
     * @return {User}
     */
    Query.prototype.getUser = function () {
        return this.user;
    };
    /**
     * To array
     *
     * @return {any}
     */
    Query.prototype.toArray = function () {
        var array = {};
        if (this.getQueryText() !== "") {
            array.q = this.getQueryText();
        }
        if (this.coordinate instanceof Coordinate_1.Coordinate) {
            array.coordinate = this.coordinate.toArray();
        }
        /**
         * Fields
         */
        if (this.fields instanceof Array &&
            this.fields.length > 0) {
            array.fields = this.fields;
        }
        /**
         * Universe Filters
         */
        if (Object.keys(this.universeFilters).length) {
            array.universe_filters = {};
            for (var i in this.universeFilters) {
                var universeFilter = this.universeFilters[i];
                array.universe_filters[i] = universeFilter.toArray();
            }
        }
        /**
         * Filters
         */
        if (this.filters instanceof Object &&
            Object.keys(this.filters).length) {
            array.filters = {};
            for (var i in this.filters) {
                var filter = this.filters[i];
                if (filter.getFilterType() !== Filter_3.FILTER_TYPE_QUERY) {
                    array.filters[i] = filter.toArray();
                }
            }
        }
        /**
         * Aggregations
         */
        if (this.aggregations instanceof Object &&
            Object.keys(this.aggregations).length) {
            array.aggregations = {};
            for (var i in this.aggregations) {
                var aggregation = this.aggregations[i];
                array.aggregations[i] = aggregation.toArray();
            }
        }
        /**
         * Sort
         */
        var sort = this.sortByInstance.toArray();
        if (Object.keys(sort).length) {
            array.sort = sort;
        }
        /**
         * Page
         */
        var page = this.page;
        if (page !== exports.QUERY_DEFAULT_PAGE) {
            array.page = page;
        }
        /**
         * Size
         */
        var size = this.size;
        if (size !== exports.QUERY_DEFAULT_SIZE) {
            array.size = size;
        }
        /**
         * Booleans
         */
        if (this.resultsEnabled === false) {
            array.results_enabled = false;
        }
        if (this.suggestionsEnabled === true) {
            array.suggestions_enabled = true;
        }
        if (this.highlightsEnabled === true) {
            array.highlights_enabled = true;
        }
        if (this.aggregationsEnabled === false) {
            array.aggregations_enabled = false;
        }
        /**
         * Filter fields
         */
        if (this.filterFields instanceof Array &&
            this.filterFields.length > 0) {
            array.filter_fields = this.filterFields;
        }
        /**
         * Score strategies
         */
        if (this.scoreStrategies instanceof ScoreStrategies_1.ScoreStrategies) {
            var scoreStrategiesAsArray = this.scoreStrategies.toArray();
            if (Object.keys(scoreStrategiesAsArray).length > 0) {
                array.score_strategies = scoreStrategiesAsArray;
            }
        }
        if (this.fuzziness !== null) {
            array.fuzziness = this.fuzziness;
        }
        /**
         * Min score
         */
        var minScore = this.minScore;
        if (minScore !== exports.NO_MIN_SCORE) {
            array.min_score = minScore;
        }
        /**
         * User
         */
        if (this.user instanceof User_1.User) {
            var userAsArray = this.user.toArray();
            if (Object.keys(userAsArray).length > 0) {
                array.user = userAsArray;
            }
        }
        /**
         * items promoted
         */
        if (this.itemsPromoted.length > 0) {
            array.items_promoted = [];
            for (var i in this.itemsPromoted) {
                array
                    .items_promoted
                    .push(this.itemsPromoted[i].toArray());
            }
        }
        return array;
    };
    /**
     * Create from array
     *
     * @param array
     *
     * @returns {Query}
     */
    Query.createFromArray = function (array) {
        var query = array.coordinate instanceof Object
            ? Query.createLocated(Coordinate_1.Coordinate.createFromArray(array.coordinate), array.q ? array.q : "", array.page ? array.page : exports.QUERY_DEFAULT_PAGE, array.size ? array.size : exports.QUERY_DEFAULT_SIZE)
            : Query.create(array.q ? array.q : "", array.page ? array.page : exports.QUERY_DEFAULT_PAGE, array.size ? array.size : exports.QUERY_DEFAULT_SIZE);
        /**
         * Fields
         */
        query.fields = array.fields instanceof Array
            ? array.fields
            : [];
        /**
         * Aggregations
         */
        var aggregationsAsArray = typeof array.aggregations === typeof {}
            ? array.aggregations
            : {};
        for (var i in aggregationsAsArray) {
            query.aggregations[i] = Aggregation_1.Aggregation.createFromArray(aggregationsAsArray[i]);
        }
        /**
         * Sort
         */
        var sortAsArray = typeof array.sort === typeof {}
            ? array.sort
            : {};
        if (Object.keys(sortAsArray).length > 0) {
            query.sortByInstance = SortBy_1.SortBy.createFromArray(sortAsArray);
        }
        /**
         * Filters
         */
        var filtersAsArray = typeof array.filters === typeof {}
            ? array.filters
            : {};
        for (var i in filtersAsArray) {
            query.filters[i] = Filter_1.Filter.createFromArray(filtersAsArray[i]);
        }
        /**
         * Universe Filters
         */
        var universeFiltersAsArray = typeof array.universe_filters === typeof {}
            ? array.universe_filters
            : {};
        for (var i in universeFiltersAsArray) {
            query.universeFilters[i] = Filter_1.Filter.createFromArray(universeFiltersAsArray[i]);
        }
        /**
         * Booleans
         */
        query.resultsEnabled = typeof array.results_enabled === "boolean"
            ? array.results_enabled
            : true;
        query.suggestionsEnabled = typeof array.suggestions_enabled === "boolean"
            ? array.suggestions_enabled
            : false;
        query.aggregationsEnabled = typeof array.aggregations_enabled === "boolean"
            ? array.aggregations_enabled
            : true;
        query.highlightsEnabled = typeof array.highlights_enabled === "boolean"
            ? array.highlights_enabled
            : false;
        query.fuzziness = array.fuzziness;
        query.minScore = array.min_score ? array.min_score : exports.NO_MIN_SCORE;
        /**
         * Items promoted
         */
        var itemsPromotedAsArray = typeof array.items_promoted === typeof {}
            ? array.items_promoted
            : {};
        for (var i in itemsPromotedAsArray) {
            query
                .itemsPromoted
                .push(ItemUUID_1.ItemUUID.createFromArray(itemsPromotedAsArray[i]));
        }
        /**
         * Filter fields
         */
        query.filterFields = array.filter_fields instanceof Array
            ? array.filter_fields
            : [];
        query.scoreStrategies = array.score_strategies instanceof Object
            ? ScoreStrategies_1.ScoreStrategies.createFromArray(array.score_strategies)
            : null;
        query.user = array.user instanceof Object
            ? User_1.User.createFromArray(array.user)
            : null;
        return query;
    };
    return Query;
}());
exports.Query = Query;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var InvalidFormatError_1 = __webpack_require__(3);
/**
 * Coordinate Type cast
 * @param coordinate
 */
var Coordinate = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {number} lat
     * @param {number} lon
     */
    function Coordinate(lat, lon) {
        this.lat = lat;
        this.lon = lon;
    }
    /**
     * Get latitude
     *
     * @return float
     */
    Coordinate.prototype.getLatitude = function () {
        return this.lat;
    };
    /**
     * Get longitude
     *
     * @return float
     */
    Coordinate.prototype.getLongitude = function () {
        return this.lon;
    };
    /**
     * To array
     *
     * @return {{lat: number, lon: number}}
     */
    Coordinate.prototype.toArray = function () {
        return {
            lat: this.lat,
            lon: this.lon
        };
    };
    /**
     * Create from array
     *
     * @param array
     *
     * @return Coordinate
     *
     * @throws InvalidFormatError
     */
    Coordinate.createFromArray = function (array) {
        if (typeof array.lat == "undefined" ||
            typeof array.lon == "undefined") {
            throw InvalidFormatError_1.InvalidFormatError.coordinateFormatNotValid();
        }
        return new Coordinate(array.lat, array.lon);
    };
    return Coordinate;
}());
exports.Coordinate = Coordinate;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(2);
var normalizeHeaderName = __webpack_require__(58);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(25);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(25);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Filter_1 = __webpack_require__(7);
/**
 * Aggregation constants
 */
exports.AGGREGATION_SORT_BY_COUNT_ASC = ["_count", "asc"];
exports.AGGREGATION_SORT_BY_COUNT_DESC = ["_count", "desc"];
exports.AGGREGATION_SORT_BY_NAME_ASC = ["_term", "asc"];
exports.AGGREGATION_SORT_BY_NAME_DESC = ["_term", "desc"];
exports.AGGREGATION_NO_LIMIT = 0;
/**
 * Aggregation class
 */
var Aggregation = /** @class */ (function () {
    /**
     * Construct
     *
     * @param name
     * @param field
     * @param applicationType
     * @param filterType
     * @param subgroup
     * @param sort
     * @param limit
     */
    function Aggregation(name, field, applicationType, filterType, subgroup, sort, limit) {
        this.subgroup = [];
        this.name = name;
        this.field = field;
        this.applicationType = applicationType;
        this.filterType = filterType;
        this.subgroup = subgroup;
        this.sort = sort;
        this.limit = limit;
    }
    /**
     * Get name
     *
     * @returns {string}
     */
    Aggregation.prototype.getName = function () {
        return this.name;
    };
    /**
     * Get field
     *
     * @returns {string}
     */
    Aggregation.prototype.getField = function () {
        return this.field;
    };
    /**
     * getApplicationType
     *
     * @returns {number}
     */
    Aggregation.prototype.getApplicationType = function () {
        return this.applicationType;
    };
    /**
     * Get filter type
     *
     * @return {string}
     */
    Aggregation.prototype.getFilterType = function () {
        return this.filterType;
    };
    /**
     * Get subgroup
     *
     * @return {[]}
     */
    Aggregation.prototype.getSubgroup = function () {
        return this.subgroup;
    };
    /**
     * Get sort
     *
     * @return {[]}
     */
    Aggregation.prototype.getSort = function () {
        return this.sort;
    };
    /**
     * Get limit
     *
     * @return {number}
     */
    Aggregation.prototype.getLimit = function () {
        return this.limit;
    };
    /**
     * Create
     *
     * @param name
     * @param field
     * @param applicationType
     * @param filterType
     * @param subgroup
     * @param sort
     * @param limit
     *
     * @returns {Aggregation}
     */
    Aggregation.create = function (name, field, applicationType, filterType, subgroup, sort, limit) {
        if (subgroup === void 0) { subgroup = []; }
        if (sort === void 0) { sort = exports.AGGREGATION_SORT_BY_COUNT_DESC; }
        if (limit === void 0) { limit = exports.AGGREGATION_NO_LIMIT; }
        return new Aggregation(name, field, applicationType, filterType, subgroup, sort, limit);
    };
    /**
     * To array
     *
     * @returns {Array}
     */
    Aggregation.prototype.toArray = function () {
        var aggregationAsArray = {
            name: this.name
        };
        if (this.field != "uuid.type") {
            aggregationAsArray.field = this.field;
        }
        if (this.applicationType != Filter_1.FILTER_AT_LEAST_ONE) {
            aggregationAsArray.application_type = this.applicationType;
        }
        if (this.filterType != Filter_1.FILTER_TYPE_FIELD) {
            aggregationAsArray.filter_type = this.filterType;
        }
        if (this.subgroup.length > 0) {
            aggregationAsArray.subgroup = this.subgroup;
        }
        if (JSON.stringify(this.sort) !== JSON.stringify(exports.AGGREGATION_SORT_BY_COUNT_DESC)) {
            aggregationAsArray.sort = this.sort;
        }
        if (this.limit != exports.AGGREGATION_NO_LIMIT) {
            aggregationAsArray.limit = this.limit;
        }
        return aggregationAsArray;
    };
    /**
     * Create from array
     *
     * @param array
     *
     * @returns {Aggregation}
     */
    Aggregation.createFromArray = function (array) {
        array = JSON.parse(JSON.stringify(array));
        if (typeof array.field == "undefined") {
            array.field = "uuid.type";
        }
        if (typeof array.application_type == "undefined") {
            array.application_type = Filter_1.FILTER_AT_LEAST_ONE;
        }
        if (typeof array.filter_type == "undefined") {
            array.filter_type = Filter_1.FILTER_TYPE_FIELD;
        }
        if (typeof array.subgroup == "undefined") {
            array.subgroup = [];
        }
        if (typeof array.sort == "undefined") {
            array.sort = exports.AGGREGATION_SORT_BY_COUNT_DESC;
        }
        if (typeof array.limit == "undefined") {
            array.limit = exports.AGGREGATION_NO_LIMIT;
        }
        return Aggregation.create(array.name, array.field, array.application_type, array.filter_type, array.subgroup, array.sort, array.limit);
    };
    return Aggregation;
}());
exports.Aggregation = Aggregation;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Item_1 = __webpack_require__(9);
/**
 export * Sort by constants
 */
exports.SORT_BY_TYPE_FIELD = 1;
exports.SORT_BY_TYPE_NESTED = 2;
exports.SORT_BY_ASC = "asc";
exports.SORT_BY_DESC = "desc";
exports.SORT_BY_MODE_AVG = "avg";
exports.SORT_BY_MODE_SUM = "sum";
exports.SORT_BY_MODE_MIN = "min";
exports.SORT_BY_MODE_MAX = "max";
exports.SORT_BY_MODE_MEDIAN = "median";
exports.SORT_BY_SCORE = {
    _score: {
        order: exports.SORT_BY_ASC
    }
};
exports.SORT_BY_RANDOM = {
    random: {
        order: exports.SORT_BY_ASC
    }
};
exports.SORT_BY_AL_TUN_TUN = exports.SORT_BY_RANDOM;
exports.SORT_BY_ID_ASC = {
    "uuid.id": {
        order: exports.SORT_BY_ASC
    }
};
exports.SORT_BY_ID_DESC = {
    "uuid.id": {
        order: exports.SORT_BY_DESC
    }
};
exports.SORT_BY_TYPE_ASC = {
    "uuid.type": {
        order: exports.SORT_BY_ASC
    }
};
exports.SORT_BY_TYPE_DESC = {
    "uuid.type": {
        order: exports.SORT_BY_DESC
    }
};
exports.SORT_BY_LOCATION_KM_ASC = {
    _geo_distance: {
        order: exports.SORT_BY_ASC,
        unit: "km"
    }
};
exports.SORT_BY_LOCATION_MI_ASC = {
    _geo_distance: {
        order: exports.SORT_BY_DESC,
        unit: "mi"
    }
};
var Coordinate_1 = __webpack_require__(15);
var Filter_1 = __webpack_require__(7);
/**
 * ScoreStrategy
 */
var SortBy = /** @class */ (function () {
    function SortBy() {
        this.sortsBy = [];
    }
    /**
     * Create
     *
     * @return {SortBy}
     */
    SortBy.create = function () {
        return new SortBy;
    };
    /**
     * Sort By fields values
     *
     * @param shortSortByElements
     *
     * @return {SortBy}
     */
    SortBy.byFieldsValues = function (shortSortByElements) {
        var sortBy = SortBy.create();
        for (var key in shortSortByElements) {
            sortBy.byFieldValue(key, shortSortByElements[key]);
        }
        return sortBy;
    };
    /**
     * All
     *
     * @return {Array}
     */
    SortBy.prototype.all = function () {
        return this.sortsBy.length > 0
            ? this.sortsBy
            : [exports.SORT_BY_SCORE];
    };
    /**
     * Sort by value
     *
     * @param value
     *
     * @return {SortBy}
     */
    SortBy.prototype.byValue = function (value) {
        if (exports.SORT_BY_SCORE != value &&
            exports.SORT_BY_RANDOM != value) {
            if (typeof value.type == "undefined") {
                value.type = exports.SORT_BY_TYPE_FIELD;
            }
        }
        if (exports.SORT_BY_SCORE != value) {
            this.sortsBy.push(value);
        }
        return this;
    };
    /**
     * Sort by field value
     *
     * @param field
     * @param order
     *
     * @return {SortBy}
     */
    SortBy.prototype.byFieldValue = function (field, order) {
        var object = {
            type: exports.SORT_BY_TYPE_FIELD
        };
        object["indexed_metadata." + field] = {
            order: order
        };
        this.sortsBy.push(object);
        return this;
    };
    /**
     * Sort by nested field
     *
     * @param field
     * @param order
     * @param mode
     *
     * @return {SortBy}
     */
    SortBy.prototype.byNestedField = function (field, order, mode) {
        if (mode === void 0) { mode = exports.SORT_BY_MODE_AVG; }
        var object = {
            type: exports.SORT_BY_TYPE_NESTED,
            mode: mode
        };
        object["indexed_metadata." + field] = {
            order: order
        };
        this.sortsBy.push(object);
        return this;
    };
    /**
     * Sort by nested field and filter
     *
     * @param field
     * @param order
     * @param filter
     * @param mode
     *
     * @return {SortBy}
     */
    SortBy.prototype.byNestedFieldAndFilter = function (field, order, filter, mode) {
        if (mode === void 0) { mode = exports.SORT_BY_MODE_AVG; }
        var fieldPath = Item_1.Item.getPathByField(filter.getField());
        var filterAsArray = filter.toArray();
        filterAsArray.field = fieldPath;
        filter = Filter_1.Filter.createFromArray(filterAsArray);
        var object = {
            type: exports.SORT_BY_TYPE_NESTED,
            mode: mode,
            filter: filter
        };
        object["indexed_metadata." + field] = {
            order: order
        };
        this.sortsBy.push(object);
        return this;
    };
    /**
     * Is sorted by geo distance
     *
     * @return {boolean}
     */
    SortBy.prototype.isSortedByGeoDistance = function () {
        for (var i in this.sortsBy) {
            if (typeof this.sortsBy[i]._geo_distance === typeof {}) {
                return true;
            }
        }
        return false;
    };
    /**
     * Set coordinate
     *
     * @param coordinate
     *
     * @return {SortBy}
     */
    SortBy.prototype.setCoordinate = function (coordinate) {
        for (var i in this.sortsBy) {
            if (typeof this.sortsBy[i]._geo_distance === typeof {}) {
                this.sortsBy[i]._geo_distance.coordinate = coordinate;
            }
        }
        return this;
    };
    /**
     * Has random sort
     *
     * @return {boolean}
     */
    SortBy.prototype.hasRandomSort = function () {
        for (var i in this.sortsBy) {
            if (JSON.stringify(this.sortsBy[i]) === JSON.stringify(exports.SORT_BY_RANDOM)) {
                return true;
            }
        }
        return false;
    };
    /**
     * To array
     *
     * @return {[]}
     */
    SortBy.prototype.toArray = function () {
        var copySortBy = this.copy();
        var sortsByAsArray = copySortBy.sortsBy;
        for (var i in sortsByAsArray) {
            if (sortsByAsArray[i].type == exports.SORT_BY_TYPE_FIELD) {
                delete sortsByAsArray[i].type;
            }
            if (typeof sortsByAsArray[i].filter === typeof {} &&
                sortsByAsArray[i].filter != null) {
                sortsByAsArray[i].filter = sortsByAsArray[i].filter.toArray();
            }
            if (typeof sortsByAsArray[i]._geo_distance === typeof {} &&
                sortsByAsArray[i]._geo_distance !== null &&
                sortsByAsArray[i]._geo_distance.coordinate instanceof Coordinate_1.Coordinate) {
                sortsByAsArray[i]._geo_distance.coordinate = sortsByAsArray[i]._geo_distance.coordinate.toArray();
            }
        }
        return sortsByAsArray;
    };
    /**
     * Create from array
     *
     * @param array
     *
     * @returns {SortBy}
     */
    SortBy.createFromArray = function (array) {
        var innerArray = JSON.parse(JSON.stringify(array));
        var sortBy = SortBy.create();
        for (var i in innerArray) {
            var element = innerArray[i];
            if (JSON.stringify(element) !== JSON.stringify(exports.SORT_BY_RANDOM) &&
                JSON.stringify(element) !== JSON.stringify(exports.SORT_BY_SCORE)) {
                if (typeof element.type == "undefined") {
                    element.type = exports.SORT_BY_TYPE_FIELD;
                }
            }
            if (typeof element.filter === typeof {} &&
                element.filter != null) {
                element.filter = Filter_1.Filter.createFromArray(element.filter);
            }
            if (typeof element._geo_distance === typeof {} &&
                element._geo_distance != null &&
                typeof element._geo_distance.coordinate === typeof {}) {
                element._geo_distance.coordinate = Coordinate_1.Coordinate.createFromArray(element._geo_distance.coordinate);
            }
            sortBy.sortsBy.push(element);
        }
        return sortBy;
    };
    /**
     * Make a copy of this
     *
     * @returns {SortBy}
     */
    SortBy.prototype.copy = function () {
        var newSortBy = SortBy.create();
        for (var i in this.sortsBy) {
            var sortBy = this.sortsBy[i];
            var sortByAsArray = JSON.parse(JSON.stringify(sortBy));
            if (typeof sortBy.filter === typeof {} &&
                sortBy.filter != null) {
                sortByAsArray.filter = Filter_1.Filter.createFromArray(sortBy.filter.toArray());
            }
            if (typeof sortBy._geo_distance === typeof {} &&
                sortBy._geo_distance != null &&
                typeof sortBy._geo_distance.coordinate == typeof {}) {
                sortByAsArray._geo_distance.coordinate = Coordinate_1.Coordinate.createFromArray(sortBy._geo_distance.coordinate.toArray());
            }
            newSortBy.sortsBy.push(sortByAsArray);
        }
        return newSortBy;
    };
    return SortBy;
}());
exports.SortBy = SortBy;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Item_1 = __webpack_require__(9);
var Query_1 = __webpack_require__(14);
var ResultAggregations_1 = __webpack_require__(21);
/**
 * Result class
 */
var Result = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param query
     * @param totalItems
     * @param totalHits
     */
    function Result(query, totalItems, totalHits) {
        this.items = [];
        this.suggests = [];
        this.query = query;
        this.totalItems = totalItems;
        this.totalHits = totalHits;
    }
    /**
     * Create
     *
     * @param query
     * @param totalItems
     * @param totalHits
     * @param aggregations
     * @param suggests
     * @param items
     *
     * @returns {Result}
     */
    Result.create = function (query, totalItems, totalHits, aggregations, suggests, items) {
        var result = new Result(query, totalItems, totalHits);
        result.aggregations = aggregations;
        result.suggests = suggests;
        result.items = items;
        return result;
    };
    /**
     * Add item
     *
     * @param item
     */
    Result.prototype.addItem = function (item) {
        this.items.push(item);
    };
    /**
     * Get items
     *
     * @return {Item[]}
     */
    Result.prototype.getItems = function () {
        return this.items;
    };
    /**
     * Get items grouped by types
     *
     * @return {any[]}
     */
    Result.prototype.getItemsGroupedByTypes = function () {
        if (this.itemsGroupedByTypeCache instanceof Object &&
            Object.keys(this.itemsGroupedByTypeCache).length > 0) {
            return this.itemsGroupedByTypeCache;
        }
        var itemsGroupedByTypes = {};
        for (var i in this.items) {
            var item = this.items[i];
            if (!(itemsGroupedByTypes[item.getType()] instanceof Array)) {
                itemsGroupedByTypes[item.getType()] = [];
            }
            itemsGroupedByTypes[item.getType()].push(item);
        }
        this.itemsGroupedByTypeCache = itemsGroupedByTypes;
        return itemsGroupedByTypes;
    };
    /**
     * Get items by type
     *
     * @param type
     *
     * @return {Array}
     */
    Result.prototype.getItemsByType = function (type) {
        var itemsGroupedByTypes = this.getItemsGroupedByTypes();
        return itemsGroupedByTypes[type] == null
            ? []
            : itemsGroupedByTypes[type];
    };
    /**
     * Get items by types
     *
     * @param types
     */
    Result.prototype.getItemsByTypes = function (types) {
        return this.items.filter(function (item) { return types.indexOf(item.getType()) >= 0; });
    };
    /**
     * Get first item
     *
     * @return {Item}
     */
    Result.prototype.getFirstItem = function () {
        return this.items.length > 0
            ? this.items[0]
            : null;
    };
    /**
     * Set aggregations
     *
     * @param aggregations
     */
    Result.prototype.setAggregations = function (aggregations) {
        this.aggregations = aggregations;
    };
    /**
     * Get aggregations
     *
     * @return {ResultAggregations}
     */
    Result.prototype.getAggregations = function () {
        return this.aggregations instanceof ResultAggregations_1.ResultAggregations
            ? this.aggregations
            : null;
    };
    /**
     * Get aggregation
     *
     * @param name
     *
     * @return {null}
     */
    Result.prototype.getAggregation = function (name) {
        return this.aggregations == null
            ? null
            : this.aggregations.getAggregation(name);
    };
    /**
     * Has no empty aggregation
     *
     * @param name
     *
     * @return {boolean}
     */
    Result.prototype.hasNotEmptyAggregation = function (name) {
        return this.aggregations == null
            ? false
            : this.aggregations.hasNotEmptyAggregation(name);
    };
    /**
     * Add suggest
     *
     * @param suggest
     */
    Result.prototype.addSuggest = function (suggest) {
        this.suggests.push(suggest);
    };
    /**
     * Get suggests
     *
     * @return {string[]}
     */
    Result.prototype.getSuggests = function () {
        return this.suggests;
    };
    /**
     * Get query
     *
     * @return {Query}
     */
    Result.prototype.getQuery = function () {
        return this.query;
    };
    /**
     * Get total elements
     *
     * @return {number}
     */
    Result.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    /**
     * Get total hits
     *
     * @return {number}
     */
    Result.prototype.getTotalHits = function () {
        return this.totalHits;
    };
    /**
     * to array
     *
     * @return {{query: any, total_items: number, total_hits: number, items:any[], aggregations: any, suggests: string[]}}
     */
    Result.prototype.toArray = function () {
        return {
            query: this.query.toArray(),
            total_items: this.totalItems,
            total_hits: this.totalHits,
            items: this.items.map(function (item) { return item.toArray(); }),
            aggregations: this.aggregations == null
                ? null
                : this.aggregations.toArray(),
            suggests: this.suggests
        };
    };
    /**
     * Create from array
     *
     * @param array
     *
     * @return {Result}
     */
    Result.createFromArray = function (array) {
        return Result.create(Query_1.Query.createFromArray(array.query), array.total_items
            ? array.total_items
            : 0, array.total_hits
            ? array.total_hits
            : 0, array.aggregations instanceof Object
            ? ResultAggregations_1.ResultAggregations.createFromArray(array.aggregations)
            : null, array.suggests
            ? array.suggests
            : null, array.items instanceof Array
            ? array.items.map(function (itemAsArray) { return Item_1.Item.createFromArray(itemAsArray); })
            : []);
    };
    return Result;
}());
exports.Result = Result;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ResultAggregation_1 = __webpack_require__(41);
/**
 * ResultAggregation class
 */
var ResultAggregations = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param totalElements
     */
    function ResultAggregations(totalElements) {
        this.aggregations = {};
        this.totalElements = totalElements;
    }
    /**
     * Add aggregation
     *
     * @param name
     * @param aggregation
     */
    ResultAggregations.prototype.addAggregation = function (name, aggregation) {
        this.aggregations[name] = aggregation;
    };
    /**
     * Get aggregations
     *
     * @returns {{}}
     */
    ResultAggregations.prototype.getAggregations = function () {
        return this.aggregations;
    };
    /**
     * Get aggregation
     *
     * @param name
     *
     * @returns {Aggregation|null}
     */
    ResultAggregations.prototype.getAggregation = function (name) {
        return this.aggregations[name] instanceof ResultAggregation_1.ResultAggregation
            ? this.aggregations[name]
            : null;
    };
    /**
     * Has not empty aggregation
     *
     * @param name
     *
     * @returns {boolean}
     */
    ResultAggregations.prototype.hasNotEmptyAggregation = function (name) {
        var aggregation = this.getAggregation(name);
        return (aggregation instanceof ResultAggregation_1.ResultAggregation) &&
            (!aggregation.isEmpty());
    };
    /**
     * Get total elements
     *
     * @return {number}
     */
    ResultAggregations.prototype.getTotalElements = function () {
        return this.totalElements;
    };
    /**
     * To array
     *
     * @return {{total_elements?: number, aggregations?: {}}}
     */
    ResultAggregations.prototype.toArray = function () {
        var aggregationCollection = {};
        for (var i in this.aggregations) {
            aggregationCollection[i] = this.aggregations[i].toArray();
        }
        var array = {};
        if (this.totalElements > 0) {
            array.total_elements = this.totalElements;
        }
        if (Object.keys(aggregationCollection).length > 0) {
            array.aggregations = aggregationCollection;
        }
        return array;
    };
    /**
     * Create from array
     *
     * @param array
     *
     * @return {ResultAggregations}
     */
    ResultAggregations.createFromArray = function (array) {
        var aggregations = new ResultAggregations(typeof array.total_elements === "number"
            ? array.total_elements
            : 0);
        if (typeof array.aggregations === typeof {}) {
            for (var i in array.aggregations) {
                aggregations.addAggregation(i, ResultAggregation_1.ResultAggregation.createFromArray(array.aggregations[i]));
            }
        }
        return aggregations;
    };
    return ResultAggregations;
}());
exports.ResultAggregations = ResultAggregations;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var apisearch_1 = __webpack_require__(13);
var ApisearchActions_1 = __webpack_require__(85);
var Bootstrap_1 = __webpack_require__(86);
var Constants_1 = __webpack_require__(5);
var Container_1 = __webpack_require__(6);
var Environment_1 = __webpack_require__(92);
var Widgets_1 = __webpack_require__(93);
/**
 * ApisearchUI class
 */
var ApisearchUI = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param environmentId
     * @param repository
     * @param store
     */
    function ApisearchUI(environmentId, repository, store) {
        /**
         * Environment Id
         */
        this.environmentId = environmentId;
        this.repository = repository;
        this.activeWidgets = [];
        this.widgets = Widgets_1["default"];
        /**
         * Store related properties
         */
        this.store = store;
    }
    /**
     * Initialize components
     *
     * @param firstQuery
     */
    ApisearchUI.prototype.init = function (_a) {
        var _this = this;
        var _b = (_a === void 0 ? {} : _a).firstQuery, firstQuery = _b === void 0 ? true : _b;
        /**
         * 1.- Register all events on the store
         */
        this.store.on("render", function () { return _this.render(); });
        /**
         * 2.- Trigger the initial render: (Mount the components)
         *     To let components setup its configuration on componentWillMount()
         */
        this.render();
        /**
         * 3.- Dispatch the initial data request
         *     With all widget previous initial configurations
         */
        if (typeof firstQuery === "undefined" ||
            true === firstQuery) {
            ApisearchActions_1.initialDataFetchAction(this.environmentId, this.store.getCurrentQuery(), this.repository);
        }
    };
    /**
     * Add new widget
     *
     * @param widget
     *
     * @return {ApisearchUI}
     */
    ApisearchUI.prototype.addWidget = function (widget) {
        this.activeWidgets = this.activeWidgets.concat([widget]);
        return this;
    };
    /**
     * Add components in bulk mode
     *
     * @param widgets
     *
     * @return {ApisearchUI}
     */
    ApisearchUI.prototype.addWidgets = function () {
        var _this = this;
        var widgets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            widgets[_i] = arguments[_i];
        }
        widgets.map(function (widget) { return _this.addWidget(widget); });
        return this;
    };
    /**
     * Render.
     *
     * Loop all active components
     * Hydrate them with new props
     * And render them.
     */
    ApisearchUI.prototype.render = function () {
        var _this = this;
        this.activeWidgets.map(function (widget) {
            widget.render(_this.environmentId, _this.store, _this.repository);
        });
    };
    /**
     * Attach a function into an event
     *
     * @param eventName
     * @param action
     */
    ApisearchUI.prototype.attach = function (eventName, action) {
        this
            .store
            .on(eventName, action);
    };
    /**
     * Create instance
     *
     * @param config
     *
     * @return {any}
     */
    ApisearchUI.create = function (config) {
        apisearch_1["default"].ensureRepositoryConfigIsValid(config);
        /**
         * Build environment Id
         */
        var environmentId = Environment_1.createEnvironmentId();
        /**
         * Bootstrapping ApisearchUI application
         */
        Bootstrap_1.bootstrap(environmentId, config);
        /**
         * Register handleActions method (store reducer)
         * into the event dispatcher
         */
        var apisearchUI = Container_1["default"].get(Constants_1.APISEARCH_UI + "__" + environmentId);
        var dispatcher = Container_1["default"].get(Constants_1.APISEARCH_DISPATCHER + "__" + environmentId);
        dispatcher.register(apisearchUI.store.handleActions.bind(apisearchUI.store));
        /**
         * Add widgets
         */
        apisearchUI.widgets = Widgets_1["default"];
        /**
         * Return ApisearchUI instance
         */
        return apisearchUI;
    };
    return ApisearchUI;
}());
exports["default"] = ApisearchUI;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var axios_1 = __webpack_require__(54);
var Client_1 = __webpack_require__(29);
var Response_1 = __webpack_require__(30);
/**
 * AxiosClient
 */
var AxiosClient = /** @class */ (function (_super) {
    tslib_1.__extends(AxiosClient, _super);
    /**
     * Constructor
     *
     * @param host
     * @param version
     * @param timeout
     * @param retryMap
     * @param overrideQueries
     * @param cache
     */
    function AxiosClient(host, version, timeout, retryMap, overrideQueries, cache) {
        var _this = _super.call(this, version, retryMap) || this;
        _this.host = host;
        _this.timeout = timeout;
        _this.cache = cache;
        _this.overrideQueries = overrideQueries;
        _this.cancelToken = {};
        return _this;
    }
    /**
     * Get
     *
     * @param url
     * @param method
     * @param credentials
     * @param parameters
     * @param data
     *
     * @return {Promise<Response>}
     */
    AxiosClient.prototype.get = function (url, method, credentials, parameters, data) {
        if (parameters === void 0) { parameters = {}; }
        if (data === void 0) { data = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var that;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                that = this;
                url = url.replace(/^\/*|\/*$/g, "");
                url = "/" + (this.version + "/" + url).replace(/^\/*|\/*$/g, "");
                method = method.toLowerCase();
                if ("get" === method &&
                    this.overrideQueries) {
                    this.abort(url);
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var headers = "get" == method
                            ? {}
                            : {
                                "Content-Encoding": "gzip",
                                "Content-Type": "application/json"
                            };
                        var axiosRequestConfig = {
                            url: url + "?" + Client_1.Client.objectToUrlParameters(tslib_1.__assign({}, credentials, parameters)),
                            data: data,
                            headers: headers,
                            method: method,
                            baseURL: that.host.replace(/\/*$/g, ""),
                            timeout: that.timeout,
                            transformRequest: [function (data) { return JSON.stringify(data); }]
                        };
                        if (typeof _this.cancelToken[url] != 'undefined') {
                            axiosRequestConfig.cancelToken = _this.cancelToken[url].token;
                        }
                        axios_1["default"]
                            .request(axiosRequestConfig)
                            .then(function (axiosResponse) {
                            var response = new Response_1.Response(axiosResponse.status, axiosResponse.data);
                            return resolve(response);
                        })["catch"](function (error) {
                            if (error.response === undefined) {
                                return;
                            }
                            var response = new Response_1.Response(error.response.status, error.response.data);
                            return reject(response);
                        });
                    })];
            });
        });
    };
    /**
     * Abort current request
     * And regenerate the cancellation token
     *
     * @param url
     */
    AxiosClient.prototype.abort = function (url) {
        if (typeof this.cancelToken[url] != 'undefined') {
            this.cancelToken[url].cancel();
        }
        this.generateCancelToken(url);
    };
    /**
     * Generate a new cancellation token for a query
     *
     * @param url
     */
    AxiosClient.prototype.generateCancelToken = function (url) {
        this.cancelToken[url] = axios_1["default"].CancelToken.source();
    };
    return AxiosClient;
}(Client_1.Client));
exports.AxiosClient = AxiosClient;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(2);
var settle = __webpack_require__(59);
var buildURL = __webpack_require__(61);
var parseHeaders = __webpack_require__(62);
var isURLSameOrigin = __webpack_require__(63);
var createError = __webpack_require__(26);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(64);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(65);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(60);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Client
 */
var Client = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param version
     * @param retryMap
     */
    function Client(version, retryMap) {
        this.retryMap = retryMap;
        this.version = version.replace(/^\/*|\/*$/g, "");
    }
    /**
     * Build an url parameters array by an object
     *
     * @param params
     *
     * @returns {string}
     */
    Client.objectToUrlParameters = function (params) {
        var builtParams = [];
        for (var i in params) {
            builtParams.push(i + "=" + params[i]);
        }
        return builtParams.join("&");
    };
    return Client;
}());
exports.Client = Client;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Response
 */
var Response = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param code
     * @param body
     */
    function Response(code, body) {
        this.code = code;
        this.body = body;
    }
    /**
     * Get code
     *
     * @return {number}
     */
    Response.prototype.getCode = function () {
        return this.code;
    };
    /**
     * Get body
     *
     * @return {any}
     */
    Response.prototype.getBody = function () {
        return this.body;
    };
    return Response;
}());
exports.Response = Response;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Retry_1 = __webpack_require__(32);
/**
 * Http class
 */
var RetryMap = /** @class */ (function () {
    function RetryMap() {
        this.retries = {};
    }
    /**
     * Add retry
     *
     * @param retry
     */
    RetryMap.prototype.addRetry = function (retry) {
        this.retries[retry.getUrl() + "~~" + retry.getMethod()] = retry;
    };
    /**
     * Create from array
     */
    RetryMap.createFromArray = function (array) {
        var retryMap = new RetryMap();
        retryMap.retries = array.map(function (retry) { return Retry_1.Retry.createFromArray(retry); });
        return retryMap;
    };
    /**
     * Get retry
     *
     * @param url
     * @param method
     *
     * @returns {Retry}
     */
    RetryMap.prototype.getRetry = function (url, method) {
        if (this.retries[url + "~~" + method] instanceof Retry_1.Retry) {
            return this.retries[url + "~~" + method];
        }
        if (this.retries["*~~" + method] instanceof Retry_1.Retry) {
            return this.retries["*~~" + method];
        }
        if (this.retries[url + "~~*"] instanceof Retry_1.Retry) {
            return this.retries[url + "~~*"];
        }
        if (this.retries["*~~*"] instanceof Retry_1.Retry) {
            return this.retries["*~~*"];
        }
        return null;
    };
    return RetryMap;
}());
exports.RetryMap = RetryMap;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.DEFAULT_MICROSECONDS_BETWEEN_RETRIES = 1000;
/**
 * Http class
 */
var Retry = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param url
     * @param method
     * @param retries
     * @param microsecondsBetweenRetries
     */
    function Retry(url, method, retries, microsecondsBetweenRetries) {
        this.url = url;
        this.method = method;
        this.retries = retries;
        this.microsecondsBetweenRetries = microsecondsBetweenRetries;
    }
    /**
     * Create from array
     *
     * @param array
     *
     * @return {Retry}
     */
    Retry.createFromArray = function (array) {
        return new Retry(array.url ? array.url : "*", array.method ? array.method : "*", array.retries ? array.retries : 0, array.microseconds_between_retries
            ? array.microseconds_between_retries
            : exports.DEFAULT_MICROSECONDS_BETWEEN_RETRIES);
    };
    /**
     * Get url
     *
     * @return {string}
     */
    Retry.prototype.getUrl = function () {
        return this.url;
    };
    /**
     * Get method
     *
     * @return {string}
     */
    Retry.prototype.getMethod = function () {
        return this.method;
    };
    /**
     * Ge retries
     *
     * @return {number}
     */
    Retry.prototype.getRetries = function () {
        return this.retries;
    };
    /**
     * Get microseconds between retries
     *
     * @return {number}
     */
    Retry.prototype.getMicrosecondsBetweenRetries = function () {
        return this.microsecondsBetweenRetries;
    };
    return Retry;
}());
exports.Retry = Retry;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var InvalidFormatError_1 = __webpack_require__(3);
/**
 * User class
 */
var User = /** @class */ (function () {
    /**
     * Construct
     *
     * @param id string
     * @param attributes Array
     */
    function User(id, attributes) {
        if (attributes === void 0) { attributes = {}; }
        this.id = id;
        this.attributes = attributes;
    }
    /**
     * Return the user id
     *
     * @return {string}
     */
    User.prototype.getId = function () {
        return this.id;
    };
    /**
     * Return array
     *
     * @returns {{}}
     */
    User.prototype.getAttributes = function () {
        return this.attributes;
    };
    /**
     * To array
     *
     * @returns {{id: string, attributes: {}}}
     */
    User.prototype.toArray = function () {
        var array = {
            id: this.id
        };
        if (Object.keys(this.attributes).length > 0) {
            array.attributes = this.attributes;
        }
        return array;
    };
    /**
     * Create from array
     *
     * @param array
     *
     * @return User
     */
    User.createFromArray = function (array) {
        if (array == null ||
            typeof array.id == "undefined" ||
            array.id == null) {
            throw InvalidFormatError_1.InvalidFormatError.userFormatNotValid();
        }
        var attributes = typeof array.attributes === typeof {}
            ? array.attributes
            : {};
        return new User(array.id, attributes);
    };
    return User;
}());
exports.User = User;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ScoreStrategy_1 = __webpack_require__(35);
/**
 * ScoreStrategies constants
 */
exports.MULTIPLY = 'multiply';
exports.SUM = 'sum';
exports.AVG = 'avg';
exports.MAX = 'max';
exports.MIN = 'min';
/**
 * ScoreStrategies
 */
var ScoreStrategies = /** @class */ (function () {
    function ScoreStrategies() {
        this.scoreStrategies = [];
    }
    /**
     * Create empty
     *
     * @param scoreMode
     *
     * @return {ScoreStrategies}
     */
    ScoreStrategies.createEmpty = function (scoreMode) {
        if (scoreMode === void 0) { scoreMode = exports.SUM; }
        var scoreStrategies = new ScoreStrategies;
        scoreStrategies.scoreMode = scoreMode;
        return scoreStrategies;
    };
    /**
     * Add score strategy
     *
     * @param scoreStrategy
     *
     * @return {ScoreStrategies}
     */
    ScoreStrategies.prototype.addScoreStrategy = function (scoreStrategy) {
        this.scoreStrategies.push(scoreStrategy);
        return this;
    };
    /**
     * Get score strategies
     *
     * @return {ScoreStrategy[]}
     */
    ScoreStrategies.prototype.getScoreStrategies = function () {
        return this.scoreStrategies;
    };
    /**
     * Get score mode
     *
     * @return {string}
     */
    ScoreStrategies.prototype.getScoreMode = function () {
        return this.scoreMode;
    };
    /**
     * To array
     *
     * @return {{
     *      score_mode: string,
     *      score_strategies: any
     * }}
     */
    ScoreStrategies.prototype.toArray = function () {
        var scoreStrategiesAsArray = [];
        for (var i in this.scoreStrategies) {
            scoreStrategiesAsArray.push(this.scoreStrategies[i].toArray());
        }
        return {
            score_mode: this.scoreMode,
            score_strategies: scoreStrategiesAsArray
        };
    };
    /**
     * Create from array
     *
     * @param array
     *
     * @return {ScoreStrategies}
     */
    ScoreStrategies.createFromArray = function (array) {
        array = JSON.parse(JSON.stringify(array));
        var scoreStrategies = (typeof array.score_mode != "undefined")
            ? ScoreStrategies.createEmpty(array.score_mode)
            : ScoreStrategies.createEmpty();
        scoreStrategies.scoreStrategies = [];
        for (var i in array.score_strategies) {
            scoreStrategies
                .scoreStrategies
                .push(ScoreStrategy_1.ScoreStrategy.createFromArray(array.score_strategies[i]));
        }
        return scoreStrategies;
    };
    return ScoreStrategies;
}());
exports.ScoreStrategies = ScoreStrategies;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Item_1 = __webpack_require__(9);
var Filter_1 = __webpack_require__(7);
/**
 * ScoreStrategy constants
 */
exports.DEFAULT_TYPE = 'default';
exports.DEFAULT_WEIGHT = 1.0;
exports.BOOSTING_FIELD_VALUE = 'field_value';
exports.CUSTOM_FUNCTION = 'custom_function';
exports.DECAY = 'decay';
exports.DECAY_LINEAR = 'linear';
exports.DECAY_EXP = 'exp';
exports.DECAY_GAUSS = 'gauss';
exports.MODIFIER_NONE = 'none';
exports.MODIFIER_SQRT = 'sqrt';
exports.MODIFIER_LOG = 'log';
exports.MODIFIER_LN = 'ln';
exports.MODIFIER_SQUARE = 'square';
exports.SCORE_MODE_NONE = 'none';
exports.SCORE_MODE_SUM = 'sum';
exports.SCORE_MODE_AVG = 'avg';
exports.SCORE_MODE_MAX = 'max';
exports.SCORE_MODE_MIN = 'min';
exports.DEFAULT_MISSING = 1.0;
exports.DEFAULT_FACTOR = 1.0;
/**
 * ScoreStrategy
 */
var ScoreStrategy = /** @class */ (function () {
    function ScoreStrategy() {
        this.type = exports.DEFAULT_TYPE;
        this.filter = null;
        this.weight = exports.DEFAULT_WEIGHT;
        this.scoreMode = exports.SCORE_MODE_AVG;
        this.configuration = {};
    }
    /**
     * Get type
     *
     * @returns {string}
     */
    ScoreStrategy.prototype.getType = function () {
        return this.type;
    };
    /**
     * Get configuration value
     *
     * @returns {string}
     */
    ScoreStrategy.prototype.getConfigurationValue = function (element) {
        if (typeof this.configuration[element] == "undefined") {
            return null;
        }
        return this.configuration[element];
    };
    /**
     * Get weight.
     *
     * @return {number}
     */
    ScoreStrategy.prototype.getWeight = function () {
        return this.weight;
    };
    /**
     * Get score mode.
     *
     * @return {string}
     */
    ScoreStrategy.prototype.getScoreMode = function () {
        return this.scoreMode;
    };
    /**
     * Get filter.
     *
     * @return {Filter}
     */
    ScoreStrategy.prototype.getFilter = function () {
        return this.filter;
    };
    /**
     * Create default
     *
     * @return {ScoreStrategy}
     */
    ScoreStrategy.createDefault = function () {
        return new ScoreStrategy();
    };
    /**
     * Create field boosting
     *
     * @param field
     * @param factor
     * @param missing
     * @param modifier
     * @param weight
     * @param filter
     * @param scoreMode
     *
     * @return {ScoreStrategy}
     */
    ScoreStrategy.createFieldBoosting = function (field, factor, missing, modifier, weight, filter, scoreMode) {
        if (factor === void 0) { factor = exports.DEFAULT_FACTOR; }
        if (missing === void 0) { missing = exports.DEFAULT_MISSING; }
        if (modifier === void 0) { modifier = exports.MODIFIER_NONE; }
        if (weight === void 0) { weight = exports.DEFAULT_WEIGHT; }
        if (filter === void 0) { filter = null; }
        if (scoreMode === void 0) { scoreMode = exports.SCORE_MODE_AVG; }
        var scoreStrategy = ScoreStrategy.createDefault();
        scoreStrategy.type = exports.BOOSTING_FIELD_VALUE;
        scoreStrategy.configuration['field'] = field;
        scoreStrategy.configuration['factor'] = factor;
        scoreStrategy.configuration['missing'] = missing;
        scoreStrategy.configuration['modifier'] = modifier;
        scoreStrategy.weight = weight;
        scoreStrategy.filter = ScoreStrategy.fixFilterFieldPath(filter);
        scoreStrategy.scoreMode = scoreMode;
        return scoreStrategy;
    };
    /**
     * Create custom function
     *
     * @param func
     * @param weight
     * @param filter
     * @param scoreMode
     *
     * @return {ScoreStrategy}
     */
    ScoreStrategy.createCustomFunction = function (func, weight, filter, scoreMode) {
        if (weight === void 0) { weight = exports.DEFAULT_WEIGHT; }
        if (filter === void 0) { filter = null; }
        if (scoreMode === void 0) { scoreMode = exports.SCORE_MODE_AVG; }
        var scoreStrategy = ScoreStrategy.createDefault();
        scoreStrategy.type = exports.CUSTOM_FUNCTION;
        scoreStrategy.configuration['function'] = func;
        scoreStrategy.weight = weight;
        scoreStrategy.filter = ScoreStrategy.fixFilterFieldPath(filter);
        scoreStrategy.scoreMode = scoreMode;
        return scoreStrategy;
    };
    /**
     * Create decay function
     *
     * @param type
     * @param field
     * @param origin
     * @param scale
     * @param offset
     * @param decay
     * @param weight
     * @param filter
     * @param scoreMode
     *
     * @return {ScoreStrategy}
     */
    ScoreStrategy.createDecayFunction = function (type, field, origin, scale, offset, decay, weight, filter, scoreMode) {
        if (weight === void 0) { weight = exports.DEFAULT_WEIGHT; }
        if (filter === void 0) { filter = null; }
        if (scoreMode === void 0) { scoreMode = exports.SCORE_MODE_AVG; }
        var scoreStrategy = ScoreStrategy.createDefault();
        scoreStrategy.type = exports.DECAY;
        scoreStrategy.configuration['type'] = type;
        scoreStrategy.configuration['field'] = field;
        scoreStrategy.configuration['origin'] = origin;
        scoreStrategy.configuration['scale'] = scale;
        scoreStrategy.configuration['offset'] = offset;
        scoreStrategy.configuration['decay'] = decay;
        scoreStrategy.weight = weight;
        scoreStrategy.filter = ScoreStrategy.fixFilterFieldPath(filter);
        scoreStrategy.scoreMode = scoreMode;
        return scoreStrategy;
    };
    /**
     * Fix filter path.
     *
     * @param filter
     *
     * @return {Filter}
     */
    ScoreStrategy.fixFilterFieldPath = function (filter) {
        if (filter == null) {
            return filter;
        }
        var filterAsArray = filter.toArray();
        filterAsArray['field'] = Item_1.Item.getPathByField(filterAsArray['field']);
        return Filter_1.Filter.createFromArray(filterAsArray);
    };
    /**
     * To array
     *
     * @return {{
     *      type: string,
     *      configuration: any,
     *      weight: number,
     *      score_mode: string,
     *      filter: any
     * }}
     */
    ScoreStrategy.prototype.toArray = function () {
        return {
            type: this.type,
            configuration: this.configuration,
            weight: this.weight,
            score_mode: this.scoreMode,
            filter: this.filter instanceof Filter_1.Filter
                ? this.filter.toArray()
                : null
        };
    };
    /**
     * Create from array
     *
     * @param array
     *
     * @return {ScoreStrategy}
     */
    ScoreStrategy.createFromArray = function (array) {
        array = JSON.parse(JSON.stringify(array));
        var scoreStrategy = ScoreStrategy.createDefault();
        if (typeof array.type != "undefined") {
            scoreStrategy.type = array.type;
        }
        if (typeof array.configuration != "undefined") {
            scoreStrategy.configuration = array.configuration;
        }
        if (typeof array.weight != "undefined") {
            scoreStrategy.weight = array.weight;
        }
        if (typeof array.score_mode != "undefined") {
            scoreStrategy.scoreMode = array.score_mode;
        }
        if (typeof array.filter === 'object' && array.filter !== null) {
            scoreStrategy.filter = Filter_1.Filter.createFromArray(array.filter);
        }
        return scoreStrategy;
    };
    return ScoreStrategy;
}());
exports.ScoreStrategy = ScoreStrategy;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var ConnectionError_1 = __webpack_require__(37);
var InvalidFormatError_1 = __webpack_require__(3);
var InvalidTokenError_1 = __webpack_require__(38);
var ResourceExistsError_1 = __webpack_require__(39);
var ResourceNotAvailableError_1 = __webpack_require__(40);
var Item_1 = __webpack_require__(9);
var ItemUUID_1 = __webpack_require__(11);
var Result_1 = __webpack_require__(20);
var Repository_1 = __webpack_require__(44);
var Index_1 = __webpack_require__(73);
/**
 * Aggregation class
 */
var HttpRepository = /** @class */ (function (_super) {
    tslib_1.__extends(HttpRepository, _super);
    /**
     * Constructor
     *
     * @param httpClient
     * @param appId
     * @param indexId
     * @param token
     * @param transformer
     */
    function HttpRepository(httpClient, appId, indexId, token, transformer) {
        var _this = _super.call(this, appId, indexId, token) || this;
        _this.httpClient = httpClient;
        _this.transformer = transformer;
        return _this;
    }
    /**
     * Get transformer
     *
     * @return {Transformer}
     */
    HttpRepository.prototype.getTransformer = function () {
        return this.transformer;
    };
    /**
     * Generate item document by a simple object.
     *
     * @param object
     */
    HttpRepository.prototype.addObject = function (object) {
        var item = this
            .transformer
            .toItem(object);
        if (item instanceof Item_1.Item) {
            this.addItem(item);
        }
    };
    /**
     * Delete item document by uuid.
     *
     * @param object
     */
    HttpRepository.prototype.deleteObject = function (object) {
        var itemUUID = this
            .transformer
            .toItemUUID(object);
        if (itemUUID instanceof ItemUUID_1.ItemUUID) {
            this.deleteItem(itemUUID);
        }
    };
    /**
     * Flush update items
     *
     * @param itemsToUpdate
     *
     * @return {Promise<void>}
     */
    HttpRepository.prototype.flushUpdateItems = function (itemsToUpdate) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (itemsToUpdate.length === 0) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this
                        .httpClient
                        .get("/items", "post", this.getCredentialsWithIndex(this.indexId), {}, {
                        items: itemsToUpdate.map(function (item) {
                            return item.toArray();
                        })
                    })
                        .then(function (response) {
                        HttpRepository.throwTransportableExceptionIfNeeded(response);
                    })];
            });
        });
    };
    /**
     * Flush delete items
     *
     * @param itemsToDelete
     *
     * @return {Promise<void>}
     */
    HttpRepository.prototype.flushDeleteItems = function (itemsToDelete) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (itemsToDelete.length === 0) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, this
                        .httpClient
                        .get("/items", "delete", this.getCredentialsWithIndex(this.indexId), {}, {
                        items: itemsToDelete.map(function (itemUUID) {
                            return itemUUID.toArray();
                        })
                    })
                        .then(function (response) {
                        HttpRepository.throwTransportableExceptionIfNeeded(response);
                    })];
            });
        });
    };
    /**
     * Query
     *
     * @param query
     *
     * @return {Promise<Result>}
     */
    HttpRepository.prototype.query = function (query) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var that;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        return [4 /*yield*/, this
                                .httpClient
                                .get("/", "get", this.getCredentialsWithIndex(this.indexId), {
                                query: JSON.stringify(query.toArray())
                            }, {})
                                .then(function (response) {
                                HttpRepository.throwTransportableExceptionIfNeeded(response);
                                var result = Result_1.Result.createFromArray(response.getBody());
                                return Result_1.Result.create(result.getQuery(), result.getTotalItems(), result.getTotalHits(), result.getAggregations(), result.getSuggests(), that
                                    .transformer
                                    .fromItems(result.getItems()));
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update items
     *
     * @param query
     * @param changes
     *
     * @return {Promise<void>}
     */
    HttpRepository.prototype.updateItems = function (query, changes) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this
                            .httpClient
                            .get("/items", "put", this.getCredentialsWithIndex(this.indexId), {}, {
                            query: query.toArray(),
                            changes: changes.toArray()
                        })
                            .then(function (response) {
                            HttpRepository.throwTransportableExceptionIfNeeded(response);
                            return;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Create index
     *
     * @param indexUUID
     * @param config
     *
     * @return {Promise<void>}
     */
    HttpRepository.prototype.createIndex = function (indexUUID, config) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this
                            .httpClient
                            .get("/index", "put", this.getCredentials(), {}, {
                            index: indexUUID.toArray(),
                            config: config.toArray()
                        })
                            .then(function (response) {
                            HttpRepository.throwTransportableExceptionIfNeeded(response);
                            return;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Delete index
     *
     * @param indexUUID
     *
     * @return {Promise<void>}
     */
    HttpRepository.prototype.deleteIndex = function (indexUUID) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this
                            .httpClient
                            .get("/index", "delete", this.getCredentialsWithIndex(this.indexId), {}, {})
                            .then(function (response) {
                            HttpRepository.throwTransportableExceptionIfNeeded(response);
                            return;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Reset index
     *
     * @param indexUUID
     *
     * @return {Promise<void>}
     */
    HttpRepository.prototype.resetIndex = function (indexUUID) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this
                            .httpClient
                            .get("/index/reset", "post", this.getCredentialsWithIndex(this.indexId), {}, {})
                            .then(function (response) {
                            HttpRepository.throwTransportableExceptionIfNeeded(response);
                            return;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Check index
     *
     * @param indexUUID
     *
     * @return {Promise<boolean>}
     */
    HttpRepository.prototype.checkIndex = function (indexUUID) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this
                            .httpClient
                            .get("/index", "head", this.getCredentialsWithIndex(this.indexId), {}, {})
                            .then(function (response) {
                            HttpRepository.throwTransportableExceptionIfNeeded(response);
                            return response.getCode() === 200;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Check index
     *
     * @return {Promise<Index[]>}
     */
    HttpRepository.prototype.getIndices = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this
                            .httpClient
                            .get("/indices", "get", this.getCredentials(), {}, {})
                            .then(function (response) {
                            HttpRepository.throwTransportableExceptionIfNeeded(response);
                            var result = [];
                            for (var _i = 0, _a = response.getBody(); _i < _a.length; _i++) {
                                var indexAsArray = _a[_i];
                                result.push(Index_1.Index.createFromArray(indexAsArray));
                            }
                            return result;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Configure index
     *
     * @param indexUUID
     * @param config
     *
     * @return {Promise<void>}
     */
    HttpRepository.prototype.configureIndex = function (indexUUID, config) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this
                            .httpClient
                            .get("/index", "post", this.getCredentialsWithIndex(this.indexId), {}, {
                            config: config.toArray()
                        })
                            .then(function (response) {
                            HttpRepository.throwTransportableExceptionIfNeeded(response);
                            return;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get query values
     *
     * @returns any
     */
    HttpRepository.prototype.getCredentials = function () {
        return {
            app_id: this.appId,
            token: this.token
        };
    };
    /**
     * Get query values
     *
     * @param indexComposedUUID
     *
     * @returns any
     */
    HttpRepository.prototype.getCredentialsWithIndex = function (indexComposedUUID) {
        return {
            app_id: this.appId,
            index: indexComposedUUID,
            token: this.token
        };
    };
    /**
     * throw error if needed
     *
     * @param response
     */
    HttpRepository.throwTransportableExceptionIfNeeded = function (response) {
        if (typeof response.getCode() == "undefined") {
            return;
        }
        switch (response.getCode()) {
            case ResourceNotAvailableError_1.ResourceNotAvailableError.getTransportableHTTPError():
                throw new ResourceNotAvailableError_1.ResourceNotAvailableError(response.getBody().message);
            case InvalidTokenError_1.InvalidTokenError.getTransportableHTTPError():
                throw new InvalidTokenError_1.InvalidTokenError(response.getBody().message);
            case InvalidFormatError_1.InvalidFormatError.getTransportableHTTPError():
                throw new InvalidFormatError_1.InvalidFormatError(response.getBody().message);
            case ResourceExistsError_1.ResourceExistsError.getTransportableHTTPError():
                throw new ResourceExistsError_1.ResourceExistsError(response.getBody().message);
            case ConnectionError_1.ConnectionError.getTransportableHTTPError():
                throw new ConnectionError_1.ConnectionError(response.getBody().message);
        }
    };
    return HttpRepository;
}(Repository_1.Repository));
exports.HttpRepository = HttpRepository;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var ErrorWithMessage_1 = __webpack_require__(4);
/**
 * Connection error
 */
var ConnectionError = /** @class */ (function (_super) {
    tslib_1.__extends(ConnectionError, _super);
    function ConnectionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get transportable http error
     *
     * @return {number}
     */
    ConnectionError.getTransportableHTTPError = function () {
        return 500;
    };
    return ConnectionError;
}(ErrorWithMessage_1.ErrorWithMessage));
exports.ConnectionError = ConnectionError;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var ErrorWithMessage_1 = __webpack_require__(4);
/**
 * Invalid token error
 */
var InvalidTokenError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidTokenError, _super);
    function InvalidTokenError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get transportable http error
     *
     * @return {number}
     */
    InvalidTokenError.getTransportableHTTPError = function () {
        return 401;
    };
    /**
     * Invalid token permissions
     *
     * @param tokenReference
     *
     * @return {InvalidTokenError}
     */
    InvalidTokenError.createInvalidTokenPermissions = function (tokenReference) {
        return new InvalidTokenError("Token " + tokenReference + "not valid");
    };
    /**
     * Invalid token permissions
     *
     * @param tokenReference
     * @param maxHitsPerQuery
     *
     * @return {InvalidTokenError}
     */
    InvalidTokenError.createInvalidTokenMaxHitsPerQuery = function (tokenReference, maxHitsPerQuery) {
        return new InvalidTokenError("Token " + tokenReference + "not valid. Max " + maxHitsPerQuery + " hits allowed");
    };
    return InvalidTokenError;
}(ErrorWithMessage_1.ErrorWithMessage));
exports.InvalidTokenError = InvalidTokenError;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var ErrorWithMessage_1 = __webpack_require__(4);
/**
 * Resource exists error
 */
var ResourceExistsError = /** @class */ (function (_super) {
    tslib_1.__extends(ResourceExistsError, _super);
    function ResourceExistsError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get transportable http error
     *
     * @return {number}
     */
    ResourceExistsError.getTransportableHTTPError = function () {
        return 409;
    };
    /**
     * Index not available
     *
     * @return {InvalidFormatError}
     */
    ResourceExistsError.indexAvailable = function () {
        return new ResourceExistsError("Index exists and cannot be created again");
    };
    /**
     * Events not available
     *
     * @return {InvalidFormatError}
     */
    ResourceExistsError.eventsIndexAvailable = function () {
        return new ResourceExistsError("Events index exists and cannot be created again");
    };
    /**
     * Logs not available
     *
     * @return {InvalidFormatError}
     */
    ResourceExistsError.logsIndexAvailable = function () {
        return new ResourceExistsError("Logs index exists and cannot be created again");
    };
    return ResourceExistsError;
}(ErrorWithMessage_1.ErrorWithMessage));
exports.ResourceExistsError = ResourceExistsError;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var ErrorWithMessage_1 = __webpack_require__(4);
/**
 * Resource not available error
 */
var ResourceNotAvailableError = /** @class */ (function (_super) {
    tslib_1.__extends(ResourceNotAvailableError, _super);
    function ResourceNotAvailableError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get transportable http error
     *
     * @return {number}
     */
    ResourceNotAvailableError.getTransportableHTTPError = function () {
        return 404;
    };
    /**
     * Index not available
     *
     * @param resourceId
     *
     * @return {InvalidFormatError}
     */
    ResourceNotAvailableError.indexNotAvailable = function (resourceId) {
        return new ResourceNotAvailableError("Index not available - " + resourceId);
    };
    /**
     * Events not available
     *
     * @param resourceId
     *
     * @return {InvalidFormatError}
     */
    ResourceNotAvailableError.eventsIndexNotAvailable = function (resourceId) {
        return new ResourceNotAvailableError("Events not available - " + resourceId);
    };
    /**
     * Logs not available
     *
     * @param resourceId
     *
     * @return {InvalidFormatError}
     */
    ResourceNotAvailableError.logsIndexNotAvailable = function (resourceId) {
        return new ResourceNotAvailableError("Logs not available - " + resourceId);
    };
    /**
     * Engine not available
     *
     * @param resourceId
     *
     * @return {InvalidFormatError}
     */
    ResourceNotAvailableError.engineNotAvailable = function (resourceId) {
        return new ResourceNotAvailableError("Engine not available - " + resourceId);
    };
    return ResourceNotAvailableError;
}(ErrorWithMessage_1.ErrorWithMessage));
exports.ResourceNotAvailableError = ResourceNotAvailableError;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var Filter_1 = __webpack_require__(7);
var Counter_1 = __webpack_require__(42);
/**
 * ResultAggregation class
 */
var ResultAggregation = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param name
     * @param applicationType
     * @param totalElements
     * @param activeElements
     */
    function ResultAggregation(name, applicationType, totalElements, activeElements) {
        this.counters = {};
        this.highestActiveElement = 0;
        this.name = name;
        this.applicationType = applicationType;
        this.totalElements = totalElements;
        this.activeElements = {};
        for (var i in activeElements) {
            var activeElement = activeElements[i];
            this.activeElements[activeElement] = activeElement;
        }
    }
    /**
     * Add counter
     *
     * @param name
     * @param counter
     */
    ResultAggregation.prototype.addCounter = function (name, counter) {
        if (counter == 0) {
            return;
        }
        var counterInstance = Counter_1.Counter.createByActiveElements(name, counter, Object.keys(this.activeElements));
        if (!(counterInstance instanceof Counter_1.Counter)) {
            return;
        }
        if ((this.applicationType & Filter_1.FILTER_MUST_ALL_WITH_LEVELS) &&
            (this.applicationType & ~Filter_1.FILTER_MUST_ALL) &&
            counterInstance.isUsed()) {
            this.activeElements[counterInstance.getId()] = counterInstance;
            this.highestActiveElement = Math.max(counterInstance.getLevel(), this.highestActiveElement);
            return;
        }
        this.counters[counterInstance.getId()] = counterInstance;
    };
    /**
     * Get name
     *
     * @return {string}
     */
    ResultAggregation.prototype.getName = function () {
        return this.name;
    };
    /**
     * Get counter
     *
     * @return {any}
     */
    ResultAggregation.prototype.getCounters = function () {
        return this.counters;
    };
    /**
     * Return if the aggregation belongs to a filter.
     *
     * @return {boolean}
     */
    ResultAggregation.prototype.isFilter = function () {
        return (this.applicationType & Filter_1.FILTER_MUST_ALL) > 0;
    };
    /**
     * Aggregation has levels.
     *
     * @return {boolean}
     */
    ResultAggregation.prototype.hasLevels = function () {
        return (this.applicationType & Filter_1.FILTER_MUST_ALL_WITH_LEVELS) > 0;
    };
    /**
     * Get counter by name
     *
     * @param name
     *
     * @return {null}
     */
    ResultAggregation.prototype.getCounter = function (name) {
        return this.counters[name] instanceof Counter_1.Counter
            ? this.counters[name]
            : null;
    };
    /**
     * Get all elements
     *
     * @return {{}}
     */
    ResultAggregation.prototype.getAllElements = function () {
        return tslib_1.__assign({}, this.activeElements, this.counters);
    };
    /**
     * Get total elements
     *
     * @return {number}
     */
    ResultAggregation.prototype.getTotalElements = function () {
        return this.totalElements;
    };
    /**
     * Get active elements
     *
     * @return {any}
     */
    ResultAggregation.prototype.getActiveElements = function () {
        if (Object.keys(this.activeElements).length === 0) {
            return {};
        }
        if (this.applicationType === Filter_1.FILTER_MUST_ALL_WITH_LEVELS) {
            var value = null;
            for (var i in this.activeElements) {
                var activeElement = this.activeElements[i];
                if (!(activeElement instanceof Counter_1.Counter)) {
                    continue;
                }
                if (value == null) {
                    value = activeElement;
                }
                value = value.getLevel() > activeElement.getLevel()
                    ? value
                    : activeElement;
            }
            return value instanceof Counter_1.Counter
                ? { 0: value }
                : null;
        }
        return this.activeElements;
    };
    /**
     * Clean results by level and remove all levels higher than the lowest.
     */
    ResultAggregation.prototype.cleanCountersByLevel = function () {
        for (var i in this.counters) {
            var counter = this.counters[i];
            if (counter.getLevel() !== this.highestActiveElement + 1) {
                delete this.counters[i];
            }
        }
    };
    /**
     * Is empty
     *
     * @returns {boolean}
     */
    ResultAggregation.prototype.isEmpty = function () {
        return Object.keys(this.activeElements).length == 0 &&
            Object.keys(this.counters).length == 0;
    };
    /**
     * To array
     *
     * @return {any}
     */
    ResultAggregation.prototype.toArray = function () {
        var array = {
            name: this.name,
            counters: [],
            active_elements: []
        };
        for (var i in this.counters) {
            array.counters.push(this.counters[i].toArray());
        }
        if (this.applicationType !== Filter_1.FILTER_AT_LEAST_ONE) {
            array.application_type = this.applicationType;
        }
        if (this.totalElements > 0) {
            array.total_elements = this.totalElements;
        }
        for (var i in this.activeElements) {
            var activeElement = this.activeElements[i];
            array.active_elements.push(activeElement instanceof Counter_1.Counter
                ? activeElement.toArray()
                : activeElement);
        }
        if (this.highestActiveElement > 0) {
            array.highest_active_level = this.highestActiveElement;
        }
        if (array.counters.length === 0) {
            delete array.counters;
        }
        if (array.active_elements.length === 0) {
            delete array.active_elements;
        }
        return array;
    };
    /**
     * Create from array
     *
     * @param array
     */
    ResultAggregation.createFromArray = function (array) {
        var activeElements = [];
        var activeElementsAsArray = array.active_elements;
        activeElementsAsArray = typeof activeElementsAsArray === typeof []
            ? activeElementsAsArray
            : [];
        for (var i in activeElementsAsArray) {
            var activeElementAsArray = activeElementsAsArray[i];
            activeElements.push(typeof activeElementAsArray === typeof {}
                ? Counter_1.Counter.createFromArray(activeElementAsArray)
                : activeElementAsArray);
        }
        var aggregation = new ResultAggregation(array.name, parseInt(array.application_type ? array.application_type : Filter_1.FILTER_AT_LEAST_ONE), parseInt(array.total_elements ? array.total_elements : 0), []);
        aggregation.activeElements = activeElements;
        var countersAsArray = typeof array.counters === typeof []
            ? array.counters
            : [];
        for (var i in countersAsArray) {
            var counterAsArray = countersAsArray[i];
            var counter = Counter_1.Counter.createFromArray(counterAsArray);
            aggregation.counters[counter.getId()] = counter;
        }
        aggregation.highestActiveElement = typeof array.highest_active_level === "number"
            ? array.highest_active_level
            : 0;
        return aggregation;
    };
    return ResultAggregation;
}());
exports.ResultAggregation = ResultAggregation;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Metadata_1 = __webpack_require__(43);
/**
 * Aggregation class
 */
var Counter = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param values
     * @param used
     * @param n
     */
    function Counter(values, used, n) {
        this.values = values;
        this.used = used;
        this.n = n;
    }
    /**
     * Get id
     *
     * @return {string|null}
     */
    Counter.prototype.getId = function () {
        return typeof this.values.id == "string"
            ? this.values.id
            : null;
    };
    /**
     * Get name
     *
     * @return {string|null}
     */
    Counter.prototype.getName = function () {
        return typeof this.values.name == "string"
            ? this.values.name
            : null;
    };
    /**
     * Get slug
     *
     * @return {string|null}
     */
    Counter.prototype.getSlug = function () {
        return typeof this.values.slug == "string"
            ? this.values.slug
            : null;
    };
    /**
     * Get level
     *
     * @return {number}
     */
    Counter.prototype.getLevel = function () {
        return typeof this.values.level == "number"
            ? this.values.level
            : 0;
    };
    /**
     * Get values
     *
     * @returns {{}}
     */
    Counter.prototype.getValues = function () {
        return this.values;
    };
    /**
     * Is used
     *
     * @returns {boolean}
     */
    Counter.prototype.isUsed = function () {
        return this.used;
    };
    /**
     * Get N
     *
     * @returns {number}
     */
    Counter.prototype.getN = function () {
        return this.n;
    };
    /**
     * Create by active elements
     *
     * @param name
     * @param n
     * @param activeElements
     */
    Counter.createByActiveElements = function (name, n, activeElements) {
        var values = Metadata_1.Metadata.fromMetadata(name);
        if (values == null) {
            return null;
        }
        var i = activeElements.length;
        var inActiveElements = false;
        while (i--) {
            if (activeElements[i] == values.id) {
                inActiveElements = true;
            }
        }
        return new Counter(values, inActiveElements, n);
    };
    /**
     * To array
     *
     * @return {{}}
     */
    Counter.prototype.toArray = function () {
        var values = {
            values: this.values,
            n: this.n
        };
        if (this.used === true) {
            values.used = true;
        }
        return values;
    };
    /**
     * Create from array
     *
     * @param array
     *
     * @return {Counter}
     */
    Counter.createFromArray = function (array) {
        array = JSON.parse(JSON.stringify(array));
        return new Counter(array.values, (typeof array.used == "boolean")
            ? array.used
            : false, array.n);
    };
    return Counter;
}());
exports.Counter = Counter;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * User class
 */
var Metadata = /** @class */ (function () {
    function Metadata() {
    }
    /**
     * To metadata
     *
     * @param array:{}
     *
     * @returns {string}
     */
    Metadata.toMetadata = function (array) {
        array = JSON.parse(JSON.stringify(array));
        var parts = [];
        for (var key in array) {
            parts.push(key + "##" + array[key]);
        }
        return parts.join("~~");
    };
    /**
     * From metadata
     *
     * @param metadata
     *
     * @return {{}}
     */
    Metadata.fromMetadata = function (metadata) {
        var values = {};
        var splittedParts = metadata.split("~~");
        var iterator = 0;
        var size = 0;
        var lastElement = null;
        for (var key in splittedParts) {
            var part = splittedParts[key];
            var parts = part.split("##");
            if (parts.length > 1) {
                lastElement = parts[1];
                values[parts[0]] = lastElement;
            }
            else {
                lastElement = part;
                values[iterator++] = lastElement;
            }
            size++;
        }
        if (size == 1) {
            values = {
                id: lastElement,
                name: lastElement
            };
        }
        if (typeof values.id == "undefined") {
            return null;
        }
        return values;
    };
    return Metadata;
}());
exports.Metadata = Metadata;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
/**
 * Aggregation class
 */
var Repository = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param appId
     * @param indexId
     * @param token
     */
    function Repository(appId, indexId, token) {
        this.itemsToUpdate = [];
        this.itemsToDelete = [];
        this.appId = appId;
        this.indexId = indexId;
        this.token = token;
    }
    /**
     * Reset cached elements
     */
    Repository.prototype.resetCachedElements = function () {
        this.itemsToUpdate = [];
        this.itemsToDelete = [];
    };
    /**
     * Add element
     *
     * @param item
     */
    Repository.prototype.addItem = function (item) {
        this.itemsToUpdate.push(item);
    };
    /**
     * Add elements
     *
     * @param items
     */
    Repository.prototype.addItems = function (items) {
        for (var i in items) {
            this.addItem(items[i]);
        }
    };
    /**
     * Delete item
     *
     * @param itemUUID
     */
    Repository.prototype.deleteItem = function (itemUUID) {
        this.itemsToDelete.push(itemUUID);
    };
    /**
     * Delete items
     *
     * @param itemsUUID
     */
    Repository.prototype.deleteItems = function (itemsUUID) {
        for (var i in itemsUUID) {
            this.deleteItem(itemsUUID[i]);
        }
    };
    /**
     * flush
     *
     * @param bulkNumber
     * @param skipIfLess
     *
     * @return {Promise<void>}
     */
    Repository.prototype.flush = function (bulkNumber, skipIfLess) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (!bulkNumber) {
                    bulkNumber = 500;
                }
                if (!skipIfLess) {
                    skipIfLess = false;
                }
                if (skipIfLess &&
                    this.itemsToUpdate.length < bulkNumber) {
                    return [2 /*return*/];
                }
                return [2 /*return*/, Promise.all(Repository
                        .chunkArray(this.itemsToUpdate, bulkNumber)
                        .map(function (arrayOfItems) {
                        return _this.flushUpdateItems(arrayOfItems);
                    })
                        .concat(Repository
                        .chunkArray(this.itemsToDelete, bulkNumber)
                        .map(function (arrayOfItemsUUID) {
                        return _this.flushDeleteItems(arrayOfItemsUUID);
                    }))).then(function (_) {
                        _this.resetCachedElements();
                    })["catch"](function (_) {
                        _this.resetCachedElements();
                    })];
            });
        });
    };
    /**
     * Make chunks of n elements
     *
     * @param array
     * @param chunk
     *
     * @return any[]
     */
    Repository.chunkArray = function (array, chunk) {
        var arrayChunked = [];
        for (var i = 0, j = array.length; i < j; i += chunk) {
            arrayChunked.push(array.slice(i, i + chunk));
        }
        return arrayChunked;
    };
    return Repository;
}());
exports.Repository = Repository;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Item_1 = __webpack_require__(9);
var ItemUUID_1 = __webpack_require__(11);
/**
 * Transformer
 */
var Transformer = /** @class */ (function () {
    function Transformer() {
        this.readTransformers = [];
        this.writeTransformers = [];
    }
    /**
     * Add read transformer
     *
     * @param readTransformer
     */
    Transformer.prototype.addReadTransformer = function (readTransformer) {
        this
            .readTransformers
            .push(readTransformer);
    };
    /**
     * Add write transformer
     *
     * @param writeTransformer
     */
    Transformer.prototype.addWriteTransformer = function (writeTransformer) {
        this
            .writeTransformers
            .push(writeTransformer);
    };
    /**
     * Items to objects
     *
     * @param items
     *
     * @returns {any[]}
     */
    Transformer.prototype.fromItems = function (items) {
        var objects = [];
        for (var i in items) {
            objects.push(this.fromItem(items[i]));
        }
        return objects;
    };
    /**
     * Item to object
     *
     * @param item
     *
     * @returns {any}
     */
    Transformer.prototype.fromItem = function (item) {
        for (var i in this.readTransformers) {
            var transformer = this.readTransformers[i];
            if (transformer.isValidItem(item)) {
                return transformer.fromItem(item);
            }
        }
        return item;
    };
    /**
     * Objects to items
     *
     * @param objects
     *
     * @returns {Item[]}
     */
    Transformer.prototype.toItems = function (objects) {
        var items = [];
        for (var i in objects) {
            var item = this.toItem(objects[i]);
            if (item instanceof Item_1.Item) {
                items.push(item);
            }
        }
        return items;
    };
    /**
     * Object to item
     *
     * @param object
     *
     * @returns {any}
     */
    Transformer.prototype.toItem = function (object) {
        for (var i in this.writeTransformers) {
            var transformer = this.writeTransformers[i];
            if (transformer.isValidObject(object)) {
                return transformer.toItem(object);
            }
        }
        return object;
    };
    /**
     * Objects to items
     *
     * @param objects
     *
     * @returns {ItemUUID[]}
     */
    Transformer.prototype.toItemUUIDs = function (objects) {
        var itemUUIDs = [];
        for (var i in objects) {
            var itemUUID = this.toItemUUID(objects[i]);
            if (itemUUID instanceof ItemUUID_1.ItemUUID) {
                itemUUIDs.push(itemUUID);
            }
        }
        return itemUUIDs;
    };
    /**
     * Object to item
     *
     * @param object
     *
     * @returns {any}
     */
    Transformer.prototype.toItemUUID = function (object) {
        for (var i in this.writeTransformers) {
            var transformer = this.writeTransformers[i];
            if (transformer.isValidObject(object)) {
                return transformer.toItemUUID(object);
            }
        }
        return object;
    };
    return Transformer;
}());
exports.Transformer = Transformer;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Result class
 */
var Synonym = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param words
     */
    function Synonym(words) {
        this.words = words;
    }
    /**
     * get words
     *
     * @return {string[]}
     */
    Synonym.prototype.getWords = function () {
        return this.words;
    };
    /**
     * Create by words
     *
     * @param words
     *
     * @return {Synonym}
     */
    Synonym.createbyWords = function (words) {
        return new Synonym(words);
    };
    /**
     * To array
     *
     * @return {{words: string[]}}
     */
    Synonym.prototype.toArray = function () {
        return {
            words: this.words
        };
    };
    /**
     * create from array
     *
     * @param array
     *
     * @returns {Synonym}
     */
    Synonym.createFromArray = function (array) {
        return new Synonym(array.words instanceof Object
            ? array.words
            : []);
    };
    /**
     * Expand
     *
     * @returns {string}
     */
    Synonym.prototype.expand = function () {
        return this.words.join(",");
    };
    return Synonym;
}());
exports.Synonym = Synonym;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

var toString = Object.prototype.toString;

module.exports = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';

  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';

  switch (ctorName(val)) {
    case 'Symbol': return 'symbol';
    case 'Promise': return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap': return 'weakmap';
    case 'WeakSet': return 'weakset';
    case 'Map': return 'map';
    case 'Set': return 'set';

    // 8-bit typed arrays
    case 'Int8Array': return 'int8array';
    case 'Uint8Array': return 'uint8array';
    case 'Uint8ClampedArray': return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array': return 'int16array';
    case 'Uint16Array': return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array': return 'int32array';
    case 'Uint32Array': return 'uint32array';
    case 'Float32Array': return 'float32array';
    case 'Float64Array': return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]': return 'object';
    // iterators
    case '[object Map Iterator]': return 'mapiterator';
    case '[object Set Iterator]': return 'setiterator';
    case '[object String Iterator]': return 'stringiterator';
    case '[object Array Iterator]': return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return val.constructor ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function'
    && typeof val.getDate === 'function'
    && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string'
    && typeof val.ignoreCase === 'boolean'
    && typeof val.multiline === 'boolean'
    && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val.throw === 'function'
    && typeof val.return === 'function'
    && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(49);

var _search = __webpack_require__(50);

var _search2 = _interopRequireDefault(_search);

var _index = __webpack_require__(133);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Initialize documentation search
 */
_search2.default.init();

/**
 * Initialize dom actions
 */
_index2.default.mount();

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _apisearchUi = __webpack_require__(51);

var _apisearchUi2 = _interopRequireDefault(_apisearchUi);

var _templates = __webpack_require__(131);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apisearchConfig = __webpack_require__(132);

var ui = _apisearchUi2.default.create({
    app_id: apisearchConfig.app_id,
    index_id: apisearchConfig.index_id,
    token: apisearchConfig.query_token,
    options: {
        endpoint: apisearchConfig.query_hostname
    }
});

ui.addWidgets(ui.widgets.searchInput({
    target: '#searchInput',
    placeholder: 'Search documentation...',
    autofocus: true,
    highlightsEnabled: true,
    classNames: {
        container: '',
        input: 'c-search__searchInput form-control mr-sm-2',
        clearSearch: 'c-search__clearSearch'
    },
    template: {
        clearSearch: '<span class="fa fa-times"></span>'
    }
}), ui.widgets.result({
    target: '#topicsSearchResult',
    itemsPerPage: 12,
    template: {
        itemsList: _templates.resultSearchTemplate
    },
    classNames: {
        itemsList: 'row'
    }
}));

ui.attach('render', function () {
    var resultBox = document.querySelector('#searchResult').classList;

    if (this.dirty) {
        return;
    }

    if (this.currentQuery.q === '') {
        resultBox.add('d-none');
        return;
    }

    resultBox.remove('d-none');
});

exports.default = ui;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ApisearchUI_1 = __webpack_require__(22);
exports["default"] = ApisearchUI_1["default"];


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var NoCache_1 = __webpack_require__(53);
var AxiosClient_1 = __webpack_require__(23);
var RetryMap_1 = __webpack_require__(31);
var Query_1 = __webpack_require__(14);
var Query_2 = __webpack_require__(14);
var Query_3 = __webpack_require__(14);
var SortBy_1 = __webpack_require__(19);
var HttpRepository_1 = __webpack_require__(36);
var Result_1 = __webpack_require__(20);
var ResultAggregations_1 = __webpack_require__(21);
var Transformer_1 = __webpack_require__(45);
/**
 * Apisearch class
 */
var Apisearch = /** @class */ (function () {
    function Apisearch() {
    }
    /**
     * Constructor
     *
     * @param config
     *
     * @return {HttpRepository}
     */
    Apisearch.createRepository = function (config) {
        Apisearch.ensureRepositoryConfigIsValid(config);
        config.options = tslib_1.__assign({ api_version: "v1", cache: new NoCache_1.NoCache(), timeout: 5000, override_queries: true }, config.options);
        /**
         * Client
         */
        var httpClient = typeof config.options.http_client !== "undefined"
            ? config.options.http_client
            : new AxiosClient_1.AxiosClient(config.options.endpoint, config.options.api_version, config.options.timeout, new RetryMap_1.RetryMap(), config.options.override_queries, config.options.cache);
        return new HttpRepository_1.HttpRepository(httpClient, config.app_id, config.index_id, config.token, new Transformer_1.Transformer());
    };
    /**
     * Ensure the Repository configuration is valid
     *
     * @param config
     */
    Apisearch.ensureRepositoryConfigIsValid = function (config) {
        Apisearch.ensureIsDefined(config.app_id, "app_id");
        Apisearch.ensureIsDefined(config.index_id, "index_id");
        Apisearch.ensureIsDefined(config.token, "token");
        Apisearch.ensureIsDefined(config.options.endpoint, "options.endpoint");
    };
    /**
     * Ensure the value is not undefined
     *
     * @param param
     * @param name
     */
    Apisearch.ensureIsDefined = function (param, name) {
        if (typeof param === "undefined") {
            throw new TypeError(name + " parameter must be defined.");
        }
    };
    /**
     * Created located
     *
     * @param coordinate
     * @param queryText
     * @param page
     * @param size
     *
     * @returns {Query}
     */
    Apisearch.createQueryLocated = function (coordinate, queryText, page, size) {
        if (page === void 0) { page = Query_1.QUERY_DEFAULT_PAGE; }
        if (size === void 0) { size = Query_2.QUERY_DEFAULT_SIZE; }
        return Query_3.Query.createLocated(coordinate, queryText, page, size);
    };
    /**
     * Create
     *
     * @param queryText
     * @param page
     * @param size
     *
     * @returns {Query}
     */
    Apisearch.createQuery = function (queryText, page, size) {
        if (page === void 0) { page = Query_1.QUERY_DEFAULT_PAGE; }
        if (size === void 0) { size = Query_2.QUERY_DEFAULT_SIZE; }
        return Query_3.Query.create(queryText, page, size);
    };
    /**
     * Create match all
     *
     * @return {Query}
     */
    Apisearch.createQueryMatchAll = function () {
        return Query_3.Query.createMatchAll();
    };
    /**
     * Create by UUID
     *
     * @param uuid
     *
     * @return {Query}
     */
    Apisearch.createQueryByUUID = function (uuid) {
        return Query_3.Query.createByUUID(uuid);
    };
    /**
     * Create by UUIDs
     *
     * @param uuids
     *
     * @return {Query}
     */
    Apisearch.createQueryByUUIDs = function () {
        var uuids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            uuids[_i] = arguments[_i];
        }
        return Query_3.Query.createByUUIDs.apply(Query_3.Query, uuids);
    };
    /**
     * Create empty result
     *
     * @return {Result}
     */
    Apisearch.createEmptyResult = function () {
        return Result_1.Result.create(Apisearch.createQueryMatchAll(), 0, 0, new ResultAggregations_1.ResultAggregations(0), [], []);
    };
    /**
     * Create empty sortby
     *
     * @return {SortBy}
     */
    Apisearch.createEmptySortBy = function () {
        return SortBy_1.SortBy.create();
    };
    return Apisearch;
}());
exports["default"] = Apisearch;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Cache class
 */
var NoCache = /** @class */ (function () {
    function NoCache() {
    }
    /**
     * Set cache element
     *
     * @param key
     * @param value
     *
     * @returns {void}
     */
    NoCache.prototype.set = function (key, value) {
        // Empty
    };
    /**
     * Get element from cache
     *
     * @param key
     *
     * @returns {any}
     */
    NoCache.prototype.get = function (key) {
        return undefined;
    };
    /**
     * Deletes element from cache
     *
     * @param key
     */
    NoCache.prototype.del = function (key) {
        // Empty
    };
    /**
     * Clear cache
     */
    NoCache.prototype.clear = function () {
        // Empty
    };
    return NoCache;
}());
exports.NoCache = NoCache;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);
var bind = __webpack_require__(24);
var Axios = __webpack_require__(57);
var defaults = __webpack_require__(17);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(28);
axios.CancelToken = __webpack_require__(71);
axios.isCancel = __webpack_require__(27);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(72);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(17);
var utils = __webpack_require__(2);
var InterceptorManager = __webpack_require__(66);
var dispatchRequest = __webpack_require__(67);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(26);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);
var transformData = __webpack_require__(68);
var isCancel = __webpack_require__(27);
var defaults = __webpack_require__(17);
var isAbsoluteURL = __webpack_require__(69);
var combineURLs = __webpack_require__(70);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(28);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var InvalidFormatError_1 = __webpack_require__(3);
var IndexUUID_1 = __webpack_require__(74);
var AppUUID_1 = __webpack_require__(75);
/**
 * Index class
 */
var Index = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param uuid
     * @param appUUID
     * @param isOK
     * @param docCount
     * @param size
     */
    function Index(uuid, appUUID, isOK, docCount, size) {
        if (isOK === void 0) { isOK = false; }
        if (docCount === void 0) { docCount = 0; }
        if (size === void 0) { size = '0kb'; }
        this.uuid = uuid;
        this.appUUID = appUUID;
        this.isOK = isOK;
        this.docCount = docCount;
        this.size = size;
    }
    /**
     * Get uuid
     *
     * @return {IndexUUID}
     */
    Index.prototype.getUUID = function () {
        return this.uuid;
    };
    /**
     * Get app id
     *
     * @return {AppUUID}
     */
    Index.prototype.getAppUUID = function () {
        return this.appUUID;
    };
    /**
     * Index is OK
     *
     * @return {boolean}
     */
    Index.prototype.isOk = function () {
        return this.isOK;
    };
    /**
     * Get doc count
     *
     * @return {number}
     */
    Index.prototype.getDocCount = function () {
        return this.docCount;
    };
    /**
     * get size
     *
     * @return {string}
     */
    Index.prototype.getSize = function () {
        return this.size;
    };
    /**
     * To array
     *
     * @returns {{id: string, attributes: {}}}
     */
    Index.prototype.toArray = function () {
        return {
            uuid: this.uuid.toArray(),
            app_id: this.appUUID.toArray(),
            is_ok: this.isOK,
            doc_count: this.docCount,
            size: this.size
        };
    };
    /**
     * Create from array
     *
     * @param array
     *
     * @return User
     */
    Index.createFromArray = function (array) {
        if (typeof array.uuid == "undefined" ||
            typeof array.app_id == "undefined") {
            throw InvalidFormatError_1.InvalidFormatError.indexFormatNotValid();
        }
        return new Index(IndexUUID_1.IndexUUID.createFromArray(array.uuid), AppUUID_1.AppUUID.createFromArray(array.app_id), (typeof array.is_ok == "undefined" ? false : array.is_ok), (typeof array.doc_count == "undefined" ? 0 : array.doc_count), (typeof array.size == "undefined" ? '0kb' : array.size));
    };
    return Index;
}());
exports.Index = Index;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var InvalidFormatError_1 = __webpack_require__(3);
/**
 * IndexUUID class
 */
var IndexUUID = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param id
     */
    function IndexUUID(id) {
        if (id.indexOf('_') >= 0) {
            throw InvalidFormatError_1.InvalidFormatError.indexUUIDFormatNotValid();
        }
        this.id = id;
    }
    /**
     * Create by id
     *
     * @param id
     *
     * @returns {ItemUUID}
     */
    IndexUUID.createById = function (id) {
        return new IndexUUID(id);
    };
    /**
     * Return id
     *
     * @returns {string}
     */
    IndexUUID.prototype.getId = function () {
        return this.id;
    };
    /**
     * To array
     *
     * @returns {{id: *, type: *}}
     */
    IndexUUID.prototype.toArray = function () {
        return {
            id: this.id
        };
    };
    /**
     * Create from array
     *
     * @param array {{id:string, type:string}}
     *
     * @return {ItemUUID}
     */
    IndexUUID.createFromArray = function (array) {
        array = JSON.parse(JSON.stringify(array));
        return new IndexUUID(array.id);
    };
    /**
     * Compose unique id
     *
     * @returns {string}
     */
    IndexUUID.prototype.composedUUID = function () {
        return this.id;
    };
    return IndexUUID;
}());
exports.IndexUUID = IndexUUID;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var InvalidFormatError_1 = __webpack_require__(3);
/**
 * AppUUID class
 */
var AppUUID = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param id
     */
    function AppUUID(id) {
        if (id.indexOf('_') >= 0) {
            throw InvalidFormatError_1.InvalidFormatError.appUUIDFormatNotValid();
        }
        this.id = id;
    }
    /**
     * Create by id
     *
     * @param id
     *
     * @returns {ItemUUID}
     */
    AppUUID.createById = function (id) {
        return new AppUUID(id);
    };
    /**
     * Return id
     *
     * @returns {string}
     */
    AppUUID.prototype.getId = function () {
        return this.id;
    };
    /**
     * To array
     *
     * @returns {{id: *, type: *}}
     */
    AppUUID.prototype.toArray = function () {
        return {
            id: this.id
        };
    };
    /**
     * Create from array
     *
     * @param array {{id:string, type:string}}
     *
     * @return {ItemUUID}
     */
    AppUUID.createFromArray = function (array) {
        array = JSON.parse(JSON.stringify(array));
        return new AppUUID(array.id);
    };
    /**
     * Compose unique id
     *
     * @returns {string}
     */
    AppUUID.prototype.composedUUID = function () {
        return this.id;
    };
    return AppUUID;
}());
exports.AppUUID = AppUUID;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
/**
 * Cache class
 */
var InMemoryCache = /** @class */ (function () {
    /**
     * Constructor
     */
    function InMemoryCache() {
        this.cache = {};
        this.size = 0;
        this.cache = {};
        this.size = 0;
    }
    /**
     * Set cache element
     *
     * @param key
     * @param value
     *
     * @returns {void}
     */
    InMemoryCache.prototype.set = function (key, value) {
        var _a;
        this.cache = tslib_1.__assign({}, this.cache, (_a = {}, _a[key] = value, _a));
        this.size = this.size + 1;
    };
    /**
     * Get element from cache
     *
     * @param key
     *
     * @returns {any}
     */
    InMemoryCache.prototype.get = function (key) {
        return this.cache[key];
    };
    /**
     * Deletes element from cache
     *
     * @param key
     */
    InMemoryCache.prototype.del = function (key) {
        delete this.cache[key];
    };
    /**
     * Clear cache
     */
    InMemoryCache.prototype.clear = function () {
        this.cache = {};
        this.size = 0;
    };
    return InMemoryCache;
}());
exports.InMemoryCache = InMemoryCache;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Synonym_1 = __webpack_require__(46);
/**
 * Result class
 */
var Config = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param language
     * @param storeSearchableMetadata
     */
    function Config(language, storeSearchableMetadata) {
        if (language === void 0) { language = null; }
        if (storeSearchableMetadata === void 0) { storeSearchableMetadata = true; }
        this.synonyms = [];
        this.language = language;
        this.storeSearchableMetadata = storeSearchableMetadata;
    }
    /**
     * Get language
     *
     * @return {string}
     */
    Config.prototype.getLanguage = function () {
        return this.language;
    };
    /**
     * Should searchable metadata be stored
     *
     * @return {boolean}
     */
    Config.prototype.shouldSearchableMetadataBeStored = function () {
        return this.storeSearchableMetadata;
    };
    /**
     * Add synonym
     *
     * @param synonym
     */
    Config.prototype.addSynonym = function (synonym) {
        this.synonyms.push(synonym);
    };
    /**
     * Get synonyms
     *
     * @return {Synonym[]}
     */
    Config.prototype.getSynonyms = function () {
        return this.synonyms;
    };
    /**
     * to array
     */
    Config.prototype.toArray = function () {
        return {
            language: this.language,
            store_searchable_metadata: this.storeSearchableMetadata,
            synonyms: this.synonyms.map(function (synonym) { return synonym.toArray(); })
        };
    };
    /**
     * Create from array
     */
    Config.createFromArray = function (array) {
        var immutableConfig = new Config(array.language ? array.language : null, typeof array.store_searchable_metadata == "boolean"
            ? array.store_searchable_metadata
            : true);
        if (array.synonyms instanceof Array &&
            array.synonyms.length > 0) {
            immutableConfig.synonyms = array.synonyms.map(function (synonym) { return Synonym_1.Synonym.createFromArray(synonym); });
        }
        return immutableConfig;
    };
    return Config;
}());
exports.Config = Config;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var ErrorWithMessage_1 = __webpack_require__(4);
/**
 * EventError
 */
var EventError = /** @class */ (function (_super) {
    tslib_1.__extends(EventError, _super);
    function EventError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get transportable http error
     *
     * @return {number}
     */
    EventError.throwEndpointNotAvailable = function () {
        return new EventError("Endpoint not available");
    };
    return EventError;
}(ErrorWithMessage_1.ErrorWithMessage));
exports.EventError = EventError;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var ErrorWithMessage_1 = __webpack_require__(4);
/**
 * Forbidden Error
 */
var ForbiddenError = /** @class */ (function (_super) {
    tslib_1.__extends(ForbiddenError, _super);
    function ForbiddenError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get transportable http error
     *
     * @return {number}
     */
    ForbiddenError.getTransportableHTTPError = function () {
        return 403;
    };
    /**
     * App id is required
     *
     * @return {ForbiddenError}
     */
    ForbiddenError.createAppIdIsRequiredException = function () {
        return new ForbiddenError("AppId query parameter MUST be defined with a valid value");
    };
    /**
     * Index id is required
     *
     * @return {ForbiddenError}
     */
    ForbiddenError.createIndexIsRequiredException = function () {
        return new ForbiddenError("Index query parameter MUST be defined with a valid value");
    };
    /**
     * Token is required
     *
     * @return {ForbiddenError}
     */
    ForbiddenError.createTokenIsRequiredException = function () {
        return new ForbiddenError("Token query parameter MUST be defined with a valid value");
    };
    return ForbiddenError;
}(ErrorWithMessage_1.ErrorWithMessage));
exports.ForbiddenError = ForbiddenError;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var ErrorWithMessage_1 = __webpack_require__(4);
/**
 * Unsupported content type error
 */
var UnsupportedContentTypeError = /** @class */ (function (_super) {
    tslib_1.__extends(UnsupportedContentTypeError, _super);
    function UnsupportedContentTypeError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get transportable http error
     *
     * @return {number}
     */
    UnsupportedContentTypeError.getTransportableHTTPError = function () {
        return 415;
    };
    /**
     * Unsupported content type
     *
     * @return {InvalidFormatError}
     */
    UnsupportedContentTypeError.createUnsupportedContentTypeException = function () {
        return new UnsupportedContentTypeError("This content type is not accepted. Please use application/json");
    };
    return UnsupportedContentTypeError;
}(ErrorWithMessage_1.ErrorWithMessage));
exports.UnsupportedContentTypeError = UnsupportedContentTypeError;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(0);
var Coordinate_1 = __webpack_require__(15);
/**
 * Abstract Location Range class
 */
var LocationRange = /** @class */ (function () {
    function LocationRange() {
    }
    /**
     * From filter object
     *
     * @param object
     *
     * @return {LocationRange}
     */
    LocationRange.fromFilterObject = function (object) {
        throw TypeError("Method not valid");
    };
    /**
     * to array
     */
    LocationRange.prototype.toArray = function () {
        return {
            type: this.getName(),
            data: this.toFilterObject()
        };
    };
    /**
     * Create from array
     *
     * @param array
     */
    LocationRange.createFromArray = function (array) {
        if (array.type == "CoordinateAndDistance") {
            return CoordinateAndDistance.fromFilterObject(array.data);
        }
        if (array.type == "Polygon") {
            return Polygon.fromFilterObject(array.data);
        }
        if (array.type == "Square") {
            return Square.fromFilterObject(array.data);
        }
    };
    return LocationRange;
}());
exports.LocationRange = LocationRange;
/**
 * CoordinateAndDistance
 */
var CoordinateAndDistance = /** @class */ (function (_super) {
    tslib_1.__extends(CoordinateAndDistance, _super);
    /**
     * Constructor
     *
     * @param coordinate
     * @param distance
     */
    function CoordinateAndDistance(coordinate, distance) {
        var _this = _super.call(this) || this;
        _this.coordinate = coordinate;
        _this.distance = distance;
        return _this;
    }
    /**
     * To filter object
     *
     * @return {{}}}
     */
    CoordinateAndDistance.prototype.toFilterObject = function () {
        return {
            coordinate: this.coordinate.toArray(),
            distance: this.distance
        };
    };
    /**
     * Get name
     *
     * @return {string}
     */
    CoordinateAndDistance.prototype.getName = function () {
        return "CoordinateAndDistance";
    };
    /**
     * From filter object
     *
     * @param object
     *
     * @return {LocationRange}
     */
    CoordinateAndDistance.fromFilterObject = function (object) {
        return new CoordinateAndDistance(Coordinate_1.Coordinate.createFromArray(object.coordinate), object.distance);
    };
    return CoordinateAndDistance;
}(LocationRange));
exports.CoordinateAndDistance = CoordinateAndDistance;
/**
 * Polygon
 */
var Polygon = /** @class */ (function (_super) {
    tslib_1.__extends(Polygon, _super);
    /**
     * Constructor
     *
     * @param coordinates
     */
    function Polygon(coordinates) {
        var _this = _super.call(this) || this;
        if (coordinates.length < 3) {
            throw new Error("A polygon needs more than two coordinates.");
        }
        _this.coordinates = coordinates;
        return _this;
    }
    /**
     * To filter object
     *
     * @return {{coordinates: {lat:number, lon:number}[]}}
     */
    Polygon.prototype.toFilterObject = function () {
        var coordinates = [];
        for (var i in this.coordinates) {
            coordinates.push(this.coordinates[i].toArray());
        }
        return {
            coordinates: coordinates
        };
    };
    /**
     * Get name
     *
     * @return {string}
     */
    Polygon.prototype.getName = function () {
        return "Polygon";
    };
    /**
     * From filter object
     *
     * @param object
     *
     * @return {Polygon}
     */
    Polygon.fromFilterObject = function (object) {
        var coordinates = [];
        for (var i in object.coordinates) {
            coordinates.push(Coordinate_1.Coordinate.createFromArray(object.coordinates[i]));
        }
        return new Polygon(coordinates);
    };
    return Polygon;
}(LocationRange));
exports.Polygon = Polygon;
/**
 * Square
 */
var Square = /** @class */ (function (_super) {
    tslib_1.__extends(Square, _super);
    /**
     * Constructor
     *
     * @param topLeftCoordinate
     * @param bottomRightCoordinate
     */
    function Square(topLeftCoordinate, bottomRightCoordinate) {
        var _this = _super.call(this) || this;
        _this.topLeftCoordinate = topLeftCoordinate;
        _this.bottomRightCoordinate = bottomRightCoordinate;
        return _this;
    }
    /**
     * To filter object
     *
     * @return {{}}}
     */
    Square.prototype.toFilterObject = function () {
        return {
            top_left: this.topLeftCoordinate.toArray(),
            bottom_right: this.bottomRightCoordinate.toArray()
        };
    };
    /**
     * Get name
     *
     * @return {string}
     */
    Square.prototype.getName = function () {
        return "Square";
    };
    /**
     * From filter object
     *
     * @param object
     *
     * @return {LocationRange}
     */
    Square.fromFilterObject = function (object) {
        return new Square(Coordinate_1.Coordinate.createFromArray(object.top_left), Coordinate_1.Coordinate.createFromArray(object.bottom_right));
    };
    return Square;
}(LocationRange));
exports.Square = Square;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Http class
 */
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    return HttpClient;
}());
exports.HttpClient = HttpClient;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * filter constants
 */
exports.TYPE_VALUE = 1;
exports.TYPE_LITERAL = 4;
exports.TYPE_ARRAY_ELEMENT_UPDATE = 8;
exports.TYPE_ARRAY_ELEMENT_ADD = 16;
exports.TYPE_ARRAY_ELEMENT_DELETE = 32;
exports.TYPE_ARRAY_EXPECTS_ELEMENT = 24;
exports.TYPE_ARRAY = 56;
/**
 * Changes Type cast
 * @param Changes
 */
var Changes = /** @class */ (function () {
    function Changes() {
        /**
         * Changes
         *
         * @type {Array}
         */
        this.changes = [];
    }
    /**
     * Add new change
     *
     * @param field
     * @param value
     * @param type
     */
    Changes.prototype.addChange = function (field, value, type) {
        if (type === void 0) { type = exports.TYPE_VALUE; }
        this.changes.push({
            field: field,
            type: type,
            value: value
        });
    };
    /**
     * Update element from list
     *
     * @param field
     * @param condition
     * @param value
     * @param type
     */
    Changes.prototype.updateElementFromList = function (field, condition, value, type) {
        this.changes.push({
            field: field,
            type: type | exports.TYPE_ARRAY_ELEMENT_UPDATE,
            condition: condition,
            value: value
        });
    };
    /**
     * Add element in list
     *
     * @param field
     * @param value
     * @param type
     */
    Changes.prototype.addElementInList = function (field, value, type) {
        this.changes.push({
            field: field,
            type: type | exports.TYPE_ARRAY_ELEMENT_ADD,
            value: value
        });
    };
    /**
     * Delete element from list
     *
     * @param field
     * @param condition
     */
    Changes.prototype.deleteElementFromList = function (field, condition) {
        this.changes.push({
            field: field,
            type: exports.TYPE_ARRAY_ELEMENT_DELETE,
            condition: condition
        });
    };
    /**
     * Get changes
     *
     * @returns {[]}
     */
    Changes.prototype.getChanges = function () {
        return this.changes;
    };
    /**
     * Create
     *
     * @returns {Changes}
     */
    Changes.create = function () {
        return new Changes();
    };
    /**
     * To array
     *
     * @returns {[]}
     */
    Changes.prototype.toArray = function () {
        return JSON.parse(JSON.stringify(this.changes));
    };
    /**
     * Create from array
     *
     * @param array
     *
     * @returns {Changes}
     */
    Changes.createFromArray = function (array) {
        array = JSON.parse(JSON.stringify(array));
        var changes = Changes.create();
        changes.changes = array;
        return changes;
    };
    return Changes;
}());
exports.Changes = Changes;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Aggregation constants
 */
exports.RANGE_ZERO = 0;
exports.RANGE_INFINITE = -1;
exports.RANGE_SEPARATOR = "..";
/**
 * Filter class
 */
var Range = /** @class */ (function () {
    function Range() {
    }
    /**
     * Strong to array
     *
     * @param string
     *
     * @returns {[number, number]}
     */
    Range.stringToArray = function (string) {
        var parts = string.split(exports.RANGE_SEPARATOR);
        var from = parts[0];
        var to = parts[1];
        var finalFrom = exports.RANGE_ZERO;
        var finalTo = exports.RANGE_INFINITE;
        if (from != "") {
            finalFrom = parseInt(from);
        }
        if (to != "") {
            finalTo = parseInt(to);
        }
        return [finalFrom, finalTo];
    };
    /**
     * Array to string
     *
     * @param values
     *
     * @return {string}
     */
    Range.arrayToString = function (values) {
        var finalValues = ["", ""];
        if (values[0] != exports.RANGE_ZERO) {
            finalValues[0] = String(values[0]);
        }
        if (values[1] != exports.RANGE_INFINITE) {
            finalValues[1] = String(values[1]);
        }
        return finalValues.join(exports.RANGE_SEPARATOR);
    };
    /**
     * Create ranges
     *
     * @param from
     * @param to
     * @param incremental
     */
    Range.createRanges = function (from, to, incremental) {
        var ranges = [];
        var nextTo;
        while (from < to) {
            nextTo = from + incremental;
            ranges.push(from + exports.RANGE_SEPARATOR + nextTo);
            from = nextTo;
        }
        return ranges;
    };
    return Range;
}());
exports.Range = Range;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Constants_1 = __webpack_require__(5);
var Container_1 = __webpack_require__(6);
/**
 * Initial data fetching action
 *
 * @param environmentId
 * @param query
 * @param repository
 */
function initialDataFetchAction(environmentId, query, repository) {
    var dispatcher = Container_1["default"].get(Constants_1.APISEARCH_DISPATCHER + "__" + environmentId);
    repository
        .query(query)
        .then(function (result) {
        dispatcher.dispatch({
            type: "RENDER_INITIAL_DATA",
            payload: {
                query: query,
                result: result
            }
        });
    });
}
exports.initialDataFetchAction = initialDataFetchAction;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var flux_1 = __webpack_require__(87);
var apisearch_1 = __webpack_require__(13);
var ApisearchUI_1 = __webpack_require__(22);
var Container_1 = __webpack_require__(6);
var Store_1 = __webpack_require__(90);
var Constants_1 = __webpack_require__(5);
/**
 * Bootstrap application
 *
 * @param environmentId
 * @param config
 */
function bootstrap(environmentId, config) {
    var configAsString = JSON.stringify(config);
    var repositoryId = Constants_1.APISEARCH_REPOSITORY + "__" + configAsString;
    var storeId = Constants_1.APISEARCH_STORE + "__" + environmentId;
    var dispatcherId = Constants_1.APISEARCH_DISPATCHER + "__" + environmentId;
    var asuiId = Constants_1.APISEARCH_UI + "__" + environmentId;
    /**
     * Register Apisearch repository
     */
    Container_1["default"].register(repositoryId, function () {
        return apisearch_1["default"].createRepository(config);
    });
    /**
     * Register apisearch store
     */
    Container_1["default"].register(storeId, function () {
        return new Store_1["default"]();
    });
    /**
     * Register an event dispatcher
     */
    Container_1["default"].register(dispatcherId, function () {
        return new flux_1.Dispatcher();
    });
    /**
     * Apisearch UI Instance
     */
    Container_1["default"].register(asuiId, function () {
        return new ApisearchUI_1["default"](environmentId, Container_1["default"].get(repositoryId), Container_1["default"].get(storeId));
    });
}
exports.bootstrap = bootstrap;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Dispatcher = __webpack_require__(88);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * 
 * @preventMunge
 */



exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = __webpack_require__(89);

var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *         case 'city-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

var Dispatcher = (function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this._callbacks = {};
    this._isDispatching = false;
    this._isHandled = {};
    this._isPending = {};
    this._lastID = 1;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   */

  Dispatcher.prototype.register = function register(callback) {
    var id = _prefix + this._lastID++;
    this._callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   */

  Dispatcher.prototype.unregister = function unregister(id) {
    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
    delete this._callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   */

  Dispatcher.prototype.waitFor = function waitFor(ids) {
    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this._isPending[id]) {
        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
        continue;
      }
      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
      this._invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   */

  Dispatcher.prototype.dispatch = function dispatch(payload) {
    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
    this._startDispatching(payload);
    try {
      for (var id in this._callbacks) {
        if (this._isPending[id]) {
          continue;
        }
        this._invokeCallback(id);
      }
    } finally {
      this._stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   */

  Dispatcher.prototype.isDispatching = function isDispatching() {
    return this._isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @internal
   */

  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
    this._isPending[id] = true;
    this._callbacks[id](this._pendingPayload);
    this._isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
    for (var id in this._callbacks) {
      this._isPending[id] = false;
      this._isHandled[id] = false;
    }
    this._pendingPayload = payload;
    this._isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
    delete this._pendingPayload;
    this._isDispatching = false;
  };

  return Dispatcher;
})();

module.exports = Dispatcher;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var apisearch_1 = __webpack_require__(13);
var events_1 = __webpack_require__(91);
/**
 * Flux pattern store class
 */
var Store = /** @class */ (function (_super) {
    __extends(Store, _super);
    /**
     * Constructor
     */
    function Store() {
        var _this = _super.call(this) || this;
        /**
         * Store initial state
         */
        _this.dirty = true;
        /**
         * Current query instance
         */
        _this.currentQuery = apisearch_1["default"].createQueryMatchAll();
        /**
         * Data received
         */
        _this.currentResult = apisearch_1["default"].createEmptyResult();
        return _this;
    }
    /**
     * Is dirty
     *
     * @return {any}
     */
    Store.prototype.isDirty = function () {
        return this.dirty;
    };
    /**
     * Get current query
     *
     * @return {Query}
     */
    Store.prototype.getCurrentQuery = function () {
        return this.currentQuery;
    };
    /**
     * Get current result
     *
     * @return {Result}
     */
    Store.prototype.getCurrentResult = function () {
        return this.currentResult;
    };
    /**
     * Handle Dispatched actions
     *
     * This is what we call a reducer
     * on a Redux architecture
     */
    Store.prototype.handleActions = function (action) {
        /**
         * When action only sets up store definitions
         * Does not dispatch any event
         */
        if (action.type === "UPDATE_APISEARCH_SETUP") {
            this.currentQuery = action.payload.query;
        }
        /**
         * Is triggered when a initial data is received
         * Dispatches an 'render' event
         */
        if (action.type === "RENDER_INITIAL_DATA") {
            var _a = action.payload, result = _a.result, query = _a.query;
            this.currentResult = result;
            this.currentQuery = query;
            this.emit("render");
        }
        /**
         * When action triggers a re-rendering
         * Dispatches a 'render' event
         */
        if (action.type === "RENDER_FETCHED_DATA") {
            var _b = action.payload, result = _b.result, query = _b.query;
            this.dirty = false;
            this.currentResult = result;
            this.currentQuery = query;
            this.emit("render");
        }
    };
    return Store;
}(events_1.EventEmitter));
exports["default"] = Store;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Create an envID
 */
exports.createEnvironmentId = function () { return "env_" + Math.ceil(Math.random() * (9999999 - 1) + 1); };


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ClearFilters_1 = __webpack_require__(94);
var Information_1 = __webpack_require__(108);
var MultipleFilter_1 = __webpack_require__(110);
var Pagination_1 = __webpack_require__(116);
var Result_1 = __webpack_require__(121);
var SearchInput_1 = __webpack_require__(125);
var SortBy_1 = __webpack_require__(128);
/**
 * Widget factories
 */
exports["default"] = {
    searchInput: SearchInput_1["default"],
    clearFilters: ClearFilters_1["default"],
    multipleFilter: MultipleFilter_1["default"],
    sortBy: SortBy_1["default"],
    information: Information_1["default"],
    result: Result_1["default"],
    pagination: Pagination_1["default"]
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var ClearFiltersComponent_1 = __webpack_require__(95);
var Widget_1 = __webpack_require__(10);
/**
 * Clear Filters
 */
var ClearFilters = /** @class */ (function (_super) {
    __extends(ClearFilters, _super);
    /**
     * Constructor
     *
     * @param target
     * @param classNames
     * @param template
     */
    function ClearFilters(_a) {
        var target = _a.target, classNames = _a.classNames, template = _a.template;
        var _this = _super.call(this) || this;
        _this.target = target;
        _this.component = preact_1.h(ClearFiltersComponent_1["default"], { target: target, classNames: __assign({}, ClearFiltersComponent_1["default"].defaultProps.classNames, classNames), template: template });
        return _this;
    }
    /**
     * Widget
     *
     * @param environmentId
     * @param store
     * @param repository
     */
    ClearFilters.prototype.render = function (environmentId, store, repository) {
        this.component.attributes = __assign({}, this.component.attributes, { environmentId: environmentId, repository: repository, dirty: store.isDirty(), currentResult: store.getCurrentResult(), currentQuery: store.getCurrentQuery() });
        var targetNode = document.querySelector(this.target);
        preact_1.render(this.component, targetNode, targetNode.lastChild);
    };
    return ClearFilters;
}(Widget_1["default"]));
/**
 * Clear filters widget
 *
 * @param settings
 */
exports["default"] = (function (settings) { return new ClearFilters(settings); });


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var Template_1 = __webpack_require__(8);
var ClearFiltersActions_1 = __webpack_require__(99);
/**
 * Result Information Component
 */
var ClearFiltersComponent = /** @class */ (function (_super) {
    __extends(ClearFiltersComponent, _super);
    /**
     * Constructor
     */
    function ClearFiltersComponent() {
        var _this = _super.call(this) || this;
        /**
         * Handle click
         */
        _this.handleClick = function () {
            var props = _this.props;
            var environmentId = props.environmentId;
            var currentQuery = props.currentQuery;
            var repository = props.repository;
            _this.setState({ showClearFilters: false });
            /**
             * Dispatch a clear filter action
             */
            ClearFiltersActions_1.clearFiltersAction(environmentId, currentQuery, repository);
        };
        _this.state = { showClearFilters: false };
        return _this;
    }
    /**
     * Component receive props
     *
     * @param props
     */
    ClearFiltersComponent.prototype.componentWillReceiveProps = function (props) {
        var filters = props.currentQuery.getFilters();
        var areFiltersActive = (Object.keys(filters).length > 1);
        this.setState({ showClearFilters: areFiltersActive });
    };
    /**
     * Render
     *
     * @return {}
     */
    ClearFiltersComponent.prototype.render = function () {
        var props = this.props;
        var containerClassName = props.classNames.container;
        var containerTemplate = props.template.container;
        return (this.state.showClearFilters)
            ? (preact_1.h("div", { className: "as-clearFilters " + containerClassName, onClick: this.handleClick },
                preact_1.h(Template_1["default"], { template: containerTemplate }))) : null;
    };
    return ClearFiltersComponent;
}(preact_1.Component));
ClearFiltersComponent.defaultProps = {
    classNames: {
        container: ''
    },
    template: {
        container: 'Clear filters'
    }
};
exports["default"] = ClearFiltersComponent;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

// This file is for use with Node.js. See dist/ for browser files.

var Hogan = __webpack_require__(97);
Hogan.Template = __webpack_require__(98).Template;
Hogan.template = Hogan.Template;
module.exports = Hogan;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      rLineSep = /\u2028/,
      rParagraphSep = /\u2029/;

  Hogan.tags = {
    '#': 1, '^': 2, '<': 3, '$': 4,
    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
    '{': 10, '&': 11, '_t': 12
  };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push({tag: '_t', text: new String(buf)});
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (tokens[j].text) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].text.toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[delimiters.length - 1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = Hogan.tags[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  // the tags allowed inside super templates
  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        tail = null,
        token = null;

    tail = stack[stack.length - 1];

    while (tokens.length > 0) {
      token = tokens.shift();

      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
        throw new Error('Illegal content in < super tag.');
      }

      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else if (token.tag == '\n') {
        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
      }

      instructions.push(token);
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  function stringifySubstitutions(obj) {
    var items = [];
    for (var key in obj) {
      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
    }
    return "{ " + items.join(",") + " }";
  }

  function stringifyPartials(codeObj) {
    var partials = [];
    for (var key in codeObj.partials) {
      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
    }
    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
  }

  Hogan.stringify = function(codeObj, text, options) {
    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
  }

  var serialNo = 0;
  Hogan.generate = function(tree, text, options) {
    serialNo = 0;
    var context = { code: '', subs: {}, partials: {} };
    Hogan.walk(tree, context);

    if (options.asString) {
      return this.stringify(context, text, options);
    }

    return this.makeTemplate(context, text, options);
  }

  Hogan.wrapMain = function(code) {
    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
  }

  Hogan.template = Hogan.Template;

  Hogan.makeTemplate = function(codeObj, text, options) {
    var template = this.makePartials(codeObj);
    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
    return new this.template(template, text, this, options);
  }

  Hogan.makePartials = function(codeObj) {
    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
    for (key in template.partials) {
      template.partials[key] = this.makePartials(template.partials[key]);
    }
    for (key in codeObj.subs) {
      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
    }
    return template;
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r')
            .replace(rLineSep, '\\u2028')
            .replace(rParagraphSep, '\\u2029');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function createPartial(node, context) {
    var prefix = "<" + (context.prefix || "");
    var sym = prefix + node.n + serialNo++;
    context.partials[sym] = {name: node.n, partials: {}};
    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
    return sym;
  }

  Hogan.codegen = {
    '#': function(node, context) {
      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
                      't.rs(c,p,' + 'function(c,p,t){';
      Hogan.walk(node.nodes, context);
      context.code += '});c.pop();}';
    },

    '^': function(node, context) {
      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
      Hogan.walk(node.nodes, context);
      context.code += '};';
    },

    '>': createPartial,
    '<': function(node, context) {
      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
      Hogan.walk(node.nodes, ctx);
      var template = context.partials[createPartial(node, context)];
      template.subs = ctx.subs;
      template.partials = ctx.partials;
    },

    '$': function(node, context) {
      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
      Hogan.walk(node.nodes, ctx);
      context.subs[node.n] = ctx.code;
      if (!context.inPartial) {
        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
      }
    },

    '\n': function(node, context) {
      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
    },

    '_v': function(node, context) {
      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    },

    '_t': function(node, context) {
      context.code += write('"' + esc(node.text) + '"');
    },

    '{': tripleStache,

    '&': tripleStache
  }

  function tripleStache(node, context) {
    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
  }

  function write(s) {
    return 't.b(' + s + ');';
  }

  Hogan.walk = function(nodelist, context) {
    var func;
    for (var i = 0, l = nodelist.length; i < l; i++) {
      func = Hogan.codegen[nodelist[i].tag];
      func && func(nodelist[i], context);
    }
    return context;
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  }

  Hogan.cache = {};

  Hogan.cacheKey = function(text, options) {
    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
  }

  Hogan.compile = function(text, options) {
    options = options || {};
    var key = Hogan.cacheKey(text, options);
    var template = this.cache[key];

    if (template) {
      var partials = template.partials;
      for (var name in partials) {
        delete partials[name].instance;
      }
      return template;
    }

    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = template;
  }
})( true ? exports : Hogan);


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var Hogan = {};

(function (Hogan) {
  Hogan.Template = function (codeObj, text, compiler, options) {
    codeObj = codeObj || {};
    this.r = codeObj.code || this.r;
    this.c = compiler;
    this.options = options || {};
    this.text = text || '';
    this.partials = codeObj.partials || {};
    this.subs = codeObj.subs || {};
    this.buf = '';
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // ensurePartial
    ep: function(symbol, partials) {
      var partial = this.partials[symbol];

      // check to see that if we've instantiated this partial before
      var template = partials[partial.name];
      if (partial.instance && partial.base == template) {
        return partial.instance;
      }

      if (typeof template == 'string') {
        if (!this.c) {
          throw new Error("No compiler available.");
        }
        template = this.c.compile(template, this.options);
      }

      if (!template) {
        return null;
      }

      // We use this to check whether the partials dictionary has changed
      this.partials[symbol].base = template;

      if (partial.subs) {
        // Make sure we consider parent template now
        if (!partials.stackText) partials.stackText = {};
        for (key in partial.subs) {
          if (!partials.stackText[key]) {
            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
          }
        }
        template = createSpecializedPartial(template, partial.subs, partial.partials,
          this.stackSubs, this.stackPartials, partials.stackText);
      }
      this.partials[symbol].instance = template;

      return template;
    },

    // tries to find a partial in the current scope and render it
    rp: function(symbol, context, partials, indent) {
      var partial = this.ep(symbol, partials);
      if (!partial) {
        return '';
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ms(val, ctx, partials, inverted, start, end, tags);
      }

      pass = !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var found,
          names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          doModelGet = this.options.modelGet,
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        val = ctx[ctx.length - 1];
      } else {
        for (var i = 1; i < names.length; i++) {
          found = findInScope(names[i], val, doModelGet);
          if (found !== undefined) {
            cx = val;
            val = found;
          } else {
            val = '';
          }
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.mv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false,
          doModelGet = this.options.modelGet;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        val = findInScope(key, v, doModelGet);
        if (val !== undefined) {
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.mv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ls: function(func, cx, partials, text, tags) {
      var oldTags = this.options.delimiters;

      this.options.delimiters = tags;
      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
      this.options.delimiters = oldTags;

      return false;
    },

    // compile text
    ct: function(text, cx, partials) {
      if (this.options.disableLambda) {
        throw new Error('Lambda features disabled.');
      }
      return this.c.compile(text, this.options).render(cx, partials);
    },

    // template result buffering
    b: function(s) { this.buf += s; },

    fl: function() { var r = this.buf; this.buf = ''; return r; },

    // method replace section
    ms: function(func, ctx, partials, inverted, start, end, tags) {
      var textSource,
          cx = ctx[ctx.length - 1],
          result = func.call(cx);

      if (typeof result == 'function') {
        if (inverted) {
          return true;
        } else {
          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
        }
      }

      return result;
    },

    // method replace variable
    mv: function(func, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = func.call(cx);

      if (typeof result == 'function') {
        return this.ct(coerceToString(result.call(cx)), cx, partials);
      }

      return result;
    },

    sub: function(name, context, partials, indent) {
      var f = this.subs[name];
      if (f) {
        this.activeSub = name;
        f(context, partials, this, indent);
        this.activeSub = false;
      }
    }

  };

  //Find a key in an object
  function findInScope(key, scope, doModelGet) {
    var val;

    if (scope && typeof scope == 'object') {

      if (scope[key] !== undefined) {
        val = scope[key];

      // try lookup with get for backbone or similar model data
      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
        val = scope.get(key);
      }
    }

    return val;
  }

  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
    function PartialTemplate() {};
    PartialTemplate.prototype = instance;
    function Substitutions() {};
    Substitutions.prototype = instance.subs;
    var key;
    var partial = new PartialTemplate();
    partial.subs = new Substitutions();
    partial.subsText = {};  //hehe. substext.
    partial.buf = '';

    stackSubs = stackSubs || {};
    partial.stackSubs = stackSubs;
    partial.subsText = stackText;
    for (key in subs) {
      if (!stackSubs[key]) stackSubs[key] = subs[key];
    }
    for (key in stackSubs) {
      partial.subs[key] = stackSubs[key];
    }

    stackPartials = stackPartials || {};
    partial.stackPartials = stackPartials;
    for (key in partials) {
      if (!stackPartials[key]) stackPartials[key] = partials[key];
    }
    for (key in stackPartials) {
      partial.partials[key] = stackPartials[key];
    }

    return partial;
  }

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos = /\'/g,
      rQuot = /\"/g,
      hChars = /[&<>\"\']/;

  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp, '&amp;')
        .replace(rLt, '&lt;')
        .replace(rGt, '&gt;')
        .replace(rApos, '&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})( true ? exports : Hogan);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var cloneDeep = __webpack_require__(12);
var Constants_1 = __webpack_require__(5);
var Container_1 = __webpack_require__(6);
/**
 * Clear filters action
 *
 * @param environmentId
 * @param currentQuery
 * @param repository
 */
function clearFiltersAction(environmentId, currentQuery, repository) {
    var clonedQuery = cloneDeep(currentQuery);
    clonedQuery.filters = {
        _query: currentQuery.getFilter("_query")
    };
    clonedQuery.page = 1;
    var dispatcher = Container_1["default"].get(Constants_1.APISEARCH_DISPATCHER + "__" + environmentId);
    repository
        .query(clonedQuery)
        .then(function (result) {
        dispatcher.dispatch({
            type: "RENDER_FETCHED_DATA",
            payload: {
                query: clonedQuery,
                result: result
            }
        });
    });
}
exports.clearFiltersAction = clearFiltersAction;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-2018, Jon Schlinkert.
 * Released under the MIT License.
 */



const valueOf = Symbol.prototype.valueOf;
const typeOf = __webpack_require__(47);

function clone(val, deep) {
  switch (typeOf(val)) {
    case 'array':
      return val.slice();
    case 'object':
      return Object.assign({}, val);
    case 'date':
      return new val.constructor(+val);
    case 'map':
      return new Map(val);
    case 'set':
      return new Set(val);
    case 'buffer':
      return cloneBuffer(val);
    case 'symbol':
      return cloneSymbol(val);
    case 'arraybuffer':
      return cloneArrayBuffer(val);
    case 'float32array':
    case 'float64array':
    case 'int16array':
    case 'int32array':
    case 'int8array':
    case 'uint16array':
    case 'uint32array':
    case 'uint8clampedarray':
    case 'uint8array':
      return cloneTypedArray(val);
    case 'regexp':
      return cloneRegExp(val);
    case 'error':
      return Object.create(val);
    default: {
      return val;
    }
  }
}

function cloneRegExp(val) {
  const re = new val.constructor(val.source, /\w+$/.exec(val));
  re.lastIndex = val.lastIndex;
  return re;
}

function cloneArrayBuffer(val) {
  const res = new val.constructor(val.byteLength);
  new Uint8Array(res).set(new Uint8Array(val));
  return res;
}

function cloneTypedArray(val, deep) {
  return new val.constructor(val.buffer, val.byteOffset, val.length);
}

function cloneBuffer(val) {
  const len = val.length;
  const buf = Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : new Buffer(len);
  val.copy(buf);
  return buf;
}

function cloneSymbol(val) {
  return valueOf ? Object(valueOf.call(val)) : {};
}

/**
 * Expose `clone`
 */

module.exports = clone;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(101).Buffer))

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(103)
var ieee754 = __webpack_require__(104)
var isArray = __webpack_require__(105)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(102)))

/***/ }),
/* 102 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 104 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 105 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(107);

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var InformationComponent_1 = __webpack_require__(109);
var Widget_1 = __webpack_require__(10);
/**
 * Information
 */
var Information = /** @class */ (function (_super) {
    __extends(Information, _super);
    /**
     * Constructor
     *
     * @param target
     * @param classNames
     * @param template
     * @param formatData
     */
    function Information(_a) {
        var target = _a.target, classNames = _a.classNames, template = _a.template, formatData = _a.formatData;
        var _this = _super.call(this) || this;
        _this.target = target;
        _this.component = preact_1.h(InformationComponent_1["default"], { target: target, classNames: __assign({}, InformationComponent_1["default"].defaultProps.classNames, classNames), template: __assign({}, InformationComponent_1["default"].defaultProps.template, template), formatData: formatData });
        return _this;
    }
    /**
     * Widget
     *
     * @param environmentId
     * @param store
     * @param repository
     */
    Information.prototype.render = function (environmentId, store, repository) {
        this.component.attributes = __assign({}, this.component.attributes, { environmentId: environmentId, repository: repository, dirty: store.isDirty(), currentResult: store.getCurrentResult(), currentQuery: store.getCurrentQuery() });
        var targetNode = document.querySelector(this.target);
        preact_1.render(this.component, targetNode, targetNode.lastChild);
    };
    return Information;
}(Widget_1["default"]));
/**
 * Information widget
 *
 * @param settings
 */
exports["default"] = (function (settings) { return new Information(settings); });


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var Template_1 = __webpack_require__(8);
/**
 * Result Information Component
 */
var InformationComponent = /** @class */ (function (_super) {
    __extends(InformationComponent, _super);
    function InformationComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InformationComponent.prototype.render = function () {
        var props = this.props;
        var containerClassName = props.classNames.container;
        var containerTemplate = props.template.container;
        var formatData = props.formatData;
        var currentResult = props.currentResult;
        /**
         * Data accessible to the template
         */
        var reducedTemplateData = {
            total_hits: currentResult.getTotalHits().toLocaleString(),
            total_items: currentResult.getTotalItems().toLocaleString()
        };
        var formattedTemplateData = formatData(reducedTemplateData);
        return (preact_1.h(Template_1["default"], { template: containerTemplate, data: formattedTemplateData, className: "as-information " + containerClassName }));
    };
    return InformationComponent;
}(preact_1.Component));
InformationComponent.defaultProps = {
    classNames: {
        container: ''
    },
    template: {
        container: 'Found {{total_hits}}/{{total_items}}'
    },
    formatData: function (data) { return data; }
};
exports["default"] = InformationComponent;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var MultipleFilterComponent_1 = __webpack_require__(111);
var Widget_1 = __webpack_require__(10);
/**
 * Multiple Filter
 */
var MultipleFilter = /** @class */ (function (_super) {
    __extends(MultipleFilter, _super);
    /**
     * Filtername
     *
     * @param target
     * @param filterName
     * @param filterField
     * @param aggregationField
     * @param applicationType
     * @param fetchLimit
     * @param viewLimit
     * @param sortBy
     * @param classNames
     * @param template
     * @param formatData
     */
    function MultipleFilter(_a) {
        var target = _a.target, filterName = _a.filterName, filterField = _a.filterField, aggregationField = _a.aggregationField, applicationType = _a.applicationType, fetchLimit = _a.fetchLimit, viewLimit = _a.viewLimit, sortBy = _a.sortBy, classNames = _a.classNames, template = _a.template, formatData = _a.formatData;
        var _this = _super.call(this) || this;
        _this.target = target;
        _this.component = preact_1.h(MultipleFilterComponent_1["default"], { target: target, filterName: filterName, filterField: filterField, aggregationField: aggregationField, applicationType: applicationType, fetchLimit: fetchLimit, viewLimit: viewLimit, sortBy: sortBy, classNames: __assign({}, MultipleFilterComponent_1["default"].defaultProps.classNames, classNames), template: __assign({}, MultipleFilterComponent_1["default"].defaultProps.template, template), formatData: formatData });
        return _this;
    }
    /**
     * Widget
     *
     * @param environmentId
     * @param store
     * @param repository
     */
    MultipleFilter.prototype.render = function (environmentId, store, repository) {
        this.component.attributes = __assign({}, this.component.attributes, { environmentId: environmentId, repository: repository, dirty: store.isDirty(), currentResult: store.getCurrentResult(), currentQuery: store.getCurrentQuery() });
        var targetNode = document.querySelector(this.target);
        preact_1.render(this.component, targetNode, targetNode.lastChild);
    };
    return MultipleFilter;
}(Widget_1["default"]));
/**
 * Multiple filter widget
 *
 * @param settings
 */
exports["default"] = (function (settings) { return new MultipleFilter(settings); });


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var MultipleFilterActions_1 = __webpack_require__(112);
var Helpers_1 = __webpack_require__(113);
var Template_1 = __webpack_require__(8);
var ShowMoreComponent_1 = __webpack_require__(114);
var defaultTemplates_1 = __webpack_require__(115);
var apisearch_1 = __webpack_require__(13);
/**
 * Filter Component
 */
var MultipleFilterComponent = /** @class */ (function (_super) {
    __extends(MultipleFilterComponent, _super);
    /**
     * Constructor
     */
    function MultipleFilterComponent() {
        var _this = _super.call(this) || this;
        /**
         * Handle click
         *
         * @param selectedFilter
         */
        _this.handleClick = function (selectedFilter) {
            var props = _this.props;
            var environmentId = props.environmentId;
            var filterName = props.filterName;
            var filterField = props.filterField;
            var aggregationField = props.aggregationField;
            var applicationType = props.applicationType;
            var sortBy = props.sortBy;
            var fetchLimit = props.fetchLimit;
            var repository = props.repository;
            var currentQuery = props.currentQuery;
            var aggregation = props.currentResult.getAggregation(filterName);
            var selectedFilterAsString = String(selectedFilter);
            var currentActiveFilterValues = aggregation instanceof apisearch_1.ResultAggregation
                ? Object.values(aggregation.getActiveElements())
                : [];
            var valuesAsString = currentActiveFilterValues.map(function (element) {
                return String(element);
            });
            /**
             * Dispatch filter action
             */
            MultipleFilterActions_1.filterAction(environmentId, currentQuery, repository, filterName, filterField, (aggregationField
                ? aggregationField
                : filterField), Helpers_1.manageCurrentFilterItems(selectedFilterAsString, valuesAsString), applicationType, sortBy, fetchLimit);
        };
        /**
         * Handle show more
         */
        _this.handleShowMore = function () {
            var activeAggregations = _this.state.activeAggregations;
            var currentAggregations = _this.state.currentAggregations;
            var viewLimit = activeAggregations.length + currentAggregations.length;
            _this.setState({ viewLimit: viewLimit });
        };
        /**
         * Handle show less
         */
        _this.handleShowLess = function () {
            var viewLimit = _this.props.viewLimit;
            _this.setState({ viewLimit: viewLimit });
        };
        _this.state = {
            viewLimit: 0,
            activeAggregations: [],
            currentAggregations: []
        };
        return _this;
    }
    /**
     * Components will mount
     */
    MultipleFilterComponent.prototype.componentWillMount = function () {
        var props = this.props;
        var environmentId = props.environmentId;
        var filterName = props.filterName;
        var filterField = props.filterField;
        var aggregationField = props.aggregationField;
        var applicationType = props.applicationType;
        var sortBy = props.sortBy;
        var fetchLimit = props.fetchLimit;
        var viewLimit = props.viewLimit;
        var currentQuery = props.currentQuery;
        /**
         * Set view items limit
         */
        var isViewLimitProperlySet = (viewLimit && viewLimit < fetchLimit);
        this.setState({
            viewLimit: (isViewLimitProperlySet)
                ? viewLimit
                : fetchLimit
        });
        /**
         * Dispatch action
         */
        MultipleFilterActions_1.aggregationSetup(environmentId, currentQuery, filterName, (aggregationField
            ? aggregationField
            : filterField), applicationType, sortBy, fetchLimit);
    };
    /**
     * Component will recieve props
     *
     * @param props
     */
    MultipleFilterComponent.prototype.componentWillReceiveProps = function (props) {
        var filterName = props.filterName;
        var aggregation = props.currentResult.getAggregation(filterName);
        if (typeof aggregation.getCounters === "function") {
            /**
             * Getting aggregation from aggregations
             */
            var counters = aggregation.getCounters();
            var countersAsArray = Object.values(counters);
            this.setState({
                /**
                 * Current used aggregations
                 */
                activeAggregations: countersAsArray.filter(function (counter) {
                    return true === counter.isUsed();
                }),
                /**
                 * Current inactive aggregations
                 */
                currentAggregations: countersAsArray.filter(function (counter) {
                    return (false === counter.isUsed() ||
                        null === counter.isUsed());
                })
            });
        }
    };
    /**
     * Render
     *
     * @return {any}
     */
    MultipleFilterComponent.prototype.render = function () {
        var _this = this;
        var props = this.props;
        var viewLimit = props.viewLimit;
        var fetchLimit = props.fetchLimit;
        var containerClassName = props.classNames.container;
        var topClassName = props.classNames.top;
        var itemsListClassName = props.classNames.itemsList;
        var itemClassName = props.classNames.item;
        var activeClassName = props.classNames.active;
        var showMoreContainerClassName = props.classNames.showMoreContainer;
        var topTemplate = props.template.top;
        var itemTemplate = props.template.item;
        var showMoreTemplate = props.template.showMore;
        var showLessTemplate = props.template.showLess;
        var formatData = props.formatData;
        /**
         * Get aggregation items
         */
        var allItems = this.state.activeAggregations.concat(this.state.currentAggregations);
        var allItemsLength = allItems.length;
        var items = allItems.slice(0, this.state.viewLimit);
        /**
         * Check available view limit
         */
        var isViewLimitProperlySet = (viewLimit && viewLimit < fetchLimit);
        return (preact_1.h("div", { className: "as-multipleFilter " + containerClassName },
            preact_1.h(Template_1["default"], { template: topTemplate, className: "as-multipleFilter__top " + topClassName }),
            preact_1.h("div", { className: "as-multipleFilter__itemsList " + itemsListClassName }, items.map(function (item) {
                var reducedTemplateData = {
                    n: item.getN(),
                    isActive: item.isUsed(),
                    values: item.getValues()
                };
                var formattedTemplateData = formatData(reducedTemplateData);
                return (preact_1.h("div", { className: "as-multipleFilter__item " +
                        (itemClassName + " ") +
                        ("" + ((item.used) ? activeClassName : '')), onClick: function () { return _this.handleClick(item.values.id); } },
                    preact_1.h(Template_1["default"], { template: itemTemplate, data: formattedTemplateData })));
            })),
            (isViewLimitProperlySet)
                ? preact_1.h(ShowMoreComponent_1["default"], { allItemsLength: allItemsLength, currentLimit: this.state.viewLimit, handleShowMore: this.handleShowMore, handleShowLess: this.handleShowLess, showMoreContainerClassName: showMoreContainerClassName, showMoreTemplate: showMoreTemplate, showLessTemplate: showLessTemplate }) : null));
    };
    return MultipleFilterComponent;
}(preact_1.Component));
MultipleFilterComponent.defaultProps = {
    aggregationField: null,
    applicationType: 8,
    fetchLimit: 10,
    viewLimit: null,
    sortBy: ['_term', 'desc'],
    classNames: {
        container: '',
        top: '',
        itemsList: '',
        item: '',
        active: 'as-multipleFilter__item--active',
        showMoreContainer: ''
    },
    template: {
        top: null,
        item: defaultTemplates_1.defaultItemTemplate,
        showMore: '+ Show more',
        showLess: '- Show less'
    },
    formatData: function (data) { return data; }
};
exports["default"] = MultipleFilterComponent;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var cloneDeep = __webpack_require__(12);
var Constants_1 = __webpack_require__(5);
var Container_1 = __webpack_require__(6);
/**
 * Define aggregations setup
 *
 * @param environmentId
 * @param currentQuery
 * @param filterName
 * @param aggregationField
 * @param applicationType
 * @param sortBy
 * @param fetchLimit
 */
function aggregationSetup(environmentId, currentQuery, filterName, aggregationField, applicationType, sortBy, fetchLimit) {
    var clonedQuery = cloneDeep(currentQuery);
    clonedQuery.aggregateBy(filterName, aggregationField, applicationType, sortBy, fetchLimit);
    var dispatcher = Container_1["default"].get(Constants_1.APISEARCH_DISPATCHER + "__" + environmentId);
    dispatcher.dispatch({
        type: "UPDATE_APISEARCH_SETUP",
        payload: {
            query: clonedQuery
        }
    });
}
exports.aggregationSetup = aggregationSetup;
/**
 * Filter action
 *
 * @param environmentId
 * @param currentQuery
 * @param repository
 * @param filterName
 * @param filterField
 * @param aggregationField
 * @param filterValues
 * @param applicationType
 * @param sortBy
 * @param fetchLimit
 */
function filterAction(environmentId, currentQuery, repository, filterName, filterField, aggregationField, filterValues, applicationType, sortBy, fetchLimit) {
    var clonedQuery = cloneDeep(currentQuery);
    clonedQuery.filterBy(filterName, filterField, filterValues, applicationType, false, sortBy);
    clonedQuery.aggregateBy(filterName, aggregationField, applicationType, sortBy, fetchLimit);
    clonedQuery.page = 1;
    var dispatcher = Container_1["default"].get(Constants_1.APISEARCH_DISPATCHER + "__" + environmentId);
    repository
        .query(clonedQuery)
        .then(function (result) {
        dispatcher.dispatch({
            type: "RENDER_FETCHED_DATA",
            payload: {
                query: clonedQuery,
                result: result
            }
        });
    })["catch"](function (error) {
        return null;
    });
}
exports.filterAction = filterAction;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Manage filter items
 *
 * If an item is on the list, remove it
 * else, add it!
 *
 * @param selectedItem
 * @param currentItems
 *
 * @returns {[null,null]}
 */
function manageCurrentFilterItems(selectedItem, currentItems) {
    var isElementActive = currentItems
        .some(function (item) { return item === selectedItem; });
    if (isElementActive) {
        return currentItems
            .filter(function (item) { return item !== selectedItem; });
    }
    else {
        return currentItems.concat([
            selectedItem,
        ]);
    }
}
exports.manageCurrentFilterItems = manageCurrentFilterItems;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var Template_1 = __webpack_require__(8);
/**
 * Show more component
 *
 * Provides two items
 *   -> Show more element
 *   -> Show less element
 */
var ShowMoreComponent = function (_a) {
    var allItemsLength = _a.allItemsLength, currentLimit = _a.currentLimit, handleShowMore = _a.handleShowMore, handleShowLess = _a.handleShowLess, showMoreContainerClassName = _a.showMoreContainerClassName, showMoreTemplate = _a.showMoreTemplate, showLessTemplate = _a.showLessTemplate;
    return (allItemsLength > currentLimit)
        ? (preact_1.h("div", { className: "as-showMore " + showMoreContainerClassName, onClick: handleShowMore },
            preact_1.h(Template_1["default"], { template: showMoreTemplate, className: "as-showMore--more" })))
        : (allItemsLength === currentLimit)
            ? (preact_1.h("div", { className: "as-showMore " + showMoreContainerClassName, onClick: handleShowLess },
                preact_1.h(Template_1["default"], { template: showLessTemplate, className: "as-showMore--less" })))
            : null;
};
exports["default"] = ShowMoreComponent;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.defaultItemTemplate = "\n    <input \n        type=\"checkbox\" \n        id=\"filter_{{values.id}}\"\n        class=\"as-multipleFilter__itemCheckbox\" \n        {{#isActive}}checked=\"checked\"{{/isActive}}\n    >\n    <label \n        class=\"as-multipleFilter__itemName\"\n        for=\"filter_{{values.id}}\"\n    >\n        {{{values.name}}}\n    </label>\n    <span class=\"as-multipleFilter__itemNumber\">\n        {{n}}\n    </span>\n";


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var PaginationComponent_1 = __webpack_require__(117);
var Widget_1 = __webpack_require__(10);
/**
 * Pagination
 */
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    /**
     * Constructor
     *
     * @param target
     * @param padding
     * @param goFirstLast
     * @param classNames
     * @param template
     */
    function Pagination(_a) {
        var target = _a.target, padding = _a.padding, goFirstLast = _a.goFirstLast, classNames = _a.classNames, template = _a.template;
        var _this = _super.call(this) || this;
        _this.target = target;
        _this.component = preact_1.h(PaginationComponent_1["default"], { target: target, padding: padding, goFirstLast: goFirstLast, classNames: __assign({}, PaginationComponent_1["default"].defaultProps.classNames, classNames), template: __assign({}, PaginationComponent_1["default"].defaultProps.template, template) });
        return _this;
    }
    /**
     * Widget
     *
     * @param environmentId
     * @param store
     * @param repository
     */
    Pagination.prototype.render = function (environmentId, store, repository) {
        this.component.attributes = __assign({}, this.component.attributes, { environmentId: environmentId, repository: repository, dirty: store.isDirty(), currentResult: store.getCurrentResult(), currentQuery: store.getCurrentQuery() });
        var targetNode = document.querySelector(this.target);
        preact_1.render(this.component, targetNode, targetNode.lastChild);
    };
    return Pagination;
}(Widget_1["default"]));
/**
 * Pagination widget
 *
 * @param settings
 */
exports["default"] = (function (settings) { return new Pagination(settings); });


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var Template_1 = __webpack_require__(8);
var PaginationActions_1 = __webpack_require__(118);
var NavigationComponent_1 = __webpack_require__(119);
var Helpers_1 = __webpack_require__(120);
/**
 * Pagination Component
 */
var PaginationComponent = /** @class */ (function (_super) {
    __extends(PaginationComponent, _super);
    function PaginationComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Handle click
         *
         * @param page
         */
        _this.handleClick = function (page) {
            var _a = _this.props, currentResult = _a.currentResult, environmentId = _a.environmentId, currentQuery = _a.currentQuery, repository = _a.repository;
            var totalPages = Helpers_1.getTotalPages(currentResult.getTotalHits(), currentQuery.getSize());
            /**
             * Do not let go further
             */
            if (page <= 0)
                page = 1;
            if (page >= totalPages)
                page = totalPages;
            if (currentQuery.getPage() === page) {
                return;
            }
            /**
             * Dispatch change page action
             */
            PaginationActions_1.paginationChangeAction(environmentId, currentQuery, repository, page);
        };
        return _this;
    }
    /**
     * Render
     *
     * @return {any}
     */
    PaginationComponent.prototype.render = function () {
        var _this = this;
        var props = this.props;
        var padding = props.padding;
        var goFirstLast = props.goFirstLast;
        var containerClassName = props.classNames.container;
        var itemClassName = props.classNames.item;
        var activeClassName = props.classNames.active;
        var disabledClassName = props.classNames.disabled;
        var nextClassName = props.classNames.next;
        var previousClassName = props.classNames.previous;
        var lastClassName = props.classNames.last;
        var firstClassName = props.classNames.first;
        var itemTemplate = props.template.item;
        var nextTemplate = props.template.next;
        var previousTemplate = props.template.previous;
        var firstTemplate = props.template.first;
        var lastTemplate = props.template.last;
        var currentQueryPage = props.currentQuery.getPage();
        var currentQuerySize = props.currentQuery.getSize();
        var currentResult = props.currentResult;
        /**
         * Get Total pages
         */
        var totalPages = Helpers_1.getTotalPages(currentResult.getTotalHits(), currentQuerySize);
        var pages = Helpers_1.totalPagesToArray(totalPages);
        /**
         *  Get pages spectre
         */
        var spectreSize = (padding * 2) + 1;
        var isTouchingLeft = currentQueryPage <= (padding + 1);
        var isTouchingRight = (currentQueryPage + padding) >= totalPages;
        var spectre = pages.slice(Helpers_1.getStart(totalPages, padding, currentQueryPage, spectreSize, isTouchingLeft, isTouchingRight), Helpers_1.getEnd(totalPages, padding, currentQueryPage, spectreSize, isTouchingLeft, isTouchingRight));
        /**
         * Dynamic disabled classes
         */
        var previousDisabledClass = (currentQueryPage === 1) ? disabledClassName : '';
        var nextDisabledClass = (currentQueryPage === totalPages) ? disabledClassName : '';
        /**
         * Hide container if hits are empty
         */
        if (currentResult.getTotalHits() === 0) {
            return null;
        }
        return (preact_1.h("ul", { className: "as-pagination " + containerClassName },
            preact_1.h(NavigationComponent_1["default"], { isVisible: goFirstLast, classNames: "as-pagination__item as-pagination__item--first " + firstClassName + " " + previousDisabledClass, template: firstTemplate, handleClick: function () { return _this.handleClick(1); } }),
            preact_1.h(NavigationComponent_1["default"], { isVisible: true, classNames: "as-pagination__item as-pagination__item--previous " + previousClassName + " " + previousDisabledClass, template: previousTemplate, handleClick: function () { return _this.handleClick(currentQueryPage - 1); } }),
            spectre.map(function (page) { return (preact_1.h("li", { className: "as-pagination__item as-pagination__item--link " + itemClassName + " " + ((currentQueryPage === page) ? activeClassName : ''), onClick: function () { return _this.handleClick(page); } },
                preact_1.h(Template_1["default"], { template: itemTemplate, data: { page: page.toLocaleString('de-DE') } }))); }),
            preact_1.h(NavigationComponent_1["default"], { isVisible: true, classNames: "as-pagination__item as-pagination__item--next " + nextClassName + " " + nextDisabledClass, template: nextTemplate, handleClick: function () { return _this.handleClick(currentQueryPage + 1); } }),
            preact_1.h(NavigationComponent_1["default"], { isVisible: goFirstLast, classNames: "as-pagination__item as-pagination__item--last " + lastClassName + " " + nextDisabledClass, template: lastTemplate, handleClick: function () { return _this.handleClick(totalPages); } })));
    };
    return PaginationComponent;
}(preact_1.Component));
PaginationComponent.defaultProps = {
    padding: 3,
    goFirstLast: false,
    classNames: {
        container: '',
        item: '',
        active: 'as-pagination__item--active',
        disabled: 'as-pagination__item--disabled',
        next: '',
        first: '',
        previous: '',
        last: ''
    },
    template: {
        item: '{{page}}',
        next: '>',
        previous: '<',
        first: '<<',
        last: '>>'
    }
};
exports["default"] = PaginationComponent;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var cloneDeep = __webpack_require__(12);
var Constants_1 = __webpack_require__(5);
var Container_1 = __webpack_require__(6);
/**
 * Pagination change
 *
 * @param environmentId
 * @param currentQuery
 * @param repository
 * @param selectedPage
 */
function paginationChangeAction(environmentId, currentQuery, repository, selectedPage) {
    var clonedQuery = cloneDeep(currentQuery);
    clonedQuery.page = selectedPage;
    var dispatcher = Container_1["default"].get(Constants_1.APISEARCH_DISPATCHER + "__" + environmentId);
    repository
        .query(clonedQuery)
        .then(function (result) {
        dispatcher.dispatch({
            type: "RENDER_FETCHED_DATA",
            payload: {
                query: clonedQuery,
                result: result
            }
        });
    });
}
exports.paginationChangeAction = paginationChangeAction;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var Template_1 = __webpack_require__(8);
/**
 * Arrow navigation component
 */
function NavigationComponent(_a) {
    var isVisible = _a.isVisible, classNames = _a.classNames, template = _a.template, handleClick = _a.handleClick;
    return (isVisible)
        ? (preact_1.h("li", { className: classNames, onClick: handleClick },
            preact_1.h(Template_1["default"], { template: template })))
        : null;
}
exports["default"] = NavigationComponent;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * Get total pages from the total reached hits
 * divided by the hits per page configured
 *
 * If there are more than 10.000 items
 * We reduce the max num of items to 9.999
 * to take care of performance
 *
 * If total resulted pages are bigger than 999
 * we set 999 as the max number of pages
 *
 * @param totalHits
 * @param hitsPerPage
 *
 * @return {number}
 */
function getTotalPages(totalHits, hitsPerPage) {
    totalHits = (totalHits >= 10000)
        ? 9999
        : totalHits;
    var totalPages = Math.ceil(totalHits / hitsPerPage);
    return (totalPages > 999)
        ? 999
        : totalPages;
}
exports.getTotalPages = getTotalPages;
/**
 * Pass total pages number into an array of numbers
 *
 * @param totalPages
 *
 * @return {number[]}
 */
function totalPagesToArray(totalPages) {
    var pages = [];
    for (var index = 1; index <= totalPages; index++) {
        pages.push(index);
    }
    return pages;
}
exports.totalPagesToArray = totalPagesToArray;
/**
 * Get the starting point of the pages spectre
 *
 * @param totalPages
 * @param padding
 * @param currentPage
 * @param spectreSize
 * @param isTouchingLeft
 * @param isTouchingRight
 *
 * @return {number}
 */
function getStart(totalPages, padding, currentPage, spectreSize, isTouchingLeft, isTouchingRight) {
    if (isTouchingLeft) {
        return currentPage - (currentPage % spectreSize);
    }
    if (isTouchingRight) {
        var start = currentPage - (spectreSize - (totalPages % currentPage));
        return (start > 0) ? start : 0;
    }
    return currentPage - (padding + 1);
}
exports.getStart = getStart;
/**
 * Get the ending point of the pages spectre
 *
 * @param totalPages
 * @param padding
 * @param currentPage
 * @param spectreSize
 * @param isTouchingLeft
 * @param isTouchingRight
 *
 * @return {number}
 */
function getEnd(totalPages, padding, currentPage, spectreSize, isTouchingLeft, isTouchingRight) {
    if (isTouchingLeft) {
        return spectreSize;
    }
    if (isTouchingRight) {
        return totalPages;
    }
    return currentPage + padding;
}
exports.getEnd = getEnd;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var ResultComponent_1 = __webpack_require__(122);
var Widget_1 = __webpack_require__(10);
/**
 * Result
 */
var Result = /** @class */ (function (_super) {
    __extends(Result, _super);
    /**
     * Constructor
     *
     * @param target
     * @param fields
     * @param itemsPerPage
     * @param promote
     * @param exclude
     * @param filter
     * @param highlightsEnabled
     * @param classNames
     * @param template
     * @param formatData
     */
    function Result(_a) {
        var target = _a.target, fields = _a.fields, itemsPerPage = _a.itemsPerPage, promote = _a.promote, exclude = _a.exclude, filter = _a.filter, highlightsEnabled = _a.highlightsEnabled, classNames = _a.classNames, template = _a.template, formatData = _a.formatData;
        var _this = _super.call(this) || this;
        _this.target = target;
        _this.component = preact_1.h(ResultComponent_1["default"], { target: target, fields: fields, itemsPerPage: itemsPerPage, promote: promote, exclude: exclude, filter: filter, highlightsEnabled: highlightsEnabled, classNames: __assign({}, ResultComponent_1["default"].defaultProps.classNames, classNames), template: __assign({}, ResultComponent_1["default"].defaultProps.template, template), formatData: formatData });
        return _this;
    }
    /**
     * Widget
     *
     * @param environmentId
     * @param store
     * @param repository
     */
    Result.prototype.render = function (environmentId, store, repository) {
        this.component.attributes = __assign({}, this.component.attributes, { environmentId: environmentId, repository: repository, dirty: store.isDirty(), currentResult: store.getCurrentResult(), currentQuery: store.getCurrentQuery() });
        var targetNode = document.querySelector(this.target);
        preact_1.render(this.component, targetNode, targetNode.lastChild);
    };
    return Result;
}(Widget_1["default"]));
/**
 * Result widget
 *
 * @param settings
 */
exports["default"] = (function (settings) { return new Result(settings); });


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var Template_1 = __webpack_require__(8);
var defaultTemplates_1 = __webpack_require__(123);
var ResultActions_1 = __webpack_require__(124);
var ItemUUID_1 = __webpack_require__(11);
/**
 * Result Component
 */
var ResultComponent = /** @class */ (function (_super) {
    __extends(ResultComponent, _super);
    function ResultComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Component will mount
     */
    ResultComponent.prototype.componentWillMount = function () {
        var props = this.props;
        /**
         * Dispatch action
         */
        ResultActions_1.configureQuery(props.environmentId, props.currentQuery, props.itemsPerPage, props.highlightsEnabled, props.promote.map(function (itemUUID) {
            return itemUUID instanceof ItemUUID_1.ItemUUID
                ? itemUUID
                : ItemUUID_1.ItemUUID.createFromArray(itemUUID);
        }), props.exclude.map(function (itemUUID) {
            return itemUUID instanceof ItemUUID_1.ItemUUID
                ? itemUUID
                : ItemUUID_1.ItemUUID.createFromArray(itemUUID);
        }), props.fields, props.filter);
    };
    /**
     * Render
     *
     * @return {any}
     */
    ResultComponent.prototype.render = function () {
        var props = this.props;
        var dirty = props.dirty;
        var containerClassName = props.classNames.container;
        var itemsListClassName = props.classNames.itemsList;
        var placeholderClassName = props.classNames.placeholder;
        var itemsListTemplate = props.template.itemsList;
        var placeholderTemplate = props.template.placeholder;
        var formatData = props.formatData;
        var currentResult = props.currentResult;
        var currentQuery = props.currentQuery;
        /**
         * Data accessible to the template
         */
        var reducedTemplateData = {
            query: currentQuery.getQueryText(),
            items: currentResult.getItems()
        };
        /**
         * Format each item data
         */
        var formattedTemplateData = __assign({}, reducedTemplateData, { items: (reducedTemplateData.items)
                ? reducedTemplateData
                    .items
                    .map(function (item) { return formatData(item); })
                : [] });
        return (preact_1.h("div", { className: "as-result " + containerClassName }, (placeholderTemplate && dirty)
            ? preact_1.h(Template_1["default"], { template: placeholderTemplate, className: "as-result__placeholder " + placeholderClassName })
            : preact_1.h(Template_1["default"], { template: itemsListTemplate, data: formattedTemplateData, className: "as-result__itemsList " + itemsListClassName })));
    };
    return ResultComponent;
}(preact_1.Component));
ResultComponent.defaultProps = {
    fields: [],
    itemsPerPage: 10,
    highlightsEnabled: false,
    promote: [],
    exclude: [],
    filter: function (query) { },
    classNames: {
        container: '',
        itemsList: '',
        placeholder: ''
    },
    template: {
        itemsList: defaultTemplates_1.defaultItemsListTemplate,
        placeholder: null
    },
    formatData: function (data) { return data; }
};
exports["default"] = ResultComponent;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.defaultItemsListTemplate = "\n    <ul>\n    {{#items}}\n        <li class=\"as-result__item\">\n            <strong>Uuid:</strong> {{uuid.type}} - {{uuid.id}} <br />\n            <strong>Metadata:</strong> {{metadata}} <br />\n            <strong>Indexed metadata:</strong> {{indexedMetadata}}\n        </li>\n    {{/items}}\n    </ul>\n    {{^items}}No result{{/items}}\n";


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var cloneDeep = __webpack_require__(12);
var Constants_1 = __webpack_require__(5);
var Container_1 = __webpack_require__(6);
/**
 *
 * Configure query
 *
 * @param environmentId
 * @param currentQuery
 * @param itemsPerPage
 * @param highlightsEnabled
 * @param promotedUUIDs
 * @param excludedUUIDs
 * @param fields
 * @param filter
 */
function configureQuery(environmentId, currentQuery, itemsPerPage, highlightsEnabled, promotedUUIDs, excludedUUIDs, fields, filter) {
    var clonedQuery = cloneDeep(currentQuery);
    filter(clonedQuery);
    /**
     * Set result size
     */
    clonedQuery.size = itemsPerPage;
    /**
     * Set specific fields
     */
    clonedQuery.setFields(fields);
    /**
     * Enabling highlights on query result
     */
    if (highlightsEnabled) {
        clonedQuery.enableHighlights();
    }
    /**
     * Promoted uuids
     */
    for (var i in promotedUUIDs) {
        clonedQuery.promoteUUID(promotedUUIDs[i]);
    }
    /**
     * excluded uuids
     */
    for (var i in excludedUUIDs) {
        clonedQuery.excludeUUID(excludedUUIDs[i]);
    }
    var dispatcher = Container_1["default"].get(Constants_1.APISEARCH_DISPATCHER + "__" + environmentId);
    dispatcher.dispatch({
        type: "UPDATE_APISEARCH_SETUP",
        payload: {
            query: clonedQuery
        }
    });
}
exports.configureQuery = configureQuery;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var SearchInputComponent_1 = __webpack_require__(126);
var Widget_1 = __webpack_require__(10);
/**
 * SearchInput
 */
var SearchInput = /** @class */ (function (_super) {
    __extends(SearchInput, _super);
    /**
     * Constructor
     *
     * @param target
     * @param placeholder
     * @param startSearchOn
     * @param clearSearch
     * @param withContainer
     * @param autofocus
     * @param classNames
     * @param template
     */
    function SearchInput(_a) {
        var target = _a.target, placeholder = _a.placeholder, startSearchOn = _a.startSearchOn, clearSearch = _a.clearSearch, withContainer = _a.withContainer, autofocus = _a.autofocus, classNames = _a.classNames, template = _a.template;
        var _this = _super.call(this) || this;
        _this.target = target;
        _this.isFirstRender = true;
        _this.component = preact_1.h(SearchInputComponent_1["default"], { target: target, placeholder: placeholder, autofocus: autofocus, startSearchOn: startSearchOn, clearSearch: clearSearch, withContainer: withContainer, classNames: __assign({}, SearchInputComponent_1["default"].defaultProps.classNames, classNames), template: __assign({}, SearchInputComponent_1["default"].defaultProps.template, template) });
        return _this;
    }
    /**
     * Widget
     *
     * @param environmentId
     * @param store
     * @param repository
     */
    SearchInput.prototype.render = function (environmentId, store, repository) {
        this.component.attributes = __assign({}, this.component.attributes, { environmentId: environmentId, repository: repository, dirty: store.isDirty(), currentResult: store.getCurrentResult(), currentQuery: store.getCurrentQuery(), htmlNodeInheritProps: {
                autocomplete: 'off',
                spellcheck: 0
            } });
        var targetNode = document.querySelector(this.target);
        /**
         * Checking if the targeted element is an input
         * or is another container element.
         */
        var isInput = isInputElement(targetNode);
        if (!isInput) {
            preact_1.render(this.component, targetNode, targetNode.lastChild);
        }
        if (isInput && this.isFirstRender) {
            this.component.attributes = __assign({}, this.component.attributes, { withContainer: false, htmlNodeInheritProps: __assign({}, this.component.attributes.htmlNodeInheritedProps, getNodeAttributes(targetNode)) });
            var parentNode = targetNode.parentNode;
            preact_1.render(this.component, parentNode, parentNode.childNodes[0]);
            targetNode.remove();
        }
        this.isFirstRender = false;
    };
    return SearchInput;
}(Widget_1["default"]));
/**
 * Returns an object of an
 * html node attributes.
 *
 * @param htmlNode
 * @returns {{}}
 */
var getNodeAttributes = function (htmlNode) {
    var _a;
    var nodeAttributes = {};
    for (var i = 0; i < htmlNode.attributes.length; i++) {
        var attr = htmlNode.attributes[i];
        if (attr.specified) {
            nodeAttributes = __assign({}, nodeAttributes, (_a = {}, _a[attr.name] = attr.value, _a));
        }
    }
    return nodeAttributes;
};
/**
 * Checks if an html node
 * is an input.
 *
 * @param targetNode
 * @returns {boolean}
 */
var isInputElement = function (targetNode) {
    return targetNode instanceof HTMLInputElement;
};
/**
 * Search Input widget
 *
 * @param settings
 */
exports["default"] = (function (settings) { return new SearchInput(settings); });


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var SearchInputActions_1 = __webpack_require__(127);
var Template_1 = __webpack_require__(8);
/**
 * SearchInput Component
 */
var SearchInputComponent = /** @class */ (function (_super) {
    __extends(SearchInputComponent, _super);
    function SearchInputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Handle search
         *
         * @param e
         */
        _this.handleSearch = function (e) {
            var props = _this.props;
            var startSearchOn = props.startSearchOn;
            var environmentId = props.environmentId;
            var currentQuery = props.currentQuery;
            var repository = props.repository;
            /**
             * Search when string is bigger than {startSearchOn}
             */
            if (e.target.value.length < startSearchOn) {
                return;
            }
            /**
             * Dispatch input search action
             */
            SearchInputActions_1.simpleSearchAction(environmentId, currentQuery, repository, e.target.value);
        };
        /**
         * Clear search
         */
        _this.clearSearch = function () {
            var props = _this.props;
            var environmentId = props.environmentId;
            var currentQuery = props.currentQuery;
            var repository = props.repository;
            SearchInputActions_1.simpleSearchAction(environmentId, currentQuery, repository, '');
        };
        return _this;
    }
    /**
     * Search
     *
     * @return {any}
     */
    SearchInputComponent.prototype.render = function () {
        var props = this.props;
        var placeholder = props.placeholder;
        var autofocus = props.autofocus;
        var clearSearch = props.clearSearch;
        var withContainer = props.withContainer;
        var containerClassName = props.classNames.container;
        var inputClassName = props.classNames.input;
        var clearSearchClassName = props.classNames.clearSearch;
        var clearSearchTemplate = props.template.clearSearch;
        var currentQueryText = props.currentQuery.getQueryText();
        var htmlNodeInheritProps = props.htmlNodeInheritProps;
        var searchInput = (preact_1.h("input", __assign({ type: 'text', className: "as-searchInput__input " + inputClassName, placeholder: placeholder, autofocus: autofocus }, htmlNodeInheritProps, { onInput: this.handleSearch, value: currentQueryText })));
        if (withContainer) {
            return (preact_1.h("div", { className: "as-searchInput " + containerClassName },
                searchInput,
                (clearSearch && currentQueryText && currentQueryText.length !== 0)
                    ? (preact_1.h("div", { className: "as-searchInput__clearSearch " + clearSearchClassName, onClick: this.clearSearch },
                        preact_1.h(Template_1["default"], { template: clearSearchTemplate }))) : null));
        }
        return searchInput;
    };
    return SearchInputComponent;
}(preact_1.Component));
SearchInputComponent.defaultProps = {
    placeholder: '',
    autofocus: false,
    startSearchOn: 0,
    clearSearch: true,
    withContainer: true,
    classNames: {
        container: '',
        input: '',
        clearSearch: ''
    },
    template: {
        clearSearch: 'x'
    }
};
exports["default"] = SearchInputComponent;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var cloneDeep = __webpack_require__(12);
var Constants_1 = __webpack_require__(5);
var Container_1 = __webpack_require__(6);
/**
 * Search action
 *
 * @param environmentId
 * @param currentQuery
 * @param repository
 * @param queryText
 */
function simpleSearchAction(environmentId, currentQuery, repository, queryText) {
    var clonedQuery = cloneDeep(currentQuery);
    clonedQuery.filters._query.values = [queryText];
    clonedQuery.page = 1;
    var dispatcher = Container_1["default"].get(Constants_1.APISEARCH_DISPATCHER + "__" + environmentId);
    repository
        .query(clonedQuery)
        .then(function (result) {
        dispatcher.dispatch({
            type: "RENDER_FETCHED_DATA",
            payload: {
                query: clonedQuery,
                result: result
            }
        });
    });
}
exports.simpleSearchAction = simpleSearchAction;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var SortByComponent_1 = __webpack_require__(129);
var Widget_1 = __webpack_require__(10);
/**
 * SortBy
 */
var SortBy = /** @class */ (function (_super) {
    __extends(SortBy, _super);
    function SortBy(_a) {
        var target = _a.target, classNames = _a.classNames, options = _a.options;
        var _this = _super.call(this) || this;
        _this.target = target;
        _this.component = preact_1.h(SortByComponent_1["default"], { target: target, classNames: __assign({}, SortByComponent_1["default"].defaultProps.classNames, classNames), options: options });
        return _this;
    }
    /**
     * Widget
     *
     * @param environmentId
     * @param store
     * @param repository
     */
    SortBy.prototype.render = function (environmentId, store, repository) {
        this.component.attributes = __assign({}, this.component.attributes, { environmentId: environmentId, repository: repository, dirty: store.isDirty(), currentResult: store.getCurrentResult(), currentQuery: store.getCurrentQuery() });
        var targetNode = document.querySelector(this.target);
        preact_1.render(this.component, targetNode, targetNode.lastChild);
    };
    return SortBy;
}(Widget_1["default"]));
/**
 * SortBy widget
 *
 * @param settings
 */
exports["default"] = (function (settings) { return new SortBy(settings); });


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var preact_1 = __webpack_require__(1);
var SortByActions_1 = __webpack_require__(130);
/**
 * SortBy Filter Component
 */
var SortByComponent = /** @class */ (function (_super) {
    __extends(SortByComponent, _super);
    function SortByComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Handle change
         *
         * @param e
         */
        _this.handleChange = function (e) {
            var props = _this.props;
            var environmentId = props.environmentId;
            var currentQuery = props.currentQuery;
            var repository = props.repository;
            /**
             * Dispatch action
             */
            SortByActions_1.onChangeSearchAction(environmentId, currentQuery, repository, e.target.value);
        };
        return _this;
    }
    /**
     * Should component update
     *
     * @return {boolean}
     */
    SortByComponent.prototype.shouldComponentUpdate = function () {
        return false;
    };
    /**
     * Render
     *
     * @return {any}
     */
    SortByComponent.prototype.render = function (props, state) {
        var containerClassName = props.classNames.container;
        var selectClassName = props.classNames.select;
        var options = props.options;
        return (preact_1.h("div", { className: "as-sortBy " + containerClassName },
            preact_1.h("select", { className: "as-sortBy__selector " + selectClassName, onChange: this.handleChange }, options.map(function (option) { return (preact_1.h("option", { value: option.value }, option.name)); }))));
    };
    return SortByComponent;
}(preact_1.Component));
SortByComponent.defaultProps = {
    classNames: {
        container: '',
        select: ''
    }
};
exports["default"] = SortByComponent;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/**
 * SortBy actions
 */
var apisearch_1 = __webpack_require__(13);
var cloneDeep = __webpack_require__(12);
var Constants_1 = __webpack_require__(5);
var Container_1 = __webpack_require__(6);
/**
 * ON change search action
 *
 * @param environmentId
 * @param currentQuery
 * @param repository
 * @param selectedOption
 */
function onChangeSearchAction(environmentId, currentQuery, repository, selectedOption) {
    var clonedQuery = cloneDeep(currentQuery);
    var filterData = splitQueryValue(selectedOption);
    clonedQuery
        .sortBy(apisearch_1["default"]
        .createEmptySortBy()
        .byFieldValue(filterData.field, filterData.sort));
    clonedQuery.page = 1;
    var dispatcher = Container_1["default"].get(Constants_1.APISEARCH_DISPATCHER + "__" + environmentId);
    repository
        .query(clonedQuery)
        .then(function (result) {
        dispatcher.dispatch({
            type: "RENDER_FETCHED_DATA",
            payload: {
                query: clonedQuery,
                result: result
            }
        });
    });
}
exports.onChangeSearchAction = onChangeSearchAction;
/**
 * Split sort by string representation
 *
 * @param string
 *
 * @return {{field: string, sort: string}}
 */
function splitQueryValue(string) {
    var queryValue = string.split(":");
    return {
        field: queryValue[0],
        sort: queryValue[1]
    };
}


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Result Search Template
 * @type {string}
 */
var resultSearchTemplate = exports.resultSearchTemplate = "\n    {{#items}}\n    <div class=\"col-12 col-sm-6 col-md-6 col-lg-4\">\n        <a href=\"{{metadata.url}}\" onclick=\"window.location.reload(true)\" class=\"c-search__resultItem\">\n            <h2 class=\"c-search__resultItemTitle\">\n                <span>{{metadata.title}}</span>\n                \n                <span class=\"c-search__resultItemCategory\">\n                    {{metadata.category}}\n                </span>\n            </h2>\n            {{#metadata.description}}\n            <p class=\"c-search__resultItemDescription\">\n                {{metadata.description}}\n            </p>\n            {{/metadata.description}}\n            <div class=\"c-search__resultItemLangList\">\n                {{#metadata.languages}}\n                    <div class=\"c-search__resultItemLang c-search__resultItemLang--{{.}}\">\n                        {{.}}\n                    </div>\n                {{/metadata.languages}}\n            </div>\n        </a>\n    </div>\n    {{/items}}\n    {{^items}}\n    <div class=\"col-sm-12\">\n        <div class=\"c-search__emptyResult\">\n            <i class=\"fa fa-meh-o\" aria-hidden=\"true\"></i>\n            <h2 class=\"c-search__emptyResultTitle\">No results found</h2>\n            \n            <ul class=\"c-search__emptyResultSuggestions\">\n                <li class=\"c-search__emptyResultSuggestion\">\n                    Maybe you need <a href=\"http://localhost:1234/docs/first-steps.html\"> a starting point</a>, \n                </li>\n                <li class=\"c-search__emptyResultSuggestion\">\n                    <a href=\"http://localhost:1234/docs/integrations.html\">see the Api Reference</a>, \n                </li>\n                <li class=\"c-search__emptyResultSuggestion\">\n                    <a href=\"http://localhost:1234/docs/ui.html\">build a custom search</a>.\n                </li>\n            </ul>\n        </div>\n    </div>\n    {{/items}}\n";

/***/ }),
/* 132 */
/***/ (function(module, exports) {

const apisearchConfig = {
    app_id: "4186e76c",
    index_id: "6de535c5",
    query_token: "e3aee575-2b0a-4a95-b0ce-88fa316c4eff",
    query_hostname: "https://apisearch.global.ssl.fastly.net"
};

module.exports = apisearchConfig;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _burger = __webpack_require__(134);

var _burger2 = _interopRequireDefault(_burger);

var _goUp = __webpack_require__(135);

var _goUp2 = _interopRequireDefault(_goUp);

var _language = __webpack_require__(136);

var _language2 = _interopRequireDefault(_language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = {};

dom.mount = function () {
    (0, _burger2.default)();
    (0, _goUp2.default)();
    new _language2.default();
};

exports.default = dom;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Menu left toggle
 */
var burgerAction = function burgerAction() {
    return document.querySelector('#burgerSidebarMenu').addEventListener('click', function () {
        var menu = document.querySelector('#sidebarMenu');

        if (menu.className.indexOf('d-block') === -1) {
            menu.classList.add('d-block');
            menu.classList.remove('d-none');
        } else {
            menu.classList.add('d-none');
            menu.classList.remove('d-block');
        }
    });
};

exports.default = burgerAction;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Go Up button
 */
var goUpAction = exports.goUpAction = function goUpAction() {
    return window.addEventListener('scroll', function () {
        var goUpButton = document.querySelector('#goUpButton');

        if (window.pageYOffset > 500) {
            goUpButton.classList.add('d-block');
        } else {
            goUpButton.classList.remove('d-block');
        }
    });
};

exports.default = goUpAction;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsCookie = __webpack_require__(137);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var COOKIE_NAME = 'apisearch_docs_last_selected_lang';
var TARGET_CLASS_SELECTOR = '.c-languageSelector__link';
var ACTIVE_CLASS_NAME = 'c-languageSelector__link--active';
var ACTIVE_CLASS_SELECTOR = '.c-languageSelector__link--active';

var LanguageSelector = function () {
    /**
     * Constructor.
     */
    function LanguageSelector() {
        _classCallCheck(this, LanguageSelector);

        var availableLanguages = document.querySelectorAll(TARGET_CLASS_SELECTOR);

        if (!availableLanguages) {
            return;
        }

        this.availableLanguages = availableLanguages;

        this.selectDefaultLanguage();
        this.addDOMEventListeners();
    }

    /**
     * Select language on the dom
     */


    _createClass(LanguageSelector, [{
        key: 'select',
        value: function select(language) {
            /**
             * Remove current active language if exists
             */
            var activeElement = document.querySelector(ACTIVE_CLASS_SELECTOR);
            if (activeElement) {
                activeElement.classList.remove(ACTIVE_CLASS_NAME);
            }

            /**
             * Add new active language
             */
            document.querySelector('[data-lang=' + language + ']').classList.add(ACTIVE_CLASS_NAME);

            /**
             * Set current language on cookies jar
             */
            _jsCookie2.default.set(COOKIE_NAME, language);

            /**
             * Toggle code blocks in the dom
             */
            this.toggleCodeBlocks(language);
        }

        /**
         * Add event listeners on the language selectors
         */

    }, {
        key: 'addDOMEventListeners',
        value: function addDOMEventListeners() {
            var _this = this;

            this.availableLanguages.forEach(function (element) {
                element.addEventListener('click', function (e) {
                    var selectedLanguage = e.target.getAttribute('data-lang');

                    /**
                     * Select language
                     */
                    _this.select(selectedLanguage);
                });
            });
        }

        /**
         * Get the default language.
         */

    }, {
        key: 'selectDefaultLanguage',
        value: function selectDefaultLanguage() {
            /**
             * Checks if there is a previous language
             * stored in the cookie jar. If exists, gets it.
             */
            var lastSelectedLanguage = _jsCookie2.default.get(COOKIE_NAME);
            if (this.checkInAvailableLanguages(lastSelectedLanguage)) {
                this.select(lastSelectedLanguage);
                return;
            }

            /**
             * Checks if there is any language available.
             */
            var firstAvailableLanguage = this.availableLanguages[0];
            if (firstAvailableLanguage) {
                this.select(firstAvailableLanguage.getAttribute('data-lang'));
            }
        }

        /**
         * Open and close code blocks on the dom
         * depending on the selectedLanguage
         */

    }, {
        key: 'toggleCodeBlocks',
        value: function toggleCodeBlocks(selectedLanguage) {
            this.availableLanguages.forEach(function (element) {
                var elementLanguage = element.getAttribute('data-lang');
                if (elementLanguage === selectedLanguage) {
                    document.querySelectorAll('.language-' + elementLanguage).forEach(function (block) {
                        block.parentElement.style.display = 'block';
                    });
                } else {
                    document.querySelectorAll('.language-' + elementLanguage).forEach(function (block) {
                        block.parentElement.style.display = 'none';
                    });
                }
            });
        }

        /**
         * Checks if given language exists
         * in the available languages list
         */

    }, {
        key: 'checkInAvailableLanguages',
        value: function checkInAvailableLanguages(givenLanguage) {
            var languages = [];
            this.availableLanguages.forEach(function (element) {
                languages.push(element.getAttribute('data-lang'));
            });

            return languages.some(function (language) {
                return language === givenLanguage;
            });
        }
    }]);

    return LanguageSelector;
}();

exports.default = LanguageSelector;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map