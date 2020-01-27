(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activities"],{

/***/ "./assets/scripts/activities.js":
/*!**************************************!*\
  !*** ./assets/scripts/activities.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_activities_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/activities.scss */ "./assets/styles/activities.scss");
/* harmony import */ var _styles_activities_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_activities_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_activities_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/activities/_filters */ "./assets/scripts/modules/activities/_filters.js");
/* harmony import */ var _modules_activities_more_activities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/activities/_more_activities */ "./assets/scripts/modules/activities/_more_activities.js");
/* harmony import */ var _modules_global_addToCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/global/_addToCart */ "./assets/scripts/modules/global/_addToCart.js");
/* harmony import */ var _modules_activities_story_description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/activities/_story_description */ "./assets/scripts/modules/activities/_story_description.js");
/* harmony import */ var _modules_activities_stories_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/activities/_stories_layout */ "./assets/scripts/modules/activities/_stories_layout.js");






new _modules_activities_filters__WEBPACK_IMPORTED_MODULE_1__["default"]();
new _modules_activities_more_activities__WEBPACK_IMPORTED_MODULE_2__["default"]();
new _modules_global_addToCart__WEBPACK_IMPORTED_MODULE_3__["default"]('.activity__content__actions__add');
new _modules_activities_stories_layout__WEBPACK_IMPORTED_MODULE_5__["default"]();
new _modules_activities_story_description__WEBPACK_IMPORTED_MODULE_4__["default"]();

/***/ }),

/***/ "./assets/scripts/modules/activities/_filters.js":
/*!*******************************************************!*\
  !*** ./assets/scripts/modules/activities/_filters.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _make_activity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_make_activity */ "./assets/scripts/modules/activities/_make_activity.js");








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var FilterActivities =
/*#__PURE__*/
function () {
  function FilterActivities() {
    _classCallCheck(this, FilterActivities);

    this.urlFilters = '/activitiesApiPosFilter';
    this.urlSearch = '/activitiesApiPosSearch';
    this.activitiesTextCount = document.querySelector('.activities__list__title span');
    this.activitiesText = document.querySelector('.activities__list__title h3');
    this.activitiesList = document.querySelector('.activities__list__container');
    this.activitiesListInitial = document.querySelector('.activities__list__container__initial');
    this.activitiesListFilterSearch = document.querySelector('.activities__list__container__filter_search'); // this.btnLoad = document.querySelector('.activities__list__more button');

    this.prototype = document.querySelector('.activities__list__item__prototype div');
    this.filters = document.querySelectorAll('.activities__selectors__filters__lists li');
    this.searchFormInput = document.querySelector('.activities__selectors__search form input[type="text"]');
    this.searchFormSubmit = document.querySelector('.activities__selectors__search form input[type="submit"]');
    this.loadingDots = document.querySelector('.loading_dots:first-child');
    this.getActivitiesFromSelectedFilter();
    this.events();
  }

  _createClass(FilterActivities, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.filters.forEach(function (x) {
        x.addEventListener('click', _this.activeFilter.bind(_this));
      });
      this.searchFormSubmit.addEventListener('click', this.getActivitiesFromSearch.bind(this));
      this.activitiesListFilterSearch.addEventListener('DOMNodeInserted', function () {
        var amountActivities = _this.activitiesListFilterSearch.querySelectorAll('.activity').length;

        _this.activitiesText.innerText = amountActivities.toString() + ' Aktivitäten gefunden';
      });
    }
  }, {
    key: "activeFilter",
    value: function activeFilter(e) {
      e.preventDefault();
      var element = e.target;
      element.classList.toggle('selected');
      this.getActivitiesFromSelectedFilter();
    }
  }, {
    key: "makeUrlForFilter",
    value: function makeUrlForFilter() {
      var url = '';
      var filters = document.querySelectorAll('.activities__selectors__filters__lists li.selected');

      if (filters.length > 0) {
        var filtersText = '';

        for (var i = 0; i < filters.length - 1; i++) {
          filtersText += filters[i].innerText + ',';
        }

        filtersText += filters[filters.length - 1].innerText;
        url = this.urlFilters + '/' + filtersText;
      }

      return url;
    }
  }, {
    key: "makeUrlForSearch",
    value: function makeUrlForSearch() {
      var url = '';

      if (this.searchFormInput.value !== '') {
        var filtersText = this.searchFormInput.value;
        url = this.urlSearch + '/' + filtersText;
      }

      return url;
    }
  }, {
    key: "getActivitiesFromSelectedFilter",
    value: function getActivitiesFromSelectedFilter() {
      var url = this.makeUrlForFilter();
      if (url.length > 0) this.getActivities(url);else this.showInitialContainer();
    }
  }, {
    key: "getActivitiesFromSearch",
    value: function getActivitiesFromSearch(e) {
      e.preventDefault();
      var url = this.makeUrlForSearch();
      if (url.length > 0) this.getActivities(url);else this.showInitialContainer();
    }
  }, {
    key: "getActivities",
    value: function getActivities(url) {
      var _this2 = this;

      var that = this;
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(url).then(function (response) {
        var activities = response.data.activities;
        var loadMore = response.data.loadMore; //TODO: make load more button para las actividades filtradas
        // if (loadMore === false)
        //     this.btnLoad.classList.add('hidden');

        if (activities.length > 0) {
          _this2.activitiesListFilterSearch.querySelectorAll('.activity').forEach(function (activity) {
            activity.parentNode.removeChild(activity);
          });

          activities.forEach(function (activity) {
            if (activity !== null && activity.image !== null) {
              var newActivity = new _make_activity__WEBPACK_IMPORTED_MODULE_8__["default"](that.prototype).make(activity);

              _this2.activitiesListFilterSearch.appendChild(newActivity);
            }
          });
        } else //no se han encontrado
          _this2.activitiesText.innerText = 'Mit diesen Filtern wurden keine Aktivitäten gefunden';

        that.hideLoadingAnimation();
      })["catch"](function (error) {
        console.log(error);
      });
      this.showLoadingAnimation();
    }
  }, {
    key: "showInitialContainer",
    value: function showInitialContainer() {
      this.activitiesListFilterSearch.classList.add('activities__list__container__filter_search--hide');
      this.activitiesListInitial.classList.remove('activities__list__container__initial--hide');
      var amountActivities = this.activitiesListInitial.querySelectorAll('.activity').length;
      this.activitiesText.innerText = amountActivities.toString() + ' Aktivitäten gefunden';
    }
  }, {
    key: "showLoadingAnimation",
    value: function showLoadingAnimation() {
      this.activitiesText.innerText = 'Suchen Sie nach Aktivitäten mit diesen Filtern ...'; //buscando

      this.activitiesListFilterSearch.classList.remove('activities__list__container__filter_search--hide');
      this.activitiesListInitial.classList.add('activities__list__container__initial--hide');
      this.loadingDots.classList.toggle('loading_dots--visible');
    }
  }, {
    key: "hideLoadingAnimation",
    value: function hideLoadingAnimation() {
      this.loadingDots.classList.toggle('loading_dots--visible');
    }
  }]);

  return FilterActivities;
}();

/* harmony default export */ __webpack_exports__["default"] = (FilterActivities);

/***/ }),

/***/ "./assets/scripts/modules/activities/_make_activity.js":
/*!*************************************************************!*\
  !*** ./assets/scripts/modules/activities/_make_activity.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.link */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var text_clipper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! text-clipper */ "./node_modules/text-clipper/dist/index.js");
/* harmony import */ var text_clipper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(text_clipper__WEBPACK_IMPORTED_MODULE_8__);









