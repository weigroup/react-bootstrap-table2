(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2Toolkit"] = factory(require("react"));
	else
		root["ReactBootstrapTable2Toolkit"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(6)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _statelessOp = __webpack_require__(15);

var _statelessOp2 = _interopRequireDefault(_statelessOp);

var _context = __webpack_require__(21);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-param-reassign: 0 */

var ToolkitContext = _react2.default.createContext();

var ToolkitProvider = function (_statelessDecorator) {
  _inherits(ToolkitProvider, _statelessDecorator);

  function ToolkitProvider(props) {
    _classCallCheck(this, ToolkitProvider);

    var _this = _possibleConstructorReturn(this, (ToolkitProvider.__proto__ || Object.getPrototypeOf(ToolkitProvider)).call(this, props));

    var state = {};
    _this._ = null;
    _this.onClear = _this.onClear.bind(_this);
    _this.onSearch = _this.onSearch.bind(_this);
    _this.onColumnToggle = _this.onColumnToggle.bind(_this);
    _this.setDependencyModules = _this.setDependencyModules.bind(_this);

    if (props.columnToggle) {
      state.columnToggle = props.columns.reduce(function (obj, column) {
        obj[column.dataField] = !column.hidden;
        return obj;
      }, {});
    }
    state.searchText = _typeof(props.search) === 'object' ? props.search.defaultSearch || '' : '';
    _this.state = state;
    return _this;
  }

  // eslint-disable-next-line camelcase


  _createClass(ToolkitProvider, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var columnToggle = this.state.columnToggle;
      if (nextProps.columnToggle) {
        columnToggle = nextProps.columns.reduce(function (obj, column) {
          obj[column.dataField] = !column.hidden;
          return obj;
        }, {});
      } else {
        columnToggle = null;
      }
      this.setState(_extends({}, this.state, {
        columnToggle: columnToggle
      }));
    }
  }, {
    key: 'onSearch',
    value: function onSearch(searchText) {
      if (searchText !== this.state.searchText) {
        this.setState({ searchText: searchText });
      }
    }
  }, {
    key: 'onClear',
    value: function onClear() {
      this.setState({ searchText: '' });
    }
  }, {
    key: 'onColumnToggle',
    value: function onColumnToggle(dataField) {
      var columnToggle = this.state.columnToggle;

      columnToggle[dataField] = !columnToggle[dataField];
      this.setState(_extends({}, this.state, {
        columnToggle: columnToggle
      }));
    }
    /**
     * 
     * @param {*} _ 
     * this function will be called only one time when table render
     * react-bootstrap-table-next/src/context/index.js will call this cb for passing the _ module
     * Please consider to extract a common module to handle _ module.
     * this is just a quick fix
     */

  }, {
    key: 'setDependencyModules',
    value: function setDependencyModules(_) {
      this._ = _;
    }
  }, {
    key: 'render',
    value: function render() {
      var baseProps = {
        keyField: this.props.keyField,
        columns: this.props.columns,
        data: this.props.data,
        bootstrap4: this.props.bootstrap4,
        setDependencyModules: this.setDependencyModules,
        registerExposedAPI: this.registerExposedAPI
      };
      if (this.props.search) {
        baseProps.search = {
          searchContext: (0, _context2.default)(this.props.search),
          searchText: this.state.searchText
        };
      }
      if (this.props.columnToggle) {
        baseProps.columnToggle = {
          toggles: this.state.columnToggle
        };
      }
      return _react2.default.createElement(
        ToolkitContext.Provider,
        { value: {
            searchProps: {
              searchText: this.state.searchText,
              onSearch: this.onSearch,
              onClear: this.onClear
            },
            csvProps: {
              onExport: this.handleExportCSV
            },
            columnToggleProps: {
              columns: this.props.columns,
              toggles: this.state.columnToggle,
              onColumnToggle: this.onColumnToggle
            },
            baseProps: baseProps
          }
        },
        this.props.children
      );
    }
  }]);

  return ToolkitProvider;
}((0, _statelessOp2.default)(_react2.default.Component));

ToolkitProvider.propTypes = {
  keyField: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.array.isRequired,
  columns: _propTypes2.default.array.isRequired,
  children: _propTypes2.default.node.isRequired,
  bootstrap4: _propTypes2.default.bool,
  search: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    defaultSearch: _propTypes2.default.string,
    searchFormatted: _propTypes2.default.bool
  })]),
  exportCSV: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    fileName: _propTypes2.default.string,
    separator: _propTypes2.default.string,
    ignoreHeader: _propTypes2.default.bool,
    ignoreFooter: _propTypes2.default.bool,
    noAutoBOM: _propTypes2.default.bool,
    blobType: _propTypes2.default.string,
    exportAll: _propTypes2.default.bool,
    onlyExportFiltered: _propTypes2.default.bool,
    onlyExportSelection: _propTypes2.default.bool
  })])
};
ToolkitProvider.defaultProps = {
  search: false,
  exportCSV: false,
  bootstrap4: false
};
exports.default = {
  Provider: ToolkitProvider,
  Consumer: ToolkitContext.Consumer
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnToggle = exports.CSVExport = exports.Search = exports.ToolkitContext = undefined;

var _search = __webpack_require__(4);

Object.defineProperty(exports, 'Search', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_search).default;
  }
});

var _csv = __webpack_require__(11);

Object.defineProperty(exports, 'CSVExport', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_csv).default;
  }
});

var _columnToggle = __webpack_require__(13);

Object.defineProperty(exports, 'ColumnToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_columnToggle).default;
  }
});

var _context = __webpack_require__(2);

var _context2 = _interopRequireDefault(_context);

var _provider = __webpack_require__(22);

var _provider2 = _interopRequireDefault(_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _provider2.default;
var ToolkitContext = exports.ToolkitContext = _context2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SearchBar = __webpack_require__(5);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _clearButton = __webpack_require__(10);

var _clearButton2 = _interopRequireDefault(_clearButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { SearchBar: _SearchBar2.default, ClearSearchButton: _clearButton2.default };

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _arguments = arguments; /* eslint camelcase: 0 */
/* eslint no-return-assign: 0 */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var handleDebounce = function handleDebounce(func, wait, immediate) {
  var timeout = void 0;

  return function () {
    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(undefined, _arguments);
      }
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait || 0);

    if (callNow) {
      func.appy(undefined, _arguments);
    }
  };
};

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.onChangeValue = function (e) {
      _this.setState({ value: e.target.value });
    };

    _this.onKeyup = function () {
      var _this$props = _this.props,
          delay = _this$props.delay,
          onSearch = _this$props.onSearch;

      var debounceCallback = handleDebounce(function () {
        onSearch(_this.input.value);
      }, delay);
      debounceCallback();
    };

    _this.state = {
      value: props.searchText
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState({ value: nextProps.searchText });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          style = _props.style,
          placeholder = _props.placeholder,
          tableId = _props.tableId,
          srText = _props.srText;


      return _react2.default.createElement(
        'label',
        {
          htmlFor: 'search-bar-' + tableId,
          className: 'search-label'
        },
        _react2.default.createElement(
          'span',
          { id: 'search-bar-' + tableId + '-label', className: 'sr-only' },
          srText
        ),
        _react2.default.createElement('input', {
          ref: function ref(n) {
            return _this2.input = n;
          },
          id: 'search-bar-' + tableId,
          type: 'text',
          style: style,
          'aria-labelledby': 'search-bar-' + tableId + '-label',
          onKeyUp: function onKeyUp() {
            return _this2.onKeyup();
          },
          onChange: this.onChangeValue,
          className: 'form-control ' + className,
          value: this.state.value,
          placeholder: placeholder || SearchBar.defaultProps.placeholder
        })
      );
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

SearchBar.propTypes = {
  onSearch: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  style: _propTypes2.default.object,
  delay: _propTypes2.default.number,
  searchText: _propTypes2.default.string,
  tableId: _propTypes2.default.string,
  srText: _propTypes2.default.string
};

SearchBar.defaultProps = {
  className: '',
  style: {},
  placeholder: 'Search',
  delay: 250,
  searchText: '',
  tableId: '0',
  srText: 'Search this table'
};

exports.default = SearchBar;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(7);
var invariant = __webpack_require__(8);
var ReactPropTypesSecret = __webpack_require__(9);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClearButton = function ClearButton(_ref) {
  var onClear = _ref.onClear,
      text = _ref.text,
      className = _ref.className;
  return _react2.default.createElement(
    'button',
    { className: 'btn btn-default ' + className, onClick: onClear },
    text
  );
};

ClearButton.propTypes = {
  onClear: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  text: _propTypes2.default.string
};

ClearButton.defaultProps = {
  text: 'Clear',
  className: ''
};

exports.default = ClearButton;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(12);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { ExportCSVButton: _button2.default };

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ExportCSVButton = function ExportCSVButton(props) {
  var onExport = props.onExport,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ['onExport', 'children', 'className']);

  return _react2.default.createElement(
    'button',
    _extends({
      type: 'button',
      className: 'react-bs-table-csv-btn btn btn-default ' + className,
      onClick: function onClick() {
        return onExport();
      }
    }, rest),
    children
  );
};

