__NEXT_INTL_POLYFILL_URL__ = "/_next/static/chunks/600bcb62.8d5103f81de1b3919727.js";module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7UAW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Uau6");
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_swipeable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_adsense__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("r+74");
/* harmony import */ var react_adsense__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_adsense__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ConfirmModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("U4Wc");









var MobileItem = function MobileItem(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('item'),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      classes = _useState2[0],
      setClass = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      isFavourite = _useState4[0],
      setFavourite = _useState4[1];

  var handlers = Object(react_swipeable__WEBPACK_IMPORTED_MODULE_5__["useSwipeable"])({
    onSwipedRight: function onSwipedRight() {
      setClass('item show-favourite');
    },
    onSwipedLeft: function onSwipedLeft() {
      setClass('item');
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classes + (isFavourite ? ' added' : '')
  }, handlers), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "class": "favourite-area",
    onClick: function onClick() {
      return setFavourite(function (isFavourite) {
        return !isFavourite;
      });
    }
  }, isFavourite ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "./assets/images/remove-fav.svg",
    alt: ""
  }), "Favoriden \xC7\u0131kar") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "./assets/images/fav-icon.svg",
    alt: ""
  }), "Favori")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "name"
  }, props.value.server), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "location"
  }, props.value.location), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "distance"
  }, props.value.distance), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "toggle",
    onClick: function onClick() {
      return props.modalToggle();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null)));
};

var servers = [{
  location: 'İstanbul',
  server: 'Radore',
  distance: '13km'
}, {
  location: 'İstanbul',
  server: 'Doruknet',
  distance: '13km'
}, {
  location: 'İstanbul',
  server: 'Vodafone',
  distance: '13km'
}, {
  location: 'İstanbul',
  server: 'Turkcell Superonline',
  distance: '13km'
}, {
  location: 'İstanbul',
  server: 'Turknet',
  distance: '13km'
}, {
  location: 'Bursa',
  server: 'DGN Teknoloji',
  distance: '13km'
}, {
  location: 'İstanbul',
  server: 'Radore',
  distance: '13km'
}, {
  location: 'İstanbul',
  server: 'Doruknet',
  distance: '13km'
}, {
  location: 'İstanbul',
  server: 'Vodafone',
  distance: '13km'
}, {
  location: 'İstanbul',
  server: 'Turkcell Superonline',
  distance: '13km'
}, {
  location: 'İstanbul',
  server: 'Turknet',
  distance: '13km'
}, {
  location: 'Bursa',
  server: 'DGN Teknoloji',
  distance: '13km'
}];

var ServerModal = function ServerModal(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var handleClose = props.handleClose;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      keyword = _useState6[0],
      setKeyword = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      showConfirmModal = _useState8[0],
      setConfirmModalVisibility = _useState8[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "server-modal"
  }, showConfirmModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ConfirmModal__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    hero: "Netinternet Bili\u015Fim Teknolojileri Hizmetleri A.\u015E.",
    desc: "\u0130stanbul"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "testThisServer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "addFavs"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "cancel",
    onClick: function onClick() {
      return setConfirmModalVisibility(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "cancel"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "server-modal__content mobile-hide"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#",
    className: "close",
    onClick: handleClose
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "hero"
  }, "Netinternet Bili\u015Fim Teknolojileri A.\u015E.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "\u0130stanbul")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      return setKeyword(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "list-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "closeServers"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", null, servers.filter(function (item) {
    return item.server.toLowerCase().includes(keyword.toLowerCase().trim());
  }).map(function (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      onClick: handleClose
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, data.location), " - ", data.server);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "add"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "addServer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "serverText"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return router.push('/register');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "signUp"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: showConfirmModal ? "server-modal__content mobile-visible no-scroll" : "server-modal__content mobile-visible"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "server-modal__head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "changeServer"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#",
    className: "back",
    onClick: handleClose
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "server-modal__ad"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "server-modal-mobile__list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    onChange: function onChange(e) {
      return setKeyword(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "chooseAuto"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "list"
  }, servers.filter(function (item) {
    return item.server.toLowerCase().includes(keyword.toLowerCase().trim());
  }).map(function (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MobileItem, {
      value: data,
      modalToggle: function modalToggle() {
        return setConfirmModalVisibility(true);
      }
    });
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (ServerModal);

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Fl18":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



function Footer(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-footer",
    style: {
      marginTop: props.noMargin ? 0 : 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label"
  }, "HIZTEST\u0130"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return router.push('/about-us');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "aboutUs"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "addServer"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "contactForAds"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "reports"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "blog"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "products"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return router.push('/mobile-apps');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "mobileApps"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "flex"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "expert"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "liveMapFooter"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "account"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "resultsHistory"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "settings"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "help"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "createAccount"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "apps"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "app-ituness"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "app-google"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "policy"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "agreements"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    rel: "noopener",
    className: "facebook"
  }, "Facebook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    rel: "noopener",
    className: "twitter"
  }, "Twitter")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "copyright"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "copyright"
  })));
}

/***/ }),

/***/ "J4zp":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("wTVA");

var iterableToArrayLimit = __webpack_require__("m0LI");

var unsupportedIterableToArray = __webpack_require__("ZhPi");

var nonIterableRest = __webpack_require__("wkBT");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "NNXn":
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "Ogzj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Header; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("J4zp");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@moxy/next-intl"
var next_intl_ = __webpack_require__("mTXt");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// CONCATENATED MODULE: ./components/MobileMenu/index.js




function MobileHeader(props) {
  var router = Object(router_["useRouter"])();
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "mobile-header"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: router.pathname === "/" ? "active" : ""
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "/"
  }, "HIZ TEST\u0130")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: router.pathname === "/history" ? "active" : ""
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "/history"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "resultsNav"
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: router.pathname === "/settings" ? "active" : ""
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "/settings"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "settingsNav"
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: router.pathname === "/about-us" ? "active" : ""
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "/about-us"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "aboutNav"
  }))));
}
// EXTERNAL MODULE: ./components/ConfirmModal/index.js
var ConfirmModal = __webpack_require__("U4Wc");

// CONCATENATED MODULE: ./components/Header/index.js








var Header_LanguageSelect = function LanguageSelect() {
  return /*#__PURE__*/external_react_default.a.createElement(next_intl_["NextIntlConsumer"], null, function (_ref) {
    var locales = _ref.locales,
        locale = _ref.locale,
        changeLocale = _ref.changeLocale;
    return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "language-toggle"
    }, /*#__PURE__*/external_react_default.a.createElement("img", {
      src: locale.icon,
      alt: ""
    }), locale.code), /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "dropdown-container"
    }, /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "dropdown"
    }, /*#__PURE__*/external_react_default.a.createElement("ul", null, locales.map(function (_ref2) {
      var code = _ref2.code,
          icon = _ref2.icon,
          id = _ref2.id;
      return /*#__PURE__*/external_react_default.a.createElement("li", {
        onClick: function onClick(event) {
          return changeLocale(id);
        }
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        src: icon,
        alt: ""
      }), code);
    })))));
  });
};

