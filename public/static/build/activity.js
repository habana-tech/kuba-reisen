(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity"],{

/***/ "./assets/scripts/activity.js":
/*!************************************!*\
  !*** ./assets/scripts/activity.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_activity_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/activity.scss */ "./assets/styles/activity.scss");
/* harmony import */ var _styles_activity_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_activity_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_activity_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/activity/_gallery */ "./assets/scripts/modules/activity/_gallery.js");
/* harmony import */ var _modules_activity_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/activity/_map */ "./assets/scripts/modules/activity/_map.js");
/* harmony import */ var _modules_activity_days__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/activity/_days */ "./assets/scripts/modules/activity/_days.js");




new _modules_activity_map__WEBPACK_IMPORTED_MODULE_2__["ActivityMap"]();
new _modules_activity_gallery__WEBPACK_IMPORTED_MODULE_1__["default"]('.gallery');
new _modules_activity_days__WEBPACK_IMPORTED_MODULE_3__["default"]();

/***/ }),

/***/ "./assets/scripts/modules/activity/_days.js":
/*!**************************************************!*\
  !*** ./assets/scripts/modules/activity/_days.js ***!
  \**************************************************/
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





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Days =
/*#__PURE__*/
function () {
  function Days() {
    _classCallCheck(this, Days);

    this.daysTitles = document.querySelectorAll('.day__title');
    this.events();
  }

  _createClass(Days, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.daysTitles.forEach(function (dayTitle) {
        dayTitle.addEventListener('click', _this.expand.bind(_this));
      });
    }
  }, {
    key: "expand",
    value: function expand(e) {
      e.preventDefault();
      var dayContent = e.target.parentNode.parentNode;
      dayContent.classList.toggle('day--active');
      dayContent.style.maxHeight ? dayContent.style.maxHeight = null : dayContent.style.maxHeight = dayContent.scrollHeight + "px";
    }
  }]);

  return Days;
}();

/* harmony default export */ __webpack_exports__["default"] = (Days);

/***/ }),

/***/ "./assets/scripts/modules/activity/_gallery.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/modules/activity/_gallery.js ***!
  \*****************************************************/
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
/* harmony import */ var swipe_listener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swipe-listener */ "./node_modules/swipe-listener/dist/swipe-listener.min.js");
/* harmony import */ var swipe_listener__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swipe_listener__WEBPACK_IMPORTED_MODULE_4__);





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Gallery =
/*#__PURE__*/
function () {
  function Gallery(selector) {
    _classCallCheck(this, Gallery);

    this.container = document.querySelector(selector);
    this.listener = swipe_listener__WEBPACK_IMPORTED_MODULE_4___default()(this.container);
    this.items = document.querySelectorAll(selector + ' .gallery__item');
    this.activePos = 0;
    this.init();
    this.arrows = this.addArrows();
    this.arrowPrev = this.arrows[0];
    this.arrowNext = this.arrows[1];
    this.events();
  }

  _createClass(Gallery, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.arrowPrev.addEventListener('click', this.prev.bind(this));
      this.arrowNext.addEventListener('click', this.next.bind(this));
      this.container.addEventListener('swipe', function (e) {
        var directions = e.detail.directions;
        if (directions.left) _this.next();
        if (directions.right) _this.prev();
      });
    }
  }, {
    key: "init",
    value: function init() {
      // this.container.setAttribute('style', 'height: '+this.images[0].clientHeight+'px;');
      this.items.forEach(function (image, index) {
        var displacement = index * 100;
        image.setAttribute("style", "transform: translateX(" + displacement + "%);");
      });
    }
  }, {
    key: "addArrows",
    value: function addArrows() {
      var arrowPrev = document.createElement('div');
      arrowPrev.classList.add('gallery__arrow');
      arrowPrev.classList.add('gallery__arrow--prev');
      var arrowNext = document.createElement('div');
      arrowNext.classList.add('gallery__arrow');
      arrowNext.classList.add('gallery__arrow--next');
      this.container.appendChild(arrowPrev);
      this.container.appendChild(arrowNext);
      return [arrowPrev, arrowNext];
    }
  }, {
    key: "next",
    value: function next() {
      var _this2 = this;

      if (this.activePos === this.items.length - 1) this.activePos = -1;
      this.items.forEach(function (item, index) {
        var displacement = (index - _this2.activePos - 1) * 100;
        item.setAttribute("style", "transform: translateX(" + displacement + "%);");
      });
      this.activePos += 1;
    }
  }, {
    key: "prev",
    value: function prev() {
      var _this3 = this;

      if (this.activePos === 0) this.activePos = this.items.length;
      this.items.forEach(function (item, index) {
        var displacement = (index - _this3.activePos + 1) * 100;
        item.setAttribute("style", "transform: translateX(" + displacement + "%);");
      });
      this.activePos -= 1;
    }
  }]);

  return Gallery;
}();

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./assets/scripts/modules/activity/_map.js":
/*!*************************************************!*\
  !*** ./assets/scripts/modules/activity/_map.js ***!
  \*************************************************/
