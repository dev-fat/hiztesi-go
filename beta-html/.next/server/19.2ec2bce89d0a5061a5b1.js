exports.ids = [19];
exports.modules = {

/***/ "oWH3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DownloadChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qJ3r");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__);



function DownloadChart() {
  var series = [{
    name: 'series1',
    data: [0, 3, 5, 7, 3, 11, 0]
  }];
  var options = {
    chart: {
      height: 120,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    stroke: {
      width: 1
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.45,
        opacityTo: 0
      }
    },
    colors: ['#1afffc'],
    crosshairs: {
      show: false,
      position: 'back',
      stroke: {
        color: '#b6b6b6',
        width: 1,
        dashArray: 0
      }
    },
    tooltip: {
      enabled: false,
      offsetX: 0
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobile-chart"
  }, window !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a, {
    options: options,
    series: series,
    type: "area",
    height: 120
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, "Kullan\u0131lan Data: 34,2 MB"));
}

/***/ })

};;