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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/destination.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/destination.js":
/*!***************************************!*\
  !*** ./assets/scripts/destination.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _gallery = __webpack_require__(/*! ./modules/activity/_gallery */ \"./assets/scripts/modules/activity/_gallery.js\");\n\nvar _gallery2 = _interopRequireDefault(_gallery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nnew _gallery2.default('.gallery');\n\n//# sourceURL=webpack:///./assets/scripts/destination.js?");

/***/ }),

/***/ "./assets/scripts/modules/activity/_gallery.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/modules/activity/_gallery.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _swipeListener = __webpack_require__(/*! swipe-listener */ \"./node_modules/swipe-listener/dist/swipe-listener.min.js\");\n\nvar _swipeListener2 = _interopRequireDefault(_swipeListener);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Gallery = function () {\n    function Gallery(selector) {\n        _classCallCheck(this, Gallery);\n\n        this.container = document.querySelector(selector);\n        this.listener = (0, _swipeListener2.default)(this.container);\n        this.items = document.querySelectorAll(selector + ' .gallery__item');\n\n        this.activePos = 0;\n\n        this.init();\n        this.arrows = this.addArrows();\n        this.arrowPrev = this.arrows[0];\n        this.arrowNext = this.arrows[1];\n\n        this.events();\n    }\n\n    _createClass(Gallery, [{\n        key: 'events',\n        value: function events() {\n            var _this = this;\n\n            this.arrowPrev.addEventListener('click', this.prev.bind(this));\n\n            this.arrowNext.addEventListener('click', this.next.bind(this));\n\n            this.container.addEventListener('swipe', function (e) {\n                var directions = e.detail.directions;\n\n                if (directions.left) _this.next();\n\n                if (directions.right) _this.prev();\n            });\n        }\n    }, {\n        key: 'init',\n        value: function init() {\n            // this.container.setAttribute('style', 'height: '+this.images[0].clientHeight+'px;');\n\n            this.items.forEach(function (image, index) {\n                var displacement = index * 100;\n                image.setAttribute(\"style\", \"transform: translateX(\" + displacement + \"%);\");\n            });\n        }\n    }, {\n        key: 'addArrows',\n        value: function addArrows() {\n            var arrowPrev = document.createElement('div');\n            arrowPrev.classList.add('gallery__arrow');\n            arrowPrev.classList.add('gallery__arrow--prev');\n            var arrowNext = document.createElement('div');\n            arrowNext.classList.add('gallery__arrow');\n            arrowNext.classList.add('gallery__arrow--next');\n\n            this.container.appendChild(arrowPrev);\n            this.container.appendChild(arrowNext);\n\n            return [arrowPrev, arrowNext];\n        }\n    }, {\n        key: 'next',\n        value: function next() {\n            var _this2 = this;\n\n            if (this.activePos === this.items.length - 1) this.activePos = -1;\n\n            this.items.forEach(function (item, index) {\n\n                var displacement = (index - _this2.activePos - 1) * 100;\n                item.setAttribute(\"style\", \"transform: translateX(\" + displacement + \"%);\");\n            });\n\n            this.activePos += 1;\n        }\n    }, {\n        key: 'prev',\n        value: function prev() {\n            var _this3 = this;\n\n            if (this.activePos === 0) this.activePos = this.items.length;\n\n            this.items.forEach(function (item, index) {\n\n                var displacement = (index - _this3.activePos + 1) * 100;\n                item.setAttribute(\"style\", \"transform: translateX(\" + displacement + \"%);\");\n            });\n\n            this.activePos -= 1;\n        }\n    }]);\n\n    return Gallery;\n}();\n\nexports.default = Gallery;\n\n//# sourceURL=webpack:///./assets/scripts/modules/activity/_gallery.js?");

/***/ }),

