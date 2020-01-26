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

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
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

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


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


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ })

},[["./assets/scripts/bucket_list.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~activity~bucket_list"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9idWNrZXRfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2J1Y2tldF9saXN0L19sb2FkX21hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2J1Y2tldF9saXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLnRvLXN0cmluZy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQnVja2V0TGlzdCIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJtYXAiLCJNYXAiLCJjb250YWluZXIiLCJzdHlsZSIsImNlbnRlciIsInpvb20iLCJtaW5ab29tIiwibWF4Wm9vbSIsInBpdGNoIiwic2Nyb2xsWm9vbSIsImRpc2FibGUiLCJwb2ludHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb2ludHNEYXRhIiwiYWN0aXZlTWFya2VyIiwiYWN0aXZlQ2lyY2xlIiwiYWN0aXZlUG9pbnQiLCJldmVudHMiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsImkiLCJsZW5ndGgiLCJlbGVtZW50IiwiaXNFbGVtZW50T25TY3JlZW4iLCJwcm9wcyIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsInNldEFjdGl2ZUNoYXB0ZXIiLCJpZCIsImdlb2pzb24iLCJhZGRMYXllciIsInBvaW50IiwicmVtb3ZlTGF5ZXIiLCJhZGRDaXJjbGUiLCJ0b1N0cmluZyIsInJlbW92ZSIsImZseVRvIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiaW5uZXJIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7O0FBQ0FBLG1CQUFPLENBQUMsb0VBQUQsQ0FBUDs7QUFFQSxJQUFJQyxxRUFBSixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7O0lBRU1BLFU7OztBQUNGLHdCQUFhO0FBQUE7O0FBQ1RDLG9EQUFRLENBQUNDLFdBQVQsR0FBdUIsZ0dBQXZCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLElBQUlGLGdEQUFRLENBQUNHLEdBQWIsQ0FBaUI7QUFDeEJDLGVBQVMsRUFBRSxLQURhO0FBRXhCQyxXQUFLLEVBQUUsb0RBRmlCO0FBR3hCQyxZQUFNLEVBQUUsQ0FBQyxDQUFDLFNBQUYsRUFBYSxTQUFiLENBSGdCO0FBSXhCQyxVQUFJLEVBQUUsQ0FKa0I7QUFLeEJDLGFBQU8sRUFBQyxDQUxnQjtBQU14QkMsYUFBTyxFQUFDLEVBTmdCO0FBT3hCQyxXQUFLLEVBQUU7QUFQaUIsS0FBakIsQ0FBWDtBQVVBLFNBQUtSLEdBQUwsQ0FBU1MsVUFBVCxDQUFvQkMsT0FBcEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0NBQTFCLENBQWQ7QUFDQSxTQUFLQyxVQUFMLEdBQWtCRixRQUFRLENBQUNDLGdCQUFULENBQTBCLDhDQUExQixDQUFsQjtBQUVBLFNBQUtFLFlBQUwsR0FBb0IsSUFBcEI7QUFD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RS9DO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsNkJBQTZCLDBCQUEwQixZQUFZLEVBQUU7QUFDMUc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsZUFBZTtBQUNyQiIsImZpbGUiOiJidWNrZXRfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWNrZXRMaXN0IGZyb20gJy4vbW9kdWxlcy9idWNrZXRfbGlzdC9fbG9hZF9tYXAnO1xyXG5yZXF1aXJlKCcuLi9zdHlsZXMvYnVja2V0X2xpc3Quc2NzcycpO1xyXG5cclxubmV3IEJ1Y2tldExpc3QoKTsiLCJpbXBvcnQgbWFwYm94Z2wgZnJvbSAnbWFwYm94LWdsJztcclxuXHJcbmNsYXNzIEJ1Y2tldExpc3R7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gJ3BrLmV5SjFJam9pWTJGeWRHMWhiblZ6WlhJaUxDSmhJam9pWTJwNWFIVnlOSEIyTUROdWR6Tm5ibkppYUdWdGNXSjJPQ0o5LjJVUERLblNaUk53TlIxSVRsWlFFQUEnO1xyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJ21hcCcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9vdXRkb29ycy12MTEvP29wdGltaXplPXRydWUnLFxyXG4gICAgICAgICAgICBjZW50ZXI6IFstNzkuNzU2NTE0LCAyMi4wMjgxNDVdLFxyXG4gICAgICAgICAgICB6b29tOiA1LFxyXG4gICAgICAgICAgICBtaW5ab29tOjQsXHJcbiAgICAgICAgICAgIG1heFpvb206MTYsXHJcbiAgICAgICAgICAgIHBpdGNoOiAwLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1hcC5zY3JvbGxab29tLmRpc2FibGUoKTtcclxuICAgICAgICB0aGlzLnBvaW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idWNrZXQtbGlzdF9faXRlbXNfX2ZlYXR1cmVzIGgzJyk7XHJcbiAgICAgICAgdGhpcy5wb2ludHNEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1Y2tldC1saXN0X19pdGVtc19fZmVhdHVyZXMgc3Bhbi5NYXBNYXJrZXInKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVNYXJrZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ2lyY2xlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGl2ZVBvaW50ID0gMDtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLnBvaW50c1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgLy8gT24gZXZlcnkgc2Nyb2xsIGV2ZW50LCBjaGVjayB3aGljaCBlbGVtZW50IGlzIG9uIHNjcmVlblxyXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnBvaW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudE9uU2NyZWVuKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wb2ludHNEYXRhW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXAnKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcyA9IEpTT04ucGFyc2UocHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlQ2hhcHRlcihpLCBwcm9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZENpcmNsZShjZW50ZXIsIGlkKXtcclxuXHJcbiAgICAgICAgICAgIGxldCBnZW9qc29uID0ge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZXNcIjogW3tcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJnZW9tZXRyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGVsSWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJjaXJjbGVzXCIraWQsXHJcbiAgICAgICAgICAgICAgICBcInNvdXJjZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnZ2VvanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBnZW9qc29uXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgICAgICAgICBcInBhaW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImNpcmNsZS1yYWRpdXNcIjogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGUtY29sb3JcIjogXCIjMDA3Y2JmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGUtb3BhY2l0eVwiOiAwLjQ1LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2lyY2xlLXN0cm9rZS13aWR0aFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlQ2hhcHRlcihwb2ludCwgcHJvcHMpIHtcclxuICAgICAgICBpZiAocG9pbnQgPT09IHRoaXMuYWN0aXZlUG9pbnQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYWN0aXZlTWFya2VyICE9PSBudWxsKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmFjdGl2ZU1hcmtlci5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlQ2lyY2xlICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmFjdGl2ZUNpcmNsZSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuYWN0aXZlTWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcigpXHJcbiAgICAgICAgLy8gICAgIC5zZXRMbmdMYXQocHJvcHMuY2VudGVyKVxyXG4gICAgICAgIC8vICAgICAuYWRkVG8odGhpcy5tYXApO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENpcmNsZShwcm9wcy5jZW50ZXIsIHByb3BzLmNlbnRlci50b1N0cmluZygpKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMucG9pbnRzW3BvaW50XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLnBvaW50c1t0aGlzLmFjdGl2ZVBvaW50XS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLm1hcC5mbHlUbyhwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUG9pbnQgPSBwb2ludDtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNpcmNsZSA9ICBcImNpcmNsZXNcIitwcm9wcy5jZW50ZXIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VsZW1lbnRPblNjcmVlbihlbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIGJvdW5kcy50b3AgPiAwICAmJiBib3VuZHMudG9wIDwgd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVja2V0TGlzdDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyB7fS50b1N0cmluZyA6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS5mbGFnc2AgZ2V0dGVyIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXQtcmVnZXhwLnByb3RvdHlwZS5mbGFnc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LmRvdEFsbCkgcmVzdWx0ICs9ICdzJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG52YXIgSU5WQUxJRF9EQVRFID0gJ0ludmFsaWQgRGF0ZSc7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBuYXRpdmVEYXRlVG9TdHJpbmcgPSBEYXRlUHJvdG90eXBlW1RPX1NUUklOR107XG52YXIgZ2V0VGltZSA9IERhdGVQcm90b3R5cGUuZ2V0VGltZTtcblxuLy8gYERhdGUucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAobmV3IERhdGUoTmFOKSArICcnICE9IElOVkFMSURfREFURSkge1xuICByZWRlZmluZShEYXRlUHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciB2YWx1ZSA9IGdldFRpbWUuY2FsbCh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IG5hdGl2ZURhdGVUb1N0cmluZy5jYWxsKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cbiIsInZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtdG8tc3RyaW5nJyk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcbmlmICghVE9fU1RSSU5HX1RBR19TVVBQT1JUKSB7XG4gIHJlZGVmaW5lKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIHRvU3RyaW5nLCB7IHVuc2FmZTogdHJ1ZSB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZmxhZ3MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzJyk7XG5cbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XG52YXIgbmF0aXZlVG9TdHJpbmcgPSBSZWdFeHBQcm90b3R5cGVbVE9fU1RSSU5HXTtcblxudmFyIE5PVF9HRU5FUklDID0gZmFpbHMoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmF0aXZlVG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxudmFyIElOQ09SUkVDVF9OQU1FID0gbmF0aXZlVG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkc7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbmlmIChOT1RfR0VORVJJQyB8fCBJTkNPUlJFQ1RfTkFNRSkge1xuICByZWRlZmluZShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgdmFyIHAgPSBTdHJpbmcoUi5zb3VyY2UpO1xuICAgIHZhciByZiA9IFIuZmxhZ3M7XG4gICAgdmFyIGYgPSBTdHJpbmcocmYgPT09IHVuZGVmaW5lZCAmJiBSIGluc3RhbmNlb2YgUmVnRXhwICYmICEoJ2ZsYWdzJyBpbiBSZWdFeHBQcm90b3R5cGUpID8gZmxhZ3MuY2FsbChSKSA6IHJmKTtcbiAgICByZXR1cm4gJy8nICsgcCArICcvJyArIGY7XG4gIH0sIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==