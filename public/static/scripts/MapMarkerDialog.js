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
eval("\n\nCKEDITOR.dialog.add('MapMarkerDialog', function (editor) {\n    return {\n        title: 'MapMarker Properties',\n        minWidth: 400,\n        minHeight: 200,\n        contents: [{\n            id: 'tab-basic',\n            label: 'Basic Settings',\n            elements: [{\n                type: 'text',\n                id: 'center',\n                label: 'Map Center Coordinates <br/><small>example: -83.5334399, 22.8793054</small>',\n                validate: CKEDITOR.dialog.validate.notEmpty(\"Name field cannot be empty.\"),\n                // Called by the main setupContent method call on dialog initialization.\n                setup: function setup(element) {\n                    var prevValue = JSON.parse(element.getAttribute(\"data-map\"));\n                    if (prevValue.center.isArray) this.setValue(prevValue.center.join(', '));else this.setValue(prevValue.center);\n                }\n            }, {\n                type: 'text',\n                id: 'name',\n                label: 'Marker Label<br/><small>Optional. It will be shown in tooltips over the map.</small>',\n                setup: function setup(element) {\n                    var prevValue = JSON.parse(element.getAttribute(\"data-map\"));\n                    this.setValue(prevValue.name);\n                }\n            }, {\n                type: 'text',\n                id: 'zoom',\n                label: 'Zoom Level (1-18)',\n                validate: CKEDITOR.dialog.validate.number(\"It should be a number\"),\n                setup: function setup(element) {\n                    var prevValue = JSON.parse(element.getAttribute(\"data-map\"));\n                    this.setValue(prevValue.zoom);\n                }\n            }, {\n                type: 'text',\n                id: 'bearing',\n                label: 'Perspective Angle',\n                validate: CKEDITOR.dialog.validate.number(\"It should be a number\"),\n                setup: function setup(element) {\n                    var prevValue = JSON.parse(element.getAttribute(\"data-map\"));\n                    this.setValue(prevValue.bearing);\n                }\n            }]\n        }],\n        onOk: function onOk() {\n            //\n            // // Create a new <abbr> element.\n            // var elm = this.element;\n            //\n            // // Invoke the commit methods of all dialog window elements, so the <abbr> element gets modified.\n            // this.commitContent( elm );\n            //\n            // // Finally, if in insert mode, insert the element into the editor at the caret position.\n            // if ( this.insertMode )\n            //     editor.insertElement( elm );\n\n            var dialog = this;\n\n            var elm = editor.document.createElement('span');\n\n            var name = \"\\\"name\\\":\";\n            if (dialog.getValueOf('tab-basic', 'name') === '') name += \"\\\"\\\"\";else name += dialog.getValueOf('tab-basic', 'name');\n\n            var bearing = \"\\\"bearing\\\":\";\n            if (dialog.getValueOf('tab-basic', 'bearing') === '') bearing += 0;else bearing += dialog.getValueOf('tab-basic', 'bearing');\n\n            var center = \"\\\"center\\\":[\" + dialog.getValueOf('tab-basic', 'center') + ']';\n            var zoom = \"\\\"zoom\\\":\" + dialog.getValueOf('tab-basic', 'zoom');\n\n            var data_map = [center, zoom, bearing, name];\n            data_map = '{' + data_map.toString() + '}';\n\n            elm.setAttribute('data-map', data_map);\n            elm.setAttribute('class', 'MapMarker');\n            elm.setText(\"[MM]\");\n            editor.insertElement(elm);\n        },\n        // Invoked when the dialog is loaded.\n        onShow: function onShow() {\n\n            // Get the selection from the editor.\n            var selection = editor.getSelection();\n\n            // Get the element at the start of the selection.\n            var element = selection.getStartElement();\n\n            // Get the <abbr> element closest to the selection, if it exists.\n            if (element) {\n                element = element.getAscendant('img', true);\n            }\n\n            element = editor.restoreRealElement(element);\n\n            // // Create a new <abbr> element if it does not exist.\n            // if ( !element || element.getName() != 'span' ) {\n            //     element = editor.document.createElement( 'span' );\n            //\n            //     // Flag the insertion mode for later use.\n            //     this.insertMode = true;\n            // }\n            // else\n            //     this.insertMode = false;\n\n            // Store the reference to the <abbr> element in an internal property, for later use.\n            this.element = element;\n\n            // Invoke the setup methods of all dialog window elements, so they can load the element attributes.\n            if (!this.insertMode) this.setupContent(this.element['$']);\n        }\n    };\n});\n\n//# sourceURL=webpack:///./assets/scripts/ckeditor/MapMarkerDialog.js?");

/***/ })

/******/ });