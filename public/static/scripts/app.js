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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/app.js":
/*!*******************************!*\
  !*** ./assets/scripts/app.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/_burger_menu */ \"./assets/scripts/modules/_burger_menu.js\");\n\nconsole.log('sds');\n// new SampleClass();\n// import SampleClass from './modules/_sample';\n\n//# sourceURL=webpack:///./assets/scripts/app.js?");

/***/ }),

/***/ "./assets/scripts/modules/_burger_menu.js":
/*!************************************************!*\
  !*** ./assets/scripts/modules/_burger_menu.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _d3Ease = __webpack_require__(/*! d3-ease */ \"./node_modules/d3-ease/src/index.js\");\n\nvar _segmentJs = __webpack_require__(/*! segment-js */ \"./node_modules/segment-js/dist/segment.js\");\n\nvar _segmentJs2 = _interopRequireDefault(_segmentJs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log(\"burger\");\n\n(function () {\n\n\t/* In animations (to close icon) */\n\n\tvar beginAC = 80,\n\t    endAC = 320,\n\t    beginB = 80,\n\t    endB = 320;\n\n\tfunction inAC(s) {\n\t\ts.draw('80% - 240', '80%', 0.3, {\n\t\t\tdelay: 0.1,\n\t\t\tcallback: function callback() {\n\t\t\t\tinAC2(s);\n\t\t\t}\n\t\t});\n\t}\n\n\tfunction inAC2(s) {\n\t\ts.draw('100% - 545', '100% - 305', 0.6, {\n\t\t\teasing: _d3Ease.easeElasticOut\n\t\t});\n\t}\n\n\tfunction inB(s) {\n\t\ts.draw(beginB - 60, endB + 60, 0.1, {\n\t\t\tcallback: function callback() {\n\t\t\t\tinB2(s);\n\t\t\t}\n\t\t});\n\t}\n\n\tfunction inB2(s) {\n\t\ts.draw(beginB + 120, endB - 120, 0.3, {\n\t\t\teasing: _d3Ease.easeBounceOut\n\t\t});\n\t}\n\n\t/* Out animations (to burger icon) */\n\n\tfunction outAC(s) {\n\t\ts.draw('90% - 240', '90%', 0.1, {\n\t\t\teasing: _d3Ease.easeElasticIn,\n\t\t\tcallback: function callback() {\n\t\t\t\toutAC2(s);\n\t\t\t}\n\t\t});\n\t}\n\n\tfunction outAC2(s) {\n\t\ts.draw('20% - 240', '20%', 0.3, {\n\t\t\tcallback: function callback() {\n\t\t\t\toutAC3(s);\n\t\t\t}\n\t\t});\n\t}\n\n\tfunction outAC3(s) {\n\t\ts.draw(beginAC, endAC, 0.7, {\n\t\t\teasing: _d3Ease.easeElasticOut\n\t\t});\n\t}\n\n\tfunction outB(s) {\n\t\ts.draw(beginB, endB, 0.7, {\n\t\t\tdelay: 0.1,\n\t\t\teasing: _d3Ease.easeElasticOut\n\t\t});\n\t}\n\n\t/* Scale functions */\n\n\tfunction addScale(m) {\n\t\tm.className = 'menu-icon-wrapper scaled';\n\t}\n\n\tfunction removeScale(m) {\n\t\tm.className = 'menu-icon-wrapper';\n\t}\n\n\t/* Awesome burger scaled */\n\n\tvar pathA = document.getElementById('burger_pathA'),\n\t    pathB = document.getElementById('burger_pathB'),\n\t    pathC = document.getElementById('burger_pathC'),\n\t    segmentA = new _segmentJs2.default(pathA, beginAC, endAC),\n\t    segmentB = new _segmentJs2.default(pathB, beginB, endB),\n\t    segmentC = new _segmentJs2.default(pathC, beginAC, endAC),\n\t    wrapper = document.getElementById('menu-icon-wrapper'),\n\t    trigger = document.getElementById('menu-icon-trigger'),\n\t    toCloseIcon = true,\n\t    dummy = document.getElementById('navigation_menu');\n\n\twrapper.style.visibility = 'visible';\n\n\ttrigger.onclick = function () {\n\t\taddScale(wrapper);\n\t\tif (toCloseIcon) {\n\t\t\tinAC(segmentA);\n\t\t\tinB(segmentB);\n\t\t\tinAC(segmentC);\n\n\t\t\t/*****Active menu container **/\n\t\t\tdummy.className = 'navigation_menu navigation_menu--active swing-in-right-bck';\n\t\t} else {\n\t\t\toutAC(segmentA);\n\t\t\toutB(segmentB);\n\t\t\toutAC(segmentC);\n\n\t\t\tdummy.className = 'navigation_menu swing-in-right-bck-reverse';\n\t\t}\n\t\ttoCloseIcon = !toCloseIcon;\n\t};\n})();\n\n//# sourceURL=webpack:///./assets/scripts/modules/_burger_menu.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/back.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/back.js ***!
  \******************************************/
