(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~activities"],{

/***/ "./node_modules/core-js/internals/create-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ "./node_modules/core-js/internals/wrapped-well-known-symbol.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/forced-string-html-method.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/forced-string-html-method.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/wrapped-well-known-symbol.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/wrapped-well-known-symbol.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var SLOPPY_METHOD = sloppyArrayMethod('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || SLOPPY_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/parse-int */ "./node_modules/core-js/internals/parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


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


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.link.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/forced-string-html-method */ "./node_modules/core-js/internals/forced-string-html-method.js");

// `String.prototype.link` method
// https://tc39.github.io/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ "./node_modules/core-js/internals/wrapped-well-known-symbol.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/text-clipper/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/text-clipper/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Void elements are elements without inner content,
// which close themselves regardless of trailing slash.
// E.g. both <br> and <br /> are self-closing.
var VOID_ELEMENTS = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];

// Block elements trigger newlines where they're inserted,
// and are always safe places for truncation.
var BLOCK_ELEMENTS = ["address", "article", "aside", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "section", "table", "tfoot", "ul", "video"];

var NEWLINE_CHAR_CODE = 10; // '\n'
var EXCLAMATION_CHAR_CODE = 33; // '!'
var DOUBLE_QUOTE_CHAR_CODE = 34; // '"'
var AMPERSAND_CHAR_CODE = 38; // '&'
var SINGLE_QUOTE_CHAR_CODE = 39; // '\''
var FORWARD_SLASH_CHAR_CODE = 47; // '/'
var SEMICOLON_CHAR_CODE = 59; // ';'
var TAG_OPEN_CHAR_CODE = 60; // '<'
var EQUAL_SIGN_CHAR_CODE = 61; // '='
var TAG_CLOSE_CHAR_CODE = 62; // '>'

var CHAR_OF_INTEREST_REGEX = /[<&\n\ud800-\udbff]/;

var TRIM_END_REGEX = /\s+$/;

/**
 * Clips a string to a maximum length. If the string exceeds the length, it is truncated and an
 * indicator (an ellipsis, by default) is appended.
 *
 * In detail, the clipping rules are as follows:
 * - The resulting clipped string may never contain more than maxLength characters. Examples:
 *   - clip("foo", 3) => "foo"
 *   - clip("foo", 2) => "f…"
 * - The indicator is inserted if and only if the string is clipped at any place other than a
 *   newline. Examples:
 *   - clip("foo bar", 5) => "foo …"
 *   - clip("foo\nbar", 5) => "foo"
 * - If the html option is true and valid HTML is inserted, the clipped output *must* also be valid
 *   HTML. If the input is not valid HTML, the result is undefined (not to be confused with JS'
 *   "undefined" type; some errors might be detected and result in an exception, but this is not
 *   guaranteed).
 *
 * @param string The string to clip.
 * @param maxLength The maximum length of the clipped string in number of characters.
 * @param options Optional options object. May contain the following property:
 *                breakWords - By default, we try to break only at word boundaries. Set to true if
 *                             this is undesired.
 *                html - Set to true if the string is HTML-encoded. If so, this method will take
 *                       extra care to make sure the HTML-encoding is correctly maintained.
 *                imageWeight - The amount of characters to assume for images. This is used
 *                              whenever an image is encountered, but also for SVG and MathML
 *                              content. Default: 2.
 *                indicator - The string to insert to indicate clipping. Default: "…".
 *                maxLines - Maximum amount of lines allowed. If given, the string will be
 *                           clipped either at the moment the maximum amount of characters is
 *                           exceeded or the moment maxLines newlines are discovered, whichever
 *                           comes first.
 *
 * @return The clipped string.
 */
module.exports = function clip(string, maxLength) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!string) {
        return "";
    }

    string = string.toString();

    if (options.indicator === undefined) {
        options.indicator = "\u2026";
    }

    return options.html ? clipHtml(string, maxLength, options) : clipPlainText(string, maxLength, options);
};

function clipHtml(string, maxLength, options) {
    var _options$imageWeight = options.imageWeight,
        imageWeight = _options$imageWeight === undefined ? 2 : _options$imageWeight,
        indicator = options.indicator,
        maxLines = options.maxLines;


    var numChars = indicator.length;
    var numLines = 1;

    var i = 0;
    var isUnbreakableContent = false;
    var tagStack = [];
    var length = string.length;

    for (; i < length; i++) {
        var rest = i ? string.slice(i) : string;
        var nextIndex = rest.search(CHAR_OF_INTEREST_REGEX);
        var nextBlockSize = nextIndex > -1 ? nextIndex : rest.length;
        i += nextBlockSize;

        if (!isUnbreakableContent) {
            numChars += nextBlockSize;
            if (numChars > maxLength) {
                i = Math.max(i - numChars + maxLength, 0);
                break;
            }
        }

        if (nextIndex === -1) {
            break;
        }

        var charCode = string.charCodeAt(i);
        if (charCode === TAG_OPEN_CHAR_CODE) {
            var nextCharCode = string.charCodeAt(i + 1);
            var isSpecialTag = nextCharCode === EXCLAMATION_CHAR_CODE;
            if (isSpecialTag && string.substr(i + 2, 2) === "--") {
                var commentEndIndex = string.indexOf("-->", i + 4) + 3;
                i = commentEndIndex - 1; // - 1 because the outer for loop will increment it
            } else if (isSpecialTag && string.substr(i + 2, 7) === "[CDATA[") {
                var cdataEndIndex = string.indexOf("]]>", i + 9) + 3;
                i = cdataEndIndex - 1; // - 1 because the outer for loop will increment it

                // note we don't count CDATA text for our character limit because it is only
                // allowed within SVG and MathML content, both of which we don't clip
            } else {
                // don't open new tags if we are currently at the limit
                if (numChars === maxLength && string.charCodeAt(i + 1) !== FORWARD_SLASH_CHAR_CODE) {
                    numChars++;
                    break;
                }

                var attributeQuoteCharCode = 0;
                var endIndex = i;
                var isAttributeValue = false;
                while (true /* eslint-disable-line */) {
                    endIndex++;
                    if (endIndex >= length) {
                        throw new Error("Invalid HTML: " + string);
                    }

                    var _charCode = string.charCodeAt(endIndex);
                    if (isAttributeValue) {
                        if (attributeQuoteCharCode) {
                            if (_charCode === attributeQuoteCharCode) {
                                isAttributeValue = false;
                            }
                        } else {
                            if (isWhiteSpace(_charCode)) {
                                isAttributeValue = false;
                            } else if (_charCode === TAG_CLOSE_CHAR_CODE) {
                                isAttributeValue = false;
                                endIndex--; // re-evaluate this character
                            }
                        }
                    } else if (_charCode === EQUAL_SIGN_CHAR_CODE) {
                        while (isWhiteSpace(string.charCodeAt(endIndex + 1))) {
                            endIndex++; // skip whitespace
                        }
                        isAttributeValue = true;

                        var firstAttributeCharCode = string.charCodeAt(endIndex + 1);
                        if (firstAttributeCharCode === DOUBLE_QUOTE_CHAR_CODE || firstAttributeCharCode === SINGLE_QUOTE_CHAR_CODE) {
                            attributeQuoteCharCode = firstAttributeCharCode;
                            endIndex++;
                        } else {
                            attributeQuoteCharCode = 0;
                        }
                    } else if (_charCode === TAG_CLOSE_CHAR_CODE) {
                        var isEndTag = string.charCodeAt(i + 1) === FORWARD_SLASH_CHAR_CODE;
                        var tagNameStartIndex = i + (isEndTag ? 2 : 1);
                        var tagNameEndIndex = Math.min(indexOfWhiteSpace(string, tagNameStartIndex), endIndex);
                        var tagName = string.slice(tagNameStartIndex, tagNameEndIndex).toLowerCase();
                        if (tagName.charCodeAt(tagName.length - 1) === FORWARD_SLASH_CHAR_CODE) {
                            // Remove trailing slash for self-closing tag names like <br/>
                            tagName = tagName.slice(0, tagName.length - 1);
                        }

                        if (isEndTag) {
                            var currentTagName = tagStack.pop();
                            if (currentTagName !== tagName) {
                                throw new Error("Invalid HTML: " + string);
                            }

                            if (tagName === "math" || tagName === "svg") {
                                isUnbreakableContent = tagStack.indexOf("math") !== -1 || tagStack.indexOf("svg") !== -1;
                                if (!isUnbreakableContent) {
                                    numChars += imageWeight;
                                    if (numChars > maxLength) {
                                        break;
                                    }
                                }
                            }

                            if (BLOCK_ELEMENTS.indexOf(tagName) !== -1) {
                                // All block level elements should trigger a new line
                                // when truncating
                                if (!isUnbreakableContent) {
                                    numLines++;
                                    if (numLines > maxLines) {
                                        // If we exceed the max lines, push the tag back onto the
                                        // stack so that it will be added back correctly after
                                        // truncation
                                        tagStack.push(tagName);
                                        break;
                                    }
                                }
                            }
                        } else if (VOID_ELEMENTS.indexOf(tagName) !== -1 || string.charCodeAt(endIndex - 1) === FORWARD_SLASH_CHAR_CODE) {
                            if (tagName === "br") {
                                numLines++;
                                if (numLines > maxLines) {
                                    break;
                                }
                            } else if (tagName === "img") {
                                numChars += imageWeight;
                                if (numChars > maxLength) {
                                    break;
                                }
                            }
                        } else {
                            tagStack.push(tagName);
                            if (tagName === "math" || tagName === "svg") {
                                isUnbreakableContent = true;
                            }
                        }

                        i = endIndex;
                        break;
                    }
                }
                if (numChars > maxLength || numLines > maxLines) {
                    break;
                }
            }
        } else if (charCode === AMPERSAND_CHAR_CODE) {
            var _endIndex = i + 1;
            var isCharacterReference = true;
            while (true /* eslint-disable-line */) {
                var _charCode2 = string.charCodeAt(_endIndex);
                if (isCharacterReferenceCharacter(_charCode2)) {
                    _endIndex++;
                } else if (_charCode2 === SEMICOLON_CHAR_CODE) {
                    break;
                } else {
                    isCharacterReference = false;
                    break;
                }
            }

            if (!isUnbreakableContent) {
                numChars++;
                if (numChars > maxLength) {
                    break;
                }
            }

            if (isCharacterReference) {
                i = _endIndex;
            }
        } else if (charCode === NEWLINE_CHAR_CODE) {
            if (!isUnbreakableContent) {
                numChars++;
                if (numChars > maxLength) {
                    break;
                }

                numLines++;
                if (numLines > maxLines) {
                    break;
                }
            }
        } else {
            if (!isUnbreakableContent) {
                numChars++;
                if (numChars > maxLength) {
                    break;
                }
            }

            // high Unicode surrogate should never be separated from its matching low surrogate
            var _nextCharCode = string.charCodeAt(i + 1);
            if ((_nextCharCode & 0xfc00) === 0xdc00) {
                i++;
            }
        }
    }

    if (numChars > maxLength) {
        var nextChar = takeHtmlCharAt(string, i);
        if (indicator) {
            var peekIndex = i + nextChar.length;
            while (string.charCodeAt(peekIndex) === TAG_OPEN_CHAR_CODE && string.charCodeAt(peekIndex + 1) === FORWARD_SLASH_CHAR_CODE) {
                var nextPeekIndex = string.indexOf(">", peekIndex + 2) + 1;
                if (nextPeekIndex) {
                    peekIndex = nextPeekIndex;
                } else {
                    break;
                }
            }

            if (peekIndex && (peekIndex === string.length || isLineBreak(string, peekIndex))) {
                // if there's only a single character remaining in the input string, or the next
                // character is followed by a line-break, we can include it instead of the clipping
                // indicator (provided it's not a special HTML character)
                i += nextChar.length;
                nextChar = string.charAt(i);
            }
        }

        // include closing tags before adding the clipping indicator if that's where they
        // are in the input string
        while (nextChar === "<" && string.charCodeAt(i + 1) === FORWARD_SLASH_CHAR_CODE) {
            var _tagName = tagStack.pop();
            var tagEndIndex = _tagName ? string.indexOf(">", i + 2) : -1;
            if (tagEndIndex === -1 || string.replace(TRIM_END_REGEX, "").slice(i + 2, tagEndIndex) !== _tagName) {
                throw new Error("Invalid HTML: " + string);
            }

            i = tagEndIndex + 1;
            nextChar = string.charAt(i);
        }

        if (i < string.length) {
            if (!options.breakWords) {
                // try to clip at word boundaries, if desired
                for (var j = i - indicator.length; j >= 0; j--) {
                    var _charCode3 = string.charCodeAt(j);
                    if (_charCode3 === TAG_CLOSE_CHAR_CODE || _charCode3 === SEMICOLON_CHAR_CODE) {
                        // these characters could be just regular characters, so if they occur in
                        // the middle of a word, they would "break" our attempt to prevent breaking
                        // of words, but given this seems highly unlikely and the alternative is
                        // doing another full parsing of the preceding text, this seems acceptable.
                        break;
                    } else if (_charCode3 === NEWLINE_CHAR_CODE || _charCode3 === TAG_OPEN_CHAR_CODE) {
                        i = j;
                        break;
                    } else if (isWhiteSpace(_charCode3)) {
                        i = j + (indicator ? 1 : 0);
                        break;
                    }
                }
            }

            var result = string.slice(0, i) + (isLineBreak(string, i) ? "" : indicator);
            while (tagStack.length) {
                var _tagName2 = tagStack.pop();
                result += "</" + _tagName2 + ">";
            }
            return result;
        }
    } else if (numLines > maxLines) {
        var _result = string.slice(0, i);
        while (tagStack.length) {
            var _tagName3 = tagStack.pop();
            _result += "</" + _tagName3 + ">";
        }
        return _result;
    }

    return string;
}

