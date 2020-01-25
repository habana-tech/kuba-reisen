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
    this.loadActivities();
    this.events();
    this.setStatus();
  }

  _createClass(AddToCart, [{
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

/***/ "./assets/styles/activity.scss":
/*!*************************************!*\
  !*** ./assets/styles/activity.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/scripts/activity.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~activity~bucket_list","vendors~activities~activity~app","vendors~activity"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hY3Rpdml0eS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FjdGl2aXR5L19nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvYWN0aXZpdHkvX21hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2dsb2JhbC9fYWRkVG9DYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZ2xvYmFsL191dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FjdGl2aXR5LnNjc3MiXSwibmFtZXMiOlsicmVxdWlyZSIsIkFkZHRvQ2FydCIsIkFjdGl2aXR5TWFwIiwiR2FsbGVyeSIsInNlbGVjdG9yIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGlzdGVuZXIiLCJTd2lwZUxpc3RlbmVyIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aXZlUG9zIiwiaW5pdCIsImFycm93cyIsImFkZEFycm93cyIsImFycm93UHJldiIsImFycm93TmV4dCIsImV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2IiwiYmluZCIsIm5leHQiLCJlIiwiZGlyZWN0aW9ucyIsImRldGFpbCIsImxlZnQiLCJyaWdodCIsImZvckVhY2giLCJpbWFnZSIsImluZGV4IiwiZGlzcGxhY2VtZW50Iiwic2V0QXR0cmlidXRlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwibGVuZ3RoIiwiaXRlbSIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJtYXAiLCJNYXAiLCJzdHlsZSIsInpvb20iLCJjZW50ZXIiLCJzY3JvbGxab29tIiwiZGlzYWJsZSIsInBvaW50cyIsInBhdGhzIiwic2V0TWFya2Vyc0FuZFpvb20iLCJvbiIsInNldFBhdGhBbmRab29tIiwibGF0cyIsImxvZ3MiLCJwb2ludCIsInByb3BzIiwiZ2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwicHVzaCIsIm5hbWUiLCJNYXJrZXIiLCJzZXRMbmdMYXQiLCJhZGRUbyIsIlBvcHVwIiwiY2xvc2VPbkNsaWNrIiwic2V0SFRNTCIsInNvcnQiLCJhIiwiYiIsIm1heENvb3JkcyIsImZpdEJvdW5kcyIsInBhZGRpbmciLCJwYXRoIiwiZ2VvanNvbiIsImNvb3JkaW5hdGVzIiwiZmVhdHVyZXMiLCJnZW9tZXRyeSIsImNvb3JkaW5hdGUiLCJtYXhDb29yZHNQYXRoIiwiYWRkTGF5ZXIiLCJBY3Rpdml0eU1hcEFuaW1hdGUiLCJ0eXBlIiwibWFya2VyIiwic3RlcCIsInRpY2siLCJzZXRUaW1lb3V0IiwiQWRkVG9DYXJ0IiwiYnV0dG9uc1NlbGVjdG9yIiwiYWN0aXZpdGllc0ZpbHRlckNvbnRhaW5lciIsImJ1dHRvbnNBZGQiLCJjYXJ0QmFyIiwiY2FydEJhclRleHQiLCJhY3Rpdml0aWVzIiwibG9hZEFjdGl2aXRpZXMiLCJzZXRTdGF0dXMiLCJjdXJyZW50VmFsdWUiLCJnZXRDb29raWUiLCJzcGxpdCIsImJ1dHRvbiIsImFkZE9yUmVtb3ZlQWN0aXZpdHkiLCJlbGVtZW50IiwiYWN0aXZpdHkiLCJ0YXJnZXQiLCJidG4iLCJhY3Rpdml0eUlkIiwiaW5jbHVkZXMiLCJ0b2dnbGUiLCJmaWx0ZXIiLCJ4Iiwic2V0Q29va2llIiwidG9TdHJpbmciLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJjb250YWluQWN0aXZpdHkiLCJyZW1vdmVBY3Rpdml0eSIsInVwZGF0ZUNhcnRUZXh0IiwiYWRkQWN0aXZpdHkiLCJzaG93Q2FydCIsInZhbHVlIiwiZGF5cyIsImRhdGUiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJleHBpcmVzIiwidG9HTVRTdHJpbmciLCJjb29raWUiLCJjQXJyIiwiaSIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FB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S0FBY25FLElBQWxCLEVBQ0ksT0FBT21FLE1BQVA7QUFDUDs7QUFDRCxTQUFPLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7OztBQ2pCRCx1QyIsImZpbGUiOiJhY3Rpdml0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYWxsZXJ5IGZyb20gJy4vbW9kdWxlcy9hY3Rpdml0eS9fZ2FsbGVyeSc7XHJcbmltcG9ydCBBZGR0b0NhcnQgZnJvbSAnLi9tb2R1bGVzL2dsb2JhbC9fYWRkVG9DYXJ0JztcclxuaW1wb3J0IHtBY3Rpdml0eU1hcH0gZnJvbSAnLi9tb2R1bGVzL2FjdGl2aXR5L19tYXAnO1xyXG5yZXF1aXJlKCcuLi9zdHlsZXMvYWN0aXZpdHkuc2NzcycpO1xyXG5cclxubmV3IEFkZHRvQ2FydCgnLmZsb2F0X2J1dHRvbicpO1xyXG5uZXcgQWN0aXZpdHlNYXAoKTtcclxubmV3IEdhbGxlcnkoJy5nYWxsZXJ5Jyk7IiwiaW1wb3J0IFN3aXBlTGlzdGVuZXIgZnJvbSAnc3dpcGUtbGlzdGVuZXInO1xyXG5cclxuY2xhc3MgR2FsbGVyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcil7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVyID0gU3dpcGVMaXN0ZW5lcih0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IrJyAuZ2FsbGVyeV9faXRlbScpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVBvcyA9IDA7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB0aGlzLmFycm93cyA9IHRoaXMuYWRkQXJyb3dzKCk7XHJcbiAgICAgICAgdGhpcy5hcnJvd1ByZXYgPSB0aGlzLmFycm93c1swXTtcclxuICAgICAgICB0aGlzLmFycm93TmV4dCA9IHRoaXMuYXJyb3dzWzFdO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmFycm93UHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJldi5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5hcnJvd05leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm5leHQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSBlLmRldGFpbC5kaXJlY3Rpb25zO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbnMubGVmdClcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbnMucmlnaHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXYoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgLy8gdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdoZWlnaHQ6ICcrdGhpcy5pbWFnZXNbMF0uY2xpZW50SGVpZ2h0KydweDsnKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgIGxldCBkaXNwbGFjZW1lbnQgPSBpbmRleCoxMDA7XHJcbiAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiICsgZGlzcGxhY2VtZW50ICsgXCIlKTtcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRBcnJvd3MoKXtcclxuICAgICAgICBsZXQgYXJyb3dQcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYXJyb3dQcmV2LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnlfX2Fycm93Jyk7XHJcbiAgICAgICAgYXJyb3dQcmV2LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnlfX2Fycm93LS1wcmV2Jyk7XHJcbiAgICAgICAgbGV0IGFycm93TmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFycm93TmV4dC5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdycpO1xyXG4gICAgICAgIGFycm93TmV4dC5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdy0tbmV4dCcpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd1ByZXYpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGFycm93TmV4dCk7XHJcblxyXG4gICAgICAgIHJldHVybiBbYXJyb3dQcmV2LCBhcnJvd05leHRdO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKXtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVQb3MgPT09IHRoaXMuaXRlbXMubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3MgPSAtMTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCk9PntcclxuXHJcbiAgICAgICAgICAgIGxldCBkaXNwbGFjZW1lbnQgPSAoaW5kZXggLSB0aGlzLmFjdGl2ZVBvcyAtIDEpKjEwMDtcclxuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGRpc3BsYWNlbWVudCArIFwiJSk7XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVBvcyArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXYoKXtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVQb3MgPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9zID0gdGhpcy5pdGVtcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpPT57XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gKGluZGV4IC0gdGhpcy5hY3RpdmVQb3MgKyAxKSoxMDA7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIgKyBkaXNwbGFjZW1lbnQgKyBcIiUpO1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQb3MgLT0gMTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7IiwiaW1wb3J0IG1hcGJveGdsIGZyb20gJ21hcGJveC1nbCc7XHJcblxyXG5jbGFzcyBBY3Rpdml0eU1hcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gJ3BrLmV5SjFJam9pWTJGeWRHMWhiblZ6WlhJaUxDSmhJam9pWTJwNWFIVnlOSEIyTUROdWR6Tm5ibkppYUdWdGNXSjJPQ0o5LjJVUERLblNaUk53TlIxSVRsWlFFQUEnO1xyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJ21hcCcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9vdXRkb29ycy12MTEnLFxyXG4gICAgICAgICAgICB6b29tOiAxMyxcclxuICAgICAgICAgICAgY2VudGVyOiBbLTgxLjE3Mzk4NTcsIDIzLjE5MTkyMl0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFwLnNjcm9sbFpvb20uZGlzYWJsZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnBvaW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXNjcmlwdGlvbi1pdGluZXJhcnlfX2NvbnRlbnQgc3BhbltkYXRhLW1hcF0nKTtcclxuICAgICAgICB0aGlzLnBhdGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlc2NyaXB0aW9uLWl0aW5lcmFyeV9fY29udGVudCBzcGFuW2RhdGEtcGF0aC1tYXBdJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TWFya2Vyc0FuZFpvb20oKTtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMubWFwLm9uKCdsb2FkJywgdGhpcy5zZXRQYXRoQW5kWm9vbS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNYXJrZXJzQW5kWm9vbSgpe1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wb2ludHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBsYXRzID0gW107XHJcbiAgICAgICAgbGV0IGxvZ3MgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5wb2ludHMuZm9yRWFjaCgocG9pbnQpPT57XHJcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHBvaW50LmdldEF0dHJpYnV0ZSgnZGF0YS1tYXAnKTtcclxuICAgICAgICAgICAgcHJvcHMgPSBKU09OLnBhcnNlKHByb3BzKTtcclxuXHJcbiAgICAgICAgICAgIGxhdHMucHVzaChwcm9wcy5jZW50ZXJbMF0pO1xyXG4gICAgICAgICAgICBsb2dzLnB1c2gocHJvcHMuY2VudGVyWzFdKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHByb3BzLm5hbWUgPT09ICcnKXtcclxuICAgICAgICAgICAgICAgIG5ldyBtYXBib3hnbC5NYXJrZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRMbmdMYXQocHJvcHMuY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUbyh0aGlzLm1hcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgbWFwYm94Z2wuUG9wdXAoe2Nsb3NlT25DbGljazogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRMbmdMYXQocHJvcHMuY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXRIVE1MKCc8aDM+Jytwcm9wcy5uYW1lKyc8L2gzPicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZFRvKHRoaXMubWFwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxhdHMuc29ydCgoYSxiKSA9PiB7IHJldHVybiBhIDw9IGIgPyAtMSA6IDEgfSApO1xyXG4gICAgICAgIGxvZ3Muc29ydCgoYSxiKSA9PiB7IHJldHVybiBhIDw9IGIgPyAtMSA6IDEgfSApO1xyXG5cclxuICAgICAgICBsZXQgbWF4Q29vcmRzID0gW1tsYXRzWzBdLGxvZ3NbMF1dLFxyXG4gICAgICAgICAgICBbbGF0c1tsYXRzLmxlbmd0aC0xXSwgbG9nc1tsb2dzLmxlbmd0aC0xXSBdXTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKG1heENvb3Jkcywge3BhZGRpbmc6IDEwMH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhdGhBbmRab29tKCl7XHJcbiAgICAgICAgaWYgKHRoaXMucGF0aHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMucGF0aHMuZm9yRWFjaCgocGF0aCk9PntcclxuICAgICAgICAgICAgbGV0IHByb3BzID0gcGF0aC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGF0aC1tYXAnKTtcclxuICAgICAgICAgICAgcHJvcHMgPSBKU09OLnBhcnNlKHByb3BzKTtcclxuICAgICAgICAgICAgbGV0IGdlb2pzb24gPSBwcm9wcy5nZW9qc29uO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZ2VvanNvbi5mZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlcztcclxuXHJcbiAgICAgICAgICAgIGxldCBsYXRzID0gW107XHJcbiAgICAgICAgICAgIGxldCBsb2dzID0gW107XHJcblxyXG4gICAgICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKT0+IHtcclxuICAgICAgICAgICAgICAgIGxhdHMucHVzaChjb29yZGluYXRlWzBdKTtcclxuICAgICAgICAgICAgICAgIGxvZ3MucHVzaChjb29yZGluYXRlWzFdKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsYXRzLnNvcnQoKGEsYikgPT4geyByZXR1cm4gYSA8PSBiID8gLTEgOiAxIH0gKTtcclxuICAgICAgICAgICAgbG9ncy5zb3J0KChhLGIpID0+IHsgcmV0dXJuIGEgPD0gYiA/IC0xIDogMSB9ICk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbWF4Q29vcmRzUGF0aCA9IFtbbGF0c1swXSxsb2dzWzBdXSxcclxuICAgICAgICAgICAgICAgIFtsYXRzW2xhdHMubGVuZ3RoLTFdLCBsb2dzW2xvZ3MubGVuZ3RoLTFdIF1dO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHtcclxuICAgICAgICAgICAgICAgICdpZCc6ICdsYXllci1wYXRoJyxcclxuICAgICAgICAgICAgICAgICd0eXBlJzogJ2xpbmUnLFxyXG4gICAgICAgICAgICAgICAgJ3NvdXJjZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdnZW9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IGdlb2pzb25cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnbGF5b3V0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLWNhcCc6ICdyb3VuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtam9pbic6ICdyb3VuZCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAncGFpbnQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtY29sb3InOiAnI2VkNjQ5OCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtd2lkdGgnOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLW9wYWNpdHknOiAuOFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhtYXhDb29yZHNQYXRoLCB7cGFkZGluZzogMTAwfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgQWN0aXZpdHlNYXBBbmltYXRle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9ICdway5leUoxSWpvaVkyRnlkRzFoYm5WelpYSWlMQ0poSWpvaVkycDVhSFZ5TkhCMk1ETnVkek5uYm5KaWFHVnRjV0oyT0NKOS4yVVBES25TWlJOd05SMUlUbFpRRUFBJztcclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xyXG4gICAgICAgICAgICBjb250YWluZXI6ICdtYXAnLFxyXG4gICAgICAgICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvb3V0ZG9vcnMtdjExJyxcclxuICAgICAgICAgICAgY2VudGVyOiBbIC04MS4xMTA1MTU1OTQ0ODI0MiwgMjIuNTA4OTA5NTY1MjA1MjRdLFxyXG4gICAgICAgICAgICB6b29tOiA1XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2VvanNvbiA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ0xpbmVTdHJpbmcnLFxyXG4gICAgICAgICAgICBjb29yZGluYXRlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODQuODI1NDM5NDUzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuODYxNDk4NzM0MzcyNTY3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04NC42NDk2NTgyMDMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS45NjM0MjQ5MzY4NDQyMjNcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTg0LjI2NTEzNjcxODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuOTMyODU0NzM2MzM1M1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODQuMTMzMzAwNzgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4xMTYxNzcxNDcyMTA2MlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODQuMDc4MzY5MTQwNjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzI5NzUyMzA0Mzc2NDczXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04My44OTE2MDE1NjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNDkyMjU3MjIwMDg1MThcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgzLjc0ODc3OTI5Njg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjYwMzg2ODg0Mjg5NTdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgzLjU1MTAyNTM5MDYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjczNTY1Njg1MjIwNjQ5NlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODMuMzUzMjcxNDg0Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuODM2OTQ1OTIwOTQzODU1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04My4xOTk0NjI4OTA2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi45MDc4MDM0NTEwNTgzOTJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgzLjA4OTU5OTYwOTM3NDk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuOTQ4Mjc2ODU2ODgwODk1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04Mi45MjQ4MDQ2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuOTU4MzkzMzE4MDg2MzQ4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04Mi43MDUwNzgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi45OTg4NTE1OTQxNDI5MTNcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgyLjQ0MTQwNjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjMuMDM5Mjk3NzQ3NzY5NzI2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04Mi4yOTg1ODM5ODQzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMy4xMjAxNTM2MjE2OTU2MTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgyLjEyMjgwMjczNDM3NDk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjMuMTQwMzU5OTg3ODg2MTE4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS45OTA5NjY3OTY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMy4xNDAzNTk5ODc4ODYxMThcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjg4MTEwMzUxNTYyNDk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjMuMTIwMTUzNjIxNjk1NjE0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS43ODIyMjY1NjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjMuMDI5MTg3MzQ2NzQ0NTlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjczODI4MTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuOTQ4Mjc2ODU2ODgwODk1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS42NzIzNjMyODEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjg1NzE5NDcwMDk2OTYzNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuNjA2NDQ1MzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjczNTY1Njg1MjIwNjQ5NlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuNTg0NDcyNjU2MjQ5OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi41NTMxNDc0Nzg0MDMxOTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjU3MzQ4NjMyODEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjQxMTAyODUyMTU1ODcwNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuNDMwNjY0MDYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjMwOTQyNTg0MTIwMDE5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS4zMDk4MTQ0NTMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4yODkwOTY0MTg3MjMwNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuMDc5MTAxNTYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjM1MDA3NTgwNjEyNDg2N1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODAuOTQ3MjY1NjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzUwMDc1ODA2MTI0ODY3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC44NzAzNjEzMjgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4zMzk5MTQ0MjU1NjIwMzJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjgxNTQyOTY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4zMTk1ODk0NDI4MzM5MVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODAuNzA1NTY2NDA2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4yODkwOTY0MTg3MjMwNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODAuNTk1NzAzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMjU4NTk2NzQwOTc1NzJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjQ4NTgzOTg0Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMTk3NTc3NDUzMzUxMDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjI4ODA4NTkzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4wOTU4MTk3MTc4MDc2OVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODAuMjIyMTY3OTY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4wNzU0NTkzNTE1NDY4NThcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjExMjMwNDY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4wNDQ5MTMzMDAyNDU2OVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzkuOTU4NDk2MDkzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4wODU2Mzk5MDE2NTAzMjhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc5Ljc2MDc0MjE4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4yNjg3NjQwMzkwNzM5NjhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc5LjUzMDAyOTI5Njg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjQxMTAyODUyMTU1ODcwNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzkuMzc2MjIwNzAzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNDIxMTg0NzEwMzMxODU4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OS4xMjM1MzUxNTYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjMyOTc1MjMwNDM3NjQ3M1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzguOTQ3NzUzOTA2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4zNzAzOTYzNDQzMjAwNTNcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4Ljc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNDkyMjU3MjIwMDg1MThcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4LjY1MTEyMzA0Njg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjU1MzE0NzQ3ODQwMzE5NFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzguNTUyMjQ2MDkzNzQ5OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi41MTI1NTY5NTQwNTE0NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzguMzk4NDM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjUwMjQwNzQ1OTQ5Nzc1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OC4yNTU2MTUyMzQzNzQ5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjQzMTM0MDE1NjM2MDYxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OC4xNDU3NTE5NTMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4zNjAyMzY0NDU3OTkzN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzguMDI0OTAyMzQzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4yNzg5MzA1OTg0MTE4OFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzcuODgyMDgwMDc4MTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMTU2ODgzMTg2ODYwNzAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ny44MDUxNzU3ODEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjA2NTI3ODA2Nzc2NTgyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ny42MDc0MjE4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS45MDIyNzc5NjY2Njg2NFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzcuNDk3NTU4NTkzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS44NDExMDQ3NDkwNjUwMzJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3LjM3NjcwODk4NDM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjczOTA5MTIxNzcxODU3NFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzcuMjU1ODU5Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuNjQ3MjE3MDY1Mzg3ODE3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ny4xMDIwNTA3ODEyNDk5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjU2NTUwMjAyOTc0NTMzMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzcuMDE0MTYwMTU2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS40MjIzODk5MDUyMzEzNjZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc2Ljk0ODI0MjE4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS4yODkzNzQzNTU4NjA0MjRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc2LjgwNTQxOTkyMTg3NDk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuMjI3OTQxOTA1MDU4MTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc2LjcwNjU0Mjk2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuODk5ODcxMzQ3MDc2NDI0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ni42NzM1ODM5ODQzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC42MjI1MDIyNTkzNDQ4MTdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc2LjU0MTc0ODA0Njg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjQ5OTA2NDI4MzQxMzA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ni40MjA4OTg0Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMzU0OTI3NTg0MTE3NjgyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ni4xOTAxODU1NDY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4yOTMxMTM0NDc1NDQxMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzUuOTgxNDQ1MzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjIyMDk2NTc3OTUyMjNcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc1Ljg2MDU5NTcwMzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjExNzgzOTYzMDQ5MTYzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzUuNjI5ODgyODEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjA2NjI1MTAyNDMyNjMwMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzUuMzY2MjEwOTM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjA2NjI1MTAyNDMyNjMwMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzUuMDU4NTkzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4xMTc4Mzk2MzA0OTE2MzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc0LjgxNjg5NDUzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMTc5NzIzNTAyNzY1MTUzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03NC40NjUzMzIwMzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjI0MTU4MjgxOTU0MjIxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03NC4yMDE2NjAxNTYyNDk5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjI2MjE5NzEyNDI0NjUzNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcigpXHJcbiAgICAgICAgICAgIC5zZXRMbmdMYXQoWyAtODEuMTEwNTE1NTk0NDgyNDIsIDIyLjUwODkwOTU2NTIwNTI0XSk7XHJcbiAgICAgICAgdGhpcy5zdGVwID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLm1hcC5vbignbG9hZCcsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgLy8gdGhpcy5tYXJrZXIuYWRkVG8odGhpcy5tYXApO1xyXG4gICAgICAgIC8vIHRoaXMuZ2VvSnNvbih0aGlzLmdlb2pzb24pLmFkZFRvKHRoaXMubWFwKTtcclxuICAgICAgICB0aGlzLnRpY2soKTtcclxuICAgICAgICAvLyB3aGlsZSAodGhpcy5zdGVwIDwgdGhpcy5nZW9qc29uLmNvb3JkaW5hdGVzLmxlbmd0aClcclxuICAgICAgICAvLyAgICAgc2V0VGltZW91dCh0aGlzLnRpY2ssIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGljaygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0TG5nTGF0KHRoaXMuZ2VvanNvbi5jb29yZGluYXRlc1t0aGlzLnN0ZXBdKVxyXG4gICAgICAgICAgICAuYWRkVG8odGhpcy5tYXApO1xyXG5cclxuICAgICAgICB0aGlzLnN0ZXArKztcclxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMudGljay5iaW5kKHRoaXMpLCAxMDAwKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7QWN0aXZpdHlNYXBBbmltYXRlLCBBY3Rpdml0eU1hcH07XHJcblxyXG4iLCJpbXBvcnQgeyBzZXRDb29raWUsIGdldENvb2tpZSB9IGZyb20gJy4vX3V0aWxzJztcclxuXHJcbmNsYXNzIEFkZFRvQ2FydCB7XHJcbiAgICBjb25zdHJ1Y3RvcihidXR0b25zU2VsZWN0b3Ipe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc1NlbGVjdG9yID0gYnV0dG9uc1NlbGVjdG9yO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNGaWx0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdGllc19fbGlzdF9fY29udGFpbmVyX19maWx0ZXJfc2VhcmNoJyk7XHJcbiAgICAgICAgdGhpcy5idXR0b25zQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmJ1dHRvbnNTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfYmFyJyk7XHJcbiAgICAgICAgdGhpcy5jYXJ0QmFyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X2JhciAuY2FydF9iYXJfX2NvbnRlbnRfX3RleHQgc3BhbicpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRBY3Rpdml0aWVzKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXR1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRBY3Rpdml0aWVzKCl7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IGdldENvb2tpZSgncHJvZHVjdHNfY2FydCcpO1xyXG4gICAgICAgIGlmICghY3VycmVudFZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllcyA9IGN1cnJlbnRWYWx1ZVsxXS5zcGxpdCgnLCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc0FkZC5mb3JFYWNoKChidXR0b24pPT57XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkT3JSZW1vdmVBY3Rpdml0eS5iaW5kKHRoaXMpXHJcbiAgICAgICAgKX0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0aWVzRmlsdGVyQ29udGFpbmVyICE9PSBudWxsKVxyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllc0ZpbHRlckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCAoZWxlbWVudCk9PntcclxuICAgICAgICAgICAgbGV0IGFjdGl2aXR5ID0gZWxlbWVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBhY3Rpdml0eS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdHlfX2NvbnRlbnRfX2FjdGlvbnNfX2FkZCcpO1xyXG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZE9yUmVtb3ZlQWN0aXZpdHkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdHVzKCl7XHJcbiAgICAgICAgdGhpcy5idXR0b25zQWRkLmZvckVhY2goKGJ1dHRvbik9PntcclxuICAgICAgICAgICBsZXQgYWN0aXZpdHlJZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZpdHlfaWQnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZpdGllcy5pbmNsdWRlcyhhY3Rpdml0eUlkKSl7XHJcbiAgICAgICAgICAgICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzdmcuaGVhcnQnKS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFydC0tZmlsbC13aGl0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbkFjdGl2aXR5KGFjdGl2aXR5SWQpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2aXRpZXMuaW5jbHVkZXMoYWN0aXZpdHlJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWN0aXZpdHkoYWN0aXZpdHlJZCl7XHJcbiAgICAgICAgdGhpcy5hY3Rpdml0aWVzID0gdGhpcy5hY3Rpdml0aWVzLmZpbHRlcigoeCk9PntyZXR1cm4geCE9PWFjdGl2aXR5SWR9KTtcclxuICAgICAgICBzZXRDb29raWUodGhpcy5hY3Rpdml0aWVzLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFjdGl2aXR5KGFjdGl2aXR5SWQpe1xyXG4gICAgICAgIHRoaXMuYWN0aXZpdGllcy5wdXNoKGFjdGl2aXR5SWQpO1xyXG4gICAgICAgIHNldENvb2tpZSh0aGlzLmFjdGl2aXRpZXMudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2FydFRleHQoKXtcclxuICAgICAgICBpZiAodGhpcy5hY3Rpdml0aWVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgdGhpcy5jYXJ0QmFyLmNsYXNzTGlzdC5hZGQoJ2NhcnRfYmFyLS1pbml0aWFsJyk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QucmVtb3ZlKCdjYXJ0X2Jhci0taW5pdGlhbCcpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnRCYXJUZXh0LmlubmVySFRNTCA9IHRoaXMuYWN0aXZpdGllcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhcnRCYXIuY2xhc3NMaXN0LnJlbW92ZSgnY2FydF9iYXItLXZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q2FydCgpe1xyXG4gICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QucmVtb3ZlKCdjYXJ0X2Jhci0tdmlzaWJsZScpO1xyXG4gICAgICAgIHRoaXMuY2FydEJhci5jbGFzc0xpc3QuYWRkKCdjYXJ0X2Jhci0tdmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE9yUmVtb3ZlQWN0aXZpdHkoZSl7XHJcblxyXG4gICAgICAgIGxldCBidXR0b24gPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2aXR5SWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2aXR5X2lkJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5BY3Rpdml0eShhY3Rpdml0eUlkKSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWN0aXZpdHkoYWN0aXZpdHlJZCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydFRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQWN0aXZpdHkoYWN0aXZpdHlJZCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydFRleHQoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q2FydCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xyXG4gICAgICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdzdmcuaGVhcnQnKS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFydC0tZmlsbC13aGl0ZScpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVG9DYXJ0OyIsImV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUodmFsdWUsIG5hbWU9J3Byb2R1Y3RzX2NhcnQnICwgZGF5cz0zKSB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkrKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xyXG4gICAgbGV0IGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIitkYXRlLnRvR01UU3RyaW5nICgpO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgK1xyXG4gICAgICAgIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xyXG4gICAgbGV0IGNBcnIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuICAgIGZvcihsZXQgaT0wO2kgPCBjQXJyLmxlbmd0aDtpKyspIHtcclxuICAgICAgICBsZXQgY29va2llID0gY0FycltpXS5zcGxpdChcIj1cIiwyKTtcclxuICAgICAgICBjb29raWVbMF0gPSBjb29raWVbMF0ucmVwbGFjZSgvXlxccysvLFwiXCIpO1xyXG4gICAgICAgIGlmIChjb29raWVbMF0gPT09IG5hbWUpXHJcbiAgICAgICAgICAgIHJldHVybiBjb29raWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9