/*! exports provided: backIn, backOut, backInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backIn\", function() { return backIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backOut\", function() { return backOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backInOut\", function() { return backInOut; });\nvar overshoot = 1.70158;\n\nvar backIn = (function custom(s) {\n  s = +s;\n\n  function backIn(t) {\n    return t * t * ((s + 1) * t - s);\n  }\n\n  backIn.overshoot = custom;\n\n  return backIn;\n})(overshoot);\n\nvar backOut = (function custom(s) {\n  s = +s;\n\n  function backOut(t) {\n    return --t * t * ((s + 1) * t + s) + 1;\n  }\n\n  backOut.overshoot = custom;\n\n  return backOut;\n})(overshoot);\n\nvar backInOut = (function custom(s) {\n  s = +s;\n\n  function backInOut(t) {\n    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;\n  }\n\n  backInOut.overshoot = custom;\n\n  return backInOut;\n})(overshoot);\n\n\n//# sourceURL=webpack:///./node_modules/d3-ease/src/back.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/bounce.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/bounce.js ***!
  \********************************************/
/*! exports provided: bounceIn, bounceOut, bounceInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bounceIn\", function() { return bounceIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bounceOut\", function() { return bounceOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bounceInOut\", function() { return bounceInOut; });\nvar b1 = 4 / 11,\n    b2 = 6 / 11,\n    b3 = 8 / 11,\n    b4 = 3 / 4,\n    b5 = 9 / 11,\n    b6 = 10 / 11,\n    b7 = 15 / 16,\n    b8 = 21 / 22,\n    b9 = 63 / 64,\n    b0 = 1 / b1 / b1;\n\nfunction bounceIn(t) {\n  return 1 - bounceOut(1 - t);\n}\n\nfunction bounceOut(t) {\n  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;\n}\n\nfunction bounceInOut(t) {\n  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-ease/src/bounce.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/circle.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/circle.js ***!
  \********************************************/
/*! exports provided: circleIn, circleOut, circleInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"circleIn\", function() { return circleIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"circleOut\", function() { return circleOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"circleInOut\", function() { return circleInOut; });\nfunction circleIn(t) {\n  return 1 - Math.sqrt(1 - t * t);\n}\n\nfunction circleOut(t) {\n  return Math.sqrt(1 - --t * t);\n}\n\nfunction circleInOut(t) {\n  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-ease/src/circle.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/cubic.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
/*! exports provided: cubicIn, cubicOut, cubicInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cubicIn\", function() { return cubicIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cubicOut\", function() { return cubicOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cubicInOut\", function() { return cubicInOut; });\nfunction cubicIn(t) {\n  return t * t * t;\n}\n\nfunction cubicOut(t) {\n  return --t * t * t + 1;\n}\n\nfunction cubicInOut(t) {\n  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-ease/src/cubic.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/elastic.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-ease/src/elastic.js ***!
  \*********************************************/
/*! exports provided: elasticIn, elasticOut, elasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elasticIn\", function() { return elasticIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elasticOut\", function() { return elasticOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elasticInOut\", function() { return elasticInOut; });\nvar tau = 2 * Math.PI,\n    amplitude = 1,\n    period = 0.3;\n\nvar elasticIn = (function custom(a, p) {\n  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);\n\n  function elasticIn(t) {\n    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);\n  }\n\n  elasticIn.amplitude = function(a) { return custom(a, p * tau); };\n  elasticIn.period = function(p) { return custom(a, p); };\n\n  return elasticIn;\n})(amplitude, period);\n\nvar elasticOut = (function custom(a, p) {\n  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);\n\n  function elasticOut(t) {\n    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);\n  }\n\n  elasticOut.amplitude = function(a) { return custom(a, p * tau); };\n  elasticOut.period = function(p) { return custom(a, p); };\n\n  return elasticOut;\n})(amplitude, period);\n\nvar elasticInOut = (function custom(a, p) {\n  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);\n\n  function elasticInOut(t) {\n    return ((t = t * 2 - 1) < 0\n        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)\n        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;\n  }\n\n  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };\n  elasticInOut.period = function(p) { return custom(a, p); };\n\n  return elasticInOut;\n})(amplitude, period);\n\n\n//# sourceURL=webpack:///./node_modules/d3-ease/src/elastic.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/exp.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/exp.js ***!
  \*****************************************/