function clipPlainText(string, maxLength, options) {
    var indicator = options.indicator,
        maxLines = options.maxLines;


    var numChars = indicator.length;
    var numLines = 1;

    var i = 0;
    var length = string.length;

    for (; i < length; i++) {
        numChars++;
        if (numChars > maxLength) {
            break;
        }

        var charCode = string.charCodeAt(i);
        if (charCode === NEWLINE_CHAR_CODE) {
            numLines++;
            if (numLines > maxLines) {
                break;
            }
        } else if ((charCode & 0xfc00) === 0xd800) {
            // high Unicode surrogate should never be separated from its matching low surrogate
            var nextCharCode = string.charCodeAt(i + 1);
            if ((nextCharCode & 0xfc00) === 0xdc00) {
                i++;
            }
        }
    }

    if (numChars > maxLength) {
        var nextChar = takeCharAt(string, i);
        if (indicator) {
            var peekIndex = i + nextChar.length;
            if (peekIndex === string.length) {
                return string;
            } else if (string.charCodeAt(peekIndex) === NEWLINE_CHAR_CODE) {
                return string.slice(0, i + nextChar.length);
            }
        }

        if (!options.breakWords) {
            // try to clip at word boundaries, if desired
            for (var j = i - indicator.length; j >= 0; j--) {
                var _charCode4 = string.charCodeAt(j);
                if (_charCode4 === NEWLINE_CHAR_CODE) {
                    i = j;
                    nextChar = "\n";
                    break;
                } else if (isWhiteSpace(_charCode4)) {
                    i = j + (indicator ? 1 : 0);
                    break;
                }
            }
        }

        return string.slice(0, i) + (nextChar === "\n" ? "" : indicator);
    } else if (numLines > maxLines) {
        return string.slice(0, i);
    }

    return string;
}

function indexOfWhiteSpace(string, fromIndex) {
    var length = string.length;

    for (var i = fromIndex; i < length; i++) {
        if (isWhiteSpace(string.charCodeAt(i))) {
            return i;
        }
    }
    // rather than -1, this function returns the length of the string if no match is found,
    // so it works well with the Math.min() usage below
    return length;
}

function isCharacterReferenceCharacter(charCode) {
    return charCode >= 48 && charCode <= 57 || charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122;
}

function isLineBreak(string, index) {
    var firstCharCode = string.charCodeAt(index);
    if (firstCharCode === NEWLINE_CHAR_CODE) {
        return true;
    } else if (firstCharCode === TAG_OPEN_CHAR_CODE) {
        var newlineElements = "(" + BLOCK_ELEMENTS.join("|") + "|br)";
        var newlineRegExp = new RegExp("^<" + newlineElements + "[\t\n\f\r ]*/?>", "i");
        return newlineRegExp.test(string.slice(index));
    } else {
        return false;
    }
}

function isWhiteSpace(charCode) {
    return charCode === 9 || charCode === 10 || charCode === 12 || charCode === 13 || charCode === 32;
}

function takeCharAt(string, index) {
    var charCode = string.charCodeAt(index);
    if ((charCode & 0xfc00) === 0xd800) {
        // high Unicode surrogate should never be separated from its matching low surrogate
        var nextCharCode = string.charCodeAt(index + 1);
        if ((nextCharCode & 0xfc00) === 0xdc00) {
            return String.fromCharCode(charCode, nextCharCode);
        }
    }
    return String.fromCharCode(charCode);
}

