(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["destination"],{

/***/ "./assets/scripts/destination.js":
/*!***************************************!*\
  !*** ./assets/scripts/destination.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_destinations_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/destinations.scss */ "./assets/styles/destinations.scss");
/* harmony import */ var _styles_destinations_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_destinations_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_activity_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/activity/_gallery */ "./assets/scripts/modules/activity/_gallery.js");


new _modules_activity_gallery__WEBPACK_IMPORTED_MODULE_1__["default"]('.gallery');

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

/***/ "./assets/styles/destinations.scss":
/*!*****************************************!*\
  !*** ./assets/styles/destinations.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/scripts/destination.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~destination"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9kZXN0aW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FjdGl2aXR5L19nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvZGVzdGluYXRpb25zLnNjc3MiXSwibmFtZXMiOlsiR2FsbGVyeSIsInNlbGVjdG9yIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGlzdGVuZXIiLCJTd2lwZUxpc3RlbmVyIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWN0aXZlUG9zIiwiaW5pdCIsImFycm93cyIsImFkZEFycm93cyIsImFycm93UHJldiIsImFycm93TmV4dCIsImV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2IiwiYmluZCIsIm5leHQiLCJlIiwiZGlyZWN0aW9ucyIsImRldGFpbCIsImxlZnQiLCJyaWdodCIsImZvckVhY2giLCJpbWFnZSIsImluZGV4IiwiZGlzcGxhY2VtZW50Iiwic2V0QXR0cmlidXRlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwibGVuZ3RoIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBLElBQUlBLGlFQUFKLENBQVksVUFBWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7O0lBRU1BLE87OztBQUNGLG1CQUFZQyxRQUFaLEVBQXFCO0FBQUE7O0FBQ2pCLFNBQUtDLFNBQUwsR0FBaUJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkgsUUFBdkIsQ0FBakI7QUFDQSxTQUFLSSxRQUFMLEdBQWdCQyxxREFBYSxDQUFDLEtBQUtKLFNBQU4sQ0FBN0I7QUFDQSxTQUFLSyxLQUFMLEdBQWFKLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEJQLFFBQVEsR0FBQyxp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RyxDQUFDRCxLQUFLLEdBQUcsTUFBSSxDQUFDbEIsU0FBYixHQUF5QixDQUExQixJQUE2QixHQUFoRDtBQUNBMEIsWUFBSSxDQUFDTixZQUFMLENBQWtCLE9BQWxCLEVBQTJCLDJCQUEyQkQsWUFBM0IsR0FBMEMsS0FBckU7QUFDSCxPQUpEO0FBTUEsV0FBS25CLFNBQUwsSUFBa0IsQ0FBbEI7QUFFSDs7Ozs7O0FBR1VULHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDeEZBLHVDIiwiZmlsZSI6ImRlc3RpbmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZGVzdGluYXRpb25zLnNjc3MnO1xyXG5cclxuaW1wb3J0IEdhbGxlcnkgZnJvbSBcIi4vbW9kdWxlcy9hY3Rpdml0eS9fZ2FsbGVyeVwiO1xyXG5cclxubmV3IEdhbGxlcnkoJy5nYWxsZXJ5Jyk7IiwiaW1wb3J0IFN3aXBlTGlzdGVuZXIgZnJvbSAnc3dpcGUtbGlzdGVuZXInO1xyXG5cclxuY2xhc3MgR2FsbGVyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcil7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVyID0gU3dpcGVMaXN0ZW5lcih0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IrJyAuZ2FsbGVyeV9faXRlbScpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVBvcyA9IDA7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB0aGlzLmFycm93cyA9IHRoaXMuYWRkQXJyb3dzKCk7XHJcbiAgICAgICAgdGhpcy5hcnJvd1ByZXYgPSB0aGlzLmFycm93c1swXTtcclxuICAgICAgICB0aGlzLmFycm93TmV4dCA9IHRoaXMuYXJyb3dzWzFdO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmFycm93UHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJldi5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5hcnJvd05leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm5leHQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSBlLmRldGFpbC5kaXJlY3Rpb25zO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbnMubGVmdClcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbnMucmlnaHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXYoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgLy8gdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdoZWlnaHQ6ICcrdGhpcy5pbWFnZXNbMF0uY2xpZW50SGVpZ2h0KydweDsnKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgIGxldCBkaXNwbGFjZW1lbnQgPSBpbmRleCoxMDA7XHJcbiAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiICsgZGlzcGxhY2VtZW50ICsgXCIlKTtcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRBcnJvd3MoKXtcclxuICAgICAgICBsZXQgYXJyb3dQcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYXJyb3dQcmV2LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnlfX2Fycm93Jyk7XHJcbiAgICAgICAgYXJyb3dQcmV2LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnlfX2Fycm93LS1wcmV2Jyk7XHJcbiAgICAgICAgbGV0IGFycm93TmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFycm93TmV4dC5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdycpO1xyXG4gICAgICAgIGFycm93TmV4dC5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdy0tbmV4dCcpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd1ByZXYpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGFycm93TmV4dCk7XHJcblxyXG4gICAgICAgIHJldHVybiBbYXJyb3dQcmV2LCBhcnJvd05leHRdO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKXtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVQb3MgPT09IHRoaXMuaXRlbXMubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3MgPSAtMTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCk9PntcclxuXHJcbiAgICAgICAgICAgIGxldCBkaXNwbGFjZW1lbnQgPSAoaW5kZXggLSB0aGlzLmFjdGl2ZVBvcyAtIDEpKjEwMDtcclxuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGRpc3BsYWNlbWVudCArIFwiJSk7XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVBvcyArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXYoKXtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVQb3MgPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9zID0gdGhpcy5pdGVtcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpPT57XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gKGluZGV4IC0gdGhpcy5hY3RpdmVQb3MgKyAxKSoxMDA7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIgKyBkaXNwbGFjZW1lbnQgKyBcIiUpO1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQb3MgLT0gMTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==