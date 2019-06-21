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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/ckeditor/MapMarkerDialog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/ckeditor/MapMarkerDialog.js":
/*!****************************************************!*\
  !*** ./assets/scripts/ckeditor/MapMarkerDialog.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nCKEDITOR.dialog.add('MapMarkerDialog', function (editor) {\n    return {\n        title: 'MapMarker Properties',\n        minWidth: 400,\n        minHeight: 200,\n        contents: [{\n            id: 'tab-basic',\n            label: 'Basic Settings',\n            elements: [{\n                type: 'text',\n                id: 'center',\n                label: 'Map Center Coordinates <br/><small>example: -83.5334399, 22.8793054</small>',\n                validate: CKEDITOR.dialog.validate.notEmpty(\"Name field cannot be empty.\")\n            }, {\n                type: 'text',\n                id: 'zoom',\n                label: 'Zoom Level (1-18)',\n                validate: CKEDITOR.dialog.validate.number(\"It should be a number\")\n            }, {\n                type: 'text',\n                id: 'bearing',\n                label: 'Perspective Angle',\n                validate: CKEDITOR.dialog.validate.number(\"It should be a number\")\n            }]\n        }],\n        onOk: function onOk() {\n            var dialog = this;\n\n            var elm = editor.document.createElement('span');\n\n            var center = \"\\\"center\\\":[\" + dialog.getValueOf('tab-basic', 'center') + ']';\n            var zoom = \"\\\"zoom\\\":\" + dialog.getValueOf('tab-basic', 'zoom');\n            var bearing = \"\\\"bearing\\\":\" + dialog.getValueOf('tab-basic', 'bearing');\n            var data_map = [center, zoom, bearing];\n            data_map = '{' + data_map.toString() + '}';\n\n            elm.setAttribute('data-map', data_map);\n            elm.setAttribute('class', 'MapMarker');\n            elm.setText(\"[MAP_MARKER]\");\n            console.log(elm);\n            editor.insertElement(elm);\n        }\n    };\n});\n\n//# sourceURL=webpack:///./assets/scripts/ckeditor/MapMarkerDialog.js?");

/***/ })

/******/ });