function Header(props) {
  var router = Object(router_["useRouter"])();

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isModalShown = _useState2[0],
      setModalVisibility = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    document.querySelectorAll('.js-share-dropdown li').forEach(function (item, idx) {
      item.querySelector('.copy').addEventListener('click', function (e) {
        var _this = this;

        this.classList.add('active');
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = this.closest('li').querySelector('input').getAttribute('value');
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        setTimeout(function () {
          _this.classList.remove('active');
        }, 600);
      });
    });
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/external_react_default.a.createElement(MobileHeader, null), isModalShown && /*#__PURE__*/external_react_default.a.createElement(ConfirmModal["a" /* default */], {
    hero: "SONUCU S\u0130L?",
    desc: "Bu sonu\xE7 ge\xE7mi\u015Finizden silinecek ve geri al\u0131namayacak."
  }, /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "two-col"
  }, /*#__PURE__*/external_react_default.a.createElement("li", {
    onClick: function onClick() {
      return setModalVisibility(false);
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "no"
  })), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "cancel"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "yes"
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/external_react_default.a.createElement("span", {
    onClick: function onClick() {
      return router.push('/');
    }
  }, "HIZTEST\u0130")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "navigation"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "nav"
  }, /*#__PURE__*/external_react_default.a.createElement("ul", null, /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "history",
    onClick: function onClick() {
      return router.push('/history');
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "resultsHistory"
  }))), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "settings",
    onClick: function onClick() {
      return router.push('/settings');
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "settings"
  }))), props.profile ? /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "profile",
    onClick: function onClick() {
      return router.push('/profile');
    }
  }, "user@hiztesti.com.tr")) : /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "signin",
    onClick: function onClick() {
      return router.push('/login');
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "signIn"
  }))))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: props.alternative ? "language mobile-hide" : "language"
  }, /*#__PURE__*/external_react_default.a.createElement(Header_LanguageSelect, null)), props.alternative && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "mobile-visible"
  }, /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "go-back",
    onClick: function onClick() {
      return router.back();
    }
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./assets/images/icon-back.svg",
    alt: ""
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "page-actions"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return setModalVisibility(true);
    }
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./assets/images/trash.svg",
    alt: ""
  })), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./assets/images/share.svg",
    alt: ""
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "link-dropdown js-share-dropdown"
  }, /*#__PURE__*/external_react_default.a.createElement("ul", null, /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("div", null, "Web", /*#__PURE__*/external_react_default.a.createElement("input", {
    type: "text",
    value: "https://www.hiztesti.com",
    disabled: true
  }), /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "copy"
  }))), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "image"
  }), /*#__PURE__*/external_react_default.a.createElement("input", {
    type: "text",
    value: "https://www.hiztesti.com",
    disabled: true
  }), /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "copy"
  }))), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("div", null, "Embed", /*#__PURE__*/external_react_default.a.createElement("input", {
    type: "text",
    value: "<a href=\"https://www.hiztesti.com</a>",
    disabled: true
  }), /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "copy"
  }))), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement("div", null, "Forum", /*#__PURE__*/external_react_default.a.createElement("input", {
    type: "text",
    value: "[URL=https://www.hiztestesti.com]",
    disabled: true
  }), /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "copy"
  })))))))))));
}

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Header/index.js + 1 modules
var Header = __webpack_require__("Ogzj");

// EXTERNAL MODULE: ./components/Footer/index.js
var Footer = __webpack_require__("Fl18");

// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__("NNXn");
var external_react_responsive_default = /*#__PURE__*/__webpack_require__.n(external_react_responsive_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/SpeedTest/icons.js
var icons = ["\n    <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n    <svg width=\"40px\" height=\"40px\" viewBox=\"0 0 40 40\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <title>down-icn@2x</title>\n        <g id=\"Website\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"#2.On-Speedtest\" transform=\"translate(-564.000000, -205.000000)\">\n                <g id=\"Content\" transform=\"translate(106.000000, 95.000000)\">\n                    <g id=\"speedtest\" transform=\"translate(180.000000, 110.000000)\">\n                        <g id=\"down-up\">\n                            <g id=\"download\" transform=\"translate(278.000000, 0.000000)\">\n                                <g id=\"down-icn\">\n                                    <path d=\"M19.2097264,12.0567376 L19.2097264,27.9432624 C19.2097264,28.4916302 19.7540611,28.9361702 20.4255319,28.9361702 C21.0970027,28.9361702 21.6413374,28.4916302 21.6413374,27.9432624 L21.6413374,12.0567376 C21.6413374,11.5083698 21.0970027,11.0638298 20.4255319,11.0638298 C19.7540611,11.0638298 19.2097264,11.5083698 19.2097264,12.0567376 Z M13.9904034,19.845294 C13.5156018,19.3846532 12.7457964,19.3846532 12.2709948,19.845294 C11.7961932,20.3059348 11.7961932,21.0527812 12.2709948,21.513422 L19.5658276,28.5906896 C20.0406292,29.0513304 20.8104346,29.0513304 21.2852362,28.5906896 L28.580069,21.513422 C29.0548706,21.0527812 29.0548706,20.3059348 28.580069,19.845294 C28.1052675,19.3846532 27.335462,19.3846532 26.8606604,19.845294 L20.4255319,26.0884976 L13.9904034,19.845294 Z\" id=\"Combined-Shape\" fill=\"#1AFFFC\" fill-rule=\"nonzero\"></path>\n                                    <circle id=\"Oval-4\" stroke-opacity=\"0.301092618\" stroke=\"#1AFFFC\" stroke-width=\"3\" cx=\"20\" cy=\"20\" r=\"18.5\"></circle>\n                                    <circle id=\"Oval-4-Copy\" stroke=\"#1AFFFC\" stroke-width=\"3\" cx=\"20\" cy=\"20\" r=\"18.5\"></circle>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </svg>  \n  ", "\n    <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n    <svg width=\"22px\" height=\"22px\" viewBox=\"0 0 22 22\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <title>globe@2x</title>\n        <defs>\n            <path d=\"M11,0 C17.0751322,0 22,4.92486775 22,11 C22,17.0751322 17.0751322,22 11,22 C4.92486775,22 0,17.0751322 0,11 C0,4.92486775 4.92486775,0 11,0 Z M6.05279391,12.0010636 L2.05500569,12.0006955 C2.46835632,15.7372697 5.16921492,18.7842959 8.72607502,19.7102675 C7.2052792,17.4233136 6.28166193,14.7770381 6.05279391,12.0010636 Z M19.9449943,12.0006955 L15.9498422,12.0008226 C15.7255335,14.7635472 14.8008579,17.4154858 13.2745676,19.7097575 C16.8312897,18.7837266 19.5316823,15.7369207 19.9449943,12.0006955 Z M13.945194,12.0003647 L8.05765422,12.0006768 C8.30895924,14.713613 9.33046978,17.2982679 11.0000219,19.4492318 C12.6759302,17.2904611 13.6988433,14.6975901 13.945194,12.0003647 Z M8.72543244,2.29024251 L8.6892238,2.29941009 C5.15025532,3.23685972 2.46644779,6.27618877 2.05489527,10.0003032 L6.05007662,10.0001782 C6.27424317,7.2370933 7.19895783,4.58479128 8.72543244,2.29024251 Z M10.9999781,2.5507682 C9.32386253,4.70980581 8.30090373,7.30305111 8.05471464,10.0006358 L13.9424384,10.0003233 C13.6912918,7.28702224 12.6697354,4.70199636 10.9999781,2.5507682 Z M13.273925,2.2897325 L13.4629614,2.58063524 C14.8714653,4.80010201 15.728192,7.34051478 15.9472885,9.99993588 L19.9451047,10.0003032 C19.5321249,6.26327319 16.831102,3.21578659 13.273925,2.2897325 Z\" id=\"path-1\"></path>\n        </defs>\n        <g id=\"Website\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"#1.Home\" transform=\"translate(-567.000000, -531.000000)\">\n                <g id=\"Content\" transform=\"translate(106.000000, 95.000000)\">\n                    <g id=\"speedtest\" transform=\"translate(254.000000, 160.000000)\">\n                        <g id=\"isp-and-sponsor-servers\" transform=\"translate(0.000000, 265.000000)\">\n                            <g id=\"isp\">\n                                <g id=\"globe-icn\" transform=\"translate(196.000000, 0.000000)\">\n                                    <g id=\"globe\" transform=\"translate(11.000000, 11.000000)\">\n                                        <mask id=\"mask-2\" fill=\"white\">\n                                            <use xlink:href=\"#path-1\"></use>\n                                        </mask>\n                                        <use id=\"Combined-Shape\" fill=\"#FFFFFF\" fill-rule=\"nonzero\" opacity=\"0.749000186\" xlink:href=\"#path-1\"></use>\n                                    </g>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </svg>  \n  ", "\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg width=\"13px\" height=\"22px\" viewBox=\"0 0 13 22\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>iphone copy 3@2x</title>\n      <g id=\"iPhone8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"Splash-new\" transform=\"translate(-104.000000, -376.000000)\" fill=\"#F4E200\" fill-rule=\"nonzero\">\n              <g id=\"icons\" transform=\"translate(18.000000, 26.000000)\">\n                  <g id=\"iphone-copy-3\" transform=\"translate(86.000000, 350.000000)\">\n                      <path d=\"M11.375,0 L1.625,0 C0.7271875,0 0,0.703214286 0,1.57142857 L0,20.4285714 C0,21.2967857 0.7271875,22 1.625,22 L11.375,22 C12.2728125,22 13,21.2967857 13,20.4285714 L13,1.57142857 C13,0.703214286 12.2728125,0 11.375,0 Z M6.5,20.4285714 C6.0515,20.4285714 5.6875,20.0765714 5.6875,19.6428571 C5.6875,19.2091429 6.0515,18.8571429 6.5,18.8571429 C6.9485,18.8571429 7.3125,19.2091429 7.3125,19.6428571 C7.3125,20.0765714 6.9485,20.4285714 6.5,20.4285714 Z M11.375,18.0714286 L1.625,18.0714286 L1.625,2.35714286 L11.375,2.35714286 L11.375,18.0714286 Z\" id=\"Shape\"></path>\n                  </g>\n              </g>\n          </g>\n      </g>\n  </svg>\n  ", "\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg width=\"22px\" height=\"22px\" viewBox=\"0 0 22 22\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>jitter@2x</title>\n      <defs>\n          <path d=\"M12.75,15.2884341 L9.34036123,4.87009341 C9.13522956,4.2433022 8.26477044,4.2433022 8.05963877,4.87009341 L6.18848753,10.5875 L3.975,10.5875 C3.60220779,10.5875 3.3,10.8953042 3.3,11.275 C3.3,11.6546958 3.60220779,11.9625 3.975,11.9625 L6.675,11.9625 C6.96554053,11.9625 7.22348424,11.7731418 7.31536123,11.4924066 L8.7,7.26156589 L12.1096388,17.6799066 C12.3147704,18.3066978 13.1852296,18.3066978 13.3903612,17.6799066 L15.2615125,11.9625 L17.475,11.9625 C17.8477922,11.9625 18.15,11.6546958 18.15,11.275 C18.15,10.8953042 17.8477922,10.5875 17.475,10.5875 L14.775,10.5875 C14.4844595,10.5875 14.2265158,10.7768582 14.1346388,11.0575934 L12.75,15.2884341 Z\" id=\"path-1\"></path>\n      </defs>\n      <g id=\"iPhone8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"Splash-new\" transform=\"translate(-108.000000, -411.000000)\">\n              <g id=\"icons-copy\" transform=\"translate(17.000000, 12.000000)\">\n                  <g id=\"jitter\" transform=\"translate(91.000000, 399.000000)\">\n                      <circle id=\"Oval-4\" stroke=\"#1AFFFC\" stroke-width=\"1.65\" cx=\"11\" cy=\"11\" r=\"10.175\"></circle>\n                      <mask id=\"mask-2\" fill=\"white\">\n                          <use xlink:href=\"#path-1\"></use>\n                      </mask>\n                      <use id=\"Shape\" fill=\"#1AFFFC\" fill-rule=\"nonzero\" xlink:href=\"#path-1\"></use>\n                  </g>\n              </g>\n          </g>\n      </g>\n  </svg>\n  ", "\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg width=\"18px\" height=\"18px\" viewBox=\"0 0 18 18\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>location@2x</title>\n      <g id=\"iPhone8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" opacity=\"0.972581845\">\n          <g id=\"Splash-new\" transform=\"translate(-168.000000, -392.000000)\" fill=\"#1AFFFC\">\n              <g id=\"icons-copy\" transform=\"translate(17.000000, 12.000000)\">\n                  <polygon id=\"location\" points=\"168.608772 380.000626 151 388.608577 151 388.999883 159.999257 388.999883 159.999257 397.999922 160.392128 397.999922 168.999296 380.39115 168.999296 380.000626\"></polygon>\n              </g>\n          </g>\n      </g>\n  </svg>\n  ", "\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg width=\"36px\" height=\"26px\" viewBox=\"0 0 36 26\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>LTE Copy@2x</title>\n      <g id=\"iPhone8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" font-family=\"DINAlternate-Bold, DIN Alternate\" font-size=\"22\" font-weight=\"bold\" opacity=\"0.972581845\">\n          <g id=\"Splash-new\" transform=\"translate(-159.000000, -340.000000)\" fill=\"#1AFFFC\">\n              <g id=\"icons-copy\" transform=\"translate(17.000000, 12.000000)\">\n                  <g id=\"LTE-Copy\" transform=\"translate(142.000000, 328.000626)\">\n                      <text id=\"LTE\">\n                          <tspan x=\"0\" y=\"21\">LTE</tspan>\n                      </text>\n                  </g>\n              </g>\n          </g>\n      </g>\n  </svg>\n  ", "\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg width=\"24px\" height=\"22px\" viewBox=\"0 0 24 22\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>mac copy@2x</title>\n      <g id=\"iPhone8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"Splash-new\" transform=\"translate(-61.000000, -116.000000)\" fill=\"#FA6A00\">\n              <g id=\"icons-copy\" transform=\"translate(17.000000, 12.000000)\">\n                  <g id=\"mac-copy\" transform=\"translate(44.000000, 104.000000)\">\n                      <path d=\"M22,19 L2,19 C0.897,19 0,18.103 0,17 L0,2 C0,0.897 0.897,0 2,0 L22,0 C23.103,0 24,0.897 24,2 L24,17 C24,18.103 23.103,19 22,19 Z M2,1 C1.4485,1 1,1.4485 1,2 L1,17 C1,17.5515 1.4485,18 2,18 L22,18 C22.5515,18 23,17.5515 23,17 L23,2 C23,1.4485 22.5515,1 22,1 L2,1 Z\" id=\"Shape\" fill-rule=\"nonzero\"></path>\n                      <path d=\"M19,22 L5,22 C4.724,22 4.5,21.776 4.5,21.5 C4.5,21.224 4.724,21 5,21 L19,21 C19.276,21 19.5,21.224 19.5,21.5 C19.5,21.776 19.276,22 19,22 Z\" id=\"Path\"></path>\n                      <path d=\"M15.51,22 C15.5065,22 15.5035,22 15.5,22 L8.5,22 C8.3395,22 8.1885,21.923 8.0945,21.792 C8.0005,21.6615 7.975,21.494 8.0255,21.3415 L9.0255,18.3415 C9.094,18.1375 9.2845,18 9.5,18 L14.5,18 C14.7155,18 14.906,18.1375 14.9745,18.342 L15.9445,21.2525 C15.986,21.3255 16.01,21.41 16.01,21.5 C16.01,21.776 15.786,22 15.51,22 Z M9.1935,21 L14.8065,21 L14.14,19 L9.8605,19 L9.1935,21 Z\" id=\"Shape\" fill-rule=\"nonzero\"></path>\n                      <path d=\"M22,15 L2,15 L2,2 L22,2 L22,15 Z M3,14 L21,14 L21,3 L3,3 L3,14 Z\" id=\"Shape\" fill-rule=\"nonzero\"></path>\n                      <circle id=\"Oval\" cx=\"12\" cy=\"16.5\" r=\"1\"></circle>\n                  </g>\n              </g>\n          </g>\n      </g>\n  </svg>\n  ", "\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg width=\"40px\" height=\"40px\" viewBox=\"0 0 40 40\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>ping-icn@2x</title>\n      <g id=\"Website\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"#2.On-Speedtest\" transform=\"translate(-286.000000, -205.000000)\">\n              <g id=\"Content\" transform=\"translate(106.000000, 95.000000)\">\n                  <g id=\"speedtest\" transform=\"translate(180.000000, 110.000000)\">\n                      <g id=\"down-up\">\n                          <g id=\"ping\">\n                              <g id=\"ping-icn\">\n                                  <circle id=\"Oval-4\" stroke=\"#BDBECB\" stroke-width=\"3\" cx=\"20\" cy=\"20\" r=\"18.5\"></circle>\n                                  <path d=\"M14.2928932,13.2928932 C14.6834175,12.9023689 15.3165825,12.9023689 15.7071068,13.2928932 C16.0976311,13.6834175 16.0976311,14.3165825 15.7071068,14.7071068 L15.7071068,14.7071068 L11.414,19 L25,19 C25.5128358,19 25.9355072,19.3860402 25.9932723,19.8833789 L26,20 C26,20.5522847 25.5522847,21 25,21 L25,21 L11.414,21 L15.7071068,25.2928932 C16.0675907,25.6533772 16.0953203,26.2206082 15.7902954,26.6128994 L15.7071068,26.7071068 C15.3165825,27.0976311 14.6834175,27.0976311 14.2928932,26.7071068 L14.2928932,26.7071068 L8.29289322,20.7071068 L8.29289322,20.7071068 L8.21968877,20.625449 C8.2173721,20.6225624 8.21507113,20.6196628 8.21278596,20.6167501 C8.20728448,20.6098424 8.20175344,20.602603 8.19633458,20.5953066 C8.17849009,20.5711307 8.1617187,20.546275 8.14606743,20.5206602 C8.13860692,20.5086131 8.13149883,20.4963944 8.12467117,20.4840621 C8.11379392,20.4642939 8.10337664,20.4438914 8.09365378,20.4230991 C8.08567905,20.4060985 8.07819642,20.3887956 8.07122549,20.371336 C8.06331574,20.3515792 8.05612249,20.3317977 8.04954668,20.3117364 C8.04472872,20.2968513 8.04009773,20.2814633 8.03584514,20.265993 C8.02983363,20.2444365 8.0246398,20.2227461 8.02016515,20.2007941 C8.01670217,20.1833753 8.01362808,20.165949 8.0110178,20.1484669 C8.00376119,20.1003621 8,20.0506203 8,20 L8.00396641,20.0892501 C8.00189498,20.0659949 8.00063489,20.042681 8.00018615,20.0193545 L8,20 C8,19.9935938 8.00006024,19.9872016 8.00018018,19.980824 C8.00059932,19.9579802 8.0018656,19.9343349 8.00396641,19.9107499 C8.00576612,19.890153 8.00811223,19.8705042 8.01101934,19.8510388 C8.01362808,19.834051 8.01670217,19.8166247 8.02024007,19.7992742 C8.0246398,19.7772539 8.02983363,19.7555635 8.03572097,19.7341604 C8.04009773,19.7185367 8.04472872,19.7031487 8.04973809,19.6878575 C8.05612249,19.6682023 8.06331574,19.6484208 8.07110396,19.6289415 C8.07819642,19.6112044 8.08567905,19.5939015 8.09367336,19.5767785 C8.10337664,19.5561086 8.11379392,19.5357061 8.12487577,19.515723 C8.13149883,19.5036056 8.13860692,19.4913869 8.14599545,19.4792912 C8.1617187,19.453725 8.17849009,19.4288693 8.19631351,19.4048407 C8.22531295,19.3656744 8.25749917,19.3282873 8.29289322,19.2928932 L8.21278596,19.3832499 C8.23766884,19.3515341 8.26442691,19.3213595 8.29289322,19.2928932 Z\" id=\"Combined-Shape\" fill=\"#BDBECB\" fill-rule=\"nonzero\"></path>\n                                  <path d=\"M20.2928932,13.2928932 C20.6834175,12.9023689 21.3165825,12.9023689 21.7071068,13.2928932 C22.0976311,13.6834175 22.0976311,14.3165825 21.7071068,14.7071068 L21.7071068,14.7071068 L17.414,19 L31,19 C31.5128358,19 31.9355072,19.3860402 31.9932723,19.8833789 L32,20 C32,20.5522847 31.5522847,21 31,21 L31,21 L17.414,21 L21.7071068,25.2928932 C22.0675907,25.6533772 22.0953203,26.2206082 21.7902954,26.6128994 L21.7071068,26.7071068 C21.3165825,27.0976311 20.6834175,27.0976311 20.2928932,26.7071068 L20.2928932,26.7071068 L14.2928932,20.7071068 L14.2928932,20.7071068 L14.2196888,20.625449 C14.2173721,20.6225624 14.2150711,20.6196628 14.212786,20.6167501 C14.2072845,20.6098424 14.2017534,20.602603 14.1963346,20.5953066 C14.1784901,20.5711307 14.1617187,20.546275 14.1460674,20.5206602 C14.1386069,20.5086131 14.1314988,20.4963944 14.1246712,20.4840621 C14.1137939,20.4642939 14.1033766,20.4438914 14.0936538,20.4230991 C14.085679,20.4060985 14.0781964,20.3887956 14.0712255,20.371336 C14.0633157,20.3515792 14.0561225,20.3317977 14.0495467,20.3117364 C14.0447287,20.2968513 14.0400977,20.2814633 14.0358451,20.265993 C14.0298336,20.2444365 14.0246398,20.2227461 14.0201652,20.2007941 C14.0167022,20.1833753 14.0136281,20.165949 14.0110178,20.1484669 C14.0037612,20.1003621 14,20.0506203 14,20 L14.0039664,20.0892501 C14.001895,20.0659949 14.0006349,20.042681 14.0001861,20.0193545 L14,20 C14,19.9935938 14.0000602,19.9872016 14.0001802,19.980824 C14.0005993,19.9579802 14.0018656,19.9343349 14.0039664,19.9107499 C14.0057661,19.890153 14.0081122,19.8705042 14.0110193,19.8510388 C14.0136281,19.834051 14.0167022,19.8166247 14.0202401,19.7992742 C14.0246398,19.7772539 14.0298336,19.7555635 14.035721,19.7341604 C14.0400977,19.7185367 14.0447287,19.7031487 14.0497381,19.6878575 C14.0561225,19.6682023 14.0633157,19.6484208 14.071104,19.6289415 C14.0781964,19.6112044 14.085679,19.5939015 14.0936734,19.5767785 C14.1033766,19.5561086 14.1137939,19.5357061 14.1248758,19.515723 C14.1314988,19.5036056 14.1386069,19.4913869 14.1459955,19.4792912 C14.1617187,19.453725 14.1784901,19.4288693 14.1963135,19.4048407 C14.225313,19.3656744 14.2574992,19.3282873 14.2928932,19.2928932 L14.212786,19.3832499 C14.2376688,19.3515341 14.2644269,19.3213595 14.2928932,19.2928932 Z\" id=\"Combined-Shape-Copy\" fill=\"#BDBECB\" fill-rule=\"nonzero\" transform=\"translate(23.000000, 20.000000) scale(-1, 1) translate(-23.000000, -20.000000) \"></path>\n                              </g>\n                          </g>\n                      </g>\n                  </g>\n              </g>\n          </g>\n      </g>\n  </svg>\n  ", "\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg width=\"21px\" height=\"21px\" viewBox=\"0 0 21 21\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>rocket_icon@2x</title>\n      <g id=\"iPhone8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"On-Speedtest\" transform=\"translate(-261.000000, -352.000000)\" fill=\"#FF4900\" fill-rule=\"nonzero\">\n              <g id=\"gauge\" transform=\"translate(0.000000, 121.000000)\">\n                  <path d=\"M264.435244,246.996951 C263.678484,246.996951 263.039832,247.497813 262.829864,248.186771 L262.103725,250.588282 C262.094976,250.616715 262.088415,250.65171 262.088415,250.686705 C262.088415,250.872614 262.237142,251.021341 262.423051,251.021341 C262.455859,251.021341 262.488666,251.01478 262.521474,251.006031 L264.922982,250.275517 C265.611939,250.067736 266.112805,249.426896 266.112805,248.670135 C266.114987,247.74715 265.362602,246.996951 264.435244,246.996951 Z M280.762867,231.402439 C277.366952,231.402439 274.088067,231.550289 271.332736,233.345022 C269.879104,234.291671 268.67185,235.618213 267.698655,237.098764 C265.341636,237.242507 263.146815,238.437627 261.760937,240.380209 C261.572047,240.643053 261.533037,240.99009 261.656227,241.289896 C261.779416,241.591757 262.050432,241.807371 262.370724,241.858708 C263.218676,242.00245 264.15902,242.382342 265.107576,242.94294 C264.937165,243.571301 264.79755,244.181182 264.696946,244.7541 C264.643564,245.05596 264.742115,245.368088 264.959749,245.583702 L267.522084,248.144379 C267.700708,248.325084 267.940927,248.421597 268.189359,248.421597 C268.242741,248.421597 268.296123,248.41749 268.351558,248.40517 C268.922334,248.306603 269.534174,248.16902 270.162439,247.996529 C270.722949,248.947286 271.104836,249.887775 271.246503,250.735858 C271.301939,251.058253 271.51752,251.327257 271.81728,251.452519 C271.93431,251.501802 272.057499,251.52439 272.180688,251.52439 C272.373684,251.52439 272.564628,251.462786 272.72888,251.349845 C274.671162,249.965807 275.866097,247.768594 276.007765,245.41121 C277.488088,244.437866 278.814425,243.230425 279.758875,241.776569 C281.555384,239.022866 281.707317,235.607945 281.707317,232.347035 C281.707317,231.825454 281.284368,231.402439 280.762867,231.402439 Z M263.094512,240.804842 C264.195038,239.634802 265.597188,238.821106 267.118902,238.445122 C266.542825,239.606744 266.059137,240.796424 265.65697,241.966463 C264.795571,241.472634 263.934172,241.077009 263.094512,240.804842 Z M272.303033,250.015244 C272.030648,249.17615 271.634708,248.318048 271.143293,247.454515 C272.317073,247.052619 273.502086,246.566542 274.664634,245.990854 C274.28835,247.514256 273.471197,248.915461 272.303033,250.015244 Z M278.451234,240.883771 C276.354909,244.102969 271.837045,246.232254 268.099259,246.996951 L266.112805,245.010497 C266.875304,241.272711 269.006787,236.754847 272.225986,234.658522 C274.456352,233.206038 277.249253,232.948941 280.198171,232.911585 C280.160815,235.860503 279.903718,238.653405 278.451234,240.883771 Z M275.165715,239.45122 C275.999976,239.45122 276.676829,238.775894 276.676829,237.941089 C276.676829,237.108253 276.001944,236.432927 275.165715,236.432927 C274.333422,236.432927 273.658537,237.108253 273.658537,237.941089 C273.658537,238.775894 274.333422,239.45122 275.165715,239.45122 Z\" id=\"rocket_icon\"></path>\n              </g>\n          </g>\n      </g>\n  </svg>\n  ", "\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg width=\"22px\" height=\"22px\" viewBox=\"0 0 22 22\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>server_icn@2x</title>\n      <g id=\"iPhone8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"Splash-new\" transform=\"translate(-17.000000, -454.000000)\">\n              <g id=\"icons-copy\" transform=\"translate(17.000000, 12.000000)\">\n                  <g id=\"server_icn\" transform=\"translate(0.000000, 442.000000)\">\n                      <rect id=\"Rectangle-2\" stroke=\"#1AFFFC\" stroke-width=\"2\" x=\"1\" y=\"1\" width=\"20\" height=\"8\" rx=\"4\"></rect>\n                      <rect id=\"Rectangle-2-Copy\" stroke=\"#1AFFFC\" stroke-width=\"2\" x=\"1\" y=\"13\" width=\"20\" height=\"8\" rx=\"4\"></rect>\n                      <circle id=\"Oval\" fill=\"#1AFFFC\" cx=\"5\" cy=\"5\" r=\"1\"></circle>\n                      <circle id=\"Oval-Copy\" fill=\"#1AFFFC\" cx=\"5\" cy=\"17\" r=\"1\"></circle>\n                      <rect id=\"Rectangle\" fill=\"#1AFFFC\" x=\"12\" y=\"4\" width=\"6\" height=\"2\"></rect>\n                  </g>\n              </g>\n          </g>\n      </g>\n  </svg>\n  ", "\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg width=\"23px\" height=\"22px\" viewBox=\"0 0 23 22\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>Shape Copy 6@2x</title>\n      <g id=\"iPhone8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"Splash-new\" transform=\"translate(-284.000000, -496.000000)\" fill=\"#F3F600\" fill-rule=\"nonzero\">\n              <g id=\"icons-copy\" transform=\"translate(17.000000, 12.000000)\">\n                  <path d=\"M277.500416,484.647308 L275.422082,491.615385 L267.845263,491.615385 C267.482414,491.615968 267.160286,491.847607 267.044394,492.191281 C266.928502,492.534956 267.044622,492.914232 267.333087,493.134231 L273.474967,497.915 L271.3924,504.815385 C271.3066,505.0918 271.356872,505.392499 271.527924,505.626015 C271.698976,505.859531 271.970586,505.998259 272.260136,506 C272.455,505.99912 272.644067,505.933649 272.797709,505.813846 L278.346988,501.608462 L283.892034,505.813846 C284.04583,505.933365 284.234797,505.998802 284.429607,506 C284.719488,505.996871 284.990879,505.857144 285.161735,505.623061 C285.332592,505.388979 285.38286,505.088015 285.297343,504.811154 L283.214776,497.915 L289.356656,493.134231 C289.641523,492.913283 289.755108,492.536233 289.639654,492.194808 C289.524199,491.853383 289.205045,491.622522 288.84448,491.619615 L281.284592,491.619615 L279.210491,484.651538 C279.103379,484.27184 278.758597,484.008212 278.363919,484.004231 C277.952311,484.003981 277.607528,484.26761 277.500416,484.647308 Z\" id=\"Shape-Copy-6\"></path>\n              </g>\n          </g>\n      </g>\n  </svg>\n  ", "\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg width=\"41px\" height=\"40px\" viewBox=\"0 0 41 40\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>up-icn@2x</title>\n      <g id=\"Website\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"#2.On-Speedtest\" transform=\"translate(-857.000000, -205.000000)\">\n              <g id=\"Content\" transform=\"translate(106.000000, 95.000000)\">\n                  <g id=\"speedtest\" transform=\"translate(180.000000, 110.000000)\">\n                      <g id=\"down-up\">\n                          <g id=\"upload\" transform=\"translate(571.000000, 0.000000)\">\n                              <g id=\"up-icn\">\n                                  <path d=\"M19.2088745,12.0699764 L19.2088745,28.1683221 C19.2088745,28.7240015 19.7474464,29.1744687 20.4118084,29.1744687 C21.0761705,29.1744687 21.6147423,28.7240015 21.6147423,28.1683221 L21.6147423,12.0699764 C21.6147423,11.514297 21.0761705,11.0638298 20.4118084,11.0638298 C19.7474464,11.0638298 19.2088745,11.514297 19.2088745,12.0699764 Z M14.0448078,19.9623805 C13.5750328,19.4955978 12.8133772,19.4955978 12.3436023,19.9623805 C11.8738274,20.4291632 11.8738274,21.1859675 12.3436023,21.6527502 L19.5612057,28.8243816 C20.0309806,29.2911644 20.7926362,29.2911644 21.2624112,28.8243816 L28.4800146,21.6527502 C28.9497895,21.1859675 28.9497895,20.4291632 28.4800146,19.9623805 C28.0102396,19.4955978 27.248584,19.4955978 26.7788091,19.9623805 L20.4118084,26.288827 L14.0448078,19.9623805 Z\" id=\"Combined-Shape\" fill=\"#BF71FF\" fill-rule=\"nonzero\" transform=\"translate(20.411808, 20.119149) scale(1, -1) translate(-20.411808, -20.119149) \"></path>\n                                  <ellipse id=\"Oval-4\" stroke=\"#BF71FF\" stroke-width=\"3\" cx=\"20.1282051\" cy=\"20\" rx=\"18.6282051\" ry=\"18.5\"></ellipse>\n                              </g>\n                          </g>\n                      </g>\n                  </g>\n              </g>\n          </g>\n      </g>\n  </svg>\n  ", "\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg width=\"18px\" height=\"20px\" viewBox=\"0 0 18 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>user_icn@2x</title>\n      <defs>\n          <path d=\"M13,12 C15.7614237,12 18,14.2385763 18,17 L18,17 L18,19 C18,19.5522847 17.5522847,20 17,20 C16.4477153,20 16,19.5522847 16,19 L16,19 L16,17 C16,15.3431458 14.6568542,14 13,14 L13,14 L5,14 C3.34314575,14 2,15.3431458 2,17 L2,17 L2,19 C2,19.5522847 1.55228475,20 1,20 C0.44771525,20 0,19.5522847 0,19 L0,19 L0,17 C0,14.2385763 2.23857625,12 5,12 L5,12 Z M9,0 C11.7614237,0 14,2.23857625 14,5 C14,7.76142375 11.7614237,10 9,10 C6.23857625,10 4,7.76142375 4,5 C4,2.23857625 6.23857625,0 9,0 Z M9,2 C7.34314575,2 6,3.34314575 6,5 C6,6.65685425 7.34314575,8 9,8 C10.6568542,8 12,6.65685425 12,5 C12,3.34314575 10.6568542,2 9,2 Z\" id=\"path-1\"></path>\n      </defs>\n      <g id=\"iPhone8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"Splash-new\" transform=\"translate(-156.000000, -445.000000)\">\n              <g id=\"icons-copy\" transform=\"translate(17.000000, 12.000000)\">\n                  <g id=\"user_icn\" transform=\"translate(139.000000, 433.000000)\">\n                      <mask id=\"mask-2\" fill=\"white\">\n                          <use xlink:href=\"#path-1\"></use>\n                      </mask>\n                      <use id=\"Combined-Shape\" fill=\"#87FD40\" fill-rule=\"nonzero\" xlink:href=\"#path-1\"></use>\n                  </g>\n              </g>\n          </g>\n      </g>\n  </svg>\n  ", "\n  <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <svg width=\"29px\" height=\"22px\" viewBox=\"0 0 29 22\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>wifi_icn copy 2@2x</title>\n      <g id=\"iPhone8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n          <g id=\"Splash-new\" transform=\"translate(-24.000000, -578.000000)\" fill=\"#1AFFFC\">\n              <g id=\"icons-copy\" transform=\"translate(17.000000, 12.000000)\">\n                  <g id=\"wifi_icn-copy-2\" transform=\"translate(7.000000, 566.000000)\">\n                      <path d=\"M10.8755907,17.4514725 L14.49996,21.20082 L18.1243292,17.4514725 C16.1219152,15.3800098 12.8780047,15.3800098 10.8755907,17.4514725 Z\" id=\"Path\"></path>\n                      <path d=\"M23.5608831,11.8247998 L19.9365138,15.5741473 C16.9378589,12.4720905 12.0570149,12.474742 9.0609231,15.5767159 L5.43655386,11.8221484 C10.4350596,6.65915186 18.5648603,6.65650039 23.5608831,11.8247998 Z\" id=\"Path\"></path>\n                      <path d=\"M0,6.20077859 L3.62436924,9.95012608 C9.621599,3.74866391 19.378401,3.74866391 25.3756308,9.95012608 L29,6.20077859 C21.0078053,-2.0669262 7.99716072,-2.0669262 0,6.20077859 Z\" id=\"Path\"></path>\n                  </g>\n              </g>\n          </g>\n      </g>\n  </svg>\n  "];
/* harmony default export */ var SpeedTest_icons = (icons);
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__("xeH2");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("J4zp");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "react-star-ratings"
var external_react_star_ratings_ = __webpack_require__("gQQ1");
var external_react_star_ratings_default = /*#__PURE__*/__webpack_require__.n(external_react_star_ratings_);

// EXTERNAL MODULE: ./components/ServerModal/index.js
var ServerModal = __webpack_require__("7UAW");

// CONCATENATED MODULE: ./components/SpeedTest/StepOne.js






function StepOne() {
  var _useState = Object(external_react_["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      rating = _useState2[0],
      setRating = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(''),
      _useState4 = slicedToArray_default()(_useState3, 2),
      ratingText = _useState4[0],
      setRatingText = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(false),
      _useState6 = slicedToArray_default()(_useState5, 2),
      isModalShown = _useState6[0],
      setModalVisibility = _useState6[1];

  var router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(function () {
    document.querySelector('.star-ratings').addEventListener('mouseover', function () {
      var stars = document.querySelector('.star-ratings').getAttribute('title');
      document.querySelector('.tooltip-text').style = 'display: block;';

      if (stars == '1 Star') {
        setRatingText( /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
          id: "verybad"
        }));
      }

      if (stars == '2 Stars') {
        setRatingText( /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
          id: "bad"
        }));
      }

      if (stars == '3 Stars') {
        setRatingText( /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
          id: "nocomment"
        }));
      }

      if (stars == '4 Stars') {
        setRatingText( /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
          id: "nice"
        }));
      }

      if (stars == '5 Stars') {
        setRatingText( /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
          id: "verynice"
        }));
      }
    });
    document.querySelector('.star-ratings').addEventListener('mouseleave', function () {
      document.querySelector('.tooltip-text').style = 'display: none;';
    });
  }, []);

  var handleRateChange = function handleRateChange(rating) {
    setRating(rating);
  };

  return /*#__PURE__*/external_react_default.a.createElement("div", null, isModalShown && /*#__PURE__*/external_react_default.a.createElement(ServerModal["a" /* default */], {
    handleClose: function handleClose() {
      return setModalVisibility(false);
    }
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "test-begin"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "button-container js-start-button"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "test-begin__button"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "test-begin__button__bg"
  }), /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "start"
  }))), /*#__PURE__*/external_react_default.a.createElement("svg", {
    width: "180",
    height: "180",
    className: "bar-container"
  }, /*#__PURE__*/external_react_default.a.createElement("defs", null, /*#__PURE__*/external_react_default.a.createElement("pattern", {
    id: "p1",
    width: "180",
    height: "180"
  }, /*#__PURE__*/external_react_default.a.createElement("image", {
    xlinkHref: "./assets/images/radial-bg.svg",
    width: "180",
    height: "180"
  }))), /*#__PURE__*/external_react_default.a.createElement("circle", {
    cx: "90",
    cy: "90",
    r: "85",
    className: "front",
    fill: "none",
    stroke: "url(#p1)"
  }), /*#__PURE__*/external_react_default.a.createElement("circle", {
    cx: "90",
    cy: "90",
    r: "85",
    className: "front",
    fill: "none",
    stroke: "url(#p1)"
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "speed-info"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "icon"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero"
  }, "Turkcell Superonline"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "label"
  }, "212.252.115.21"), /*#__PURE__*/external_react_default.a.createElement(external_react_star_ratings_default.a, {
    rating: rating,
    starDimension: "18px",
    starSpacing: "0px",
    starEmptyColor: "rgba(26, 255, 252, 0.5)",
    starRatedColor: "#1afffc",
    starHoverColor: "#1afffc",
    changeRating: function changeRating(newRating, name) {
      return handleRateChange(newRating);
    }
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "tooltip-text"
  }, ratingText)), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "icon"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero"
  }, "Radore DC"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "label"
  }, "\u0130stanbul"), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "#",
    onClick: function onClick() {
      return setModalVisibility(true);
    }
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "changeServer"
  })))), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "#",
    className: "live-map-toggle",
    onClick: function onClick() {
      return router.push('/live');
    }
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "icon"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "liveMapText"
  })));
}
// EXTERNAL MODULE: external "react-minimal-pie-chart"
var external_react_minimal_pie_chart_ = __webpack_require__("W19a");

