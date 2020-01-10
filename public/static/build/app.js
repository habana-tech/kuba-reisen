(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/scripts/app.js":
/*!*******************************!*\
  !*** ./assets/scripts/app.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_kraken_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/kraken.scss */ "./assets/styles/kraken.scss");
/* harmony import */ var _styles_kraken_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_kraken_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.scss */ "./assets/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lazysizes/plugins/unveilhooks/ls.unveilhooks */ "./node_modules/lazysizes/plugins/unveilhooks/ls.unveilhooks.js");
/* harmony import */ var lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_global_navBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/global/_navBar */ "./assets/scripts/modules/global/_navBar.js");
/* harmony import */ var _modules_global_cartBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/global/_cartBar */ "./assets/scripts/modules/global/_cartBar.js");
/* harmony import */ var _modules_global_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/global/_cookies */ "./assets/scripts/modules/global/_cookies.js");







new smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default.a('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true
});
new _modules_global_navBar__WEBPACK_IMPORTED_MODULE_4__["default"]();
new _modules_global_cartBar__WEBPACK_IMPORTED_MODULE_5__["default"]();
new _modules_global_cookies__WEBPACK_IMPORTED_MODULE_6__["default"]();

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
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! headroom.js */ "./node_modules/headroom.js/dist/headroom.js");
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_4__);



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
      headroom_js__WEBPACK_IMPORTED_MODULE_4___default.a.options.onUnpin = this.hideMenuUnPin.bind(this);
      headroom_js__WEBPACK_IMPORTED_MODULE_4___default.a.options.tolerance = {
        up: 10,
        down: 8
      };
      var headroom = new headroom_js__WEBPACK_IMPORTED_MODULE_4___default.a(this.header);
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
    if (cookie[0] === name) return cookie;
  }

  return false;
}

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

},[["./assets/scripts/app.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~activity~app","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX2NhcnRCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX25hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2dsb2JhbC9fdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9rcmFrZW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbIlNtb290aFNjcm9sbCIsInNwZWVkIiwic3BlZWRBc0R1cmF0aW9uIiwiTmF2QmFyIiwiQ2FydEJhciIsIkNvb2tpZXMiLCJjYXJ0QmFyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2FydEJhclRleHQiLCJjaGVjayIsImN1cnJlbnRWYWx1ZSIsImdldENvb2tpZSIsImFjdGl2aXRpZXNBbW91bnQiLCJzcGxpdCIsImxlbmd0aCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImlubmVySFRNTCIsImFsbG93QnRuIiwibWVzc2FnZSIsIm92ZXJsYXkiLCJldmVudCIsImRpYWxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGxvd0Nvb2tpZXMiLCJiaW5kIiwiY29uc29sZSIsImluZm8iLCJzZXRDb29raWUiLCJoaWRlIiwiYWRkIiwiaGVhZGVyIiwibmF2ZWdhdGlvbk1lbnUiLCJwYXRoQSIsInBhdGhCIiwicGF0aEMiLCJ3cmFwcGVyIiwiYnV0dG9uIiwibWFpbiIsImJlZ2luQUMiLCJlbmRBQyIsImJlZ2luQiIsImVuZEIiLCJpc09wZW4iLCJzZWdtZW50QSIsIlNlZ21lbnQiLCJzZWdtZW50QiIsInNlZ21lbnRDIiwiZXZlbnRzIiwiaGVhZHJvb21Jbml0IiwiSGVhZHJvb20iLCJvcHRpb25zIiwib25VbnBpbiIsImhpZGVNZW51VW5QaW4iLCJ0b2xlcmFuY2UiLCJ1cCIsImRvd24iLCJoZWFkcm9vbSIsImluaXQiLCJzaG93T3JIaWRlTWVudSIsImhpZGVNZW51Iiwic2hvd01lbnUiLCJjb250YWlucyIsImluQUMiLCJpbkIiLCJvdXRBQyIsIm91dEIiLCJzIiwidGhhdCIsImRyYXciLCJkZWxheSIsImNhbGxiYWNrIiwiaW5BQzIiLCJlYXNpbmciLCJlYXNlRWxhc3RpY091dCIsImluQjIiLCJlYXNlQm91bmNlT3V0IiwiZWFzZUVsYXN0aWNJbiIsIm91dEFDMiIsIm91dEFDMyIsInZhbHVlIiwibmFtZSIsImRheXMiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiZXhwaXJlcyIsInRvR01UU3RyaW5nIiwiY29va2llIiwiY0FyciIsImkiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxvREFBSixDQUFpQixjQUFqQixFQUFpQztBQUM3QkMsT0FBSyxFQUFFLEdBRHNCO0FBRTdCQyxpQkFBZSxFQUFFO0FBRlksQ0FBakM7QUFJQSxJQUFJQyw4REFBSjtBQUNBLElBQUlDLCtEQUFKO0FBQ0EsSUFBSUMsK0RBQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0lBRU1ELE87OztBQUNGLHFCQUFhO0FBQUE7O0FBQ1QsU0FBS0UsT0FBTCxHQUFlQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjtBQUVBLFFBQUksS0FBS0YsT0FBTCxJQUFnQixJQUFwQixFQUNJO0FBRUosU0FBS0csV0FBTCxHQUFtQkYsUUFBUSxDQUFDQyxhQUFULENBQXVCLHlDQUF2QixDQUFuQjtBQUNB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QUQsTUFBSSxDQUFDRSxPQUFMLENBQWFGLElBQUksQ0FBQ0csT0FBTCxLQUFnQkosSUFBSSxHQUFDLEVBQUwsR0FBUSxFQUFSLEdBQVcsRUFBWCxHQUFjLElBQTNDO0FBQ0EsTUFBSUssT0FBTyxHQUFHLGVBQWFKLElBQUksQ0FBQ0ssV0FBTCxFQUEzQjtBQUNBbEYsVUFBUSxDQUFDbUYsTUFBVCxHQUFrQlIsSUFBSSxHQUFHLEdBQVAsR0FBYUQsS0FBYixHQUNkTyxPQURjLEdBQ0osVUFEZDtBQUVIO0FBRU0sU0FBUzVFLFNBQVQsQ0FBbUJzRSxJQUFuQixFQUF5QjtBQUM1QixNQUFJUyxJQUFJLEdBQUdwRixRQUFRLENBQUNtRixNQUFULENBQWdCNUUsS0FBaEIsQ0FBc0IsR0FBdEIsQ0FBWDs7QUFDQSxPQUFJLElBQUk4RSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUdELElBQUksQ0FBQzVFLE1BQXJCLEVBQTRCNkUsQ0FBQyxFQUE3QixFQUFpQztBQUM3QixRQUFJRixNQUFNLEdBQUdDLElBQUksQ0FBQ0MsQ0FBRCxDQUFKLENBQVE5RSxLQUFSLENBQWMsR0FBZCxFQUFrQixDQUFsQixDQUFiO0FBQ0E0RSxVQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlBLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUcsT0FBVixDQUFrQixNQUFsQixFQUF5QixFQUF6QixDQUFaO0FBQ0EsUUFBSUgsTUFBTSxDQUFDLENBQUQsQ0FBTixLQUFjUixJQUFsQixFQUNJLE9BQU9RLE1BQVA7QUFDUDs7QUFDRCxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7OztBQ2pCRCx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9rcmFrZW4uc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5zY3NzJztcclxuXHJcbmltcG9ydCAnbGF6eXNpemVzL3BsdWdpbnMvdW52ZWlsaG9va3MvbHMudW52ZWlsaG9va3MnO1xyXG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJ3Ntb290aC1zY3JvbGwnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL21vZHVsZXMvZ2xvYmFsL19uYXZCYXJcIjtcclxuaW1wb3J0IENhcnRCYXIgZnJvbSAnLi9tb2R1bGVzL2dsb2JhbC9fY2FydEJhcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJy4vbW9kdWxlcy9nbG9iYWwvX2Nvb2tpZXMnO1xyXG5cclxubmV3IFNtb290aFNjcm9sbCgnYVtocmVmKj1cIiNcIl0nLCB7XHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc3BlZWRBc0R1cmF0aW9uOiB0cnVlXHJcbn0pO1xyXG5uZXcgTmF2QmFyKCk7XHJcbm5ldyBDYXJ0QmFyKCk7XHJcbm5ldyBDb29raWVzKCk7XHJcblxyXG4iLCJpbXBvcnQge2dldENvb2tpZX0gZnJvbSAnLi9fdXRpbHMnO1xyXG5cclxuY2xhc3MgQ2FydEJhcntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfYmFyJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNhcnRCYXIgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmNhcnRCYXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfYmFyIC5jYXJ0X2Jhcl9fY29udGVudF9fdGV4dCBzcGFuJyk7XHJcbiAgICAgICAgdGhpcy5jaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrKCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50VmFsdWUgPSBnZXRDb29raWUoJ3Byb2R1Y3RzX2NhcnQnKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRWYWx1ZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgYWN0aXZpdGllc0Ftb3VudCA9IGN1cnJlbnRWYWx1ZVsxXS5zcGxpdCgnLCcpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcnRfYmFyLS1pbml0aWFsJyk7XHJcbiAgICAgICAgaWYgKGFjdGl2aXRpZXNBbW91bnQgPT09IDEpXHJcbiAgICAgICAgICAgIHRoaXMuY2FydEJhclRleHQuaW5uZXJIVE1MID0gYWN0aXZpdGllc0Ftb3VudCArICdQcm9kdWt0JztcclxuICAgICAgICBlbHNlIGlmIChhY3Rpdml0aWVzQW1vdW50ID4gMSlcclxuICAgICAgICAgICAgdGhpcy5jYXJ0QmFyVGV4dC5pbm5lckhUTUwgPSBhY3Rpdml0aWVzQW1vdW50ICsgJ1Byb2R1a3RlJztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRCYXI7IiwiaW1wb3J0IHsgc2V0Q29va2llLCBnZXRDb29raWUgfSBmcm9tICcuL191dGlscyc7XHJcblxyXG5jbGFzcyBDb29raWVze1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICAvL0lmIHRoZSBjb29raWUgd2FzIHNldCwgdGhlIGRpYWxvZyBkb2Vuc3QgZXhpc3QhISAodHdpZyBkaWRudCB3cml0ZSBpdCkgYW5kIEpTIHR3cm93cyBhbiBlcnJvclxyXG4gICAgICAgIHRoaXMuYWxsb3dCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29va2llIC5jb29raWVfX2J0biBidXR0b24nKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29va2llJyk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2tpZS1vdmVybGF5Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9Pbmx5IGlmIHRoZSBidG4gZXhpc3QuXHJcbiAgICAgICAgaWYodGhpcy5hbGxvd0J0bikgXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudCgpe1xyXG4gICAgICAgIHRoaXMuZGlhbG9nKCk7XHJcbiAgICAgICAgdGhpcy5hbGxvd0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWxsb3dDb29raWVzLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsbG93Q29va2llcygpe1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnYWxsb3cgY29va2llcycpO1xyXG4gICAgICAgIHNldENvb2tpZSgnYWxsb3cnLCAnYWxsb3ctY29va2llcycpO1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpYWxvZygpe1xyXG4gICAgICAgIGlmIChnZXRDb29raWUoJ2FsbG93LWNvb2tpZXMnKSlcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpe1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdjb29raWUtLW5vLXZpc2libGUnKTtcclxuICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnY29va2llLW92ZXJsYXktLW5vLXZpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29va2llczsiLCJpbXBvcnQge2Vhc2VFbGFzdGljT3V0LCBlYXNlRWxhc3RpY0luLCBlYXNlQm91bmNlT3V0fSBmcm9tIFwiZDMtZWFzZVwiO1xyXG5pbXBvcnQgU2VnbWVudCBmcm9tIFwic2VnbWVudC1qc1wiO1xyXG5pbXBvcnQgSGVhZHJvb20gZnJvbSAnaGVhZHJvb20uanMnXHJcblxyXG5jbGFzcyBOYXZCYXJ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG4gICAgICAgIHRoaXMubmF2ZWdhdGlvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYnKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXRoQSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXJfcGF0aEEnKTtcclxuICAgICAgICB0aGlzLnBhdGhCID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1cmdlcl9wYXRoQicpO1xyXG4gICAgICAgIHRoaXMucGF0aEMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnVyZ2VyX3BhdGhDJyk7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtaWNvbi13cmFwcGVyJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1pY29uLXRyaWdnZXInKTtcclxuICAgICAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmVnaW5BQyA9IDgwO1xyXG4gICAgICAgIHRoaXMuZW5kQUMgPSAzMjA7XHJcbiAgICAgICAgdGhpcy5iZWdpbkIgPSA4MDtcclxuICAgICAgICB0aGlzLmVuZEIgPSAzMjA7XHJcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWdtZW50QSA9IG5ldyBTZWdtZW50KHRoaXMucGF0aEEsIHRoaXMuYmVnaW5BQywgdGhpcy5lbmRBQyk7XHJcbiAgICAgICAgdGhpcy5zZWdtZW50QiA9IG5ldyBTZWdtZW50KHRoaXMucGF0aEIsIHRoaXMuYmVnaW5CLCB0aGlzLmVuZEIpO1xyXG4gICAgICAgIHRoaXMuc2VnbWVudEMgPSBuZXcgU2VnbWVudCh0aGlzLnBhdGhDLCB0aGlzLmJlZ2luQUMsIHRoaXMuZW5kQUMpO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuaGVhZHJvb21Jbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZHJvb21Jbml0KClcclxuICAgIHtcclxuICAgICAgICBIZWFkcm9vbS5vcHRpb25zLm9uVW5waW4gPSB0aGlzLmhpZGVNZW51VW5QaW4uYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgSGVhZHJvb20ub3B0aW9ucy50b2xlcmFuY2UgPSB7XHJcbiAgICAgICAgICAgIHVwOiAxMCxcclxuICAgICAgICAgICAgZG93bjogOFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBoZWFkcm9vbSA9IG5ldyBIZWFkcm9vbSh0aGlzLmhlYWRlcik7XHJcbiAgICAgICAgaGVhZHJvb20uaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93T3JIaWRlTWVudS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPcGVuKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlTWVudSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dPckhpZGVNZW51KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKVxyXG4gICAgICAgICAgICB0aGlzLmhpZGVNZW51KCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnNob3dNZW51KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01lbnUoKXtcclxuICAgICAgICBpZiAodGhpcy5oZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkcm9vbS0tdG9wJykpe1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLXBpbm5lZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbkFDKHRoaXMuc2VnbWVudEEsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5CKHRoaXMuc2VnbWVudEIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5BQyh0aGlzLnNlZ21lbnRDLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLyoqKioqQWN0aXZlIG1lbnUgY29udGFpbmVyICoqL1xyXG4gICAgICAgIHRoaXMubmF2ZWdhdGlvbk1lbnUuY2xhc3NMaXN0LmFkZCgnc3dpbmctaW4tdG9wLWJjaycpO1xyXG4gICAgICAgIHRoaXMubmF2ZWdhdGlvbk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpbmctb3V0LXRvcC1iY2snKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVNZW51VW5QaW4oKXtcclxuICAgICAgICBpZiAodGhpcy5pc09wZW4pe1xyXG4gICAgICAgICAgICB0aGlzLm91dEFDKHRoaXMuc2VnbWVudEEsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm91dEIodGhpcy5zZWdtZW50QiwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMub3V0QUModGhpcy5zZWdtZW50QywgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5hdmVnYXRpb25NZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3N3aW5nLWluLXRvcC1iY2snKTtcclxuICAgICAgICAgICAgdGhpcy5uYXZlZ2F0aW9uTWVudS5jbGFzc0xpc3QuYWRkKCdzd2luZy1vdXQtdG9wLWJjaycpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVNZW51KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZHJvb20tLXRvcCcpKXtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLS1waW5uZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0QUModGhpcy5zZWdtZW50QSwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMub3V0Qih0aGlzLnNlZ21lbnRCLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5vdXRBQyh0aGlzLnNlZ21lbnRDLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubmF2ZWdhdGlvbk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpbmctaW4tdG9wLWJjaycpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdmVnYXRpb25NZW51LmNsYXNzTGlzdC5hZGQoJ3N3aW5nLW91dC10b3AtYmNrJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaW5BQyhzLCB0aGF0KSB7XHJcbiAgICAgICAgcy5kcmF3KCc4MCUgLSAyNDAnLCAnODAlJywgMC4zLCB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAwLjEsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQuaW5BQzIocyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbkFDMihzKSB7XHJcbiAgICAgICAgcy5kcmF3KCcxMDAlIC0gNTQ1JywgJzEwMCUgLSAzMDUnLCAwLjYsIHtcclxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlRWxhc3RpY091dFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluQihzLCB0aGF0KSB7XHJcbiAgICAgICAgcy5kcmF3KHRoaXMuYmVnaW5CIC0gNjAsIHRoaXMuZW5kQiArIDYwLCAwLjEsIHtcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5pbkIyKHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5CMihzKSB7XHJcbiAgICAgICAgcy5kcmF3KHRoaXMuYmVnaW5CICsgMTIwLCB0aGlzLmVuZEIgLSAxMjAsIDAuMywge1xyXG4gICAgICAgICAgICBlYXNpbmc6IGVhc2VCb3VuY2VPdXRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBPdXQgYW5pbWF0aW9ucyAodG8gYnVyZ2VyIGljb24pICovXHJcblxyXG4gICAgb3V0QUMocywgdGhhdCkge1xyXG4gICAgICAgIHMuZHJhdygnOTAlIC0gMjQwJywgJzkwJScsIDAuMSwge1xyXG4gICAgICAgICAgICBlYXNpbmc6IGVhc2VFbGFzdGljSW4sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQub3V0QUMyKHMsIHRoYXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0QUMyKHMsIHRoYXQpIHtcclxuICAgICAgICBzLmRyYXcoJzIwJSAtIDI0MCcsICcyMCUnLCAwLjMsIHtcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5vdXRBQzMocyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRBQzMocykge1xyXG4gICAgICAgIHMuZHJhdyh0aGlzLmJlZ2luQUMsIHRoaXMuZW5kQUMsIDAuNywge1xyXG4gICAgICAgICAgICBlYXNpbmc6IGVhc2VFbGFzdGljT3V0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0QihzKSB7XHJcbiAgICAgICAgcy5kcmF3KHRoaXMuYmVnaW5CLCB0aGlzLmVuZEIsIDAuNywge1xyXG4gICAgICAgICAgICBkZWxheTogMC4xLFxyXG4gICAgICAgICAgICBlYXNpbmc6IGVhc2VFbGFzdGljT3V0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcblxyXG4iLCJleHBvcnQgZnVuY3Rpb24gc2V0Q29va2llKHZhbHVlLCBuYW1lPSdwcm9kdWN0c19jYXJ0JyAsIGRheXM9Mykge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpKyhkYXlzKjI0KjYwKjYwKjEwMDApKTtcclxuICAgIGxldCBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIrZGF0ZS50b0dNVFN0cmluZyAoKTtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICtcclxuICAgICAgICBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIHtcclxuICAgIGxldCBjQXJyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICBmb3IobGV0IGk9MDtpIDwgY0Fyci5sZW5ndGg7aSsrKSB7XHJcbiAgICAgICAgbGV0IGNvb2tpZSA9IGNBcnJbaV0uc3BsaXQoXCI9XCIsMik7XHJcbiAgICAgICAgY29va2llWzBdID0gY29va2llWzBdLnJlcGxhY2UoL15cXHMrLyxcIlwiKTtcclxuICAgICAgICBpZiAoY29va2llWzBdID09PSBuYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gY29va2llO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==