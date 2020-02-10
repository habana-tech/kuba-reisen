(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact"],{

/***/ "./assets/scripts/contact.js":
/*!***********************************!*\
  !*** ./assets/scripts/contact.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_contact_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/contact.scss */ "./assets/styles/contact.scss");
/* harmony import */ var _styles_contact_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_contact_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_contact_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/contact/_slider */ "./assets/scripts/modules/contact/_slider.js");
/* harmony import */ var _modules_contact_interest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact/_interest */ "./assets/scripts/modules/contact/_interest.js");
/* harmony import */ var _modules_contact_send_contact_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact/_send_contact_form */ "./assets/scripts/modules/contact/_send_contact_form.js");
/* harmony import */ var _modules_contact_from_travel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact/_from_travel */ "./assets/scripts/modules/contact/_from_travel.js");





new _modules_contact_slider__WEBPACK_IMPORTED_MODULE_1__["default"]('contact_planing_selfCharacter');
new _modules_contact_slider__WEBPACK_IMPORTED_MODULE_1__["default"]('contact_planing_selfLuxury');
new _modules_contact_slider__WEBPACK_IMPORTED_MODULE_1__["default"]('contact_planing_selfConsider');
new _modules_contact_slider__WEBPACK_IMPORTED_MODULE_1__["default"]('contact_planing_travelDuration');
new _modules_contact_slider__WEBPACK_IMPORTED_MODULE_1__["default"]('contact_planing_travelBudget');
new _modules_contact_interest__WEBPACK_IMPORTED_MODULE_2__["default"]();
new _modules_contact_send_contact_form__WEBPACK_IMPORTED_MODULE_3__["default"]();
new _modules_contact_from_travel__WEBPACK_IMPORTED_MODULE_4__["default"]();

/***/ }),

/***/ "./assets/scripts/modules/contact/_from_travel.js":
/*!********************************************************!*\
  !*** ./assets/scripts/modules/contact/_from_travel.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FromTravel =
/*#__PURE__*/
function () {
  function FromTravel() {
    _classCallCheck(this, FromTravel);

    this.modalOverlay = document.querySelector('aside.from_travel_overlay');
    this.button = document.querySelector('.from_travel__action button');
    this.events();
  }

  _createClass(FromTravel, [{
    key: "events",
    value: function events() {
      if (this.button) this.button.addEventListener('click', this.closeModal.bind(this));
    }
  }, {
    key: "closeModal",
    value: function closeModal(e) {
      e.preventDefault();
      this.modalOverlay.classList.add('from_travel_overlay--no-visible');
    }
  }]);

  return FromTravel;
}();

/* harmony default export */ __webpack_exports__["default"] = (FromTravel);

/***/ }),

/***/ "./assets/scripts/modules/contact/_interest.js":
/*!*****************************************************!*\
  !*** ./assets/scripts/modules/contact/_interest.js ***!
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





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Interest =
/*#__PURE__*/
function () {
  function Interest() {
    _classCallCheck(this, Interest);

    this.interest = document.querySelectorAll('.interest');
    this.events();
    this.init();
  }

  _createClass(Interest, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.interest.forEach(function (interest) {
        interest.addEventListener('click', _this.toggleCheck.bind(_this));
      });
    }
  }, {
    key: "init",
    value: function init() {
      var interests = document.querySelectorAll('.travel-interest__options > div.interest');
      interests.forEach(function (interest) {
        var input = interest.querySelector('input[type=checkbox]');

        if (input.checked) {
          interest.classList.add('interest--checked');
          interest.querySelector('svg.heart').classList.add('heart--fill-green');
        }
      });
    }
  }, {
    key: "toggleCheck",
    value: function toggleCheck(e) {
      e.preventDefault();
      var interest = e.target;
      interest.classList.toggle('interest--checked');
      interest.querySelector('svg.heart').classList.toggle('heart--fill-green');
      var input = interest.querySelector('input[type=checkbox]');
      input.checked = interest.classList.contains('interest--checked');
    }
  }]);

  return Interest;
}();

/* harmony default export */ __webpack_exports__["default"] = (Interest);

/***/ }),