function takeHtmlCharAt(string, index) {
    var char = takeCharAt(string, index);
    if (char === "&") {
        while (true /* eslint-disable-line */) {
            index++;
            var nextCharCode = string.charCodeAt(index);
            if (isCharacterReferenceCharacter(nextCharCode)) {
                char += String.fromCharCode(nextCharCode);
            } else if (nextCharCode === SEMICOLON_CHAR_CODE) {
                char += String.fromCharCode(nextCharCode);
                break;
            } else {
                break;
            }
        }
    }
    return char;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZm9yY2VkLXN0cmluZy1odG1sLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dyYXBwZWQtd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXh0LWNsaXBwZXIvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7O0FBRTVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEY7QUFDMUY7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEEsV0FBVyxtQkFBTyxDQUFDLG1FQUFtQjtBQUN0QyxVQUFVLG1CQUFPLENBQUMsaUVBQWtCO0FBQ3BDLG1DQUFtQyxtQkFBTyxDQUFDLDZHQUF3QztBQUNuRixxQkFBcUIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRWxFO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1ZBLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDVEEsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELGdDQUFnQyxtQkFBTyxDQUFDLHFIQUE0Qzs7QUFFcEYsaUJBQWlCOztBQUVqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQkEsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDOztBQUU5RDs7Ozs7Ozs7Ozs7O0FDRkEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG1CQUFPLENBQUMsK0VBQXlCO0FBQzVDLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2Qzs7QUFFdkY7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEdBQUcsMkRBQTJEO0FBQzlEO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDWkQs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QTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxZQUFZO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFFBQVE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsVUFBVSxZQUFZO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoidmVuZG9yc35hY3Rpdml0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciBxdW90ID0gL1wiL2c7XG5cbi8vIEIuMi4zLjIuMSBDcmVhdGVIVE1MKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRlaHRtbFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgdmFyIFMgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZShzdHJpbmcpKTtcbiAgdmFyIHAxID0gJzwnICsgdGFnO1xuICBpZiAoYXR0cmlidXRlICE9PSAnJykgcDEgKz0gJyAnICsgYXR0cmlidXRlICsgJz1cIicgKyBTdHJpbmcodmFsdWUpLnJlcGxhY2UocXVvdCwgJyZxdW90OycpICsgJ1wiJztcbiAgcmV0dXJuIHAxICsgJz4nICsgUyArICc8LycgKyB0YWcgKyAnPic7XG59O1xuIiwidmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dyYXBwZWQtd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSkge1xuICB2YXIgU3ltYm9sID0gcGF0aC5TeW1ib2wgfHwgKHBhdGguU3ltYm9sID0ge30pO1xuICBpZiAoIWhhcyhTeW1ib2wsIE5BTUUpKSBkZWZpbmVQcm9wZXJ0eShTeW1ib2wsIE5BTUUsIHtcbiAgICB2YWx1ZTogd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZS5mKE5BTUUpXG4gIH0pO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBjaGVjayB0aGUgZXhpc3RlbmNlIG9mIGEgbWV0aG9kLCBsb3dlcmNhc2Vcbi8vIG9mIGEgdGFnIGFuZCBlc2NhcGluZyBxdW90ZXMgaW4gYXJndW1lbnRzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXN0ID0gJydbTUVUSE9EX05BTUVdKCdcIicpO1xuICAgIHJldHVybiB0ZXN0ICE9PSB0ZXN0LnRvTG93ZXJDYXNlKCkgfHwgdGVzdC5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuICB9KTtcbn07XG4iLCJ2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG5cbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMoaXQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XSdcbiAgICA/IGdldFdpbmRvd05hbWVzKGl0KVxuICAgIDogbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyh0b0luZGV4ZWRPYmplY3QoaXQpKTtcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbmV4cG9ydHMuZiA9IHdlbGxLbm93blN5bWJvbDtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZnJvbScpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcblxudmFyIElOQ09SUkVDVF9JVEVSQVRJT04gPSAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICBBcnJheS5mcm9tKGl0ZXJhYmxlKTtcbn0pO1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBmcm9tOiBmcm9tXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxuLy8gYEFycmF5LmlzQXJyYXlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuaXNhcnJheVxuJCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSB9LCB7XG4gIGlzQXJyYXk6IGlzQXJyYXlcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHNsb3BweUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Nsb3BweS1hcnJheS1tZXRob2QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSBbXS5qb2luO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9IE9iamVjdDtcbnZhciBTTE9QUFlfTUVUSE9EID0gc2xvcHB5QXJyYXlNZXRob2QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8IFNMT1BQWV9NRVRIT0QgfSwge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiBuYXRpdmVKb2luLmNhbGwodG9JbmRleGVkT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBmbGFncyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZmxhZ3MnKTtcblxudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gUmVnRXhwLnByb3RvdHlwZTtcbnZhciBuYXRpdmVUb1N0cmluZyA9IFJlZ0V4cFByb3RvdHlwZVtUT19TVFJJTkddO1xuXG52YXIgTk9UX0dFTkVSSUMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiBuYXRpdmVUb1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG52YXIgSU5DT1JSRUNUX05BTUUgPSBuYXRpdmVUb1N0cmluZy5uYW1lICE9IFRPX1NUUklORztcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKE5PVF9HRU5FUklDIHx8IElOQ09SUkVDVF9OQU1FKSB7XG4gIHJlZGVmaW5lKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIFIgPSBhbk9iamVjdCh0aGlzKTtcbiAgICB2YXIgcCA9IFN0cmluZyhSLnNvdXJjZSk7XG4gICAgdmFyIHJmID0gUi5mbGFncztcbiAgICB2YXIgZiA9IFN0cmluZyhyZiA9PT0gdW5kZWZpbmVkICYmIFIgaW5zdGFuY2VvZiBSZWdFeHAgJiYgISgnZmxhZ3MnIGluIFJlZ0V4cFByb3RvdHlwZSkgPyBmbGFncy5jYWxsKFIpIDogcmYpO1xuICAgIHJldHVybiAnLycgKyBwICsgJy8nICsgZjtcbiAgfSwgeyB1bnNhZmU6IHRydWUgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjcmVhdGVIVE1MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1odG1sJyk7XG52YXIgZm9yY2VkU3RyaW5nSFRNTE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mb3JjZWQtc3RyaW5nLWh0bWwtbWV0aG9kJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmxpbmtgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5saW5rXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogZm9yY2VkU3RyaW5nSFRNTE1ldGhvZCgnbGluaycpIH0sIHtcbiAgbGluazogZnVuY3Rpb24gbGluayh1cmwpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYScsICdocmVmJywgdXJsKTtcbiAgfVxufSk7XG4iLCIvLyBgU3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvbmAgZ2V0dGVyXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLmRlc2NyaXB0aW9uXG4ndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcblxudmFyIE5hdGl2ZVN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG5cbmlmIChERVNDUklQVE9SUyAmJiB0eXBlb2YgTmF0aXZlU3ltYm9sID09ICdmdW5jdGlvbicgJiYgKCEoJ2Rlc2NyaXB0aW9uJyBpbiBOYXRpdmVTeW1ib2wucHJvdG90eXBlKSB8fFxuICAvLyBTYWZhcmkgMTIgYnVnXG4gIE5hdGl2ZVN5bWJvbCgpLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWRcbikpIHtcbiAgdmFyIEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSA9IHt9O1xuICAvLyB3cmFwIFN5bWJvbCBjb25zdHJ1Y3RvciBmb3IgY29ycmVjdCB3b3JrIHdpdGggdW5kZWZpbmVkIGRlc2NyaXB0aW9uXG4gIHZhciBTeW1ib2xXcmFwcGVyID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogU3RyaW5nKGFyZ3VtZW50c1swXSk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMgaW5zdGFuY2VvZiBTeW1ib2xXcmFwcGVyXG4gICAgICA/IG5ldyBOYXRpdmVTeW1ib2woZGVzY3JpcHRpb24pXG4gICAgICAvLyBpbiBFZGdlIDEzLCBTdHJpbmcoU3ltYm9sKHVuZGVmaW5lZCkpID09PSAnU3ltYm9sKHVuZGVmaW5lZCknXG4gICAgICA6IGRlc2NyaXB0aW9uID09PSB1bmRlZmluZWQgPyBOYXRpdmVTeW1ib2woKSA6IE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbik7XG4gICAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykgRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlW3Jlc3VsdF0gPSB0cnVlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoU3ltYm9sV3JhcHBlciwgTmF0aXZlU3ltYm9sKTtcbiAgdmFyIHN5bWJvbFByb3RvdHlwZSA9IFN5bWJvbFdyYXBwZXIucHJvdG90eXBlID0gTmF0aXZlU3ltYm9sLnByb3RvdHlwZTtcbiAgc3ltYm9sUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ltYm9sV3JhcHBlcjtcblxuICB2YXIgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBuYXRpdmUgPSBTdHJpbmcoTmF0aXZlU3ltYm9sKCd0ZXN0JykpID09ICdTeW1ib2wodGVzdCknO1xuICB2YXIgcmVnZXhwID0gL15TeW1ib2xcXCgoLiopXFwpW14pXSskLztcbiAgZGVmaW5lUHJvcGVydHkoc3ltYm9sUHJvdG90eXBlLCAnZGVzY3JpcHRpb24nLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZGVzY3JpcHRpb24oKSB7XG4gICAgICB2YXIgc3ltYm9sID0gaXNPYmplY3QodGhpcykgPyB0aGlzLnZhbHVlT2YoKSA6IHRoaXM7XG4gICAgICB2YXIgc3RyaW5nID0gc3ltYm9sVG9TdHJpbmcuY2FsbChzeW1ib2wpO1xuICAgICAgaWYgKGhhcyhFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmUsIHN5bWJvbCkpIHJldHVybiAnJztcbiAgICAgIHZhciBkZXNjID0gbmF0aXZlID8gc3RyaW5nLnNsaWNlKDcsIC0xKSA6IHN0cmluZy5yZXBsYWNlKHJlZ2V4cCwgJyQxJyk7XG4gICAgICByZXR1cm4gZGVzYyA9PT0gJycgPyB1bmRlZmluZWQgOiBkZXNjO1xuICAgIH1cbiAgfSk7XG5cbiAgJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcbiAgICBTeW1ib2w6IFN5bWJvbFdyYXBwZXJcbiAgfSk7XG59XG4iLCJ2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG4vLyBgU3ltYm9sLml0ZXJhdG9yYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLml0ZXJhdG9yXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIG5hdGl2ZU9iamVjdENyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dyYXBwZWQtd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcblxudmFyIEhJRERFTiA9IHNoYXJlZEtleSgnaGlkZGVuJyk7XG52YXIgU1lNQk9MID0gJ1N5bWJvbCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoU1lNQk9MKTtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkc3RyaW5naWZ5ID0gZ2V0QnVpbHRJbignSlNPTicsICdzdHJpbmdpZnknKTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyA9IGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbC5mO1xudmFyIG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlID0gcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZjtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG90eXBlU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIFN0cmluZ1RvU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N0cmluZy10by1zeW1ib2wtcmVnaXN0cnknKTtcbnZhciBTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtdG8tc3RyaW5nLXJlZ2lzdHJ5Jyk7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBVU0VfU0VUVEVSID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdENyZWF0ZShuYXRpdmVEZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoTywgUCwgQXR0cmlidXRlcykge1xuICB2YXIgT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvciA9IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3RQcm90b3R5cGUsIFApO1xuICBpZiAoT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvcikgZGVsZXRlIE9iamVjdFByb3RvdHlwZVtQXTtcbiAgbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIGlmIChPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yICYmIE8gIT09IE9iamVjdFByb3RvdHlwZSkge1xuICAgIG5hdGl2ZURlZmluZVByb3BlcnR5KE9iamVjdFByb3RvdHlwZSwgUCwgT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvcik7XG4gIH1cbn0gOiBuYXRpdmVEZWZpbmVQcm9wZXJ0eTtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnLCBkZXNjcmlwdGlvbikge1xuICB2YXIgc3ltYm9sID0gQWxsU3ltYm9sc1t0YWddID0gbmF0aXZlT2JqZWN0Q3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHNldEludGVybmFsU3RhdGUoc3ltYm9sLCB7XG4gICAgdHlwZTogU1lNQk9MLFxuICAgIHRhZzogdGFnLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxuICB9KTtcbiAgaWYgKCFERVNDUklQVE9SUykgc3ltYm9sLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHJldHVybiBzeW1ib2w7XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGl0KSBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBpZiAoTyA9PT0gT2JqZWN0UHJvdG90eXBlKSAkZGVmaW5lUHJvcGVydHkoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgUCwgQXR0cmlidXRlcyk7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUF0dHJpYnV0ZXMuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoTywgSElEREVOKSkgbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgSElEREVOLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwge30pKTtcbiAgICAgIE9bSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhPLCBISURERU4pICYmIE9bSElEREVOXVtrZXldKSBPW0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgQXR0cmlidXRlcyA9IG5hdGl2ZU9iamVjdENyZWF0ZShBdHRyaWJ1dGVzLCB7IGVudW1lcmFibGU6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzY3JpcHRvcihPLCBrZXksIEF0dHJpYnV0ZXMpO1xuICB9IHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBrZXksIEF0dHJpYnV0ZXMpO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIgcHJvcGVydGllcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKHByb3BlcnRpZXMpLmNvbmNhdCgkZ2V0T3duUHJvcGVydHlTeW1ib2xzKHByb3BlcnRpZXMpKTtcbiAgJGZvckVhY2goa2V5cywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghREVTQ1JJUFRPUlMgfHwgJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocHJvcGVydGllcywga2V5KSkgJGRlZmluZVByb3BlcnR5KE8sIGtleSwgcHJvcGVydGllc1trZXldKTtcbiAgfSk7XG4gIHJldHVybiBPO1xufTtcblxudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gbmF0aXZlT2JqZWN0Q3JlYXRlKE8pIDogJGRlZmluZVByb3BlcnRpZXMobmF0aXZlT2JqZWN0Q3JlYXRlKE8pLCBQcm9wZXJ0aWVzKTtcbn07XG5cbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBQID0gdG9QcmltaXRpdmUoViwgdHJ1ZSk7XG4gIHZhciBlbnVtZXJhYmxlID0gbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0aGlzLCBQKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvdHlwZSAmJiBoYXMoQWxsU3ltYm9scywgUCkgJiYgIWhhcyhPYmplY3RQcm90b3R5cGVTeW1ib2xzLCBQKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gZW51bWVyYWJsZSB8fCAhaGFzKHRoaXMsIFApIHx8ICFoYXMoQWxsU3ltYm9scywgUCkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW1BdID8gZW51bWVyYWJsZSA6IHRydWU7XG59O1xuXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIHZhciBpdCA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvdHlwZSAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIGRlc2NyaXB0b3IgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG4gIGlmIChkZXNjcmlwdG9yICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIHtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSB0cnVlO1xuICB9XG4gIHJldHVybiBkZXNjcmlwdG9yO1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHZhciBuYW1lcyA9IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXModG9JbmRleGVkT2JqZWN0KE8pKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICAkZm9yRWFjaChuYW1lcywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhoaWRkZW5LZXlzLCBrZXkpKSByZXN1bHQucHVzaChrZXkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pIHtcbiAgdmFyIElTX09CSkVDVF9QUk9UT1RZUEUgPSBPID09PSBPYmplY3RQcm90b3R5cGU7XG4gIHZhciBuYW1lcyA9IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMoSVNfT0JKRUNUX1BST1RPVFlQRSA/IE9iamVjdFByb3RvdHlwZVN5bWJvbHMgOiB0b0luZGV4ZWRPYmplY3QoTykpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gICRmb3JFYWNoKG5hbWVzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICghSVNfT0JKRUNUX1BST1RPVFlQRSB8fCBoYXMoT2JqZWN0UHJvdG90eXBlLCBrZXkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gYFN5bWJvbGAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC1jb25zdHJ1Y3RvclxuaWYgKCFOQVRJVkVfU1lNQk9MKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9ICFhcmd1bWVudHMubGVuZ3RoIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogU3RyaW5nKGFyZ3VtZW50c1swXSk7XG4gICAgdmFyIHRhZyA9IHVpZChkZXNjcmlwdGlvbik7XG4gICAgdmFyIHNldHRlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvdHlwZSkgc2V0dGVyLmNhbGwoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjcmlwdG9yKHRoaXMsIHRhZywgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgVVNFX1NFVFRFUikgc2V0U3ltYm9sRGVzY3JpcHRvcihPYmplY3RQcm90b3R5cGUsIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogc2V0dGVyIH0pO1xuICAgIHJldHVybiB3cmFwKHRhZywgZGVzY3JpcHRpb24pO1xuICB9O1xuXG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcykudGFnO1xuICB9KTtcblxuICByZWRlZmluZSgkU3ltYm9sLCAnd2l0aG91dFNldHRlcicsIGZ1bmN0aW9uIChkZXNjcmlwdGlvbikge1xuICAgIHJldHVybiB3cmFwKHVpZChkZXNjcmlwdGlvbiksIGRlc2NyaXB0aW9uKTtcbiAgfSk7XG5cbiAgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZS5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3ZWxsS25vd25TeW1ib2wobmFtZSksIG5hbWUpO1xuICB9O1xuXG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLVN5bWJvbC1kZXNjcmlwdGlvblxuICAgIG5hdGl2ZURlZmluZVByb3BlcnR5KCRTeW1ib2xbUFJPVE9UWVBFXSwgJ2Rlc2NyaXB0aW9uJywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcykuZGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFJU19QVVJFKSB7XG4gICAgICByZWRlZmluZShPYmplY3RQcm90b3R5cGUsICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgeyB1bnNhZmU6IHRydWUgfSk7XG4gICAgfVxuICB9XG59XG5cbiQoeyBnbG9iYWw6IHRydWUsIHdyYXA6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wsIHNoYW06ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgU3ltYm9sOiAkU3ltYm9sXG59KTtcblxuJGZvckVhY2gob2JqZWN0S2V5cyhXZWxsS25vd25TeW1ib2xzU3RvcmUpLCBmdW5jdGlvbiAobmFtZSkge1xuICBkZWZpbmVXZWxsS25vd25TeW1ib2wobmFtZSk7XG59KTtcblxuJCh7IHRhcmdldDogU1lNQk9MLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgLy8gYFN5bWJvbC5mb3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wuZm9yXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhrZXkpO1xuICAgIGlmIChoYXMoU3RyaW5nVG9TeW1ib2xSZWdpc3RyeSwgc3RyaW5nKSkgcmV0dXJuIFN0cmluZ1RvU3ltYm9sUmVnaXN0cnlbc3RyaW5nXTtcbiAgICB2YXIgc3ltYm9sID0gJFN5bWJvbChzdHJpbmcpO1xuICAgIFN0cmluZ1RvU3ltYm9sUmVnaXN0cnlbc3RyaW5nXSA9IHN5bWJvbDtcbiAgICBTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5W3N5bWJvbF0gPSBzdHJpbmc7XG4gICAgcmV0dXJuIHN5bWJvbDtcbiAgfSxcbiAgLy8gYFN5bWJvbC5rZXlGb3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wua2V5Zm9yXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sJyk7XG4gICAgaWYgKGhhcyhTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5LCBzeW0pKSByZXR1cm4gU3ltYm9sVG9TdHJpbmdSZWdpc3RyeVtzeW1dO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgVVNFX1NFVFRFUiA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBVU0VfU0VUVEVSID0gZmFsc2U7IH1cbn0pO1xuXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yc1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Jcbn0pO1xuXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCB9LCB7XG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eXN5bWJvbHNcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gQ2hyb21lIDM4IGFuZCAzOSBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgZmFpbHMgb24gcHJpbWl0aXZlc1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzQ0M1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogZmFpbHMoZnVuY3Rpb24gKCkgeyBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZigxKTsgfSkgfSwge1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICAgIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZih0b09iamVjdChpdCkpO1xuICB9XG59KTtcblxuLy8gYEpTT04uc3RyaW5naWZ5YCBtZXRob2QgYmVoYXZpb3Igd2l0aCBzeW1ib2xzXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1qc29uLnN0cmluZ2lmeVxuaWYgKCRzdHJpbmdpZnkpIHtcbiAgdmFyIEZPUkNFRF9KU09OX1NUUklOR0lGWSA9ICFOQVRJVkVfU1lNQk9MIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3ltYm9sID0gJFN5bWJvbCgpO1xuICAgIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gICAgcmV0dXJuICRzdHJpbmdpZnkoW3N5bWJvbF0pICE9ICdbbnVsbF0nXG4gICAgICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgICAgIHx8ICRzdHJpbmdpZnkoeyBhOiBzeW1ib2wgfSkgIT0gJ3t9J1xuICAgICAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgICAgIHx8ICRzdHJpbmdpZnkoT2JqZWN0KHN5bWJvbCkpICE9ICd7fSc7XG4gIH0pO1xuXG4gICQoeyB0YXJnZXQ6ICdKU09OJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRURfSlNPTl9TVFJJTkdJRlkgfSwge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0LCByZXBsYWNlciwgc3BhY2UpIHtcbiAgICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICAgIHZhciBpbmRleCA9IDE7XG4gICAgICB2YXIgJHJlcGxhY2VyO1xuICAgICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpbmRleCkgYXJncy5wdXNoKGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgICAkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgIH07XG4gICAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgICByZXR1cm4gJHN0cmluZ2lmeS5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9wcmltaXRpdmVcbmlmICghJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0pIHtcbiAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG59XG4vLyBgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUtQEB0b3N0cmluZ3RhZ1xuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgU1lNQk9MKTtcblxuaGlkZGVuS2V5c1tISURERU5dID0gdHJ1ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBWb2lkIGVsZW1lbnRzIGFyZSBlbGVtZW50cyB3aXRob3V0IGlubmVyIGNvbnRlbnQsXG4vLyB3aGljaCBjbG9zZSB0aGVtc2VsdmVzIHJlZ2FyZGxlc3Mgb2YgdHJhaWxpbmcgc2xhc2guXG4vLyBFLmcuIGJvdGggPGJyPiBhbmQgPGJyIC8+IGFyZSBzZWxmLWNsb3NpbmcuXG52YXIgVk9JRF9FTEVNRU5UUyA9IFtcImFyZWFcIiwgXCJiYXNlXCIsIFwiYnJcIiwgXCJjb2xcIiwgXCJjb21tYW5kXCIsIFwiZW1iZWRcIiwgXCJoclwiLCBcImltZ1wiLCBcImlucHV0XCIsIFwia2V5Z2VuXCIsIFwibGlua1wiLCBcIm1ldGFcIiwgXCJwYXJhbVwiLCBcInNvdXJjZVwiLCBcInRyYWNrXCIsIFwid2JyXCJdO1xuXG4vLyBCbG9jayBlbGVtZW50cyB0cmlnZ2VyIG5ld2xpbmVzIHdoZXJlIHRoZXkncmUgaW5zZXJ0ZWQsXG4vLyBhbmQgYXJlIGFsd2F5cyBzYWZlIHBsYWNlcyBmb3IgdHJ1bmNhdGlvbi5cbnZhciBCTE9DS19FTEVNRU5UUyA9IFtcImFkZHJlc3NcIiwgXCJhcnRpY2xlXCIsIFwiYXNpZGVcIiwgXCJibG9ja3F1b3RlXCIsIFwiY2FudmFzXCIsIFwiZGRcIiwgXCJkaXZcIiwgXCJkbFwiLCBcImR0XCIsIFwiZmllbGRzZXRcIiwgXCJmaWdjYXB0aW9uXCIsIFwiZmlndXJlXCIsIFwiZm9vdGVyXCIsIFwiZm9ybVwiLCBcImgxXCIsIFwiaDJcIiwgXCJoM1wiLCBcImg0XCIsIFwiaDVcIiwgXCJoNlwiLCBcImhlYWRlclwiLCBcImhncm91cFwiLCBcImhyXCIsIFwibGlcIiwgXCJtYWluXCIsIFwibmF2XCIsIFwibm9zY3JpcHRcIiwgXCJvbFwiLCBcIm91dHB1dFwiLCBcInBcIiwgXCJwcmVcIiwgXCJzZWN0aW9uXCIsIFwidGFibGVcIiwgXCJ0Zm9vdFwiLCBcInVsXCIsIFwidmlkZW9cIl07XG5cbnZhciBORVdMSU5FX0NIQVJfQ09ERSA9IDEwOyAvLyAnXFxuJ1xudmFyIEVYQ0xBTUFUSU9OX0NIQVJfQ09ERSA9IDMzOyAvLyAnISdcbnZhciBET1VCTEVfUVVPVEVfQ0hBUl9DT0RFID0gMzQ7IC8vICdcIidcbnZhciBBTVBFUlNBTkRfQ0hBUl9DT0RFID0gMzg7IC8vICcmJ1xudmFyIFNJTkdMRV9RVU9URV9DSEFSX0NPREUgPSAzOTsgLy8gJ1xcJydcbnZhciBGT1JXQVJEX1NMQVNIX0NIQVJfQ09ERSA9IDQ3OyAvLyAnLydcbnZhciBTRU1JQ09MT05fQ0hBUl9DT0RFID0gNTk7IC8vICc7J1xudmFyIFRBR19PUEVOX0NIQVJfQ09ERSA9IDYwOyAvLyAnPCdcbnZhciBFUVVBTF9TSUdOX0NIQVJfQ09ERSA9IDYxOyAvLyAnPSdcbnZhciBUQUdfQ0xPU0VfQ0hBUl9DT0RFID0gNjI7IC8vICc+J1xuXG52YXIgQ0hBUl9PRl9JTlRFUkVTVF9SRUdFWCA9IC9bPCZcXG5cXHVkODAwLVxcdWRiZmZdLztcblxudmFyIFRSSU1fRU5EX1JFR0VYID0gL1xccyskLztcblxuLyoqXG4gKiBDbGlwcyBhIHN0cmluZyB0byBhIG1heGltdW0gbGVuZ3RoLiBJZiB0aGUgc3RyaW5nIGV4Y2VlZHMgdGhlIGxlbmd0aCwgaXQgaXMgdHJ1bmNhdGVkIGFuZCBhblxuICogaW5kaWNhdG9yIChhbiBlbGxpcHNpcywgYnkgZGVmYXVsdCkgaXMgYXBwZW5kZWQuXG4gKlxuICogSW4gZGV0YWlsLCB0aGUgY2xpcHBpbmcgcnVsZXMgYXJlIGFzIGZvbGxvd3M6XG4gKiAtIFRoZSByZXN1bHRpbmcgY2xpcHBlZCBzdHJpbmcgbWF5IG5ldmVyIGNvbnRhaW4gbW9yZSB0aGFuIG1heExlbmd0aCBjaGFyYWN0ZXJzLiBFeGFtcGxlczpcbiAqICAgLSBjbGlwKFwiZm9vXCIsIDMpID0+IFwiZm9vXCJcbiAqICAgLSBjbGlwKFwiZm9vXCIsIDIpID0+IFwiZuKAplwiXG4gKiAtIFRoZSBpbmRpY2F0b3IgaXMgaW5zZXJ0ZWQgaWYgYW5kIG9ubHkgaWYgdGhlIHN0cmluZyBpcyBjbGlwcGVkIGF0IGFueSBwbGFjZSBvdGhlciB0aGFuIGFcbiAqICAgbmV3bGluZS4gRXhhbXBsZXM6XG4gKiAgIC0gY2xpcChcImZvbyBiYXJcIiwgNSkgPT4gXCJmb28g4oCmXCJcbiAqICAgLSBjbGlwKFwiZm9vXFxuYmFyXCIsIDUpID0+IFwiZm9vXCJcbiAqIC0gSWYgdGhlIGh0bWwgb3B0aW9uIGlzIHRydWUgYW5kIHZhbGlkIEhUTUwgaXMgaW5zZXJ0ZWQsIHRoZSBjbGlwcGVkIG91dHB1dCAqbXVzdCogYWxzbyBiZSB2YWxpZFxuICogICBIVE1MLiBJZiB0aGUgaW5wdXQgaXMgbm90IHZhbGlkIEhUTUwsIHRoZSByZXN1bHQgaXMgdW5kZWZpbmVkIChub3QgdG8gYmUgY29uZnVzZWQgd2l0aCBKUydcbiAqICAgXCJ1bmRlZmluZWRcIiB0eXBlOyBzb21lIGVycm9ycyBtaWdodCBiZSBkZXRlY3RlZCBhbmQgcmVzdWx0IGluIGFuIGV4Y2VwdGlvbiwgYnV0IHRoaXMgaXMgbm90XG4gKiAgIGd1YXJhbnRlZWQpLlxuICpcbiAqIEBwYXJhbSBzdHJpbmcgVGhlIHN0cmluZyB0byBjbGlwLlxuICogQHBhcmFtIG1heExlbmd0aCBUaGUgbWF4aW11bSBsZW5ndGggb2YgdGhlIGNsaXBwZWQgc3RyaW5nIGluIG51bWJlciBvZiBjaGFyYWN0ZXJzLlxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QuIE1heSBjb250YWluIHRoZSBmb2xsb3dpbmcgcHJvcGVydHk6XG4gKiAgICAgICAgICAgICAgICBicmVha1dvcmRzIC0gQnkgZGVmYXVsdCwgd2UgdHJ5IHRvIGJyZWFrIG9ubHkgYXQgd29yZCBib3VuZGFyaWVzLiBTZXQgdG8gdHJ1ZSBpZlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMgaXMgdW5kZXNpcmVkLlxuICogICAgICAgICAgICAgICAgaHRtbCAtIFNldCB0byB0cnVlIGlmIHRoZSBzdHJpbmcgaXMgSFRNTC1lbmNvZGVkLiBJZiBzbywgdGhpcyBtZXRob2Qgd2lsbCB0YWtlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgZXh0cmEgY2FyZSB0byBtYWtlIHN1cmUgdGhlIEhUTUwtZW5jb2RpbmcgaXMgY29ycmVjdGx5IG1haW50YWluZWQuXG4gKiAgICAgICAgICAgICAgICBpbWFnZVdlaWdodCAtIFRoZSBhbW91bnQgb2YgY2hhcmFjdGVycyB0byBhc3N1bWUgZm9yIGltYWdlcy4gVGhpcyBpcyB1c2VkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZW5ldmVyIGFuIGltYWdlIGlzIGVuY291bnRlcmVkLCBidXQgYWxzbyBmb3IgU1ZHIGFuZCBNYXRoTUxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC4gRGVmYXVsdDogMi5cbiAqICAgICAgICAgICAgICAgIGluZGljYXRvciAtIFRoZSBzdHJpbmcgdG8gaW5zZXJ0IHRvIGluZGljYXRlIGNsaXBwaW5nLiBEZWZhdWx0OiBcIuKAplwiLlxuICogICAgICAgICAgICAgICAgbWF4TGluZXMgLSBNYXhpbXVtIGFtb3VudCBvZiBsaW5lcyBhbGxvd2VkLiBJZiBnaXZlbiwgdGhlIHN0cmluZyB3aWxsIGJlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBwZWQgZWl0aGVyIGF0IHRoZSBtb21lbnQgdGhlIG1heGltdW0gYW1vdW50IG9mIGNoYXJhY3RlcnMgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjZWVkZWQgb3IgdGhlIG1vbWVudCBtYXhMaW5lcyBuZXdsaW5lcyBhcmUgZGlzY292ZXJlZCwgd2hpY2hldmVyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbWVzIGZpcnN0LlxuICpcbiAqIEByZXR1cm4gVGhlIGNsaXBwZWQgc3RyaW5nLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNsaXAoc3RyaW5nLCBtYXhMZW5ndGgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBpZiAoIXN0cmluZykge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICBzdHJpbmcgPSBzdHJpbmcudG9TdHJpbmcoKTtcblxuICAgIGlmIChvcHRpb25zLmluZGljYXRvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wdGlvbnMuaW5kaWNhdG9yID0gXCJcXHUyMDI2XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnMuaHRtbCA/IGNsaXBIdG1sKHN0cmluZywgbWF4TGVuZ3RoLCBvcHRpb25zKSA6IGNsaXBQbGFpblRleHQoc3RyaW5nLCBtYXhMZW5ndGgsIG9wdGlvbnMpO1xufTtcblxuZnVuY3Rpb24gY2xpcEh0bWwoc3RyaW5nLCBtYXhMZW5ndGgsIG9wdGlvbnMpIHtcbiAgICB2YXIgX29wdGlvbnMkaW1hZ2VXZWlnaHQgPSBvcHRpb25zLmltYWdlV2VpZ2h0LFxuICAgICAgICBpbWFnZVdlaWdodCA9IF9vcHRpb25zJGltYWdlV2VpZ2h0ID09PSB1bmRlZmluZWQgPyAyIDogX29wdGlvbnMkaW1hZ2VXZWlnaHQsXG4gICAgICAgIGluZGljYXRvciA9IG9wdGlvbnMuaW5kaWNhdG9yLFxuICAgICAgICBtYXhMaW5lcyA9IG9wdGlvbnMubWF4TGluZXM7XG5cblxuICAgIHZhciBudW1DaGFycyA9IGluZGljYXRvci5sZW5ndGg7XG4gICAgdmFyIG51bUxpbmVzID0gMTtcblxuICAgIHZhciBpID0gMDtcbiAgICB2YXIgaXNVbmJyZWFrYWJsZUNvbnRlbnQgPSBmYWxzZTtcbiAgICB2YXIgdGFnU3RhY2sgPSBbXTtcbiAgICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJlc3QgPSBpID8gc3RyaW5nLnNsaWNlKGkpIDogc3RyaW5nO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gcmVzdC5zZWFyY2goQ0hBUl9PRl9JTlRFUkVTVF9SRUdFWCk7XG4gICAgICAgIHZhciBuZXh0QmxvY2tTaXplID0gbmV4dEluZGV4ID4gLTEgPyBuZXh0SW5kZXggOiByZXN0Lmxlbmd0aDtcbiAgICAgICAgaSArPSBuZXh0QmxvY2tTaXplO1xuXG4gICAgICAgIGlmICghaXNVbmJyZWFrYWJsZUNvbnRlbnQpIHtcbiAgICAgICAgICAgIG51bUNoYXJzICs9IG5leHRCbG9ja1NpemU7XG4gICAgICAgICAgICBpZiAobnVtQ2hhcnMgPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpID0gTWF0aC5tYXgoaSAtIG51bUNoYXJzICsgbWF4TGVuZ3RoLCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGFyQ29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoY2hhckNvZGUgPT09IFRBR19PUEVOX0NIQVJfQ09ERSkge1xuICAgICAgICAgICAgdmFyIG5leHRDaGFyQ29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgICAgIHZhciBpc1NwZWNpYWxUYWcgPSBuZXh0Q2hhckNvZGUgPT09IEVYQ0xBTUFUSU9OX0NIQVJfQ09ERTtcbiAgICAgICAgICAgIGlmIChpc1NwZWNpYWxUYWcgJiYgc3RyaW5nLnN1YnN0cihpICsgMiwgMikgPT09IFwiLS1cIikge1xuICAgICAgICAgICAgICAgIHZhciBjb21tZW50RW5kSW5kZXggPSBzdHJpbmcuaW5kZXhPZihcIi0tPlwiLCBpICsgNCkgKyAzO1xuICAgICAgICAgICAgICAgIGkgPSBjb21tZW50RW5kSW5kZXggLSAxOyAvLyAtIDEgYmVjYXVzZSB0aGUgb3V0ZXIgZm9yIGxvb3Agd2lsbCBpbmNyZW1lbnQgaXRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNTcGVjaWFsVGFnICYmIHN0cmluZy5zdWJzdHIoaSArIDIsIDcpID09PSBcIltDREFUQVtcIikge1xuICAgICAgICAgICAgICAgIHZhciBjZGF0YUVuZEluZGV4ID0gc3RyaW5nLmluZGV4T2YoXCJdXT5cIiwgaSArIDkpICsgMztcbiAgICAgICAgICAgICAgICBpID0gY2RhdGFFbmRJbmRleCAtIDE7IC8vIC0gMSBiZWNhdXNlIHRoZSBvdXRlciBmb3IgbG9vcCB3aWxsIGluY3JlbWVudCBpdFxuXG4gICAgICAgICAgICAgICAgLy8gbm90ZSB3ZSBkb24ndCBjb3VudCBDREFUQSB0ZXh0IGZvciBvdXIgY2hhcmFjdGVyIGxpbWl0IGJlY2F1c2UgaXQgaXMgb25seVxuICAgICAgICAgICAgICAgIC8vIGFsbG93ZWQgd2l0aGluIFNWRyBhbmQgTWF0aE1MIGNvbnRlbnQsIGJvdGggb2Ygd2hpY2ggd2UgZG9uJ3QgY2xpcFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkb24ndCBvcGVuIG5ldyB0YWdzIGlmIHdlIGFyZSBjdXJyZW50bHkgYXQgdGhlIGxpbWl0XG4gICAgICAgICAgICAgICAgaWYgKG51bUNoYXJzID09PSBtYXhMZW5ndGggJiYgc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpICE9PSBGT1JXQVJEX1NMQVNIX0NIQVJfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICBudW1DaGFycysrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlUXVvdGVDaGFyQ29kZSA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIGVuZEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB2YXIgaXNBdHRyaWJ1dGVWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlIC8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVuZEluZGV4ID49IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBIVE1MOiBcIiArIHN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgX2NoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoZW5kSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdHRyaWJ1dGVWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZVF1b3RlQ2hhckNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2NoYXJDb2RlID09PSBhdHRyaWJ1dGVRdW90ZUNoYXJDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXR0cmlidXRlVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1doaXRlU3BhY2UoX2NoYXJDb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0F0dHJpYnV0ZVZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfY2hhckNvZGUgPT09IFRBR19DTE9TRV9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBdHRyaWJ1dGVWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRJbmRleC0tOyAvLyByZS1ldmFsdWF0ZSB0aGlzIGNoYXJhY3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfY2hhckNvZGUgPT09IEVRVUFMX1NJR05fQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaXNXaGl0ZVNwYWNlKHN0cmluZy5jaGFyQ29kZUF0KGVuZEluZGV4ICsgMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kSW5kZXgrKzsgLy8gc2tpcCB3aGl0ZXNwYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0F0dHJpYnV0ZVZhbHVlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpcnN0QXR0cmlidXRlQ2hhckNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChlbmRJbmRleCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0QXR0cmlidXRlQ2hhckNvZGUgPT09IERPVUJMRV9RVU9URV9DSEFSX0NPREUgfHwgZmlyc3RBdHRyaWJ1dGVDaGFyQ29kZSA9PT0gU0lOR0xFX1FVT1RFX0NIQVJfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVF1b3RlQ2hhckNvZGUgPSBmaXJzdEF0dHJpYnV0ZUNoYXJDb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVF1b3RlQ2hhckNvZGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9jaGFyQ29kZSA9PT0gVEFHX0NMT1NFX0NIQVJfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRW5kVGFnID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpID09PSBGT1JXQVJEX1NMQVNIX0NIQVJfQ09ERTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YWdOYW1lU3RhcnRJbmRleCA9IGkgKyAoaXNFbmRUYWcgPyAyIDogMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFnTmFtZUVuZEluZGV4ID0gTWF0aC5taW4oaW5kZXhPZldoaXRlU3BhY2Uoc3RyaW5nLCB0YWdOYW1lU3RhcnRJbmRleCksIGVuZEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YWdOYW1lID0gc3RyaW5nLnNsaWNlKHRhZ05hbWVTdGFydEluZGV4LCB0YWdOYW1lRW5kSW5kZXgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZS5jaGFyQ29kZUF0KHRhZ05hbWUubGVuZ3RoIC0gMSkgPT09IEZPUldBUkRfU0xBU0hfQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRyYWlsaW5nIHNsYXNoIGZvciBzZWxmLWNsb3NpbmcgdGFnIG5hbWVzIGxpa2UgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lID0gdGFnTmFtZS5zbGljZSgwLCB0YWdOYW1lLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNFbmRUYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFRhZ05hbWUgPSB0YWdTdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRhZ05hbWUgIT09IHRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBIVE1MOiBcIiArIHN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhZ05hbWUgPT09IFwibWF0aFwiIHx8IHRhZ05hbWUgPT09IFwic3ZnXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNVbmJyZWFrYWJsZUNvbnRlbnQgPSB0YWdTdGFjay5pbmRleE9mKFwibWF0aFwiKSAhPT0gLTEgfHwgdGFnU3RhY2suaW5kZXhPZihcInN2Z1wiKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNVbmJyZWFrYWJsZUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bUNoYXJzICs9IGltYWdlV2VpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bUNoYXJzID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQkxPQ0tfRUxFTUVOVFMuaW5kZXhPZih0YWdOYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxsIGJsb2NrIGxldmVsIGVsZW1lbnRzIHNob3VsZCB0cmlnZ2VyIGEgbmV3IGxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB0cnVuY2F0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNVbmJyZWFrYWJsZUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bUxpbmVzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtTGluZXMgPiBtYXhMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGV4Y2VlZCB0aGUgbWF4IGxpbmVzLCBwdXNoIHRoZSB0YWcgYmFjayBvbnRvIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YWNrIHNvIHRoYXQgaXQgd2lsbCBiZSBhZGRlZCBiYWNrIGNvcnJlY3RseSBhZnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRydW5jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdTdGFjay5wdXNoKHRhZ05hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChWT0lEX0VMRU1FTlRTLmluZGV4T2YodGFnTmFtZSkgIT09IC0xIHx8IHN0cmluZy5jaGFyQ29kZUF0KGVuZEluZGV4IC0gMSkgPT09IEZPUldBUkRfU0xBU0hfQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhZ05hbWUgPT09IFwiYnJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1MaW5lcysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtTGluZXMgPiBtYXhMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwiaW1nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtQ2hhcnMgKz0gaW1hZ2VXZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1DaGFycyA+IG1heExlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ1N0YWNrLnB1c2godGFnTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhZ05hbWUgPT09IFwibWF0aFwiIHx8IHRhZ05hbWUgPT09IFwic3ZnXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNVbmJyZWFrYWJsZUNvbnRlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGVuZEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG51bUNoYXJzID4gbWF4TGVuZ3RoIHx8IG51bUxpbmVzID4gbWF4TGluZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNoYXJDb2RlID09PSBBTVBFUlNBTkRfQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICB2YXIgX2VuZEluZGV4ID0gaSArIDE7XG4gICAgICAgICAgICB2YXIgaXNDaGFyYWN0ZXJSZWZlcmVuY2UgPSB0cnVlO1xuICAgICAgICAgICAgd2hpbGUgKHRydWUgLyogZXNsaW50LWRpc2FibGUtbGluZSAqLykge1xuICAgICAgICAgICAgICAgIHZhciBfY2hhckNvZGUyID0gc3RyaW5nLmNoYXJDb2RlQXQoX2VuZEluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNDaGFyYWN0ZXJSZWZlcmVuY2VDaGFyYWN0ZXIoX2NoYXJDb2RlMikpIHtcbiAgICAgICAgICAgICAgICAgICAgX2VuZEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfY2hhckNvZGUyID09PSBTRU1JQ09MT05fQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQ2hhcmFjdGVyUmVmZXJlbmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc1VuYnJlYWthYmxlQ29udGVudCkge1xuICAgICAgICAgICAgICAgIG51bUNoYXJzKys7XG4gICAgICAgICAgICAgICAgaWYgKG51bUNoYXJzID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzQ2hhcmFjdGVyUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgaSA9IF9lbmRJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjaGFyQ29kZSA9PT0gTkVXTElORV9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgIGlmICghaXNVbmJyZWFrYWJsZUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBudW1DaGFycysrO1xuICAgICAgICAgICAgICAgIGlmIChudW1DaGFycyA+IG1heExlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBudW1MaW5lcysrO1xuICAgICAgICAgICAgICAgIGlmIChudW1MaW5lcyA+IG1heExpbmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaXNVbmJyZWFrYWJsZUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBudW1DaGFycysrO1xuICAgICAgICAgICAgICAgIGlmIChudW1DaGFycyA+IG1heExlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGhpZ2ggVW5pY29kZSBzdXJyb2dhdGUgc2hvdWxkIG5ldmVyIGJlIHNlcGFyYXRlZCBmcm9tIGl0cyBtYXRjaGluZyBsb3cgc3Vycm9nYXRlXG4gICAgICAgICAgICB2YXIgX25leHRDaGFyQ29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgICAgIGlmICgoX25leHRDaGFyQ29kZSAmIDB4ZmMwMCkgPT09IDB4ZGMwMCkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChudW1DaGFycyA+IG1heExlbmd0aCkge1xuICAgICAgICB2YXIgbmV4dENoYXIgPSB0YWtlSHRtbENoYXJBdChzdHJpbmcsIGkpO1xuICAgICAgICBpZiAoaW5kaWNhdG9yKSB7XG4gICAgICAgICAgICB2YXIgcGVla0luZGV4ID0gaSArIG5leHRDaGFyLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChzdHJpbmcuY2hhckNvZGVBdChwZWVrSW5kZXgpID09PSBUQUdfT1BFTl9DSEFSX0NPREUgJiYgc3RyaW5nLmNoYXJDb2RlQXQocGVla0luZGV4ICsgMSkgPT09IEZPUldBUkRfU0xBU0hfQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHRQZWVrSW5kZXggPSBzdHJpbmcuaW5kZXhPZihcIj5cIiwgcGVla0luZGV4ICsgMikgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0UGVla0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHBlZWtJbmRleCA9IG5leHRQZWVrSW5kZXg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGVla0luZGV4ICYmIChwZWVrSW5kZXggPT09IHN0cmluZy5sZW5ndGggfHwgaXNMaW5lQnJlYWsoc3RyaW5nLCBwZWVrSW5kZXgpKSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3Mgb25seSBhIHNpbmdsZSBjaGFyYWN0ZXIgcmVtYWluaW5nIGluIHRoZSBpbnB1dCBzdHJpbmcsIG9yIHRoZSBuZXh0XG4gICAgICAgICAgICAgICAgLy8gY2hhcmFjdGVyIGlzIGZvbGxvd2VkIGJ5IGEgbGluZS1icmVhaywgd2UgY2FuIGluY2x1ZGUgaXQgaW5zdGVhZCBvZiB0aGUgY2xpcHBpbmdcbiAgICAgICAgICAgICAgICAvLyBpbmRpY2F0b3IgKHByb3ZpZGVkIGl0J3Mgbm90IGEgc3BlY2lhbCBIVE1MIGNoYXJhY3RlcilcbiAgICAgICAgICAgICAgICBpICs9IG5leHRDaGFyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBuZXh0Q2hhciA9IHN0cmluZy5jaGFyQXQoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbmNsdWRlIGNsb3NpbmcgdGFncyBiZWZvcmUgYWRkaW5nIHRoZSBjbGlwcGluZyBpbmRpY2F0b3IgaWYgdGhhdCdzIHdoZXJlIHRoZXlcbiAgICAgICAgLy8gYXJlIGluIHRoZSBpbnB1dCBzdHJpbmdcbiAgICAgICAgd2hpbGUgKG5leHRDaGFyID09PSBcIjxcIiAmJiBzdHJpbmcuY2hhckNvZGVBdChpICsgMSkgPT09IEZPUldBUkRfU0xBU0hfQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICB2YXIgX3RhZ05hbWUgPSB0YWdTdGFjay5wb3AoKTtcbiAgICAgICAgICAgIHZhciB0YWdFbmRJbmRleCA9IF90YWdOYW1lID8gc3RyaW5nLmluZGV4T2YoXCI+XCIsIGkgKyAyKSA6IC0xO1xuICAgICAgICAgICAgaWYgKHRhZ0VuZEluZGV4ID09PSAtMSB8fCBzdHJpbmcucmVwbGFjZShUUklNX0VORF9SRUdFWCwgXCJcIikuc2xpY2UoaSArIDIsIHRhZ0VuZEluZGV4KSAhPT0gX3RhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEhUTUw6IFwiICsgc3RyaW5nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSA9IHRhZ0VuZEluZGV4ICsgMTtcbiAgICAgICAgICAgIG5leHRDaGFyID0gc3RyaW5nLmNoYXJBdChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpIDwgc3RyaW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmJyZWFrV29yZHMpIHtcbiAgICAgICAgICAgICAgICAvLyB0cnkgdG8gY2xpcCBhdCB3b3JkIGJvdW5kYXJpZXMsIGlmIGRlc2lyZWRcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gaSAtIGluZGljYXRvci5sZW5ndGg7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfY2hhckNvZGUzID0gc3RyaW5nLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfY2hhckNvZGUzID09PSBUQUdfQ0xPU0VfQ0hBUl9DT0RFIHx8IF9jaGFyQ29kZTMgPT09IFNFTUlDT0xPTl9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIGNoYXJhY3RlcnMgY291bGQgYmUganVzdCByZWd1bGFyIGNoYXJhY3RlcnMsIHNvIGlmIHRoZXkgb2NjdXIgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBtaWRkbGUgb2YgYSB3b3JkLCB0aGV5IHdvdWxkIFwiYnJlYWtcIiBvdXIgYXR0ZW1wdCB0byBwcmV2ZW50IGJyZWFraW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvZiB3b3JkcywgYnV0IGdpdmVuIHRoaXMgc2VlbXMgaGlnaGx5IHVubGlrZWx5IGFuZCB0aGUgYWx0ZXJuYXRpdmUgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvaW5nIGFub3RoZXIgZnVsbCBwYXJzaW5nIG9mIHRoZSBwcmVjZWRpbmcgdGV4dCwgdGhpcyBzZWVtcyBhY2NlcHRhYmxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX2NoYXJDb2RlMyA9PT0gTkVXTElORV9DSEFSX0NPREUgfHwgX2NoYXJDb2RlMyA9PT0gVEFHX09QRU5fQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzV2hpdGVTcGFjZShfY2hhckNvZGUzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGogKyAoaW5kaWNhdG9yID8gMSA6IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBzdHJpbmcuc2xpY2UoMCwgaSkgKyAoaXNMaW5lQnJlYWsoc3RyaW5nLCBpKSA/IFwiXCIgOiBpbmRpY2F0b3IpO1xuICAgICAgICAgICAgd2hpbGUgKHRhZ1N0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGFnTmFtZTIgPSB0YWdTdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCI8L1wiICsgX3RhZ05hbWUyICsgXCI+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChudW1MaW5lcyA+IG1heExpbmVzKSB7XG4gICAgICAgIHZhciBfcmVzdWx0ID0gc3RyaW5nLnNsaWNlKDAsIGkpO1xuICAgICAgICB3aGlsZSAodGFnU3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgX3RhZ05hbWUzID0gdGFnU3RhY2sucG9wKCk7XG4gICAgICAgICAgICBfcmVzdWx0ICs9IFwiPC9cIiArIF90YWdOYW1lMyArIFwiPlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNsaXBQbGFpblRleHQoc3RyaW5nLCBtYXhMZW5ndGgsIG9wdGlvbnMpIHtcbiAgICB2YXIgaW5kaWNhdG9yID0gb3B0aW9ucy5pbmRpY2F0b3IsXG4gICAgICAgIG1heExpbmVzID0gb3B0aW9ucy5tYXhMaW5lcztcblxuXG4gICAgdmFyIG51bUNoYXJzID0gaW5kaWNhdG9yLmxlbmd0aDtcbiAgICB2YXIgbnVtTGluZXMgPSAxO1xuXG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXG4gICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBudW1DaGFycysrO1xuICAgICAgICBpZiAobnVtQ2hhcnMgPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjaGFyQ29kZSA9PT0gTkVXTElORV9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgIG51bUxpbmVzKys7XG4gICAgICAgICAgICBpZiAobnVtTGluZXMgPiBtYXhMaW5lcykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKChjaGFyQ29kZSAmIDB4ZmMwMCkgPT09IDB4ZDgwMCkge1xuICAgICAgICAgICAgLy8gaGlnaCBVbmljb2RlIHN1cnJvZ2F0ZSBzaG91bGQgbmV2ZXIgYmUgc2VwYXJhdGVkIGZyb20gaXRzIG1hdGNoaW5nIGxvdyBzdXJyb2dhdGVcbiAgICAgICAgICAgIHZhciBuZXh0Q2hhckNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgICAgICBpZiAoKG5leHRDaGFyQ29kZSAmIDB4ZmMwMCkgPT09IDB4ZGMwMCkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChudW1DaGFycyA+IG1heExlbmd0aCkge1xuICAgICAgICB2YXIgbmV4dENoYXIgPSB0YWtlQ2hhckF0KHN0cmluZywgaSk7XG4gICAgICAgIGlmIChpbmRpY2F0b3IpIHtcbiAgICAgICAgICAgIHZhciBwZWVrSW5kZXggPSBpICsgbmV4dENoYXIubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHBlZWtJbmRleCA9PT0gc3RyaW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0cmluZy5jaGFyQ29kZUF0KHBlZWtJbmRleCkgPT09IE5FV0xJTkVfQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBpICsgbmV4dENoYXIubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3B0aW9ucy5icmVha1dvcmRzKSB7XG4gICAgICAgICAgICAvLyB0cnkgdG8gY2xpcCBhdCB3b3JkIGJvdW5kYXJpZXMsIGlmIGRlc2lyZWRcbiAgICAgICAgICAgIGZvciAodmFyIGogPSBpIC0gaW5kaWNhdG9yLmxlbmd0aDsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgX2NoYXJDb2RlNCA9IHN0cmluZy5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChfY2hhckNvZGU0ID09PSBORVdMSU5FX0NIQVJfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgICAgICAgICAgbmV4dENoYXIgPSBcIlxcblwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzV2hpdGVTcGFjZShfY2hhckNvZGU0KSkge1xuICAgICAgICAgICAgICAgICAgICBpID0gaiArIChpbmRpY2F0b3IgPyAxIDogMCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgaSkgKyAobmV4dENoYXIgPT09IFwiXFxuXCIgPyBcIlwiIDogaW5kaWNhdG9yKTtcbiAgICB9IGVsc2UgaWYgKG51bUxpbmVzID4gbWF4TGluZXMpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBpbmRleE9mV2hpdGVTcGFjZShzdHJpbmcsIGZyb21JbmRleCkge1xuICAgIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IGZyb21JbmRleDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpc1doaXRlU3BhY2Uoc3RyaW5nLmNoYXJDb2RlQXQoaSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyByYXRoZXIgdGhhbiAtMSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIHN0cmluZyBpZiBubyBtYXRjaCBpcyBmb3VuZCxcbiAgICAvLyBzbyBpdCB3b3JrcyB3ZWxsIHdpdGggdGhlIE1hdGgubWluKCkgdXNhZ2UgYmVsb3dcbiAgICByZXR1cm4gbGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBpc0NoYXJhY3RlclJlZmVyZW5jZUNoYXJhY3RlcihjaGFyQ29kZSkge1xuICAgIHJldHVybiBjaGFyQ29kZSA+PSA0OCAmJiBjaGFyQ29kZSA8PSA1NyB8fCBjaGFyQ29kZSA+PSA2NSAmJiBjaGFyQ29kZSA8PSA5MCB8fCBjaGFyQ29kZSA+PSA5NyAmJiBjaGFyQ29kZSA8PSAxMjI7XG59XG5cbmZ1bmN0aW9uIGlzTGluZUJyZWFrKHN0cmluZywgaW5kZXgpIHtcbiAgICB2YXIgZmlyc3RDaGFyQ29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICBpZiAoZmlyc3RDaGFyQ29kZSA9PT0gTkVXTElORV9DSEFSX0NPREUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChmaXJzdENoYXJDb2RlID09PSBUQUdfT1BFTl9DSEFSX0NPREUpIHtcbiAgICAgICAgdmFyIG5ld2xpbmVFbGVtZW50cyA9IFwiKFwiICsgQkxPQ0tfRUxFTUVOVFMuam9pbihcInxcIikgKyBcInxicilcIjtcbiAgICAgICAgdmFyIG5ld2xpbmVSZWdFeHAgPSBuZXcgUmVnRXhwKFwiXjxcIiArIG5ld2xpbmVFbGVtZW50cyArIFwiW1xcdFxcblxcZlxcciBdKi8/PlwiLCBcImlcIik7XG4gICAgICAgIHJldHVybiBuZXdsaW5lUmVnRXhwLnRlc3Qoc3RyaW5nLnNsaWNlKGluZGV4KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNXaGl0ZVNwYWNlKGNoYXJDb2RlKSB7XG4gICAgcmV0dXJuIGNoYXJDb2RlID09PSA5IHx8IGNoYXJDb2RlID09PSAxMCB8fCBjaGFyQ29kZSA9PT0gMTIgfHwgY2hhckNvZGUgPT09IDEzIHx8IGNoYXJDb2RlID09PSAzMjtcbn1cblxuZnVuY3Rpb24gdGFrZUNoYXJBdChzdHJpbmcsIGluZGV4KSB7XG4gICAgdmFyIGNoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgIGlmICgoY2hhckNvZGUgJiAweGZjMDApID09PSAweGQ4MDApIHtcbiAgICAgICAgLy8gaGlnaCBVbmljb2RlIHN1cnJvZ2F0ZSBzaG91bGQgbmV2ZXIgYmUgc2VwYXJhdGVkIGZyb20gaXRzIG1hdGNoaW5nIGxvdyBzdXJyb2dhdGVcbiAgICAgICAgdmFyIG5leHRDaGFyQ29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGluZGV4ICsgMSk7XG4gICAgICAgIGlmICgobmV4dENoYXJDb2RlICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSwgbmV4dENoYXJDb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjaGFyQ29kZSk7XG59XG5cbmZ1bmN0aW9uIHRha2VIdG1sQ2hhckF0KHN0cmluZywgaW5kZXgpIHtcbiAgICB2YXIgY2hhciA9IHRha2VDaGFyQXQoc3RyaW5nLCBpbmRleCk7XG4gICAgaWYgKGNoYXIgPT09IFwiJlwiKSB7XG4gICAgICAgIHdoaWxlICh0cnVlIC8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi8pIHtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICB2YXIgbmV4dENoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGlzQ2hhcmFjdGVyUmVmZXJlbmNlQ2hhcmFjdGVyKG5leHRDaGFyQ29kZSkpIHtcbiAgICAgICAgICAgICAgICBjaGFyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXJDb2RlID09PSBTRU1JQ09MT05fQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgY2hhciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5leHRDaGFyQ29kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjaGFyO1xufSJdLCJzb3VyY2VSb290IjoiIn0=