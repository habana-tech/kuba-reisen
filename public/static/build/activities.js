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





 // new FilterActivities();
// new LoadActivities();
// new AddtoCart('.activity__content__actions__add');

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
/* harmony import */ var _global_addToCart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../global/_addToCart */ "./assets/scripts/modules/global/_addToCart.js");












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
    this.prototype = document.querySelector('.activities__list__item-prototype div');
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
          new _global_addToCart__WEBPACK_IMPORTED_MODULE_13__["default"]('.activity__content__actions__add a');
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
      if (price !== null) newActivity.querySelector('.activity__content__price span').innerHTML = price + " €";else newActivity.querySelector('.activity__content__price').setAttribute('hidden', 'hidden');
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
    this.prototype = document.querySelector('.activities__list__item-prototype div');
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
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_utils */ "./assets/scripts/modules/global/_utils.js");













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var AddtoCart =
/*#__PURE__*/
function () {
  function AddtoCart(buttonsSelector) {
    _classCallCheck(this, AddtoCart);

    this.buttonsSelector = buttonsSelector;
    this.activitiesFilterContainer = document.querySelector('.activities__list__container__filter_search');
    this.buttonsAdd = document.querySelectorAll(this.buttonsSelector);
    this.cartBar = document.querySelector('.cart_bar');
    this.cartBarText = document.querySelector('.cart_bar .cart_bar__content__text span');
    this.activities = [];
    this.loadActivities();
    this.events();
    this.setStatus();
  }

  _createClass(AddtoCart, [{
    key: "loadActivities",
    value: function loadActivities() {
      var currentValue = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getCookie"])('products_cart');
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
    value: function setStatus() {
      var _this2 = this;

      this.buttonsAdd.forEach(function (button) {
        var activityId = button.getAttribute('data-activity_id');

        if (_this2.activities.includes(activityId)) {
          button.querySelector('svg.heart').classList.toggle('heart--fill-white');
        }
      });
    }
  }, {
    key: "containActivity",
    value: function containActivity(activityId) {
      return this.activities.includes(activityId);
    }
  }, {
    key: "removeActivity",
    value: function removeActivity(activityId) {
      this.activities = this.activities.filter(function (x) {
        return x !== activityId;
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_12__["setCookie"])(this.activities.toString());
    }
  }, {
    key: "addActivity",
    value: function addActivity(activityId) {
      this.activities.push(activityId);
      Object(_utils__WEBPACK_IMPORTED_MODULE_12__["setCookie"])(this.activities.toString());
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

  return AddtoCart;
}();

/* harmony default export */ __webpack_exports__["default"] = (AddtoCart);

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

},[["./assets/scripts/activities.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~activity~bucket_list","vendors~activities~activity~app","vendors~activities~contact","vendors~activities"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hY3Rpdml0aWVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvYWN0aXZpdGllcy9fZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FjdGl2aXRpZXMvX21ha2VfYWN0aXZpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hY3Rpdml0aWVzL19tb3JlX2FjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hY3Rpdml0aWVzL19zdG9yaWVzX2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FjdGl2aXRpZXMvX3N0b3J5X2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZ2xvYmFsL19hZGRUb0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9nbG9iYWwvX3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWN0aXZpdGllcy5zY3NzIl0sIm5hbWVzIjpbIlN0b3JpZXNMYXlvdXQiLCJTdG9yeURlc2NyaXB0aW9uIiwiRmlsdGVyQWN0aXZpdGllcyIsInVybEZpbHRlcnMiLCJ1cmxTZWFyY2giLCJhY3Rpdml0aWVzVGV4dENvdW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWN0aXZpdGllc1RleHQiLCJhY3Rpdml0aWVzTGlzdCIsImFjdGl2aXRpZXNMaXN0SW5pdGlhbCIsImFjdGl2aXRpZXNMaXN0RmlsdGVyU2VhcmNoIiwicHJvdG90eXBlIiwiZmlsdGVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWFyY2hGb3JtSW5wdXQiLCJzZWFyY2hGb3JtU3VibWl0IiwibG9hZGluZ0RvdHMiLCJnZXRBY3Rpdml0aWVzRnJvbVNlbGVjdGVkRmlsdGVyIiwiZXZlbnRzIiwiZm9yRWFjaCIsIngiLCJhZGRFdmVudExpc3RlbmVyIiwiYWN0aXZlRmlsdGVyIiwiYmluZCIsImdldEFjdGl2aXRpZXNGcm9tU2VhcmNoIiwiYW1vdW50QWN0aXZpdGllcyIsImxlbmd0aCIsImlubmVyVGV4dCIsInRvU3RyaW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZWxlbWVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInVybCIsImZpbHRlcnNUZXh0IiwiaSIsInZhbHVlIiwibWFrZVVybEZvckZpbHRlciIsImdldEFjdGl2aXRpZXMiLCJzaG93SW5pdGlhbENvbnRhaW5lciIsIm1ha2VVcmxGb3JTZWFyY2giLCJ0aGF0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJhY3Rpdml0aWVzIiwiZGF0YSIsImxvYWRNb3JlIiwiYWN0aXZpdHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJuZXdBY3Rpdml0eSIsIk1ha2VBY3Rpdml0eSIsIm1ha2UiLCJpZCIsImltYWdlIiwiaW1hZ2VBbHQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJsaW5rIiwicHJpY2UiLCJhcHBlbmRDaGlsZCIsIkFkZHRvQ2FydCIsImhpZGVMb2FkaW5nQW5pbWF0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2hvd0xvYWRpbmdBbmltYXRpb24iLCJhZGQiLCJyZW1vdmUiLCJpbWFnZXNTaXplcyIsImRlc2NyaXB0aW9uTGVuZ2h0Iiwic3JjU2V0IiwiZGltIiwicHVzaCIsImpvaW4iLCJjbG9uZU5vZGUiLCJpbWFnZVNyY1NldCIsIm1ha2VJbWFnZVNyY1NldCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImNsaXBIdG1sIiwiaW5kaWNhdG9yIiwiTG9hZEFjdGl2aXRpZXMiLCJhbW91bnQiLCJidG5Mb2FkIiwiZ2V0RGF0YSIsInBvcyIsInN0b3JpZXNTZWxlY3RvcnMiLCJzdG9yaWVzIiwic3Rvcmllc0Ftb3VudCIsInN0b3JpZXNDb250YWluZXIiLCJpbml0Iiwic3RvcnlTZWxlY3RvciIsImNoYW5nZUFjdGl2ZVN0b3J5IiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZGlzcGxhY2VtZW50Iiwic3RvcnkiLCJfc3RvcnlTZWxlY3RvciIsInN0b3J5SWQiLCJnZXRBdHRyaWJ1dGUiLCJuZXdBY3RpdmVTdG9yeVBvcyIsInBhcnNlSW50Iiwic3BsaXQiLCJhc3NvY2lhdGVTdG9yeSIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJtYXAiLCJNYXAiLCJjb250YWluZXIiLCJzdHlsZSIsImNlbnRlciIsInpvb20iLCJzY3JvbGxab29tIiwiZGlzYWJsZSIsIm1hcmtlciIsIk1hcmtlciIsInBhdGhzIiwibWFya2VycyIsImdlb2pzb25zIiwibGF5ZXJzIiwibWF4Vmlld0Nvb3JkcyIsInByZXZpb3VzVGltZSIsIm9uIiwicmVhZFBhdGhzIiwid2luZG93Iiwib25zY3JvbGwiLCJwYXRoIiwiaW5kZXgiLCJpc0VsZW1lbnRPblNjcmVlbiIsInNldEFjdGl2ZVBhdGgiLCJwcm9wcyIsIkpTT04iLCJwYXJzZSIsImZseVRvIiwiZ2VvanNvbiIsImNvb3JkaW5hdGVzIiwiZmVhdHVyZXMiLCJmZWF0dXJlIiwiZ2VvbWV0cnkiLCJ0eXBlIiwiY29vcmRpbmF0ZSIsImxhdHMiLCJsb2dzIiwic29ydCIsImEiLCJiIiwibWF4Q29vcmRzIiwidGltZXN0YW1wIiwic2V0TG5nTGF0IiwiYWRkVG8iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRlTWFya2VyIiwicmVtb3ZlTGF5ZXJzIiwiQXJyYXkiLCJrZXlzIiwiaW5kZXhzIiwicHJldmlvdXNMYXllcklkIiwicHJldmlvdXNNYXBMYXllciIsImdldExheWVyIiwicHJldmlvdXNNYXBTb3VyY2UiLCJnZXRTb3VyY2UiLCJyZW1vdmVMYXllciIsInJlbW92ZVNvdXJjZSIsImN1cnJlbnRMYXllcklkIiwiY3VycmVudE1hcExheWVyIiwiYWRkTGF5ZXIiLCJmaXRCb3VuZHMiLCJwYWRkaW5nIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiaW5uZXJIZWlnaHQiLCJidXR0b25zU2VsZWN0b3IiLCJhY3Rpdml0aWVzRmlsdGVyQ29udGFpbmVyIiwiYnV0dG9uc0FkZCIsImNhcnRCYXIiLCJjYXJ0QmFyVGV4dCIsImxvYWRBY3Rpdml0aWVzIiwic2V0U3RhdHVzIiwiY3VycmVudFZhbHVlIiwiZ2V0Q29va2llIiwiYnV0dG9uIiwiYWRkT3JSZW1vdmVBY3Rpdml0eSIsImJ0biIsImFjdGl2aXR5SWQiLCJpbmNsdWRlcyIsImZpbHRlciIsInNldENvb2tpZSIsImNvbnRhaW5BY3Rpdml0eSIsInJlbW92ZUFjdGl2aXR5IiwidXBkYXRlQ2FydFRleHQiLCJhZGRBY3Rpdml0eSIsInNob3dDYXJ0IiwiZGF5cyIsImRhdGUiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJleHBpcmVzIiwidG9HTVRTdHJpbmciLCJjb29raWUiLCJjQXJyIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7QUFDQTtBQUNBOztBQUNBLElBQUlBLDBFQUFKO0FBQ0EsSUFBSUMsNkVBQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBOztJQUVNQyxnQjs7O0FBQ0YsOEJBQWE7QUFBQTs7QUFDVCxTQUFLQyxVQUFMLEdBQWtCLHlCQUFsQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIseUJBQWpCO0FBRUEsU0FBS0MsbUJBQUwsR0FBMkJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwrQkFBdkIsQ0FBM0I7QUFDQSxTQUFLQyxjQUFMLEdBQXNCRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsNkJBQXZCLENBQXRCO0FBRUEsU0FBS0UsY0FBTCxHQUFzQkgsUUFBUSxDQUFDQyxh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Qzs7Ozs7Ozs7Ozs7QUNqQkQsdUMiLCJmaWxlIjoiYWN0aXZpdGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2FjdGl2aXRpZXMuc2Nzcyc7XHJcblxyXG5pbXBvcnQgRmlsdGVyQWN0aXZpdGllcyBmcm9tICcuL21vZHVsZXMvYWN0aXZpdGllcy9fZmlsdGVycyc7XHJcbmltcG9ydCBMb2FkQWN0aXZpdGllcyBmcm9tICcuL21vZHVsZXMvYWN0aXZpdGllcy9fbW9yZV9hY3Rpdml0aWVzJztcclxuaW1wb3J0IEFkZHRvQ2FydCBmcm9tICcuL21vZHVsZXMvZ2xvYmFsL19hZGRUb0NhcnQnO1xyXG5pbXBvcnQgU3RvcnlEZXNjcmlwdGlvbiBmcm9tICcuL21vZHVsZXMvYWN0aXZpdGllcy9fc3RvcnlfZGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgU3Rvcmllc0xheW91dCBmcm9tICcuL21vZHVsZXMvYWN0aXZpdGllcy9fc3Rvcmllc19sYXlvdXQnO1xyXG5cclxuXHJcbi8vIG5ldyBGaWx0ZXJBY3Rpdml0aWVzKCk7XHJcbi8vIG5ldyBMb2FkQWN0aXZpdGllcygpO1xyXG4vLyBuZXcgQWRkdG9DYXJ0KCcuYWN0aXZpdHlfX2NvbnRlbnRfX2FjdGlvbnNfX2FkZCcpO1xyXG5uZXcgU3Rvcmllc0xheW91dCgpO1xyXG5uZXcgU3RvcnlEZXNjcmlwdGlvbigpO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTWFrZUFjdGl2aXR5IGZyb20gXCIuL19tYWtlX2FjdGl2aXR5XCI7XHJcbmltcG9ydCBBZGR0b0NhcnQgZnJvbSBcIi4uL2dsb2JhbC9fYWRkVG9DYXJ0XCI7XHJcblxyXG5jbGFzcyBGaWx0ZXJBY3Rpdml0aWVzIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy51cmxGaWx0ZXJzID0gJy9hY3Rpdml0aWVzQXBpUG9zRmlsdGVyJztcclxuICAgICAgICB0aGlzLnVybFNlYXJjaCA9ICcvYWN0aXZpdGllc0FwaVBvc1NlYXJjaCc7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc1RleHRDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19saXN0X190aXRsZSBzcGFuJyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19saXN0X190aXRsZSBoMycpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3RJbml0aWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcl9faW5pdGlhbCcpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3RGaWx0ZXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyX19maWx0ZXJfc2VhcmNoJyk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvdG90eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX2l0ZW0tcHJvdG90eXBlIGRpdicpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpdml0aWVzX19zZWxlY3RvcnNfX2ZpbHRlcnNfX2xpc3RzIGxpJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoRm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX3NlbGVjdG9yc19fc2VhcmNoIGZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcclxuICAgICAgICB0aGlzLnNlYXJjaEZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fc2VsZWN0b3JzX19zZWFyY2ggZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGluZ0RvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZ19kb3RzOmZpcnN0LWNoaWxkJyk7XHJcbiAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzRnJvbVNlbGVjdGVkRmlsdGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzLmZvckVhY2goKHgpPT57eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWN0aXZlRmlsdGVyLmJpbmQodGhpcykgKX0pO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaEZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldEFjdGl2aXRpZXNGcm9tU2VhcmNoLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0RmlsdGVyU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVJbnNlcnRlZCcsICgpPT57XHJcbiAgICAgICAgICAgIGxldCBhbW91bnRBY3Rpdml0aWVzID0gdGhpcy5hY3Rpdml0aWVzTGlzdEZpbHRlclNlYXJjaC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZpdHknKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdGllc1RleHQuaW5uZXJUZXh0ID0gIGFtb3VudEFjdGl2aXRpZXMudG9TdHJpbmcoKSsnIEFrdGl2aXTDpHRlbiBnZWZ1bmRlbic7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZlRmlsdGVyKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB0aGlzLmdldEFjdGl2aXRpZXNGcm9tU2VsZWN0ZWRGaWx0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlVXJsRm9yRmlsdGVyKCl7XHJcbiAgICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICAgIGxldCBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2aXRpZXNfX3NlbGVjdG9yc19fZmlsdGVyc19fbGlzdHMgbGkuc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyc1RleHQgPSAnJztcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJzLmxlbmd0aCAtIDE7IGkrKylcclxuICAgICAgICAgICAgICAgIGZpbHRlcnNUZXh0ICs9IGZpbHRlcnNbaV0uaW5uZXJUZXh0ICsgJywnO1xyXG4gICAgICAgICAgICBmaWx0ZXJzVGV4dCArPSBmaWx0ZXJzW2ZpbHRlcnMubGVuZ3RoIC0gMV0uaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICB1cmwgPSB0aGlzLnVybEZpbHRlcnMgKyAnLycgKyBmaWx0ZXJzVGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlVXJsRm9yU2VhcmNoKCl7XHJcbiAgICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEZvcm1JbnB1dC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcnNUZXh0ID0gdGhpcy5zZWFyY2hGb3JtSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIHVybCA9IHRoaXMudXJsU2VhcmNoICsgJy8nICsgZmlsdGVyc1RleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZpdGllc0Zyb21TZWxlY3RlZEZpbHRlcigpe1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLm1ha2VVcmxGb3JGaWx0ZXIoKTtcclxuICAgICAgICBpZiAodXJsLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0aXZpdGllcyh1cmwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5pdGlhbENvbnRhaW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2aXRpZXNGcm9tU2VhcmNoKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMubWFrZVVybEZvclNlYXJjaCgpO1xyXG4gICAgICAgIGlmICh1cmwubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgdGhpcy5nZXRBY3Rpdml0aWVzKHVybCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnNob3dJbml0aWFsQ29udGFpbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZpdGllcyh1cmwpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpdml0aWVzID0gcmVzcG9uc2UuZGF0YS5hY3Rpdml0aWVzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvYWRNb3JlID0gcmVzcG9uc2UuZGF0YS5sb2FkTW9yZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZpdGllcy5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYWN0aXZpdGllc0xpc3RGaWx0ZXJTZWFyY2gucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2aXR5JykuZm9yRWFjaCgoYWN0aXZpdHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhY3Rpdml0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXRpZXMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aXZpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0FjdGl2aXR5ID0gbmV3IE1ha2VBY3Rpdml0eSh0aGF0LnByb3RvdHlwZSkubWFrZShhY3Rpdml0eS5pZCwgYWN0aXZpdHkuaW1hZ2UsIGFjdGl2aXR5LmltYWdlQWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHkubmFtZSwgYWN0aXZpdHkuZGVzY3JpcHRpb24sIGFjdGl2aXR5LmxpbmssIGFjdGl2aXR5LnByaWNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuYWN0aXZpdGllc0xpc3RGaWx0ZXJTZWFyY2guYXBwZW5kQ2hpbGQobmV3QWN0aXZpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXcgQWRkdG9DYXJ0KCcuYWN0aXZpdHlfX2NvbnRlbnRfX2FjdGlvbnNfX2FkZCBhJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIC8vbm8gc2UgaGFuIGVuY29udHJhZG9cclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmFjdGl2aXRpZXNUZXh0LmlubmVyVGV4dCA9ICdNaXQgZGllc2VuIEZpbHRlcm4gd3VyZGVuIGtlaW5lIEFrdGl2aXTDpHRlbiBnZWZ1bmRlbic7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhhdC5oaWRlTG9hZGluZ0FuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dMb2FkaW5nQW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0luaXRpYWxDb250YWluZXIoKXtcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0RmlsdGVyU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2FjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcl9fZmlsdGVyX3NlYXJjaC0taGlkZScpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3RJbml0aWFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcl9faW5pdGlhbC0taGlkZScpO1xyXG5cclxuICAgICAgICBsZXQgYW1vdW50QWN0aXZpdGllcyA9IHRoaXMuYWN0aXZpdGllc0xpc3RJbml0aWFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpdml0eScpLmxlbmd0aDtcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNUZXh0LmlubmVyVGV4dCA9ICBhbW91bnRBY3Rpdml0aWVzLnRvU3RyaW5nKCkrJyBBa3Rpdml0w6R0ZW4gZ2VmdW5kZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dMb2FkaW5nQW5pbWF0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzVGV4dC5pbm5lclRleHQgPSAnU3VjaGVuIFNpZSBuYWNoIEFrdGl2aXTDpHRlbiBtaXQgZGllc2VuIEZpbHRlcm4gLi4uJzsgLy9idXNjYW5kb1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3RGaWx0ZXJTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyX19maWx0ZXJfc2VhcmNoLS1oaWRlJyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzTGlzdEluaXRpYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyX19pbml0aWFsLS1oaWRlJyk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGluZ0RvdHMuY2xhc3NMaXN0LnRvZ2dsZSgnbG9hZGluZ19kb3RzLS12aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUxvYWRpbmdBbmltYXRpb24oKXtcclxuICAgICAgICB0aGlzLmxvYWRpbmdEb3RzLmNsYXNzTGlzdC50b2dnbGUoJ2xvYWRpbmdfZG90cy0tdmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQWN0aXZpdGllczsiLCJpbXBvcnQgY2xpcEh0bWwgZnJvbSAndGV4dC1jbGlwcGVyJztcclxuXHJcbmNsYXNzIE1ha2VBY3Rpdml0eSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90b3R5cGUpe1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlID0gcHJvdG90eXBlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzU2l6ZXMgPSBbMTkyMCwgMTIwMCwgMTAwMCwgOTAwLCA4MDAsIDYwMF07XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbkxlbmdodCA9IDc1O1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VJbWFnZVNyY1NldCh1cmwpe1xyXG4gICAgICAgIGxldCBzcmNTZXQgPSBbXTtcclxuICAgICAgICB0aGlzLmltYWdlc1NpemVzLmZvckVhY2goKGRpbSk9PntcclxuICAgICAgICAgICAgLy91c2luZyB0aGUgbWVkaWEgcmVzb2x2ZXIgY3FhY2hlIHVybCEhIVxyXG4gICAgICAgICAgICBzcmNTZXQucHVzaCgnL21lZGlhL2NhY2hlL3Jlc29sdmUvbWluX3dpZHRoXycrZGltK3VybCsnICcrZGltKyd3Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHNyY1NldC5qb2luKCcsICcpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2UoaWQsIGltYWdlLCBpbWFnZUFsdCwgbmFtZSwgZGVzY3JpcHRpb24sIGxpbmssIHByaWNlKXtcclxuICAgICAgICBsZXQgbmV3QWN0aXZpdHkgPSB0aGlzLnByb3RvdHlwZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgbGV0IGltYWdlU3JjU2V0ID0gdGhpcy5tYWtlSW1hZ2VTcmNTZXQoaW1hZ2UpO1xyXG5cclxuICAgICAgICBuZXdBY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdHlfX2NvbnRlbnRfX2FjdGlvbnNfX2FkZCcpLnNldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpdml0eV9pZCcsIGlkKTtcclxuXHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignaW1nJykuc2V0QXR0cmlidXRlKCdkYXRhLXNyY3NldCcsIGltYWdlU3JjU2V0KTtcclxuICAgICAgICBuZXdBY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgJyhtaW4td2lkdGg6MTAwMHB4KSAzM3Z3LCA5MHZ3Jyk7XHJcbiAgICAgICAgLy9UT0RPOiBwdXQgdGhlIGJhc2U2NHZlcnNpb24/XHJcbiAgICAgICAgLy8gbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignaW1nJykuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZSk7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignaW1nJykuc2V0QXR0cmlidXRlKCdhbHQnLCBpbWFnZUFsdCk7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignaW1nJykuY2xhc3NMaXN0LmFkZCgnYmx1ci11cCcpO1xyXG4gICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmNsYXNzTGlzdC5hZGQoJ2xhenlsb2FkJyk7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignaDQnKS5pbm5lckhUTUwgPSBuYW1lO1xyXG4gICAgICAgIG5ld0FjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0eV9fY29udGVudF9fZGVzY3JpcHRpb24gYScpLmlubmVySFRNTCA9IGNsaXBIdG1sKGRlc2NyaXB0aW9uLCB0aGlzLmRlc2NyaXB0aW9uTGVuZ2h0LCB7aW5kaWNhdG9yOicnfSk7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5X19pbWFnZSBhJykuc2V0QXR0cmlidXRlKCdocmVmJywgbGluayk7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5X19jb250ZW50X190aXRsZSBhJykuc2V0QXR0cmlidXRlKCdocmVmJywgbGluayk7XHJcbiAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5X19jb250ZW50X19kZXNjcmlwdGlvbiBhJykuc2V0QXR0cmlidXRlKCdocmVmJywgbGluayk7XHJcblxyXG4gICAgICAgIGlmKHByaWNlICE9PSBudWxsKVxyXG4gICAgICAgICAgICBuZXdBY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdHlfX2NvbnRlbnRfX3ByaWNlIHNwYW4nKS5pbm5lckhUTUwgPSBwcmljZSArIFwiIOKCrFwiO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgbmV3QWN0aXZpdHkucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5X19jb250ZW50X19wcmljZScpLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3QWN0aXZpdHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ha2VBY3Rpdml0eTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTWFrZUFjdGl2aXR5IGZyb20gJy4vX21ha2VfYWN0aXZpdHknO1xyXG5cclxuY2xhc3MgTG9hZEFjdGl2aXRpZXMge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmFtb3VudCA9IDY7XHJcbiAgICAgICAgdGhpcy51cmwgPSAnL2FjdGl2aXRpZXNBcGlQb3MnO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3RJbml0aWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcl9faW5pdGlhbCcpO1xyXG4gICAgICAgIHRoaXMuYnRuTG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19saXN0X19tb3JlIGJ1dHRvbicpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmdEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmdfZG90czpsYXN0LWNoaWxkJyk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvdG90eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX2l0ZW0tcHJvdG90eXBlIGRpdicpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYnRuTG9hZCAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmJ0bkxvYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdldERhdGEuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldERhdGEoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5hY3Rpdml0aWVzTGlzdEluaXRpYWwucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2aXR5JykubGVuZ3RoO1xyXG5cclxuICAgICAgICBsZXQgdXJsID0gdGhpcy51cmwrJy8nK3BvcysnLycrdGhpcy5hbW91bnQ7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBheGlvcy5nZXQodXJsKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpdml0aWVzID0gcmVzcG9uc2UuZGF0YS5hY3Rpdml0aWVzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvYWRNb3JlID0gcmVzcG9uc2UuZGF0YS5sb2FkTW9yZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobG9hZE1vcmUgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuYnRuTG9hZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZpdGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZpdGllcy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpdml0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3QWN0aXZpdHkgPSBuZXcgTWFrZUFjdGl2aXR5KHRoYXQucHJvdG90eXBlKS5tYWtlKGFjdGl2aXR5LmlkLCBhY3Rpdml0eS5pbWFnZSwgYWN0aXZpdHkuaW1hZ2VBbHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eS5uYW1lLCBhY3Rpdml0eS5kZXNjcmlwdGlvbiwgYWN0aXZpdHkubGluaywgYWN0aXZpdHkucHJpY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5hY3Rpdml0aWVzTGlzdEluaXRpYWwuYXBwZW5kQ2hpbGQobmV3QWN0aXZpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignIG1vc3RyYXIgcXVlIG5vIGhheSBtYXMnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGF0LmxvYWRpbmdEb3RzLmNsYXNzTGlzdC50b2dnbGUoJ2xvYWRpbmdfZG90cy0tdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5hY3Rpdml0aWVzTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdhY3Rpdml0aWVzX19saXN0X19jb250YWluZXItLWxvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBsb2FkaW5nIG1vcmUgYWN0aXZpdGllc1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0xpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyLS1sb2FkaW5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nRG90cy5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkaW5nX2RvdHMtLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRBY3Rpdml0aWVzOyIsImNsYXNzIFN0b3JpZXNMYXlvdXQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnN0b3JpZXNTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZpdGllc19fc3Rvcmllc19faXRlbXMgbGknKTtcclxuICAgICAgICB0aGlzLnN0b3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZpdGllc19fc3Rvcmllc19fc3RvcnknKTtcclxuICAgICAgICB0aGlzLnN0b3JpZXNBbW91bnQgPSB0aGlzLnN0b3JpZXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuc3Rvcmllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19zdG9yaWVzX19zdG9yeV9fY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLnN0b3JpZXNTZWxlY3RvcnMuZm9yRWFjaCgoc3RvcnlTZWxlY3Rvcik9PntcclxuICAgICAgICAgICAgc3RvcnlTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlQWN0aXZlU3RvcnkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMuc3Rvcmllc1NlbGVjdG9yc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLnN0b3JpZXNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Rvcmllc0NvbnRhaW5lci5oZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RvcnktMCcpLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpZCA9IDA7IGlkIDwgdGhpcy5zdG9yaWVzQW1vdW50OyBpZCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXNwbGFjZW1lbnQgPSBpZCoxMDA7XHJcbiAgICAgICAgICAgIGxldCBzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdG9yeS0nK2lkKTtcclxuICAgICAgICAgICAgc3Rvcnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIgKyBkaXNwbGFjZW1lbnQgKyBcIiUpO1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQWN0aXZlU3RvcnkoZSl7XHJcbiAgICAgICAgbGV0IHN0b3J5U2VsZWN0b3IgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yaWVzU2VsZWN0b3JzLmZvckVhY2goKF9zdG9yeVNlbGVjdG9yKT0+e1xyXG4gICAgICAgICAgICBfc3RvcnlTZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN0b3JpZXMuZm9yRWFjaCgoc3RvcnkpPT57XHJcbiAgICAgICAgICAgIHN0b3J5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN0b3J5U2VsZWN0b3IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGxldCBzdG9yeUlkID0gc3RvcnlTZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvcnknKTtcclxuICAgICAgICBsZXQgbmV3QWN0aXZlU3RvcnlQb3MgPSBwYXJzZUludChzdG9yeUlkLnNwbGl0KCctJylbMV0pO1xyXG4gICAgICAgIGxldCBhc3NvY2lhdGVTdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RvcnlJZCk7XHJcbiAgICAgICAgYXNzb2NpYXRlU3RvcnkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Rvcmllc0NvbnRhaW5lci5oZWlnaHQgPSBhc3NvY2lhdGVTdG9yeS5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaWQgPSAwOyBpZCA8IHRoaXMuc3Rvcmllc0Ftb3VudDsgaWQrKykge1xyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gKGlkLW5ld0FjdGl2ZVN0b3J5UG9zKSoxMDA7XHJcbiAgICAgICAgICAgIGxldCBzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdG9yeS0nK2lkKTtcclxuICAgICAgICAgICAgc3Rvcnkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIgKyBkaXNwbGFjZW1lbnQgKyBcIiUpO1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JpZXNMYXlvdXQ7IiwiaW1wb3J0IG1hcGJveGdsIGZyb20gJ21hcGJveC1nbCc7XHJcblxyXG5jbGFzcyBTdG9yeURlc2NyaXB0aW9ue1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSAncGsuZXlKMUlqb2lZMkZ5ZEcxaGJuVnpaWElpTENKaElqb2lZMnA1YUhWeU5IQjJNRE51ZHpObmJuSmlhR1Z0Y1dKMk9DSjkuMlVQREtuU1pSTndOUjFJVGxaUUVBQSc7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiAnbWFwJyxcclxuICAgICAgICAgICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L291dGRvb3JzLXYxMScsXHJcbiAgICAgICAgICAgIGNlbnRlcjogWyAtODEuMTEwNTE1NTk0NDgyNDIsMjIuNTA4OTA5NTY1MjA1MjRdLFxyXG4gICAgICAgICAgICB6b29tOiA2XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYXAuc2Nyb2xsWm9vbS5kaXNhYmxlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcigpO1xyXG4gICAgICAgIHRoaXMucG9zID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yaWVzU2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2aXRpZXNfX3N0b3JpZXNfX2l0ZW1zIGxpJyk7XHJcbiAgICAgICAgdGhpcy5zdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19zdG9yaWVzX19zdG9yeScpO1xyXG4gICAgICAgIHRoaXMucGF0aHMgPSB0aGlzLnN0b3J5LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW5bZGF0YS1wYXRoLW1hcF0nKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gdGhpcy5zdG9yeS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuW2RhdGEtbWFwXScpO1xyXG5cclxuICAgICAgICB0aGlzLmdlb2pzb25zID0gW107XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcclxuICAgICAgICB0aGlzLm1heFZpZXdDb29yZHMgPSBbXTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLm1hcC5vbignbG9hZCcsdGhpcy5yZWFkUGF0aHMuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Rvcmllc1NlbGVjdG9ycy5mb3JFYWNoKChzdG9yeVNlbGVjdG9yKT0+e1xyXG4gICAgICAgICAgICBzdG9yeVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VBY3RpdmVTdG9yeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYXRocy5mb3JFYWNoKChwYXRoLCBpbmRleCk9PntcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudE9uU2NyZWVuKHBhdGgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVQYXRoKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL1RPRE86IHVnbHkgc29sdXRpb25cclxuICAgICAgICAgICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcik9PntcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudE9uU2NyZWVuKG1hcmtlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcHMgPSBtYXJrZXIuZ2V0QXR0cmlidXRlKCdkYXRhLW1hcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzID0gSlNPTi5wYXJzZShwcm9wcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwLmZseVRvKHtjZW50ZXI6IHByb3BzLmNlbnRlciwgem9vbTogcHJvcHMuem9vbX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZWFkUGF0aHMoKXtcclxuICAgICAgICBpZiAodGhpcy5wYXRocy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5wYXRocy5mb3JFYWNoKChwYXRoLCBpbmRleCk9PntcclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHBhdGguZ2V0QXR0cmlidXRlKCdkYXRhLXBhdGgtbWFwJyk7XHJcbiAgICAgICAgICAgIHByb3BzID0gSlNPTi5wYXJzZShwcm9wcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvanNvbnMucHVzaChwcm9wcy5nZW9qc29uKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtdO1xyXG4gICAgICAgICAgICBwcm9wcy5nZW9qc29uLmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZS5nZW9tZXRyeS50eXBlPT09J0xpbmVTdHJpbmcnKXtcclxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlLmdlb21ldHJ5LmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGF0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgbG9ncyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSk9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXRzLnB1c2goY29vcmRpbmF0ZVswXSk7XHJcbiAgICAgICAgICAgICAgICBsb2dzLnB1c2goY29vcmRpbmF0ZVsxXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGF0cy5zb3J0KChhLGIpID0+IHsgcmV0dXJuIGEgPD0gYiA/IC0xIDogMSB9ICk7XHJcbiAgICAgICAgICAgIGxvZ3Muc29ydCgoYSxiKSA9PiB7IHJldHVybiBhIDw9IGIgPyAtMSA6IDEgfSApO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1heENvb3JkcyA9IFtbbGF0c1swXSxsb2dzWzBdXSxcclxuICAgICAgICAgICAgICAgIFtsYXRzW2xhdHMubGVuZ3RoLTFdLCBsb2dzW2xvZ3MubGVuZ3RoLTFdIF1dO1xyXG4gICAgICAgICAgICB0aGlzLm1heFZpZXdDb29yZHMucHVzaChtYXhDb29yZHMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYXllcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAnaWQnOiAnbGF5ZXItcGF0aF8nK2luZGV4LFxyXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnbGluZScsXHJcbiAgICAgICAgICAgICAgICAnc291cmNlJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2dlb2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogcHJvcHMuZ2VvanNvblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdsYXlvdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtY2FwJzogJ3JvdW5kJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS1qb2luJzogJ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdwYWludCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS1jb2xvcic6ICcjNjJhYjAzJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS13aWR0aCc6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtb3BhY2l0eSc6IC44NVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZU1hcmtlcih0aW1lc3RhbXApIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNUaW1lICsgNDEgPCB0aW1lc3RhbXApe1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzVGltZSA9IHRpbWVzdGFtcDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWFya2VyLnNldExuZ0xhdCh0aGlzLmdlb2pzb24uZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXNbdGhpcy5wb3NdKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWFya2VyLmFkZFRvKHRoaXMubWFwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9zICs9IDE7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3MgPT09IHRoaXMuZ2VvanNvbi5mZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcyA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlTWFya2VyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUFjdGl2ZVN0b3J5KGUpIHtcclxuICAgICAgICBsZXQgc3RvcnlTZWxlY3RvciA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICBsZXQgc3RvcnlJZCA9IHN0b3J5U2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdkYXRhLXN0b3J5Jyk7XHJcbiAgICAgICAgbGV0IGFzc29jaWF0ZVN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdG9yeUlkKTtcclxuICAgICAgICB0aGlzLnBhdGhzID0gYXNzb2NpYXRlU3RvcnkucXVlcnlTZWxlY3RvckFsbCgnc3BhbltkYXRhLXBhdGgtbWFwXScpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlTGF5ZXJzKFsuLi5BcnJheSgxMikua2V5cygpXSk7XHJcbiAgICAgICAgdGhpcy5yZWFkUGF0aHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMYXllcnMoaW5kZXhzKXtcclxuICAgICAgICBpbmRleHMuZm9yRWFjaCgoaW5kZXgpPT57XHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91c0xheWVySWQgPSAnbGF5ZXItcGF0aF8nK2luZGV4O1xyXG4gICAgICAgICAgICBsZXQgcHJldmlvdXNNYXBMYXllciA9IHRoaXMubWFwLmdldExheWVyKHByZXZpb3VzTGF5ZXJJZCk7XHJcbiAgICAgICAgICAgIGxldCBwcmV2aW91c01hcFNvdXJjZSA9IHRoaXMubWFwLmdldFNvdXJjZShwcmV2aW91c0xheWVySWQpO1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgcHJldmlvdXNNYXBMYXllciAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcihwcmV2aW91c0xheWVySWQpO1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgcHJldmlvdXNNYXBTb3VyY2UgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlU291cmNlKHByZXZpb3VzTGF5ZXJJZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlUGF0aChpbmRleCl7XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlTGF5ZXJzKFtpbmRleC0xLCBpbmRleCsxXSk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50TGF5ZXJJZCA9ICdsYXllci1wYXRoXycraW5kZXg7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRNYXBMYXllciA9IHRoaXMubWFwLmdldExheWVyKGN1cnJlbnRMYXllcklkKTtcclxuXHJcbiAgICAgICAgaWYodHlwZW9mIGN1cnJlbnRNYXBMYXllciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcnNbaW5kZXhdKTtcclxuICAgICAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMubWF4Vmlld0Nvb3Jkc1tpbmRleF0sIHtwYWRkaW5nOiAyMH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNFbGVtZW50T25TY3JlZW4oZWxlbWVudCkge1xyXG4gICAgICAgIGxldCBib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiBib3VuZHMudG9wID4gMCAgJiYgYm91bmRzLnRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5RGVzY3JpcHRpb247XHJcbiIsImltcG9ydCB7IHNldENvb2tpZSwgZ2V0Q29va2llIH0gZnJvbSAnLi9fdXRpbHMnO1xyXG5cclxuY2xhc3MgQWRkdG9DYXJ0IHtcclxuICAgIGNvbnN0cnVjdG9yKGJ1dHRvbnNTZWxlY3Rvcil7XHJcbiAgICAgICAgdGhpcy5idXR0b25zU2VsZWN0b3IgPSBidXR0b25zU2VsZWN0b3I7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0ZpbHRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0aWVzX19saXN0X19jb250YWluZXJfX2ZpbHRlcl9zZWFyY2gnKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuYnV0dG9uc1NlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmNhcnRCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXInKTtcclxuICAgICAgICB0aGlzLmNhcnRCYXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfYmFyIC5jYXJ0X2Jhcl9fY29udGVudF9fdGV4dCBzcGFuJyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMubG9hZEFjdGl2aXRpZXMoKTtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEFjdGl2aXRpZXMoKXtcclxuICAgICAgICBsZXQgY3VycmVudFZhbHVlID0gZ2V0Q29va2llKCdwcm9kdWN0c19jYXJ0Jyk7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50VmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzID0gY3VycmVudFZhbHVlWzFdLnNwbGl0KCcsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5idXR0b25zQWRkLmZvckVhY2goKGJ1dHRvbik9PntcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRPclJlbW92ZUFjdGl2aXR5LmJpbmQodGhpcylcclxuICAgICAgICApfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXRpZXNGaWx0ZXJDb250YWluZXIgIT09IG51bGwpXHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzRmlsdGVyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVJbnNlcnRlZCcsIChlbGVtZW50KT0+e1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZpdHkgPSBlbGVtZW50LnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGFjdGl2aXR5LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpdml0eV9fY29udGVudF9fYWN0aW9uc19fYWRkJyk7XHJcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkT3JSZW1vdmVBY3Rpdml0eS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0dXMoKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNBZGQuZm9yRWFjaCgoYnV0dG9uKT0+e1xyXG4gICAgICAgICAgIGxldCBhY3Rpdml0eUlkID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpdml0eV9pZCcpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rpdml0aWVzLmluY2x1ZGVzKGFjdGl2aXR5SWQpKXtcclxuICAgICAgICAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ3N2Zy5oZWFydCcpLmNsYXNzTGlzdC50b2dnbGUoJ2hlYXJ0LS1maWxsLXdoaXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluQWN0aXZpdHkoYWN0aXZpdHlJZCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZpdGllcy5pbmNsdWRlcyhhY3Rpdml0eUlkKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBY3Rpdml0eShhY3Rpdml0eUlkKXtcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXMgPSB0aGlzLmFjdGl2aXRpZXMuZmlsdGVyKCh4KT0+e3JldHVybiB4IT09YWN0aXZpdHlJZH0pO1xyXG4gICAgICAgIHNldENvb2tpZSh0aGlzLmFjdGl2aXRpZXMudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWN0aXZpdHkoYWN0aXZpdHlJZCl7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzLnB1c2goYWN0aXZpdHlJZCk7XHJcbiAgICAgICAgc2V0Q29va2llKHRoaXMuYWN0aXZpdGllcy50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYXJ0VGV4dCgpe1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXRpZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLmNhcnRCYXIuY2xhc3NMaXN0LmFkZCgnY2FydF9iYXItLWluaXRpYWwnKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0QmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcnRfYmFyLS1pbml0aWFsJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FydEJhclRleHQuaW5uZXJIVE1MID0gdGhpcy5hY3Rpdml0aWVzLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QucmVtb3ZlKCdjYXJ0X2Jhci0tdmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dDYXJ0KCl7XHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcnRfYmFyLS12aXNpYmxlJyk7XHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyLmNsYXNzTGlzdC5hZGQoJ2NhcnRfYmFyLS12aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT3JSZW1vdmVBY3Rpdml0eShlKXtcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICBsZXQgYWN0aXZpdHlJZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZpdHlfaWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbkFjdGl2aXR5KGFjdGl2aXR5SWQpKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBY3Rpdml0eShhY3Rpdml0eUlkKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0VGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRBY3Rpdml0eShhY3Rpdml0eUlkKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0VGV4dCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDYXJ0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XHJcbiAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ3N2Zy5oZWFydCcpLmNsYXNzTGlzdC50b2dnbGUoJ2hlYXJ0LS1maWxsLXdoaXRlJyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGR0b0NhcnQ7IiwiZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZSh2YWx1ZSwgbmFtZT0ncHJvZHVjdHNfY2FydCcgLCBkYXlzPTMpIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSsoZGF5cyoyNCo2MCo2MCoxMDAwKSk7XHJcbiAgICBsZXQgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiK2RhdGUudG9HTVRTdHJpbmcgKCk7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArXHJcbiAgICAgICAgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICBsZXQgY0FyciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgZm9yKGxldCBpPTA7aSA8IGNBcnIubGVuZ3RoO2krKykge1xyXG4gICAgICAgIGxldCBjb29raWUgPSBjQXJyW2ldLnNwbGl0KFwiPVwiLDIpO1xyXG4gICAgICAgIGNvb2tpZVswXSA9IGNvb2tpZVswXS5yZXBsYWNlKC9eXFxzKy8sXCJcIik7XHJcbiAgICAgICAgaWYgKGNvb2tpZVswXSA9PT0gbmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIGNvb2tpZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=