// CONCATENATED MODULE: ./components/SpeedTest/StepTwo.js



function StepTwo() {
  var dataDownload = [{
    title: 'Filled',
    value: 70,
    color: '#1afffc'
  }, {
    title: 'Empty',
    value: 30,
    color: 'rgba(26, 255, 252, 0.3)'
  }];
  var dataUpload = [{
    title: 'Filled',
    value: 50,
    color: '#bf71ff'
  }, {
    title: 'Empty',
    value: 50,
    color: 'rgba(191, 113, 255, 0.3)'
  }];
  return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "speed-test-infos"
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "info-item"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bar"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "icon"
  })), /*#__PURE__*/external_react_default.a.createElement("strong", null, "PING"), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("strong", null, "4"), "ms"))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "download"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "info-item"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bar"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_minimal_pie_chart_["PieChart"], {
    data: dataDownload,
    lineWidth: 15,
    startAngle: -90,
    animate: true,
    animationDuration: 500,
    animationEasing: "ease-out"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "chart-icon"
  })), /*#__PURE__*/external_react_default.a.createElement("strong", null, /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "download"
  })), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("strong", null, "10,52"), "Mbps"))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "upload"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "info-item"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bar"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_minimal_pie_chart_["PieChart"], {
    data: dataUpload,
    lineWidth: 15,
    startAngle: -90,
    animate: true,
    animationDuration: 500,
    animationEasing: "ease-out"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "chart-icon"
  })), /*#__PURE__*/external_react_default.a.createElement("strong", null, /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "upload"
  })), /*#__PURE__*/external_react_default.a.createElement("p", null, /*#__PURE__*/external_react_default.a.createElement("strong", null, "3,52"), "Mbps")))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "gauge-container"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "gauge gauge-active  js-gauge"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "mbps js-mpbs"
  }, "0"), /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./assets/images/gauge01.svg",
    alt: "",
    className: "part01"
  }), /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./assets/images/gauge02.svg",
    alt: "",
    className: "part02"
  }), /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./assets/images/gauge03.svg",
    alt: "",
    className: "part03"
  }), /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./assets/images/gauge04.svg",
    alt: "",
    className: "part04"
  }), /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./assets/images/gauge05.svg",
    alt: "",
    className: "part05"
  }), /*#__PURE__*/external_react_default.a.createElement("svg", {
    width: "358",
    height: "380",
    viewBox: "0 0 723 758",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/external_react_default.a.createElement("g", {
    id: "Gauge",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/external_react_default.a.createElement("g", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "Mbps-Txt",
    transform: "translate(126.000000, 136.000000)"
  }, /*#__PURE__*/external_react_default.a.createElement("text", {
    id: "0m",
    fontFamily: "Roboto-Medium, Roboto",
    fontSize: "30",
    fontWeight: "400",
    fill: "#FFFFFF"
  }, /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "32",
    y: "371"
  }, "0"), /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "49.0507812",
    y: "371",
    fontFamily: "Roboto-Light, Roboto",
    fontSize: "22",
    fontWeight: "300"
  }, "m")), /*#__PURE__*/external_react_default.a.createElement("text", {
    id: "1m",
    fontFamily: "Roboto-Medium, Roboto",
    fontSize: "30",
    fontWeight: "400",
    fill: "#FFFFFF"
  }, /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "0",
    y: "249"
  }, "1"), /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "17.0507812",
    y: "249",
    fontFamily: "Roboto-Light, Roboto",
    fontSize: "22",
    fontWeight: "300"
  }, "m")), /*#__PURE__*/external_react_default.a.createElement("text", {
    id: "75m",
    fontFamily: "Roboto-Medium, Roboto",
    fontSize: "30",
    fontWeight: "400",
    fill: "#FFFFFF"
  }, /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "418",
    y: "250"
  }, "75"), /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "452.101562",
    y: "250",
    fontFamily: "Roboto-Light, Roboto",
    fontSize: "22",
    fontWeight: "300"
  }, "m")), /*#__PURE__*/external_react_default.a.createElement("text", {
    id: "5m",
    fontFamily: "Roboto-Medium, Roboto",
    fontSize: "30",
    fontWeight: "400",
    fill: "#FFFFFF"
  }, /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "32",
    y: "136"
  }, "5"), /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "49.0507812",
    y: "136",
    fontFamily: "Roboto-Light, Roboto",
    fontSize: "22",
    fontWeight: "300"
  }, "m")), /*#__PURE__*/external_react_default.a.createElement("text", {
    id: "50m",
    fontFamily: "Roboto-Medium, Roboto",
    fontSize: "30",
    fontWeight: "400",
    fill: "#FFFFFF"
  }, /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "389",
    y: "136"
  }, "50"), /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "423.101562",
    y: "136",
    fontFamily: "Roboto-Light, Roboto",
    fontSize: "22",
    fontWeight: "300"
  }, "m")), /*#__PURE__*/external_react_default.a.createElement("text", {
    id: "10m",
    fontFamily: "Roboto-Medium, Roboto",
    fontSize: "30",
    fontWeight: "400",
    fill: "#FFFFFF"
  }, /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "109",
    y: "62"
  }, "10"), /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "143.101562",
    y: "62",
    fontFamily: "Roboto-Light, Roboto",
    fontSize: "22",
    fontWeight: "300"
  }, "m")), /*#__PURE__*/external_react_default.a.createElement("text", {
    id: "30m",
    fontFamily: "Roboto-Medium, Roboto",
    fontSize: "30",
    fontWeight: "400",
    fill: "#FFFFFF"
  }, /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "322",
    y: "62"
  }, "30"), /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "356.101562",
    y: "62",
    fontFamily: "Roboto-Light, Roboto",
    fontSize: "22",
    fontWeight: "300"
  }, "m")), /*#__PURE__*/external_react_default.a.createElement("text", {
    id: "20m",
    fontFamily: "Roboto-Medium, Roboto",
    fontSize: "30",
    fontWeight: "400",
    fill: "#FFFFFF"
  }, /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "210",
    y: "28"
  }, "20"), /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "244.101562",
    y: "28",
    fontFamily: "Roboto-Light, Roboto",
    fontSize: "22",
    fontWeight: "300"
  }, "m")), /*#__PURE__*/external_react_default.a.createElement("text", {
    id: "10,52",
    fontFamily: "Roboto-Regular, Roboto",
    fontSize: "71",
    fontWeight: "normal",
    fill: "#FFFFFF"
  }, /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "144.29541",
    y: "451"
  })), /*#__PURE__*/external_react_default.a.createElement("text", {
    id: "Mbps",
    fontFamily: "Roboto-Regular, Roboto",
    fontSize: "25",
    fontWeight: "normal",
    fill: "#9B9B9B"
  }, /*#__PURE__*/external_react_default.a.createElement("tspan", {
    x: "199.115723",
    y: "492"
  }, "Mbps"))), /*#__PURE__*/external_react_default.a.createElement("path", {
    xmlns: "http://www.w3.org/2000/svg",
    d: "M530.665212,500 C529.160866,500 527.891302,500.995652 527.473911,502.365217 L526.030435,507.13913 C526.013043,507.195652 526,507.265217 526,507.334783 C526,507.704348 526.295652,508 526.665217,508 C526.730434,508 526.795651,507.986957 526.860869,507.969565 L531.634776,506.517391 C533.00434,506.104348 534,504.830435 534,503.326087 C534.004338,501.491304 532.508688,500 530.665212,500 Z M563.122547,469 C556.37188,469 549.853854,469.293908 544.37659,472.861619 C541.486945,474.743443 539.087071,477.380447 537.152478,480.323604 C532.467009,480.609348 528.103973,482.985101 525.349015,486.846719 C524.973524,487.369221 524.895977,488.059088 525.140862,488.655067 C525.385748,489.255128 525.924495,489.683743 526.561196,489.785794 C528.246822,490.071538 530.116112,490.826717 532.001728,491.941116 C531.66297,493.190223 531.385433,494.402592 531.185444,495.541484 C531.079327,496.141545 531.275235,496.762017 531.707866,497.190632 L536.801476,502.280947 C537.15656,502.640167 537.634086,502.832024 538.127938,502.832024 C538.234054,502.832024 538.340171,502.82386 538.45037,502.799367 C539.585004,502.603429 540.801267,502.329932 542.050181,501.987039 C543.164409,503.877028 543.923553,505.746607 544.20517,507.432493 C544.315369,508.073375 544.743918,508.608123 545.339805,508.857128 C545.572446,508.955097 545.817331,509 546.062216,509 C546.445869,509 546.825441,508.877539 547.151955,508.653026 C551.012977,505.901725 553.388363,501.533932 553.669981,496.84774 C556.612684,494.912848 559.249281,492.512603 561.126733,489.622513 C564.697975,484.148485 565,477.360037 565,470.877743 C565,469.840902 564.159228,469 563.122547,469 Z M528,487.690837 C530.187711,485.36494 532.975017,483.74741 536,483 C534.854828,485.309163 533.893315,487.674104 533.093856,490 C531.381499,489.018327 529.669142,488.231873 528,487.690837 Z M546.305423,506 C545.763955,504.331984 544.976874,502.626181 544,500.909582 C546.333333,500.110661 548.688995,499.144399 551,498 C550.251994,501.02834 548.627592,503.813765 546.305423,506 Z M558.527301,487.847738 C554.360062,494.247114 545.379095,498.479875 537.94883,500 L534,496.05117 C535.515757,488.620905 539.752886,479.639938 546.152262,475.472699 C550.585959,472.585335 556.13791,472.074259 562,472 C561.925741,477.86209 561.414665,483.414041 558.527301,487.847738 Z M551.996089,485 C553.654498,485 555,483.657534 555,481.998043 C555,480.342466 553.658409,479 551.996089,479 C550.341591,479 549,480.342466 549,481.998043 C549,483.657534 550.341591,485 551.996089,485 Z",
    id: "rocket_icon",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }))), /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./assets/images/hand22x.png",
    alt: "",
    className: "part07 js-animate-arrow",
    style: {
      width: 358,
      marginTop: '5px'
    }
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "mobile-visible"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "mobile-info-bar"
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./assets/images/ping-small.svg",
    alt: ""
  }), "Ping ", /*#__PURE__*/external_react_default.a.createElement("span", null, "4"), "ms"), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./assets/images/jitter-small.svg",
    alt: ""
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "jitter"
  }), " ", /*#__PURE__*/external_react_default.a.createElement("span", null, "3,2"), "ms"), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "./assets/images/loss-icn-small.svg",
    alt: ""
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_intl_["FormattedMessage"], {
    id: "loss"
  }), " ", /*#__PURE__*/external_react_default.a.createElement("span", null, "5%")))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "speed-bar"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "user"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "server"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bar-area"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "bar-filled"
  }, /*#__PURE__*/external_react_default.a.createElement("canvas", {
    id: "c"
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "speed-info"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "icon"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero"
  }, "Turkcell Superonline"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "label"
  }, "212.252.115.21")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "icon"
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero"
  }, "Radore DC"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "label"
  }, "\u0130stanbul"))));
}
// CONCATENATED MODULE: ./components/SpeedTest/index.js






