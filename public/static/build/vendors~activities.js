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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZm9yY2VkLXN0cmluZy1odG1sLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dyYXBwZWQtd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90ZXh0LWNsaXBwZXIvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7O0FBRTVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEY7QUFDMUY7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEEsV0FBVyxtQkFBTyxDQUFDLG1FQUFtQjtBQUN0QyxVQUFVLG1CQUFPLENBQUMsaUVBQWtCO0FBQ3BDLG1DQUFtQyxtQkFBTyxDQUFDLDZHQUF3QztBQUNuRixxQkFBcUIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRWxFO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1ZBLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDVEEsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELGdDQUFnQyxtQkFBTyxDQUFDLHFIQUE0Qzs7QUFFcEYsaUJBQWlCOztBQUVqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQkEsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDOztBQUU5RDs7Ozs7Ozs7Ozs7O0FDRkEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG1CQUFPLENBQUMsK0VBQXlCO0FBQzVDLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2Qzs7QUFFdkY7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEdBQUcsMkRBQTJEO0FBQzlEO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDWkQsUUFBUSxt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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxZQUFZO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsYUFBYTtBQUNiO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFFBQVE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsVUFBVSxZQUFZO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoidmVuZG9yc35hY3Rpdml0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciBxdW90ID0gL1wiL2c7XG5cbi8vIEIuMi4zLjIuMSBDcmVhdGVIVE1MKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRlaHRtbFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgdmFyIFMgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZShzdHJpbmcpKTtcbiAgdmFyIHAxID0gJzwnICsgdGFnO1xuICBpZiAoYXR0cmlidXRlICE9PSAnJykgcDEgKz0gJyAnICsgYXR0cmlidXRlICsgJz1cIicgKyBTdHJpbmcodmFsdWUpLnJlcGxhY2UocXVvdCwgJyZxdW90OycpICsgJ1wiJztcbiAgcmV0dXJuIHAxICsgJz4nICsgUyArICc8LycgKyB0YWcgKyAnPic7XG59O1xuIiwidmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dyYXBwZWQtd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSkge1xuICB2YXIgU3ltYm9sID0gcGF0aC5TeW1ib2wgfHwgKHBhdGguU3ltYm9sID0ge30pO1xuICBpZiAoIWhhcyhTeW1ib2wsIE5BTUUpKSBkZWZpbmVQcm9wZXJ0eShTeW1ib2wsIE5BTUUsIHtcbiAgICB2YWx1ZTogd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZS5mKE5BTUUpXG4gIH0pO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBjaGVjayB0aGUgZXhpc3RlbmNlIG9mIGEgbWV0aG9kLCBsb3dlcmNhc2Vcbi8vIG9mIGEgdGFnIGFuZCBlc2NhcGluZyBxdW90ZXMgaW4gYXJndW1lbnRzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXN0ID0gJydbTUVUSE9EX05BTUVdKCdcIicpO1xuICAgIHJldHVybiB0ZXN0ICE9PSB0ZXN0LnRvTG93ZXJDYXNlKCkgfHwgdGVzdC5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuICB9KTtcbn07XG4iLCJ2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG5cbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMoaXQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XSdcbiAgICA/IGdldFdpbmRvd05hbWVzKGl0KVxuICAgIDogbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyh0b0luZGV4ZWRPYmplY3QoaXQpKTtcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbmV4cG9ydHMuZiA9IHdlbGxLbm93blN5bWJvbDtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZnJvbScpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcblxudmFyIElOQ09SUkVDVF9JVEVSQVRJT04gPSAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICBBcnJheS5mcm9tKGl0ZXJhYmxlKTtcbn0pO1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBmcm9tOiBmcm9tXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxuLy8gYEFycmF5LmlzQXJyYXlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuaXNhcnJheVxuJCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSB9LCB7XG4gIGlzQXJyYXk6IGlzQXJyYXlcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHNsb3BweUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Nsb3BweS1hcnJheS1tZXRob2QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSBbXS5qb2luO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9IE9iamVjdDtcbnZhciBTTE9QUFlfTUVUSE9EID0gc2xvcHB5QXJyYXlNZXRob2QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8IFNMT1BQWV9NRVRIT0QgfSwge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiBuYXRpdmVKb2luLmNhbGwodG9JbmRleGVkT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHNsb3BweUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Nsb3BweS1hcnJheS1tZXRob2QnKTtcblxudmFyIHRlc3QgPSBbXTtcbnZhciBuYXRpdmVTb3J0ID0gdGVzdC5zb3J0O1xuXG4vLyBJRTgtXG52YXIgRkFJTFNfT05fVU5ERUZJTkVEID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQodW5kZWZpbmVkKTtcbn0pO1xuLy8gVjggYnVnXG52YXIgRkFJTFNfT05fTlVMTCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdGVzdC5zb3J0KG51bGwpO1xufSk7XG4vLyBPbGQgV2ViS2l0XG52YXIgU0xPUFBZX01FVEhPRCA9IHNsb3BweUFycmF5TWV0aG9kKCdzb3J0Jyk7XG5cbnZhciBGT1JDRUQgPSBGQUlMU19PTl9VTkRFRklORUQgfHwgIUZBSUxTX09OX05VTEwgfHwgU0xPUFBZX01FVEhPRDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zb3J0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb3J0XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbikge1xuICAgIHJldHVybiBjb21wYXJlZm4gPT09IHVuZGVmaW5lZFxuICAgICAgPyBuYXRpdmVTb3J0LmNhbGwodG9PYmplY3QodGhpcykpXG4gICAgICA6IG5hdGl2ZVNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSwgYUZ1bmN0aW9uKGNvbXBhcmVmbikpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlSW50SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGFyc2UtaW50Jyk7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlSW50OiBwYXJzZUludEltcGxlbWVudGF0aW9uXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNyZWF0ZUhUTUwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWh0bWwnKTtcbnZhciBmb3JjZWRTdHJpbmdIVE1MTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZvcmNlZC1zdHJpbmctaHRtbC1tZXRob2QnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUubGlua2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmxpbmtcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdIVE1MTWV0aG9kKCdsaW5rJykgfSwge1xuICBsaW5rOiBmdW5jdGlvbiBsaW5rKHVybCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ2hyZWYnLCB1cmwpO1xuICB9XG59KTtcbiIsIi8vIGBTeW1ib2wucHJvdG90eXBlLmRlc2NyaXB0aW9uYCBnZXR0ZXJcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUuZGVzY3JpcHRpb25cbid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xuXG52YXIgTmF0aXZlU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcblxuaWYgKERFU0NSSVBUT1JTICYmIHR5cGVvZiBOYXRpdmVTeW1ib2wgPT0gJ2Z1bmN0aW9uJyAmJiAoISgnZGVzY3JpcHRpb24nIGluIE5hdGl2ZVN5bWJvbC5wcm90b3R5cGUpIHx8XG4gIC8vIFNhZmFyaSAxMiBidWdcbiAgTmF0aXZlU3ltYm9sKCkuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZFxuKSkge1xuICB2YXIgRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlID0ge307XG4gIC8vIHdyYXAgU3ltYm9sIGNvbnN0cnVjdG9yIGZvciBjb3JyZWN0IHdvcmsgd2l0aCB1bmRlZmluZWQgZGVzY3JpcHRpb25cbiAgdmFyIFN5bWJvbFdyYXBwZXIgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBTdHJpbmcoYXJndW1lbnRzWzBdKTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcyBpbnN0YW5jZW9mIFN5bWJvbFdyYXBwZXJcbiAgICAgID8gbmV3IE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbilcbiAgICAgIC8vIGluIEVkZ2UgMTMsIFN0cmluZyhTeW1ib2wodW5kZWZpbmVkKSkgPT09ICdTeW1ib2wodW5kZWZpbmVkKSdcbiAgICAgIDogZGVzY3JpcHRpb24gPT09IHVuZGVmaW5lZCA/IE5hdGl2ZVN5bWJvbCgpIDogTmF0aXZlU3ltYm9sKGRlc2NyaXB0aW9uKTtcbiAgICBpZiAoZGVzY3JpcHRpb24gPT09ICcnKSBFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmVbcmVzdWx0XSA9IHRydWU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhTeW1ib2xXcmFwcGVyLCBOYXRpdmVTeW1ib2wpO1xuICB2YXIgc3ltYm9sUHJvdG90eXBlID0gU3ltYm9sV3JhcHBlci5wcm90b3R5cGUgPSBOYXRpdmVTeW1ib2wucHJvdG90eXBlO1xuICBzeW1ib2xQcm90b3R5cGUuY29uc3RydWN0b3IgPSBTeW1ib2xXcmFwcGVyO1xuXG4gIHZhciBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyIG5hdGl2ZSA9IFN0cmluZyhOYXRpdmVTeW1ib2woJ3Rlc3QnKSkgPT0gJ1N5bWJvbCh0ZXN0KSc7XG4gIHZhciByZWdleHAgPSAvXlN5bWJvbFxcKCguKilcXClbXildKyQvO1xuICBkZWZpbmVQcm9wZXJ0eShzeW1ib2xQcm90b3R5cGUsICdkZXNjcmlwdGlvbicsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHZhciBzeW1ib2wgPSBpc09iamVjdCh0aGlzKSA/IHRoaXMudmFsdWVPZigpIDogdGhpcztcbiAgICAgIHZhciBzdHJpbmcgPSBzeW1ib2xUb1N0cmluZy5jYWxsKHN5bWJvbCk7XG4gICAgICBpZiAoaGFzKEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSwgc3ltYm9sKSkgcmV0dXJuICcnO1xuICAgICAgdmFyIGRlc2MgPSBuYXRpdmUgPyBzdHJpbmcuc2xpY2UoNywgLTEpIDogc3RyaW5nLnJlcGxhY2UocmVnZXhwLCAnJDEnKTtcbiAgICAgIHJldHVybiBkZXNjID09PSAnJyA/IHVuZGVmaW5lZCA6IGRlc2M7XG4gICAgfVxuICB9KTtcblxuICAkKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuICAgIFN5bWJvbDogU3ltYm9sV3JhcHBlclxuICB9KTtcbn1cbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wuaXRlcmF0b3JgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wuaXRlcmF0b3JcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgbmF0aXZlT2JqZWN0Q3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy1leHRlcm5hbCcpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd3JhcHBlZC13ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xuXG52YXIgSElEREVOID0gc2hhcmVkS2V5KCdoaWRkZW4nKTtcbnZhciBTWU1CT0wgPSAnU3ltYm9sJztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihTWU1CT0wpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRzdHJpbmdpZnkgPSBnZXRCdWlsdEluKCdKU09OJywgJ3N0cmluZ2lmeScpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzID0gZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsLmY7XG52YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90b3R5cGVTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgU3RyaW5nVG9TeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3RyaW5nLXRvLXN5bWJvbC1yZWdpc3RyeScpO1xudmFyIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC10by1zdHJpbmctcmVnaXN0cnknKTtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIFVTRV9TRVRURVIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0Q3JlYXRlKG5hdGl2ZURlZmluZVByb3BlcnR5KHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIHZhciBPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yID0gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdFByb3RvdHlwZSwgUCk7XG4gIGlmIChPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yKSBkZWxldGUgT2JqZWN0UHJvdG90eXBlW1BdO1xuICBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgaWYgKE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IgJiYgTyAhPT0gT2JqZWN0UHJvdG90eXBlKSB7XG4gICAgbmF0aXZlRGVmaW5lUHJvcGVydHkoT2JqZWN0UHJvdG90eXBlLCBQLCBPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yKTtcbiAgfVxufSA6IG5hdGl2ZURlZmluZVByb3BlcnR5O1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcsIGRlc2NyaXB0aW9uKSB7XG4gIHZhciBzeW1ib2wgPSBBbGxTeW1ib2xzW3RhZ10gPSBuYXRpdmVPYmplY3RDcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc2V0SW50ZXJuYWxTdGF0ZShzeW1ib2wsIHtcbiAgICB0eXBlOiBTWU1CT0wsXG4gICAgdGFnOiB0YWcsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gIH0pO1xuICBpZiAoIURFU0NSSVBUT1JTKSBzeW1ib2wuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgcmV0dXJuIHN5bWJvbDtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoaXQpIGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGlmIChPID09PSBPYmplY3RQcm90b3R5cGUpICRkZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90b3R5cGVTeW1ib2xzLCBQLCBBdHRyaWJ1dGVzKTtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghQXR0cmlidXRlcy5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhPLCBISURERU4pKSBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBISURERU4sIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB7fSkpO1xuICAgICAgT1tISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKE8sIEhJRERFTikgJiYgT1tISURERU5dW2tleV0pIE9bSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBBdHRyaWJ1dGVzID0gbmF0aXZlT2JqZWN0Q3JlYXRlKEF0dHJpYnV0ZXMsIHsgZW51bWVyYWJsZTogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjcmlwdG9yKE8sIGtleSwgQXR0cmlidXRlcyk7XG4gIH0gcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIGtleSwgQXR0cmlidXRlcyk7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBwcm9wZXJ0aWVzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMocHJvcGVydGllcykuY29uY2F0KCRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvcGVydGllcykpO1xuICAkZm9yRWFjaChrZXlzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFERVNDUklQVE9SUyB8fCAkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChwcm9wZXJ0aWVzLCBrZXkpKSAkZGVmaW5lUHJvcGVydHkoTywga2V5LCBwcm9wZXJ0aWVzW2tleV0pO1xuICB9KTtcbiAgcmV0dXJuIE87XG59O1xuXG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyBuYXRpdmVPYmplY3RDcmVhdGUoTykgOiAkZGVmaW5lUHJvcGVydGllcyhuYXRpdmVPYmplY3RDcmVhdGUoTyksIFByb3BlcnRpZXMpO1xufTtcblxudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIFAgPSB0b1ByaW1pdGl2ZShWLCB0cnVlKTtcbiAgdmFyIGVudW1lcmFibGUgPSBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHRoaXMsIFApO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG90eXBlICYmIGhhcyhBbGxTeW1ib2xzLCBQKSAmJiAhaGFzKE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIFApKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBlbnVtZXJhYmxlIHx8ICFoYXModGhpcywgUCkgfHwgIWhhcyhBbGxTeW1ib2xzLCBQKSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1bUF0gPyBlbnVtZXJhYmxlIDogdHJ1ZTtcbn07XG5cbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgdmFyIGl0ID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG90eXBlICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT2JqZWN0UHJvdG90eXBlU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgZGVzY3JpcHRvciA9IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbiAgaWYgKGRlc2NyaXB0b3IgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkge1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGRlc2NyaXB0b3I7XG59O1xuXG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgdmFyIG5hbWVzID0gbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyh0b0luZGV4ZWRPYmplY3QoTykpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gICRmb3JFYWNoKG5hbWVzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKGhpZGRlbktleXMsIGtleSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTykge1xuICB2YXIgSVNfT0JKRUNUX1BST1RPVFlQRSA9IE8gPT09IE9iamVjdFByb3RvdHlwZTtcbiAgdmFyIG5hbWVzID0gbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyhJU19PQkpFQ1RfUFJPVE9UWVBFID8gT2JqZWN0UHJvdG90eXBlU3ltYm9scyA6IHRvSW5kZXhlZE9iamVjdChPKSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgJGZvckVhY2gobmFtZXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgKCFJU19PQkpFQ1RfUFJPVE9UWVBFIHx8IGhhcyhPYmplY3RQcm90b3R5cGUsIGtleSkpKSB7XG4gICAgICByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyBgU3ltYm9sYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLWNvbnN0cnVjdG9yXG5pZiAoIU5BVElWRV9TWU1CT0wpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yJyk7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gIWFyZ3VtZW50cy5sZW5ndGggfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBTdHJpbmcoYXJndW1lbnRzWzBdKTtcbiAgICB2YXIgdGFnID0gdWlkKGRlc2NyaXB0aW9uKTtcbiAgICB2YXIgc2V0dGVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG90eXBlKSBzZXR0ZXIuY2FsbChPYmplY3RQcm90b3R5cGVTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2NyaXB0b3IodGhpcywgdGFnLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBVU0VfU0VUVEVSKSBzZXRTeW1ib2xEZXNjcmlwdG9yKE9iamVjdFByb3RvdHlwZSwgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiBzZXR0ZXIgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnLCBkZXNjcmlwdGlvbik7XG4gIH07XG5cbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS50YWc7XG4gIH0pO1xuXG4gIHJlZGVmaW5lKCRTeW1ib2wsICd3aXRob3V0U2V0dGVyJywgZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIHdyYXAodWlkKGRlc2NyaXB0aW9uKSwgZGVzY3JpcHRpb24pO1xuICB9KTtcblxuICBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mID0gJGRlZmluZVByb3BlcnR5O1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZiA9IGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlLmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdlbGxLbm93blN5bWJvbChuYW1lKSwgbmFtZSk7XG4gIH07XG5cbiAgaWYgKERFU0NSSVBUT1JTKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtU3ltYm9sLWRlc2NyaXB0aW9uXG4gICAgbmF0aXZlRGVmaW5lUHJvcGVydHkoJFN5bWJvbFtQUk9UT1RZUEVdLCAnZGVzY3JpcHRpb24nLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5kZXNjcmlwdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIUlTX1BVUkUpIHtcbiAgICAgIHJlZGVmaW5lKE9iamVjdFByb3RvdHlwZSwgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB7IHVuc2FmZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cbn1cblxuJCh7IGdsb2JhbDogdHJ1ZSwgd3JhcDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCwgc2hhbTogIU5BVElWRV9TWU1CT0wgfSwge1xuICBTeW1ib2w6ICRTeW1ib2xcbn0pO1xuXG4kZm9yRWFjaChvYmplY3RLZXlzKFdlbGxLbm93blN5bWJvbHNTdG9yZSksIGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlZmluZVdlbGxLbm93blN5bWJvbChuYW1lKTtcbn0pO1xuXG4kKHsgdGFyZ2V0OiBTWU1CT0wsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wgfSwge1xuICAvLyBgU3ltYm9sLmZvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5mb3JcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGtleSk7XG4gICAgaWYgKGhhcyhTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5LCBzdHJpbmcpKSByZXR1cm4gU3RyaW5nVG9TeW1ib2xSZWdpc3RyeVtzdHJpbmddO1xuICAgIHZhciBzeW1ib2wgPSAkU3ltYm9sKHN0cmluZyk7XG4gICAgU3RyaW5nVG9TeW1ib2xSZWdpc3RyeVtzdHJpbmddID0gc3ltYm9sO1xuICAgIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnlbc3ltYm9sXSA9IHN0cmluZztcbiAgICByZXR1cm4gc3ltYm9sO1xuICB9LFxuICAvLyBgU3ltYm9sLmtleUZvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5rZXlmb3JcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2wnKTtcbiAgICBpZiAoaGFzKFN5bWJvbFRvU3RyaW5nUmVnaXN0cnksIHN5bSkpIHJldHVybiBTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5W3N5bV07XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBVU0VfU0VUVEVSID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IFVTRV9TRVRURVIgPSBmYWxzZTsgfVxufSk7XG5cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICAvLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvclxufSk7XG5cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5c3ltYm9sc1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyBDaHJvbWUgMzggYW5kIDM5IGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBmYWlscyBvbiBwcmltaXRpdmVzXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNDQzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBmYWlscyhmdW5jdGlvbiAoKSB7IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mKDEpOyB9KSB9LCB7XG4gIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gICAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4vLyBgSlNPTi5zdHJpbmdpZnlgIG1ldGhvZCBiZWhhdmlvciB3aXRoIHN5bWJvbHNcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWpzb24uc3RyaW5naWZ5XG5pZiAoJHN0cmluZ2lmeSkge1xuICB2YXIgRk9SQ0VEX0pTT05fU1RSSU5HSUZZID0gIU5BVElWRV9TWU1CT0wgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzeW1ib2wgPSAkU3ltYm9sKCk7XG4gICAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgICByZXR1cm4gJHN0cmluZ2lmeShbc3ltYm9sXSkgIT0gJ1tudWxsXSdcbiAgICAgIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAgICAgfHwgJHN0cmluZ2lmeSh7IGE6IHN5bWJvbCB9KSAhPSAne30nXG4gICAgICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICAgICAgfHwgJHN0cmluZ2lmeShPYmplY3Qoc3ltYm9sKSkgIT0gJ3t9JztcbiAgfSk7XG5cbiAgJCh7IHRhcmdldDogJ0pTT04nLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRF9KU09OX1NUUklOR0lGWSB9LCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQsIHJlcGxhY2VyLCBzcGFjZSkge1xuICAgICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgICAgdmFyIGluZGV4ID0gMTtcbiAgICAgIHZhciAkcmVwbGFjZXI7XG4gICAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGluZGV4KSBhcmdzLnB1c2goYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICAgICRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgICAgfTtcbiAgICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICAgIHJldHVybiAkc3RyaW5naWZ5LmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUtQEB0b3ByaW1pdGl2ZVxuaWYgKCEkU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSkge1xuICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbn1cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS1AQHRvc3RyaW5ndGFnXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCBTWU1CT0wpO1xuXG5oaWRkZW5LZXlzW0hJRERFTl0gPSB0cnVlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIFZvaWQgZWxlbWVudHMgYXJlIGVsZW1lbnRzIHdpdGhvdXQgaW5uZXIgY29udGVudCxcbi8vIHdoaWNoIGNsb3NlIHRoZW1zZWx2ZXMgcmVnYXJkbGVzcyBvZiB0cmFpbGluZyBzbGFzaC5cbi8vIEUuZy4gYm90aCA8YnI+IGFuZCA8YnIgLz4gYXJlIHNlbGYtY2xvc2luZy5cbnZhciBWT0lEX0VMRU1FTlRTID0gW1wiYXJlYVwiLCBcImJhc2VcIiwgXCJiclwiLCBcImNvbFwiLCBcImNvbW1hbmRcIiwgXCJlbWJlZFwiLCBcImhyXCIsIFwiaW1nXCIsIFwiaW5wdXRcIiwgXCJrZXlnZW5cIiwgXCJsaW5rXCIsIFwibWV0YVwiLCBcInBhcmFtXCIsIFwic291cmNlXCIsIFwidHJhY2tcIiwgXCJ3YnJcIl07XG5cbi8vIEJsb2NrIGVsZW1lbnRzIHRyaWdnZXIgbmV3bGluZXMgd2hlcmUgdGhleSdyZSBpbnNlcnRlZCxcbi8vIGFuZCBhcmUgYWx3YXlzIHNhZmUgcGxhY2VzIGZvciB0cnVuY2F0aW9uLlxudmFyIEJMT0NLX0VMRU1FTlRTID0gW1wiYWRkcmVzc1wiLCBcImFydGljbGVcIiwgXCJhc2lkZVwiLCBcImJsb2NrcXVvdGVcIiwgXCJjYW52YXNcIiwgXCJkZFwiLCBcImRpdlwiLCBcImRsXCIsIFwiZHRcIiwgXCJmaWVsZHNldFwiLCBcImZpZ2NhcHRpb25cIiwgXCJmaWd1cmVcIiwgXCJmb290ZXJcIiwgXCJmb3JtXCIsIFwiaDFcIiwgXCJoMlwiLCBcImgzXCIsIFwiaDRcIiwgXCJoNVwiLCBcImg2XCIsIFwiaGVhZGVyXCIsIFwiaGdyb3VwXCIsIFwiaHJcIiwgXCJsaVwiLCBcIm1haW5cIiwgXCJuYXZcIiwgXCJub3NjcmlwdFwiLCBcIm9sXCIsIFwib3V0cHV0XCIsIFwicFwiLCBcInByZVwiLCBcInNlY3Rpb25cIiwgXCJ0YWJsZVwiLCBcInRmb290XCIsIFwidWxcIiwgXCJ2aWRlb1wiXTtcblxudmFyIE5FV0xJTkVfQ0hBUl9DT0RFID0gMTA7IC8vICdcXG4nXG52YXIgRVhDTEFNQVRJT05fQ0hBUl9DT0RFID0gMzM7IC8vICchJ1xudmFyIERPVUJMRV9RVU9URV9DSEFSX0NPREUgPSAzNDsgLy8gJ1wiJ1xudmFyIEFNUEVSU0FORF9DSEFSX0NPREUgPSAzODsgLy8gJyYnXG52YXIgU0lOR0xFX1FVT1RFX0NIQVJfQ09ERSA9IDM5OyAvLyAnXFwnJ1xudmFyIEZPUldBUkRfU0xBU0hfQ0hBUl9DT0RFID0gNDc7IC8vICcvJ1xudmFyIFNFTUlDT0xPTl9DSEFSX0NPREUgPSA1OTsgLy8gJzsnXG52YXIgVEFHX09QRU5fQ0hBUl9DT0RFID0gNjA7IC8vICc8J1xudmFyIEVRVUFMX1NJR05fQ0hBUl9DT0RFID0gNjE7IC8vICc9J1xudmFyIFRBR19DTE9TRV9DSEFSX0NPREUgPSA2MjsgLy8gJz4nXG5cbnZhciBDSEFSX09GX0lOVEVSRVNUX1JFR0VYID0gL1s8JlxcblxcdWQ4MDAtXFx1ZGJmZl0vO1xuXG52YXIgVFJJTV9FTkRfUkVHRVggPSAvXFxzKyQvO1xuXG4vKipcbiAqIENsaXBzIGEgc3RyaW5nIHRvIGEgbWF4aW11bSBsZW5ndGguIElmIHRoZSBzdHJpbmcgZXhjZWVkcyB0aGUgbGVuZ3RoLCBpdCBpcyB0cnVuY2F0ZWQgYW5kIGFuXG4gKiBpbmRpY2F0b3IgKGFuIGVsbGlwc2lzLCBieSBkZWZhdWx0KSBpcyBhcHBlbmRlZC5cbiAqXG4gKiBJbiBkZXRhaWwsIHRoZSBjbGlwcGluZyBydWxlcyBhcmUgYXMgZm9sbG93czpcbiAqIC0gVGhlIHJlc3VsdGluZyBjbGlwcGVkIHN0cmluZyBtYXkgbmV2ZXIgY29udGFpbiBtb3JlIHRoYW4gbWF4TGVuZ3RoIGNoYXJhY3RlcnMuIEV4YW1wbGVzOlxuICogICAtIGNsaXAoXCJmb29cIiwgMykgPT4gXCJmb29cIlxuICogICAtIGNsaXAoXCJmb29cIiwgMikgPT4gXCJm4oCmXCJcbiAqIC0gVGhlIGluZGljYXRvciBpcyBpbnNlcnRlZCBpZiBhbmQgb25seSBpZiB0aGUgc3RyaW5nIGlzIGNsaXBwZWQgYXQgYW55IHBsYWNlIG90aGVyIHRoYW4gYVxuICogICBuZXdsaW5lLiBFeGFtcGxlczpcbiAqICAgLSBjbGlwKFwiZm9vIGJhclwiLCA1KSA9PiBcImZvbyDigKZcIlxuICogICAtIGNsaXAoXCJmb29cXG5iYXJcIiwgNSkgPT4gXCJmb29cIlxuICogLSBJZiB0aGUgaHRtbCBvcHRpb24gaXMgdHJ1ZSBhbmQgdmFsaWQgSFRNTCBpcyBpbnNlcnRlZCwgdGhlIGNsaXBwZWQgb3V0cHV0ICptdXN0KiBhbHNvIGJlIHZhbGlkXG4gKiAgIEhUTUwuIElmIHRoZSBpbnB1dCBpcyBub3QgdmFsaWQgSFRNTCwgdGhlIHJlc3VsdCBpcyB1bmRlZmluZWQgKG5vdCB0byBiZSBjb25mdXNlZCB3aXRoIEpTJ1xuICogICBcInVuZGVmaW5lZFwiIHR5cGU7IHNvbWUgZXJyb3JzIG1pZ2h0IGJlIGRldGVjdGVkIGFuZCByZXN1bHQgaW4gYW4gZXhjZXB0aW9uLCBidXQgdGhpcyBpcyBub3RcbiAqICAgZ3VhcmFudGVlZCkuXG4gKlxuICogQHBhcmFtIHN0cmluZyBUaGUgc3RyaW5nIHRvIGNsaXAuXG4gKiBAcGFyYW0gbWF4TGVuZ3RoIFRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgY2xpcHBlZCBzdHJpbmcgaW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMuXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25hbCBvcHRpb25zIG9iamVjdC4gTWF5IGNvbnRhaW4gdGhlIGZvbGxvd2luZyBwcm9wZXJ0eTpcbiAqICAgICAgICAgICAgICAgIGJyZWFrV29yZHMgLSBCeSBkZWZhdWx0LCB3ZSB0cnkgdG8gYnJlYWsgb25seSBhdCB3b3JkIGJvdW5kYXJpZXMuIFNldCB0byB0cnVlIGlmXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyBpcyB1bmRlc2lyZWQuXG4gKiAgICAgICAgICAgICAgICBodG1sIC0gU2V0IHRvIHRydWUgaWYgdGhlIHN0cmluZyBpcyBIVE1MLWVuY29kZWQuIElmIHNvLCB0aGlzIG1ldGhvZCB3aWxsIHRha2VcbiAqICAgICAgICAgICAgICAgICAgICAgICBleHRyYSBjYXJlIHRvIG1ha2Ugc3VyZSB0aGUgSFRNTC1lbmNvZGluZyBpcyBjb3JyZWN0bHkgbWFpbnRhaW5lZC5cbiAqICAgICAgICAgICAgICAgIGltYWdlV2VpZ2h0IC0gVGhlIGFtb3VudCBvZiBjaGFyYWN0ZXJzIHRvIGFzc3VtZSBmb3IgaW1hZ2VzLiBUaGlzIGlzIHVzZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbmV2ZXIgYW4gaW1hZ2UgaXMgZW5jb3VudGVyZWQsIGJ1dCBhbHNvIGZvciBTVkcgYW5kIE1hdGhNTFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LiBEZWZhdWx0OiAyLlxuICogICAgICAgICAgICAgICAgaW5kaWNhdG9yIC0gVGhlIHN0cmluZyB0byBpbnNlcnQgdG8gaW5kaWNhdGUgY2xpcHBpbmcuIERlZmF1bHQ6IFwi4oCmXCIuXG4gKiAgICAgICAgICAgICAgICBtYXhMaW5lcyAtIE1heGltdW0gYW1vdW50IG9mIGxpbmVzIGFsbG93ZWQuIElmIGdpdmVuLCB0aGUgc3RyaW5nIHdpbGwgYmVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcHBlZCBlaXRoZXIgYXQgdGhlIG1vbWVudCB0aGUgbWF4aW11bSBhbW91bnQgb2YgY2hhcmFjdGVycyBpc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICBleGNlZWRlZCBvciB0aGUgbW9tZW50IG1heExpbmVzIG5ld2xpbmVzIGFyZSBkaXNjb3ZlcmVkLCB3aGljaGV2ZXJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tZXMgZmlyc3QuXG4gKlxuICogQHJldHVybiBUaGUgY2xpcHBlZCBzdHJpbmcuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2xpcChzdHJpbmcsIG1heExlbmd0aCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIGlmICghc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIHN0cmluZyA9IHN0cmluZy50b1N0cmluZygpO1xuXG4gICAgaWYgKG9wdGlvbnMuaW5kaWNhdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3B0aW9ucy5pbmRpY2F0b3IgPSBcIlxcdTIwMjZcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucy5odG1sID8gY2xpcEh0bWwoc3RyaW5nLCBtYXhMZW5ndGgsIG9wdGlvbnMpIDogY2xpcFBsYWluVGV4dChzdHJpbmcsIG1heExlbmd0aCwgb3B0aW9ucyk7XG59O1xuXG5mdW5jdGlvbiBjbGlwSHRtbChzdHJpbmcsIG1heExlbmd0aCwgb3B0aW9ucykge1xuICAgIHZhciBfb3B0aW9ucyRpbWFnZVdlaWdodCA9IG9wdGlvbnMuaW1hZ2VXZWlnaHQsXG4gICAgICAgIGltYWdlV2VpZ2h0ID0gX29wdGlvbnMkaW1hZ2VXZWlnaHQgPT09IHVuZGVmaW5lZCA/IDIgOiBfb3B0aW9ucyRpbWFnZVdlaWdodCxcbiAgICAgICAgaW5kaWNhdG9yID0gb3B0aW9ucy5pbmRpY2F0b3IsXG4gICAgICAgIG1heExpbmVzID0gb3B0aW9ucy5tYXhMaW5lcztcblxuXG4gICAgdmFyIG51bUNoYXJzID0gaW5kaWNhdG9yLmxlbmd0aDtcbiAgICB2YXIgbnVtTGluZXMgPSAxO1xuXG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBpc1VuYnJlYWthYmxlQ29udGVudCA9IGZhbHNlO1xuICAgIHZhciB0YWdTdGFjayA9IFtdO1xuICAgIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXG4gICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcmVzdCA9IGkgPyBzdHJpbmcuc2xpY2UoaSkgOiBzdHJpbmc7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSByZXN0LnNlYXJjaChDSEFSX09GX0lOVEVSRVNUX1JFR0VYKTtcbiAgICAgICAgdmFyIG5leHRCbG9ja1NpemUgPSBuZXh0SW5kZXggPiAtMSA/IG5leHRJbmRleCA6IHJlc3QubGVuZ3RoO1xuICAgICAgICBpICs9IG5leHRCbG9ja1NpemU7XG5cbiAgICAgICAgaWYgKCFpc1VuYnJlYWthYmxlQ29udGVudCkge1xuICAgICAgICAgICAgbnVtQ2hhcnMgKz0gbmV4dEJsb2NrU2l6ZTtcbiAgICAgICAgICAgIGlmIChudW1DaGFycyA+IG1heExlbmd0aCkge1xuICAgICAgICAgICAgICAgIGkgPSBNYXRoLm1heChpIC0gbnVtQ2hhcnMgKyBtYXhMZW5ndGgsIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjaGFyQ29kZSA9PT0gVEFHX09QRU5fQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICB2YXIgbmV4dENoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICAgICAgdmFyIGlzU3BlY2lhbFRhZyA9IG5leHRDaGFyQ29kZSA9PT0gRVhDTEFNQVRJT05fQ0hBUl9DT0RFO1xuICAgICAgICAgICAgaWYgKGlzU3BlY2lhbFRhZyAmJiBzdHJpbmcuc3Vic3RyKGkgKyAyLCAyKSA9PT0gXCItLVwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnRFbmRJbmRleCA9IHN0cmluZy5pbmRleE9mKFwiLS0+XCIsIGkgKyA0KSArIDM7XG4gICAgICAgICAgICAgICAgaSA9IGNvbW1lbnRFbmRJbmRleCAtIDE7IC8vIC0gMSBiZWNhdXNlIHRoZSBvdXRlciBmb3IgbG9vcCB3aWxsIGluY3JlbWVudCBpdFxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1NwZWNpYWxUYWcgJiYgc3RyaW5nLnN1YnN0cihpICsgMiwgNykgPT09IFwiW0NEQVRBW1wiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNkYXRhRW5kSW5kZXggPSBzdHJpbmcuaW5kZXhPZihcIl1dPlwiLCBpICsgOSkgKyAzO1xuICAgICAgICAgICAgICAgIGkgPSBjZGF0YUVuZEluZGV4IC0gMTsgLy8gLSAxIGJlY2F1c2UgdGhlIG91dGVyIGZvciBsb29wIHdpbGwgaW5jcmVtZW50IGl0XG5cbiAgICAgICAgICAgICAgICAvLyBub3RlIHdlIGRvbid0IGNvdW50IENEQVRBIHRleHQgZm9yIG91ciBjaGFyYWN0ZXIgbGltaXQgYmVjYXVzZSBpdCBpcyBvbmx5XG4gICAgICAgICAgICAgICAgLy8gYWxsb3dlZCB3aXRoaW4gU1ZHIGFuZCBNYXRoTUwgY29udGVudCwgYm90aCBvZiB3aGljaCB3ZSBkb24ndCBjbGlwXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGRvbid0IG9wZW4gbmV3IHRhZ3MgaWYgd2UgYXJlIGN1cnJlbnRseSBhdCB0aGUgbGltaXRcbiAgICAgICAgICAgICAgICBpZiAobnVtQ2hhcnMgPT09IG1heExlbmd0aCAmJiBzdHJpbmcuY2hhckNvZGVBdChpICsgMSkgIT09IEZPUldBUkRfU0xBU0hfQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bUNoYXJzKys7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVRdW90ZUNoYXJDb2RlID0gMDtcbiAgICAgICAgICAgICAgICB2YXIgZW5kSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIHZhciBpc0F0dHJpYnV0ZVZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUgLyogZXNsaW50LWRpc2FibGUtbGluZSAqLykge1xuICAgICAgICAgICAgICAgICAgICBlbmRJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW5kSW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEhUTUw6IFwiICsgc3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBfY2hhckNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChlbmRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0F0dHJpYnV0ZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlUXVvdGVDaGFyQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfY2hhckNvZGUgPT09IGF0dHJpYnV0ZVF1b3RlQ2hhckNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBdHRyaWJ1dGVWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzV2hpdGVTcGFjZShfY2hhckNvZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXR0cmlidXRlVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9jaGFyQ29kZSA9PT0gVEFHX0NMT1NFX0NIQVJfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0F0dHJpYnV0ZVZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEluZGV4LS07IC8vIHJlLWV2YWx1YXRlIHRoaXMgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9jaGFyQ29kZSA9PT0gRVFVQUxfU0lHTl9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChpc1doaXRlU3BhY2Uoc3RyaW5nLmNoYXJDb2RlQXQoZW5kSW5kZXggKyAxKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRJbmRleCsrOyAvLyBza2lwIHdoaXRlc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQXR0cmlidXRlVmFsdWUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3RBdHRyaWJ1dGVDaGFyQ29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGVuZEluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RBdHRyaWJ1dGVDaGFyQ29kZSA9PT0gRE9VQkxFX1FVT1RFX0NIQVJfQ09ERSB8fCBmaXJzdEF0dHJpYnV0ZUNoYXJDb2RlID09PSBTSU5HTEVfUVVPVEVfQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVvdGVDaGFyQ29kZSA9IGZpcnN0QXR0cmlidXRlQ2hhckNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVvdGVDaGFyQ29kZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX2NoYXJDb2RlID09PSBUQUdfQ0xPU0VfQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNFbmRUYWcgPSBzdHJpbmcuY2hhckNvZGVBdChpICsgMSkgPT09IEZPUldBUkRfU0xBU0hfQ0hBUl9DT0RFO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhZ05hbWVTdGFydEluZGV4ID0gaSArIChpc0VuZFRhZyA/IDIgOiAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YWdOYW1lRW5kSW5kZXggPSBNYXRoLm1pbihpbmRleE9mV2hpdGVTcGFjZShzdHJpbmcsIHRhZ05hbWVTdGFydEluZGV4KSwgZW5kSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhZ05hbWUgPSBzdHJpbmcuc2xpY2UodGFnTmFtZVN0YXJ0SW5kZXgsIHRhZ05hbWVFbmRJbmRleCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWdOYW1lLmNoYXJDb2RlQXQodGFnTmFtZS5sZW5ndGggLSAxKSA9PT0gRk9SV0FSRF9TTEFTSF9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdHJhaWxpbmcgc2xhc2ggZm9yIHNlbGYtY2xvc2luZyB0YWcgbmFtZXMgbGlrZSA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnNsaWNlKDAsIHRhZ05hbWUubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0VuZFRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VGFnTmFtZSA9IHRhZ1N0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGFnTmFtZSAhPT0gdGFnTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEhUTUw6IFwiICsgc3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gXCJtYXRoXCIgfHwgdGFnTmFtZSA9PT0gXCJzdmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VuYnJlYWthYmxlQ29udGVudCA9IHRhZ1N0YWNrLmluZGV4T2YoXCJtYXRoXCIpICE9PSAtMSB8fCB0YWdTdGFjay5pbmRleE9mKFwic3ZnXCIpICE9PSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1VuYnJlYWthYmxlQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtQ2hhcnMgKz0gaW1hZ2VXZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtQ2hhcnMgPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCTE9DS19FTEVNRU5UUy5pbmRleE9mKHRhZ05hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGwgYmxvY2sgbGV2ZWwgZWxlbWVudHMgc2hvdWxkIHRyaWdnZXIgYSBuZXcgbGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHRydW5jYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1VuYnJlYWthYmxlQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1MaW5lcyA+IG1heExpbmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgZXhjZWVkIHRoZSBtYXggbGluZXMsIHB1c2ggdGhlIHRhZyBiYWNrIG9udG8gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhY2sgc28gdGhhdCBpdCB3aWxsIGJlIGFkZGVkIGJhY2sgY29ycmVjdGx5IGFmdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJ1bmNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ1N0YWNrLnB1c2godGFnTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFZPSURfRUxFTUVOVFMuaW5kZXhPZih0YWdOYW1lKSAhPT0gLTEgfHwgc3RyaW5nLmNoYXJDb2RlQXQoZW5kSW5kZXggLSAxKSA9PT0gRk9SV0FSRF9TTEFTSF9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gXCJiclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bUxpbmVzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1MaW5lcyA+IG1heExpbmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJpbWdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1DaGFycyArPSBpbWFnZVdlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bUNoYXJzID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnU3RhY2sucHVzaCh0YWdOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gXCJtYXRoXCIgfHwgdGFnTmFtZSA9PT0gXCJzdmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VuYnJlYWthYmxlQ29udGVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gZW5kSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobnVtQ2hhcnMgPiBtYXhMZW5ndGggfHwgbnVtTGluZXMgPiBtYXhMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhckNvZGUgPT09IEFNUEVSU0FORF9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgIHZhciBfZW5kSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgIHZhciBpc0NoYXJhY3RlclJlZmVyZW5jZSA9IHRydWU7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSAvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9jaGFyQ29kZTIgPSBzdHJpbmcuY2hhckNvZGVBdChfZW5kSW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChpc0NoYXJhY3RlclJlZmVyZW5jZUNoYXJhY3RlcihfY2hhckNvZGUyKSkge1xuICAgICAgICAgICAgICAgICAgICBfZW5kSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9jaGFyQ29kZTIgPT09IFNFTUlDT0xPTl9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNDaGFyYWN0ZXJSZWZlcmVuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzVW5icmVha2FibGVDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgbnVtQ2hhcnMrKztcbiAgICAgICAgICAgICAgICBpZiAobnVtQ2hhcnMgPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNDaGFyYWN0ZXJSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICBpID0gX2VuZEluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNoYXJDb2RlID09PSBORVdMSU5FX0NIQVJfQ09ERSkge1xuICAgICAgICAgICAgaWYgKCFpc1VuYnJlYWthYmxlQ29udGVudCkge1xuICAgICAgICAgICAgICAgIG51bUNoYXJzKys7XG4gICAgICAgICAgICAgICAgaWYgKG51bUNoYXJzID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG51bUxpbmVzKys7XG4gICAgICAgICAgICAgICAgaWYgKG51bUxpbmVzID4gbWF4TGluZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFpc1VuYnJlYWthYmxlQ29udGVudCkge1xuICAgICAgICAgICAgICAgIG51bUNoYXJzKys7XG4gICAgICAgICAgICAgICAgaWYgKG51bUNoYXJzID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaGlnaCBVbmljb2RlIHN1cnJvZ2F0ZSBzaG91bGQgbmV2ZXIgYmUgc2VwYXJhdGVkIGZyb20gaXRzIG1hdGNoaW5nIGxvdyBzdXJyb2dhdGVcbiAgICAgICAgICAgIHZhciBfbmV4dENoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICAgICAgaWYgKChfbmV4dENoYXJDb2RlICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG51bUNoYXJzID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgIHZhciBuZXh0Q2hhciA9IHRha2VIdG1sQ2hhckF0KHN0cmluZywgaSk7XG4gICAgICAgIGlmIChpbmRpY2F0b3IpIHtcbiAgICAgICAgICAgIHZhciBwZWVrSW5kZXggPSBpICsgbmV4dENoYXIubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKHN0cmluZy5jaGFyQ29kZUF0KHBlZWtJbmRleCkgPT09IFRBR19PUEVOX0NIQVJfQ09ERSAmJiBzdHJpbmcuY2hhckNvZGVBdChwZWVrSW5kZXggKyAxKSA9PT0gRk9SV0FSRF9TTEFTSF9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dFBlZWtJbmRleCA9IHN0cmluZy5pbmRleE9mKFwiPlwiLCBwZWVrSW5kZXggKyAyKSArIDE7XG4gICAgICAgICAgICAgICAgaWYgKG5leHRQZWVrSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcGVla0luZGV4ID0gbmV4dFBlZWtJbmRleDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwZWVrSW5kZXggJiYgKHBlZWtJbmRleCA9PT0gc3RyaW5nLmxlbmd0aCB8fCBpc0xpbmVCcmVhayhzdHJpbmcsIHBlZWtJbmRleCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUncyBvbmx5IGEgc2luZ2xlIGNoYXJhY3RlciByZW1haW5pbmcgaW4gdGhlIGlucHV0IHN0cmluZywgb3IgdGhlIG5leHRcbiAgICAgICAgICAgICAgICAvLyBjaGFyYWN0ZXIgaXMgZm9sbG93ZWQgYnkgYSBsaW5lLWJyZWFrLCB3ZSBjYW4gaW5jbHVkZSBpdCBpbnN0ZWFkIG9mIHRoZSBjbGlwcGluZ1xuICAgICAgICAgICAgICAgIC8vIGluZGljYXRvciAocHJvdmlkZWQgaXQncyBub3QgYSBzcGVjaWFsIEhUTUwgY2hhcmFjdGVyKVxuICAgICAgICAgICAgICAgIGkgKz0gbmV4dENoYXIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG5leHRDaGFyID0gc3RyaW5nLmNoYXJBdChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluY2x1ZGUgY2xvc2luZyB0YWdzIGJlZm9yZSBhZGRpbmcgdGhlIGNsaXBwaW5nIGluZGljYXRvciBpZiB0aGF0J3Mgd2hlcmUgdGhleVxuICAgICAgICAvLyBhcmUgaW4gdGhlIGlucHV0IHN0cmluZ1xuICAgICAgICB3aGlsZSAobmV4dENoYXIgPT09IFwiPFwiICYmIHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKSA9PT0gRk9SV0FSRF9TTEFTSF9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgIHZhciBfdGFnTmFtZSA9IHRhZ1N0YWNrLnBvcCgpO1xuICAgICAgICAgICAgdmFyIHRhZ0VuZEluZGV4ID0gX3RhZ05hbWUgPyBzdHJpbmcuaW5kZXhPZihcIj5cIiwgaSArIDIpIDogLTE7XG4gICAgICAgICAgICBpZiAodGFnRW5kSW5kZXggPT09IC0xIHx8IHN0cmluZy5yZXBsYWNlKFRSSU1fRU5EX1JFR0VYLCBcIlwiKS5zbGljZShpICsgMiwgdGFnRW5kSW5kZXgpICE9PSBfdGFnTmFtZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgSFRNTDogXCIgKyBzdHJpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpID0gdGFnRW5kSW5kZXggKyAxO1xuICAgICAgICAgICAgbmV4dENoYXIgPSBzdHJpbmcuY2hhckF0KGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPCBzdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuYnJlYWtXb3Jkcykge1xuICAgICAgICAgICAgICAgIC8vIHRyeSB0byBjbGlwIGF0IHdvcmQgYm91bmRhcmllcywgaWYgZGVzaXJlZFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBpIC0gaW5kaWNhdG9yLmxlbmd0aDsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jaGFyQ29kZTMgPSBzdHJpbmcuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGFyQ29kZTMgPT09IFRBR19DTE9TRV9DSEFSX0NPREUgfHwgX2NoYXJDb2RlMyA9PT0gU0VNSUNPTE9OX0NIQVJfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgY2hhcmFjdGVycyBjb3VsZCBiZSBqdXN0IHJlZ3VsYXIgY2hhcmFjdGVycywgc28gaWYgdGhleSBvY2N1ciBpblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG1pZGRsZSBvZiBhIHdvcmQsIHRoZXkgd291bGQgXCJicmVha1wiIG91ciBhdHRlbXB0IHRvIHByZXZlbnQgYnJlYWtpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIHdvcmRzLCBidXQgZ2l2ZW4gdGhpcyBzZWVtcyBoaWdobHkgdW5saWtlbHkgYW5kIHRoZSBhbHRlcm5hdGl2ZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG9pbmcgYW5vdGhlciBmdWxsIHBhcnNpbmcgb2YgdGhlIHByZWNlZGluZyB0ZXh0LCB0aGlzIHNlZW1zIGFjY2VwdGFibGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfY2hhckNvZGUzID09PSBORVdMSU5FX0NIQVJfQ09ERSB8fCBfY2hhckNvZGUzID09PSBUQUdfT1BFTl9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNXaGl0ZVNwYWNlKF9jaGFyQ29kZTMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gaiArIChpbmRpY2F0b3IgPyAxIDogMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHN0cmluZy5zbGljZSgwLCBpKSArIChpc0xpbmVCcmVhayhzdHJpbmcsIGkpID8gXCJcIiA6IGluZGljYXRvcik7XG4gICAgICAgICAgICB3aGlsZSAodGFnU3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90YWdOYW1lMiA9IHRhZ1N0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIjwvXCIgKyBfdGFnTmFtZTIgKyBcIj5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG51bUxpbmVzID4gbWF4TGluZXMpIHtcbiAgICAgICAgdmFyIF9yZXN1bHQgPSBzdHJpbmcuc2xpY2UoMCwgaSk7XG4gICAgICAgIHdoaWxlICh0YWdTdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBfdGFnTmFtZTMgPSB0YWdTdGFjay5wb3AoKTtcbiAgICAgICAgICAgIF9yZXN1bHQgKz0gXCI8L1wiICsgX3RhZ05hbWUzICsgXCI+XCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gY2xpcFBsYWluVGV4dChzdHJpbmcsIG1heExlbmd0aCwgb3B0aW9ucykge1xuICAgIHZhciBpbmRpY2F0b3IgPSBvcHRpb25zLmluZGljYXRvcixcbiAgICAgICAgbWF4TGluZXMgPSBvcHRpb25zLm1heExpbmVzO1xuXG5cbiAgICB2YXIgbnVtQ2hhcnMgPSBpbmRpY2F0b3IubGVuZ3RoO1xuICAgIHZhciBudW1MaW5lcyA9IDE7XG5cbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG51bUNoYXJzKys7XG4gICAgICAgIGlmIChudW1DaGFycyA+IG1heExlbmd0aCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhckNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGNoYXJDb2RlID09PSBORVdMSU5FX0NIQVJfQ09ERSkge1xuICAgICAgICAgICAgbnVtTGluZXMrKztcbiAgICAgICAgICAgIGlmIChudW1MaW5lcyA+IG1heExpbmVzKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKGNoYXJDb2RlICYgMHhmYzAwKSA9PT0gMHhkODAwKSB7XG4gICAgICAgICAgICAvLyBoaWdoIFVuaWNvZGUgc3Vycm9nYXRlIHNob3VsZCBuZXZlciBiZSBzZXBhcmF0ZWQgZnJvbSBpdHMgbWF0Y2hpbmcgbG93IHN1cnJvZ2F0ZVxuICAgICAgICAgICAgdmFyIG5leHRDaGFyQ29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgICAgIGlmICgobmV4dENoYXJDb2RlICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG51bUNoYXJzID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgIHZhciBuZXh0Q2hhciA9IHRha2VDaGFyQXQoc3RyaW5nLCBpKTtcbiAgICAgICAgaWYgKGluZGljYXRvcikge1xuICAgICAgICAgICAgdmFyIHBlZWtJbmRleCA9IGkgKyBuZXh0Q2hhci5sZW5ndGg7XG4gICAgICAgICAgICBpZiAocGVla0luZGV4ID09PSBzdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyaW5nLmNoYXJDb2RlQXQocGVla0luZGV4KSA9PT0gTkVXTElORV9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGkgKyBuZXh0Q2hhci5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLmJyZWFrV29yZHMpIHtcbiAgICAgICAgICAgIC8vIHRyeSB0byBjbGlwIGF0IHdvcmQgYm91bmRhcmllcywgaWYgZGVzaXJlZFxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IGkgLSBpbmRpY2F0b3IubGVuZ3RoOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICAgIHZhciBfY2hhckNvZGU0ID0gc3RyaW5nLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKF9jaGFyQ29kZTQgPT09IE5FV0xJTkVfQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgICAgICAgICBuZXh0Q2hhciA9IFwiXFxuXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNXaGl0ZVNwYWNlKF9jaGFyQ29kZTQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSBqICsgKGluZGljYXRvciA/IDEgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBpKSArIChuZXh0Q2hhciA9PT0gXCJcXG5cIiA/IFwiXCIgOiBpbmRpY2F0b3IpO1xuICAgIH0gZWxzZSBpZiAobnVtTGluZXMgPiBtYXhMaW5lcykge1xuICAgICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGkpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGluZGV4T2ZXaGl0ZVNwYWNlKHN0cmluZywgZnJvbUluZGV4KSB7XG4gICAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gZnJvbUluZGV4OyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzV2hpdGVTcGFjZShzdHJpbmcuY2hhckNvZGVBdChpKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHJhdGhlciB0aGFuIC0xLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nIGlmIG5vIG1hdGNoIGlzIGZvdW5kLFxuICAgIC8vIHNvIGl0IHdvcmtzIHdlbGwgd2l0aCB0aGUgTWF0aC5taW4oKSB1c2FnZSBiZWxvd1xuICAgIHJldHVybiBsZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGlzQ2hhcmFjdGVyUmVmZXJlbmNlQ2hhcmFjdGVyKGNoYXJDb2RlKSB7XG4gICAgcmV0dXJuIGNoYXJDb2RlID49IDQ4ICYmIGNoYXJDb2RlIDw9IDU3IHx8IGNoYXJDb2RlID49IDY1ICYmIGNoYXJDb2RlIDw9IDkwIHx8IGNoYXJDb2RlID49IDk3ICYmIGNoYXJDb2RlIDw9IDEyMjtcbn1cblxuZnVuY3Rpb24gaXNMaW5lQnJlYWsoc3RyaW5nLCBpbmRleCkge1xuICAgIHZhciBmaXJzdENoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgIGlmIChmaXJzdENoYXJDb2RlID09PSBORVdMSU5FX0NIQVJfQ09ERSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGZpcnN0Q2hhckNvZGUgPT09IFRBR19PUEVOX0NIQVJfQ09ERSkge1xuICAgICAgICB2YXIgbmV3bGluZUVsZW1lbnRzID0gXCIoXCIgKyBCTE9DS19FTEVNRU5UUy5qb2luKFwifFwiKSArIFwifGJyKVwiO1xuICAgICAgICB2YXIgbmV3bGluZVJlZ0V4cCA9IG5ldyBSZWdFeHAoXCJePFwiICsgbmV3bGluZUVsZW1lbnRzICsgXCJbXFx0XFxuXFxmXFxyIF0qLz8+XCIsIFwiaVwiKTtcbiAgICAgICAgcmV0dXJuIG5ld2xpbmVSZWdFeHAudGVzdChzdHJpbmcuc2xpY2UoaW5kZXgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1doaXRlU3BhY2UoY2hhckNvZGUpIHtcbiAgICByZXR1cm4gY2hhckNvZGUgPT09IDkgfHwgY2hhckNvZGUgPT09IDEwIHx8IGNoYXJDb2RlID09PSAxMiB8fCBjaGFyQ29kZSA9PT0gMTMgfHwgY2hhckNvZGUgPT09IDMyO1xufVxuXG5mdW5jdGlvbiB0YWtlQ2hhckF0KHN0cmluZywgaW5kZXgpIHtcbiAgICB2YXIgY2hhckNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpbmRleCk7XG4gICAgaWYgKChjaGFyQ29kZSAmIDB4ZmMwMCkgPT09IDB4ZDgwMCkge1xuICAgICAgICAvLyBoaWdoIFVuaWNvZGUgc3Vycm9nYXRlIHNob3VsZCBuZXZlciBiZSBzZXBhcmF0ZWQgZnJvbSBpdHMgbWF0Y2hpbmcgbG93IHN1cnJvZ2F0ZVxuICAgICAgICB2YXIgbmV4dENoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaW5kZXggKyAxKTtcbiAgICAgICAgaWYgKChuZXh0Q2hhckNvZGUgJiAweGZjMDApID09PSAweGRjMDApIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlLCBuZXh0Q2hhckNvZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKTtcbn1cblxuZnVuY3Rpb24gdGFrZUh0bWxDaGFyQXQoc3RyaW5nLCBpbmRleCkge1xuICAgIHZhciBjaGFyID0gdGFrZUNoYXJBdChzdHJpbmcsIGluZGV4KTtcbiAgICBpZiAoY2hhciA9PT0gXCImXCIpIHtcbiAgICAgICAgd2hpbGUgKHRydWUgLyogZXNsaW50LWRpc2FibGUtbGluZSAqLykge1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIHZhciBuZXh0Q2hhckNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpbmRleCk7XG4gICAgICAgICAgICBpZiAoaXNDaGFyYWN0ZXJSZWZlcmVuY2VDaGFyYWN0ZXIobmV4dENoYXJDb2RlKSkge1xuICAgICAgICAgICAgICAgIGNoYXIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhckNvZGUgPT09IFNFTUlDT0xPTl9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICBjaGFyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNoYXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==