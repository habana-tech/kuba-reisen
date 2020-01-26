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
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.link */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _make_activity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_make_activity */ "./assets/scripts/modules/activities/_make_activity.js");












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
    this.activitiesListFilterSearch = document.querySelector('.activities__list__container__filter_search');
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
      var that = this;
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(url).then(function (response) {
        var activities = response.data.activities;
        var loadMore = response.data.loadMore;

        if (activities.length > 0) {
          that.activitiesListFilterSearch.querySelectorAll('.activity').forEach(function (activity) {
            activity.parentNode.removeChild(activity);
          });
          activities.forEach(function (activity) {
            var newActivity = new _make_activity__WEBPACK_IMPORTED_MODULE_12__["default"](that.prototype).make(activity.id, activity.image, activity.imageAlt, activity.name, activity.description, activity.link, activity.price);
            that.activitiesListFilterSearch.appendChild(newActivity);
          });
        } else //no se han encontrado
          that.activitiesText.innerText = 'Mit diesen Filtern wurden keine Aktivitäten gefunden';

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
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var text_clipper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! text-clipper */ "./node_modules/text-clipper/dist/index.js");
/* harmony import */ var text_clipper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(text_clipper__WEBPACK_IMPORTED_MODULE_4__);





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
    value: function makeImageSrcSet(url) {
      var srcSet = [];
      this.imagesSizes.forEach(function (dim) {
        //using the media resolver cqache url!!!
        srcSet.push('/media/cache/resolve/min_width_' + dim + url + ' ' + dim + 'w');
      });
      return srcSet.join(', ');
    }
  }, {
    key: "make",
    value: function make(id, image, imageAlt, name, description, link, price) {
      var newActivity = this.prototype.cloneNode(true);
      var imageSrcSet = this.makeImageSrcSet(image);
      newActivity.querySelector('.activity__content__actions__add').setAttribute('data-activity_id', id);
      newActivity.querySelector('img').setAttribute('data-srcset', imageSrcSet);
      newActivity.querySelector('img').setAttribute('sizes', '(min-width:1000px) 33vw, 90vw'); //TODO: put the base64version?
      // newActivity.querySelector('img').setAttribute('src', image);

      newActivity.querySelector('img').setAttribute('alt', imageAlt);
      newActivity.querySelector('img').classList.add('blur-up');
      newActivity.querySelector('img').classList.add('lazyload');
      newActivity.querySelector('h4').innerHTML = name;
      newActivity.querySelector('.activity__content__description a').innerHTML = text_clipper__WEBPACK_IMPORTED_MODULE_4___default()(description, this.descriptionLenght, {
        indicator: ''
      });
      newActivity.querySelector('.activity__image a').setAttribute('href', link);
      newActivity.querySelector('.activity__content__title a').setAttribute('href', link);
      newActivity.querySelector('.activity__content__description a').setAttribute('href', link);
      if (price !== null) newActivity.querySelector('.activity__content__price span').innerHTML = 'ab <br>' + price + " €";else newActivity.querySelector('.activity__content__price').setAttribute('hidden', 'hidden');
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
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.link */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _make_activity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_make_activity */ "./assets/scripts/modules/activities/_make_activity.js");









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
      e.preventDefault();
      var pos = this.activitiesListInitial.querySelectorAll('.activity').length;
      var url = this.url + '/' + pos + '/' + this.amount;
      var that = this;
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(url).then(function (response) {
        var activities = response.data.activities;
        var loadMore = response.data.loadMore;
        if (loadMore === false) that.btnLoad.classList.add('hidden');

        if (activities.length > 0) {
          activities.forEach(function (activity) {
            var newActivity = new _make_activity__WEBPACK_IMPORTED_MODULE_9__["default"](that.prototype).make(activity.id, activity.image, activity.imageAlt, activity.name, activity.description, activity.link, activity.price);
            that.activitiesListInitial.appendChild(newActivity);
          });
        } else {
          console.error(' mostrar que no hay mas');
        }

        that.loadingDots.classList.toggle('loading_dots--visible');
        that.activitiesList.classList.toggle('activities__list__container--loading');
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
      var image = activityItem.querySelector('img');
      image.setAttribute('src', activity.image);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hY3Rpdml0aWVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvYWN0aXZpdGllcy9fZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FjdGl2aXRpZXMvX21ha2VfYWN0aXZpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hY3Rpdml0aWVzL19tb3JlX2FjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hY3Rpdml0aWVzL19zdG9yaWVzX2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FjdGl2aXRpZXMvX3N0b3J5X2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZ2xvYmFsL19hZGRUb0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWN0aXZpdGllcy5zY3NzIl0sIm5hbWVzIjpbIkZpbHRlckFjdGl2aXRpZXMiLCJMb2FkQWN0aXZpdGllcyIsIkFkZFRvQ2FydCIsIlN0b3JpZXNMYXlvdXQiLCJTdG9yeURlc2NyaXB0aW9uIiwidXJsRmlsdGVycyIsInVybFNlYXJjaCIsImFjdGl2aXRpZXNUZXh0Q291bnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhY3Rpdml0aWVzVGV4dCIsImFjdGl2aXRpZXNMaXN0IiwiYWN0aXZpdGllc0xpc3RJbml0aWFsIiwiYWN0aXZpdGllc0xpc3RGaWx0ZXJTZWFyY2giLCJwcm90b3R5cGUiLCJmaWx0ZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsInNlYXJjaEZvcm1JbnB1dCIsInNlYXJjaEZvcm1TdWJtaXQiLCJsb2FkaW5nRG90cyIsImdldEFjdGl2aXRpZXNGcm9tU2VsZWN0ZWRGaWx0ZXIiLCJldmVudHMiLCJmb3JFYWNoIiwieCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhY3RpdmVGaWx0ZXIiLCJiaW5kIiwiZ2V0QWN0aXZpdGllc0Zyb21TZWFyY2giLCJhbW91bnRBY3Rpdml0aWVzIiwibGVuZ3RoIiwiaW5uZXJUZXh0IiwidG9TdHJpbmciLCJlIiwicHJldmVudERlZmF1bHQiLCJlbGVtZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidXJsIiwiZmlsdGVyc1RleHQiLCJpIiwidmFsdWUiLCJtYWtlVXJsRm9yRmlsdGVyIiwiZ2V0QWN0aXZpdGllcyIsInNob3dJbml0aWFsQ29udGFpbmVyIiwibWFrZVVybEZvclNlYXJjaCIsInRoYXQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImFjdGl2aXRpZXMiLCJkYXRhIiwibG9hZE1vcmUiLCJhY3Rpdml0eSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIm5ld0FjdGl2aXR5IiwiTWFrZUFjdGl2aXR5IiwibWFrZSIsImlkIiwiaW1hZ2UiLCJpbWFnZUFsdCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJwcmljZSIsImFwcGVuZENoaWxkIiwiaGlkZUxvYWRpbmdBbmltYXRpb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzaG93TG9hZGluZ0FuaW1hdGlvbiIsImFkZCIsInJlbW92ZSIsImltYWdlc1NpemVzIiwiZGVzY3JpcHRpb25MZW5naHQiLCJzcmNTZXQiLCJkaW0iLCJwdXNoIiwiam9pbiIsImNsb25lTm9kZSIsImltYWdlU3JjU2V0IiwibWFrZUltYWdlU3JjU2V0Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiY2xpcEh0bWwiLCJpbmRpY2F0b3IiLCJhbW91bnQiLCJidG5Mb2FkIiwiZ2V0RGF0YSIsInBvcyIsInN0b3JpZXNTZWxlY3RvcnMiLCJzdG9yaWVzIiwic3Rvcmllc0Ftb3VudCIsInN0b3JpZXNDb250YWluZXIiLCJpbml0Iiwic3RvcnlTZWxlY3RvciIsImNoYW5nZUFjdGl2ZVN0b3J5IiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZGlzcGxhY2VtZW50Iiwic3RvcnkiLCJfc3RvcnlTZWxlY3RvciIsInN0b3J5SWQiLCJnZXRBdHRyaWJ1dGUiLCJuZXdBY3RpdmVTdG9yeVBvcyIsInBhcnNlSW50Iiwic3BsaXQiLCJhc3NvY2lhdGVTdG9yeSIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJtYXAiLCJNYXAiLCJjb250YWluZXIiLCJzdHlsZSIsImNlbnRlciIsInpvb20iLCJzY3JvbGxab29tIiwiZGlzYWJsZSIsIm1hcmtlciIsIk1hcmtlciIsInBhdGhzIiwibWFya2VycyIsImdlb2pzb25zIiwibGF5ZXJzIiwibWF4Vmlld0Nvb3JkcyIsInByZXZpb3VzVGltZSIsIm9uIiwicmVhZFBhdGhzIiwid2luZG93Iiwib25zY3JvbGwiLCJwYXRoIiwiaW5kZXgiLCJpc0VsZW1lbnRPblNjcmVlbiIsInNldEFjdGl2ZVBhdGgiLCJwcm9wcyIsIkpTT04iLCJwYXJzZSIsImZseVRvIiwiZ2VvanNvbiIsImNvb3JkaW5hdGVzIiwiZmVhdHVyZXMiLCJmZWF0dXJlIiwiZ2VvbWV0cnkiLCJ0eXBlIiwiY29vcmRpbmF0ZSIsImxhdHMiLCJsb2dzIiwic29ydCIsImEiLCJiIiwibWF4Q29vcmRzIiwidGltZXN0YW1wIiwic2V0TG5nTGF0IiwiYWRkVG8iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRlTWFya2VyIiwicmVtb3ZlTGF5ZXJzIiwiQXJyYXkiLCJrZXlzIiwiaW5kZXhzIiwicHJldmlvdXNMYXllcklkIiwicHJldmlvdXNNYXBMYXllciIsImdldExheWVyIiwicHJldmlvdXNNYXBTb3VyY2UiLCJnZXRTb3VyY2UiLCJyZW1vdmVMYXllciIsInJlbW92ZVNvdXJjZSIsImN1cnJlbnRMYXllcklkIiwiY3VycmVudE1hcExheWVyIiwiYWRkTGF5ZXIiLCJmaXRCb3VuZHMiLCJwYWRkaW5nIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiaW5uZXJIZWlnaHQiLCJidXR0b25zU2VsZWN0b3IiLCJhY3Rpdml0aWVzRmlsdGVyQ29udGFpbmVyIiwiYnV0dG9uc0FkZCIsImNhcnRCYXIiLCJjYXJ0QmFyVGV4dCIsImNhcnRCYXJBY3Rpdml0eVByb3RvdHlwZSIsImNhcnRCYXJBY3Rpdml0eUNvbnRhaW5lciIsImxvYWRBY3Rpdml0aWVzIiwic2V0U3RhdHVzIiwiZmV0Y2hVcmwiLCJjdXJyZW50VmFsdWUiLCJnZXRDb29raWUiLCJidXR0b24iLCJhZGRPclJlbW92ZUFjdGl2aXR5IiwiYnRuIiwiYWN0aXZpdHlJZCIsImluY2x1ZGVzIiwiYWN0aXZpdHlJdGVtIiwic3Vic3RyaW5nIiwiZGF0YUFjdGl2aXR5IiwibWFrZUNhcnRCYXJBY3Rpdml0eUl0ZW0iLCJjb250YWluQWN0aXZpdHkiLCJyZW1vdmVBY3Rpdml0eSIsInVwZGF0ZUNhcnRUZXh0IiwiYWRkQWN0aXZpdHkiLCJzaG93Q2FydCIsInNldENvb2tpZSIsImRheXMiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiZXhwaXJlcyIsInRvR01UU3RyaW5nIiwiY29va2llIiwiY0FyciIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBSUEsbUVBQUo7QUFDQSxJQUFJQywyRUFBSjtBQUNBLElBQUlDLGlFQUFKLENBQWMsa0NBQWQ7QUFDQSxJQUFJQywwRUFBSjtBQUNBLElBQUlDLDZFQUFKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7SUFFTUosZ0I7OztBQUNGLDhCQUFhO0FBQUE7O0FBQ1QsU0FBS0ssVUFBTCxHQUFrQix5QkFBbEI7QUFDQSxTQUFLQyxT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QUFhSixJQUFJLENBQUNLLFdBQUwsRUFBM0I7QUFDQTNNLFVBQVEsQ0FBQzRNLE1BQVQsR0FBa0JySixJQUFJLEdBQUcsR0FBUCxHQUFhdEIsS0FBYixHQUNkeUssT0FEYyxHQUNKLFVBRGQ7QUFFSDtBQUVNLFNBQVNyQixTQUFULENBQW1COUgsSUFBbkIsRUFBeUI7QUFDNUIsTUFBSXNKLElBQUksR0FBRzdNLFFBQVEsQ0FBQzRNLE1BQVQsQ0FBZ0J4RyxLQUFoQixDQUFzQixHQUF0QixDQUFYOztBQUNBLE9BQUksSUFBSXBFLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBRzZLLElBQUksQ0FBQ3hMLE1BQXJCLEVBQTRCVyxDQUFDLEVBQTdCLEVBQWlDO0FBQzdCLFFBQUk0SyxNQUFNLEdBQUdDLElBQUksQ0FBQzdLLENBQUQsQ0FBSixDQUFRb0UsS0FBUixDQUFjLEdBQWQsRUFBa0IsQ0FBbEIsQ0FBYjtBQUNBd0csVUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZQSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVFLE9BQVYsQ0FBa0IsTUFBbEIsRUFBeUIsRUFBekIsQ0FBWjtBQUNBLFFBQUlGLE1BQU0sQ0FBQyxDQUFELENBQU4sS0FBY3JKLElBQWxCLEVBQ0ksT0FBT3FKLE1BQVA7QUFDUDs7QUFDRCxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7OztBQ2pCRCx1QyIsImZpbGUiOiJhY3Rpdml0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvYWN0aXZpdGllcy5zY3NzJztcclxuXHJcbmltcG9ydCBGaWx0ZXJBY3Rpdml0aWVzIGZyb20gJy4vbW9kdWxlcy9hY3Rpdml0aWVzL19maWx0ZXJzJztcclxuaW1wb3J0IExvYWRBY3Rpdml0aWVzIGZyb20gJy4vbW9kdWxlcy9hY3Rpdml0aWVzL19tb3JlX2FjdGl2aXRpZXMnO1xyXG5pbXBvcnQgQWRkVG9DYXJ0IGZyb20gJy4vbW9kdWxlcy9nbG9iYWwvX2FkZFRvQ2FydCc7XHJcbmltcG9ydCBTdG9yeURlc2NyaXB0aW9uIGZyb20gJy4vbW9kdWxlcy9hY3Rpdml0aWVzL19zdG9yeV9kZXNjcmlwdGlvbic7XHJcbmltcG9ydCBTdG9yaWVzTGF5b3V0IGZyb20gJy4vbW9kdWxlcy9hY3Rpdml0aWVzL19zdG9yaWVzX2xheW91dCc7XHJcblxyXG5cclxubmV3IEZpbHRlckFjdGl2aXRpZXMoKTtcclxubmV3IExvYWRBY3Rpdml0aWVzKCk7XHJcbm5ldyBBZGRUb0NhcnQoJy5hY3Rpdml0eV9fY29udGVudF9fYWN0aW9uc19fYWRkJyk7XHJcbm5ldyBTdG9yaWVzTGF5b3V0KCk7XHJcbm5ldyBTdG9yeURlc2NyaXB0aW9uKCk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBNYWtlQWN0aXZpdHkgZnJvbSBcIi4vX21ha2VfYWN0aXZpdHlcIjtcclxuXHJcbmNsYXNzIEZpbHRlckFjdGl2aXRpZXMge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnVybEZpbHRlcnMgPSAnL2FjdGl2aXRpZXNBcGlQb3NGaWx0ZXInO1xyXG4gICAgICAgIHRoaXMudXJsU2VhcmNoID0gJy9hY3Rpdml0aWVzQXBpUG9zU2VhcmNoJztcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzVGV4dENvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX3RpdGxlIHNwYW4nKTtcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX3RpdGxlIGgzJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzTGlzdEluaXRpYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyX19pbml0aWFsJyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzTGlzdEZpbHRlclNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19saXN0X19jb250YWluZXJfX2ZpbHRlcl9zZWFyY2gnKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fbGlzdF9faXRlbV9fcHJvdG90eXBlIGRpdicpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpdml0aWVzX19zZWxlY3RvcnNfX2ZpbHRlcnNfX2xpc3RzIGxpJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoRm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX3NlbGVjdG9yc19fc2VhcmNoIGZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcclxuICAgICAgICB0aGlzLnNlYXJjaEZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fc2VsZWN0b3JzX19zZWFyY2ggZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGluZ0RvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZ19kb3RzOmZpcnN0LWNoaWxkJyk7XHJcbiAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzRnJvbVNlbGVjdGVkRmlsdGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzLmZvckVhY2goKHgpPT57eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWN0aXZlRmlsdGVyLmJpbmQodGhpcykgKX0pO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaEZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldEFjdGl2aXRpZXNGcm9tU2VhcmNoLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0RmlsdGVyU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVJbnNlcnRlZCcsICgpPT57XHJcbiAgICAgICAgICAgIGxldCBhbW91bnRBY3Rpdml0aWVzID0gdGhpcy5hY3Rpdml0aWVzTGlzdEZpbHRlclNlYXJjaC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZpdHknKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdGllc1RleHQuaW5uZXJUZXh0ID0gIGFtb3VudEFjdGl2aXRpZXMudG9TdHJpbmcoKSsnIEFrdGl2aXTDpHRlbiBnZWZ1bmRlbic7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZlRmlsdGVyKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB0aGlzLmdldEFjdGl2aXRpZXNGcm9tU2VsZWN0ZWRGaWx0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlVXJsRm9yRmlsdGVyKCl7XHJcbiAgICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2aXRpZXNfX3NlbGVjdG9yc19fZmlsdGVyc19fbGlzdHMgbGkuc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyc1RleHQgPSAnJztcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJzLmxlbmd0aCAtIDE7IGkrKylcclxuICAgICAgICAgICAgICAgIGZpbHRlcnNUZXh0ICs9IGZpbHRlcnNbaV0uaW5uZXJUZXh0ICsgJywnO1xyXG4gICAgICAgICAgICBmaWx0ZXJzVGV4dCArPSBmaWx0ZXJzW2ZpbHRlcnMubGVuZ3RoIC0gMV0uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICB1cmwgPSB0aGlzLnVybEZpbHRlcnMgKyAnLycgKyBmaWx0ZXJzVGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlVXJsRm9yU2VhcmNoKCl7XHJcbiAgICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEZvcm1JbnB1dC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcnNUZXh0ID0gdGhpcy5zZWFyY2hGb3JtSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIHVybCA9IHRoaXMudXJsU2VhcmNoICsgJy8nICsgZmlsdGVyc1RleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZpdGllc0Zyb21TZWxlY3RlZEZpbHRlcigpe1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLm1ha2VVcmxGb3JGaWx0ZXIoKTtcclxuICAgICAgICBpZiAodXJsLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0aXZpdGllcyh1cmwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5pdGlhbENvbnRhaW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2aXRpZXNGcm9tU2VhcmNoKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMubWFrZVVybEZvclNlYXJjaCgpO1xyXG4gICAgICAgIGlmICh1cmwubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzKHVybCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnNob3dJbml0aWFsQ29udGFpbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZpdGllcyh1cmwpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpdml0aWVzID0gcmVzcG9uc2UuZGF0YS5hY3Rpdml0aWVzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvYWRNb3JlID0gcmVzcG9uc2UuZGF0YS5sb2FkTW9yZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZpdGllcy5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYWN0aXZpdGllc0xpc3RGaWx0ZXJTZWFyY2gucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2aXR5JykuZm9yRWFjaCgoYWN0aXZpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhY3Rpdml0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXRpZXMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aXZpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0FjdGl2aXR5ID0gbmV3IE1ha2VBY3Rpdml0eSh0aGF0LnByb3RvdHlwZSkubWFrZShhY3Rpdml0eS5pZCwgYWN0aXZpdHkuaW1hZ2UsIGFjdGl2aXR5LmltYWdlQWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHkubmFtZSwgYWN0aXZpdHkuZGVzY3JpcHRpb24sIGFjdGl2aXR5LmxpbmssIGFjdGl2aXR5LnByaWNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuYWN0aXZpdGllc0xpc3RGaWx0ZXJTZWFyY2guYXBwZW5kQ2hpbGQobmV3QWN0aXZpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSAvL25vIHNlIGhhbiBlbmNvbnRyYWRvXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5hY3Rpdml0aWVzVGV4dC5pbm5lclRleHQgPSAnTWl0IGRpZXNlbiBGaWx0ZXJuIHd1cmRlbiBrZWluZSBBa3Rpdml0w6R0ZW4gZ2VmdW5kZW4nO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoYXQuaGlkZUxvYWRpbmdBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93TG9hZGluZ0FuaW1hdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dJbml0aWFsQ29udGFpbmVyKCl7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzTGlzdEZpbHRlclNlYXJjaC5jbGFzc0xpc3QuYWRkKCdhY3Rpdml0aWVzX19saXN0X19jb250YWluZXJfX2ZpbHRlcl9zZWFyY2gtLWhpZGUnKTtcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0SW5pdGlhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3Rpdml0aWVzX19saXN0X19jb250YWluZXJfX2luaXRpYWwtLWhpZGUnKTtcclxuXHJcbiAgICAgICAgbGV0IGFtb3VudEFjdGl2aXRpZXMgPSB0aGlzLmFjdGl2aXRpZXNMaXN0SW5pdGlhbC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZpdHknKS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzVGV4dC5pbm5lclRleHQgPSAgYW1vdW50QWN0aXZpdGllcy50b1N0cmluZygpKycgQWt0aXZpdMOkdGVuIGdlZnVuZGVuJztcclxuICAgIH1cclxuXHJcbiAgICBzaG93TG9hZGluZ0FuaW1hdGlvbigpe1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc1RleHQuaW5uZXJUZXh0ID0gJ1N1Y2hlbiBTaWUgbmFjaCBBa3Rpdml0w6R0ZW4gbWl0IGRpZXNlbiBGaWx0ZXJuIC4uLic7IC8vYnVzY2FuZG9cclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0RmlsdGVyU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcl9fZmlsdGVyX3NlYXJjaC0taGlkZScpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3RJbml0aWFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcl9faW5pdGlhbC0taGlkZScpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmdEb3RzLmNsYXNzTGlzdC50b2dnbGUoJ2xvYWRpbmdfZG90cy0tdmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVMb2FkaW5nQW5pbWF0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nRG90cy5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkaW5nX2RvdHMtLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckFjdGl2aXRpZXM7IiwiaW1wb3J0IGNsaXBIdG1sIGZyb20gJ3RleHQtY2xpcHBlcic7XHJcblxyXG5jbGFzcyBNYWtlQWN0aXZpdHkge1xyXG4gICAgY29uc3RydWN0b3IocHJvdG90eXBlKXtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcclxuICAgICAgICB0aGlzLmltYWdlc1NpemVzID0gWzE5MjAsIDEyMDAsIDEwMDAsIDkwMCwgODAwLCA2MDBdO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25MZW5naHQgPSA3NTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlSW1hZ2VTcmNTZXQodXJsKXtcclxuICAgICAgICBsZXQgc3JjU2V0ID0gW107XHJcbiAgICAgICAgdGhpcy5pbWFnZXNTaXplcy5mb3JFYWNoKChkaW0pPT57XHJcbiAgICAgICAgICAgIC8vdXNpbmcgdGhlIG1lZGlhIHJlc29sdmVyIGNxYWNoZSB1cmwhISFcclxuICAgICAgICAgICAgc3JjU2V0LnB1c2goJy9tZWRpYS9jYWNoZS9yZXNvbHZlL21pbl93aWR0aF8nK2RpbSt1cmwrJyAnK2RpbSsndycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzcmNTZXQuam9pbignLCAnKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlKGlkLCBpbWFnZSwgaW1hZ2VBbHQsIG5hbWUsIGRlc2NyaXB0aW9uLCBsaW5rLCBwcmljZSl7XHJcbiAgICAgICAgbGV0IG5ld0FjdGl2aXR5ID0gdGhpcy5wcm90b3R5cGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIGxldCBpbWFnZVNyY1NldCA9IHRoaXMubWFrZUltYWdlU3JjU2V0KGltYWdlKTtcclxuXHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5X19jb250ZW50X19hY3Rpb25zX19hZGQnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZpdHlfaWQnLCBpZCk7XHJcblxyXG4gICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnLCBpbWFnZVNyY1NldCk7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignaW1nJykuc2V0QXR0cmlidXRlKCdzaXplcycsICcobWluLXdpZHRoOjEwMDBweCkgMzN2dywgOTB2dycpO1xyXG4gICAgICAgIC8vVE9ETzogcHV0IHRoZSBiYXNlNjR2ZXJzaW9uP1xyXG4gICAgICAgIC8vIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2UpO1xyXG4gICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNldEF0dHJpYnV0ZSgnYWx0JywgaW1hZ2VBbHQpO1xyXG4gICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmNsYXNzTGlzdC5hZGQoJ2JsdXItdXAnKTtcclxuICAgICAgICBuZXdBY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCdpbWcnKS5jbGFzc0xpc3QuYWRkKCdsYXp5bG9hZCcpO1xyXG4gICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJ2g0JykuaW5uZXJIVE1MID0gbmFtZTtcclxuICAgICAgICBuZXdBY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdHlfX2NvbnRlbnRfX2Rlc2NyaXB0aW9uIGEnKS5pbm5lckhUTUwgPSBjbGlwSHRtbChkZXNjcmlwdGlvbiwgdGhpcy5kZXNjcmlwdGlvbkxlbmdodCwge2luZGljYXRvcjonJ30pO1xyXG4gICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0eV9faW1hZ2UgYScpLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmspO1xyXG4gICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0eV9fY29udGVudF9fdGl0bGUgYScpLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmspO1xyXG4gICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0eV9fY29udGVudF9fZGVzY3JpcHRpb24gYScpLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmspO1xyXG5cclxuICAgICAgICBpZihwcmljZSAhPT0gbnVsbClcclxuICAgICAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5X19jb250ZW50X19wcmljZSBzcGFuJykuaW5uZXJIVE1MID0gJ2FiIDxicj4nK3ByaWNlICsgXCIg4oKsXCI7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBuZXdBY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdHlfX2NvbnRlbnRfX3ByaWNlJykuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdBY3Rpdml0eTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFrZUFjdGl2aXR5OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBNYWtlQWN0aXZpdHkgZnJvbSAnLi9fbWFrZV9hY3Rpdml0eSc7XHJcblxyXG5jbGFzcyBMb2FkQWN0aXZpdGllcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYW1vdW50ID0gNjtcclxuICAgICAgICB0aGlzLnVybCA9ICcvYWN0aXZpdGllc0FwaVBvcyc7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzTGlzdEluaXRpYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyX19pbml0aWFsJyk7XHJcbiAgICAgICAgdGhpcy5idG5Mb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX21vcmUgYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGluZ0RvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZ19kb3RzOmxhc3QtY2hpbGQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fbGlzdF9faXRlbV9fcHJvdG90eXBlIGRpdicpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYnRuTG9hZCAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmJ0bkxvYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldERhdGEuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldERhdGEoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5hY3Rpdml0aWVzTGlzdEluaXRpYWwucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2aXR5JykubGVuZ3RoO1xyXG5cclxuICAgICAgICBsZXQgdXJsID0gdGhpcy51cmwrJy8nK3BvcysnLycrdGhpcy5hbW91bnQ7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBheGlvcy5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpdml0aWVzID0gcmVzcG9uc2UuZGF0YS5hY3Rpdml0aWVzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvYWRNb3JlID0gcmVzcG9uc2UuZGF0YS5sb2FkTW9yZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobG9hZE1vcmUgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYnRuTG9hZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZpdGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZpdGllcy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpdml0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3QWN0aXZpdHkgPSBuZXcgTWFrZUFjdGl2aXR5KHRoYXQucHJvdG90eXBlKS5tYWtlKGFjdGl2aXR5LmlkLCBhY3Rpdml0eS5pbWFnZSwgYWN0aXZpdHkuaW1hZ2VBbHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eS5uYW1lLCBhY3Rpdml0eS5kZXNjcmlwdGlvbiwgYWN0aXZpdHkubGluaywgYWN0aXZpdHkucHJpY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5hY3Rpdml0aWVzTGlzdEluaXRpYWwuYXBwZW5kQ2hpbGQobmV3QWN0aXZpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignIG1vc3RyYXIgcXVlIG5vIGhheSBtYXMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGF0LmxvYWRpbmdEb3RzLmNsYXNzTGlzdC50b2dnbGUoJ2xvYWRpbmdfZG90cy0tdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5hY3Rpdml0aWVzTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdhY3Rpdml0aWVzX19saXN0X19jb250YWluZXItLWxvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBsb2FkaW5nIG1vcmUgYWN0aXZpdGllc1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyLS1sb2FkaW5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nRG90cy5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkaW5nX2RvdHMtLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRBY3Rpdml0aWVzOyIsImNsYXNzIFN0b3JpZXNMYXlvdXQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnN0b3JpZXNTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZpdGllc19fc3Rvcmllc19faXRlbXMgbGknKTtcclxuICAgICAgICB0aGlzLnN0b3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZpdGllc19fc3Rvcmllc19fc3RvcnknKTtcclxuICAgICAgICB0aGlzLnN0b3JpZXNBbW91bnQgPSB0aGlzLnN0b3JpZXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuc3Rvcmllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19zdG9yaWVzX19zdG9yeV9fY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLnN0b3JpZXNTZWxlY3RvcnMuZm9yRWFjaCgoc3RvcnlTZWxlY3Rvcik9PntcclxuICAgICAgICAgICAgc3RvcnlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlQWN0aXZlU3RvcnkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMuc3Rvcmllc1NlbGVjdG9yc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLnN0b3JpZXNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Rvcmllc0NvbnRhaW5lci5oZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RvcnktMCcpLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpZCA9IDA7IGlkIDwgdGhpcy5zdG9yaWVzQW1vdW50OyBpZCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXNwbGFjZW1lbnQgPSBpZCoxMDA7XHJcbiAgICAgICAgICAgIGxldCBzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdG9yeS0nK2lkKTtcclxuICAgICAgICAgICAgc3Rvcnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIgKyBkaXNwbGFjZW1lbnQgKyBcIiUpO1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQWN0aXZlU3RvcnkoZSl7XHJcbiAgICAgICAgbGV0IHN0b3J5U2VsZWN0b3IgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yaWVzU2VsZWN0b3JzLmZvckVhY2goKF9zdG9yeVNlbGVjdG9yKT0+e1xyXG4gICAgICAgICAgICBfc3RvcnlTZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JpZXMuZm9yRWFjaCgoc3RvcnkpPT57XHJcbiAgICAgICAgICAgIHN0b3J5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN0b3J5U2VsZWN0b3IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGxldCBzdG9yeUlkID0gc3RvcnlTZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvcnknKTtcclxuICAgICAgICBsZXQgbmV3QWN0aXZlU3RvcnlQb3MgPSBwYXJzZUludChzdG9yeUlkLnNwbGl0KCctJylbMV0pO1xyXG4gICAgICAgIGxldCBhc3NvY2lhdGVTdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RvcnlJZCk7XHJcbiAgICAgICAgYXNzb2NpYXRlU3RvcnkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Rvcmllc0NvbnRhaW5lci5oZWlnaHQgPSBhc3NvY2lhdGVTdG9yeS5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaWQgPSAwOyBpZCA8IHRoaXMuc3Rvcmllc0Ftb3VudDsgaWQrKykge1xyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gKGlkLW5ld0FjdGl2ZVN0b3J5UG9zKSoxMDA7XHJcbiAgICAgICAgICAgIGxldCBzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdG9yeS0nK2lkKTtcclxuICAgICAgICAgICAgc3Rvcnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIgKyBkaXNwbGFjZW1lbnQgKyBcIiUpO1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JpZXNMYXlvdXQ7IiwiaW1wb3J0IG1hcGJveGdsIGZyb20gJ21hcGJveC1nbCc7XHJcblxyXG5jbGFzcyBTdG9yeURlc2NyaXB0aW9ue1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSAncGsuZXlKMUlqb2lZMkZ5ZEcxaGJuVnpaWElpTENKaElqb2lZMnA1YUhWeU5IQjJNRE51ZHpObmJuSmlhR1Z0Y1dKMk9DSjkuMlVQREtuU1pSTndOUjFJVGxaUUVBQSc7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiAnbWFwJyxcclxuICAgICAgICAgICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L291dGRvb3JzLXYxMScsXHJcbiAgICAgICAgICAgIGNlbnRlcjogWyAtODEuMTEwNTE1NTk0NDgyNDIsMjIuNTA4OTA5NTY1MjA1MjRdLFxyXG4gICAgICAgICAgICB6b29tOiA2XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYXAuc2Nyb2xsWm9vbS5kaXNhYmxlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcigpO1xyXG4gICAgICAgIHRoaXMucG9zID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yaWVzU2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2aXRpZXNfX3N0b3JpZXNfX2l0ZW1zIGxpJyk7XHJcbiAgICAgICAgdGhpcy5zdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19zdG9yaWVzX19zdG9yeScpO1xyXG4gICAgICAgIHRoaXMucGF0aHMgPSB0aGlzLnN0b3J5LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW5bZGF0YS1wYXRoLW1hcF0nKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gdGhpcy5zdG9yeS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuW2RhdGEtbWFwXScpO1xyXG5cclxuICAgICAgICB0aGlzLmdlb2pzb25zID0gW107XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcclxuICAgICAgICB0aGlzLm1heFZpZXdDb29yZHMgPSBbXTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLm1hcC5vbignbG9hZCcsdGhpcy5yZWFkUGF0aHMuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Rvcmllc1NlbGVjdG9ycy5mb3JFYWNoKChzdG9yeVNlbGVjdG9yKT0+e1xyXG4gICAgICAgICAgICBzdG9yeVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VBY3RpdmVTdG9yeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYXRocy5mb3JFYWNoKChwYXRoLCBpbmRleCk9PntcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudE9uU2NyZWVuKHBhdGgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVQYXRoKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL1RPRE86IHVnbHkgc29sdXRpb25cclxuICAgICAgICAgICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcik9PntcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudE9uU2NyZWVuKG1hcmtlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcHMgPSBtYXJrZXIuZ2V0QXR0cmlidXRlKCdkYXRhLW1hcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzID0gSlNPTi5wYXJzZShwcm9wcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwLmZseVRvKHtjZW50ZXI6IHByb3BzLmNlbnRlciwgem9vbTogcHJvcHMuem9vbX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZWFkUGF0aHMoKXtcclxuICAgICAgICBpZiAodGhpcy5wYXRocy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5wYXRocy5mb3JFYWNoKChwYXRoLCBpbmRleCk9PntcclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHBhdGguZ2V0QXR0cmlidXRlKCdkYXRhLXBhdGgtbWFwJyk7XHJcbiAgICAgICAgICAgIHByb3BzID0gSlNPTi5wYXJzZShwcm9wcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvanNvbnMucHVzaChwcm9wcy5nZW9qc29uKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdO1xyXG4gICAgICAgICAgICBwcm9wcy5nZW9qc29uLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZS5nZW9tZXRyeS50eXBlPT09J0xpbmVTdHJpbmcnKXtcclxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGF0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgbG9ncyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSk9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXRzLnB1c2goY29vcmRpbmF0ZVswXSk7XHJcbiAgICAgICAgICAgICAgICBsb2dzLnB1c2goY29vcmRpbmF0ZVsxXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGF0cy5zb3J0KChhLGIpID0+IHsgcmV0dXJuIGEgPD0gYiA/IC0xIDogMSB9ICk7XHJcbiAgICAgICAgICAgIGxvZ3Muc29ydCgoYSxiKSA9PiB7IHJldHVybiBhIDw9IGIgPyAtMSA6IDEgfSApO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1heENvb3JkcyA9IFtbbGF0c1swXSxsb2dzWzBdXSxcclxuICAgICAgICAgICAgICAgIFtsYXRzW2xhdHMubGVuZ3RoLTFdLCBsb2dzW2xvZ3MubGVuZ3RoLTFdIF1dO1xyXG4gICAgICAgICAgICB0aGlzLm1heFZpZXdDb29yZHMucHVzaChtYXhDb29yZHMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYXllcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAnaWQnOiAnbGF5ZXItcGF0aF8nK2luZGV4LFxyXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnbGluZScsXHJcbiAgICAgICAgICAgICAgICAnc291cmNlJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2dlb2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogcHJvcHMuZ2VvanNvblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdsYXlvdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtY2FwJzogJ3JvdW5kJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS1qb2luJzogJ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdwYWludCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS1jb2xvcic6ICcjNjJhYjAzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS13aWR0aCc6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtb3BhY2l0eSc6IC44NVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZU1hcmtlcih0aW1lc3RhbXApIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNUaW1lICsgNDEgPCB0aW1lc3RhbXApe1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzVGltZSA9IHRpbWVzdGFtcDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWFya2VyLnNldExuZ0xhdCh0aGlzLmdlb2pzb24uZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXNbdGhpcy5wb3NdKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWFya2VyLmFkZFRvKHRoaXMubWFwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9zICs9IDE7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3MgPT09IHRoaXMuZ2VvanNvbi5mZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcyA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlTWFya2VyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUFjdGl2ZVN0b3J5KGUpIHtcclxuICAgICAgICBsZXQgc3RvcnlTZWxlY3RvciA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICBsZXQgc3RvcnlJZCA9IHN0b3J5U2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdkYXRhLXN0b3J5Jyk7XHJcbiAgICAgICAgbGV0IGFzc29jaWF0ZVN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdG9yeUlkKTtcclxuICAgICAgICB0aGlzLnBhdGhzID0gYXNzb2NpYXRlU3RvcnkucXVlcnlTZWxlY3RvckFsbCgnc3BhbltkYXRhLXBhdGgtbWFwXScpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlTGF5ZXJzKFsuLi5BcnJheSgxMikua2V5cygpXSk7XHJcbiAgICAgICAgdGhpcy5yZWFkUGF0aHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMYXllcnMoaW5kZXhzKXtcclxuICAgICAgICBpbmRleHMuZm9yRWFjaCgoaW5kZXgpPT57XHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91c0xheWVySWQgPSAnbGF5ZXItcGF0aF8nK2luZGV4O1xyXG4gICAgICAgICAgICBsZXQgcHJldmlvdXNNYXBMYXllciA9IHRoaXMubWFwLmdldExheWVyKHByZXZpb3VzTGF5ZXJJZCk7XHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91c01hcFNvdXJjZSA9IHRoaXMubWFwLmdldFNvdXJjZShwcmV2aW91c0xheWVySWQpO1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgcHJldmlvdXNNYXBMYXllciAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcihwcmV2aW91c0xheWVySWQpO1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgcHJldmlvdXNNYXBTb3VyY2UgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlU291cmNlKHByZXZpb3VzTGF5ZXJJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlUGF0aChpbmRleCl7XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlTGF5ZXJzKFtpbmRleC0xLCBpbmRleCsxXSk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50TGF5ZXJJZCA9ICdsYXllci1wYXRoXycraW5kZXg7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRNYXBMYXllciA9IHRoaXMubWFwLmdldExheWVyKGN1cnJlbnRMYXllcklkKTtcclxuXHJcbiAgICAgICAgaWYodHlwZW9mIGN1cnJlbnRNYXBMYXllciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcnNbaW5kZXhdKTtcclxuICAgICAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMubWF4Vmlld0Nvb3Jkc1tpbmRleF0sIHtwYWRkaW5nOiAyMH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNFbGVtZW50T25TY3JlZW4oZWxlbWVudCkge1xyXG4gICAgICAgIGxldCBib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiBib3VuZHMudG9wID4gMCAgJiYgYm91bmRzLnRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5RGVzY3JpcHRpb247XHJcbiIsImltcG9ydCB7IHNldENvb2tpZSwgZ2V0Q29va2llIH0gZnJvbSAnLi9fdXRpbHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgQWRkVG9DYXJ0IHtcclxuICAgIGNvbnN0cnVjdG9yKGJ1dHRvbnNTZWxlY3Rvcil7XHJcbiAgICAgICAgdGhpcy5idXR0b25zU2VsZWN0b3IgPSBidXR0b25zU2VsZWN0b3I7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0ZpbHRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19saXN0X19jb250YWluZXJfX2ZpbHRlcl9zZWFyY2gnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuYnV0dG9uc1NlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmNhcnRCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXInKTtcclxuICAgICAgICB0aGlzLmNhcnRCYXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfYmFyIC5jYXJ0X2Jhcl9fY29udGVudF9fdGV4dCBzcGFuJyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzID0gW107XHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyQWN0aXZpdHlQcm90b3R5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXJfX2NvbnRlbnRfX2FjdGl2aXRpZXNfX2l0ZW1fX3Byb3RvdHlwZSA+IGRpdicpO1xyXG4gICAgICAgIHRoaXMuY2FydEJhckFjdGl2aXR5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfYmFyX19jb250ZW50X19hY3Rpdml0aWVzJyk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZEFjdGl2aXRpZXMoKTtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZmV0Y2hVcmwgPSAnL2FjdGl2aXRpZXNBcGlHZXRCeUlkJztcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQWN0aXZpdGllcygpe1xyXG4gICAgICAgIGxldCBjdXJyZW50VmFsdWUgPSBnZXRDb29raWUoJ3Byb2R1Y3RzX2NhcnQnKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRWYWx1ZSlcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXMgPSBjdXJyZW50VmFsdWVbMV0uc3BsaXQoJywnKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNBZGQuZm9yRWFjaCgoYnV0dG9uKT0+e1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZE9yUmVtb3ZlQWN0aXZpdHkuYmluZCh0aGlzKVxyXG4gICAgICAgICl9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdGllc0ZpbHRlckNvbnRhaW5lciAhPT0gbnVsbClcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNGaWx0ZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignRE9NTm9kZUluc2VydGVkJywgKGVsZW1lbnQpPT57XHJcbiAgICAgICAgICAgIGxldCBhY3Rpdml0eSA9IGVsZW1lbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gYWN0aXZpdHkucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5X19jb250ZW50X19hY3Rpb25zX19hZGQnKTtcclxuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRPclJlbW92ZUFjdGl2aXR5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXR1cygpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb250YWluQWN0aXZpdHkoYWN0aXZpdHlJZCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZpdGllcy5pbmNsdWRlcyhhY3Rpdml0eUlkKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlQ2FydFRleHQoKXtcclxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0aWVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgdGhpcy5jYXJ0QmFyLmNsYXNzTGlzdC5hZGQoJ2NhcnRfYmFyLS1pbml0aWFsJyk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QucmVtb3ZlKCdjYXJ0X2Jhci0taW5pdGlhbCcpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnRCYXJUZXh0LmlubmVySFRNTCA9IHRoaXMuYWN0aXZpdGllcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhcnRCYXIuY2xhc3NMaXN0LnJlbW92ZSgnY2FydF9iYXItLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q2FydCgpe1xyXG4gICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QucmVtb3ZlKCdjYXJ0X2Jhci0tdmlzaWJsZScpO1xyXG4gICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QuYWRkKCdjYXJ0X2Jhci0tdmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VDYXJ0QmFyQWN0aXZpdHlJdGVtKGFjdGl2aXR5KXtcclxuICAgICAgICBsZXQgYWN0aXZpdHlJdGVtID0gdGhpcy5jYXJ0QmFyQWN0aXZpdHlQcm90b3R5cGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIGFjdGl2aXR5SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FjdGl2aXR5SXRlbV8nK2FjdGl2aXR5LmlkKTtcclxuICAgICAgICBsZXQgaW1hZ2UgPSBhY3Rpdml0eUl0ZW0ucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBhY3Rpdml0eS5pbWFnZSk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBhY3Rpdml0eUl0ZW0ucXVlcnlTZWxlY3RvcignaDUnKTtcclxuICAgICAgICBuYW1lLmlubmVySFRNTCA9IGFjdGl2aXR5Lm5hbWUubGVuZ3RoIDwgMjUgPyBhY3Rpdml0eS5uYW1lIDogYWN0aXZpdHkubmFtZS5zdWJzdHJpbmcoMCwgMjUpKycuLi4nO1xyXG5cclxuICAgICAgICByZXR1cm4gYWN0aXZpdHlJdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoQWN0aXZpdHkoYWN0aXZpdHlJZCl7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZmV0Y2hVcmwrJy8nK2FjdGl2aXR5SWQ7XHJcblxyXG4gICAgICAgIGF4aW9zLmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhQWN0aXZpdHkgPSByZXNwb25zZS5kYXRhLmFjdGl2aXR5O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpdml0eUl0ZW0gPSB0aGlzLm1ha2VDYXJ0QmFyQWN0aXZpdHlJdGVtKGRhdGFBY3Rpdml0eSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnRCYXJBY3Rpdml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3Rpdml0eUl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT3JSZW1vdmVBY3Rpdml0eShlKXtcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICBsZXQgYWN0aXZpdHlJZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZpdHlfaWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbkFjdGl2aXR5KGFjdGl2aXR5SWQpKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBY3Rpdml0eShhY3Rpdml0eUlkKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0VGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRBY3Rpdml0eShhY3Rpdml0eUlkKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0VGV4dCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDYXJ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xyXG4gICAgICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzdmcuaGVhcnQnKS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFydC0tZmlsbC13aGl0ZScpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVG9DYXJ0OyIsImV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUodmFsdWUsIG5hbWU9J3Byb2R1Y3RzX2NhcnQnICwgZGF5cz0zKSB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkrKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xyXG4gICAgbGV0IGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIitkYXRlLnRvR01UU3RyaW5nICgpO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgK1xyXG4gICAgICAgIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xyXG4gICAgbGV0IGNBcnIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuICAgIGZvcihsZXQgaT0wO2kgPCBjQXJyLmxlbmd0aDtpKyspIHtcclxuICAgICAgICBsZXQgY29va2llID0gY0FycltpXS5zcGxpdChcIj1cIiwyKTtcclxuICAgICAgICBjb29raWVbMF0gPSBjb29raWVbMF0ucmVwbGFjZSgvXlxccysvLFwiXCIpO1xyXG4gICAgICAgIGlmIChjb29raWVbMF0gPT09IG5hbWUpXHJcbiAgICAgICAgICAgIHJldHVybiBjb29raWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9