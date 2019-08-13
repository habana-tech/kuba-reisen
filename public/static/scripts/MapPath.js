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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/ckeditor/MapPath.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/ckeditor/MapPath.js":
/*!********************************************!*\
  !*** ./assets/scripts/ckeditor/MapPath.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nCKEDITOR.plugins.add('MapPath', {\n    icons: 'MapPath',\n    init: function init(editor) {\n        editor.addCommand('MapPath', new CKEDITOR.dialogCommand('MapPathDialog', {\n            allowedContent: 'span[!data-map,!class]'\n        }));\n        editor.ui.addButton('MapPath', {\n            label: 'Insert MapPath',\n            command: 'MapPath',\n            toolbar: 'insert'\n        });\n\n        if (editor.contextMenu) {\n\n            // Add a context menu group with the Edit Abbreviation item.\n            editor.addMenuGroup('MapPathGroup');\n            editor.addMenuItem('MapPathItem', {\n                label: 'Edit MapPath',\n                icon: this.path + 'icons/MapPath.png',\n                command: 'MapPath',\n                group: 'MapPathGroup'\n            });\n\n            editor.contextMenu.addListener(function (element) {\n                if (element['$'].className === 'MapPath') {\n                    // if ( element.getAscendant( 'img', true ) ) {\n                    return { MapPathItem: CKEDITOR.TRISTATE_OFF };\n                }\n            });\n        }\n\n        CKEDITOR.dialog.add('MapPathDialog', this.path + 'MapPathDialog.js');\n        CKEDITOR.addCss('.MapPath{background: #f2f8ff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAjCAYAAAAaLGNkAAADZUlEQVRYhe2Xv0vzXBTHn3/N3F+NHbSEbIKDDg6hkx0cXPzRDgoZOjUJ4iAiurlZcBAERQvSgFlEazfbRUWklQrfd3i490nMTX+87+v7Pi+8Bw73cm/OOZ9zcpKb/MBvID/+bQDgvwjR7/cRBAEsy4JpmhBCQAiB6elp2LaNnZ0d9Pv974EIwxC5XC5ThRBqlPMwDP8+iHw+n3Duui7a7Xbqunq9noASQsA0zb8G0e12lTMhBJrNZqaTRqOBTqcDAHh5eYHv+4kKdbvdySG63S4456lsoihCs9nE2toaNjY24Ps+giBAo9EA5xxvb28AoPpibm5OJTEMRAshATjnYIzBNE21Ftd6vQ4AaLfbODo6UvYnJydqvrq6CsYYcrnc+BCy60ulEm5ubhSMHKVeX18D+NULS0tLmUFs2wbnPLNHEhBhGKqAUlZWVhLB47q8vKyqks/nhz6e0kb31CQgZLbn5+dqrVwuZ0JIvbq6AgC8vr5mQhwfH6cSTEH0ej3lVIpsOEqpGuNzIQQ+Pj4yA2dV46uNgqjVauCcY3t7W20Wi0Vt5oyxBOy4Uq1WwTmH7/t6CMuywBjDw8OD2nx+foYQQmUvg+tKOo7c39+DMQbbtvUQjDEwxlKGruumMn96evpTEFlxRkLIvZmZGQDA+/s77u7uEEURBoPBPwcxGAwwPz8PxhgODg4mDvwV4ms/jQURF9d1Afy8JYeHh0PPFJ3IJ0wLUSgUwBhDq9UayxnnHIQQOI6DUqmEKIpG2rRaLTDGUCgU9BCe54FSikqlMtLZ5+enqhxjDJTSoWeDlK2tLVBK4XmeHqLX64FSOtYtOT09VWXVaRAEWjsJnfmyAn7dr7Ozs5EgsgI6LZfLqesvLi60/ZCCaDabIISMrMbt7S0qlQoopTAMIzHqgsShdY2cOsoZYyCEYHFxcSgIAOzv74NSCkJIYvwqjuMMBdR+1EiD+Dmik06nMxJgfX1d7WeJFkI6J4RgYWFhKEi8F6rVamLPcRzlZ+LPOwkSzzCrWWWQYrGo1i4vL9X6KIChEFIopZiamgIhBIZhYHNzE4+Pj2p/b28PhBCEYYjd3d1E8KwemBgC+PnZF3duGIYa5VyCSp3kdT7xb2CtVsPs7GwiICEElmXB87zv+w38bvkfQspvAfEHUnWJIMFgiBYAAAAASUVORK5CYII=) no-repeat scroll center center; border: 4px dashed #2c903e; display: block; width:35px; height: 35px;}');\n    },\n\n    afterInit: function afterInit(editor) {\n        var dataProcessor = editor.dataProcessor;\n        var dataFilter = dataProcessor && dataProcessor.dataFilter;\n        if (dataFilter) {\n            dataFilter.addRules({\n                elements: {\n                    'span': function span(element) {\n                        // if(element.classes !== undefined )\n                        if (element.attributes.class === 'MapPath') return editor.createFakeParserElement(element, 'MapPath', 'div', true);\n                    }\n                }\n            }, 10);\n        }\n    }\n\n});\n\n//# sourceURL=webpack:///./assets/scripts/ckeditor/MapPath.js?");

/***/ })

/******/ });