/***/ "./assets/scripts/modules/contact/_send_contact_form.js":
/*!**************************************************************!*\
  !*** ./assets/scripts/modules/contact/_send_contact_form.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var qs = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

var SendContactForm =
/*#__PURE__*/
function () {
  function SendContactForm() {
    _classCallCheck(this, SendContactForm);

    this.form = document.querySelector('form[name="contact_planing"]');
    this.url = this.form ? this.form.action : null;
    this.btnSend = document.querySelector('.btn.sendFormBtn');
    this.sendLoadingDots = document.querySelector('.loading_dots');
    this.formData = new URLSearchParams();
    this.events();
  }

  _createClass(SendContactForm, [{
    key: "events",
    value: function events() {
      this.btnSend.addEventListener('click', this.sendForm.bind(this));
    }
  }, {
    key: "isValidForm",
    value: function isValidForm() {
      return this.form.checkValidity();
    }
  }, {
    key: "collectData",
    value: function collectData() {
      var that = this;
      this.form.querySelectorAll("input[name], textarea, select").forEach(function (input) {
        if (input.type !== 'checkbox' || input.checked) that.formData.append(input.name, input.value);
      });
    }
  }, {
    key: "sendForm",
    value: function sendForm(e) {
      if (this.isValidForm()) {
        e.preventDefault();
        this.collectData();
        var that = this;
        var config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        };
        axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(this.url, this.formData, config).then(function (response) {
          // console.log(response);
          if (response.status === 200) that.showMessage("success");else that.showMessage("error");
        })["catch"](function (error) {
          that.showMessage("error"); // console.log(error);
        })["finally"](function () {
          that.sendLoadingDots.classList.remove("loading_dots--visible");
        });
        this.btnSend.classList.add("invisible");
        this.sendLoadingDots.classList.add("loading_dots--visible");
        this.form.querySelectorAll(".sendFormInfo").forEach(function (msg) {
          msg.classList.add("hidden");
        });
      }
    }
  }, {
    key: "showMessage",
    value: function showMessage(event) {
      var msg = document.querySelector(".sendFormInfo__" + event);

      if (msg) {
        msg.classList.remove("hidden");
        if (event === "error") this.btnSend.classList.remove("invisible");
      }
    }
  }]);

  return SendContactForm;
}();

/* harmony default export */ __webpack_exports__["default"] = (SendContactForm);

/***/ }),

/***/ "./assets/scripts/modules/contact/_slider.js":
/*!***************************************************!*\
  !*** ./assets/scripts/modules/contact/_slider.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.parse-int */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_4__);





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MakeSlider =
/*#__PURE__*/
function () {
  function MakeSlider(prefix) {
    _classCallCheck(this, MakeSlider);

    this.input = document.querySelector('#' + prefix);
    this.slider = document.querySelector('#' + prefix + '_container');
    this.span = document.querySelector('#' + prefix + '_value');
    this.labels = document.querySelector('#' + prefix + '_labels ul');
    this.labelsLength = this.labels.childElementCount;
    this.create();
    this.events();
  }

  _createClass(MakeSlider, [{
    key: "create",
    value: function create() {
      nouislider__WEBPACK_IMPORTED_MODULE_4___default.a.create(this.slider, {
        start: 0,
        step: 1,
        range: {
          min: 0,
          max: this.labelsLength - 1
        }
      });
    }
  }, {
    key: "events",
    value: function events() {
      this.slider.noUiSlider.on('update', this.updateSlider.bind(this));
    }
  }, {
    key: "updateSlider",
    value: function updateSlider(values) {
      var selectedItem = Number.parseInt(values[0]);
      this.input.value = selectedItem;
      this.span.innerHTML = this.labels.children.item(selectedItem).innerHTML;
    }
  }]);

  return MakeSlider;
}();

/* harmony default export */ __webpack_exports__["default"] = (MakeSlider);

/***/ }),

