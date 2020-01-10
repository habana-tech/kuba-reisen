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

/***/ })

},[["./assets/scripts/bucket_list.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~activity~bucket_list"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9idWNrZXRfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2J1Y2tldF9saXN0L19sb2FkX21hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2J1Y2tldF9saXN0LnNjc3MiXSwibmFtZXMiOlsicmVxdWlyZSIsIkJ1Y2tldExpc3QiLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwibWFwIiwiTWFwIiwiY29udGFpbmVyIiwic3R5bGUiLCJjZW50ZXIiLCJ6b29tIiwibWluWm9vbSIsIm1heFpvb20iLCJwaXRjaCIsInNjcm9sbFpvb20iLCJkaXNhYmxlIiwicG9pbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicG9pbnRzRGF0YSIsImFjdGl2ZU1hcmtlciIsImFjdGl2ZUNpcmNsZSIsImFjdGl2ZVBvaW50IiwiZXZlbnRzIiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93Iiwib25zY3JvbGwiLCJpIiwibGVuZ3RoIiwiZWxlbWVudCIsImlzRWxlbWVudE9uU2NyZWVuIiwicHJvcHMiLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJzZXRBY3RpdmVDaGFwdGVyIiwiaWQiLCJnZW9qc29uIiwiYWRkTGF5ZXIiLCJwb2ludCIsInJlbW92ZUxheWVyIiwiYWRkQ2lyY2xlIiwidG9TdHJpbmciLCJyZW1vdmUiLCJmbHlUbyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImlubmVySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOztBQUNBQSxtQkFBTyxDQUFDLG9FQUFELENBQVA7O0FBRUEsSUFBSUMscUVBQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOztJQUVNQSxVOzs7QUFDRix3QkFBYTtBQUFBOztBQUNUQyxvREFBUSxDQUFDQyxXQUFULEdB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aUMsUUFBakM7QUFDQSxXQUFLVCxNQUFMLENBQVksS0FBS00sV0FBakIsRUFBOEJFLFNBQTlCLENBQXdDb0IsTUFBeEMsQ0FBK0MsUUFBL0M7QUFDQSxXQUFLdkMsR0FBTCxDQUFTd0MsS0FBVCxDQUFlYixLQUFmO0FBRUEsV0FBS1YsV0FBTCxHQUFtQmtCLEtBQW5CO0FBQ0EsV0FBS25CLFlBQUwsR0FBcUIsWUFBVVcsS0FBSyxDQUFDdkIsTUFBTixDQUFha0MsUUFBYixFQUEvQjtBQUNIOzs7c0NBRWlCYixPLEVBQVM7QUFDdkIsVUFBSWdCLE1BQU0sR0FBR2hCLE9BQU8sQ0FBQ2lCLHFCQUFSLEVBQWI7QUFDQSxhQUFPRCxNQUFNLENBQUNFLEdBQVAsR0FBYSxDQUFiLElBQW1CRixNQUFNLENBQUNFLEdBQVAsR0FBYXRCLE1BQU0sQ0FBQ3VCLFdBQVAsR0FBcUIsQ0FBNUQ7QUFDSDs7Ozs7O0FBR1UvQyx5RUFBZixFOzs7Ozs7Ozs7OztBQy9HQSx1QyIsImZpbGUiOiJidWNrZXRfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWNrZXRMaXN0IGZyb20gJy4vbW9kdWxlcy9idWNrZXRfbGlzdC9fbG9hZF9tYXAnO1xyXG5yZXF1aXJlKCcuLi9zdHlsZXMvYnVja2V0X2xpc3Quc2NzcycpO1xyXG5cclxubmV3IEJ1Y2tldExpc3QoKTsiLCJpbXBvcnQgbWFwYm94Z2wgZnJvbSAnbWFwYm94LWdsJztcclxuXHJcbmNsYXNzIEJ1Y2tldExpc3R7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gJ3BrLmV5SjFJam9pWTJGeWRHMWhiblZ6WlhJaUxDSmhJam9pWTJwNWFIVnlOSEIyTUROdWR6Tm5ibkppYUdWdGNXSjJPQ0o5LjJVUERLblNaUk53TlIxSVRsWlFFQUEnO1xyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJ21hcCcsXHJcbiAgICAgICAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9vdXRkb29ycy12MTEvP29wdGltaXplPXRydWUnLFxyXG4gICAgICAgICAgICBjZW50ZXI6IFstNzkuNzU2NTE0LCAyMi4wMjgxNDVdLFxyXG4gICAgICAgICAgICB6b29tOiA1LFxyXG4gICAgICAgICAgICBtaW5ab29tOjQsXHJcbiAgICAgICAgICAgIG1heFpvb206MTYsXHJcbiAgICAgICAgICAgIHBpdGNoOiAwLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1hcC5zY3JvbGxab29tLmRpc2FibGUoKTtcclxuICAgICAgICB0aGlzLnBvaW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idWNrZXQtbGlzdF9faXRlbXNfX2ZlYXR1cmVzIGgzJyk7XHJcbiAgICAgICAgdGhpcy5wb2ludHNEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1Y2tldC1saXN0X19pdGVtc19fZmVhdHVyZXMgc3Bhbi5NYXBNYXJrZXInKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVNYXJrZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ2lyY2xlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjdGl2ZVBvaW50ID0gMDtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLnBvaW50c1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgLy8gT24gZXZlcnkgc2Nyb2xsIGV2ZW50LCBjaGVjayB3aGljaCBlbGVtZW50IGlzIG9uIHNjcmVlblxyXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnBvaW50c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudE9uU2NyZWVuKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wb2ludHNEYXRhW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXAnKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcyA9IEpTT04ucGFyc2UocHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlQ2hhcHRlcihpLCBwcm9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZENpcmNsZShjZW50ZXIsIGlkKXtcclxuXHJcbiAgICAgICAgICAgIGxldCBnZW9qc29uID0ge1xyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZXNcIjogW3tcclxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJnZW9tZXRyeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlBvaW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29vcmRpbmF0ZXNcIjogY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGVsSWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJjaXJjbGVzXCIraWQsXHJcbiAgICAgICAgICAgICAgICBcInNvdXJjZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAnZ2VvanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBnZW9qc29uXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgICAgICAgICBcInBhaW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImNpcmNsZS1yYWRpdXNcIjogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGUtY29sb3JcIjogXCIjMDA3Y2JmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaXJjbGUtb3BhY2l0eVwiOiAwLjQ1LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2lyY2xlLXN0cm9rZS13aWR0aFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlQ2hhcHRlcihwb2ludCwgcHJvcHMpIHtcclxuICAgICAgICBpZiAocG9pbnQgPT09IHRoaXMuYWN0aXZlUG9pbnQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYWN0aXZlTWFya2VyICE9PSBudWxsKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmFjdGl2ZU1hcmtlci5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlQ2lyY2xlICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmFjdGl2ZUNpcmNsZSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuYWN0aXZlTWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcigpXHJcbiAgICAgICAgLy8gICAgIC5zZXRMbmdMYXQocHJvcHMuY2VudGVyKVxyXG4gICAgICAgIC8vICAgICAuYWRkVG8odGhpcy5tYXApO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENpcmNsZShwcm9wcy5jZW50ZXIsIHByb3BzLmNlbnRlci50b1N0cmluZygpKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMucG9pbnRzW3BvaW50XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLnBvaW50c1t0aGlzLmFjdGl2ZVBvaW50XS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLm1hcC5mbHlUbyhwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUG9pbnQgPSBwb2ludDtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNpcmNsZSA9ICBcImNpcmNsZXNcIitwcm9wcy5jZW50ZXIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0VsZW1lbnRPblNjcmVlbihlbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IGJvdW5kcyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIGJvdW5kcy50b3AgPiAwICAmJiBib3VuZHMudG9wIDwgd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVja2V0TGlzdDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==