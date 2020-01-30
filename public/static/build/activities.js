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
/* harmony import */ var _modules_activities_story_description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/activities/_story_description */ "./assets/scripts/modules/activities/_story_description.js");
/* harmony import */ var _modules_activities_stories_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/activities/_stories_layout */ "./assets/scripts/modules/activities/_stories_layout.js");





new _modules_activities_filters__WEBPACK_IMPORTED_MODULE_1__["default"]();
new _modules_activities_more_activities__WEBPACK_IMPORTED_MODULE_2__["default"]();
new _modules_activities_stories_layout__WEBPACK_IMPORTED_MODULE_4__["default"]();
new _modules_activities_story_description__WEBPACK_IMPORTED_MODULE_3__["default"]();

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

/***/ "./assets/styles/activities.scss":
/*!***************************************!*\
  !*** ./assets/styles/activities.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/scripts/activities.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~activity~bucket_list","vendors~activities~app~contact","vendors~activities~contact","vendors~activities~app","vendors~activities"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hY3Rpdml0aWVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvYWN0aXZpdGllcy9fZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FjdGl2aXRpZXMvX21ha2VfYWN0aXZpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hY3Rpdml0aWVzL19tb3JlX2FjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hY3Rpdml0aWVzL19zdG9yaWVzX2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FjdGl2aXRpZXMvX3N0b3J5X2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWN0aXZpdGllcy5zY3NzIl0sIm5hbWVzIjpbIkZpbHRlckFjdGl2aXRpZXMiLCJMb2FkQWN0aXZpdGllcyIsIlN0b3JpZXNMYXlvdXQiLCJTdG9yeURlc2NyaXB0aW9uIiwidXJsRmlsdGVycyIsInVybFNlYXJjaCIsImFjdGl2aXRpZXNUZXh0Q291bnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhY3Rpdml0aWVzVGV4dCIsImFjdGl2aXRpZXNMaXN0IiwiYWN0aXZpdGllc0xpc3RJbml0aWFsIiwiYWN0aXZpdGllc0xpc3RGaWx0ZXJTZWFyY2giLCJwcm90b3R5cGUiLCJmaWx0ZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsInNlYXJjaEZvcm1JbnB1dCIsInNlYXJjaEZvcm1TdWJtaXQiLCJsb2FkaW5nRG90cyIsImdldEFjdGl2aXRpZXNGcm9tU2VsZWN0ZWRGaWx0ZXIiLCJldmVudHMiLCJmb3JFYWNoIiwieCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhY3RpdmVGaWx0ZXIiLCJiaW5kIiwiZ2V0QWN0aXZpdGllc0Zyb21TZWFyY2giLCJhbW91bnRBY3Rpdml0aWVzIiwibGVuZ3RoIiwiaW5uZXJUZXh0IiwidG9TdHJpbmciLCJlIiwicHJldmVudERlZmF1bHQiLCJlbGVtZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidXJsIiwiZmlsdGVyc1RleHQiLCJpIiwidmFsdWUiLCJtYWtlVXJsRm9yRmlsdGVyIiwiZ2V0QWN0aXZpdGllcyIsInNob3dJbml0aWFsQ29udGFpbmVyIiwibWFrZVVybEZvclNlYXJjaCIsInRoYXQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImFjdGl2aXRpZXMiLCJkYXRhIiwibG9hZE1vcmUiLCJhY3Rpdml0eSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImltYWdlIiwibmV3QWN0aXZpdHkiLCJNYWtlQWN0aXZpdHkiLCJtYWtlIiwiYXBwZW5kQ2hpbGQiLCJoaWRlTG9hZGluZ0FuaW1hdGlvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNob3dMb2FkaW5nQW5pbWF0aW9uIiwiYWRkIiwicmVtb3ZlIiwiaW1hZ2VzU2l6ZXMiLCJkZXNjcmlwdGlvbkxlbmdodCIsIm1heFdpZHRoIiwic3JjU2V0IiwiZGltIiwicHVzaCIsImpvaW4iLCJjbG9uZU5vZGUiLCJpbWFnZVNyY1NldCIsIm1ha2VJbWFnZVNyY1NldCIsInN0YXRpY0ltYWdlUGF0aCIsImltYWdlU2l6ZSIsInNldEF0dHJpYnV0ZSIsImlkIiwiYmFzZTY0IiwiZGVzY3JpcHRpb24iLCJpbm5lckhUTUwiLCJuYW1lIiwiY2xpcEh0bWwiLCJpbmRpY2F0b3IiLCJsaW5rIiwicHJpY2UiLCJhbW91bnQiLCJidG5Mb2FkIiwiZ2V0RGF0YSIsInBvcyIsInN0b3JpZXNTZWxlY3RvcnMiLCJzdG9yaWVzIiwic3Rvcmllc0Ftb3VudCIsInN0b3JpZXNDb250YWluZXIiLCJpbml0Iiwic3RvcnlTZWxlY3RvciIsImNoYW5nZUFjdGl2ZVN0b3J5IiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZGlzcGxhY2VtZW50Iiwic3RvcnkiLCJfc3RvcnlTZWxlY3RvciIsInN0b3J5SWQiLCJnZXRBdHRyaWJ1dGUiLCJuZXdBY3RpdmVTdG9yeVBvcyIsInBhcnNlSW50Iiwic3BsaXQiLCJhc3NvY2lhdGVTdG9yeSIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJtYXAiLCJNYXAiLCJjb250YWluZXIiLCJzdHlsZSIsImNlbnRlciIsInpvb20iLCJzY3JvbGxab29tIiwiZGlzYWJsZSIsIm1hcmtlciIsIk1hcmtlciIsInBhdGhzIiwibWFya2VycyIsImdlb2pzb25zIiwibGF5ZXJzIiwibWF4Vmlld0Nvb3JkcyIsInByZXZpb3VzVGltZSIsIm9uIiwicmVhZFBhdGhzIiwid2luZG93Iiwib25zY3JvbGwiLCJwYXRoIiwiaW5kZXgiLCJpc0VsZW1lbnRPblNjcmVlbiIsInNldEFjdGl2ZVBhdGgiLCJwcm9wcyIsIkpTT04iLCJwYXJzZSIsImZseVRvIiwiZ2VvanNvbiIsImNvb3JkaW5hdGVzIiwiZmVhdHVyZXMiLCJmZWF0dXJlIiwiZ2VvbWV0cnkiLCJ0eXBlIiwiY29vcmRpbmF0ZSIsImxhdHMiLCJsb2dzIiwic29ydCIsImEiLCJiIiwibWF4Q29vcmRzIiwidGltZXN0YW1wIiwic2V0TG5nTGF0IiwiYWRkVG8iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRlTWFya2VyIiwicmVtb3ZlTGF5ZXJzIiwiQXJyYXkiLCJrZXlzIiwiaW5kZXhzIiwicHJldmlvdXNMYXllcklkIiwicHJldmlvdXNNYXBMYXllciIsImdldExheWVyIiwicHJldmlvdXNNYXBTb3VyY2UiLCJnZXRTb3VyY2UiLCJyZW1vdmVMYXllciIsInJlbW92ZVNvdXJjZSIsImN1cnJlbnRMYXllcklkIiwiY3VycmVudE1hcExheWVyIiwiYWRkTGF5ZXIiLCJmaXRCb3VuZHMiLCJwYWRkaW5nIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiaW5uZXJIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFB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O0FBRUEsVUFBSW9DLGNBQWMsR0FBRyxnQkFBY3BDLEtBQW5DO0FBQ0EsVUFBSXFDLGVBQWUsR0FBRyxLQUFLMUQsR0FBTCxDQUFTb0QsUUFBVCxDQUFrQkssY0FBbEIsQ0FBdEI7O0FBRUEsVUFBRyxPQUFPQyxlQUFQLEtBQTJCLFdBQTlCLEVBQTJDO0FBQ3ZDLGFBQUsxRCxHQUFMLENBQVMyRCxRQUFULENBQWtCLEtBQUs5QyxNQUFMLENBQVlRLEtBQVosQ0FBbEI7QUFDQSxhQUFLckIsR0FBTCxDQUFTNEQsU0FBVCxDQUFtQixLQUFLOUMsYUFBTCxDQUFtQk8sS0FBbkIsQ0FBbkIsRUFBOEM7QUFBQ3dDLGlCQUFPLEVBQUU7QUFBVixTQUE5QztBQUNIO0FBRUo7OztzQ0FFaUI5SSxPLEVBQVM7QUFDdkIsVUFBSStJLE1BQU0sR0FBRy9JLE9BQU8sQ0FBQ2dKLHFCQUFSLEVBQWI7QUFDQSxhQUFPRCxNQUFNLENBQUNFLEdBQVAsR0FBYSxDQUFiLElBQW1CRixNQUFNLENBQUNFLEdBQVAsR0FBYTlDLE1BQU0sQ0FBQytDLFdBQVAsR0FBcUIsQ0FBNUQ7QUFDSDs7Ozs7O0FBR1VoTCwrRUFBZixFOzs7Ozs7Ozs7OztBQzdLQSx1QyIsImZpbGUiOiJhY3Rpdml0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvYWN0aXZpdGllcy5zY3NzJztcclxuXHJcbmltcG9ydCBGaWx0ZXJBY3Rpdml0aWVzIGZyb20gJy4vbW9kdWxlcy9hY3Rpdml0aWVzL19maWx0ZXJzJztcclxuaW1wb3J0IExvYWRBY3Rpdml0aWVzIGZyb20gJy4vbW9kdWxlcy9hY3Rpdml0aWVzL19tb3JlX2FjdGl2aXRpZXMnO1xyXG5pbXBvcnQgU3RvcnlEZXNjcmlwdGlvbiBmcm9tICcuL21vZHVsZXMvYWN0aXZpdGllcy9fc3RvcnlfZGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgU3Rvcmllc0xheW91dCBmcm9tICcuL21vZHVsZXMvYWN0aXZpdGllcy9fc3Rvcmllc19sYXlvdXQnO1xyXG5cclxuXHJcbm5ldyBGaWx0ZXJBY3Rpdml0aWVzKCk7XHJcbm5ldyBMb2FkQWN0aXZpdGllcygpO1xyXG5uZXcgU3Rvcmllc0xheW91dCgpO1xyXG5uZXcgU3RvcnlEZXNjcmlwdGlvbigpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTWFrZUFjdGl2aXR5IGZyb20gXCIuL19tYWtlX2FjdGl2aXR5XCI7XHJcblxyXG5jbGFzcyBGaWx0ZXJBY3Rpdml0aWVzIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy51cmxGaWx0ZXJzID0gJy9hY3Rpdml0aWVzQXBpUG9zRmlsdGVyJztcclxuICAgICAgICB0aGlzLnVybFNlYXJjaCA9ICcvYWN0aXZpdGllc0FwaVBvc1NlYXJjaCc7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc1RleHRDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19saXN0X190aXRsZSBzcGFuJyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19saXN0X190aXRsZSBoMycpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3RJbml0aWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcl9faW5pdGlhbCcpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3RGaWx0ZXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyX19maWx0ZXJfc2VhcmNoJyk7XHJcbiAgICAgICAgLy8gdGhpcy5idG5Mb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX21vcmUgYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvdG90eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX2l0ZW1fX3Byb3RvdHlwZSBkaXYnKTtcclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZpdGllc19fc2VsZWN0b3JzX19maWx0ZXJzX19saXN0cyBsaScpO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaEZvcm1JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19zZWxlY3RvcnNfX3NlYXJjaCBmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hGb3JtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX3NlbGVjdG9yc19fc2VhcmNoIGZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmdEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmdfZG90czpmaXJzdC1jaGlsZCcpO1xyXG4gICAgICAgIHRoaXMuZ2V0QWN0aXZpdGllc0Zyb21TZWxlY3RlZEZpbHRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMuZmlsdGVycy5mb3JFYWNoKCh4KT0+e3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFjdGl2ZUZpbHRlci5iaW5kKHRoaXMpICl9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hGb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5nZXRBY3Rpdml0aWVzRnJvbVNlYXJjaC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzTGlzdEZpbHRlclNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCAoKT0+e1xyXG4gICAgICAgICAgICBsZXQgYW1vdW50QWN0aXZpdGllcyA9IHRoaXMuYWN0aXZpdGllc0xpc3RGaWx0ZXJTZWFyY2gucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2aXR5JykubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2aXRpZXNUZXh0LmlubmVyVGV4dCA9ICBhbW91bnRBY3Rpdml0aWVzLnRvU3RyaW5nKCkrJyBBa3Rpdml0w6R0ZW4gZ2VmdW5kZW4nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2ZUZpbHRlcihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzRnJvbVNlbGVjdGVkRmlsdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVVybEZvckZpbHRlcigpe1xyXG4gICAgICAgIGxldCB1cmwgPSAnJztcclxuICAgICAgICBsZXQgZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpdml0aWVzX19zZWxlY3RvcnNfX2ZpbHRlcnNfX2xpc3RzIGxpLnNlbGVjdGVkJyk7XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcnNUZXh0ID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVycy5sZW5ndGggLSAxOyBpKyspXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzVGV4dCArPSBmaWx0ZXJzW2ldLmlubmVyVGV4dCArICcsJztcclxuICAgICAgICAgICAgZmlsdGVyc1RleHQgKz0gZmlsdGVyc1tmaWx0ZXJzLmxlbmd0aCAtIDFdLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgdXJsID0gdGhpcy51cmxGaWx0ZXJzICsgJy8nICsgZmlsdGVyc1RleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVVybEZvclNlYXJjaCgpe1xyXG4gICAgICAgIGxldCB1cmwgPSAnJztcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hGb3JtSW5wdXQudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJzVGV4dCA9IHRoaXMuc2VhcmNoRm9ybUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB1cmwgPSB0aGlzLnVybFNlYXJjaCArICcvJyArIGZpbHRlcnNUZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2aXRpZXNGcm9tU2VsZWN0ZWRGaWx0ZXIoKXtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5tYWtlVXJsRm9yRmlsdGVyKCk7XHJcbiAgICAgICAgaWYgKHVybC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICB0aGlzLmdldEFjdGl2aXRpZXModXJsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0luaXRpYWxDb250YWluZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3Rpdml0aWVzRnJvbVNlYXJjaChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLm1ha2VVcmxGb3JTZWFyY2goKTtcclxuICAgICAgICBpZiAodXJsLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0aXZpdGllcyh1cmwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5pdGlhbENvbnRhaW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2aXRpZXModXJsKXtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGF4aW9zLmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpdml0aWVzID0gcmVzcG9uc2UuZGF0YS5hY3Rpdml0aWVzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvYWRNb3JlID0gcmVzcG9uc2UuZGF0YS5sb2FkTW9yZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL1RPRE86IG1ha2UgbG9hZCBtb3JlIGJ1dHRvbiBwYXJhIGxhcyBhY3RpdmlkYWRlcyBmaWx0cmFkYXNcclxuICAgICAgICAgICAgICAgIC8vIGlmIChsb2FkTW9yZSA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5idG5Mb2FkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpdml0aWVzLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpdml0aWVzTGlzdEZpbHRlclNlYXJjaC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZpdHknKS5mb3JFYWNoKChhY3Rpdml0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFjdGl2aXR5KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZpdGllcy5mb3JFYWNoKChhY3Rpdml0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZpdHkhPT0gbnVsbCAmJiBhY3Rpdml0eS5pbWFnZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0FjdGl2aXR5ID0gbmV3IE1ha2VBY3Rpdml0eSh0aGF0LnByb3RvdHlwZSkubWFrZShhY3Rpdml0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0RmlsdGVyU2VhcmNoLmFwcGVuZENoaWxkKG5ld0FjdGl2aXR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSAvL25vIHNlIGhhbiBlbmNvbnRyYWRvXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpdml0aWVzVGV4dC5pbm5lclRleHQgPSAnTWl0IGRpZXNlbiBGaWx0ZXJuIHd1cmRlbiBrZWluZSBBa3Rpdml0w6R0ZW4gZ2VmdW5kZW4nO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoYXQuaGlkZUxvYWRpbmdBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZ0FuaW1hdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dJbml0aWFsQ29udGFpbmVyKCl7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzTGlzdEZpbHRlclNlYXJjaC5jbGFzc0xpc3QuYWRkKCdhY3Rpdml0aWVzX19saXN0X19jb250YWluZXJfX2ZpbHRlcl9zZWFyY2gtLWhpZGUnKTtcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0SW5pdGlhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3Rpdml0aWVzX19saXN0X19jb250YWluZXJfX2luaXRpYWwtLWhpZGUnKTtcclxuXHJcbiAgICAgICAgbGV0IGFtb3VudEFjdGl2aXRpZXMgPSB0aGlzLmFjdGl2aXRpZXNMaXN0SW5pdGlhbC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZpdHknKS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzVGV4dC5pbm5lclRleHQgPSAgYW1vdW50QWN0aXZpdGllcy50b1N0cmluZygpKycgQWt0aXZpdMOkdGVuIGdlZnVuZGVuJztcclxuICAgIH1cclxuXHJcbiAgICBzaG93TG9hZGluZ0FuaW1hdGlvbigpe1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc1RleHQuaW5uZXJUZXh0ID0gJ1N1Y2hlbiBTaWUgbmFjaCBBa3Rpdml0w6R0ZW4gbWl0IGRpZXNlbiBGaWx0ZXJuIC4uLic7IC8vYnVzY2FuZG9cclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0RmlsdGVyU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcl9fZmlsdGVyX3NlYXJjaC0taGlkZScpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3RJbml0aWFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcl9faW5pdGlhbC0taGlkZScpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmdEb3RzLmNsYXNzTGlzdC50b2dnbGUoJ2xvYWRpbmdfZG90cy0tdmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVMb2FkaW5nQW5pbWF0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nRG90cy5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkaW5nX2RvdHMtLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckFjdGl2aXRpZXM7IiwiaW1wb3J0IGNsaXBIdG1sIGZyb20gJ3RleHQtY2xpcHBlcic7XHJcblxyXG5jbGFzcyBNYWtlQWN0aXZpdHkge1xyXG4gICAgY29uc3RydWN0b3IocHJvdG90eXBlKXtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcclxuICAgICAgICB0aGlzLmltYWdlc1NpemVzID0gWzE5MjAsIDEyMDAsIDEwMDAsIDkwMCwgODAwLCA2MDBdO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25MZW5naHQgPSA3NTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlSW1hZ2VTcmNTZXQodXJsLCBtYXhXaWR0aCl7XHJcbiAgICAgICAgbGV0IHNyY1NldCA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzU2l6ZXMuZm9yRWFjaCgoZGltKT0+e1xyXG4gICAgICAgICAgICBpZiAoZGltIDw9IG1heFdpZHRoKVxyXG4gICAgICAgICAgICAgICAgc3JjU2V0LnB1c2goJy9tZWRpYS9jYWNoZS9yZXNvbHZlL21pbl93aWR0aF8nICsgZGltICsgJy8nICsgdXJsICsgJyAnICsgZGltICsgJ3cnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc3JjU2V0LmpvaW4oJywgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZShhY3Rpdml0eSl7XHJcblxyXG4gICAgICAgIGxldCBuZXdBY3Rpdml0eSA9IHRoaXMucHJvdG90eXBlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBsZXQgaW1hZ2VTcmNTZXQgPSB0aGlzLm1ha2VJbWFnZVNyY1NldChhY3Rpdml0eS5pbWFnZS5zdGF0aWNJbWFnZVBhdGgsIGFjdGl2aXR5LmltYWdlLmltYWdlU2l6ZSk7XHJcblxyXG4gICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0eV9fY29udGVudF9fYWN0aW9uc19fYWRkJykuc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2aXR5X2lkJywgYWN0aXZpdHkuaWQpO1xyXG5cclxuICAgICAgICBuZXdBY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3Jjc2V0JywgaW1hZ2VTcmNTZXQpO1xyXG4gICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCAnKG1pbi13aWR0aDoxMDAwcHgpIDMzdncsIDkwdncnKTtcclxuICAgICAgICBuZXdBY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGFjdGl2aXR5LmltYWdlLmJhc2U2NCk7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignaW1nJykuc2V0QXR0cmlidXRlKCdhbHQnLCBhY3Rpdml0eS5pbWFnZS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignaW1nJykuY2xhc3NMaXN0LmFkZCgnYmx1ci11cCcpO1xyXG4gICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmNsYXNzTGlzdC5hZGQoJ2xhenlsb2FkJyk7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignaDQnKS5pbm5lckhUTUwgPSBhY3Rpdml0eS5uYW1lO1xyXG4gICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0eV9fY29udGVudF9fZGVzY3JpcHRpb24gYScpLmlubmVySFRNTCA9IGNsaXBIdG1sKGFjdGl2aXR5LmRlc2NyaXB0aW9uLCB0aGlzLmRlc2NyaXB0aW9uTGVuZ2h0LCB7aW5kaWNhdG9yOicnfSk7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5X19pbWFnZSBhJykuc2V0QXR0cmlidXRlKCdocmVmJywgYWN0aXZpdHkubGluayk7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5X19jb250ZW50X190aXRsZSBhJykuc2V0QXR0cmlidXRlKCdocmVmJywgYWN0aXZpdHkubGluayk7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5X19jb250ZW50X19kZXNjcmlwdGlvbiBhJykuc2V0QXR0cmlidXRlKCdocmVmJywgYWN0aXZpdHkubGluayk7XHJcblxyXG4gICAgICAgIGlmKGFjdGl2aXR5LnByaWNlICE9PSBudWxsKVxyXG4gICAgICAgICAgICBuZXdBY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdHlfX2NvbnRlbnRfX3ByaWNlIHNwYW4nKS5pbm5lckhUTUwgPSAnYWIgPGJyPicrYWN0aXZpdHkucHJpY2UgKyBcIiDigqxcIjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0eV9fY29udGVudF9fcHJpY2UnKS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld0FjdGl2aXR5O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWtlQWN0aXZpdHk7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IE1ha2VBY3Rpdml0eSBmcm9tICcuL19tYWtlX2FjdGl2aXR5JztcclxuXHJcbmNsYXNzIExvYWRBY3Rpdml0aWVzIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5hbW91bnQgPSA2O1xyXG4gICAgICAgIHRoaXMudXJsID0gJy9hY3Rpdml0aWVzQXBpUG9zJztcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19saXN0X19jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0SW5pdGlhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19saXN0X19jb250YWluZXJfX2luaXRpYWwnKTtcclxuICAgICAgICB0aGlzLmJ0bkxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fbGlzdF9fbW9yZSBidXR0b24nKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nRG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nX2RvdHM6bGFzdC1jaGlsZCcpO1xyXG5cclxuICAgICAgICB0aGlzLnByb3RvdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19saXN0X19pdGVtX19wcm90b3R5cGUgZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICBpZiAodGhpcy5idG5Mb2FkICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuYnRuTG9hZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ2V0RGF0YS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0RGF0YShlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmFjdGl2aXRpZXNMaXN0SW5pdGlhbC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZpdHknKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnVybCsnLycrcG9zKycvJyt0aGlzLmFtb3VudDtcclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aXZpdGllcyA9IHJlc3BvbnNlLmRhdGEuYWN0aXZpdGllcztcclxuICAgICAgICAgICAgICAgIGxldCBsb2FkTW9yZSA9IHJlc3BvbnNlLmRhdGEubG9hZE1vcmU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxvYWRNb3JlID09PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmJ0bkxvYWQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2aXRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXRpZXMuZm9yRWFjaCgoYWN0aXZpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0FjdGl2aXR5ID0gbmV3IE1ha2VBY3Rpdml0eSh0aGlzLnByb3RvdHlwZSkubWFrZShhY3Rpdml0eSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0SW5pdGlhbC5hcHBlbmRDaGlsZChuZXdBY3Rpdml0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCcgbW9zdHJhciBxdWUgbm8gaGF5IG1hcycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0RvdHMuY2xhc3NMaXN0LnRvZ2dsZSgnbG9hZGluZ19kb3RzLS12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lci0tbG9hZGluZycpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yIGF0IGxvYWRpbmcgbW9yZSBhY3Rpdml0aWVzXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdhY3Rpdml0aWVzX19saXN0X19jb250YWluZXItLWxvYWRpbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdEb3RzLmNsYXNzTGlzdC50b2dnbGUoJ2xvYWRpbmdfZG90cy0tdmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZEFjdGl2aXRpZXM7IiwiY2xhc3MgU3Rvcmllc0xheW91dCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuc3Rvcmllc1NlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpdml0aWVzX19zdG9yaWVzX19pdGVtcyBsaScpO1xyXG4gICAgICAgIHRoaXMuc3RvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpdml0aWVzX19zdG9yaWVzX19zdG9yeScpO1xyXG4gICAgICAgIHRoaXMuc3Rvcmllc0Ftb3VudCA9IHRoaXMuc3Rvcmllcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5zdG9yaWVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX3N0b3JpZXNfX3N0b3J5X19jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMuc3Rvcmllc1NlbGVjdG9ycy5mb3JFYWNoKChzdG9yeVNlbGVjdG9yKT0+e1xyXG4gICAgICAgICAgICBzdG9yeVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VBY3RpdmVTdG9yeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgdGhpcy5zdG9yaWVzU2VsZWN0b3JzWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuc3Rvcmllc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yaWVzQ29udGFpbmVyLmhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdG9yeS0wJykuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICBmb3IobGV0IGlkID0gMDsgaWQgPCB0aGlzLnN0b3JpZXNBbW91bnQ7IGlkKyspIHtcclxuICAgICAgICAgICAgbGV0IGRpc3BsYWNlbWVudCA9IGlkKjEwMDtcclxuICAgICAgICAgICAgbGV0IHN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0b3J5LScraWQpO1xyXG4gICAgICAgICAgICBzdG9yeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGRpc3BsYWNlbWVudCArIFwiJSk7XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VBY3RpdmVTdG9yeShlKXtcclxuICAgICAgICBsZXQgc3RvcnlTZWxlY3RvciA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JpZXNTZWxlY3RvcnMuZm9yRWFjaCgoX3N0b3J5U2VsZWN0b3IpPT57XHJcbiAgICAgICAgICAgIF9zdG9yeVNlbGVjdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Rvcmllcy5mb3JFYWNoKChzdG9yeSk9PntcclxuICAgICAgICAgICAgc3RvcnkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc3RvcnlTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgbGV0IHN0b3J5SWQgPSBzdG9yeVNlbGVjdG9yLmdldEF0dHJpYnV0ZSgnZGF0YS1zdG9yeScpO1xyXG4gICAgICAgIGxldCBuZXdBY3RpdmVTdG9yeVBvcyA9IHBhcnNlSW50KHN0b3J5SWQuc3BsaXQoJy0nKVsxXSk7XHJcbiAgICAgICAgbGV0IGFzc29jaWF0ZVN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdG9yeUlkKTtcclxuICAgICAgICBhc3NvY2lhdGVTdG9yeS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yaWVzQ29udGFpbmVyLmhlaWdodCA9IGFzc29jaWF0ZVN0b3J5LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpZCA9IDA7IGlkIDwgdGhpcy5zdG9yaWVzQW1vdW50OyBpZCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXNwbGFjZW1lbnQgPSAoaWQtbmV3QWN0aXZlU3RvcnlQb3MpKjEwMDtcclxuICAgICAgICAgICAgbGV0IHN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0b3J5LScraWQpO1xyXG4gICAgICAgICAgICBzdG9yeS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGRpc3BsYWNlbWVudCArIFwiJSk7XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Rvcmllc0xheW91dDsiLCJpbXBvcnQgbWFwYm94Z2wgZnJvbSAnbWFwYm94LWdsJztcclxuXHJcbmNsYXNzIFN0b3J5RGVzY3JpcHRpb257XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9ICdway5leUoxSWpvaVkyRnlkRzFoYm5WelpYSWlMQ0poSWpvaVkycDVhSFZ5TkhCMk1ETnVkek5uYm5KaWFHVnRjV0oyT0NKOS4yVVBES25TWlJOd05SMUlUbFpRRUFBJztcclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xyXG4gICAgICAgICAgICBjb250YWluZXI6ICdtYXAnLFxyXG4gICAgICAgICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvb3V0ZG9vcnMtdjExJyxcclxuICAgICAgICAgICAgY2VudGVyOiBbIC04MS4xMTA1MTU1OTQ0ODI0MiwyMi41MDg5MDk1NjUyMDUyNF0sXHJcbiAgICAgICAgICAgIHpvb206IDZcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1hcC5zY3JvbGxab29tLmRpc2FibGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXJrZXIgPSBuZXcgbWFwYm94Z2wuTWFya2VyKCk7XHJcbiAgICAgICAgdGhpcy5wb3MgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JpZXNTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZpdGllc19fc3Rvcmllc19faXRlbXMgbGknKTtcclxuICAgICAgICB0aGlzLnN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX3N0b3JpZXNfX3N0b3J5Jyk7XHJcbiAgICAgICAgdGhpcy5wYXRocyA9IHRoaXMuc3RvcnkucXVlcnlTZWxlY3RvckFsbCgnc3BhbltkYXRhLXBhdGgtbWFwXScpO1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtlcnMgPSB0aGlzLnN0b3J5LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW5bZGF0YS1tYXBdJyk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2VvanNvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmxheWVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMubWF4Vmlld0Nvb3JkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMubWFwLm9uKCdsb2FkJyx0aGlzLnJlYWRQYXRocy5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yaWVzU2VsZWN0b3JzLmZvckVhY2goKHN0b3J5U2VsZWN0b3IpPT57XHJcbiAgICAgICAgICAgIHN0b3J5U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUFjdGl2ZVN0b3J5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhdGhzLmZvckVhY2goKHBhdGgsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFbGVtZW50T25TY3JlZW4ocGF0aCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVBhdGgoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vVE9ETzogdWdseSBzb2x1dGlvblxyXG4gICAgICAgICAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFbGVtZW50T25TY3JlZW4obWFya2VyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9wcyA9IG1hcmtlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMgPSBKU09OLnBhcnNlKHByb3BzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAuZmx5VG8oe2NlbnRlcjogcHJvcHMuY2VudGVyLCB6b29tOiBwcm9wcy56b29tfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlYWRQYXRocygpe1xyXG4gICAgICAgIGlmICh0aGlzLnBhdGhzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnBhdGhzLmZvckVhY2goKHBhdGgsIGluZGV4KT0+e1xyXG5cclxuICAgICAgICAgICAgbGV0IHByb3BzID0gcGF0aC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aC1tYXAnKTtcclxuICAgICAgICAgICAgcHJvcHMgPSBKU09OLnBhcnNlKHByb3BzKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9qc29ucy5wdXNoKHByb3BzLmdlb2pzb24pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW107XHJcbiAgICAgICAgICAgIHByb3BzLmdlb2pzb24uZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSk9PntcclxuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlLmdlb21ldHJ5LnR5cGU9PT0nTGluZVN0cmluZycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBsYXRzID0gW107XHJcbiAgICAgICAgICAgIGxldCBsb2dzID0gW107XHJcblxyXG4gICAgICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKT0+IHtcclxuICAgICAgICAgICAgICAgIGxhdHMucHVzaChjb29yZGluYXRlWzBdKTtcclxuICAgICAgICAgICAgICAgIGxvZ3MucHVzaChjb29yZGluYXRlWzFdKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsYXRzLnNvcnQoKGEsYikgPT4geyByZXR1cm4gYSA8PSBiID8gLTEgOiAxIH0gKTtcclxuICAgICAgICAgICAgbG9ncy5zb3J0KChhLGIpID0+IHsgcmV0dXJuIGEgPD0gYiA/IC0xIDogMSB9ICk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbWF4Q29vcmRzID0gW1tsYXRzWzBdLGxvZ3NbMF1dLFxyXG4gICAgICAgICAgICAgICAgW2xhdHNbbGF0cy5sZW5ndGgtMV0sIGxvZ3NbbG9ncy5sZW5ndGgtMV0gXV07XHJcbiAgICAgICAgICAgIHRoaXMubWF4Vmlld0Nvb3Jkcy5wdXNoKG1heENvb3Jkcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxheWVycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICdpZCc6ICdsYXllci1wYXRoXycraW5kZXgsXHJcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdsaW5lJyxcclxuICAgICAgICAgICAgICAgICdzb3VyY2UnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnZ2VvanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBwcm9wcy5nZW9qc29uXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ2xheW91dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS1jYXAnOiAncm91bmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLWpvaW4nOiAncm91bmQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ3BhaW50Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLWNvbG9yJzogJyM2MmFiMDMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLXdpZHRoJzogNCxcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS1vcGFjaXR5JzogLjg1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlTWFya2VyKHRpbWVzdGFtcCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcmV2aW91c1RpbWUgKyA0MSA8IHRpbWVzdGFtcCl7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNUaW1lID0gdGltZXN0YW1wO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXJrZXIuc2V0TG5nTGF0KHRoaXMuZ2VvanNvbi5mZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlc1t0aGlzLnBvc10pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXJrZXIuYWRkVG8odGhpcy5tYXApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3MgKz0gMTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcyA9PT0gdGhpcy5nZW9qc29uLmZlYXR1cmVzWzBdLmdlb21ldHJ5LmNvb3JkaW5hdGVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGVNYXJrZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQWN0aXZlU3RvcnkoZSkge1xyXG4gICAgICAgIGxldCBzdG9yeVNlbGVjdG9yID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIGxldCBzdG9yeUlkID0gc3RvcnlTZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvcnknKTtcclxuICAgICAgICBsZXQgYXNzb2NpYXRlU3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0b3J5SWQpO1xyXG4gICAgICAgIHRoaXMucGF0aHMgPSBhc3NvY2lhdGVTdG9yeS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuW2RhdGEtcGF0aC1tYXBdJyk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVMYXllcnMoWy4uLkFycmF5KDEyKS5rZXlzKCldKTtcclxuICAgICAgICB0aGlzLnJlYWRQYXRocygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxheWVycyhpbmRleHMpe1xyXG4gICAgICAgIGluZGV4cy5mb3JFYWNoKChpbmRleCk9PntcclxuICAgICAgICAgICAgbGV0IHByZXZpb3VzTGF5ZXJJZCA9ICdsYXllci1wYXRoXycraW5kZXg7XHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91c01hcExheWVyID0gdGhpcy5tYXAuZ2V0TGF5ZXIocHJldmlvdXNMYXllcklkKTtcclxuICAgICAgICAgICAgbGV0IHByZXZpb3VzTWFwU291cmNlID0gdGhpcy5tYXAuZ2V0U291cmNlKHByZXZpb3VzTGF5ZXJJZCk7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBwcmV2aW91c01hcExheWVyICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHByZXZpb3VzTGF5ZXJJZCk7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBwcmV2aW91c01hcFNvdXJjZSAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVTb3VyY2UocHJldmlvdXNMYXllcklkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmVQYXRoKGluZGV4KXtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVMYXllcnMoW2luZGV4LTEsIGluZGV4KzFdKTtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRMYXllcklkID0gJ2xheWVyLXBhdGhfJytpbmRleDtcclxuICAgICAgICBsZXQgY3VycmVudE1hcExheWVyID0gdGhpcy5tYXAuZ2V0TGF5ZXIoY3VycmVudExheWVySWQpO1xyXG5cclxuICAgICAgICBpZih0eXBlb2YgY3VycmVudE1hcExheWVyID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyc1tpbmRleF0pO1xyXG4gICAgICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHModGhpcy5tYXhWaWV3Q29vcmRzW2luZGV4XSwge3BhZGRpbmc6IDIwfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc0VsZW1lbnRPblNjcmVlbihlbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIGJvdW5kcy50b3AgPiAwICAmJiBib3VuZHMudG9wIDwgd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcnlEZXNjcmlwdGlvbjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==