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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/app_backend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/app_backend.js":
/*!***************************************!*\
  !*** ./assets/scripts/app_backend.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules_backend/_grapes */ \"./assets/scripts/modules_backend/_grapes.js\");\n\nvar _adminbar = __webpack_require__(/*! ./modules_backend/_adminbar */ \"./assets/scripts/modules_backend/_adminbar.js\");\n\nvar _adminbar2 = _interopRequireDefault(_adminbar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nnew _adminbar2.default();\n\n//# sourceURL=webpack:///./assets/scripts/app_backend.js?");

/***/ }),

/***/ "./assets/scripts/modules_backend/_adminbar.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/modules_backend/_adminbar.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar AdminBar = function () {\n    function AdminBar() {\n        _classCallCheck(this, AdminBar);\n\n        this.links = document.querySelector('.admin_bar_action');\n        this.fields = document.querySelector('.admin_bar_fields');\n\n        this.events();\n        console.log(\"constructor\");\n    }\n\n    _createClass(AdminBar, [{\n        key: 'events',\n        value: function events() {\n            this.links.addEventListener('click', this.click.bind(this));\n        }\n    }, {\n        key: 'click',\n        value: function click() {\n\n            console.log(this);\n        }\n    }]);\n\n    return AdminBar;\n}();\n\nexports.default = AdminBar;\n\n//# sourceURL=webpack:///./assets/scripts/modules_backend/_adminbar.js?");

/***/ }),

/***/ "./assets/scripts/modules_backend/_grapes.js":
/*!***************************************************!*\
  !*** ./assets/scripts/modules_backend/_grapes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _grapesjs = __webpack_require__(/*! grapesjs */ \"./node_modules/grapesjs/dist/grapes.js\");\n\nvar _grapesjs2 = _interopRequireDefault(_grapesjs);\n\nvar _grapesjsTuiImageEditor = __webpack_require__(/*! grapesjs-tui-image-editor */ \"./node_modules/grapesjs-tui-image-editor/dist/grapesjs-tui-image-editor.min.js\");\n\nvar _grapesjsTuiImageEditor2 = _interopRequireDefault(_grapesjsTuiImageEditor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//var tui = require('tui-image-editor');\n\nvar images = [];\n/*\r\ngrapesjs.plugins.add('no-devices-selector', function(editor, options) {\r\n  // remove the devices switcher\r\n  editor.getConfig().showDevices = false;\r\n  \r\n/*  // remove the view code button\r\n  var codeButton = editor.Panels.getButton(\"options\", \"export-template\");\r\n\tcodeButton.collection.remove(codeButton);\r\n\r\n})\r\n\r\n*/\nvar editor = _grapesjs2.default.init({\n    showOffsets: 1,\n    noticeOnUnload: 0,\n    container: '#grapes-editable',\n    height: '100%',\n    // params: { _grape_token: app_js_param__csrf_token},\n    fromElement: true,\n    showDevices: false,\n    storageManager: {\n        id: 'grapes_page_content-', // Prefix identifier that will be used inside storing and loading\n        type: 'remote', // Type of the storage\n        autosave: true, // Store data automatically\n        urlStore: app_js_routing__grape_endpoint,\n        urlLoad: app_js_routing__grape_endpoint,\n        params: {\n            _grapejs_editor_token: app_js_param__csrf_token,\n            _page_id: app_js_param__page_id\n        },\n        //   autoload: true,         // Autoload stored data on init\n        stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered\n        storeComponents: false, // Enable/Disable storing of components in JSON format\n        storeStyles: false, // Enable/Disable storing of rules in JSON format\n        storeHtml: true, // Enable/Disable storing of components as HTML string\n        storeCss: false // Enable/Disable storing of rules as CSS string\n    },\n    panels: { defaults: [] },\n    plugins: [_grapesjsTuiImageEditor2.default],\n    pluginsOpts: _defineProperty({}, _grapesjsTuiImageEditor2.default, {\n        upload: true,\n        icons: {\n            'menu.normalIcon.path': '../static/svg/icon-d.svg',\n            'menu.activeIcon.path': '../static/svg/icon-b.svg',\n            'menu.disabledIcon.path': '../static/svg/icon-a.svg',\n            'menu.hoverIcon.path': '../static/svg/icon-c.svg',\n            'submenu.normalIcon.path': '../static/svg/icon-d.svg',\n            'submenu.activeIcon.path': '../static/svg/icon-c.svg'\n        },\n        script: ['/static/scripts/vendors/fabric.min.js', '/static/scripts/vendors/tui-code-snippet.min.js', '/static/scripts/vendors/tui-color-picker.min.js', '/static/scripts/vendors/tui-image-editor.min.js'],\n\n        // In case the script is loaded this style will be loaded too\n        style: [],\n\n        height: '90vh', width: '90vw' /* options */\n    }),\n    canvas: {\n        //  scripts: ['https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'],\n        styles: [app_js_routing__styles_css]\n    },\n    assetManager: {\n        // Upload endpoint, set `false` to disable upload, default `false`\n        upload: app_js_routing__grape_endpoint_upload,\n        params: {\n            _grapejs_editor_token: app_js_param__csrf_token,\n            _page_id: app_js_param__page_id\n        }\n\n    }\n});\n/*\r\nconst RemoteStorage = editor.StorageManager.get('remote');\r\nRemoteStorage.set('params', {_grape_token: app_js_param__csrf_token})\r\neditor.store();\r\n*/\n/*\r\neditor.Panels.addButton\r\n('options',\r\n    [{\r\n        id: 'save-db',\r\n        className: 'fa fa-floppy-o',\r\n        command: 'save-db',\r\n        attributes: {title: 'Save DB'}\r\n    }]\r\n);\r\n\r\n */\n\n// Add the command\neditor.Commands.add('save-db', {\n    run: function run(editor, sender) {\n        sender && sender.set('active'); // turn off the button\n        editor.store();\n    }\n});\n\n/*\r\neditor.on('storage:load', function(e) { console.log('Loaded ', e);});\r\neditor.on('storage:store', function(e) { console.log('Stored ', e);});\r\n*/\n\n//# sourceURL=webpack:///./assets/scripts/modules_backend/_grapes.js?");