ExportCSVButton.propTypes = {
  children: _propTypes2.default.node.isRequired,
  onExport: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};
ExportCSVButton.defaultProps = {
  className: '',
  style: {}
};

exports.default = ExportCSVButton;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toggleList = __webpack_require__(14);

var _toggleList2 = _interopRequireDefault(_toggleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { ToggleList: _toggleList2.default };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleList = function ToggleList(_ref) {
  var columns = _ref.columns,
      onColumnToggle = _ref.onColumnToggle,
      toggles = _ref.toggles,
      contextual = _ref.contextual,
      className = _ref.className,
      btnClassName = _ref.btnClassName;
  return _react2.default.createElement(
    'div',
    { className: 'btn-group btn-group-toggle ' + className, 'data-toggle': 'buttons' },
    columns.map(function (column) {
      return _extends({}, column, {
        toggle: toggles[column.dataField]
      });
    }).map(function (column) {
      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          key: column.dataField,
          className: btnClassName + ' btn btn-' + contextual + ' ' + (column.toggle ? 'active' : ''),
          'data-toggle': 'button',
          'aria-pressed': column.toggle ? 'true' : 'false',
          onClick: function onClick() {
            return onColumnToggle(column.dataField);
          }
        },
        column.text
      );
    })
  );
};

ToggleList.propTypes = {
  columns: _propTypes2.default.array.isRequired,
  toggles: _propTypes2.default.object.isRequired,
  onColumnToggle: _propTypes2.default.func.isRequired,
  btnClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  contextual: _propTypes2.default.string
};

ToggleList.defaultProps = {
  btnClassName: '',
  className: '',
  contextual: 'primary'
};

exports.default = ToggleList;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _op = __webpack_require__(16);

var _op2 = _interopRequireDefault(_op);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Base) {
  return function (_Operation$csvOperati) {
    _inherits(StatelessOperation, _Operation$csvOperati);

    function StatelessOperation() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, StatelessOperation);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatelessOperation.__proto__ || Object.getPrototypeOf(StatelessOperation)).call.apply(_ref, [this].concat(args))), _this), _this.registerExposedAPI = function (tableExposedAPIEmitter) {
        _this.tableExposedAPIEmitter = tableExposedAPIEmitter;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return StatelessOperation;
  }(_op2.default.csvOperation(Base));
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _csv = __webpack_require__(17);

var _csv2 = _interopRequireDefault(_csv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  csvOperation: _csv2.default
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _exporter = __webpack_require__(18);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var csvDefaultOptions = {
  fileName: 'spreadsheet.csv',
  separator: ',',
  ignoreHeader: false,
  ignoreFooter: true,
  noAutoBOM: true,
  blobType: 'text/plain;charset=utf-8',
  exportAll: true,
  onlyExportSelection: false
};

exports.default = function (Base) {
  return function (_Base) {
    _inherits(CSVOperation, _Base);

    function CSVOperation() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, CSVOperation);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CSVOperation.__proto__ || Object.getPrototypeOf(CSVOperation)).call.apply(_ref, [this].concat(args))), _this), _this.handleExportCSV = function (source) {
        var _this$props = _this.props,
            columns = _this$props.columns,
            exportCSV = _this$props.exportCSV,
            keyField = _this$props.keyField;

        var meta = (0, _exporter.getMetaInfo)(columns);
        var options = exportCSV === true ? csvDefaultOptions : _extends({}, csvDefaultOptions, exportCSV);

        // get data for csv export
        var data = void 0;
        if (typeof source !== 'undefined') {
          data = source;
        } else if (options.exportAll) {
          data = _this.props.data;
        } else if (options.onlyExportFiltered) {
          var payload = {};
          _this.tableExposedAPIEmitter.emit('get.filtered.rows', payload);
          data = payload.result;
        } else {
          var _payload = {};
          _this.tableExposedAPIEmitter.emit('get.table.data', _payload);
          data = _payload.result;
        }

        // filter data by row selection
        if (options.onlyExportSelection) {
          var _payload2 = {};
          _this.tableExposedAPIEmitter.emit('get.selected.rows', _payload2);
          var selections = _payload2.result;
          data = data.filter(function (row) {
            return !!selections.find(function (sel) {
              return row[keyField] === sel;
            });
          });
        }

        var content = (0, _exporter.transform)(data, meta, columns, _this._, options);
        (0, _exporter.save)(content, options);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return CSVOperation;
  }(Base);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.save = exports.transform = exports.getMetaInfo = undefined;

var _fileSaver = __webpack_require__(19);

