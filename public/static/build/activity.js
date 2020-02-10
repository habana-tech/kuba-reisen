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
      var maxCoords = Object(_global_utils__WEBPACK_IMPORTED_MODULE_8__["getBoundingBox"])(lats, logs); // this.map.fitBounds(maxCoords, {padding: 100});
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
        }); // this.map.fitBounds(maxCoordsPath, {padding: 100});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hY3Rpdml0eS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FjdGl2aXR5L19kYXlzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvYWN0aXZpdHkvX2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9hY3Rpdml0eS9fbWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZ2xvYmFsL191dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FjdGl2aXR5LnNjc3MiXSwibmFtZXMiOlsiQWN0aXZpdHlNYXAiLCJHYWxsZXJ5IiwiRGF5cyIsImRheXNUaXRsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVudHMiLCJmb3JFYWNoIiwiZGF5VGl0bGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXhwYW5kIiwiYmluZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRheUNvbnRlbnQiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJzZWxlY3RvciIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJsaXN0ZW5lciIsIlN3aXBlTGlzdGVuZXIiLCJpdGVtcyIsImFjdGl2ZVBvcyIsImluaXQiLCJhcnJvd3MiLCJhZGRBcnJvd3MiLCJhcnJvd1ByZXYiLCJhcnJvd05leHQiLCJwcmV2IiwibmV4dCIsImRpcmVjdGlvbnMiLCJkZXRhaWwiLCJsZWZ0IiwicmlnaHQiLCJpbWFnZSIsImluZGV4IiwiZGlzcGxhY2VtZW50Iiwic2V0QXR0cmlidXRlIiwiY3JlYXRlRWxlbWVudCIsImFkZCIsImFwcGVuZENoaWxkIiwibGVuZ3RoIiwiaXRlbSIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJtYXAiLCJNYXAiLCJ6b29tIiwiY2VudGVyIiwic2Nyb2xsWm9vbSIsImRpc2FibGUiLCJwb2ludHMiLCJwYXRocyIsInNldE1hcmtlcnNBbmRab29tIiwib24iLCJzZXRQYXRoQW5kWm9vbSIsImxhdHMiLCJsb2dzIiwicG9pbnQiLCJwcm9wcyIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsInB1c2giLCJuYW1lIiwiTWFya2VyIiwic2V0TG5nTGF0IiwiYWRkVG8iLCJQb3B1cCIsImNsb3NlT25DbGljayIsInNldEhUTUwiLCJtYXhDb29yZHMiLCJnZXRCb3VuZGluZ0JveCIsInBhdGgiLCJnZW9qc29uIiwiY29vcmRpbmF0ZXMiLCJmZWF0dXJlcyIsImdlb21ldHJ5IiwiY29vcmRpbmF0ZSIsIm1heENvb3Jkc1BhdGgiLCJhZGRMYXllciIsIkFjdGl2aXR5TWFwQW5pbWF0ZSIsInR5cGUiLCJtYXJrZXIiLCJzdGVwIiwidGljayIsInNldFRpbWVvdXQiLCJzZXRDb29raWUiLCJ2YWx1ZSIsImRheXMiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiZXhwaXJlcyIsInRvR01UU3RyaW5nIiwiY29va2llIiwiZ2V0Q29va2llIiwiY0FyciIsInNwbGl0IiwiaSIsInJlcGxhY2UiLCJzb3J0IiwiYSIsImIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGlFQUFKO0FBQ0EsSUFBSUMsaUVBQUosQ0FBWSxVQUFaO0FBQ0EsSUFBSUMsOERBQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNSTUEsSTs7O0FBQ0Ysa0JBQWE7QUFBQTs7QUFDVCxTQUFLQyxVQUFMLEdBQWtCQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGFBQTFCLENBQWxCO0FBQ0EsU0FBS0MsTUFBTDtBQUNIOzs7OzZCQUVPO0FBQUE7O0FBQ0osV0FBS0gsVUFBTCxDQUFnQkks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R0FBWSxDQUFiLENBQTFCLENBREcsQ0FBUDtBQUVILEM7Ozs7Ozs7Ozs7O0FDekJELHVDIiwiZmlsZSI6ImFjdGl2aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvYWN0aXZpdHkuc2Nzcyc7XHJcblxyXG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL21vZHVsZXMvYWN0aXZpdHkvX2dhbGxlcnknO1xyXG5pbXBvcnQge0FjdGl2aXR5TWFwfSBmcm9tICcuL21vZHVsZXMvYWN0aXZpdHkvX21hcCc7XHJcbmltcG9ydCBEYXlzIGZyb20gXCIuL21vZHVsZXMvYWN0aXZpdHkvX2RheXNcIjtcclxuXHJcbm5ldyBBY3Rpdml0eU1hcCgpO1xyXG5uZXcgR2FsbGVyeSgnLmdhbGxlcnknKTtcclxubmV3IERheXMoKTsiLCJjbGFzcyBEYXlze1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmRheXNUaXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF5X190aXRsZScpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5kYXlzVGl0bGVzLmZvckVhY2goKGRheVRpdGxlKT0+e1xyXG4gICAgICAgICAgICBkYXlUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXhwYW5kLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGFuZChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBkYXlDb250ZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgIGRheUNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZGF5LS1hY3RpdmUnKTtcclxuICAgICAgICBkYXlDb250ZW50LnN0eWxlLm1heEhlaWdodCA/IGRheUNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbCA6IGRheUNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gZGF5Q29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXlzOyIsImltcG9ydCBTd2lwZUxpc3RlbmVyIGZyb20gJ3N3aXBlLWxpc3RlbmVyJztcclxuXHJcbmNsYXNzIEdhbGxlcnkge1xyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3Ipe1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IFN3aXBlTGlzdGVuZXIodGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKycgLmdhbGxlcnlfX2l0ZW0nKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQb3MgPSAwO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5hcnJvd3MgPSB0aGlzLmFkZEFycm93cygpO1xyXG4gICAgICAgIHRoaXMuYXJyb3dQcmV2ID0gdGhpcy5hcnJvd3NbMF07XHJcbiAgICAgICAgdGhpcy5hcnJvd05leHQgPSB0aGlzLmFycm93c1sxXTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJvd1ByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByZXYuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXJyb3dOZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5uZXh0LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzd2lwZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gZS5kZXRhaWwuZGlyZWN0aW9ucztcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zLmxlZnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zLnJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnaGVpZ2h0OiAnK3RoaXMuaW1hZ2VzWzBdLmNsaWVudEhlaWdodCsncHg7Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gaW5kZXgqMTAwO1xyXG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGRpc3BsYWNlbWVudCArIFwiJSk7XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQXJyb3dzKCl7XHJcbiAgICAgICAgbGV0IGFycm93UHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFycm93UHJldi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdycpO1xyXG4gICAgICAgIGFycm93UHJldi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdy0tcHJldicpO1xyXG4gICAgICAgIGxldCBhcnJvd05leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhcnJvd05leHQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fYXJyb3cnKTtcclxuICAgICAgICBhcnJvd05leHQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fYXJyb3ctLW5leHQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYXJyb3dQcmV2KTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd05leHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gW2Fycm93UHJldiwgYXJyb3dOZXh0XTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUG9zID09PSB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9zID0gLTE7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpPT57XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gKGluZGV4IC0gdGhpcy5hY3RpdmVQb3MgLSAxKSoxMDA7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIgKyBkaXNwbGFjZW1lbnQgKyBcIiUpO1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQb3MgKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2KCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUG9zID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBvcyA9IHRoaXMuaXRlbXMubGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KT0+e1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpc3BsYWNlbWVudCA9IChpbmRleCAtIHRoaXMuYWN0aXZlUG9zICsgMSkqMTAwO1xyXG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiICsgZGlzcGxhY2VtZW50ICsgXCIlKTtcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUG9zIC09IDE7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5OyIsImltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wnO1xyXG5pbXBvcnQgeyBnZXRCb3VuZGluZ0JveCB9IGZyb20gJy4uL2dsb2JhbC9fdXRpbHMnO1xyXG5cclxuY2xhc3MgQWN0aXZpdHlNYXAge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9ICdway5leUoxSWpvaVkyRnlkRzFoYm5WelpYSWlMQ0poSWpvaVkycDVhSFZ5TkhCMk1ETnVkek5uYm5KaWFHVnRjV0oyT0NKOS4yVVBES25TWlJOd05SMUlUbFpRRUFBJztcclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xyXG4gICAgICAgICAgICBjb250YWluZXI6ICdtYXAnLFxyXG4gICAgICAgICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvb3V0ZG9vcnMtdjExJyxcclxuICAgICAgICAgICAgem9vbTogMTMsXHJcbiAgICAgICAgICAgIGNlbnRlcjogWy04MS4xNzM5ODU3LCAyMy4xOTE5MjJdLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1hcC5zY3JvbGxab29tLmRpc2FibGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb2ludHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzY3JpcHRpb24taXRpbmVyYXJ5X19jb250ZW50IHNwYW5bZGF0YS1tYXBdJyk7XHJcbiAgICAgICAgdGhpcy5wYXRocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXNjcmlwdGlvbi1pdGluZXJhcnlfX2NvbnRlbnQgc3BhbltkYXRhLXBhdGgtbWFwXScpO1xyXG5cclxuICAgICAgICB0aGlzLnNldE1hcmtlcnNBbmRab29tKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLm1hcC5vbignbG9hZCcsIHRoaXMuc2V0UGF0aEFuZFpvb20uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWFya2Vyc0FuZFpvb20oKXtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgbGF0cyA9IFtdO1xyXG4gICAgICAgIGxldCBsb2dzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goKHBvaW50KT0+e1xyXG4gICAgICAgICAgICBsZXQgcHJvcHMgPSBwb2ludC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFwJyk7XHJcbiAgICAgICAgICAgIHByb3BzID0gSlNPTi5wYXJzZShwcm9wcyk7XHJcblxyXG4gICAgICAgICAgICBsYXRzLnB1c2gocHJvcHMuY2VudGVyWzBdKTtcclxuICAgICAgICAgICAgbG9ncy5wdXNoKHByb3BzLmNlbnRlclsxXSk7XHJcblxyXG4gICAgICAgICAgICBpZihwcm9wcy5uYW1lID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICBuZXcgbWFwYm94Z2wuTWFya2VyKClcclxuICAgICAgICAgICAgICAgICAgICAuc2V0TG5nTGF0KHByb3BzLmNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAuYWRkVG8odGhpcy5tYXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3IG1hcGJveGdsLlBvcHVwKHtjbG9zZU9uQ2xpY2s6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0TG5nTGF0KHByb3BzLmNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAuc2V0SFRNTCgnPGgzPicrcHJvcHMubmFtZSsnPC9oMz4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUbyh0aGlzLm1hcCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgbWF4Q29vcmRzID0gZ2V0Qm91bmRpbmdCb3gobGF0cywgbG9ncyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubWFwLmZpdEJvdW5kcyhtYXhDb29yZHMsIHtwYWRkaW5nOiAxMDB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXRoQW5kWm9vbSgpe1xyXG4gICAgICAgIGlmICh0aGlzLnBhdGhzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnBhdGhzLmZvckVhY2goKHBhdGgpPT57XHJcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHBhdGguZ2V0QXR0cmlidXRlKCdkYXRhLXBhdGgtbWFwJyk7XHJcbiAgICAgICAgICAgIHByb3BzID0gSlNPTi5wYXJzZShwcm9wcyk7XHJcbiAgICAgICAgICAgIGxldCBnZW9qc29uID0gcHJvcHMuZ2VvanNvbjtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IGdlb2pzb24uZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGF0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgbG9ncyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSk9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXRzLnB1c2goY29vcmRpbmF0ZVswXSk7XHJcbiAgICAgICAgICAgICAgICBsb2dzLnB1c2goY29vcmRpbmF0ZVsxXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1heENvb3Jkc1BhdGggPSBnZXRCb3VuZGluZ0JveChsYXRzLCBsb2dzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHtcclxuICAgICAgICAgICAgICAgICdpZCc6ICdsYXllci1wYXRoJyxcclxuICAgICAgICAgICAgICAgICd0eXBlJzogJ2xpbmUnLFxyXG4gICAgICAgICAgICAgICAgJ3NvdXJjZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdnZW9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IGdlb2pzb25cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAnbGF5b3V0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLWNhcCc6ICdyb3VuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtam9pbic6ICdyb3VuZCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAncGFpbnQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtY29sb3InOiAnI2VkNjQ5OCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmUtd2lkdGgnOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLW9wYWNpdHknOiAuOFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMubWFwLmZpdEJvdW5kcyhtYXhDb29yZHNQYXRoLCB7cGFkZGluZzogMTAwfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgQWN0aXZpdHlNYXBBbmltYXRle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSAncGsuZXlKMUlqb2lZMkZ5ZEcxaGJuVnpaWElpTENKaElqb2lZMnA1YUhWeU5IQjJNRE51ZHpObmJuSmlhR1Z0Y1dKMk9DSjkuMlVQREtuU1pSTndOUjFJVGxaUUVBQSc7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiAnbWFwJyxcclxuICAgICAgICAgICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L291dGRvb3JzLXYxMScsXHJcbiAgICAgICAgICAgIGNlbnRlcjogWyAtODEuMTEwNTE1NTk0NDgyNDIsIDIyLjUwODkwOTU2NTIwNTI0XSxcclxuICAgICAgICAgICAgem9vbTogNVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmdlb2pzb24gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMaW5lU3RyaW5nJyxcclxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTg0LjgyNTQzOTQ1MzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjg2MTQ5ODczNDM3MjU2N1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODQuNjQ5NjU4MjAzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuOTYzNDI0OTM2ODQ0MjIzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04NC4yNjUxMzY3MTg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjkzMjg1NDczNjMzNTNcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTg0LjEzMzMwMDc4MTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMTE2MTc3MTQ3MjEwNjJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTg0LjA3ODM2OTE0MDYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjMyOTc1MjMwNDM3NjQ3M1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODMuODkxNjAxNTYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjQ5MjI1NzIyMDA4NTE4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04My43NDg3NzkyOTY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi42MDM4Njg4NDI4OTU3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04My41NTEwMjUzOTA2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi43MzU2NTY4NTIyMDY0OTZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgzLjM1MzI3MTQ4NDM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjgzNjk0NTkyMDk0Mzg1NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODMuMTk5NDYyODkwNjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuOTA3ODAzNDUxMDU4MzkyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04My4wODk1OTk2MDkzNzQ5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjk0ODI3Njg1Njg4MDg5NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODIuOTI0ODA0Njg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjk1ODM5MzMxODA4NjM0OFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODIuNzA1MDc4MTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuOTk4ODUxNTk0MTQyOTEzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04Mi40NDE0MDYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzLjAzOTI5Nzc0Nzc2OTcyNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODIuMjk4NTgzOTg0Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjMuMTIwMTUzNjIxNjk1NjE0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04Mi4xMjI4MDI3MzQzNzQ5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzLjE0MDM1OTk4Nzg4NjExOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuOTkwOTY2Nzk2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjMuMTQwMzU5OTg3ODg2MTE4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS44ODExMDM1MTU2MjQ5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzLjEyMDE1MzYyMTY5NTYxNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuNzgyMjI2NTYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzLjAyOTE4NzM0Njc0NDU5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS43MzgyODEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjk0ODI3Njg1Njg4MDg5NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuNjcyMzYzMjgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi44NTcxOTQ3MDA5Njk2MzZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjYwNjQ0NTMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi43MzU2NTY4NTIyMDY0OTZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjU4NDQ3MjY1NjI0OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNTUzMTQ3NDc4NDAzMTk0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS41NzM0ODYzMjgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi40MTEwMjg1MjE1NTg3MDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjQzMDY2NDA2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4zMDk0MjU4NDEyMDAxOVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuMzA5ODE0NDUzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMjg5MDk2NDE4NzIzMDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjA3OTEwMTU2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4zNTAwNzU4MDYxMjQ4NjdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjk0NzI2NTYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjM1MDA3NTgwNjEyNDg2N1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODAuODcwMzYxMzI4MTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzM5OTE0NDI1NTYyMDMyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC44MTU0Mjk2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzE5NTg5NDQyODMzOTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjcwNTU2NjQwNjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMjg5MDk2NDE4NzIzMDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjU5NTcwMzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjI1ODU5Njc0MDk3NTcyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC40ODU4Mzk4NDM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjE5NzU3NzQ1MzM1MTA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC4yODgwODU5Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMDk1ODE5NzE3ODA3NjlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjIyMjE2Nzk2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMDc1NDU5MzUxNTQ2ODU4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC4xMTIzMDQ2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMDQ0OTEzMzAwMjQ1NjlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc5Ljk1ODQ5NjA5Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMDg1NjM5OTAxNjUwMzI4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OS43NjA3NDIxODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMjY4NzY0MDM5MDczOTY4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OS41MzAwMjkyOTY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi40MTEwMjg1MjE1NTg3MDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc5LjM3NjIyMDcwMzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjQyMTE4NDcxMDMzMTg1OFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzkuMTIzNTM1MTU2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4zMjk3NTIzMDQzNzY0NzNcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4Ljk0Nzc1MzkwNjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzcwMzk2MzQ0MzIwMDUzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OC43NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjQ5MjI1NzIyMDA4NTE4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OC42NTExMjMwNDY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi41NTMxNDc0Nzg0MDMxOTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4LjU1MjI0NjA5Mzc0OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNTEyNTU2OTU0MDUxNDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4LjM5ODQzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi41MDI0MDc0NTk0OTc3NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzguMjU1NjE1MjM0Mzc0OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi40MzEzNDAxNTYzNjA2MVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzguMTQ1NzUxOTUzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzYwMjM2NDQ1Nzk5MzdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4LjAyNDkwMjM0Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMjc4OTMwNTk4NDExODhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3Ljg4MjA4MDA3ODEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjE1Njg4MzE4Njg2MDcwM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzcuODA1MTc1NzgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4wNjUyNzgwNjc3NjU4MlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzcuNjA3NDIxODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuOTAyMjc3OTY2NjY4NjRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3LjQ5NzU1ODU5Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuODQxMTA0NzQ5MDY1MDMyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ny4zNzY3MDg5ODQzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS43MzkwOTEyMTc3MTg1NzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3LjI1NTg1OTM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjY0NzIxNzA2NTM4NzgxN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzcuMTAyMDUwNzgxMjQ5OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS41NjU1MDIwMjk3NDUzMzJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3LjAxNDE2MDE1NjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuNDIyMzg5OTA1MjMxMzY2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ni45NDgyNDIxODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuMjg5Mzc0MzU1ODYwNDI0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ni44MDU0MTk5MjE4NzQ5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjIyNzk0MTkwNTA1ODE1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ni43MDY1NDI5Njg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjg5OTg3MTM0NzA3NjQyNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzYuNjczNTgzOTg0Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuNjIyNTAyMjU5MzQ0ODE3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ni41NDE3NDgwNDY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC40OTkwNjQyODM0MTMwNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzYuNDIwODk4NDM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjM1NDkyNzU4NDExNzY4MlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzYuMTkwMTg1NTQ2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMjkzMTEzNDQ3NTQ0MTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc1Ljk4MTQ0NTMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4yMjA5NjU3Nzk1MjIzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03NS44NjA1OTU3MDMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4xMTc4Mzk2MzA0OTE2MzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc1LjYyOTg4MjgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4wNjYyNTEwMjQzMjYzMDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc1LjM2NjIxMDkzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4wNjYyNTEwMjQzMjYzMDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc1LjA1ODU5Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMTE3ODM5NjMwNDkxNjM0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03NC44MTY4OTQ1MzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjE3OTcyMzUwMjc2NTE1M1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzQuNDY1MzMyMDMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4yNDE1ODI4MTk1NDIyMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzQuMjAxNjYwMTU2MjQ5OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4yNjIxOTcxMjQyNDY1MzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtlciA9IG5ldyBtYXBib3hnbC5NYXJrZXIoKVxyXG4gICAgICAgICAgICAuc2V0TG5nTGF0KFsgLTgxLjExMDUxNTU5NDQ4MjQyLCAyMi41MDg5MDk1NjUyMDUyNF0pO1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5tYXAub24oJ2xvYWQnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIC8vIHRoaXMubWFya2VyLmFkZFRvKHRoaXMubWFwKTtcclxuICAgICAgICAvLyB0aGlzLmdlb0pzb24odGhpcy5nZW9qc29uKS5hZGRUbyh0aGlzLm1hcCk7XHJcbiAgICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICAgICAgLy8gd2hpbGUgKHRoaXMuc3RlcCA8IHRoaXMuZ2VvanNvbi5jb29yZGluYXRlcy5sZW5ndGgpXHJcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQodGhpcy50aWNrLCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRpY2soKSB7XHJcblxyXG4gICAgICAgIHRoaXMubWFya2VyLnNldExuZ0xhdCh0aGlzLmdlb2pzb24uY29vcmRpbmF0ZXNbdGhpcy5zdGVwXSlcclxuICAgICAgICAgICAgLmFkZFRvKHRoaXMubWFwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGVwKys7XHJcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnRpY2suYmluZCh0aGlzKSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge0FjdGl2aXR5TWFwQW5pbWF0ZSwgQWN0aXZpdHlNYXB9O1xyXG5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZSh2YWx1ZSwgbmFtZT0ncHJvZHVjdHNfY2FydCcgLCBkYXlzPTMpIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSsoZGF5cyoyNCo2MCo2MCoxMDAwKSk7XHJcbiAgICBsZXQgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiK2RhdGUudG9HTVRTdHJpbmcgKCk7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArXHJcbiAgICAgICAgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICBsZXQgY0FyciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgZm9yKGxldCBpPTA7aSA8IGNBcnIubGVuZ3RoO2krKykge1xyXG4gICAgICAgIGxldCBjb29raWUgPSBjQXJyW2ldLnNwbGl0KFwiPVwiLDIpO1xyXG4gICAgICAgIGNvb2tpZVswXSA9IGNvb2tpZVswXS5yZXBsYWNlKC9eXFxzKy8sXCJcIik7XHJcbiAgICAgICAgaWYgKGNvb2tpZVswXSA9PT0gbmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIGNvb2tpZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQm94KGxhdHMsIGxvZ3Mpe1xyXG4gICAgbGF0cy5zb3J0KChhLGIpID0+IHsgcmV0dXJuIGEgPD0gYiA/IC0xIDogMSB9ICk7XHJcbiAgICBsb2dzLnNvcnQoKGEsYikgPT4geyByZXR1cm4gYSA8PSBiID8gLTEgOiAxIH0gKTtcclxuXHJcbiAgICByZXR1cm4gW1tsYXRzWzBdLGxvZ3NbMF1dLFxyXG4gICAgICAgIFtsYXRzW2xhdHMubGVuZ3RoLTFdLCBsb2dzW2xvZ3MubGVuZ3RoLTFdIF1dO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==