/***/ }),

/***/ "./node_modules/grapesjs-tui-image-editor/dist/grapesjs-tui-image-editor.min.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/grapesjs-tui-image-editor/dist/grapesjs-tui-image-editor.min.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*! grapesjs-tui-image-editor - 0.1.2 */\n!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&\"object\"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,\"default\",{enumerable:!0,value:t}),2&e&&\"string\"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,\"a\",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p=\"\",n(n.s=2)}([function(t,e,n){var o=n(6);t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);\"function\"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}},function(t,e,n){var o=n(3),r=n(4),i=n(5);t.exports=function(t){return o(t)||r(t)||i()}},function(t,e,n){\"use strict\";n.r(e);var o=n(1),r=n.n(o),i=n(0),a=n.n(i);e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=\"https://raw.githubusercontent.com/nhnent/tui.image-editor/production/dist/svg/\",o=a()({},{config:{},constructor:\"\",labelImageEditor:\"Image Editor\",labelApply:\"Apply\",height:\"650px\",width:\"100%\",commandId:\"tui-image-editor\",toolbarIcon:'<svg viewBox=\"0 0 24 24\">\\n                    <path d=\"M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z\">\\n                    </path>\\n                  </svg>',hideHeader:1,onApply:0,addToAssets:1,upload:0,onApplyButton:function(){},icons:{\"menu.normalIcon.path\":\"\".concat(n,\"icon-d.svg\"),\"menu.activeIcon.path\":\"\".concat(n,\"icon-b.svg\"),\"menu.disabledIcon.path\":\"\".concat(n,\"icon-a.svg\"),\"menu.hoverIcon.path\":\"\".concat(n,\"icon-c.svg\"),\"submenu.normalIcon.path\":\"\".concat(n,\"icon-d.svg\"),\"submenu.activeIcon.path\":\"\".concat(n,\"icon-c.svg\")},script:[\"https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7/fabric.min.js\",\"https://uicdn.toast.com/tui.code-snippet/v1.5.0/tui-code-snippet.min.js\",\"https://uicdn.toast.com/tui-color-picker/v2.2.0/tui-color-picker.min.js\",\"https://uicdn.toast.com/tui-image-editor/v3.4.0/tui-image-editor.min.js\"],style:[\"https://uicdn.toast.com/tui-color-picker/v2.2.0/tui-color-picker.min.css\",\"https://uicdn.toast.com/tui-image-editor/v3.4.0/tui-image-editor.min.css\"]},e),i=o.script,c=o.style,s=o.height,u=o.width,l=o.hideHeader,d=o.icons,p=o.onApply,f=o.upload,m=o.addToAssets,g=o.commandId,h=function(){return o.constructor||window.tui&&window.tui.ImageEditor},b=h();if(!b&&i){var y=document.head,v=Array.isArray(i)?r()(i):[i];!function t(e){if(e.length){var n=document.createElement(\"link\");n.href=e.shift(),n.rel=\"stylesheet\",y.appendChild(n),t(e)}}(Array.isArray(c)?r()(c):[c]),function t(e){if(e.length){var n=document.createElement(\"script\");n.src=e.shift(),n.onerror=n.onload=t.bind(null,e),y.appendChild(n)}else b=h()}(v)}var j=t.DomComponents,w=j.getType(\"image\").model;j.addType(\"image\",{model:{initToolbar:function(){w.prototype.initToolbar.apply(this,arguments);var t=this.get(\"toolbar\");t.some(function(t){return t.command===g})||(t.unshift({command:g,label:o.toolbarIcon}),this.set(\"toolbar\",t))}}}),t.Commands.add(g,{run:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this.id;if(!b)return t.log(\"TOAST UI Image editor not found\",{level:\"error\",ns:g}),t.stopCommand(i);this.editor=t,this.target=r.target||t.getSelected();var a=this.createContent(),c=o.labelImageEditor,s=a.children[1];t.Modal.open({title:c,content:a}).getModel().once(\"change:open\",function(){return t.stopCommand(i)}),this.imageEditor=new b(a.children[0],this.getEditorConfig()),t.getModel().setEditing(1),s.onclick=function(){return n.applyChanges()},o.onApplyButton(s)},stop:function(t){var e=this.imageEditor;e&&e.destroy(),t.getModel().setEditing(0)},getEditorConfig:function(){var t=a()({},o.config),e=this.target.get(\"src\");return t.includeUI||(t.includeUI={}),t.includeUI=a()({theme:{}},t.includeUI,{loadImage:{path:e,name:1},uiSize:{height:s,width:u}}),l&&(t.includeUI.theme[\"header.display\"]=\"none\"),d&&(t.includeUI.theme=a()({},t.includeUI.theme,d)),t},createContent:function(){var t=document.createElement(\"div\");return t.style=\"position: relative\",t.innerHTML='\\n        <div></div>\\n        <button class=\"tui-image-editor__apply-btn\" style=\"\\n          position: absolute;\\n          top: 0; right: 0;\\n          margin: 10px;\\n          background-color: #fff;\\n          font-size: 1rem;\\n          border-radius: 3px;\\n          border: none;\\n          padding: 10px 20px;\\n          cursor: pointer\\n        \">\\n          '.concat(o.labelApply,\"\\n        </botton>\\n      \"),t},applyChanges:function(){var t=this,e=this.imageEditor,n=this.target,o=this.editor.AssetManager;if(p)p(e,n);else{var r=e.toDataURL();if(f){var i=this.dataUrlToBlob(r);o.FileUploader().uploadFile({dataTransfer:{files:[i]}},function(e){var n=e&&e.data&&e.data[0],o=n&&(\"string\"==typeof n?n:n.src);o&&t.applyToTarget(o)})}else m&&o.add({src:r,name:(n.get(\"src\")||\"\").split(\"/\").pop()}),this.applyToTarget(r)}},applyToTarget:function(t){this.target.set({src:t}),this.editor.Modal.close()},dataUrlToBlob:function(t){for(var e=t.split(\",\"),n=window.atob(e[1]),o=e[0].split(\":\")[1].split(\";\")[0],r=new ArrayBuffer(n.length),i=new Uint8Array(r),a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return new Blob([r],{type:o})}})}},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||\"[object Arguments]\"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\")}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}}])});\n//# sourceMappingURL=grapesjs-tui-image-editor.min.js.map\n\n//# sourceURL=webpack:///./node_modules/grapesjs-tui-image-editor/dist/grapesjs-tui-image-editor.min.js?");

/***/ }),

/***/ "./node_modules/grapesjs/dist/grapes.js":
/*!**********************************************!*\
  !*** ./node_modules/grapesjs/dist/grapes.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ })

/******/ });