/***/ "./assets/styles/contact.scss":
/*!************************************!*\
  !*** ./assets/styles/contact.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/scripts/contact.js","runtime","vendors~activities~activity~app~bucket_list~contact~destination~faq~index","vendors~activities~app~contact","vendors~activities~contact","vendors~contact"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9jb250YWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvY29udGFjdC9fZnJvbV90cmF2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9jb250YWN0L19pbnRlcmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2NvbnRhY3QvX3NlbmRfY29udGFjdF9mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvY29udGFjdC9fc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvY29udGFjdC5zY3NzIl0sIm5hbWVzIjpbIk1ha2VTbGlkZXIiLCJJbnRlcmVzdCIsIlNlbmRDb250YWN0Rm9ybSIsIkZyb21UcmF2ZWwiLCJtb2RhbE92ZXJsYXkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b24iLCJldmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VNb2RhbCIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbnRlcmVzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbml0IiwiZm9yRWFjaCIsInRvZ2dsZUNoZWNrIiwiaW50ZXJlc3RzIiwiaW5wdXQiLCJjaGVja2VkIiwidGFyZ2V0IiwidG9nZ2xlIiwiY29udGFpbnMiLCJxcyIsInJlcXVpcmUiLCJmb3JtIiwidXJsIiwiYWN0aW9uIiwiYnRuU2VuZCIsInNlbmRMb2FkaW5nRG90cyIsImZvcm1EYXRhIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VuZEZvcm0iLCJjaGVja1ZhbGlkaXR5IiwidGhhdCIsInR5cGUiLCJhcHBlbmQiLCJuYW1lIiwidmFsdWUiLCJpc1ZhbGlkRm9ybSIsImNvbGxlY3REYXRhIiwiY29uZmlnIiwiaGVhZGVycyIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3IiLCJyZW1vdmUiLCJtc2ciLCJldmVudCIsInByZWZpeCIsInNsaWRlciIsInNwYW4iLCJsYWJlbHMiLCJsYWJlbHNMZW5ndGgiLCJjaGlsZEVsZW1lbnRDb3VudCIsImNyZWF0ZSIsIm5vVWlTbGlkZXIiLCJzdGFydCIsInN0ZXAiLCJyYW5nZSIsIm1pbiIsIm1heCIsIm9uIiwidXBkYXRlU2xpZGVyIiwidmFsdWVzIiwic2VsZWN0ZWRJdGVtIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJpbm5lckhUTUwiLCJjaGlsZHJlbiIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFJQSwrREFBSixDQUFlLCtCQUFmO0FBQ0EsSUFBSUEsK0RBQUosQ0FBZSw0QkFBZjtBQUNBLElBQUlBLCtEQUFKLENBQWUsOEJBQWY7QUFDQSxJQUFJQSwrREFBSixDQUFlLGdDQUFmO0FBQ0EsSUFBSUEsK0RBQUosQ0FBZSw4QkFBZjtBQUVBLElBQUlDLGlFQUFKO0FBQ0EsSUFBSUMsMEVBQUo7QUFDQSxJQUFJQyxvRUFBSixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2hCTUEsVTs7O0FBQ0Ysd0JBQWE7QUFBQTs7QUFDVCxTQUFLQyxZQUFMLEdBQW9CQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsMkJBQXZCLENBQXBCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsNkJBQXZCLENBQWQ7QUFFQSxTQUFLRSxNQUFMO0FBQ0g7Ozs7NkJBRU87QUFDSixVQUFHLEtBQUtELE1BQVIsRUFDSSxLQUFLQSxNQUFMLENBQVlFLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLEtBQUtDLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQXRDO0FBQ1A7OzsrQkFFVUMsQyxFQUFFO0FBQ1RBLE9B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YUFBSyxFQUFFLENBRG9CO0FBRTNCQyxZQUFJLEVBQUUsQ0FGcUI7QUFHM0JDLGFBQUssRUFBRTtBQUNIQyxhQUFHLEVBQUUsQ0FERjtBQUVIQyxhQUFHLEVBQUUsS0FBS1IsWUFBTCxHQUFrQjtBQUZwQjtBQUhvQixPQUEvQjtBQVFIOzs7NkJBRU87QUFDSixXQUFLSCxNQUFMLENBQVlNLFVBQVosQ0FBdUJNLEVBQXZCLENBQTBCLFFBQTFCLEVBQW9DLEtBQUtDLFlBQUwsQ0FBa0I1RCxJQUFsQixDQUF1QixJQUF2QixDQUFwQztBQUNIOzs7aUNBRWE2RCxNLEVBQVE7QUFDbEIsVUFBSUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JILE1BQU0sQ0FBQyxDQUFELENBQXRCLENBQW5CO0FBQ0EsV0FBS2xELEtBQUwsQ0FBV29CLEtBQVgsR0FBbUIrQixZQUFuQjtBQUNBLFdBQUtkLElBQUwsQ0FBVWlCLFNBQVYsR0FBc0IsS0FBS2hCLE1BQUwsQ0FBWWlCLFFBQVosQ0FBcUJDLElBQXJCLENBQTBCTCxZQUExQixFQUF3Q0csU0FBOUQ7QUFDSDs7Ozs7O0FBR1U1RSx5RUFBZixFOzs7Ozs7Ozs7OztBQ3JDQSx1QyIsImZpbGUiOiJjb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvY29udGFjdC5zY3NzJztcclxuXHJcbmltcG9ydCBNYWtlU2xpZGVyIGZyb20gXCIuL21vZHVsZXMvY29udGFjdC9fc2xpZGVyXCI7XHJcbmltcG9ydCBJbnRlcmVzdCBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhY3QvX2ludGVyZXN0XCI7XHJcbmltcG9ydCBTZW5kQ29udGFjdEZvcm0gZnJvbSBcIi4vbW9kdWxlcy9jb250YWN0L19zZW5kX2NvbnRhY3RfZm9ybVwiO1xyXG5pbXBvcnQgRnJvbVRyYXZlbCBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhY3QvX2Zyb21fdHJhdmVsXCI7XHJcblxyXG5cclxubmV3IE1ha2VTbGlkZXIoJ2NvbnRhY3RfcGxhbmluZ19zZWxmQ2hhcmFjdGVyJyk7XHJcbm5ldyBNYWtlU2xpZGVyKCdjb250YWN0X3BsYW5pbmdfc2VsZkx1eHVyeScpO1xyXG5uZXcgTWFrZVNsaWRlcignY29udGFjdF9wbGFuaW5nX3NlbGZDb25zaWRlcicpO1xyXG5uZXcgTWFrZVNsaWRlcignY29udGFjdF9wbGFuaW5nX3RyYXZlbER1cmF0aW9uJyk7XHJcbm5ldyBNYWtlU2xpZGVyKCdjb250YWN0X3BsYW5pbmdfdHJhdmVsQnVkZ2V0Jyk7XHJcblxyXG5uZXcgSW50ZXJlc3QoKTtcclxubmV3IFNlbmRDb250YWN0Rm9ybSgpO1xyXG5uZXcgRnJvbVRyYXZlbCgpOyIsImNsYXNzIEZyb21UcmF2ZWx7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUuZnJvbV90cmF2ZWxfb3ZlcmxheScpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyb21fdHJhdmVsX19hY3Rpb24gYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCl7XHJcbiAgICAgICAgaWYodGhpcy5idXR0b24pXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1vZGFsLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kYWwoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMubW9kYWxPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2Zyb21fdHJhdmVsX292ZXJsYXktLW5vLXZpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJvbVRyYXZlbDsiLCJjbGFzcyBJbnRlcmVzdHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmludGVyZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludGVyZXN0Jyk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLmludGVyZXN0LmZvckVhY2goKGludGVyZXN0KSA9PiB7XHJcbiAgICAgICAgICAgIGludGVyZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVDaGVjay5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgbGV0IGludGVyZXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmF2ZWwtaW50ZXJlc3RfX29wdGlvbnMgPiBkaXYuaW50ZXJlc3QnKTtcclxuICAgICAgICBpbnRlcmVzdHMuZm9yRWFjaCgoaW50ZXJlc3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGlucHV0ID0gaW50ZXJlc3QucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuICAgICAgICAgICAgaWYoaW5wdXQuY2hlY2tlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJlc3QuY2xhc3NMaXN0LmFkZCgnaW50ZXJlc3QtLWNoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGludGVyZXN0LnF1ZXJ5U2VsZWN0b3IoJ3N2Zy5oZWFydCcpLmNsYXNzTGlzdC5hZGQoJ2hlYXJ0LS1maWxsLWdyZWVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDaGVjayhlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGludGVyZXN0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaW50ZXJlc3QuY2xhc3NMaXN0LnRvZ2dsZSgnaW50ZXJlc3QtLWNoZWNrZWQnKTtcclxuICAgICAgICBpbnRlcmVzdC5xdWVyeVNlbGVjdG9yKCdzdmcuaGVhcnQnKS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFydC0tZmlsbC1ncmVlbicpO1xyXG4gICAgICAgIGxldCBpbnB1dCA9IGludGVyZXN0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbiAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGludGVyZXN0LmNsYXNzTGlzdC5jb250YWlucygnaW50ZXJlc3QtLWNoZWNrZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50ZXJlc3Q7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuY29uc3QgcXMgPSByZXF1aXJlKCdxdWVyeXN0cmluZycpO1xyXG5cclxuY2xhc3MgU2VuZENvbnRhY3RGb3Jte1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwiY29udGFjdF9wbGFuaW5nXCJdJyk7XHJcbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLmZvcm0gPyB0aGlzLmZvcm0uYWN0aW9uIDogbnVsbDtcclxuICAgICAgICB0aGlzLmJ0blNlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLnNlbmRGb3JtQnRuJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kTG9hZGluZ0RvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZ19kb3RzJyk7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMuYnRuU2VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2VuZEZvcm0uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZEZvcm0oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtLmNoZWNrVmFsaWRpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsZWN0RGF0YSgpe1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWVdLCB0ZXh0YXJlYSwgc2VsZWN0XCIpLmZvckVhY2goZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihpbnB1dC50eXBlICE9PSAnY2hlY2tib3gnIHx8IGlucHV0LmNoZWNrZWQpXHJcbiAgICAgICAgICAgICAgICB0aGF0LmZvcm1EYXRhLmFwcGVuZChpbnB1dC5uYW1lLCBpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBzZW5kRm9ybShlKXtcclxuICAgICAgICBpZih0aGlzLmlzVmFsaWRGb3JtKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdERhdGEoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBheGlvcy5wb3N0KHRoaXMudXJsLCB0aGlzLmZvcm1EYXRhLCBjb25maWcpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd01lc3NhZ2UoXCJzdWNjZXNzXCIpOyAgICBcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd01lc3NhZ2UoXCJlcnJvclwiKTsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnNob3dNZXNzYWdlKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5maW5hbGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnNlbmRMb2FkaW5nRG90cy5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ19kb3RzLS12aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ0blNlbmQuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5zZW5kTG9hZGluZ0RvdHMuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdfZG90cy0tdmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VuZEZvcm1JbmZvXCIpLmZvckVhY2goZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgICAgICAgICAgbXNnLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93TWVzc2FnZShldmVudCl7XHJcbiAgICAgICAgbGV0IG1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VuZEZvcm1JbmZvX19cIiArIGV2ZW50KTtcclxuICAgICAgICBpZihtc2cpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtc2cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgaWYoZXZlbnQgPT09IFwiZXJyb3JcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuU2VuZC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbmRDb250YWN0Rm9ybTsiLCJpbXBvcnQgbm9VaVNsaWRlciBmcm9tICdub3Vpc2xpZGVyJztcclxuXHJcbmNsYXNzIE1ha2VTbGlkZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJlZml4KXtcclxuICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycrcHJlZml4KTtcclxuICAgICAgICB0aGlzLnNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnK3ByZWZpeCsnX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnK3ByZWZpeCsnX3ZhbHVlJyk7XHJcbiAgICAgICAgdGhpcy5sYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJytwcmVmaXgrJ19sYWJlbHMgdWwnKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbHNMZW5ndGggPSB0aGlzLmxhYmVscy5jaGlsZEVsZW1lbnRDb3VudDtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpe1xyXG4gICAgICAgIG5vVWlTbGlkZXIuY3JlYXRlKHRoaXMuc2xpZGVyLCB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiB0aGlzLmxhYmVsc0xlbmd0aC0xXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKXtcclxuICAgICAgICB0aGlzLnNsaWRlci5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCB0aGlzLnVwZGF0ZVNsaWRlci5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNsaWRlciAodmFsdWVzKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IE51bWJlci5wYXJzZUludCh2YWx1ZXNbMF0pO1xyXG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBzZWxlY3RlZEl0ZW07XHJcbiAgICAgICAgdGhpcy5zcGFuLmlubmVySFRNTCA9IHRoaXMubGFiZWxzLmNoaWxkcmVuLml0ZW0oc2VsZWN0ZWRJdGVtKS5pbm5lckhUTUxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFrZVNsaWRlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==