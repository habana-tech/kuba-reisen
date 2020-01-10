(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity"],{

/***/ "./assets/scripts/activity.js":
/*!************************************!*\
  !*** ./assets/scripts/activity.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_activity_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/activity/_gallery */ "./assets/scripts/modules/activity/_gallery.js");
/* harmony import */ var _modules_global_addToCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/global/_addToCart */ "./assets/scripts/modules/global/_addToCart.js");
/* harmony import */ var _modules_activity_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/activity/_map */ "./assets/scripts/modules/activity/_map.js");




__webpack_require__(/*! ../styles/activity.scss */ "./assets/styles/activity.scss");

new _modules_global_addToCart__WEBPACK_IMPORTED_MODULE_1__["default"]('.float_button');
new _modules_activity_map__WEBPACK_IMPORTED_MODULE_2__["ActivityMap"]();
new _modules_activity_gallery__WEBPACK_IMPORTED_MODULE_0__["default"]('.gallery');

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
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_8__);









function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ActivityMap =
/*#__PURE__*/
function () {
  function ActivityMap() {
    _classCallCheck(this, ActivityMap);

    mapbox_gl__WEBPACK_IMPORTED_MODULE_8___default.a.accessToken = 'pk.eyJ1IjoiY2FydG1hbnVzZXIiLCJhIjoiY2p5aHVyNHB2MDNudzNnbnJiaGVtcWJ2OCJ9.2UPDKnSZRNwNR1ITlZQEAA';
    this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_8___default.a.Map({
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
          new mapbox_gl__WEBPACK_IMPORTED_MODULE_8___default.a.Marker().setLngLat(props.center).addTo(_this.map);
        } else {
          new mapbox_gl__WEBPACK_IMPORTED_MODULE_8___default.a.Popup({
            closeOnClick: false
          }).setLngLat(props.center).setHTML('<h3>' + props.name + '</h3>').addTo(_this.map);
        }
      });
      lats.sort(function (a, b) {
        return a <= b ? -1 : 1;
      });
      logs.sort(function (a, b) {
        return a <= b ? -1 : 1;
      });
      var maxCoords = [[lats[0], logs[0]], [lats[lats.length - 1], logs[logs.length - 1]]];
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
        lats.sort(function (a, b) {
          return a <= b ? -1 : 1;
        });
        logs.sort(function (a, b) {
          return a <= b ? -1 : 1;
        });
        var maxCoordsPath = [[lats[0], logs[0]], [lats[lats.length - 1], logs[logs.length - 1]]];

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

        _this2.map.fitBounds(maxCoordsPath, {
          padding: 100
        });
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

    mapbox_gl__WEBPACK_IMPORTED_MODULE_8___default.a.accessToken = 'pk.eyJ1IjoiY2FydG1hbnVzZXIiLCJhIjoiY2p5aHVyNHB2MDNudzNnbnJiaGVtcWJ2OCJ9.2UPDKnSZRNwNR1ITlZQEAA';
    this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_8___default.a.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [-81.11051559448242, 22.50890956520524],
      zoom: 5
    });
    this.geojson = {
      type: 'LineString',
      coordinates: [[-84.825439453125, 21.861498734372567], [-84.649658203125, 21.963424936844223], [-84.26513671875, 21.9328547363353], [-84.13330078125, 22.11617714721062], [-84.078369140625, 22.329752304376473], [-83.8916015625, 22.49225722008518], [-83.748779296875, 22.6038688428957], [-83.551025390625, 22.735656852206496], [-83.353271484375, 22.836945920943855], [-83.199462890625, 22.907803451058392], [-83.08959960937499, 22.948276856880895], [-82.9248046875, 22.958393318086348], [-82.705078125, 22.998851594142913], [-82.44140625, 23.039297747769726], [-82.298583984375, 23.120153621695614], [-82.12280273437499, 23.140359987886118], [-81.990966796875, 23.140359987886118], [-81.88110351562499, 23.120153621695614], [-81.7822265625, 23.02918734674459], [-81.73828125, 22.948276856880895], [-81.67236328125, 22.857194700969636], [-81.6064453125, 22.735656852206496], [-81.58447265624999, 22.553147478403194], [-81.573486328125, 22.411028521558706], [-81.4306640625, 22.30942584120019], [-81.309814453125, 22.28909641872304], [-81.0791015625, 22.350075806124867], [-80.947265625, 22.350075806124867], [-80.870361328125, 22.339914425562032], [-80.8154296875, 22.31958944283391], [-80.70556640625, 22.28909641872304], [-80.595703125, 22.25859674097572], [-80.48583984375, 22.19757745335104], [-80.2880859375, 22.09581971780769], [-80.22216796875, 22.075459351546858], [-80.1123046875, 22.04491330024569], [-79.95849609375, 22.085639901650328], [-79.7607421875, 22.268764039073968], [-79.530029296875, 22.411028521558706], [-79.376220703125, 22.421184710331858], [-79.12353515625, 22.329752304376473], [-78.94775390625, 22.370396344320053], [-78.75, 22.49225722008518], [-78.651123046875, 22.553147478403194], [-78.55224609374999, 22.51255695405145], [-78.3984375, 22.50240745949775], [-78.25561523437499, 22.43134015636061], [-78.145751953125, 22.36023644579937], [-78.02490234375, 22.27893059841188], [-77.882080078125, 22.156883186860703], [-77.80517578125, 22.06527806776582], [-77.607421875, 21.90227796666864], [-77.49755859375, 21.841104749065032], [-77.376708984375, 21.739091217718574], [-77.255859375, 21.647217065387817], [-77.10205078124999, 21.565502029745332], [-77.01416015625, 21.422389905231366], [-76.9482421875, 21.289374355860424], [-76.80541992187499, 21.22794190505815], [-76.70654296875, 20.899871347076424], [-76.673583984375, 20.622502259344817], [-76.541748046875, 20.49906428341304], [-76.4208984375, 20.354927584117682], [-76.190185546875, 20.29311344754411], [-75.9814453125, 20.2209657795223], [-75.860595703125, 20.117839630491634], [-75.6298828125, 20.066251024326302], [-75.3662109375, 20.066251024326302], [-75.05859375, 20.117839630491634], [-74.81689453125, 20.179723502765153], [-74.46533203125, 20.24158281954221], [-74.20166015624999, 20.262197124246534]]
    };
    this.marker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_8___default.a.Marker().setLngLat([-81.11051559448242, 22.50890956520524]);
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
    if (cookie[0] == name) return cookie;
  }

  return false;
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

},[["./assets/scripts/activity.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~activity~app~contact","vendors~activities~activity~bucket_list","vendors~activities~activity~app","vendors~activity"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hY3Rpdml0eS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FjdGl2aXR5L19nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvYWN0aXZpdHkvX21hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2dsb2JhbC9fYWRkVG9DYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZ2xvYmFsL191dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FjdGl2aXR5LnNjc3MiXSwibmFtZXMiOlsicmVxdWlyZSIsIkFkZHRvQ2FydCIsIkFjdGl2aXR5TWFwIiwiR2FsbGVyeSIsInNlbGVjdG9yIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGlzdGVuZXIiLCJTd2lwZUxpc3RlbmVyIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aXZlUG9zIiwiaW5pdCIsImFycm93cyIsImFkZEFycm93cyIsImFycm93UHJldiIsImFycm93TmV4dCIsImV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2IiwiYmluZCIsIm5leHQiLCJlIiwiZGlyZWN0aW9ucyIsImRldGFpbCIsImxlZnQiLCJyaWdodCIsImZvckVhY2giLCJpbWFnZSIsImluZGV4IiwiZGlzcGxhY2VtZW50Iiwic2V0QXR0cmlidXRlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwibGVuZ3RoIiwiaXRlbSIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJtYXAiLCJNYXAiLCJzdHlsZSIsInpvb20iLCJjZW50ZXIiLCJzY3JvbGxab29tIiwiZGlzYWJsZSIsInBvaW50cyIsInBhdGhzIiwic2V0TWFya2Vyc0FuZFpvb20iLCJvbiIsInNldFBhdGhBbmRab29tIiwibGF0cyIsImxvZ3MiLCJwb2ludCIsInByb3BzIiwiZ2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwicHVzaCIsIm5hbWUiLCJNYXJrZXIiLCJzZXRMbmdMYXQiLCJhZGRUbyIsIlBvcHVwIiwiY2xvc2VPbkNsaWNrIiwic2V0SFRNTCIsInNvcnQiLCJhIiwiYiIsIm1heENvb3JkcyIsImZpdEJvdW5kcyIsInBhZGRpbmciLCJwYXRoIiwiZ2VvanNvbiIsImNvb3JkaW5hdGVzIiwiZmVhdHVyZXMiLCJnZW9tZXRyeSIsImNvb3JkaW5hdGUiLCJtYXhDb29yZHNQYXRoIiwiYWRkTGF5ZXIiLCJBY3Rpdml0eU1hcEFuaW1hdGUiLCJ0eXBlIiwibWFya2VyIiwic3RlcCIsInRpY2siLCJzZXRUaW1lb3V0IiwiYnV0dG9uc1NlbGVjdG9yIiwiYWN0aXZpdGllc0ZpbHRlckNvbnRhaW5lciIsImJ1dHRvbnNBZGQiLCJjYXJ0QmFyIiwiY2FydEJhclRleHQiLCJhY3Rpdml0aWVzIiwibG9hZEFjdGl2aXRpZXMiLCJzZXRTdGF0dXMiLCJjdXJyZW50VmFsdWUiLCJnZXRDb29raWUiLCJzcGxpdCIsImJ1dHRvbiIsImFkZE9yUmVtb3ZlQWN0aXZpdHkiLCJlbGVtZW50IiwiYWN0aXZpdHkiLCJ0YXJnZXQiLCJidG4iLCJhY3Rpdml0eUlkIiwiaW5jbHVkZXMiLCJ0b2dnbGUiLCJmaWx0ZXIiLCJ4Iiwic2V0Q29va2llIiwidG9TdHJpbmciLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJjb250YWluQWN0aXZpdHkiLCJyZW1vdmVBY3Rpdml0eSIsInVwZGF0ZUNhcnRUZXh0IiwiYWRkQWN0aXZpdHkiLCJzaG93Q2FydCIsInZhbHVlIiwiZGF5cyIsImRhdGUiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJleHBpcmVzIiwidG9HTVRTdHJpbmciLCJjb29raWUiLCJjQXJyIiwiaSIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QixFQUNJLE9BQU9rRSxNQUFQO0FBQ1A7O0FBQ0QsU0FBTyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7QUNqQkQsdUMiLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FsbGVyeSBmcm9tICcuL21vZHVsZXMvYWN0aXZpdHkvX2dhbGxlcnknO1xyXG5pbXBvcnQgQWRkdG9DYXJ0IGZyb20gJy4vbW9kdWxlcy9nbG9iYWwvX2FkZFRvQ2FydCc7XHJcbmltcG9ydCB7QWN0aXZpdHlNYXB9IGZyb20gJy4vbW9kdWxlcy9hY3Rpdml0eS9fbWFwJztcclxucmVxdWlyZSgnLi4vc3R5bGVzL2FjdGl2aXR5LnNjc3MnKTtcclxuXHJcbm5ldyBBZGR0b0NhcnQoJy5mbG9hdF9idXR0b24nKTtcclxubmV3IEFjdGl2aXR5TWFwKCk7XHJcbm5ldyBHYWxsZXJ5KCcuZ2FsbGVyeScpOyIsImltcG9ydCBTd2lwZUxpc3RlbmVyIGZyb20gJ3N3aXBlLWxpc3RlbmVyJztcclxuXHJcbmNsYXNzIEdhbGxlcnkge1xyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3Ipe1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IFN3aXBlTGlzdGVuZXIodGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKycgLmdhbGxlcnlfX2l0ZW0nKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQb3MgPSAwO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5hcnJvd3MgPSB0aGlzLmFkZEFycm93cygpO1xyXG4gICAgICAgIHRoaXMuYXJyb3dQcmV2ID0gdGhpcy5hcnJvd3NbMF07XHJcbiAgICAgICAgdGhpcy5hcnJvd05leHQgPSB0aGlzLmFycm93c1sxXTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJvd1ByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByZXYuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXJyb3dOZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5uZXh0LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzd2lwZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gZS5kZXRhaWwuZGlyZWN0aW9ucztcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zLmxlZnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zLnJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnaGVpZ2h0OiAnK3RoaXMuaW1hZ2VzWzBdLmNsaWVudEhlaWdodCsncHg7Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gaW5kZXgqMTAwO1xyXG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGRpc3BsYWNlbWVudCArIFwiJSk7XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQXJyb3dzKCl7XHJcbiAgICAgICAgbGV0IGFycm93UHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFycm93UHJldi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdycpO1xyXG4gICAgICAgIGFycm93UHJldi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdy0tcHJldicpO1xyXG4gICAgICAgIGxldCBhcnJvd05leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhcnJvd05leHQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fYXJyb3cnKTtcclxuICAgICAgICBhcnJvd05leHQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fYXJyb3ctLW5leHQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYXJyb3dQcmV2KTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd05leHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gW2Fycm93UHJldiwgYXJyb3dOZXh0XTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUG9zID09PSB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9zID0gLTE7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpPT57XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gKGluZGV4IC0gdGhpcy5hY3RpdmVQb3MgLSAxKSoxMDA7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIgKyBkaXNwbGFjZW1lbnQgKyBcIiUpO1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQb3MgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUG9zID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcyA9IHRoaXMuaXRlbXMubGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KT0+e1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpc3BsYWNlbWVudCA9IChpbmRleCAtIHRoaXMuYWN0aXZlUG9zICsgMSkqMTAwO1xyXG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiICsgZGlzcGxhY2VtZW50ICsgXCIlKTtcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUG9zIC09IDE7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5OyIsImltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wnO1xyXG5cclxuY2xhc3MgQWN0aXZpdHlNYXAge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9ICdway5leUoxSWpvaVkyRnlkRzFoYm5WelpYSWlMQ0poSWpvaVkycDVhSFZ5TkhCMk1ETnVkek5uYm5KaWFHVnRjV0oyT0NKOS4yVVBES25TWlJOd05SMUlUbFpRRUFBJztcclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xyXG4gICAgICAgICAgICBjb250YWluZXI6ICdtYXAnLFxyXG4gICAgICAgICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvb3V0ZG9vcnMtdjExJyxcclxuICAgICAgICAgICAgem9vbTogMTMsXHJcbiAgICAgICAgICAgIGNlbnRlcjogWy04MS4xNzM5ODU3LCAyMy4xOTE5MjJdLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1hcC5zY3JvbGxab29tLmRpc2FibGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb2ludHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzY3JpcHRpb24taXRpbmVyYXJ5X19jb250ZW50IHNwYW5bZGF0YS1tYXBdJyk7XHJcbiAgICAgICAgdGhpcy5wYXRocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXNjcmlwdGlvbi1pdGluZXJhcnlfX2NvbnRlbnQgc3BhbltkYXRhLXBhdGgtbWFwXScpO1xyXG5cclxuICAgICAgICB0aGlzLnNldE1hcmtlcnNBbmRab29tKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLm1hcC5vbignbG9hZCcsIHRoaXMuc2V0UGF0aEFuZFpvb20uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWFya2Vyc0FuZFpvb20oKXtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgbGF0cyA9IFtdO1xyXG4gICAgICAgIGxldCBsb2dzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goKHBvaW50KT0+e1xyXG4gICAgICAgICAgICBsZXQgcHJvcHMgPSBwb2ludC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFwJyk7XHJcbiAgICAgICAgICAgIHByb3BzID0gSlNPTi5wYXJzZShwcm9wcyk7XHJcblxyXG4gICAgICAgICAgICBsYXRzLnB1c2gocHJvcHMuY2VudGVyWzBdKTtcclxuICAgICAgICAgICAgbG9ncy5wdXNoKHByb3BzLmNlbnRlclsxXSk7XHJcblxyXG4gICAgICAgICAgICBpZihwcm9wcy5uYW1lID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICBuZXcgbWFwYm94Z2wuTWFya2VyKClcclxuICAgICAgICAgICAgICAgICAgICAuc2V0TG5nTGF0KHByb3BzLmNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAuYWRkVG8odGhpcy5tYXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3IG1hcGJveGdsLlBvcHVwKHtjbG9zZU9uQ2xpY2s6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0TG5nTGF0KHByb3BzLmNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAuc2V0SFRNTCgnPGgzPicrcHJvcHMubmFtZSsnPC9oMz4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUbyh0aGlzLm1hcCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsYXRzLnNvcnQoKGEsYikgPT4geyByZXR1cm4gYSA8PSBiID8gLTEgOiAxIH0gKTtcclxuICAgICAgICBsb2dzLnNvcnQoKGEsYikgPT4geyByZXR1cm4gYSA8PSBiID8gLTEgOiAxIH0gKTtcclxuXHJcbiAgICAgICAgbGV0IG1heENvb3JkcyA9IFtbbGF0c1swXSxsb2dzWzBdXSxcclxuICAgICAgICAgICAgW2xhdHNbbGF0cy5sZW5ndGgtMV0sIGxvZ3NbbG9ncy5sZW5ndGgtMV0gXV07XHJcblxyXG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhtYXhDb29yZHMsIHtwYWRkaW5nOiAxMDB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXRoQW5kWm9vbSgpe1xyXG4gICAgICAgIGlmICh0aGlzLnBhdGhzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnBhdGhzLmZvckVhY2goKHBhdGgpPT57XHJcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHBhdGguZ2V0QXR0cmlidXRlKCdkYXRhLXBhdGgtbWFwJyk7XHJcbiAgICAgICAgICAgIHByb3BzID0gSlNPTi5wYXJzZShwcm9wcyk7XHJcbiAgICAgICAgICAgIGxldCBnZW9qc29uID0gcHJvcHMuZ2VvanNvbjtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IGdlb2pzb24uZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGF0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgbG9ncyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSk9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXRzLnB1c2goY29vcmRpbmF0ZVswXSk7XHJcbiAgICAgICAgICAgICAgICBsb2dzLnB1c2goY29vcmRpbmF0ZVsxXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGF0cy5zb3J0KChhLGIpID0+IHsgcmV0dXJuIGEgPD0gYiA/IC0xIDogMSB9ICk7XHJcbiAgICAgICAgICAgIGxvZ3Muc29ydCgoYSxiKSA9PiB7IHJldHVybiBhIDw9IGIgPyAtMSA6IDEgfSApO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1heENvb3Jkc1BhdGggPSBbW2xhdHNbMF0sbG9nc1swXV0sXHJcbiAgICAgICAgICAgICAgICBbbGF0c1tsYXRzLmxlbmd0aC0xXSwgbG9nc1tsb2dzLmxlbmd0aC0xXSBdXTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih7XHJcbiAgICAgICAgICAgICAgICAnaWQnOiAnbGF5ZXItcGF0aCcsXHJcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdsaW5lJyxcclxuICAgICAgICAgICAgICAgICdzb3VyY2UnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnZ2VvanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBnZW9qc29uXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ2xheW91dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS1jYXAnOiAncm91bmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLWpvaW4nOiAncm91bmQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ3BhaW50Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLWNvbG9yJzogJyNlZDY0OTgnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLXdpZHRoJzogNSxcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS1vcGFjaXR5JzogLjhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMobWF4Q29vcmRzUGF0aCwge3BhZGRpbmc6IDEwMH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIEFjdGl2aXR5TWFwQW5pbWF0ZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSAncGsuZXlKMUlqb2lZMkZ5ZEcxaGJuVnpaWElpTENKaElqb2lZMnA1YUhWeU5IQjJNRE51ZHpObmJuSmlhR1Z0Y1dKMk9DSjkuMlVQREtuU1pSTndOUjFJVGxaUUVBQSc7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiAnbWFwJyxcclxuICAgICAgICAgICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L291dGRvb3JzLXYxMScsXHJcbiAgICAgICAgICAgIGNlbnRlcjogWyAtODEuMTEwNTE1NTk0NDgyNDIsIDIyLjUwODkwOTU2NTIwNTI0XSxcclxuICAgICAgICAgICAgem9vbTogNVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmdlb2pzb24gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMaW5lU3RyaW5nJyxcclxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTg0LjgyNTQzOTQ1MzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjg2MTQ5ODczNDM3MjU2N1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODQuNjQ5NjU4MjAzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuOTYzNDI0OTM2ODQ0MjIzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04NC4yNjUxMzY3MTg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjkzMjg1NDczNjMzNTNcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTg0LjEzMzMwMDc4MTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMTE2MTc3MTQ3MjEwNjJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTg0LjA3ODM2OTE0MDYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjMyOTc1MjMwNDM3NjQ3M1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODMuODkxNjAxNTYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjQ5MjI1NzIyMDA4NTE4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04My43NDg3NzkyOTY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi42MDM4Njg4NDI4OTU3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04My41NTEwMjUzOTA2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi43MzU2NTY4NTIyMDY0OTZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgzLjM1MzI3MTQ4NDM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjgzNjk0NTkyMDk0Mzg1NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODMuMTk5NDYyODkwNjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuOTA3ODAzNDUxMDU4MzkyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04My4wODk1OTk2MDkzNzQ5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjk0ODI3Njg1Njg4MDg5NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODIuOTI0ODA0Njg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjk1ODM5MzMxODA4NjM0OFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODIuNzA1MDc4MTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuOTk4ODUxNTk0MTQyOTEzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04Mi40NDE0MDYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzLjAzOTI5Nzc0Nzc2OTcyNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODIuMjk4NTgzOTg0Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjMuMTIwMTUzNjIxNjk1NjE0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04Mi4xMjI4MDI3MzQzNzQ5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzLjE0MDM1OTk4Nzg4NjExOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuOTkwOTY2Nzk2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjMuMTQwMzU5OTg3ODg2MTE4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS44ODExMDM1MTU2MjQ5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzLjEyMDE1MzYyMTY5NTYxNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuNzgyMjI2NTYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzLjAyOTE4NzM0Njc0NDU5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS43MzgyODEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjk0ODI3Njg1Njg4MDg5NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuNjcyMzYzMjgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi44NTcxOTQ3MDA5Njk2MzZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjYwNjQ0NTMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi43MzU2NTY4NTIyMDY0OTZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjU4NDQ3MjY1NjI0OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNTUzMTQ3NDc4NDAzMTk0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS41NzM0ODYzMjgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi40MTEwMjg1MjE1NTg3MDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjQzMDY2NDA2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4zMDk0MjU4NDEyMDAxOVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuMzA5ODE0NDUzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMjg5MDk2NDE4NzIzMDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjA3OTEwMTU2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4zNTAwNzU4MDYxMjQ4NjdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjk0NzI2NTYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjM1MDA3NTgwNjEyNDg2N1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODAuODcwMzYxMzI4MTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzM5OTE0NDI1NTYyMDMyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC44MTU0Mjk2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzE5NTg5NDQyODMzOTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjcwNTU2NjQwNjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMjg5MDk2NDE4NzIzMDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjU5NTcwMzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjI1ODU5Njc0MDk3NTcyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC40ODU4Mzk4NDM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjE5NzU3NzQ1MzM1MTA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC4yODgwODU5Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMDk1ODE5NzE3ODA3NjlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjIyMjE2Nzk2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMDc1NDU5MzUxNTQ2ODU4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC4xMTIzMDQ2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMDQ0OTEzMzAwMjQ1NjlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc5Ljk1ODQ5NjA5Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMDg1NjM5OTAxNjUwMzI4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OS43NjA3NDIxODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMjY4NzY0MDM5MDczOTY4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OS41MzAwMjkyOTY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi40MTEwMjg1MjE1NTg3MDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc5LjM3NjIyMDcwMzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjQyMTE4NDcxMDMzMTg1OFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzkuMTIzNTM1MTU2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4zMjk3NTIzMDQzNzY0NzNcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4Ljk0Nzc1MzkwNjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzcwMzk2MzQ0MzIwMDUzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OC43NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjQ5MjI1NzIyMDA4NTE4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OC42NTExMjMwNDY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi41NTMxNDc0Nzg0MDMxOTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4LjU1MjI0NjA5Mzc0OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNTEyNTU2OTU0MDUxNDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4LjM5ODQzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi41MDI0MDc0NTk0OTc3NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzguMjU1NjE1MjM0Mzc0OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi40MzEzNDAxNTYzNjA2MVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzguMTQ1NzUxOTUzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzYwMjM2NDQ1Nzk5MzdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4LjAyNDkwMjM0Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMjc4OTMwNTk4NDExODhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3Ljg4MjA4MDA3ODEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjE1Njg4MzE4Njg2MDcwM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzcuODA1MTc1NzgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4wNjUyNzgwNjc3NjU4MlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzcuNjA3NDIxODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuOTAyMjc3OTY2NjY4NjRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3LjQ5NzU1ODU5Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuODQxMTA0NzQ5MDY1MDMyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ny4zNzY3MDg5ODQzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS43MzkwOTEyMTc3MTg1NzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3LjI1NTg1OTM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjY0NzIxNzA2NTM4NzgxN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzcuMTAyMDUwNzgxMjQ5OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS41NjU1MDIwMjk3NDUzMzJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3LjAxNDE2MDE1NjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuNDIyMzg5OTA1MjMxMzY2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ni45NDgyNDIxODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuMjg5Mzc0MzU1ODYwNDI0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ni44MDU0MTk5MjE4NzQ5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjIyNzk0MTkwNTA1ODE1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ni43MDY1NDI5Njg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjg5OTg3MTM0NzA3NjQyNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzYuNjczNTgzOTg0Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuNjIyNTAyMjU5MzQ0ODE3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ni41NDE3NDgwNDY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC40OTkwNjQyODM0MTMwNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzYuNDIwODk4NDM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjM1NDkyNzU4NDExNzY4MlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzYuMTkwMTg1NTQ2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMjkzMTEzNDQ3NTQ0MTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc1Ljk4MTQ0NTMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4yMjA5NjU3Nzk1MjIzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03NS44NjA1OTU3MDMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4xMTc4Mzk2MzA0OTE2MzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc1LjYyOTg4MjgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4wNjYyNTEwMjQzMjYzMDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc1LjM2NjIxMDkzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4wNjYyNTEwMjQzMjYzMDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc1LjA1ODU5Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMTE3ODM5NjMwNDkxNjM0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03NC44MTY4OTQ1MzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjE3OTcyMzUwMjc2NTE1M1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzQuNDY1MzMyMDMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4yNDE1ODI4MTk1NDIyMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzQuMjAxNjYwMTU2MjQ5OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4yNjIxOTcxMjQyNDY1MzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtlciA9IG5ldyBtYXBib3hnbC5NYXJrZXIoKVxyXG4gICAgICAgICAgICAuc2V0TG5nTGF0KFsgLTgxLjExMDUxNTU5NDQ4MjQyLCAyMi41MDg5MDk1NjUyMDUyNF0pO1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5tYXAub24oJ2xvYWQnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIC8vIHRoaXMubWFya2VyLmFkZFRvKHRoaXMubWFwKTtcclxuICAgICAgICAvLyB0aGlzLmdlb0pzb24odGhpcy5nZW9qc29uKS5hZGRUbyh0aGlzLm1hcCk7XHJcbiAgICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICAgICAgLy8gd2hpbGUgKHRoaXMuc3RlcCA8IHRoaXMuZ2VvanNvbi5jb29yZGluYXRlcy5sZW5ndGgpXHJcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQodGhpcy50aWNrLCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRpY2soKSB7XHJcblxyXG4gICAgICAgIHRoaXMubWFya2VyLnNldExuZ0xhdCh0aGlzLmdlb2pzb24uY29vcmRpbmF0ZXNbdGhpcy5zdGVwXSlcclxuICAgICAgICAgICAgLmFkZFRvKHRoaXMubWFwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGVwKys7XHJcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnRpY2suYmluZCh0aGlzKSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge0FjdGl2aXR5TWFwQW5pbWF0ZSwgQWN0aXZpdHlNYXB9O1xyXG5cclxuIiwiaW1wb3J0IHsgc2V0Q29va2llLCBnZXRDb29raWUgfSBmcm9tICcuL191dGlscyc7XHJcblxyXG5jbGFzcyBBZGR0b0NhcnQge1xyXG4gICAgY29uc3RydWN0b3IoYnV0dG9uc1NlbGVjdG9yKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNTZWxlY3RvciA9IGJ1dHRvbnNTZWxlY3RvcjtcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzRmlsdGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2aXRpZXNfX2xpc3RfX2NvbnRhaW5lcl9fZmlsdGVyX3NlYXJjaCcpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc0FkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5idXR0b25zU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuY2FydEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X2JhcicpO1xyXG4gICAgICAgIHRoaXMuY2FydEJhclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9iYXIgLmNhcnRfYmFyX19jb250ZW50X190ZXh0IHNwYW4nKTtcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkQWN0aXZpdGllcygpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQWN0aXZpdGllcygpe1xyXG4gICAgICAgIGxldCBjdXJyZW50VmFsdWUgPSBnZXRDb29raWUoJ3Byb2R1Y3RzX2NhcnQnKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRWYWx1ZSlcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXMgPSBjdXJyZW50VmFsdWVbMV0uc3BsaXQoJywnKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNBZGQuZm9yRWFjaCgoYnV0dG9uKT0+e1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZE9yUmVtb3ZlQWN0aXZpdHkuYmluZCh0aGlzKVxyXG4gICAgICAgICl9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdGllc0ZpbHRlckNvbnRhaW5lciAhPT0gbnVsbClcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNGaWx0ZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignRE9NTm9kZUluc2VydGVkJywgKGVsZW1lbnQpPT57XHJcbiAgICAgICAgICAgIGxldCBhY3Rpdml0eSA9IGVsZW1lbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gYWN0aXZpdHkucXVlcnlTZWxlY3RvcignLmFjdGl2aXR5X19jb250ZW50X19hY3Rpb25zX19hZGQnKTtcclxuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRPclJlbW92ZUFjdGl2aXR5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXR1cygpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc0FkZC5mb3JFYWNoKChidXR0b24pPT57XHJcbiAgICAgICAgICAgbGV0IGFjdGl2aXR5SWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2aXR5X2lkJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2aXRpZXMuaW5jbHVkZXMoYWN0aXZpdHlJZCkpe1xyXG4gICAgICAgICAgICAgICBidXR0b24ucXVlcnlTZWxlY3Rvcignc3ZnLmhlYXJ0JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhcnQtLWZpbGwtd2hpdGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5BY3Rpdml0eShhY3Rpdml0eUlkKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpdml0aWVzLmluY2x1ZGVzKGFjdGl2aXR5SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUFjdGl2aXR5KGFjdGl2aXR5SWQpe1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllcyA9IHRoaXMuYWN0aXZpdGllcy5maWx0ZXIoKHgpPT57cmV0dXJuIHghPT1hY3Rpdml0eUlkfSk7XHJcbiAgICAgICAgc2V0Q29va2llKHRoaXMuYWN0aXZpdGllcy50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBY3Rpdml0eShhY3Rpdml0eUlkKXtcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXMucHVzaChhY3Rpdml0eUlkKTtcclxuICAgICAgICBzZXRDb29raWUodGhpcy5hY3Rpdml0aWVzLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhcnRUZXh0KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZpdGllcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QuYWRkKCdjYXJ0X2Jhci0taW5pdGlhbCcpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhcnRCYXIuY2xhc3NMaXN0LnJlbW92ZSgnY2FydF9iYXItLWluaXRpYWwnKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0QmFyVGV4dC5pbm5lckhUTUwgPSB0aGlzLmFjdGl2aXRpZXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcnRfYmFyLS12aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NhcnQoKXtcclxuICAgICAgICB0aGlzLmNhcnRCYXIuY2xhc3NMaXN0LnJlbW92ZSgnY2FydF9iYXItLXZpc2libGUnKTtcclxuICAgICAgICB0aGlzLmNhcnRCYXIuY2xhc3NMaXN0LmFkZCgnY2FydF9iYXItLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRPclJlbW92ZUFjdGl2aXR5KGUpe1xyXG5cclxuICAgICAgICBsZXQgYnV0dG9uID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpdml0eUlkID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1hY3Rpdml0eV9pZCcpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250YWluQWN0aXZpdHkoYWN0aXZpdHlJZCkpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFjdGl2aXR5KGFjdGl2aXR5SWQpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnRUZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEFjdGl2aXR5KGFjdGl2aXR5SWQpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnRUZXh0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NhcnQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrZWQnKTtcclxuICAgICAgICBidXR0b24ucXVlcnlTZWxlY3Rvcignc3ZnLmhlYXJ0JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhcnQtLWZpbGwtd2hpdGUnKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZHRvQ2FydDsiLCJleHBvcnQgZnVuY3Rpb24gc2V0Q29va2llKHZhbHVlLCBuYW1lPSdwcm9kdWN0c19jYXJ0JyAsIGRheXM9Mykge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpKyhkYXlzKjI0KjYwKjYwKjEwMDApKTtcclxuICAgIGxldCBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIrZGF0ZS50b0dNVFN0cmluZyAoKTtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICtcclxuICAgICAgICBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIHtcclxuICAgIGxldCBjQXJyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICBmb3IobGV0IGk9MDtpIDwgY0Fyci5sZW5ndGg7aSsrKSB7XHJcbiAgICAgICAgbGV0IGNvb2tpZSA9IGNBcnJbaV0uc3BsaXQoXCI9XCIsMik7XHJcbiAgICAgICAgY29va2llWzBdID0gY29va2llWzBdLnJlcGxhY2UoL15cXHMrLyxcIlwiKTtcclxuICAgICAgICBpZiAoY29va2llWzBdID09IG5hbWUpXHJcbiAgICAgICAgICAgIHJldHVybiBjb29raWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9