function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MakeActivity =
/*#__PURE__*/
function () {
  function MakeActivity(prototype) {
    _classCallCheck(this, MakeActivity);

    this.prototype = prototype;
    this.imagesSizes = [1920, 1200, 1000, 900, 800, 600];
    this.descriptionLenght = 75;
  }

  _createClass(MakeActivity, [{
    key: "makeImageSrcSet",
    value: function makeImageSrcSet(url, maxWidth) {
      var srcSet = [];
      this.imagesSizes.forEach(function (dim) {
        if (dim <= maxWidth) srcSet.push('/media/cache/resolve/min_width_' + dim + '/' + url + ' ' + dim + 'w');
      });
      return srcSet.join(', ');
    }
  }, {
    key: "make",
    value: function make(activity) {
      var newActivity = this.prototype.cloneNode(true);
      var imageSrcSet = this.makeImageSrcSet(activity.image.staticImagePath, activity.image.imageSize);
      newActivity.querySelector('.activity__content__actions__add').setAttribute('data-activity_id', activity.id);
      newActivity.querySelector('img').setAttribute('data-srcset', imageSrcSet);
      newActivity.querySelector('img').setAttribute('sizes', '(min-width:1000px) 33vw, 90vw');
      newActivity.querySelector('img').setAttribute('src', activity.image.base64);
      newActivity.querySelector('img').setAttribute('alt', activity.image.description);
      newActivity.querySelector('img').classList.add('blur-up');
      newActivity.querySelector('img').classList.add('lazyload');
      newActivity.querySelector('h4').innerHTML = activity.name;
      newActivity.querySelector('.activity__content__description a').innerHTML = text_clipper__WEBPACK_IMPORTED_MODULE_8___default()(activity.description, this.descriptionLenght, {
        indicator: ''
      });
      newActivity.querySelector('.activity__image a').setAttribute('href', activity.link);
      newActivity.querySelector('.activity__content__title a').setAttribute('href', activity.link);
      newActivity.querySelector('.activity__content__description a').setAttribute('href', activity.link);
      if (activity.price !== null) newActivity.querySelector('.activity__content__price span').innerHTML = 'ab <br>' + activity.price + " €";else newActivity.querySelector('.activity__content__price').setAttribute('hidden', 'hidden');
      return newActivity;
    }
  }]);

  return MakeActivity;
}();

/* harmony default export */ __webpack_exports__["default"] = (MakeActivity);

/***/ }),

/***/ "./assets/scripts/modules/activities/_more_activities.js":
/*!***************************************************************!*\
  !*** ./assets/scripts/modules/activities/_more_activities.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _make_activity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_make_activity */ "./assets/scripts/modules/activities/_make_activity.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var LoadActivities =
/*#__PURE__*/
function () {
  function LoadActivities() {
    _classCallCheck(this, LoadActivities);

    this.amount = 6;
    this.url = '/activitiesApiPos';
    this.activitiesList = document.querySelector('.activities__list__container');
    this.activitiesListInitial = document.querySelector('.activities__list__container__initial');
    this.btnLoad = document.querySelector('.activities__list__more button');
    this.loadingDots = document.querySelector('.loading_dots:last-child');
    this.prototype = document.querySelector('.activities__list__item__prototype div');
    this.events();
  }

  _createClass(LoadActivities, [{
    key: "events",
    value: function events() {
      if (this.btnLoad != null) this.btnLoad.addEventListener('click', this.getData.bind(this));
    }
  }, {
    key: "getData",
    value: function getData(e) {
      var _this = this;

      e.preventDefault();
      var pos = this.activitiesListInitial.querySelectorAll('.activity').length;
      var url = this.url + '/' + pos + '/' + this.amount;
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url).then(function (response) {
        var activities = response.data.activities;
        var loadMore = response.data.loadMore;
        if (loadMore === false) that.btnLoad.classList.add('hidden');

        if (activities.length > 0) {
          activities.forEach(function (activity) {
            var newActivity = new _make_activity__WEBPACK_IMPORTED_MODULE_5__["default"](_this.prototype).make(activity);

            _this.activitiesListInitial.appendChild(newActivity);
          });
        } else {
          console.error(' mostrar que no hay mas');
        }

        _this.loadingDots.classList.toggle('loading_dots--visible');

        _this.activitiesList.classList.toggle('activities__list__container--loading');
      })["catch"](function (error) {
        console.error("error at loading more activities");
      });
      this.activitiesList.classList.toggle('activities__list__container--loading');
      this.loadingDots.classList.toggle('loading_dots--visible');
    }
  }]);

  return LoadActivities;
}();

/* harmony default export */ __webpack_exports__["default"] = (LoadActivities);

/***/ }),

/***/ "./assets/scripts/modules/activities/_stories_layout.js":
/*!**************************************************************!*\
  !*** ./assets/scripts/modules/activities/_stories_layout.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StoriesLayout =
/*#__PURE__*/
function () {
  function StoriesLayout() {
    _classCallCheck(this, StoriesLayout);

    this.storiesSelectors = document.querySelectorAll('.activities__stories__items li');
    this.stories = document.querySelectorAll('.activities__stories__story');
    this.storiesAmount = this.stories.length;
    this.storiesContainer = document.querySelector('.activities__stories__story__container');
    this.events();
    this.init();
  }

  _createClass(StoriesLayout, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.storiesSelectors.forEach(function (storySelector) {
        storySelector.addEventListener('click', _this.changeActiveStory.bind(_this));
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.storiesSelectors[0].classList.add('active');
      this.stories[0].classList.add('active');
      this.storiesContainer.height = document.querySelector('#story-0').clientHeight;

      for (var id = 0; id < this.storiesAmount; id++) {
        var displacement = id * 100;
        var story = document.querySelector('#story-' + id);
        story.setAttribute("style", "transform: translateX(" + displacement + "%);");
      }
    }
  }, {
    key: "changeActiveStory",
    value: function changeActiveStory(e) {
      var storySelector = e.target;
      this.storiesSelectors.forEach(function (_storySelector) {
        _storySelector.classList.remove('active');
      });
      this.stories.forEach(function (story) {
        story.classList.remove('active');
      });
      storySelector.classList.add('active');
      var storyId = storySelector.getAttribute('data-story');
      var newActiveStoryPos = parseInt(storyId.split('-')[1]);
      var associateStory = document.querySelector(storyId);
      associateStory.classList.add('active');
      this.storiesContainer.height = associateStory.clientHeight;

      for (var id = 0; id < this.storiesAmount; id++) {
        var displacement = (id - newActiveStoryPos) * 100;
        var story = document.querySelector('#story-' + id);
        story.setAttribute("style", "transform: translateX(" + displacement + "%);");
      }
    }
  }]);

  return StoriesLayout;
}();

/* harmony default export */ __webpack_exports__["default"] = (StoriesLayout);

/***/ }),

/***/ "./assets/scripts/modules/activities/_story_description.js":
/*!*****************************************************************!*\
  !*** ./assets/scripts/modules/activities/_story_description.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_17__);


















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var StoryDescription =
/*#__PURE__*/
function () {
  function StoryDescription() {
    _classCallCheck(this, StoryDescription);

    mapbox_gl__WEBPACK_IMPORTED_MODULE_17___default.a.accessToken = 'pk.eyJ1IjoiY2FydG1hbnVzZXIiLCJhIjoiY2p5aHVyNHB2MDNudzNnbnJiaGVtcWJ2OCJ9.2UPDKnSZRNwNR1ITlZQEAA';
    this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_17___default.a.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [-81.11051559448242, 22.50890956520524],
      zoom: 6
    });
    this.map.scrollZoom.disable();
    this.marker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_17___default.a.Marker();
    this.pos = 0;
    this.storiesSelectors = document.querySelectorAll('.activities__stories__items li');
    this.story = document.querySelector('.activities__stories__story');
    this.paths = this.story.querySelectorAll('span[data-path-map]');
    this.markers = this.story.querySelectorAll('span[data-map]');
    this.geojsons = [];
    this.layers = [];
    this.maxViewCoords = [];
    this.previousTime = 0;
    this.events();
  }

  _createClass(StoryDescription, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.map.on('load', this.readPaths.bind(this));
      this.storiesSelectors.forEach(function (storySelector) {
        storySelector.addEventListener('click', _this.changeActiveStory.bind(_this));
      });

      window.onscroll = function () {
        _this.paths.forEach(function (path, index) {
          if (_this.isElementOnScreen(path)) {
            _this.setActivePath(index);
          }
        }); //TODO: ugly solution


        _this.markers.forEach(function (marker) {
          if (_this.isElementOnScreen(marker)) {
            var props = marker.getAttribute('data-map');
            props = JSON.parse(props);

            _this.map.flyTo({
              center: props.center,
              zoom: props.zoom
            });
          }
        });
      };
    }
  }, {
    key: "readPaths",
    value: function readPaths() {
      var _this2 = this;

      if (this.paths.length === 0) return;
      this.paths.forEach(function (path, index) {
        var props = path.getAttribute('data-path-map');
        props = JSON.parse(props);

        _this2.geojsons.push(props.geojson);

        var coordinates = [];
        props.geojson.features.forEach(function (feature) {
          if (feature.geometry.type === 'LineString') {
            feature.geometry.coordinates.forEach(function (coordinate) {
              coordinates.push(coordinate);
            });
          }
        });
        var lats = [];
        var logs = [];
        coordinates.forEach(function (coordinate) {
          lats.push(coordinate[0]);
          logs.push(coordinate[1]);
        });
        lats.sort(function (a, b) {
          return a <= b ? -1 : 1;
        });
        logs.sort(function (a, b) {
          return a <= b ? -1 : 1;
        });
        var maxCoords = [[lats[0], logs[0]], [lats[lats.length - 1], logs[logs.length - 1]]];

        _this2.maxViewCoords.push(maxCoords);

        _this2.layers.push({
          'id': 'layer-path_' + index,
          'type': 'line',
          'source': {
            'type': 'geojson',
            'data': props.geojson
          },
          'layout': {
            'line-cap': 'round',
            'line-join': 'round'
          },
          'paint': {
            'line-color': '#62ab03',
            'line-width': 4,
            'line-opacity': .85
          }
        });
      });
    }
  }, {
    key: "animateMarker",
    value: function animateMarker(timestamp) {
      if (this.previousTime + 41 < timestamp) {
        this.previousTime = timestamp;
        this.marker.setLngLat(this.geojson.features[0].geometry.coordinates[this.pos]);
        this.marker.addTo(this.map);
        this.pos += 1;
        if (this.pos === this.geojson.features[0].geometry.coordinates.length) this.pos = 0;
      }

      requestAnimationFrame(this.animateMarker.bind(this));
    }
  }, {
    key: "changeActiveStory",
    value: function changeActiveStory(e) {
      var storySelector = e.target;
      var storyId = storySelector.getAttribute('data-story');
      var associateStory = document.querySelector(storyId);
      this.paths = associateStory.querySelectorAll('span[data-path-map]');
      this.removeLayers(_toConsumableArray(Array(12).keys()));
      this.readPaths();
    }
  }, {
    key: "removeLayers",
    value: function removeLayers(indexs) {
      var _this3 = this;

      indexs.forEach(function (index) {
        var previousLayerId = 'layer-path_' + index;

        var previousMapLayer = _this3.map.getLayer(previousLayerId);

        var previousMapSource = _this3.map.getSource(previousLayerId);

        if (typeof previousMapLayer !== 'undefined') _this3.map.removeLayer(previousLayerId);
        if (typeof previousMapSource !== 'undefined') _this3.map.removeSource(previousLayerId);
      });
    }
  }, {
    key: "setActivePath",
    value: function setActivePath(index) {
      this.removeLayers([index - 1, index + 1]);
      var currentLayerId = 'layer-path_' + index;
      var currentMapLayer = this.map.getLayer(currentLayerId);

      if (typeof currentMapLayer === 'undefined') {
        this.map.addLayer(this.layers[index]);
        this.map.fitBounds(this.maxViewCoords[index], {
          padding: 20
        });
      }
    }
  }, {
    key: "isElementOnScreen",
    value: function isElementOnScreen(element) {
      var bounds = element.getBoundingClientRect();
      return bounds.top > 0 && bounds.top < window.innerHeight / 2;
    }
  }]);

  return StoryDescription;
}();

