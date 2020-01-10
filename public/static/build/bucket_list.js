(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bucket_list"],{

/***/ "./assets/scripts/bucket_list.js":
/*!***************************************!*\
  !*** ./assets/scripts/bucket_list.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_bucket_list_load_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/bucket_list/_load_map */ "./assets/scripts/modules/bucket_list/_load_map.js");


__webpack_require__(/*! ../styles/bucket_list.scss */ "./assets/styles/bucket_list.scss");

new _modules_bucket_list_load_map__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./assets/scripts/modules/bucket_list/_load_map.js":
/*!*********************************************************!*\
  !*** ./assets/scripts/modules/bucket_list/_load_map.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_5__);






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var BucketList =
/*#__PURE__*/
function () {
  function BucketList() {
    _classCallCheck(this, BucketList);

    mapbox_gl__WEBPACK_IMPORTED_MODULE_5___default.a.accessToken = 'pk.eyJ1IjoiY2FydG1hbnVzZXIiLCJhIjoiY2p5aHVyNHB2MDNudzNnbnJiaGVtcWJ2OCJ9.2UPDKnSZRNwNR1ITlZQEAA';
    this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_5___default.a.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v11/?optimize=true',
      center: [-79.756514, 22.028145],
      zoom: 5,
      minZoom: 4,
      maxZoom: 16,
      pitch: 0
    });
    this.map.scrollZoom.disable();
    this.points = document.querySelectorAll('.bucket-list__items__features h3');
    this.pointsData = document.querySelectorAll('.bucket-list__items__features span.MapMarker');
    this.activeMarker = null;
    this.activeCircle = null;
    this.activePoint = 0;
    this.events();
  }

  _createClass(BucketList, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.points[0].classList.add('active'); // On every scroll event, check which element is on screen

      window.onscroll = function () {
        for (var i = 0; i < _this.points.length; i++) {
          var element = _this.points[i];

          if (_this.isElementOnScreen(element)) {
            var props = _this.pointsData[i].getAttribute('data-map');

            props = JSON.parse(props);

            _this.setActiveChapter(i, props);

            break;
          }
        }
      };
    }
  }, {
    key: "addCircle",
    value: function addCircle(center, id) {
      var geojson = {
        "type": "FeatureCollection",
        "features": [{
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": center
          },
          "properties": {
            "modelId": 1
          }
        }]
      };
      this.map.addLayer({
        "id": "circles" + id,
        "source": {
          'type': 'geojson',
          'data': geojson
        },
        "type": "circle",
        "paint": {
          "circle-radius": 40,
          "circle-color": "#007cbf",
          "circle-opacity": 0.45,
          "circle-stroke-width": 0
        }
      });
    }
  }, {
    key: "setActiveChapter",
    value: function setActiveChapter(point, props) {
      if (point === this.activePoint) return; // if (this.activeMarker !== null)
      //     this.activeMarker.remove();

      if (this.activeCircle !== null) this.map.removeLayer(this.activeCircle); // this.activeMarker = new mapboxgl.Marker()
      //     .setLngLat(props.center)
      //     .addTo(this.map);

      this.addCircle(props.center, props.center.toString());
      this.points[point].classList.add('active');
      this.points[this.activePoint].classList.remove('active');
      this.map.flyTo(props);
      this.activePoint = point;
      this.activeCircle = "circles" + props.center.toString();
    }
  }, {
    key: "isElementOnScreen",
    value: function isElementOnScreen(element) {
      var bounds = element.getBoundingClientRect();
      return bounds.top > 0 && bounds.top < window.innerHeight / 2;
    }
  }]);

  return BucketList;
}();

/* harmony default export */ __webpack_exports__["default"] = (BucketList);

/***/ }),

