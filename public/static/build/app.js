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
/*! exports provided: setCookie, getCookie, getBoundingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundingBox", function() { return getBoundingBox; });
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__);





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
function getBoundingBox(lats, logs) {
  lats.sort(function (a, b) {
    return a <= b ? -1 : 1;
  });
  logs.sort(function (a, b) {
    return a <= b ? -1 : 1;
  });
  return [[lats[0], logs[0]], [lats[lats.length - 1], logs[logs.length - 1]]];
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

},[["./assets/scripts/app.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~app~contact","vendors~activities~activity~app","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX2NhcnRCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX25hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2dsb2JhbC9fdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2tyYWtlbi5zY3NzIl0sIm5hbWVzIjpbIlNtb290aFNjcm9sbCIsInNwZWVkIiwic3BlZWRBc0R1cmF0aW9uIiwiTmF2QmFyIiwiQ2FydEJhciIsIkNvb2tpZXMiLCJjYXJ0QmFyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmV0Y2hVcmwiLCJhY3Rpdml0aWVzSWRzIiwiY2FydEJhckFjdGl2aXRpZXNJdGVtc0NvbnRhaW5lciIsImNhcnRCYXJBY3Rpdml0aWVzSXRlbXNQcm90b3R5cGUiLCJjYXJ0QmFyQWN0aXZpdGllc0Ftb3VudCIsImJ1dHRvbnNBZGRBY3Rpdml0eSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY3Rpdml0aWVzRmlsdGVyQ29udGFpbmVyIiwibG9hZGluZ0FjdGl2aXRpZXNGcm9tQ29va2llIiwiZXZlbnRzIiwiYWN0aXZpdGllc0Nvb2tpZSIsImdldENvb2tpZSIsIl9hY3Rpdml0aWVzSWRzIiwic3BsaXQiLCJmb3JFYWNoIiwiYWN0aXZpdHlJZCIsImFkZEFjdGl2aXR5IiwiYnV0dG9uIiwiZ2V0QXR0cmlidXRlIiwiaW5jbHVkZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkT3JSZW1vdmVBY3Rpdml0eSIsImJpbmQiLCJlbGVtZW50IiwiYWN0aXZpdHkiLCJ0YXJnZXQiLCJidG4iLCJhY3Rpdml0eUl0ZW0iLCJfcmVtb3ZlQWN0aXZpdHkiLCJjbG9uZU5vZGUiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImltYWdlIiwiaW1hZ2VTbWFsbCIsIm5hbWUiLCJpbm5lckhUTUwiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJhcHBlbmRDaGlsZCIsInVybCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YUFjdGl2aXR5IiwiZGF0YSIsIm1ha2VDYXJ0QmFyQWN0aXZpdHlJdGVtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudE5vZGUiLCJyZW1vdmVBY3Rpdml0eSIsImZpbHRlciIsImFjdGl2aXR5SWRPdGhlciIsInNldENvb2tpZSIsInRvU3RyaW5nIiwic2VsZWN0ZWRIZWFydCIsInJlbW92ZSIsInB1c2giLCJmZXRjaEFjdGl2aXR5IiwiZSIsInNob3dDYXJ0IiwiYWxsb3dCdG4iLCJtZXNzYWdlIiwib3ZlcmxheSIsImRpYWxvZyIsImFsbG93Q29va2llcyIsImNvbnNvbGUiLCJpbmZvIiwiaGlkZSIsImhlYWRlciIsIm5hdmVnYXRpb25NZW51IiwicGF0aEEiLCJwYXRoQiIsInBhdGhDIiwid3JhcHBlciIsIm1haW4iLCJiZWdpbkFDIiwiZW5kQUMiLCJiZWdpbkIiLCJlbmRCIiwiaXNPcGVuIiwic2VnbWVudEEiLCJTZWdtZW50Iiwic2VnbWVudEIiLCJzZWdtZW50QyIsImhlYWRyb29tSW5pdCIsIkhlYWRyb29tIiwib3B0aW9ucyIsIm9uVW5waW4iLCJoaWRlTWVudVVuUGluIiwidG9sZXJhbmNlIiwidXAiLCJkb3duIiwiaGVhZHJvb20iLCJpbml0Iiwic2hvd09ySGlkZU1lbnUiLCJoaWRlTWVudSIsInNob3dNZW51IiwiY29udGFpbnMiLCJpbkFDIiwiaW5CIiwib3V0QUMiLCJvdXRCIiwicyIsInRoYXQiLCJkcmF3IiwiZGVsYXkiLCJjYWxsYmFjayIsImluQUMyIiwiZWFzaW5nIiwiZWFzZUVsYXN0aWNPdXQiLCJpbkIyIiwiZWFzZUJvdW5jZU91dCIsImVhc2VFbGFzdGljSW4iLCJvdXRBQzIiLCJvdXRBQzMiLCJ2YWx1ZSIsImRheXMiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiZXhwaXJlcyIsInRvR01UU3RyaW5nIiwiY29va2llIiwiY0FyciIsImkiLCJyZXBsYWNlIiwiZ2V0Qm91bmRpbmdCb3giLCJsYXRzIiwibG9ncyIsInNvcnQiLCJhIiwiYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsb0RBQUosQ0FBaUIsY0FBakIsRUFBaUM7QUFDN0JDLE9BQUssRUFBRSxHQURzQjtBQUU3QkMsaUJBQWUsRUFBRTtBQUZZLENBQWpDO0FBSUEsSUFBSUMsOERBQUo7QUFDQSxJQUFJQywrREFBSjtBQUNBLElBQUlDLCtEQUFKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTs7SUFFTUQsTzs7O0FBQ0YscUJBQWE7QUFBQTs7QUFDVCxTQUFLRSxPQUFMLEdBQWVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFmO0FBQ0EsUUFBSSxLQUFLRixPQUFMLElBQWdCLElBQXBCLEVBQ0k7QUFFSixTQUFLRyxRQUFMLEdBQWdCLHVCQUFoQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsRUFBckI7QUFFQSxTQUFLQywrQkFBTCxHQUF1Q0osUUFBUSxDQUFDQyxhQUFULENBQXVCLGdDQUF2QixDQUF2QztBQUNBLFNBQUtJLCtCQUFMLEdBQXVDTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdURBQXZCLENBQXZDO0FBQ0EsU0FBS0ssdUJBQUwsR0FBK0JOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQ0FB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T0FBTzBGLE1BQVA7QUFDUDs7QUFDRCxTQUFPLEtBQVA7QUFDSDtBQUVNLFNBQVNJLGNBQVQsQ0FBd0JDLElBQXhCLEVBQThCQyxJQUE5QixFQUFtQztBQUN0Q0QsTUFBSSxDQUFDRSxJQUFMLENBQVUsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFILEVBQVM7QUFBRSxXQUFPRCxDQUFDLElBQUlDLENBQUwsR0FBUyxDQUFDLENBQVYsR0FBYyxDQUFyQjtBQUF3QixHQUE3QztBQUNBSCxNQUFJLENBQUNDLElBQUwsQ0FBVSxVQUFDQyxDQUFELEVBQUdDLENBQUgsRUFBUztBQUFFLFdBQU9ELENBQUMsSUFBSUMsQ0FBTCxHQUFTLENBQUMsQ0FBVixHQUFjLENBQXJCO0FBQXdCLEdBQTdDO0FBRUEsU0FBTyxDQUFDLENBQUNKLElBQUksQ0FBQyxDQUFELENBQUwsRUFBU0MsSUFBSSxDQUFDLENBQUQsQ0FBYixDQUFELEVBQ0gsQ0FBQ0QsSUFBSSxDQUFDQSxJQUFJLENBQUM3RixNQUFMLEdBQVksQ0FBYixDQUFMLEVBQXNCOEYsSUFBSSxDQUFDQSxJQUFJLENBQUM5RixNQUFMLEdBQVksQ0FBYixDQUExQixDQURHLENBQVA7QUFFSCxDOzs7Ozs7Ozs7OztBQ3pCRCx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9rcmFrZW4uc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbmltcG9ydCAnbGF6eXNpemVzL3BsdWdpbnMvdW52ZWlsaG9va3MvbHMudW52ZWlsaG9va3MnO1xyXG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJ3Ntb290aC1zY3JvbGwnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL21vZHVsZXMvZ2xvYmFsL19uYXZCYXJcIjtcclxuaW1wb3J0IENhcnRCYXIgZnJvbSAnLi9tb2R1bGVzL2dsb2JhbC9fY2FydEJhcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJy4vbW9kdWxlcy9nbG9iYWwvX2Nvb2tpZXMnO1xyXG5cclxubmV3IFNtb290aFNjcm9sbCgnYVtocmVmKj1cIiNcIl0nLCB7XHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc3BlZWRBc0R1cmF0aW9uOiB0cnVlXHJcbn0pO1xyXG5uZXcgTmF2QmFyKCk7XHJcbm5ldyBDYXJ0QmFyKCk7XHJcbm5ldyBDb29raWVzKCk7XHJcblxyXG4iLCJpbXBvcnQge2dldENvb2tpZSwgc2V0Q29va2llfSBmcm9tICcuL191dGlscyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBDYXJ0QmFye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmNhcnRCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXInKTtcclxuICAgICAgICBpZiAodGhpcy5jYXJ0QmFyID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5mZXRjaFVybCA9ICcvYWN0aXZpdGllc0FwaUdldEJ5SWQnO1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0lkcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmNhcnRCYXJBY3Rpdml0aWVzSXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXJfX2NvbnRlbnRfX2FjdGl2aXRpZXMnKTtcclxuICAgICAgICB0aGlzLmNhcnRCYXJBY3Rpdml0aWVzSXRlbXNQcm90b3R5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXJfX2NvbnRlbnRfX2FjdGl2aXRpZXNfX2l0ZW1fX3Byb3RvdHlwZSA+IGRpdicpO1xyXG4gICAgICAgIHRoaXMuY2FydEJhckFjdGl2aXRpZXNBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXIgLmNhcnRfYmFyX190aXRsZSBzcGFuJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uc0FkZEFjdGl2aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2RhdGEtYWN0aXZpdHlfaWRdJyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzRmlsdGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcl9fZmlsdGVyX3NlYXJjaCcpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmdBY3Rpdml0aWVzRnJvbUNvb2tpZSgpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZGluZ0FjdGl2aXRpZXNGcm9tQ29va2llKCl7XHJcbiAgICAgICAgbGV0IGFjdGl2aXRpZXNDb29raWUgPSBnZXRDb29raWUoJ3Byb2R1Y3RzX2NhcnQnKTtcclxuICAgICAgICBpZiAoIWFjdGl2aXRpZXNDb29raWUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IF9hY3Rpdml0aWVzSWRzID0gYWN0aXZpdGllc0Nvb2tpZVsxXSAhPT0gJycgPyBhY3Rpdml0aWVzQ29va2llWzFdLnNwbGl0KCcsJykgOiBbXTtcclxuXHJcbiAgICAgICAgX2FjdGl2aXRpZXNJZHMuZm9yRWFjaCgoYWN0aXZpdHlJZCk9PntcclxuICAgICAgICAgICAgdGhpcy5hZGRBY3Rpdml0eShhY3Rpdml0eUlkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5idXR0b25zQWRkQWN0aXZpdHkuZm9yRWFjaCgoYnV0dG9uKT0+e1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZpdHlJZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZpdHlfaWQnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZpdGllc0lkcy5pbmNsdWRlcyhhY3Rpdml0eUlkKSl7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ucXVlcnlTZWxlY3Rvcignc3ZnLmhlYXJ0JykuY2xhc3NMaXN0LmFkZCgnaGVhcnQtLWZpbGwtd2hpdGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5idXR0b25zQWRkQWN0aXZpdHkuZm9yRWFjaCgoYnV0dG9uKT0+e1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZE9yUmVtb3ZlQWN0aXZpdHkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXRpZXNGaWx0ZXJDb250YWluZXIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdGllc0ZpbHRlckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCAoZWxlbWVudCk9PntcclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpdml0eSA9IGVsZW1lbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IGFjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0eV9fY29udGVudF9fYWN0aW9uc19fYWRkJyk7XHJcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZE9yUmVtb3ZlQWN0aXZpdHkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNhcnRCYXJBY3Rpdml0aWVzSXRlbXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignRE9NTm9kZUluc2VydGVkJywgKGVsZW1lbnQpPT57XHJcbiAgICAgICAgICAgIGxldCBhY3Rpdml0eUl0ZW0gPSBlbGVtZW50LnRhcmdldDtcclxuICAgICAgICAgICAgYWN0aXZpdHlJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X2Jhcl9fY29udGVudF9fYWN0aXZpdGllc19faXRlbV9fZHJvcCcpXHJcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9yZW1vdmVBY3Rpdml0eS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlQ2FydEJhckFjdGl2aXR5SXRlbShhY3Rpdml0eSl7XHJcbiAgICAgICAgbGV0IGFjdGl2aXR5SXRlbSA9IHRoaXMuY2FydEJhckFjdGl2aXRpZXNJdGVtc1Byb3RvdHlwZS5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgICAgIGFjdGl2aXR5SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FjdGl2aXR5SXRlbV8nK2FjdGl2aXR5LmlkKTtcclxuICAgICAgICBsZXQgaW1hZ2UgPSBhY3Rpdml0eUl0ZW0ucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBhY3Rpdml0eS5pbWFnZVNtYWxsKTtcclxuICAgICAgICBsZXQgbmFtZSA9IGFjdGl2aXR5SXRlbS5xdWVyeVNlbGVjdG9yKCdoNScpO1xyXG4gICAgICAgIG5hbWUuaW5uZXJIVE1MID0gYWN0aXZpdHkubmFtZS5sZW5ndGggPCAyMCA/IGFjdGl2aXR5Lm5hbWUgOiBhY3Rpdml0eS5uYW1lLnN1YnN0cmluZygwLCAyMCkgKyAnLi4uJztcclxuXHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyQWN0aXZpdGllc0l0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGl2aXR5SXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hBY3Rpdml0eShhY3Rpdml0eUlkKXtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5mZXRjaFVybCsnLycrYWN0aXZpdHlJZDtcclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFBY3Rpdml0eSA9IHJlc3BvbnNlLmRhdGEuYWN0aXZpdHk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VDYXJ0QmFyQWN0aXZpdHlJdGVtKGRhdGFBY3Rpdml0eSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW1vdmVBY3Rpdml0eShldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBsZXQgYWN0aXZpdHlJdGVtID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgIGxldCBhY3Rpdml0eUlkID0gYWN0aXZpdHlJdGVtLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgICBhY3Rpdml0eUlkID0gYWN0aXZpdHlJZC5zdWJzdHJpbmcoMTMsIGFjdGl2aXR5SWQubGVuZ3RoICk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBY3Rpdml0eShhY3Rpdml0eUlkKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBY3Rpdml0eShhY3Rpdml0eUlkKXtcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNJZHMgPSB0aGlzLmFjdGl2aXRpZXNJZHMuZmlsdGVyKChhY3Rpdml0eUlkT3RoZXIpPT57XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpdml0eUlkT3RoZXIgIT09IGFjdGl2aXR5SWRcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRDb29raWUodGhpcy5hY3Rpdml0aWVzSWRzLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0aWVzSWRzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgdGhpcy5jYXJ0QmFyLmNsYXNzTGlzdC5hZGQoJ2NhcnRfYmFyLS1pbml0aWFsJyk7XHJcblxyXG5cclxuICAgICAgICBsZXQgc2VsZWN0ZWRIZWFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWFjdGl2aXR5X2lkPVwiJythY3Rpdml0eUlkKydcIl0nKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRIZWFydCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZEhlYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRIZWFydC5xdWVyeVNlbGVjdG9yKCdzdmcnKS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFydC0tZmlsbC13aGl0ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyQWN0aXZpdGllc0l0ZW1zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhY3Rpdml0eUl0ZW1fJythY3Rpdml0eUlkKS5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmNhcnRCYXJBY3Rpdml0aWVzQW1vdW50LmlubmVySFRNTCA9IHRoaXMuYWN0aXZpdGllc0lkcy5sZW5ndGgudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBY3Rpdml0eShhY3Rpdml0eUlkKXtcclxuXHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcnRfYmFyLS1pbml0aWFsJyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QucmVtb3ZlKCdjYXJ0X2Jhci0tdmlzaWJsZScpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNJZHMucHVzaChhY3Rpdml0eUlkKTtcclxuICAgICAgICB0aGlzLmZldGNoQWN0aXZpdHkoYWN0aXZpdHlJZCk7XHJcbiAgICAgICAgc2V0Q29va2llKHRoaXMuYWN0aXZpdGllc0lkcy50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkSGVhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1hY3Rpdml0eV9pZD1cIicrYWN0aXZpdHlJZCsnXCJdJyk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkSGVhcnQpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRIZWFydC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkSGVhcnQucXVlcnlTZWxlY3Rvcignc3ZnJykuY2xhc3NMaXN0LmFkZCgnaGVhcnQtLWZpbGwtd2hpdGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FydEJhckFjdGl2aXRpZXNBbW91bnQuaW5uZXJIVE1MID0gdGhpcy5hY3Rpdml0aWVzSWRzLmxlbmd0aC50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE9yUmVtb3ZlQWN0aXZpdHkoZSl7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICBsZXQgYWN0aXZpdHlJZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZpdHlfaWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdGllc0lkcy5pbmNsdWRlcyhhY3Rpdml0eUlkKSlcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBY3Rpdml0eShhY3Rpdml0eUlkKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRBY3Rpdml0eShhY3Rpdml0eUlkKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q2FydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93Q2FydCgpe1xyXG4gICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QucmVtb3ZlKCdjYXJ0X2Jhci0tdmlzaWJsZScpO1xyXG4gICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QuYWRkKCdjYXJ0X2Jhci0tdmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0QmFyOyIsImltcG9ydCB7IHNldENvb2tpZSwgZ2V0Q29va2llIH0gZnJvbSAnLi9fdXRpbHMnO1xyXG5cclxuY2xhc3MgQ29va2llc3tcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgLy9JZiB0aGUgY29va2llIHdhcyBzZXQsIHRoZSBkaWFsb2cgZG9lbnN0IGV4aXN0ISEgKHR3aWcgZGlkbnQgd3JpdGUgaXQpIGFuZCBKUyB0d3Jvd3MgYW4gZXJyb3JcclxuICAgICAgICB0aGlzLmFsbG93QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2tpZSAuY29va2llX19idG4gYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2tpZScpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29raWUtb3ZlcmxheScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vT25seSBpZiB0aGUgYnRuIGV4aXN0LlxyXG4gICAgICAgIGlmKHRoaXMuYWxsb3dCdG4pIFxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQoKXtcclxuICAgICAgICB0aGlzLmRpYWxvZygpO1xyXG4gICAgICAgIHRoaXMuYWxsb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFsbG93Q29va2llcy5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBhbGxvd0Nvb2tpZXMoKXtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ2FsbG93IGNvb2tpZXMnKTtcclxuICAgICAgICBzZXRDb29raWUoJ2FsbG93JywgJ2FsbG93LWNvb2tpZXMnKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBkaWFsb2coKXtcclxuICAgICAgICBpZiAoZ2V0Q29va2llKCdhbGxvdy1jb29raWVzJykpXHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKXtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnY29va2llLS1uby12aXNpYmxlJyk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2Nvb2tpZS1vdmVybGF5LS1uby12aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvb2tpZXM7IiwiaW1wb3J0IHtlYXNlRWxhc3RpY091dCwgZWFzZUVsYXN0aWNJbiwgZWFzZUJvdW5jZU91dH0gZnJvbSBcImQzLWVhc2VcIjtcclxuaW1wb3J0IFNlZ21lbnQgZnJvbSBcInNlZ21lbnQtanNcIjtcclxuaW1wb3J0IEhlYWRyb29tIGZyb20gJ2hlYWRyb29tLmpzJ1xyXG5cclxuY2xhc3MgTmF2QmFye1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcclxuICAgICAgICB0aGlzLm5hdmVnYXRpb25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2Jyk7XHJcblxyXG4gICAgICAgIHRoaXMucGF0aEEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnVyZ2VyX3BhdGhBJyk7XHJcbiAgICAgICAgdGhpcy5wYXRoQiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXJfcGF0aEInKTtcclxuICAgICAgICB0aGlzLnBhdGhDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1cmdlcl9wYXRoQycpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWljb24td3JhcHBlcicpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtaWNvbi10cmlnZ2VyJyk7XHJcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuICAgICAgICB0aGlzLmJlZ2luQUMgPSA4MDtcclxuICAgICAgICB0aGlzLmVuZEFDID0gMzIwO1xyXG4gICAgICAgIHRoaXMuYmVnaW5CID0gODA7XHJcbiAgICAgICAgdGhpcy5lbmRCID0gMzIwO1xyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2VnbWVudEEgPSBuZXcgU2VnbWVudCh0aGlzLnBhdGhBLCB0aGlzLmJlZ2luQUMsIHRoaXMuZW5kQUMpO1xyXG4gICAgICAgIHRoaXMuc2VnbWVudEIgPSBuZXcgU2VnbWVudCh0aGlzLnBhdGhCLCB0aGlzLmJlZ2luQiwgdGhpcy5lbmRCKTtcclxuICAgICAgICB0aGlzLnNlZ21lbnRDID0gbmV3IFNlZ21lbnQodGhpcy5wYXRoQywgdGhpcy5iZWdpbkFDLCB0aGlzLmVuZEFDKTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgICAgICB0aGlzLmhlYWRyb29tSW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRyb29tSW5pdCgpXHJcbiAgICB7XHJcbiAgICAgICAgSGVhZHJvb20ub3B0aW9ucy5vblVucGluID0gdGhpcy5oaWRlTWVudVVuUGluLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIEhlYWRyb29tLm9wdGlvbnMudG9sZXJhbmNlID0ge1xyXG4gICAgICAgICAgICB1cDogMTAsXHJcbiAgICAgICAgICAgIGRvd246IDhcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgaGVhZHJvb20gPSBuZXcgSGVhZHJvb20odGhpcy5oZWFkZXIpO1xyXG4gICAgICAgIGhlYWRyb29tLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd09ySGlkZU1lbnUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3BlbilcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZU1lbnUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93T3JIaWRlTWVudSgpe1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3BlbilcclxuICAgICAgICAgICAgdGhpcy5oaWRlTWVudSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zaG93TWVudSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dNZW51KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZHJvb20tLXRvcCcpKXtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLS1waW5uZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW5BQyh0aGlzLnNlZ21lbnRBLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmluQih0aGlzLnNlZ21lbnRCLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmluQUModGhpcy5zZWdtZW50QywgdGhpcyk7XHJcblxyXG4gICAgICAgIC8qKioqKkFjdGl2ZSBtZW51IGNvbnRhaW5lciAqKi9cclxuICAgICAgICB0aGlzLm5hdmVnYXRpb25NZW51LmNsYXNzTGlzdC5hZGQoJ3N3aW5nLWluLXRvcC1iY2snKTtcclxuICAgICAgICB0aGlzLm5hdmVnYXRpb25NZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3N3aW5nLW91dC10b3AtYmNrJyk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlTWVudVVuUGluKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKXtcclxuICAgICAgICAgICAgdGhpcy5vdXRBQyh0aGlzLnNlZ21lbnRBLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5vdXRCKHRoaXMuc2VnbWVudEIsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm91dEFDKHRoaXMuc2VnbWVudEMsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5uYXZlZ2F0aW9uTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzd2luZy1pbi10b3AtYmNrJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmF2ZWdhdGlvbk1lbnUuY2xhc3NMaXN0LmFkZCgnc3dpbmctb3V0LXRvcC1iY2snKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoaWRlTWVudSgpe1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRyb29tLS10b3AnKSl7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tcGlubmVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLm91dEFDKHRoaXMuc2VnbWVudEEsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm91dEIodGhpcy5zZWdtZW50QiwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMub3V0QUModGhpcy5zZWdtZW50QywgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5hdmVnYXRpb25NZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3N3aW5nLWluLXRvcC1iY2snKTtcclxuICAgICAgICAgICAgdGhpcy5uYXZlZ2F0aW9uTWVudS5jbGFzc0xpc3QuYWRkKCdzd2luZy1vdXQtdG9wLWJjaycpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGluQUMocywgdGhhdCkge1xyXG4gICAgICAgIHMuZHJhdygnODAlIC0gMjQwJywgJzgwJScsIDAuMywge1xyXG4gICAgICAgICAgICBkZWxheTogMC4xLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmluQUMyKHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5BQzIocykge1xyXG4gICAgICAgIHMuZHJhdygnMTAwJSAtIDU0NScsICcxMDAlIC0gMzA1JywgMC42LCB7XHJcbiAgICAgICAgICAgIGVhc2luZzogZWFzZUVsYXN0aWNPdXRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbkIocywgdGhhdCkge1xyXG4gICAgICAgIHMuZHJhdyh0aGlzLmJlZ2luQiAtIDYwLCB0aGlzLmVuZEIgKyA2MCwgMC4xLCB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQuaW5CMihzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluQjIocykge1xyXG4gICAgICAgIHMuZHJhdyh0aGlzLmJlZ2luQiArIDEyMCwgdGhpcy5lbmRCIC0gMTIwLCAwLjMsIHtcclxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlQm91bmNlT3V0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogT3V0IGFuaW1hdGlvbnMgKHRvIGJ1cmdlciBpY29uKSAqL1xyXG5cclxuICAgIG91dEFDKHMsIHRoYXQpIHtcclxuICAgICAgICBzLmRyYXcoJzkwJSAtIDI0MCcsICc5MCUnLCAwLjEsIHtcclxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlRWxhc3RpY0luLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm91dEFDMihzLCB0aGF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG91dEFDMihzLCB0aGF0KSB7XHJcbiAgICAgICAgcy5kcmF3KCcyMCUgLSAyNDAnLCAnMjAlJywgMC4zLCB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQub3V0QUMzKHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0QUMzKHMpIHtcclxuICAgICAgICBzLmRyYXcodGhpcy5iZWdpbkFDLCB0aGlzLmVuZEFDLCAwLjcsIHtcclxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlRWxhc3RpY091dFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG91dEIocykge1xyXG4gICAgICAgIHMuZHJhdyh0aGlzLmJlZ2luQiwgdGhpcy5lbmRCLCAwLjcsIHtcclxuICAgICAgICAgICAgZGVsYXk6IDAuMSxcclxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlRWxhc3RpY091dFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZSh2YWx1ZSwgbmFtZT0ncHJvZHVjdHNfY2FydCcgLCBkYXlzPTMpIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSsoZGF5cyoyNCo2MCo2MCoxMDAwKSk7XHJcbiAgICBsZXQgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiK2RhdGUudG9HTVRTdHJpbmcgKCk7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArXHJcbiAgICAgICAgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICBsZXQgY0FyciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgZm9yKGxldCBpPTA7aSA8IGNBcnIubGVuZ3RoO2krKykge1xyXG4gICAgICAgIGxldCBjb29raWUgPSBjQXJyW2ldLnNwbGl0KFwiPVwiLDIpO1xyXG4gICAgICAgIGNvb2tpZVswXSA9IGNvb2tpZVswXS5yZXBsYWNlKC9eXFxzKy8sXCJcIik7XHJcbiAgICAgICAgaWYgKGNvb2tpZVswXSA9PT0gbmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIGNvb2tpZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQm94KGxhdHMsIGxvZ3Mpe1xyXG4gICAgbGF0cy5zb3J0KChhLGIpID0+IHsgcmV0dXJuIGEgPD0gYiA/IC0xIDogMSB9ICk7XHJcbiAgICBsb2dzLnNvcnQoKGEsYikgPT4geyByZXR1cm4gYSA8PSBiID8gLTEgOiAxIH0gKTtcclxuXHJcbiAgICByZXR1cm4gW1tsYXRzWzBdLGxvZ3NbMF1dLFxyXG4gICAgICAgIFtsYXRzW2xhdHMubGVuZ3RoLTFdLCBsb2dzW2xvZ3MubGVuZ3RoLTFdIF1dO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==