/*! exports provided: expIn, expOut, expInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expIn\", function() { return expIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expOut\", function() { return expOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expInOut\", function() { return expInOut; });\nfunction expIn(t) {\n  return Math.pow(2, 10 * t - 10);\n}\n\nfunction expOut(t) {\n  return 1 - Math.pow(2, -10 * t);\n}\n\nfunction expInOut(t) {\n  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-ease/src/exp.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/index.js ***!
  \*******************************************/
/*! exports provided: easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ \"./node_modules/d3-ease/src/linear.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeLinear\", function() { return _linear__WEBPACK_IMPORTED_MODULE_0__[\"linear\"]; });\n\n/* harmony import */ var _quad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quad */ \"./node_modules/d3-ease/src/quad.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeQuad\", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__[\"quadInOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeQuadIn\", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__[\"quadIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeQuadOut\", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__[\"quadOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeQuadInOut\", function() { return _quad__WEBPACK_IMPORTED_MODULE_1__[\"quadInOut\"]; });\n\n/* harmony import */ var _cubic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubic */ \"./node_modules/d3-ease/src/cubic.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCubic\", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__[\"cubicInOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCubicIn\", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__[\"cubicIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCubicOut\", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__[\"cubicOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCubicInOut\", function() { return _cubic__WEBPACK_IMPORTED_MODULE_2__[\"cubicInOut\"]; });\n\n/* harmony import */ var _poly__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poly */ \"./node_modules/d3-ease/src/poly.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easePoly\", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__[\"polyInOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easePolyIn\", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__[\"polyIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easePolyOut\", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__[\"polyOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easePolyInOut\", function() { return _poly__WEBPACK_IMPORTED_MODULE_3__[\"polyInOut\"]; });\n\n/* harmony import */ var _sin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sin */ \"./node_modules/d3-ease/src/sin.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeSin\", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__[\"sinInOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeSinIn\", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__[\"sinIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeSinOut\", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__[\"sinOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeSinInOut\", function() { return _sin__WEBPACK_IMPORTED_MODULE_4__[\"sinInOut\"]; });\n\n/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exp */ \"./node_modules/d3-ease/src/exp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeExp\", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__[\"expInOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeExpIn\", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__[\"expIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeExpOut\", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__[\"expOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeExpInOut\", function() { return _exp__WEBPACK_IMPORTED_MODULE_5__[\"expInOut\"]; });\n\n/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circle */ \"./node_modules/d3-ease/src/circle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCircle\", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__[\"circleInOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCircleIn\", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__[\"circleIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCircleOut\", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__[\"circleOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeCircleInOut\", function() { return _circle__WEBPACK_IMPORTED_MODULE_6__[\"circleInOut\"]; });\n\n/* harmony import */ var _bounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bounce */ \"./node_modules/d3-ease/src/bounce.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBounce\", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__[\"bounceOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBounceIn\", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__[\"bounceIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBounceOut\", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__[\"bounceOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBounceInOut\", function() { return _bounce__WEBPACK_IMPORTED_MODULE_7__[\"bounceInOut\"]; });\n\n/* harmony import */ var _back__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./back */ \"./node_modules/d3-ease/src/back.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBack\", function() { return _back__WEBPACK_IMPORTED_MODULE_8__[\"backInOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBackIn\", function() { return _back__WEBPACK_IMPORTED_MODULE_8__[\"backIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBackOut\", function() { return _back__WEBPACK_IMPORTED_MODULE_8__[\"backOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeBackInOut\", function() { return _back__WEBPACK_IMPORTED_MODULE_8__[\"backInOut\"]; });\n\n/* harmony import */ var _elastic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elastic */ \"./node_modules/d3-ease/src/elastic.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeElastic\", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__[\"elasticOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeElasticIn\", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__[\"elasticIn\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeElasticOut\", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__[\"elasticOut\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"easeElasticInOut\", function() { return _elastic__WEBPACK_IMPORTED_MODULE_9__[\"elasticInOut\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/d3-ease/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/linear.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/linear.js ***!
  \********************************************/