/*! exports provided: ActivityMapAnimate, ActivityMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityMapAnimate", function() { return ActivityMapAnimate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityMap", function() { return ActivityMap; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _global_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/_utils */ "./assets/scripts/modules/global/_utils.js");








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ActivityMap =
/*#__PURE__*/
function () {
  function ActivityMap() {
    _classCallCheck(this, ActivityMap);

    mapbox_gl__WEBPACK_IMPORTED_MODULE_7___default.a.accessToken = 'pk.eyJ1IjoiY2FydG1hbnVzZXIiLCJhIjoiY2p5aHVyNHB2MDNudzNnbnJiaGVtcWJ2OCJ9.2UPDKnSZRNwNR1ITlZQEAA';
    this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_7___default.a.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v11',
      zoom: 13,
      center: [-81.1739857, 23.191922]
    });
    this.map.scrollZoom.disable();
    this.points = document.querySelectorAll('.description-itinerary__content span[data-map]');
    this.paths = document.querySelectorAll('.description-itinerary__content span[data-path-map]');
    this.setMarkersAndZoom();
    this.events();
  }

  _createClass(ActivityMap, [{
    key: "events",
    value: function events() {
      this.map.on('load', this.setPathAndZoom.bind(this));
    }
  }, {
    key: "setMarkersAndZoom",
    value: function setMarkersAndZoom() {
      var _this = this;

      if (this.points.length === 0) return;
      var lats = [];
      var logs = [];
      this.points.forEach(function (point) {
        var props = point.getAttribute('data-map');
        props = JSON.parse(props);
        lats.push(props.center[0]);
        logs.push(props.center[1]);

        if (props.name === '') {
          new mapbox_gl__WEBPACK_IMPORTED_MODULE_7___default.a.Marker().setLngLat(props.center).addTo(_this.map);
        } else {
          new mapbox_gl__WEBPACK_IMPORTED_MODULE_7___default.a.Popup({
            closeOnClick: false
          }).setLngLat(props.center).setHTML('<h3>' + props.name + '</h3>').addTo(_this.map);
        }
      });
      var maxCoords = Object(_global_utils__WEBPACK_IMPORTED_MODULE_8__["getBoundingBox"])(lats, logs);
      console.log(maxCoords);
      this.map.fitBounds(maxCoords, {
        padding: 100
      });
    }
  }, {
    key: "setPathAndZoom",
    value: function setPathAndZoom() {
      var _this2 = this;

      if (this.paths.length === 0) return;
      this.paths.forEach(function (path) {
        var props = path.getAttribute('data-path-map');
        props = JSON.parse(props);
        var geojson = props.geojson;
        var coordinates = geojson.features[0].geometry.coordinates;
        var lats = [];
        var logs = [];
        coordinates.forEach(function (coordinate) {
          lats.push(coordinate[0]);
          logs.push(coordinate[1]);
        });
        var maxCoordsPath = Object(_global_utils__WEBPACK_IMPORTED_MODULE_8__["getBoundingBox"])(lats, logs);
        console.log(maxCoordsPath);

        _this2.map.addLayer({
          'id': 'layer-path',
          'type': 'line',
          'source': {
            'type': 'geojson',
            'data': geojson
          },
          'layout': {
            'line-cap': 'round',
            'line-join': 'round'
          },
          'paint': {
            'line-color': '#ed6498',
            'line-width': 5,
            'line-opacity': .8
          }
        });

        _this2.map.fitBounds(maxCoordsPath);
      });
    }
  }]);

  return ActivityMap;
}();

