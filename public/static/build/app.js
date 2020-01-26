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
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_utils */ "./assets/scripts/modules/global/_utils.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);














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
    this.fetchUrl = '/activitiesApiGetById';
    this.activitiesIds = [];
    this.cartBar = document.querySelector('.cart_bar');
    this.cartBarActivitiesItemsContainer = document.querySelector('.cart_bar__content__activities');
    this.cartBarActivitiesItemsPrototype = document.querySelector('.cart_bar__content__activities__item__prototype > div');
    this.cartBarActivitiesAmount = document.querySelector('.cart_bar .cart_bar__title span');
    this.buttonsAddActivity = document.querySelectorAll('div[data-activity_id]');
    this.activitiesFilterContainer = document.querySelector('.activities__list__container__filter_search');
    this.loadingActivitiesFromCookie();
    this.events();
  }

  _createClass(CartBar, [{
    key: "loadingActivitiesFromCookie",
    value: function loadingActivitiesFromCookie() {
      var _this = this;

      var activitiesCookie = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getCookie"])('products_cart');
      if (!activitiesCookie) return;

      var _activitiesIds = activitiesCookie[1] !== '' ? activitiesCookie[1].split(',') : [];

      _activitiesIds.forEach(function (activityId) {
        _this.addActivity(activityId);
      });

      this.buttonsAddActivity.forEach(function (button) {
        var activityId = button.getAttribute('data-activity_id');

        if (_this.activitiesIds.includes(activityId)) {
          button.querySelector('svg.heart').classList.toggle('heart--fill-white');
        }
      });
    }
  }, {
    key: "events",
    value: function events() {
      var _this2 = this;

      this.buttonsAddActivity.forEach(function (button) {
        button.addEventListener('click', _this2.addOrRemoveActivity.bind(_this2));
      });
      if (this.activitiesFilterContainer !== null) this.activitiesFilterContainer.addEventListener('DOMNodeInserted', function (element) {
        var activity = element.target;
        var btn = activity.querySelector('.activity__content__actions__add');
        btn.addEventListener('click', _this2.addOrRemoveActivity.bind(_this2));
      });
      this.cartBarActivitiesItemsContainer.addEventListener('DOMNodeInserted', function (element) {
        var activityItem = element.target;
        activityItem.querySelector('.cart_bar__content__activities__item__drop').addEventListener('click', _this2._removeActivity.bind(_this2));
      });
    }
  }, {
    key: "makeCartBarActivityItem",
    value: function makeCartBarActivityItem(activity) {
      var activityItem = this.cartBarActivitiesItemsPrototype.cloneNode(true);
      activityItem.setAttribute('id', 'activityItem_' + activity.id);
      var image = activityItem.querySelector('img');
      image.setAttribute('src', activity.image);
      var name = activityItem.querySelector('h5');
      name.innerHTML = activity.name.length < 20 ? activity.name : activity.name.substring(0, 20) + '...';
      this.cartBarActivitiesItemsContainer.appendChild(activityItem);
    }
  }, {
    key: "fetchActivity",
    value: function fetchActivity(activityId) {
      var _this3 = this;

      var url = this.fetchUrl + '/' + activityId;
      axios__WEBPACK_IMPORTED_MODULE_14___default.a.get(url).then(function (response) {
        var dataActivity = response.data.activity;

        _this3.makeCartBarActivityItem(dataActivity);
      })["catch"](function () {
        return null;
      });
    }
  }, {
    key: "_removeActivity",
    value: function _removeActivity(event) {
      event.preventDefault();
      var element = event.target;
      var activityItem = element.parentNode;
      var activityId = activityItem.getAttribute('id');
      activityId = activityId.substring(13, activityId.length);
      this.removeActivity(activityId);
    }
  }, {
    key: "removeActivity",
    value: function removeActivity(activityId) {
      this.activitiesIds = this.activitiesIds.filter(function (activityIdOther) {
        return activityIdOther !== activityId;
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_13__["setCookie"])(this.activitiesIds.toString());
      var selectedHeart = document.querySelector('div[data-activity_id="' + activityId + '"]');
      console.log(selectedHeart);
      selectedHeart.classList.remove('checked');
      selectedHeart.querySelector('svg').classList.remove('heart--fill-white');
      this.cartBarActivitiesItemsContainer.querySelector('#activityItem_' + activityId).remove();
      this.cartBarActivitiesAmount.innerHTML = this.activitiesIds.length.toString();
    }
  }, {
    key: "addActivity",
    value: function addActivity(activityId) {
      if (this.activitiesIds.length === 0) this.cartBar.classList.add('cart_bar--initial');else this.cartBar.classList.remove('cart_bar--initial');
      this.cartBar.classList.remove('cart_bar--visible');
      this.activitiesIds.push(activityId);
      this.fetchActivity(activityId);
      Object(_utils__WEBPACK_IMPORTED_MODULE_13__["setCookie"])(this.activitiesIds.toString());
      this.cartBarActivitiesAmount.innerHTML = this.activitiesIds.length.toString();
      this.showCart();
    }
  }, {
    key: "addOrRemoveActivity",
    value: function addOrRemoveActivity(e) {
      var button = e.target;
      var activityId = button.getAttribute('data-activity_id');
      if (this.activitiesIds.includes(activityId)) this.removeActivity(activityId);else {
        this.addActivity(activityId);
        this.showCart();
      }
      button.classList.toggle('checked');
      button.querySelector('svg.heart').classList.toggle('heart--fill-white');
    }
  }, {
    key: "showCart",
    value: function showCart() {
      this.cartBar.classList.remove('cart_bar--visible');
      this.cartBar.classList.add('cart_bar--visible');
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

},[["./assets/scripts/app.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~app~contact","vendors~activities~app","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX2NhcnRCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX25hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2dsb2JhbC9fdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9rcmFrZW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbIlNtb290aFNjcm9sbCIsInNwZWVkIiwic3BlZWRBc0R1cmF0aW9uIiwiTmF2QmFyIiwiQ2FydEJhciIsIkNvb2tpZXMiLCJjYXJ0QmFyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmV0Y2hVcmwiLCJhY3Rpdml0aWVzSWRzIiwiY2FydEJhckFjdGl2aXRpZXNJdGVtc0NvbnRhaW5lciIsImNhcnRCYXJBY3Rpdml0aWVzSXRlbXNQcm90b3R5cGUiLCJjYXJ0QmFyQWN0aXZpdGllc0Ftb3VudCIsImJ1dHRvbnNBZGRBY3Rpdml0eSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY3Rpdml0aWVzRmlsdGVyQ29udGFpbmVyIiwibG9hZGluZ0FjdGl2aXRpZXNGcm9tQ29va2llIiwiZXZlbnRzIiwiYWN0aXZpdGllc0Nvb2tpZSIsImdldENvb2tpZSIsIl9hY3Rpdml0aWVzSWRzIiwic3BsaXQiLCJmb3JFYWNoIiwiYWN0aXZpdHlJZCIsImFkZEFjdGl2aXR5IiwiYnV0dG9uIiwiZ2V0QXR0cmlidXRlIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkT3JSZW1vdmVBY3Rpdml0eSIsImJpbmQiLCJlbGVtZW50IiwiYWN0aXZpdHkiLCJ0YXJnZXQiLCJidG4iLCJhY3Rpdml0eUl0ZW0iLCJfcmVtb3ZlQWN0aXZpdHkiLCJjbG9uZU5vZGUiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImltYWdlIiwibmFtZSIsImlubmVySFRNTCIsImxlbmd0aCIsInN1YnN0cmluZyIsImFwcGVuZENoaWxkIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhQWN0aXZpdHkiLCJkYXRhIiwibWFrZUNhcnRCYXJBY3Rpdml0eUl0ZW0iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50Tm9kZSIsInJlbW92ZUFjdGl2aXR5IiwiZmlsdGVyIiwiYWN0aXZpdHlJZE90aGVyIiwic2V0Q29va2llIiwidG9TdHJpbmciLCJzZWxlY3RlZEhlYXJ0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZSIsImFkZCIsInB1c2giLCJmZXRjaEFjdGl2aXR5Iiwic2hvd0NhcnQiLCJlIiwiYWxsb3dCdG4iLCJtZXNzYWdlIiwib3ZlcmxheSIsImRpYWxvZyIsImFsbG93Q29va2llcyIsImluZm8iLCJoaWRlIiwiaGVhZGVyIiwibmF2ZWdhdGlvbk1lbnUiLCJwYXRoQSIsInBhdGhCIiwicGF0aEMiLCJ3cmFwcGVyIiwibWFpbiIsImJlZ2luQUMiLCJlbmRBQyIsImJlZ2luQiIsImVuZEIiLCJpc09wZW4iLCJzZWdtZW50QSIsIlNlZ21lbnQiLCJzZWdtZW50QiIsInNlZ21lbnRDIiwiaGVhZHJvb21Jbml0IiwiSGVhZHJvb20iLCJvcHRpb25zIiwib25VbnBpbiIsImhpZGVNZW51VW5QaW4iLCJ0b2xlcmFuY2UiLCJ1cCIsImRvd24iLCJoZWFkcm9vbSIsImluaXQiLCJzaG93T3JIaWRlTWVudSIsImhpZGVNZW51Iiwic2hvd01lbnUiLCJjb250YWlucyIsImluQUMiLCJpbkIiLCJvdXRBQyIsIm91dEIiLCJzIiwidGhhdCIsImRyYXciLCJkZWxheSIsImNhbGxiYWNrIiwiaW5BQzIiLCJlYXNpbmciLCJlYXNlRWxhc3RpY091dCIsImluQjIiLCJlYXNlQm91bmNlT3V0IiwiZWFzZUVsYXN0aWNJbiIsIm91dEFDMiIsIm91dEFDMyIsInZhbHVlIiwiZGF5cyIsImRhdGUiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJleHBpcmVzIiwidG9HTVRTdHJpbmciLCJjb29raWUiLCJjQXJyIiwiaSIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLG9EQUFKLENBQWlCLGNBQWpCLEVBQWlDO0FBQzdCQyxPQUFLLEVBQUUsR0FEc0I7QUFFN0JDLGlCQUFlLEVBQUU7QUFGWSxDQUFqQztBQUlBLElBQUlDLDhEQUFKO0FBQ0EsSUFBSUMsK0RBQUo7QUFDQSxJQUFJQywrREFBSixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7O0lBRU1ELE87OztBQUNGLHFCQUFhO0FBQUE7O0FBQ1QsU0FBS0UsT0FBTCxHQUFlQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjtBQUNBLFFBQUksS0FBS0YsT0FBTCxJQUFnQixJQUFwQixFQUNJO0FBRUosU0FBS0csUUFBTCxHQUFnQix1QkFBaEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBRUEsU0FBS0osT0FBTCxHQUFlQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjtBQUNBLFNBQUtHLCtCQUFMLEdBQXVDSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0NBQXZCLENBQXZDO0FBQ0EsU0FBS0ksK0JBQUwsR0FBdUNMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1REFBdkIsQ0FBdkM7QUFDQSxTQUFLSyx1QkFBTCxHQUErQk4sUUFBUSxDQUFDQyxh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QUNBQSx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9rcmFrZW4uc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5zY3NzJztcclxuXHJcbmltcG9ydCAnbGF6eXNpemVzL3BsdWdpbnMvdW52ZWlsaG9va3MvbHMudW52ZWlsaG9va3MnO1xyXG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJ3Ntb290aC1zY3JvbGwnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL21vZHVsZXMvZ2xvYmFsL19uYXZCYXJcIjtcclxuaW1wb3J0IENhcnRCYXIgZnJvbSAnLi9tb2R1bGVzL2dsb2JhbC9fY2FydEJhcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJy4vbW9kdWxlcy9nbG9iYWwvX2Nvb2tpZXMnO1xyXG5cclxubmV3IFNtb290aFNjcm9sbCgnYVtocmVmKj1cIiNcIl0nLCB7XHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc3BlZWRBc0R1cmF0aW9uOiB0cnVlXHJcbn0pO1xyXG5uZXcgTmF2QmFyKCk7XHJcbm5ldyBDYXJ0QmFyKCk7XHJcbm5ldyBDb29raWVzKCk7XHJcblxyXG4iLCJpbXBvcnQge2dldENvb2tpZSwgc2V0Q29va2llfSBmcm9tICcuL191dGlscyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBDYXJ0QmFye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmNhcnRCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXInKTtcclxuICAgICAgICBpZiAodGhpcy5jYXJ0QmFyID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5mZXRjaFVybCA9ICcvYWN0aXZpdGllc0FwaUdldEJ5SWQnO1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0lkcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmNhcnRCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXInKTtcclxuICAgICAgICB0aGlzLmNhcnRCYXJBY3Rpdml0aWVzSXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXJfX2NvbnRlbnRfX2FjdGl2aXRpZXMnKTtcclxuICAgICAgICB0aGlzLmNhcnRCYXJBY3Rpdml0aWVzSXRlbXNQcm90b3R5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXJfX2NvbnRlbnRfX2FjdGl2aXRpZXNfX2l0ZW1fX3Byb3RvdHlwZSA+IGRpdicpO1xyXG4gICAgICAgIHRoaXMuY2FydEJhckFjdGl2aXRpZXNBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXIgLmNhcnRfYmFyX190aXRsZSBzcGFuJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uc0FkZEFjdGl2aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2RhdGEtYWN0aXZpdHlfaWRdJyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzRmlsdGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcl9fZmlsdGVyX3NlYXJjaCcpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmdBY3Rpdml0aWVzRnJvbUNvb2tpZSgpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZGluZ0FjdGl2aXRpZXNGcm9tQ29va2llKCl7XHJcbiAgICAgICAgbGV0IGFjdGl2aXRpZXNDb29raWUgPSBnZXRDb29raWUoJ3Byb2R1Y3RzX2NhcnQnKTtcclxuICAgICAgICBpZiAoIWFjdGl2aXRpZXNDb29raWUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgIGxldCBfYWN0aXZpdGllc0lkcyA9IGFjdGl2aXRpZXNDb29raWVbMV0gIT09ICcnID8gYWN0aXZpdGllc0Nvb2tpZVsxXS5zcGxpdCgnLCcpIDogW107XHJcblxyXG4gICAgICAgIF9hY3Rpdml0aWVzSWRzLmZvckVhY2goKGFjdGl2aXR5SWQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQWN0aXZpdHkoYWN0aXZpdHlJZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uc0FkZEFjdGl2aXR5LmZvckVhY2goKGJ1dHRvbik9PntcclxuICAgICAgICAgICAgbGV0IGFjdGl2aXR5SWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2aXR5X2lkJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2aXRpZXNJZHMuaW5jbHVkZXMoYWN0aXZpdHlJZCkpe1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ3N2Zy5oZWFydCcpLmNsYXNzTGlzdC50b2dnbGUoJ2hlYXJ0LS1maWxsLXdoaXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNBZGRBY3Rpdml0eS5mb3JFYWNoKChidXR0b24pPT57XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkT3JSZW1vdmVBY3Rpdml0eS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdGllc0ZpbHRlckNvbnRhaW5lciAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5hY3Rpdml0aWVzRmlsdGVyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVJbnNlcnRlZCcsIChlbGVtZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2aXR5ID0gZWxlbWVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gYWN0aXZpdHkucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5X19jb250ZW50X19hY3Rpb25zX19hZGQnKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkT3JSZW1vdmVBY3Rpdml0eS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FydEJhckFjdGl2aXRpZXNJdGVtc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCAoZWxlbWVudCk9PntcclxuICAgICAgICAgICAgbGV0IGFjdGl2aXR5SXRlbSA9IGVsZW1lbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBhY3Rpdml0eUl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfYmFyX19jb250ZW50X19hY3Rpdml0aWVzX19pdGVtX19kcm9wJylcclxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX3JlbW92ZUFjdGl2aXR5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VDYXJ0QmFyQWN0aXZpdHlJdGVtKGFjdGl2aXR5KXtcclxuICAgICAgICBsZXQgYWN0aXZpdHlJdGVtID0gdGhpcy5jYXJ0QmFyQWN0aXZpdGllc0l0ZW1zUHJvdG90eXBlLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICAgICAgYWN0aXZpdHlJdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWN0aXZpdHlJdGVtXycrYWN0aXZpdHkuaWQpO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IGFjdGl2aXR5SXRlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFjdGl2aXR5LmltYWdlKTtcclxuICAgICAgICBsZXQgbmFtZSA9IGFjdGl2aXR5SXRlbS5xdWVyeVNlbGVjdG9yKCdoNScpO1xyXG4gICAgICAgIG5hbWUuaW5uZXJIVE1MID0gYWN0aXZpdHkubmFtZS5sZW5ndGggPCAyMCA/IGFjdGl2aXR5Lm5hbWUgOiBhY3Rpdml0eS5uYW1lLnN1YnN0cmluZygwLCAyMCkrJy4uLic7XHJcblxyXG4gICAgICAgIHRoaXMuY2FydEJhckFjdGl2aXRpZXNJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpdml0eUl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoQWN0aXZpdHkoYWN0aXZpdHlJZCl7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZmV0Y2hVcmwrJy8nK2FjdGl2aXR5SWQ7XHJcblxyXG4gICAgICAgIGF4aW9zLmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhQWN0aXZpdHkgPSByZXNwb25zZS5kYXRhLmFjdGl2aXR5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWtlQ2FydEJhckFjdGl2aXR5SXRlbShkYXRhQWN0aXZpdHkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVtb3ZlQWN0aXZpdHkoZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgbGV0IGFjdGl2aXR5SXRlbSA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgICBsZXQgYWN0aXZpdHlJZCA9IGFjdGl2aXR5SXRlbS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICAgYWN0aXZpdHlJZCA9IGFjdGl2aXR5SWQuc3Vic3RyaW5nKDEzLCBhY3Rpdml0eUlkLmxlbmd0aCApO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQWN0aXZpdHkoYWN0aXZpdHlJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWN0aXZpdHkoYWN0aXZpdHlJZCl7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzSWRzID0gdGhpcy5hY3Rpdml0aWVzSWRzLmZpbHRlcigoYWN0aXZpdHlJZE90aGVyKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gYWN0aXZpdHlJZE90aGVyICE9PSBhY3Rpdml0eUlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0Q29va2llKHRoaXMuYWN0aXZpdGllc0lkcy50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkSGVhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1hY3Rpdml0eV9pZD1cIicrYWN0aXZpdHlJZCsnXCJdJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRIZWFydCk7XHJcbiAgICAgICAgc2VsZWN0ZWRIZWFydC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XHJcbiAgICAgICAgc2VsZWN0ZWRIZWFydC5xdWVyeVNlbGVjdG9yKCdzdmcnKS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFydC0tZmlsbC13aGl0ZScpO1xyXG5cclxuICAgICAgICB0aGlzLmNhcnRCYXJBY3Rpdml0aWVzSXRlbXNDb250YWluZXIucXVlcnlTZWxlY3RvcignI2FjdGl2aXR5SXRlbV8nK2FjdGl2aXR5SWQpLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuY2FydEJhckFjdGl2aXRpZXNBbW91bnQuaW5uZXJIVE1MID0gdGhpcy5hY3Rpdml0aWVzSWRzLmxlbmd0aC50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFjdGl2aXR5KGFjdGl2aXR5SWQpe1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0aWVzSWRzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgdGhpcy5jYXJ0QmFyLmNsYXNzTGlzdC5hZGQoJ2NhcnRfYmFyLS1pbml0aWFsJyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmNhcnRCYXIuY2xhc3NMaXN0LnJlbW92ZSgnY2FydF9iYXItLWluaXRpYWwnKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcnRfYmFyLS12aXNpYmxlJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0lkcy5wdXNoKGFjdGl2aXR5SWQpO1xyXG4gICAgICAgIHRoaXMuZmV0Y2hBY3Rpdml0eShhY3Rpdml0eUlkKTtcclxuICAgICAgICBzZXRDb29raWUodGhpcy5hY3Rpdml0aWVzSWRzLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICB0aGlzLmNhcnRCYXJBY3Rpdml0aWVzQW1vdW50LmlubmVySFRNTCA9IHRoaXMuYWN0aXZpdGllc0lkcy5sZW5ndGgudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93Q2FydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE9yUmVtb3ZlQWN0aXZpdHkoZSl7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICBsZXQgYWN0aXZpdHlJZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZpdHlfaWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdGllc0lkcy5pbmNsdWRlcyhhY3Rpdml0eUlkKSlcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBY3Rpdml0eShhY3Rpdml0eUlkKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRBY3Rpdml0eShhY3Rpdml0eUlkKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q2FydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrZWQnKTtcclxuICAgICAgICBidXR0b24ucXVlcnlTZWxlY3Rvcignc3ZnLmhlYXJ0JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhcnQtLWZpbGwtd2hpdGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q2FydCgpe1xyXG4gICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QucmVtb3ZlKCdjYXJ0X2Jhci0tdmlzaWJsZScpO1xyXG4gICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QuYWRkKCdjYXJ0X2Jhci0tdmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0QmFyOyIsImltcG9ydCB7IHNldENvb2tpZSwgZ2V0Q29va2llIH0gZnJvbSAnLi9fdXRpbHMnO1xyXG5cclxuY2xhc3MgQ29va2llc3tcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgLy9JZiB0aGUgY29va2llIHdhcyBzZXQsIHRoZSBkaWFsb2cgZG9lbnN0IGV4aXN0ISEgKHR3aWcgZGlkbnQgd3JpdGUgaXQpIGFuZCBKUyB0d3Jvd3MgYW4gZXJyb3JcclxuICAgICAgICB0aGlzLmFsbG93QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2tpZSAuY29va2llX19idG4gYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2tpZScpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29raWUtb3ZlcmxheScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vT25seSBpZiB0aGUgYnRuIGV4aXN0LlxyXG4gICAgICAgIGlmKHRoaXMuYWxsb3dCdG4pIFxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQoKXtcclxuICAgICAgICB0aGlzLmRpYWxvZygpO1xyXG4gICAgICAgIHRoaXMuYWxsb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFsbG93Q29va2llcy5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGxvd0Nvb2tpZXMoKXtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ2FsbG93IGNvb2tpZXMnKTtcclxuICAgICAgICBzZXRDb29raWUoJ2FsbG93JywgJ2FsbG93LWNvb2tpZXMnKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBkaWFsb2coKXtcclxuICAgICAgICBpZiAoZ2V0Q29va2llKCdhbGxvdy1jb29raWVzJykpXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKXtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnY29va2llLS1uby12aXNpYmxlJyk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2Nvb2tpZS1vdmVybGF5LS1uby12aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvb2tpZXM7IiwiaW1wb3J0IHtlYXNlRWxhc3RpY091dCwgZWFzZUVsYXN0aWNJbiwgZWFzZUJvdW5jZU91dH0gZnJvbSBcImQzLWVhc2VcIjtcclxuaW1wb3J0IFNlZ21lbnQgZnJvbSBcInNlZ21lbnQtanNcIjtcclxuaW1wb3J0IEhlYWRyb29tIGZyb20gJ2hlYWRyb29tLmpzJ1xyXG5cclxuY2xhc3MgTmF2QmFye1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcclxuICAgICAgICB0aGlzLm5hdmVnYXRpb25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2Jyk7XHJcblxyXG4gICAgICAgIHRoaXMucGF0aEEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnVyZ2VyX3BhdGhBJyk7XHJcbiAgICAgICAgdGhpcy5wYXRoQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXJfcGF0aEInKTtcclxuICAgICAgICB0aGlzLnBhdGhDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1cmdlcl9wYXRoQycpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWljb24td3JhcHBlcicpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtaWNvbi10cmlnZ2VyJyk7XHJcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuICAgICAgICB0aGlzLmJlZ2luQUMgPSA4MDtcclxuICAgICAgICB0aGlzLmVuZEFDID0gMzIwO1xyXG4gICAgICAgIHRoaXMuYmVnaW5CID0gODA7XHJcbiAgICAgICAgdGhpcy5lbmRCID0gMzIwO1xyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2VnbWVudEEgPSBuZXcgU2VnbWVudCh0aGlzLnBhdGhBLCB0aGlzLmJlZ2luQUMsIHRoaXMuZW5kQUMpO1xyXG4gICAgICAgIHRoaXMuc2VnbWVudEIgPSBuZXcgU2VnbWVudCh0aGlzLnBhdGhCLCB0aGlzLmJlZ2luQiwgdGhpcy5lbmRCKTtcclxuICAgICAgICB0aGlzLnNlZ21lbnRDID0gbmV3IFNlZ21lbnQodGhpcy5wYXRoQywgdGhpcy5iZWdpbkFDLCB0aGlzLmVuZEFDKTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgICAgICB0aGlzLmhlYWRyb29tSW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRyb29tSW5pdCgpXHJcbiAgICB7XHJcbiAgICAgICAgSGVhZHJvb20ub3B0aW9ucy5vblVucGluID0gdGhpcy5oaWRlTWVudVVuUGluLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIEhlYWRyb29tLm9wdGlvbnMudG9sZXJhbmNlID0ge1xyXG4gICAgICAgICAgICB1cDogMTAsXHJcbiAgICAgICAgICAgIGRvd246IDhcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgaGVhZHJvb20gPSBuZXcgSGVhZHJvb20odGhpcy5oZWFkZXIpO1xyXG4gICAgICAgIGhlYWRyb29tLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd09ySGlkZU1lbnUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3BlbilcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1lbnUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93T3JIaWRlTWVudSgpe1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3BlbilcclxuICAgICAgICAgICAgdGhpcy5oaWRlTWVudSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zaG93TWVudSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dNZW51KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZHJvb20tLXRvcCcpKXtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLS1waW5uZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW5BQyh0aGlzLnNlZ21lbnRBLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmluQih0aGlzLnNlZ21lbnRCLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmluQUModGhpcy5zZWdtZW50QywgdGhpcyk7XHJcblxyXG4gICAgICAgIC8qKioqKkFjdGl2ZSBtZW51IGNvbnRhaW5lciAqKi9cclxuICAgICAgICB0aGlzLm5hdmVnYXRpb25NZW51LmNsYXNzTGlzdC5hZGQoJ3N3aW5nLWluLXRvcC1iY2snKTtcclxuICAgICAgICB0aGlzLm5hdmVnYXRpb25NZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3N3aW5nLW91dC10b3AtYmNrJyk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTWVudVVuUGluKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKXtcclxuICAgICAgICAgICAgdGhpcy5vdXRBQyh0aGlzLnNlZ21lbnRBLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5vdXRCKHRoaXMuc2VnbWVudEIsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm91dEFDKHRoaXMuc2VnbWVudEMsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5uYXZlZ2F0aW9uTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzd2luZy1pbi10b3AtYmNrJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmF2ZWdhdGlvbk1lbnUuY2xhc3NMaXN0LmFkZCgnc3dpbmctb3V0LXRvcC1iY2snKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoaWRlTWVudSgpe1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRyb29tLS10b3AnKSl7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tcGlubmVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLm91dEFDKHRoaXMuc2VnbWVudEEsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm91dEIodGhpcy5zZWdtZW50QiwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMub3V0QUModGhpcy5zZWdtZW50QywgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5hdmVnYXRpb25NZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3N3aW5nLWluLXRvcC1iY2snKTtcclxuICAgICAgICAgICAgdGhpcy5uYXZlZ2F0aW9uTWVudS5jbGFzc0xpc3QuYWRkKCdzd2luZy1vdXQtdG9wLWJjaycpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGluQUMocywgdGhhdCkge1xyXG4gICAgICAgIHMuZHJhdygnODAlIC0gMjQwJywgJzgwJScsIDAuMywge1xyXG4gICAgICAgICAgICBkZWxheTogMC4xLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmluQUMyKHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5BQzIocykge1xyXG4gICAgICAgIHMuZHJhdygnMTAwJSAtIDU0NScsICcxMDAlIC0gMzA1JywgMC42LCB7XHJcbiAgICAgICAgICAgIGVhc2luZzogZWFzZUVsYXN0aWNPdXRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbkIocywgdGhhdCkge1xyXG4gICAgICAgIHMuZHJhdyh0aGlzLmJlZ2luQiAtIDYwLCB0aGlzLmVuZEIgKyA2MCwgMC4xLCB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQuaW5CMihzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluQjIocykge1xyXG4gICAgICAgIHMuZHJhdyh0aGlzLmJlZ2luQiArIDEyMCwgdGhpcy5lbmRCIC0gMTIwLCAwLjMsIHtcclxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlQm91bmNlT3V0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogT3V0IGFuaW1hdGlvbnMgKHRvIGJ1cmdlciBpY29uKSAqL1xyXG5cclxuICAgIG91dEFDKHMsIHRoYXQpIHtcclxuICAgICAgICBzLmRyYXcoJzkwJSAtIDI0MCcsICc5MCUnLCAwLjEsIHtcclxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlRWxhc3RpY0luLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm91dEFDMihzLCB0aGF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG91dEFDMihzLCB0aGF0KSB7XHJcbiAgICAgICAgcy5kcmF3KCcyMCUgLSAyNDAnLCAnMjAlJywgMC4zLCB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQub3V0QUMzKHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0QUMzKHMpIHtcclxuICAgICAgICBzLmRyYXcodGhpcy5iZWdpbkFDLCB0aGlzLmVuZEFDLCAwLjcsIHtcclxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlRWxhc3RpY091dFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG91dEIocykge1xyXG4gICAgICAgIHMuZHJhdyh0aGlzLmJlZ2luQiwgdGhpcy5lbmRCLCAwLjcsIHtcclxuICAgICAgICAgICAgZGVsYXk6IDAuMSxcclxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlRWxhc3RpY091dFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZSh2YWx1ZSwgbmFtZT0ncHJvZHVjdHNfY2FydCcgLCBkYXlzPTMpIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSsoZGF5cyoyNCo2MCo2MCoxMDAwKSk7XHJcbiAgICBsZXQgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiK2RhdGUudG9HTVRTdHJpbmcgKCk7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArXHJcbiAgICAgICAgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICBsZXQgY0FyciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgZm9yKGxldCBpPTA7aSA8IGNBcnIubGVuZ3RoO2krKykge1xyXG4gICAgICAgIGxldCBjb29raWUgPSBjQXJyW2ldLnNwbGl0KFwiPVwiLDIpO1xyXG4gICAgICAgIGNvb2tpZVswXSA9IGNvb2tpZVswXS5yZXBsYWNlKC9eXFxzKy8sXCJcIik7XHJcbiAgICAgICAgaWYgKGNvb2tpZVswXSA9PT0gbmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIGNvb2tpZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=