/* harmony default export */ __webpack_exports__["default"] = (StoryDescription);

/***/ }),

/***/ "./assets/scripts/modules/global/_addToCart.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/modules/global/_addToCart.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_utils */ "./assets/scripts/modules/global/_utils.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);










function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var AddToCart =
/*#__PURE__*/
function () {
  function AddToCart(buttonsSelector) {
    _classCallCheck(this, AddToCart);

    this.buttonsSelector = buttonsSelector;
    this.activitiesFilterContainer = document.querySelector('.activities__list__container__filter_search');
    this.buttonsAdd = document.querySelectorAll(this.buttonsSelector);
    this.cartBar = document.querySelector('.cart_bar');
    this.cartBarText = document.querySelector('.cart_bar .cart_bar__content__text span');
    this.activities = [];
    this.cartBarActivityPrototype = document.querySelector('.cart_bar__content__activities__item__prototype > div');
    this.cartBarActivityContainer = document.querySelector('.cart_bar__content__activities');
    this.loadActivities();
    this.events();
    this.setStatus();
    this.fetchUrl = '/activitiesApiGetById';
  }

  _createClass(AddToCart, [{
    key: "loadActivities",
    value: function loadActivities() {
      var currentValue = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getCookie"])('products_cart');
      if (!currentValue) return [];
      this.activities = currentValue[1].split(',');
    }
  }, {
    key: "events",
    value: function events() {
      var _this = this;

      this.buttonsAdd.forEach(function (button) {
        button.addEventListener('click', _this.addOrRemoveActivity.bind(_this));
      });
      if (this.activitiesFilterContainer !== null) this.activitiesFilterContainer.addEventListener('DOMNodeInserted', function (element) {
        var activity = element.target;
        var btn = activity.querySelector('.activity__content__actions__add');
        btn.addEventListener('click', _this.addOrRemoveActivity.bind(_this));
      });
    }
  }, {
    key: "setStatus",
    value: function setStatus() {}
  }, {
    key: "containActivity",
    value: function containActivity(activityId) {
      return this.activities.includes(activityId);
    }
  }, {
    key: "updateCartText",
    value: function updateCartText() {
      if (this.activities.length === 0) this.cartBar.classList.add('cart_bar--initial');else {
        this.cartBar.classList.remove('cart_bar--initial');
        this.cartBarText.innerHTML = this.activities.length;
      }
      this.cartBar.classList.remove('cart_bar--visible');
    }
  }, {
    key: "showCart",
    value: function showCart() {
      this.cartBar.classList.remove('cart_bar--visible');
      this.cartBar.classList.add('cart_bar--visible');
    }
  }, {
    key: "makeCartBarActivityItem",
    value: function makeCartBarActivityItem(activity) {
      var activityItem = this.cartBarActivityPrototype.cloneNode(true);
      activityItem.setAttribute('id', 'activityItem_' + activity.id);
      var image = activityItem.querySelector('img'); //todo: make a thumbnail

      image.setAttribute('src', activity.image.staticImagePath);
      var name = activityItem.querySelector('h5');
      name.innerHTML = activity.name.length < 25 ? activity.name : activity.name.substring(0, 25) + '...';
      return activityItem;
    }
  }, {
    key: "fetchActivity",
    value: function fetchActivity(activityId) {
      var _this2 = this;

      var url = this.fetchUrl + '/' + activityId;
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(url).then(function (response) {
        var dataActivity = response.data.activity;

        var activityItem = _this2.makeCartBarActivityItem(dataActivity);

        _this2.cartBarActivityContainer.appendChild(activityItem);
      })["catch"](function () {
        return null;
      });
    }
  }, {
    key: "addOrRemoveActivity",
    value: function addOrRemoveActivity(e) {
      var button = e.target;
      var activityId = button.getAttribute('data-activity_id');

      if (this.containActivity(activityId)) {
        this.removeActivity(activityId);
        this.updateCartText();
      } else {
        this.addActivity(activityId);
        this.updateCartText();
        this.showCart();
      }

      button.classList.toggle('checked');
      button.querySelector('svg.heart').classList.toggle('heart--fill-white');
    }
  }]);

  return AddToCart;
}();

/* harmony default export */ __webpack_exports__["default"] = (AddToCart);

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