var ActivityMapAnimate =
/*#__PURE__*/
function () {
  function ActivityMapAnimate() {
    _classCallCheck(this, ActivityMapAnimate);

    mapbox_gl__WEBPACK_IMPORTED_MODULE_7___default.a.accessToken = 'pk.eyJ1IjoiY2FydG1hbnVzZXIiLCJhIjoiY2p5aHVyNHB2MDNudzNnbnJiaGVtcWJ2OCJ9.2UPDKnSZRNwNR1ITlZQEAA';
    this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_7___default.a.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [-81.11051559448242, 22.50890956520524],
      zoom: 5
    });
    this.geojson = {
      type: 'LineString',
      coordinates: [[-84.825439453125, 21.861498734372567], [-84.649658203125, 21.963424936844223], [-84.26513671875, 21.9328547363353], [-84.13330078125, 22.11617714721062], [-84.078369140625, 22.329752304376473], [-83.8916015625, 22.49225722008518], [-83.748779296875, 22.6038688428957], [-83.551025390625, 22.735656852206496], [-83.353271484375, 22.836945920943855], [-83.199462890625, 22.907803451058392], [-83.08959960937499, 22.948276856880895], [-82.9248046875, 22.958393318086348], [-82.705078125, 22.998851594142913], [-82.44140625, 23.039297747769726], [-82.298583984375, 23.120153621695614], [-82.12280273437499, 23.140359987886118], [-81.990966796875, 23.140359987886118], [-81.88110351562499, 23.120153621695614], [-81.7822265625, 23.02918734674459], [-81.73828125, 22.948276856880895], [-81.67236328125, 22.857194700969636], [-81.6064453125, 22.735656852206496], [-81.58447265624999, 22.553147478403194], [-81.573486328125, 22.411028521558706], [-81.4306640625, 22.30942584120019], [-81.309814453125, 22.28909641872304], [-81.0791015625, 22.350075806124867], [-80.947265625, 22.350075806124867], [-80.870361328125, 22.339914425562032], [-80.8154296875, 22.31958944283391], [-80.70556640625, 22.28909641872304], [-80.595703125, 22.25859674097572], [-80.48583984375, 22.19757745335104], [-80.2880859375, 22.09581971780769], [-80.22216796875, 22.075459351546858], [-80.1123046875, 22.04491330024569], [-79.95849609375, 22.085639901650328], [-79.7607421875, 22.268764039073968], [-79.530029296875, 22.411028521558706], [-79.376220703125, 22.421184710331858], [-79.12353515625, 22.329752304376473], [-78.94775390625, 22.370396344320053], [-78.75, 22.49225722008518], [-78.651123046875, 22.553147478403194], [-78.55224609374999, 22.51255695405145], [-78.3984375, 22.50240745949775], [-78.25561523437499, 22.43134015636061], [-78.145751953125, 22.36023644579937], [-78.02490234375, 22.27893059841188], [-77.882080078125, 22.156883186860703], [-77.80517578125, 22.06527806776582], [-77.607421875, 21.90227796666864], [-77.49755859375, 21.841104749065032], [-77.376708984375, 21.739091217718574], [-77.255859375, 21.647217065387817], [-77.10205078124999, 21.565502029745332], [-77.01416015625, 21.422389905231366], [-76.9482421875, 21.289374355860424], [-76.80541992187499, 21.22794190505815], [-76.70654296875, 20.899871347076424], [-76.673583984375, 20.622502259344817], [-76.541748046875, 20.49906428341304], [-76.4208984375, 20.354927584117682], [-76.190185546875, 20.29311344754411], [-75.9814453125, 20.2209657795223], [-75.860595703125, 20.117839630491634], [-75.6298828125, 20.066251024326302], [-75.3662109375, 20.066251024326302], [-75.05859375, 20.117839630491634], [-74.81689453125, 20.179723502765153], [-74.46533203125, 20.24158281954221], [-74.20166015624999, 20.262197124246534]]
    };
    this.marker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_7___default.a.Marker().setLngLat([-81.11051559448242, 22.50890956520524]);
    this.step = 0;
    this.events();
  }

  _createClass(ActivityMapAnimate, [{
    key: "events",
    value: function events() {
      this.map.on('load', this.init.bind(this));
    }
  }, {
    key: "init",
    value: function init() {
      // this.marker.addTo(this.map);
      // this.geoJson(this.geojson).addTo(this.map);
      this.tick(); // while (this.step < this.geojson.coordinates.length)
      //     setTimeout(this.tick, 100);
    }
  }, {
    key: "tick",
    value: function tick() {
      this.marker.setLngLat(this.geojson.coordinates[this.step]).addTo(this.map);
      this.step++;
      setTimeout(this.tick.bind(this), 1000);
    }
  }]);

  return ActivityMapAnimate;
}();



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

