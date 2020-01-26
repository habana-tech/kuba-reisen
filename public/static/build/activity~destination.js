(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity~destination"],{

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

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/sloppy-array-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/sloppy-array-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/swipe-listener/dist/swipe-listener.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/swipe-listener/dist/swipe-listener.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},SwipeListener=function(a,b){if(a){'undefined'!=typeof window&&function(){function a(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent('CustomEvent');return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c}return'function'!=typeof window.CustomEvent&&void(a.prototype=window.Event.prototype,window.CustomEvent=a)}();b||(b={}),b=_extends({},{minHorizontal:10,minVertical:10,deltaHorizontal:3,deltaVertical:5,preventScroll:!1,lockAxis:!0,touch:!0,mouse:!0},b);var c=[],d=!1,e=function(){d=!0},f=function(a){d=!1,h(a)},g=function(a){d&&(a.changedTouches=[{clientX:a.clientX,clientY:a.clientY}],i(a))};b.mouse&&(a.addEventListener('mousedown',e),a.addEventListener('mouseup',f),a.addEventListener('mousemove',g));var h=function(d){var e=Math.abs,f=Math.max,g=Math.min;if(c.length){for(var h='function'==typeof TouchEvent&&d instanceof TouchEvent,j=[],k=[],l={top:!1,right:!1,bottom:!1,left:!1},m=0;m<c.length;m++)j.push(c[m].x),k.push(c[m].y);var i=j[0],n=j[j.length-1],o=k[0],p=k[k.length-1],q={x:[i,n],y:[o,p]};if(1<c.length){var r={detail:_extends({touch:h},q)},s=new CustomEvent('swiperelease',r);a.dispatchEvent(s)}var t=j[0]-j[j.length-1],u='none';u=0<t?'left':'right';var v,w=g.apply(Math,j),x=f.apply(Math,j);if(e(t)>=b.minHorizontal&&('left'==u?(v=e(w-j[j.length-1]),v<=b.deltaHorizontal&&(l.left=!0)):'right'==u?(v=e(x-j[j.length-1]),v<=b.deltaHorizontal&&(l.right=!0)):void 0),t=k[0]-k[k.length-1],u='none',u=0<t?'top':'bottom',w=g.apply(Math,k),x=f.apply(Math,k),e(t)>=b.minVertical&&('top'==u?(v=e(w-k[k.length-1]),v<=b.deltaVertical&&(l.top=!0)):'bottom'==u?(v=e(x-k[k.length-1]),v<=b.deltaVertical&&(l.bottom=!0)):void 0),(c=[],l.top||l.right||l.bottom||l.left)){b.lockAxis&&((l.left||l.right)&&e(i-n)>e(o-p)?l.top=l.bottom=!1:(l.top||l.bottom)&&e(i-n)<e(o-p)&&(l.left=l.right=!1));var y={detail:_extends({directions:l,touch:h},q)},z=new CustomEvent('swipe',y);a.dispatchEvent(z)}else{var A=new CustomEvent('swipecancel',{detail:_extends({touch:h},q)});a.dispatchEvent(A)}}},i=function(d){b.preventScroll&&d.preventDefault();var e=d.changedTouches[0];if(c.push({x:e.clientX,y:e.clientY}),1<c.length){var f=c[0].x,g=c[c.length-1].x,h=c[0].y,i=c[c.length-1].y,j={detail:{x:[f,g],y:[h,i],touch:'function'==typeof TouchEvent&&d instanceof TouchEvent}},k=new CustomEvent('swiping',j);a.dispatchEvent(k)}},j=!1;try{var k=Object.defineProperty({},'passive',{get:function(){j={passive:!b.preventScroll}}});window.addEventListener('testPassive',null,k),window.removeEventListener('testPassive',null,k)}catch(a){}return b.touch&&(a.addEventListener('touchmove',i,j),a.addEventListener('touchend',h)),{off:function(){a.removeEventListener('touchmove',i,j),a.removeEventListener('touchend',h),a.removeEventListener('mousedown',e),a.removeEventListener('mouseup',f),a.removeEventListener('mousemove',g)}}}}; true&&'undefined'!=typeof module.exports?(module.exports=SwipeListener,module.exports.default=SwipeListener): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return SwipeListener}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2FjdGl2aXR5L19nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2xvcHB5LWFycmF5LW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24uYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3aXBlLWxpc3RlbmVyL2Rpc3Qvc3dpcGUtbGlzdGVuZXIubWluLmpzIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJzZWxlY3RvciIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxpc3RlbmVyIiwiU3dpcGVMaXN0ZW5lciIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImFjdGl2ZVBvcyIsImluaXQiLCJhcnJvd3MiLCJhZGRBcnJvd3MiLCJhcnJvd1ByZXYiLCJhcnJvd05leHQiLCJldmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwicHJldiIsImJpbmQiLCJuZXh0IiwiZSIsImRpcmVjdGlvbnMiLCJkZXRhaWwiLCJsZWZ0IiwicmlnaHQiLCJmb3JFYWNoIiwiaW1hZ2UiLCJpbmRleCIsImRpc3BsYWNlbWVudCIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImxlbmd0aCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLE87OztBQUNGLG1CQUFZQyxRQUFaLEVBQXFCO0FBQUE7O0FBQ2pCLFNBQUtDLFNBQUwsR0FBaUJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkgsUUFBdkIsQ0FBakI7QUFDQSxTQUFLSSxRQUFMLEdBQWdCQyxxREFBYSxDQUFDLEtBQUtKLFNBQU4sQ0FBN0I7QUFDQSxTQUFLSyxLQUFMLEdBQWFKLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEJQLFFBQVEsR0FBQyxpQkFBbkMsQ0FBYjtBQUVBLFNBQUtRLFNBQUwsR0FBaUIsQ0FBakI7QUFHQSxTQUFLQyxJQUFMO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtDLFNBQUwsRUFBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0YsTUFBTCxDQUFZLENBQVosQ0FBakI7QUFDQSxTQUFLRyxTQUFMLEdBQWlCLEtBQUtILE1BQUwsQ0FBWSxDQUFaLENBQWpCO0FBRUEsU0FBS0ksTUFBTDtBQUNIOzs7OzZCQUVRO0FBQUE7O0FBQ0wsV0FBS0YsU0FBTCxDQUFlRyxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxLQUFLQyxJQUFMLENBQVVDLElBQVYsQ0FBZSxJQUFmLENBQXpDO0FBRUEsV0FBS0osU0FBTCxDQUFlRSxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxLQUFLRyxJQUFMLENBQVVELElBQVYsQ0FBZSxJQUFmLENBQXpDO0FBRUEsV0FBS2hCLFNBQUwsQ0FBZWMsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBQ0ksQ0FBRCxFQUFPO0FBQzVDLFlBQUlDLFVBQVUsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNELFVBQTFCO0FBRUEsWUFBSUEsVUFBVSxDQUFD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QWEsOEVBQThFLGtDQUFrQyxLQUFLLFdBQVcsa0NBQWtDLHFEQUFxRCxpQkFBaUIsZUFBZSxPQUFPLGlCQUFpQixRQUFRLElBQUkscUNBQXFDLG1CQUFtQixrQ0FBa0MscUJBQXFCLDBDQUEwQyw2Y0FBNmMsdUhBQXVILE9BQU8saUJBQWlCLHFCQUFxQixJQUFJLDhCQUE4QixtQkFBbUIsS0FBSyxxQ0FBcUMsaUJBQWlCLFFBQVEsSUFBSSxFQUFFLHFCQUFxQixlQUFlLG9DQUFvQywwQkFBMEIsV0FBVyx3QkFBd0IsY0FBYyw2REFBNkQsUUFBUSw4RUFBOEUsZ0NBQWdDLG9CQUFvQixNQUFNLElBQUksOEJBQThCLFlBQVksZUFBZSxHQUFHLDJCQUEyQixFQUFFLCtGQUErRixVQUFVLHdGQUF3RixlQUFlLDRMQUE0TCxLQUEwQix5R0FBeUcsS0FBcUMsQ0FBQyxpQ0FBTyxFQUFFLG1DQUFDLFdBQVcscUJBQXFCO0FBQUEsb0dBQUMsQ0FBQyxTQUFrQyxDIiwiZmlsZSI6ImFjdGl2aXR5fmRlc3RpbmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN3aXBlTGlzdGVuZXIgZnJvbSAnc3dpcGUtbGlzdGVuZXInO1xyXG5cclxuY2xhc3MgR2FsbGVyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcil7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVyID0gU3dpcGVMaXN0ZW5lcih0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IrJyAuZ2FsbGVyeV9faXRlbScpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVBvcyA9IDA7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB0aGlzLmFycm93cyA9IHRoaXMuYWRkQXJyb3dzKCk7XHJcbiAgICAgICAgdGhpcy5hcnJvd1ByZXYgPSB0aGlzLmFycm93c1swXTtcclxuICAgICAgICB0aGlzLmFycm93TmV4dCA9IHRoaXMuYXJyb3dzWzFdO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmFycm93UHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJldi5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5hcnJvd05leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm5leHQuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSBlLmRldGFpbC5kaXJlY3Rpb25zO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbnMubGVmdClcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbnMucmlnaHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXYoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgLy8gdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdoZWlnaHQ6ICcrdGhpcy5pbWFnZXNbMF0uY2xpZW50SGVpZ2h0KydweDsnKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpPT57XHJcbiAgICAgICAgICAgIGxldCBkaXNwbGFjZW1lbnQgPSBpbmRleCoxMDA7XHJcbiAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiICsgZGlzcGxhY2VtZW50ICsgXCIlKTtcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRBcnJvd3MoKXtcclxuICAgICAgICBsZXQgYXJyb3dQcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYXJyb3dQcmV2LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnlfX2Fycm93Jyk7XHJcbiAgICAgICAgYXJyb3dQcmV2LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnlfX2Fycm93LS1wcmV2Jyk7XHJcbiAgICAgICAgbGV0IGFycm93TmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFycm93TmV4dC5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdycpO1xyXG4gICAgICAgIGFycm93TmV4dC5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5X19hcnJvdy0tbmV4dCcpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd1ByZXYpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGFycm93TmV4dCk7XHJcblxyXG4gICAgICAgIHJldHVybiBbYXJyb3dQcmV2LCBhcnJvd05leHRdO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKXtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVQb3MgPT09IHRoaXMuaXRlbXMubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVQb3MgPSAtMTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCk9PntcclxuXHJcbiAgICAgICAgICAgIGxldCBkaXNwbGFjZW1lbnQgPSAoaW5kZXggLSB0aGlzLmFjdGl2ZVBvcyAtIDEpKjEwMDtcclxuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGRpc3BsYWNlbWVudCArIFwiJSk7XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVBvcyArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXYoKXtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVQb3MgPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUG9zID0gdGhpcy5pdGVtcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpPT57XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlzcGxhY2VtZW50ID0gKGluZGV4IC0gdGhpcy5hY3RpdmVQb3MgKyAxKSoxMDA7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXCIgKyBkaXNwbGFjZW1lbnQgKyBcIiUpO1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQb3MgLT0gMTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgc2xvcHB5QXJyYXlNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2xvcHB5LWFycmF5LW1ldGhvZCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gc2xvcHB5QXJyYXlNZXRob2QoJ2ZvckVhY2gnKSA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbn0gOiBbXS5mb3JFYWNoO1xuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgZmFjdG9yaWVzID0ge307XG5cbnZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoQywgYXJnc0xlbmd0aCwgYXJncykge1xuICBpZiAoIShhcmdzTGVuZ3RoIGluIGZhY3RvcmllcykpIHtcbiAgICBmb3IgKHZhciBsaXN0ID0gW10sIGkgPSAwOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSBsaXN0W2ldID0gJ2FbJyArIGkgKyAnXSc7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgZmFjdG9yaWVzW2FyZ3NMZW5ndGhdID0gRnVuY3Rpb24oJ0MsYScsICdyZXR1cm4gbmV3IEMoJyArIGxpc3Quam9pbignLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2FyZ3NMZW5ndGhdKEMsIGFyZ3MpO1xufTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLmJpbmQgfHwgZnVuY3Rpb24gYmluZCh0aGF0IC8qICwgLi4uYXJncyAqLykge1xuICB2YXIgZm4gPSBhRnVuY3Rpb24odGhpcyk7XG4gIHZhciBwYXJ0QXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgdmFyIGJvdW5kRnVuY3Rpb24gPSBmdW5jdGlvbiBib3VuZCgvKiBhcmdzLi4uICovKSB7XG4gICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kRnVuY3Rpb24gPyBjb25zdHJ1Y3QoZm4sIGFyZ3MubGVuZ3RoLCBhcmdzKSA6IGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9O1xuICBpZiAoaXNPYmplY3QoZm4ucHJvdG90eXBlKSkgYm91bmRGdW5jdGlvbi5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG4gIHJldHVybiBib3VuZEZ1bmN0aW9uO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICFtZXRob2QgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWxcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQnKTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG4kKHsgdGFyZ2V0OiAnRnVuY3Rpb24nLCBwcm90bzogdHJ1ZSB9LCB7XG4gIGJpbmQ6IGJpbmRcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXTtcbiAgdmFyIENvbGxlY3Rpb25Qcm90b3R5cGUgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0Jzt2YXIgX2V4dGVuZHM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWZvcih2YXIgZCBpbiBiPWFyZ3VtZW50c1tjXSxiKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLGQpJiYoYVtkXT1iW2RdKTtyZXR1cm4gYX0sU3dpcGVMaXN0ZW5lcj1mdW5jdGlvbihhLGIpe2lmKGEpeyd1bmRlZmluZWQnIT10eXBlb2Ygd2luZG93JiZmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxiKXtiPWJ8fHtidWJibGVzOiExLGNhbmNlbGFibGU6ITEsZGV0YWlsOnZvaWQgMH07dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7cmV0dXJuIGMuaW5pdEN1c3RvbUV2ZW50KGEsYi5idWJibGVzLGIuY2FuY2VsYWJsZSxiLmRldGFpbCksY31yZXR1cm4nZnVuY3Rpb24nIT10eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50JiZ2b2lkKGEucHJvdG90eXBlPXdpbmRvdy5FdmVudC5wcm90b3R5cGUsd2luZG93LkN1c3RvbUV2ZW50PWEpfSgpO2J8fChiPXt9KSxiPV9leHRlbmRzKHt9LHttaW5Ib3Jpem9udGFsOjEwLG1pblZlcnRpY2FsOjEwLGRlbHRhSG9yaXpvbnRhbDozLGRlbHRhVmVydGljYWw6NSxwcmV2ZW50U2Nyb2xsOiExLGxvY2tBeGlzOiEwLHRvdWNoOiEwLG1vdXNlOiEwfSxiKTt2YXIgYz1bXSxkPSExLGU9ZnVuY3Rpb24oKXtkPSEwfSxmPWZ1bmN0aW9uKGEpe2Q9ITEsaChhKX0sZz1mdW5jdGlvbihhKXtkJiYoYS5jaGFuZ2VkVG91Y2hlcz1be2NsaWVudFg6YS5jbGllbnRYLGNsaWVudFk6YS5jbGllbnRZfV0saShhKSl9O2IubW91c2UmJihhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsZSksYS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJyxmKSxhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsZykpO3ZhciBoPWZ1bmN0aW9uKGQpe3ZhciBlPU1hdGguYWJzLGY9TWF0aC5tYXgsZz1NYXRoLm1pbjtpZihjLmxlbmd0aCl7Zm9yKHZhciBoPSdmdW5jdGlvbic9PXR5cGVvZiBUb3VjaEV2ZW50JiZkIGluc3RhbmNlb2YgVG91Y2hFdmVudCxqPVtdLGs9W10sbD17dG9wOiExLHJpZ2h0OiExLGJvdHRvbTohMSxsZWZ0OiExfSxtPTA7bTxjLmxlbmd0aDttKyspai5wdXNoKGNbbV0ueCksay5wdXNoKGNbbV0ueSk7dmFyIGk9alswXSxuPWpbai5sZW5ndGgtMV0sbz1rWzBdLHA9a1trLmxlbmd0aC0xXSxxPXt4OltpLG5dLHk6W28scF19O2lmKDE8Yy5sZW5ndGgpe3ZhciByPXtkZXRhaWw6X2V4dGVuZHMoe3RvdWNoOmh9LHEpfSxzPW5ldyBDdXN0b21FdmVudCgnc3dpcGVyZWxlYXNlJyxyKTthLmRpc3BhdGNoRXZlbnQocyl9dmFyIHQ9alswXS1qW2oubGVuZ3RoLTFdLHU9J25vbmUnO3U9MDx0PydsZWZ0JzoncmlnaHQnO3ZhciB2LHc9Zy5hcHBseShNYXRoLGopLHg9Zi5hcHBseShNYXRoLGopO2lmKGUodCk+PWIubWluSG9yaXpvbnRhbCYmKCdsZWZ0Jz09dT8odj1lKHctaltqLmxlbmd0aC0xXSksdjw9Yi5kZWx0YUhvcml6b250YWwmJihsLmxlZnQ9ITApKToncmlnaHQnPT11Pyh2PWUoeC1qW2oubGVuZ3RoLTFdKSx2PD1iLmRlbHRhSG9yaXpvbnRhbCYmKGwucmlnaHQ9ITApKTp2b2lkIDApLHQ9a1swXS1rW2subGVuZ3RoLTFdLHU9J25vbmUnLHU9MDx0Pyd0b3AnOidib3R0b20nLHc9Zy5hcHBseShNYXRoLGspLHg9Zi5hcHBseShNYXRoLGspLGUodCk+PWIubWluVmVydGljYWwmJigndG9wJz09dT8odj1lKHcta1trLmxlbmd0aC0xXSksdjw9Yi5kZWx0YVZlcnRpY2FsJiYobC50b3A9ITApKTonYm90dG9tJz09dT8odj1lKHgta1trLmxlbmd0aC0xXSksdjw9Yi5kZWx0YVZlcnRpY2FsJiYobC5ib3R0b209ITApKTp2b2lkIDApLChjPVtdLGwudG9wfHxsLnJpZ2h0fHxsLmJvdHRvbXx8bC5sZWZ0KSl7Yi5sb2NrQXhpcyYmKChsLmxlZnR8fGwucmlnaHQpJiZlKGktbik+ZShvLXApP2wudG9wPWwuYm90dG9tPSExOihsLnRvcHx8bC5ib3R0b20pJiZlKGktbik8ZShvLXApJiYobC5sZWZ0PWwucmlnaHQ9ITEpKTt2YXIgeT17ZGV0YWlsOl9leHRlbmRzKHtkaXJlY3Rpb25zOmwsdG91Y2g6aH0scSl9LHo9bmV3IEN1c3RvbUV2ZW50KCdzd2lwZScseSk7YS5kaXNwYXRjaEV2ZW50KHopfWVsc2V7dmFyIEE9bmV3IEN1c3RvbUV2ZW50KCdzd2lwZWNhbmNlbCcse2RldGFpbDpfZXh0ZW5kcyh7dG91Y2g6aH0scSl9KTthLmRpc3BhdGNoRXZlbnQoQSl9fX0saT1mdW5jdGlvbihkKXtiLnByZXZlbnRTY3JvbGwmJmQucHJldmVudERlZmF1bHQoKTt2YXIgZT1kLmNoYW5nZWRUb3VjaGVzWzBdO2lmKGMucHVzaCh7eDplLmNsaWVudFgseTplLmNsaWVudFl9KSwxPGMubGVuZ3RoKXt2YXIgZj1jWzBdLngsZz1jW2MubGVuZ3RoLTFdLngsaD1jWzBdLnksaT1jW2MubGVuZ3RoLTFdLnksaj17ZGV0YWlsOnt4OltmLGddLHk6W2gsaV0sdG91Y2g6J2Z1bmN0aW9uJz09dHlwZW9mIFRvdWNoRXZlbnQmJmQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50fX0saz1uZXcgQ3VzdG9tRXZlbnQoJ3N3aXBpbmcnLGopO2EuZGlzcGF0Y2hFdmVudChrKX19LGo9ITE7dHJ5e3ZhciBrPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwncGFzc2l2ZScse2dldDpmdW5jdGlvbigpe2o9e3Bhc3NpdmU6IWIucHJldmVudFNjcm9sbH19fSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJyxudWxsLGspLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsbnVsbCxrKX1jYXRjaChhKXt9cmV0dXJuIGIudG91Y2gmJihhLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsaSxqKSxhLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJyxoKSkse29mZjpmdW5jdGlvbigpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJyxpLGopLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLGgpLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJyxlKSxhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLGYpLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJyxnKX19fX07J3VuZGVmaW5lZCchPXR5cGVvZiBtb2R1bGUmJid1bmRlZmluZWQnIT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/KG1vZHVsZS5leHBvcnRzPVN3aXBlTGlzdGVuZXIsbW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1Td2lwZUxpc3RlbmVyKTonZnVuY3Rpb24nPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxmdW5jdGlvbigpe3JldHVybiBTd2lwZUxpc3RlbmVyfSk6d2luZG93LlN3aXBlTGlzdGVuZXI9U3dpcGVMaXN0ZW5lcjsiXSwic291cmNlUm9vdCI6IiJ9