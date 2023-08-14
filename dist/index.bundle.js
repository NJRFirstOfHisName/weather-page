"use strict";
(self["webpackChunkweather_page"] = self["webpackChunkweather_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/parseISO */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _weatherConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherConditions */ "./src/weatherConditions.js");





// Searches weatherConditions.js to find the appropriate background color for the weather.
function findColor(day) {
  const result = _weatherConditions__WEBPACK_IMPORTED_MODULE_1__.weatherConditions.find(({
    code
  }) => code === day);
  return result.color;
}

// Stolen from Stack Exhange, allows the lightening or darkening of a hex color by percentage. Used to generate background colors.
function adjust(color, amount) {
  return `#${color.replace(/^#/, "").replace(/../g, color => `0${Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)}`.substr(-2))}`;
}

// Prints all fields in the center "Conditions" card.
function printCurrentConditions(weatherData) {
  const windSpeed = document.querySelector(".windSpeed");
  const humidity = document.querySelector(".humidity");
  const uvIndex = document.querySelector(".uvIndex");
  const airQuality = document.querySelector(".airQuality");
  const pressure = document.querySelector(".pressure");
  const precipitation = document.querySelector(".precipitation");
  windSpeed.innerText = `Wind speed: ${weatherData.current.wind_mph} MPH ${weatherData.current.wind_dir}`;
  humidity.innerText = `Humidity: ${weatherData.current.humidity}%`;
  uvIndex.innerText = `UV index: ${weatherData.current.uv}`;
  airQuality.innerText = `Air quality: ${weatherData.current.air_quality["us-epa-index"]}`;
  pressure.innerText = `Atmospheric pressure: ${weatherData.current.pressure_in} inHg.`;
  precipitation.innerText = `Expected precipitation: ${weatherData.current.precip_in}"`;
}

// Prints all fields in the "Today's Weather" card
function printCurrentWeather(weatherData) {
  const city = document.querySelector(".city");
  const stateCountry = document.querySelector(".stateCountry");
  const time = document.querySelector(".time");
  const conditionIcon = document.querySelector(".conditionIcon");
  const conditionText = document.querySelector(".conditionText");
  const temperature = document.querySelector(".temperature");
  const feelsLike = document.querySelector(".feelsLike");
  const todayDate = document.querySelector(".todayDate");

  // Not all results from the API have a 'region' field, this ensures there are no hanging commas if region is empty
  city.innerText = weatherData.location.name;
  if (weatherData.location.region) {
    stateCountry.innerText = `${weatherData.location.region}, ${weatherData.location.country}`;
  } else {
    stateCountry.innerText = `${weatherData.location.country}`;
  }

  // Uses date-fn to make the date prettier.
  const today = weatherData.location.localtime.slice(0, 10);
  todayDate.innerText = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__["default"])(today), "eee, MMMM do yyyy");

  // First checks whether it's AM or PM, then checks whether it's noon or midnight. Probably could have done that the other way around.
  const localTime = weatherData.location.localtime.slice(-5);
  const hour = localTime.slice(0, 2);
  const minute = localTime.slice(3, 5);
  if (hour < 12) {
    if (hour > 0) {
      time.innerText = `${localTime} AM`;
    } else {
      time.innerText = `12:${minute} AM`;
    }
  } else if (hour - 12 > 0) {
    time.innerText = `${hour - 12}:${minute} PM`;
  } else {
    time.innerText = `12:${minute} PM`;
  }
  conditionIcon.src = weatherData.current.condition.icon;
  conditionIcon.style.display = "";
  conditionText.innerText = weatherData.current.condition.text;
  temperature.innerText = `${weatherData.current.temp_f}°F`;
  feelsLike.innerText = `Feels like ${Math.trunc(weatherData.current.feelslike_f)}°F`;
}

// Creates divs for and prints forecast cards.
function printForecast(weatherData) {
  const forecastDiv = document.querySelector(".forecast");
  forecastDiv.innerHTML = "<h1>Forecast</h1>";
  for (let i = 1; i < 3; i += 1) {
    const dayDiv = document.createElement("div");
    dayDiv.className = "forecastDiv";
    dayDiv.style.display = "grid";
    const forecastData = weatherData.forecast.forecastday[i];
    dayDiv.style.background = findColor(forecastData.day.condition.code);
    const dateIcon = document.createElement("div");
    const day = document.createElement("p");
    day.className = "forecastDate";
    day.innerText = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__["default"])(forecastData.date), "eee, MMM do");
    dateIcon.appendChild(day);
    const conditionIcon = document.createElement("img");
    conditionIcon.src = forecastData.day.condition.icon;
    dateIcon.appendChild(conditionIcon);
    dayDiv.appendChild(dateIcon);
    const temps = document.createElement("div");
    const conditionText = document.createElement("h3");
    conditionText.innerText = forecastData.day.condition.text;
    conditionText.style.fontWeight = "bold";
    temps.appendChild(conditionText);
    const minTemp = document.createElement("p");
    minTemp.className = "minTemp";
    minTemp.innerText = `Low: ${forecastData.day.mintemp_f}`;
    temps.appendChild(minTemp);
    const maxTemp = document.createElement("p");
    maxTemp.className = "maxTemp";
    maxTemp.innerText = `High: ${forecastData.day.maxtemp_f}`;
    temps.appendChild(maxTemp);
    dayDiv.appendChild(temps);
    forecastDiv.append(dayDiv);
  }
}

// Checks the current weather and fetches the appropriate background color from weatherConditions.js, then brigtens the color for use in the backgrounds of cards.
function setBackgrounds(weatherData) {
  const container = document.querySelector(".container");
  const environment = document.querySelector(".environment");
  const weather = document.querySelector(".weather");
  const forecast = document.querySelector(".forecast");

  // Fetches the background color if it's daytime, otherwise sets it to the night color
  let todayColor;
  if (weatherData.current.is_day) {
    todayColor = findColor(weatherData.current.condition.code);
    container.style.color = "black";
  } else {
    todayColor = "#0b0f38";
    container.style.color = "white";
    const forecastDivs = document.querySelectorAll(".forecastDiv");
    forecastDivs.forEach(div => {
      div.style.color = "black";
    });
  }
  container.style.background = todayColor;
  environment.style.background = adjust(todayColor, 50);
  weather.style.background = adjust(todayColor, 70);
  forecast.style.background = adjust(todayColor, 50);
}

// When there is a weather alert, this is used by the button that's generated to show or hide the extended details of the alert.
function toggleHidden() {
  const hiddenDiv = document.querySelector(".hiddenDiv");
  const hidden = hiddenDiv.getAttribute("hidden");
  if (hidden) {
    hiddenDiv.removeAttribute("hidden");
  } else {
    hiddenDiv.setAttribute("hidden", "hidden");
  }
}

// If there is a weather alert, this is called to display the information at the bottom of 'Today's Weather'. By default only the headline and button aren't hidden.
function printAlert(alertData) {
  const alertDiv = document.createElement("div");
  alertDiv.className = "weatherAlert";
  const headline = document.createElement("h2");
  headline.innerText = alertData.headline;
  alertDiv.appendChild(headline);
  const alertBtn = document.createElement("button");
  alertBtn.className = "alertBtn";
  alertBtn.innerText = "Show More";
  alertBtn.onclick = toggleHidden;
  alertDiv.appendChild(alertBtn);
  const hiddenDiv = document.createElement("div");
  hiddenDiv.className = "hiddenDiv";
  hiddenDiv.setAttribute("hidden", "hidden");
  const description = document.createElement("p");
  description.innerText = alertData.desc;
  hiddenDiv.appendChild(description);

  // Not all alerts have an instruction property
  if (alertData.instruction) {
    const instruction = document.createElement("p");
    instruction.innerText = alertData.instruction;
    hiddenDiv.appendChild(instruction);
  }
  alertDiv.appendChild(hiddenDiv);
  const weather = document.querySelector(".weather");
  weather.appendChild(alertDiv);
}