/*! exports provided: linear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"linear\", function() { return linear; });\nfunction linear(t) {\n  return +t;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-ease/src/linear.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/poly.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/poly.js ***!
  \******************************************/
/*! exports provided: polyIn, polyOut, polyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"polyIn\", function() { return polyIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"polyOut\", function() { return polyOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"polyInOut\", function() { return polyInOut; });\nvar exponent = 3;\n\nvar polyIn = (function custom(e) {\n  e = +e;\n\n  function polyIn(t) {\n    return Math.pow(t, e);\n  }\n\n  polyIn.exponent = custom;\n\n  return polyIn;\n})(exponent);\n\nvar polyOut = (function custom(e) {\n  e = +e;\n\n  function polyOut(t) {\n    return 1 - Math.pow(1 - t, e);\n  }\n\n  polyOut.exponent = custom;\n\n  return polyOut;\n})(exponent);\n\nvar polyInOut = (function custom(e) {\n  e = +e;\n\n  function polyInOut(t) {\n    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;\n  }\n\n  polyInOut.exponent = custom;\n\n  return polyInOut;\n})(exponent);\n\n\n//# sourceURL=webpack:///./node_modules/d3-ease/src/poly.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/quad.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/quad.js ***!
  \******************************************/
/*! exports provided: quadIn, quadOut, quadInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quadIn\", function() { return quadIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quadOut\", function() { return quadOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quadInOut\", function() { return quadInOut; });\nfunction quadIn(t) {\n  return t * t;\n}\n\nfunction quadOut(t) {\n  return t * (2 - t);\n}\n\nfunction quadInOut(t) {\n  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-ease/src/quad.js?");

/***/ }),

/***/ "./node_modules/d3-ease/src/sin.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/sin.js ***!
  \*****************************************/
/*! exports provided: sinIn, sinOut, sinInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sinIn\", function() { return sinIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sinOut\", function() { return sinOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sinInOut\", function() { return sinInOut; });\nvar pi = Math.PI,\n    halfPi = pi / 2;\n\nfunction sinIn(t) {\n  return 1 - Math.cos(t * halfPi);\n}\n\nfunction sinOut(t) {\n  return Math.sin(t * halfPi);\n}\n\nfunction sinInOut(t) {\n  return (1 - Math.cos(pi * t)) / 2;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-ease/src/sin.js?");

/***/ }),