/***/ "./assets/styles/activity.scss":
/*!*************************************!*\
  !*** ./assets/styles/activity.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/scripts/activity.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~activity~bucket_list","vendors~activities~activity~app","vendors~activity"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hY3Rpdml0eS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FjdGl2aXR5L19kYXlzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvYWN0aXZpdHkvX2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hY3Rpdml0eS9fbWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZ2xvYmFsL191dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FjdGl2aXR5LnNjc3MiXSwibmFtZXMiOlsiQWN0aXZpdHlNYXAiLCJHYWxsZXJ5IiwiRGF5cyIsImRheXNUaXRsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVudHMiLCJmb3JFYWNoIiwiZGF5VGl0bGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXhwYW5kIiwiYmluZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRheUNvbnRlbnQiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJzZWxlY3RvciIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJsaXN0ZW5lciIsIlN3aXBlTGlzdGVuZXIiLCJpdGVtcyIsImFjdGl2ZVBvcyIsImluaXQiLCJhcnJvd3MiLCJhZGRBcnJvd3MiLCJhcnJvd1ByZXYiLCJhcnJvd05leHQiLCJwcmV2IiwibmV4dCIsImRpcmVjdGlvbnMiLCJkZXRhaWwiLCJsZWZ0IiwicmlnaHQiLCJpbWFnZSIsImluZGV4IiwiZGlzcGxhY2VtZW50Iiwic2V0QXR0cmlidXRlIiwiY3JlYXRlRWxlbWVudCIsImFkZCIsImFwcGVuZENoaWxkIiwibGVuZ3RoIiwiaXRlbSIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJtYXAiLCJNYXAiLCJ6b29tIiwiY2VudGVyIiwic2Nyb2xsWm9vbSIsImRpc2FibGUiLCJwb2ludHMiLCJwYXRocyIsInNldE1hcmtlcnNBbmRab29tIiwib24iLCJzZXRQYXRoQW5kWm9vbSIsImxhdHMiLCJsb2dzIiwicG9pbnQiLCJwcm9wcyIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsInB1c2giLCJuYW1lIiwiTWFya2VyIiwic2V0TG5nTGF0IiwiYWRkVG8iLCJQb3B1cCIsImNsb3NlT25DbGljayIsInNldEhUTUwiLCJtYXhDb29yZHMiLCJnZXRCb3VuZGluZ0JveCIsImNvbnNvbGUiLCJsb2ciLCJmaXRCb3VuZHMiLCJwYWRkaW5nIiwicGF0aCIsImdlb2pzb24iLCJjb29yZGluYXRlcyIsImZlYXR1cmVzIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlIiwibWF4Q29vcmRzUGF0aCIsImFkZExheWVyIiwiQWN0aXZpdHlNYXBBbmltYXRlIiwidHlwZSIsIm1hcmtlciIsInN0ZXAiLCJ0aWNrIiwic2V0VGltZW91dCIsInNldENvb2tpZSIsInZhbHVlIiwiZGF5cyIsImRhdGUiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJleHBpcmVzIiwidG9HTVRTdHJpbmciLCJjb29raWUiLCJnZXRDb29raWUiLCJjQXJyIiwic3BsaXQiLCJpIiwicmVwbGFjZSIsInNvcnQiLCJhIiwiYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsaUVBQUo7QUFDQSxJQUFJQyxpRUFBSixDQUFZLFVBQVo7QUFDQSxJQUFJQyw4REFBSixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1JNQSxJOzs7QUFDRixrQkFBYTtBQUFBOztBQUNULFNBQUtDLFVBQUwsR0FBa0JDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBbEI7QUFDQSxTQUFLQyxNQUFMO0FBQ0g7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QyxJQUFJQyxDQUFMLEdBQVMsQ0FBQyxDQUFWLEdBQWMsQ0FBckI7QUFBd0IsR0FBN0M7QUFFQSxTQUFPLENBQUMsQ0FBQ3BELElBQUksQ0FBQyxDQUFELENBQUwsRUFBU0MsSUFBSSxDQUFDLENBQUQsQ0FBYixDQUFELEVBQ0gsQ0FBQ0QsSUFBSSxDQUFDQSxJQUFJLENBQUNmLE1BQUwsR0FBWSxDQUFiLENBQUwsRUFBc0JnQixJQUFJLENBQUNBLElBQUksQ0FBQ2hCLE1BQUwsR0FBWSxDQUFiLENBQTFCLENBREcsQ0FBUDtBQUVILEM7Ozs7Ozs7Ozs7O0FDekJELHVDIiwiZmlsZSI6ImFjdGl2aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvYWN0aXZpdHkuc2Nzcyc7XHJcblxyXG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL21vZHVsZXMvYWN0aXZpdHkvX2dhbGxlcnknO1xyXG5pbXBvcnQge0FjdGl2aXR5TWFwfSBmcm9tICcuL21vZHVsZXMvYWN0aXZpdHkvX21hcCc7XHJcbmltcG9ydCBEYXlzIGZyb20gXCIuL21vZHVsZXMvYWN0aXZpdHkvX2RheXNcIjtcclxuXHJcbm5ldyBBY3Rpdml0eU1hcCgpO1xyXG5uZXcgR2FsbGVyeSgnLmdhbGxlcnknKTtcclxubmV3IERheXMoKTsiLCJjbGFzcyBEYXlze1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmRheXNUaXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5X190aXRsZScpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5kYXlzVGl0bGVzLmZvckVhY2goKGRheVRpdGxlKT0+e1xyXG4gICAgICAgICAgICBkYXlUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXhwYW5kLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGFuZChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBkYXlDb250ZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgIGRheUNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZGF5LS1hY3RpdmUnKTtcclxuICAgICAgICBkYXlDb250ZW50LnN0eWxlLm1heEhlaWdodCA/IGRheUNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbCA6IGRheUNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gZGF5Q29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXlzOyIsImltcG9ydCBTd2lwZUxpc3RlbmVyIGZyb20gJ3N3aXBlLWxpc3RlbmVyJztcclxuXHJcbmNsYXNzIEdhbGxlcnkge1xyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3Ipe1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IFN3aXBlTGlzdGVuZXIodGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKycgLmdhbGxlcnlfX2l0ZW0nKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQb3MgPSAwO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5hcnJvd3MgPSB0aGlzLmFkZEFycm93cygpO1xyXG4gICAgICAgIHRoaXMuYXJyb3dQcmV2ID0gdGhpcy5hcnJvd3NbMF07XHJcbiAgICAgICAgdGhpcy5hcnJvd05leHQgPSB0aGlzLmFycm93c1sxXTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJvd1ByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByZXYuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXJyb3dOZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5uZXh0LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzd2lwZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gZS5kZXRhaWwuZGlyZWN0aW9ucztcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zLmxlZnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zLnJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnaGVpZ2h0OiAnK3RoaXMuaW1hZ2VzWzBdLmNsaWVudEhlaWdodCsncHg7Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gaW5kZXgqMTAwO1xyXG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGRpc3BsYWNlbWVudCArIFwiJSk7XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQXJyb3dzKCl7XHJcbiAgICAgICAgbGV0IGFycm93UHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFycm93UHJldi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdycpO1xyXG4gICAgICAgIGFycm93UHJldi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdy0tcHJldicpO1xyXG4gICAgICAgIGxldCBhcnJvd05leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhcnJvd05leHQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fYXJyb3cnKTtcclxuICAgICAgICBhcnJvd05leHQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fYXJyb3ctLW5leHQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYXJyb3dQcmV2KTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd05leHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gW2Fycm93UHJldiwgYXJyb3dOZXh0XTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUG9zID09PSB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9zID0gLTE7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpPT57XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gKGluZGV4IC0gdGhpcy5hY3RpdmVQb3MgLSAxKSoxMDA7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIgKyBkaXNwbGFjZW1lbnQgKyBcIiUpO1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQb3MgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUG9zID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcyA9IHRoaXMuaXRlbXMubGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KT0+e1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpc3BsYWNlbWVudCA9IChpbmRleCAtIHRoaXMuYWN0aXZlUG9zICsgMSkqMTAwO1xyXG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiICsgZGlzcGxhY2VtZW50ICsgXCIlKTtcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUG9zIC09IDE7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5OyIsImltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wnO1xyXG5pbXBvcnQgeyBnZXRCb3VuZGluZ0JveCB9IGZyb20gJy4uL2dsb2JhbC9fdXRpbHMnO1xyXG5cclxuY2xhc3MgQWN0aXZpdHlNYXAge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9ICdway5leUoxSWpvaVkyRnlkRzFoYm5WelpYSWlMQ0poSWpvaVkycDVhSFZ5TkhCMk1ETnVkek5uYm5KaWFHVnRjV0oyT0NKOS4yVVBES25TWlJOd05SMUlUbFpRRUFBJztcclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xyXG4gICAgICAgICAgICBjb250YWluZXI6ICdtYXAnLFxyXG4gICAgICAgICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvb3V0ZG9vcnMtdjExJyxcclxuICAgICAgICAgICAgem9vbTogMTMsXHJcbiAgICAgICAgICAgIGNlbnRlcjogWy04MS4xNzM5ODU3LCAyMy4xOTE5MjJdLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1hcC5zY3JvbGxab29tLmRpc2FibGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb2ludHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzY3JpcHRpb24taXRpbmVyYXJ5X19jb250ZW50IHNwYW5bZGF0YS1tYXBdJyk7XHJcbiAgICAgICAgdGhpcy5wYXRocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXNjcmlwdGlvbi1pdGluZXJhcnlfX2NvbnRlbnQgc3BhbltkYXRhLXBhdGgtbWFwXScpO1xyXG5cclxuICAgICAgICB0aGlzLnNldE1hcmtlcnNBbmRab29tKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLm1hcC5vbignbG9hZCcsIHRoaXMuc2V0UGF0aEFuZFpvb20uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWFya2Vyc0FuZFpvb20oKXtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgbGF0cyA9IFtdO1xyXG4gICAgICAgIGxldCBsb2dzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goKHBvaW50KT0+e1xyXG4gICAgICAgICAgICBsZXQgcHJvcHMgPSBwb2ludC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFwJyk7XHJcbiAgICAgICAgICAgIHByb3BzID0gSlNPTi5wYXJzZShwcm9wcyk7XHJcblxyXG4gICAgICAgICAgICBsYXRzLnB1c2gocHJvcHMuY2VudGVyWzBdKTtcclxuICAgICAgICAgICAgbG9ncy5wdXNoKHByb3BzLmNlbnRlclsxXSk7XHJcblxyXG4gICAgICAgICAgICBpZihwcm9wcy5uYW1lID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICBuZXcgbWFwYm94Z2wuTWFya2VyKClcclxuICAgICAgICAgICAgICAgICAgICAuc2V0TG5nTGF0KHByb3BzLmNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAuYWRkVG8odGhpcy5tYXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3IG1hcGJveGdsLlBvcHVwKHtjbG9zZU9uQ2xpY2s6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0TG5nTGF0KHByb3BzLmNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAuc2V0SFRNTCgnPGgzPicrcHJvcHMubmFtZSsnPC9oMz4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUbyh0aGlzLm1hcCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgbWF4Q29vcmRzID0gZ2V0Qm91bmRpbmdCb3gobGF0cywgbG9ncyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWF4Q29vcmRzKTtcclxuICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMobWF4Q29vcmRzLCB7cGFkZGluZzogMTAwfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGF0aEFuZFpvb20oKXtcclxuICAgICAgICBpZiAodGhpcy5wYXRocy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5wYXRocy5mb3JFYWNoKChwYXRoKT0+e1xyXG4gICAgICAgICAgICBsZXQgcHJvcHMgPSBwYXRoLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXRoLW1hcCcpO1xyXG4gICAgICAgICAgICBwcm9wcyA9IEpTT04ucGFyc2UocHJvcHMpO1xyXG4gICAgICAgICAgICBsZXQgZ2VvanNvbiA9IHByb3BzLmdlb2pzb247XHJcblxyXG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBnZW9qc29uLmZlYXR1cmVzWzBdLmdlb21ldHJ5LmNvb3JkaW5hdGVzO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxhdHMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGxvZ3MgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpPT4ge1xyXG4gICAgICAgICAgICAgICAgbGF0cy5wdXNoKGNvb3JkaW5hdGVbMF0pO1xyXG4gICAgICAgICAgICAgICAgbG9ncy5wdXNoKGNvb3JkaW5hdGVbMV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBtYXhDb29yZHNQYXRoID0gZ2V0Qm91bmRpbmdCb3gobGF0cywgbG9ncyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1heENvb3Jkc1BhdGgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIoe1xyXG4gICAgICAgICAgICAgICAgJ2lkJzogJ2xheWVyLXBhdGgnLFxyXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnbGluZScsXHJcbiAgICAgICAgICAgICAgICAnc291cmNlJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2dlb2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhJzogZ2VvanNvblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdsYXlvdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtY2FwJzogJ3JvdW5kJyxcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS1qb2luJzogJ3JvdW5kJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdwYWludCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS1jb2xvcic6ICcjZWQ2NDk4JyxcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS13aWR0aCc6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtb3BhY2l0eSc6IC44XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKG1heENvb3Jkc1BhdGgpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIEFjdGl2aXR5TWFwQW5pbWF0ZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gJ3BrLmV5SjFJam9pWTJGeWRHMWhiblZ6WlhJaUxDSmhJam9pWTJwNWFIVnlOSEIyTUROdWR6Tm5ibkppYUdWdGNXSjJPQ0o5LjJVUERLblNaUk53TlIxSVRsWlFFQUEnO1xyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJ21hcCcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9vdXRkb29ycy12MTEnLFxyXG4gICAgICAgICAgICBjZW50ZXI6IFsgLTgxLjExMDUxNTU5NDQ4MjQyLCAyMi41MDg5MDk1NjUyMDUyNF0sXHJcbiAgICAgICAgICAgIHpvb206IDVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5nZW9qc29uID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAnTGluZVN0cmluZycsXHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04NC44MjU0Mzk0NTMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS44NjE0OTg3MzQzNzI1NjdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTg0LjY0OTY1ODIwMzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjk2MzQyNDkzNjg0NDIyM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODQuMjY1MTM2NzE4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS45MzI4NTQ3MzYzMzUzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04NC4xMzMzMDA3ODEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjExNjE3NzE0NzIxMDYyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04NC4wNzgzNjkxNDA2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4zMjk3NTIzMDQzNzY0NzNcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgzLjg5MTYwMTU2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi40OTIyNTcyMjAwODUxOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODMuNzQ4Nzc5Mjk2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNjAzODY4ODQyODk1N1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODMuNTUxMDI1MzkwNjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNzM1NjU2ODUyMjA2NDk2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04My4zNTMyNzE0ODQzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi44MzY5NDU5MjA5NDM4NTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgzLjE5OTQ2Mjg5MDYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjkwNzgwMzQ1MTA1ODM5MlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODMuMDg5NTk5NjA5Mzc0OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi45NDgyNzY4NTY4ODA4OTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgyLjkyNDgwNDY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi45NTgzOTMzMTgwODYzNDhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgyLjcwNTA3ODEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjk5ODg1MTU5NDE0MjkxM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODIuNDQxNDA2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMy4wMzkyOTc3NDc3Njk3MjZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgyLjI5ODU4Mzk4NDM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzLjEyMDE1MzYyMTY5NTYxNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODIuMTIyODAyNzM0Mzc0OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMy4xNDAzNTk5ODc4ODYxMThcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjk5MDk2Njc5Njg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzLjE0MDM1OTk4Nzg4NjExOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuODgxMTAzNTE1NjI0OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMy4xMjAxNTM2MjE2OTU2MTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjc4MjIyNjU2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMy4wMjkxODczNDY3NDQ1OVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuNzM4MjgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi45NDgyNzY4NTY4ODA4OTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjY3MjM2MzI4MTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuODU3MTk0NzAwOTY5NjM2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS42MDY0NDUzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNzM1NjU2ODUyMjA2NDk2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS41ODQ0NzI2NTYyNDk5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjU1MzE0NzQ3ODQwMzE5NFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuNTczNDg2MzI4MTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNDExMDI4NTIxNTU4NzA2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS40MzA2NjQwNjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzA5NDI1ODQxMjAwMTlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjMwOTgxNDQ1MzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjI4OTA5NjQxODcyMzA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS4wNzkxMDE1NjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzUwMDc1ODA2MTI0ODY3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC45NDcyNjU2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4zNTAwNzU4MDYxMjQ4NjdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjg3MDM2MTMyODEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjMzOTkxNDQyNTU2MjAzMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODAuODE1NDI5Njg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjMxOTU4OTQ0MjgzMzkxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC43MDU1NjY0MDYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjI4OTA5NjQxODcyMzA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC41OTU3MDMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4yNTg1OTY3NDA5NzU3MlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODAuNDg1ODM5ODQzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4xOTc1Nzc0NTMzNTEwNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODAuMjg4MDg1OTM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjA5NTgxOTcxNzgwNzY5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC4yMjIxNjc5Njg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjA3NTQ1OTM1MTU0Njg1OFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODAuMTEyMzA0Njg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjA0NDkxMzMwMDI0NTY5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OS45NTg0OTYwOTM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjA4NTYzOTkwMTY1MDMyOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzkuNzYwNzQyMTg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjI2ODc2NDAzOTA3Mzk2OFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzkuNTMwMDI5Mjk2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNDExMDI4NTIxNTU4NzA2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OS4zNzYyMjA3MDMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi40MjExODQ3MTAzMzE4NThcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc5LjEyMzUzNTE1NjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzI5NzUyMzA0Mzc2NDczXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OC45NDc3NTM5MDYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjM3MDM5NjM0NDMyMDA1M1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzguNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi40OTIyNTcyMjAwODUxOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzguNjUxMTIzMDQ2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNTUzMTQ3NDc4NDAzMTk0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OC41NTIyNDYwOTM3NDk5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjUxMjU1Njk1NDA1MTQ1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OC4zOTg0Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNTAyNDA3NDU5NDk3NzVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4LjI1NTYxNTIzNDM3NDk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNDMxMzQwMTU2MzYwNjFcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4LjE0NTc1MTk1MzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjM2MDIzNjQ0NTc5OTM3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OC4wMjQ5MDIzNDM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjI3ODkzMDU5ODQxMTg4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ny44ODIwODAwNzgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4xNTY4ODMxODY4NjA3MDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3LjgwNTE3NTc4MTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMDY1Mjc4MDY3NzY1ODJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3LjYwNzQyMTg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjkwMjI3Nzk2NjY2ODY0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ny40OTc1NTg1OTM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjg0MTEwNDc0OTA2NTAzMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzcuMzc2NzA4OTg0Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuNzM5MDkxMjE3NzE4NTc0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ny4yNTU4NTkzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS42NDcyMTcwNjUzODc4MTdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3LjEwMjA1MDc4MTI0OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuNTY1NTAyMDI5NzQ1MzMyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ny4wMTQxNjAxNTYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjQyMjM4OTkwNTIzMTM2NlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzYuOTQ4MjQyMTg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjI4OTM3NDM1NTg2MDQyNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzYuODA1NDE5OTIxODc0OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS4yMjc5NDE5MDUwNTgxNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzYuNzA2NTQyOTY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC44OTk4NzEzNDcwNzY0MjRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc2LjY3MzU4Mzk4NDM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjYyMjUwMjI1OTM0NDgxN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzYuNTQxNzQ4MDQ2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuNDk5MDY0MjgzNDEzMDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc2LjQyMDg5ODQzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4zNTQ5Mjc1ODQxMTc2ODJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc2LjE5MDE4NTU0Njg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjI5MzExMzQ0NzU0NDExXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03NS45ODE0NDUzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMjIwOTY1Nzc5NTIyM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzUuODYwNTk1NzAzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMTE3ODM5NjMwNDkxNjM0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03NS42Mjk4ODI4MTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMDY2MjUxMDI0MzI2MzAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03NS4zNjYyMTA5Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMDY2MjUxMDI0MzI2MzAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03NS4wNTg1OTM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjExNzgzOTYzMDQ5MTYzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzQuODE2ODk0NTMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4xNzk3MjM1MDI3NjUxNTNcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc0LjQ2NTMzMjAzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMjQxNTgyODE5NTQyMjFcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc0LjIwMTY2MDE1NjI0OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMjYyMTk3MTI0MjQ2NTM0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXJrZXIgPSBuZXcgbWFwYm94Z2wuTWFya2VyKClcclxuICAgICAgICAgICAgLnNldExuZ0xhdChbIC04MS4xMTA1MTU1OTQ0ODI0MiwgMjIuNTA4OTA5NTY1MjA1MjRdKTtcclxuICAgICAgICB0aGlzLnN0ZXAgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMubWFwLm9uKCdsb2FkJywgdGhpcy5pbml0LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICAvLyB0aGlzLm1hcmtlci5hZGRUbyh0aGlzLm1hcCk7XHJcbiAgICAgICAgLy8gdGhpcy5nZW9Kc29uKHRoaXMuZ2VvanNvbikuYWRkVG8odGhpcy5tYXApO1xyXG4gICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgICAgIC8vIHdoaWxlICh0aGlzLnN0ZXAgPCB0aGlzLmdlb2pzb24uY29vcmRpbmF0ZXMubGVuZ3RoKVxyXG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KHRoaXMudGljaywgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0aWNrKCkge1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtlci5zZXRMbmdMYXQodGhpcy5nZW9qc29uLmNvb3JkaW5hdGVzW3RoaXMuc3RlcF0pXHJcbiAgICAgICAgICAgIC5hZGRUbyh0aGlzLm1hcCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RlcCsrO1xyXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy50aWNrLmJpbmQodGhpcyksIDEwMDApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtBY3Rpdml0eU1hcEFuaW1hdGUsIEFjdGl2aXR5TWFwfTtcclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUodmFsdWUsIG5hbWU9J3Byb2R1Y3RzX2NhcnQnICwgZGF5cz0zKSB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkrKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xyXG4gICAgbGV0IGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIitkYXRlLnRvR01UU3RyaW5nICgpO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgK1xyXG4gICAgICAgIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xyXG4gICAgbGV0IGNBcnIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuICAgIGZvcihsZXQgaT0wO2kgPCBjQXJyLmxlbmd0aDtpKyspIHtcclxuICAgICAgICBsZXQgY29va2llID0gY0FycltpXS5zcGxpdChcIj1cIiwyKTtcclxuICAgICAgICBjb29raWVbMF0gPSBjb29raWVbMF0ucmVwbGFjZSgvXlxccysvLFwiXCIpO1xyXG4gICAgICAgIGlmIChjb29raWVbMF0gPT09IG5hbWUpXHJcbiAgICAgICAgICAgIHJldHVybiBjb29raWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCb3VuZGluZ0JveChsYXRzLCBsb2dzKXtcclxuICAgIGxhdHMuc29ydCgoYSxiKSA9PiB7IHJldHVybiBhIDw9IGIgPyAtMSA6IDEgfSApO1xyXG4gICAgbG9ncy5zb3J0KChhLGIpID0+IHsgcmV0dXJuIGEgPD0gYiA/IC0xIDogMSB9ICk7XHJcblxyXG4gICAgcmV0dXJuIFtbbGF0c1swXSxsb2dzWzBdXSxcclxuICAgICAgICBbbGF0c1tsYXRzLmxlbmd0aC0xXSwgbG9nc1tsb2dzLmxlbmd0aC0xXSBdXTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=