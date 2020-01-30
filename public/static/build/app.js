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
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_1__);
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
          button.querySelector('svg.heart').classList.add('heart--fill-white');
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
      image.setAttribute('src', activity.imageSmall);
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
      if (this.activitiesIds.length === 0) this.cartBar.classList.add('cart_bar--initial');
      var selectedHeart = document.querySelector('div[data-activity_id="' + activityId + '"]');

      if (selectedHeart) {
        selectedHeart.classList.remove('checked');
        selectedHeart.querySelector('svg').classList.remove('heart--fill-white');
      }

      this.cartBarActivitiesItemsContainer.querySelector('#activityItem_' + activityId).remove();
      this.cartBarActivitiesAmount.innerHTML = this.activitiesIds.length.toString();
    }
  }, {
    key: "addActivity",
    value: function addActivity(activityId) {
      this.cartBar.classList.remove('cart_bar--initial');
      this.cartBar.classList.remove('cart_bar--visible');
      this.activitiesIds.push(activityId);
      this.fetchActivity(activityId);
      Object(_utils__WEBPACK_IMPORTED_MODULE_13__["setCookie"])(this.activitiesIds.toString());
      var selectedHeart = document.querySelector('div[data-activity_id="' + activityId + '"]');

      if (selectedHeart) {
        selectedHeart.classList.add('checked');
        selectedHeart.querySelector('svg').classList.add('heart--fill-white');
      }

      this.cartBarActivitiesAmount.innerHTML = this.activitiesIds.length.toString();
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

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/styles/kraken.scss":
/*!***********************************!*\
  !*** ./assets/styles/kraken.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/scripts/app.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~app~contact","vendors~activities~app","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX2NhcnRCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX25hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2dsb2JhbC9fdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2tyYWtlbi5zY3NzIl0sIm5hbWVzIjpbIlNtb290aFNjcm9sbCIsInNwZWVkIiwic3BlZWRBc0R1cmF0aW9uIiwiTmF2QmFyIiwiQ2FydEJhciIsIkNvb2tpZXMiLCJjYXJ0QmFyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmV0Y2hVcmwiLCJhY3Rpdml0aWVzSWRzIiwiY2FydEJhckFjdGl2aXRpZXNJdGVtc0NvbnRhaW5lciIsImNhcnRCYXJBY3Rpdml0aWVzSXRlbXNQcm90b3R5cGUiLCJjYXJ0QmFyQWN0aXZpdGllc0Ftb3VudCIsImJ1dHRvbnNBZGRBY3Rpdml0eSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY3Rpdml0aWVzRmlsdGVyQ29udGFpbmVyIiwibG9hZGluZ0FjdGl2aXRpZXNGcm9tQ29va2llIiwiZXZlbnRzIiwiYWN0aXZpdGllc0Nvb2tpZSIsImdldENvb2tpZSIsIl9hY3Rpdml0aWVzSWRzIiwic3BsaXQiLCJmb3JFYWNoIiwiYWN0aXZpdHlJZCIsImFkZEFjdGl2aXR5IiwiYnV0dG9uIiwiZ2V0QXR0cmlidXRlIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkT3JSZW1vdmVBY3Rpdml0eSIsImJpbmQiLCJlbGVtZW50IiwiYWN0aXZpdHkiLCJ0YXJnZXQiLCJidG4iLCJhY3Rpdml0eUl0ZW0iLCJfcmVtb3ZlQWN0aXZpdHkiLCJjbG9uZU5vZGUiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImltYWdlIiwiaW1hZ2VTbWFsbCIsIm5hbWUiLCJpbm5lckhUTUwiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJhcHBlbmRDaGlsZCIsInVybCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YUFjdGl2aXR5IiwiZGF0YSIsIm1ha2VDYXJ0QmFyQWN0aXZpdHlJdGVtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudE5vZGUiLCJyZW1vdmVBY3Rpdml0eSIsImZpbHRlciIsImFjdGl2aXR5SWRPdGhlciIsInNldENvb2tpZSIsInRvU3RyaW5nIiwic2VsZWN0ZWRIZWFydCIsInJlbW92ZSIsInB1c2giLCJmZXRjaEFjdGl2aXR5IiwiZSIsInNob3dDYXJ0IiwiYWxsb3dCdG4iLCJtZXNzYWdlIiwib3ZlcmxheSIsImRpYWxvZyIsImFsbG93Q29va2llcyIsImNvbnNvbGUiLCJpbmZvIiwiaGlkZSIsImhlYWRlciIsIm5hdmVnYXRpb25NZW51IiwicGF0aEEiLCJwYXRoQiIsInBhdGhDIiwid3JhcHBlciIsIm1haW4iLCJiZWdpbkFDIiwiZW5kQUMiLCJiZWdpbkIiLCJlbmRCIiwiaXNPcGVuIiwic2VnbWVudEEiLCJTZWdtZW50Iiwic2VnbWVudEIiLCJzZWdtZW50QyIsImhlYWRyb29tSW5pdCIsIkhlYWRyb29tIiwib3B0aW9ucyIsIm9uVW5waW4iLCJoaWRlTWVudVVuUGluIiwidG9sZXJhbmNlIiwidXAiLCJkb3duIiwiaGVhZHJvb20iLCJpbml0Iiwic2hvd09ySGlkZU1lbnUiLCJoaWRlTWVudSIsInNob3dNZW51IiwiY29udGFpbnMiLCJpbkFDIiwiaW5CIiwib3V0QUMiLCJvdXRCIiwicyIsInRoYXQiLCJkcmF3IiwiZGVsYXkiLCJjYWxsYmFjayIsImluQUMyIiwiZWFzaW5nIiwiZWFzZUVsYXN0aWNPdXQiLCJpbkIyIiwiZWFzZUJvdW5jZU91dCIsImVhc2VFbGFzdGljSW4iLCJvdXRBQzIiLCJvdXRBQzMiLCJ2YWx1ZSIsImRheXMiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiZXhwaXJlcyIsInRvR01UU3RyaW5nIiwiY29va2llIiwiY0FyciIsImkiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxvREFBSixDQUFpQixjQUFqQixFQUFpQztBQUM3QkMsT0FBSyxFQUFFLEdBRHNCO0FBRTdCQyxpQkFBZSxFQUFFO0FBRlksQ0FBakM7QUFJQSxJQUFJQyw4REFBSjtBQUNBLElBQUlDLCtEQUFKO0FBQ0EsSUFBSUMsK0RBQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBOztJQUVNRCxPOzs7QUFDRixxQkFBYTtBQUFBOztBQUNULFNBQUtFLE9BQUwsR0FBZUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWY7QUFDQSxRQUFJLEtBQUtGLE9BQUwsSUFBZ0IsSUFBcEIsRUFDSTtBQUVKLFNBQUtHLFFBQUwsR0FBZ0IsdUJBQWhCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixFQUFyQjtBQUVBLFNBQUtDLCtCQUFMLEdBQXVDSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0NBQXZCLENBQXZDO0FBQ0EsU0FBS0ksK0JBQUwsR0FBdUNMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1REFBdkIsQ0FBdkM7QUFDQSxTQUFLSyx1QkFBTCxHQUErQk4sUUFBUSxDQUFDQyxhQUFULENBQXVCLGlDQUF2QixDQUEvQjtBQUVBLFNBQUtNLGtCQUFMLEdBQTBCUCxRQUFRLENBQUNRLGdC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QUNqQkQsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMva3Jha2VuLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG5pbXBvcnQgJ2xhenlzaXplcy9wbHVnaW5zL3VudmVpbGhvb2tzL2xzLnVudmVpbGhvb2tzJztcclxuaW1wb3J0IFNtb290aFNjcm9sbCBmcm9tICdzbW9vdGgtc2Nyb2xsJztcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9tb2R1bGVzL2dsb2JhbC9fbmF2QmFyXCI7XHJcbmltcG9ydCBDYXJ0QmFyIGZyb20gJy4vbW9kdWxlcy9nbG9iYWwvX2NhcnRCYXInO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICcuL21vZHVsZXMvZ2xvYmFsL19jb29raWVzJztcclxuXHJcbm5ldyBTbW9vdGhTY3JvbGwoJ2FbaHJlZio9XCIjXCJdJywge1xyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNwZWVkQXNEdXJhdGlvbjogdHJ1ZVxyXG59KTtcclxubmV3IE5hdkJhcigpO1xyXG5uZXcgQ2FydEJhcigpO1xyXG5uZXcgQ29va2llcygpO1xyXG5cclxuIiwiaW1wb3J0IHtnZXRDb29raWUsIHNldENvb2tpZX0gZnJvbSAnLi9fdXRpbHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgQ2FydEJhcntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfYmFyJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FydEJhciA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuZmV0Y2hVcmwgPSAnL2FjdGl2aXRpZXNBcGlHZXRCeUlkJztcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNJZHMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyQWN0aXZpdGllc0l0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfYmFyX19jb250ZW50X19hY3Rpdml0aWVzJyk7XHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyQWN0aXZpdGllc0l0ZW1zUHJvdG90eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfYmFyX19jb250ZW50X19hY3Rpdml0aWVzX19pdGVtX19wcm90b3R5cGUgPiBkaXYnKTtcclxuICAgICAgICB0aGlzLmNhcnRCYXJBY3Rpdml0aWVzQW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfYmFyIC5jYXJ0X2Jhcl9fdGl0bGUgc3BhbicpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbnNBZGRBY3Rpdml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLWFjdGl2aXR5X2lkXScpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0ZpbHRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19saXN0X19jb250YWluZXJfX2ZpbHRlcl9zZWFyY2gnKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nQWN0aXZpdGllc0Zyb21Db29raWUoKTtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRpbmdBY3Rpdml0aWVzRnJvbUNvb2tpZSgpe1xyXG4gICAgICAgIGxldCBhY3Rpdml0aWVzQ29va2llID0gZ2V0Q29va2llKCdwcm9kdWN0c19jYXJ0Jyk7XHJcbiAgICAgICAgaWYgKCFhY3Rpdml0aWVzQ29va2llKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBfYWN0aXZpdGllc0lkcyA9IGFjdGl2aXRpZXNDb29raWVbMV0gIT09ICcnID8gYWN0aXZpdGllc0Nvb2tpZVsxXS5zcGxpdCgnLCcpIDogW107XHJcblxyXG4gICAgICAgIF9hY3Rpdml0aWVzSWRzLmZvckVhY2goKGFjdGl2aXR5SWQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQWN0aXZpdHkoYWN0aXZpdHlJZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uc0FkZEFjdGl2aXR5LmZvckVhY2goKGJ1dHRvbik9PntcclxuICAgICAgICAgICAgbGV0IGFjdGl2aXR5SWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2aXR5X2lkJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2aXRpZXNJZHMuaW5jbHVkZXMoYWN0aXZpdHlJZCkpe1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ3N2Zy5oZWFydCcpLmNsYXNzTGlzdC5hZGQoJ2hlYXJ0LS1maWxsLXdoaXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc0FkZEFjdGl2aXR5LmZvckVhY2goKGJ1dHRvbik9PntcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRPclJlbW92ZUFjdGl2aXR5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0aWVzRmlsdGVyQ29udGFpbmVyICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2aXRpZXNGaWx0ZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignRE9NTm9kZUluc2VydGVkJywgKGVsZW1lbnQpPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aXZpdHkgPSBlbGVtZW50LnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBhY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdHlfX2NvbnRlbnRfX2FjdGlvbnNfX2FkZCcpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRPclJlbW92ZUFjdGl2aXR5LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyQWN0aXZpdGllc0l0ZW1zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVJbnNlcnRlZCcsIChlbGVtZW50KT0+e1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZpdHlJdGVtID0gZWxlbWVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGFjdGl2aXR5SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXJfX2NvbnRlbnRfX2FjdGl2aXRpZXNfX2l0ZW1fX2Ryb3AnKVxyXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fcmVtb3ZlQWN0aXZpdHkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZUNhcnRCYXJBY3Rpdml0eUl0ZW0oYWN0aXZpdHkpe1xyXG4gICAgICAgIGxldCBhY3Rpdml0eUl0ZW0gPSB0aGlzLmNhcnRCYXJBY3Rpdml0aWVzSXRlbXNQcm90b3R5cGUuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgICAgICBhY3Rpdml0eUl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsICdhY3Rpdml0eUl0ZW1fJythY3Rpdml0eS5pZCk7XHJcbiAgICAgICAgbGV0IGltYWdlID0gYWN0aXZpdHlJdGVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgYWN0aXZpdHkuaW1hZ2VTbWFsbCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBhY3Rpdml0eUl0ZW0ucXVlcnlTZWxlY3RvcignaDUnKTtcclxuICAgICAgICBuYW1lLmlubmVySFRNTCA9IGFjdGl2aXR5Lm5hbWUubGVuZ3RoIDwgMjAgPyBhY3Rpdml0eS5uYW1lIDogYWN0aXZpdHkubmFtZS5zdWJzdHJpbmcoMCwgMjApICsgJy4uLic7XHJcblxyXG4gICAgICAgIHRoaXMuY2FydEJhckFjdGl2aXRpZXNJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpdml0eUl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoQWN0aXZpdHkoYWN0aXZpdHlJZCl7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZmV0Y2hVcmwrJy8nK2FjdGl2aXR5SWQ7XHJcblxyXG4gICAgICAgIGF4aW9zLmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhQWN0aXZpdHkgPSByZXNwb25zZS5kYXRhLmFjdGl2aXR5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWtlQ2FydEJhckFjdGl2aXR5SXRlbShkYXRhQWN0aXZpdHkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVtb3ZlQWN0aXZpdHkoZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgbGV0IGFjdGl2aXR5SXRlbSA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgICBsZXQgYWN0aXZpdHlJZCA9IGFjdGl2aXR5SXRlbS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICAgYWN0aXZpdHlJZCA9IGFjdGl2aXR5SWQuc3Vic3RyaW5nKDEzLCBhY3Rpdml0eUlkLmxlbmd0aCApO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQWN0aXZpdHkoYWN0aXZpdHlJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWN0aXZpdHkoYWN0aXZpdHlJZCl7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzSWRzID0gdGhpcy5hY3Rpdml0aWVzSWRzLmZpbHRlcigoYWN0aXZpdHlJZE90aGVyKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gYWN0aXZpdHlJZE90aGVyICE9PSBhY3Rpdml0eUlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0Q29va2llKHRoaXMuYWN0aXZpdGllc0lkcy50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdGllc0lkcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QuYWRkKCdjYXJ0X2Jhci0taW5pdGlhbCcpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkSGVhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1hY3Rpdml0eV9pZD1cIicrYWN0aXZpdHlJZCsnXCJdJyk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkSGVhcnQpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRIZWFydC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkSGVhcnQucXVlcnlTZWxlY3Rvcignc3ZnJykuY2xhc3NMaXN0LnJlbW92ZSgnaGVhcnQtLWZpbGwtd2hpdGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FydEJhckFjdGl2aXRpZXNJdGVtc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjYWN0aXZpdHlJdGVtXycrYWN0aXZpdHlJZCkucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyQWN0aXZpdGllc0Ftb3VudC5pbm5lckhUTUwgPSB0aGlzLmFjdGl2aXRpZXNJZHMubGVuZ3RoLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWN0aXZpdHkoYWN0aXZpdHlJZCl7XHJcblxyXG4gICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QucmVtb3ZlKCdjYXJ0X2Jhci0taW5pdGlhbCcpO1xyXG5cclxuICAgICAgICB0aGlzLmNhcnRCYXIuY2xhc3NMaXN0LnJlbW92ZSgnY2FydF9iYXItLXZpc2libGUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzSWRzLnB1c2goYWN0aXZpdHlJZCk7XHJcbiAgICAgICAgdGhpcy5mZXRjaEFjdGl2aXR5KGFjdGl2aXR5SWQpO1xyXG4gICAgICAgIHNldENvb2tpZSh0aGlzLmFjdGl2aXRpZXNJZHMudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGxldCBzZWxlY3RlZEhlYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtYWN0aXZpdHlfaWQ9XCInK2FjdGl2aXR5SWQrJ1wiXScpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEhlYXJ0KSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkSGVhcnQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZEhlYXJ0LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpLmNsYXNzTGlzdC5hZGQoJ2hlYXJ0LS1maWxsLXdoaXRlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhcnRCYXJBY3Rpdml0aWVzQW1vdW50LmlubmVySFRNTCA9IHRoaXMuYWN0aXZpdGllc0lkcy5sZW5ndGgudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRPclJlbW92ZUFjdGl2aXR5KGUpe1xyXG4gICAgICAgIGxldCBidXR0b24gPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2aXR5SWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2aXR5X2lkJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXRpZXNJZHMuaW5jbHVkZXMoYWN0aXZpdHlJZCkpXHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWN0aXZpdHkoYWN0aXZpdHlJZCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQWN0aXZpdHkoYWN0aXZpdHlJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NhcnQoKXtcclxuICAgICAgICB0aGlzLmNhcnRCYXIuY2xhc3NMaXN0LnJlbW92ZSgnY2FydF9iYXItLXZpc2libGUnKTtcclxuICAgICAgICB0aGlzLmNhcnRCYXIuY2xhc3NMaXN0LmFkZCgnY2FydF9iYXItLXZpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydEJhcjsiLCJpbXBvcnQgeyBzZXRDb29raWUsIGdldENvb2tpZSB9IGZyb20gJy4vX3V0aWxzJztcclxuXHJcbmNsYXNzIENvb2tpZXN7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIC8vSWYgdGhlIGNvb2tpZSB3YXMgc2V0LCB0aGUgZGlhbG9nIGRvZW5zdCBleGlzdCEhICh0d2lnIGRpZG50IHdyaXRlIGl0KSBhbmQgSlMgdHdyb3dzIGFuIGVycm9yXHJcbiAgICAgICAgdGhpcy5hbGxvd0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29raWUgLmNvb2tpZV9fYnRuIGJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29raWUnKTtcclxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29va2llLW92ZXJsYXknKTtcclxuICAgICAgICBcclxuICAgICAgICAvL09ubHkgaWYgdGhlIGJ0biBleGlzdC5cclxuICAgICAgICBpZih0aGlzLmFsbG93QnRuKSBcclxuICAgICAgICAgICAgdGhpcy5ldmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50KCl7XHJcbiAgICAgICAgdGhpcy5kaWFsb2coKTtcclxuICAgICAgICB0aGlzLmFsbG93QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hbGxvd0Nvb2tpZXMuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWxsb3dDb29raWVzKCl7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdhbGxvdyBjb29raWVzJyk7XHJcbiAgICAgICAgc2V0Q29va2llKCdhbGxvdycsICdhbGxvdy1jb29raWVzJyk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlhbG9nKCl7XHJcbiAgICAgICAgaWYgKGdldENvb2tpZSgnYWxsb3ctY29va2llcycpKVxyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCl7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Nvb2tpZS0tbm8tdmlzaWJsZScpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdjb29raWUtb3ZlcmxheS0tbm8tdmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb29raWVzOyIsImltcG9ydCB7ZWFzZUVsYXN0aWNPdXQsIGVhc2VFbGFzdGljSW4sIGVhc2VCb3VuY2VPdXR9IGZyb20gXCJkMy1lYXNlXCI7XHJcbmltcG9ydCBTZWdtZW50IGZyb20gXCJzZWdtZW50LWpzXCI7XHJcbmltcG9ydCBIZWFkcm9vbSBmcm9tICdoZWFkcm9vbS5qcydcclxuXHJcbmNsYXNzIE5hdkJhcntcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcbiAgICAgICAgdGhpcy5uYXZlZ2F0aW9uTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdicpO1xyXG5cclxuICAgICAgICB0aGlzLnBhdGhBID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1cmdlcl9wYXRoQScpO1xyXG4gICAgICAgIHRoaXMucGF0aEIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnVyZ2VyX3BhdGhCJyk7XHJcbiAgICAgICAgdGhpcy5wYXRoQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXJfcGF0aEMnKTtcclxuICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1pY29uLXdyYXBwZXInKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWljb24tdHJpZ2dlcicpO1xyXG4gICAgICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuXHJcbiAgICAgICAgdGhpcy5iZWdpbkFDID0gODA7XHJcbiAgICAgICAgdGhpcy5lbmRBQyA9IDMyMDtcclxuICAgICAgICB0aGlzLmJlZ2luQiA9IDgwO1xyXG4gICAgICAgIHRoaXMuZW5kQiA9IDMyMDtcclxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnNlZ21lbnRBID0gbmV3IFNlZ21lbnQodGhpcy5wYXRoQSwgdGhpcy5iZWdpbkFDLCB0aGlzLmVuZEFDKTtcclxuICAgICAgICB0aGlzLnNlZ21lbnRCID0gbmV3IFNlZ21lbnQodGhpcy5wYXRoQiwgdGhpcy5iZWdpbkIsIHRoaXMuZW5kQik7XHJcbiAgICAgICAgdGhpcy5zZWdtZW50QyA9IG5ldyBTZWdtZW50KHRoaXMucGF0aEMsIHRoaXMuYmVnaW5BQywgdGhpcy5lbmRBQyk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5oZWFkcm9vbUluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkcm9vbUluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIEhlYWRyb29tLm9wdGlvbnMub25VbnBpbiA9IHRoaXMuaGlkZU1lbnVVblBpbi5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICBIZWFkcm9vbS5vcHRpb25zLnRvbGVyYW5jZSA9IHtcclxuICAgICAgICAgICAgdXA6IDEwLFxyXG4gICAgICAgICAgICBkb3duOiA4XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRyb29tID0gbmV3IEhlYWRyb29tKHRoaXMuaGVhZGVyKTtcclxuICAgICAgICBoZWFkcm9vbS5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dPckhpZGVNZW51LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLm1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09wZW4pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVNZW51KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd09ySGlkZU1lbnUoKXtcclxuICAgICAgICBpZiAodGhpcy5pc09wZW4pXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZU1lbnUoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01lbnUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93TWVudSgpe1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRyb29tLS10b3AnKSl7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci0tcGlubmVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmluQUModGhpcy5zZWdtZW50QSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbkIodGhpcy5zZWdtZW50QiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbkFDKHRoaXMuc2VnbWVudEMsIHRoaXMpO1xyXG5cclxuICAgICAgICAvKioqKipBY3RpdmUgbWVudSBjb250YWluZXIgKiovXHJcbiAgICAgICAgdGhpcy5uYXZlZ2F0aW9uTWVudS5jbGFzc0xpc3QuYWRkKCdzd2luZy1pbi10b3AtYmNrJyk7XHJcbiAgICAgICAgdGhpcy5uYXZlZ2F0aW9uTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzd2luZy1vdXQtdG9wLWJjaycpO1xyXG5cclxuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU1lbnVVblBpbigpe1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbil7XHJcbiAgICAgICAgICAgIHRoaXMub3V0QUModGhpcy5zZWdtZW50QSwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMub3V0Qih0aGlzLnNlZ21lbnRCLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5vdXRBQyh0aGlzLnNlZ21lbnRDLCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubmF2ZWdhdGlvbk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc3dpbmctaW4tdG9wLWJjaycpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdmVnYXRpb25NZW51LmNsYXNzTGlzdC5hZGQoJ3N3aW5nLW91dC10b3AtYmNrJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZU1lbnUoKXtcclxuICAgICAgICBpZiAodGhpcy5oZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkcm9vbS0tdG9wJykpe1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItLXBpbm5lZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5pc09wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRBQyh0aGlzLnNlZ21lbnRBLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5vdXRCKHRoaXMuc2VnbWVudEIsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm91dEFDKHRoaXMuc2VnbWVudEMsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5uYXZlZ2F0aW9uTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzd2luZy1pbi10b3AtYmNrJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmF2ZWdhdGlvbk1lbnUuY2xhc3NMaXN0LmFkZCgnc3dpbmctb3V0LXRvcC1iY2snKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpbkFDKHMsIHRoYXQpIHtcclxuICAgICAgICBzLmRyYXcoJzgwJSAtIDI0MCcsICc4MCUnLCAwLjMsIHtcclxuICAgICAgICAgICAgZGVsYXk6IDAuMSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5pbkFDMihzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluQUMyKHMpIHtcclxuICAgICAgICBzLmRyYXcoJzEwMCUgLSA1NDUnLCAnMTAwJSAtIDMwNScsIDAuNiwge1xyXG4gICAgICAgICAgICBlYXNpbmc6IGVhc2VFbGFzdGljT3V0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5CKHMsIHRoYXQpIHtcclxuICAgICAgICBzLmRyYXcodGhpcy5iZWdpbkIgLSA2MCwgdGhpcy5lbmRCICsgNjAsIDAuMSwge1xyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmluQjIocyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbkIyKHMpIHtcclxuICAgICAgICBzLmRyYXcodGhpcy5iZWdpbkIgKyAxMjAsIHRoaXMuZW5kQiAtIDEyMCwgMC4zLCB7XHJcbiAgICAgICAgICAgIGVhc2luZzogZWFzZUJvdW5jZU91dFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE91dCBhbmltYXRpb25zICh0byBidXJnZXIgaWNvbikgKi9cclxuXHJcbiAgICBvdXRBQyhzLCB0aGF0KSB7XHJcbiAgICAgICAgcy5kcmF3KCc5MCUgLSAyNDAnLCAnOTAlJywgMC4xLCB7XHJcbiAgICAgICAgICAgIGVhc2luZzogZWFzZUVsYXN0aWNJbixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5vdXRBQzIocywgdGhhdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRBQzIocywgdGhhdCkge1xyXG4gICAgICAgIHMuZHJhdygnMjAlIC0gMjQwJywgJzIwJScsIDAuMywge1xyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm91dEFDMyhzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG91dEFDMyhzKSB7XHJcbiAgICAgICAgcy5kcmF3KHRoaXMuYmVnaW5BQywgdGhpcy5lbmRBQywgMC43LCB7XHJcbiAgICAgICAgICAgIGVhc2luZzogZWFzZUVsYXN0aWNPdXRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRCKHMpIHtcclxuICAgICAgICBzLmRyYXcodGhpcy5iZWdpbkIsIHRoaXMuZW5kQiwgMC43LCB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAwLjEsXHJcbiAgICAgICAgICAgIGVhc2luZzogZWFzZUVsYXN0aWNPdXRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUodmFsdWUsIG5hbWU9J3Byb2R1Y3RzX2NhcnQnICwgZGF5cz0zKSB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkrKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xyXG4gICAgbGV0IGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIitkYXRlLnRvR01UU3RyaW5nICgpO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgK1xyXG4gICAgICAgIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xyXG4gICAgbGV0IGNBcnIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuICAgIGZvcihsZXQgaT0wO2kgPCBjQXJyLmxlbmd0aDtpKyspIHtcclxuICAgICAgICBsZXQgY29va2llID0gY0FycltpXS5zcGxpdChcIj1cIiwyKTtcclxuICAgICAgICBjb29raWVbMF0gPSBjb29raWVbMF0ucmVwbGFjZSgvXlxccysvLFwiXCIpO1xyXG4gICAgICAgIGlmIChjb29raWVbMF0gPT09IG5hbWUpXHJcbiAgICAgICAgICAgIHJldHVybiBjb29raWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9