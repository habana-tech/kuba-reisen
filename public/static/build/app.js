(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/scripts/app.js":
/*!*******************************!*\
  !*** ./assets/scripts/app.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lazysizes_plugins_unveilhooks_ls_unveilhooks_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazysizes/plugins/unveilhooks/ls.unveilhooks.min */ "./node_modules/lazysizes/plugins/unveilhooks/ls.unveilhooks.min.js");
/* harmony import */ var lazysizes_plugins_unveilhooks_ls_unveilhooks_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_unveilhooks_ls_unveilhooks_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_global_navBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/global/_navBar */ "./assets/scripts/modules/global/_navBar.js");
/* harmony import */ var _modules_global_cartBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/global/_cartBar */ "./assets/scripts/modules/global/_cartBar.js");
/* harmony import */ var _modules_global_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/global/_cookies */ "./assets/scripts/modules/global/_cookies.js");






__webpack_require__(/*! ../styles/kraken.scss */ "./assets/styles/kraken.scss");

__webpack_require__(/*! ../styles/styles.scss */ "./assets/styles/styles.scss");

new smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true
});
new _modules_global_navBar__WEBPACK_IMPORTED_MODULE_2__["default"]();
new _modules_global_cartBar__WEBPACK_IMPORTED_MODULE_3__["default"]();
new _modules_global_cookies__WEBPACK_IMPORTED_MODULE_4__["default"]();

/***/ }),

/***/ "./assets/scripts/modules/global/_cartBar.js":
/*!***************************************************!*\
  !*** ./assets/scripts/modules/global/_cartBar.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_utils */ "./assets/scripts/modules/global/_utils.js");




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CartBar =
/*#__PURE__*/
function () {
  function CartBar() {
    _classCallCheck(this, CartBar);

    this.cartBar = document.querySelector('.cart_bar');
    if (this.cartBar == null) return;
    this.cartBarText = document.querySelector('.cart_bar .cart_bar__content__text span');
    this.check();
  }

  _createClass(CartBar, [{
    key: "check",
    value: function check() {
      var currentValue = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('products_cart');
      if (!currentValue) return;
      var activitiesAmount = currentValue[1].split(',').length;
      this.cartBar.classList.remove('cart_bar--initial');
      if (activitiesAmount === 1) this.cartBarText.innerHTML = activitiesAmount + 'Produkt';else if (activitiesAmount > 1) this.cartBarText.innerHTML = activitiesAmount + 'Produkte';
    }
  }]);

  return CartBar;
}();

/* harmony default export */ __webpack_exports__["default"] = (CartBar);

/***/ }),

/***/ "./assets/scripts/modules/global/_cookies.js":
/*!***************************************************!*\
  !*** ./assets/scripts/modules/global/_cookies.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_utils */ "./assets/scripts/modules/global/_utils.js");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Cookies =
/*#__PURE__*/
function () {
  function Cookies() {
    _classCallCheck(this, Cookies);

    //If the cookie was set, the dialog doenst exist!! (twig didnt write it) and JS twrows an error
    this.allowBtn = document.querySelector('.cookie .cookie__btn button');
    this.message = document.querySelector('.cookie');
    this.overlay = document.querySelector('.cookie-overlay'); //Only if the btn exist.

    if (this.allowBtn) this.event();
  }

  _createClass(Cookies, [{
    key: "event",
    value: function event() {
      this.dialog();
      this.allowBtn.addEventListener('click', this.allowCookies.bind(this));
    }
  }, {
    key: "allowCookies",
    value: function allowCookies() {
      console.info('allow cookies');
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["setCookie"])('allow', 'allow-cookies');
      this.hide();
    }
  }, {
    key: "dialog",
    value: function dialog() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getCookie"])('allow-cookies')) this.hide();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.message.classList.add('cookie--no-visible');
      this.overlay.classList.add('cookie-overlay--no-visible');
    }
  }]);

  return Cookies;
}();

/* harmony default export */ __webpack_exports__["default"] = (Cookies);

/***/ }),

/***/ "./assets/scripts/modules/global/_navBar.js":
/*!**************************************************!*\
  !*** ./assets/scripts/modules/global/_navBar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var segment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! segment-js */ "./node_modules/segment-js/dist/segment.js");
/* harmony import */ var segment_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(segment_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vendors_headroom_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../vendors/headroom.min */ "./assets/scripts/vendors/headroom.min.js");
/* harmony import */ var _vendors_headroom_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendors_headroom_min__WEBPACK_IMPORTED_MODULE_4__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var NavBar =
/*#__PURE__*/
function () {
  function NavBar() {
    _classCallCheck(this, NavBar);

    this.header = document.querySelector('header');
    this.navegationMenu = document.querySelector('.header__nav');
    this.pathA = document.querySelector('#burger_pathA');
    this.pathB = document.querySelector('#burger_pathB');
    this.pathC = document.querySelector('#burger_pathC');
    this.wrapper = document.querySelector('#menu-icon-wrapper');
    this.button = document.querySelector('#menu-icon-trigger');
    this.main = document.querySelector('main');
    this.beginAC = 80;
    this.endAC = 320;
    this.beginB = 80;
    this.endB = 320;
    this.isOpen = false;
    this.segmentA = new segment_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.pathA, this.beginAC, this.endAC);
    this.segmentB = new segment_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.pathB, this.beginB, this.endB);
    this.segmentC = new segment_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.pathC, this.beginAC, this.endAC);
    this.events();
    this.headroomInit();
  }

  _createClass(NavBar, [{
    key: "headroomInit",
    value: function headroomInit() {
      _vendors_headroom_min__WEBPACK_IMPORTED_MODULE_4___default.a.options.onUnpin = this.hideMenuUnPin.bind(this);
      _vendors_headroom_min__WEBPACK_IMPORTED_MODULE_4___default.a.options.tolerance = {
        up: 10,
        down: 8
      };
      var headroom = new _vendors_headroom_min__WEBPACK_IMPORTED_MODULE_4___default.a(this.header);
      headroom.init();
    }
  }, {
    key: "events",
    value: function events() {
      var _this = this;

      this.button.addEventListener('click', this.showOrHideMenu.bind(this));
      this.main.addEventListener('click', function () {
        if (_this.isOpen) _this.hideMenu();
      });
    }
  }, {
    key: "showOrHideMenu",
    value: function showOrHideMenu() {
      if (this.isOpen) this.hideMenu();else this.showMenu();
    }
  }, {
    key: "showMenu",
    value: function showMenu() {
      if (this.header.classList.contains('headroom--top')) {
        this.header.classList.add('header--pinned');
      }

      this.inAC(this.segmentA, this);
      this.inB(this.segmentB, this);
      this.inAC(this.segmentC, this);
      /*****Active menu container **/

      this.navegationMenu.classList.add('swing-in-top-bck');
      this.navegationMenu.classList.remove('swing-out-top-bck');
      this.isOpen = true;
    }
  }, {
    key: "hideMenuUnPin",
    value: function hideMenuUnPin() {
      if (this.isOpen) {
        this.outAC(this.segmentA, this);
        this.outB(this.segmentB, this);
        this.outAC(this.segmentC, this);
        this.navegationMenu.classList.remove('swing-in-top-bck');
        this.navegationMenu.classList.add('swing-out-top-bck');
        this.isOpen = false;
      }
    }
  }, {
    key: "hideMenu",
    value: function hideMenu() {
      if (this.header.classList.contains('headroom--top')) {
        this.header.classList.remove('header--pinned');
      }

      if (this.isOpen) {
        this.outAC(this.segmentA, this);
        this.outB(this.segmentB, this);
        this.outAC(this.segmentC, this);
        this.navegationMenu.classList.remove('swing-in-top-bck');
        this.navegationMenu.classList.add('swing-out-top-bck');
        this.isOpen = false;
      }
    }
  }, {
    key: "inAC",
    value: function inAC(s, that) {
      s.draw('80% - 240', '80%', 0.3, {
        delay: 0.1,
        callback: function callback() {
          that.inAC2(s);
        }
      });
    }
  }, {
    key: "inAC2",
    value: function inAC2(s) {
      s.draw('100% - 545', '100% - 305', 0.6, {
        easing: d3_ease__WEBPACK_IMPORTED_MODULE_2__["easeElasticOut"]
      });
    }
  }, {
    key: "inB",
    value: function inB(s, that) {
      s.draw(this.beginB - 60, this.endB + 60, 0.1, {
        callback: function callback() {
          that.inB2(s);
        }
      });
    }
  }, {
    key: "inB2",
    value: function inB2(s) {
      s.draw(this.beginB + 120, this.endB - 120, 0.3, {
        easing: d3_ease__WEBPACK_IMPORTED_MODULE_2__["easeBounceOut"]
      });
    }
    /* Out animations (to burger icon) */

  }, {
    key: "outAC",
    value: function outAC(s, that) {
      s.draw('90% - 240', '90%', 0.1, {
        easing: d3_ease__WEBPACK_IMPORTED_MODULE_2__["easeElasticIn"],
        callback: function callback() {
          that.outAC2(s, that);
        }
      });
    }
  }, {
    key: "outAC2",
    value: function outAC2(s, that) {
      s.draw('20% - 240', '20%', 0.3, {
        callback: function callback() {
          that.outAC3(s);
        }
      });
    }
  }, {
    key: "outAC3",
    value: function outAC3(s) {
      s.draw(this.beginAC, this.endAC, 0.7, {
        easing: d3_ease__WEBPACK_IMPORTED_MODULE_2__["easeElasticOut"]
      });
    }
  }, {
    key: "outB",
    value: function outB(s) {
      s.draw(this.beginB, this.endB, 0.7, {
        delay: 0.1,
        easing: d3_ease__WEBPACK_IMPORTED_MODULE_2__["easeElasticOut"]
      });
    }
  }]);

  return NavBar;
}();

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./assets/scripts/modules/global/_utils.js":
/*!*************************************************!*\
  !*** ./assets/scripts/modules/global/_utils.js ***!
  \*************************************************/
/*! exports provided: setCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__);




function setCookie(value) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'products_cart';
  var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  var date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  var expires = "; expires=" + date.toGMTString();
  document.cookie = name + "=" + value + expires + "; path=/";
}
function getCookie(name) {
  var cArr = document.cookie.split(';');

  for (var i = 0; i < cArr.length; i++) {
    var cookie = cArr[i].split("=", 2);
    cookie[0] = cookie[0].replace(/^\s+/, "");
    if (cookie[0] == name) return cookie;
  }

  return false;
}

/***/ }),

/***/ "./assets/scripts/vendors/headroom.min.js":
/*!************************************************!*\
  !*** ./assets/scripts/vendors/headroom.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * headroom.js v0.9.4 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */
!function (a, b) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function a(a) {
    this.callback = a, this.ticking = !1;
  }

  function b(a) {
    return a && "undefined" != typeof window && (a === window || a.nodeType);
  }

  function c(a) {
    if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
    var d,
        e,
        f = a || {};

    for (e = 1; e < arguments.length; e++) {
      var g = arguments[e] || {};

      for (d in g) {
        "object" != _typeof(f[d]) || b(f[d]) ? f[d] = f[d] || g[d] : f[d] = c(f[d], g[d]);
      }
    }

    return f;
  }

  function d(a) {
    return a === Object(a) ? a : {
      down: a,
      up: a
    };
  }

  function e(a, b) {
    b = c(b, e.options), this.lastKnownScrollY = 0, this.elem = a, this.tolerance = d(b.tolerance), this.classes = b.classes, this.offset = b.offset, this.scroller = b.scroller, this.initialised = !1, this.onPin = b.onPin, this.onUnpin = b.onUnpin, this.onTop = b.onTop, this.onNotTop = b.onNotTop, this.onBottom = b.onBottom, this.onNotBottom = b.onNotBottom;
  }

  var f = {
    bind: !!function () {}.bind,
    classList: "classList" in document.documentElement,
    rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
  };
  return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, a.prototype = {
    constructor: a,
    update: function update() {
      this.callback && this.callback(), this.ticking = !1;
    },
    requestTick: function requestTick() {
      this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0);
    },
    handleEvent: function handleEvent() {
      this.requestTick();
    }
  }, e.prototype = {
    constructor: e,
    init: function init() {
      if (e.cutsTheMustard) return this.debouncer = new a(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this;
    },
    destroy: function destroy() {
      var a = this.classes;
      this.initialised = !1;

      for (var b in a) {
        a.hasOwnProperty(b) && this.elem.classList.remove(a[b]);
      }

      this.scroller.removeEventListener("scroll", this.debouncer, !1);
    },
    attachEvent: function attachEvent() {
      this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent());
    },
    unpin: function unpin() {
      var a = this.elem.classList,
          b = this.classes;
      !a.contains(b.pinned) && a.contains(b.unpinned) || (a.add(b.unpinned), a.remove(b.pinned), this.onUnpin && this.onUnpin.call(this));
    },
    pin: function pin() {
      var a = this.elem.classList,
          b = this.classes;
      a.contains(b.unpinned) && (a.remove(b.unpinned), a.add(b.pinned), this.onPin && this.onPin.call(this));
    },
    top: function top() {
      var a = this.elem.classList,
          b = this.classes;
      a.contains(b.top) || (a.add(b.top), a.remove(b.notTop), this.onTop && this.onTop.call(this));
    },
    notTop: function notTop() {
      var a = this.elem.classList,
          b = this.classes;
      a.contains(b.notTop) || (a.add(b.notTop), a.remove(b.top), this.onNotTop && this.onNotTop.call(this));
    },
    bottom: function bottom() {
      var a = this.elem.classList,
          b = this.classes;
      a.contains(b.bottom) || (a.add(b.bottom), a.remove(b.notBottom), this.onBottom && this.onBottom.call(this));
    },
    notBottom: function notBottom() {
      var a = this.elem.classList,
          b = this.classes;
      a.contains(b.notBottom) || (a.add(b.notBottom), a.remove(b.bottom), this.onNotBottom && this.onNotBottom.call(this));
    },
    getScrollY: function getScrollY() {
      return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    },
    getViewportHeight: function getViewportHeight() {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    },
    getElementPhysicalHeight: function getElementPhysicalHeight(a) {
      return Math.max(a.offsetHeight, a.clientHeight);
    },
    getScrollerPhysicalHeight: function getScrollerPhysicalHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller);
    },
    getDocumentHeight: function getDocumentHeight() {
      var a = document.body,
          b = document.documentElement;
      return Math.max(a.scrollHeight, b.scrollHeight, a.offsetHeight, b.offsetHeight, a.clientHeight, b.clientHeight);
    },
    getElementHeight: function getElementHeight(a) {
      return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight);
    },
    getScrollerHeight: function getScrollerHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
    },
    isOutOfBounds: function isOutOfBounds(a) {
      var b = a < 0,
          c = a + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
      return b || c;
    },
    toleranceExceeded: function toleranceExceeded(a, b) {
      return Math.abs(a - this.lastKnownScrollY) >= this.tolerance[b];
    },
    shouldUnpin: function shouldUnpin(a, b) {
      var c = a > this.lastKnownScrollY,
          d = a >= this.offset;
      return c && d && b;
    },
    shouldPin: function shouldPin(a, b) {
      var c = a < this.lastKnownScrollY,
          d = a <= this.offset;
      return c && b || d;
    },
    update: function update() {
      var a = this.getScrollY(),
          b = a > this.lastKnownScrollY ? "down" : "up",
          c = this.toleranceExceeded(a, b);
      this.isOutOfBounds(a) || (a <= this.offset ? this.top() : this.notTop(), a + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(a, c) ? this.unpin() : this.shouldPin(a, c) && this.pin(), this.lastKnownScrollY = a);
    }
  }, e.options = {
    tolerance: {
      up: 0,
      down: 0
    },
    offset: 0,
    scroller: window,
    classes: {
      pinned: "headroom--pinned",
      unpinned: "headroom--unpinned",
      top: "headroom--top",
      notTop: "headroom--not-top",
      bottom: "headroom--bottom",
      notBottom: "headroom--not-bottom",
      initial: "headroom"
    }
  }, e.cutsTheMustard = "undefined" != typeof f && f.rAF && f.bind && f.classList, e;
});

/***/ }),