/***/ "./node_modules/segment-js/dist/segment.js":
/*!*************************************************!*\
  !*** ./node_modules/segment-js/dist/segment.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**\n * segment - A JavaScript library to draw and animate SVG path strokes\n * @version v1.1.0\n * @link https://github.com/lmgonzalves/segment\n * @license MIT\n */\n\n(function(root, factory) {\n    if (true) {\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n}(this, function () {\n\n    function Segment(path, begin, end, circular){\n        this.path = path;\n        this.reset();\n        this.begin = typeof begin !== 'undefined' ? this.valueOf(begin) : 0;\n        this.end = typeof end !== 'undefined' ? this.valueOf(end) : this.length;\n        this.circular = typeof circular !== 'undefined' ? circular : false;\n        this.timer = null;\n        this.animationTimer = null;\n        this.draw(this.begin, this.end, 0, {circular: this.circular});\n    }\n\n    Segment.prototype = {\n        reset: function(){\n            this.length = this.path.getTotalLength();\n            this.path.style.strokeDashoffset = this.length * 2;\n        },\n\n        draw: function(begin, end, duration, options){\n            this.circular = options && options.hasOwnProperty('circular') ? options.circular : false;\n            if(duration){\n                this.stop();\n\n                var that = this;\n                var delay = options && options.hasOwnProperty('delay') ? parseFloat(options.delay) * 1000 : 0;\n                if(delay){\n                    delete options.delay;\n                    this.timer = setTimeout(function(){\n                        that.draw(begin, end, duration, options);\n                    }, delay);\n                    return this.timer;\n                }\n\n                this.startTime = new Date();\n                this.initBegin = this.begin;\n                this.initEnd = this.end;\n                this.finalBegin = this.valueOf(begin);\n                this.finalEnd = this.valueOf(end);\n                this.pausedTime = 0;\n                this.duration = duration;\n                this.easing = options && options.hasOwnProperty('easing') ? options.easing : null;\n                this.callback = options && options.hasOwnProperty('callback') ? options.callback : null;\n\n                this.animationTimer = requestAnimationFrame(this.play.bind(this));\n            }else{\n                this.path.style.strokeDasharray = this.strokeDasharray(begin, end);\n            }\n        },\n\n        play: function() {\n            var now = new Date();\n            if (this.pausedTime) {\n                this.startTime.setMilliseconds(this.startTime.getMilliseconds() + (now - this.pausedTime));\n                this.pausedTime = 0;\n            }\n            var elapsed = (now - this.startTime) / 1000;\n            var time = (elapsed / parseFloat(this.duration));\n            var t = time;\n\n            if(typeof this.easing === 'function'){\n                t = this.easing(t);\n            }\n\n            if(time > 1){\n                t = 1;\n                this.stop();\n            }else{\n                this.animationTimer = requestAnimationFrame(this.play.bind(this));\n            }\n\n            this.drawStep(t);\n\n            if(time > 1 && typeof this.callback === 'function'){\n                return this.callback.call(this);\n            }\n        },\n\n        pause: function() {\n            if (this.animationTimer) {\n                this.stop();\n                this.pausedTime = new Date();\n            }\n        },\n\n        resume: function() {\n            if (!this.animationTimer) {\n                this.animationTimer = requestAnimationFrame(this.play.bind(this));\n            }\n        },\n\n        stop: function(){\n            cancelAnimationFrame(this.animationTimer);\n            this.animationTimer = null;\n            clearTimeout(this.timer);\n            this.timer = null;\n        },\n\n        drawStep: function(t) {\n            this.begin = this.initBegin + (this.finalBegin - this.initBegin) * t;\n            this.end = this.initEnd + (this.finalEnd - this.initEnd) * t;\n\n            this.begin = this.begin < 0 && !this.circular ? 0 : this.begin;\n            this.begin = this.begin > this.length && !this.circular ? this.length : this.begin;\n            this.end = this.end < 0 && !this.circular ? 0 : this.end;\n            this.end = this.end > this.length && !this.circular ? this.length : this.end;\n\n            if (this.end - this.begin <= this.length && this.end - this.begin > 0) {\n                this.draw(this.begin, this.end, 0, {circular: this.circular});\n            } else {\n                if (this.circular && this.end - this.begin > this.length) {\n                    this.draw(0, this.length, 0, {circular: this.circular});\n                } else {\n                    this.draw(this.begin + (this.end - this.begin), this.end - (this.end - this.begin), 0, {circular: this.circular});\n                }\n            }\n        },\n\n        strokeDasharray: function(begin, end){\n            this.begin = this.valueOf(begin);\n            this.end = this.valueOf(end);\n            if(this.circular){\n                var division = this.begin > this.end || (this.begin < 0 && this.begin < this.length * -1)\n                    ? parseInt(this.begin / parseInt(this.length)) : parseInt(this.end / parseInt(this.length));\n                if(division !== 0){\n                    this.begin = this.begin - this.length * division;\n                    this.end = this.end - this.length * division;\n                }\n            }\n            if(this.end > this.length){\n                var plus = this.end - this.length;\n                return [this.length, this.length, plus, this.begin - plus, this.end - this.begin].join(' ');\n            }\n            if(this.begin < 0){\n                var minus = this.length + this.begin;\n                if(this.end < 0){\n                    return [this.length, this.length + this.begin, this.end - this.begin, minus - this.end, this.end - this.begin, this.length].join(' ');\n                }else{\n                    return [this.length, this.length + this.begin, this.end - this.begin, minus - this.end, this.length].join(' ');\n                }\n            }\n            return [this.length, this.length + this.begin, this.end - this.begin].join(' ');\n        },\n\n        valueOf: function(input){\n            var val = parseFloat(input);\n            if(typeof input === 'string' || input instanceof String){\n                if(~input.indexOf('%')){\n                    var arr;\n                    if(~input.indexOf('+')){\n                        arr = input.split('+');\n                        val = this.percent(arr[0]) + parseFloat(arr[1]);\n                    }else if(~input.indexOf('-')){\n                        arr = input.split('-');\n                        if(arr.length === 3){\n                            val = -this.percent(arr[1]) - parseFloat(arr[2]);\n                        }else{\n                            val = arr[0] ? this.percent(arr[0]) - parseFloat(arr[1]) : -this.percent(arr[1]);\n                        }\n                    }else{\n                        val = this.percent(input);\n                    }\n                }\n            }\n            return val;\n        },\n\n        percent: function(value){\n            return parseFloat(value) / 100 * this.length;\n        }\n    };\n\n    return Segment;\n\n}));\n\n\n//# sourceURL=webpack:///./node_modules/segment-js/dist/segment.js?");

/***/ })

/******/ });