function SpeedArea() {
  var router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(function () {
    if (false) { var x, drops, columns, font_size, matrix, ctx, c, draw; }

    if (false) {}
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "screen-one js-screen-one"
  }, /*#__PURE__*/external_react_default.a.createElement(StepOne, null)), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "screen-two js-screen-two"
  }, /*#__PURE__*/external_react_default.a.createElement(StepTwo, null)));
}
// EXTERNAL MODULE: external "react-adsense"
var external_react_adsense_ = __webpack_require__("r+74");
var external_react_adsense_default = /*#__PURE__*/__webpack_require__.n(external_react_adsense_);

// CONCATENATED MODULE: ./components/SpeedArea/index.js




function SpeedArea_SpeedArea() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "top-ad",
    style: {
      paddingBottom: 20
    }
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "ad"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a, {
    minDeviceWidth: 767
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_adsense_default.a.Google, {
    client: "ca-pub-0902371233895064",
    slot: "8881201459",
    style: {
      display: 'block',
      height: 90
    },
    format: "auto",
    responsive: "true",
    layoutKey: "-gw-1+2a-9x+5c"
  })), /*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a, {
    maxDeviceWidth: 767
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_adsense_default.a.Google, {
    client: "ca-pub-0902371233895064",
    slot: "8881201459",
    style: {
      display: 'block',
      height: 120
    }
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "speed-area"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "left"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "left-ad"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a, {
    minDeviceWidth: 769
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "ad"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_adsense_default.a.Google, {
    client: "ca-pub-0902371233895064",
    slot: "9208504516",
    style: {
      display: 'block'
    },
    format: "auto",
    responsive: "true",
    layoutKey: "-gw-1+2a-9x+5c"
  })))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "speed-content"
  }, /*#__PURE__*/external_react_default.a.createElement(SpeedArea, null)))), /*#__PURE__*/external_react_default.a.createElement(external_react_responsive_default.a, {
    minDeviceWidth: 1240
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "right"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "ad"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_adsense_default.a.Google, {
    client: "ca-pub-0902371233895064",
    slot: "9243151771",
    style: {
      display: 'block'
    },
    format: "auto",
    responsive: "true",
    layoutKey: "-gw-1+2a-9x+5c"
  }))))));
}
// EXTERNAL MODULE: ./components/PopularLinks/index.js
var PopularLinks = __webpack_require__("nBxG");