/***/ "./assets/styles/bucket_list.scss":
/*!****************************************!*\
  !*** ./assets/styles/bucket_list.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/user-agent.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/user-agent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ })

},[["./assets/scripts/bucket_list.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~activity~bucket_list"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9idWNrZXRfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2J1Y2tldF9saXN0L19sb2FkX21hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2J1Y2tldF9saXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkJ1Y2tldExpc3QiLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwibWFwIiwiTWFwIiwiY29udGFpbmVyIiwic3R5bGUiLCJjZW50ZXIiLCJ6b29tIiwibWluWm9vbSIsIm1heFpvb20iLCJwaXRjaCIsInNjcm9sbFpvb20iLCJkaXNhYmxlIiwicG9pbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicG9pbnRzRGF0YSIsImFjdGl2ZU1hcmtlciIsImFjdGl2ZUNpcmNsZSIsImFjdGl2ZVBvaW50IiwiZXZlbnRzIiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93Iiwib25zY3JvbGwiLCJpIiwibGVuZ3RoIiwiZWxlbWVudCIsImlzRWxlbWVudE9uU2NyZWVuIiwicHJvcHMiLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJzZXRBY3RpdmVDaGFwdGVyIiwiaWQiLCJnZW9qc29uIiwiYWRkTGF5ZXIiLCJwb2ludCIsInJlbW92ZUxheWVyIiwiYWRkQ2lyY2xlIiwidG9TdHJpbmciLCJyZW1vdmUiLCJmbHlUbyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImlubmVySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOztBQUNBQSxtQkFBTyxDQUFDLG9FQUFELENBQVA7O0FBRUEsSUFBSUMscUVBQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOztJQUVNQSxVOzs7QUFDRix3QkFBYTtBQUFBOztBQUNUQyxvREFBUSxDQUFDQyxXQUFULEdBQXVCLGdHQUF2QjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxJQUFJRixnREFBUSxDQUFDRyxHQUFiLENBQWlCO0FBQ3hCQyxlQUFTLEVBQUUsS0FEYTtBQUV4QkMsV0FBSyxFQUFFLG9EQUZpQjtBQUd4QkMsWUFBTSxFQUFFLENBQUMsQ0FBQyxTQUFGLEVBQWEsU0FBYixDQUhnQjtBQUl4QkMsVUFBSSxFQUFFLENBSmtCO0FBS3hCQyxhQUFPLEVBQUMsQ0FMZ0I7QUFNeEJDLGFBQU8sRUFBQyxFQU5nQjtBQU94QkMsV0FBSyxFQUFFO0FBUGlCLEtBQWpCLENBQVg7QUFVQSxTQUFLUixHQUFMLENBQVNTLFVBQVQsQ0FBb0JDLE9BQXBCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtDQUExQixDQUFkO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkYsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQiw4Q0FBMUIsQ0FBbEI7QUFFQSxTQUFLRSxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxTQUFLQyxNQUFMO0FBRUg7Ozs7NkJBRU87QUFBQTs7QUFDSixXQUFLUCxNQUFMLENBQVksQ0FBWixFQUFlUSxTQUFmLENBQXlCQyxH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O0FBQ0E7QUFDQSxHQUFHLGdCQUFnQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekJhO0FBQ2IsNEJBQTRCLG1CQUFPLENBQUMscUdBQW9DO0FBQ3hFLGNBQWMsbUJBQU8sQ0FBQyx5RUFBc0I7O0FBRTVDO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkEsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDOztBQUU5RDtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNQQSxpQkFBaUIsbUJBQU8sQ0FBQyxtRkFBMkI7O0FBRXBEOzs7Ozs7Ozs7Ozs7QUNGQSw0QkFBNEIsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDeEUsZUFBZSxtQkFBTyxDQUFDLDJFQUF1QjtBQUM5QyxlQUFlLG1CQUFPLENBQUMsMkZBQStCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsZUFBZTtBQUNuRSIsImZpbGUiOiJidWNrZXRfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWNrZXRMaXN0IGZyb20gJy4vbW9kdWxlcy9idWNrZXRfbGlzdC9fbG9hZF9tYXAnO1xyXG5yZXF1aXJlKCcuLi9zdHlsZXMvYnVja2V0X2xpc3Quc2NzcycpO1xyXG5cclxubmV3IEJ1Y2tldExpc3QoKTsiLCJpbXBvcnQgbWFwYm94Z2wgZnJvbSAnbWFwYm94LWdsJztcclxuXHJcbmNsYXNzIEJ1Y2tldExpc3R7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gJ3BrLmV5SjFJam9pWTJGeWRHMWhiblZ6WlhJaUxDSmhJam9pWTJwNWFIVnlOSEIyTUROdWR6Tm5ibkppYUdWdGNXSjJPQ0o5LjJVUERLblNaUk53TlIxSVRsWlFFQUEnO1xyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJ21hcCcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9vdXRkb29ycy12MTEvP29wdGltaXplPXRydWUnLFxyXG4gICAgICAgICAgICBjZW50ZXI6IFstNzkuNzU2NTE0LCAyMi4wMjgxNDVdLFxyXG4gICAgICAgICAgICB6b29tOiA1LFxyXG4gICAgICAgICAgICBtaW5ab29tOjQsXHJcbiAgICAgICAgICAgIG1heFpvb206MTYsXHJcbiAgICAgICAgICAgIHBpdGNoOiAwLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1hcC5zY3JvbGxab29tLmRpc2FibGUoKTtcclxuICAgICAgICB0aGlzLnBvaW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idWNrZXQtbGlzdF9faXRlbXNfX2ZlYXR1cmVzIGgzJyk7XHJcbiAgICAgICAgdGhpcy5wb2ludHNEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1Y2tldC1saXN0X19pdGVtc19fZmVhdHVyZXMgc3Bhbi5NYXBNYXJrZXInKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVNYXJrZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ2lyY2xlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGl2ZVBvaW50ID0gMDtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLnBvaW50c1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgLy8gT24gZXZlcnkgc2Nyb2xsIGV2ZW50LCBjaGVjayB3aGljaCBlbGVtZW50IGlzIG9uIHNjcmVlblxyXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnBvaW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudE9uU2NyZWVuKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wb2ludHNEYXRhW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXAnKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcyA9IEpTT04ucGFyc2UocHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlQ2hhcHRlcihpLCBwcm9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZENpcmNsZShjZW50ZXIsIGlkKXtcclxuXHJcbiAgICAgICAgICAgIGxldCBnZW9qc29uID0ge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZXNcIjogW3tcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJnZW9tZXRyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGVsSWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJjaXJjbGVzXCIraWQsXHJcbiAgICAgICAgICAgICAgICBcInNvdXJjZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnZ2VvanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBnZW9qc29uXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgICAgICAgICBcInBhaW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImNpcmNsZS1yYWRpdXNcIjogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGUtY29sb3JcIjogXCIjMDA3Y2JmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGUtb3BhY2l0eVwiOiAwLjQ1LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2lyY2xlLXN0cm9rZS13aWR0aFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlQ2hhcHRlcihwb2ludCwgcHJvcHMpIHtcclxuICAgICAgICBpZiAocG9pbnQgPT09IHRoaXMuYWN0aXZlUG9pbnQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYWN0aXZlTWFya2VyICE9PSBudWxsKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmFjdGl2ZU1hcmtlci5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlQ2lyY2xlICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmFjdGl2ZUNpcmNsZSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuYWN0aXZlTWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcigpXHJcbiAgICAgICAgLy8gICAgIC5zZXRMbmdMYXQocHJvcHMuY2VudGVyKVxyXG4gICAgICAgIC8vICAgICAuYWRkVG8odGhpcy5tYXApO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENpcmNsZShwcm9wcy5jZW50ZXIsIHByb3BzLmNlbnRlci50b1N0cmluZygpKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMucG9pbnRzW3BvaW50XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLnBvaW50c1t0aGlzLmFjdGl2ZVBvaW50XS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLm1hcC5mbHlUbyhwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUG9pbnQgPSBwb2ludDtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNpcmNsZSA9ICBcImNpcmNsZXNcIitwcm9wcy5jZW50ZXIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VsZW1lbnRPblNjcmVlbihlbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIGJvdW5kcy50b3AgPiAwICAmJiBib3VuZHMudG9wIDwgd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVja2V0TGlzdDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyB7fS50b1N0cmluZyA6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCduYXZpZ2F0b3InLCAndXNlckFnZW50JykgfHwgJyc7XG4iLCJ2YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXRvLXN0cmluZycpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoIVRPX1NUUklOR19UQUdfU1VQUE9SVCkge1xuICByZWRlZmluZShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCB0b1N0cmluZywgeyB1bnNhZmU6IHRydWUgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9