/***/ "./node_modules/swipe-listener/dist/swipe-listener.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/swipe-listener/dist/swipe-listener.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},SwipeListener=function(a,b){if(a){'undefined'!=typeof window&&function(){function a(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent('CustomEvent');return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c}return'function'!=typeof window.CustomEvent&&void(a.prototype=window.Event.prototype,window.CustomEvent=a)}();b||(b={}),b=_extends({},{minHorizontal:10,minVertical:10,deltaHorizontal:3,deltaVertical:5,preventScroll:!1,lockAxis:!0,touch:!0,mouse:!0},b);var c=[],d=!1,e=function(){d=!0},f=function(a){d=!1,h(a)},g=function(a){d&&(a.changedTouches=[{clientX:a.clientX,clientY:a.clientY}],i(a))};b.mouse&&(a.addEventListener('mousedown',e),a.addEventListener('mouseup',f),a.addEventListener('mousemove',g));var h=function(d){var e=Math.abs,f=Math.max,g=Math.min;if(c.length){for(var h='function'==typeof TouchEvent&&d instanceof TouchEvent,j=[],k=[],l={top:!1,right:!1,bottom:!1,left:!1},m=0;m<c.length;m++)j.push(c[m].x),k.push(c[m].y);var i=j[0],n=j[j.length-1],o=k[0],p=k[k.length-1],q={x:[i,n],y:[o,p]};if(1<c.length){var r={detail:_extends({touch:h},q)},s=new CustomEvent('swiperelease',r);a.dispatchEvent(s)}var t=j[0]-j[j.length-1],u='none';u=0<t?'left':'right';var v,w=g.apply(Math,j),x=f.apply(Math,j);if(e(t)>=b.minHorizontal&&('left'==u?(v=e(w-j[j.length-1]),v<=b.deltaHorizontal&&(l.left=!0)):'right'==u?(v=e(x-j[j.length-1]),v<=b.deltaHorizontal&&(l.right=!0)):void 0),t=k[0]-k[k.length-1],u='none',u=0<t?'top':'bottom',w=g.apply(Math,k),x=f.apply(Math,k),e(t)>=b.minVertical&&('top'==u?(v=e(w-k[k.length-1]),v<=b.deltaVertical&&(l.top=!0)):'bottom'==u?(v=e(x-k[k.length-1]),v<=b.deltaVertical&&(l.bottom=!0)):void 0),(c=[],l.top||l.right||l.bottom||l.left)){b.lockAxis&&((l.left||l.right)&&e(i-n)>e(o-p)?l.top=l.bottom=!1:(l.top||l.bottom)&&e(i-n)<e(o-p)&&(l.left=l.right=!1));var y={detail:_extends({directions:l,touch:h},q)},z=new CustomEvent('swipe',y);a.dispatchEvent(z)}else{var A=new CustomEvent('swipecancel',{detail:_extends({touch:h},q)});a.dispatchEvent(A)}}},i=function(d){b.preventScroll&&d.preventDefault();var e=d.changedTouches[0];if(c.push({x:e.clientX,y:e.clientY}),1<c.length){var f=c[0].x,g=c[c.length-1].x,h=c[0].y,i=c[c.length-1].y,j={detail:{x:[f,g],y:[h,i],touch:'function'==typeof TouchEvent&&d instanceof TouchEvent}},k=new CustomEvent('swiping',j);a.dispatchEvent(k)}},j=!1;try{var k=Object.defineProperty({},'passive',{get:function(){j={passive:!b.preventScroll}}});window.addEventListener('testPassive',null,k),window.removeEventListener('testPassive',null,k)}catch(a){}return b.touch&&(a.addEventListener('touchmove',i,j),a.addEventListener('touchend',h)),{off:function(){a.removeEventListener('touchmove',i,j),a.removeEventListener('touchend',h),a.removeEventListener('mousedown',e),a.removeEventListener('mouseup',f),a.removeEventListener('mousemove',g)}}}}; true&&'undefined'!=typeof module.exports?(module.exports=SwipeListener,module.exports.default=SwipeListener): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return SwipeListener}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;\n\n//# sourceURL=webpack:///./node_modules/swipe-listener/dist/swipe-listener.min.js?");

/***/ })

/******/ });