// CONCATENATED MODULE: ./pages/index.js






function Home() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "page"
  }, /*#__PURE__*/external_react_default.a.createElement(head_default.a, null, /*#__PURE__*/external_react_default.a.createElement("title", null, "H\u0131zTesti App"), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:title",
    content: "My page title",
    key: "title"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:description",
    content: "My page description",
    key: "description"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), /*#__PURE__*/external_react_default.a.createElement("script", {
    async: true,
    src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  })), /*#__PURE__*/external_react_default.a.createElement(Header["a" /* default */], {
    profile: true
  }), /*#__PURE__*/external_react_default.a.createElement(SpeedArea_SpeedArea, null), /*#__PURE__*/external_react_default.a.createElement(PopularLinks["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(Footer["a" /* default */], null));
}

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "U4Wc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ConfirmModal = function ConfirmModal(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "confirm-modal-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "backdrop"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "confirm-modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero"
  }, props.hero), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "desc"
  }, props.desc)), props.children));
};

/* harmony default export */ __webpack_exports__["a"] = (ConfirmModal);

/***/ }),

/***/ "Uau6":
/***/ (function(module, exports) {

module.exports = require("react-swipeable");

/***/ }),

/***/ "W19a":
/***/ (function(module, exports) {

module.exports = require("react-minimal-pie-chart");

/***/ }),