var _fileSaver2 = _interopRequireDefault(_fileSaver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMetaInfo = exports.getMetaInfo = function getMetaInfo(columns) {
  return columns.map(function (column) {
    return {
      field: column.dataField,
      type: column.csvType || String,
      formatter: column.csvFormatter,
      formatExtraData: column.formatExtraData,
      header: column.csvText || column.text,
      export: column.csvExport === false ? false : true,
      row: Number(column.row) || 0,
      rowSpan: Number(column.rowSpan) || 1,
      colSpan: Number(column.colSpan) || 1,
      footer: column.footer,
      footerFormatter: column.footerFormatter
    };
  }).filter(function (_) {
    return _.export;
  });
}; /* eslint no-unneeded-ternary: 0 */
var transform = exports.transform = function transform(data, meta, columns, _, _ref) {
  var separator = _ref.separator,
      ignoreHeader = _ref.ignoreHeader,
      ignoreFooter = _ref.ignoreFooter;

  var visibleColumns = meta.filter(function (m) {
    return m.export;
  });
  var content = '';
  // extract csv header
  if (!ignoreHeader) {
    content += visibleColumns.map(function (m) {
      return '"' + m.header + '"';
    }).join(separator);
    content += '\n';
  }
  // extract csv body
  if (data.length === 0) return content;
  content += data.map(function (row, rowIndex) {
    return visibleColumns.map(function (m) {
      var cellContent = _.get(row, m.field);
      if (m.formatter) {
        cellContent = m.formatter(cellContent, row, rowIndex, m.formatExtraData);
      }
      if (m.type === String) {
        return '"' + ('' + cellContent).replace(/"/g, '""') + '"';
      }
      return cellContent;
    }).join(separator);
  }).join('\n');

  if (!ignoreFooter) {
    content += '\n';
    content += visibleColumns.map(function (m, i) {
      if (typeof m.footer === 'function') {
        var columnData = _.pluck(data, columns[i].dataField);
        return '"' + m.footer(columnData, columns[i], i) + '"';
      } else if (m.footerFormatter) {
        return '"' + m.footerFormatter(columns[i], i) + '"';
      }
      return '"' + m.footer + '"';
    }).join(separator);
  }
  return content;
};

var save = exports.save = function save(content, _ref2) {
  var noAutoBOM = _ref2.noAutoBOM,
      fileName = _ref2.fileName,
      blobType = _ref2.blobType;

  _fileSaver2.default.saveAs(new Blob([content], { type: blobType }), fileName, noAutoBOM);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */
/* eslint no-continue: 0 */
/* eslint no-lonely-if: 0 */
/* eslint class-methods-use-this: 0 */
/* eslint camelcase: 0 */


exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    searchFormatted: false,
    afterSearch: null,
    onColumnMatch: null
  };
  return function (_, isRemoteSearch, handleRemoteSearchChange) {
    var SearchContext = _react2.default.createContext();

    var SearchProvider = function (_React$Component) {
      _inherits(SearchProvider, _React$Component);

      function SearchProvider(props) {
        _classCallCheck(this, SearchProvider);

        var _this = _possibleConstructorReturn(this, (SearchProvider.__proto__ || Object.getPrototypeOf(SearchProvider)).call(this, props));

        var initialData = props.data;
        if (isRemoteSearch() && _this.props.searchText !== '') {
          handleRemoteSearchChange(_this.props.searchText);
        } else {
          initialData = _this.search(props);
          _this.triggerListener(initialData, true);
        }
        _this.state = { data: initialData };
        return _this;
      }

      _createClass(SearchProvider, [{
        key: 'getSearched',
        value: function getSearched() {
          return this.state.data;
        }
      }, {
        key: 'triggerListener',
        value: function triggerListener(result, skipInit) {
          if (options.afterSearch && !skipInit) {
            options.afterSearch(result);
          }
          if (this.props.dataChangeListener) {
            this.props.dataChangeListener.emit('filterChanged', result.length);
          }
        }
      }, {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
          if (nextProps.searchText !== this.props.searchText) {
            if (isRemoteSearch()) {
              handleRemoteSearchChange(nextProps.searchText);
            } else {
              var result = this.search(nextProps);
              this.triggerListener(result);
              this.setState({
                data: result
              });
            }
          } else {
            if (isRemoteSearch()) {
              this.setState({ data: nextProps.data });
            } else if (!_.isEqual(nextProps.data, this.props.data)) {
              var _result = this.search(nextProps);
              this.triggerListener(_result);
              this.setState({
                data: _result
              });
            }
          }
        }
      }, {
        key: 'search',
        value: function search(props) {
          var data = props.data,
              columns = props.columns;

          var searchText = props.searchText.toLowerCase();
          return data.filter(function (row, ridx) {
            for (var cidx = 0; cidx < columns.length; cidx += 1) {
              var column = columns[cidx];
              if (column.searchable === false) continue;
              var targetValue = _.get(row, column.dataField);
              if (column.formatter && options.searchFormatted) {
                targetValue = column.formatter(targetValue, row, ridx, column.formatExtraData);
              } else if (column.filterValue) {
                targetValue = column.filterValue(targetValue, row);
              }
              if (options.onColumnMatch) {
                if (options.onColumnMatch({
                  searchText: searchText,
                  value: targetValue,
                  column: column,
                  row: row
                })) {
                  return true;
                }
              } else {
                if (targetValue !== null && typeof targetValue !== 'undefined') {
                  targetValue = targetValue.toString().toLowerCase();
                  if (targetValue.indexOf(searchText) > -1) {
                    return true;
                  }
                }
              }
            }
            return false;
          });
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            SearchContext.Provider,
            { value: { data: this.state.data } },
            this.props.children
          );
        }
      }]);

      return SearchProvider;
    }(_react2.default.Component);

    SearchProvider.propTypes = {
      data: _propTypes2.default.array.isRequired,
      columns: _propTypes2.default.array.isRequired,
      searchText: _propTypes2.default.string,
      dataChangeListener: _propTypes2.default.object
    };


    return {
      Provider: SearchProvider,
      Consumer: SearchContext.Consumer
    };
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(2);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toolkitprovider = function Toolkitprovider(props) {
  return _react2.default.createElement(
    _context2.default.Provider,
    props,
    _react2.default.createElement(
      _context2.default.Consumer,
      null,
      function (tookKitProps) {
        return props.children(tookKitProps);
      }
    )
  );
};

Toolkitprovider.propTypes = {
  children: _propTypes2.default.func.isRequired
};

exports.default = Toolkitprovider;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NjkzMjA5YTQwZjkyMGQ4ZjYwZiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9zZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9zZWFyY2gvU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvc3JjL3NlYXJjaC9jbGVhci1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9jc3YvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9jc3YvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zcmMvY29sdW1uLXRvZ2dsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvc3JjL2NvbHVtbi10b2dnbGUvdG9nZ2xlLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3N0YXRlbGVzc09wLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zcmMvb3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9vcC9jc3YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9jc3YvZXhwb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL2Rpc3QvRmlsZVNhdmVyLm1pbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zcmMvc2VhcmNoL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3Byb3ZpZGVyLmpzIl0sIm5hbWVzIjpbIlRvb2xraXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlRvb2xraXRQcm92aWRlciIsInByb3BzIiwic3RhdGUiLCJfIiwib25DbGVhciIsImJpbmQiLCJvblNlYXJjaCIsIm9uQ29sdW1uVG9nZ2xlIiwic2V0RGVwZW5kZW5jeU1vZHVsZXMiLCJjb2x1bW5Ub2dnbGUiLCJjb2x1bW5zIiwicmVkdWNlIiwib2JqIiwiY29sdW1uIiwiZGF0YUZpZWxkIiwiaGlkZGVuIiwic2VhcmNoVGV4dCIsInNlYXJjaCIsImRlZmF1bHRTZWFyY2giLCJuZXh0UHJvcHMiLCJzZXRTdGF0ZSIsImJhc2VQcm9wcyIsImtleUZpZWxkIiwiZGF0YSIsImJvb3RzdHJhcDQiLCJyZWdpc3RlckV4cG9zZWRBUEkiLCJzZWFyY2hDb250ZXh0IiwidG9nZ2xlcyIsInNlYXJjaFByb3BzIiwiY3N2UHJvcHMiLCJvbkV4cG9ydCIsImhhbmRsZUV4cG9ydENTViIsImNvbHVtblRvZ2dsZVByb3BzIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJub2RlIiwiYm9vbCIsIm9uZU9mVHlwZSIsInNoYXBlIiwic2VhcmNoRm9ybWF0dGVkIiwiZXhwb3J0Q1NWIiwiZmlsZU5hbWUiLCJzZXBhcmF0b3IiLCJpZ25vcmVIZWFkZXIiLCJpZ25vcmVGb290ZXIiLCJub0F1dG9CT00iLCJibG9iVHlwZSIsImV4cG9ydEFsbCIsIm9ubHlFeHBvcnRGaWx0ZXJlZCIsIm9ubHlFeHBvcnRTZWxlY3Rpb24iLCJkZWZhdWx0UHJvcHMiLCJQcm92aWRlciIsIkNvbnN1bWVyIiwiZGVmYXVsdCIsIlNlYXJjaEJhciIsIkNsZWFyU2VhcmNoQnV0dG9uIiwiaGFuZGxlRGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHB5Iiwib25DaGFuZ2VWYWx1ZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsIm9uS2V5dXAiLCJkZWxheSIsImRlYm91bmNlQ2FsbGJhY2siLCJpbnB1dCIsImNsYXNzTmFtZSIsInN0eWxlIiwicGxhY2Vob2xkZXIiLCJ0YWJsZUlkIiwic3JUZXh0IiwibiIsIm9iamVjdCIsIm51bWJlciIsIkNsZWFyQnV0dG9uIiwidGV4dCIsIkV4cG9ydENTVkJ1dHRvbiIsInJlc3QiLCJUb2dnbGVMaXN0IiwiY29udGV4dHVhbCIsImJ0bkNsYXNzTmFtZSIsIm1hcCIsInRvZ2dsZSIsInRhYmxlRXhwb3NlZEFQSUVtaXR0ZXIiLCJjc3ZPcGVyYXRpb24iLCJCYXNlIiwiY3N2RGVmYXVsdE9wdGlvbnMiLCJzb3VyY2UiLCJtZXRhIiwib3B0aW9ucyIsInBheWxvYWQiLCJlbWl0IiwicmVzdWx0Iiwic2VsZWN0aW9ucyIsImZpbHRlciIsImZpbmQiLCJyb3ciLCJzZWwiLCJjb250ZW50IiwiZ2V0TWV0YUluZm8iLCJmaWVsZCIsInR5cGUiLCJjc3ZUeXBlIiwiU3RyaW5nIiwiZm9ybWF0dGVyIiwiY3N2Rm9ybWF0dGVyIiwiZm9ybWF0RXh0cmFEYXRhIiwiaGVhZGVyIiwiY3N2VGV4dCIsImV4cG9ydCIsImNzdkV4cG9ydCIsIk51bWJlciIsInJvd1NwYW4iLCJjb2xTcGFuIiwiZm9vdGVyIiwiZm9vdGVyRm9ybWF0dGVyIiwidHJhbnNmb3JtIiwidmlzaWJsZUNvbHVtbnMiLCJtIiwiam9pbiIsImxlbmd0aCIsInJvd0luZGV4IiwiY2VsbENvbnRlbnQiLCJnZXQiLCJyZXBsYWNlIiwiaSIsImNvbHVtbkRhdGEiLCJwbHVjayIsInNhdmUiLCJzYXZlQXMiLCJCbG9iIiwiYWZ0ZXJTZWFyY2giLCJvbkNvbHVtbk1hdGNoIiwiaXNSZW1vdGVTZWFyY2giLCJoYW5kbGVSZW1vdGVTZWFyY2hDaGFuZ2UiLCJTZWFyY2hDb250ZXh0IiwiU2VhcmNoUHJvdmlkZXIiLCJpbml0aWFsRGF0YSIsInRyaWdnZXJMaXN0ZW5lciIsInNraXBJbml0IiwiZGF0YUNoYW5nZUxpc3RlbmVyIiwiaXNFcXVhbCIsInRvTG93ZXJDYXNlIiwicmlkeCIsImNpZHgiLCJzZWFyY2hhYmxlIiwidGFyZ2V0VmFsdWUiLCJmaWx0ZXJWYWx1ZSIsInRvU3RyaW5nIiwiaW5kZXhPZiIsIlRvb2xraXRwcm92aWRlciIsInRvb2tLaXRQcm9wcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSwrQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7OytlQU5BOztBQVFBLElBQU1BLGlCQUFpQixnQkFBTUMsYUFBTixFQUF2Qjs7SUFFTUMsZTs7O0FBb0NKLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0lBQ1hBLEtBRFc7O0FBRWpCLFFBQU1DLFFBQVEsRUFBZDtBQUNBLFVBQUtDLENBQUwsR0FBUyxJQUFUO0FBQ0EsVUFBS0MsT0FBTCxH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QkFBVTRCLElBQVYsQ0FBZXhCO0FBREMsQ0FBNUI7O2tCQUllOEgsZSIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvZGlzdC9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdEJvb3RzdHJhcFRhYmxlMlRvb2xraXRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RCb290c3RyYXBUYWJsZTJUb29sa2l0XCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDY5MzIwOWE0MGY5MjBkOGY2MGYiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogMCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdGF0ZWxlc3NEZWNvcmF0b3IgZnJvbSAnLi9zdGF0ZWxlc3NPcCc7XG5cbmltcG9ydCBjcmVhdGVTZWFyY2hDb250ZXh0IGZyb20gJy4vc3JjL3NlYXJjaC9jb250ZXh0JztcblxuY29uc3QgVG9vbGtpdENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmNsYXNzIFRvb2xraXRQcm92aWRlciBleHRlbmRzIHN0YXRlbGVzc0RlY29yYXRvcihSZWFjdC5Db21wb25lbnQpIHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBrZXlGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGJvb3RzdHJhcDQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlYXJjaDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGRlZmF1bHRTZWFyY2g6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHNlYXJjaEZvcm1hdHRlZDogUHJvcFR5cGVzLmJvb2xcbiAgICAgIH0pXG4gICAgXSksXG4gICAgZXhwb3J0Q1NWOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgZmlsZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHNlcGFyYXRvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaWdub3JlSGVhZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgaWdub3JlRm9vdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgbm9BdXRvQk9NOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgYmxvYlR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGV4cG9ydEFsbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG9ubHlFeHBvcnRGaWx0ZXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG9ubHlFeHBvcnRTZWxlY3Rpb246IFByb3BUeXBlcy5ib29sXG4gICAgICB9KVxuICAgIF0pXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNlYXJjaDogZmFsc2UsXG4gICAgZXhwb3J0Q1NWOiBmYWxzZSxcbiAgICBib290c3RyYXA0OiBmYWxzZVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc3RhdGUgPSB7fTtcbiAgICB0aGlzLl8gPSBudWxsO1xuICAgIHRoaXMub25DbGVhciA9IHRoaXMub25DbGVhci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TZWFyY2ggPSB0aGlzLm9uU2VhcmNoLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNvbHVtblRvZ2dsZSA9IHRoaXMub25Db2x1bW5Ub2dnbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldERlcGVuZGVuY3lNb2R1bGVzID0gdGhpcy5zZXREZXBlbmRlbmN5TW9kdWxlcy5iaW5kKHRoaXMpO1xuXG4gICAgaWYgKHByb3BzLmNvbHVtblRvZ2dsZSkge1xuICAgICAgc3RhdGUuY29sdW1uVG9nZ2xlID0gcHJvcHMuY29sdW1uc1xuICAgICAgICAucmVkdWNlKChvYmosIGNvbHVtbikgPT4ge1xuICAgICAgICAgIG9ialtjb2x1bW4uZGF0YUZpZWxkXSA9ICFjb2x1bW4uaGlkZGVuO1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgc3RhdGUuc2VhcmNoVGV4dCA9IHR5cGVvZiBwcm9wcy5zZWFyY2ggPT09ICdvYmplY3QnID8gKHByb3BzLnNlYXJjaC5kZWZhdWx0U2VhcmNoIHx8ICcnKSA6ICcnO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgbGV0IGNvbHVtblRvZ2dsZSA9IHRoaXMuc3RhdGUuY29sdW1uVG9nZ2xlO1xuICAgIGlmIChuZXh0UHJvcHMuY29sdW1uVG9nZ2xlKSB7XG4gICAgICBjb2x1bW5Ub2dnbGUgPSBuZXh0UHJvcHMuY29sdW1uc1xuICAgICAgICAucmVkdWNlKChvYmosIGNvbHVtbikgPT4ge1xuICAgICAgICAgIG9ialtjb2x1bW4uZGF0YUZpZWxkXSA9ICFjb2x1bW4uaGlkZGVuO1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sdW1uVG9nZ2xlID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgY29sdW1uVG9nZ2xlXG4gICAgfSk7XG4gIH1cblxuICBvblNlYXJjaChzZWFyY2hUZXh0KSB7XG4gICAgaWYgKHNlYXJjaFRleHQgIT09IHRoaXMuc3RhdGUuc2VhcmNoVGV4dCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFRleHQgfSk7XG4gICAgfVxuICB9XG5cbiAgb25DbGVhcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVGV4dDogJycgfSk7XG4gIH1cblxuICBvbkNvbHVtblRvZ2dsZShkYXRhRmllbGQpIHtcbiAgICBjb25zdCB7IGNvbHVtblRvZ2dsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb2x1bW5Ub2dnbGVbZGF0YUZpZWxkXSA9ICFjb2x1bW5Ub2dnbGVbZGF0YUZpZWxkXTtcbiAgICB0aGlzLnNldFN0YXRlKCh7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgY29sdW1uVG9nZ2xlXG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHsqfSBfIFxuICAgKiB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIG9ubHkgb25lIHRpbWUgd2hlbiB0YWJsZSByZW5kZXJcbiAgICogcmVhY3QtYm9vdHN0cmFwLXRhYmxlLW5leHQvc3JjL2NvbnRleHQvaW5kZXguanMgd2lsbCBjYWxsIHRoaXMgY2IgZm9yIHBhc3NpbmcgdGhlIF8gbW9kdWxlXG4gICAqIFBsZWFzZSBjb25zaWRlciB0byBleHRyYWN0IGEgY29tbW9uIG1vZHVsZSB0byBoYW5kbGUgXyBtb2R1bGUuXG4gICAqIHRoaXMgaXMganVzdCBhIHF1aWNrIGZpeFxuICAgKi9cbiAgc2V0RGVwZW5kZW5jeU1vZHVsZXMoXykge1xuICAgIHRoaXMuXyA9IF87XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYmFzZVByb3BzID0ge1xuICAgICAga2V5RmllbGQ6IHRoaXMucHJvcHMua2V5RmllbGQsXG4gICAgICBjb2x1bW5zOiB0aGlzLnByb3BzLmNvbHVtbnMsXG4gICAgICBkYXRhOiB0aGlzLnByb3BzLmRhdGEsXG4gICAgICBib290c3RyYXA0OiB0aGlzLnByb3BzLmJvb3RzdHJhcDQsXG4gICAgICBzZXREZXBlbmRlbmN5TW9kdWxlczogdGhpcy5zZXREZXBlbmRlbmN5TW9kdWxlcyxcbiAgICAgIHJlZ2lzdGVyRXhwb3NlZEFQSTogdGhpcy5yZWdpc3RlckV4cG9zZWRBUElcbiAgICB9O1xuICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaCkge1xuICAgICAgYmFzZVByb3BzLnNlYXJjaCA9IHtcbiAgICAgICAgc2VhcmNoQ29udGV4dDogY3JlYXRlU2VhcmNoQ29udGV4dCh0aGlzLnByb3BzLnNlYXJjaCksXG4gICAgICAgIHNlYXJjaFRleHQ6IHRoaXMuc3RhdGUuc2VhcmNoVGV4dFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuY29sdW1uVG9nZ2xlKSB7XG4gICAgICBiYXNlUHJvcHMuY29sdW1uVG9nZ2xlID0ge1xuICAgICAgICB0b2dnbGVzOiB0aGlzLnN0YXRlLmNvbHVtblRvZ2dsZVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sa2l0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17IHtcbiAgICAgICAgc2VhcmNoUHJvcHM6IHtcbiAgICAgICAgICBzZWFyY2hUZXh0OiB0aGlzLnN0YXRlLnNlYXJjaFRleHQsXG4gICAgICAgICAgb25TZWFyY2g6IHRoaXMub25TZWFyY2gsXG4gICAgICAgICAgb25DbGVhcjogdGhpcy5vbkNsZWFyXG4gICAgICAgIH0sXG4gICAgICAgIGNzdlByb3BzOiB7XG4gICAgICAgICAgb25FeHBvcnQ6IHRoaXMuaGFuZGxlRXhwb3J0Q1NWXG4gICAgICAgIH0sXG4gICAgICAgIGNvbHVtblRvZ2dsZVByb3BzOiB7XG4gICAgICAgICAgY29sdW1uczogdGhpcy5wcm9wcy5jb2x1bW5zLFxuICAgICAgICAgIHRvZ2dsZXM6IHRoaXMuc3RhdGUuY29sdW1uVG9nZ2xlLFxuICAgICAgICAgIG9uQ29sdW1uVG9nZ2xlOiB0aGlzLm9uQ29sdW1uVG9nZ2xlXG4gICAgICAgIH0sXG4gICAgICAgIGJhc2VQcm9wc1xuICAgICAgfSB9XG4gICAgICA+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L1Rvb2xraXRDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBQcm92aWRlcjogVG9vbGtpdFByb3ZpZGVyLFxuICBDb25zdW1lcjogVG9vbGtpdENvbnRleHQuQ29uc3VtZXJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvY29udGV4dC5qcyIsImltcG9ydCBDb250ZXh0IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgVG9vbGtpdFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBUb29sa2l0UHJvdmlkZXI7XG5leHBvcnQgY29uc3QgVG9vbGtpdENvbnRleHQgPSBDb250ZXh0O1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2ggfSBmcm9tICcuL3NyYy9zZWFyY2gnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDU1ZFeHBvcnQgfSBmcm9tICcuL3NyYy9jc3YnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2x1bW5Ub2dnbGUgfSBmcm9tICcuL3NyYy9jb2x1bW4tdG9nZ2xlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9pbmRleC5qcyIsImltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9TZWFyY2hCYXInO1xuaW1wb3J0IENsZWFyU2VhcmNoQnV0dG9uIGZyb20gJy4vY2xlYXItYnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgeyBTZWFyY2hCYXIsIENsZWFyU2VhcmNoQnV0dG9uIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvc3JjL3NlYXJjaC9pbmRleC5qcyIsIi8qIGVzbGludCBjYW1lbGNhc2U6IDAgKi9cbi8qIGVzbGludCBuby1yZXR1cm4tYXNzaWduOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgaGFuZGxlRGVib3VuY2UgPSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSA9PiB7XG4gIGxldCB0aW1lb3V0O1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcblxuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgfHwgMCk7XG5cbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgZnVuYy5hcHB5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufTtcblxuY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBwcm9wcy5zZWFyY2hUZXh0XG4gICAgfTtcbiAgfVxuXG4gIG9uQ2hhbmdlVmFsdWUgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBvbktleXVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGVsYXksIG9uU2VhcmNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRlYm91bmNlQ2FsbGJhY2sgPSBoYW5kbGVEZWJvdW5jZSgoKSA9PiB7XG4gICAgICBvblNlYXJjaCh0aGlzLmlucHV0LnZhbHVlKTtcbiAgICB9LCBkZWxheSk7XG4gICAgZGVib3VuY2VDYWxsYmFjaygpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBuZXh0UHJvcHMuc2VhcmNoVGV4dCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgdGFibGVJZCxcbiAgICAgIHNyVGV4dFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPXsgYHNlYXJjaC1iYXItJHt0YWJsZUlkfWAgfVxuICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtbGFiZWxcIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBpZD17IGBzZWFyY2gtYmFyLSR7dGFibGVJZH0tbGFiZWxgIH0gY2xhc3NOYW1lPVwic3Itb25seVwiPlxuICAgICAgICAgIHsgc3JUZXh0IH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICByZWY9eyBuID0+IHRoaXMuaW5wdXQgPSBuIH1cbiAgICAgICAgICBpZD17IGBzZWFyY2gtYmFyLSR7dGFibGVJZH1gIH1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgc3R5bGU9eyBzdHlsZSB9XG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXsgYHNlYXJjaC1iYXItJHt0YWJsZUlkfS1sYWJlbGAgfVxuICAgICAgICAgIG9uS2V5VXA9eyAoKSA9PiB0aGlzLm9uS2V5dXAoKSB9XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVmFsdWUgfVxuICAgICAgICAgIGNsYXNzTmFtZT17IGBmb3JtLWNvbnRyb2wgJHtjbGFzc05hbWV9YCB9XG4gICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLnZhbHVlIH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17IHBsYWNlaG9sZGVyIHx8IFNlYXJjaEJhci5kZWZhdWx0UHJvcHMucGxhY2Vob2xkZXIgfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICApO1xuICB9XG59XG5cblNlYXJjaEJhci5wcm9wVHlwZXMgPSB7XG4gIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRhYmxlSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNyVGV4dDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuU2VhcmNoQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgc3R5bGU6IHt9LFxuICBwbGFjZWhvbGRlcjogJ1NlYXJjaCcsXG4gIGRlbGF5OiAyNTAsXG4gIHNlYXJjaFRleHQ6ICcnLFxuICB0YWJsZUlkOiAnMCcsXG4gIHNyVGV4dDogJ1NlYXJjaCB0aGlzIHRhYmxlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9zZWFyY2gvU2VhcmNoQmFyLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IENsZWFyQnV0dG9uID0gKHtcbiAgb25DbGVhcixcbiAgdGV4dCxcbiAgY2xhc3NOYW1lXG59KSA9PiAoXG4gIDxidXR0b24gY2xhc3NOYW1lPXsgYGJ0biBidG4tZGVmYXVsdCAke2NsYXNzTmFtZX1gIH0gb25DbGljaz17IG9uQ2xlYXIgfT57IHRleHQgfTwvYnV0dG9uPlxuKTtcblxuQ2xlYXJCdXR0b24ucHJvcFR5cGVzID0ge1xuICBvbkNsZWFyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbkNsZWFyQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGV4dDogJ0NsZWFyJyxcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xlYXJCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvc3JjL3NlYXJjaC9jbGVhci1idXR0b24uanMiLCJpbXBvcnQgRXhwb3J0Q1NWQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgeyBFeHBvcnRDU1ZCdXR0b24gfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zcmMvY3N2L2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEV4cG9ydENTVkJ1dHRvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgb25FeHBvcnQsXG4gICAgY2hpbGRyZW4sXG4gICAgY2xhc3NOYW1lLFxuICAgIC4uLnJlc3RcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9eyBgcmVhY3QtYnMtdGFibGUtY3N2LWJ0biBidG4gYnRuLWRlZmF1bHQgJHtjbGFzc05hbWV9YCB9XG4gICAgICBvbkNsaWNrPXsgKCkgPT4gb25FeHBvcnQoKSB9XG4gICAgICB7IC4uLnJlc3QgfVxuICAgID5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuRXhwb3J0Q1NWQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIG9uRXhwb3J0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuRXhwb3J0Q1NWQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgc3R5bGU6IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBvcnRDU1ZCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvc3JjL2Nzdi9idXR0b24uanMiLCJpbXBvcnQgVG9nZ2xlTGlzdCBmcm9tICcuL3RvZ2dsZS1saXN0JztcblxuZXhwb3J0IGRlZmF1bHQgeyBUb2dnbGVMaXN0IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvc3JjL2NvbHVtbi10b2dnbGUvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgVG9nZ2xlTGlzdCA9ICh7XG4gIGNvbHVtbnMsXG4gIG9uQ29sdW1uVG9nZ2xlLFxuICB0b2dnbGVzLFxuICBjb250ZXh0dWFsLFxuICBjbGFzc05hbWUsXG4gIGJ0bkNsYXNzTmFtZVxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17IGBidG4tZ3JvdXAgYnRuLWdyb3VwLXRvZ2dsZSAke2NsYXNzTmFtZX1gIH0gZGF0YS10b2dnbGU9XCJidXR0b25zXCI+XG4gICAge1xuICAgICAgY29sdW1uc1xuICAgICAgICAubWFwKGNvbHVtbiA9PiAoe1xuICAgICAgICAgIC4uLmNvbHVtbixcbiAgICAgICAgICB0b2dnbGU6IHRvZ2dsZXNbY29sdW1uLmRhdGFGaWVsZF1cbiAgICAgICAgfSkpXG4gICAgICAgIC5tYXAoY29sdW1uID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGtleT17IGNvbHVtbi5kYXRhRmllbGQgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgYCR7YnRuQ2xhc3NOYW1lfSBidG4gYnRuLSR7Y29udGV4dHVhbH0gJHtjb2x1bW4udG9nZ2xlID8gJ2FjdGl2ZScgOiAnJ31gIH1cbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGFyaWEtcHJlc3NlZD17IGNvbHVtbi50b2dnbGUgPyAndHJ1ZScgOiAnZmFsc2UnIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBvbkNvbHVtblRvZ2dsZShjb2x1bW4uZGF0YUZpZWxkKSB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyBjb2x1bW4udGV4dCB9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpXG4gICAgfVxuICA8L2Rpdj5cbik7XG5cblRvZ2dsZUxpc3QucHJvcFR5cGVzID0ge1xuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgdG9nZ2xlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvbkNvbHVtblRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgYnRuQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbnRleHR1YWw6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblRvZ2dsZUxpc3QuZGVmYXVsdFByb3BzID0ge1xuICBidG5DbGFzc05hbWU6ICcnLFxuICBjbGFzc05hbWU6ICcnLFxuICBjb250ZXh0dWFsOiAncHJpbWFyeSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUxpc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvc3JjL2NvbHVtbi10b2dnbGUvdG9nZ2xlLWxpc3QuanMiLCJpbXBvcnQgT3BlcmF0aW9uIGZyb20gJy4vc3JjL29wJztcblxuZXhwb3J0IGRlZmF1bHQgQmFzZSA9PlxuICBjbGFzcyBTdGF0ZWxlc3NPcGVyYXRpb24gZXh0ZW5kcyBPcGVyYXRpb24uY3N2T3BlcmF0aW9uKEJhc2UpIHtcbiAgICByZWdpc3RlckV4cG9zZWRBUEkgPSAodGFibGVFeHBvc2VkQVBJRW1pdHRlcikgPT4ge1xuICAgICAgdGhpcy50YWJsZUV4cG9zZWRBUElFbWl0dGVyID0gdGFibGVFeHBvc2VkQVBJRW1pdHRlcjtcbiAgICB9XG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvc3RhdGVsZXNzT3AuanMiLCJpbXBvcnQgY3N2T3BlcmF0aW9uIGZyb20gJy4vY3N2JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjc3ZPcGVyYXRpb25cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvc3JjL29wL2luZGV4LmpzIiwiaW1wb3J0IHsgZ2V0TWV0YUluZm8sIHRyYW5zZm9ybSwgc2F2ZSB9IGZyb20gJy4uL2Nzdi9leHBvcnRlcic7XG5cbmNvbnN0IGNzdkRlZmF1bHRPcHRpb25zID0ge1xuICBmaWxlTmFtZTogJ3NwcmVhZHNoZWV0LmNzdicsXG4gIHNlcGFyYXRvcjogJywnLFxuICBpZ25vcmVIZWFkZXI6IGZhbHNlLFxuICBpZ25vcmVGb290ZXI6IHRydWUsXG4gIG5vQXV0b0JPTTogdHJ1ZSxcbiAgYmxvYlR5cGU6ICd0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgnLFxuICBleHBvcnRBbGw6IHRydWUsXG4gIG9ubHlFeHBvcnRTZWxlY3Rpb246IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlID0+XG4gIGNsYXNzIENTVk9wZXJhdGlvbiBleHRlbmRzIEJhc2Uge1xuICAgIGhhbmRsZUV4cG9ydENTViA9IChzb3VyY2UpID0+IHtcbiAgICAgIGNvbnN0IHsgY29sdW1ucywgZXhwb3J0Q1NWLCBrZXlGaWVsZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IG1ldGEgPSBnZXRNZXRhSW5mbyhjb2x1bW5zKTtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBleHBvcnRDU1YgPT09IHRydWUgP1xuICAgICAgICBjc3ZEZWZhdWx0T3B0aW9ucyA6XG4gICAgICAgIHtcbiAgICAgICAgICAuLi5jc3ZEZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgICAuLi5leHBvcnRDU1ZcbiAgICAgICAgfTtcblxuICAgICAgLy8gZ2V0IGRhdGEgZm9yIGNzdiBleHBvcnRcbiAgICAgIGxldCBkYXRhO1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGRhdGEgPSBzb3VyY2U7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZXhwb3J0QWxsKSB7XG4gICAgICAgIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMub25seUV4cG9ydEZpbHRlcmVkKSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7fTtcbiAgICAgICAgdGhpcy50YWJsZUV4cG9zZWRBUElFbWl0dGVyLmVtaXQoJ2dldC5maWx0ZXJlZC5yb3dzJywgcGF5bG9hZCk7XG4gICAgICAgIGRhdGEgPSBwYXlsb2FkLnJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7fTtcbiAgICAgICAgdGhpcy50YWJsZUV4cG9zZWRBUElFbWl0dGVyLmVtaXQoJ2dldC50YWJsZS5kYXRhJywgcGF5bG9hZCk7XG4gICAgICAgIGRhdGEgPSBwYXlsb2FkLnJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgLy8gZmlsdGVyIGRhdGEgYnkgcm93IHNlbGVjdGlvblxuICAgICAgaWYgKG9wdGlvbnMub25seUV4cG9ydFNlbGVjdGlvbikge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0ge307XG4gICAgICAgIHRoaXMudGFibGVFeHBvc2VkQVBJRW1pdHRlci5lbWl0KCdnZXQuc2VsZWN0ZWQucm93cycsIHBheWxvYWQpO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25zID0gcGF5bG9hZC5yZXN1bHQ7XG4gICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcihyb3cgPT4gISFzZWxlY3Rpb25zLmZpbmQoc2VsID0+IHJvd1trZXlGaWVsZF0gPT09IHNlbCkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb250ZW50ID0gdHJhbnNmb3JtKGRhdGEsIG1ldGEsIGNvbHVtbnMsIHRoaXMuXywgb3B0aW9ucyk7XG4gICAgICBzYXZlKGNvbnRlbnQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zcmMvb3AvY3N2LmpzIiwiLyogZXNsaW50IG5vLXVubmVlZGVkLXRlcm5hcnk6IDAgKi9cbmltcG9ydCBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcic7XG5cbmV4cG9ydCBjb25zdCBnZXRNZXRhSW5mbyA9IGNvbHVtbnMgPT5cbiAgY29sdW1uc1xuICAgIC5tYXAoY29sdW1uID0+ICh7XG4gICAgICBmaWVsZDogY29sdW1uLmRhdGFGaWVsZCxcbiAgICAgIHR5cGU6IGNvbHVtbi5jc3ZUeXBlIHx8IFN0cmluZyxcbiAgICAgIGZvcm1hdHRlcjogY29sdW1uLmNzdkZvcm1hdHRlcixcbiAgICAgIGZvcm1hdEV4dHJhRGF0YTogY29sdW1uLmZvcm1hdEV4dHJhRGF0YSxcbiAgICAgIGhlYWRlcjogY29sdW1uLmNzdlRleHQgfHwgY29sdW1uLnRleHQsXG4gICAgICBleHBvcnQ6IGNvbHVtbi5jc3ZFeHBvcnQgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlLFxuICAgICAgcm93OiBOdW1iZXIoY29sdW1uLnJvdykgfHwgMCxcbiAgICAgIHJvd1NwYW46IE51bWJlcihjb2x1bW4ucm93U3BhbikgfHwgMSxcbiAgICAgIGNvbFNwYW46IE51bWJlcihjb2x1bW4uY29sU3BhbikgfHwgMSxcbiAgICAgIGZvb3RlcjogY29sdW1uLmZvb3RlcixcbiAgICAgIGZvb3RlckZvcm1hdHRlcjogY29sdW1uLmZvb3RlckZvcm1hdHRlclxuICAgIH0pKVxuICAgIC5maWx0ZXIoXyA9PiBfLmV4cG9ydCk7XG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm0gPSAoXG4gIGRhdGEsXG4gIG1ldGEsXG4gIGNvbHVtbnMsXG4gIF8sXG4gIHtcbiAgICBzZXBhcmF0b3IsXG4gICAgaWdub3JlSGVhZGVyLFxuICAgIGlnbm9yZUZvb3RlclxuICB9XG4pID0+IHtcbiAgY29uc3QgdmlzaWJsZUNvbHVtbnMgPSBtZXRhLmZpbHRlcihtID0+IG0uZXhwb3J0KTtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgLy8gZXh0cmFjdCBjc3YgaGVhZGVyXG4gIGlmICghaWdub3JlSGVhZGVyKSB7XG4gICAgY29udGVudCArPSB2aXNpYmxlQ29sdW1ucy5tYXAobSA9PiBgXCIke20uaGVhZGVyfVwiYCkuam9pbihzZXBhcmF0b3IpO1xuICAgIGNvbnRlbnQgKz0gJ1xcbic7XG4gIH1cbiAgLy8gZXh0cmFjdCBjc3YgYm9keVxuICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHJldHVybiBjb250ZW50O1xuICBjb250ZW50ICs9IGRhdGFcbiAgICAubWFwKChyb3csIHJvd0luZGV4KSA9PlxuICAgICAgdmlzaWJsZUNvbHVtbnMubWFwKChtKSA9PiB7XG4gICAgICAgIGxldCBjZWxsQ29udGVudCA9IF8uZ2V0KHJvdywgbS5maWVsZCk7XG4gICAgICAgIGlmIChtLmZvcm1hdHRlcikge1xuICAgICAgICAgIGNlbGxDb250ZW50ID0gbS5mb3JtYXR0ZXIoY2VsbENvbnRlbnQsIHJvdywgcm93SW5kZXgsIG0uZm9ybWF0RXh0cmFEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobS50eXBlID09PSBTdHJpbmcpIHtcbiAgICAgICAgICByZXR1cm4gYFwiJHtgJHtjZWxsQ29udGVudH1gLnJlcGxhY2UoL1wiL2csICdcIlwiJyl9XCJgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjZWxsQ29udGVudDtcbiAgICAgIH0pLmpvaW4oc2VwYXJhdG9yKSkuam9pbignXFxuJyk7XG5cbiAgaWYgKCFpZ25vcmVGb290ZXIpIHtcbiAgICBjb250ZW50ICs9ICdcXG4nO1xuICAgIGNvbnRlbnQgKz0gdmlzaWJsZUNvbHVtbnMubWFwKChtLCBpKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG0uZm9vdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbkRhdGEgPSBfLnBsdWNrKGRhdGEsIGNvbHVtbnNbaV0uZGF0YUZpZWxkKTtcbiAgICAgICAgcmV0dXJuIGBcIiR7bS5mb290ZXIoY29sdW1uRGF0YSwgY29sdW1uc1tpXSwgaSl9XCJgO1xuICAgICAgfSBlbHNlIGlmIChtLmZvb3RlckZvcm1hdHRlcikge1xuICAgICAgICByZXR1cm4gYFwiJHttLmZvb3RlckZvcm1hdHRlcihjb2x1bW5zW2ldLCBpKX1cImA7XG4gICAgICB9XG4gICAgICByZXR1cm4gYFwiJHttLmZvb3Rlcn1cImA7XG4gICAgfSkuam9pbihzZXBhcmF0b3IpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IHNhdmUgPSAoXG4gIGNvbnRlbnQsXG4gIHtcbiAgICBub0F1dG9CT00sXG4gICAgZmlsZU5hbWUsXG4gICAgYmxvYlR5cGVcbiAgfVxuKSA9PiB7XG4gIEZpbGVTYXZlci5zYXZlQXMoXG4gICAgbmV3IEJsb2IoW2NvbnRlbnRdLCB7IHR5cGU6IGJsb2JUeXBlIH0pLFxuICAgIGZpbGVOYW1lLFxuICAgIG5vQXV0b0JPTVxuICApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItdG9vbGtpdC9zcmMvY3N2L2V4cG9ydGVyLmpzIiwiKGZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxiKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzKWIoKTtlbHNle2IoKSxhLkZpbGVTYXZlcj17ZXhwb3J0czp7fX0uZXhwb3J0c319KSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhLGIpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBiP2I9e2F1dG9Cb206ITF9Olwib2JqZWN0XCIhPXR5cGVvZiBiJiYoY29uc29sZS53YXJuKFwiRGVwcmVjYXRlZDogRXhwZWN0ZWQgdGhpcmQgYXJndW1lbnQgdG8gYmUgYSBvYmplY3RcIiksYj17YXV0b0JvbTohYn0pLGIuYXV0b0JvbSYmL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYS50eXBlKT9uZXcgQmxvYihbXCJcXHVGRUZGXCIsYV0se3R5cGU6YS50eXBlfSk6YX1mdW5jdGlvbiBjKGIsYyxkKXt2YXIgZT1uZXcgWE1MSHR0cFJlcXVlc3Q7ZS5vcGVuKFwiR0VUXCIsYiksZS5yZXNwb25zZVR5cGU9XCJibG9iXCIsZS5vbmxvYWQ9ZnVuY3Rpb24oKXthKGUucmVzcG9uc2UsYyxkKX0sZS5vbmVycm9yPWZ1bmN0aW9uKCl7Y29uc29sZS5lcnJvcihcImNvdWxkIG5vdCBkb3dubG9hZCBmaWxlXCIpfSxlLnNlbmQoKX1mdW5jdGlvbiBkKGEpe3ZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtiLm9wZW4oXCJIRUFEXCIsYSwhMSk7dHJ5e2Iuc2VuZCgpfWNhdGNoKGEpe31yZXR1cm4gMjAwPD1iLnN0YXR1cyYmMjk5Pj1iLnN0YXR1c31mdW5jdGlvbiBlKGEpe3RyeXthLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSl9Y2F0Y2goYyl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtiLmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCx3aW5kb3csMCwwLDAsODAsMjAsITEsITEsITEsITEsMCxudWxsKSxhLmRpc3BhdGNoRXZlbnQoYil9fXZhciBmPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy53aW5kb3c9PT13aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLnNlbGY9PT1zZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLmdsb2JhbD09PWdsb2JhbD9nbG9iYWw6dm9pZCAwLGE9Zi5zYXZlQXN8fChcIm9iamVjdFwiIT10eXBlb2Ygd2luZG93fHx3aW5kb3chPT1mP2Z1bmN0aW9uKCl7fTpcImRvd25sb2FkXCJpbiBIVE1MQW5jaG9yRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYixnLGgpe3ZhciBpPWYuVVJMfHxmLndlYmtpdFVSTCxqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2c9Z3x8Yi5uYW1lfHxcImRvd25sb2FkXCIsai5kb3dubG9hZD1nLGoucmVsPVwibm9vcGVuZXJcIixcInN0cmluZ1wiPT10eXBlb2YgYj8oai5ocmVmPWIsai5vcmlnaW49PT1sb2NhdGlvbi5vcmlnaW4/ZShqKTpkKGouaHJlZik/YyhiLGcsaCk6ZShqLGoudGFyZ2V0PVwiX2JsYW5rXCIpKTooai5ocmVmPWkuY3JlYXRlT2JqZWN0VVJMKGIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnJldm9rZU9iamVjdFVSTChqLmhyZWYpfSw0RTQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGopfSwwKSl9OlwibXNTYXZlT3JPcGVuQmxvYlwiaW4gbmF2aWdhdG9yP2Z1bmN0aW9uKGYsZyxoKXtpZihnPWd8fGYubmFtZXx8XCJkb3dubG9hZFwiLFwic3RyaW5nXCIhPXR5cGVvZiBmKW5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGIoZixoKSxnKTtlbHNlIGlmKGQoZikpYyhmLGcsaCk7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtpLmhyZWY9ZixpLnRhcmdldD1cIl9ibGFua1wiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGkpfSl9fTpmdW5jdGlvbihhLGIsZCxlKXtpZihlPWV8fG9wZW4oXCJcIixcIl9ibGFua1wiKSxlJiYoZS5kb2N1bWVudC50aXRsZT1lLmRvY3VtZW50LmJvZHkuaW5uZXJUZXh0PVwiZG93bmxvYWRpbmcuLi5cIiksXCJzdHJpbmdcIj09dHlwZW9mIGEpcmV0dXJuIGMoYSxiLGQpO3ZhciBnPVwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI9PT1hLnR5cGUsaD0vY29uc3RydWN0b3IvaS50ZXN0KGYuSFRNTEVsZW1lbnQpfHxmLnNhZmFyaSxpPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZigoaXx8ZyYmaCkmJlwib2JqZWN0XCI9PXR5cGVvZiBGaWxlUmVhZGVyKXt2YXIgaj1uZXcgRmlsZVJlYWRlcjtqLm9ubG9hZGVuZD1mdW5jdGlvbigpe3ZhciBhPWoucmVzdWx0O2E9aT9hOmEucmVwbGFjZSgvXmRhdGE6W147XSo7LyxcImRhdGE6YXR0YWNobWVudC9maWxlO1wiKSxlP2UubG9jYXRpb24uaHJlZj1hOmxvY2F0aW9uPWEsZT1udWxsfSxqLnJlYWRBc0RhdGFVUkwoYSl9ZWxzZXt2YXIgaz1mLlVSTHx8Zi53ZWJraXRVUkwsbD1rLmNyZWF0ZU9iamVjdFVSTChhKTtlP2UubG9jYXRpb249bDpsb2NhdGlvbi5ocmVmPWwsZT1udWxsLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtrLnJldm9rZU9iamVjdFVSTChsKX0sNEU0KX19KTtmLnNhdmVBcz1hLnNhdmVBcz1hLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1hKX0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaWxlU2F2ZXIubWluLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL2Rpc3QvRmlsZVNhdmVyLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbi8qIGVzbGludCByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHM6IDAgKi9cbi8qIGVzbGludCBuby1jb250aW51ZTogMCAqL1xuLyogZXNsaW50IG5vLWxvbmVseS1pZjogMCAqL1xuLyogZXNsaW50IGNsYXNzLW1ldGhvZHMtdXNlLXRoaXM6IDAgKi9cbi8qIGVzbGludCBjYW1lbGNhc2U6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAob3B0aW9ucyA9IHtcbiAgc2VhcmNoRm9ybWF0dGVkOiBmYWxzZSxcbiAgYWZ0ZXJTZWFyY2g6IG51bGwsXG4gIG9uQ29sdW1uTWF0Y2g6IG51bGxcbn0pID0+IChcbiAgXyxcbiAgaXNSZW1vdGVTZWFyY2gsXG4gIGhhbmRsZVJlbW90ZVNlYXJjaENoYW5nZVxuKSA9PiB7XG4gIGNvbnN0IFNlYXJjaENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbiAgY2xhc3MgU2VhcmNoUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgICAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGRhdGFDaGFuZ2VMaXN0ZW5lcjogUHJvcFR5cGVzLm9iamVjdFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICBsZXQgaW5pdGlhbERhdGEgPSBwcm9wcy5kYXRhO1xuICAgICAgaWYgKGlzUmVtb3RlU2VhcmNoKCkgJiYgdGhpcy5wcm9wcy5zZWFyY2hUZXh0ICE9PSAnJykge1xuICAgICAgICBoYW5kbGVSZW1vdGVTZWFyY2hDaGFuZ2UodGhpcy5wcm9wcy5zZWFyY2hUZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxEYXRhID0gdGhpcy5zZWFyY2gocHJvcHMpO1xuICAgICAgICB0aGlzLnRyaWdnZXJMaXN0ZW5lcihpbml0aWFsRGF0YSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlID0geyBkYXRhOiBpbml0aWFsRGF0YSB9O1xuICAgIH1cblxuICAgIGdldFNlYXJjaGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZGF0YTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyTGlzdGVuZXIocmVzdWx0LCBza2lwSW5pdCkge1xuICAgICAgaWYgKG9wdGlvbnMuYWZ0ZXJTZWFyY2ggJiYgIXNraXBJbml0KSB7XG4gICAgICAgIG9wdGlvbnMuYWZ0ZXJTZWFyY2gocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLmRhdGFDaGFuZ2VMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLnByb3BzLmRhdGFDaGFuZ2VMaXN0ZW5lci5lbWl0KCdmaWx0ZXJDaGFuZ2VkJywgcmVzdWx0Lmxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAobmV4dFByb3BzLnNlYXJjaFRleHQgIT09IHRoaXMucHJvcHMuc2VhcmNoVGV4dCkge1xuICAgICAgICBpZiAoaXNSZW1vdGVTZWFyY2goKSkge1xuICAgICAgICAgIGhhbmRsZVJlbW90ZVNlYXJjaENoYW5nZShuZXh0UHJvcHMuc2VhcmNoVGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zZWFyY2gobmV4dFByb3BzKTtcbiAgICAgICAgICB0aGlzLnRyaWdnZXJMaXN0ZW5lcihyZXN1bHQpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc1JlbW90ZVNlYXJjaCgpKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IG5leHRQcm9wcy5kYXRhIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKCFfLmlzRXF1YWwobmV4dFByb3BzLmRhdGEsIHRoaXMucHJvcHMuZGF0YSkpIHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNlYXJjaChuZXh0UHJvcHMpO1xuICAgICAgICAgIHRoaXMudHJpZ2dlckxpc3RlbmVyKHJlc3VsdCk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNlYXJjaChwcm9wcykge1xuICAgICAgY29uc3QgeyBkYXRhLCBjb2x1bW5zIH0gPSBwcm9wcztcbiAgICAgIGNvbnN0IHNlYXJjaFRleHQgPSBwcm9wcy5zZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICByZXR1cm4gZGF0YS5maWx0ZXIoKHJvdywgcmlkeCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBjaWR4ID0gMDsgY2lkeCA8IGNvbHVtbnMubGVuZ3RoOyBjaWR4ICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zW2NpZHhdO1xuICAgICAgICAgIGlmIChjb2x1bW4uc2VhcmNoYWJsZSA9PT0gZmFsc2UpIGNvbnRpbnVlO1xuICAgICAgICAgIGxldCB0YXJnZXRWYWx1ZSA9IF8uZ2V0KHJvdywgY29sdW1uLmRhdGFGaWVsZCk7XG4gICAgICAgICAgaWYgKGNvbHVtbi5mb3JtYXR0ZXIgJiYgb3B0aW9ucy5zZWFyY2hGb3JtYXR0ZWQpIHtcbiAgICAgICAgICAgIHRhcmdldFZhbHVlID0gY29sdW1uLmZvcm1hdHRlcih0YXJnZXRWYWx1ZSwgcm93LCByaWR4LCBjb2x1bW4uZm9ybWF0RXh0cmFEYXRhKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbi5maWx0ZXJWYWx1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0VmFsdWUgPSBjb2x1bW4uZmlsdGVyVmFsdWUodGFyZ2V0VmFsdWUsIHJvdyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvcHRpb25zLm9uQ29sdW1uTWF0Y2gpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9uQ29sdW1uTWF0Y2goe1xuICAgICAgICAgICAgICBzZWFyY2hUZXh0LFxuICAgICAgICAgICAgICB2YWx1ZTogdGFyZ2V0VmFsdWUsXG4gICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgcm93XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRhcmdldFZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB0YXJnZXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0VmFsdWUgPSB0YXJnZXRWYWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRWYWx1ZS5pbmRleE9mKHNlYXJjaFRleHQpID4gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U2VhcmNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17IHsgZGF0YTogdGhpcy5zdGF0ZS5kYXRhIH0gfT5cbiAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICA8L1NlYXJjaENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgUHJvdmlkZXI6IFNlYXJjaFByb3ZpZGVyLFxuICAgIENvbnN1bWVyOiBTZWFyY2hDb250ZXh0LkNvbnN1bWVyXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi10b29sa2l0L3NyYy9zZWFyY2gvY29udGV4dC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRvb2xraXRDb250ZXh0IGZyb20gJy4vY29udGV4dCc7XG5cbmNvbnN0IFRvb2xraXRwcm92aWRlciA9IHByb3BzID0+IChcbiAgPFRvb2xraXRDb250ZXh0LlByb3ZpZGVyIHsgLi4ucHJvcHMgfT5cbiAgICA8VG9vbGtpdENvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7XG4gICAgICAgIHRvb2tLaXRQcm9wcyA9PiBwcm9wcy5jaGlsZHJlbih0b29rS2l0UHJvcHMpXG4gICAgICB9XG4gICAgPC9Ub29sa2l0Q29udGV4dC5Db25zdW1lcj5cbiAgPC9Ub29sa2l0Q29udGV4dC5Qcm92aWRlcj5cbik7XG5cblRvb2xraXRwcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sa2l0cHJvdmlkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQvcHJvdmlkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=react-bootstrap-table2-toolkit.js.map