/***/ "./assets/styles/kraken.scss":
/*!***********************************!*\
  !*** ./assets/styles/kraken.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/styles/styles.scss":
/*!***********************************!*\
  !*** ./assets/styles/styles.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/scripts/app.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~activity~app~contact","vendors~activities~activity~app","vendors~activities~app~contact","vendors~activities~app","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX2NhcnRCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX25hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2dsb2JhbC9fdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvdmVuZG9ycy9oZWFkcm9vbS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9rcmFrZW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJTbW9vdGhTY3JvbGwiLCJzcGVlZCIsInNwZWVkQXNEdXJhdGlvbiIsIk5hdkJhciIsIkNhcnRCYXIiLCJDb29raWVzIiwiY2FydEJhciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhcnRCYXJUZXh0IiwiY2hlY2siLCJjdXJyZW50VmFsdWUiLCJnZXRDb29raWUiLCJhY3Rpdml0aWVzQW1vdW50Iiwic3BsaXQiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJhbGxvd0J0biIsIm1lc3NhZ2UiLCJvdmVybGF5IiwiZXZlbnQiLCJkaWFsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiYWxsb3dDb29raWVzIiwiYmluZCIsImNvbnNvbGUiLCJpbmZvIiwic2V0Q29va2llIiwiaGlkZSIsImFkZCIsImhlYWRlciIsIm5hdmVnYXRpb25NZW51IiwicGF0aEEiLCJwYXRoQiIsInBhdGhDIiwid3JhcHBlciIsImJ1dHRvbiIsIm1haW4iLCJiZWdpbkFDIiwiZW5kQUMiLCJiZWdpbkIiLCJlbmRCIiwiaXNPcGVuIiwic2VnbWVudEEiLCJTZWdtZW50Iiwic2VnbWVudEIiLCJzZWdtZW50QyIsImV2ZW50cyIsImhlYWRyb29tSW5pdCIsIkhlYWRyb29tIiwib3B0aW9ucyIsIm9uVW5waW4iLCJoaWRlTWVudVVuUGluIiwidG9sZXJhbmNlIiwidXAiLCJkb3duIiwiaGVhZHJvb20iLCJpbml0Iiwic2hvd09ySGlkZU1lbnUiLCJoaWRlTWVudSIsInNob3dNZW51IiwiY29udGFpbnMiLCJpbkFDIiwiaW5CIiwib3V0QUMiLCJvdXRCIiwicyIsInRoYXQiLCJkcmF3IiwiZGVsYXkiLCJjYWxsYmFjayIsImluQUMyIiwiZWFzaW5nIiwiZWFzZUVsYXN0aWNPdXQiLCJpbkIyIiwiZWFzZUJvdW5jZU91dCIsImVhc2VFbGFzdGljSW4iLCJvdXRBQzIiLCJvdXRBQzMiLCJ2YWx1ZSIsIm5hbWUiLCJkYXlzIiwiZGF0ZSIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImV4cGlyZXMiLCJ0b0dNVFN0cmluZyIsImNvb2tpZSIsImNBcnIiLCJpIiwicmVwbGFjZSIsImEiLCJiIiwiZGVmaW5lIiwidGlja2luZyIsIndpbmRvdyIsIm5vZGVUeXBlIiwiYyIsImFyZ3VtZW50cyIsIkVycm9yIiwiZCIsImUiLCJmIiwiZyIsIk9iamVjdCIsImxhc3RLbm93blNjcm9sbFkiLCJlbGVtIiwiY2xhc3NlcyIsIm9mZnNldCIsInNjcm9sbGVyIiwiaW5pdGlhbGlzZWQiLCJvblBpbiIsIm9uVG9wIiwib25Ob3RUb3AiLCJvbkJvdHRvbSIsIm9uTm90Qm90dG9tIiwiZG9jdW1lbnRFbGVtZW50IiwickFGIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJ1cGRhdGUiLCJyZXF1ZXN0VGljayIsInJhZkNhbGxiYWNrIiwiaGFuZGxlRXZlbnQiLCJjdXRzVGhlTXVzdGFyZCIsImRlYm91bmNlciIsImluaXRpYWwiLCJzZXRUaW1lb3V0IiwiYXR0YWNoRXZlbnQiLCJkZXN0cm95IiwiaGFzT3duUHJvcGVydHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0U2Nyb2xsWSIsInVucGluIiwicGlubmVkIiwidW5waW5uZWQiLCJjYWxsIiwicGluIiwidG9wIiwibm90VG9wIiwiYm90dG9tIiwibm90Qm90dG9tIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiLCJib2R5IiwicGFyZW50Tm9kZSIsImdldFZpZXdwb3J0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJnZXRFbGVtZW50UGh5c2ljYWxIZWlnaHQiLCJNYXRoIiwibWF4Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0U2Nyb2xsZXJQaHlzaWNhbEhlaWdodCIsImdldERvY3VtZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZ2V0RWxlbWVudEhlaWdodCIsImdldFNjcm9sbGVySGVpZ2h0IiwiaXNPdXRPZkJvdW5kcyIsInRvbGVyYW5jZUV4Y2VlZGVkIiwiYWJzIiwic2hvdWxkVW5waW4iLCJzaG91bGRQaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsbUJBQU8sQ0FBQywwREFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDBEQUFELENBQVA7O0FBRUEsSUFBSUMsb0RBQUosQ0FBaUIsY0FBakIsRUFBaUM7QUFDN0JDLE9BQUssRUFBRSxHQURzQjtBQUU3QkMsaUJBQWUsRUFBRTtBQUZZLENBQWpDO0FBSUEsSUFBSUMsOERBQUo7QUFDQSxJQUFJQywrREFBSjtBQUNBLElBQUlDLCtEQUFKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBOztJQUVNRCxPOzs7QUFDRixxQkFBYTtBQUFBOztBQUNULFNBQUtFLE9BQUwsR0FBZUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWY7QUFFQSxRQUFJLEtBQUtGLE9BQUwsSUFBZ0IsSUFBcEIsRUFDSTtBQUVKLFNBQUtHLFdBQUwsR0FBbUJGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5Q0FBdkIsQ0FBbkI7QUFDQSxTQUFLRSxLQUFMO0FBQ0g7Ozs7NEJBRU87QUFDSixVQUFJQyxZQUFZLEdBQUdDLHdEQUFTLENBQUMsZUFBRCxDQUE1QjtBQUNBLFVBQUksQ0FBQ0QsWUFBTCxFQUNJO0FBRUosVUFBSUUsZ0JBQWdCLEdBQUdGLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JHLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCQyxNQUFsRDtBQUVBLFdBQUtULE9BQUwsQ0FBYVUsU0FBYixDQUF1QkMsTUFBdkIsQ0FBOEIsbUJBQTlCO0FBQ0EsVUFBSUosZ0JBQWdCLEtBQUssQ0FBekIsRUFDSSxLQUFLSixXQUFMLENBQWlCUyxTQUFqQixHQUE2QkwsZ0JBQWdCLEdBQUcsU0FBaEQsQ0FESixLQUVLLElBQUlBLGdCQUFnQixHQUFHLENBQXZCLEVBQ0QsS0FBS0osV0FBTCxDQUFpQlMsU0FBakIsR0FBNkJMLGdCQUFnQixHQUFHLFVBQWhEO0FBQ1A7Ozs7OztBQUlVVCxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7O0lBRU1DLE87OztBQUNGLHFCQUFhO0FBQUE7O0FBQ1Q7QUFDQSxTQUFLYyxRQUFMLEdBQWdCWixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsNkJBQXZCLENBQWhCO0FBQ0EsU0FBS1ksT0FBTCxHQUFlYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjtBQUNBLFNBQUthLE9BQUwsR0FBZWQsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFmLENBSlMsQ0FNVDs7QUFDQSxRQUFHLEtBQUtXLFFBQVIsRUFDSSxLQUFLRyxLQUFMO0FBQ1A7Ozs7NEJBRU07QUFDSCxXQUFLQyxNQUFMO0FBQ0EsV0FBS0osUUFBTCxDQUFjSyxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUF4QztBQUNIOzs7bUNBRWE7QUFDVkMsYUFBTyxDQUFDQyxJQUFSLENBQWEsZUFBYjtBQUNBQyw4REFBUyxDQUFDLE9BQUQsRUFBVSxlQUFWLENBQVQ7QUFDQSxXQUFLQyxJQUFMO0FBQ0g7Ozs2QkFFTztBQUNKLFVBQUlsQix3REFBUyxDQUFDLGVBQUQsQ0FBYixFQUNJLEtBQUtrQixJQUFMO0FBQ1A7OzsyQkFFSztBQUNGLFdBQUtWLE9BQUwsQ0FBYUosU0FBYixDQUF1QmUsR0FBdkIsQ0FBMkIsb0JBQTNCO0FBQ0EsV0FBS1YsT0FBTCxDQUFhTCxTQUFiLENBQXVCZSxHQUF2QixDQUEyQiw0QkFBM0I7QUFDSDs7Ozs7O0FBR1UxQixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTs7SUFFTUYsTTs7O0FBRUYsb0JBQWE7QUFBQTs7QUFDVCxTQUFLNkIsTUFBTCxHQUFjekIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxTQUFLeUIsY0FBTCxHQUFzQjFCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUF0QjtBQUVBLFNBQUswQixLQUFMLEdBQWEzQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBYjtBQUNBLFNBQUsyQixLQUFMLEdBQWE1QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBYjtBQUNBLFNBQUs0QixLQUFMLEdBQWE3QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBYjtBQUNBLFNBQUs2QixPQUFMLEdBQWU5QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWY7QUFDQSxTQUFLOEIsTUFBTCxHQUFjL0IsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUFkO0FBQ0EsU0FBSytCLElBQUwsR0FBWWhDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFaO0FBRUEsU0FBS2dDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLElBQUwsR0FBWSxHQUFaO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQWQ7QUFFQSxTQUFLQyxRQUFMLEdBQWdCLElBQUlDLGlEQUFKLENBQVksS0FBS1osS0FBakIsRUFBd0IsS0FBS00sT0FBN0IsRUFBc0MsS0FBS0MsS0FBM0MsQ0FBaEI7QUFDQSxTQUFLTSxRQUFMLEdBQWdCLElBQUlELGlEQUFKLENBQVksS0FBS1gsS0FBakIsRUFBd0IsS0FBS08sTUFBN0IsRUFBcUMsS0FBS0MsSUFBMUMsQ0FBaEI7QUFDQSxTQUFLSyxRQUFMLEdBQWdCLElBQUlGLGlEQUFKLENBQVksS0FBS1YsS0FBakIsRUFBd0IsS0FBS0ksT0FBN0IsRUFBc0MsS0FBS0MsS0FBM0MsQ0FBaEI7QUFFQSxTQUFLUSxNQUFMO0FBQ0EsU0FBS0MsWUFBTDtBQUNIOzs7O21DQUdEO0FBQ0lDLGtFQUFRLENBQUNDLE9BQVQsQ0FBaUJDLE9BQWpCLEdBQTJCLEtBQUtDLGFBQUwsQ0FBbUI1QixJQUFuQixDQUF3QixJQUF4QixDQUEzQjtBQUVBeUIsa0VBQVEsQ0FBQ0MsT0FBVCxDQUFpQkcsU0FBakIsR0FBNkI7QUFDekJDLFVBQUUsRUFBRSxFQURxQjtBQUV6QkMsWUFBSSxFQUFFO0FBRm1CLE9BQTdCO0FBS0EsVUFBSUMsUUFBUSxHQUFHLElBQUlQLDREQUFKLENBQWEsS0FBS25CLE1BQWxCLENBQWY7QUFDQTBCLGNBQVEsQ0FBQ0MsSUFBVDtBQUNIOzs7NkJBRU87QUFBQTs7QUFDSixXQUFLckIsTUFBTCxDQUFZZCxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxLQUFLb0MsY0FBTCxDQUFvQmxDLElBQXBCLENBQXlCLElBQXpCLENBQXRDO0FBRUEsV0FBS2EsSUFBTCxDQUFVZixnQkFBVixDQUEyQixPQUEzQixFQUFvQyxZQUFJO0FBQ3BDLFlBQUksS0FBSSxDQUFDb0IsTUFBVCxFQUNJLEtBQUksQ0FBQ2lCLFFBQUw7QUFDUCxPQUhEO0FBSUg7OztxQ0FFZTtBQUNaLFVBQUksS0FBS2pCLE1BQVQsRUFDSSxLQUFLaUIsUUFBTCxHQURKLEtBR0ksS0FBS0MsUUFBTDtBQUNQOzs7K0JBRVM7QUFDTixVQUFJLEtBQUs5QixNQUFMLENBQVloQixTQUFaLENBQXNCK0MsUUFBdEIsQ0FBK0IsZUFBL0IsQ0FBSixFQUFvRDtBQUNoRCxhQUFLL0IsTUFBTCxDQUFZaEIsU0FBWixDQUFzQmUsR0FBdEIsQ0FBMEIsZ0JBQTFCO0FBQ0g7O0FBRUQsV0FBS2lDLElBQUwsQ0FBVSxLQUFLbkIsUUFBZixFQUF5QixJQUF6QjtBQUNBLFdBQUtvQixHQUFMLENBQVMsS0FBS2xCLFFBQWQsRUFBd0IsSUFBeEI7QUFDQSxXQUFLaUIsSUFBTCxDQUFVLEtBQUtoQixRQUFmLEVBQXlCLElBQXpCO0FBRUE7O0FBQ0EsV0FBS2YsY0FBTCxDQUFvQmpCLFNBQXBCLENBQThCZSxHQUE5QixDQUFrQyxrQkFBbEM7QUFDQSxXQUFLRSxjQUFMLENBQW9CakIsU0FBcEIsQ0FBOEJDLE1BQTlCLENBQXFDLG1CQUFyQztBQUVBLFdBQUsyQixNQUFMLEdBQWMsSUFBZDtBQUNIOzs7b0NBRWM7QUFDWCxVQUFJLEtBQUtBLE1BQVQsRUFBZ0I7QUFDWixhQUFLc0IsS0FBTCxDQUFXLEtBQUtyQixRQUFoQixFQUEwQixJQUExQjtBQUNBLGFBQUtzQixJQUFMLENBQVUsS0FBS3BCLFFBQWYsRUFBeUIsSUFBekI7QUFDQSxhQUFLbUIsS0FBTCxDQUFXLEtBQUtsQixRQUFoQixFQUEwQixJQUExQjtBQUVBLGFBQUtmLGNBQUwsQ0FBb0JqQixTQUFwQixDQUE4QkMsTUFBOUIsQ0FBcUMsa0JBQXJDO0FBQ0EsYUFBS2dCLGNBQUwsQ0FBb0JqQixTQUFwQixDQUE4QmUsR0FBOUIsQ0FBa0MsbUJBQWxDO0FBRUEsYUFBS2EsTUFBTCxHQUFjLEtBQWQ7QUFDSDtBQUVKOzs7K0JBRVM7QUFDTixVQUFJLEtBQUtaLE1BQUwsQ0FBWWhCLFNBQVosQ0FBc0IrQyxRQUF0QixDQUErQixlQUEvQixDQUFKLEVBQW9EO0FBQ2hELGFBQUsvQixNQUFMLENBQVloQixTQUFaLENBQXNCQyxNQUF0QixDQUE2QixnQkFBN0I7QUFDSDs7QUFFRCxVQUFHLEtBQUsyQixNQUFSLEVBQWdCO0FBQ1osYUFBS3NCLEtBQUwsQ0FBVyxLQUFLckIsUUFBaEIsRUFBMEIsSUFBMUI7QUFDQSxhQUFLc0IsSUFBTCxDQUFVLEtBQUtwQixRQUFmLEVBQXlCLElBQXpCO0FBQ0EsYUFBS21CLEtBQUwsQ0FBVyxLQUFLbEIsUUFBaEIsRUFBMEIsSUFBMUI7QUFFQSxhQUFLZixjQUFMLENBQW9CakIsU0FBcEIsQ0FBOEJDLE1BQTlCLENBQXFDLGtCQUFyQztBQUNBLGFBQUtnQixjQUFMLENBQW9CakIsU0FBcEIsQ0FBOEJlLEdBQTlCLENBQWtDLG1CQUFsQztBQUVBLGFBQUthLE1BQUwsR0FBYyxLQUFkO0FBQ0g7QUFDSjs7O3lCQUdJd0IsQyxFQUFHQyxJLEVBQU07QUFDVkQsT0FBQyxDQUFDRSxJQUFGLENBQU8sV0FBUCxFQUFvQixLQUFwQixFQUEyQixHQUEzQixFQUFnQztBQUM1QkMsYUFBSyxFQUFFLEdBRHFCO0FBRTVCQyxnQkFBUSxFQUFFLG9CQUFXO0FBQ2pCSCxjQUFJLENBQUNJLEtBQUwsQ0FBV0wsQ0FBWDtBQUNIO0FBSjJCLE9BQWhDO0FBTUg7OzswQkFFS0EsQyxFQUFHO0FBQ0xBLE9BQUMsQ0FBQ0UsSUFBRixDQUFPLFlBQVAsRUFBcUIsWUFBckIsRUFBbUMsR0FBbkMsRUFBd0M7QUFDcENJLGNBQU0sRUFBRUMsc0RBQWNBO0FBRGMsT0FBeEM7QUFHSDs7O3dCQUVHUCxDLEVBQUdDLEksRUFBTTtBQUNURCxPQUFDLENBQUNFLElBQUYsQ0FBTyxLQUFLNUIsTUFBTCxHQUFjLEVBQXJCLEVBQXlCLEtBQUtDLElBQUwsR0FBWSxFQUFyQyxFQUF5QyxHQUF6QyxFQUE4QztBQUMxQzZCLGdCQUFRLEVBQUUsb0JBQVc7QUFDakJILGNBQUksQ0FBQ08sSUFBTCxDQUFVUixDQUFWO0FBQ0g7QUFIeUMsT0FBOUM7QUFLSDs7O3lCQUVJQSxDLEVBQUc7QUFDSkEsT0FBQyxDQUFDRSxJQUFGLENBQU8sS0FBSzVCLE1BQUwsR0FBYyxHQUFyQixFQUEwQixLQUFLQyxJQUFMLEdBQVksR0FBdEMsRUFBMkMsR0FBM0MsRUFBZ0Q7QUFDNUMrQixjQUFNLEVBQUVHLHFEQUFhQTtBQUR1QixPQUFoRDtBQUdIO0FBRUQ7Ozs7MEJBRU1ULEMsRUFBR0MsSSxFQUFNO0FBQ1hELE9BQUMsQ0FBQ0UsSUFBRixDQUFPLFdBQVAsRUFBb0IsS0FBcEIsRUFBMkIsR0FBM0IsRUFBZ0M7QUFDNUJJLGNBQU0sRUFBRUkscURBRG9CO0FBRTVCTixnQkFBUSxFQUFFLG9CQUFXO0FBQ2pCSCxjQUFJLENBQUNVLE1BQUwsQ0FBWVgsQ0FBWixFQUFlQyxJQUFmO0FBQ0g7QUFKMkIsT0FBaEM7QUFNSDs7OzJCQUVNRCxDLEVBQUdDLEksRUFBTTtBQUNaRCxPQUFDLENBQUNFLElBQUYsQ0FBTyxXQUFQLEVBQW9CLEtBQXBCLEVBQTJCLEdBQTNCLEVBQWdDO0FBQzVCRSxnQkFBUSxFQUFFLG9CQUFXO0FBQ2pCSCxjQUFJLENBQUNXLE1BQUwsQ0FBWVosQ0FBWjtBQUNIO0FBSDJCLE9BQWhDO0FBS0g7OzsyQkFFTUEsQyxFQUFHO0FBQ05BLE9BQUMsQ0FBQ0UsSUFBRixDQUFPLEtBQUs5QixPQUFaLEVBQXFCLEtBQUtDLEtBQTFCLEVBQWlDLEdBQWpDLEVBQXNDO0FBQ2xDaUMsY0FBTSxFQUFFQyxzREFBY0E7QUFEWSxPQUF0QztBQUdIOzs7eUJBRUlQLEMsRUFBRztBQUNKQSxPQUFDLENBQUNFLElBQUYsQ0FBTyxLQUFLNUIsTUFBWixFQUFvQixLQUFLQyxJQUF6QixFQUErQixHQUEvQixFQUFvQztBQUNoQzRCLGFBQUssRUFBRSxHQUR5QjtBQUVoQ0csY0FBTSxFQUFFQyxzREFBY0E7QUFGVSxPQUFwQztBQUlIOzs7Ozs7QUFJVXhFLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNLTyxTQUFTMEIsU0FBVCxDQUFtQm9ELEtBQW5CLEVBQXlEO0FBQUEsTUFBL0JDLElBQStCLHVFQUExQixlQUEwQjtBQUFBLE1BQVJDLElBQVEsdUVBQUgsQ0FBRztBQUM1RCxNQUFJQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFYO0FBQ0FELE1BQUksQ0FBQ0UsT0FBTCxDQUFhRixJQUFJLENBQUNHLE9BQUwsS0FBZ0JKLElBQUksR0FBQyxFQUFMLEdBQVEsRUFBUixHQUFXLEVBQVgsR0FBYyxJQUEzQztBQUNBLE1BQUlLLE9BQU8sR0FBRyxlQUFhSixJQUFJLENBQUNLLFdBQUwsRUFBM0I7QUFDQWxGLFVBQVEsQ0FBQ21GLE1BQVQsR0FBa0JSLElBQUksR0FBRyxHQUFQLEdBQWFELEtBQWIsR0FDZE8sT0FEYyxHQUNKLFVBRGQ7QUFFSDtBQUVNLFNBQVM1RSxTQUFULENBQW1Cc0UsSUFBbkIsRUFBeUI7QUFDNUIsTUFBSVMsSUFBSSxHQUFHcEYsUUFBUSxDQUFDbUYsTUFBVCxDQUFnQjVFLEtBQWhCLENBQXNCLEdBQXRCLENBQVg7O0FBQ0EsT0FBSSxJQUFJOEUsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFHRCxJQUFJLENBQUM1RSxNQUFyQixFQUE0QjZFLENBQUMsRUFBN0IsRUFBaUM7QUFDN0IsUUFBSUYsTUFBTSxHQUFHQyxJQUFJLENBQUNDLENBQUQsQ0FBSixDQUFROUUsS0FBUixDQUFjLEdBQWQsRUFBa0IsQ0FBbEIsQ0FBYjtBQUNBNEUsVUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZQSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVHLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUIsRUFBekIsQ0FBWjtBQUNBLFFBQUlILE1BQU0sQ0FBQyxDQUFELENBQU4sSUFBYVIsSUFBakIsRUFDSSxPQUFPUSxNQUFQO0FBQ1A7O0FBQ0QsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCRDs7Ozs7QUFNQSxDQUFDLFVBQVNJLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUM7O0FBQWEsVUFBc0NDLGlDQUFPLEVBQUQsb0NBQUlELENBQUo7QUFBQTtBQUFBO0FBQUEsb0dBQTVDLEdBQW1ELFNBQW5EO0FBQThHLENBQXpJLENBQTBJLElBQTFJLEVBQStJLFlBQVU7QUFBQzs7QUFBYSxXQUFTRCxDQUFULENBQVdBLENBQVgsRUFBYTtBQUFDLFNBQUt0QixRQUFMLEdBQWNzQixDQUFkLEVBQWdCLEtBQUtHLE9BQUwsR0FBYSxDQUFDLENBQTlCO0FBQWdDOztBQUFBLFdBQVNGLENBQVQsQ0FBV0QsQ0FBWCxFQUFhO0FBQUMsV0FBT0EsQ0FBQyxJQUFFLGVBQWEsT0FBT0ksTUFBdkIsS0FBZ0NKLENBQUMsS0FBR0ksTUFBSixJQUFZSixDQUFDLENBQUNLLFFBQTlDLENBQVA7QUFBK0Q7O0FBQUEsV0FBU0MsQ0FBVCxDQUFXTixDQUFYLEVBQWE7QUFBQyxRQUFHTyxTQUFTLENBQUN0RixNQUFWLElBQWtCLENBQXJCLEVBQXVCLE1BQU0sSUFBSXVGLEtBQUosQ0FBVSxzQ0FBVixDQUFOO0FBQXdELFFBQUlDLENBQUo7QUFBQSxRQUFNQyxDQUFOO0FBQUEsUUFBUUMsQ0FBQyxHQUFDWCxDQUFDLElBQUUsRUFBYjs7QUFBZ0IsU0FBSVUsQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDSCxTQUFTLENBQUN0RixNQUFwQixFQUEyQnlGLENBQUMsRUFBNUIsRUFBK0I7QUFBQyxVQUFJRSxDQUFDLEdBQUNMLFNBQVMsQ0FBQ0csQ0FBRCxDQUFULElBQWMsRUFBcEI7O0FBQXVCLFdBQUlELENBQUosSUFBU0csQ0FBVDtBQUFXLDRCQUFpQkQsQ0FBQyxDQUFDRixDQUFELENBQWxCLEtBQXVCUixDQUFDLENBQUNVLENBQUMsQ0FBQ0YsQ0FBRCxDQUFGLENBQXhCLEdBQStCRSxDQUFDLENBQUNGLENBQUQsQ0FBRCxHQUFLRSxDQUFDLENBQUNGLENBQUQsQ0FBRCxJQUFNRyxDQUFDLENBQUNILENBQUQsQ0FBM0MsR0FBK0NFLENBQUMsQ0FBQ0YsQ0FBRCxDQUFELEdBQUtILENBQUMsQ0FBQ0ssQ0FBQyxDQUFDRixDQUFELENBQUYsRUFBTUcsQ0FBQyxDQUFDSCxDQUFELENBQVAsQ0FBckQ7QUFBWDtBQUE0RTs7QUFBQSxXQUFPRSxDQUFQO0FBQVM7O0FBQUEsV0FBU0YsQ0FBVCxDQUFXVCxDQUFYLEVBQWE7QUFBQyxXQUFPQSxDQUFDLEtBQUdhLE1BQU0sQ0FBQ2IsQ0FBRCxDQUFWLEdBQWNBLENBQWQsR0FBZ0I7QUFBQ3JDLFVBQUksRUFBQ3FDLENBQU47QUFBUXRDLFFBQUUsRUFBQ3NDO0FBQVgsS0FBdkI7QUFBcUM7O0FBQUEsV0FBU1UsQ0FBVCxDQUFXVixDQUFYLEVBQWFDLENBQWIsRUFBZTtBQUFDQSxLQUFDLEdBQUNLLENBQUMsQ0FBQ0wsQ0FBRCxFQUFHUyxDQUFDLENBQUNwRCxPQUFMLENBQUgsRUFBaUIsS0FBS3dELGdCQUFMLEdBQXNCLENBQXZDLEVBQXlDLEtBQUtDLElBQUwsR0FBVWYsQ0FBbkQsRUFBcUQsS0FBS3ZDLFNBQUwsR0FBZWdELENBQUMsQ0FBQ1IsQ0FBQyxDQUFDeEMsU0FBSCxDQUFyRSxFQUFtRixLQUFLdUQsT0FBTCxHQUFhZixDQUFDLENBQUNlLE9BQWxHLEVBQTBHLEtBQUtDLE1BQUwsR0FBWWhCLENBQUMsQ0FBQ2dCLE1BQXhILEVBQStILEtBQUtDLFFBQUwsR0FBY2pCLENBQUMsQ0FBQ2lCLFFBQS9JLEVBQXdKLEtBQUtDLFdBQUwsR0FBaUIsQ0FBQyxDQUExSyxFQUE0SyxLQUFLQyxLQUFMLEdBQVduQixDQUFDLENBQUNtQixLQUF6TCxFQUErTCxLQUFLN0QsT0FBTCxHQUFhMEMsQ0FBQyxDQUFDMUMsT0FBOU0sRUFBc04sS0FBSzhELEtBQUwsR0FBV3BCLENBQUMsQ0FBQ29CLEtBQW5PLEVBQXlPLEtBQUtDLFFBQUwsR0FBY3JCLENBQUMsQ0FBQ3FCLFFBQXpQLEVBQWtRLEtBQUtDLFFBQUwsR0FBY3RCLENBQUMsQ0FBQ3NCLFFBQWxSLEVBQTJSLEtBQUtDLFdBQUwsR0FBaUJ2QixDQUFDLENBQUN1QixXQUE5UztBQUEwVDs7QUFBQSxNQUFJYixDQUFDLEdBQUM7QUFBQy9FLFFBQUksRUFBQyxDQUFDLENBQUMsWUFBVSxDQUFFLENBQVosQ0FBYUEsSUFBckI7QUFBMEJWLGFBQVMsRUFBQyxlQUFjVCxRQUFRLENBQUNnSCxlQUEzRDtBQUEyRUMsT0FBRyxFQUFDLENBQUMsRUFBRXRCLE1BQU0sQ0FBQ3VCLHFCQUFQLElBQThCdkIsTUFBTSxDQUFDd0IsMkJBQXJDLElBQWtFeEIsTUFBTSxDQUFDeUIsd0JBQTNFO0FBQWhGLEdBQU47QUFBNEwsU0FBT3pCLE1BQU0sQ0FBQ3VCLHFCQUFQLEdBQTZCdkIsTUFBTSxDQUFDdUIscUJBQVAsSUFBOEJ2QixNQUFNLENBQUN3QiwyQkFBckMsSUFBa0V4QixNQUFNLENBQUN5Qix3QkFBdEcsRUFBK0g3QixDQUFDLENBQUM4QixTQUFGLEdBQVk7QUFBQ0MsZUFBVyxFQUFDL0IsQ0FBYjtBQUFlZ0MsVUFBTSxFQUFDLGtCQUFVO0FBQUMsV0FBS3RELFFBQUwsSUFBZSxLQUFLQSxRQUFMLEVBQWYsRUFBK0IsS0FBS3lCLE9BQUwsR0FBYSxDQUFDLENBQTdDO0FBQStDLEtBQWhGO0FBQWlGOEIsZUFBVyxFQUFDLHVCQUFVO0FBQUMsV0FBSzlCLE9BQUwsS0FBZXdCLHFCQUFxQixDQUFDLEtBQUtPLFdBQUwsS0FBbUIsS0FBS0EsV0FBTCxHQUFpQixLQUFLRixNQUFMLENBQVlwRyxJQUFaLENBQWlCLElBQWpCLENBQXBDLENBQUQsQ0FBckIsRUFBbUYsS0FBS3VFLE9BQUwsR0FBYSxDQUFDLENBQWhIO0FBQW1ILEtBQTNOO0FBQTROZ0MsZUFBVyxFQUFDLHVCQUFVO0FBQUMsV0FBS0YsV0FBTDtBQUFtQjtBQUF0USxHQUEzSSxFQUFtWnZCLENBQUMsQ0FBQ29CLFNBQUYsR0FBWTtBQUFDQyxlQUFXLEVBQUNyQixDQUFiO0FBQWU3QyxRQUFJLEVBQUMsZ0JBQVU7QUFBQyxVQUFHNkMsQ0FBQyxDQUFDMEIsY0FBTCxFQUFvQixPQUFPLEtBQUtDLFNBQUwsR0FBZSxJQUFJckMsQ0FBSixDQUFNLEtBQUtnQyxNQUFMLENBQVlwRyxJQUFaLENBQWlCLElBQWpCLENBQU4sQ0FBZixFQUE2QyxLQUFLbUYsSUFBTCxDQUFVN0YsU0FBVixDQUFvQmUsR0FBcEIsQ0FBd0IsS0FBSytFLE9BQUwsQ0FBYXNCLE9BQXJDLENBQTdDLEVBQTJGQyxVQUFVLENBQUMsS0FBS0MsV0FBTCxDQUFpQjVHLElBQWpCLENBQXNCLElBQXRCLENBQUQsRUFBNkIsR0FBN0IsQ0FBckcsRUFBdUksSUFBOUk7QUFBbUosS0FBdE07QUFBdU02RyxXQUFPLEVBQUMsbUJBQVU7QUFBQyxVQUFJekMsQ0FBQyxHQUFDLEtBQUtnQixPQUFYO0FBQW1CLFdBQUtHLFdBQUwsR0FBaUIsQ0FBQyxDQUFsQjs7QUFBb0IsV0FBSSxJQUFJbEIsQ0FBUixJQUFhRCxDQUFiO0FBQWVBLFNBQUMsQ0FBQzBDLGNBQUYsQ0FBaUJ6QyxDQUFqQixLQUFxQixLQUFLYyxJQUFMLENBQVU3RixTQUFWLENBQW9CQyxNQUFwQixDQUEyQjZFLENBQUMsQ0FBQ0MsQ0FBRCxDQUE1QixDQUFyQjtBQUFmOztBQUFxRSxXQUFLaUIsUUFBTCxDQUFjeUIsbUJBQWQsQ0FBa0MsUUFBbEMsRUFBMkMsS0FBS04sU0FBaEQsRUFBMEQsQ0FBQyxDQUEzRDtBQUE4RCxLQUFwWTtBQUFxWUcsZUFBVyxFQUFDLHVCQUFVO0FBQUMsV0FBS3JCLFdBQUwsS0FBbUIsS0FBS0wsZ0JBQUwsR0FBc0IsS0FBSzhCLFVBQUwsRUFBdEIsRUFBd0MsS0FBS3pCLFdBQUwsR0FBaUIsQ0FBQyxDQUExRCxFQUE0RCxLQUFLRCxRQUFMLENBQWN4RixnQkFBZCxDQUErQixRQUEvQixFQUF3QyxLQUFLMkcsU0FBN0MsRUFBdUQsQ0FBQyxDQUF4RCxDQUE1RCxFQUF1SCxLQUFLQSxTQUFMLENBQWVGLFdBQWYsRUFBMUk7QUFBd0ssS0FBcGtCO0FBQXFrQlUsU0FBSyxFQUFDLGlCQUFVO0FBQUMsVUFBSTdDLENBQUMsR0FBQyxLQUFLZSxJQUFMLENBQVU3RixTQUFoQjtBQUFBLFVBQTBCK0UsQ0FBQyxHQUFDLEtBQUtlLE9BQWpDO0FBQXlDLE9BQUNoQixDQUFDLENBQUMvQixRQUFGLENBQVdnQyxDQUFDLENBQUM2QyxNQUFiLENBQUQsSUFBdUI5QyxDQUFDLENBQUMvQixRQUFGLENBQVdnQyxDQUFDLENBQUM4QyxRQUFiLENBQXZCLEtBQWdEL0MsQ0FBQyxDQUFDL0QsR0FBRixDQUFNZ0UsQ0FBQyxDQUFDOEMsUUFBUixHQUFrQi9DLENBQUMsQ0FBQzdFLE1BQUYsQ0FBUzhFLENBQUMsQ0FBQzZDLE1BQVgsQ0FBbEIsRUFBcUMsS0FBS3ZGLE9BQUwsSUFBYyxLQUFLQSxPQUFMLENBQWF5RixJQUFiLENBQWtCLElBQWxCLENBQW5HO0FBQTRILEtBQTN2QjtBQUE0dkJDLE9BQUcsRUFBQyxlQUFVO0FBQUMsVUFBSWpELENBQUMsR0FBQyxLQUFLZSxJQUFMLENBQVU3RixTQUFoQjtBQUFBLFVBQTBCK0UsQ0FBQyxHQUFDLEtBQUtlLE9BQWpDO0FBQXlDaEIsT0FBQyxDQUFDL0IsUUFBRixDQUFXZ0MsQ0FBQyxDQUFDOEMsUUFBYixNQUF5Qi9DLENBQUMsQ0FBQzdFLE1BQUYsQ0FBUzhFLENBQUMsQ0FBQzhDLFFBQVgsR0FBcUIvQyxDQUFDLENBQUMvRCxHQUFGLENBQU1nRSxDQUFDLENBQUM2QyxNQUFSLENBQXJCLEVBQXFDLEtBQUsxQixLQUFMLElBQVksS0FBS0EsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQixJQUFoQixDQUExRTtBQUFpRyxLQUFyNUI7QUFBczVCRSxPQUFHLEVBQUMsZUFBVTtBQUFDLFVBQUlsRCxDQUFDLEdBQUMsS0FBS2UsSUFBTCxDQUFVN0YsU0FBaEI7QUFBQSxVQUEwQitFLENBQUMsR0FBQyxLQUFLZSxPQUFqQztBQUF5Q2hCLE9BQUMsQ0FBQy9CLFFBQUYsQ0FBV2dDLENBQUMsQ0FBQ2lELEdBQWIsTUFBb0JsRCxDQUFDLENBQUMvRCxHQUFGLENBQU1nRSxDQUFDLENBQUNpRCxHQUFSLEdBQWFsRCxDQUFDLENBQUM3RSxNQUFGLENBQVM4RSxDQUFDLENBQUNrRCxNQUFYLENBQWIsRUFBZ0MsS0FBSzlCLEtBQUwsSUFBWSxLQUFLQSxLQUFMLENBQVcyQixJQUFYLENBQWdCLElBQWhCLENBQWhFO0FBQXVGLEtBQXJpQztBQUFzaUNHLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFVBQUluRCxDQUFDLEdBQUMsS0FBS2UsSUFBTCxDQUFVN0YsU0FBaEI7QUFBQSxVQUEwQitFLENBQUMsR0FBQyxLQUFLZSxPQUFqQztBQUF5Q2hCLE9BQUMsQ0FBQy9CLFFBQUYsQ0FBV2dDLENBQUMsQ0FBQ2tELE1BQWIsTUFBdUJuRCxDQUFDLENBQUMvRCxHQUFGLENBQU1nRSxDQUFDLENBQUNrRCxNQUFSLEdBQWdCbkQsQ0FBQyxDQUFDN0UsTUFBRixDQUFTOEUsQ0FBQyxDQUFDaUQsR0FBWCxDQUFoQixFQUFnQyxLQUFLNUIsUUFBTCxJQUFlLEtBQUtBLFFBQUwsQ0FBYzBCLElBQWQsQ0FBbUIsSUFBbkIsQ0FBdEU7QUFBZ0csS0FBanNDO0FBQWtzQ0ksVUFBTSxFQUFDLGtCQUFVO0FBQUMsVUFBSXBELENBQUMsR0FBQyxLQUFLZSxJQUFMLENBQVU3RixTQUFoQjtBQUFBLFVBQTBCK0UsQ0FBQyxHQUFDLEtBQUtlLE9BQWpDO0FBQXlDaEIsT0FBQyxDQUFDL0IsUUFBRixDQUFXZ0MsQ0FBQyxDQUFDbUQsTUFBYixNQUF1QnBELENBQUMsQ0FBQy9ELEdBQUYsQ0FBTWdFLENBQUMsQ0FBQ21ELE1BQVIsR0FBZ0JwRCxDQUFDLENBQUM3RSxNQUFGLENBQVM4RSxDQUFDLENBQUNvRCxTQUFYLENBQWhCLEVBQXNDLEtBQUs5QixRQUFMLElBQWUsS0FBS0EsUUFBTCxDQUFjeUIsSUFBZCxDQUFtQixJQUFuQixDQUE1RTtBQUFzRyxLQUFuMkM7QUFBbzJDSyxhQUFTLEVBQUMscUJBQVU7QUFBQyxVQUFJckQsQ0FBQyxHQUFDLEtBQUtlLElBQUwsQ0FBVTdGLFNBQWhCO0FBQUEsVUFBMEIrRSxDQUFDLEdBQUMsS0FBS2UsT0FBakM7QUFBeUNoQixPQUFDLENBQUMvQixRQUFGLENBQVdnQyxDQUFDLENBQUNvRCxTQUFiLE1BQTBCckQsQ0FBQyxDQUFDL0QsR0FBRixDQUFNZ0UsQ0FBQyxDQUFDb0QsU0FBUixHQUFtQnJELENBQUMsQ0FBQzdFLE1BQUYsQ0FBUzhFLENBQUMsQ0FBQ21ELE1BQVgsQ0FBbkIsRUFBc0MsS0FBSzVCLFdBQUwsSUFBa0IsS0FBS0EsV0FBTCxDQUFpQndCLElBQWpCLENBQXNCLElBQXRCLENBQWxGO0FBQStHLEtBQWpoRDtBQUFraERKLGNBQVUsRUFBQyxzQkFBVTtBQUFDLGFBQU8sS0FBSyxDQUFMLEtBQVMsS0FBSzFCLFFBQUwsQ0FBY29DLFdBQXZCLEdBQW1DLEtBQUtwQyxRQUFMLENBQWNvQyxXQUFqRCxHQUE2RCxLQUFLLENBQUwsS0FBUyxLQUFLcEMsUUFBTCxDQUFjcUMsU0FBdkIsR0FBaUMsS0FBS3JDLFFBQUwsQ0FBY3FDLFNBQS9DLEdBQXlELENBQUM5SSxRQUFRLENBQUNnSCxlQUFULElBQTBCaEgsUUFBUSxDQUFDK0ksSUFBVCxDQUFjQyxVQUF4QyxJQUFvRGhKLFFBQVEsQ0FBQytJLElBQTlELEVBQW9FRCxTQUFqTTtBQUEyTSxLQUFudkQ7QUFBb3ZERyxxQkFBaUIsRUFBQyw2QkFBVTtBQUFDLGFBQU90RCxNQUFNLENBQUN1RCxXQUFQLElBQW9CbEosUUFBUSxDQUFDZ0gsZUFBVCxDQUF5Qm1DLFlBQTdDLElBQTJEbkosUUFBUSxDQUFDK0ksSUFBVCxDQUFjSSxZQUFoRjtBQUE2RixLQUE5MkQ7QUFBKzJEQyw0QkFBd0IsRUFBQyxrQ0FBUzdELENBQVQsRUFBVztBQUFDLGFBQU84RCxJQUFJLENBQUNDLEdBQUwsQ0FBUy9ELENBQUMsQ0FBQ2dFLFlBQVgsRUFBd0JoRSxDQUFDLENBQUM0RCxZQUExQixDQUFQO0FBQStDLEtBQW44RDtBQUFvOERLLDZCQUF5QixFQUFDLHFDQUFVO0FBQUMsYUFBTyxLQUFLL0MsUUFBTCxLQUFnQmQsTUFBaEIsSUFBd0IsS0FBS2MsUUFBTCxLQUFnQnpHLFFBQVEsQ0FBQytJLElBQWpELEdBQXNELEtBQUtFLGlCQUFMLEVBQXRELEdBQStFLEtBQUtHLHdCQUFMLENBQThCLEtBQUszQyxRQUFuQyxDQUF0RjtBQUFtSSxLQUE1bUU7QUFBNm1FZ0QscUJBQWlCLEVBQUMsNkJBQVU7QUFBQyxVQUFJbEUsQ0FBQyxHQUFDdkYsUUFBUSxDQUFDK0ksSUFBZjtBQUFBLFVBQW9CdkQsQ0FBQyxHQUFDeEYsUUFBUSxDQUFDZ0gsZUFBL0I7QUFBK0MsYUFBT3FDLElBQUksQ0FBQ0MsR0FBTCxDQUFTL0QsQ0FBQyxDQUFDbUUsWUFBWCxFQUF3QmxFLENBQUMsQ0FBQ2tFLFlBQTFCLEVBQXVDbkUsQ0FBQyxDQUFDZ0UsWUFBekMsRUFBc0QvRCxDQUFDLENBQUMrRCxZQUF4RCxFQUFxRWhFLENBQUMsQ0FBQzRELFlBQXZFLEVBQW9GM0QsQ0FBQyxDQUFDMkQsWUFBdEYsQ0FBUDtBQUEyRyxLQUFweUU7QUFBcXlFUSxvQkFBZ0IsRUFBQywwQkFBU3BFLENBQVQsRUFBVztBQUFDLGFBQU84RCxJQUFJLENBQUNDLEdBQUwsQ0FBUy9ELENBQUMsQ0FBQ21FLFlBQVgsRUFBd0JuRSxDQUFDLENBQUNnRSxZQUExQixFQUF1Q2hFLENBQUMsQ0FBQzRELFlBQXpDLENBQVA7QUFBOEQsS0FBaDRFO0FBQWk0RVMscUJBQWlCLEVBQUMsNkJBQVU7QUFBQyxhQUFPLEtBQUtuRCxRQUFMLEtBQWdCZCxNQUFoQixJQUF3QixLQUFLYyxRQUFMLEtBQWdCekcsUUFBUSxDQUFDK0ksSUFBakQsR0FBc0QsS0FBS1UsaUJBQUwsRUFBdEQsR0FBK0UsS0FBS0UsZ0JBQUwsQ0FBc0IsS0FBS2xELFFBQTNCLENBQXRGO0FBQTJILEtBQXpoRjtBQUEwaEZvRCxpQkFBYSxFQUFDLHVCQUFTdEUsQ0FBVCxFQUFXO0FBQUMsVUFBSUMsQ0FBQyxHQUFDRCxDQUFDLEdBQUMsQ0FBUjtBQUFBLFVBQVVNLENBQUMsR0FBQ04sQ0FBQyxHQUFDLEtBQUtpRSx5QkFBTCxFQUFGLEdBQW1DLEtBQUtJLGlCQUFMLEVBQS9DO0FBQXdFLGFBQU9wRSxDQUFDLElBQUVLLENBQVY7QUFBWSxLQUF4b0Y7QUFBeW9GaUUscUJBQWlCLEVBQUMsMkJBQVN2RSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGFBQU82RCxJQUFJLENBQUNVLEdBQUwsQ0FBU3hFLENBQUMsR0FBQyxLQUFLYyxnQkFBaEIsS0FBbUMsS0FBS3JELFNBQUwsQ0FBZXdDLENBQWYsQ0FBMUM7QUFBNEQsS0FBcnVGO0FBQXN1RndFLGVBQVcsRUFBQyxxQkFBU3pFLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsVUFBSUssQ0FBQyxHQUFDTixDQUFDLEdBQUMsS0FBS2MsZ0JBQWI7QUFBQSxVQUE4QkwsQ0FBQyxHQUFDVCxDQUFDLElBQUUsS0FBS2lCLE1BQXhDO0FBQStDLGFBQU9YLENBQUMsSUFBRUcsQ0FBSCxJQUFNUixDQUFiO0FBQWUsS0FBOXpGO0FBQSt6RnlFLGFBQVMsRUFBQyxtQkFBUzFFLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsVUFBSUssQ0FBQyxHQUFDTixDQUFDLEdBQUMsS0FBS2MsZ0JBQWI7QUFBQSxVQUE4QkwsQ0FBQyxHQUFDVCxDQUFDLElBQUUsS0FBS2lCLE1BQXhDO0FBQStDLGFBQU9YLENBQUMsSUFBRUwsQ0FBSCxJQUFNUSxDQUFiO0FBQWUsS0FBcjVGO0FBQXM1RnVCLFVBQU0sRUFBQyxrQkFBVTtBQUFDLFVBQUloQyxDQUFDLEdBQUMsS0FBSzRDLFVBQUwsRUFBTjtBQUFBLFVBQXdCM0MsQ0FBQyxHQUFDRCxDQUFDLEdBQUMsS0FBS2MsZ0JBQVAsR0FBd0IsTUFBeEIsR0FBK0IsSUFBekQ7QUFBQSxVQUE4RFIsQ0FBQyxHQUFDLEtBQUtpRSxpQkFBTCxDQUF1QnZFLENBQXZCLEVBQXlCQyxDQUF6QixDQUFoRTtBQUE0RixXQUFLcUUsYUFBTCxDQUFtQnRFLENBQW5CLE1BQXdCQSxDQUFDLElBQUUsS0FBS2lCLE1BQVIsR0FBZSxLQUFLaUMsR0FBTCxFQUFmLEdBQTBCLEtBQUtDLE1BQUwsRUFBMUIsRUFBd0NuRCxDQUFDLEdBQUMsS0FBSzBELGlCQUFMLEVBQUYsSUFBNEIsS0FBS1csaUJBQUwsRUFBNUIsR0FBcUQsS0FBS2pCLE1BQUwsRUFBckQsR0FBbUUsS0FBS0MsU0FBTCxFQUEzRyxFQUE0SCxLQUFLb0IsV0FBTCxDQUFpQnpFLENBQWpCLEVBQW1CTSxDQUFuQixJQUFzQixLQUFLdUMsS0FBTCxFQUF0QixHQUFtQyxLQUFLNkIsU0FBTCxDQUFlMUUsQ0FBZixFQUFpQk0sQ0FBakIsS0FBcUIsS0FBSzJDLEdBQUwsRUFBcEwsRUFBK0wsS0FBS25DLGdCQUFMLEdBQXNCZCxDQUE3TztBQUFnUDtBQUFwdkcsR0FBL1osRUFBcXBIVSxDQUFDLENBQUNwRCxPQUFGLEdBQVU7QUFBQ0csYUFBUyxFQUFDO0FBQUNDLFFBQUUsRUFBQyxDQUFKO0FBQU1DLFVBQUksRUFBQztBQUFYLEtBQVg7QUFBeUJzRCxVQUFNLEVBQUMsQ0FBaEM7QUFBa0NDLFlBQVEsRUFBQ2QsTUFBM0M7QUFBa0RZLFdBQU8sRUFBQztBQUFDOEIsWUFBTSxFQUFDLGtCQUFSO0FBQTJCQyxjQUFRLEVBQUMsb0JBQXBDO0FBQXlERyxTQUFHLEVBQUMsZUFBN0Q7QUFBNkVDLFlBQU0sRUFBQyxtQkFBcEY7QUFBd0dDLFlBQU0sRUFBQyxrQkFBL0c7QUFBa0lDLGVBQVMsRUFBQyxzQkFBNUk7QUFBbUtmLGFBQU8sRUFBQztBQUEzSztBQUExRCxHQUEvcEgsRUFBaTVINUIsQ0FBQyxDQUFDMEIsY0FBRixHQUFpQixlQUFhLE9BQU96QixDQUFwQixJQUF1QkEsQ0FBQyxDQUFDZSxHQUF6QixJQUE4QmYsQ0FBQyxDQUFDL0UsSUFBaEMsSUFBc0MrRSxDQUFDLENBQUN6RixTQUExOEgsRUFBbzlId0YsQ0FBMzlIO0FBQTY5SCxDQUFqakssQ0FBRCxDOzs7Ozs7Ozs7OztBQ05BLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnbGF6eXNpemVzL3BsdWdpbnMvdW52ZWlsaG9va3MvbHMudW52ZWlsaG9va3MubWluJztcclxuaW1wb3J0IFNtb290aFNjcm9sbCBmcm9tICdzbW9vdGgtc2Nyb2xsJztcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9tb2R1bGVzL2dsb2JhbC9fbmF2QmFyXCI7XHJcbmltcG9ydCBDYXJ0QmFyIGZyb20gJy4vbW9kdWxlcy9nbG9iYWwvX2NhcnRCYXInO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICcuL21vZHVsZXMvZ2xvYmFsL19jb29raWVzJztcclxuXHJcbnJlcXVpcmUoJy4uL3N0eWxlcy9rcmFrZW4uc2NzcycpO1xyXG5yZXF1aXJlKCcuLi9zdHlsZXMvc3R5bGVzLnNjc3MnKTtcclxuXHJcbm5ldyBTbW9vdGhTY3JvbGwoJ2FbaHJlZio9XCIjXCJdJywge1xyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNwZWVkQXNEdXJhdGlvbjogdHJ1ZVxyXG59KTtcclxubmV3IE5hdkJhcigpO1xyXG5uZXcgQ2FydEJhcigpO1xyXG5uZXcgQ29va2llcygpO1xyXG5cclxuXHJcbiIsImltcG9ydCB7Z2V0Q29va2llfSBmcm9tICcuL191dGlscyc7XHJcblxyXG5jbGFzcyBDYXJ0QmFye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmNhcnRCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXInKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2FydEJhciA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuY2FydEJhclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXIgLmNhcnRfYmFyX19jb250ZW50X190ZXh0IHNwYW4nKTtcclxuICAgICAgICB0aGlzLmNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2soKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IGdldENvb2tpZSgncHJvZHVjdHNfY2FydCcpO1xyXG4gICAgICAgIGlmICghY3VycmVudFZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBhY3Rpdml0aWVzQW1vdW50ID0gY3VycmVudFZhbHVlWzFdLnNwbGl0KCcsJykubGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLmNhcnRCYXIuY2xhc3NMaXN0LnJlbW92ZSgnY2FydF9iYXItLWluaXRpYWwnKTtcclxuICAgICAgICBpZiAoYWN0aXZpdGllc0Ftb3VudCA9PT0gMSlcclxuICAgICAgICAgICAgdGhpcy5jYXJ0QmFyVGV4dC5pbm5lckhUTUwgPSBhY3Rpdml0aWVzQW1vdW50ICsgJ1Byb2R1a3QnO1xyXG4gICAgICAgIGVsc2UgaWYgKGFjdGl2aXRpZXNBbW91bnQgPiAxKVxyXG4gICAgICAgICAgICB0aGlzLmNhcnRCYXJUZXh0LmlubmVySFRNTCA9IGFjdGl2aXRpZXNBbW91bnQgKyAnUHJvZHVrdGUnO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydEJhcjsiLCJpbXBvcnQgeyBzZXRDb29raWUsIGdldENvb2tpZSB9IGZyb20gJy4vX3V0aWxzJztcclxuXHJcbmNsYXNzIENvb2tpZXN7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIC8vSWYgdGhlIGNvb2tpZSB3YXMgc2V0LCB0aGUgZGlhbG9nIGRvZW5zdCBleGlzdCEhICh0d2lnIGRpZG50IHdyaXRlIGl0KSBhbmQgSlMgdHdyb3dzIGFuIGVycm9yXHJcbiAgICAgICAgdGhpcy5hbGxvd0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29raWUgLmNvb2tpZV9fYnRuIGJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29raWUnKTtcclxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29va2llLW92ZXJsYXknKTtcclxuICAgICAgICBcclxuICAgICAgICAvL09ubHkgaWYgdGhlIGJ0biBleGlzdC5cclxuICAgICAgICBpZih0aGlzLmFsbG93QnRuKSBcclxuICAgICAgICAgICAgdGhpcy5ldmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50KCl7XHJcbiAgICAgICAgdGhpcy5kaWFsb2coKTtcclxuICAgICAgICB0aGlzLmFsbG93QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hbGxvd0Nvb2tpZXMuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsb3dDb29raWVzKCl7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdhbGxvdyBjb29raWVzJyk7XHJcbiAgICAgICAgc2V0Q29va2llKCdhbGxvdycsICdhbGxvdy1jb29raWVzJyk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlhbG9nKCl7XHJcbiAgICAgICAgaWYgKGdldENvb2tpZSgnYWxsb3ctY29va2llcycpKVxyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCl7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Nvb2tpZS0tbm8tdmlzaWJsZScpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdjb29raWUtb3ZlcmxheS0tbm8tdmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb29raWVzOyIsImltcG9ydCB7ZWFzZUVsYXN0aWNPdXQsIGVhc2VFbGFzdGljSW4sIGVhc2VCb3VuY2VPdXR9IGZyb20gXCJkMy1lYXNlXCI7XHJcbmltcG9ydCBTZWdtZW50IGZyb20gXCJzZWdtZW50LWpzXCI7XHJcbmltcG9ydCBIZWFkcm9vbSBmcm9tICcuLy4uLy4uL3ZlbmRvcnMvaGVhZHJvb20ubWluJ1xyXG5cclxuY2xhc3MgTmF2QmFye1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcclxuICAgICAgICB0aGlzLm5hdmVnYXRpb25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2Jyk7XHJcblxyXG4gICAgICAgIHRoaXMucGF0aEEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnVyZ2VyX3BhdGhBJyk7XHJcbiAgICAgICAgdGhpcy5wYXRoQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXJfcGF0aEInKTtcclxuICAgICAgICB0aGlzLnBhdGhDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1cmdlcl9wYXRoQycpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWljb24td3JhcHBlcicpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtaWNvbi10cmlnZ2VyJyk7XHJcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuICAgICAgICB0aGlzLmJlZ2luQUMgPSA4MDtcclxuICAgICAgICB0aGlzLmVuZEFDID0gMzIwO1xyXG4gICAgICAgIHRoaXMuYmVnaW5CID0gODA7XHJcbiAgICAgICAgdGhpcy5lbmRCID0gMzIwO1xyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2VnbWVudEEgPSBuZXcgU2VnbWVudCh0aGlzLnBhdGhBLCB0aGlzLmJlZ2luQUMsIHRoaXMuZW5kQUMpO1xyXG4gICAgICAgIHRoaXMuc2VnbWVudEIgPSBuZXcgU2VnbWVudCh0aGlzLnBhdGhCLCB0aGlzLmJlZ2luQiwgdGhpcy5lbmRCKTtcclxuICAgICAgICB0aGlzLnNlZ21lbnRDID0gbmV3IFNlZ21lbnQodGhpcy5wYXRoQywgdGhpcy5iZWdpbkFDLCB0aGlzLmVuZEFDKTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgICAgICB0aGlzLmhlYWRyb29tSW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRyb29tSW5pdCgpXHJcbiAgICB7XHJcbiAgICAgICAgSGVhZHJvb20ub3B0aW9ucy5vblVucGluID0gdGhpcy5oaWRlTWVudVVuUGluLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIEhlYWRyb29tLm9wdGlvbnMudG9sZXJhbmNlID0ge1xyXG4gICAgICAgICAgICB1cDogMTAsXHJcbiAgICAgICAgICAgIGRvd246IDhcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgaGVhZHJvb20gPSBuZXcgSGVhZHJvb20odGhpcy5oZWFkZXIpO1xyXG4gICAgICAgIGhlYWRyb29tLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd09ySGlkZU1lbnUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3BlbilcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1lbnUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93T3JIaWRlTWVudSgpe1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3BlbilcclxuICAgICAgICAgICAgdGhpcy5oaWRlTWVudSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zaG93TWVudSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dNZW51KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZHJvb20tLXRvcCcpKXtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLS1waW5uZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW5BQyh0aGlzLnNlZ21lbnRBLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmluQih0aGlzLnNlZ21lbnRCLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmluQUModGhpcy5zZWdtZW50QywgdGhpcyk7XHJcblxyXG4gICAgICAgIC8qKioqKkFjdGl2ZSBtZW51IGNvbnRhaW5lciAqKi9cclxuICAgICAgICB0aGlzLm5hdmVnYXRpb25NZW51LmNsYXNzTGlzdC5hZGQoJ3N3aW5nLWluLXRvcC1iY2snKTtcclxuICAgICAgICB0aGlzLm5hdmVnYXRpb25NZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3N3aW5nLW91dC10b3AtYmNrJyk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTWVudVVuUGluKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKXtcclxuICAgICAgICAgICAgdGhpcy5vdXRBQyh0aGlzLnNlZ21lbnRBLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5vdXRCKHRoaXMuc2VnbWVudEIsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm91dEFDKHRoaXMuc2VnbWVudEMsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5uYXZlZ2F0aW9uTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzd2luZy1pbi10b3AtYmNrJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmF2ZWdhdGlvbk1lbnUuY2xhc3NMaXN0LmFkZCgnc3dpbmctb3V0LXRvcC1iY2snKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoaWRlTWVudSgpe1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRyb29tLS10b3AnKSl7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tcGlubmVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLm91dEFDKHRoaXMuc2VnbWVudEEsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm91dEIodGhpcy5zZWdtZW50QiwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMub3V0QUModGhpcy5zZWdtZW50QywgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5hdmVnYXRpb25NZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3N3aW5nLWluLXRvcC1iY2snKTtcclxuICAgICAgICAgICAgdGhpcy5uYXZlZ2F0aW9uTWVudS5jbGFzc0xpc3QuYWRkKCdzd2luZy1vdXQtdG9wLWJjaycpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGluQUMocywgdGhhdCkge1xyXG4gICAgICAgIHMuZHJhdygnODAlIC0gMjQwJywgJzgwJScsIDAuMywge1xyXG4gICAgICAgICAgICBkZWxheTogMC4xLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmluQUMyKHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5BQzIocykge1xyXG4gICAgICAgIHMuZHJhdygnMTAwJSAtIDU0NScsICcxMDAlIC0gMzA1JywgMC42LCB7XHJcbiAgICAgICAgICAgIGVhc2luZzogZWFzZUVsYXN0aWNPdXRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbkIocywgdGhhdCkge1xyXG4gICAgICAgIHMuZHJhdyh0aGlzLmJlZ2luQiAtIDYwLCB0aGlzLmVuZEIgKyA2MCwgMC4xLCB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQuaW5CMihzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluQjIocykge1xyXG4gICAgICAgIHMuZHJhdyh0aGlzLmJlZ2luQiArIDEyMCwgdGhpcy5lbmRCIC0gMTIwLCAwLjMsIHtcclxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlQm91bmNlT3V0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogT3V0IGFuaW1hdGlvbnMgKHRvIGJ1cmdlciBpY29uKSAqL1xyXG5cclxuICAgIG91dEFDKHMsIHRoYXQpIHtcclxuICAgICAgICBzLmRyYXcoJzkwJSAtIDI0MCcsICc5MCUnLCAwLjEsIHtcclxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlRWxhc3RpY0luLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm91dEFDMihzLCB0aGF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG91dEFDMihzLCB0aGF0KSB7XHJcbiAgICAgICAgcy5kcmF3KCcyMCUgLSAyNDAnLCAnMjAlJywgMC4zLCB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQub3V0QUMzKHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0QUMzKHMpIHtcclxuICAgICAgICBzLmRyYXcodGhpcy5iZWdpbkFDLCB0aGlzLmVuZEFDLCAwLjcsIHtcclxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlRWxhc3RpY091dFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG91dEIocykge1xyXG4gICAgICAgIHMuZHJhdyh0aGlzLmJlZ2luQiwgdGhpcy5lbmRCLCAwLjcsIHtcclxuICAgICAgICAgICAgZGVsYXk6IDAuMSxcclxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlRWxhc3RpY091dFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZSh2YWx1ZSwgbmFtZT0ncHJvZHVjdHNfY2FydCcgLCBkYXlzPTMpIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSsoZGF5cyoyNCo2MCo2MCoxMDAwKSk7XHJcbiAgICBsZXQgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiK2RhdGUudG9HTVRTdHJpbmcgKCk7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArXHJcbiAgICAgICAgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICBsZXQgY0FyciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgZm9yKGxldCBpPTA7aSA8IGNBcnIubGVuZ3RoO2krKykge1xyXG4gICAgICAgIGxldCBjb29raWUgPSBjQXJyW2ldLnNwbGl0KFwiPVwiLDIpO1xyXG4gICAgICAgIGNvb2tpZVswXSA9IGNvb2tpZVswXS5yZXBsYWNlKC9eXFxzKy8sXCJcIik7XHJcbiAgICAgICAgaWYgKGNvb2tpZVswXSA9PSBuYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gY29va2llO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59IiwiLyohXHJcbiAqIGhlYWRyb29tLmpzIHYwLjkuNCAtIEdpdmUgeW91ciBwYWdlIHNvbWUgaGVhZHJvb20uIEhpZGUgeW91ciBoZWFkZXIgdW50aWwgeW91IG5lZWQgaXRcclxuICogQ29weXJpZ2h0IChjKSAyMDE3IE5pY2sgV2lsbGlhbXMgLSBodHRwOi8vd2lja3kubmlsbGlhLm1zL2hlYWRyb29tLmpzXHJcbiAqIExpY2Vuc2U6IE1JVFxyXG4gKi9cclxuXHJcbiFmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sYik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YigpOmEuSGVhZHJvb209YigpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYShhKXt0aGlzLmNhbGxiYWNrPWEsdGhpcy50aWNraW5nPSExfWZ1bmN0aW9uIGIoYSl7cmV0dXJuIGEmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJihhPT09d2luZG93fHxhLm5vZGVUeXBlKX1mdW5jdGlvbiBjKGEpe2lmKGFyZ3VtZW50cy5sZW5ndGg8PTApdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBhcmd1bWVudHMgaW4gZXh0ZW5kIGZ1bmN0aW9uXCIpO3ZhciBkLGUsZj1hfHx7fTtmb3IoZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBnPWFyZ3VtZW50c1tlXXx8e307Zm9yKGQgaW4gZylcIm9iamVjdFwiIT10eXBlb2YgZltkXXx8YihmW2RdKT9mW2RdPWZbZF18fGdbZF06ZltkXT1jKGZbZF0sZ1tkXSl9cmV0dXJuIGZ9ZnVuY3Rpb24gZChhKXtyZXR1cm4gYT09PU9iamVjdChhKT9hOntkb3duOmEsdXA6YX19ZnVuY3Rpb24gZShhLGIpe2I9YyhiLGUub3B0aW9ucyksdGhpcy5sYXN0S25vd25TY3JvbGxZPTAsdGhpcy5lbGVtPWEsdGhpcy50b2xlcmFuY2U9ZChiLnRvbGVyYW5jZSksdGhpcy5jbGFzc2VzPWIuY2xhc3Nlcyx0aGlzLm9mZnNldD1iLm9mZnNldCx0aGlzLnNjcm9sbGVyPWIuc2Nyb2xsZXIsdGhpcy5pbml0aWFsaXNlZD0hMSx0aGlzLm9uUGluPWIub25QaW4sdGhpcy5vblVucGluPWIub25VbnBpbix0aGlzLm9uVG9wPWIub25Ub3AsdGhpcy5vbk5vdFRvcD1iLm9uTm90VG9wLHRoaXMub25Cb3R0b209Yi5vbkJvdHRvbSx0aGlzLm9uTm90Qm90dG9tPWIub25Ob3RCb3R0b219dmFyIGY9e2JpbmQ6ISFmdW5jdGlvbigpe30uYmluZCxjbGFzc0xpc3Q6XCJjbGFzc0xpc3RcImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxyQUY6ISEod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSl9O3JldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsYS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmEsdXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5jYWxsYmFjayYmdGhpcy5jYWxsYmFjaygpLHRoaXMudGlja2luZz0hMX0scmVxdWVzdFRpY2s6ZnVuY3Rpb24oKXt0aGlzLnRpY2tpbmd8fChyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yYWZDYWxsYmFja3x8KHRoaXMucmFmQ2FsbGJhY2s9dGhpcy51cGRhdGUuYmluZCh0aGlzKSkpLHRoaXMudGlja2luZz0hMCl9LGhhbmRsZUV2ZW50OmZ1bmN0aW9uKCl7dGhpcy5yZXF1ZXN0VGljaygpfX0sZS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmUsaW5pdDpmdW5jdGlvbigpe2lmKGUuY3V0c1RoZU11c3RhcmQpcmV0dXJuIHRoaXMuZGVib3VuY2VyPW5ldyBhKHRoaXMudXBkYXRlLmJpbmQodGhpcykpLHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5pbml0aWFsKSxzZXRUaW1lb3V0KHRoaXMuYXR0YWNoRXZlbnQuYmluZCh0aGlzKSwxMDApLHRoaXN9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmNsYXNzZXM7dGhpcy5pbml0aWFsaXNlZD0hMTtmb3IodmFyIGIgaW4gYSlhLmhhc093blByb3BlcnR5KGIpJiZ0aGlzLmVsZW0uY2xhc3NMaXN0LnJlbW92ZShhW2JdKTt0aGlzLnNjcm9sbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIix0aGlzLmRlYm91bmNlciwhMSl9LGF0dGFjaEV2ZW50OmZ1bmN0aW9uKCl7dGhpcy5pbml0aWFsaXNlZHx8KHRoaXMubGFzdEtub3duU2Nyb2xsWT10aGlzLmdldFNjcm9sbFkoKSx0aGlzLmluaXRpYWxpc2VkPSEwLHRoaXMuc2Nyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHRoaXMuZGVib3VuY2VyLCExKSx0aGlzLmRlYm91bmNlci5oYW5kbGVFdmVudCgpKX0sdW5waW46ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmVsZW0uY2xhc3NMaXN0LGI9dGhpcy5jbGFzc2VzOyFhLmNvbnRhaW5zKGIucGlubmVkKSYmYS5jb250YWlucyhiLnVucGlubmVkKXx8KGEuYWRkKGIudW5waW5uZWQpLGEucmVtb3ZlKGIucGlubmVkKSx0aGlzLm9uVW5waW4mJnRoaXMub25VbnBpbi5jYWxsKHRoaXMpKX0scGluOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5lbGVtLmNsYXNzTGlzdCxiPXRoaXMuY2xhc3NlczthLmNvbnRhaW5zKGIudW5waW5uZWQpJiYoYS5yZW1vdmUoYi51bnBpbm5lZCksYS5hZGQoYi5waW5uZWQpLHRoaXMub25QaW4mJnRoaXMub25QaW4uY2FsbCh0aGlzKSl9LHRvcDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZWxlbS5jbGFzc0xpc3QsYj10aGlzLmNsYXNzZXM7YS5jb250YWlucyhiLnRvcCl8fChhLmFkZChiLnRvcCksYS5yZW1vdmUoYi5ub3RUb3ApLHRoaXMub25Ub3AmJnRoaXMub25Ub3AuY2FsbCh0aGlzKSl9LG5vdFRvcDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZWxlbS5jbGFzc0xpc3QsYj10aGlzLmNsYXNzZXM7YS5jb250YWlucyhiLm5vdFRvcCl8fChhLmFkZChiLm5vdFRvcCksYS5yZW1vdmUoYi50b3ApLHRoaXMub25Ob3RUb3AmJnRoaXMub25Ob3RUb3AuY2FsbCh0aGlzKSl9LGJvdHRvbTpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZWxlbS5jbGFzc0xpc3QsYj10aGlzLmNsYXNzZXM7YS5jb250YWlucyhiLmJvdHRvbSl8fChhLmFkZChiLmJvdHRvbSksYS5yZW1vdmUoYi5ub3RCb3R0b20pLHRoaXMub25Cb3R0b20mJnRoaXMub25Cb3R0b20uY2FsbCh0aGlzKSl9LG5vdEJvdHRvbTpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZWxlbS5jbGFzc0xpc3QsYj10aGlzLmNsYXNzZXM7YS5jb250YWlucyhiLm5vdEJvdHRvbSl8fChhLmFkZChiLm5vdEJvdHRvbSksYS5yZW1vdmUoYi5ib3R0b20pLHRoaXMub25Ob3RCb3R0b20mJnRoaXMub25Ob3RCb3R0b20uY2FsbCh0aGlzKSl9LGdldFNjcm9sbFk6ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwIT09dGhpcy5zY3JvbGxlci5wYWdlWU9mZnNldD90aGlzLnNjcm9sbGVyLnBhZ2VZT2Zmc2V0OnZvaWQgMCE9PXRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG9wP3RoaXMuc2Nyb2xsZXIuc2Nyb2xsVG9wOihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnR8fGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZXx8ZG9jdW1lbnQuYm9keSkuc2Nyb2xsVG9wfSxnZXRWaWV3cG9ydEhlaWdodDpmdW5jdGlvbigpe3JldHVybiB3aW5kb3cuaW5uZXJIZWlnaHR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHR8fGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0fSxnZXRFbGVtZW50UGh5c2ljYWxIZWlnaHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGgubWF4KGEub2Zmc2V0SGVpZ2h0LGEuY2xpZW50SGVpZ2h0KX0sZ2V0U2Nyb2xsZXJQaHlzaWNhbEhlaWdodDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNjcm9sbGVyPT09d2luZG93fHx0aGlzLnNjcm9sbGVyPT09ZG9jdW1lbnQuYm9keT90aGlzLmdldFZpZXdwb3J0SGVpZ2h0KCk6dGhpcy5nZXRFbGVtZW50UGh5c2ljYWxIZWlnaHQodGhpcy5zY3JvbGxlcil9LGdldERvY3VtZW50SGVpZ2h0OmZ1bmN0aW9uKCl7dmFyIGE9ZG9jdW1lbnQuYm9keSxiPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtyZXR1cm4gTWF0aC5tYXgoYS5zY3JvbGxIZWlnaHQsYi5zY3JvbGxIZWlnaHQsYS5vZmZzZXRIZWlnaHQsYi5vZmZzZXRIZWlnaHQsYS5jbGllbnRIZWlnaHQsYi5jbGllbnRIZWlnaHQpfSxnZXRFbGVtZW50SGVpZ2h0OmZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLm1heChhLnNjcm9sbEhlaWdodCxhLm9mZnNldEhlaWdodCxhLmNsaWVudEhlaWdodCl9LGdldFNjcm9sbGVySGVpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2Nyb2xsZXI9PT13aW5kb3d8fHRoaXMuc2Nyb2xsZXI9PT1kb2N1bWVudC5ib2R5P3RoaXMuZ2V0RG9jdW1lbnRIZWlnaHQoKTp0aGlzLmdldEVsZW1lbnRIZWlnaHQodGhpcy5zY3JvbGxlcil9LGlzT3V0T2ZCb3VuZHM6ZnVuY3Rpb24oYSl7dmFyIGI9YTwwLGM9YSt0aGlzLmdldFNjcm9sbGVyUGh5c2ljYWxIZWlnaHQoKT50aGlzLmdldFNjcm9sbGVySGVpZ2h0KCk7cmV0dXJuIGJ8fGN9LHRvbGVyYW5jZUV4Y2VlZGVkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIE1hdGguYWJzKGEtdGhpcy5sYXN0S25vd25TY3JvbGxZKT49dGhpcy50b2xlcmFuY2VbYl19LHNob3VsZFVucGluOmZ1bmN0aW9uKGEsYil7dmFyIGM9YT50aGlzLmxhc3RLbm93blNjcm9sbFksZD1hPj10aGlzLm9mZnNldDtyZXR1cm4gYyYmZCYmYn0sc2hvdWxkUGluOmZ1bmN0aW9uKGEsYil7dmFyIGM9YTx0aGlzLmxhc3RLbm93blNjcm9sbFksZD1hPD10aGlzLm9mZnNldDtyZXR1cm4gYyYmYnx8ZH0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5nZXRTY3JvbGxZKCksYj1hPnRoaXMubGFzdEtub3duU2Nyb2xsWT9cImRvd25cIjpcInVwXCIsYz10aGlzLnRvbGVyYW5jZUV4Y2VlZGVkKGEsYik7dGhpcy5pc091dE9mQm91bmRzKGEpfHwoYTw9dGhpcy5vZmZzZXQ/dGhpcy50b3AoKTp0aGlzLm5vdFRvcCgpLGErdGhpcy5nZXRWaWV3cG9ydEhlaWdodCgpPj10aGlzLmdldFNjcm9sbGVySGVpZ2h0KCk/dGhpcy5ib3R0b20oKTp0aGlzLm5vdEJvdHRvbSgpLHRoaXMuc2hvdWxkVW5waW4oYSxjKT90aGlzLnVucGluKCk6dGhpcy5zaG91bGRQaW4oYSxjKSYmdGhpcy5waW4oKSx0aGlzLmxhc3RLbm93blNjcm9sbFk9YSl9fSxlLm9wdGlvbnM9e3RvbGVyYW5jZTp7dXA6MCxkb3duOjB9LG9mZnNldDowLHNjcm9sbGVyOndpbmRvdyxjbGFzc2VzOntwaW5uZWQ6XCJoZWFkcm9vbS0tcGlubmVkXCIsdW5waW5uZWQ6XCJoZWFkcm9vbS0tdW5waW5uZWRcIix0b3A6XCJoZWFkcm9vbS0tdG9wXCIsbm90VG9wOlwiaGVhZHJvb20tLW5vdC10b3BcIixib3R0b206XCJoZWFkcm9vbS0tYm90dG9tXCIsbm90Qm90dG9tOlwiaGVhZHJvb20tLW5vdC1ib3R0b21cIixpbml0aWFsOlwiaGVhZHJvb21cIn19LGUuY3V0c1RoZU11c3RhcmQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGYmJmYuckFGJiZmLmJpbmQmJmYuY2xhc3NMaXN0LGV9KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9