/***/ "./assets/styles/activities.scss":
/*!***************************************!*\
  !*** ./assets/styles/activities.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/scripts/activities.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~activity~bucket_list","vendors~activities~app~contact","vendors~activities~app","vendors~activities~contact","vendors~activities"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hY3Rpdml0aWVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvYWN0aXZpdGllcy9fZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FjdGl2aXRpZXMvX21ha2VfYWN0aXZpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hY3Rpdml0aWVzL19tb3JlX2FjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hY3Rpdml0aWVzL19zdG9yaWVzX2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FjdGl2aXRpZXMvX3N0b3J5X2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZ2xvYmFsL19hZGRUb0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWN0aXZpdGllcy5zY3NzIl0sIm5hbWVzIjpbIkZpbHRlckFjdGl2aXRpZXMiLCJMb2FkQWN0aXZpdGllcyIsIkFkZFRvQ2FydCIsIlN0b3JpZXNMYXlvdXQiLCJTdG9yeURlc2NyaXB0aW9uIiwidXJsRmlsdGVycyIsInVybFNlYXJjaCIsImFjdGl2aXRpZXNUZXh0Q291bnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhY3Rpdml0aWVzVGV4dCIsImFjdGl2aXRpZXNMaXN0IiwiYWN0aXZpdGllc0xpc3RJbml0aWFsIiwiYWN0aXZpdGllc0xpc3RGaWx0ZXJTZWFyY2giLCJwcm90b3R5cGUiLCJmaWx0ZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsInNlYXJjaEZvcm1JbnB1dCIsInNlYXJjaEZvcm1TdWJtaXQiLCJsb2FkaW5nRG90cyIsImdldEFjdGl2aXRpZXNGcm9tU2VsZWN0ZWRGaWx0ZXIiLCJldmVudHMiLCJmb3JFYWNoIiwieCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhY3RpdmVGaWx0ZXIiLCJiaW5kIiwiZ2V0QWN0aXZpdGllc0Zyb21TZWFyY2giLCJhbW91bnRBY3Rpdml0aWVzIiwibGVuZ3RoIiwiaW5uZXJUZXh0IiwidG9TdHJpbmciLCJlIiwicHJldmVudERlZmF1bHQiLCJlbGVtZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidXJsIiwiZmlsdGVyc1RleHQiLCJpIiwidmFsdWUiLCJtYWtlVXJsRm9yRmlsdGVyIiwiZ2V0QWN0aXZpdGllcyIsInNob3dJbml0aWFsQ29udGFpbmVyIiwibWFrZVVybEZvclNlYXJjaCIsInRoYXQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImFjdGl2aXRpZXMiLCJkYXRhIiwibG9hZE1vcmUiLCJhY3Rpdml0eSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImltYWdlIiwibmV3QWN0aXZpdHkiLCJNYWtlQWN0aXZpdHkiLCJtYWtlIiwiYXBwZW5kQ2hpbGQiLCJoaWRlTG9hZGluZ0FuaW1hdGlvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNob3dMb2FkaW5nQW5pbWF0aW9uIiwiYWRkIiwicmVtb3ZlIiwiaW1hZ2VzU2l6ZXMiLCJkZXNjcmlwdGlvbkxlbmdodCIsIm1heFdpZHRoIiwic3JjU2V0IiwiZGltIiwicHVzaCIsImpvaW4iLCJjbG9uZU5vZGUiLCJpbWFnZVNyY1NldCIsIm1ha2VJbWFnZVNyY1NldCIsInN0YXRpY0ltYWdlUGF0aCIsImltYWdlU2l6ZSIsInNldEF0dHJpYnV0ZSIsImlkIiwiYmFzZTY0IiwiZGVzY3JpcHRpb24iLCJpbm5lckhUTUwiLCJuYW1lIiwiY2xpcEh0bWwiLCJpbmRpY2F0b3IiLCJsaW5rIiwicHJpY2UiLCJhbW91bnQiLCJidG5Mb2FkIiwiZ2V0RGF0YSIsInBvcyIsInN0b3JpZXNTZWxlY3RvcnMiLCJzdG9yaWVzIiwic3Rvcmllc0Ftb3VudCIsInN0b3JpZXNDb250YWluZXIiLCJpbml0Iiwic3RvcnlTZWxlY3RvciIsImNoYW5nZUFjdGl2ZVN0b3J5IiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZGlzcGxhY2VtZW50Iiwic3RvcnkiLCJfc3RvcnlTZWxlY3RvciIsInN0b3J5SWQiLCJnZXRBdHRyaWJ1dGUiLCJuZXdBY3RpdmVTdG9yeVBvcyIsInBhcnNlSW50Iiwic3BsaXQiLCJhc3NvY2lhdGVTdG9yeSIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJtYXAiLCJNYXAiLCJjb250YWluZXIiLCJzdHlsZSIsImNlbnRlciIsInpvb20iLCJzY3JvbGxab29tIiwiZGlzYWJsZSIsIm1hcmtlciIsIk1hcmtlciIsInBhdGhzIiwibWFya2VycyIsImdlb2pzb25zIiwibGF5ZXJzIiwibWF4Vmlld0Nvb3JkcyIsInByZXZpb3VzVGltZSIsIm9uIiwicmVhZFBhdGhzIiwid2luZG93Iiwib25zY3JvbGwiLCJwYXRoIiwiaW5kZXgiLCJpc0VsZW1lbnRPblNjcmVlbiIsInNldEFjdGl2ZVBhdGgiLCJwcm9wcyIsIkpTT04iLCJwYXJzZSIsImZseVRvIiwiZ2VvanNvbiIsImNvb3JkaW5hdGVzIiwiZmVhdHVyZXMiLCJmZWF0dXJlIiwiZ2VvbWV0cnkiLCJ0eXBlIiwiY29vcmRpbmF0ZSIsImxhdHMiLCJsb2dzIiwic29ydCIsImEiLCJiIiwibWF4Q29vcmRzIiwidGltZXN0YW1wIiwic2V0TG5nTGF0IiwiYWRkVG8iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRlTWFya2VyIiwicmVtb3ZlTGF5ZXJzIiwiQXJyYXkiLCJrZXlzIiwiaW5kZXhzIiwicHJldmlvdXNMYXllcklkIiwicHJldmlvdXNNYXBMYXllciIsImdldExheWVyIiwicHJldmlvdXNNYXBTb3VyY2UiLCJnZXRTb3VyY2UiLCJyZW1vdmVMYXllciIsInJlbW92ZVNvdXJjZSIsImN1cnJlbnRMYXllcklkIiwiY3VycmVudE1hcExheWVyIiwiYWRkTGF5ZXIiLCJmaXRCb3VuZHMiLCJwYWRkaW5nIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiaW5uZXJIZWlnaHQiLCJidXR0b25zU2VsZWN0b3IiLCJhY3Rpdml0aWVzRmlsdGVyQ29udGFpbmVyIiwiYnV0dG9uc0FkZCIsImNhcnRCYXIiLCJjYXJ0QmFyVGV4dCIsImNhcnRCYXJBY3Rpdml0eVByb3RvdHlwZSIsImNhcnRCYXJBY3Rpdml0eUNvbnRhaW5lciIsImxvYWRBY3Rpdml0aWVzIiwic2V0U3RhdHVzIiwiZmV0Y2hVcmwiLCJjdXJyZW50VmFsdWUiLCJnZXRDb29raWUiLCJidXR0b24iLCJhZGRPclJlbW92ZUFjdGl2aXR5IiwiYnRuIiwiYWN0aXZpdHlJZCIsImluY2x1ZGVzIiwiYWN0aXZpdHlJdGVtIiwic3Vic3RyaW5nIiwiZGF0YUFjdGl2aXR5IiwibWFrZUNhcnRCYXJBY3Rpdml0eUl0ZW0iLCJjb250YWluQWN0aXZpdHkiLCJyZW1vdmVBY3Rpdml0eSIsInVwZGF0ZUNhcnRUZXh0IiwiYWRkQWN0aXZpdHkiLCJzaG93Q2FydCIsInNldENvb2tpZSIsImRheXMiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiZXhwaXJlcyIsInRvR01UU3RyaW5nIiwiY29va2llIiwiY0FyciIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBSUEsbUVBQUo7QUFDQSxJQUFJQywyRUFBSjtBQUNBLElBQUlDLGlFQUFKLENBQWMsa0NBQWQ7QUFDQSxJQUFJQywwRUFBSjtBQUNBLElBQUlDLDZFQUFKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7SUFFTUosZ0I7OztBQUNGLDhCQUFhO0FBQUE7O0FBQ1QsU0FBS0ssVUFB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QUFhRixJQUFJLENBQUNHLE9BQUwsS0FBZ0JKLElBQUksR0FBQyxFQUFMLEdBQVEsRUFBUixHQUFXLEVBQVgsR0FBYyxJQUEzQztBQUNBLE1BQUlLLE9BQU8sR0FBRyxlQUFhSixJQUFJLENBQUNLLFdBQUwsRUFBM0I7QUFDQTlNLFVBQVEsQ0FBQytNLE1BQVQsR0FBa0JqSSxJQUFJLEdBQUcsR0FBUCxHQUFhN0MsS0FBYixHQUNkNEssT0FEYyxHQUNKLFVBRGQ7QUFFSDtBQUVNLFNBQVNyQixTQUFULENBQW1CMUcsSUFBbkIsRUFBeUI7QUFDNUIsTUFBSWtJLElBQUksR0FBR2hOLFFBQVEsQ0FBQytNLE1BQVQsQ0FBZ0J4RyxLQUFoQixDQUFzQixHQUF0QixDQUFYOztBQUNBLE9BQUksSUFBSXZFLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBR2dMLElBQUksQ0FBQzNMLE1BQXJCLEVBQTRCVyxDQUFDLEVBQTdCLEVBQWlDO0FBQzdCLFFBQUkrSyxNQUFNLEdBQUdDLElBQUksQ0FBQ2hMLENBQUQsQ0FBSixDQUFRdUUsS0FBUixDQUFjLEdBQWQsRUFBa0IsQ0FBbEIsQ0FBYjtBQUNBd0csVUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZQSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVFLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUIsRUFBekIsQ0FBWjtBQUNBLFFBQUlGLE1BQU0sQ0FBQyxDQUFELENBQU4sS0FBY2pJLElBQWxCLEVBQ0ksT0FBT2lJLE1BQVA7QUFDUDs7QUFDRCxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7OztBQ2pCRCx1QyIsImZpbGUiOiJhY3Rpdml0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvYWN0aXZpdGllcy5zY3NzJztcclxuXHJcbmltcG9ydCBGaWx0ZXJBY3Rpdml0aWVzIGZyb20gJy4vbW9kdWxlcy9hY3Rpdml0aWVzL19maWx0ZXJzJztcclxuaW1wb3J0IExvYWRBY3Rpdml0aWVzIGZyb20gJy4vbW9kdWxlcy9hY3Rpdml0aWVzL19tb3JlX2FjdGl2aXRpZXMnO1xyXG5pbXBvcnQgQWRkVG9DYXJ0IGZyb20gJy4vbW9kdWxlcy9nbG9iYWwvX2FkZFRvQ2FydCc7XHJcbmltcG9ydCBTdG9yeURlc2NyaXB0aW9uIGZyb20gJy4vbW9kdWxlcy9hY3Rpdml0aWVzL19zdG9yeV9kZXNjcmlwdGlvbic7XHJcbmltcG9ydCBTdG9yaWVzTGF5b3V0IGZyb20gJy4vbW9kdWxlcy9hY3Rpdml0aWVzL19zdG9yaWVzX2xheW91dCc7XHJcblxyXG5cclxubmV3IEZpbHRlckFjdGl2aXRpZXMoKTtcclxubmV3IExvYWRBY3Rpdml0aWVzKCk7XHJcbm5ldyBBZGRUb0NhcnQoJy5hY3Rpdml0eV9fY29udGVudF9fYWN0aW9uc19fYWRkJyk7XHJcbm5ldyBTdG9yaWVzTGF5b3V0KCk7XHJcbm5ldyBTdG9yeURlc2NyaXB0aW9uKCk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBNYWtlQWN0aXZpdHkgZnJvbSBcIi4vX21ha2VfYWN0aXZpdHlcIjtcclxuXHJcbmNsYXNzIEZpbHRlckFjdGl2aXRpZXMge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnVybEZpbHRlcnMgPSAnL2FjdGl2aXRpZXNBcGlQb3NGaWx0ZXInO1xyXG4gICAgICAgIHRoaXMudXJsU2VhcmNoID0gJy9hY3Rpdml0aWVzQXBpUG9zU2VhcmNoJztcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzVGV4dENvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX3RpdGxlIHNwYW4nKTtcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX3RpdGxlIGgzJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzTGlzdEluaXRpYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyX19pbml0aWFsJyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzTGlzdEZpbHRlclNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19saXN0X19jb250YWluZXJfX2ZpbHRlcl9zZWFyY2gnKTtcclxuICAgICAgICAvLyB0aGlzLmJ0bkxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fbGlzdF9fbW9yZSBidXR0b24nKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fbGlzdF9faXRlbV9fcHJvdG90eXBlIGRpdicpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpdml0aWVzX19zZWxlY3RvcnNfX2ZpbHRlcnNfX2xpc3RzIGxpJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoRm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX3NlbGVjdG9yc19fc2VhcmNoIGZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcclxuICAgICAgICB0aGlzLnNlYXJjaEZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fc2VsZWN0b3JzX19zZWFyY2ggZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGluZ0RvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZ19kb3RzOmZpcnN0LWNoaWxkJyk7XHJcbiAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzRnJvbVNlbGVjdGVkRmlsdGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzLmZvckVhY2goKHgpPT57eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWN0aXZlRmlsdGVyLmJpbmQodGhpcykgKX0pO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaEZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldEFjdGl2aXRpZXNGcm9tU2VhcmNoLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0RmlsdGVyU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVJbnNlcnRlZCcsICgpPT57XHJcbiAgICAgICAgICAgIGxldCBhbW91bnRBY3Rpdml0aWVzID0gdGhpcy5hY3Rpdml0aWVzTGlzdEZpbHRlclNlYXJjaC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZpdHknKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdGllc1RleHQuaW5uZXJUZXh0ID0gIGFtb3VudEFjdGl2aXRpZXMudG9TdHJpbmcoKSsnIEFrdGl2aXTDpHRlbiBnZWZ1bmRlbic7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZlRmlsdGVyKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB0aGlzLmdldEFjdGl2aXRpZXNGcm9tU2VsZWN0ZWRGaWx0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlVXJsRm9yRmlsdGVyKCl7XHJcbiAgICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2aXRpZXNfX3NlbGVjdG9yc19fZmlsdGVyc19fbGlzdHMgbGkuc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyc1RleHQgPSAnJztcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJzLmxlbmd0aCAtIDE7IGkrKylcclxuICAgICAgICAgICAgICAgIGZpbHRlcnNUZXh0ICs9IGZpbHRlcnNbaV0uaW5uZXJUZXh0ICsgJywnO1xyXG4gICAgICAgICAgICBmaWx0ZXJzVGV4dCArPSBmaWx0ZXJzW2ZpbHRlcnMubGVuZ3RoIC0gMV0uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICB1cmwgPSB0aGlzLnVybEZpbHRlcnMgKyAnLycgKyBmaWx0ZXJzVGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlVXJsRm9yU2VhcmNoKCl7XHJcbiAgICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEZvcm1JbnB1dC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcnNUZXh0ID0gdGhpcy5zZWFyY2hGb3JtSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIHVybCA9IHRoaXMudXJsU2VhcmNoICsgJy8nICsgZmlsdGVyc1RleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZpdGllc0Zyb21TZWxlY3RlZEZpbHRlcigpe1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLm1ha2VVcmxGb3JGaWx0ZXIoKTtcclxuICAgICAgICBpZiAodXJsLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0aXZpdGllcyh1cmwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5pdGlhbENvbnRhaW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2aXRpZXNGcm9tU2VhcmNoKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMubWFrZVVybEZvclNlYXJjaCgpO1xyXG4gICAgICAgIGlmICh1cmwubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzKHVybCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnNob3dJbml0aWFsQ29udGFpbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZpdGllcyh1cmwpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2aXRpZXMgPSByZXNwb25zZS5kYXRhLmFjdGl2aXRpZXM7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9hZE1vcmUgPSByZXNwb25zZS5kYXRhLmxvYWRNb3JlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vVE9ETzogbWFrZSBsb2FkIG1vcmUgYnV0dG9uIHBhcmEgbGFzIGFjdGl2aWRhZGVzIGZpbHRyYWRhc1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGxvYWRNb3JlID09PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmJ0bkxvYWQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2aXRpZXMubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0RmlsdGVyU2VhcmNoLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpdml0eScpLmZvckVhY2goKGFjdGl2aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWN0aXZpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0aWVzLmZvckVhY2goKGFjdGl2aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpdml0eSE9PSBudWxsICYmIGFjdGl2aXR5LmltYWdlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3QWN0aXZpdHkgPSBuZXcgTWFrZUFjdGl2aXR5KHRoYXQucHJvdG90eXBlKS5tYWtlKGFjdGl2aXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3RGaWx0ZXJTZWFyY2guYXBwZW5kQ2hpbGQobmV3QWN0aXZpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIC8vbm8gc2UgaGFuIGVuY29udHJhZG9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2aXRpZXNUZXh0LmlubmVyVGV4dCA9ICdNaXQgZGllc2VuIEZpbHRlcm4gd3VyZGVuIGtlaW5lIEFrdGl2aXTDpHRlbiBnZWZ1bmRlbic7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhhdC5oaWRlTG9hZGluZ0FuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dMb2FkaW5nQW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0luaXRpYWxDb250YWluZXIoKXtcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0RmlsdGVyU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2FjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcl9fZmlsdGVyX3NlYXJjaC0taGlkZScpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3RJbml0aWFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcl9faW5pdGlhbC0taGlkZScpO1xyXG5cclxuICAgICAgICBsZXQgYW1vdW50QWN0aXZpdGllcyA9IHRoaXMuYWN0aXZpdGllc0xpc3RJbml0aWFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpdml0eScpLmxlbmd0aDtcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNUZXh0LmlubmVyVGV4dCA9ICBhbW91bnRBY3Rpdml0aWVzLnRvU3RyaW5nKCkrJyBBa3Rpdml0w6R0ZW4gZ2VmdW5kZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dMb2FkaW5nQW5pbWF0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzVGV4dC5pbm5lclRleHQgPSAnU3VjaGVuIFNpZSBuYWNoIEFrdGl2aXTDpHRlbiBtaXQgZGllc2VuIEZpbHRlcm4gLi4uJzsgLy9idXNjYW5kb1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3RGaWx0ZXJTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyX19maWx0ZXJfc2VhcmNoLS1oaWRlJyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzTGlzdEluaXRpYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyX19pbml0aWFsLS1oaWRlJyk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGluZ0RvdHMuY2xhc3NMaXN0LnRvZ2dsZSgnbG9hZGluZ19kb3RzLS12aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUxvYWRpbmdBbmltYXRpb24oKXtcclxuICAgICAgICB0aGlzLmxvYWRpbmdEb3RzLmNsYXNzTGlzdC50b2dnbGUoJ2xvYWRpbmdfZG90cy0tdmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQWN0aXZpdGllczsiLCJpbXBvcnQgY2xpcEh0bWwgZnJvbSAndGV4dC1jbGlwcGVyJztcclxuXHJcbmNsYXNzIE1ha2VBY3Rpdml0eSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90b3R5cGUpe1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlID0gcHJvdG90eXBlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzU2l6ZXMgPSBbMTkyMCwgMTIwMCwgMTAwMCwgOTAwLCA4MDAsIDYwMF07XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbkxlbmdodCA9IDc1O1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VJbWFnZVNyY1NldCh1cmwsIG1heFdpZHRoKXtcclxuICAgICAgICBsZXQgc3JjU2V0ID0gW107XHJcbiAgICAgICAgdGhpcy5pbWFnZXNTaXplcy5mb3JFYWNoKChkaW0pPT57XHJcbiAgICAgICAgICAgIGlmIChkaW0gPD0gbWF4V2lkdGgpXHJcbiAgICAgICAgICAgICAgICBzcmNTZXQucHVzaCgnL21lZGlhL2NhY2hlL3Jlc29sdmUvbWluX3dpZHRoXycgKyBkaW0gKyAnLycgKyB1cmwgKyAnICcgKyBkaW0gKyAndycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzcmNTZXQuam9pbignLCAnKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlKGFjdGl2aXR5KXtcclxuXHJcbiAgICAgICAgbGV0IG5ld0FjdGl2aXR5ID0gdGhpcy5wcm90b3R5cGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIGxldCBpbWFnZVNyY1NldCA9IHRoaXMubWFrZUltYWdlU3JjU2V0KGFjdGl2aXR5LmltYWdlLnN0YXRpY0ltYWdlUGF0aCwgYWN0aXZpdHkuaW1hZ2UuaW1hZ2VTaXplKTtcclxuXHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5X19jb250ZW50X19hY3Rpb25zX19hZGQnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZpdHlfaWQnLCBhY3Rpdml0eS5pZCk7XHJcblxyXG4gICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnLCBpbWFnZVNyY1NldCk7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignaW1nJykuc2V0QXR0cmlidXRlKCdzaXplcycsICcobWluLXdpZHRoOjEwMDBweCkgMzN2dywgOTB2dycpO1xyXG4gICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNldEF0dHJpYnV0ZSgnc3JjJywgYWN0aXZpdHkuaW1hZ2UuYmFzZTY0KTtcclxuICAgICAgICBuZXdBY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFjdGl2aXR5LmltYWdlLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICBuZXdBY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCdpbWcnKS5jbGFzc0xpc3QuYWRkKCdibHVyLXVwJyk7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignaW1nJykuY2xhc3NMaXN0LmFkZCgnbGF6eWxvYWQnKTtcclxuICAgICAgICBuZXdBY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCdoNCcpLmlubmVySFRNTCA9IGFjdGl2aXR5Lm5hbWU7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5X19jb250ZW50X19kZXNjcmlwdGlvbiBhJykuaW5uZXJIVE1MID0gY2xpcEh0bWwoYWN0aXZpdHkuZGVzY3JpcHRpb24sIHRoaXMuZGVzY3JpcHRpb25MZW5naHQsIHtpbmRpY2F0b3I6Jyd9KTtcclxuICAgICAgICBuZXdBY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdHlfX2ltYWdlIGEnKS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBhY3Rpdml0eS5saW5rKTtcclxuICAgICAgICBuZXdBY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdHlfX2NvbnRlbnRfX3RpdGxlIGEnKS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBhY3Rpdml0eS5saW5rKTtcclxuICAgICAgICBuZXdBY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdHlfX2NvbnRlbnRfX2Rlc2NyaXB0aW9uIGEnKS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBhY3Rpdml0eS5saW5rKTtcclxuXHJcbiAgICAgICAgaWYoYWN0aXZpdHkucHJpY2UgIT09IG51bGwpXHJcbiAgICAgICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0eV9fY29udGVudF9fcHJpY2Ugc3BhbicpLmlubmVySFRNTCA9ICdhYiA8YnI+JythY3Rpdml0eS5wcmljZSArIFwiIOKCrFwiO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5X19jb250ZW50X19wcmljZScpLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3QWN0aXZpdHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ha2VBY3Rpdml0eTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTWFrZUFjdGl2aXR5IGZyb20gJy4vX21ha2VfYWN0aXZpdHknO1xyXG5cclxuY2xhc3MgTG9hZEFjdGl2aXRpZXMge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmFtb3VudCA9IDY7XHJcbiAgICAgICAgdGhpcy51cmwgPSAnL2FjdGl2aXRpZXNBcGlQb3MnO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3RJbml0aWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcl9faW5pdGlhbCcpO1xyXG4gICAgICAgIHRoaXMuYnRuTG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19saXN0X19tb3JlIGJ1dHRvbicpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmdEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmdfZG90czpsYXN0LWNoaWxkJyk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvdG90eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX2l0ZW1fX3Byb3RvdHlwZSBkaXYnKTtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIGlmICh0aGlzLmJ0bkxvYWQgIT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5idG5Mb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5nZXREYXRhLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXREYXRhKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuYWN0aXZpdGllc0xpc3RJbml0aWFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpdml0eScpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMudXJsKycvJytwb3MrJy8nK3RoaXMuYW1vdW50O1xyXG5cclxuICAgICAgICBheGlvcy5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpdml0aWVzID0gcmVzcG9uc2UuZGF0YS5hY3Rpdml0aWVzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvYWRNb3JlID0gcmVzcG9uc2UuZGF0YS5sb2FkTW9yZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobG9hZE1vcmUgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYnRuTG9hZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZpdGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZpdGllcy5mb3JFYWNoKChhY3Rpdml0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3QWN0aXZpdHkgPSBuZXcgTWFrZUFjdGl2aXR5KHRoaXMucHJvdG90eXBlKS5tYWtlKGFjdGl2aXR5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3RJbml0aWFsLmFwcGVuZENoaWxkKG5ld0FjdGl2aXR5KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyBtb3N0cmFyIHF1ZSBubyBoYXkgbWFzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nRG90cy5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkaW5nX2RvdHMtLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyLS1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3IgYXQgbG9hZGluZyBtb3JlIGFjdGl2aXRpZXNcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lci0tbG9hZGluZycpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0RvdHMuY2xhc3NMaXN0LnRvZ2dsZSgnbG9hZGluZ19kb3RzLS12aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkQWN0aXZpdGllczsiLCJjbGFzcyBTdG9yaWVzTGF5b3V0IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5zdG9yaWVzU2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2aXRpZXNfX3N0b3JpZXNfX2l0ZW1zIGxpJyk7XHJcbiAgICAgICAgdGhpcy5zdG9yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2aXRpZXNfX3N0b3JpZXNfX3N0b3J5Jyk7XHJcbiAgICAgICAgdGhpcy5zdG9yaWVzQW1vdW50ID0gdGhpcy5zdG9yaWVzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnN0b3JpZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fc3Rvcmllc19fc3RvcnlfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5zdG9yaWVzU2VsZWN0b3JzLmZvckVhY2goKHN0b3J5U2VsZWN0b3IpPT57XHJcbiAgICAgICAgICAgIHN0b3J5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUFjdGl2ZVN0b3J5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICB0aGlzLnN0b3JpZXNTZWxlY3RvcnNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5zdG9yaWVzWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JpZXNDb250YWluZXIuaGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0b3J5LTAnKS5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaWQgPSAwOyBpZCA8IHRoaXMuc3Rvcmllc0Ftb3VudDsgaWQrKykge1xyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gaWQqMTAwO1xyXG4gICAgICAgICAgICBsZXQgc3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RvcnktJytpZCk7XHJcbiAgICAgICAgICAgIHN0b3J5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiICsgZGlzcGxhY2VtZW50ICsgXCIlKTtcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUFjdGl2ZVN0b3J5KGUpe1xyXG4gICAgICAgIGxldCBzdG9yeVNlbGVjdG9yID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIHRoaXMuc3Rvcmllc1NlbGVjdG9ycy5mb3JFYWNoKChfc3RvcnlTZWxlY3Rvcik9PntcclxuICAgICAgICAgICAgX3N0b3J5U2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yaWVzLmZvckVhY2goKHN0b3J5KT0+e1xyXG4gICAgICAgICAgICBzdG9yeS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdG9yeVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBsZXQgc3RvcnlJZCA9IHN0b3J5U2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdkYXRhLXN0b3J5Jyk7XHJcbiAgICAgICAgbGV0IG5ld0FjdGl2ZVN0b3J5UG9zID0gcGFyc2VJbnQoc3RvcnlJZC5zcGxpdCgnLScpWzFdKTtcclxuICAgICAgICBsZXQgYXNzb2NpYXRlU3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0b3J5SWQpO1xyXG4gICAgICAgIGFzc29jaWF0ZVN0b3J5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JpZXNDb250YWluZXIuaGVpZ2h0ID0gYXNzb2NpYXRlU3RvcnkuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICBmb3IobGV0IGlkID0gMDsgaWQgPCB0aGlzLnN0b3JpZXNBbW91bnQ7IGlkKyspIHtcclxuICAgICAgICAgICAgbGV0IGRpc3BsYWNlbWVudCA9IChpZC1uZXdBY3RpdmVTdG9yeVBvcykqMTAwO1xyXG4gICAgICAgICAgICBsZXQgc3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RvcnktJytpZCk7XHJcbiAgICAgICAgICAgIHN0b3J5LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiICsgZGlzcGxhY2VtZW50ICsgXCIlKTtcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yaWVzTGF5b3V0OyIsImltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wnO1xyXG5cclxuY2xhc3MgU3RvcnlEZXNjcmlwdGlvbntcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gJ3BrLmV5SjFJam9pWTJGeWRHMWhiblZ6WlhJaUxDSmhJam9pWTJwNWFIVnlOSEIyTUROdWR6Tm5ibkppYUdWdGNXSjJPQ0o5LjJVUERLblNaUk53TlIxSVRsWlFFQUEnO1xyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJ21hcCcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9vdXRkb29ycy12MTEnLFxyXG4gICAgICAgICAgICBjZW50ZXI6IFsgLTgxLjExMDUxNTU5NDQ4MjQyLDIyLjUwODkwOTU2NTIwNTI0XSxcclxuICAgICAgICAgICAgem9vbTogNlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWFwLnNjcm9sbFpvb20uZGlzYWJsZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtlciA9IG5ldyBtYXBib3hnbC5NYXJrZXIoKTtcclxuICAgICAgICB0aGlzLnBvcyA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuc3Rvcmllc1NlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpdml0aWVzX19zdG9yaWVzX19pdGVtcyBsaScpO1xyXG4gICAgICAgIHRoaXMuc3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fc3Rvcmllc19fc3RvcnknKTtcclxuICAgICAgICB0aGlzLnBhdGhzID0gdGhpcy5zdG9yeS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuW2RhdGEtcGF0aC1tYXBdJyk7XHJcblxyXG4gICAgICAgIHRoaXMubWFya2VycyA9IHRoaXMuc3RvcnkucXVlcnlTZWxlY3RvckFsbCgnc3BhbltkYXRhLW1hcF0nKTtcclxuXHJcbiAgICAgICAgdGhpcy5nZW9qc29ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5tYXhWaWV3Q29vcmRzID0gW107XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1RpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5tYXAub24oJ2xvYWQnLHRoaXMucmVhZFBhdGhzLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JpZXNTZWxlY3RvcnMuZm9yRWFjaCgoc3RvcnlTZWxlY3Rvcik9PntcclxuICAgICAgICAgICAgc3RvcnlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlQWN0aXZlU3RvcnkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGF0aHMuZm9yRWFjaCgocGF0aCwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnRPblNjcmVlbihwYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlUGF0aChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9UT0RPOiB1Z2x5IHNvbHV0aW9uXHJcbiAgICAgICAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnRPblNjcmVlbihtYXJrZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BzID0gbWFya2VyLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXAnKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcyA9IEpTT04ucGFyc2UocHJvcHMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5mbHlUbyh7Y2VudGVyOiBwcm9wcy5jZW50ZXIsIHpvb206IHByb3BzLnpvb219KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVhZFBhdGhzKCl7XHJcbiAgICAgICAgaWYgKHRoaXMucGF0aHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMucGF0aHMuZm9yRWFjaCgocGF0aCwgaW5kZXgpPT57XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvcHMgPSBwYXRoLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXRoLW1hcCcpO1xyXG4gICAgICAgICAgICBwcm9wcyA9IEpTT04ucGFyc2UocHJvcHMpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb2pzb25zLnB1c2gocHJvcHMuZ2VvanNvbik7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcclxuICAgICAgICAgICAgcHJvcHMuZ2VvanNvbi5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKGZlYXR1cmUuZ2VvbWV0cnkudHlwZT09PSdMaW5lU3RyaW5nJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZS5nZW9tZXRyeS5jb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxhdHMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGxvZ3MgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpPT4ge1xyXG4gICAgICAgICAgICAgICAgbGF0cy5wdXNoKGNvb3JkaW5hdGVbMF0pO1xyXG4gICAgICAgICAgICAgICAgbG9ncy5wdXNoKGNvb3JkaW5hdGVbMV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxhdHMuc29ydCgoYSxiKSA9PiB7IHJldHVybiBhIDw9IGIgPyAtMSA6IDEgfSApO1xyXG4gICAgICAgICAgICBsb2dzLnNvcnQoKGEsYikgPT4geyByZXR1cm4gYSA8PSBiID8gLTEgOiAxIH0gKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBtYXhDb29yZHMgPSBbW2xhdHNbMF0sbG9nc1swXV0sXHJcbiAgICAgICAgICAgICAgICBbbGF0c1tsYXRzLmxlbmd0aC0xXSwgbG9nc1tsb2dzLmxlbmd0aC0xXSBdXTtcclxuICAgICAgICAgICAgdGhpcy5tYXhWaWV3Q29vcmRzLnB1c2gobWF4Q29vcmRzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgJ2lkJzogJ2xheWVyLXBhdGhfJytpbmRleCxcclxuICAgICAgICAgICAgICAgICd0eXBlJzogJ2xpbmUnLFxyXG4gICAgICAgICAgICAgICAgJ3NvdXJjZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdnZW9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IHByb3BzLmdlb2pzb25cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnbGF5b3V0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLWNhcCc6ICdyb3VuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtam9pbic6ICdyb3VuZCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAncGFpbnQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtY29sb3InOiAnIzYyYWIwMycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtd2lkdGgnOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLW9wYWNpdHknOiAuODVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGVNYXJrZXIodGltZXN0YW1wKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzVGltZSArIDQxIDwgdGltZXN0YW1wKXtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1RpbWUgPSB0aW1lc3RhbXA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hcmtlci5zZXRMbmdMYXQodGhpcy5nZW9qc29uLmZlYXR1cmVzWzBdLmdlb21ldHJ5LmNvb3JkaW5hdGVzW3RoaXMucG9zXSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hcmtlci5hZGRUbyh0aGlzLm1hcCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvcyArPSAxO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zID09PSB0aGlzLmdlb2pzb24uZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZU1hcmtlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VBY3RpdmVTdG9yeShlKSB7XHJcbiAgICAgICAgbGV0IHN0b3J5U2VsZWN0b3IgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgbGV0IHN0b3J5SWQgPSBzdG9yeVNlbGVjdG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1zdG9yeScpO1xyXG4gICAgICAgIGxldCBhc3NvY2lhdGVTdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RvcnlJZCk7XHJcbiAgICAgICAgdGhpcy5wYXRocyA9IGFzc29jaWF0ZVN0b3J5LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW5bZGF0YS1wYXRoLW1hcF0nKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUxheWVycyhbLi4uQXJyYXkoMTIpLmtleXMoKV0pO1xyXG4gICAgICAgIHRoaXMucmVhZFBhdGhzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGF5ZXJzKGluZGV4cyl7XHJcbiAgICAgICAgaW5kZXhzLmZvckVhY2goKGluZGV4KT0+e1xyXG4gICAgICAgICAgICBsZXQgcHJldmlvdXNMYXllcklkID0gJ2xheWVyLXBhdGhfJytpbmRleDtcclxuICAgICAgICAgICAgbGV0IHByZXZpb3VzTWFwTGF5ZXIgPSB0aGlzLm1hcC5nZXRMYXllcihwcmV2aW91c0xheWVySWQpO1xyXG4gICAgICAgICAgICBsZXQgcHJldmlvdXNNYXBTb3VyY2UgPSB0aGlzLm1hcC5nZXRTb3VyY2UocHJldmlvdXNMYXllcklkKTtcclxuICAgICAgICAgICAgaWYodHlwZW9mIHByZXZpb3VzTWFwTGF5ZXIgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIocHJldmlvdXNMYXllcklkKTtcclxuICAgICAgICAgICAgaWYodHlwZW9mIHByZXZpb3VzTWFwU291cmNlICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZVNvdXJjZShwcmV2aW91c0xheWVySWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZVBhdGgoaW5kZXgpe1xyXG5cclxuICAgICAgICB0aGlzLnJlbW92ZUxheWVycyhbaW5kZXgtMSwgaW5kZXgrMV0pO1xyXG5cclxuICAgICAgICBsZXQgY3VycmVudExheWVySWQgPSAnbGF5ZXItcGF0aF8nK2luZGV4O1xyXG4gICAgICAgIGxldCBjdXJyZW50TWFwTGF5ZXIgPSB0aGlzLm1hcC5nZXRMYXllcihjdXJyZW50TGF5ZXJJZCk7XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiBjdXJyZW50TWFwTGF5ZXIgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXJzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLm1heFZpZXdDb29yZHNbaW5kZXhdLCB7cGFkZGluZzogMjB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzRWxlbWVudE9uU2NyZWVuKGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgYm91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4gYm91bmRzLnRvcCA+IDAgICYmIGJvdW5kcy50b3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeURlc2NyaXB0aW9uO1xyXG4iLCJpbXBvcnQgeyBzZXRDb29raWUsIGdldENvb2tpZSB9IGZyb20gJy4vX3V0aWxzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIEFkZFRvQ2FydCB7XHJcbiAgICBjb25zdHJ1Y3RvcihidXR0b25zU2VsZWN0b3Ipe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc1NlbGVjdG9yID0gYnV0dG9uc1NlbGVjdG9yO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNGaWx0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyX19maWx0ZXJfc2VhcmNoJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25zQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmJ1dHRvbnNTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfYmFyJyk7XHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X2JhciAuY2FydF9iYXJfX2NvbnRlbnRfX3RleHQgc3BhbicpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2FydEJhckFjdGl2aXR5UHJvdG90eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfYmFyX19jb250ZW50X19hY3Rpdml0aWVzX19pdGVtX19wcm90b3R5cGUgPiBkaXYnKTtcclxuICAgICAgICB0aGlzLmNhcnRCYXJBY3Rpdml0eUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X2Jhcl9fY29udGVudF9fYWN0aXZpdGllcycpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRBY3Rpdml0aWVzKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXR1cygpO1xyXG5cclxuICAgICAgICB0aGlzLmZldGNoVXJsID0gJy9hY3Rpdml0aWVzQXBpR2V0QnlJZCc7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEFjdGl2aXRpZXMoKXtcclxuICAgICAgICBsZXQgY3VycmVudFZhbHVlID0gZ2V0Q29va2llKCdwcm9kdWN0c19jYXJ0Jyk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzID0gY3VycmVudFZhbHVlWzFdLnNwbGl0KCcsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5idXR0b25zQWRkLmZvckVhY2goKGJ1dHRvbik9PntcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRPclJlbW92ZUFjdGl2aXR5LmJpbmQodGhpcylcclxuICAgICAgICApfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXRpZXNGaWx0ZXJDb250YWluZXIgIT09IG51bGwpXHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzRmlsdGVyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVJbnNlcnRlZCcsIChlbGVtZW50KT0+e1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZpdHkgPSBlbGVtZW50LnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGFjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0eV9fY29udGVudF9fYWN0aW9uc19fYWRkJyk7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkT3JSZW1vdmVBY3Rpdml0eS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0dXMoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbkFjdGl2aXR5KGFjdGl2aXR5SWQpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2aXRpZXMuaW5jbHVkZXMoYWN0aXZpdHlJZCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZUNhcnRUZXh0KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdGllcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QuYWRkKCdjYXJ0X2Jhci0taW5pdGlhbCcpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhcnRCYXIuY2xhc3NMaXN0LnJlbW92ZSgnY2FydF9iYXItLWluaXRpYWwnKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0QmFyVGV4dC5pbm5lckhUTUwgPSB0aGlzLmFjdGl2aXRpZXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcnRfYmFyLS12aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NhcnQoKXtcclxuICAgICAgICB0aGlzLmNhcnRCYXIuY2xhc3NMaXN0LnJlbW92ZSgnY2FydF9iYXItLXZpc2libGUnKTtcclxuICAgICAgICB0aGlzLmNhcnRCYXIuY2xhc3NMaXN0LmFkZCgnY2FydF9iYXItLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlQ2FydEJhckFjdGl2aXR5SXRlbShhY3Rpdml0eSl7XHJcbiAgICAgICAgbGV0IGFjdGl2aXR5SXRlbSA9IHRoaXMuY2FydEJhckFjdGl2aXR5UHJvdG90eXBlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBhY3Rpdml0eUl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsICdhY3Rpdml0eUl0ZW1fJythY3Rpdml0eS5pZCk7XHJcbiAgICAgICAgbGV0IGltYWdlID0gYWN0aXZpdHlJdGVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgIC8vdG9kbzogbWFrZSBhIHRodW1ibmFpbFxyXG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgYWN0aXZpdHkuaW1hZ2Uuc3RhdGljSW1hZ2VQYXRoKTtcclxuICAgICAgICBsZXQgbmFtZSA9IGFjdGl2aXR5SXRlbS5xdWVyeVNlbGVjdG9yKCdoNScpO1xyXG4gICAgICAgIG5hbWUuaW5uZXJIVE1MID0gYWN0aXZpdHkubmFtZS5sZW5ndGggPCAyNSA/IGFjdGl2aXR5Lm5hbWUgOiBhY3Rpdml0eS5uYW1lLnN1YnN0cmluZygwLCAyNSkrJy4uLic7XHJcblxyXG4gICAgICAgIHJldHVybiBhY3Rpdml0eUl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hBY3Rpdml0eShhY3Rpdml0eUlkKXtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5mZXRjaFVybCsnLycrYWN0aXZpdHlJZDtcclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFBY3Rpdml0eSA9IHJlc3BvbnNlLmRhdGEuYWN0aXZpdHk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2aXR5SXRlbSA9IHRoaXMubWFrZUNhcnRCYXJBY3Rpdml0eUl0ZW0oZGF0YUFjdGl2aXR5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FydEJhckFjdGl2aXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGl2aXR5SXRlbSk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRPclJlbW92ZUFjdGl2aXR5KGUpe1xyXG5cclxuICAgICAgICBsZXQgYnV0dG9uID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpdml0eUlkID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpdml0eV9pZCcpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250YWluQWN0aXZpdHkoYWN0aXZpdHlJZCkpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFjdGl2aXR5KGFjdGl2aXR5SWQpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnRUZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEFjdGl2aXR5KGFjdGl2aXR5SWQpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnRUZXh0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XHJcbiAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ3N2Zy5oZWFydCcpLmNsYXNzTGlzdC50b2dnbGUoJ2hlYXJ0LS1maWxsLXdoaXRlJyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRUb0NhcnQ7IiwiZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZSh2YWx1ZSwgbmFtZT0ncHJvZHVjdHNfY2FydCcgLCBkYXlzPTMpIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSsoZGF5cyoyNCo2MCo2MCoxMDAwKSk7XHJcbiAgICBsZXQgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiK2RhdGUudG9HTVRTdHJpbmcgKCk7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArXHJcbiAgICAgICAgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICBsZXQgY0FyciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgZm9yKGxldCBpPTA7aSA8IGNBcnIubGVuZ3RoO2krKykge1xyXG4gICAgICAgIGxldCBjb29raWUgPSBjQXJyW2ldLnNwbGl0KFwiPVwiLDIpO1xyXG4gICAgICAgIGNvb2tpZVswXSA9IGNvb2tpZVswXS5yZXBsYWNlKC9eXFxzKy8sXCJcIik7XHJcbiAgICAgICAgaWYgKGNvb2tpZVswXSA9PT0gbmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIGNvb2tpZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=