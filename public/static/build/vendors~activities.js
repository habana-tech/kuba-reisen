(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~activities"],{

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

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

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = HAS_SPECIES_SUPPORT && !fails(function () {
  [].filter.call({ length: -1, 0: 1 }, function (it) { throw it; });
});

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


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

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


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

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29ycmVjdC1pcy1yZWdleHAtbG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mb3JjZWQtc3RyaW5nLWh0bWwtbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9ub3QtYS1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RleHQtY2xpcHBlci9k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QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InZlbmRvcnN+YWN0aXZpdGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICB2YXIgcmVnZXhwID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlZ2V4cFtNQVRDSF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiAnLy4vJ1tNRVRIT0RfTkFNRV0ocmVnZXhwKTtcbiAgICB9IGNhdGNoIChmKSB7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gZmFsc2U7XG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciBxdW90ID0gL1wiL2c7XG5cbi8vIEIuMi4zLjIuMSBDcmVhdGVIVE1MKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRlaHRtbFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgdmFyIFMgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZShzdHJpbmcpKTtcbiAgdmFyIHAxID0gJzwnICsgdGFnO1xuICBpZiAoYXR0cmlidXRlICE9PSAnJykgcDEgKz0gJyAnICsgYXR0cmlidXRlICsgJz1cIicgKyBTdHJpbmcodmFsdWUpLnJlcGxhY2UocXVvdCwgJyZxdW90OycpICsgJ1wiJztcbiAgcmV0dXJuIHAxICsgJz4nICsgUyArICc8LycgKyB0YWcgKyAnPic7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIGNoZWNrIHRoZSBleGlzdGVuY2Ugb2YgYSBtZXRob2QsIGxvd2VyY2FzZVxuLy8gb2YgYSB0YWcgYW5kIGVzY2FwaW5nIHF1b3RlcyBpbiBhcmd1bWVudHNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRlc3QgPSAnJ1tNRVRIT0RfTkFNRV0oJ1wiJyk7XG4gICAgcmV0dXJuIHRlc3QgIT09IHRlc3QudG9Mb3dlckNhc2UoKSB8fCB0ZXN0LnNwbGl0KCdcIicpLmxlbmd0aCA+IDM7XG4gIH0pO1xufTtcbiIsInZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzUmVnRXhwKGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIlRoZSBtZXRob2QgZG9lc24ndCBhY2NlcHQgcmVndWxhciBleHByZXNzaW9uc1wiKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnZmlsdGVyJyk7XG4vLyBFZGdlIDE0LSBpc3N1ZVxudmFyIFVTRVNfVE9fTEVOR1RIID0gSEFTX1NQRUNJRVNfU1VQUE9SVCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICBbXS5maWx0ZXIuY2FsbCh7IGxlbmd0aDogLTEsIDA6IDEgfSwgZnVuY3Rpb24gKGl0KSB7IHRocm93IGl0OyB9KTtcbn0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZnJvbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mcm9tJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIEFycmF5LmZyb20oaXRlcmFibGUpO1xufSk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIGZyb206IGZyb21cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5jbHVkZXM7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlIH0sIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKCdpbmNsdWRlcycpO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG4vLyBgQXJyYXkuaXNBcnJheWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5pc2FycmF5XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlIH0sIHtcbiAgaXNBcnJheTogaXNBcnJheVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgc2xvcHB5QXJyYXlNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2xvcHB5LWFycmF5LW1ldGhvZCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNMT1BQWV9NRVRIT0QgPSBzbG9wcHlBcnJheU1ldGhvZCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRVMzX1NUUklOR1MgfHwgU0xPUFBZX01FVEhPRCB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4uY2FsbCh0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgc2xvcHB5QXJyYXlNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2xvcHB5LWFycmF5LW1ldGhvZCcpO1xuXG52YXIgdGVzdCA9IFtdO1xudmFyIG5hdGl2ZVNvcnQgPSB0ZXN0LnNvcnQ7XG5cbi8vIElFOC1cbnZhciBGQUlMU19PTl9VTkRFRklORUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSk7XG4vLyBWOCBidWdcbnZhciBGQUlMU19PTl9OVUxMID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQobnVsbCk7XG59KTtcbi8vIE9sZCBXZWJLaXRcbnZhciBTTE9QUFlfTUVUSE9EID0gc2xvcHB5QXJyYXlNZXRob2QoJ3NvcnQnKTtcblxudmFyIEZPUkNFRCA9IEZBSUxTX09OX1VOREVGSU5FRCB8fCAhRkFJTFNfT05fTlVMTCB8fCBTTE9QUFlfTUVUSE9EO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNvcnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvcnRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/IG5hdGl2ZVNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSlcbiAgICAgIDogbmF0aXZlU29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpLCBhRnVuY3Rpb24oY29tcGFyZWZuKSk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgbm90QVJlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3QtYS1yZWdleHAnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGNvcnJlY3RJc1JlZ0V4cExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhY29ycmVjdElzUmVnRXhwTG9naWMoJ2luY2x1ZGVzJykgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qICwgcG9zaXRpb24gPSAwICovKSB7XG4gICAgcmV0dXJuICEhflN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKVxuICAgICAgLmluZGV4T2Yobm90QVJlZ0V4cChzZWFyY2hTdHJpbmcpLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSFRNTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaHRtbCcpO1xudmFyIGZvcmNlZFN0cmluZ0hUTUxNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZm9yY2VkLXN0cmluZy1odG1sLW1ldGhvZCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5saW5rYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubGlua1xuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IGZvcmNlZFN0cmluZ0hUTUxNZXRob2QoJ2xpbmsnKSB9LCB7XG4gIGxpbms6IGZ1bmN0aW9uIGxpbmsodXJsKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2EnLCAnaHJlZicsIHVybCk7XG4gIH1cbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIFZvaWQgZWxlbWVudHMgYXJlIGVsZW1lbnRzIHdpdGhvdXQgaW5uZXIgY29udGVudCxcbi8vIHdoaWNoIGNsb3NlIHRoZW1zZWx2ZXMgcmVnYXJkbGVzcyBvZiB0cmFpbGluZyBzbGFzaC5cbi8vIEUuZy4gYm90aCA8YnI+IGFuZCA8YnIgLz4gYXJlIHNlbGYtY2xvc2luZy5cbnZhciBWT0lEX0VMRU1FTlRTID0gW1wiYXJlYVwiLCBcImJhc2VcIiwgXCJiclwiLCBcImNvbFwiLCBcImNvbW1hbmRcIiwgXCJlbWJlZFwiLCBcImhyXCIsIFwiaW1nXCIsIFwiaW5wdXRcIiwgXCJrZXlnZW5cIiwgXCJsaW5rXCIsIFwibWV0YVwiLCBcInBhcmFtXCIsIFwic291cmNlXCIsIFwidHJhY2tcIiwgXCJ3YnJcIl07XG5cbi8vIEJsb2NrIGVsZW1lbnRzIHRyaWdnZXIgbmV3bGluZXMgd2hlcmUgdGhleSdyZSBpbnNlcnRlZCxcbi8vIGFuZCBhcmUgYWx3YXlzIHNhZmUgcGxhY2VzIGZvciB0cnVuY2F0aW9uLlxudmFyIEJMT0NLX0VMRU1FTlRTID0gW1wiYWRkcmVzc1wiLCBcImFydGljbGVcIiwgXCJhc2lkZVwiLCBcImJsb2NrcXVvdGVcIiwgXCJjYW52YXNcIiwgXCJkZFwiLCBcImRpdlwiLCBcImRsXCIsIFwiZHRcIiwgXCJmaWVsZHNldFwiLCBcImZpZ2NhcHRpb25cIiwgXCJmaWd1cmVcIiwgXCJmb290ZXJcIiwgXCJmb3JtXCIsIFwiaDFcIiwgXCJoMlwiLCBcImgzXCIsIFwiaDRcIiwgXCJoNVwiLCBcImg2XCIsIFwiaGVhZGVyXCIsIFwiaGdyb3VwXCIsIFwiaHJcIiwgXCJsaVwiLCBcIm1haW5cIiwgXCJuYXZcIiwgXCJub3NjcmlwdFwiLCBcIm9sXCIsIFwib3V0cHV0XCIsIFwicFwiLCBcInByZVwiLCBcInNlY3Rpb25cIiwgXCJ0YWJsZVwiLCBcInRmb290XCIsIFwidWxcIiwgXCJ2aWRlb1wiXTtcblxudmFyIE5FV0xJTkVfQ0hBUl9DT0RFID0gMTA7IC8vICdcXG4nXG52YXIgRVhDTEFNQVRJT05fQ0hBUl9DT0RFID0gMzM7IC8vICchJ1xudmFyIERPVUJMRV9RVU9URV9DSEFSX0NPREUgPSAzNDsgLy8gJ1wiJ1xudmFyIEFNUEVSU0FORF9DSEFSX0NPREUgPSAzODsgLy8gJyYnXG52YXIgU0lOR0xFX1FVT1RFX0NIQVJfQ09ERSA9IDM5OyAvLyAnXFwnJ1xudmFyIEZPUldBUkRfU0xBU0hfQ0hBUl9DT0RFID0gNDc7IC8vICcvJ1xudmFyIFNFTUlDT0xPTl9DSEFSX0NPREUgPSA1OTsgLy8gJzsnXG52YXIgVEFHX09QRU5fQ0hBUl9DT0RFID0gNjA7IC8vICc8J1xudmFyIEVRVUFMX1NJR05fQ0hBUl9DT0RFID0gNjE7IC8vICc9J1xudmFyIFRBR19DTE9TRV9DSEFSX0NPREUgPSA2MjsgLy8gJz4nXG5cbnZhciBDSEFSX09GX0lOVEVSRVNUX1JFR0VYID0gL1s8JlxcblxcdWQ4MDAtXFx1ZGJmZl0vO1xuXG52YXIgVFJJTV9FTkRfUkVHRVggPSAvXFxzKyQvO1xuXG4vKipcbiAqIENsaXBzIGEgc3RyaW5nIHRvIGEgbWF4aW11bSBsZW5ndGguIElmIHRoZSBzdHJpbmcgZXhjZWVkcyB0aGUgbGVuZ3RoLCBpdCBpcyB0cnVuY2F0ZWQgYW5kIGFuXG4gKiBpbmRpY2F0b3IgKGFuIGVsbGlwc2lzLCBieSBkZWZhdWx0KSBpcyBhcHBlbmRlZC5cbiAqXG4gKiBJbiBkZXRhaWwsIHRoZSBjbGlwcGluZyBydWxlcyBhcmUgYXMgZm9sbG93czpcbiAqIC0gVGhlIHJlc3VsdGluZyBjbGlwcGVkIHN0cmluZyBtYXkgbmV2ZXIgY29udGFpbiBtb3JlIHRoYW4gbWF4TGVuZ3RoIGNoYXJhY3RlcnMuIEV4YW1wbGVzOlxuICogICAtIGNsaXAoXCJmb29cIiwgMykgPT4gXCJmb29cIlxuICogICAtIGNsaXAoXCJmb29cIiwgMikgPT4gXCJm4oCmXCJcbiAqIC0gVGhlIGluZGljYXRvciBpcyBpbnNlcnRlZCBpZiBhbmQgb25seSBpZiB0aGUgc3RyaW5nIGlzIGNsaXBwZWQgYXQgYW55IHBsYWNlIG90aGVyIHRoYW4gYVxuICogICBuZXdsaW5lLiBFeGFtcGxlczpcbiAqICAgLSBjbGlwKFwiZm9vIGJhclwiLCA1KSA9PiBcImZvbyDigKZcIlxuICogICAtIGNsaXAoXCJmb29cXG5iYXJcIiwgNSkgPT4gXCJmb29cIlxuICogLSBJZiB0aGUgaHRtbCBvcHRpb24gaXMgdHJ1ZSBhbmQgdmFsaWQgSFRNTCBpcyBpbnNlcnRlZCwgdGhlIGNsaXBwZWQgb3V0cHV0ICptdXN0KiBhbHNvIGJlIHZhbGlkXG4gKiAgIEhUTUwuIElmIHRoZSBpbnB1dCBpcyBub3QgdmFsaWQgSFRNTCwgdGhlIHJlc3VsdCBpcyB1bmRlZmluZWQgKG5vdCB0byBiZSBjb25mdXNlZCB3aXRoIEpTJ1xuICogICBcInVuZGVmaW5lZFwiIHR5cGU7IHNvbWUgZXJyb3JzIG1pZ2h0IGJlIGRldGVjdGVkIGFuZCByZXN1bHQgaW4gYW4gZXhjZXB0aW9uLCBidXQgdGhpcyBpcyBub3RcbiAqICAgZ3VhcmFudGVlZCkuXG4gKlxuICogQHBhcmFtIHN0cmluZyBUaGUgc3RyaW5nIHRvIGNsaXAuXG4gKiBAcGFyYW0gbWF4TGVuZ3RoIFRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aGUgY2xpcHBlZCBzdHJpbmcgaW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMuXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25hbCBvcHRpb25zIG9iamVjdC4gTWF5IGNvbnRhaW4gdGhlIGZvbGxvd2luZyBwcm9wZXJ0eTpcbiAqICAgICAgICAgICAgICAgIGJyZWFrV29yZHMgLSBCeSBkZWZhdWx0LCB3ZSB0cnkgdG8gYnJlYWsgb25seSBhdCB3b3JkIGJvdW5kYXJpZXMuIFNldCB0byB0cnVlIGlmXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyBpcyB1bmRlc2lyZWQuXG4gKiAgICAgICAgICAgICAgICBodG1sIC0gU2V0IHRvIHRydWUgaWYgdGhlIHN0cmluZyBpcyBIVE1MLWVuY29kZWQuIElmIHNvLCB0aGlzIG1ldGhvZCB3aWxsIHRha2VcbiAqICAgICAgICAgICAgICAgICAgICAgICBleHRyYSBjYXJlIHRvIG1ha2Ugc3VyZSB0aGUgSFRNTC1lbmNvZGluZyBpcyBjb3JyZWN0bHkgbWFpbnRhaW5lZC5cbiAqICAgICAgICAgICAgICAgIGltYWdlV2VpZ2h0IC0gVGhlIGFtb3VudCBvZiBjaGFyYWN0ZXJzIHRvIGFzc3VtZSBmb3IgaW1hZ2VzLiBUaGlzIGlzIHVzZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlbmV2ZXIgYW4gaW1hZ2UgaXMgZW5jb3VudGVyZWQsIGJ1dCBhbHNvIGZvciBTVkcgYW5kIE1hdGhNTFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LiBEZWZhdWx0OiAyLlxuICogICAgICAgICAgICAgICAgaW5kaWNhdG9yIC0gVGhlIHN0cmluZyB0byBpbnNlcnQgdG8gaW5kaWNhdGUgY2xpcHBpbmcuIERlZmF1bHQ6IFwi4oCmXCIuXG4gKiAgICAgICAgICAgICAgICBtYXhMaW5lcyAtIE1heGltdW0gYW1vdW50IG9mIGxpbmVzIGFsbG93ZWQuIElmIGdpdmVuLCB0aGUgc3RyaW5nIHdpbGwgYmVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcHBlZCBlaXRoZXIgYXQgdGhlIG1vbWVudCB0aGUgbWF4aW11bSBhbW91bnQgb2YgY2hhcmFjdGVycyBpc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICBleGNlZWRlZCBvciB0aGUgbW9tZW50IG1heExpbmVzIG5ld2xpbmVzIGFyZSBkaXNjb3ZlcmVkLCB3aGljaGV2ZXJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tZXMgZmlyc3QuXG4gKlxuICogQHJldHVybiBUaGUgY2xpcHBlZCBzdHJpbmcuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2xpcChzdHJpbmcsIG1heExlbmd0aCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIGlmICghc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIHN0cmluZyA9IHN0cmluZy50b1N0cmluZygpO1xuXG4gICAgaWYgKG9wdGlvbnMuaW5kaWNhdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3B0aW9ucy5pbmRpY2F0b3IgPSBcIlxcdTIwMjZcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucy5odG1sID8gY2xpcEh0bWwoc3RyaW5nLCBtYXhMZW5ndGgsIG9wdGlvbnMpIDogY2xpcFBsYWluVGV4dChzdHJpbmcsIG1heExlbmd0aCwgb3B0aW9ucyk7XG59O1xuXG5mdW5jdGlvbiBjbGlwSHRtbChzdHJpbmcsIG1heExlbmd0aCwgb3B0aW9ucykge1xuICAgIHZhciBfb3B0aW9ucyRpbWFnZVdlaWdodCA9IG9wdGlvbnMuaW1hZ2VXZWlnaHQsXG4gICAgICAgIGltYWdlV2VpZ2h0ID0gX29wdGlvbnMkaW1hZ2VXZWlnaHQgPT09IHVuZGVmaW5lZCA/IDIgOiBfb3B0aW9ucyRpbWFnZVdlaWdodCxcbiAgICAgICAgaW5kaWNhdG9yID0gb3B0aW9ucy5pbmRpY2F0b3IsXG4gICAgICAgIG1heExpbmVzID0gb3B0aW9ucy5tYXhMaW5lcztcblxuXG4gICAgdmFyIG51bUNoYXJzID0gaW5kaWNhdG9yLmxlbmd0aDtcbiAgICB2YXIgbnVtTGluZXMgPSAxO1xuXG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBpc1VuYnJlYWthYmxlQ29udGVudCA9IGZhbHNlO1xuICAgIHZhciB0YWdTdGFjayA9IFtdO1xuICAgIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXG4gICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcmVzdCA9IGkgPyBzdHJpbmcuc2xpY2UoaSkgOiBzdHJpbmc7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSByZXN0LnNlYXJjaChDSEFSX09GX0lOVEVSRVNUX1JFR0VYKTtcbiAgICAgICAgdmFyIG5leHRCbG9ja1NpemUgPSBuZXh0SW5kZXggPiAtMSA/IG5leHRJbmRleCA6IHJlc3QubGVuZ3RoO1xuICAgICAgICBpICs9IG5leHRCbG9ja1NpemU7XG5cbiAgICAgICAgaWYgKCFpc1VuYnJlYWthYmxlQ29udGVudCkge1xuICAgICAgICAgICAgbnVtQ2hhcnMgKz0gbmV4dEJsb2NrU2l6ZTtcbiAgICAgICAgICAgIGlmIChudW1DaGFycyA+IG1heExlbmd0aCkge1xuICAgICAgICAgICAgICAgIGkgPSBNYXRoLm1heChpIC0gbnVtQ2hhcnMgKyBtYXhMZW5ndGgsIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjaGFyQ29kZSA9PT0gVEFHX09QRU5fQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICB2YXIgbmV4dENoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICAgICAgdmFyIGlzU3BlY2lhbFRhZyA9IG5leHRDaGFyQ29kZSA9PT0gRVhDTEFNQVRJT05fQ0hBUl9DT0RFO1xuICAgICAgICAgICAgaWYgKGlzU3BlY2lhbFRhZyAmJiBzdHJpbmcuc3Vic3RyKGkgKyAyLCAyKSA9PT0gXCItLVwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnRFbmRJbmRleCA9IHN0cmluZy5pbmRleE9mKFwiLS0+XCIsIGkgKyA0KSArIDM7XG4gICAgICAgICAgICAgICAgaSA9IGNvbW1lbnRFbmRJbmRleCAtIDE7IC8vIC0gMSBiZWNhdXNlIHRoZSBvdXRlciBmb3IgbG9vcCB3aWxsIGluY3JlbWVudCBpdFxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1NwZWNpYWxUYWcgJiYgc3RyaW5nLnN1YnN0cihpICsgMiwgNykgPT09IFwiW0NEQVRBW1wiKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNkYXRhRW5kSW5kZXggPSBzdHJpbmcuaW5kZXhPZihcIl1dPlwiLCBpICsgOSkgKyAzO1xuICAgICAgICAgICAgICAgIGkgPSBjZGF0YUVuZEluZGV4IC0gMTsgLy8gLSAxIGJlY2F1c2UgdGhlIG91dGVyIGZvciBsb29wIHdpbGwgaW5jcmVtZW50IGl0XG5cbiAgICAgICAgICAgICAgICAvLyBub3RlIHdlIGRvbid0IGNvdW50IENEQVRBIHRleHQgZm9yIG91ciBjaGFyYWN0ZXIgbGltaXQgYmVjYXVzZSBpdCBpcyBvbmx5XG4gICAgICAgICAgICAgICAgLy8gYWxsb3dlZCB3aXRoaW4gU1ZHIGFuZCBNYXRoTUwgY29udGVudCwgYm90aCBvZiB3aGljaCB3ZSBkb24ndCBjbGlwXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGRvbid0IG9wZW4gbmV3IHRhZ3MgaWYgd2UgYXJlIGN1cnJlbnRseSBhdCB0aGUgbGltaXRcbiAgICAgICAgICAgICAgICBpZiAobnVtQ2hhcnMgPT09IG1heExlbmd0aCAmJiBzdHJpbmcuY2hhckNvZGVBdChpICsgMSkgIT09IEZPUldBUkRfU0xBU0hfQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bUNoYXJzKys7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVRdW90ZUNoYXJDb2RlID0gMDtcbiAgICAgICAgICAgICAgICB2YXIgZW5kSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIHZhciBpc0F0dHJpYnV0ZVZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUgLyogZXNsaW50LWRpc2FibGUtbGluZSAqLykge1xuICAgICAgICAgICAgICAgICAgICBlbmRJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW5kSW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEhUTUw6IFwiICsgc3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBfY2hhckNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChlbmRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0F0dHJpYnV0ZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlUXVvdGVDaGFyQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfY2hhckNvZGUgPT09IGF0dHJpYnV0ZVF1b3RlQ2hhckNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBdHRyaWJ1dGVWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzV2hpdGVTcGFjZShfY2hhckNvZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXR0cmlidXRlVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9jaGFyQ29kZSA9PT0gVEFHX0NMT1NFX0NIQVJfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0F0dHJpYnV0ZVZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEluZGV4LS07IC8vIHJlLWV2YWx1YXRlIHRoaXMgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9jaGFyQ29kZSA9PT0gRVFVQUxfU0lHTl9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChpc1doaXRlU3BhY2Uoc3RyaW5nLmNoYXJDb2RlQXQoZW5kSW5kZXggKyAxKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRJbmRleCsrOyAvLyBza2lwIHdoaXRlc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQXR0cmlidXRlVmFsdWUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3RBdHRyaWJ1dGVDaGFyQ29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGVuZEluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RBdHRyaWJ1dGVDaGFyQ29kZSA9PT0gRE9VQkxFX1FVT1RFX0NIQVJfQ09ERSB8fCBmaXJzdEF0dHJpYnV0ZUNoYXJDb2RlID09PSBTSU5HTEVfUVVPVEVfQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVvdGVDaGFyQ29kZSA9IGZpcnN0QXR0cmlidXRlQ2hhckNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVvdGVDaGFyQ29kZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX2NoYXJDb2RlID09PSBUQUdfQ0xPU0VfQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNFbmRUYWcgPSBzdHJpbmcuY2hhckNvZGVBdChpICsgMSkgPT09IEZPUldBUkRfU0xBU0hfQ0hBUl9DT0RFO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhZ05hbWVTdGFydEluZGV4ID0gaSArIChpc0VuZFRhZyA/IDIgOiAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YWdOYW1lRW5kSW5kZXggPSBNYXRoLm1pbihpbmRleE9mV2hpdGVTcGFjZShzdHJpbmcsIHRhZ05hbWVTdGFydEluZGV4KSwgZW5kSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhZ05hbWUgPSBzdHJpbmcuc2xpY2UodGFnTmFtZVN0YXJ0SW5kZXgsIHRhZ05hbWVFbmRJbmRleCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWdOYW1lLmNoYXJDb2RlQXQodGFnTmFtZS5sZW5ndGggLSAxKSA9PT0gRk9SV0FSRF9TTEFTSF9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdHJhaWxpbmcgc2xhc2ggZm9yIHNlbGYtY2xvc2luZyB0YWcgbmFtZXMgbGlrZSA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnNsaWNlKDAsIHRhZ05hbWUubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0VuZFRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VGFnTmFtZSA9IHRhZ1N0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGFnTmFtZSAhPT0gdGFnTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEhUTUw6IFwiICsgc3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gXCJtYXRoXCIgfHwgdGFnTmFtZSA9PT0gXCJzdmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VuYnJlYWthYmxlQ29udGVudCA9IHRhZ1N0YWNrLmluZGV4T2YoXCJtYXRoXCIpICE9PSAtMSB8fCB0YWdTdGFjay5pbmRleE9mKFwic3ZnXCIpICE9PSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1VuYnJlYWthYmxlQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtQ2hhcnMgKz0gaW1hZ2VXZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtQ2hhcnMgPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCTE9DS19FTEVNRU5UUy5pbmRleE9mKHRhZ05hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGwgYmxvY2sgbGV2ZWwgZWxlbWVudHMgc2hvdWxkIHRyaWdnZXIgYSBuZXcgbGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHRydW5jYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1VuYnJlYWthYmxlQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1MaW5lcyA+IG1heExpbmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgZXhjZWVkIHRoZSBtYXggbGluZXMsIHB1c2ggdGhlIHRhZyBiYWNrIG9udG8gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhY2sgc28gdGhhdCBpdCB3aWxsIGJlIGFkZGVkIGJhY2sgY29ycmVjdGx5IGFmdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJ1bmNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ1N0YWNrLnB1c2godGFnTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFZPSURfRUxFTUVOVFMuaW5kZXhPZih0YWdOYW1lKSAhPT0gLTEgfHwgc3RyaW5nLmNoYXJDb2RlQXQoZW5kSW5kZXggLSAxKSA9PT0gRk9SV0FSRF9TTEFTSF9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gXCJiclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bUxpbmVzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1MaW5lcyA+IG1heExpbmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJpbWdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1DaGFycyArPSBpbWFnZVdlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bUNoYXJzID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnU3RhY2sucHVzaCh0YWdOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gXCJtYXRoXCIgfHwgdGFnTmFtZSA9PT0gXCJzdmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VuYnJlYWthYmxlQ29udGVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gZW5kSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobnVtQ2hhcnMgPiBtYXhMZW5ndGggfHwgbnVtTGluZXMgPiBtYXhMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhckNvZGUgPT09IEFNUEVSU0FORF9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgIHZhciBfZW5kSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgIHZhciBpc0NoYXJhY3RlclJlZmVyZW5jZSA9IHRydWU7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSAvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9jaGFyQ29kZTIgPSBzdHJpbmcuY2hhckNvZGVBdChfZW5kSW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChpc0NoYXJhY3RlclJlZmVyZW5jZUNoYXJhY3RlcihfY2hhckNvZGUyKSkge1xuICAgICAgICAgICAgICAgICAgICBfZW5kSW5kZXgrKztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9jaGFyQ29kZTIgPT09IFNFTUlDT0xPTl9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNDaGFyYWN0ZXJSZWZlcmVuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzVW5icmVha2FibGVDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgbnVtQ2hhcnMrKztcbiAgICAgICAgICAgICAgICBpZiAobnVtQ2hhcnMgPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNDaGFyYWN0ZXJSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICBpID0gX2VuZEluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNoYXJDb2RlID09PSBORVdMSU5FX0NIQVJfQ09ERSkge1xuICAgICAgICAgICAgaWYgKCFpc1VuYnJlYWthYmxlQ29udGVudCkge1xuICAgICAgICAgICAgICAgIG51bUNoYXJzKys7XG4gICAgICAgICAgICAgICAgaWYgKG51bUNoYXJzID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG51bUxpbmVzKys7XG4gICAgICAgICAgICAgICAgaWYgKG51bUxpbmVzID4gbWF4TGluZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFpc1VuYnJlYWthYmxlQ29udGVudCkge1xuICAgICAgICAgICAgICAgIG51bUNoYXJzKys7XG4gICAgICAgICAgICAgICAgaWYgKG51bUNoYXJzID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaGlnaCBVbmljb2RlIHN1cnJvZ2F0ZSBzaG91bGQgbmV2ZXIgYmUgc2VwYXJhdGVkIGZyb20gaXRzIG1hdGNoaW5nIGxvdyBzdXJyb2dhdGVcbiAgICAgICAgICAgIHZhciBfbmV4dENoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICAgICAgaWYgKChfbmV4dENoYXJDb2RlICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG51bUNoYXJzID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgIHZhciBuZXh0Q2hhciA9IHRha2VIdG1sQ2hhckF0KHN0cmluZywgaSk7XG4gICAgICAgIGlmIChpbmRpY2F0b3IpIHtcbiAgICAgICAgICAgIHZhciBwZWVrSW5kZXggPSBpICsgbmV4dENoYXIubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKHN0cmluZy5jaGFyQ29kZUF0KHBlZWtJbmRleCkgPT09IFRBR19PUEVOX0NIQVJfQ09ERSAmJiBzdHJpbmcuY2hhckNvZGVBdChwZWVrSW5kZXggKyAxKSA9PT0gRk9SV0FSRF9TTEFTSF9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dFBlZWtJbmRleCA9IHN0cmluZy5pbmRleE9mKFwiPlwiLCBwZWVrSW5kZXggKyAyKSArIDE7XG4gICAgICAgICAgICAgICAgaWYgKG5leHRQZWVrSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcGVla0luZGV4ID0gbmV4dFBlZWtJbmRleDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwZWVrSW5kZXggJiYgKHBlZWtJbmRleCA9PT0gc3RyaW5nLmxlbmd0aCB8fCBpc0xpbmVCcmVhayhzdHJpbmcsIHBlZWtJbmRleCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUncyBvbmx5IGEgc2luZ2xlIGNoYXJhY3RlciByZW1haW5pbmcgaW4gdGhlIGlucHV0IHN0cmluZywgb3IgdGhlIG5leHRcbiAgICAgICAgICAgICAgICAvLyBjaGFyYWN0ZXIgaXMgZm9sbG93ZWQgYnkgYSBsaW5lLWJyZWFrLCB3ZSBjYW4gaW5jbHVkZSBpdCBpbnN0ZWFkIG9mIHRoZSBjbGlwcGluZ1xuICAgICAgICAgICAgICAgIC8vIGluZGljYXRvciAocHJvdmlkZWQgaXQncyBub3QgYSBzcGVjaWFsIEhUTUwgY2hhcmFjdGVyKVxuICAgICAgICAgICAgICAgIGkgKz0gbmV4dENoYXIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIG5leHRDaGFyID0gc3RyaW5nLmNoYXJBdChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluY2x1ZGUgY2xvc2luZyB0YWdzIGJlZm9yZSBhZGRpbmcgdGhlIGNsaXBwaW5nIGluZGljYXRvciBpZiB0aGF0J3Mgd2hlcmUgdGhleVxuICAgICAgICAvLyBhcmUgaW4gdGhlIGlucHV0IHN0cmluZ1xuICAgICAgICB3aGlsZSAobmV4dENoYXIgPT09IFwiPFwiICYmIHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKSA9PT0gRk9SV0FSRF9TTEFTSF9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgIHZhciBfdGFnTmFtZSA9IHRhZ1N0YWNrLnBvcCgpO1xuICAgICAgICAgICAgdmFyIHRhZ0VuZEluZGV4ID0gX3RhZ05hbWUgPyBzdHJpbmcuaW5kZXhPZihcIj5cIiwgaSArIDIpIDogLTE7XG4gICAgICAgICAgICBpZiAodGFnRW5kSW5kZXggPT09IC0xIHx8IHN0cmluZy5yZXBsYWNlKFRSSU1fRU5EX1JFR0VYLCBcIlwiKS5zbGljZShpICsgMiwgdGFnRW5kSW5kZXgpICE9PSBfdGFnTmFtZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgSFRNTDogXCIgKyBzdHJpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpID0gdGFnRW5kSW5kZXggKyAxO1xuICAgICAgICAgICAgbmV4dENoYXIgPSBzdHJpbmcuY2hhckF0KGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPCBzdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuYnJlYWtXb3Jkcykge1xuICAgICAgICAgICAgICAgIC8vIHRyeSB0byBjbGlwIGF0IHdvcmQgYm91bmRhcmllcywgaWYgZGVzaXJlZFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBpIC0gaW5kaWNhdG9yLmxlbmd0aDsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jaGFyQ29kZTMgPSBzdHJpbmcuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jaGFyQ29kZTMgPT09IFRBR19DTE9TRV9DSEFSX0NPREUgfHwgX2NoYXJDb2RlMyA9PT0gU0VNSUNPTE9OX0NIQVJfQ09ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgY2hhcmFjdGVycyBjb3VsZCBiZSBqdXN0IHJlZ3VsYXIgY2hhcmFjdGVycywgc28gaWYgdGhleSBvY2N1ciBpblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG1pZGRsZSBvZiBhIHdvcmQsIHRoZXkgd291bGQgXCJicmVha1wiIG91ciBhdHRlbXB0IHRvIHByZXZlbnQgYnJlYWtpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIHdvcmRzLCBidXQgZ2l2ZW4gdGhpcyBzZWVtcyBoaWdobHkgdW5saWtlbHkgYW5kIHRoZSBhbHRlcm5hdGl2ZSBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG9pbmcgYW5vdGhlciBmdWxsIHBhcnNpbmcgb2YgdGhlIHByZWNlZGluZyB0ZXh0LCB0aGlzIHNlZW1zIGFjY2VwdGFibGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfY2hhckNvZGUzID09PSBORVdMSU5FX0NIQVJfQ09ERSB8fCBfY2hhckNvZGUzID09PSBUQUdfT1BFTl9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNXaGl0ZVNwYWNlKF9jaGFyQ29kZTMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gaiArIChpbmRpY2F0b3IgPyAxIDogMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHN0cmluZy5zbGljZSgwLCBpKSArIChpc0xpbmVCcmVhayhzdHJpbmcsIGkpID8gXCJcIiA6IGluZGljYXRvcik7XG4gICAgICAgICAgICB3aGlsZSAodGFnU3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90YWdOYW1lMiA9IHRhZ1N0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIjwvXCIgKyBfdGFnTmFtZTIgKyBcIj5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG51bUxpbmVzID4gbWF4TGluZXMpIHtcbiAgICAgICAgdmFyIF9yZXN1bHQgPSBzdHJpbmcuc2xpY2UoMCwgaSk7XG4gICAgICAgIHdoaWxlICh0YWdTdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBfdGFnTmFtZTMgPSB0YWdTdGFjay5wb3AoKTtcbiAgICAgICAgICAgIF9yZXN1bHQgKz0gXCI8L1wiICsgX3RhZ05hbWUzICsgXCI+XCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gY2xpcFBsYWluVGV4dChzdHJpbmcsIG1heExlbmd0aCwgb3B0aW9ucykge1xuICAgIHZhciBpbmRpY2F0b3IgPSBvcHRpb25zLmluZGljYXRvcixcbiAgICAgICAgbWF4TGluZXMgPSBvcHRpb25zLm1heExpbmVzO1xuXG5cbiAgICB2YXIgbnVtQ2hhcnMgPSBpbmRpY2F0b3IubGVuZ3RoO1xuICAgIHZhciBudW1MaW5lcyA9IDE7XG5cbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG51bUNoYXJzKys7XG4gICAgICAgIGlmIChudW1DaGFycyA+IG1heExlbmd0aCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhckNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGNoYXJDb2RlID09PSBORVdMSU5FX0NIQVJfQ09ERSkge1xuICAgICAgICAgICAgbnVtTGluZXMrKztcbiAgICAgICAgICAgIGlmIChudW1MaW5lcyA+IG1heExpbmVzKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKGNoYXJDb2RlICYgMHhmYzAwKSA9PT0gMHhkODAwKSB7XG4gICAgICAgICAgICAvLyBoaWdoIFVuaWNvZGUgc3Vycm9nYXRlIHNob3VsZCBuZXZlciBiZSBzZXBhcmF0ZWQgZnJvbSBpdHMgbWF0Y2hpbmcgbG93IHN1cnJvZ2F0ZVxuICAgICAgICAgICAgdmFyIG5leHRDaGFyQ29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgICAgIGlmICgobmV4dENoYXJDb2RlICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG51bUNoYXJzID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgIHZhciBuZXh0Q2hhciA9IHRha2VDaGFyQXQoc3RyaW5nLCBpKTtcbiAgICAgICAgaWYgKGluZGljYXRvcikge1xuICAgICAgICAgICAgdmFyIHBlZWtJbmRleCA9IGkgKyBuZXh0Q2hhci5sZW5ndGg7XG4gICAgICAgICAgICBpZiAocGVla0luZGV4ID09PSBzdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyaW5nLmNoYXJDb2RlQXQocGVla0luZGV4KSA9PT0gTkVXTElORV9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGkgKyBuZXh0Q2hhci5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLmJyZWFrV29yZHMpIHtcbiAgICAgICAgICAgIC8vIHRyeSB0byBjbGlwIGF0IHdvcmQgYm91bmRhcmllcywgaWYgZGVzaXJlZFxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IGkgLSBpbmRpY2F0b3IubGVuZ3RoOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICAgIHZhciBfY2hhckNvZGU0ID0gc3RyaW5nLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKF9jaGFyQ29kZTQgPT09IE5FV0xJTkVfQ0hBUl9DT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgICAgICAgICBuZXh0Q2hhciA9IFwiXFxuXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNXaGl0ZVNwYWNlKF9jaGFyQ29kZTQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSBqICsgKGluZGljYXRvciA/IDEgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBpKSArIChuZXh0Q2hhciA9PT0gXCJcXG5cIiA/IFwiXCIgOiBpbmRpY2F0b3IpO1xuICAgIH0gZWxzZSBpZiAobnVtTGluZXMgPiBtYXhMaW5lcykge1xuICAgICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGkpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGluZGV4T2ZXaGl0ZVNwYWNlKHN0cmluZywgZnJvbUluZGV4KSB7XG4gICAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gZnJvbUluZGV4OyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzV2hpdGVTcGFjZShzdHJpbmcuY2hhckNvZGVBdChpKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHJhdGhlciB0aGFuIC0xLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nIGlmIG5vIG1hdGNoIGlzIGZvdW5kLFxuICAgIC8vIHNvIGl0IHdvcmtzIHdlbGwgd2l0aCB0aGUgTWF0aC5taW4oKSB1c2FnZSBiZWxvd1xuICAgIHJldHVybiBsZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGlzQ2hhcmFjdGVyUmVmZXJlbmNlQ2hhcmFjdGVyKGNoYXJDb2RlKSB7XG4gICAgcmV0dXJuIGNoYXJDb2RlID49IDQ4ICYmIGNoYXJDb2RlIDw9IDU3IHx8IGNoYXJDb2RlID49IDY1ICYmIGNoYXJDb2RlIDw9IDkwIHx8IGNoYXJDb2RlID49IDk3ICYmIGNoYXJDb2RlIDw9IDEyMjtcbn1cblxuZnVuY3Rpb24gaXNMaW5lQnJlYWsoc3RyaW5nLCBpbmRleCkge1xuICAgIHZhciBmaXJzdENoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgIGlmIChmaXJzdENoYXJDb2RlID09PSBORVdMSU5FX0NIQVJfQ09ERSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGZpcnN0Q2hhckNvZGUgPT09IFRBR19PUEVOX0NIQVJfQ09ERSkge1xuICAgICAgICB2YXIgbmV3bGluZUVsZW1lbnRzID0gXCIoXCIgKyBCTE9DS19FTEVNRU5UUy5qb2luKFwifFwiKSArIFwifGJyKVwiO1xuICAgICAgICB2YXIgbmV3bGluZVJlZ0V4cCA9IG5ldyBSZWdFeHAoXCJePFwiICsgbmV3bGluZUVsZW1lbnRzICsgXCJbXFx0XFxuXFxmXFxyIF0qLz8+XCIsIFwiaVwiKTtcbiAgICAgICAgcmV0dXJuIG5ld2xpbmVSZWdFeHAudGVzdChzdHJpbmcuc2xpY2UoaW5kZXgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1doaXRlU3BhY2UoY2hhckNvZGUpIHtcbiAgICByZXR1cm4gY2hhckNvZGUgPT09IDkgfHwgY2hhckNvZGUgPT09IDEwIHx8IGNoYXJDb2RlID09PSAxMiB8fCBjaGFyQ29kZSA9PT0gMTMgfHwgY2hhckNvZGUgPT09IDMyO1xufVxuXG5mdW5jdGlvbiB0YWtlQ2hhckF0KHN0cmluZywgaW5kZXgpIHtcbiAgICB2YXIgY2hhckNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpbmRleCk7XG4gICAgaWYgKChjaGFyQ29kZSAmIDB4ZmMwMCkgPT09IDB4ZDgwMCkge1xuICAgICAgICAvLyBoaWdoIFVuaWNvZGUgc3Vycm9nYXRlIHNob3VsZCBuZXZlciBiZSBzZXBhcmF0ZWQgZnJvbSBpdHMgbWF0Y2hpbmcgbG93IHN1cnJvZ2F0ZVxuICAgICAgICB2YXIgbmV4dENoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaW5kZXggKyAxKTtcbiAgICAgICAgaWYgKChuZXh0Q2hhckNvZGUgJiAweGZjMDApID09PSAweGRjMDApIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlLCBuZXh0Q2hhckNvZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKTtcbn1cblxuZnVuY3Rpb24gdGFrZUh0bWxDaGFyQXQoc3RyaW5nLCBpbmRleCkge1xuICAgIHZhciBjaGFyID0gdGFrZUNoYXJBdChzdHJpbmcsIGluZGV4KTtcbiAgICBpZiAoY2hhciA9PT0gXCImXCIpIHtcbiAgICAgICAgd2hpbGUgKHRydWUgLyogZXNsaW50LWRpc2FibGUtbGluZSAqLykge1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIHZhciBuZXh0Q2hhckNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpbmRleCk7XG4gICAgICAgICAgICBpZiAoaXNDaGFyYWN0ZXJSZWZlcmVuY2VDaGFyYWN0ZXIobmV4dENoYXJDb2RlKSkge1xuICAgICAgICAgICAgICAgIGNoYXIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhckNvZGUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhckNvZGUgPT09IFNFTUlDT0xPTl9DSEFSX0NPREUpIHtcbiAgICAgICAgICAgICAgICBjaGFyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobmV4dENoYXJDb2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNoYXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==