// Calls the API and returns the result as a promise. The only errors that get caught here are issues with the API call, not the response.
async function callApi(location) {
  let response;
  try {
    response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=84ccd448f00f4d4591a210640231207&q=${location}&days=4&aqi=yes&alerts=yes`, {
      mode: "cors"
    });
  } catch (error) {
    throw new Error("Error: ", error);
  }
  return response;
}

// Main function that is called when the "Get Weather" button is pressed.
async function getWeatherData(location) {
  const invalid = document.querySelector(".invalid");
  const hidden = invalid.getAttribute("hidden");

  // Calls the API. If there is a problem with the response, un-hides a message showing the location was invalid. Otherwise calls each of the printing functions.
  const apiData = await callApi(location);
  if (!apiData.ok) {
    if (hidden) {
      invalid.removeAttribute("hidden");
    }
  } else {
    const weatherData = await apiData.json();
    printCurrentWeather(weatherData);
    printForecast(weatherData);
    printCurrentConditions(weatherData);
    setBackgrounds(weatherData);

    // First checks to see if there is an existing alert on the page and removes it. Then if, the new location has an alert, calls the function to print it.
    const alertDiv = document.querySelector(".weatherAlert");
    if (alertDiv) {
      alertDiv.remove();
    }
    if (weatherData.alerts.alert[0]) {
      printAlert(weatherData.alerts.alert[0]);
    }

    // If the Invalid Location message is visible, hides it.
    if (!hidden) {
      invalid.setAttribute("hidden", "hidden");
    }
  }
}

// Event listeners for user input
const submitBtn = document.querySelector(".submitBtn");
const userInput = document.querySelector(".userInput");
submitBtn.addEventListener("click", () => {
  if (userInput.value) {
    getWeatherData(userInput.value);
    userInput.value = "";
  }
});
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    submitBtn.click();
  }
});

// On page load, gets local weather using user's IP address.
getWeatherData("auto:ip");

/***/ }),

/***/ "./src/weatherConditions.js":
/*!**********************************!*\
  !*** ./src/weatherConditions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   weatherConditions: () => (/* binding */ weatherConditions)
/* harmony export */ });
const weatherConditions = [{
  code: 1000,
  day: "Sunny",
  color: "#f7fb88"
}, {
  code: 1003,
  day: "Partly cloudy",
  color: "#f3f58e"
}, {
  code: 1006,
  day: "Cloudy",
  color: "#9fa191"
}, {
  code: 1009,
  day: "Overcast",
  color: "#919ca1"
}, {
  code: 1030,
  day: "Mist",
  color: "#c1d1d9"
}, {
  code: 1063,
  day: "Patchy rain possible",
  color: "#aed4e6"
}, {
  code: 1066,
  day: "Patchy snow possible",
  color: "#cee2eb"
}, {
  code: 1069,
  day: "Patchy sleet possible",
  color: "#a3b6bf"
}, {
  code: 1072,
  day: "Patchy freezing drizzle possible",
  color: "#5d7a87"
}, {
  code: 1087,
  day: "Thundery outbreaks possible",
  color: ""
}, {
  code: 1114,
  day: "Blowing snow",
  color: "#dceff7"
}, {
  code: 1117,
  day: "Blizzard",
  color: "#f7f9fa"
}, {
  code: 1135,
  day: "Fog",
  color: "#cacbcc"
}, {
  code: 1147,
  day: "Freezing fog",
  color: "#b1b7ba"
}, {
  code: 1150,
  day: "Patchy light drizzle",
  color: "#cee8f5"
}, {
  code: 1153,
  day: "Light drizzle",
  color: "#b6e5fa"
}, {
  code: 1168,
  day: "Freezing drizzle",
  color: "#a0cade"
}, {
  code: 1171,
  day: "Heavy freezing drizzle",
  color: "#84a4b3"
}, {
  code: 1180,
  day: "Patchy light rain",
  color: "#8aceed"
}, {
  code: 1183,
  day: "Light rain",
  color: "#4fabd6"
}, {
  code: 1186,
  day: "Moderate rain at times",
  color: "#4ebbed"
}, {
  code: 1189,
  day: "Moderate rain",
  color: "#34b1eb"
}, {
  code: 1192,
  day: "Heavy rain at times",
  color: "#218fc2"
}, {
  code: 1195,
  day: "Heavy rain",
  color: "#2078a1"
}, {
  code: 1198,
  day: "Light freezing rain",
  color: "#72d0fc"
}, {
  code: 1201,
  day: "Moderate or heavy freezing rain",
  color: "#407994"
}, {
  code: 1204,
  day: "Light sleet",
  color: "#a0a2a3"
}, {
  code: 1207,
  day: "Moderate or heavy sleet",
  color: "#798185"
}, {
  code: 1210,
  day: "Patchy light snow",
  color: "#c3c6c7"
}, {
  code: 1213,
  day: "Light snow",
  color: "#dadee0"
}, {
  code: 1216,
  day: "Patchy moderate snow",
  color: "#cfd2d4"
}, {
  code: 1219,
  day: "Moderate snow",
  color: "#cadbed"
}, {
  code: 1222,
  day: "Patchy heavy snow",
  color: "#99afc7"
}, {
  code: 1225,
  day: "Heavy snow",
  color: "#69778c"
}, {
  code: 1237,
  day: "Ice pellets",
  color: "#cdcfd1"
}, {
  code: 1240,
  day: "Light rain shower",
  color: "#b1caf0"
}, {
  code: 1243,
  day: "Moderate or heavy rain shower",
  color: "#a0c4fa"
}, {
  code: 1246,
  day: "Torrential rain shower",
  color: "#678abf"
}, {
  code: 1249,
  day: "Light sleet showers",
  color: "#adb7c7"
}, {
  code: 1252,
  day: "Moderate or heavy sleet showers",
  color: "#8c9eba"
}, {
  code: 1255,
  day: "Light snow showers",
  color: "#ccd9ed"
}, {
  code: 1258,
  day: "Moderate or heavy snow showers",
  color: "#c0c5cc"
}, {
  code: 1261,
  day: "Light showers of ice pellets",
  color: "#9ea4ad"
}, {
  code: 1264,
  day: "Moderate or heavy showers of ice pellets",
  color: "#7e8794"
}, {
  code: 1273,
  day: "Patchy light rain with thunder",
  color: "#a5c4f2"
}, {
  code: 1276,
  day: "Moderate or heavy rain with thunder",
  color: "#8da2c2"
}, {
  code: 1279,
  day: "Patchy light snow with thunder",
  color: "#b3c7e6"
}, {
  code: 1282,
  day: "Moderate or heavy snow with thunder",
  color: "#7d9fd1"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  weatherConditions
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-family: "Victor Mono", monospace;
}

.container {
  display: grid;
  grid-template-rows: 100px 1fr 30px;
  min-height: 100vh;
}

.weatherReport {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
}

.environment,
.weather,
.forecast {
  border-radius: 20px;
  margin: 15px;
  padding: 5px;
}

.header {
  padding: 20px;
  text-align: center;
  font-size: 35px;
}

.header,
.footer {
  background-color: #b3f497;
}

button,
input {
  border: none;
  background-color: white;
  font-size: large;
}

h1 {
  text-align: center;
}

.environment,
.forecast {
  margin: 40px 5px;
  font-size: large;
}

.environment p {
  margin: 20px;
}

.weather {
  text-align: center;
}

.weather div div {
  margin: 10px;
}

.conditionIcon {
  height: 100px;
}

.alertBtn {
  background-color: rgb(189, 142, 209);
}

.forecastDiv {
  margin: 30px 5px;
  border-radius: 10px;
  background-color: rgb(246, 246, 117);
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.forecastDiv p {
  margin: 10px;
}

.footer {
  padding: 5px;
  text-align: end;
  position: relative;
  bottom: 0;
  width: 100vw;
}

@media (max-width: 800px) {
  .container {
    grid-template-rows: auto;
    height: fit-content;
  }

  .weather {
    grid-area: weather;
  }

  .forecast {
    grid-area: forecast;
  }

  .environment {
    grid-area: environment;
  }

  .weatherReport {
    grid-template-areas:
      "weather"
      "forecast"
      "environment";
    grid-template-columns: 1fr;
  }
  .environment,
  .weather,
  .forecast {
    margin: 5px;
  }
}

@media screen and (min-width: 1300px) {
  .weatherReport {
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,sBAAsB;EACtB,iCAAiC;EACjC,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,uBAAuB;AACzB;;AAEA;;;EAGE,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;EAEE,YAAY;EACZ,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,YAAY;AACd;;AAEA;EACE;IACE,wBAAwB;IACxB,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE;;;mBAGe;IACf,0BAA0B;EAC5B;EACA;;;IAGE,WAAW;EACb;AACF;;AAEA;EACE;IACE,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;EACpB;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-family: \"Victor Mono\", monospace;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-rows: 100px 1fr 30px;\r\n  min-height: 100vh;\r\n}\r\n\r\n.weatherReport {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr;\r\n}\r\n\r\n.environment,\r\n.weather,\r\n.forecast {\r\n  border-radius: 20px;\r\n  margin: 15px;\r\n  padding: 5px;\r\n}\r\n\r\n.header {\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 35px;\r\n}\r\n\r\n.header,\r\n.footer {\r\n  background-color: #b3f497;\r\n}\r\n\r\nbutton,\r\ninput {\r\n  border: none;\r\n  background-color: white;\r\n  font-size: large;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\n.environment,\r\n.forecast {\r\n  margin: 40px 5px;\r\n  font-size: large;\r\n}\r\n\r\n.environment p {\r\n  margin: 20px;\r\n}\r\n\r\n.weather {\r\n  text-align: center;\r\n}\r\n\r\n.weather div div {\r\n  margin: 10px;\r\n}\r\n\r\n.conditionIcon {\r\n  height: 100px;\r\n}\r\n\r\n.alertBtn {\r\n  background-color: rgb(189, 142, 209);\r\n}\r\n\r\n.forecastDiv {\r\n  margin: 30px 5px;\r\n  border-radius: 10px;\r\n  background-color: rgb(246, 246, 117);\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n}\r\n\r\n.forecastDiv p {\r\n  margin: 10px;\r\n}\r\n\r\n.footer {\r\n  padding: 5px;\r\n  text-align: end;\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 100vw;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .container {\r\n    grid-template-rows: auto;\r\n    height: fit-content;\r\n  }\r\n\r\n  .weather {\r\n    grid-area: weather;\r\n  }\r\n\r\n  .forecast {\r\n    grid-area: forecast;\r\n  }\r\n\r\n  .environment {\r\n    grid-area: environment;\r\n  }\r\n\r\n  .weatherReport {\r\n    grid-template-areas:\r\n      \"weather\"\r\n      \"forecast\"\r\n      \"environment\";\r\n    grid-template-columns: 1fr;\r\n  }\r\n  .environment,\r\n  .weather,\r\n  .forecast {\r\n    margin: 5px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1300px) {\r\n  .weatherReport {\r\n    max-width: 1300px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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a0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JlLFNBQVNsSyxPQUFPQSxDQUFDZ1IsR0FBRyxFQUFFO0VBQ25DLHlCQUF5Qjs7RUFFekIsT0FBT2hSLE9BQU8sR0FBRyxVQUFVLElBQUksT0FBT2lSLE1BQU0sSUFBSSxRQUFRLElBQUksT0FBT0EsTUFBTSxDQUFDQyxRQUFRLEdBQUcsVUFBVUYsR0FBRyxFQUFFO0lBQ2xHLE9BQU8sT0FBT0EsR0FBRztFQUNuQixDQUFDLEdBQUcsVUFBVUEsR0FBRyxFQUFFO0lBQ2pCLE9BQU9BLEdBQUcsSUFBSSxVQUFVLElBQUksT0FBT0MsTUFBTSxJQUFJRCxHQUFHLENBQUNHLFdBQVcsS0FBS0YsTUFBTSxJQUFJRCxHQUFHLEtBQUtDLE1BQU0sQ0FBQzdRLFNBQVMsR0FBRyxRQUFRLEdBQUcsT0FBTzRRLEdBQUc7RUFDN0gsQ0FBQyxFQUFFaFIsT0FBTyxDQUFDZ1IsR0FBRyxDQUFDO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL3NyYy93ZWF0aGVyQ29uZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpO1xuICAgIC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZztcblxuICAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsO1xuXG4gIC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufVxuXG4vLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBwYXJzZUlTTyBmcm9tIFwiZGF0ZS1mbnMvcGFyc2VJU09cIjtcclxuaW1wb3J0IHsgd2VhdGhlckNvbmRpdGlvbnMgfSBmcm9tIFwiLi93ZWF0aGVyQ29uZGl0aW9uc1wiO1xyXG5cclxuLy8gU2VhcmNoZXMgd2VhdGhlckNvbmRpdGlvbnMuanMgdG8gZmluZCB0aGUgYXBwcm9wcmlhdGUgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIHdlYXRoZXIuXHJcbmZ1bmN0aW9uIGZpbmRDb2xvcihkYXkpIHtcclxuICBjb25zdCByZXN1bHQgPSB3ZWF0aGVyQ29uZGl0aW9ucy5maW5kKCh7IGNvZGUgfSkgPT4gY29kZSA9PT0gZGF5KTtcclxuICByZXR1cm4gcmVzdWx0LmNvbG9yO1xyXG59XHJcblxyXG4vLyBTdG9sZW4gZnJvbSBTdGFjayBFeGhhbmdlLCBhbGxvd3MgdGhlIGxpZ2h0ZW5pbmcgb3IgZGFya2VuaW5nIG9mIGEgaGV4IGNvbG9yIGJ5IHBlcmNlbnRhZ2UuIFVzZWQgdG8gZ2VuZXJhdGUgYmFja2dyb3VuZCBjb2xvcnMuXHJcbmZ1bmN0aW9uIGFkanVzdChjb2xvciwgYW1vdW50KSB7XHJcbiAgcmV0dXJuIGAjJHtjb2xvclxyXG4gICAgLnJlcGxhY2UoL14jLywgXCJcIilcclxuICAgIC5yZXBsYWNlKC8uLi9nLCAoY29sb3IpID0+XHJcbiAgICAgIGAwJHtNYXRoLm1pbigyNTUsIE1hdGgubWF4KDAsIHBhcnNlSW50KGNvbG9yLCAxNikgKyBhbW91bnQpKS50b1N0cmluZyhcclxuICAgICAgICAxNlxyXG4gICAgICApfWAuc3Vic3RyKC0yKVxyXG4gICAgKX1gO1xyXG59XHJcblxyXG4vLyBQcmludHMgYWxsIGZpZWxkcyBpbiB0aGUgY2VudGVyIFwiQ29uZGl0aW9uc1wiIGNhcmQuXHJcbmZ1bmN0aW9uIHByaW50Q3VycmVudENvbmRpdGlvbnMod2VhdGhlckRhdGEpIHtcclxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRTcGVlZFwiKTtcclxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XHJcbiAgY29uc3QgdXZJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXZJbmRleFwiKTtcclxuICBjb25zdCBhaXJRdWFsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5haXJRdWFsaXR5XCIpO1xyXG4gIGNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVzc3VyZVwiKTtcclxuICBjb25zdCBwcmVjaXBpdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVjaXBpdGF0aW9uXCIpO1xyXG5cclxuICB3aW5kU3BlZWQuaW5uZXJUZXh0ID0gYFdpbmQgc3BlZWQ6ICR7d2VhdGhlckRhdGEuY3VycmVudC53aW5kX21waH0gTVBIICR7d2VhdGhlckRhdGEuY3VycmVudC53aW5kX2Rpcn1gO1xyXG4gIGh1bWlkaXR5LmlubmVyVGV4dCA9IGBIdW1pZGl0eTogJHt3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xyXG4gIHV2SW5kZXguaW5uZXJUZXh0ID0gYFVWIGluZGV4OiAke3dlYXRoZXJEYXRhLmN1cnJlbnQudXZ9YDtcclxuICBhaXJRdWFsaXR5LmlubmVyVGV4dCA9IGBBaXIgcXVhbGl0eTogJHt3ZWF0aGVyRGF0YS5jdXJyZW50LmFpcl9xdWFsaXR5W1widXMtZXBhLWluZGV4XCJdfWA7XHJcbiAgcHJlc3N1cmUuaW5uZXJUZXh0ID0gYEF0bW9zcGhlcmljIHByZXNzdXJlOiAke3dlYXRoZXJEYXRhLmN1cnJlbnQucHJlc3N1cmVfaW59IGluSGcuYDtcclxuICBwcmVjaXBpdGF0aW9uLmlubmVyVGV4dCA9IGBFeHBlY3RlZCBwcmVjaXBpdGF0aW9uOiAke3dlYXRoZXJEYXRhLmN1cnJlbnQucHJlY2lwX2lufVwiYDtcclxufVxyXG5cclxuLy8gUHJpbnRzIGFsbCBmaWVsZHMgaW4gdGhlIFwiVG9kYXkncyBXZWF0aGVyXCIgY2FyZFxyXG5mdW5jdGlvbiBwcmludEN1cnJlbnRXZWF0aGVyKHdlYXRoZXJEYXRhKSB7XHJcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKTtcclxuICBjb25zdCBzdGF0ZUNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXRlQ291bnRyeVwiKTtcclxuICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lXCIpO1xyXG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmRpdGlvbkljb25cIik7XHJcbiAgY29uc3QgY29uZGl0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZGl0aW9uVGV4dFwiKTtcclxuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGVyYXR1cmVcIik7XHJcbiAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc0xpa2VcIik7XHJcbiAgY29uc3QgdG9kYXlEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheURhdGVcIik7XHJcblxyXG4gIC8vIE5vdCBhbGwgcmVzdWx0cyBmcm9tIHRoZSBBUEkgaGF2ZSBhICdyZWdpb24nIGZpZWxkLCB0aGlzIGVuc3VyZXMgdGhlcmUgYXJlIG5vIGhhbmdpbmcgY29tbWFzIGlmIHJlZ2lvbiBpcyBlbXB0eVxyXG4gIGNpdHkuaW5uZXJUZXh0ID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcclxuICBpZiAod2VhdGhlckRhdGEubG9jYXRpb24ucmVnaW9uKSB7XHJcbiAgICBzdGF0ZUNvdW50cnkuaW5uZXJUZXh0ID0gYCR7d2VhdGhlckRhdGEubG9jYXRpb24ucmVnaW9ufSwgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0YXRlQ291bnRyeS5pbm5lclRleHQgPSBgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XHJcbiAgfVxyXG5cclxuICAvLyBVc2VzIGRhdGUtZm4gdG8gbWFrZSB0aGUgZGF0ZSBwcmV0dGllci5cclxuICBjb25zdCB0b2RheSA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZS5zbGljZSgwLCAxMCk7XHJcbiAgdG9kYXlEYXRlLmlubmVyVGV4dCA9IGZvcm1hdChwYXJzZUlTTyh0b2RheSksIFwiZWVlLCBNTU1NIGRvIHl5eXlcIik7XHJcblxyXG4gIC8vIEZpcnN0IGNoZWNrcyB3aGV0aGVyIGl0J3MgQU0gb3IgUE0sIHRoZW4gY2hlY2tzIHdoZXRoZXIgaXQncyBub29uIG9yIG1pZG5pZ2h0LiBQcm9iYWJseSBjb3VsZCBoYXZlIGRvbmUgdGhhdCB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cclxuICBjb25zdCBsb2NhbFRpbWUgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc2xpY2UoLTUpO1xyXG4gIGNvbnN0IGhvdXIgPSBsb2NhbFRpbWUuc2xpY2UoMCwgMik7XHJcbiAgY29uc3QgbWludXRlID0gbG9jYWxUaW1lLnNsaWNlKDMsIDUpO1xyXG4gIGlmIChob3VyIDwgMTIpIHtcclxuICAgIGlmIChob3VyID4gMCkge1xyXG4gICAgICB0aW1lLmlubmVyVGV4dCA9IGAke2xvY2FsVGltZX0gQU1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGltZS5pbm5lclRleHQgPSBgMTI6JHttaW51dGV9IEFNYDtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGhvdXIgLSAxMiA+IDApIHtcclxuICAgIHRpbWUuaW5uZXJUZXh0ID0gYCR7aG91ciAtIDEyfToke21pbnV0ZX0gUE1gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lLmlubmVyVGV4dCA9IGAxMjoke21pbnV0ZX0gUE1gO1xyXG4gIH1cclxuXHJcbiAgY29uZGl0aW9uSWNvbi5zcmMgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xyXG4gIGNvbmRpdGlvbkljb24uc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgY29uZGl0aW9uVGV4dC5pbm5lclRleHQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG4gIHRlbXBlcmF0dXJlLmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mfcKwRmA7XHJcbiAgZmVlbHNMaWtlLmlubmVyVGV4dCA9IGBGZWVscyBsaWtlICR7TWF0aC50cnVuYyhcclxuICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2ZcclxuICApfcKwRmA7XHJcbn1cclxuXHJcbi8vIENyZWF0ZXMgZGl2cyBmb3IgYW5kIHByaW50cyBmb3JlY2FzdCBjYXJkcy5cclxuZnVuY3Rpb24gcHJpbnRGb3JlY2FzdCh3ZWF0aGVyRGF0YSkge1xyXG4gIGNvbnN0IGZvcmVjYXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdFwiKTtcclxuICBmb3JlY2FzdERpdi5pbm5lckhUTUwgPSBcIjxoMT5Gb3JlY2FzdDwvaDE+XCI7XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAzOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGRheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkYXlEaXYuY2xhc3NOYW1lID0gXCJmb3JlY2FzdERpdlwiO1xyXG4gICAgZGF5RGl2LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldO1xyXG5cclxuICAgIGRheURpdi5zdHlsZS5iYWNrZ3JvdW5kID0gZmluZENvbG9yKGZvcmVjYXN0RGF0YS5kYXkuY29uZGl0aW9uLmNvZGUpO1xyXG5cclxuICAgIGNvbnN0IGRhdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZGF5LmNsYXNzTmFtZSA9IFwiZm9yZWNhc3REYXRlXCI7XHJcbiAgICBkYXkuaW5uZXJUZXh0ID0gZm9ybWF0KHBhcnNlSVNPKGZvcmVjYXN0RGF0YS5kYXRlKSwgXCJlZWUsIE1NTSBkb1wiKTtcclxuICAgIGRhdGVJY29uLmFwcGVuZENoaWxkKGRheSk7XHJcblxyXG4gICAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBjb25kaXRpb25JY29uLnNyYyA9IGZvcmVjYXN0RGF0YS5kYXkuY29uZGl0aW9uLmljb247XHJcbiAgICBkYXRlSWNvbi5hcHBlbmRDaGlsZChjb25kaXRpb25JY29uKTtcclxuICAgIGRheURpdi5hcHBlbmRDaGlsZChkYXRlSWNvbik7XHJcblxyXG4gICAgY29uc3QgdGVtcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY29uZGl0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGNvbmRpdGlvblRleHQuaW5uZXJUZXh0ID0gZm9yZWNhc3REYXRhLmRheS5jb25kaXRpb24udGV4dDtcclxuICAgIGNvbmRpdGlvblRleHQuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgdGVtcHMuYXBwZW5kQ2hpbGQoY29uZGl0aW9uVGV4dCk7XHJcblxyXG4gICAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbWluVGVtcC5jbGFzc05hbWUgPSBcIm1pblRlbXBcIjtcclxuICAgIG1pblRlbXAuaW5uZXJUZXh0ID0gYExvdzogJHtmb3JlY2FzdERhdGEuZGF5Lm1pbnRlbXBfZn1gO1xyXG4gICAgdGVtcHMuYXBwZW5kQ2hpbGQobWluVGVtcCk7XHJcblxyXG4gICAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbWF4VGVtcC5jbGFzc05hbWUgPSBcIm1heFRlbXBcIjtcclxuICAgIG1heFRlbXAuaW5uZXJUZXh0ID0gYEhpZ2g6ICR7Zm9yZWNhc3REYXRhLmRheS5tYXh0ZW1wX2Z9YDtcclxuICAgIHRlbXBzLmFwcGVuZENoaWxkKG1heFRlbXApO1xyXG4gICAgZGF5RGl2LmFwcGVuZENoaWxkKHRlbXBzKTtcclxuXHJcbiAgICBmb3JlY2FzdERpdi5hcHBlbmQoZGF5RGl2KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIENoZWNrcyB0aGUgY3VycmVudCB3ZWF0aGVyIGFuZCBmZXRjaGVzIHRoZSBhcHByb3ByaWF0ZSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gd2VhdGhlckNvbmRpdGlvbnMuanMsIHRoZW4gYnJpZ3RlbnMgdGhlIGNvbG9yIGZvciB1c2UgaW4gdGhlIGJhY2tncm91bmRzIG9mIGNhcmRzLlxyXG5mdW5jdGlvbiBzZXRCYWNrZ3JvdW5kcyh3ZWF0aGVyRGF0YSkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGVudmlyb25tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbnZpcm9ubWVudFwiKTtcclxuICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyXCIpO1xyXG4gIGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdFwiKTtcclxuXHJcbiAgLy8gRmV0Y2hlcyB0aGUgYmFja2dyb3VuZCBjb2xvciBpZiBpdCdzIGRheXRpbWUsIG90aGVyd2lzZSBzZXRzIGl0IHRvIHRoZSBuaWdodCBjb2xvclxyXG4gIGxldCB0b2RheUNvbG9yO1xyXG4gIGlmICh3ZWF0aGVyRGF0YS5jdXJyZW50LmlzX2RheSkge1xyXG4gICAgdG9kYXlDb2xvciA9IGZpbmRDb2xvcih3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5jb2RlKTtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgdG9kYXlDb2xvciA9IFwiIzBiMGYzOFwiO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgY29uc3QgZm9yZWNhc3REaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdERpdlwiKTtcclxuICAgIGZvcmVjYXN0RGl2cy5mb3JFYWNoKChkaXYpID0+IHtcclxuICAgICAgZGl2LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IHRvZGF5Q29sb3I7XHJcbiAgZW52aXJvbm1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGFkanVzdCh0b2RheUNvbG9yLCA1MCk7XHJcbiAgd2VhdGhlci5zdHlsZS5iYWNrZ3JvdW5kID0gYWRqdXN0KHRvZGF5Q29sb3IsIDcwKTtcclxuICBmb3JlY2FzdC5zdHlsZS5iYWNrZ3JvdW5kID0gYWRqdXN0KHRvZGF5Q29sb3IsIDUwKTtcclxufVxyXG5cclxuLy8gV2hlbiB0aGVyZSBpcyBhIHdlYXRoZXIgYWxlcnQsIHRoaXMgaXMgdXNlZCBieSB0aGUgYnV0dG9uIHRoYXQncyBnZW5lcmF0ZWQgdG8gc2hvdyBvciBoaWRlIHRoZSBleHRlbmRlZCBkZXRhaWxzIG9mIHRoZSBhbGVydC5cclxuZnVuY3Rpb24gdG9nZ2xlSGlkZGVuKCkge1xyXG4gIGNvbnN0IGhpZGRlbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlkZGVuRGl2XCIpO1xyXG4gIGNvbnN0IGhpZGRlbiA9IGhpZGRlbkRpdi5nZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgaWYgKGhpZGRlbikge1xyXG4gICAgaGlkZGVuRGl2LnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcImhpZGRlblwiKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIElmIHRoZXJlIGlzIGEgd2VhdGhlciBhbGVydCwgdGhpcyBpcyBjYWxsZWQgdG8gZGlzcGxheSB0aGUgaW5mb3JtYXRpb24gYXQgdGhlIGJvdHRvbSBvZiAnVG9kYXkncyBXZWF0aGVyJy4gQnkgZGVmYXVsdCBvbmx5IHRoZSBoZWFkbGluZSBhbmQgYnV0dG9uIGFyZW4ndCBoaWRkZW4uXHJcbmZ1bmN0aW9uIHByaW50QWxlcnQoYWxlcnREYXRhKSB7XHJcbiAgY29uc3QgYWxlcnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGFsZXJ0RGl2LmNsYXNzTmFtZSA9IFwid2VhdGhlckFsZXJ0XCI7XHJcblxyXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGhlYWRsaW5lLmlubmVyVGV4dCA9IGFsZXJ0RGF0YS5oZWFkbGluZTtcclxuICBhbGVydERpdi5hcHBlbmRDaGlsZChoZWFkbGluZSk7XHJcblxyXG4gIGNvbnN0IGFsZXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBhbGVydEJ0bi5jbGFzc05hbWUgPSBcImFsZXJ0QnRuXCI7XHJcbiAgYWxlcnRCdG4uaW5uZXJUZXh0ID0gXCJTaG93IE1vcmVcIjtcclxuICBhbGVydEJ0bi5vbmNsaWNrID0gdG9nZ2xlSGlkZGVuO1xyXG4gIGFsZXJ0RGl2LmFwcGVuZENoaWxkKGFsZXJ0QnRuKTtcclxuXHJcbiAgY29uc3QgaGlkZGVuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoaWRkZW5EaXYuY2xhc3NOYW1lID0gXCJoaWRkZW5EaXZcIjtcclxuICBoaWRkZW5EaXYuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwiaGlkZGVuXCIpO1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGFsZXJ0RGF0YS5kZXNjO1xyXG4gIGhpZGRlbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gIC8vIE5vdCBhbGwgYWxlcnRzIGhhdmUgYW4gaW5zdHJ1Y3Rpb24gcHJvcGVydHlcclxuICBpZiAoYWxlcnREYXRhLmluc3RydWN0aW9uKSB7XHJcbiAgICBjb25zdCBpbnN0cnVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgaW5zdHJ1Y3Rpb24uaW5uZXJUZXh0ID0gYWxlcnREYXRhLmluc3RydWN0aW9uO1xyXG4gICAgaGlkZGVuRGl2LmFwcGVuZENoaWxkKGluc3RydWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGFsZXJ0RGl2LmFwcGVuZENoaWxkKGhpZGRlbkRpdik7XHJcbiAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlclwiKTtcclxuICB3ZWF0aGVyLmFwcGVuZENoaWxkKGFsZXJ0RGl2KTtcclxufVxyXG5cclxuLy8gQ2FsbHMgdGhlIEFQSSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0IGFzIGEgcHJvbWlzZS4gVGhlIG9ubHkgZXJyb3JzIHRoYXQgZ2V0IGNhdWdodCBoZXJlIGFyZSBpc3N1ZXMgd2l0aCB0aGUgQVBJIGNhbGwsIG5vdCB0aGUgcmVzcG9uc2UuXHJcbmFzeW5jIGZ1bmN0aW9uIGNhbGxBcGkobG9jYXRpb24pIHtcclxuICBsZXQgcmVzcG9uc2U7XHJcbiAgdHJ5IHtcclxuICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT04NGNjZDQ0OGYwMGY0ZDQ1OTFhMjEwNjQwMjMxMjA3JnE9JHtsb2NhdGlvbn0mZGF5cz00JmFxaT15ZXMmYWxlcnRzPXllc2AsXHJcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3I6IFwiLCBlcnJvcik7XHJcbiAgfVxyXG4gIHJldHVybiByZXNwb25zZTtcclxufVxyXG5cclxuLy8gTWFpbiBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBcIkdldCBXZWF0aGVyXCIgYnV0dG9uIGlzIHByZXNzZWQuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XHJcbiAgY29uc3QgaW52YWxpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW52YWxpZFwiKTtcclxuICBjb25zdCBoaWRkZW4gPSBpbnZhbGlkLmdldEF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuXHJcbiAgLy8gQ2FsbHMgdGhlIEFQSS4gSWYgdGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggdGhlIHJlc3BvbnNlLCB1bi1oaWRlcyBhIG1lc3NhZ2Ugc2hvd2luZyB0aGUgbG9jYXRpb24gd2FzIGludmFsaWQuIE90aGVyd2lzZSBjYWxscyBlYWNoIG9mIHRoZSBwcmludGluZyBmdW5jdGlvbnMuXHJcbiAgY29uc3QgYXBpRGF0YSA9IGF3YWl0IGNhbGxBcGkobG9jYXRpb24pO1xyXG4gIGlmICghYXBpRGF0YS5vaykge1xyXG4gICAgaWYgKGhpZGRlbikge1xyXG4gICAgICBpbnZhbGlkLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBhcGlEYXRhLmpzb24oKTtcclxuXHJcbiAgICBwcmludEN1cnJlbnRXZWF0aGVyKHdlYXRoZXJEYXRhKTtcclxuICAgIHByaW50Rm9yZWNhc3Qod2VhdGhlckRhdGEpO1xyXG4gICAgcHJpbnRDdXJyZW50Q29uZGl0aW9ucyh3ZWF0aGVyRGF0YSk7XHJcbiAgICBzZXRCYWNrZ3JvdW5kcyh3ZWF0aGVyRGF0YSk7XHJcblxyXG4gICAgLy8gRmlyc3QgY2hlY2tzIHRvIHNlZSBpZiB0aGVyZSBpcyBhbiBleGlzdGluZyBhbGVydCBvbiB0aGUgcGFnZSBhbmQgcmVtb3ZlcyBpdC4gVGhlbiBpZiwgdGhlIG5ldyBsb2NhdGlvbiBoYXMgYW4gYWxlcnQsIGNhbGxzIHRoZSBmdW5jdGlvbiB0byBwcmludCBpdC5cclxuICAgIGNvbnN0IGFsZXJ0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyQWxlcnRcIik7XHJcbiAgICBpZiAoYWxlcnREaXYpIHtcclxuICAgICAgYWxlcnREaXYucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAod2VhdGhlckRhdGEuYWxlcnRzLmFsZXJ0WzBdKSB7XHJcbiAgICAgIHByaW50QWxlcnQod2VhdGhlckRhdGEuYWxlcnRzLmFsZXJ0WzBdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0aGUgSW52YWxpZCBMb2NhdGlvbiBtZXNzYWdlIGlzIHZpc2libGUsIGhpZGVzIGl0LlxyXG4gICAgaWYgKCFoaWRkZW4pIHtcclxuICAgICAgaW52YWxpZC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJoaWRkZW5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFdmVudCBsaXN0ZW5lcnMgZm9yIHVzZXIgaW5wdXRcclxuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRCdG5cIik7XHJcbmNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcklucHV0XCIpO1xyXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpZiAodXNlcklucHV0LnZhbHVlKSB7XHJcbiAgICBnZXRXZWF0aGVyRGF0YSh1c2VySW5wdXQudmFsdWUpO1xyXG4gICAgdXNlcklucHV0LnZhbHVlID0gXCJcIjtcclxuICB9XHJcbn0pO1xyXG5cclxudXNlcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICBzdWJtaXRCdG4uY2xpY2soKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gT24gcGFnZSBsb2FkLCBnZXRzIGxvY2FsIHdlYXRoZXIgdXNpbmcgdXNlcidzIElQIGFkZHJlc3MuXHJcbmdldFdlYXRoZXJEYXRhKFwiYXV0bzppcFwiKTtcclxuIiwiZXhwb3J0IGNvbnN0IHdlYXRoZXJDb25kaXRpb25zID0gW1xyXG4gIHtcclxuICAgIGNvZGU6IDEwMDAsXHJcbiAgICBkYXk6IFwiU3VubnlcIixcclxuICAgIGNvbG9yOiBcIiNmN2ZiODhcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEwMDMsXHJcbiAgICBkYXk6IFwiUGFydGx5IGNsb3VkeVwiLFxyXG4gICAgY29sb3I6IFwiI2YzZjU4ZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTAwNixcclxuICAgIGRheTogXCJDbG91ZHlcIixcclxuICAgIGNvbG9yOiBcIiM5ZmExOTFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEwMDksXHJcbiAgICBkYXk6IFwiT3ZlcmNhc3RcIixcclxuICAgIGNvbG9yOiBcIiM5MTljYTFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEwMzAsXHJcbiAgICBkYXk6IFwiTWlzdFwiLFxyXG4gICAgY29sb3I6IFwiI2MxZDFkOVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTA2MyxcclxuICAgIGRheTogXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLFxyXG4gICAgY29sb3I6IFwiI2FlZDRlNlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTA2NixcclxuICAgIGRheTogXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiLFxyXG4gICAgY29sb3I6IFwiI2NlZTJlYlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTA2OSxcclxuICAgIGRheTogXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIixcclxuICAgIGNvbG9yOiBcIiNhM2I2YmZcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEwNzIsXHJcbiAgICBkYXk6IFwiUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGVcIixcclxuICAgIGNvbG9yOiBcIiM1ZDdhODdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEwODcsXHJcbiAgICBkYXk6IFwiVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXCIsXHJcbiAgICBjb2xvcjogXCJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDExMTQsXHJcbiAgICBkYXk6IFwiQmxvd2luZyBzbm93XCIsXHJcbiAgICBjb2xvcjogXCIjZGNlZmY3XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMTE3LFxyXG4gICAgZGF5OiBcIkJsaXp6YXJkXCIsXHJcbiAgICBjb2xvcjogXCIjZjdmOWZhXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMTM1LFxyXG4gICAgZGF5OiBcIkZvZ1wiLFxyXG4gICAgY29sb3I6IFwiI2NhY2JjY1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTE0NyxcclxuICAgIGRheTogXCJGcmVlemluZyBmb2dcIixcclxuICAgIGNvbG9yOiBcIiNiMWI3YmFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDExNTAsXHJcbiAgICBkYXk6IFwiUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcIixcclxuICAgIGNvbG9yOiBcIiNjZWU4ZjVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDExNTMsXHJcbiAgICBkYXk6IFwiTGlnaHQgZHJpenpsZVwiLFxyXG4gICAgY29sb3I6IFwiI2I2ZTVmYVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTE2OCxcclxuICAgIGRheTogXCJGcmVlemluZyBkcml6emxlXCIsXHJcbiAgICBjb2xvcjogXCIjYTBjYWRlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMTcxLFxyXG4gICAgZGF5OiBcIkhlYXZ5IGZyZWV6aW5nIGRyaXp6bGVcIixcclxuICAgIGNvbG9yOiBcIiM4NGE0YjNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDExODAsXHJcbiAgICBkYXk6IFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIixcclxuICAgIGNvbG9yOiBcIiM4YWNlZWRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDExODMsXHJcbiAgICBkYXk6IFwiTGlnaHQgcmFpblwiLFxyXG4gICAgY29sb3I6IFwiIzRmYWJkNlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTE4NixcclxuICAgIGRheTogXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsXHJcbiAgICBjb2xvcjogXCIjNGViYmVkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMTg5LFxyXG4gICAgZGF5OiBcIk1vZGVyYXRlIHJhaW5cIixcclxuICAgIGNvbG9yOiBcIiMzNGIxZWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDExOTIsXHJcbiAgICBkYXk6IFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLFxyXG4gICAgY29sb3I6IFwiIzIxOGZjMlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTE5NSxcclxuICAgIGRheTogXCJIZWF2eSByYWluXCIsXHJcbiAgICBjb2xvcjogXCIjMjA3OGExXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMTk4LFxyXG4gICAgZGF5OiBcIkxpZ2h0IGZyZWV6aW5nIHJhaW5cIixcclxuICAgIGNvbG9yOiBcIiM3MmQwZmNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyMDEsXHJcbiAgICBkYXk6IFwiTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpblwiLFxyXG4gICAgY29sb3I6IFwiIzQwNzk5NFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTIwNCxcclxuICAgIGRheTogXCJMaWdodCBzbGVldFwiLFxyXG4gICAgY29sb3I6IFwiI2EwYTJhM1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTIwNyxcclxuICAgIGRheTogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldFwiLFxyXG4gICAgY29sb3I6IFwiIzc5ODE4NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTIxMCxcclxuICAgIGRheTogXCJQYXRjaHkgbGlnaHQgc25vd1wiLFxyXG4gICAgY29sb3I6IFwiI2MzYzZjN1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTIxMyxcclxuICAgIGRheTogXCJMaWdodCBzbm93XCIsXHJcbiAgICBjb2xvcjogXCIjZGFkZWUwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjE2LFxyXG4gICAgZGF5OiBcIlBhdGNoeSBtb2RlcmF0ZSBzbm93XCIsXHJcbiAgICBjb2xvcjogXCIjY2ZkMmQ0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjE5LFxyXG4gICAgZGF5OiBcIk1vZGVyYXRlIHNub3dcIixcclxuICAgIGNvbG9yOiBcIiNjYWRiZWRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyMjIsXHJcbiAgICBkYXk6IFwiUGF0Y2h5IGhlYXZ5IHNub3dcIixcclxuICAgIGNvbG9yOiBcIiM5OWFmYzdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyMjUsXHJcbiAgICBkYXk6IFwiSGVhdnkgc25vd1wiLFxyXG4gICAgY29sb3I6IFwiIzY5Nzc4Y1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTIzNyxcclxuICAgIGRheTogXCJJY2UgcGVsbGV0c1wiLFxyXG4gICAgY29sb3I6IFwiI2NkY2ZkMVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTI0MCxcclxuICAgIGRheTogXCJMaWdodCByYWluIHNob3dlclwiLFxyXG4gICAgY29sb3I6IFwiI2IxY2FmMFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTI0MyxcclxuICAgIGRheTogXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlclwiLFxyXG4gICAgY29sb3I6IFwiI2EwYzRmYVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTI0NixcclxuICAgIGRheTogXCJUb3JyZW50aWFsIHJhaW4gc2hvd2VyXCIsXHJcbiAgICBjb2xvcjogXCIjNjc4YWJmXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjQ5LFxyXG4gICAgZGF5OiBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIixcclxuICAgIGNvbG9yOiBcIiNhZGI3YzdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyNTIsXHJcbiAgICBkYXk6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgY29sb3I6IFwiIzhjOWViYVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTI1NSxcclxuICAgIGRheTogXCJMaWdodCBzbm93IHNob3dlcnNcIixcclxuICAgIGNvbG9yOiBcIiNjY2Q5ZWRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyNTgsXHJcbiAgICBkYXk6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzXCIsXHJcbiAgICBjb2xvcjogXCIjYzBjNWNjXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjYxLFxyXG4gICAgZGF5OiBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIixcclxuICAgIGNvbG9yOiBcIiM5ZWE0YWRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyNjQsXHJcbiAgICBkYXk6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLFxyXG4gICAgY29sb3I6IFwiIzdlODc5NFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTI3MyxcclxuICAgIGRheTogXCJQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXJcIixcclxuICAgIGNvbG9yOiBcIiNhNWM0ZjJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyNzYsXHJcbiAgICBkYXk6IFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXJcIixcclxuICAgIGNvbG9yOiBcIiM4ZGEyYzJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyNzksXHJcbiAgICBkYXk6IFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIsXHJcbiAgICBjb2xvcjogXCIjYjNjN2U2XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjgyLFxyXG4gICAgZGF5OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyXCIsXHJcbiAgICBjb2xvcjogXCIjN2Q5ZmQxXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgd2VhdGhlckNvbmRpdGlvbnMgfTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlZpY3RvciBNb25vXCIsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciAzMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ud2VhdGhlclJlcG9ydCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG59XHJcblxyXG4uZW52aXJvbm1lbnQsXHJcbi53ZWF0aGVyLFxyXG4uZm9yZWNhc3Qge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyLFxyXG4uZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNmNDk3O1xyXG59XHJcblxyXG5idXR0b24sXHJcbmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVudmlyb25tZW50LFxyXG4uZm9yZWNhc3Qge1xyXG4gIG1hcmdpbjogNDBweCA1cHg7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmVudmlyb25tZW50IHAge1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLndlYXRoZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndlYXRoZXIgZGl2IGRpdiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uY29uZGl0aW9uSWNvbiB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmFsZXJ0QnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAxNDIsIDIwOSk7XHJcbn1cclxuXHJcbi5mb3JlY2FzdERpdiB7XHJcbiAgbWFyZ2luOiAzMHB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NiwgMTE3KTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbn1cclxuXHJcbi5mb3JlY2FzdERpdiBwIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICB9XHJcblxyXG4gIC53ZWF0aGVyIHtcclxuICAgIGdyaWQtYXJlYTogd2VhdGhlcjtcclxuICB9XHJcblxyXG4gIC5mb3JlY2FzdCB7XHJcbiAgICBncmlkLWFyZWE6IGZvcmVjYXN0O1xyXG4gIH1cclxuXHJcbiAgLmVudmlyb25tZW50IHtcclxuICAgIGdyaWQtYXJlYTogZW52aXJvbm1lbnQ7XHJcbiAgfVxyXG5cclxuICAud2VhdGhlclJlcG9ydCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcIndlYXRoZXJcIlxyXG4gICAgICBcImZvcmVjYXN0XCJcclxuICAgICAgXCJlbnZpcm9ubWVudFwiO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG4gIC5lbnZpcm9ubWVudCxcclxuICAud2VhdGhlcixcclxuICAuZm9yZWNhc3Qge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzAwcHgpIHtcclxuICAud2VhdGhlclJlcG9ydCB7XHJcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFOzs7bUJBR2U7SUFDZiwwQkFBMEI7RUFDNUI7RUFDQTs7O0lBR0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJWaWN0b3IgTW9ub1xcXCIsIG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgMzBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlclJlcG9ydCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZW52aXJvbm1lbnQsXFxyXFxuLndlYXRoZXIsXFxyXFxuLmZvcmVjYXN0IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcixcXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2Y0OTc7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVudmlyb25tZW50LFxcclxcbi5mb3JlY2FzdCB7XFxyXFxuICBtYXJnaW46IDQwcHggNXB4O1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVudmlyb25tZW50IHAge1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyIGRpdiBkaXYge1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZGl0aW9uSWNvbiB7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWxlcnRCdG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgMTQyLCAyMDkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3REaXYge1xcclxcbiAgbWFyZ2luOiAzMHB4IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyNDYsIDExNyk7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3REaXYgcCB7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogZW5kO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gIC5jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud2VhdGhlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogd2VhdGhlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JlY2FzdCB7XFxyXFxuICAgIGdyaWQtYXJlYTogZm9yZWNhc3Q7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZW52aXJvbm1lbnQge1xcclxcbiAgICBncmlkLWFyZWE6IGVudmlyb25tZW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgLndlYXRoZXJSZXBvcnQge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAgIFxcXCJ3ZWF0aGVyXFxcIlxcclxcbiAgICAgIFxcXCJmb3JlY2FzdFxcXCJcXHJcXG4gICAgICBcXFwiZW52aXJvbm1lbnRcXFwiO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG4gIC5lbnZpcm9ubWVudCxcXHJcXG4gIC53ZWF0aGVyLFxcclxcbiAgLmZvcmVjYXN0IHtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzMDBweCkge1xcclxcbiAgLndlYXRoZXJSZXBvcnQge1xcclxcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiYWRkTGVhZGluZ1plcm9zIiwibnVtYmVyIiwidGFyZ2V0TGVuZ3RoIiwic2lnbiIsIm91dHB1dCIsIk1hdGgiLCJhYnMiLCJkZWZhdWx0TG9jYWxlIiwiZGVmYXVsdE9wdGlvbnMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInNldERlZmF1bHRPcHRpb25zIiwibmV3T3B0aW9ucyIsImdldFVUQ0RheU9mWWVhciIsImdldFVUQ0lTT1dlZWsiLCJnZXRVVENJU09XZWVrWWVhciIsImdldFVUQ1dlZWsiLCJnZXRVVENXZWVrWWVhciIsImxpZ2h0Rm9ybWF0dGVycyIsImRheVBlcmlvZEVudW0iLCJhbSIsInBtIiwibWlkbmlnaHQiLCJub29uIiwibW9ybmluZyIsImFmdGVybm9vbiIsImV2ZW5pbmciLCJuaWdodCIsImZvcm1hdHRlcnMiLCJHIiwiZGF0ZSIsInRva2VuIiwibG9jYWxpemUiLCJlcmEiLCJnZXRVVENGdWxsWWVhciIsIndpZHRoIiwieSIsInNpZ25lZFllYXIiLCJ5ZWFyIiwib3JkaW5hbE51bWJlciIsInVuaXQiLCJZIiwib3B0aW9ucyIsInNpZ25lZFdlZWtZZWFyIiwid2Vla1llYXIiLCJ0d29EaWdpdFllYXIiLCJSIiwiaXNvV2Vla1llYXIiLCJ1IiwiUSIsInF1YXJ0ZXIiLCJjZWlsIiwiZ2V0VVRDTW9udGgiLCJTdHJpbmciLCJjb250ZXh0IiwicSIsIk0iLCJtb250aCIsIkwiLCJ3Iiwid2VlayIsIkkiLCJpc29XZWVrIiwiZCIsImdldFVUQ0RhdGUiLCJEIiwiZGF5T2ZZZWFyIiwiRSIsImRheU9mV2VlayIsImdldFVUQ0RheSIsImRheSIsImUiLCJsb2NhbERheU9mV2VlayIsIndlZWtTdGFydHNPbiIsImMiLCJpc29EYXlPZldlZWsiLCJhIiwiaG91cnMiLCJnZXRVVENIb3VycyIsImRheVBlcmlvZEVudW1WYWx1ZSIsImRheVBlcmlvZCIsInRvTG93ZXJDYXNlIiwiYiIsIkIiLCJoIiwiSCIsIksiLCJtIiwiZ2V0VVRDTWludXRlcyIsInMiLCJnZXRVVENTZWNvbmRzIiwiUyIsIlgiLCJfbG9jYWxpemUiLCJvcmlnaW5hbERhdGUiLCJfb3JpZ2luYWxEYXRlIiwidGltZXpvbmVPZmZzZXQiLCJnZXRUaW1lem9uZU9mZnNldCIsImZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyIsImZvcm1hdFRpbWV6b25lIiwieCIsIk8iLCJmb3JtYXRUaW1lem9uZVNob3J0IiwieiIsInQiLCJ0aW1lc3RhbXAiLCJmbG9vciIsImdldFRpbWUiLCJUIiwib2Zmc2V0IiwiZGlydHlEZWxpbWl0ZXIiLCJhYnNPZmZzZXQiLCJtaW51dGVzIiwiZGVsaW1pdGVyIiwidG9VcHBlckNhc2UiLCJudW1iZXJPZkRpZ2l0cyIsIm1pbGxpc2Vjb25kcyIsImdldFVUQ01pbGxpc2Vjb25kcyIsImZyYWN0aW9uYWxTZWNvbmRzIiwicG93IiwiZGF0ZUxvbmdGb3JtYXR0ZXIiLCJwYXR0ZXJuIiwiZm9ybWF0TG9uZyIsInRpbWVMb25nRm9ybWF0dGVyIiwidGltZSIsImRhdGVUaW1lTG9uZ0Zvcm1hdHRlciIsIm1hdGNoUmVzdWx0IiwibWF0Y2giLCJkYXRlUGF0dGVybiIsInRpbWVQYXR0ZXJuIiwiZGF0ZVRpbWVGb3JtYXQiLCJkYXRlVGltZSIsInJlcGxhY2UiLCJsb25nRm9ybWF0dGVycyIsInAiLCJQIiwiZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyIsInV0Y0RhdGUiLCJEYXRlIiwiVVRDIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2V0TWlsbGlzZWNvbmRzIiwic2V0VVRDRnVsbFllYXIiLCJ0b0RhdGUiLCJyZXF1aXJlZEFyZ3MiLCJNSUxMSVNFQ09ORFNfSU5fREFZIiwiZGlydHlEYXRlIiwiYXJndW1lbnRzIiwic2V0VVRDTW9udGgiLCJzZXRVVENIb3VycyIsInN0YXJ0T2ZZZWFyVGltZXN0YW1wIiwiZGlmZmVyZW5jZSIsInN0YXJ0T2ZVVENJU09XZWVrIiwiZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciIsInN0YXJ0T2ZOZXh0WWVhciIsImZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIiLCJzdGFydE9mVGhpc1llYXIiLCJzdGFydE9mVVRDSVNPV2Vla1llYXIiLCJNSUxMSVNFQ09ORFNfSU5fV0VFSyIsImRpZmYiLCJyb3VuZCIsInN0YXJ0T2ZVVENXZWVrIiwidG9JbnRlZ2VyIiwiX3JlZiIsIl9yZWYyIiwiX3JlZjMiLCJfb3B0aW9ucyRmaXJzdFdlZWtDb24iLCJfb3B0aW9ucyRsb2NhbGUiLCJfb3B0aW9ucyRsb2NhbGUkb3B0aW8iLCJfZGVmYXVsdE9wdGlvbnMkbG9jYWwiLCJfZGVmYXVsdE9wdGlvbnMkbG9jYWwyIiwiZmlyc3RXZWVrQ29udGFpbnNEYXRlIiwibG9jYWxlIiwiUmFuZ2VFcnJvciIsImZpcnN0V2Vla09mTmV4dFllYXIiLCJmaXJzdFdlZWtPZlRoaXNZZWFyIiwic3RhcnRPZlVUQ1dlZWtZZWFyIiwicHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zIiwicHJvdGVjdGVkV2Vla1llYXJUb2tlbnMiLCJpc1Byb3RlY3RlZERheU9mWWVhclRva2VuIiwiaW5kZXhPZiIsImlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiIsInRocm93UHJvdGVjdGVkRXJyb3IiLCJmb3JtYXQiLCJpbnB1dCIsInJlcXVpcmVkIiwiYXJncyIsIlR5cGVFcnJvciIsImZvdXJ0aE9mSmFudWFyeSIsInNldFVUQ0RhdGUiLCJmaXJzdFdlZWsiLCJfb3B0aW9ucyR3ZWVrU3RhcnRzT24iLCJkaXJ0eU51bWJlciIsIk5hTiIsIk51bWJlciIsImlzTmFOIiwiYWRkTWlsbGlzZWNvbmRzIiwiZGlydHlBbW91bnQiLCJhbW91bnQiLCJkYXlzSW5XZWVrIiwiZGF5c0luWWVhciIsIm1heFRpbWUiLCJtaWxsaXNlY29uZHNJbk1pbnV0ZSIsIm1pbGxpc2Vjb25kc0luSG91ciIsIm1pbGxpc2Vjb25kc0luU2Vjb25kIiwibWluVGltZSIsIm1pbnV0ZXNJbkhvdXIiLCJtb250aHNJblF1YXJ0ZXIiLCJtb250aHNJblllYXIiLCJxdWFydGVyc0luWWVhciIsInNlY29uZHNJbkhvdXIiLCJzZWNvbmRzSW5NaW51dGUiLCJzZWNvbmRzSW5EYXkiLCJzZWNvbmRzSW5XZWVrIiwic2Vjb25kc0luWWVhciIsInNlY29uZHNJbk1vbnRoIiwic2Vjb25kc0luUXVhcnRlciIsImlzVmFsaWQiLCJzdWJNaWxsaXNlY29uZHMiLCJmb3JtYXR0aW5nVG9rZW5zUmVnRXhwIiwibG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAiLCJlc2NhcGVkU3RyaW5nUmVnRXhwIiwiZG91YmxlUXVvdGVSZWdFeHAiLCJ1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCIsImRpcnR5Rm9ybWF0U3RyIiwiX3JlZjQiLCJfb3B0aW9ucyRsb2NhbGUyIiwiX29wdGlvbnMkbG9jYWxlMiRvcHRpIiwiX3JlZjUiLCJfcmVmNiIsIl9yZWY3IiwiX29wdGlvbnMkbG9jYWxlMyIsIl9vcHRpb25zJGxvY2FsZTMkb3B0aSIsIl9kZWZhdWx0T3B0aW9ucyRsb2NhbDMiLCJfZGVmYXVsdE9wdGlvbnMkbG9jYWw0IiwiZm9ybWF0U3RyIiwiZm9ybWF0dGVyT3B0aW9ucyIsInJlc3VsdCIsInN1YnN0cmluZyIsImZpcnN0Q2hhcmFjdGVyIiwibG9uZ0Zvcm1hdHRlciIsImNsZWFuRXNjYXBlZFN0cmluZyIsImZvcm1hdHRlciIsInVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyIsInVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMiLCJtYXRjaGVkIiwiX3R5cGVvZiIsImlzRGF0ZSIsInZhbHVlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsImJ1aWxkRm9ybWF0TG9uZ0ZuIiwiZGVmYXVsdFdpZHRoIiwiZm9ybWF0cyIsImJ1aWxkTG9jYWxpemVGbiIsImRpcnR5SW5kZXgiLCJ2YWx1ZXNBcnJheSIsImZvcm1hdHRpbmdWYWx1ZXMiLCJkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIiwiX2RlZmF1bHRXaWR0aCIsIl93aWR0aCIsInZhbHVlcyIsImluZGV4IiwiYXJndW1lbnRDYWxsYmFjayIsImJ1aWxkTWF0Y2hGbiIsInN0cmluZyIsIm1hdGNoUGF0dGVybiIsIm1hdGNoUGF0dGVybnMiLCJkZWZhdWx0TWF0Y2hXaWR0aCIsIm1hdGNoZWRTdHJpbmciLCJwYXJzZVBhdHRlcm5zIiwiZGVmYXVsdFBhcnNlV2lkdGgiLCJrZXkiLCJBcnJheSIsImlzQXJyYXkiLCJmaW5kSW5kZXgiLCJ0ZXN0IiwiZmluZEtleSIsInZhbHVlQ2FsbGJhY2siLCJyZXN0Iiwic2xpY2UiLCJvYmplY3QiLCJwcmVkaWNhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsImFycmF5IiwiYnVpbGRNYXRjaFBhdHRlcm5GbiIsInBhcnNlUmVzdWx0IiwicGFyc2VQYXR0ZXJuIiwiZm9ybWF0RGlzdGFuY2VMb2NhbGUiLCJsZXNzVGhhblhTZWNvbmRzIiwib25lIiwib3RoZXIiLCJ4U2Vjb25kcyIsImhhbGZBTWludXRlIiwibGVzc1RoYW5YTWludXRlcyIsInhNaW51dGVzIiwiYWJvdXRYSG91cnMiLCJ4SG91cnMiLCJ4RGF5cyIsImFib3V0WFdlZWtzIiwieFdlZWtzIiwiYWJvdXRYTW9udGhzIiwieE1vbnRocyIsImFib3V0WFllYXJzIiwieFllYXJzIiwib3ZlclhZZWFycyIsImFsbW9zdFhZZWFycyIsImZvcm1hdERpc3RhbmNlIiwiY291bnQiLCJ0b2tlblZhbHVlIiwiYWRkU3VmZml4IiwiY29tcGFyaXNvbiIsImRhdGVGb3JtYXRzIiwiZnVsbCIsImxvbmciLCJtZWRpdW0iLCJzaG9ydCIsInRpbWVGb3JtYXRzIiwiZGF0ZVRpbWVGb3JtYXRzIiwiZm9ybWF0UmVsYXRpdmVMb2NhbGUiLCJsYXN0V2VlayIsInllc3RlcmRheSIsInRvZGF5IiwidG9tb3Jyb3ciLCJuZXh0V2VlayIsImZvcm1hdFJlbGF0aXZlIiwiX2RhdGUiLCJfYmFzZURhdGUiLCJfb3B0aW9ucyIsImVyYVZhbHVlcyIsIm5hcnJvdyIsImFiYnJldmlhdGVkIiwid2lkZSIsInF1YXJ0ZXJWYWx1ZXMiLCJtb250aFZhbHVlcyIsImRheVZhbHVlcyIsImRheVBlcmlvZFZhbHVlcyIsImZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMiLCJyZW0xMDAiLCJtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuIiwicGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiIsIm1hdGNoRXJhUGF0dGVybnMiLCJwYXJzZUVyYVBhdHRlcm5zIiwiYW55IiwibWF0Y2hRdWFydGVyUGF0dGVybnMiLCJwYXJzZVF1YXJ0ZXJQYXR0ZXJucyIsIm1hdGNoTW9udGhQYXR0ZXJucyIsInBhcnNlTW9udGhQYXR0ZXJucyIsIm1hdGNoRGF5UGF0dGVybnMiLCJwYXJzZURheVBhdHRlcm5zIiwibWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyIsInBhcnNlRGF5UGVyaW9kUGF0dGVybnMiLCJwYXJzZUludCIsImNvZGUiLCJwYXJzZUlTTyIsImFyZ3VtZW50IiwiX29wdGlvbnMkYWRkaXRpb25hbERpIiwiYWRkaXRpb25hbERpZ2l0cyIsImRhdGVTdHJpbmdzIiwic3BsaXREYXRlU3RyaW5nIiwicGFyc2VZZWFyUmVzdWx0IiwicGFyc2VZZWFyIiwicGFyc2VEYXRlIiwicmVzdERhdGVTdHJpbmciLCJwYXJzZVRpbWUiLCJ0aW1lem9uZSIsInBhcnNlVGltZXpvbmUiLCJzZXRGdWxsWWVhciIsInNldEhvdXJzIiwicGF0dGVybnMiLCJkYXRlVGltZURlbGltaXRlciIsInRpbWVab25lRGVsaW1pdGVyIiwiZGF0ZVJlZ2V4IiwidGltZVJlZ2V4IiwidGltZXpvbmVSZWdleCIsImRhdGVTdHJpbmciLCJzcGxpdCIsInRpbWVTdHJpbmciLCJzdWJzdHIiLCJleGVjIiwicmVnZXgiLCJSZWdFeHAiLCJjYXB0dXJlcyIsImNlbnR1cnkiLCJpc1dlZWtEYXRlIiwicGFyc2VEYXRlVW5pdCIsInZhbGlkYXRlV2Vla0RhdGUiLCJkYXlPZklTT1dlZWtZZWFyIiwidmFsaWRhdGVEYXRlIiwidmFsaWRhdGVEYXlPZlllYXJEYXRlIiwibWF4IiwicGFyc2VUaW1lVW5pdCIsInNlY29uZHMiLCJ2YWxpZGF0ZVRpbWUiLCJwYXJzZUZsb2F0IiwidGltZXpvbmVTdHJpbmciLCJ2YWxpZGF0ZVRpbWV6b25lIiwiZm91cnRoT2ZKYW51YXJ5RGF5IiwiZGF5c0luTW9udGhzIiwiaXNMZWFwWWVhckluZGV4IiwiX3llYXIiLCJfaG91cnMiLCJhcmdTdHIiLCJjb25zb2xlIiwid2FybiIsIkVycm9yIiwic3RhY2siLCJ3ZWF0aGVyQ29uZGl0aW9ucyIsImZpbmRDb2xvciIsImZpbmQiLCJjb2xvciIsImFkanVzdCIsIm1pbiIsInByaW50Q3VycmVudENvbmRpdGlvbnMiLCJ3ZWF0aGVyRGF0YSIsIndpbmRTcGVlZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImh1bWlkaXR5IiwidXZJbmRleCIsImFpclF1YWxpdHkiLCJwcmVzc3VyZSIsInByZWNpcGl0YXRpb24iLCJpbm5lclRleHQiLCJjdXJyZW50Iiwid2luZF9tcGgiLCJ3aW5kX2RpciIsInV2IiwiYWlyX3F1YWxpdHkiLCJwcmVzc3VyZV9pbiIsInByZWNpcF9pbiIsInByaW50Q3VycmVudFdlYXRoZXIiLCJjaXR5Iiwic3RhdGVDb3VudHJ5IiwiY29uZGl0aW9uSWNvbiIsImNvbmRpdGlvblRleHQiLCJ0ZW1wZXJhdHVyZSIsImZlZWxzTGlrZSIsInRvZGF5RGF0ZSIsImxvY2F0aW9uIiwibmFtZSIsInJlZ2lvbiIsImNvdW50cnkiLCJsb2NhbHRpbWUiLCJsb2NhbFRpbWUiLCJob3VyIiwibWludXRlIiwic3JjIiwiY29uZGl0aW9uIiwiaWNvbiIsInN0eWxlIiwiZGlzcGxheSIsInRleHQiLCJ0ZW1wX2YiLCJ0cnVuYyIsImZlZWxzbGlrZV9mIiwicHJpbnRGb3JlY2FzdCIsImZvcmVjYXN0RGl2IiwiaW5uZXJIVE1MIiwiZGF5RGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImZvcmVjYXN0RGF0YSIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJiYWNrZ3JvdW5kIiwiZGF0ZUljb24iLCJhcHBlbmRDaGlsZCIsInRlbXBzIiwiZm9udFdlaWdodCIsIm1pblRlbXAiLCJtaW50ZW1wX2YiLCJtYXhUZW1wIiwibWF4dGVtcF9mIiwiYXBwZW5kIiwic2V0QmFja2dyb3VuZHMiLCJjb250YWluZXIiLCJlbnZpcm9ubWVudCIsIndlYXRoZXIiLCJ0b2RheUNvbG9yIiwiaXNfZGF5IiwiZm9yZWNhc3REaXZzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkaXYiLCJ0b2dnbGVIaWRkZW4iLCJoaWRkZW5EaXYiLCJoaWRkZW4iLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJwcmludEFsZXJ0IiwiYWxlcnREYXRhIiwiYWxlcnREaXYiLCJoZWFkbGluZSIsImFsZXJ0QnRuIiwib25jbGljayIsImRlc2NyaXB0aW9uIiwiZGVzYyIsImluc3RydWN0aW9uIiwiY2FsbEFwaSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwiZXJyb3IiLCJnZXRXZWF0aGVyRGF0YSIsImludmFsaWQiLCJhcGlEYXRhIiwib2siLCJqc29uIiwicmVtb3ZlIiwiYWxlcnRzIiwiYWxlcnQiLCJzdWJtaXRCdG4iLCJ1c2VySW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2siLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==