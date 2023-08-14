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
  const today = weatherData.current.condition.code;
  const todayColor = findColor(today);
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
  color: "#c5c9a7"
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
  grid-template-rows: 100px 1fr 50px;
  grid-template-areas:
    "header header header header header header"
    "left middle middle middle middle right"
    "footer footer footer footer footer footer";
  min-height: 100vh;
  height: 100%;
  width: 100%;
}

.environment,
.weather,
.forecast {
  border-radius: 20px;
  margin: 15px;
  padding: 5px;
}

.header {
  grid-area: header;
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

.environment {
  grid-area: left;
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
  grid-area: middle;
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

.forecast {
  grid-area: right;
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
  grid-area: footer;
  padding: 5px;
  text-align: end;
  position: relative;
  bottom: 0;
  width: 100vw;
}

@media (max-width: 800px) {
  .container {
    grid-template-areas:
      "header header header header header header"
      "middle middle middle middle middle middle"
      "left left left left left left"
      "right right right right right right"
      "footer footer footer footer footer footer";
    grid-template-rows: auto;
    height: fit-content;
  }
  .environment,
  .weather,
  .forecast {
    margin: 5px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,sBAAsB;EACtB,iCAAiC;EACjC,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC;;;+CAG6C;EAC7C,iBAAiB;EACjB,YAAY;EACZ,WAAW;AACb;;AAEA;;;EAGE,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;EAEE,YAAY;EACZ,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,YAAY;AACd;;AAEA;EACE;IACE;;;;;iDAK6C;IAC7C,wBAAwB;IACxB,mBAAmB;EACrB;EACA;;;IAGE,WAAW;EACb;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-family: \"Victor Mono\", monospace;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-rows: 100px 1fr 50px;\r\n  grid-template-areas:\r\n    \"header header header header header header\"\r\n    \"left middle middle middle middle right\"\r\n    \"footer footer footer footer footer footer\";\r\n  min-height: 100vh;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.environment,\r\n.weather,\r\n.forecast {\r\n  border-radius: 20px;\r\n  margin: 15px;\r\n  padding: 5px;\r\n}\r\n\r\n.header {\r\n  grid-area: header;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 35px;\r\n}\r\n\r\n.header,\r\n.footer {\r\n  background-color: #b3f497;\r\n}\r\n\r\nbutton,\r\ninput {\r\n  border: none;\r\n  background-color: white;\r\n  font-size: large;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\n.environment {\r\n  grid-area: left;\r\n}\r\n\r\n.environment,\r\n.forecast {\r\n  margin: 40px 5px;\r\n  font-size: large;\r\n}\r\n\r\n.environment p {\r\n  margin: 20px;\r\n}\r\n\r\n.weather {\r\n  grid-area: middle;\r\n  text-align: center;\r\n}\r\n\r\n.weather div div {\r\n  margin: 10px;\r\n}\r\n\r\n.conditionIcon {\r\n  height: 100px;\r\n}\r\n\r\n.alertBtn {\r\n  background-color: rgb(189, 142, 209);\r\n}\r\n\r\n.forecast {\r\n  grid-area: right;\r\n}\r\n\r\n.forecastDiv {\r\n  margin: 30px 5px;\r\n  border-radius: 10px;\r\n  background-color: rgb(246, 246, 117);\r\n  padding: 5px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n}\r\n\r\n.forecastDiv p {\r\n  margin: 10px;\r\n}\r\n\r\n.footer {\r\n  grid-area: footer;\r\n  padding: 5px;\r\n  text-align: end;\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 100vw;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .container {\r\n    grid-template-areas:\r\n      \"header header header header header header\"\r\n      \"middle middle middle middle middle middle\"\r\n      \"left left left left left left\"\r\n      \"right right right right right right\"\r\n      \"footer footer footer footer footer footer\";\r\n    grid-template-rows: auto;\r\n    height: fit-content;\r\n  }\r\n  .environment,\r\n  .weather,\r\n  .forecast {\r\n    margin: 5px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsT0FBTyxhQUFhLFdBQVcsVUFBVSxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFNBQVMsT0FBTyxhQUFhLGFBQWEsTUFBTSxPQUFPLFVBQVUsS0FBSyw0QkFBNEIsZ0JBQWdCLDZCQUE2QiwwQ0FBMEMsOENBQThDLEtBQUssb0JBQW9CLG9CQUFvQix5Q0FBeUMsdUxBQXVMLHdCQUF3QixtQkFBbUIsa0JBQWtCLEtBQUssaURBQWlELDBCQUEwQixtQkFBbUIsbUJBQW1CLEtBQUssaUJBQWlCLHdCQUF3QixvQkFBb0IseUJBQXlCLHNCQUFzQixLQUFLLDZCQUE2QixnQ0FBZ0MsS0FBSywwQkFBMEIsbUJBQW1CLDhCQUE4Qix1QkFBdUIsS0FBSyxZQUFZLHlCQUF5QixLQUFLLHNCQUFzQixzQkFBc0IsS0FBSyxvQ0FBb0MsdUJBQXVCLHVCQUF1QixLQUFLLHdCQUF3QixtQkFBbUIsS0FBSyxrQkFBa0Isd0JBQXdCLHlCQUF5QixLQUFLLDBCQUEwQixtQkFBbUIsS0FBSyx3QkFBd0Isb0JBQW9CLEtBQUssbUJBQW1CLDJDQUEyQyxLQUFLLG1CQUFtQix1QkFBdUIsS0FBSyxzQkFBc0IsdUJBQXVCLDBCQUEwQiwyQ0FBMkMsbUJBQW1CLG9CQUFvQixxQ0FBcUMsS0FBSyx3QkFBd0IsbUJBQW1CLEtBQUssaUJBQWlCLHdCQUF3QixtQkFBbUIsc0JBQXNCLHlCQUF5QixnQkFBZ0IsbUJBQW1CLEtBQUssbUNBQW1DLGtCQUFrQiw4UkFBOFIsaUNBQWlDLDRCQUE0QixPQUFPLG1EQUFtRCxvQkFBb0IsT0FBTyxLQUFLLHVCQUF1QjtBQUNwb0c7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSXZDLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmUsU0FBU2xLLE9BQU9BLENBQUMyUSxHQUFHLEVBQUU7RUFDbkMseUJBQXlCOztFQUV6QixPQUFPM1EsT0FBTyxHQUFHLFVBQVUsSUFBSSxPQUFPNFEsTUFBTSxJQUFJLFFBQVEsSUFBSSxPQUFPQSxNQUFNLENBQUNDLFFBQVEsR0FBRyxVQUFVRixHQUFHLEVBQUU7SUFDbEcsT0FBTyxPQUFPQSxHQUFHO0VBQ25CLENBQUMsR0FBRyxVQUFVQSxHQUFHLEVBQUU7SUFDakIsT0FBT0EsR0FBRyxJQUFJLFVBQVUsSUFBSSxPQUFPQyxNQUFNLElBQUlELEdBQUcsQ0FBQ0csV0FBVyxLQUFLRixNQUFNLElBQUlELEdBQUcsS0FBS0MsTUFBTSxDQUFDeFEsU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPdVEsR0FBRztFQUM3SCxDQUFDLEVBQUUzUSxPQUFPLENBQUMyUSxHQUFHLENBQUM7QUFDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vc3JjL3dlYXRoZXJDb25kaXRpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gRyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiBZKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7XG5cbiAgICAvLyBUd28gZGlnaXQgeWVhclxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiBSKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gdShkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiBRKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIHEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gTChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gdyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiBJKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiBEKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gRShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIGUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gYyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIGkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gYihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gQihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiBLKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gayhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIFgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIHgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiBPKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiB6KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiB0KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIFQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG4gIHZhciBkYXRlVGltZUZvcm1hdDtcbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4O1xuICAgIC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7XG4gICAgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nO1xuXG4gIC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7XG5cbiAgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG5cbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHBhcnNlSVNPIGZyb20gXCJkYXRlLWZucy9wYXJzZUlTT1wiO1xyXG5pbXBvcnQgeyB3ZWF0aGVyQ29uZGl0aW9ucyB9IGZyb20gXCIuL3dlYXRoZXJDb25kaXRpb25zXCI7XHJcblxyXG4vLyBTZWFyY2hlcyB3ZWF0aGVyQ29uZGl0aW9ucy5qcyB0byBmaW5kIHRoZSBhcHByb3ByaWF0ZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgd2VhdGhlci5cclxuZnVuY3Rpb24gZmluZENvbG9yKGRheSkge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHdlYXRoZXJDb25kaXRpb25zLmZpbmQoKHsgY29kZSB9KSA9PiBjb2RlID09PSBkYXkpO1xyXG4gIHJldHVybiByZXN1bHQuY29sb3I7XHJcbn1cclxuXHJcbi8vIFN0b2xlbiBmcm9tIFN0YWNrIEV4aGFuZ2UsIGFsbG93cyB0aGUgbGlnaHRlbmluZyBvciBkYXJrZW5pbmcgb2YgYSBoZXggY29sb3IgYnkgcGVyY2VudGFnZS4gVXNlZCB0byBnZW5lcmF0ZSBiYWNrZ3JvdW5kIGNvbG9ycy5cclxuZnVuY3Rpb24gYWRqdXN0KGNvbG9yLCBhbW91bnQpIHtcclxuICByZXR1cm4gYCMke2NvbG9yXHJcbiAgICAucmVwbGFjZSgvXiMvLCBcIlwiKVxyXG4gICAgLnJlcGxhY2UoLy4uL2csIChjb2xvcikgPT5cclxuICAgICAgYDAke01hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgcGFyc2VJbnQoY29sb3IsIDE2KSArIGFtb3VudCkpLnRvU3RyaW5nKFxyXG4gICAgICAgIDE2XHJcbiAgICAgICl9YC5zdWJzdHIoLTIpXHJcbiAgICApfWA7XHJcbn1cclxuXHJcbi8vIFByaW50cyBhbGwgZmllbGRzIGluIHRoZSBjZW50ZXIgXCJDb25kaXRpb25zXCIgY2FyZC5cclxuZnVuY3Rpb24gcHJpbnRDdXJyZW50Q29uZGl0aW9ucyh3ZWF0aGVyRGF0YSkge1xyXG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZFNwZWVkXCIpO1xyXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcclxuICBjb25zdCB1dkluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51dkluZGV4XCIpO1xyXG4gIGNvbnN0IGFpclF1YWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFpclF1YWxpdHlcIik7XHJcbiAgY29uc3QgcHJlc3N1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXNzdXJlXCIpO1xyXG4gIGNvbnN0IHByZWNpcGl0YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWNpcGl0YXRpb25cIik7XHJcblxyXG4gIHdpbmRTcGVlZC5pbm5lclRleHQgPSBgV2luZCBzcGVlZDogJHt3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfbXBofSBNUEggJHt3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfZGlyfWA7XHJcbiAgaHVtaWRpdHkuaW5uZXJUZXh0ID0gYEh1bWlkaXR5OiAke3dlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWA7XHJcbiAgdXZJbmRleC5pbm5lclRleHQgPSBgVVYgaW5kZXg6ICR7d2VhdGhlckRhdGEuY3VycmVudC51dn1gO1xyXG4gIGFpclF1YWxpdHkuaW5uZXJUZXh0ID0gYEFpciBxdWFsaXR5OiAke3dlYXRoZXJEYXRhLmN1cnJlbnQuYWlyX3F1YWxpdHlbXCJ1cy1lcGEtaW5kZXhcIl19YDtcclxuICBwcmVzc3VyZS5pbm5lclRleHQgPSBgQXRtb3NwaGVyaWMgcHJlc3N1cmU6ICR7d2VhdGhlckRhdGEuY3VycmVudC5wcmVzc3VyZV9pbn0gaW5IZy5gO1xyXG4gIHByZWNpcGl0YXRpb24uaW5uZXJUZXh0ID0gYEV4cGVjdGVkIHByZWNpcGl0YXRpb246ICR7d2VhdGhlckRhdGEuY3VycmVudC5wcmVjaXBfaW59XCJgO1xyXG59XHJcblxyXG4vLyBQcmludHMgYWxsIGZpZWxkcyBpbiB0aGUgXCJUb2RheSdzIFdlYXRoZXJcIiBjYXJkXHJcbmZ1bmN0aW9uIHByaW50Q3VycmVudFdlYXRoZXIod2VhdGhlckRhdGEpIHtcclxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpO1xyXG4gIGNvbnN0IHN0YXRlQ291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdGVDb3VudHJ5XCIpO1xyXG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVcIik7XHJcbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZGl0aW9uSWNvblwiKTtcclxuICBjb25zdCBjb25kaXRpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25kaXRpb25UZXh0XCIpO1xyXG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZVwiKTtcclxuICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzTGlrZVwiKTtcclxuICBjb25zdCB0b2RheURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5RGF0ZVwiKTtcclxuXHJcbiAgLy8gTm90IGFsbCByZXN1bHRzIGZyb20gdGhlIEFQSSBoYXZlIGEgJ3JlZ2lvbicgZmllbGQsIHRoaXMgZW5zdXJlcyB0aGVyZSBhcmUgbm8gaGFuZ2luZyBjb21tYXMgaWYgcmVnaW9uIGlzIGVtcHR5XHJcbiAgY2l0eS5pbm5lclRleHQgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lO1xyXG4gIGlmICh3ZWF0aGVyRGF0YS5sb2NhdGlvbi5yZWdpb24pIHtcclxuICAgIHN0YXRlQ291bnRyeS5pbm5lclRleHQgPSBgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5yZWdpb259LCAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcclxuICB9IGVsc2Uge1xyXG4gICAgc3RhdGVDb3VudHJ5LmlubmVyVGV4dCA9IGAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcclxuICB9XHJcblxyXG4gIC8vIFVzZXMgZGF0ZS1mbiB0byBtYWtlIHRoZSBkYXRlIHByZXR0aWVyLlxyXG4gIGNvbnN0IHRvZGF5ID0gd2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lLnNsaWNlKDAsIDEwKTtcclxuICB0b2RheURhdGUuaW5uZXJUZXh0ID0gZm9ybWF0KHBhcnNlSVNPKHRvZGF5KSwgXCJlZWUsIE1NTU0gZG8geXl5eVwiKTtcclxuXHJcbiAgLy8gRmlyc3QgY2hlY2tzIHdoZXRoZXIgaXQncyBBTSBvciBQTSwgdGhlbiBjaGVja3Mgd2hldGhlciBpdCdzIG5vb24gb3IgbWlkbmlnaHQuIFByb2JhYmx5IGNvdWxkIGhhdmUgZG9uZSB0aGF0IHRoZSBvdGhlciB3YXkgYXJvdW5kLlxyXG4gIGNvbnN0IGxvY2FsVGltZSA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZS5zbGljZSgtNSk7XHJcbiAgY29uc3QgaG91ciA9IGxvY2FsVGltZS5zbGljZSgwLCAyKTtcclxuICBjb25zdCBtaW51dGUgPSBsb2NhbFRpbWUuc2xpY2UoMywgNSk7XHJcbiAgaWYgKGhvdXIgPCAxMikge1xyXG4gICAgaWYgKGhvdXIgPiAwKSB7XHJcbiAgICAgIHRpbWUuaW5uZXJUZXh0ID0gYCR7bG9jYWxUaW1lfSBBTWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aW1lLmlubmVyVGV4dCA9IGAxMjoke21pbnV0ZX0gQU1gO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoaG91ciAtIDEyID4gMCkge1xyXG4gICAgdGltZS5pbm5lclRleHQgPSBgJHtob3VyIC0gMTJ9OiR7bWludXRlfSBQTWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUuaW5uZXJUZXh0ID0gYDEyOiR7bWludXRlfSBQTWA7XHJcbiAgfVxyXG5cclxuICBjb25kaXRpb25JY29uLnNyYyA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XHJcbiAgY29uZGl0aW9uSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICBjb25kaXRpb25UZXh0LmlubmVyVGV4dCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XHJcbiAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gYCR7d2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2Z9wrBGYDtcclxuICBmZWVsc0xpa2UuaW5uZXJUZXh0ID0gYEZlZWxzIGxpa2UgJHtNYXRoLnRydW5jKFxyXG4gICAgd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZlxyXG4gICl9wrBGYDtcclxufVxyXG5cclxuLy8gQ3JlYXRlcyBkaXZzIGZvciBhbmQgcHJpbnRzIGZvcmVjYXN0IGNhcmRzLlxyXG5mdW5jdGlvbiBwcmludEZvcmVjYXN0KHdlYXRoZXJEYXRhKSB7XHJcbiAgY29uc3QgZm9yZWNhc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xyXG4gIGZvcmVjYXN0RGl2LmlubmVySFRNTCA9IFwiPGgxPkZvcmVjYXN0PC9oMT5cIjtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgZGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRheURpdi5jbGFzc05hbWUgPSBcImZvcmVjYXN0RGl2XCI7XHJcbiAgICBkYXlEaXYuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xyXG4gICAgY29uc3QgZm9yZWNhc3REYXRhID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV07XHJcblxyXG4gICAgZGF5RGl2LnN0eWxlLmJhY2tncm91bmQgPSBmaW5kQ29sb3IoZm9yZWNhc3REYXRhLmRheS5jb25kaXRpb24uY29kZSk7XHJcblxyXG4gICAgY29uc3QgZGF0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkYXkuY2xhc3NOYW1lID0gXCJmb3JlY2FzdERhdGVcIjtcclxuICAgIGRheS5pbm5lclRleHQgPSBmb3JtYXQocGFyc2VJU08oZm9yZWNhc3REYXRhLmRhdGUpLCBcImVlZSwgTU1NIGRvXCIpO1xyXG4gICAgZGF0ZUljb24uYXBwZW5kQ2hpbGQoZGF5KTtcclxuXHJcbiAgICBjb25zdCBjb25kaXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGNvbmRpdGlvbkljb24uc3JjID0gZm9yZWNhc3REYXRhLmRheS5jb25kaXRpb24uaWNvbjtcclxuICAgIGRhdGVJY29uLmFwcGVuZENoaWxkKGNvbmRpdGlvbkljb24pO1xyXG4gICAgZGF5RGl2LmFwcGVuZENoaWxkKGRhdGVJY29uKTtcclxuXHJcbiAgICBjb25zdCB0ZW1wcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBjb25kaXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgY29uZGl0aW9uVGV4dC5pbm5lclRleHQgPSBmb3JlY2FzdERhdGEuZGF5LmNvbmRpdGlvbi50ZXh0O1xyXG4gICAgY29uZGl0aW9uVGV4dC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICB0ZW1wcy5hcHBlbmRDaGlsZChjb25kaXRpb25UZXh0KTtcclxuXHJcbiAgICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBtaW5UZW1wLmNsYXNzTmFtZSA9IFwibWluVGVtcFwiO1xyXG4gICAgbWluVGVtcC5pbm5lclRleHQgPSBgTG93OiAke2ZvcmVjYXN0RGF0YS5kYXkubWludGVtcF9mfWA7XHJcbiAgICB0ZW1wcy5hcHBlbmRDaGlsZChtaW5UZW1wKTtcclxuXHJcbiAgICBjb25zdCBtYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBtYXhUZW1wLmNsYXNzTmFtZSA9IFwibWF4VGVtcFwiO1xyXG4gICAgbWF4VGVtcC5pbm5lclRleHQgPSBgSGlnaDogJHtmb3JlY2FzdERhdGEuZGF5Lm1heHRlbXBfZn1gO1xyXG4gICAgdGVtcHMuYXBwZW5kQ2hpbGQobWF4VGVtcCk7XHJcbiAgICBkYXlEaXYuYXBwZW5kQ2hpbGQodGVtcHMpO1xyXG5cclxuICAgIGZvcmVjYXN0RGl2LmFwcGVuZChkYXlEaXYpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ2hlY2tzIHRoZSBjdXJyZW50IHdlYXRoZXIgYW5kIGZldGNoZXMgdGhlIGFwcHJvcHJpYXRlIGJhY2tncm91bmQgY29sb3IgZnJvbSB3ZWF0aGVyQ29uZGl0aW9ucy5qcywgdGhlbiBicmlndGVucyB0aGUgY29sb3IgZm9yIHVzZSBpbiB0aGUgYmFja2dyb3VuZHMgb2YgY2FyZHMuXHJcbmZ1bmN0aW9uIHNldEJhY2tncm91bmRzKHdlYXRoZXJEYXRhKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XHJcbiAgY29uc3QgZW52aXJvbm1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVudmlyb25tZW50XCIpO1xyXG4gIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJcIik7XHJcbiAgY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xyXG5cclxuICBjb25zdCB0b2RheSA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmNvZGU7XHJcbiAgY29uc3QgdG9kYXlDb2xvciA9IGZpbmRDb2xvcih0b2RheSk7XHJcbiAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQgPSB0b2RheUNvbG9yO1xyXG4gIGVudmlyb25tZW50LnN0eWxlLmJhY2tncm91bmQgPSBhZGp1c3QodG9kYXlDb2xvciwgNTApO1xyXG4gIHdlYXRoZXIuc3R5bGUuYmFja2dyb3VuZCA9IGFkanVzdCh0b2RheUNvbG9yLCA3MCk7XHJcbiAgZm9yZWNhc3Quc3R5bGUuYmFja2dyb3VuZCA9IGFkanVzdCh0b2RheUNvbG9yLCA1MCk7XHJcbn1cclxuXHJcbi8vIFdoZW4gdGhlcmUgaXMgYSB3ZWF0aGVyIGFsZXJ0LCB0aGlzIGlzIHVzZWQgYnkgdGhlIGJ1dHRvbiB0aGF0J3MgZ2VuZXJhdGVkIHRvIHNob3cgb3IgaGlkZSB0aGUgZXh0ZW5kZWQgZGV0YWlscyBvZiB0aGUgYWxlcnQuXHJcbmZ1bmN0aW9uIHRvZ2dsZUhpZGRlbigpIHtcclxuICBjb25zdCBoaWRkZW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZGRlbkRpdlwiKTtcclxuICBjb25zdCBoaWRkZW4gPSBoaWRkZW5EaXYuZ2V0QXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gIGlmIChoaWRkZW4pIHtcclxuICAgIGhpZGRlbkRpdi5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhpZGRlbkRpdi5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJoaWRkZW5cIik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBJZiB0aGVyZSBpcyBhIHdlYXRoZXIgYWxlcnQsIHRoaXMgaXMgY2FsbGVkIHRvIGRpc3BsYXkgdGhlIGluZm9ybWF0aW9uIGF0IHRoZSBib3R0b20gb2YgJ1RvZGF5J3MgV2VhdGhlcicuIEJ5IGRlZmF1bHQgb25seSB0aGUgaGVhZGxpbmUgYW5kIGJ1dHRvbiBhcmVuJ3QgaGlkZGVuLlxyXG5mdW5jdGlvbiBwcmludEFsZXJ0KGFsZXJ0RGF0YSkge1xyXG4gIGNvbnN0IGFsZXJ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhbGVydERpdi5jbGFzc05hbWUgPSBcIndlYXRoZXJBbGVydFwiO1xyXG5cclxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBoZWFkbGluZS5pbm5lclRleHQgPSBhbGVydERhdGEuaGVhZGxpbmU7XHJcbiAgYWxlcnREaXYuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xyXG5cclxuICBjb25zdCBhbGVydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgYWxlcnRCdG4uY2xhc3NOYW1lID0gXCJhbGVydEJ0blwiO1xyXG4gIGFsZXJ0QnRuLmlubmVyVGV4dCA9IFwiU2hvdyBNb3JlXCI7XHJcbiAgYWxlcnRCdG4ub25jbGljayA9IHRvZ2dsZUhpZGRlbjtcclxuICBhbGVydERpdi5hcHBlbmRDaGlsZChhbGVydEJ0bik7XHJcblxyXG4gIGNvbnN0IGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGlkZGVuRGl2LmNsYXNzTmFtZSA9IFwiaGlkZGVuRGl2XCI7XHJcbiAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcImhpZGRlblwiKTtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBhbGVydERhdGEuZGVzYztcclxuICBoaWRkZW5EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5cclxuICAvLyBOb3QgYWxsIGFsZXJ0cyBoYXZlIGFuIGluc3RydWN0aW9uIHByb3BlcnR5XHJcbiAgaWYgKGFsZXJ0RGF0YS5pbnN0cnVjdGlvbikge1xyXG4gICAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGluc3RydWN0aW9uLmlubmVyVGV4dCA9IGFsZXJ0RGF0YS5pbnN0cnVjdGlvbjtcclxuICAgIGhpZGRlbkRpdi5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbik7XHJcbiAgfVxyXG5cclxuICBhbGVydERpdi5hcHBlbmRDaGlsZChoaWRkZW5EaXYpO1xyXG4gIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJcIik7XHJcbiAgd2VhdGhlci5hcHBlbmRDaGlsZChhbGVydERpdik7XHJcbn1cclxuXHJcbi8vIENhbGxzIHRoZSBBUEkgYW5kIHJldHVybnMgdGhlIHJlc3VsdCBhcyBhIHByb21pc2UuIFRoZSBvbmx5IGVycm9ycyB0aGF0IGdldCBjYXVnaHQgaGVyZSBhcmUgaXNzdWVzIHdpdGggdGhlIEFQSSBjYWxsLCBub3QgdGhlIHJlc3BvbnNlLlxyXG5hc3luYyBmdW5jdGlvbiBjYWxsQXBpKGxvY2F0aW9uKSB7XHJcbiAgbGV0IHJlc3BvbnNlO1xyXG4gIHRyeSB7XHJcbiAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ODRjY2Q0NDhmMDBmNGQ0NTkxYTIxMDY0MDIzMTIwNyZxPSR7bG9jYXRpb259JmRheXM9NCZhcWk9eWVzJmFsZXJ0cz15ZXNgLFxyXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yOiBcIiwgZXJyb3IpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn1cclxuXHJcbi8vIE1haW4gZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgXCJHZXQgV2VhdGhlclwiIGJ1dHRvbiBpcyBwcmVzc2VkLlxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xyXG4gIGNvbnN0IGludmFsaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludmFsaWRcIik7XHJcbiAgY29uc3QgaGlkZGVuID0gaW52YWxpZC5nZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcblxyXG4gIC8vIENhbGxzIHRoZSBBUEkuIElmIHRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIHRoZSByZXNwb25zZSwgdW4taGlkZXMgYSBtZXNzYWdlIHNob3dpbmcgdGhlIGxvY2F0aW9uIHdhcyBpbnZhbGlkLiBPdGhlcndpc2UgY2FsbHMgZWFjaCBvZiB0aGUgcHJpbnRpbmcgZnVuY3Rpb25zLlxyXG4gIGNvbnN0IGFwaURhdGEgPSBhd2FpdCBjYWxsQXBpKGxvY2F0aW9uKTtcclxuICBpZiAoIWFwaURhdGEub2spIHtcclxuICAgIGlmIChoaWRkZW4pIHtcclxuICAgICAgaW52YWxpZC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgYXBpRGF0YS5qc29uKCk7XHJcblxyXG4gICAgcHJpbnRDdXJyZW50V2VhdGhlcih3ZWF0aGVyRGF0YSk7XHJcbiAgICBwcmludEZvcmVjYXN0KHdlYXRoZXJEYXRhKTtcclxuICAgIHByaW50Q3VycmVudENvbmRpdGlvbnMod2VhdGhlckRhdGEpO1xyXG4gICAgc2V0QmFja2dyb3VuZHMod2VhdGhlckRhdGEpO1xyXG5cclxuICAgIC8vIEZpcnN0IGNoZWNrcyB0byBzZWUgaWYgdGhlcmUgaXMgYW4gZXhpc3RpbmcgYWxlcnQgb24gdGhlIHBhZ2UgYW5kIHJlbW92ZXMgaXQuIFRoZW4gaWYsIHRoZSBuZXcgbG9jYXRpb24gaGFzIGFuIGFsZXJ0LCBjYWxscyB0aGUgZnVuY3Rpb24gdG8gcHJpbnQgaXQuXHJcbiAgICBjb25zdCBhbGVydERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlckFsZXJ0XCIpO1xyXG4gICAgaWYgKGFsZXJ0RGl2KSB7XHJcbiAgICAgIGFsZXJ0RGl2LnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHdlYXRoZXJEYXRhLmFsZXJ0cy5hbGVydFswXSkge1xyXG4gICAgICBwcmludEFsZXJ0KHdlYXRoZXJEYXRhLmFsZXJ0cy5hbGVydFswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdGhlIEludmFsaWQgTG9jYXRpb24gbWVzc2FnZSBpcyB2aXNpYmxlLCBoaWRlcyBpdC5cclxuICAgIGlmICghaGlkZGVuKSB7XHJcbiAgICAgIGludmFsaWQuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRXZlbnQgbGlzdGVuZXJzIGZvciB1c2VyIGlucHV0XHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0QnRuXCIpO1xyXG5jb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJJbnB1dFwiKTtcclxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaWYgKHVzZXJJbnB1dC52YWx1ZSkge1xyXG4gICAgZ2V0V2VhdGhlckRhdGEodXNlcklucHV0LnZhbHVlKTtcclxuICAgIHVzZXJJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgfVxyXG59KTtcclxuXHJcbnVzZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcclxuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgc3VibWl0QnRuLmNsaWNrKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIE9uIHBhZ2UgbG9hZCwgZ2V0cyBsb2NhbCB3ZWF0aGVyIHVzaW5nIHVzZXIncyBJUCBhZGRyZXNzLlxyXG5nZXRXZWF0aGVyRGF0YShcImF1dG86aXBcIik7XHJcbiIsImV4cG9ydCBjb25zdCB3ZWF0aGVyQ29uZGl0aW9ucyA9IFtcclxuICB7XHJcbiAgICBjb2RlOiAxMDAwLFxyXG4gICAgZGF5OiBcIlN1bm55XCIsXHJcbiAgICBjb2xvcjogXCIjZjdmYjg4XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMDAzLFxyXG4gICAgZGF5OiBcIlBhcnRseSBjbG91ZHlcIixcclxuICAgIGNvbG9yOiBcIiNjNWM5YTdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEwMDYsXHJcbiAgICBkYXk6IFwiQ2xvdWR5XCIsXHJcbiAgICBjb2xvcjogXCIjOWZhMTkxXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMDA5LFxyXG4gICAgZGF5OiBcIk92ZXJjYXN0XCIsXHJcbiAgICBjb2xvcjogXCIjOTE5Y2ExXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMDMwLFxyXG4gICAgZGF5OiBcIk1pc3RcIixcclxuICAgIGNvbG9yOiBcIiNjMWQxZDlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEwNjMsXHJcbiAgICBkYXk6IFwiUGF0Y2h5IHJhaW4gcG9zc2libGVcIixcclxuICAgIGNvbG9yOiBcIiNhZWQ0ZTZcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEwNjYsXHJcbiAgICBkYXk6IFwiUGF0Y2h5IHNub3cgcG9zc2libGVcIixcclxuICAgIGNvbG9yOiBcIiNjZWUyZWJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEwNjksXHJcbiAgICBkYXk6IFwiUGF0Y2h5IHNsZWV0IHBvc3NpYmxlXCIsXHJcbiAgICBjb2xvcjogXCIjYTNiNmJmXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMDcyLFxyXG4gICAgZGF5OiBcIlBhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlXCIsXHJcbiAgICBjb2xvcjogXCIjNWQ3YTg3XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMDg3LFxyXG4gICAgZGF5OiBcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiLFxyXG4gICAgY29sb3I6IFwiXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMTE0LFxyXG4gICAgZGF5OiBcIkJsb3dpbmcgc25vd1wiLFxyXG4gICAgY29sb3I6IFwiI2RjZWZmN1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTExNyxcclxuICAgIGRheTogXCJCbGl6emFyZFwiLFxyXG4gICAgY29sb3I6IFwiI2Y3ZjlmYVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTEzNSxcclxuICAgIGRheTogXCJGb2dcIixcclxuICAgIGNvbG9yOiBcIiNjYWNiY2NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDExNDcsXHJcbiAgICBkYXk6IFwiRnJlZXppbmcgZm9nXCIsXHJcbiAgICBjb2xvcjogXCIjYjFiN2JhXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMTUwLFxyXG4gICAgZGF5OiBcIlBhdGNoeSBsaWdodCBkcml6emxlXCIsXHJcbiAgICBjb2xvcjogXCIjY2VlOGY1XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMTUzLFxyXG4gICAgZGF5OiBcIkxpZ2h0IGRyaXp6bGVcIixcclxuICAgIGNvbG9yOiBcIiNiNmU1ZmFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDExNjgsXHJcbiAgICBkYXk6IFwiRnJlZXppbmcgZHJpenpsZVwiLFxyXG4gICAgY29sb3I6IFwiI2EwY2FkZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTE3MSxcclxuICAgIGRheTogXCJIZWF2eSBmcmVlemluZyBkcml6emxlXCIsXHJcbiAgICBjb2xvcjogXCIjODRhNGIzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMTgwLFxyXG4gICAgZGF5OiBcIlBhdGNoeSBsaWdodCByYWluXCIsXHJcbiAgICBjb2xvcjogXCIjOGFjZWVkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMTgzLFxyXG4gICAgZGF5OiBcIkxpZ2h0IHJhaW5cIixcclxuICAgIGNvbG9yOiBcIiM0ZmFiZDZcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDExODYsXHJcbiAgICBkYXk6IFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLFxyXG4gICAgY29sb3I6IFwiIzRlYmJlZFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTE4OSxcclxuICAgIGRheTogXCJNb2RlcmF0ZSByYWluXCIsXHJcbiAgICBjb2xvcjogXCIjMzRiMWViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMTkyLFxyXG4gICAgZGF5OiBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIixcclxuICAgIGNvbG9yOiBcIiMyMThmYzJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDExOTUsXHJcbiAgICBkYXk6IFwiSGVhdnkgcmFpblwiLFxyXG4gICAgY29sb3I6IFwiIzIwNzhhMVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTE5OCxcclxuICAgIGRheTogXCJMaWdodCBmcmVlemluZyByYWluXCIsXHJcbiAgICBjb2xvcjogXCIjNzJkMGZjXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjAxLFxyXG4gICAgZGF5OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cIixcclxuICAgIGNvbG9yOiBcIiM0MDc5OTRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyMDQsXHJcbiAgICBkYXk6IFwiTGlnaHQgc2xlZXRcIixcclxuICAgIGNvbG9yOiBcIiNhMGEyYTNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyMDcsXHJcbiAgICBkYXk6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXRcIixcclxuICAgIGNvbG9yOiBcIiM3OTgxODVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyMTAsXHJcbiAgICBkYXk6IFwiUGF0Y2h5IGxpZ2h0IHNub3dcIixcclxuICAgIGNvbG9yOiBcIiNjM2M2YzdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyMTMsXHJcbiAgICBkYXk6IFwiTGlnaHQgc25vd1wiLFxyXG4gICAgY29sb3I6IFwiI2RhZGVlMFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTIxNixcclxuICAgIGRheTogXCJQYXRjaHkgbW9kZXJhdGUgc25vd1wiLFxyXG4gICAgY29sb3I6IFwiI2NmZDJkNFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTIxOSxcclxuICAgIGRheTogXCJNb2RlcmF0ZSBzbm93XCIsXHJcbiAgICBjb2xvcjogXCIjY2FkYmVkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjIyLFxyXG4gICAgZGF5OiBcIlBhdGNoeSBoZWF2eSBzbm93XCIsXHJcbiAgICBjb2xvcjogXCIjOTlhZmM3XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjI1LFxyXG4gICAgZGF5OiBcIkhlYXZ5IHNub3dcIixcclxuICAgIGNvbG9yOiBcIiM2OTc3OGNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyMzcsXHJcbiAgICBkYXk6IFwiSWNlIHBlbGxldHNcIixcclxuICAgIGNvbG9yOiBcIiNjZGNmZDFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyNDAsXHJcbiAgICBkYXk6IFwiTGlnaHQgcmFpbiBzaG93ZXJcIixcclxuICAgIGNvbG9yOiBcIiNiMWNhZjBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyNDMsXHJcbiAgICBkYXk6IFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIixcclxuICAgIGNvbG9yOiBcIiNhMGM0ZmFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyNDYsXHJcbiAgICBkYXk6IFwiVG9ycmVudGlhbCByYWluIHNob3dlclwiLFxyXG4gICAgY29sb3I6IFwiIzY3OGFiZlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTI0OSxcclxuICAgIGRheTogXCJMaWdodCBzbGVldCBzaG93ZXJzXCIsXHJcbiAgICBjb2xvcjogXCIjYWRiN2M3XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjUyLFxyXG4gICAgZGF5OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnNcIixcclxuICAgIGNvbG9yOiBcIiM4YzllYmFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyNTUsXHJcbiAgICBkYXk6IFwiTGlnaHQgc25vdyBzaG93ZXJzXCIsXHJcbiAgICBjb2xvcjogXCIjY2NkOWVkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjU4LFxyXG4gICAgZGF5OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgY29sb3I6IFwiI2MwYzVjY1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTI2MSxcclxuICAgIGRheTogXCJMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsXHJcbiAgICBjb2xvcjogXCIjOWVhNGFkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjY0LFxyXG4gICAgZGF5OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIixcclxuICAgIGNvbG9yOiBcIiM3ZTg3OTRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyNzMsXHJcbiAgICBkYXk6IFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCIsXHJcbiAgICBjb2xvcjogXCIjYTVjNGYyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjc2LFxyXG4gICAgZGF5OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCIsXHJcbiAgICBjb2xvcjogXCIjOGRhMmMyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjc5LFxyXG4gICAgZGF5OiBcIlBhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlclwiLFxyXG4gICAgY29sb3I6IFwiI2IzYzdlNlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTI4MixcclxuICAgIGRheTogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlclwiLFxyXG4gICAgY29sb3I6IFwiIzdkOWZkMVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IHdlYXRoZXJDb25kaXRpb25zIH07XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBmb250LWZhbWlseTogXCJWaWN0b3IgTW9ub1wiLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgNTBweDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclwiXHJcbiAgICBcImxlZnQgbWlkZGxlIG1pZGRsZSBtaWRkbGUgbWlkZGxlIHJpZ2h0XCJcclxuICAgIFwiZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXJcIjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5lbnZpcm9ubWVudCxcclxuLndlYXRoZXIsXHJcbi5mb3JlY2FzdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBncmlkLWFyZWE6IGhlYWRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIsXHJcbi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2Y0OTc7XHJcbn1cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZW52aXJvbm1lbnQge1xyXG4gIGdyaWQtYXJlYTogbGVmdDtcclxufVxyXG5cclxuLmVudmlyb25tZW50LFxyXG4uZm9yZWNhc3Qge1xyXG4gIG1hcmdpbjogNDBweCA1cHg7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmVudmlyb25tZW50IHAge1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLndlYXRoZXIge1xyXG4gIGdyaWQtYXJlYTogbWlkZGxlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndlYXRoZXIgZGl2IGRpdiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uY29uZGl0aW9uSWNvbiB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmFsZXJ0QnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAxNDIsIDIwOSk7XHJcbn1cclxuXHJcbi5mb3JlY2FzdCB7XHJcbiAgZ3JpZC1hcmVhOiByaWdodDtcclxufVxyXG5cclxuLmZvcmVjYXN0RGl2IHtcclxuICBtYXJnaW46IDMwcHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjQ2LCAxMTcpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxufVxyXG5cclxuLmZvcmVjYXN0RGl2IHAge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcImhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXCJcclxuICAgICAgXCJtaWRkbGUgbWlkZGxlIG1pZGRsZSBtaWRkbGUgbWlkZGxlIG1pZGRsZVwiXHJcbiAgICAgIFwibGVmdCBsZWZ0IGxlZnQgbGVmdCBsZWZ0IGxlZnRcIlxyXG4gICAgICBcInJpZ2h0IHJpZ2h0IHJpZ2h0IHJpZ2h0IHJpZ2h0IHJpZ2h0XCJcclxuICAgICAgXCJmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICB9XHJcbiAgLmVudmlyb25tZW50LFxyXG4gIC53ZWF0aGVyLFxyXG4gIC5mb3JlY2FzdCB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQzs7OytDQUc2QztFQUM3QyxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRTs7Ozs7aURBSzZDO0lBQzdDLHdCQUF3QjtJQUN4QixtQkFBbUI7RUFDckI7RUFDQTs7O0lBR0UsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJWaWN0b3IgTW9ub1xcXCIsIG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgNTBweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gICAgXFxcImxlZnQgbWlkZGxlIG1pZGRsZSBtaWRkbGUgbWlkZGxlIHJpZ2h0XFxcIlxcclxcbiAgICBcXFwiZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXJcXFwiO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmVudmlyb25tZW50LFxcclxcbi53ZWF0aGVyLFxcclxcbi5mb3JlY2FzdCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAxNXB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcixcXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2Y0OTc7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVudmlyb25tZW50IHtcXHJcXG4gIGdyaWQtYXJlYTogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmVudmlyb25tZW50LFxcclxcbi5mb3JlY2FzdCB7XFxyXFxuICBtYXJnaW46IDQwcHggNXB4O1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVudmlyb25tZW50IHAge1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlciB7XFxyXFxuICBncmlkLWFyZWE6IG1pZGRsZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXIgZGl2IGRpdiB7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb25kaXRpb25JY29uIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5hbGVydEJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAxNDIsIDIwOSk7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdCB7XFxyXFxuICBncmlkLWFyZWE6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3REaXYge1xcclxcbiAgbWFyZ2luOiAzMHB4IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyNDYsIDExNyk7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3REaXYgcCB7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICAgIFxcXCJtaWRkbGUgbWlkZGxlIG1pZGRsZSBtaWRkbGUgbWlkZGxlIG1pZGRsZVxcXCJcXHJcXG4gICAgICBcXFwibGVmdCBsZWZ0IGxlZnQgbGVmdCBsZWZ0IGxlZnRcXFwiXFxyXFxuICAgICAgXFxcInJpZ2h0IHJpZ2h0IHJpZ2h0IHJpZ2h0IHJpZ2h0IHJpZ2h0XFxcIlxcclxcbiAgICAgIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIH1cXHJcXG4gIC5lbnZpcm9ubWVudCxcXHJcXG4gIC53ZWF0aGVyLFxcclxcbiAgLmZvcmVjYXN0IHtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsImFkZExlYWRpbmdaZXJvcyIsIm51bWJlciIsInRhcmdldExlbmd0aCIsInNpZ24iLCJvdXRwdXQiLCJNYXRoIiwiYWJzIiwiZGVmYXVsdExvY2FsZSIsImRlZmF1bHRPcHRpb25zIiwiZ2V0RGVmYXVsdE9wdGlvbnMiLCJzZXREZWZhdWx0T3B0aW9ucyIsIm5ld09wdGlvbnMiLCJnZXRVVENEYXlPZlllYXIiLCJnZXRVVENJU09XZWVrIiwiZ2V0VVRDSVNPV2Vla1llYXIiLCJnZXRVVENXZWVrIiwiZ2V0VVRDV2Vla1llYXIiLCJsaWdodEZvcm1hdHRlcnMiLCJkYXlQZXJpb2RFbnVtIiwiYW0iLCJwbSIsIm1pZG5pZ2h0Iiwibm9vbiIsIm1vcm5pbmciLCJhZnRlcm5vb24iLCJldmVuaW5nIiwibmlnaHQiLCJmb3JtYXR0ZXJzIiwiRyIsImRhdGUiLCJ0b2tlbiIsImxvY2FsaXplIiwiZXJhIiwiZ2V0VVRDRnVsbFllYXIiLCJ3aWR0aCIsInkiLCJzaWduZWRZZWFyIiwieWVhciIsIm9yZGluYWxOdW1iZXIiLCJ1bml0IiwiWSIsIm9wdGlvbnMiLCJzaWduZWRXZWVrWWVhciIsIndlZWtZZWFyIiwidHdvRGlnaXRZZWFyIiwiUiIsImlzb1dlZWtZZWFyIiwidSIsIlEiLCJxdWFydGVyIiwiY2VpbCIsImdldFVUQ01vbnRoIiwiU3RyaW5nIiwiY29udGV4dCIsInEiLCJNIiwibW9udGgiLCJMIiwidyIsIndlZWsiLCJJIiwiaXNvV2VlayIsImQiLCJnZXRVVENEYXRlIiwiRCIsImRheU9mWWVhciIsIkUiLCJkYXlPZldlZWsiLCJnZXRVVENEYXkiLCJkYXkiLCJlIiwibG9jYWxEYXlPZldlZWsiLCJ3ZWVrU3RhcnRzT24iLCJjIiwiaXNvRGF5T2ZXZWVrIiwiYSIsImhvdXJzIiwiZ2V0VVRDSG91cnMiLCJkYXlQZXJpb2RFbnVtVmFsdWUiLCJkYXlQZXJpb2QiLCJ0b0xvd2VyQ2FzZSIsImIiLCJCIiwiaCIsIkgiLCJLIiwibSIsImdldFVUQ01pbnV0ZXMiLCJzIiwiZ2V0VVRDU2Vjb25kcyIsIlMiLCJYIiwiX2xvY2FsaXplIiwib3JpZ2luYWxEYXRlIiwiX29yaWdpbmFsRGF0ZSIsInRpbWV6b25lT2Zmc2V0IiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMiLCJmb3JtYXRUaW1lem9uZSIsIngiLCJPIiwiZm9ybWF0VGltZXpvbmVTaG9ydCIsInoiLCJ0IiwidGltZXN0YW1wIiwiZmxvb3IiLCJnZXRUaW1lIiwiVCIsIm9mZnNldCIsImRpcnR5RGVsaW1pdGVyIiwiYWJzT2Zmc2V0IiwibWludXRlcyIsImRlbGltaXRlciIsInRvVXBwZXJDYXNlIiwibnVtYmVyT2ZEaWdpdHMiLCJtaWxsaXNlY29uZHMiLCJnZXRVVENNaWxsaXNlY29uZHMiLCJmcmFjdGlvbmFsU2Vjb25kcyIsInBvdyIsImRhdGVMb25nRm9ybWF0dGVyIiwicGF0dGVybiIsImZvcm1hdExvbmciLCJ0aW1lTG9uZ0Zvcm1hdHRlciIsInRpbWUiLCJkYXRlVGltZUxvbmdGb3JtYXR0ZXIiLCJtYXRjaFJlc3VsdCIsIm1hdGNoIiwiZGF0ZVBhdHRlcm4iLCJ0aW1lUGF0dGVybiIsImRhdGVUaW1lRm9ybWF0IiwiZGF0ZVRpbWUiLCJyZXBsYWNlIiwibG9uZ0Zvcm1hdHRlcnMiLCJwIiwiUCIsImdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMiLCJ1dGNEYXRlIiwiRGF0ZSIsIlVUQyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInNldFVUQ0Z1bGxZZWFyIiwidG9EYXRlIiwicmVxdWlyZWRBcmdzIiwiTUlMTElTRUNPTkRTX0lOX0RBWSIsImRpcnR5RGF0ZSIsImFyZ3VtZW50cyIsInNldFVUQ01vbnRoIiwic2V0VVRDSG91cnMiLCJzdGFydE9mWWVhclRpbWVzdGFtcCIsImRpZmZlcmVuY2UiLCJzdGFydE9mVVRDSVNPV2VlayIsImZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIiLCJzdGFydE9mTmV4dFllYXIiLCJmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyIiwic3RhcnRPZlRoaXNZZWFyIiwic3RhcnRPZlVUQ0lTT1dlZWtZZWFyIiwiTUlMTElTRUNPTkRTX0lOX1dFRUsiLCJkaWZmIiwicm91bmQiLCJzdGFydE9mVVRDV2VlayIsInRvSW50ZWdlciIsIl9yZWYiLCJfcmVmMiIsIl9yZWYzIiwiX29wdGlvbnMkZmlyc3RXZWVrQ29uIiwiX29wdGlvbnMkbG9jYWxlIiwiX29wdGlvbnMkbG9jYWxlJG9wdGlvIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsMiIsImZpcnN0V2Vla0NvbnRhaW5zRGF0ZSIsImxvY2FsZSIsIlJhbmdlRXJyb3IiLCJmaXJzdFdlZWtPZk5leHRZZWFyIiwiZmlyc3RXZWVrT2ZUaGlzWWVhciIsInN0YXJ0T2ZVVENXZWVrWWVhciIsInByb3RlY3RlZERheU9mWWVhclRva2VucyIsInByb3RlY3RlZFdlZWtZZWFyVG9rZW5zIiwiaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiIsImluZGV4T2YiLCJpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4iLCJ0aHJvd1Byb3RlY3RlZEVycm9yIiwiZm9ybWF0IiwiaW5wdXQiLCJyZXF1aXJlZCIsImFyZ3MiLCJUeXBlRXJyb3IiLCJmb3VydGhPZkphbnVhcnkiLCJzZXRVVENEYXRlIiwiZmlyc3RXZWVrIiwiX29wdGlvbnMkd2Vla1N0YXJ0c09uIiwiZGlydHlOdW1iZXIiLCJOYU4iLCJOdW1iZXIiLCJpc05hTiIsImFkZE1pbGxpc2Vjb25kcyIsImRpcnR5QW1vdW50IiwiYW1vdW50IiwiZGF5c0luV2VlayIsImRheXNJblllYXIiLCJtYXhUaW1lIiwibWlsbGlzZWNvbmRzSW5NaW51dGUiLCJtaWxsaXNlY29uZHNJbkhvdXIiLCJtaWxsaXNlY29uZHNJblNlY29uZCIsIm1pblRpbWUiLCJtaW51dGVzSW5Ib3VyIiwibW9udGhzSW5RdWFydGVyIiwibW9udGhzSW5ZZWFyIiwicXVhcnRlcnNJblllYXIiLCJzZWNvbmRzSW5Ib3VyIiwic2Vjb25kc0luTWludXRlIiwic2Vjb25kc0luRGF5Iiwic2Vjb25kc0luV2VlayIsInNlY29uZHNJblllYXIiLCJzZWNvbmRzSW5Nb250aCIsInNlY29uZHNJblF1YXJ0ZXIiLCJpc1ZhbGlkIiwic3ViTWlsbGlzZWNvbmRzIiwiZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCIsImxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwIiwiZXNjYXBlZFN0cmluZ1JlZ0V4cCIsImRvdWJsZVF1b3RlUmVnRXhwIiwidW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAiLCJkaXJ0eUZvcm1hdFN0ciIsIl9yZWY0IiwiX29wdGlvbnMkbG9jYWxlMiIsIl9vcHRpb25zJGxvY2FsZTIkb3B0aSIsIl9yZWY1IiwiX3JlZjYiLCJfcmVmNyIsIl9vcHRpb25zJGxvY2FsZTMiLCJfb3B0aW9ucyRsb2NhbGUzJG9wdGkiLCJfZGVmYXVsdE9wdGlvbnMkbG9jYWwzIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsNCIsImZvcm1hdFN0ciIsImZvcm1hdHRlck9wdGlvbnMiLCJyZXN1bHQiLCJzdWJzdHJpbmciLCJmaXJzdENoYXJhY3RlciIsImxvbmdGb3JtYXR0ZXIiLCJjbGVhbkVzY2FwZWRTdHJpbmciLCJmb3JtYXR0ZXIiLCJ1c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMiLCJ1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zIiwibWF0Y2hlZCIsIl90eXBlb2YiLCJpc0RhdGUiLCJ2YWx1ZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJidWlsZEZvcm1hdExvbmdGbiIsImRlZmF1bHRXaWR0aCIsImZvcm1hdHMiLCJidWlsZExvY2FsaXplRm4iLCJkaXJ0eUluZGV4IiwidmFsdWVzQXJyYXkiLCJmb3JtYXR0aW5nVmFsdWVzIiwiZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCIsIl9kZWZhdWx0V2lkdGgiLCJfd2lkdGgiLCJ2YWx1ZXMiLCJpbmRleCIsImFyZ3VtZW50Q2FsbGJhY2siLCJidWlsZE1hdGNoRm4iLCJzdHJpbmciLCJtYXRjaFBhdHRlcm4iLCJtYXRjaFBhdHRlcm5zIiwiZGVmYXVsdE1hdGNoV2lkdGgiLCJtYXRjaGVkU3RyaW5nIiwicGFyc2VQYXR0ZXJucyIsImRlZmF1bHRQYXJzZVdpZHRoIiwia2V5IiwiQXJyYXkiLCJpc0FycmF5IiwiZmluZEluZGV4IiwidGVzdCIsImZpbmRLZXkiLCJ2YWx1ZUNhbGxiYWNrIiwicmVzdCIsInNsaWNlIiwib2JqZWN0IiwicHJlZGljYXRlIiwiaGFzT3duUHJvcGVydHkiLCJhcnJheSIsImJ1aWxkTWF0Y2hQYXR0ZXJuRm4iLCJwYXJzZVJlc3VsdCIsInBhcnNlUGF0dGVybiIsImZvcm1hdERpc3RhbmNlTG9jYWxlIiwibGVzc1RoYW5YU2Vjb25kcyIsIm9uZSIsIm90aGVyIiwieFNlY29uZHMiLCJoYWxmQU1pbnV0ZSIsImxlc3NUaGFuWE1pbnV0ZXMiLCJ4TWludXRlcyIsImFib3V0WEhvdXJzIiwieEhvdXJzIiwieERheXMiLCJhYm91dFhXZWVrcyIsInhXZWVrcyIsImFib3V0WE1vbnRocyIsInhNb250aHMiLCJhYm91dFhZZWFycyIsInhZZWFycyIsIm92ZXJYWWVhcnMiLCJhbG1vc3RYWWVhcnMiLCJmb3JtYXREaXN0YW5jZSIsImNvdW50IiwidG9rZW5WYWx1ZSIsImFkZFN1ZmZpeCIsImNvbXBhcmlzb24iLCJkYXRlRm9ybWF0cyIsImZ1bGwiLCJsb25nIiwibWVkaXVtIiwic2hvcnQiLCJ0aW1lRm9ybWF0cyIsImRhdGVUaW1lRm9ybWF0cyIsImZvcm1hdFJlbGF0aXZlTG9jYWxlIiwibGFzdFdlZWsiLCJ5ZXN0ZXJkYXkiLCJ0b2RheSIsInRvbW9ycm93IiwibmV4dFdlZWsiLCJmb3JtYXRSZWxhdGl2ZSIsIl9kYXRlIiwiX2Jhc2VEYXRlIiwiX29wdGlvbnMiLCJlcmFWYWx1ZXMiLCJuYXJyb3ciLCJhYmJyZXZpYXRlZCIsIndpZGUiLCJxdWFydGVyVmFsdWVzIiwibW9udGhWYWx1ZXMiLCJkYXlWYWx1ZXMiLCJkYXlQZXJpb2RWYWx1ZXMiLCJmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzIiwicmVtMTAwIiwibWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiIsInBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4iLCJtYXRjaEVyYVBhdHRlcm5zIiwicGFyc2VFcmFQYXR0ZXJucyIsImFueSIsIm1hdGNoUXVhcnRlclBhdHRlcm5zIiwicGFyc2VRdWFydGVyUGF0dGVybnMiLCJtYXRjaE1vbnRoUGF0dGVybnMiLCJwYXJzZU1vbnRoUGF0dGVybnMiLCJtYXRjaERheVBhdHRlcm5zIiwicGFyc2VEYXlQYXR0ZXJucyIsIm1hdGNoRGF5UGVyaW9kUGF0dGVybnMiLCJwYXJzZURheVBlcmlvZFBhdHRlcm5zIiwicGFyc2VJbnQiLCJjb2RlIiwicGFyc2VJU08iLCJhcmd1bWVudCIsIl9vcHRpb25zJGFkZGl0aW9uYWxEaSIsImFkZGl0aW9uYWxEaWdpdHMiLCJkYXRlU3RyaW5ncyIsInNwbGl0RGF0ZVN0cmluZyIsInBhcnNlWWVhclJlc3VsdCIsInBhcnNlWWVhciIsInBhcnNlRGF0ZSIsInJlc3REYXRlU3RyaW5nIiwicGFyc2VUaW1lIiwidGltZXpvbmUiLCJwYXJzZVRpbWV6b25lIiwic2V0RnVsbFllYXIiLCJzZXRIb3VycyIsInBhdHRlcm5zIiwiZGF0ZVRpbWVEZWxpbWl0ZXIiLCJ0aW1lWm9uZURlbGltaXRlciIsImRhdGVSZWdleCIsInRpbWVSZWdleCIsInRpbWV6b25lUmVnZXgiLCJkYXRlU3RyaW5nIiwic3BsaXQiLCJ0aW1lU3RyaW5nIiwic3Vic3RyIiwiZXhlYyIsInJlZ2V4IiwiUmVnRXhwIiwiY2FwdHVyZXMiLCJjZW50dXJ5IiwiaXNXZWVrRGF0ZSIsInBhcnNlRGF0ZVVuaXQiLCJ2YWxpZGF0ZVdlZWtEYXRlIiwiZGF5T2ZJU09XZWVrWWVhciIsInZhbGlkYXRlRGF0ZSIsInZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSIsIm1heCIsInBhcnNlVGltZVVuaXQiLCJzZWNvbmRzIiwidmFsaWRhdGVUaW1lIiwicGFyc2VGbG9hdCIsInRpbWV6b25lU3RyaW5nIiwidmFsaWRhdGVUaW1lem9uZSIsImZvdXJ0aE9mSmFudWFyeURheSIsImRheXNJbk1vbnRocyIsImlzTGVhcFllYXJJbmRleCIsIl95ZWFyIiwiX2hvdXJzIiwiYXJnU3RyIiwiY29uc29sZSIsIndhcm4iLCJFcnJvciIsInN0YWNrIiwid2VhdGhlckNvbmRpdGlvbnMiLCJmaW5kQ29sb3IiLCJmaW5kIiwiY29sb3IiLCJhZGp1c3QiLCJtaW4iLCJwcmludEN1cnJlbnRDb25kaXRpb25zIiwid2VhdGhlckRhdGEiLCJ3aW5kU3BlZWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJodW1pZGl0eSIsInV2SW5kZXgiLCJhaXJRdWFsaXR5IiwicHJlc3N1cmUiLCJwcmVjaXBpdGF0aW9uIiwiaW5uZXJUZXh0IiwiY3VycmVudCIsIndpbmRfbXBoIiwid2luZF9kaXIiLCJ1diIsImFpcl9xdWFsaXR5IiwicHJlc3N1cmVfaW4iLCJwcmVjaXBfaW4iLCJwcmludEN1cnJlbnRXZWF0aGVyIiwiY2l0eSIsInN0YXRlQ291bnRyeSIsImNvbmRpdGlvbkljb24iLCJjb25kaXRpb25UZXh0IiwidGVtcGVyYXR1cmUiLCJmZWVsc0xpa2UiLCJ0b2RheURhdGUiLCJsb2NhdGlvbiIsIm5hbWUiLCJyZWdpb24iLCJjb3VudHJ5IiwibG9jYWx0aW1lIiwibG9jYWxUaW1lIiwiaG91ciIsIm1pbnV0ZSIsInNyYyIsImNvbmRpdGlvbiIsImljb24iLCJzdHlsZSIsImRpc3BsYXkiLCJ0ZXh0IiwidGVtcF9mIiwidHJ1bmMiLCJmZWVsc2xpa2VfZiIsInByaW50Rm9yZWNhc3QiLCJmb3JlY2FzdERpdiIsImlubmVySFRNTCIsImRheURpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJmb3JlY2FzdERhdGEiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiYmFja2dyb3VuZCIsImRhdGVJY29uIiwiYXBwZW5kQ2hpbGQiLCJ0ZW1wcyIsImZvbnRXZWlnaHQiLCJtaW5UZW1wIiwibWludGVtcF9mIiwibWF4VGVtcCIsIm1heHRlbXBfZiIsImFwcGVuZCIsInNldEJhY2tncm91bmRzIiwiY29udGFpbmVyIiwiZW52aXJvbm1lbnQiLCJ3ZWF0aGVyIiwidG9kYXlDb2xvciIsInRvZ2dsZUhpZGRlbiIsImhpZGRlbkRpdiIsImhpZGRlbiIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInByaW50QWxlcnQiLCJhbGVydERhdGEiLCJhbGVydERpdiIsImhlYWRsaW5lIiwiYWxlcnRCdG4iLCJvbmNsaWNrIiwiZGVzY3JpcHRpb24iLCJkZXNjIiwiaW5zdHJ1Y3Rpb24iLCJjYWxsQXBpIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJlcnJvciIsImdldFdlYXRoZXJEYXRhIiwiaW52YWxpZCIsImFwaURhdGEiLCJvayIsImpzb24iLCJyZW1vdmUiLCJhbGVydHMiLCJhbGVydCIsInN1Ym1pdEJ0biIsInVzZXJJbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGljayIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9