/***/ "WkPL":
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZhPi":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("WkPL");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;

  const cleanup = _react.default.useRef();

  const setRef = _react.default.useCallback(el => {
    // cleanup previous event handlers
    if (cleanup.current) {
      cleanup.current();
      cleanup.current = undefined;
    }

    if (p && IntersectionObserver && el && el.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        cleanup.current = listenToIntersections(el, () => {
          prefetch(router, href, as, {
            locale: typeof locale !== 'undefined' ? locale : router && router.locale
          });
        });
      }
    }

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [p, childRef, href, as, router, locale]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (false) {}

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, options.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change(method, destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, options.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, typeof options.locale !== 'undefined' ? options.locale : this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gQQ1":
/***/ (function(module, exports) {

module.exports = require("react-star-ratings");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "m0LI":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "mTXt":
/***/ (function(module, exports) {

module.exports = require("@moxy/next-intl");

/***/ }),

/***/ "nBxG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);


function PopularLinks() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "popular-links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "popularServersHero"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    rel: "noopener"
  }, "Superonline")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    rel: "noopener"
  }, "T\xFCrksat Kablo")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    rel: "noopener"
  }, "Vodafone Net")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    rel: "noopener"
  }, "T\xFCrk Telekom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    rel: "noopener"
  }, "D-Smart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    rel: "noopener"
  }, "T\xFCrkNet")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    rel: "noopener"
  }, "millenicom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    rel: "noopener"
  }, "Doruknet")))));
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "r+74":
/***/ (function(module, exports) {

module.exports = require("react-adsense");

/***/ }),

/***/ "wTVA":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wkBT":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "xeH2":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });