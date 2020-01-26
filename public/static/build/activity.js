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
/* harmony import */ var _modules_activity_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/activity/_map */ "./assets/scripts/modules/activity/_map.js");



__webpack_require__(/*! ../styles/activity.scss */ "./assets/styles/activity.scss");

new _modules_activity_map__WEBPACK_IMPORTED_MODULE_1__["ActivityMap"]();
new _modules_activity_gallery__WEBPACK_IMPORTED_MODULE_0__["default"]('.gallery');

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

/***/ "./assets/styles/activity.scss":
/*!*************************************!*\
  !*** ./assets/styles/activity.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var SLOPPY_METHOD = sloppyArrayMethod('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},[["./assets/scripts/activity.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~activity~bucket_list","activity~destination"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hY3Rpdml0eS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FjdGl2aXR5L19tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hY3Rpdml0eS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJBY3Rpdml0eU1hcCIsIkdhbGxlcnkiLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwibWFwIiwiTWFwIiwiY29udGFpbmVyIiwic3R5bGUiLCJ6b29tIiwiY2VudGVyIiwic2Nyb2xsWm9vbSIsImRpc2FibGUiLCJwb2ludHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXRocyIsInNldE1hcmtlcnNBbmRab29tIiwiZXZlbnRzIiwib24iLCJzZXRQYXRoQW5kWm9vbSIsImJpbmQiLCJsZW5ndGgiLCJsYXRzIiwibG9ncyIsImZvckVhY2giLCJwb2ludCIsInByb3BzIiwiZ2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwicHVzaCIsIm5hbWUiLCJNYXJrZXIiLCJzZXRMbmdMYXQiLCJhZGRUbyIsIlBvcHVwIiwiY2xvc2VPbkNsaWNrIiwic2V0SFRNTCIsInNvcnQiLCJhIiwiYiIsIm1heENvb3JkcyIsImZpdEJvdW5kcyIsInBhZGRpbmciLCJwYXRoIiwiZ2VvanNvbiIsImNvb3JkaW5hdGVzIiwiZmVhdHVyZXMiLCJnZW9tZXRyeSIsImNvb3JkaW5hdGUiLCJtYXhDb29yZHNQYXRoIiwiYWRkTGF5ZXIiLCJBY3Rpdml0eU1h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QUFDO0FBQ0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRywrQ0FBK0M7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQy9CRCxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQscUJBQXFCLG1CQUFPLENBQUMsdUdBQXFDOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDckJBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7O0FBRWpEO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImFjdGl2aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9tb2R1bGVzL2FjdGl2aXR5L19nYWxsZXJ5JztcclxuaW1wb3J0IHtBY3Rpdml0eU1hcH0gZnJvbSAnLi9tb2R1bGVzL2FjdGl2aXR5L19tYXAnO1xyXG5yZXF1aXJlKCcuLi9zdHlsZXMvYWN0aXZpdHkuc2NzcycpO1xyXG5cclxubmV3IEFjdGl2aXR5TWFwKCk7XHJcbm5ldyBHYWxsZXJ5KCcuZ2FsbGVyeScpOyIsImltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wnO1xyXG5cclxuY2xhc3MgQWN0aXZpdHlNYXAge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9ICdway5leUoxSWpvaVkyRnlkRzFoYm5WelpYSWlMQ0poSWpvaVkycDVhSFZ5TkhCMk1ETnVkek5uYm5KaWFHVnRjV0oyT0NKOS4yVVBES25TWlJOd05SMUlUbFpRRUFBJztcclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xyXG4gICAgICAgICAgICBjb250YWluZXI6ICdtYXAnLFxyXG4gICAgICAgICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvb3V0ZG9vcnMtdjExJyxcclxuICAgICAgICAgICAgem9vbTogMTMsXHJcbiAgICAgICAgICAgIGNlbnRlcjogWy04MS4xNzM5ODU3LCAyMy4xOTE5MjJdLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1hcC5zY3JvbGxab29tLmRpc2FibGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb2ludHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzY3JpcHRpb24taXRpbmVyYXJ5X19jb250ZW50IHNwYW5bZGF0YS1tYXBdJyk7XHJcbiAgICAgICAgdGhpcy5wYXRocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXNjcmlwdGlvbi1pdGluZXJhcnlfX2NvbnRlbnQgc3BhbltkYXRhLXBhdGgtbWFwXScpO1xyXG5cclxuICAgICAgICB0aGlzLnNldE1hcmtlcnNBbmRab29tKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLm1hcC5vbignbG9hZCcsIHRoaXMuc2V0UGF0aEFuZFpvb20uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWFya2Vyc0FuZFpvb20oKXtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgbGF0cyA9IFtdO1xyXG4gICAgICAgIGxldCBsb2dzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goKHBvaW50KT0+e1xyXG4gICAgICAgICAgICBsZXQgcHJvcHMgPSBwb2ludC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFwJyk7XHJcbiAgICAgICAgICAgIHByb3BzID0gSlNPTi5wYXJzZShwcm9wcyk7XHJcblxyXG4gICAgICAgICAgICBsYXRzLnB1c2gocHJvcHMuY2VudGVyWzBdKTtcclxuICAgICAgICAgICAgbG9ncy5wdXNoKHByb3BzLmNlbnRlclsxXSk7XHJcblxyXG4gICAgICAgICAgICBpZihwcm9wcy5uYW1lID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICBuZXcgbWFwYm94Z2wuTWFya2VyKClcclxuICAgICAgICAgICAgICAgICAgICAuc2V0TG5nTGF0KHByb3BzLmNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAuYWRkVG8odGhpcy5tYXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3IG1hcGJveGdsLlBvcHVwKHtjbG9zZU9uQ2xpY2s6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgICAgICAuc2V0TG5nTGF0KHByb3BzLmNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAuc2V0SFRNTCgnPGgzPicrcHJvcHMubmFtZSsnPC9oMz4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRUbyh0aGlzLm1hcCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsYXRzLnNvcnQoKGEsYikgPT4geyByZXR1cm4gYSA8PSBiID8gLTEgOiAxIH0gKTtcclxuICAgICAgICBsb2dzLnNvcnQoKGEsYikgPT4geyByZXR1cm4gYSA8PSBiID8gLTEgOiAxIH0gKTtcclxuXHJcbiAgICAgICAgbGV0IG1heENvb3JkcyA9IFtbbGF0c1swXSxsb2dzWzBdXSxcclxuICAgICAgICAgICAgW2xhdHNbbGF0cy5sZW5ndGgtMV0sIGxvZ3NbbG9ncy5sZW5ndGgtMV0gXV07XHJcblxyXG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhtYXhDb29yZHMsIHtwYWRkaW5nOiAxMDB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXRoQW5kWm9vbSgpe1xyXG4gICAgICAgIGlmICh0aGlzLnBhdGhzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLnBhdGhzLmZvckVhY2goKHBhdGgpPT57XHJcbiAgICAgICAgICAgIGxldCBwcm9wcyA9IHBhdGguZ2V0QXR0cmlidXRlKCdkYXRhLXBhdGgtbWFwJyk7XHJcbiAgICAgICAgICAgIHByb3BzID0gSlNPTi5wYXJzZShwcm9wcyk7XHJcbiAgICAgICAgICAgIGxldCBnZW9qc29uID0gcHJvcHMuZ2VvanNvbjtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IGdlb2pzb24uZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGF0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgbG9ncyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSk9PiB7XHJcbiAgICAgICAgICAgICAgICBsYXRzLnB1c2goY29vcmRpbmF0ZVswXSk7XHJcbiAgICAgICAgICAgICAgICBsb2dzLnB1c2goY29vcmRpbmF0ZVsxXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGF0cy5zb3J0KChhLGIpID0+IHsgcmV0dXJuIGEgPD0gYiA/IC0xIDogMSB9ICk7XHJcbiAgICAgICAgICAgIGxvZ3Muc29ydCgoYSxiKSA9PiB7IHJldHVybiBhIDw9IGIgPyAtMSA6IDEgfSApO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1heENvb3Jkc1BhdGggPSBbW2xhdHNbMF0sbG9nc1swXV0sXHJcbiAgICAgICAgICAgICAgICBbbGF0c1tsYXRzLmxlbmd0aC0xXSwgbG9nc1tsb2dzLmxlbmd0aC0xXSBdXTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih7XHJcbiAgICAgICAgICAgICAgICAnaWQnOiAnbGF5ZXItcGF0aCcsXHJcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdsaW5lJyxcclxuICAgICAgICAgICAgICAgICdzb3VyY2UnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnZ2VvanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBnZW9qc29uXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ2xheW91dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS1jYXAnOiAncm91bmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLWpvaW4nOiAncm91bmQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgJ3BhaW50Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLWNvbG9yJzogJyNlZDY0OTgnLFxyXG4gICAgICAgICAgICAgICAgICAgICdsaW5lLXdpZHRoJzogNSxcclxuICAgICAgICAgICAgICAgICAgICAnbGluZS1vcGFjaXR5JzogLjhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMobWF4Q29vcmRzUGF0aCwge3BhZGRpbmc6IDEwMH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIEFjdGl2aXR5TWFwQW5pbWF0ZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSAncGsuZXlKMUlqb2lZMkZ5ZEcxaGJuVnpaWElpTENKaElqb2lZMnA1YUhWeU5IQjJNRE51ZHpObmJuSmlhR1Z0Y1dKMk9DSjkuMlVQREtuU1pSTndOUjFJVGxaUUVBQSc7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiAnbWFwJyxcclxuICAgICAgICAgICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L291dGRvb3JzLXYxMScsXHJcbiAgICAgICAgICAgIGNlbnRlcjogWyAtODEuMTEwNTE1NTk0NDgyNDIsIDIyLjUwODkwOTU2NTIwNTI0XSxcclxuICAgICAgICAgICAgem9vbTogNVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmdlb2pzb24gPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdMaW5lU3RyaW5nJyxcclxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTg0LjgyNTQzOTQ1MzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjg2MTQ5ODczNDM3MjU2N1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODQuNjQ5NjU4MjAzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuOTYzNDI0OTM2ODQ0MjIzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04NC4yNjUxMzY3MTg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjkzMjg1NDczNjMzNTNcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTg0LjEzMzMwMDc4MTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMTE2MTc3MTQ3MjEwNjJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTg0LjA3ODM2OTE0MDYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjMyOTc1MjMwNDM3NjQ3M1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODMuODkxNjAxNTYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjQ5MjI1NzIyMDA4NTE4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04My43NDg3NzkyOTY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi42MDM4Njg4NDI4OTU3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04My41NTEwMjUzOTA2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi43MzU2NTY4NTIyMDY0OTZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgzLjM1MzI3MTQ4NDM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjgzNjk0NTkyMDk0Mzg1NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODMuMTk5NDYyODkwNjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuOTA3ODAzNDUxMDU4MzkyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04My4wODk1OTk2MDkzNzQ5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjk0ODI3Njg1Njg4MDg5NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODIuOTI0ODA0Njg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjk1ODM5MzMxODA4NjM0OFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODIuNzA1MDc4MTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuOTk4ODUxNTk0MTQyOTEzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04Mi40NDE0MDYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzLjAzOTI5Nzc0Nzc2OTcyNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODIuMjk4NTgzOTg0Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjMuMTIwMTUzNjIxNjk1NjE0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04Mi4xMjI4MDI3MzQzNzQ5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzLjE0MDM1OTk4Nzg4NjExOFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuOTkwOTY2Nzk2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjMuMTQwMzU5OTg3ODg2MTE4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS44ODExMDM1MTU2MjQ5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzLjEyMDE1MzYyMTY5NTYxNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuNzgyMjI2NTYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIzLjAyOTE4NzM0Njc0NDU5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS43MzgyODEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjk0ODI3Njg1Njg4MDg5NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuNjcyMzYzMjgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi44NTcxOTQ3MDA5Njk2MzZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjYwNjQ0NTMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi43MzU2NTY4NTIyMDY0OTZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjU4NDQ3MjY1NjI0OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNTUzMTQ3NDc4NDAzMTk0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MS41NzM0ODYzMjgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi40MTEwMjg1MjE1NTg3MDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjQzMDY2NDA2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4zMDk0MjU4NDEyMDAxOVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODEuMzA5ODE0NDUzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMjg5MDk2NDE4NzIzMDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgxLjA3OTEwMTU2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4zNTAwNzU4MDYxMjQ4NjdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjk0NzI2NTYyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjM1MDA3NTgwNjEyNDg2N1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtODAuODcwMzYxMzI4MTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzM5OTE0NDI1NTYyMDMyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC44MTU0Mjk2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzE5NTg5NDQyODMzOTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjcwNTU2NjQwNjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMjg5MDk2NDE4NzIzMDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjU5NTcwMzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjI1ODU5Njc0MDk3NTcyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC40ODU4Mzk4NDM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjE5NzU3NzQ1MzM1MTA0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC4yODgwODU5Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMDk1ODE5NzE3ODA3NjlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTgwLjIyMjE2Nzk2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMDc1NDU5MzUxNTQ2ODU4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC04MC4xMTIzMDQ2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMDQ0OTEzMzAwMjQ1NjlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc5Ljk1ODQ5NjA5Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMDg1NjM5OTAxNjUwMzI4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OS43NjA3NDIxODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMjY4NzY0MDM5MDczOTY4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OS41MzAwMjkyOTY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi40MTEwMjg1MjE1NTg3MDZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc5LjM3NjIyMDcwMzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjQyMTE4NDcxMDMzMTg1OFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzkuMTIzNTM1MTU2MjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4zMjk3NTIzMDQzNzY0NzNcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4Ljk0Nzc1MzkwNjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzcwMzk2MzQ0MzIwMDUzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OC43NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjQ5MjI1NzIyMDA4NTE4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03OC42NTExMjMwNDY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi41NTMxNDc0Nzg0MDMxOTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4LjU1MjI0NjA5Mzc0OTk5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuNTEyNTU2OTU0MDUxNDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4LjM5ODQzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi41MDI0MDc0NTk0OTc3NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzguMjU1NjE1MjM0Mzc0OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi40MzEzNDAxNTYzNjA2MVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzguMTQ1NzUxOTUzMTI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzYwMjM2NDQ1Nzk5MzdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc4LjAyNDkwMjM0Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMjc4OTMwNTk4NDExODhcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3Ljg4MjA4MDA3ODEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyLjE1Njg4MzE4Njg2MDcwM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzcuODA1MTc1NzgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMi4wNjUyNzgwNjc3NjU4MlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzcuNjA3NDIxODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuOTAyMjc3OTY2NjY4NjRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3LjQ5NzU1ODU5Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuODQxMTA0NzQ5MDY1MDMyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ny4zNzY3MDg5ODQzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS43MzkwOTEyMTc3MTg1NzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3LjI1NTg1OTM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjY0NzIxNzA2NTM4NzgxN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzcuMTAyMDUwNzgxMjQ5OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMS41NjU1MDIwMjk3NDUzMzJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc3LjAxNDE2MDE1NjI1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuNDIyMzg5OTA1MjMxMzY2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ni45NDgyNDIxODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjEuMjg5Mzc0MzU1ODYwNDI0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ni44MDU0MTk5MjE4NzQ5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIxLjIyNzk0MTkwNTA1ODE1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ni43MDY1NDI5Njg3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjg5OTg3MTM0NzA3NjQyNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzYuNjczNTgzOTg0Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuNjIyNTAyMjU5MzQ0ODE3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03Ni41NDE3NDgwNDY4NzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC40OTkwNjQyODM0MTMwNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzYuNDIwODk4NDM3NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjM1NDkyNzU4NDExNzY4MlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzYuMTkwMTg1NTQ2ODc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMjkzMTEzNDQ3NTQ0MTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc1Ljk4MTQ0NTMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4yMjA5NjU3Nzk1MjIzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03NS44NjA1OTU3MDMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4xMTc4Mzk2MzA0OTE2MzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc1LjYyOTg4MjgxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4wNjYyNTEwMjQzMjYzMDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc1LjM2NjIxMDkzNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4wNjYyNTEwMjQzMjYzMDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTc1LjA1ODU5Mzc1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAuMTE3ODM5NjMwNDkxNjM0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC03NC44MTY4OTQ1MzEyNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLjE3OTcyMzUwMjc2NTE1M1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzQuNDY1MzMyMDMxMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4yNDE1ODI4MTk1NDIyMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtNzQuMjAxNjYwMTU2MjQ5OTksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMC4yNjIxOTcxMjQyNDY1MzRcclxuICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtlciA9IG5ldyBtYXBib3hnbC5NYXJrZXIoKVxyXG4gICAgICAgICAgICAuc2V0TG5nTGF0KFsgLTgxLjExMDUxNTU5NDQ4MjQyLCAyMi41MDg5MDk1NjUyMDUyNF0pO1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5tYXAub24oJ2xvYWQnLCB0aGlzLmluaXQuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIC8vIHRoaXMubWFya2VyLmFkZFRvKHRoaXMubWFwKTtcclxuICAgICAgICAvLyB0aGlzLmdlb0pzb24odGhpcy5nZW9qc29uKS5hZGRUbyh0aGlzLm1hcCk7XHJcbiAgICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICAgICAgLy8gd2hpbGUgKHRoaXMuc3RlcCA8IHRoaXMuZ2VvanNvbi5jb29yZGluYXRlcy5sZW5ndGgpXHJcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQodGhpcy50aWNrLCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRpY2soKSB7XHJcblxyXG4gICAgICAgIHRoaXMubWFya2VyLnNldExuZ0xhdCh0aGlzLmdlb2pzb24uY29vcmRpbmF0ZXNbdGhpcy5zdGVwXSlcclxuICAgICAgICAgICAgLmFkZFRvKHRoaXMubWFwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGVwKys7XHJcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnRpY2suYmluZCh0aGlzKSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge0FjdGl2aXR5TWFwQW5pbWF0ZSwgQWN0aXZpdHlNYXB9O1xyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHNsb3BweUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Nsb3BweS1hcnJheS1tZXRob2QnKTtcblxudmFyIHRlc3QgPSBbXTtcbnZhciBuYXRpdmVTb3J0ID0gdGVzdC5zb3J0O1xuXG4vLyBJRTgtXG52YXIgRkFJTFNfT05fVU5ERUZJTkVEID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQodW5kZWZpbmVkKTtcbn0pO1xuLy8gVjggYnVnXG52YXIgRkFJTFNfT05fTlVMTCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdGVzdC5zb3J0KG51bGwpO1xufSk7XG4vLyBPbGQgV2ViS2l0XG52YXIgU0xPUFBZX01FVEhPRCA9IHNsb3BweUFycmF5TWV0aG9kKCdzb3J0Jyk7XG5cbnZhciBGT1JDRUQgPSBGQUlMU19PTl9VTkRFRklORUQgfHwgIUZBSUxTX09OX05VTEwgfHwgU0xPUFBZX01FVEhPRDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zb3J0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb3J0XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbikge1xuICAgIHJldHVybiBjb21wYXJlZm4gPT09IHVuZGVmaW5lZFxuICAgICAgPyBuYXRpdmVTb3J0LmNhbGwodG9PYmplY3QodGhpcykpXG4gICAgICA6IG5hdGl2ZVNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSwgYUZ1bmN0aW9uKGNvbXBhcmVmbikpO1xuICB9XG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZXItYWdlbnQnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICAodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJyA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9