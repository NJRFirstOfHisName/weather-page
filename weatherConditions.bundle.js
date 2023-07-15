/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/weatherConditions.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   weatherConditions: () => (/* binding */ weatherConditions)
/* harmony export */ });
const weatherConditions = [
  {
    code: 1000,
    day: "Sunny",
    color: "#f7fb88",
  },
  {
    code: 1003,
    day: "Partly cloudy",
    color: "#c5c9a7",
  },
  {
    code: 1006,
    day: "Cloudy",
    color: "#9fa191",
  },
  {
    code: 1009,
    day: "Overcast",
    color: "#919ca1",
  },
  {
    code: 1030,
    day: "Mist",
    color: "#c1d1d9",
  },
  {
    code: 1063,
    day: "Patchy rain possible",
    color: "#aed4e6",
  },
  {
    code: 1066,
    day: "Patchy snow possible",
    color: "#cee2eb",
  },
  {
    code: 1069,
    day: "Patchy sleet possible",
    color: "#a3b6bf",
  },
  {
    code: 1072,
    day: "Patchy freezing drizzle possible",
    color: "#5d7a87",
  },
  {
    code: 1087,
    day: "Thundery outbreaks possible",
    color: "",
  },
  {
    code: 1114,
    day: "Blowing snow",
    color: "#dceff7",
  },
  {
    code: 1117,
    day: "Blizzard",
    color: "#f7f9fa",
  },
  {
    code: 1135,
    day: "Fog",
    color: "#cacbcc",
  },
  {
    code: 1147,
    day: "Freezing fog",
    color: "#b1b7ba",
  },
  {
    code: 1150,
    day: "Patchy light drizzle",
    color: "#cee8f5",
  },
  {
    code: 1153,
    day: "Light drizzle",
    color: "#b6e5fa",
  },
  {
    code: 1168,
    day: "Freezing drizzle",
    color: "#a0cade",
  },
  {
    code: 1171,
    day: "Heavy freezing drizzle",
    color: "#84a4b3",
  },
  {
    code: 1180,
    day: "Patchy light rain",
    color: "#8aceed",
  },
  {
    code: 1183,
    day: "Light rain",
    color: "#4fabd6",
  },
  {
    code: 1186,
    day: "Moderate rain at times",
    color: "#4ebbed",
  },
  {
    code: 1189,
    day: "Moderate rain",
    color: "#34b1eb",
  },
  {
    code: 1192,
    day: "Heavy rain at times",
    color: "#218fc2",
  },
  {
    code: 1195,
    day: "Heavy rain",
    color: "#2078a1",
  },
  {
    code: 1198,
    day: "Light freezing rain",
    color: "#72d0fc",
  },
  {
    code: 1201,
    day: "Moderate or heavy freezing rain",
    color: "#407994",
  },
  {
    code: 1204,
    day: "Light sleet",
    color: "#a0a2a3",
  },
  {
    code: 1207,
    day: "Moderate or heavy sleet",
    color: "#798185",
  },
  {
    code: 1210,
    day: "Patchy light snow",
    color: "#c3c6c7",
  },
  {
    code: 1213,
    day: "Light snow",
    color: "#dadee0",
  },
  {
    code: 1216,
    day: "Patchy moderate snow",
    color: "#cfd2d4",
  },
  {
    code: 1219,
    day: "Moderate snow",
    color: "#cadbed",
  },
  {
    code: 1222,
    day: "Patchy heavy snow",
    color: "#99afc7",
  },
  {
    code: 1225,
    day: "Heavy snow",
    color: "#69778c",
  },
  {
    code: 1237,
    day: "Ice pellets",
    color: "#cdcfd1",
  },
  {
    code: 1240,
    day: "Light rain shower",
    color: "#b1caf0",
  },
  {
    code: 1243,
    day: "Moderate or heavy rain shower",
    color: "#a0c4fa",
  },
  {
    code: 1246,
    day: "Torrential rain shower",
    color: "#678abf",
  },
  {
    code: 1249,
    day: "Light sleet showers",
    color: "#adb7c7",
  },
  {
    code: 1252,
    day: "Moderate or heavy sleet showers",
    color: "#8c9eba",
  },
  {
    code: 1255,
    day: "Light snow showers",
    color: "#ccd9ed",
  },
  {
    code: 1258,
    day: "Moderate or heavy snow showers",
    color: "#c0c5cc",
  },
  {
    code: 1261,
    day: "Light showers of ice pellets",
    color: "#9ea4ad",
  },
  {
    code: 1264,
    day: "Moderate or heavy showers of ice pellets",
    color: "#7e8794",
  },
  {
    code: 1273,
    day: "Patchy light rain with thunder",
    color: "#a5c4f2",
  },
  {
    code: 1276,
    day: "Moderate or heavy rain with thunder",
    color: "#8da2c2",
  },
  {
    code: 1279,
    day: "Patchy light snow with thunder",
    color: "#b3c7e6",
  },
  {
    code: 1282,
    day: "Moderate or heavy snow with thunder",
    color: "#7d9fd1",
  },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ weatherConditions });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlckNvbmRpdGlvbnMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLEVBQUUsbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLXBhZ2UvLi9zcmMvd2VhdGhlckNvbmRpdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgY29uc3Qgd2VhdGhlckNvbmRpdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgY29kZTogMTAwMCxcclxuICAgIGRheTogXCJTdW5ueVwiLFxyXG4gICAgY29sb3I6IFwiI2Y3ZmI4OFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTAwMyxcclxuICAgIGRheTogXCJQYXJ0bHkgY2xvdWR5XCIsXHJcbiAgICBjb2xvcjogXCIjYzVjOWE3XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMDA2LFxyXG4gICAgZGF5OiBcIkNsb3VkeVwiLFxyXG4gICAgY29sb3I6IFwiIzlmYTE5MVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTAwOSxcclxuICAgIGRheTogXCJPdmVyY2FzdFwiLFxyXG4gICAgY29sb3I6IFwiIzkxOWNhMVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTAzMCxcclxuICAgIGRheTogXCJNaXN0XCIsXHJcbiAgICBjb2xvcjogXCIjYzFkMWQ5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMDYzLFxyXG4gICAgZGF5OiBcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsXHJcbiAgICBjb2xvcjogXCIjYWVkNGU2XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMDY2LFxyXG4gICAgZGF5OiBcIlBhdGNoeSBzbm93IHBvc3NpYmxlXCIsXHJcbiAgICBjb2xvcjogXCIjY2VlMmViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMDY5LFxyXG4gICAgZGF5OiBcIlBhdGNoeSBzbGVldCBwb3NzaWJsZVwiLFxyXG4gICAgY29sb3I6IFwiI2EzYjZiZlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTA3MixcclxuICAgIGRheTogXCJQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZVwiLFxyXG4gICAgY29sb3I6IFwiIzVkN2E4N1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTA4NyxcclxuICAgIGRheTogXCJUaHVuZGVyeSBvdXRicmVha3MgcG9zc2libGVcIixcclxuICAgIGNvbG9yOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTExNCxcclxuICAgIGRheTogXCJCbG93aW5nIHNub3dcIixcclxuICAgIGNvbG9yOiBcIiNkY2VmZjdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDExMTcsXHJcbiAgICBkYXk6IFwiQmxpenphcmRcIixcclxuICAgIGNvbG9yOiBcIiNmN2Y5ZmFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDExMzUsXHJcbiAgICBkYXk6IFwiRm9nXCIsXHJcbiAgICBjb2xvcjogXCIjY2FjYmNjXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMTQ3LFxyXG4gICAgZGF5OiBcIkZyZWV6aW5nIGZvZ1wiLFxyXG4gICAgY29sb3I6IFwiI2IxYjdiYVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTE1MCxcclxuICAgIGRheTogXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiLFxyXG4gICAgY29sb3I6IFwiI2NlZThmNVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTE1MyxcclxuICAgIGRheTogXCJMaWdodCBkcml6emxlXCIsXHJcbiAgICBjb2xvcjogXCIjYjZlNWZhXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMTY4LFxyXG4gICAgZGF5OiBcIkZyZWV6aW5nIGRyaXp6bGVcIixcclxuICAgIGNvbG9yOiBcIiNhMGNhZGVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDExNzEsXHJcbiAgICBkYXk6IFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiLFxyXG4gICAgY29sb3I6IFwiIzg0YTRiM1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTE4MCxcclxuICAgIGRheTogXCJQYXRjaHkgbGlnaHQgcmFpblwiLFxyXG4gICAgY29sb3I6IFwiIzhhY2VlZFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTE4MyxcclxuICAgIGRheTogXCJMaWdodCByYWluXCIsXHJcbiAgICBjb2xvcjogXCIjNGZhYmQ2XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMTg2LFxyXG4gICAgZGF5OiBcIk1vZGVyYXRlIHJhaW4gYXQgdGltZXNcIixcclxuICAgIGNvbG9yOiBcIiM0ZWJiZWRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDExODksXHJcbiAgICBkYXk6IFwiTW9kZXJhdGUgcmFpblwiLFxyXG4gICAgY29sb3I6IFwiIzM0YjFlYlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTE5MixcclxuICAgIGRheTogXCJIZWF2eSByYWluIGF0IHRpbWVzXCIsXHJcbiAgICBjb2xvcjogXCIjMjE4ZmMyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMTk1LFxyXG4gICAgZGF5OiBcIkhlYXZ5IHJhaW5cIixcclxuICAgIGNvbG9yOiBcIiMyMDc4YTFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDExOTgsXHJcbiAgICBkYXk6IFwiTGlnaHQgZnJlZXppbmcgcmFpblwiLFxyXG4gICAgY29sb3I6IFwiIzcyZDBmY1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTIwMSxcclxuICAgIGRheTogXCJNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluXCIsXHJcbiAgICBjb2xvcjogXCIjNDA3OTk0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjA0LFxyXG4gICAgZGF5OiBcIkxpZ2h0IHNsZWV0XCIsXHJcbiAgICBjb2xvcjogXCIjYTBhMmEzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjA3LFxyXG4gICAgZGF5OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XCIsXHJcbiAgICBjb2xvcjogXCIjNzk4MTg1XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjEwLFxyXG4gICAgZGF5OiBcIlBhdGNoeSBsaWdodCBzbm93XCIsXHJcbiAgICBjb2xvcjogXCIjYzNjNmM3XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjEzLFxyXG4gICAgZGF5OiBcIkxpZ2h0IHNub3dcIixcclxuICAgIGNvbG9yOiBcIiNkYWRlZTBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyMTYsXHJcbiAgICBkYXk6IFwiUGF0Y2h5IG1vZGVyYXRlIHNub3dcIixcclxuICAgIGNvbG9yOiBcIiNjZmQyZDRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyMTksXHJcbiAgICBkYXk6IFwiTW9kZXJhdGUgc25vd1wiLFxyXG4gICAgY29sb3I6IFwiI2NhZGJlZFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTIyMixcclxuICAgIGRheTogXCJQYXRjaHkgaGVhdnkgc25vd1wiLFxyXG4gICAgY29sb3I6IFwiIzk5YWZjN1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTIyNSxcclxuICAgIGRheTogXCJIZWF2eSBzbm93XCIsXHJcbiAgICBjb2xvcjogXCIjNjk3NzhjXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjM3LFxyXG4gICAgZGF5OiBcIkljZSBwZWxsZXRzXCIsXHJcbiAgICBjb2xvcjogXCIjY2RjZmQxXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjQwLFxyXG4gICAgZGF5OiBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsXHJcbiAgICBjb2xvcjogXCIjYjFjYWYwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjQzLFxyXG4gICAgZGF5OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCIsXHJcbiAgICBjb2xvcjogXCIjYTBjNGZhXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjQ2LFxyXG4gICAgZGF5OiBcIlRvcnJlbnRpYWwgcmFpbiBzaG93ZXJcIixcclxuICAgIGNvbG9yOiBcIiM2NzhhYmZcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyNDksXHJcbiAgICBkYXk6IFwiTGlnaHQgc2xlZXQgc2hvd2Vyc1wiLFxyXG4gICAgY29sb3I6IFwiI2FkYjdjN1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTI1MixcclxuICAgIGRheTogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzXCIsXHJcbiAgICBjb2xvcjogXCIjOGM5ZWJhXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjU1LFxyXG4gICAgZGF5OiBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiLFxyXG4gICAgY29sb3I6IFwiI2NjZDllZFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTI1OCxcclxuICAgIGRheTogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnNcIixcclxuICAgIGNvbG9yOiBcIiNjMGM1Y2NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyNjEsXHJcbiAgICBkYXk6IFwiTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLFxyXG4gICAgY29sb3I6IFwiIzllYTRhZFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTI2NCxcclxuICAgIGRheTogXCJNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsXHJcbiAgICBjb2xvcjogXCIjN2U4Nzk0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjb2RlOiAxMjczLFxyXG4gICAgZGF5OiBcIlBhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlclwiLFxyXG4gICAgY29sb3I6IFwiI2E1YzRmMlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTI3NixcclxuICAgIGRheTogXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlclwiLFxyXG4gICAgY29sb3I6IFwiIzhkYTJjMlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgY29kZTogMTI3OSxcclxuICAgIGRheTogXCJQYXRjaHkgbGlnaHQgc25vdyB3aXRoIHRodW5kZXJcIixcclxuICAgIGNvbG9yOiBcIiNiM2M3ZTZcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGNvZGU6IDEyODIsXHJcbiAgICBkYXk6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIixcclxuICAgIGNvbG9yOiBcIiM3ZDlmZDFcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyB3ZWF0aGVyQ29uZGl0aW9ucyB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=