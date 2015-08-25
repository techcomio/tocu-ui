webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouterLibBrowserHistory = __webpack_require__(188);

	var _reactRouterLibBrowserHistory2 = _interopRequireDefault(_reactRouterLibBrowserHistory);

	var _iso = __webpack_require__(202);

	var _iso2 = _interopRequireDefault(_iso);

	var _sharedAlt = __webpack_require__(204);

	var _sharedAlt2 = _interopRequireDefault(_sharedAlt);

	var _sharedComponentsRouter = __webpack_require__(217);

	var _sharedComponentsRouter2 = _interopRequireDefault(_sharedComponentsRouter);

	var _sharedRoutes = __webpack_require__(255);

	var _sharedRoutes2 = _interopRequireDefault(_sharedRoutes);

	var _sharedLibHeadParams = __webpack_require__(453);

	var _sharedLibHeadParams2 = _interopRequireDefault(_sharedLibHeadParams);

	var history = new _reactRouterLibBrowserHistory2['default']();
	var title = {
	  HeadParams: new _sharedLibHeadParams2['default']({})
	};

	_iso2['default'].bootstrap(function (__state__, __, container) {
	  _sharedAlt2['default'].bootstrap(__state__);

	  _reactAddons2['default'].render(_reactAddons2['default'].createElement(_sharedComponentsRouter2['default'], _extends({}, title, { history: history })), document.body);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(2)["default"];

	exports["default"] = _Object$assign || function (target) {
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

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(7).Object.assign;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(5);
	$def($def.S, 'Object', {assign: __webpack_require__(8)});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , PROTOTYPE = 'prototype';
	function ctx(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	}
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	function $def(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	}
	module.exports = $def;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var global = typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	module.exports = global;
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var toObject  = __webpack_require__(9)
	  , ES5Object = __webpack_require__(10)
	  , enumKeys  = __webpack_require__(13);
	// 19.1.2.1 Object.assign(target, source, ...)
	/* eslint-disable no-unused-vars */
	module.exports = Object.assign || function assign(target, source){
	/* eslint-enable no-unused-vars */
	  var T = toObject(target, true)
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = ES5Object(arguments[i++])
	      , keys   = enumKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var ES5Object = __webpack_require__(10)
	  , defined   = __webpack_require__(12);
	module.exports = function(it, realString){
	  return (realString ? Object : ES5Object)(defined(it));
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for not array-like ES3 strings
	var cof     = __webpack_require__(11)
	  , $Object = Object;
	module.exports = 0 in $Object('z') ? $Object : function(it){
	  return cof(it) == 'String' ? it.split('') : $Object(it);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(14);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , isEnum     = $.isEnum
	    , getSymbols = $.getSymbols;
	  if(getSymbols)for(var symbols = getSymbols(it), i = 0, key; symbols.length > i; ){
	    if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _DOMHistory2 = __webpack_require__(189);

	var _DOMHistory3 = _interopRequireDefault(_DOMHistory2);

	var _DOMUtils = __webpack_require__(201);

	var _NavigationTypes = __webpack_require__(199);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	function updateCurrentState(extraState) {
	  var state = window.history.state;

	  if (state) window.history.replaceState(_extends(state, extraState), '');
	}

	/**
	 * A history implementation for DOM environments that support the
	 * HTML5 history API (pushState, replaceState, and the popstate event).
	 * Provides the cleanest URLs and should always be used in browser
	 * environments if possible.
	 *
	 * Note: BrowserHistory automatically falls back to using full page
	 * refreshes if HTML5 history is not available, so URLs are always
	 * the same across browsers.
	 */

	var BrowserHistory = (function (_DOMHistory) {
	  function BrowserHistory(options) {
	    _classCallCheck(this, BrowserHistory);

	    _DOMHistory.call(this, options);
	    this.handlePopState = this.handlePopState.bind(this);
	    this.isSupported = (0, _DOMUtils.supportsHistory)();
	  }

	  _inherits(BrowserHistory, _DOMHistory);

	  BrowserHistory.prototype._updateLocation = function _updateLocation(navigationType) {
	    var state = null;

	    if (this.isSupported) {
	      var historyState = window.history.state;
	      state = this._createState(historyState);

	      if (!historyState || !historyState.key) window.history.replaceState(state, '');
	    }

	    this.location = this.createLocation((0, _DOMUtils.getWindowPath)(), state, navigationType);
	  };

	  BrowserHistory.prototype.setup = function setup() {
	    if (this.location == null) this._updateLocation();
	  };

	  BrowserHistory.prototype.handlePopState = function handlePopState(event) {
	    if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	    this._updateLocation(_NavigationTypes2['default'].POP);
	    this._notifyChange();
	  };

	  BrowserHistory.prototype.addChangeListener = function addChangeListener(listener) {
	    _DOMHistory.prototype.addChangeListener.call(this, listener);

	    if (this.changeListeners.length === 1) {
	      if (window.addEventListener) {
	        window.addEventListener('popstate', this.handlePopState, false);
	      } else {
	        window.attachEvent('onpopstate', this.handlePopState);
	      }
	    }
	  };

	  BrowserHistory.prototype.removeChangeListener = function removeChangeListener(listener) {
	    _DOMHistory.prototype.removeChangeListener.call(this, listener);

	    if (this.changeListeners.length === 0) {
	      if (window.removeEventListener) {
	        window.removeEventListener('popstate', this.handlePopState, false);
	      } else {
	        window.detachEvent('onpopstate', this.handlePopState);
	      }
	    }
	  };

	  // http://www.w3.org/TR/2011/WD-html5-20110113/history.html#dom-history-pushstate

	  BrowserHistory.prototype.pushState = function pushState(state, path) {
	    if (this.isSupported) {
	      updateCurrentState(this.getScrollPosition());

	      state = this._createState(state);

	      window.history.pushState(state, '', path);
	      this.location = this.createLocation(path, state, _NavigationTypes2['default'].PUSH);
	      this._notifyChange();
	    } else {
	      window.location = path;
	    }
	  };

	  // http://www.w3.org/TR/2011/WD-html5-20110113/history.html#dom-history-replacestate

	  BrowserHistory.prototype.replaceState = function replaceState(state, path) {
	    if (this.isSupported) {
	      state = this._createState(state);

	      window.history.replaceState(state, '', path);
	      this.location = this.createLocation(path, state, _NavigationTypes2['default'].REPLACE);
	      this._notifyChange();
	    } else {
	      window.location.replace(path);
	    }
	  };

	  return BrowserHistory;
	})(_DOMHistory3['default']);

	var history = new BrowserHistory();
	exports.history = history;
	exports['default'] = BrowserHistory;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _History2 = __webpack_require__(190);

	var _History3 = _interopRequireDefault(_History2);

	var _DOMUtils = __webpack_require__(201);

	/**
	 * A history interface that assumes a DOM environment.
	 */

	var DOMHistory = (function (_History) {
	  function DOMHistory() {
	    var options = arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, DOMHistory);

	    _History.call(this, options);
	    this.getScrollPosition = options.getScrollPosition || _DOMUtils.getWindowScrollPosition;
	  }

	  _inherits(DOMHistory, _History);

	  DOMHistory.prototype.go = function go(n) {
	    if (n === 0) return;

	    window.history.go(n);
	  };

	  return DOMHistory;
	})(_History3['default']);

	exports['default'] = DOMHistory;
	module.exports = exports['default'];

/***/ },
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _alt = __webpack_require__(205);

	var _alt2 = _interopRequireDefault(_alt);

	'use trict';
	exports['default'] = new _alt2['default']();
	module.exports = exports['default'];

/***/ },
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _routes = __webpack_require__(255);

	var _routes2 = _interopRequireDefault(_routes);

	var AppRouter = (function (_React$Component) {
	  _inherits(AppRouter, _React$Component);

	  function AppRouter() {
	    _classCallCheck(this, AppRouter);

	    _get(Object.getPrototypeOf(AppRouter.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(AppRouter, [{
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        _reactRouter.Router,
	        this.props,
	        _routes2['default']
	      );
	    }
	  }]);

	  return AppRouter;
	})(_reactAddons2['default'].Component);

	exports['default'] = AppRouter;

	AppRouter.propTypes = {
	  history: _reactAddons2['default'].PropTypes.object.isRequired,
	  HeadParams: _reactAddons2['default'].PropTypes.object.isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(219)["default"];

	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	    if (object === null) object = Function.prototype;

	    var desc = _Object$getOwnPropertyDescriptor(object, property);

	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);

	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;

	      if (getter === undefined) {
	        return undefined;
	      }

	      return getter.call(receiver);
	    }
	  }
	};

	exports.__esModule = true;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(220), __esModule: true };

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(14);
	__webpack_require__(221);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(14)
	  , core     = __webpack_require__(7)
	  , $def     = __webpack_require__(5)
	  , toObject = __webpack_require__(9)
	  , isObject = __webpack_require__(222);
	$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
	  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
	, function(KEY, ID){
	  var fn     = (core.Object || {})[KEY] || Object[KEY]
	    , forced = 0
	    , method = {};
	  method[KEY] = ID == 0 ? function freeze(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 1 ? function seal(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 2 ? function preventExtensions(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 3 ? function isFrozen(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 4 ? function isSealed(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 5 ? function isExtensible(it){
	    return isObject(it) ? fn(it) : false;
	  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
	    return fn(toObject(it), key);
	  } : ID == 7 ? function getPrototypeOf(it){
	    return fn(toObject(it, true));
	  } : ID == 8 ? function keys(it){
	    return fn(toObject(it));
	  } : __webpack_require__(223).get;
	  try {
	    fn('z');
	  } catch(e){
	    forced = 1;
	  }
	  $def($def.S + $def.F * forced, 'Object', method);
	});

/***/ },
/* 222 */
/***/ function(module, exports) {

	// http://jsperf.com/core-js-isobject
	module.exports = function(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	};

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toString = {}.toString
	  , toObject = __webpack_require__(9)
	  , getNames = __webpack_require__(14).getNames;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	function getWindowNames(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	}

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toObject(it));
	};

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(225)["default"];

	var _Object$setPrototypeOf = __webpack_require__(227)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(226), __esModule: true };

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(14);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(228), __esModule: true };

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(229);
	module.exports = __webpack_require__(7).Object.setPrototypeOf;

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(5);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(230).set});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(14).getDesc
	  , isObject = __webpack_require__(222)
	  , anObject = __webpack_require__(231);
	function check(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	}
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
	    ? function(buggy, set){
	        try {
	          set = __webpack_require__(232)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	          set({}, []);
	        } catch(e){ buggy = true; }
	        return function setPrototypeOf(O, proto){
	          check(O, proto);
	          if(buggy)O.__proto__ = proto;
	          else set(O, proto);
	          return O;
	        };
	      }()
	    : undefined),
	  check: check
	};

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(222);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// Optional / simple context binding
	var aFunction = __webpack_require__(233);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	    };
	};

/***/ },
/* 233 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(235)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(236), __esModule: true };

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(14);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 237 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	/**
	 * @Component
	 */

	var _handlersApp = __webpack_require__(256);

	var _handlersApp2 = _interopRequireDefault(_handlersApp);

	var _handlersHome = __webpack_require__(257);

	var _handlersHome2 = _interopRequireDefault(_handlersHome);

	var _handlersBox = __webpack_require__(364);

	var _handlersBox2 = _interopRequireDefault(_handlersBox);

	var _handlersCart = __webpack_require__(413);

	var _handlersCart2 = _interopRequireDefault(_handlersCart);

	var _handlersPosts = __webpack_require__(425);

	var _handlersPosts2 = _interopRequireDefault(_handlersPosts);

	var _handlersAlbum = __webpack_require__(426);

	var _handlersAlbum2 = _interopRequireDefault(_handlersAlbum);

	var _handlersProduct_id = __webpack_require__(427);

	var _handlersProduct_id2 = _interopRequireDefault(_handlersProduct_id);

	var _handlersSignIn = __webpack_require__(443);

	var _handlersSignIn2 = _interopRequireDefault(_handlersSignIn);

	var _handlersSignUp = __webpack_require__(444);

	var _handlersSignUp2 = _interopRequireDefault(_handlersSignUp);

	var _handlersNotFound = __webpack_require__(447);

	var _handlersNotFound2 = _interopRequireDefault(_handlersNotFound);

	var _handlersCheckout = __webpack_require__(448);

	var _handlersCheckout2 = _interopRequireDefault(_handlersCheckout);

	var _handlersCartCheckout = __webpack_require__(450);

	var _handlersCartCheckout2 = _interopRequireDefault(_handlersCartCheckout);

	var _handlersCartShipMethod = __webpack_require__(451);

	var _handlersCartShipMethod2 = _interopRequireDefault(_handlersCartShipMethod);

	var _handlersCheckoutPayMethod = __webpack_require__(452);

	var _handlersCheckoutPayMethod2 = _interopRequireDefault(_handlersCheckoutPayMethod);

	exports['default'] = _reactAddons2['default'].createElement(
		_reactRouter.Route,
		{ component: _handlersApp2['default'] },
		_reactAddons2['default'].createElement(_reactRouter.Route, { component: _handlersHome2['default'], path: '/', onEnter: _handlersHome2['default'].onEnter }),
		_reactAddons2['default'].createElement(_reactRouter.Route, { component: _handlersBox2['default'], path: '/box/:id' }),
		_reactAddons2['default'].createElement(_reactRouter.Route, { component: _handlersCart2['default'], path: '/cart' }),
		_reactAddons2['default'].createElement(
			_reactRouter.Route,
			{ component: _handlersCheckout2['default'] },
			_reactAddons2['default'].createElement(_reactRouter.Route, { component: _handlersCartCheckout2['default'], path: '/checkout' }),
			_reactAddons2['default'].createElement(_reactRouter.Route, { component: _handlersCartShipMethod2['default'], path: '/checkout-ship-method' }),
			_reactAddons2['default'].createElement(_reactRouter.Route, { component: _handlersCheckoutPayMethod2['default'], path: '/checkout-pay-method' })
		),
		_reactAddons2['default'].createElement(_reactRouter.Route, { component: _handlersPosts2['default'], path: '/posts/:id' }),
		_reactAddons2['default'].createElement(_reactRouter.Route, { component: _handlersAlbum2['default'], path: '/album/:id' }),
		_reactAddons2['default'].createElement(_reactRouter.Route, { component: _handlersProduct_id2['default'], path: '/product/:id' }),
		_reactAddons2['default'].createElement(_reactRouter.Route, { component: _handlersSignIn2['default'], path: '/signin', onEnter: _handlersSignIn2['default'].onEnter }),
		_reactAddons2['default'].createElement(_reactRouter.Route, { component: _handlersSignUp2['default'], path: '/signup' }),
		_reactAddons2['default'].createElement(_reactRouter.Route, { component: _handlersNotFound2['default'], path: '*' })
	);
	module.exports = exports['default'];

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var Application = (function (_React$Component) {
	  _inherits(Application, _React$Component);

	  function Application() {
	    _classCallCheck(this, Application);

	    _get(Object.getPrototypeOf(Application.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Application, [{
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;

	      return this.props.children;
	    }
	  }], [{
	    key: 'contextTypes',
	    value: {
	      router: _reactAddons2['default'].PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  return Application;
	})(_reactAddons2['default'].Component);

	exports['default'] = Application;
	;
	module.exports = exports['default'];

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _regeneratorRuntime = __webpack_require__(258)['default'];

	var _Promise = __webpack_require__(288)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _altAltContainer = __webpack_require__(307);

	var _altAltContainer2 = _interopRequireDefault(_altAltContainer);

	var _decorators = __webpack_require__(311);

	var _actionsBoxActions = __webpack_require__(314);

	var _actionsBoxActions2 = _interopRequireDefault(_actionsBoxActions);

	var _actionsSanphamActions = __webpack_require__(335);

	var _actionsSanphamActions2 = _interopRequireDefault(_actionsSanphamActions);

	// import OrderActions   from '../actions/OrderActions';
	/**
	 * @Component
	 */

	var _componentsHeaderHome = __webpack_require__(336);

	var _componentsHeaderHome2 = _interopRequireDefault(_componentsHeaderHome);

	// import BoxYeuThich from '../components/BoxYeuThich';

	var _componentsFormSignIn = __webpack_require__(353);

	var _componentsFormSignIn2 = _interopRequireDefault(_componentsFormSignIn);

	var _componentsThumbnail = __webpack_require__(359);

	var _componentsThumbnail2 = _interopRequireDefault(_componentsThumbnail);

	var Home = (function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home(props) {
	    var _this = this;

	    _classCallCheck(this, _Home);

	    _get(Object.getPrototypeOf(_Home.prototype), 'constructor', this).call(this, props);

	    this.renderBoxLogin = function () {
	      if (_this.state.boxLogin) {
	        return _reactAddons2['default'].createElement(
	          'div',
	          { id: 'boxLogin' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'row' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-7 col-md-5 col-centered' },
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'centrix' },
	                _reactAddons2['default'].createElement(_componentsFormSignIn2['default'], { replaceWith: _this.hideBoxLogin })
	              )
	            )
	          )
	        );
	      }
	    };

	    this.handleBoxLogin = function () {
	      _this.setState({
	        boxLogin: true
	      });
	    };

	    this.hideBoxLogin = function () {
	      _this.setState({
	        boxLogin: false
	      });
	    };

	    this.state = {
	      boxLogin: false
	    };
	  }

	  _createClass(Home, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.HeadParams.setTitle("Home | tocu.vn");
	      this.props.HeadParams.setDescription("Home | Description");
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // OrderActions.getListOrder();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        'div',
	        null,
	        _reactAddons2['default'].createElement(_componentsHeaderHome2['default'], null),
	        _reactAddons2['default'].createElement(
	          'section',
	          { id: 'content' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _reactAddons2['default'].createElement(_componentsThumbnail2['default'], { handleBoxLogin: this.handleBoxLogin })
	          )
	        ),
	        this.renderBoxLogin()
	      );
	    }
	  }]);

	  var _Home = Home;
	  Home = (0, _decorators.prepareRoute)(function callee$1$0(_ref) {
	    var params = _ref.params;
	    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
	      while (1) switch (context$2$0.prev = context$2$0.next) {
	        case 0:
	          context$2$0.next = 2;
	          return _regeneratorRuntime.awrap(_Promise.all([_actionsBoxActions2['default'].getBoxs(), _actionsSanphamActions2['default'].count()]));

	        case 2:
	          return context$2$0.abrupt('return', context$2$0.sent);

	        case 3:
	        case 'end':
	          return context$2$0.stop();
	      }
	    }, null, this);
	  })(Home) || Home;
	  return Home;
	})(_reactAddons2['default'].Component);

	exports['default'] = Home;
	;
	module.exports = exports['default'];
	/* Header home */ /* Box yeu thich */ /*<BoxYeuThich />*/ /* Thumbnail */

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(259);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  delete g.regeneratorRuntime;
	}

	module.exports = { "default": module.exports, __esModule: true };

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	"use strict";

	var _Symbol = __webpack_require__(261)["default"];

	var _Symbol$iterator = __webpack_require__(275)["default"];

	var _Object$create = __webpack_require__(225)["default"];

	var _Promise = __webpack_require__(288)["default"];

	!(function (global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol = typeof _Symbol === "function" && _Symbol$iterator || "@@iterator";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = _Object$create((outerFn || Generator).prototype);

	    generator._invoke = makeInvokeMethod(innerFn, self || null, new Context(tryLocsList || []));

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  runtime.mark = function (genFun) {
	    genFun.__proto__ = GeneratorFunctionPrototype;
	    genFun.prototype = _Object$create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument ? _Promise.resolve(value.arg).then(invokeNext, invokeThrow) : _Promise.resolve(value).then(function (unwrapped) {
	        // When a yielded Promise is resolved, its final value becomes
	        // the .value of the Promise<{value,done}> result for the
	        // current iteration. If the Promise is rejected, however, the
	        // result for this iteration will be rejected with the same
	        // reason. Note that rejections of yielded Promises are not
	        // thrown back into the generator function, as is the case
	        // when an awaited Promise is rejected. This difference in
	        // behavior between yield and await is important, because it
	        // allows the consumer to decide what to do with the yielded
	        // rejection (swallow it and continue, manually .throw it back
	        // into the generator, abandon iteration, whatever). With
	        // await, by contrast, there is no opportunity to examine the
	        // rejection reason outside the generator function, so the
	        // only option is to throw it from the await expression, and
	        // let the generator function handle the exception.
	        result.value = unwrapped;
	        return result;
	      });
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;

	    function enqueue(method, arg) {
	      var enqueueResult =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(function () {
	        return invoke(method, arg);
	      }) : new _Promise(function (resolve) {
	        resolve(invoke(method, arg));
	      });

	      // Avoid propagating enqueueResult failures to Promises returned by
	      // later invocations of the iterator.
	      previousPromise = enqueueResult["catch"](function (ignored) {});

	      return enqueueResult;
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp.toString = function () {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(260)))

/***/ },
/* 260 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(262), __esModule: true };

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(263);
	module.exports = __webpack_require__(7).Symbol;

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(14)
	  , global         = __webpack_require__(6)
	  , has            = __webpack_require__(264)
	  , SUPPORT_DESC   = __webpack_require__(265)
	  , $def           = __webpack_require__(5)
	  , $redef         = __webpack_require__(266)
	  , shared         = __webpack_require__(269)
	  , setTag         = __webpack_require__(270)
	  , uid            = __webpack_require__(272)
	  , wks            = __webpack_require__(271)
	  , keyOf          = __webpack_require__(273)
	  , $names         = __webpack_require__(223)
	  , enumKeys       = __webpack_require__(13)
	  , anObject       = __webpack_require__(231)
	  , toObject       = __webpack_require__(9)
	  , createDesc     = __webpack_require__(268)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , $create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	var setSymbolDesc = SUPPORT_DESC ? function(){ // fallback for old Android
	  try {
	    return $create(setDesc({}, HIDDEN, {
	      get: function(){
	        return setDesc(this, HIDDEN, {value: false})[HIDDEN];
	      }
	    }))[HIDDEN] || setDesc;
	  } catch(e){
	    return function(it, key, D){
	      var protoDesc = getDesc(ObjectProto, key);
	      if(protoDesc)delete ObjectProto[key];
	      setDesc(it, key, D);
	      if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	    };
	  }
	}() : setDesc;

	function wrap(tag){
	  var sym = AllSymbols[tag] = $create($Symbol.prototype);
	  sym._k = tag;
	  SUPPORT_DESC && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	}

	function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = $create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	}
	function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)defineProperty(it, key = keys[i++], P[key]);
	  return it;
	}
	function create(it, P){
	  return P === undefined ? $create(it) : defineProperties($create(it), P);
	}
	function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	}
	function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	}
	function getOwnPropertyNames(it){
	  var names  = getNames(toObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	}
	function getOwnPropertySymbols(it){
	  var names  = getNames(toObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	}

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments[0]));
	  };
	  $redef($Symbol.prototype, 'toString', function(){
	    return this._k;
	  });

	  $.create     = create;
	  $.isEnum     = propertyIsEnumerable;
	  $.getDesc    = getOwnPropertyDescriptor;
	  $.setDesc    = defineProperty;
	  $.setDescs   = defineProperties;
	  $.getNames   = $names.get = getOwnPropertyNames;
	  $.getSymbols = getOwnPropertySymbols;

	  if(SUPPORT_DESC && !__webpack_require__(274)){
	    $redef(ObjectProto, 'propertyIsEnumerable', propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	    'species,split,toPrimitive,toStringTag,unscopables'
	  ).split(','), function(it){
	    var sym = wks(it);
	    symbolStatics[it] = useNative ? sym : wrap(sym);
	  }
	);

	setter = true;

	$def($def.G + $def.W, {Symbol: $Symbol});

	$def($def.S, 'Symbol', symbolStatics);

	$def($def.S + $def.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: getOwnPropertySymbols
	});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setTag(global.JSON, 'JSON', true);

/***/ },
/* 264 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 265 */
/***/ function(module, exports) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !!function(){
	  try {
	    return Object.defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(267);

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(14)
	  , createDesc = __webpack_require__(268);
	module.exports = __webpack_require__(265) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var has  = __webpack_require__(264)
	  , hide = __webpack_require__(267)
	  , TAG  = __webpack_require__(271)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
	};

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(269)('wks')
	  , Symbol = __webpack_require__(6).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(272))('Symbol.' + name));
	};

/***/ },
/* 272 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(14)
	  , toObject = __webpack_require__(9);
	module.exports = function(object, el){
	  var O      = toObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 274 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(276), __esModule: true };

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(277);
	__webpack_require__(284);
	module.exports = __webpack_require__(271)('iterator');

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var $at  = __webpack_require__(278)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(280)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(279)
	  , defined   = __webpack_require__(12);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 279 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(274)
	  , $def            = __webpack_require__(5)
	  , $redef          = __webpack_require__(266)
	  , hide            = __webpack_require__(267)
	  , has             = __webpack_require__(264)
	  , SYMBOL_ITERATOR = __webpack_require__(271)('iterator')
	  , Iterators       = __webpack_require__(281)
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	function returnThis(){ return this; }
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(282)(Constructor, NAME, next);
	  function createMethod(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  }
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(14).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(270)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * __webpack_require__(283), NAME, methods);
	  }
	};

/***/ },
/* 281 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(14)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(267)(IteratorPrototype, __webpack_require__(271)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(268)(1,next)});
	  __webpack_require__(270)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 283 */
/***/ function(module, exports) {

	// Safari has buggy iterators w/o `next`
	module.exports = 'keys' in [] && !('next' in [].keys());

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(285);
	var Iterators = __webpack_require__(281);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var setUnscope = __webpack_require__(286)
	  , step       = __webpack_require__(287)
	  , Iterators  = __webpack_require__(281)
	  , toObject   = __webpack_require__(9);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(280)(Array, 'Array', function(iterated, kind){
	  this._t = toObject(iterated); // target
	  this._i = 0;                  // next index
	  this._k = kind;               // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 286 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 287 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(289), __esModule: true };

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(290);
	__webpack_require__(277);
	__webpack_require__(284);
	__webpack_require__(291);
	module.exports = __webpack_require__(7).Promise;

/***/ },
/* 290 */
/***/ function(module, exports) {

	

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(14)
	  , LIBRARY    = __webpack_require__(274)
	  , global     = __webpack_require__(6)
	  , ctx        = __webpack_require__(232)
	  , classof    = __webpack_require__(292)
	  , $def       = __webpack_require__(5)
	  , isObject   = __webpack_require__(222)
	  , anObject   = __webpack_require__(231)
	  , aFunction  = __webpack_require__(233)
	  , strictNew  = __webpack_require__(293)
	  , forOf      = __webpack_require__(294)
	  , setProto   = __webpack_require__(230).set
	  , same       = __webpack_require__(299)
	  , species    = __webpack_require__(300)
	  , SPECIES    = __webpack_require__(271)('species')
	  , RECORD     = __webpack_require__(272)('record')
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , asap       = process && process.nextTick || __webpack_require__(301).set
	  , P          = global[PROMISE]
	  , Wrapper;

	function testResolve(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	}

	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(265)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	function isPromise(it){
	  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
	}
	function sameConstructor(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	}
	function getConstructor(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	}
	function isThenable(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	}
	function notify(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  // strange IE + webpack dev server bug - use .call(global)
	  asap.call(global, function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    function run(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    }
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      asap.call(global, function(){
	        if(isUnhandled(record.p)){
	          if(isNode){
	            process.emit('unhandledRejection', value, record.p);
	          } else if(global.console && console.error){
	            console.error('Unhandled promise rejection', value);
	          }
	        }
	        record.a = undefined;
	      });
	    }, 1);
	  });
	}
	function isUnhandled(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	}
	function $reject(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	}
	function $resolve(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      // strange IE + webpack dev server bug - use .call(global)
	      asap.call(global, function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	}

	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    this[RECORD] = record;
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(305)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var S = anObject(anObject(this).constructor)[SPECIES];
	      var react = {
	        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
	        fail: typeof onRejected == 'function'  ? onRejected  : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
	        react.res = aFunction(res);
	        react.rej = aFunction(rej);
	      });
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	__webpack_require__(270)(P, PROMISE);
	species(P);
	species(Wrapper = __webpack_require__(7)[PROMISE]);

	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new this(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(306)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(11)
	  , TAG = __webpack_require__(271)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 293 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(232)
	  , call        = __webpack_require__(295)
	  , isArrayIter = __webpack_require__(296)
	  , anObject    = __webpack_require__(231)
	  , toLength    = __webpack_require__(297)
	  , getIterFn   = __webpack_require__(298);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(231);
	function close(iterator){
	  var ret = iterator['return'];
	  if(ret !== undefined)anObject(ret.call(iterator));
	}
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  } catch(e){
	    close(iterator);
	    throw e;
	  }
	};

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var Iterators = __webpack_require__(281)
	  , ITERATOR  = __webpack_require__(271)('iterator');
	module.exports = function(it){
	  return ('Array' in Iterators ? Iterators.Array : Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(279)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , classof   = __webpack_require__(292)
	  , ITERATOR  = __webpack_require__(271)('iterator')
	  , Iterators = __webpack_require__(281);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  var Symbol = global.Symbol;
	  if(it != undefined){
	    return it[Symbol && Symbol.iterator || '@@iterator']
	      || it[ITERATOR]
	      || Iterators[classof(it)];
	  }
	};

/***/ },
/* 299 */
/***/ function(module, exports) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	var $       = __webpack_require__(14)
	  , SPECIES = __webpack_require__(271)('species');
	module.exports = function(C){
	  if(__webpack_require__(265) && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx                = __webpack_require__(232)
	  , invoke             = __webpack_require__(302)
	  , html               = __webpack_require__(303)
	  , cel                = __webpack_require__(304)
	  , global             = __webpack_require__(6)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	function run(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	}
	function listner(event){
	  run.call(event.data);
	}
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(11)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Modern browsers, skip implementation for WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id, '*');
	    };
	    global.addEventListener('message', listner, false);
	  // WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 302 */
/***/ function(module, exports) {

	// Fast apply
	// http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
	                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(222)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(266);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(271)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(308)


/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * AltContainer.
	 *
	 * There are many ways to use AltContainer.
	 *
	 * Using the `stores` prop.
	 *
	 * <AltContainer stores={{ FooStore: FooStore }}>
	 *   children get this.props.FooStore.storeData
	 * </AltContainer>
	 *
	 * You can also pass in functions.
	 *
	 * <AltContainer stores={{ FooStore: function () { return { storeData: true } } }}>
	 *   children get this.props.FooStore.storeData
	 * </AltContainer>
	 *
	 * Using the `store` prop.
	 *
	 * <AltContainer store={FooStore}>
	 *   children get this.props.storeData
	 * </AltContainer>
	 *
	 * Passing in `flux` because you're using alt instances
	 *
	 * <AltContainer flux={flux}>
	 *   children get this.props.flux
	 * </AltContainer>
	 *
	 * Using a custom render function.
	 *
	 * <AltContainer
	 *   render={function (props) {
	 *     return <div />;
	 *   }}
	 * />
	 *
	 * Using the `transform` prop.
	 *
	 * <AltContainer
	 *   stores={{ FooStore: FooStore, BarStore: BarStore }}
	 *   transform={function(stores) {
	 *     var FooStore = stores.FooStore;
	 *     var BarStore = stores.BarStore;
	 *     var products =
	 *       FooStore.products
	 *         .slice(0, 10)
	 *         .concat(BarStore.products);
	 *     return { products: products };
	 *   }}
	 * >
	 *   children get this.props.products
	 * </AltContainer>
	 *
	 * Full docs available at http://goatslacker.github.io/alt/
	 */
	var React = __webpack_require__(16)
	var mixinContainer = __webpack_require__(309)
	var assign = __webpack_require__(210).assign

	var AltContainer = React.createClass(assign({
	  displayName: 'AltContainer',

	  render: function () {
	    return this.altRender('div')
	  }
	}, mixinContainer(React)))

	module.exports = AltContainer


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var Subscribe = __webpack_require__(310)
	var assign = __webpack_require__(210).assign

	function id(it) {
	  return it
	}

	function getStateFromStore(store, props) {
	  return typeof store === 'function' ? store(props).value : store.getState()
	}

	function getStateFromKey(actions, props) {
	  return typeof actions === 'function' ? actions(props) : actions
	}

	function mixinContainer(React) {
	  var cloneWithProps = React.addons.cloneWithProps

	  return {
	    contextTypes: {
	      flux: React.PropTypes.object
	    },

	    childContextTypes: {
	      flux: React.PropTypes.object
	    },

	    getChildContext: function () {
	      var flux = this.props.flux || this.context.flux
	      return flux ? { flux: flux } : {}
	    },

	    getInitialState: function () {
	      if (this.props.stores && this.props.store) {
	        throw new ReferenceError('Cannot define both store and stores')
	      }

	      return this.reduceState(this.props)
	    },

	    componentWillReceiveProps: function (nextProps) {
	      this.destroySubscriptions()
	      this.setState(this.reduceState(nextProps))
	      this.registerStores(nextProps)
	    },

	    componentDidMount: function () {
	      this.registerStores(this.props)
	    },

	    componentWillUnmount: function () {
	      this.destroySubscriptions()
	    },

	    registerStores: function (props) {
	      var stores = props.stores
	      Subscribe.create(this)

	      if (props.store) {
	        this.addSubscription(props.store)
	      } else if (props.stores) {
	        if (Array.isArray(stores)) {
	          stores.forEach(function (store) {
	            this.addSubscription(store)
	          }, this)
	        } else {
	          Object.keys(stores).forEach(function (formatter) {
	            this.addSubscription(stores[formatter])
	          }, this)
	        }
	      }
	    },

	    destroySubscriptions: function () {
	      Subscribe.destroy(this)
	    },

	    getStateFromStores: function (props) {
	      var stores = props.stores
	      if (props.store) {
	        return getStateFromStore(props.store, props)
	      } else if (props.stores) {
	        // If you pass in an array of stores then we are just listening to them
	        // it should be an object then the state is added to the key specified
	        if (!Array.isArray(stores)) {
	          return Object.keys(stores).reduce(function (obj, key) {
	            obj[key] = getStateFromStore(stores[key], props)
	            return obj
	          }, {})
	        }
	      } else {
	        return {}
	      }
	    },

	    getStateFromActions: function (props) {
	      if (props.actions) {
	        return getStateFromKey(props.actions, props)
	      } else {
	        return {}
	      }
	    },

	    getInjected: function (props) {
	      if (props.inject) {
	        return Object.keys(props.inject).reduce(function (obj, key) {
	          obj[key] = getStateFromKey(props.inject[key], props)
	          return obj
	        }, {})
	      } else {
	        return {}
	      }
	    },

	    reduceState: function (props) {
	      return assign(
	        {},
	        this.getStateFromStores(props),
	        this.getStateFromActions(props),
	        this.getInjected(props)
	      )
	    },

	    addSubscription: function (store) {
	      if (typeof store === 'function') {
	        Subscribe.add(this, store(this.props).store, this.altSetState)
	      } else {
	        Subscribe.add(this, store, this.altSetState)
	      }
	    },

	    altSetState: function () {
	      this.setState(this.reduceState(this.props))
	    },

	    getProps: function () {
	      var flux = this.props.flux || this.context.flux
	      var transform = typeof this.props.transform === 'function'
	        ? this.props.transform
	        : id
	      return transform(assign(
	        flux ? { flux: flux } : {},
	        this.state
	      ))
	    },

	    shouldComponentUpdate: function () {
	      return this.props.shouldComponentUpdate
	        ? this.props.shouldComponentUpdate(this.getProps())
	        : true
	    },

	    altRender: function (Node) {
	      var children = this.props.children
	      // Custom rendering function
	      if (typeof this.props.render === 'function') {
	        return this.props.render(this.getProps())
	      } else if (this.props.component) {
	        return React.createElement(this.props.component, this.getProps())
	      }

	      // Does not wrap child in a div if we don't have to.
	      if (Array.isArray(children)) {
	        return React.createElement(Node, null, children.map(function (child, i) {
	          return cloneWithProps(child, assign({ key: i }, this.getProps()))
	        }, this))
	      } else if (children) {
	        return cloneWithProps(children, this.getProps())
	      } else {
	        return React.createElement(Node, this.getProps())
	      }
	    }
	  }
	}

	module.exports = mixinContainer


/***/ },
/* 310 */
/***/ function(module, exports) {

	'use strict'

	var Subscribe = {
	  create: function (context) {
	    context._AltMixinRegistry = context._AltMixinRegistry || []
	  },

	  add: function (context, store, handler) {
	    context._AltMixinRegistry.push(store.listen(handler))
	  },

	  destroy: function (context) {
	    context._AltMixinRegistry.forEach(function (f) { f() })
	    context._AltMixinRegistry = []
	  },

	  listeners: function (context) {
	    return context._AltMixinRegistry
	  }
	}

	module.exports = Subscribe


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequire = __webpack_require__(312)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _prepareRoute = __webpack_require__(313);

	exports.prepareRoute = _interopRequire(_prepareRoute);

/***/ },
/* 312 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	exports.__esModule = true;

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = prepareRoute;

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	function prepareRoute(prepareFn) {

	  return function (DecoratedComponent) {
	    return (function (_React$Component) {
	      _inherits(PrepareRouteDecorator, _React$Component);

	      function PrepareRouteDecorator() {
	        _classCallCheck(this, PrepareRouteDecorator);

	        _get(Object.getPrototypeOf(PrepareRouteDecorator.prototype), 'constructor', this).apply(this, arguments);
	      }

	      _createClass(PrepareRouteDecorator, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          var _props = this.props;
	          var params = _props.params;
	          var location = _props.location;

	          prepareFn({ params: params, location: location });
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return _reactAddons2['default'].createElement(DecoratedComponent, this.props);
	        }
	      }], [{
	        key: 'contextTypes',
	        value: {
	          router: _reactAddons.PropTypes.instanceOf(_reactRouter2['default']).isRequired
	        },
	        enumerable: true
	      }, {
	        key: 'prepareRoute',
	        value: prepareFn,
	        enumerable: true
	      }]);

	      return PrepareRouteDecorator;
	    })(_reactAddons2['default'].Component);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _regeneratorRuntime = __webpack_require__(258)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _axios = __webpack_require__(315);

	var _axios2 = _interopRequireDefault(_axios);

	var _configSample = __webpack_require__(334);

	var BoxActions = (function () {
	  function BoxActions() {
	    _classCallCheck(this, BoxActions);
	  }

	  _createClass(BoxActions, [{
	    key: 'getBoxs',

	    /**
	     * request lấy các boxs
	     * @dispatch {Array} [boxs]
	     */
	    value: function getBoxs() {
	      var self;
	      return _regeneratorRuntime.async(function getBoxs$(context$2$0) {
	        while (1) switch (context$2$0.prev = context$2$0.next) {
	          case 0:
	            self = this;
	            context$2$0.next = 3;
	            return _regeneratorRuntime.awrap(_axios2['default'].get(_configSample.Api_URL + '/box').then(function (res) {
	              /**
	               * send data cho Store
	               */
	              self.dispatch(res.data);
	            })['catch'](function (res) {
	              /**
	               * send lỗi cho func boxsFailed
	               * @param  {Error} [Error request]
	               */
	              self.actions.boxsFailed(res.data);
	            }));

	          case 3:
	          case 'end':
	            return context$2$0.stop();
	        }
	      }, null, this);
	    }

	    /**
	     * request lấy thông tin Box
	     * @param {number} id [id box]
	     * @param {number} skip
	     * @param {number} limit
	     * @dispatch {Array} [bài posts]
	     */
	  }, {
	    key: 'getBoxID',
	    value: function getBoxID(_ref) {
	      var id = _ref.id;

	      var self = this;

	      _axios2['default'].get(_configSample.Api_URL + '/box/' + id).then(function (res) {
	        /**
	         * send data cho Store
	         */
	        self.dispatch(res.data);
	      })['catch'](function (res) {
	        /**
	         * send lỗi cho func getBoxIDFailed
	         * @param  {Error} [Error request]
	         */
	        self.actions.getBoxIDFailed(res.data);
	      });
	    }

	    /**
	     * like box
	     * @param  {number} options.itemID - id box
	     * @param  {string} options.token  - token
	     * @param  {number} options.userID - id user
	     * @dispatch {number}                
	     */
	  }, {
	    key: 'like',
	    value: function like(_ref2) {
	      var itemID = _ref2.itemID;
	      var token = _ref2.token;

	      var self = this;

	      _axios2['default'].post(_configSample.Api_URL + '/like', { type: "box", itemId: itemID }, {
	        headers: { 'Authorization': 'Bearer ' + localStorage.access_token }
	      }).then(function (res) {
	        self.dispatch(itemID);
	      })['catch'](function (res) {
	        self.actions.likeFailed(res.data);
	      });
	    }

	    /**
	     * send lỗi cho Store
	     * @param  {Error} err [Error request]
	     * @dispatch {Error} [send Store]
	     */
	  }, {
	    key: 'boxsFailed',
	    value: function boxsFailed(err) {
	      this.dispatch(err);
	    }

	    /**
	     * send lỗi cho Store
	     * @param  {Error} err [Error request]
	     * @dispatch {Error} [send Store]
	     */
	  }, {
	    key: 'getBoxIDFailed',
	    value: function getBoxIDFailed(err) {
	      this.dispatch(err);
	    }
	  }, {
	    key: 'likeFailed',
	    value: function likeFailed(err) {
	      console.log('like box Failed', err);
	    }
	  }]);

	  return BoxActions;
	})();

	module.exports = _Alt2['default'].createActions(BoxActions);

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(316);

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var defaults = __webpack_require__(317);
	var utils = __webpack_require__(318);
	var deprecatedMethod = __webpack_require__(319);
	var dispatchRequest = __webpack_require__(320);
	var InterceptorManager = __webpack_require__(327);

	// Polyfill ES6 Promise if needed
	(function () {
	  // webpack is being used to set es6-promise to the native Promise
	  // for the standalone build. It's necessary to make sure polyfill exists.
	  var P = __webpack_require__(328);
	  if (P && typeof P.polyfill === 'function') {
	    P.polyfill();
	  }
	})();

	var axios = module.exports = function axios(config) {
	  config = utils.merge({
	    method: 'get',
	    headers: {},
	    transformRequest: defaults.transformRequest,
	    transformResponse: defaults.transformResponse
	  }, config);

	  // Don't allow overriding defaults.withCredentials
	  config.withCredentials = config.withCredentials || defaults.withCredentials;

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  axios.interceptors.request.forEach(function (interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  axios.interceptors.response.forEach(function (interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  // Provide alias for success
	  promise.success = function success(fn) {
	    deprecatedMethod('success', 'then', 'https://github.com/mzabriskie/axios/blob/master/README.md#response-api');

	    promise.then(function(response) {
	      fn(response.data, response.status, response.headers, response.config);
	    });
	    return promise;
	  };

	  // Provide alias for error
	  promise.error = function error(fn) {
	    deprecatedMethod('error', 'catch', 'https://github.com/mzabriskie/axios/blob/master/README.md#response-api');

	    promise.then(null, function(response) {
	      fn(response.data, response.status, response.headers, response.config);
	    });
	    return promise;
	  };

	  return promise;
	};

	// Expose defaults
	axios.defaults = defaults;

	// Expose all/spread
	axios.all = function (promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(333);

	// Expose interceptors
	axios.interceptors = {
	  request: new InterceptorManager(),
	  response: new InterceptorManager()
	};

	// Provide aliases for supported request methods
	(function () {
	  function createShortMethods() {
	    utils.forEach(arguments, function (method) {
	      axios[method] = function (url, config) {
	        return axios(utils.merge(config || {}, {
	          method: method,
	          url: url
	        }));
	      };
	    });
	  }

	  function createShortMethodsWithData() {
	    utils.forEach(arguments, function (method) {
	      axios[method] = function (url, data, config) {
	        return axios(utils.merge(config || {}, {
	          method: method,
	          url: url,
	          data: data
	        }));
	      };
	    });
	  }

	  createShortMethods('delete', 'get', 'head');
	  createShortMethodsWithData('post', 'put', 'patch');
	})();


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(318);

	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	module.exports = {
	  transformRequest: [function (data, headers) {
	    if(utils.isFormData(data)) {
	      return data;
	    }
	    if (utils.isArrayBuffer(data)) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isObject(data) && !utils.isFile(data) && !utils.isBlob(data)) {
	      // Set application/json if no Content-Type has been specified
	      if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	        headers['Content-Type'] = 'application/json;charset=utf-8';
	      }
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function (data) {
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) {}
	    }
	    return data;
	  }],

	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*'
	    },
	    patch: utils.merge(DEFAULT_CONTENT_TYPE),
	    post: utils.merge(DEFAULT_CONTENT_TYPE),
	    put: utils.merge(DEFAULT_CONTENT_TYPE)
	  },

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN'
	};


/***/ },
/* 318 */
/***/ function(module, exports) {

	'use strict';

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return toString.call(val) === '[object FormData]';
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    return ArrayBuffer.isView(val);
	  } else {
	    return (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array or arguments callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Check if obj is array-like
	  var isArrayLike = isArray(obj) || (typeof obj === 'object' && !isNaN(obj.length));

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArrayLike) {
	    obj = [obj];
	  }

	  // Iterate over array values
	  if (isArrayLike) {
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  }
	  // Iterate over object keys
	  else {
	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/*obj1, obj2, obj3, ...*/) {
	  var result = {};
	  forEach(arguments, function (obj) {
	    forEach(obj, function (val, key) {
	      result[key] = val;
	    });
	  });
	  return result;
	}

	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  forEach: forEach,
	  merge: merge,
	  trim: trim
	};


/***/ },
/* 319 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Supply a warning to the developer that a method they are using
	 * has been deprecated.
	 *
	 * @param {string} method The name of the deprecated method
	 * @param {string} [instead] The alternate method to use if applicable
	 * @param {string} [docs] The documentation URL to get further details
	 */
	module.exports = function deprecatedMethod(method, instead, docs) {
	  try {
	    console.warn(
	      'DEPRECATED method `' + method + '`.' +
	      (instead ? ' Use `' + instead + '` instead.' : '') +
	      ' This method will be removed in a future release.');

	    if (docs) {
	      console.warn('For more information about usage see ' + docs);
	    }
	  } catch (e) {}
	};


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	/**
	 * Dispatch a request to the server using whichever adapter
	 * is supported by the current environment.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  return new Promise(function (resolve, reject) {
	    try {
	      // For browsers use XHR adapter
	      if (typeof window !== 'undefined') {
	        __webpack_require__(321)(resolve, reject, config);
	      }
	      // For node use HTTP adapter
	      else if (typeof process !== 'undefined') {
	        __webpack_require__(321)(resolve, reject, config);
	      }
	    } catch (e) {
	      reject(e);
	    }
	  });
	};


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(260)))

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*global ActiveXObject:true*/

	var defaults = __webpack_require__(317);
	var utils = __webpack_require__(318);
	var buildUrl = __webpack_require__(322);
	var cookies = __webpack_require__(323);
	var parseHeaders = __webpack_require__(324);
	var transformData = __webpack_require__(325);
	var urlIsSameOrigin = __webpack_require__(326);

	module.exports = function xhrAdapter(resolve, reject, config) {
	  // Transform request data
	  var data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Merge headers
	  var requestHeaders = utils.merge(
	    defaults.headers.common,
	    defaults.headers[config.method] || {},
	    config.headers || {}
	  );

	  if (utils.isFormData(data)) {
	    delete requestHeaders['Content-Type']; // Let the browser set it
	  }

	  // Create the request
	  var request = new (XMLHttpRequest || ActiveXObject)('Microsoft.XMLHTTP');
	  request.open(config.method.toUpperCase(), buildUrl(config.url, config.params), true);

	  // Listen for ready state
	  request.onreadystatechange = function () {
	    if (request && request.readyState === 4) {
	      // Prepare the response
	      var responseHeaders = parseHeaders(request.getAllResponseHeaders());
	      var responseData = ['text', ''].indexOf(config.responseType || '') !== -1 ? request.responseText : request.response;
	      var response = {
	        data: transformData(
	          responseData,
	          responseHeaders,
	          config.transformResponse
	        ),
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config: config
	      };

	      // Resolve or reject the Promise based on the status
	      (request.status >= 200 && request.status < 300 ?
	        resolve :
	        reject)(response);

	      // Clean up request
	      request = null;
	    }
	  };

	  // Add xsrf header
	  var xsrfValue = urlIsSameOrigin(config.url) ?
	      cookies.read(config.xsrfCookieName || defaults.xsrfCookieName) :
	      undefined;
	  if (xsrfValue) {
	    requestHeaders[config.xsrfHeaderName || defaults.xsrfHeaderName] = xsrfValue;
	  }

	  // Add headers to the request
	  utils.forEach(requestHeaders, function (val, key) {
	    // Remove Content-Type if data is undefined
	    if (!data && key.toLowerCase() === 'content-type') {
	      delete requestHeaders[key];
	    }
	    // Otherwise add header to the request
	    else {
	      request.setRequestHeader(key, val);
	    }
	  });

	  // Add withCredentials to request if needed
	  if (config.withCredentials) {
	    request.withCredentials = true;
	  }

	  // Add responseType to request if needed
	  if (config.responseType) {
	    try {
	      request.responseType = config.responseType;
	    } catch (e) {
	      if (request.responseType !== 'json') {
	        throw e;
	      }
	    }
	  }

	  if (utils.isArrayBuffer(data)) {
	    data = new DataView(data);
	  }

	  // Send the request
	  request.send(data);
	};


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(318);

	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildUrl(url, params) {
	  if (!params) {
	    return url;
	  }

	  var parts = [];

	  utils.forEach(params, function (val, key) {
	    if (val === null || typeof val === 'undefined') {
	      return;
	    }
	    if (!utils.isArray(val)) {
	      val = [val];
	    }

	    utils.forEach(val, function (v) {
	      if (utils.isDate(v)) {
	        v = v.toISOString();
	      }
	      else if (utils.isObject(v)) {
	        v = JSON.stringify(v);
	      }
	      parts.push(encode(key) + '=' + encode(v));
	    });
	  });

	  if (parts.length > 0) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + parts.join('&');
	  }

	  return url;
	};


/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(318);

	module.exports = {
	  write: function write(name, value, expires, path, domain, secure) {
	    var cookie = [];
	    cookie.push(name + '=' + encodeURIComponent(value));

	    if (utils.isNumber(expires)) {
	      cookie.push('expires=' + new Date(expires).toGMTString());
	    }

	    if (utils.isString(path)) {
	      cookie.push('path=' + path);
	    }

	    if (utils.isString(domain)) {
	      cookie.push('domain=' + domain);
	    }

	    if (secure === true) {
	      cookie.push('secure');
	    }

	    document.cookie = cookie.join('; ');
	  },

	  read: function read(name) {
	    var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	    return (match ? decodeURIComponent(match[3]) : null);
	  },

	  remove: function remove(name) {
	    this.write(name, '', Date.now() - 86400000);
	  }
	};


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(318);

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {}, key, val, i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });

	  return parsed;
	};


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(318);

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  utils.forEach(fns, function (fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(318);
	var msie = /(msie|trident)/i.test(navigator.userAgent);
	var urlParsingNode = document.createElement('a');
	var originUrl;

	/**
	 * Parse a URL to discover it's components
	 *
	 * @param {String} url The URL to be parsed
	 * @returns {Object}
	 */
	function urlResolve(url) {
	  var href = url;

	  if (msie) {
	    // IE needs attribute set twice to normalize properties
	    urlParsingNode.setAttribute('href', href);
	    href = urlParsingNode.href;
	  }

	  urlParsingNode.setAttribute('href', href);

	  // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	  return {
	    href: urlParsingNode.href,
	    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	    host: urlParsingNode.host,
	    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	    hostname: urlParsingNode.hostname,
	    port: urlParsingNode.port,
	    pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	              urlParsingNode.pathname :
	              '/' + urlParsingNode.pathname
	  };
	}

	originUrl = urlResolve(window.location.href);

	/**
	 * Determine if a URL shares the same origin as the current location
	 *
	 * @param {String} requestUrl The URL to test
	 * @returns {boolean} True if URL shares the same origin, otherwise false
	 */
	module.exports = function urlIsSameOrigin(requestUrl) {
	  var parsed = (utils.isString(requestUrl)) ? urlResolve(requestUrl) : requestUrl;
	  return (parsed.protocol === originUrl.protocol &&
	        parsed.host === originUrl.host);
	};


/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(318);

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function (fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function (id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `remove`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function (fn) {
	  utils.forEach(this.handlers, function (h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	module.exports = InterceptorManager;


/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, setImmediate, global, module) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   2.3.0
	 */

	(function() {
	    "use strict";
	    function lib$es6$promise$utils$$objectOrFunction(x) {
	      return typeof x === 'function' || (typeof x === 'object' && x !== null);
	    }

	    function lib$es6$promise$utils$$isFunction(x) {
	      return typeof x === 'function';
	    }

	    function lib$es6$promise$utils$$isMaybeThenable(x) {
	      return typeof x === 'object' && x !== null;
	    }

	    var lib$es6$promise$utils$$_isArray;
	    if (!Array.isArray) {
	      lib$es6$promise$utils$$_isArray = function (x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    } else {
	      lib$es6$promise$utils$$_isArray = Array.isArray;
	    }

	    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	    var lib$es6$promise$asap$$len = 0;
	    var lib$es6$promise$asap$$toString = {}.toString;
	    var lib$es6$promise$asap$$vertxNext;
	    var lib$es6$promise$asap$$customSchedulerFn;

	    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	      lib$es6$promise$asap$$len += 2;
	      if (lib$es6$promise$asap$$len === 2) {
	        // If len is 2, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        if (lib$es6$promise$asap$$customSchedulerFn) {
	          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	        } else {
	          lib$es6$promise$asap$$scheduleFlush();
	        }
	      }
	    }

	    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	    }

	    function lib$es6$promise$asap$$setAsap(asapFn) {
	      lib$es6$promise$asap$$asap = asapFn;
	    }

	    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
	    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

	    // test for web worker but not in IE10
	    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
	      typeof importScripts !== 'undefined' &&
	      typeof MessageChannel !== 'undefined';

	    // node
	    function lib$es6$promise$asap$$useNextTick() {
	      var nextTick = process.nextTick;
	      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	      // setImmediate should be used instead instead
	      var version = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
	      if (Array.isArray(version) && version[1] === '0' && version[2] === '10') {
	        nextTick = setImmediate;
	      }
	      return function() {
	        nextTick(lib$es6$promise$asap$$flush);
	      };
	    }

	    // vertx
	    function lib$es6$promise$asap$$useVertxTimer() {
	      return function() {
	        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	      };
	    }

	    function lib$es6$promise$asap$$useMutationObserver() {
	      var iterations = 0;
	      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });

	      return function() {
	        node.data = (iterations = ++iterations % 2);
	      };
	    }

	    // web worker
	    function lib$es6$promise$asap$$useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = lib$es6$promise$asap$$flush;
	      return function () {
	        channel.port2.postMessage(0);
	      };
	    }

	    function lib$es6$promise$asap$$useSetTimeout() {
	      return function() {
	        setTimeout(lib$es6$promise$asap$$flush, 1);
	      };
	    }

	    var lib$es6$promise$asap$$queue = new Array(1000);
	    function lib$es6$promise$asap$$flush() {
	      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
	        var callback = lib$es6$promise$asap$$queue[i];
	        var arg = lib$es6$promise$asap$$queue[i+1];

	        callback(arg);

	        lib$es6$promise$asap$$queue[i] = undefined;
	        lib$es6$promise$asap$$queue[i+1] = undefined;
	      }

	      lib$es6$promise$asap$$len = 0;
	    }

	    function lib$es6$promise$asap$$attemptVertex() {
	      try {
	        var r = require;
	        var vertx = __webpack_require__(331);
	        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	        return lib$es6$promise$asap$$useVertxTimer();
	      } catch(e) {
	        return lib$es6$promise$asap$$useSetTimeout();
	      }
	    }

	    var lib$es6$promise$asap$$scheduleFlush;
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (lib$es6$promise$asap$$isNode) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	    } else if (lib$es6$promise$asap$$isWorker) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertex();
	    } else {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	    }

	    function lib$es6$promise$$internal$$noop() {}

	    var lib$es6$promise$$internal$$PENDING   = void 0;
	    var lib$es6$promise$$internal$$FULFILLED = 1;
	    var lib$es6$promise$$internal$$REJECTED  = 2;

	    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

	    function lib$es6$promise$$internal$$selfFullfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }

	    function lib$es6$promise$$internal$$cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.');
	    }

	    function lib$es6$promise$$internal$$getThen(promise) {
	      try {
	        return promise.then;
	      } catch(error) {
	        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	        return lib$es6$promise$$internal$$GET_THEN_ERROR;
	      }
	    }

	    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then.call(value, fulfillmentHandler, rejectionHandler);
	      } catch(e) {
	        return e;
	      }
	    }

	    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	       lib$es6$promise$asap$$asap(function(promise) {
	        var sealed = false;
	        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
	          if (sealed) { return; }
	          sealed = true;
	          if (thenable !== value) {
	            lib$es6$promise$$internal$$resolve(promise, value);
	          } else {
	            lib$es6$promise$$internal$$fulfill(promise, value);
	          }
	        }, function(reason) {
	          if (sealed) { return; }
	          sealed = true;

	          lib$es6$promise$$internal$$reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));

	        if (!sealed && error) {
	          sealed = true;
	          lib$es6$promise$$internal$$reject(promise, error);
	        }
	      }, promise);
	    }

	    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, thenable._result);
	      } else {
	        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      }
	    }

	    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
	      if (maybeThenable.constructor === promise.constructor) {
	        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	      } else {
	        var then = lib$es6$promise$$internal$$getThen(maybeThenable);

	        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	        } else if (then === undefined) {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        } else if (lib$es6$promise$utils$$isFunction(then)) {
	          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        }
	      }
	    }

	    function lib$es6$promise$$internal$$resolve(promise, value) {
	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFullfillment());
	      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      }
	    }

	    function lib$es6$promise$$internal$$publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }

	      lib$es6$promise$$internal$$publish(promise);
	    }

	    function lib$es6$promise$$internal$$fulfill(promise, value) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

	      promise._result = value;
	      promise._state = lib$es6$promise$$internal$$FULFILLED;

	      if (promise._subscribers.length !== 0) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	      }
	    }

	    function lib$es6$promise$$internal$$reject(promise, reason) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	      promise._state = lib$es6$promise$$internal$$REJECTED;
	      promise._result = reason;

	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	    }

	    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	      var subscribers = parent._subscribers;
	      var length = subscribers.length;

	      parent._onerror = null;

	      subscribers[length] = child;
	      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

	      if (length === 0 && parent._state) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	      }
	    }

	    function lib$es6$promise$$internal$$publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;

	      if (subscribers.length === 0) { return; }

	      var child, callback, detail = promise._result;

	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];

	        if (child) {
	          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }

	      promise._subscribers.length = 0;
	    }

	    function lib$es6$promise$$internal$$ErrorObject() {
	      this.error = null;
	    }

	    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

	    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch(e) {
	        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	      }
	    }

	    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	          value, error, succeeded, failed;

	      if (hasCallback) {
	        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

	        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value = null;
	        } else {
	          succeeded = true;
	        }

	        if (promise === value) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	          return;
	        }

	      } else {
	        value = detail;
	        succeeded = true;
	      }

	      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      } else if (failed) {
	        lib$es6$promise$$internal$$reject(promise, error);
	      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      }
	    }

	    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value){
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function rejectPromise(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      } catch(e) {
	        lib$es6$promise$$internal$$reject(promise, e);
	      }
	    }

	    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	      var enumerator = this;

	      enumerator._instanceConstructor = Constructor;
	      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

	      if (enumerator._validateInput(input)) {
	        enumerator._input     = input;
	        enumerator.length     = input.length;
	        enumerator._remaining = input.length;

	        enumerator._init();

	        if (enumerator.length === 0) {
	          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
	        } else {
	          enumerator.length = enumerator.length || 0;
	          enumerator._enumerate();
	          if (enumerator._remaining === 0) {
	            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
	          }
	        }
	      } else {
	        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
	      }
	    }

	    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
	      return lib$es6$promise$utils$$isArray(input);
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
	      return new Error('Array Methods must be provided an Array');
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
	      this._result = new Array(this.length);
	    };

	    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;

	    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
	      var enumerator = this;

	      var length  = enumerator.length;
	      var promise = enumerator.promise;
	      var input   = enumerator._input;

	      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        enumerator._eachEntry(input[i], i);
	      }
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
	      var enumerator = this;
	      var c = enumerator._instanceConstructor;

	      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
	        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
	          entry._onerror = null;
	          enumerator._settledAt(entry._state, i, entry._result);
	        } else {
	          enumerator._willSettleAt(c.resolve(entry), i);
	        }
	      } else {
	        enumerator._remaining--;
	        enumerator._result[i] = entry;
	      }
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
	      var enumerator = this;
	      var promise = enumerator.promise;

	      if (promise._state === lib$es6$promise$$internal$$PENDING) {
	        enumerator._remaining--;

	        if (state === lib$es6$promise$$internal$$REJECTED) {
	          lib$es6$promise$$internal$$reject(promise, value);
	        } else {
	          enumerator._result[i] = value;
	        }
	      }

	      if (enumerator._remaining === 0) {
	        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
	      }
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
	      var enumerator = this;

	      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
	        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	      }, function(reason) {
	        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	      });
	    };
	    function lib$es6$promise$promise$all$$all(entries) {
	      return new lib$es6$promise$enumerator$$default(this, entries).promise;
	    }
	    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	    function lib$es6$promise$promise$race$$race(entries) {
	      /*jshint validthis:true */
	      var Constructor = this;

	      var promise = new Constructor(lib$es6$promise$$internal$$noop);

	      if (!lib$es6$promise$utils$$isArray(entries)) {
	        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
	        return promise;
	      }

	      var length = entries.length;

	      function onFulfillment(value) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      }

	      function onRejection(reason) {
	        lib$es6$promise$$internal$$reject(promise, reason);
	      }

	      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
	      }

	      return promise;
	    }
	    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	    function lib$es6$promise$promise$resolve$$resolve(object) {
	      /*jshint validthis:true */
	      var Constructor = this;

	      if (object && typeof object === 'object' && object.constructor === Constructor) {
	        return object;
	      }

	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$resolve(promise, object);
	      return promise;
	    }
	    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	    function lib$es6$promise$promise$reject$$reject(reason) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$reject(promise, reason);
	      return promise;
	    }
	    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

	    var lib$es6$promise$promise$$counter = 0;

	    function lib$es6$promise$promise$$needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }

	    function lib$es6$promise$promise$$needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }

	    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.

	      Terminology
	      -----------

	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.

	      A promise can be in one of three states: pending, fulfilled, or rejected.

	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.

	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.


	      Basic Usage:
	      ------------

	      ```js
	      var promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);

	        // on failure
	        reject(reason);
	      });

	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```

	      Advanced Usage:
	      ---------------

	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.

	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          var xhr = new XMLHttpRequest();

	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();

	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }

	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```

	      Unlike callbacks, promises are great composable primitives.

	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON

	        return values;
	      });
	      ```

	      @class Promise
	      @param {function} resolver
	      Useful for tooling.
	      @constructor
	    */
	    function lib$es6$promise$promise$$Promise(resolver) {
	      this._id = lib$es6$promise$promise$$counter++;
	      this._state = undefined;
	      this._result = undefined;
	      this._subscribers = [];

	      if (lib$es6$promise$$internal$$noop !== resolver) {
	        if (!lib$es6$promise$utils$$isFunction(resolver)) {
	          lib$es6$promise$promise$$needsResolver();
	        }

	        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
	          lib$es6$promise$promise$$needsNew();
	        }

	        lib$es6$promise$$internal$$initializePromise(this, resolver);
	      }
	    }

	    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

	    lib$es6$promise$promise$$Promise.prototype = {
	      constructor: lib$es6$promise$promise$$Promise,

	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.

	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```

	      Chaining
	      --------

	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.

	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });

	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```

	      Assimilation
	      ------------

	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.

	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```

	      If the assimliated promise rejects, then the downstream promise will also reject.

	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```

	      Simple Example
	      --------------

	      Synchronous Example

	      ```javascript
	      var result;

	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```

	      Errback Example

	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```

	      Promise Example;

	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```

	      Advanced Example
	      --------------

	      Synchronous Example

	      ```javascript
	      var author, books;

	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```

	      Errback Example

	      ```js

	      function foundBooks(books) {

	      }

	      function failure(reason) {

	      }

	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```

	      Promise Example;

	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```

	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	      then: function(onFulfillment, onRejection) {
	        var parent = this;
	        var state = parent._state;

	        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
	          return this;
	        }

	        var child = new this.constructor(lib$es6$promise$$internal$$noop);
	        var result = parent._result;

	        if (state) {
	          var callback = arguments[state - 1];
	          lib$es6$promise$asap$$asap(function(){
	            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
	          });
	        } else {
	          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	        }

	        return child;
	      },

	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.

	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }

	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }

	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```

	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	      'catch': function(onRejection) {
	        return this.then(null, onRejection);
	      }
	    };
	    function lib$es6$promise$polyfill$$polyfill() {
	      var local;

	      if (typeof global !== 'undefined') {
	          local = global;
	      } else if (typeof self !== 'undefined') {
	          local = self;
	      } else {
	          try {
	              local = Function('return this')();
	          } catch (e) {
	              throw new Error('polyfill failed because global object is unavailable in this environment');
	          }
	      }

	      var P = local.Promise;

	      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	        return;
	      }

	      local.Promise = lib$es6$promise$promise$$default;
	    }
	    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

	    var lib$es6$promise$umd$$ES6Promise = {
	      'Promise': lib$es6$promise$promise$$default,
	      'polyfill': lib$es6$promise$polyfill$$default
	    };

	    /* global define:true module:true window: true */
	    if ("function" === 'function' && __webpack_require__(332)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }

	    lib$es6$promise$polyfill$$default();
	}).call(this);


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(260), __webpack_require__(329).setImmediate, (function() { return this; }()), __webpack_require__(330)(module)))

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(260).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(329).setImmediate, __webpack_require__(329).clearImmediate))

/***/ },
/* 330 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 331 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 332 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 333 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function (arr) {
	    callback.apply(null, arr);
	  };
	};


/***/ },
/* 334 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = {
		// Api_URL: 'https://tocu-api-dev-tranduchieu.c9.io',
		Api_URL: 'http://api-dev.tocu.vn'
	};
	module.exports = exports['default'];

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _regeneratorRuntime = __webpack_require__(258)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _axios = __webpack_require__(315);

	var _axios2 = _interopRequireDefault(_axios);

	var _configSample = __webpack_require__(334);

	var SanphamActions = (function () {
	  function SanphamActions() {
	    _classCallCheck(this, SanphamActions);
	  }

	  _createClass(SanphamActions, [{
	    key: 'getSanphamID',

	    /**
	     * lấy thông tin sản phẩm
	     * @param  {number} id [id sản phẩm]
	     * @dispatch {object}    thông tin sản phẩm
	     */
	    value: function getSanphamID(_ref) {
	      var id = _ref.id;
	      var self;
	      return _regeneratorRuntime.async(function getSanphamID$(context$2$0) {
	        while (1) switch (context$2$0.prev = context$2$0.next) {
	          case 0:
	            self = this;
	            context$2$0.next = 3;
	            return _regeneratorRuntime.awrap(_axios2['default'].get(_configSample.Api_URL + '/product/' + id).then(function (res) {
	              /**
	               * send data cho Store
	               */
	              self.dispatch(res.data);
	            })['catch'](function (res) {
	              /**
	               * send lỗi cho func getIdFailed
	               * @param  {Error} [Error request]
	               */
	              self.actions.getIdFailed(res.data);
	            }));

	          case 3:
	          case 'end':
	            return context$2$0.stop();
	        }
	      }, null, this);
	    }

	    /**
	     * send lỗi cho Store
	     * @param  {Error} err [Error request]
	     * @dispatch {Error} [send Store]
	     */
	  }, {
	    key: 'getIdFailed',
	    value: function getIdFailed(err) {
	      this.dispatch(err);
	    }

	    /**
	     * actions view san pham ID
	     * @param  {object} sanpham - san pham nguoi dung click view
	     * @dispatch {object}
	     */
	  }, {
	    key: 'actionSanphamID',
	    value: function actionSanphamID(sanpham) {
	      this.dispatch(sanpham);
	    }
	  }, {
	    key: 'like',
	    value: function like(_ref2) {
	      var itemId = _ref2.itemId;
	      var token = _ref2.token;
	      var type = _ref2.type;

	      var self = this;

	      _axios2['default'].post(_configSample.Api_URL + '/like', { type: type, itemId: itemId }, {
	        headers: { 'Authorization': 'Bearer ' + localStorage.access_token }
	      }).then(function (res) {
	        self.dispatch(res.data);
	      })['catch'](function (res) {
	        self.actions.likeFailed(res.data);
	      });
	    }
	  }, {
	    key: 'getHasOrder',
	    value: function getHasOrder(_ref3) {
	      var id = _ref3.id;

	      var self = this;

	      _axios2['default'].get(_configSample.Api_URL + '/order', {
	        params: {
	          filters: 'status==open;id==' + id
	        },
	        headers: { 'Authorization': 'Bearer ' + localStorage.access_token }
	      }).then(function (res) {
	        console.log('then getHasOrder', res.data);
	        // self.dispatch(res.data);
	      })['catch'](function (res) {
	        console.log('catch getHasOrder', res.data);
	        // self.actions.likeFailed(res.data);
	      });
	    }
	  }, {
	    key: 'likeFailed',
	    value: function likeFailed(err) {
	      console.log('likeFailed', err);
	    }
	  }, {
	    key: 'count',
	    value: function count() {
	      var self = this;
	      _axios2['default'].get(_configSample.Api_URL + '/product/count').then(function (res) {
	        self.dispatch(res.data);
	      });
	    }
	  }]);

	  return SanphamActions;
	})();

	module.exports = _Alt2['default'].createActions(SanphamActions);

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	/* @jsx React.DOM */
	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _storeBoxStore = __webpack_require__(338);

	var _storeBoxStore2 = _interopRequireDefault(_storeBoxStore);

	var _storeAuthStore = __webpack_require__(343);

	var _storeAuthStore2 = _interopRequireDefault(_storeAuthStore);

	var _storeCartStore = __webpack_require__(348);

	var _storeCartStore2 = _interopRequireDefault(_storeCartStore);

	var _storeSanphamStore = __webpack_require__(349);

	var _storeSanphamStore2 = _interopRequireDefault(_storeSanphamStore);

	var _actionsAuthActions = __webpack_require__(344);

	var _actionsAuthActions2 = _interopRequireDefault(_actionsAuthActions);

	/**
	 * @Component
	 */

	var _NavbarNavbar = __webpack_require__(350);

	var _NavbarNavbar2 = _interopRequireDefault(_NavbarNavbar);

	var _HomeInfoBar = __webpack_require__(351);

	var _HomeInfoBar2 = _interopRequireDefault(_HomeInfoBar);

	var _HomeProfileInfo = __webpack_require__(352);

	var _HomeProfileInfo2 = _interopRequireDefault(_HomeProfileInfo);

	var Home = (function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home(props) {
	    var _this = this;

	    _classCallCheck(this, Home);

	    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);

	    this._onChangeAuthStore = function (state) {
	      _this.setState({
	        auth: state.auth
	      });
	    };

	    this._onChangeSanphamStore = function (state) {
	      _this.setState({
	        countSanpham: state.count
	      });
	    };

	    this._onChangeBoxStore = function (state) {
	      _this.setState({
	        box: state.boxs
	      });
	    };

	    this._onChangeCartStore = function (state) {
	      _this.setState({
	        count: _storeCartStore2['default'].getCountCart()
	      });
	    };

	    this.state = {
	      auth: _storeAuthStore2['default'].getState().auth,
	      countSanpham: _storeSanphamStore2['default'].getState().count,
	      box: _storeBoxStore2['default'].getState().boxs,
	      count: _storeCartStore2['default'].getCountCart()
	    };
	  }

	  _createClass(Home, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storeAuthStore2['default'].listen(this._onChangeAuthStore);
	      _storeBoxStore2['default'].listen(this._onChangeBoxStore);
	      _storeSanphamStore2['default'].listen(this._onChangeSanphamStore);
	      _storeCartStore2['default'].listen(this._onChangeCartStore);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storeAuthStore2['default'].unlisten(this._onChangeAuthStore);
	      _storeBoxStore2['default'].unlisten(this._onChangeBoxStore);
	      _storeSanphamStore2['default'].unlisten(this._onChangeSanphamStore);
	      _storeCartStore2['default'].unlisten(this._onChangeCartStore);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        'header',
	        null,
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'container-fluid' },
	          _reactAddons2['default'].createElement(_NavbarNavbar2['default'], {
	            count: this.state.count,
	            AuthActions: _actionsAuthActions2['default'],
	            auth: this.state.auth }),
	          _reactAddons2['default'].createElement(_HomeProfileInfo2['default'], null),
	          _reactAddons2['default'].createElement(_HomeInfoBar2['default'], {
	            countSanpham: this.state.countSanpham,
	            Box: this.state.box })
	        )
	      );
	    }
	  }], [{
	    key: 'contextTypes',
	    value: {
	      router: _reactAddons2['default'].PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  return Home;
	})(_reactAddons2['default'].Component);

	exports['default'] = Home;
	;
	module.exports = exports['default'];

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function () {
		'use strict';

		function classNames () {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;

				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);

				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}

	}());


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _Array$from = __webpack_require__(339)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _actionsBoxActions = __webpack_require__(314);

	var _actionsBoxActions2 = _interopRequireDefault(_actionsBoxActions);

	var _immutable = __webpack_require__(342);

	var _immutable2 = _interopRequireDefault(_immutable);

	var BoxStore = (function () {
	  function BoxStore() {
	    _classCallCheck(this, BoxStore);

	    this.bindActions(_actionsBoxActions2['default']); // getBoxs, getBoxID, like, boxsFailed, getBoxIDFailed, likeFailed
	    this.on('init', this.bootstrap);
	    this.on('bootstrap', this.bootstrap);

	    this.boxs = _immutable2['default'].List();
	    this.test = _immutable2['default'].List();
	    this.info = _immutable2['default'].Map();
	  }

	  _createClass(BoxStore, [{
	    key: 'bootstrap',
	    value: function bootstrap() {
	      if (!_immutable2['default'].List.isList(this.boxs)) {
	        this.boxs = _immutable2['default'].fromJS(this.boxs);
	      }
	      if (!_immutable2['default'].List.isList(this.test)) {
	        this.test = _immutable2['default'].fromJS(this.test);
	      }
	      if (!_immutable2['default'].List.isList(this.info)) {
	        this.info = _immutable2['default'].fromJS(this.info);
	      }
	    }
	  }, {
	    key: 'onGetBoxs',
	    value: function onGetBoxs(data) {
	      this.boxs = this.boxs.merge(_Array$from(data));
	    }
	  }, {
	    key: 'onGetBoxID',
	    value: function onGetBoxID(data) {
	      this.info = this.info.merge(data);
	    }
	  }, {
	    key: 'onLike',
	    value: function onLike(id) {
	      this.boxs = this.boxs.update(this.boxs.findIndex(function (item) {
	        return item.get("id") === id;
	      }), function (item) {
	        return item.updateIn(['likesCount'], function (value) {
	          return value + 1;
	        });
	      });

	      this.info = this.info.updateIn(['likesCount'], function (value) {
	        return value + 1;
	      });
	    }
	  }, {
	    key: 'onBoxsFailed',
	    value: function onBoxsFailed(err) {
	      console.log('onBoxsFailed', err);
	    }
	  }, {
	    key: 'onGetBoxIDFailed',
	    value: function onGetBoxIDFailed(err) {
	      console.log('onGetBoxIDFailed', err);
	    }
	  }]);

	  return BoxStore;
	})();

	module.exports = _Alt2['default'].createStore(BoxStore, 'BoxStore');

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(340), __esModule: true };

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(277);
	__webpack_require__(341);
	module.exports = __webpack_require__(7).Array.from;

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(232)
	  , $def        = __webpack_require__(5)
	  , toObject    = __webpack_require__(9)
	  , call        = __webpack_require__(295)
	  , isArrayIter = __webpack_require__(296)
	  , toLength    = __webpack_require__(297)
	  , getIterFn   = __webpack_require__(298);
	$def($def.S + $def.F * !__webpack_require__(306)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike, true)
	      , C       = typeof this == 'function' ? this : Array
	      , mapfn   = arguments[1]
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      for(result = new C(length = toLength(O.length)); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.Immutable = factory()
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }

	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';

	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;

	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};

	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };

	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }

	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }

	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}

	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }

	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }

	  function wrapIndex(iter, index) {
	    return index >= 0 ? (+index) : ensureSize(iter) + (+index);
	  }

	  function returnTrue() {
	    return true;
	  }

	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }

	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }

	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }

	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }

	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }


	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }


	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }


	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }



	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }

	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }

	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }

	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }

	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }

	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;

	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;


	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  /* global Symbol */

	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;

	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';

	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


	  function src_Iterator__Iterator(next) {
	      this.next = next;
	    }

	    src_Iterator__Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };


	  src_Iterator__Iterator.KEYS = ITERATE_KEYS;
	  src_Iterator__Iterator.VALUES = ITERATE_VALUES;
	  src_Iterator__Iterator.ENTRIES = ITERATE_ENTRIES;

	  src_Iterator__Iterator.prototype.inspect =
	  src_Iterator__Iterator.prototype.toSource = function () { return this.toString(); }
	  src_Iterator__Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };


	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }

	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }

	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }

	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }

	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }

	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }

	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }

	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };

	    Seq.prototype.toSeq = function() {
	      return this;
	    };

	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };

	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };

	    // abstract __iterateUncached(fn, reverse)

	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };

	    // abstract __iteratorUncached(type, reverse)

	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };



	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }

	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };



	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }

	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };

	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };

	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };

	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };

	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };



	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }

	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };

	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };



	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;

	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

	  Seq.prototype[IS_SEQ_SENTINEL] = true;



	  // #pragma Root Sequences

	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }

	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };

	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new src_Iterator__Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };



	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }

	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };

	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };

	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new src_Iterator__Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };

	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }

	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };

	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new src_Iterator__Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new src_Iterator__Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };



	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }

	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };

	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new src_Iterator__Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };




	  // # pragma Helper functions

	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }

	  var EMPTY_SEQ;

	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }

	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }

	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }

	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }

	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new src_Iterator__Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }

	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }


	  createClass(KeyedCollection, Collection);function KeyedCollection() {}

	  createClass(IndexedCollection, Collection);function IndexedCollection() {}

	  createClass(SetCollection, Collection);function SetCollection() {}


	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;

	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }

	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }

	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }

	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }

	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }

	  var src_Math__imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function src_Math__imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };

	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }

	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    return hashJSObj(o);
	  }

	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }

	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }

	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }

	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }

	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }

	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }

	    return hash;
	  }

	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;

	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());

	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }

	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }

	  var objHashUID = 0;

	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }

	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};

	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }

	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }

	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }

	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };

	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };

	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };

	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };

	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };

	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };

	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new src_Iterator__Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };

	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };

	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };

	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new src_Iterator__Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };



	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };

	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };

	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new src_Iterator__Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };



	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }

	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };

	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };

	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new src_Iterator__Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };


	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;


	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new src_Iterator__Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }


	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new src_Iterator__Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }


	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }


	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new src_Iterator__Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }


	  function countByFactory(iterable, grouper, context) {
	    var groups = src_Map__Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }


	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : src_Map__Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }


	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;

	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }

	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);

	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }

	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }

	    var sliceSeq = makeSequence(iterable);

	    sliceSeq.size = sliceSize;

	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }

	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };

	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new src_Iterator__Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }

	    return sliceSeq;
	  }


	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new src_Iterator__Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }


	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new src_Iterator__Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }


	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});

	    if (iters.length === 0) {
	      return iterable;
	    }

	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }

	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }


	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new src_Iterator__Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }


	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }


	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new src_Iterator__Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }


	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }


	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }

	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }


	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new src_Iterator__Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }


	  // #pragma Helper Functions

	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }

	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }

	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }

	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }

	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }

	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }

	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }

	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }

	  createClass(src_Map__Map, KeyedCollection);

	    // @pragma Construction

	    function src_Map__Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    src_Map__Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };

	    // @pragma Access

	    src_Map__Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };

	    // @pragma Modification

	    src_Map__Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };

	    src_Map__Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };

	    src_Map__Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };

	    src_Map__Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };

	    src_Map__Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };

	    src_Map__Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };

	    src_Map__Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };

	    // @pragma Composition

	    src_Map__Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };

	    src_Map__Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };

	    src_Map__Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    src_Map__Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger(undefined), arguments);
	    };

	    src_Map__Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMerger(merger), iters);
	    };

	    src_Map__Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    src_Map__Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };

	    src_Map__Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };

	    // @pragma Mutability

	    src_Map__Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };

	    src_Map__Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };

	    src_Map__Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };

	    src_Map__Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };

	    src_Map__Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };

	    src_Map__Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };

	    src_Map__Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };


	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }

	  src_Map__Map.isMap = isMap;

	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

	  var MapPrototype = src_Map__Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;


	  // #pragma Trie Nodes



	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }

	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && entries.length === 1) {
	        return; // undefined
	      }

	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new ArrayMapNode(ownerID, newEntries);
	    };




	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }

	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };

	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;

	      if (!exists && value === NOT_SET) {
	        return this;
	      }

	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

	      if (newNode === node) {
	        return this;
	      }

	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }

	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }

	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };




	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }

	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };

	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];

	      if (removed && !node) {
	        return this;
	      }

	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }

	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };




	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }

	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }

	      var removed = value === NOT_SET;

	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };




	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }

	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };

	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }

	      SetRef(didAlter);

	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }

	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }

	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };



	  // #pragma Iterators

	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }

	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }

	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }

	  createClass(MapIterator, src_Iterator__Iterator);

	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }

	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };


	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }

	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }

	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }

	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }

	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }

	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }

	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }

	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }

	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }

	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }

	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }

	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }

	  function deepMerger(merger) {
	    return function(existing, value, key) 
	      {return existing && existing.mergeDeepWith && isIterable(value) ?
	        existing.mergeDeepWith(merger, value) :
	        merger ? merger(existing, value, key) : value};
	  }

	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }

	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }

	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }

	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }

	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }

	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }

	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

	  createClass(List, IndexedCollection);

	    // @pragma Construction

	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }

	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };

	    // @pragma Access

	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index < 0 || index >= this.size) {
	        return notSetValue;
	      }
	      index += this._origin;
	      var node = listNodeFor(this, index);
	      return node && node.array[index & MASK];
	    };

	    // @pragma Modification

	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };

	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };

	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };

	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };

	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };

	    // @pragma Composition

	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };

	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };

	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger(undefined), arguments);
	    };

	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMerger(merger), iters);
	    };

	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };

	    // @pragma Iteration

	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };

	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new src_Iterator__Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };

	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };

	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };


	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }

	  List.isList = isList;

	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;



	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }

	    // TODO: seems like these methods are very similar

	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };

	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }
	      var removingLast = sizeIndex === this.array.length - 1;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingLast) {
	          return this;
	        }
	      }
	      if (removingLast && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingLast) {
	        editable.array.pop();
	      }
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };



	  var DONE = {};

	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;

	    return iterateNodeOrLeaf(list._root, list._level, 0);

	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }

	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }

	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }

	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }

	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }

	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);

	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }

	    index += list._origin;

	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }

	    if (!didAlter.value) {
	      return list;
	    }

	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }

	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }

	    var newNode;

	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }

	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }

	    SetRef(didAlter);

	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }

	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }

	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }

	  function setListBounds(list, begin, end) {
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }

	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }

	    var newLevel = list._level;
	    var newRoot = list._root;

	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }

	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);

	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }

	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }

	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }

	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;

	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }

	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }

	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }

	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }

	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }

	  createClass(OrderedMap, src_Map__Map);

	    // @pragma Construction

	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };

	    // @pragma Access

	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };

	    // @pragma Modification

	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };

	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };

	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };

	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };

	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };

	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };

	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };


	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }

	  OrderedMap.isOrderedMap = isOrderedMap;

	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }

	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }

	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }

	  createClass(Stack, IndexedCollection);

	    // @pragma Construction

	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }

	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };

	    // @pragma Access

	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };

	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };

	    // @pragma Modification

	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };

	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };

	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };

	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };

	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };

	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    // @pragma Mutability

	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };

	    // @pragma Iteration

	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };

	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new src_Iterator__Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };


	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }

	  Stack.isStack = isStack;

	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;


	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }

	  createClass(src_Set__Set, SetCollection);

	    // @pragma Construction

	    function src_Set__Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    src_Set__Set.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    src_Set__Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    src_Set__Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };

	    // @pragma Access

	    src_Set__Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };

	    // @pragma Modification

	    src_Set__Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };

	    src_Set__Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };

	    src_Set__Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };

	    // @pragma Composition

	    src_Set__Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };

	    src_Set__Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    src_Set__Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    src_Set__Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };

	    src_Set__Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };

	    src_Set__Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };

	    src_Set__Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };

	    src_Set__Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    src_Set__Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };

	    src_Set__Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };

	    src_Set__Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };


	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }

	  src_Set__Set.isSet = isSet;

	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

	  var SetPrototype = src_Set__Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;

	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;

	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }

	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }

	  createClass(OrderedSet, src_Set__Set);

	    // @pragma Construction

	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };


	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }

	  OrderedSet.isOrderedSet = isOrderedSet;

	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;

	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }

	  createClass(Record, KeyedCollection);

	    function Record(defaultValues, name) {
	      var hasInitialized;

	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = src_Map__Map(values);
	      };

	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;

	      return RecordType;
	    }

	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };

	    // @pragma Access

	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };

	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };

	    // @pragma Modification

	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };

	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };

	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };

	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };


	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;


	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }

	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }

	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }

	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }

	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }

	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }

	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }

	    var notAssociative = !isAssociative(a);

	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }

	    var flipped = false;

	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }

	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });

	    return allEqual && a.size === bSize;
	  }

	  createClass(Range, IndexedSeq);

	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }

	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step > 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };

	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };

	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };

	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };

	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };

	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };

	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };

	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new src_Iterator__Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };

	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };


	  var EMPTY_RANGE;

	  createClass(Repeat, IndexedSeq);

	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }

	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };

	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };

	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };

	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };

	    Repeat.prototype.reverse = function() {
	      return this;
	    };

	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };

	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };

	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new src_Iterator__Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };

	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };


	  var EMPTY_REPEAT;

	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }

	  Iterable.Iterator = src_Iterator__Iterator;

	  mixin(Iterable, {

	    // ### Conversion to other types

	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },

	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },

	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },

	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },

	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return src_Map__Map(this.toKeyedSeq());
	    },

	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },

	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },

	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return src_Set__Set(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },

	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },

	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },


	    // ### Common JavaScript methods and properties

	    toString: function() {
	      return '[Iterable]';
	    },

	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },

	    contains: function(searchValue) {
	      return this.includes(searchValue);
	    },

	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },

	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },

	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },

	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },

	    findEntry: function(predicate, context) {
	      var found;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },

	    findLastEntry: function(predicate, context) {
	      return this.toSeq().reverse().findEntry(predicate, context);
	    },

	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },

	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },

	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },

	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },

	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },

	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },

	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },

	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },

	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },


	    // ### More sequential methods

	    butLast: function() {
	      return this.slice(0, -1);
	    },

	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },

	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },

	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },

	    equals: function(other) {
	      return deepEqual(this, other);
	    },

	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },

	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },

	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },

	    first: function() {
	      return this.find(returnTrue);
	    },

	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },

	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },

	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },

	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },

	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },

	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },

	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },

	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },

	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },

	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },

	    last: function() {
	      return this.toSeq().reverse().first();
	    },

	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },

	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },

	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },

	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },

	    rest: function() {
	      return this.slice(1);
	    },

	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },

	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },

	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },

	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },

	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },

	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },

	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },

	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },

	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },


	    // ### Hashable Object

	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    },


	    // ### Internal

	    // abstract __iterate(fn, reverse)

	    // abstract __iterator(type, reverse)
	  });

	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;

	  // Temporary warning about using length
	  (function () {
	    try {
	      Object.defineProperty(IterablePrototype, 'length', {
	        get: function () {
	          if (!Iterable.noLengthWarning) {
	            var stack;
	            try {
	              throw new Error();
	            } catch (error) {
	              stack = error.stack;
	            }
	            if (stack.indexOf('_wrapObject') === -1) {
	              console && console.warn && console.warn(
	                'iterable.length has been deprecated, '+
	                'use iterable.size or iterable.count(). '+
	                'This warning will become a silent error in a future version. ' +
	                stack
	              );
	              return this.size;
	            }
	          }
	        }
	      });
	    } catch (e) {}
	  })();



	  mixin(KeyedIterable, {

	    // ### More sequential methods

	    flip: function() {
	      return reify(this, flipFactory(this));
	    },

	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },

	    findLastKey: function(predicate, context) {
	      return this.toSeq().reverse().findKey(predicate, context);
	    },

	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },

	    lastKeyOf: function(searchValue) {
	      return this.findLastKey(function(value ) {return is(value, searchValue)});
	    },

	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },

	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    },

	  });

	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



	  mixin(IndexedIterable, {

	    // ### Conversion to other types

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },

	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    indexOf: function(searchValue) {
	      var key = this.toKeyedSeq().keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    lastIndexOf: function(searchValue) {
	      return this.toSeq().reverse().indexOf(searchValue);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },

	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      index = resolveBegin(index, this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },


	    // ### More collection methods

	    findLastIndex: function(predicate, context) {
	      var key = this.toKeyedSeq().findLastKey(predicate, context);
	      return key === undefined ? -1 : key;
	    },

	    first: function() {
	      return this.get(0);
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },

	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },

	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },

	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },

	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },

	    last: function() {
	      return this.get(-1);
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },

	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },

	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    },

	  });

	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



	  mixin(SetIterable, {

	    // ### ES6 Collection methods (ES6 Array and Map)

	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },

	    includes: function(value) {
	      return this.has(value);
	    },


	    // ### More sequential methods

	    keySeq: function() {
	      return this.valueSeq();
	    },

	  });

	  SetIterable.prototype.has = IterablePrototype.includes;


	  // Mixin subclasses

	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);

	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);


	  // #pragma Helper functions

	  function keyMapper(v, k) {
	    return k;
	  }

	  function entryMapper(v, k) {
	    return [k, v];
	  }

	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }

	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }

	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : value;
	  }

	  function defaultZipper() {
	    return arrCopy(arguments);
	  }

	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }

	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }

	  function murmurHashOfSize(size, h) {
	    h = src_Math__imul(h, 0xCC9E2D51);
	    h = src_Math__imul(h << 15 | h >>> -15, 0x1B873593);
	    h = src_Math__imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = src_Math__imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = src_Math__imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }

	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }

	  var Immutable = {

	    Iterable: Iterable,

	    Seq: Seq,
	    Collection: Collection,
	    Map: src_Map__Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: src_Set__Set,
	    OrderedSet: OrderedSet,

	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,

	    is: is,
	    fromJS: fromJS,

	  };

	  return Immutable;

	}));

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _actionsAuthActions = __webpack_require__(344);

	var _actionsAuthActions2 = _interopRequireDefault(_actionsAuthActions);

	var _actionsVerifyActions = __webpack_require__(347);

	var _actionsVerifyActions2 = _interopRequireDefault(_actionsVerifyActions);

	var _cookiesJs = __webpack_require__(345);

	var _cookiesJs2 = _interopRequireDefault(_cookiesJs);

	var _immutable = __webpack_require__(342);

	var _immutable2 = _interopRequireDefault(_immutable);

	var AuthStore = (function () {
	  function AuthStore() {
	    _classCallCheck(this, AuthStore);

	    this.bindActions(_actionsAuthActions2['default']); // CreateUser, Login, CreateUserStart, CreateFailed, LoginFailed, onLogout
	    this.bindAction(_actionsVerifyActions2['default'].getVerify, this.onGetVerify);
	    this.on('init', this.bootstrap);
	    this.on('bootstrap', this.bootstrap);

	    this.auth = new _immutable.Map({});
	    this.failedCreateMessage = null;
	    this.createUseState = null;
	    this.loginState = null;
	  }

	  _createClass(AuthStore, [{
	    key: 'bootstrap',
	    value: function bootstrap() {
	      if (!_immutable2['default'].Map.isMap(this.auth)) {
	        this.auth = _immutable2['default'].fromJS(this.auth);
	      }
	    }
	  }, {
	    key: 'onCreateUser',
	    value: function onCreateUser(data) {
	      _cookiesJs2['default'].set('access_token', data.access_token, { expires: data.expires_in }); //  Expires in day.expires_in sec

	      this.createUseState = "success";
	      this.auth = this.auth.merge(data);
	      localStorage.auth = JSON.stringify(data);
	      localStorage.access_token = data.access_token; // ko có access_token
	    }
	  }, {
	    key: 'onLogin',
	    value: function onLogin(data) {
	      _cookiesJs2['default'].set('access_token', data.access_token, { expires: data.expires_in }); //  Expires in data.expires_in sec
	      _cookiesJs2['default'].expire('cart'); //  Will expire the cookie with a path of '/'

	      this.loginState = "success";
	      this.auth = this.auth.merge(data);
	      localStorage.auth = JSON.stringify(data);
	      localStorage.access_token = data.access_token;
	    }
	  }, {
	    key: 'onLogout',
	    value: function onLogout() {
	      _cookiesJs2['default'].expire('access_token'); //  Will expire the cookie with a path of '/'

	      this.createUseState = "";
	      this.loginState = "logout";
	      this.auth = new _immutable.Map({});
	      delete localStorage.auth;
	      delete localStorage.access_token;
	    }
	  }, {
	    key: 'onCreateUserStart',
	    value: function onCreateUserStart() {
	      this.failedCreateMessage = null;
	      this.createUseState = "loading";
	    }
	  }, {
	    key: 'onGetVerify',
	    value: function onGetVerify(data) {
	      console.log('AuthStore onGetVerify', data);
	      this.auth = this.auth.set('isVerifyMobilePhone', true);
	    }
	  }, {
	    key: 'onLoginStart',
	    value: function onLoginStart() {
	      this.loginState = "loading";
	    }
	  }, {
	    key: 'onCreateFailed',
	    value: function onCreateFailed(err) {
	      this.createUseState = "failed";
	      this.failedCreateMessage = err.message;
	    }
	  }, {
	    key: 'onLoginFailed',
	    value: function onLoginFailed(err) {
	      this.loginState = "failed";
	    }
	  }], [{
	    key: 'getToken',
	    value: function getToken() {
	      return;
	    }
	  }]);

	  return AuthStore;
	})();

	module.exports = _Alt2['default'].createStore(AuthStore, 'AuthStore');

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _axios = __webpack_require__(315);

	var _axios2 = _interopRequireDefault(_axios);

	var _configSample = __webpack_require__(334);

	var _cookiesJs = __webpack_require__(345);

	var _cookiesJs2 = _interopRequireDefault(_cookiesJs);

	var _CartActions = __webpack_require__(346);

	var _CartActions2 = _interopRequireDefault(_CartActions);

	var AuthActions = (function () {
	  function AuthActions() {
	    _classCallCheck(this, AuthActions);
	  }

	  _createClass(AuthActions, [{
	    key: 'CreateUser',

	    /**
	     * Create accout User
	     * @param {string} options.name        - họ tên
	     * @param {string} options.password    - mật khẩu
	     * @param {number} options.mobilePhone - số điện thoại
	     * @param {string} options.city        - tỉnh thành
	     * @param {string} options.district    - quận/huyện
	     */
	    value: function CreateUser(_ref) {
	      var name = _ref.name;
	      var password = _ref.password;
	      var mobilePhone = _ref.mobilePhone;
	      var city = _ref.city;
	      var district = _ref.district;

	      var self = this;
	      self.actions.CreateUserStart();

	      _axios2['default'].post(_configSample.Api_URL + '/user', {
	        name: name,
	        password: password,
	        mobilePhone: mobilePhone,
	        city: city,
	        district: district
	      }).then(function (res) {
	        self.dispatch(res.data);
	      })['catch'](function (res) {
	        self.actions.CreateFailed(res.data);
	      });
	    }

	    /**
	     * Login
	     * @param {number} mobilePhone - số điện thoại
	     * @param {string} password - mật khẩu
	     */
	  }, {
	    key: 'Login',
	    value: function Login(_ref2) {
	      var mobilePhone = _ref2.mobilePhone;
	      var password = _ref2.password;

	      var self = this;
	      self.actions.LoginStart();

	      _axios2['default'].post(_configSample.Api_URL + '/token', {
	        mobilePhone: mobilePhone,
	        password: password,
	        cartId: _cookiesJs2['default'].get('cart')
	      }).then(function (res) {
	        self.dispatch(res.data);
	        setTimeout(function () {
	          _CartActions2['default'].getCart();
	        }, 1000);
	      })['catch'](function (res) {
	        self.actions.LoginFailed(res.data);
	      });
	    }

	    /**
	     * Logout
	     */
	  }, {
	    key: 'Logout',
	    value: function Logout() {
	      var self = this;

	      _axios2['default'].get(_configSample.Api_URL + '/token/expire', {
	        headers: { 'Authorization': 'Bearer ' + localStorage.access_token }
	      }).then(function (res) {
	        self.dispatch();
	        setTimeout(function () {
	          _CartActions2['default'].empty();
	        }, 1000);
	      })['catch'](function (res) {
	        console.log('err Logout', res);
	      });
	    }

	    /**
	     * Actions Start Create User
	     */
	  }, {
	    key: 'CreateUserStart',
	    value: function CreateUserStart() {
	      this.dispatch();
	    }

	    /**
	     * Actions Start Login
	     */
	  }, {
	    key: 'LoginStart',
	    value: function LoginStart() {
	      this.dispatch();
	    }

	    /**
	     * Create User Failed
	     * @param {Error} err - lỗi create accout
	     */
	  }, {
	    key: 'CreateFailed',
	    value: function CreateFailed(err) {
	      this.dispatch(err);
	    }

	    /**
	     * Login Failed
	     * @param {Error} err - lỗi đăng nhập
	     */
	  }, {
	    key: 'LoginFailed',
	    value: function LoginFailed(err) {
	      this.dispatch(err);
	    }
	  }]);

	  return AuthActions;
	})();

	module.exports = _Alt2['default'].createActions(AuthActions);

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Cookies.js - 1.2.1
	 * https://github.com/ScottHamper/Cookies
	 *
	 * This is free and unencumbered software released into the public domain.
	 */
	(function (global, undefined) {
	    'use strict';

	    var factory = function (window) {
	        if (typeof window.document !== 'object') {
	            throw new Error('Cookies.js requires a `window` with a `document` object');
	        }

	        var Cookies = function (key, value, options) {
	            return arguments.length === 1 ?
	                Cookies.get(key) : Cookies.set(key, value, options);
	        };

	        // Allows for setter injection in unit tests
	        Cookies._document = window.document;

	        // Used to ensure cookie keys do not collide with
	        // built-in `Object` properties
	        Cookies._cacheKeyPrefix = 'cookey.'; // Hurr hurr, :)
	        
	        Cookies._maxExpireDate = new Date('Fri, 31 Dec 9999 23:59:59 UTC');

	        Cookies.defaults = {
	            path: '/',
	            secure: false
	        };

	        Cookies.get = function (key) {
	            if (Cookies._cachedDocumentCookie !== Cookies._document.cookie) {
	                Cookies._renewCache();
	            }

	            return Cookies._cache[Cookies._cacheKeyPrefix + key];
	        };

	        Cookies.set = function (key, value, options) {
	            options = Cookies._getExtendedOptions(options);
	            options.expires = Cookies._getExpiresDate(value === undefined ? -1 : options.expires);

	            Cookies._document.cookie = Cookies._generateCookieString(key, value, options);

	            return Cookies;
	        };

	        Cookies.expire = function (key, options) {
	            return Cookies.set(key, undefined, options);
	        };

	        Cookies._getExtendedOptions = function (options) {
	            return {
	                path: options && options.path || Cookies.defaults.path,
	                domain: options && options.domain || Cookies.defaults.domain,
	                expires: options && options.expires || Cookies.defaults.expires,
	                secure: options && options.secure !== undefined ?  options.secure : Cookies.defaults.secure
	            };
	        };

	        Cookies._isValidDate = function (date) {
	            return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());
	        };

	        Cookies._getExpiresDate = function (expires, now) {
	            now = now || new Date();

	            if (typeof expires === 'number') {
	                expires = expires === Infinity ?
	                    Cookies._maxExpireDate : new Date(now.getTime() + expires * 1000);
	            } else if (typeof expires === 'string') {
	                expires = new Date(expires);
	            }

	            if (expires && !Cookies._isValidDate(expires)) {
	                throw new Error('`expires` parameter cannot be converted to a valid Date instance');
	            }

	            return expires;
	        };

	        Cookies._generateCookieString = function (key, value, options) {
	            key = key.replace(/[^#$&+\^`|]/g, encodeURIComponent);
	            key = key.replace(/\(/g, '%28').replace(/\)/g, '%29');
	            value = (value + '').replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);
	            options = options || {};

	            var cookieString = key + '=' + value;
	            cookieString += options.path ? ';path=' + options.path : '';
	            cookieString += options.domain ? ';domain=' + options.domain : '';
	            cookieString += options.expires ? ';expires=' + options.expires.toUTCString() : '';
	            cookieString += options.secure ? ';secure' : '';

	            return cookieString;
	        };

	        Cookies._getCacheFromString = function (documentCookie) {
	            var cookieCache = {};
	            var cookiesArray = documentCookie ? documentCookie.split('; ') : [];

	            for (var i = 0; i < cookiesArray.length; i++) {
	                var cookieKvp = Cookies._getKeyValuePairFromCookieString(cookiesArray[i]);

	                if (cookieCache[Cookies._cacheKeyPrefix + cookieKvp.key] === undefined) {
	                    cookieCache[Cookies._cacheKeyPrefix + cookieKvp.key] = cookieKvp.value;
	                }
	            }

	            return cookieCache;
	        };

	        Cookies._getKeyValuePairFromCookieString = function (cookieString) {
	            // "=" is a valid character in a cookie value according to RFC6265, so cannot `split('=')`
	            var separatorIndex = cookieString.indexOf('=');

	            // IE omits the "=" when the cookie value is an empty string
	            separatorIndex = separatorIndex < 0 ? cookieString.length : separatorIndex;

	            return {
	                key: decodeURIComponent(cookieString.substr(0, separatorIndex)),
	                value: decodeURIComponent(cookieString.substr(separatorIndex + 1))
	            };
	        };

	        Cookies._renewCache = function () {
	            Cookies._cache = Cookies._getCacheFromString(Cookies._document.cookie);
	            Cookies._cachedDocumentCookie = Cookies._document.cookie;
	        };

	        Cookies._areEnabled = function () {
	            var testKey = 'cookies.js';
	            var areEnabled = Cookies.set(testKey, 1).get(testKey) === '1';
	            Cookies.expire(testKey);
	            return areEnabled;
	        };

	        Cookies.enabled = Cookies._areEnabled();

	        return Cookies;
	    };

	    var cookiesExport = typeof global.document === 'object' ? factory(global) : factory;

	    // AMD support
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return cookiesExport; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    // CommonJS/Node.js support
	    } else if (typeof exports === 'object') {
	        // Support Node.js specific `module.exports` (which can be a function)
	        if (typeof module === 'object' && typeof module.exports === 'object') {
	            exports = module.exports = cookiesExport;
	        }
	        // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
	        exports.Cookies = cookiesExport;
	    } else {
	        global.Cookies = cookiesExport;
	    }
	})(typeof window === 'undefined' ? this : window);

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _axios = __webpack_require__(315);

	var _axios2 = _interopRequireDefault(_axios);

	var _configSample = __webpack_require__(334);

	var _cookiesJs = __webpack_require__(345);

	var _cookiesJs2 = _interopRequireDefault(_cookiesJs);

	var CartActions = (function () {
	  function CartActions() {
	    _classCallCheck(this, CartActions);
	  }

	  _createClass(CartActions, [{
	    key: 'createCart',

	    /**
	     * [createCart description]
	     * @param  {array} product
	     * @return {object}
	     */
	    value: function createCart(product) {
	      var self = this;
	      if (localStorage.access_token) {
	        (0, _axios2['default'])({
	          method: 'post',
	          url: _configSample.Api_URL + '/cart',
	          data: [product],
	          headers: {
	            'Authorization': 'Bearer ' + localStorage.access_token
	          }
	        }).then(function (res) {
	          self.dispatch(res.data);
	          self.actions.addToCart(product);
	        })['catch'](function (res) {});
	      } else {
	        (0, _axios2['default'])({
	          method: 'post',
	          url: _configSample.Api_URL + '/cart',
	          data: [product],
	          headers: {}
	        }).then(function (res) {
	          self.dispatch(res.data);
	          self.actions.addToCart(product);
	        })['catch'](function (res) {});
	      }
	    }
	  }, {
	    key: 'getCart',
	    value: function getCart() {
	      var cartId = _cookiesJs2['default'].get('cart');
	      var self = this,
	          data = {};

	      if (localStorage.access_token) {
	        data = {
	          method: 'get',
	          url: _configSample.Api_URL + '/cart',
	          headers: {
	            'Authorization': 'Bearer ' + localStorage.access_token
	          }
	        };
	      } else {
	        data = {
	          method: 'get',
	          url: _configSample.Api_URL + '/cart/' + cartId,
	          headers: {}
	        };
	      }

	      (0, _axios2['default'])(data).then(function (res) {
	        self.dispatch(res.data);
	      });
	    }
	  }, {
	    key: 'pushToCart',
	    value: function pushToCart(product, cartId) {
	      var self = this;
	      (0, _axios2['default'])({
	        method: 'post',
	        url: _configSample.Api_URL + '/cart/' + cartId,
	        data: [product],
	        headers: {}
	      }).then(function (res) {
	        self.actions.addToCart(product);
	      })['catch'](function (res) {});
	    }
	  }, {
	    key: 'destroyCart',
	    value: function destroyCart(cartId, pId) {
	      var self = this,
	          data = {};
	      if (localStorage.access_token) {
	        data = {
	          method: 'delete',
	          url: _configSample.Api_URL + '/cart/' + pId,
	          headers: {
	            'Authorization': 'Bearer ' + localStorage.access_token
	          }
	        };
	      } else {
	        data = {
	          method: 'delete',
	          url: _configSample.Api_URL + '/cart/' + pId + '/' + cartId
	        };
	      }

	      (0, _axios2['default'])(data).then(function (res) {
	        self.dispatch(res.data);
	      });
	    }
	  }, {
	    key: 'capnhatCart',
	    value: function capnhatCart() {
	      var cartId = _cookiesJs2['default'].get('cart');
	      var self = this,
	          data = {};

	      if (localStorage.access_token) {
	        data = {
	          method: 'put',
	          url: _configSample.Api_URL + '/cart',
	          headers: {
	            'Authorization': 'Bearer ' + localStorage.access_token
	          }
	        };
	      } else {
	        if (!cartId) {
	          return;
	        }
	        data = {
	          method: 'put',
	          url: _configSample.Api_URL + '/cart/' + cartId,
	          headers: {}
	        };
	      }

	      (0, _axios2['default'])(data).then(function (res) {
	        self.dispatch(res.data);
	      })['catch'](function (res) {
	        if (res.status === 304) {
	          self.actions.capnhatCart304();
	        }
	      });
	    }
	  }, {
	    key: 'empty',
	    value: function empty() {
	      this.dispatch();
	    }
	  }, {
	    key: 'capnhatCarts',
	    value: function capnhatCarts(cartId) {}
	  }, {
	    key: 'capnhatCart304',
	    value: function capnhatCart304() {
	      this.dispatch();
	    }
	  }, {
	    key: 'addToCart',
	    value: function addToCart(product) {
	      this.dispatch(product);
	    }
	  }]);

	  return CartActions;
	})();

	module.exports = _Alt2['default'].createActions(CartActions);

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _axios = __webpack_require__(315);

	var _axios2 = _interopRequireDefault(_axios);

	var _configSample = __webpack_require__(334);

	var VerifyActions = (function () {
		function VerifyActions() {
			_classCallCheck(this, VerifyActions);
		}

		_createClass(VerifyActions, [{
			key: 'getCode',
			value: function getCode() {
				var self = this;

				_axios2['default'].get(_configSample.Api_URL + '/user/verify', {
					headers: { 'Authorization': 'Bearer ' + localStorage.access_token }
				}).then(function (res) {
					self.dispatch(res.data);
				})['catch'](function (res) {
					self.actions.getCodeFaild(res.data);
				});
			}
		}, {
			key: 'getVerify',
			value: function getVerify(code) {
				var self = this;

				_axios2['default'].get(_configSample.Api_URL + '/user/verify/' + code, {
					headers: { 'Authorization': 'Bearer ' + localStorage.access_token }
				}).then(function (res) {
					self.dispatch(res.data);
				})['catch'](function (res) {
					self.actions.getVerifyFaild(res.data);
				});
			}
		}, {
			key: 'getCodeFaild',
			value: function getCodeFaild(err) {
				this.dispatch(err);
			}
		}, {
			key: 'getVerifyFaild',
			value: function getVerifyFaild(err) {
				this.dispatch(err);
			}
		}]);

		return VerifyActions;
	})();

	module.exports = _Alt2['default'].createActions(VerifyActions);

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _actionsCartActions = __webpack_require__(346);

	var _actionsCartActions2 = _interopRequireDefault(_actionsCartActions);

	var _immutable = __webpack_require__(342);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _cookiesJs = __webpack_require__(345);

	var _cookiesJs2 = _interopRequireDefault(_cookiesJs);

	var CartStore = (function () {
	  function CartStore() {
	    _classCallCheck(this, CartStore);

	    this.bindActions(_actionsCartActions2['default']); // createCart, addToCart
	    this.on('init', this.bootstrap);
	    this.on('bootstrap', this.bootstrap);

	    this.cartId = null;
	    this.status = null;
	    this.listCart = _immutable2['default'].List();
	  }

	  _createClass(CartStore, [{
	    key: 'bootstrap',
	    value: function bootstrap() {
	      if (!_immutable2['default'].List.isList(this.listCart)) {
	        this.listCart = _immutable2['default'].fromJS(this.listCart);
	      }
	    }
	  }, {
	    key: 'onCreateCart',
	    value: function onCreateCart(data) {
	      this.cartId = data.cartId;
	      _cookiesJs2['default'].set('cart', data.cartId, { expires: 2592000 });
	    }
	  }, {
	    key: 'onGetCart',
	    value: function onGetCart(data) {
	      this.listCart = _immutable2['default'].fromJS(data);
	    }
	  }, {
	    key: 'onAddToCart',
	    value: function onAddToCart(product) {
	      this.listCart = this.listCart.push(_immutable2['default'].fromJS(product));
	    }
	  }, {
	    key: 'onDestroyCart',
	    value: function onDestroyCart(data) {
	      this.listCart = _immutable2['default'].fromJS(data);
	    }
	  }, {
	    key: 'onCapnhatCart',
	    value: function onCapnhatCart(data) {
	      this.status = null;
	      this.listCart = _immutable2['default'].fromJS(data);
	    }
	  }, {
	    key: 'onCapnhatCart304',
	    value: function onCapnhatCart304() {
	      this.status = "success";
	    }
	  }, {
	    key: 'onEmpty',
	    value: function onEmpty() {
	      this.listCart = _immutable2['default'].List();
	    }
	  }], [{
	    key: 'getTotalCart',
	    value: function getTotalCart() {
	      var total = 0;

	      var _getState = this.getState();

	      var listCart = _getState.listCart;

	      listCart.forEach(function (product, key) {
	        if (product.get('status') === "available") {
	          total += product.get('price');
	        }
	      });

	      return total;
	    }
	  }, {
	    key: 'getWeightCart',
	    value: function getWeightCart() {
	      var total = 0;

	      var _getState2 = this.getState();

	      var listCart = _getState2.listCart;

	      listCart.forEach(function (product, key) {
	        if (product.get('status') === "available") {
	          total += product.get('weight');
	        }
	      });

	      return total;
	    }
	  }, {
	    key: 'getTotalCartSale',
	    value: function getTotalCartSale() {
	      var total = 0;

	      var _getState3 = this.getState();

	      var listCart = _getState3.listCart;

	      listCart.forEach(function (product, key) {
	        if (product.get('status') === "available") {
	          total += product.get('salePrice') ? product.get('salePrice') : product.get('price');
	        }
	      });

	      return total;
	    }
	  }, {
	    key: 'getCountCart',
	    value: function getCountCart() {
	      var _getState4 = this.getState();

	      var listCart = _getState4.listCart;

	      return listCart.size;
	    }
	  }]);

	  return CartStore;
	})();

	module.exports = _Alt2['default'].createStore(CartStore, 'CartStore');

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _immutable = __webpack_require__(342);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _actionsSanphamActions = __webpack_require__(335);

	var _actionsSanphamActions2 = _interopRequireDefault(_actionsSanphamActions);

	var _BoxStore = __webpack_require__(338);

	var _BoxStore2 = _interopRequireDefault(_BoxStore);

	var SanphamStore = (function () {
	  function SanphamStore() {
	    _classCallCheck(this, SanphamStore);

	    this.bindActions(_actionsSanphamActions2['default']); // getSanphamID, getIdFailed, actionSanphamID, like, count

	    this.on('init', this.bootstrap);
	    this.on('bootstrap', this.bootstrap);

	    this.product = new _immutable.Map();
	    this.count = 0;
	  }

	  _createClass(SanphamStore, [{
	    key: 'bootstrap',
	    value: function bootstrap() {
	      if (!_immutable2['default'].Map.isMap(this.product)) {
	        this.product = _immutable2['default'].fromJS(this.product);
	      }
	      if (!this.count) {
	        this.count = 0;
	      }
	    }
	  }, {
	    key: 'onGetSanphamID',
	    value: function onGetSanphamID(data) {
	      this.product = this.product.merge(data);
	    }
	  }, {
	    key: 'onActionSanphamID',
	    value: function onActionSanphamID(sp) {
	      this.product = this.product.merge(sp);
	    }
	  }, {
	    key: 'onGetIdFailed',
	    value: function onGetIdFailed(err) {
	      console.log('getIdFailed');
	    }
	  }, {
	    key: 'onLike',
	    value: function onLike(data) {
	      this.product = this.product.updateIn(['likesCount'], function (value) {
	        return value + 1;
	      });
	    }
	  }, {
	    key: 'onCount',
	    value: function onCount(data) {
	      this.waitFor(_BoxStore2['default'].dispatchToken);
	      this.count = data;
	    }
	  }]);

	  return SanphamStore;
	})();

	module.exports = _Alt2['default'].createStore(SanphamStore, 'SanphamStore');

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	var Navbar = (function (_React$Component) {
	  _inherits(Navbar, _React$Component);

	  function Navbar(props) {
	    var _this = this;

	    _classCallCheck(this, Navbar);

	    _get(Object.getPrototypeOf(Navbar.prototype), 'constructor', this).call(this, props);

	    this.handleLogout = function (e) {
	      _this.props.AuthActions.Logout();
	    };

	    this.state = {
	      transform: false
	    };
	  }

	  _createClass(Navbar, [{
	    key: 'render',
	    value: function render() {
	      if (!this.props.auth.get('mobilePhone')) {
	        return _reactAddons2['default'].createElement(
	          'nav',
	          { className: 'navbar navbar-tocu' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'navbar-header' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'logo' },
	              _reactAddons2['default'].createElement(
	                _reactRouter.Link,
	                { to: '/', className: 'navbar-brand' },
	                _reactAddons2['default'].createElement('img', { alt: 'Brand', src: '/img/logo.png' })
	              ),
	              _reactAddons2['default'].createElement(
	                'p',
	                { className: 'navbar-text pull-left' },
	                'Tổ Cú'
	              )
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'navbar-tocu-right' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'btn-group' },
	              _reactAddons2['default'].createElement(
	                _reactRouter.Link,
	                { to: '/signin', className: 'btn btn-sm btn-link' },
	                'Sign in'
	              ),
	              _reactAddons2['default'].createElement(
	                _reactRouter.Link,
	                { to: '/signup', className: 'btn btn-sm btn-primary' },
	                'Sign up'
	              )
	            ),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'btn-group' },
	              _reactAddons2['default'].createElement(
	                _reactRouter.Link,
	                { to: '/cart', className: 'icon cart-menu' },
	                _reactAddons2['default'].createElement(
	                  'span',
	                  { className: 'count' },
	                  this.props.count
	                )
	              )
	            ),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'btn-group' },
	              _reactAddons2['default'].createElement('span', { className: 'icon menu-bars', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false' }),
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'dropdown-menu dropdown-menu-right drop-menu' },
	                _reactAddons2['default'].createElement('span', { className: 'tamgiac' }),
	                _reactAddons2['default'].createElement(
	                  'div',
	                  { className: 'drop-header' },
	                  _reactAddons2['default'].createElement(
	                    'div',
	                    { className: 'search' },
	                    _reactAddons2['default'].createElement('input', { type: 'search', placeholder: 'Search', autofocus: true }),
	                    _reactAddons2['default'].createElement('i', { className: 'fa fa-search' })
	                  )
	                ),
	                _reactAddons2['default'].createElement(
	                  'div',
	                  { className: 'drop-body' },
	                  _reactAddons2['default'].createElement(
	                    'li',
	                    null,
	                    _reactAddons2['default'].createElement(
	                      'a',
	                      { href: '#' },
	                      'test'
	                    )
	                  ),
	                  _reactAddons2['default'].createElement(
	                    'li',
	                    null,
	                    _reactAddons2['default'].createElement(
	                      'a',
	                      { href: '#' },
	                      'hihi'
	                    )
	                  ),
	                  _reactAddons2['default'].createElement(
	                    'li',
	                    null,
	                    _reactAddons2['default'].createElement(
	                      'a',
	                      { href: '#' },
	                      'test'
	                    )
	                  ),
	                  _reactAddons2['default'].createElement(
	                    'li',
	                    null,
	                    _reactAddons2['default'].createElement(
	                      'a',
	                      { href: '#' },
	                      'hihi'
	                    )
	                  )
	                ),
	                _reactAddons2['default'].createElement(
	                  'div',
	                  { className: 'drop-footer' },
	                  _reactAddons2['default'].createElement(
	                    'li',
	                    null,
	                    _reactAddons2['default'].createElement(
	                      _reactRouter.Link,
	                      { to: '/about' },
	                      'about'
	                    )
	                  ),
	                  _reactAddons2['default'].createElement(
	                    'li',
	                    null,
	                    _reactAddons2['default'].createElement(
	                      _reactRouter.Link,
	                      { to: '/chinhsachmuahang' },
	                      'chính sách mua hàng'
	                    )
	                  )
	                )
	              )
	            )
	          )
	        );
	      }

	      return _reactAddons2['default'].createElement(
	        'nav',
	        { className: 'navbar navbar-tocu' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'navbar-header' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'logo' },
	            _reactAddons2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/', className: 'navbar-brand' },
	              _reactAddons2['default'].createElement('img', { alt: 'Brand', src: '/img/logo.png' })
	            ),
	            _reactAddons2['default'].createElement(
	              'p',
	              { className: 'navbar-text pull-left' },
	              'Tổ Cú'
	            )
	          )
	        ),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'navbar-tocu-right' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'btn-group' },
	            _reactAddons2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/cart', className: 'icon cart-menu' },
	              _reactAddons2['default'].createElement(
	                'span',
	                { className: 'count' },
	                this.props.count
	              )
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'btn-group' },
	            _reactAddons2['default'].createElement('span', { className: 'icon menu-bars', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false' }),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'dropdown-menu dropdown-menu-right drop-menu' },
	              _reactAddons2['default'].createElement('span', { className: 'tamgiac' }),
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'drop-header' },
	                _reactAddons2['default'].createElement(
	                  'div',
	                  { className: 'search' },
	                  _reactAddons2['default'].createElement('input', { type: 'search', placeholder: 'Search', autofocus: true }),
	                  _reactAddons2['default'].createElement('i', { className: 'fa fa-search' })
	                )
	              ),
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'drop-body' },
	                _reactAddons2['default'].createElement(
	                  'li',
	                  null,
	                  _reactAddons2['default'].createElement(
	                    'a',
	                    { href: '#' },
	                    'test'
	                  )
	                ),
	                _reactAddons2['default'].createElement(
	                  'li',
	                  null,
	                  _reactAddons2['default'].createElement(
	                    'a',
	                    { href: '#' },
	                    'hihi'
	                  )
	                ),
	                _reactAddons2['default'].createElement(
	                  'li',
	                  null,
	                  _reactAddons2['default'].createElement(
	                    'a',
	                    { href: '#' },
	                    'test'
	                  )
	                ),
	                _reactAddons2['default'].createElement(
	                  'li',
	                  null,
	                  _reactAddons2['default'].createElement(
	                    'a',
	                    { href: '#' },
	                    'hihi'
	                  )
	                )
	              ),
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'drop-footer' },
	                _reactAddons2['default'].createElement(
	                  'li',
	                  null,
	                  _reactAddons2['default'].createElement(
	                    _reactRouter.Link,
	                    { to: '/about' },
	                    'about'
	                  )
	                ),
	                _reactAddons2['default'].createElement(
	                  'li',
	                  null,
	                  _reactAddons2['default'].createElement(
	                    _reactRouter.Link,
	                    { to: '/chinhsachmuahang' },
	                    'chính sách mua hàng'
	                  )
	                )
	              )
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'btn-group' },
	            _reactAddons2['default'].createElement(
	              'button',
	              { type: 'button', className: 'btn btn-default dropdown-toggle', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
	              _reactAddons2['default'].createElement('img', { alt: 'avatar', src: this.props.auth.get('avatarUrl') })
	            ),
	            _reactAddons2['default'].createElement(
	              'ul',
	              { className: 'dropdown-menu dropdown-menu-right' },
	              _reactAddons2['default'].createElement(
	                'li',
	                null,
	                _reactAddons2['default'].createElement(
	                  'a',
	                  { href: '#' },
	                  'Settings'
	                )
	              ),
	              _reactAddons2['default'].createElement('li', { role: 'separator', className: 'divider' }),
	              _reactAddons2['default'].createElement(
	                'li',
	                null,
	                _reactAddons2['default'].createElement(
	                  _reactRouter.Link,
	                  { to: '/signin', onClick: this.handleLogout },
	                  'Log out'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Navbar;
	})(_reactAddons2['default'].Component);

	exports['default'] = Navbar;
	;
	module.exports = exports['default'];

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var InfoBar = (function (_React$Component) {
	  _inherits(InfoBar, _React$Component);

	  function InfoBar() {
	    _classCallCheck(this, InfoBar);

	    _get(Object.getPrototypeOf(InfoBar.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(InfoBar, [{
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        'div',
	        { className: 'container-fluid infoBar' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'row' },
	          _reactAddons2['default'].createElement('div', { className: 'col-sm-2 col-md-3 col-lg-4' }),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'col-sm-8 col-md-6 col-lg-4' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'row' },
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'col-xs-3' },
	                _reactAddons2['default'].createElement(
	                  'a',
	                  { href: '#', className: 'active' },
	                  _reactAddons2['default'].createElement(
	                    'span',
	                    { className: 'value' },
	                    this.props.Box.size
	                  ),
	                  ' ',
	                  _reactAddons2['default'].createElement(
	                    'span',
	                    { className: 'labels' },
	                    'Box'
	                  )
	                )
	              ),
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'col-xs-3' },
	                _reactAddons2['default'].createElement(
	                  'a',
	                  { href: '#', className: '' },
	                  _reactAddons2['default'].createElement(
	                    'span',
	                    { className: 'value' },
	                    this.props.countSanpham
	                  ),
	                  ' ',
	                  _reactAddons2['default'].createElement(
	                    'span',
	                    { className: 'labels' },
	                    'Sản phẩm'
	                  )
	                )
	              ),
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'col-xs-3' },
	                _reactAddons2['default'].createElement(
	                  'a',
	                  { href: '#', className: '' },
	                  _reactAddons2['default'].createElement(
	                    'span',
	                    { className: 'value' },
	                    '0'
	                  ),
	                  ' ',
	                  _reactAddons2['default'].createElement(
	                    'span',
	                    { className: 'labels' },
	                    'Ảnh'
	                  )
	                )
	              ),
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'col-xs-3' },
	                _reactAddons2['default'].createElement(
	                  'a',
	                  { href: '#', className: '' },
	                  _reactAddons2['default'].createElement(
	                    'span',
	                    { className: 'value' },
	                    '0'
	                  ),
	                  ' ',
	                  _reactAddons2['default'].createElement(
	                    'span',
	                    { className: 'labels' },
	                    'Bài Viết'
	                  )
	                )
	              )
	            )
	          ),
	          _reactAddons2['default'].createElement('div', { className: 'col-sm-2 col-md-3 col-lg-4' })
	        )
	      );
	    }
	  }]);

	  return InfoBar;
	})(_reactAddons2['default'].Component);

	exports['default'] = InfoBar;
	;
	module.exports = exports['default'];

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var ProfileInfo = (function (_React$Component) {
	  _inherits(ProfileInfo, _React$Component);

	  function ProfileInfo() {
	    _classCallCheck(this, ProfileInfo);

	    _get(Object.getPrototypeOf(ProfileInfo.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ProfileInfo, [{
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        'div',
	        { className: 'container-fluid profileInfo' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'aboutBar' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'about' },
	            _reactAddons2['default'].createElement(
	              'h1',
	              { className: 'name' },
	              'Tổ Cú'
	            ),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'iconsLinksEtc' },
	              _reactAddons2['default'].createElement(
	                'ul',
	                null,
	                _reactAddons2['default'].createElement(
	                  'li',
	                  { className: 'websiteWrapper' },
	                  _reactAddons2['default'].createElement(
	                    'a',
	                    { href: '#', target: '_blank' },
	                    _reactAddons2['default'].createElement(
	                      'i',
	                      { className: 'fa fa-map-marker gray' },
	                      '  Hà Nội'
	                    )
	                  )
	                ),
	                _reactAddons2['default'].createElement(
	                  'li',
	                  null,
	                  _reactAddons2['default'].createElement(
	                    'a',
	                    { href: 'https://www.facebook.com/thanhchamly', target: '_blank' },
	                    _reactAddons2['default'].createElement(
	                      'i',
	                      { className: 'fa fa-facebook-square gray' },
	                      '  facebook'
	                    )
	                  )
	                ),
	                _reactAddons2['default'].createElement(
	                  'li',
	                  null,
	                  _reactAddons2['default'].createElement(
	                    'a',
	                    { href: 'tel:+84904905903', target: '_blank' },
	                    _reactAddons2['default'].createElement(
	                      'i',
	                      { className: 'fa fa-phone gray' },
	                      '  0904905903'
	                    )
	                  )
	                )
	              )
	            ),
	            _reactAddons2['default'].createElement(
	              'p',
	              { className: 'aboutText' },
	              'Nơi chúng ta thỏa sức với niềm đam mê đồ cũ & handmade :x'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ProfileInfo;
	})(_reactAddons2['default'].Component);

	exports['default'] = ProfileInfo;
	;
	module.exports = exports['default'];

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$keys = __webpack_require__(354)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _validatorjs = __webpack_require__(356);

	var _validatorjs2 = _interopRequireDefault(_validatorjs);

	var _reactRouter = __webpack_require__(238);

	var _storeAuthStore = __webpack_require__(343);

	var _storeAuthStore2 = _interopRequireDefault(_storeAuthStore);

	var _actionsAuthActions = __webpack_require__(344);

	var _actionsAuthActions2 = _interopRequireDefault(_actionsAuthActions);

	/**
	 * @Component
	 */

	var _select = __webpack_require__(357);

	var _select2 = _interopRequireDefault(_select);

	var _inputValidationLabel = __webpack_require__(358);

	var _inputValidationLabel2 = _interopRequireDefault(_inputValidationLabel);

	var Validations = {
	  mobilePhone: {
	    rules: { mobilePhone: ["required", "regex:/^([0-9]{10,11})$/"] },
	    messages: { "required.mobilePhone": "Nhập số điện thoại của bạn!", "regex.mobilePhone": "Số điện thoại không hợp lệ!" },
	    hasError: false,
	    errorMessage: '',
	    errorTextRequest: ''
	  },
	  password: {
	    rules: { password: ["required"] },
	    messages: { "required.password": "Nhập password của bạn!" },
	    hasError: false,
	    errorMessage: '',
	    errorTextRequest: ''
	  }
	};

	exports['default'] = _reactAddons2['default'].createClass({
	  displayName: 'SignIn',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],

	  contextTypes: {
	    router: _reactAddons2['default'].PropTypes.object.isRequired
	  },

	  getInitialState: function getInitialState() {
	    return {
	      disabled: true,
	      ValidationData: Validations,
	      loginState: _storeAuthStore2['default'].getState().loginState
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    _storeAuthStore2['default'].listen(this.onChangeAuthStore);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    _storeAuthStore2['default'].unlisten(this.onChangeAuthStore);
	  },

	  onChangeAuthStore: function onChangeAuthStore(state) {
	    var _this = this;

	    if (state.loginState === "success") {
	      var _ret = (function () {
	        var self = _this;
	        if (_this.props.replaceWith) {
	          _this.props.replaceWith();
	          return {
	            v: undefined
	          };
	        } else {
	          setTimeout(function () {
	            self.transitionTo('/');
	          }, 100);
	          return {
	            v: undefined
	          };
	        }
	      })();

	      if (typeof _ret === 'object') return _ret.v;
	    }
	    this.setState({
	      loginState: _storeAuthStore2['default'].getState().loginState
	    });
	  },

	  render: function render() {
	    var nextPath = '/';
	    if (this.props.nextPath) {
	      nextPath = this.props.nextPath;
	    }

	    return _reactAddons2['default'].createElement(
	      'div',
	      { className: 'form-signup' },
	      _reactAddons2['default'].createElement(
	        'div',
	        { className: 'form-header' },
	        this.props.children,
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'form-title text-center' },
	          'Đăng Nhập Tổ Cú'
	        )
	      ),
	      _reactAddons2['default'].createElement(
	        'div',
	        { className: 'form-body' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'form-group' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'logo' },
	            _reactAddons2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/' },
	              _reactAddons2['default'].createElement('img', { src: '/img/logo.png' })
	            )
	          )
	        ),
	        this.state.loginState === "failed" && _reactAddons2['default'].createElement(
	          'p',
	          { className: 'text-center text-danger' },
	          'Số điện thoại hoặc mật khẩu không đúng'
	        ),
	        _reactAddons2['default'].createElement(
	          'form',
	          null,
	          _reactAddons2['default'].createElement(_inputValidationLabel2['default'], {
	            ref: 'mobilePhone',
	            type: 'mobilePhone',
	            placeholder: 'Số điện thoại',
	            name: 'mobilePhone',
	            validator: this.state.ValidationData.mobilePhone,
	            onChange: this._onChangeInputHandler }),
	          _reactAddons2['default'].createElement(_inputValidationLabel2['default'], {
	            ref: 'password',
	            type: 'password',
	            placeholder: 'Mật khẩu',
	            name: 'password',
	            validator: this.state.ValidationData.password,
	            onChange: this._onChangeInputHandler }),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'form-group' },
	            _reactAddons2['default'].createElement(
	              'button',
	              { className: 'form-control btn btn-primary',
	                onClick: this.handleLogin,
	                type: 'submit',
	                disabled: this.state.disabled },
	              this.state.loginState !== "loading" && "Đăng Nhập",
	              this.state.loginState === "loading" && _reactAddons2['default'].createElement('i', { className: 'fa fa-spinner fa-pulse' })
	            )
	          )
	        )
	      ),
	      _reactAddons2['default'].createElement(
	        'div',
	        { className: 'form-footer' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'row' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'col-xs-7 col-md-8' },
	            _reactAddons2['default'].createElement(
	              'a',
	              { href: '/password/reset/' },
	              'Quên mật khẩu?'
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'col-xs-5 col-md-4' },
	            _reactAddons2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/signup?nextPath=' + nextPath, className: 'pull-right' },
	              'Đăng Ký'
	            )
	          )
	        )
	      )
	    );
	  },

	  _setAndValidateInput: function _setAndValidateInput(name, value) {
	    var ValidationData = this.state.ValidationData;
	    var data = {};
	    var _ValidationData$name = ValidationData[name];
	    var rules = _ValidationData$name.rules;
	    var messages = _ValidationData$name.messages;

	    ValidationData[name].hasFocus = true;
	    ValidationData[name].hasError = false;
	    ValidationData[name].errorMessage = '';
	    ValidationData[name].errorTextRequest = '';

	    data[name] = value || '';

	    var validation = new _validatorjs2['default'](data, rules, messages);

	    if (validation.fails()) {
	      ValidationData[name].hasError = true;
	      ValidationData[name].errorMessage = validation.errors.first(name);
	    }

	    this.setState({ ValidationData: ValidationData });
	  },

	  _setDisabledSubmit: function _setDisabledSubmit() {
	    var ValidationData = this.state.ValidationData,
	        total = _Object$keys(ValidationData).length,
	        done = 0,
	        disabled = undefined;

	    _Object$keys(ValidationData).forEach(function (key) {
	      if (ValidationData[key].hasFocus && ValidationData[key].hasError === false) {
	        done += 1;
	      }
	    });

	    disabled = done === total ? false : true;
	    this.setState({ disabled: disabled });
	  },

	  _onChangeInputHandler: function _onChangeInputHandler(name, value) {
	    this._setAndValidateInput(name, value);
	    this._setDisabledSubmit();
	  },

	  handleLogin: function handleLogin(e) {
	    e.preventDefault();
	    var mobilePhone = this.refs.mobilePhone.getValue();
	    var password = this.refs.password.getValue();
	    _actionsAuthActions2['default'].Login({ mobilePhone: mobilePhone, password: password });
	  }

	});
	module.exports = exports['default'];

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(355), __esModule: true };

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(221);
	module.exports = __webpack_require__(7).Object.keys;

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! validatorjs - v1.3.2 - https://github.com/skaterdav85/validatorjs - 2015-02-11 */
	(function() {

	var messages = {
		accepted: 'The :attribute must be accepted.',
		alpha: 'The :attribute field must contain only alphabetic characters.',
		alpha_dash: 'The :attribute field may only contain alpha-numeric characters, as well as dashes and underscores.',
		alpha_num: 'The :attribute field must be alphanumeric.',
		confirmed: 'The :attribute confirmation does not match.',
		email: 'The :attribute format is invalid.',
		def: 'The :attribute attribute has errors.',
		digits: 'The :attribute must be :digits digits.',
		different: 'The :attribute and :different must be different.',
		'in': 'The selected :attribute is invalid.',
		integer: 'The :attribute must be an integer.',
		min: {
			numeric: 'The :attribute must be at least :min.',
			string: 'The :attribute must be at least :min characters.'
		},
		max: {
			numeric: 'The :attribute must be less than :max.',
			string: 'The :attribute must be less than :max characters.'
		},
		not_in: 'The selected :attribute is invalid.',
		numeric: 'The :attribute must be a number.',
		required: 'The :attribute field is required.',
		same: 'The :attribute and :same fields must match.',
		size: {
			numeric: 'The :attribute must be :size.',
			string: 'The :attribute must be :size characters.'
		},
		url: 'The :attribute format is invalid.',
		regex: 'The :attribute format is invalid'
	};

	// Shim taken from MDN site
	if (!Array.prototype.forEach) {
	    Array.prototype.forEach = function (fn, scope) {
	        'use strict';
	        var i, len;
	        for (i = 0, len = this.length; i < len; ++i) {
	            if (i in this) {
	                fn.call(scope, this[i], i, this);
	            }
	        }
	    };
	}

	// Based on jquery's extend function
	function extend() {
		var src, copy, name, options, clone;
		var target = arguments[0] || {};
		var i = 1;
		var length = arguments.length;

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( copy && typeof copy === "object" ) {
						clone = src && typeof src === "object" ? src : {};

						// Never move original objects, clone them
						target[ name ] = extend( clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	}

	var ValidatorErrors = function() {};

	ValidatorErrors.prototype = {
		constructor: ValidatorErrors,

		/**
		 * returns an array of error messages for an attribute, or an empty array
		 * @param  {String} attribute A key in the data object being validated
		 * @return {Array}           	An array of error messages
		 */
		get: function(attribute) {
			if (this[attribute]) {
				return this[attribute];
			}

			return [];
		},

		/**
		 * returns the first error message for an attribute, false otherwise
		 * @param  {String} attribute A key in the data object being validated
		 * @return {String}           First error message or false
		 */
		first: function(attribute) {
			if (this[attribute]) {
				return this[attribute][0];
			}

			return false;
		},

		/**
		 * Get all error messages from all failing attributes
		 * @return {Object} Failed attribute names for keys and an array of messages for values
		 */
		all: function() {
			return this;
		},

		/**
		 * checks if there are error messages for an attribute
		 * @param  {String}  attribute A key in the data object being validated
		 * @return {Boolean}           True if there are error messages. Otherwise false
		 */
		has: function(attribute) {
			if (this[attribute] && this[attribute].length > 0) {
				return true;
			}

			return false;
		}
	};

	var Validator = function(input, rules, customMessages) {
		this.input = input;
		this.rules = rules;
		this.messages = extend({}, messages, customMessages || {});

		this.errors = new ValidatorErrors();

		this.errorCount = 0;
		this.check();
	};

	Validator.prototype = {
		constructor: Validator,

		// replaces placeholders in tmpl with actual data
		_createMessage: function(tmpl, data) {
			var message, key;

			if (typeof tmpl === 'string' && typeof data === 'object') {
				message = tmpl;

				for (key in data) {
					if (data.hasOwnProperty(key)) {
						message = message.replace(':' + key, data[key]);
					}
				}
			}

			return message;
		},

		check: function() {
			var self = this;

			this._each(this.rules, function(attributeToValidate) {

				var rulesArray = this.rules[attributeToValidate];
				if( typeof rulesArray === "string" ) {
	        rulesArray = this.rules[attributeToValidate].split('|');
	      }

				var inputValue = this.input[attributeToValidate]; // if it doesnt exist in input, it will be undefined

				rulesArray.forEach(function(ruleString) {
					var ruleExtraction = self._extractRuleAndRuleValue(ruleString);
					var rule = ruleExtraction.rule;
					var ruleValue = ruleExtraction.ruleValue;
					var passes, dataForMessageTemplate, msgTmpl, msg;

					passes = self.validate[rule].call(self, inputValue, ruleValue, attributeToValidate);

					if (!passes) {
						if ( !self.errors.hasOwnProperty(attributeToValidate) ) {
							self.errors[attributeToValidate] = [];
						}

						dataForMessageTemplate = self._createErrorMessageTemplateData(attributeToValidate, rule, ruleValue);
						msgTmpl = self._selectMessageTemplate(rule, inputValue, attributeToValidate);
						msg = self._createMessage(msgTmpl, dataForMessageTemplate);
						self._addErrorMessage(attributeToValidate, msg);
					}
				});
			}, this); // end of _each()
		},

		_each: function(obj, cb, context) {
			for (var key in obj) {
				cb.call(context, key);
			}
		},

		/**
		 * Extract a rule and a rule value from a ruleString (i.e. min:3), rule = min, ruleValue = 3
		 * @param  {string} ruleString min:3
		 * @return {object} object containing the rule and ruleValue
		 */
		_extractRuleAndRuleValue: function(ruleString) {
			var obj = {}, ruleArray;

			obj.rule = ruleString;

			if (ruleString.indexOf(':') >= 0) {
				ruleArray = ruleString.split(':');
				obj.rule = ruleArray[0];
				obj.ruleValue = ruleArray.slice(1).join(":");
			}

			return obj;
		},

		_addErrorMessage: function(key, msg) {
			this.errors[key].push(msg);
			this.errorCount++;
		},

		_createErrorMessageTemplateData: function(key, rule, ruleVal) {
			var dataForMessageTemplate = { attribute: key };
			dataForMessageTemplate[rule] = ruleVal; // if no rule value, then this will equal to null

			return dataForMessageTemplate;
		},

		// selects the correct message template from the messages variable based on the rule and the value
		_selectMessageTemplate: function(rule, val, key) {
			var msgTmpl, messages = this.messages;

			// if the custom error message template exists in messages variable
			if (messages.hasOwnProperty(rule + '.' + key)) {
				msgTmpl = messages[rule + '.' + key];
			} else if (messages.hasOwnProperty(rule)) {
				msgTmpl = messages[rule];

				if (typeof msgTmpl === 'object') {
					switch (typeof val) {
						case 'number':
							msgTmpl = msgTmpl['numeric'];
							break;
						case 'string':
							msgTmpl = msgTmpl['string'];
							break;
					}
				}
			} else { // default error message
				msgTmpl = messages.def;
			}

			return msgTmpl;
		},

		passes: function() {
			return this.errorCount === 0 ? true : false;
		},

		fails: function() {
			return this.errorCount > 0 ? true : false;
		},

		// validate functions should return T/F
		validate: {
			required: function(val) {
				var str;

				if (val === undefined || val === null) {
					return false;
				}

				str = String(val).replace(/\s/g, "");
				return str.length > 0 ? true : false;
			},

			// compares the size of strings
			// with numbers, compares the value
			size: function(val, req) {
				if (val) {
					req = parseFloat(req);

					if (typeof val === 'number') {
						return val === req ? true : false;
					}

					return val.length === req ? true : false;
				}

				return true;
			},

			/**
			 * Compares the size of strings or the value of numbers if there is a truthy value
			 */
			min: function(val, req) {
				if (val === undefined || val === '') { return true; }

				if (typeof val === 'number') {
					return val >= req ? true : false;
				} else {
					return val.length >= req ? true : false;
				}
			},

			/**
			 * Compares the size of strings or the value of numbers if there is a truthy value
			 */
			max: function(val, req) {
				if (val === undefined || val === '') { return true; }

				if (typeof val === 'number') {
					return val <= req ? true : false;
				} else {
					return val.length <= req ? true : false;
				}
			},

			email: function(val) {
				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

				if (val === undefined || val === '') {
					return true;
				}

				return re.test(val);
			},

			numeric: function(val) {
				var num;

				if (val === undefined || val === '') { return true; }

				num = Number(val); // tries to convert value to a number. useful if value is coming from form element

				if (typeof num === 'number' && !isNaN(num) && typeof val !== 'boolean') {
					return true;
				} else {
					return false;
				}
			},

			url: function(url) {
				if (url === undefined || url === '') { return true; }

				return (/^https?:\/\/\S+/).test(url);
			},

			alpha: function(val) {
				if (val === undefined || val === '') { return true; }

				return (/^[a-zA-Z]+$/).test(val);
			},

			alpha_dash: function(val) {
				if (val === undefined || val === '') { return true; }
				return (/^[a-zA-Z0-9_\-]+$/).test(val);
			},

			alpha_num: function(val) {
				if (val === undefined || val === '') { return true; }

				return (/^[a-zA-Z0-9]+$/).test(val);
			},

			same: function(val, req) {
				var val1 = this.input[req];
				var val2 = val;

				if (val1 === val2) {
					return true;
				}

				return false;
			},

			different: function(val, req) {
				var val1 = this.input[req];
				var val2 = val;

				if (val1 !== val2) {
					return true;
				}

				return false;
			},

			"in": function(val, req) {
				var list, len, returnVal;

				if (val) {
					list = req.split(',');
					len = list.length;
					returnVal = false;

					val = String(val); // convert val to a string if it is a number

					for (var i = 0; i < len; i++) {
						if (val === list[i]) {
							returnVal = true;
							break;
						}
					}

					return returnVal;
				}

				return true;
			},

			not_in: function(val, req) {
				var list = req.split(',');
				var len = list.length;
				var returnVal = true;

				val = String(val); // convert val to a string if it is a number

				for (var i = 0; i < len; i++) {
					if (val === list[i]) {
						returnVal = false;
						break;
					}
				}

				return returnVal;
			},

			accepted: function(val) {
				if (val === 'on' || val === 'yes' || val === 1 || val === '1') {
					return true;
				}

				return false;
			},

			confirmed: function(val, req, key) {
				var confirmedKey = key + '_confirmation';

				if (this.input[confirmedKey] === val) {
					return true;
				}

				return false;
			},

			integer: function(val) {
				if (val === undefined || val === '') { return true; }

				val = String(val);

				if ( (/^\d+$/).test(val) ) {
					return true;
				} else {
					return false;
				}
			},

			digits: function(val, req) {
				if (this.validate.numeric(val) && String(val).length === parseInt(req)) {
					return true;
				}

				return false;
			},

	    regex: function(val, req) {
	    	var mod = /[g|i|m]{1,3}$/;
				var flag = req.match(mod);
				flag = flag ? flag[0] : "i";
				req = req.replace(mod,"").slice(1,-1);
				req = new RegExp(req,flag);
	      return !!val.match(req);
	    }
		}
	};

	// static methods
	Validator.register = function(rule, fn, errMsg) {
		this.prototype.validate[rule] = fn;
		messages[rule] = (typeof errMsg === 'string') ? errMsg : messages['def'];
	};

	Validator.make = function(input, rules, customMessages) {
		return new Validator(input, rules, customMessages);
	};

	// Node environment
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Validator;
	} else { // browser environment
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return Validator;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.Validator = Validator;
		}
	}

	})();

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	exports['default'] = _reactAddons2['default'].createClass({
		displayName: 'select',

		getInitialState: function getInitialState() {
			return {
				value: ''
			};
		},
		propTypes: {
			firstValue: _reactAddons2['default'].PropTypes.string
		},
		// List: React.PropTypes.array,
		getDefaultProps: function getDefaultProps() {
			return {
				firstValue: ''
			};
		},
		render: function render() {
			return _reactAddons2['default'].createElement(
				'div',
				{ className: 'form-group' },
				this.renderSelect()
			);
		},

		renderSelect: function renderSelect() {
			if (this.props.type === "district") {
				return _reactAddons2['default'].createElement(
					'select',
					{ className: 'form-control', onChange: this._onChange },
					_reactAddons2['default'].createElement(
						'option',
						{ value: '' },
						this.props.firstValue
					),
					this.props.List && this.props.List.toJS().map(function (city, i) {
						return _reactAddons2['default'].createElement(
							'option',
							{ key: i, value: city.name },
							city.name
						);
					})
				);
			} else {
				return _reactAddons2['default'].createElement(
					'select',
					{ className: 'form-control', onChange: this._onChange },
					_reactAddons2['default'].createElement(
						'option',
						{ value: '' },
						this.props.firstValue
					),
					this.props.List && this.props.List.map(function (city, i) {
						return _reactAddons2['default'].createElement(
							'option',
							{ key: i, value: city },
							city
						);
					})
				);
			}
		},

		_onChange: function _onChange(e) {
			var value = e.target.value;
			this.setValue(value);
			if (this.props.onChange) {
				this.props.onChange(value);
			}
		},
		setValue: function setValue(txt) {
			this.setState({ value: txt });
		},
		getValue: function getValue() {
			return this.state.value;
		}
	});
	module.exports = exports['default'];

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	/* @jsx React.DOM */
	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	exports['default'] = _reactAddons2['default'].createClass({
	  displayName: 'inputValidationLabel',

	  getInitialState: function getInitialState() {
	    return {
	      value: this.props.defaultValue
	    };
	  },
	  propTypes: {
	    validation: _reactAddons2['default'].PropTypes.object,
	    onChange: _reactAddons2['default'].PropTypes.func,
	    placeholder: _reactAddons2['default'].PropTypes.string,
	    name: _reactAddons2['default'].PropTypes.string,
	    type: _reactAddons2['default'].PropTypes.string
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      validation: { hasError: false },
	      placeholder: '',
	      type: 'text'
	    };
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])({
	      "form-group": true,
	      "has-error": this.props.validator.hasError
	    });
	    var classesInput = (0, _classnames2['default'])({
	      "form-control": true,
	      "input-lg": this.props.size === "lg"
	    });

	    var erros = _reactAddons2['default'].createElement('label', { className: 'control-label', htmlFor: this.props.name });

	    if (this.props.validator.errorTextRequest !== "") {
	      erros = _reactAddons2['default'].createElement(
	        'label',
	        { className: 'control-label', htmlFor: this.props.name },
	        this.props.validator.errorTextRequest
	      );
	    } else {
	      erros = _reactAddons2['default'].createElement(
	        'label',
	        { className: 'control-label', htmlFor: this.props.name },
	        this.props.validator.errorMessage
	      );
	    }

	    return _reactAddons2['default'].createElement(
	      'div',
	      { className: classes },
	      erros,
	      _reactAddons2['default'].createElement('input', {
	        className: classesInput,
	        type: this.props.type,
	        value: this.state.value,
	        name: this.props.name,
	        onChange: this._onChange,
	        onBlur: this._onBlur,
	        placeholder: this.props.placeholder })
	    );
	  },
	  _onChange: function _onChange(e) {
	    var value = e.target.value;
	    this.setValue(value);
	    this.props.onChange(this.props.name, value);
	  },
	  _onBlur: function _onBlur(e) {
	    var value = e.target.value;
	    this.props.onChange(this.props.name, value);
	  },
	  setValue: function setValue(txt) {
	    this.setState({ value: txt });
	  },
	  getValue: function getValue() {
	    return this.state.value;
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _storeBoxStore = __webpack_require__(338);

	var _storeBoxStore2 = _interopRequireDefault(_storeBoxStore);

	var _storeAuthStore = __webpack_require__(343);

	var _storeAuthStore2 = _interopRequireDefault(_storeAuthStore);

	/**
	 * @Component
	 */

	var _ThumbItem = __webpack_require__(360);

	var _ThumbItem2 = _interopRequireDefault(_ThumbItem);

	var ThumbNail = (function (_React$Component) {
	  _inherits(ThumbNail, _React$Component);

	  function ThumbNail(props) {
	    _classCallCheck(this, ThumbNail);

	    _get(Object.getPrototypeOf(ThumbNail.prototype), 'constructor', this).call(this, props);
	    this._onChangeAuthStore = this._onChangeAuthStore.bind(this);
	    this._onChangeBoxStore = this._onChangeBoxStore.bind(this);

	    this.state = {
	      boxs: _storeBoxStore2['default'].getState().boxs,
	      auth: _storeAuthStore2['default'].getState().auth
	    };
	  }

	  _createClass(ThumbNail, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storeAuthStore2['default'].listen(this._onChangeAuthStore);
	      _storeBoxStore2['default'].listen(this._onChangeBoxStore);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storeAuthStore2['default'].unlisten(this._onChangeAuthStore);
	      _storeBoxStore2['default'].unlisten(this._onChangeBoxStore);
	    }
	  }, {
	    key: '_onChangeAuthStore',
	    value: function _onChangeAuthStore(state) {
	      this.setState({
	        auth: state.auth
	      });
	    }
	  }, {
	    key: '_onChangeBoxStore',
	    value: function _onChangeBoxStore(state) {
	      this.setState({
	        boxs: state.boxs
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      return _reactAddons2['default'].createElement(
	        'div',
	        { className: 'row row-thumbnail' },
	        this.state.boxs.map(function (box, i) {
	          return _reactAddons2['default'].createElement(
	            'div',
	            { key: i, className: 'col-xs-6 col-sm-4 col-md-3 col-lg-3' },
	            _reactAddons2['default'].createElement(_ThumbItem2['default'], { handleBoxLogin: _this.props.handleBoxLogin, auth: _this.state.auth, box: box })
	          );
	        })
	      );
	    }
	  }]);

	  return ThumbNail;
	})(_reactAddons2['default'].Component);

	exports['default'] = ThumbNail;
	;
	module.exports = exports['default'];

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _extends = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _immutable = __webpack_require__(342);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _actionsBoxActions = __webpack_require__(314);

	var _actionsBoxActions2 = _interopRequireDefault(_actionsBoxActions);

	/**
	 * @Component
	 */

	var _ArticleItem = __webpack_require__(361);

	var _ArticleItem2 = _interopRequireDefault(_ArticleItem);

	var _AlbumItem = __webpack_require__(362);

	var _AlbumItem2 = _interopRequireDefault(_AlbumItem);

	var _ProductItem = __webpack_require__(363);

	var _ProductItem2 = _interopRequireDefault(_ProductItem);

	var ThumbItem = (function (_React$Component) {
	  _inherits(ThumbItem, _React$Component);

	  function ThumbItem(props) {
	    _classCallCheck(this, ThumbItem);

	    _get(Object.getPrototypeOf(ThumbItem.prototype), 'constructor', this).call(this, props);

	    this._bind('boxLogin', 'handleLike');
	  }

	  _createClass(ThumbItem, [{
	    key: '_bind',
	    value: function _bind() {
	      var _this = this;

	      for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
	        methods[_key] = arguments[_key];
	      }

	      methods.forEach(function (method) {
	        return _this[method] = _this[method].bind(_this);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var img_url = "http://api.tocu.vn/image/220x220/404.jpg";
	      var type = "";
	      var ListPost = this.props.box.get('latestPosts').toJS().map(function (post, i) {
	        /**
	         * lấy link ảnh của bài post đầu tiên
	         */
	        var backgroundImage = true;
	        if (i === 0 && post.images) {
	          var url = post.images[0];
	          img_url = url.replace(/image\//gi, 'image/220x220/');
	          backgroundImage = false;
	        }
	        /**
	         * format number to String 250000 => "250.000"
	         * @type {number}
	         */
	        post.price = post.price !== null ? post.price.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '0';

	        switch (_this2.props.box.get('type')) {
	          case "product":
	            return _reactAddons2['default'].createElement(_ProductItem2['default'], _extends({ key: i, i: i }, post, { backgroundImage: backgroundImage }));
	          case "article":
	            return _reactAddons2['default'].createElement(PostItem, _extends({ key: i, i: i }, post));
	          case "photo":
	            return _reactAddons2['default'].createElement(_AlbumItem2['default'], _extends({ key: i, i: i }, post));
	        }
	      });

	      /**
	       * for nếu ListPost ít hơn 2 bài post thì thêm @Component trắng
	       * @param  {number} count ListPost
	       * @return {Component}     @Component trắng
	       */
	      for (var i = ListPost.length; i < 2; i++) {
	        ListPost.push(_reactAddons2['default'].createElement(
	          'div',
	          { key: i, className: 'list-item emtry' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'item' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'newsItem newCreditItem' },
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'newsImg' },
	                _reactAddons2['default'].createElement('span', { className: 'imgIcon imgIcon-list' })
	              ),
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'newsText newsInfo' },
	                _reactAddons2['default'].createElement('p', { className: 'creditTitle' }),
	                _reactAddons2['default'].createElement(
	                  'p',
	                  null,
	                  _reactAddons2['default'].createElement('strong', { className: 'creditCost' })
	                )
	              )
	            )
	          )
	        ));
	      };

	      switch (this.props.box.get('type')) {
	        case "product":
	          type = "Sản phẩm";
	          break;
	        case "article":
	          type = "Bài viết";
	          break;
	        case "photo":
	          type = "Ảnh";
	      }

	      return _reactAddons2['default'].createElement(
	        'div',
	        { className: 'thumbnail' },
	        _reactAddons2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/box/' + this.props.box.get('id') },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'img-Wrapper' },
	            _reactAddons2['default'].createElement('img', { className: 'img-max-height', 'data-holder-rendered': 'true', src: img_url, alt: 'images' }),
	            _reactAddons2['default'].createElement('div', { className: 'divshowdow' })
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'thumbnail-list-news' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'list-news' },
	              ListPost
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'thumbnail-info' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'infoItem' },
	              _reactAddons2['default'].createElement(
	                'span',
	                { className: 'titleItem' },
	                this.props.box.get('name')
	              ),
	              _reactAddons2['default'].createElement(
	                'span',
	                { className: 'countItem' },
	                this.props.box.get('postsCount'),
	                ' ',
	                type
	              )
	            ),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'socialItem' },
	              _reactAddons2['default'].createElement('span', { className: 'SmallIcon likeSmallIcon' }),
	              _reactAddons2['default'].createElement(
	                'span',
	                { className: 'socialMetaCount' },
	                this.props.box.get('likesCount')
	              )
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'boxLogin',
	    value: function boxLogin(cb) {
	      if (!this.props.auth.get('access_token')) {
	        this.props.handleBoxLogin();
	      } else {
	        cb();
	      }
	    }
	  }, {
	    key: 'handleLike',
	    value: function handleLike(e) {
	      e.preventDefault();
	      this.boxLogin((function () {
	        _actionsBoxActions2['default'].like({ itemID: this.props.box.get('id'), token: this.props.auth.get('access_token'), userID: this.props.auth.get('id') });
	      }).bind(this));
	    }
	  }]);

	  return ThumbItem;
	})(_reactAddons2['default'].Component);

	exports['default'] = ThumbItem;

	ThumbItem.propTypes = {
	  box: _reactAddons.PropTypes.instanceOf(_immutable2['default'].Map).isRequired,
	  auth: _reactAddons.PropTypes.instanceOf(_immutable2['default'].Map).isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	/* @jsx React.DOM */
	"use strict";

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var CreditItem = (function (_React$Component) {
	  _inherits(CreditItem, _React$Component);

	  function CreditItem() {
	    _classCallCheck(this, CreditItem);

	    _get(Object.getPrototypeOf(CreditItem.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(CreditItem, [{
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        _reactRouter.Link,
	        { to: '/posts/' + this.props.id, className: 'newsItem newCreditItem' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'newsImg' },
	          _reactAddons2['default'].createElement('span', { className: 'imgIcon imgIcon-list imgIcon-bg-blue' })
	        ),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'newsText' },
	          this.props.text
	        )
	      );
	    }
	  }]);

	  return CreditItem;
	})(_reactAddons2['default'].Component);

	exports['default'] = CreditItem;
	module.exports = exports['default'];

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	/* @jsx React.DOM */
	"use strict";

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var AlbumItem = (function (_React$Component) {
	  _inherits(AlbumItem, _React$Component);

	  function AlbumItem() {
	    _classCallCheck(this, AlbumItem);

	    _get(Object.getPrototypeOf(AlbumItem.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(AlbumItem, [{
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        _reactRouter.Link,
	        { to: '/album/' + this.props.id, className: 'newsItem newCreditItem' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'newsImg' },
	          _reactAddons2['default'].createElement('span', { className: 'imgIcon imgIcon-list imgIcon-bg-yellow' })
	        ),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'newsText' },
	          this.props.text
	        )
	      );
	    }
	  }]);

	  return AlbumItem;
	})(_reactAddons2['default'].Component);

	exports['default'] = AlbumItem;
	module.exports = exports['default'];

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var ProductItem = (function (_React$Component) {
	  _inherits(ProductItem, _React$Component);

	  function ProductItem() {
	    _classCallCheck(this, ProductItem);

	    _get(Object.getPrototypeOf(ProductItem.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ProductItem, [{
	    key: 'render',
	    value: function render() {
	      var images = null,
	          styles = {};
	      if (this.props.i !== 0 && this.props.images) {
	        var url = this.props.images[0];
	        var img_url = url.replace(/image\//gi, 'image/50x50/');
	        images = _reactAddons2['default'].createElement('img', { src: img_url });
	        styles = {
	          backgroundImage: 'url(' + url.replace(/image\//gi, "image/220x53/") + ')'
	        };
	      }

	      return _reactAddons2['default'].createElement(
	        'div',
	        { className: 'list-item', style: styles },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'item' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'newsItem newCreditItem' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'newsImg' },
	              _reactAddons2['default'].createElement(
	                'span',
	                { className: 'imgIcon imgIcon-list imgIcon-bg-red imgIcon-bg-store' },
	                images
	              )
	            ),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'newsText newsInfo' },
	              _reactAddons2['default'].createElement(
	                'p',
	                { className: 'creditTitle' },
	                this.props.code
	              ),
	              _reactAddons2['default'].createElement(
	                'p',
	                null,
	                _reactAddons2['default'].createElement(
	                  'strong',
	                  { className: 'creditCost' },
	                  this.props.price,
	                  ' đ'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ProductItem;
	})(_reactAddons2['default'].Component);

	exports['default'] = ProductItem;

	ProductItem.propTypes = {
	  id: _reactAddons2['default'].PropTypes.number.isRequired,
	  code: _reactAddons2['default'].PropTypes.string.isRequired,
	  price: _reactAddons2['default'].PropTypes.string.isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _axios = __webpack_require__(315);

	var _axios2 = _interopRequireDefault(_axios);

	var _reactAsync = __webpack_require__(365);

	var _reactAsync2 = _interopRequireDefault(_reactAsync);

	var _reactRouter = __webpack_require__(238);

	var _configSample = __webpack_require__(334);

	var _actionsBoxActions = __webpack_require__(314);

	var _actionsBoxActions2 = _interopRequireDefault(_actionsBoxActions);

	var _actionsSanphamActions = __webpack_require__(335);

	var _actionsSanphamActions2 = _interopRequireDefault(_actionsSanphamActions);

	var _reactMasonryMixin = __webpack_require__(370);

	var _reactMasonryMixin2 = _interopRequireDefault(_reactMasonryMixin);

	var _reactPackeryMixin = __webpack_require__(387);

	var _reactPackeryMixin2 = _interopRequireDefault(_reactPackeryMixin);

	/**
	 * @Component
	 */

	var _componentsFormSignIn = __webpack_require__(353);

	var _componentsFormSignIn2 = _interopRequireDefault(_componentsFormSignIn);

	var _componentsHeaderBox = __webpack_require__(409);

	var _componentsHeaderBox2 = _interopRequireDefault(_componentsHeaderBox);

	var _componentsBoxBoxItem = __webpack_require__(411);

	var _componentsBoxBoxItem2 = _interopRequireDefault(_componentsBoxBoxItem);

	var InfiniteScroll = __webpack_require__(412)(_reactAddons2['default']);

	var createUniqueArray = (function () {
	  return function (inputArray, sorter) {
	    var arrResult = {};
	    var nonDuplicatedArray = [];
	    var i, n;

	    for (i = 0, n = inputArray.length; i < n; i++) {
	      var item = inputArray[i];

	      if (sorter) {
	        arrResult[item[sorter]] = item;
	      } else {
	        arrResult[item] = item;
	      }
	    }

	    i = 0;

	    for (var item in arrResult) {
	      nonDuplicatedArray[i++] = arrResult[item];
	    }

	    return nonDuplicatedArray;
	  };
	})();

	exports['default'] = _reactAddons2['default'].createClass({

	  displayName: "Box",

	  mixins: [_reactAsync2['default'].Mixin, (0, _reactMasonryMixin2['default'])('masonryContainer', {})],

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.category !== this.props.category) {
	      this.setState({
	        page: 0,
	        posts: [],
	        hasMore: true,
	        boxLogin: false,
	        skip: 0,
	        limit: 15
	      });
	    }
	  },

	  getInitialStateAsync: function getInitialStateAsync(callback) {
	    callback(null, {
	      page: 0,
	      posts: [],
	      hasMore: true,
	      boxLogin: false,
	      skip: 0,
	      limit: 15
	    });
	  },

	  componentWillMount: function componentWillMount() {
	    this.props.HeadParams.setTitle("Box | tocu.vn");
	    this.props.HeadParams.setDescription("Box | Description");
	    var id = this.props.params.id;

	    _actionsBoxActions2['default'].getBoxID({ id: id });
	  },

	  getLoaderElement: function getLoaderElement() {
	    return _reactAddons2['default'].createElement(
	      'div',
	      { className: 'col-xs-12 col-sm-12 col-md-12 col-lg-12' },
	      _reactAddons2['default'].createElement(
	        'div',
	        { className: 'div-loading text-center' },
	        _reactAddons2['default'].createElement('i', { className: 'fa fa-spinner fa-pulse' })
	      )
	    );
	  },

	  handleLoad: function handleLoad(data, page) {
	    var limit = this.state.limit;
	    var hasMore = data.length == limit;
	    var skip = this.state.skip += limit;

	    this.setState({
	      posts: createUniqueArray(this.state.posts.concat(data), 'id'),
	      page: page + 1,
	      skip: skip
	    });

	    // hasMore: hasMore,
	    this.hasMore(hasMore);
	  },

	  hasMore: function hasMore(_hasMore) {
	    this.setState({
	      hasMore: _hasMore
	    });
	  },

	  loadMore: function loadMore(page) {
	    var id = this.props.params.id;

	    var self = this,
	        skip = this.state.skip,
	        limit = this.state.limit;
	    if (this.state.hasMore) {
	      this.loadActions(id, skip, limit, function (data) {
	        self.handleLoad(data, page);
	      });
	    }
	  },

	  loadActions: function loadActions(id, skip, limit, cb) {
	    _axios2['default'].get(_configSample.Api_URL + '/product/box/' + id + '?skip=' + skip + '&limit=' + limit).then(function (res) {
	      cb(res.data);
	    });
	  },

	  getArticlesToRender: function getArticlesToRender() {
	    var _this = this;

	    if (!this.state.posts) return null;

	    return this.state.posts.map((function (post, i) {
	      return _reactAddons2['default'].createElement(_componentsBoxBoxItem2['default'], _extends({ onClick: _this.handleViewSP, data: post, key: i }, post));
	    }).bind(this));
	  },

	  render: function render() {
	    return _reactAddons2['default'].createElement(
	      'div',
	      null,
	      _reactAddons2['default'].createElement(_componentsHeaderBox2['default'], { handleBoxLogin: this.handleBoxLogin }),
	      _reactAddons2['default'].createElement(
	        'section',
	        { id: 'productDetail' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'row' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'masonry' },
	              _reactAddons2['default'].createElement(
	                InfiniteScroll,
	                {
	                  ref: 'masonryContainer',
	                  loader: this.getLoaderElement(),
	                  pageStart: this.state.page - 1,
	                  loadMore: this.loadMore,
	                  hasMore: this.state.hasMore,
	                  threshold: 500 },
	                this.getArticlesToRender()
	              )
	            )
	          )
	        )
	      ),
	      this.renderBoxLogin()
	    );
	  },

	  renderBoxLogin: function renderBoxLogin() {
	    if (this.state.boxLogin) {
	      return _reactAddons2['default'].createElement(
	        'div',
	        { className: 'boxLogin' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'row row-form' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-7 col-md-5 col-centered' },
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'centrix' },
	                _reactAddons2['default'].createElement(
	                  _componentsFormSignIn2['default'],
	                  { replaceWith: this.hideBoxLogin },
	                  _reactAddons2['default'].createElement('div', { onClick: this.hideBoxLogin, className: 'closeBox fa fa-times' })
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  },

	  handleViewSP: function handleViewSP(sp) {
	    _actionsSanphamActions2['default'].actionSanphamID(sp);
	  },

	  handleBoxLogin: function handleBoxLogin() {
	    this.setState({
	      boxLogin: true
	    });
	  },

	  hideBoxLogin: function hideBoxLogin() {
	    this.setState({
	      boxLogin: false
	    });
	  }

	});
	module.exports = exports['default'];

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var invariant               = __webpack_require__(24);
	var Preloaded               = __webpack_require__(366);
	var getComponentFingerprint = __webpack_require__(369);
	var prefetchAsyncState      = __webpack_require__(367);
	var isAsyncComponent        = __webpack_require__(368);

	var Mixin = {

	  getInitialState: function() {
	    if (this.props.asyncState) {
	      return this.props.asyncState;
	    }

	    if (window.__reactAsyncStatePacket === undefined) {
	      this._fetchAsyncState = true;
	      return {};
	    }

	    var fingerprint = getComponentFingerprint(this);

	    if (window.__reactAsyncStatePacket[fingerprint] === undefined) {
	      this._fetchAsyncState = true;
	      return {};
	    }

	    var asyncState = window.__reactAsyncStatePacket[fingerprint];
	    delete window.__reactAsyncStatePacket[fingerprint];

	    if (typeof this.stateFromJSON === 'function') {
	      asyncState = this.stateFromJSON(asyncState);
	    }

	    return asyncState;
	  },

	  componentDidMount: function() {

	    invariant(
	      typeof this.getInitialStateAsync === 'function',
	      "%s uses ReactAsync.Mixin and should provide getInitialStateAsync(cb) method",
	      this.displayName
	    );

	    if (this._fetchAsyncState) {
	      var cb = this._onStateReady;
	      var promise = this.getInitialStateAsync(cb);

	      if (promise && promise.then) {
	        promise.then(cb.bind(this, null), cb);
	      }
	    }
	  },

	  componentWillUnmount: function() {
	    delete this._fetchAsyncState;
	  },

	  _onStateReady: function(err, asyncState) {
	    if (err) {
	      throw err;
	    }

	    if (this.isMounted()) {
	      this.setState(asyncState || {});
	    }
	  }
	};

	module.exports = {
	  prefetchAsyncState: prefetchAsyncState,
	  isAsyncComponent: isAsyncComponent,
	  Mixin: Mixin,
	  Preloaded: Preloaded
	};


/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React               = __webpack_require__(240);
	var cloneWithProps      = __webpack_require__(179);
	var ReactUpdates        = __webpack_require__(43);
	var emptyFunction       = __webpack_require__(33);
	var prefetchAsyncState  = __webpack_require__(367);
	var isAsyncComponent    = __webpack_require__(368);

	var PreloaderMixin = {

	  propTypes: {
	    children: React.PropTypes.element.isRequired,
	    onAsyncStateFetched: React.PropTypes.func,
	    onBeforeUpdate: React.PropTypes.func,
	    preloader: React.PropTypes.element,
	    alwayUsePreloader: React.PropTypes.bool
	  },

	  getDefaultProps: function() {
	    return {
	      onAsyncStateFetched: emptyFunction,
	      onBeforeUpdate: emptyFunction,
	      onUpdate: emptyFunction
	    };
	  },

	  getInitialState: function() {
	    var children = React.Children.only(this.props.children);
	    if (this.props.preloader) {
	      return {
	        rendered: this.props.preloader,
	        pending: children
	      };
	    } else {
	      return {
	        rendered: children,
	        pending: null
	      };
	    }
	  },

	  componentWillReceiveProps: function(nextProps) {
	    var children = React.Children.only(nextProps.children);
	    if (isAsyncComponent(children) &&
	        children.type !== this.state.rendered.type) {

	      var nextState = {pending: children};

	      if (nextProps.preloader && nextProps.alwayUsePreloader) {
	        nextState.rendered = nextProps.preloader;
	      }

	      this.setState(nextState, this.prefetchAsyncState.bind(null, children));

	    } else {

	      this.setState({
	        rendered: children,
	        pending: null
	      }, this.props.onUpdate);

	    }
	  },

	  componentDidMount: function() {
	    if (this.state.pending) {
	      this.prefetchAsyncState(this.state.pending);
	    }
	  },

	  /**
	   * Get the currently rendered component instance.
	   *
	   * Do not use it in a real code, this is provided only for testing purposes.
	   *
	   * @returns {ReactComponent}
	   */
	  getRendered: function() {
	    return this.refs.rendered;
	  },

	  /**
	   * Check if there's update pending.
	   *
	   * @returns {boolean}
	   */
	  hasPendingUpdate: function() {
	    return this.state.pending !== null;
	  },

	  /**
	   * Prefetch async state for a component and update state.
	   *
	   * @param {ReactComponent} component
	   */
	  prefetchAsyncState: function(component) {
	    prefetchAsyncState(component, function(err, nextRendered) {
	      ReactUpdates.batchedUpdates(function() {
	        this.props.onAsyncStateFetched();
	        if (this.state.pending === component && this.isMounted()) {
	          this.props.onBeforeUpdate();
	          this.setState({
	            rendered: nextRendered,
	            pending: null
	          }, this.props.onUpdate);
	        }
	      }.bind(this));
	    }.bind(this));
	  }
	};

	/**
	 * Component which wraps another component and prefetches its async state before
	 * rendering it.
	 */
	var Preloaded = React.createClass({

	  mixins: [PreloaderMixin],

	  render: function() {
	    return cloneWithProps(this.state.rendered, {ref: 'rendered'});
	  }
	});

	module.exports = Preloaded;



/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var invariant         = __webpack_require__(24);
	var cloneWithProps    = __webpack_require__(179);
	var isAsyncComponent  = __webpack_require__(368);

	/**
	 * Prefetch an async state for an unmounted async component instance.
	 *
	 * @param {ReactComponent} component
	 * @param {Callback} cb
	 */
	function prefetchAsyncState(component, cb) {

	  invariant(
	    isAsyncComponent(component),
	    "%s should be an async component to be able to prefetch async state, " +
	    "but getInitialStateAsync(cb) method is missing or is not a function",
	    component.displayName
	  );

	  var cloneCallback = function(err, asyncState) {
	    if (err) {
	      return cb(err);
	    }

	    cb(null, cloneWithProps(component, {asyncState: asyncState || {}}));
	  };
	  var getInitialStateAsync = component.type.prototype.getInitialStateAsync;
	  var promise = getInitialStateAsync.call(component, cloneCallback);

	  if (promise && typeof promise.then === 'function') {
	    promise.then(cloneCallback.bind(cloneCallback, null), cloneCallback);
	  }
	}

	module.exports = prefetchAsyncState;


/***/ },
/* 368 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Check if a component is an async component.
	 *
	 * @param {ReactComponent} component
	 */
	function isAsyncComponent(component) {
	  return component.type.prototype && typeof component.type.prototype.getInitialStateAsync === 'function';
	}

	module.exports = isAsyncComponent;


/***/ },
/* 369 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Get a fingerprint of the component.
	 *
	 * @param {Object} component
	 * @return {String}
	 */
	function getComponentFingerprint(component) {
	  return component._rootNodeID + '__' + component._mountDepth;
	}

	module.exports = getComponentFingerprint;


/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	var isBrowser = (typeof window !== 'undefined');
	var Masonry = isBrowser ? window.Masonry || __webpack_require__(371) : null;
	var imagesloaded = isBrowser ? __webpack_require__(384) : null;

	function MasonryMixin() {
	    return function(reference, options) {
	        return {
	            masonry: false,

	            domChildren: [],

	            initializeMasonry: function(force) {
	                if (!this.masonry || force) {
	                    this.masonry = new Masonry(this.refs[reference].getDOMNode(), options);
	                    this.domChildren = this.getNewDomChildren();
	                }
	            },

	            getNewDomChildren: function () {
	                var node = this.refs[reference].getDOMNode();
	                var children = options.itemSelector ? node.querySelectorAll(options.itemSelector) : node.children;

	                return Array.prototype.slice.call(children);
	            },

	            diffDomChildren: function() {
	                var oldChildren = this.domChildren;
	                var newChildren = this.getNewDomChildren();

	                var removed = oldChildren.filter(function(oldChild) {
	                    return !~newChildren.indexOf(oldChild);
	                });

	                var added = newChildren.filter(function(newChild) {
	                    return !~oldChildren.indexOf(newChild);
	                });

	                var moved = [];

	                if (removed.length === 0) {
	                    moved = oldChildren.filter(function(child, index) {
	                        return index !== newChildren.indexOf(child);
	                    });
	                }

	                this.domChildren = newChildren;

	                return {
	                    old: oldChildren,
	                    'new': newChildren, // fix for ie8
	                    removed: removed,
	                    added: added,
	                    moved: moved
	                };
	            },

	            performLayout: function() {
	                var diff = this.diffDomChildren();

	                if (diff.removed.length > 0) {
	                    this.masonry.remove(diff.removed);
	                    this.masonry.reloadItems();
	                }

	                if (diff.added.length > 0) {
	                    this.masonry.appended(diff.added);
	                }

	                if (diff.moved.length > 0) {
	                    this.masonry.reloadItems();
	                }

	                this.masonry.layout();
	            },

	            imagesLoaded: function() {
	                imagesloaded(this.refs[reference].getDOMNode(), function(instance) {
	                    this.masonry.layout();
	                }.bind(this));
	            },

	            componentDidMount: function() {
	                if (!isBrowser) return;

	                this.initializeMasonry();
	                this.performLayout();
	                this.imagesLoaded();
	            },

	            componentDidUpdate: function() {
	                if (!isBrowser) return;

	                this.performLayout();
	                this.imagesLoaded();
	            },

	            componentWillReceiveProps: function() {
	                this._timer = setTimeout(function() {
	                    this.masonry.reloadItems();
	                    this.forceUpdate();
	                }.bind(this), 0);
	            },

	            componentWillUnmount: function() {
	                clearTimeout(this._timer);
	            }
	        };
	    };
	}

	module.exports = MasonryMixin();


/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Masonry v3.1.5
	 * Cascading grid layout library
	 * http://masonry.desandro.com
	 * MIT License
	 * by David DeSandro
	 */

	( function( window ) {
	'use strict';

	if (!window) return;

	// -------------------------- helpers -------------------------- //

	var indexOf = Array.prototype.indexOf ?
	  function( items, value ) {
	    return items.indexOf( value );
	  } :
	  function ( items, value ) {
	    for ( var i=0, len = items.length; i < len; i++ ) {
	      var item = items[i];
	      if ( item === value ) {
	        return i;
	      }
	    }
	    return -1;
	  };

	// -------------------------- masonryDefinition -------------------------- //

	// used for AMD definition and requires
	function masonryDefinition( Outlayer, getSize ) {
	  // create an Outlayer layout class
	  var Masonry = Outlayer.create('masonry');

	  Masonry.prototype._resetLayout = function() {
	    this.getSize();
	    this._getMeasurement( 'columnWidth', 'outerWidth' );
	    this._getMeasurement( 'gutter', 'outerWidth' );
	    this.measureColumns();

	    // reset column Y
	    var i = this.cols;
	    this.colYs = [];
	    while (i--) {
	      this.colYs.push( 0 );
	    }

	    this.maxY = 0;
	  };

	  Masonry.prototype.measureColumns = function() {
	    this.getContainerWidth();
	    // if columnWidth is 0, default to outerWidth of first item
	    if ( !this.columnWidth ) {
	      var firstItem = this.items[0];
	      var firstItemElem = firstItem && firstItem.element;
	      // columnWidth fall back to item of first element
	      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
	        // if first elem has no width, default to size of container
	        this.containerWidth;
	    }

	    this.columnWidth += this.gutter;

	    this.cols = Math.floor( ( this.containerWidth + this.gutter ) / this.columnWidth );
	    this.cols = Math.max( this.cols, 1 );
	  };

	  Masonry.prototype.getContainerWidth = function() {
	    // container is parent if fit width
	    var container = this.options.isFitWidth ? this.element.parentNode : this.element;
	    // check that this.size and size are there
	    // IE8 triggers resize on body size change, so they might not be
	    var size = getSize( container );
	    this.containerWidth = size && size.innerWidth;
	  };

	  Masonry.prototype._getItemLayoutPosition = function( item ) {
	    item.getSize();
	    // how many columns does this brick span
	    var remainder = item.size.outerWidth % this.columnWidth;
	    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
	    // round if off by 1 pixel, otherwise use ceil
	    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
	    colSpan = Math.min( colSpan, this.cols );

	    var colGroup = this._getColGroup( colSpan );
	    // get the minimum Y value from the columns
	    var minimumY = Math.min.apply( Math, colGroup );
	    var shortColIndex = indexOf( colGroup, minimumY );

	    // position the brick
	    var position = {
	      x: this.columnWidth * shortColIndex,
	      y: minimumY
	    };

	    // apply setHeight to necessary columns
	    var setHeight = minimumY + item.size.outerHeight;
	    var setSpan = this.cols + 1 - colGroup.length;
	    for ( var i = 0; i < setSpan; i++ ) {
	      this.colYs[ shortColIndex + i ] = setHeight;
	    }

	    return position;
	  };

	  /**
	   * @param {Number} colSpan - number of columns the element spans
	   * @returns {Array} colGroup
	   */
	  Masonry.prototype._getColGroup = function( colSpan ) {
	    if ( colSpan < 2 ) {
	      // if brick spans only one column, use all the column Ys
	      return this.colYs;
	    }

	    var colGroup = [];
	    // how many different places could this brick fit horizontally
	    var groupCount = this.cols + 1 - colSpan;
	    // for each group potential horizontal position
	    for ( var i = 0; i < groupCount; i++ ) {
	      // make an array of colY values for that one group
	      var groupColYs = this.colYs.slice( i, i + colSpan );
	      // and get the max value of the array
	      colGroup[i] = Math.max.apply( Math, groupColYs );
	    }
	    return colGroup;
	  };

	  Masonry.prototype._manageStamp = function( stamp ) {
	    var stampSize = getSize( stamp );
	    var offset = this._getElementOffset( stamp );
	    // get the columns that this stamp affects
	    var firstX = this.options.isOriginLeft ? offset.left : offset.right;
	    var lastX = firstX + stampSize.outerWidth;
	    var firstCol = Math.floor( firstX / this.columnWidth );
	    firstCol = Math.max( 0, firstCol );
	    var lastCol = Math.floor( lastX / this.columnWidth );
	    // lastCol should not go over if multiple of columnWidth #425
	    lastCol -= lastX % this.columnWidth ? 0 : 1;
	    lastCol = Math.min( this.cols - 1, lastCol );
	    // set colYs to bottom of the stamp
	    var stampMaxY = ( this.options.isOriginTop ? offset.top : offset.bottom ) +
	      stampSize.outerHeight;
	    for ( var i = firstCol; i <= lastCol; i++ ) {
	      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
	    }
	  };

	  Masonry.prototype._getContainerSize = function() {
	    this.maxY = Math.max.apply( Math, this.colYs );
	    var size = {
	      height: this.maxY
	    };

	    if ( this.options.isFitWidth ) {
	      size.width = this._getContainerFitWidth();
	    }

	    return size;
	  };

	  Masonry.prototype._getContainerFitWidth = function() {
	    var unusedCols = 0;
	    // count unused columns
	    var i = this.cols;
	    while ( --i ) {
	      if ( this.colYs[i] !== 0 ) {
	        break;
	      }
	      unusedCols++;
	    }
	    // fit container to columns that have been used
	    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
	  };

	  Masonry.prototype.needsResizeLayout = function() {
	    var previousWidth = this.containerWidth;
	    this.getContainerWidth();
	    return previousWidth !== this.containerWidth;
	  };

	  return Masonry;
	}

	// -------------------------- transport -------------------------- //
	if (true) {
	  module.exports = masonryDefinition(
	    __webpack_require__(372),
	    __webpack_require__(382)
	  );
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( [
	      'outlayer/outlayer',
	      'get-size/get-size'
	    ],
	    masonryDefinition );
	} else {
	  // browser global
	  window.Masonry = masonryDefinition(
	    window.Outlayer,
	    window.getSize
	  );
	}

	})( typeof window !== 'undefined' ? window : null );


/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Outlayer v1.2.0
	 * the brains and guts of a layout library
	 * MIT license
	 */

	( function( window ) {
	'use strict';

	if (!window) return;

	// ----- vars ----- //

	var document = window.document;
	var console = window.console;
	var jQuery = window.jQuery;

	var noop = function() {};

	// -------------------------- helpers -------------------------- //

	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}


	var objToString = Object.prototype.toString;
	function isArray( obj ) {
	  return objToString.call( obj ) === '[object Array]';
	}

	// turn element or nodeList into an array
	function makeArray( obj ) {
	  var ary = [];
	  if ( isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( obj && typeof obj.length === 'number' ) {
	    // convert nodeList to array
	    for ( var i=0, len = obj.length; i < len; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	}

	// http://stackoverflow.com/a/384380/182183
	var isElement = ( typeof HTMLElement === 'function' || typeof HTMLElement === 'object' ) ?
	  function isElementDOM2( obj ) {
	    return obj instanceof HTMLElement;
	  } :
	  function isElementQuirky( obj ) {
	    return obj && typeof obj === 'object' &&
	      obj.nodeType === 1 && typeof obj.nodeName === 'string';
	  };

	// index of helper cause IE8
	var indexOf = Array.prototype.indexOf ? function( ary, obj ) {
	    return ary.indexOf( obj );
	  } : function( ary, obj ) {
	    for ( var i=0, len = ary.length; i < len; i++ ) {
	      if ( ary[i] === obj ) {
	        return i;
	      }
	    }
	    return -1;
	  };

	function removeFrom( obj, ary ) {
	  var index = indexOf( ary, obj );
	  if ( index !== -1 ) {
	    ary.splice( index, 1 );
	  }
	}

	// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
	function toDashed( str ) {
	  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
	    return $1 + '-' + $2;
	  }).toLowerCase();
	}


	function outlayerDefinition( eventie, docReady, EventEmitter, getSize, matchesSelector, Item ) {

	// -------------------------- Outlayer -------------------------- //

	// globally unique identifiers
	var GUID = 0;
	// internal store of all Outlayer intances
	var instances = {};


	/**
	 * @param {Element, String} element
	 * @param {Object} options
	 * @constructor
	 */
	function Outlayer( element, options ) {
	  // use element as selector string
	  if ( typeof element === 'string' ) {
	    element = document.querySelector( element );
	  }

	  // bail out if not proper element
	  if ( !element || !isElement( element ) ) {
	    if ( console ) {
	      console.error( 'Bad ' + this.constructor.namespace + ' element: ' + element );
	    }
	    return;
	  }

	  this.element = element;

	  // options
	  this.options = extend( {}, this.constructor.defaults );
	  this.option( options );

	  // add id for Outlayer.getFromElement
	  var id = ++GUID;
	  this.element.outlayerGUID = id; // expando
	  instances[ id ] = this; // associate via id

	  // kick it off
	  this._create();

	  if ( this.options.isInitLayout ) {
	    this.layout();
	  }
	}

	// settings are for internal use only
	Outlayer.namespace = 'outlayer';
	Outlayer.Item = Item;

	// default options
	Outlayer.defaults = {
	  containerStyle: {
	    position: 'relative'
	  },
	  isInitLayout: true,
	  isOriginLeft: true,
	  isOriginTop: true,
	  isResizeBound: true,
	  isResizingContainer: true,
	  // item options
	  transitionDuration: '0.4s',
	  hiddenStyle: {
	    opacity: 0,
	    transform: 'scale(0.001)'
	  },
	  visibleStyle: {
	    opacity: 1,
	    transform: 'scale(1)'
	  }
	};

	// inherit EventEmitter
	extend( Outlayer.prototype, EventEmitter.prototype );

	/**
	 * set options
	 * @param {Object} opts
	 */
	Outlayer.prototype.option = function( opts ) {
	  extend( this.options, opts );
	};

	Outlayer.prototype._create = function() {
	  // get items from children
	  this.reloadItems();
	  // elements that affect layout, but are not laid out
	  this.stamps = [];
	  this.stamp( this.options.stamp );
	  // set container style
	  extend( this.element.style, this.options.containerStyle );

	  // bind resize method
	  if ( this.options.isResizeBound ) {
	    this.bindResize();
	  }
	};

	// goes through all children again and gets bricks in proper order
	Outlayer.prototype.reloadItems = function() {
	  // collection of item elements
	  this.items = this._itemize( this.element.children );
	};


	/**
	 * turn elements into Outlayer.Items to be used in layout
	 * @param {Array or NodeList or HTMLElement} elems
	 * @returns {Array} items - collection of new Outlayer Items
	 */
	Outlayer.prototype._itemize = function( elems ) {

	  var itemElems = this._filterFindItemElements( elems );
	  var Item = this.constructor.Item;

	  // create new Outlayer Items for collection
	  var items = [];
	  for ( var i=0, len = itemElems.length; i < len; i++ ) {
	    var elem = itemElems[i];
	    var item = new Item( elem, this );
	    items.push( item );
	  }

	  return items;
	};

	/**
	 * get item elements to be used in layout
	 * @param {Array or NodeList or HTMLElement} elems
	 * @returns {Array} items - item elements
	 */
	Outlayer.prototype._filterFindItemElements = function( elems ) {
	  // make array of elems
	  elems = makeArray( elems );
	  var itemSelector = this.options.itemSelector;
	  var itemElems = [];

	  for ( var i=0, len = elems.length; i < len; i++ ) {
	    var elem = elems[i];
	    // check that elem is an actual element
	    if ( !isElement( elem ) ) {
	      continue;
	    }
	    // filter & find items if we have an item selector
	    if ( itemSelector ) {
	      // filter siblings
	      if ( matchesSelector( elem, itemSelector ) ) {
	        itemElems.push( elem );
	      }
	      // find children
	      var childElems = elem.querySelectorAll( itemSelector );
	      // concat childElems to filterFound array
	      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
	        itemElems.push( childElems[j] );
	      }
	    } else {
	      itemElems.push( elem );
	    }
	  }

	  return itemElems;
	};

	/**
	 * getter method for getting item elements
	 * @returns {Array} elems - collection of item elements
	 */
	Outlayer.prototype.getItemElements = function() {
	  var elems = [];
	  for ( var i=0, len = this.items.length; i < len; i++ ) {
	    elems.push( this.items[i].element );
	  }
	  return elems;
	};

	// ----- init & layout ----- //

	/**
	 * lays out all items
	 */
	Outlayer.prototype.layout = function() {
	  this._resetLayout();
	  this._manageStamps();

	  // don't animate first layout
	  var isInstant = this.options.isLayoutInstant !== undefined ?
	    this.options.isLayoutInstant : !this._isLayoutInited;
	  this.layoutItems( this.items, isInstant );

	  // flag for initalized
	  this._isLayoutInited = true;
	};

	// _init is alias for layout
	Outlayer.prototype._init = Outlayer.prototype.layout;

	/**
	 * logic before any new layout
	 */
	Outlayer.prototype._resetLayout = function() {
	  this.getSize();
	};


	Outlayer.prototype.getSize = function() {
	  this.size = getSize( this.element );
	};

	/**
	 * get measurement from option, for columnWidth, rowHeight, gutter
	 * if option is String -> get element from selector string, & get size of element
	 * if option is Element -> get size of element
	 * else use option as a number
	 *
	 * @param {String} measurement
	 * @param {String} size - width or height
	 * @private
	 */
	Outlayer.prototype._getMeasurement = function( measurement, size ) {
	  var option = this.options[ measurement ];
	  var elem;
	  if ( !option ) {
	    // default to 0
	    this[ measurement ] = 0;
	  } else {
	    // use option as an element
	    if ( typeof option === 'string' ) {
	      elem = this.element.querySelector( option );
	    } else if ( isElement( option ) ) {
	      elem = option;
	    }
	    // use size of element, if element
	    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
	  }
	};

	/**
	 * layout a collection of item elements
	 * @api public
	 */
	Outlayer.prototype.layoutItems = function( items, isInstant ) {
	  items = this._getItemsForLayout( items );

	  this._layoutItems( items, isInstant );

	  this._postLayout();
	};

	/**
	 * get the items to be laid out
	 * you may want to skip over some items
	 * @param {Array} items
	 * @returns {Array} items
	 */
	Outlayer.prototype._getItemsForLayout = function( items ) {
	  var layoutItems = [];
	  for ( var i=0, len = items.length; i < len; i++ ) {
	    var item = items[i];
	    if ( !item.isIgnored ) {
	      layoutItems.push( item );
	    }
	  }
	  return layoutItems;
	};

	/**
	 * layout items
	 * @param {Array} items
	 * @param {Boolean} isInstant
	 */
	Outlayer.prototype._layoutItems = function( items, isInstant ) {
	  var _this = this;
	  function onItemsLayout() {
	    _this.emitEvent( 'layoutComplete', [ _this, items ] );
	  }

	  if ( !items || !items.length ) {
	    // no items, emit event with empty array
	    onItemsLayout();
	    return;
	  }

	  // emit layoutComplete when done
	  this._itemsOn( items, 'layout', onItemsLayout );

	  var queue = [];

	  for ( var i=0, len = items.length; i < len; i++ ) {
	    var item = items[i];
	    // get x/y object from method
	    var position = this._getItemLayoutPosition( item );
	    // enqueue
	    position.item = item;
	    position.isInstant = isInstant || item.isLayoutInstant;
	    queue.push( position );
	  }

	  this._processLayoutQueue( queue );
	};

	/**
	 * get item layout position
	 * @param {Outlayer.Item} item
	 * @returns {Object} x and y position
	 */
	Outlayer.prototype._getItemLayoutPosition = function( /* item */ ) {
	  return {
	    x: 0,
	    y: 0
	  };
	};

	/**
	 * iterate over array and position each item
	 * Reason being - separating this logic prevents 'layout invalidation'
	 * thx @paul_irish
	 * @param {Array} queue
	 */
	Outlayer.prototype._processLayoutQueue = function( queue ) {
	  for ( var i=0, len = queue.length; i < len; i++ ) {
	    var obj = queue[i];
	    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant );
	  }
	};

	/**
	 * Sets position of item in DOM
	 * @param {Outlayer.Item} item
	 * @param {Number} x - horizontal position
	 * @param {Number} y - vertical position
	 * @param {Boolean} isInstant - disables transitions
	 */
	Outlayer.prototype._positionItem = function( item, x, y, isInstant ) {
	  if ( isInstant ) {
	    // if not transition, just set CSS
	    item.goTo( x, y );
	  } else {
	    item.moveTo( x, y );
	  }
	};

	/**
	 * Any logic you want to do after each layout,
	 * i.e. size the container
	 */
	Outlayer.prototype._postLayout = function() {
	  this.resizeContainer();
	};

	Outlayer.prototype.resizeContainer = function() {
	  if ( !this.options.isResizingContainer ) {
	    return;
	  }
	  var size = this._getContainerSize();
	  if ( size ) {
	    this._setContainerMeasure( size.width, true );
	    this._setContainerMeasure( size.height, false );
	  }
	};

	/**
	 * Sets width or height of container if returned
	 * @returns {Object} size
	 *   @param {Number} width
	 *   @param {Number} height
	 */
	Outlayer.prototype._getContainerSize = noop;

	/**
	 * @param {Number} measure - size of width or height
	 * @param {Boolean} isWidth
	 */
	Outlayer.prototype._setContainerMeasure = function( measure, isWidth ) {
	  if ( measure === undefined ) {
	    return;
	  }

	  var elemSize = this.size;
	  // add padding and border width if border box
	  if ( elemSize.isBorderBox ) {
	    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
	      elemSize.borderLeftWidth + elemSize.borderRightWidth :
	      elemSize.paddingBottom + elemSize.paddingTop +
	      elemSize.borderTopWidth + elemSize.borderBottomWidth;
	  }

	  measure = Math.max( measure, 0 );
	  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
	};

	/**
	 * trigger a callback for a collection of items events
	 * @param {Array} items - Outlayer.Items
	 * @param {String} eventName
	 * @param {Function} callback
	 */
	Outlayer.prototype._itemsOn = function( items, eventName, callback ) {
	  var doneCount = 0;
	  var count = items.length;
	  // event callback
	  var _this = this;
	  function tick() {
	    doneCount++;
	    if ( doneCount === count ) {
	      callback.call( _this );
	    }
	    return true; // bind once
	  }
	  // bind callback
	  for ( var i=0, len = items.length; i < len; i++ ) {
	    var item = items[i];
	    item.on( eventName, tick );
	  }
	};

	// -------------------------- ignore & stamps -------------------------- //


	/**
	 * keep item in collection, but do not lay it out
	 * ignored items do not get skipped in layout
	 * @param {Element} elem
	 */
	Outlayer.prototype.ignore = function( elem ) {
	  var item = this.getItem( elem );
	  if ( item ) {
	    item.isIgnored = true;
	  }
	};

	/**
	 * return item to layout collection
	 * @param {Element} elem
	 */
	Outlayer.prototype.unignore = function( elem ) {
	  var item = this.getItem( elem );
	  if ( item ) {
	    delete item.isIgnored;
	  }
	};

	/**
	 * adds elements to stamps
	 * @param {NodeList, Array, Element, or String} elems
	 */
	Outlayer.prototype.stamp = function( elems ) {
	  elems = this._find( elems );
	  if ( !elems ) {
	    return;
	  }

	  this.stamps = this.stamps.concat( elems );
	  // ignore
	  for ( var i=0, len = elems.length; i < len; i++ ) {
	    var elem = elems[i];
	    this.ignore( elem );
	  }
	};

	/**
	 * removes elements to stamps
	 * @param {NodeList, Array, or Element} elems
	 */
	Outlayer.prototype.unstamp = function( elems ) {
	  elems = this._find( elems );
	  if ( !elems ){
	    return;
	  }

	  for ( var i=0, len = elems.length; i < len; i++ ) {
	    var elem = elems[i];
	    // filter out removed stamp elements
	    removeFrom( elem, this.stamps );
	    this.unignore( elem );
	  }

	};

	/**
	 * finds child elements
	 * @param {NodeList, Array, Element, or String} elems
	 * @returns {Array} elems
	 */
	Outlayer.prototype._find = function( elems ) {
	  if ( !elems ) {
	    return;
	  }
	  // if string, use argument as selector string
	  if ( typeof elems === 'string' ) {
	    elems = this.element.querySelectorAll( elems );
	  }
	  elems = makeArray( elems );
	  return elems;
	};

	Outlayer.prototype._manageStamps = function() {
	  if ( !this.stamps || !this.stamps.length ) {
	    return;
	  }

	  this._getBoundingRect();

	  for ( var i=0, len = this.stamps.length; i < len; i++ ) {
	    var stamp = this.stamps[i];
	    this._manageStamp( stamp );
	  }
	};

	// update boundingLeft / Top
	Outlayer.prototype._getBoundingRect = function() {
	  // get bounding rect for container element
	  var boundingRect = this.element.getBoundingClientRect();
	  var size = this.size;
	  this._boundingRect = {
	    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
	    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
	    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
	    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
	  };
	};

	/**
	 * @param {Element} stamp
	**/
	Outlayer.prototype._manageStamp = noop;

	/**
	 * get x/y position of element relative to container element
	 * @param {Element} elem
	 * @returns {Object} offset - has left, top, right, bottom
	 */
	Outlayer.prototype._getElementOffset = function( elem ) {
	  var boundingRect = elem.getBoundingClientRect();
	  var thisRect = this._boundingRect;
	  var size = getSize( elem );
	  var offset = {
	    left: boundingRect.left - thisRect.left - size.marginLeft,
	    top: boundingRect.top - thisRect.top - size.marginTop,
	    right: thisRect.right - boundingRect.right - size.marginRight,
	    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
	  };
	  return offset;
	};

	// -------------------------- resize -------------------------- //

	// enable event handlers for listeners
	// i.e. resize -> onresize
	Outlayer.prototype.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};

	/**
	 * Bind layout to window resizing
	 */
	Outlayer.prototype.bindResize = function() {
	  // bind just one listener
	  if ( this.isResizeBound ) {
	    return;
	  }
	  eventie.bind( window, 'resize', this );
	  this.isResizeBound = true;
	};

	/**
	 * Unbind layout to window resizing
	 */
	Outlayer.prototype.unbindResize = function() {
	  if ( this.isResizeBound ) {
	    eventie.unbind( window, 'resize', this );
	  }
	  this.isResizeBound = false;
	};

	// original debounce by John Hann
	// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

	// this fires every resize
	Outlayer.prototype.onresize = function() {
	  if ( this.resizeTimeout ) {
	    clearTimeout( this.resizeTimeout );
	  }

	  var _this = this;
	  function delayed() {
	    _this.resize();
	    delete _this.resizeTimeout;
	  }

	  this.resizeTimeout = setTimeout( delayed, 100 );
	};

	// debounced, layout on resize
	Outlayer.prototype.resize = function() {
	  // don't trigger if size did not change
	  // or if resize was unbound. See #9
	  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
	    return;
	  }

	  this.layout();
	};

	/**
	 * check if layout is needed post layout
	 * @returns Boolean
	 */
	Outlayer.prototype.needsResizeLayout = function() {
	  var size = getSize( this.element );
	  // check that this.size and size are there
	  // IE8 triggers resize on body size change, so they might not be
	  var hasSizes = this.size && size;
	  return hasSizes && size.innerWidth !== this.size.innerWidth;
	};

	// -------------------------- methods -------------------------- //

	/**
	 * add items to Outlayer instance
	 * @param {Array or NodeList or Element} elems
	 * @returns {Array} items - Outlayer.Items
	**/
	Outlayer.prototype.addItems = function( elems ) {
	  var items = this._itemize( elems );
	  // add items to collection
	  if ( items.length ) {
	    this.items = this.items.concat( items );
	  }
	  return items;
	};

	/**
	 * Layout newly-appended item elements
	 * @param {Array or NodeList or Element} elems
	 */
	Outlayer.prototype.appended = function( elems ) {
	  var items = this.addItems( elems );
	  if ( !items.length ) {
	    return;
	  }
	  // layout and reveal just the new items
	  this.layoutItems( items, true );
	  this.reveal( items );
	};

	/**
	 * Layout prepended elements
	 * @param {Array or NodeList or Element} elems
	 */
	Outlayer.prototype.prepended = function( elems ) {
	  var items = this._itemize( elems );
	  if ( !items.length ) {
	    return;
	  }
	  // add items to beginning of collection
	  var previousItems = this.items.slice(0);
	  this.items = items.concat( previousItems );
	  // start new layout
	  this._resetLayout();
	  this._manageStamps();
	  // layout new stuff without transition
	  this.layoutItems( items, true );
	  this.reveal( items );
	  // layout previous items
	  this.layoutItems( previousItems );
	};

	/**
	 * reveal a collection of items
	 * @param {Array of Outlayer.Items} items
	 */
	Outlayer.prototype.reveal = function( items ) {
	  var len = items && items.length;
	  if ( !len ) {
	    return;
	  }
	  for ( var i=0; i < len; i++ ) {
	    var item = items[i];
	    item.reveal();
	  }
	};

	/**
	 * hide a collection of items
	 * @param {Array of Outlayer.Items} items
	 */
	Outlayer.prototype.hide = function( items ) {
	  var len = items && items.length;
	  if ( !len ) {
	    return;
	  }
	  for ( var i=0; i < len; i++ ) {
	    var item = items[i];
	    item.hide();
	  }
	};

	/**
	 * get Outlayer.Item, given an Element
	 * @param {Element} elem
	 * @param {Function} callback
	 * @returns {Outlayer.Item} item
	 */
	Outlayer.prototype.getItem = function( elem ) {
	  // loop through items to get the one that matches
	  for ( var i=0, len = this.items.length; i < len; i++ ) {
	    var item = this.items[i];
	    if ( item.element === elem ) {
	      // return item
	      return item;
	    }
	  }
	};

	/**
	 * get collection of Outlayer.Items, given Elements
	 * @param {Array} elems
	 * @returns {Array} items - Outlayer.Items
	 */
	Outlayer.prototype.getItems = function( elems ) {
	  if ( !elems || !elems.length ) {
	    return;
	  }
	  var items = [];
	  for ( var i=0, len = elems.length; i < len; i++ ) {
	    var elem = elems[i];
	    var item = this.getItem( elem );
	    if ( item ) {
	      items.push( item );
	    }
	  }

	  return items;
	};

	/**
	 * remove element(s) from instance and DOM
	 * @param {Array or NodeList or Element} elems
	 */
	Outlayer.prototype.remove = function( elems ) {
	  elems = makeArray( elems );

	  var removeItems = this.getItems( elems );
	  // bail if no items to remove
	  if ( !removeItems || !removeItems.length ) {
	    return;
	  }

	  this._itemsOn( removeItems, 'remove', function() {
	    this.emitEvent( 'removeComplete', [ this, removeItems ] );
	  });

	  for ( var i=0, len = removeItems.length; i < len; i++ ) {
	    var item = removeItems[i];
	    item.remove();
	    // remove item from collection
	    removeFrom( item, this.items );
	  }
	};

	// ----- destroy ----- //

	// remove and disable Outlayer instance
	Outlayer.prototype.destroy = function() {
	  // clean up dynamic styles
	  var style = this.element.style;
	  style.height = '';
	  style.position = '';
	  style.width = '';
	  // destroy items
	  for ( var i=0, len = this.items.length; i < len; i++ ) {
	    var item = this.items[i];
	    item.destroy();
	  }

	  this.unbindResize();

	  delete this.element.outlayerGUID;
	  // remove data for jQuery
	  if ( jQuery ) {
	    jQuery.removeData( this.element, this.constructor.namespace );
	  }

	};

	// -------------------------- data -------------------------- //

	/**
	 * get Outlayer instance from element
	 * @param {Element} elem
	 * @returns {Outlayer}
	 */
	Outlayer.data = function( elem ) {
	  var id = elem && elem.outlayerGUID;
	  return id && instances[ id ];
	};


	// -------------------------- create Outlayer class -------------------------- //

	/**
	 * create a layout class
	 * @param {String} namespace
	 */
	Outlayer.create = function( namespace, options ) {
	  // sub-class Outlayer
	  function Layout() {
	    Outlayer.apply( this, arguments );
	  }
	  // inherit Outlayer prototype, use Object.create if there
	  if ( Object.create ) {
	    Layout.prototype = Object.create( Outlayer.prototype );
	  } else {
	    extend( Layout.prototype, Outlayer.prototype );
	  }
	  // set contructor, used for namespace and Item
	  Layout.prototype.constructor = Layout;

	  Layout.defaults = extend( {}, Outlayer.defaults );
	  // apply new options
	  extend( Layout.defaults, options );
	  // keep prototype.settings for backwards compatibility (Packery v1.2.0)
	  Layout.prototype.settings = {};

	  Layout.namespace = namespace;

	  Layout.data = Outlayer.data;

	  // sub-class Item
	  Layout.Item = function LayoutItem() {
	    Item.apply( this, arguments );
	  };

	  Layout.Item.prototype = new Item();

	  // -------------------------- declarative -------------------------- //

	  /**
	   * allow user to initialize Outlayer via .js-namespace class
	   * options are parsed from data-namespace-option attribute
	   */
	  docReady( function() {
	    var dashedNamespace = toDashed( namespace );
	    var elems = document.querySelectorAll( '.js-' + dashedNamespace );
	    var dataAttr = 'data-' + dashedNamespace + '-options';

	    for ( var i=0, len = elems.length; i < len; i++ ) {
	      var elem = elems[i];
	      var attr = elem.getAttribute( dataAttr );
	      var options;
	      try {
	        options = attr && JSON.parse( attr );
	      } catch ( error ) {
	        // log error, do not initialize
	        if ( console ) {
	          console.error( 'Error parsing ' + dataAttr + ' on ' +
	            elem.nodeName.toLowerCase() + ( elem.id ? '#' + elem.id : '' ) + ': ' +
	            error );
	        }
	        continue;
	      }
	      // initialize
	      var instance = new Layout( elem, options );
	      // make available via $().data('layoutname')
	      if ( jQuery ) {
	        jQuery.data( elem, namespace, instance );
	      }
	    }
	  });

	  // -------------------------- jQuery bridge -------------------------- //

	  // make into jQuery plugin
	  if ( jQuery && jQuery.bridget ) {
	    jQuery.bridget( namespace, Layout );
	  }

	  return Layout;
	};

	// ----- fin ----- //

	// back in global
	Outlayer.Item = Item;

	return Outlayer;

	}

	// -------------------------- transport -------------------------- //
	if (true) {
	  // CommonJS
	  module.exports = outlayerDefinition(
	    __webpack_require__(373),
	    __webpack_require__(374),
	    __webpack_require__(376),
	    __webpack_require__(377),
	    __webpack_require__(379),
	    __webpack_require__(380)
	  );
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( [
	      'eventie/eventie',
	      'doc-ready/doc-ready',
	      'eventEmitter/EventEmitter',
	      'get-size/get-size',
	      'matches-selector/matches-selector',
	      './item'
	    ],
	    outlayerDefinition );
	} else {
	  // browser global
	  window.Outlayer = outlayerDefinition(
	    window.eventie,
	    window.docReady,
	    window.EventEmitter,
	    window.getSize,
	    window.matchesSelector,
	    window.Outlayer.Item
	  );
	}

	})( typeof window !== 'undefined' ? window : null );


/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * eventie v1.0.5
	 * event binding helper
	 *   eventie.bind( elem, 'click', myFn )
	 *   eventie.unbind( elem, 'click', myFn )
	 * MIT license
	 */

	/*jshint browser: true, undef: true, unused: true */
	/*global define: false, module: false */

	( function( window ) {
	'use strict';

	if (!window) return;

	var docElem = document.documentElement;

	var bind = function() {};

	function getIEEvent( obj ) {
	  var event = window.event;
	  // add event.target
	  event.target = event.target || event.srcElement || obj;
	  return event;
	}

	if ( docElem.addEventListener ) {
	  bind = function( obj, type, fn ) {
	    obj.addEventListener( type, fn, false );
	  };
	} else if ( docElem.attachEvent ) {
	  bind = function( obj, type, fn ) {
	    obj[ type + fn ] = fn.handleEvent ?
	      function() {
	        var event = getIEEvent( obj );
	        fn.handleEvent.call( fn, event );
	      } :
	      function() {
	        var event = getIEEvent( obj );
	        fn.call( obj, event );
	      };
	    obj.attachEvent( "on" + type, obj[ type + fn ] );
	  };
	}

	var unbind = function() {};

	if ( docElem.removeEventListener ) {
	  unbind = function( obj, type, fn ) {
	    obj.removeEventListener( type, fn, false );
	  };
	} else if ( docElem.detachEvent ) {
	  unbind = function( obj, type, fn ) {
	    obj.detachEvent( "on" + type, obj[ type + fn ] );
	    try {
	      delete obj[ type + fn ];
	    } catch ( err ) {
	      // can't delete window object properties
	      obj[ type + fn ] = undefined;
	    }
	  };
	}

	var eventie = {
	  bind: bind,
	  unbind: unbind
	};

	// ----- module definition ----- //
	if ( true ) {
	  // CommonJS
	  module.exports = eventie;
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( eventie );
	} else {
	  // browser global
	  window.eventie = eventie;
	}

	})( typeof window !== 'undefined' ? window : null );


/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * docReady v1.0.3
	 * Cross browser DOMContentLoaded event emitter
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true, unused: true*/
	/*global define: false, require: false, module: false */

	( function( window ) {
	'use strict';

	if (!window) return;

	var document = window.document;
	// collection of functions to be triggered on ready
	var queue = [];

	function docReady( fn ) {
	  // throw out non-functions
	  if ( typeof fn !== 'function' ) {
	    return;
	  }

	  if ( docReady.isReady ) {
	    // ready now, hit it
	    fn();
	  } else {
	    // queue function when ready
	    queue.push( fn );
	  }
	}

	docReady.isReady = false;

	// triggered on various doc ready events
	function init( event ) {
	  // bail if IE8 document is not ready just yet
	  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
	  if ( docReady.isReady || isIE8NotReady ) {
	    return;
	  }
	  docReady.isReady = true;

	  // process queue
	  for ( var i=0, len = queue.length; i < len; i++ ) {
	    var fn = queue[i];
	    fn();
	  }
	}

	function defineDocReady( eventie ) {
	  eventie.bind( document, 'DOMContentLoaded', init );
	  eventie.bind( document, 'readystatechange', init );
	  eventie.bind( window, 'load', init );

	  return docReady;
	}

	// transport
	if ( true ) {
	  module.exports = defineDocReady( __webpack_require__(375) );
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  // if RequireJS, then doc is already ready
	  docReady.isReady = typeof requirejs === 'function';
	  define( [ 'eventie/eventie' ], defineDocReady );
	} else {
	  // browser global
	  window.docReady = defineDocReady( window.eventie );
	}

	})( typeof window !== 'undefined' ? window : null );


/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * eventie v1.0.5
	 * event binding helper
	 *   eventie.bind( elem, 'click', myFn )
	 *   eventie.unbind( elem, 'click', myFn )
	 * MIT license
	 */

	/*jshint browser: true, undef: true, unused: true */
	/*global define: false, module: false */

	( function( window ) {
	'use strict';

	if (!window) return;

	var docElem = document.documentElement;

	var bind = function() {};

	function getIEEvent( obj ) {
	  var event = window.event;
	  // add event.target
	  event.target = event.target || event.srcElement || obj;
	  return event;
	}

	if ( docElem.addEventListener ) {
	  bind = function( obj, type, fn ) {
	    obj.addEventListener( type, fn, false );
	  };
	} else if ( docElem.attachEvent ) {
	  bind = function( obj, type, fn ) {
	    obj[ type + fn ] = fn.handleEvent ?
	      function() {
	        var event = getIEEvent( obj );
	        fn.handleEvent.call( fn, event );
	      } :
	      function() {
	        var event = getIEEvent( obj );
	        fn.call( obj, event );
	      };
	    obj.attachEvent( "on" + type, obj[ type + fn ] );
	  };
	}

	var unbind = function() {};

	if ( docElem.removeEventListener ) {
	  unbind = function( obj, type, fn ) {
	    obj.removeEventListener( type, fn, false );
	  };
	} else if ( docElem.detachEvent ) {
	  unbind = function( obj, type, fn ) {
	    obj.detachEvent( "on" + type, obj[ type + fn ] );
	    try {
	      delete obj[ type + fn ];
	    } catch ( err ) {
	      // can't delete window object properties
	      obj[ type + fn ] = undefined;
	    }
	  };
	}

	var eventie = {
	  bind: bind,
	  unbind: unbind
	};

	// ----- module definition ----- //
	if ( true ) {
	  // CommonJS
	  module.exports = eventie;
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( eventie );
	} else {
	  // browser global
	  window.eventie = eventie;
	}

	})( typeof window !== 'undefined' ? window : null );


/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * EventEmitter v4.2.0 - git.io/ee
	 * Oliver Caldwell
	 * MIT license
	 * @preserve
	 */

	(function () {
		// Place the script in strict mode
		'use strict';

		/**
		 * Class for managing events.
		 * Can be extended to provide event functionality in other classes.
		 *
		 * @class EventEmitter Manages event registering and emitting.
		 */
		function EventEmitter() {}

		// Shortcuts to improve speed and size

		// Easy access to the prototype
		var proto = EventEmitter.prototype;

		/**
		 * Finds the index of the listener for the event in it's storage array.
		 *
		 * @param {Function[]} listeners Array of listeners to search through.
		 * @param {Function} listener Method to look for.
		 * @return {Number} Index of the specified listener, -1 if not found
		 * @api private
		 */
		function indexOfListener(listeners, listener) {
			var i = listeners.length;
			while (i--) {
				if (listeners[i].listener === listener) {
					return i;
				}
			}

			return -1;
		}

		/**
		 * Returns the listener array for the specified event.
		 * Will initialise the event object and listener arrays if required.
		 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
		 * Each property in the object response is an array of listener functions.
		 *
		 * @param {String|RegExp} evt Name of the event to return the listeners from.
		 * @return {Function[]|Object} All listener functions for the event.
		 */
		proto.getListeners = function getListeners(evt) {
			var events = this._getEvents();
			var response;
			var key;

			// Return a concatenated array of all matching events if
			// the selector is a regular expression.
			if (typeof evt === 'object') {
				response = {};
				for (key in events) {
					if (events.hasOwnProperty(key) && evt.test(key)) {
						response[key] = events[key];
					}
				}
			}
			else {
				response = events[evt] || (events[evt] = []);
			}

			return response;
		};

		/**
		 * Takes a list of listener objects and flattens it into a list of listener functions.
		 *
		 * @param {Object[]} listeners Raw listener objects.
		 * @return {Function[]} Just the listener functions.
		 */
		proto.flattenListeners = function flattenListeners(listeners) {
			var flatListeners = [];
			var i;

			for (i = 0; i < listeners.length; i += 1) {
				flatListeners.push(listeners[i].listener);
			}

			return flatListeners;
		};

		/**
		 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
		 *
		 * @param {String|RegExp} evt Name of the event to return the listeners from.
		 * @return {Object} All listener functions for an event in an object.
		 */
		proto.getListenersAsObject = function getListenersAsObject(evt) {
			var listeners = this.getListeners(evt);
			var response;

			if (listeners instanceof Array) {
				response = {};
				response[evt] = listeners;
			}

			return response || listeners;
		};

		/**
		 * Adds a listener function to the specified event.
		 * The listener will not be added if it is a duplicate.
		 * If the listener returns true then it will be removed after it is called.
		 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
		 *
		 * @param {String|RegExp} evt Name of the event to attach the listener to.
		 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.addListener = function addListener(evt, listener) {
			var listeners = this.getListenersAsObject(evt);
			var listenerIsWrapped = typeof listener === 'object';
			var key;

			for (key in listeners) {
				if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
					listeners[key].push(listenerIsWrapped ? listener : {
						listener: listener,
						once: false
					});
				}
			}

			return this;
		};

		/**
		 * Alias of addListener
		 */
		proto.on = proto.addListener;

		/**
		 * Semi-alias of addListener. It will add a listener that will be
		 * automatically removed after it's first execution.
		 *
		 * @param {String|RegExp} evt Name of the event to attach the listener to.
		 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.addOnceListener = function addOnceListener(evt, listener) {
			return this.addListener(evt, {
				listener: listener,
				once: true
			});
		};

		/**
		 * Alias of addOnceListener.
		 */
		proto.once = proto.addOnceListener;

		/**
		 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
		 * You need to tell it what event names should be matched by a regex.
		 *
		 * @param {String} evt Name of the event to create.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.defineEvent = function defineEvent(evt) {
			this.getListeners(evt);
			return this;
		};

		/**
		 * Uses defineEvent to define multiple events.
		 *
		 * @param {String[]} evts An array of event names to define.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.defineEvents = function defineEvents(evts) {
			for (var i = 0; i < evts.length; i += 1) {
				this.defineEvent(evts[i]);
			}
			return this;
		};

		/**
		 * Removes a listener function from the specified event.
		 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
		 *
		 * @param {String|RegExp} evt Name of the event to remove the listener from.
		 * @param {Function} listener Method to remove from the event.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.removeListener = function removeListener(evt, listener) {
			var listeners = this.getListenersAsObject(evt);
			var index;
			var key;

			for (key in listeners) {
				if (listeners.hasOwnProperty(key)) {
					index = indexOfListener(listeners[key], listener);

					if (index !== -1) {
						listeners[key].splice(index, 1);
					}
				}
			}

			return this;
		};

		/**
		 * Alias of removeListener
		 */
		proto.off = proto.removeListener;

		/**
		 * Adds listeners in bulk using the manipulateListeners method.
		 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
		 * You can also pass it a regular expression to add the array of listeners to all events that match it.
		 * Yeah, this function does quite a bit. That's probably a bad thing.
		 *
		 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
		 * @param {Function[]} [listeners] An optional array of listener functions to add.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.addListeners = function addListeners(evt, listeners) {
			// Pass through to manipulateListeners
			return this.manipulateListeners(false, evt, listeners);
		};

		/**
		 * Removes listeners in bulk using the manipulateListeners method.
		 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
		 * You can also pass it an event name and an array of listeners to be removed.
		 * You can also pass it a regular expression to remove the listeners from all events that match it.
		 *
		 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
		 * @param {Function[]} [listeners] An optional array of listener functions to remove.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.removeListeners = function removeListeners(evt, listeners) {
			// Pass through to manipulateListeners
			return this.manipulateListeners(true, evt, listeners);
		};

		/**
		 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
		 * The first argument will determine if the listeners are removed (true) or added (false).
		 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
		 * You can also pass it an event name and an array of listeners to be added/removed.
		 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
		 *
		 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
		 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
		 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
			var i;
			var value;
			var single = remove ? this.removeListener : this.addListener;
			var multiple = remove ? this.removeListeners : this.addListeners;

			// If evt is an object then pass each of it's properties to this method
			if (typeof evt === 'object' && !(evt instanceof RegExp)) {
				for (i in evt) {
					if (evt.hasOwnProperty(i) && (value = evt[i])) {
						// Pass the single listener straight through to the singular method
						if (typeof value === 'function') {
							single.call(this, i, value);
						}
						else {
							// Otherwise pass back to the multiple function
							multiple.call(this, i, value);
						}
					}
				}
			}
			else {
				// So evt must be a string
				// And listeners must be an array of listeners
				// Loop over it and pass each one to the multiple method
				i = listeners.length;
				while (i--) {
					single.call(this, evt, listeners[i]);
				}
			}

			return this;
		};

		/**
		 * Removes all listeners from a specified event.
		 * If you do not specify an event then all listeners will be removed.
		 * That means every event will be emptied.
		 * You can also pass a regex to remove all events that match it.
		 *
		 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.removeEvent = function removeEvent(evt) {
			var type = typeof evt;
			var events = this._getEvents();
			var key;

			// Remove different things depending on the state of evt
			if (type === 'string') {
				// Remove all listeners for the specified event
				delete events[evt];
			}
			else if (type === 'object') {
				// Remove all events matching the regex.
				for (key in events) {
					if (events.hasOwnProperty(key) && evt.test(key)) {
						delete events[key];
					}
				}
			}
			else {
				// Remove all listeners in all events
				delete this._events;
			}

			return this;
		};

		/**
		 * Emits an event of your choice.
		 * When emitted, every listener attached to that event will be executed.
		 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
		 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
		 * So they will not arrive within the array on the other side, they will be separate.
		 * You can also pass a regular expression to emit to all events that match it.
		 *
		 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
		 * @param {Array} [args] Optional array of arguments to be passed to each listener.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.emitEvent = function emitEvent(evt, args) {
			var listeners = this.getListenersAsObject(evt);
			var listener;
			var i;
			var key;
			var response;

			for (key in listeners) {
				if (listeners.hasOwnProperty(key)) {
					i = listeners[key].length;

					while (i--) {
						// If the listener returns true then it shall be removed from the event
						// The function is executed either with a basic call or an apply if there is an args array
						listener = listeners[key][i];
						response = listener.listener.apply(this, args || []);
						if (response === this._getOnceReturnValue() || listener.once === true) {
							this.removeListener(evt, listener.listener);
						}
					}
				}
			}

			return this;
		};

		/**
		 * Alias of emitEvent
		 */
		proto.trigger = proto.emitEvent;

		/**
		 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
		 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
		 *
		 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
		 * @param {...*} Optional additional arguments to be passed to each listener.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.emit = function emit(evt) {
			var args = Array.prototype.slice.call(arguments, 1);
			return this.emitEvent(evt, args);
		};

		/**
		 * Sets the current value to check against when executing listeners. If a
		 * listeners return value matches the one set here then it will be removed
		 * after execution. This value defaults to true.
		 *
		 * @param {*} value The new value to check for when executing listeners.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.setOnceReturnValue = function setOnceReturnValue(value) {
			this._onceReturnValue = value;
			return this;
		};

		/**
		 * Fetches the current value to check against when executing listeners. If
		 * the listeners return value matches this one then it should be removed
		 * automatically. It will return true by default.
		 *
		 * @return {*|Boolean} The current value to check for or the default, true.
		 * @api private
		 */
		proto._getOnceReturnValue = function _getOnceReturnValue() {
			if (this.hasOwnProperty('_onceReturnValue')) {
				return this._onceReturnValue;
			}
			else {
				return true;
			}
		};

		/**
		 * Fetches the events object and creates one if required.
		 *
		 * @return {Object} The events storage object.
		 * @api private
		 */
		proto._getEvents = function _getEvents() {
			return this._events || (this._events = {});
		};

		// Expose the class either via AMD, CommonJS or the global object
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return EventEmitter;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
		else if (typeof module !== 'undefined' && module.exports){
			module.exports = EventEmitter;
		}
		else {
			this.EventEmitter = EventEmitter;
		}
	}.call(this));


/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * getSize v1.1.8
	 * measure size of elements
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, exports: false, require: false, module: false */

	( function( window, undefined ) {
	'use strict';

	if (!window) return;

	// -------------------------- helpers -------------------------- //

	var getComputedStyle = window.getComputedStyle;
	var getStyle = getComputedStyle ?
	  function( elem ) {
	    return getComputedStyle( elem, null );
	  } :
	  function( elem ) {
	    return elem.currentStyle;
	  };

	// get a number from a string, not a percentage
	function getStyleSize( value ) {
	  var num = parseFloat( value );
	  // not a percent like '100%', and a number
	  var isValid = value.indexOf('%') === -1 && !isNaN( num );
	  return isValid && num;
	}

	// -------------------------- measurements -------------------------- //

	var measurements = [
	  'paddingLeft',
	  'paddingRight',
	  'paddingTop',
	  'paddingBottom',
	  'marginLeft',
	  'marginRight',
	  'marginTop',
	  'marginBottom',
	  'borderLeftWidth',
	  'borderRightWidth',
	  'borderTopWidth',
	  'borderBottomWidth'
	];

	function getZeroSize() {
	  var size = {
	    width: 0,
	    height: 0,
	    innerWidth: 0,
	    innerHeight: 0,
	    outerWidth: 0,
	    outerHeight: 0
	  };
	  for ( var i=0, len = measurements.length; i < len; i++ ) {
	    var measurement = measurements[i];
	    size[ measurement ] = 0;
	  }
	  return size;
	}



	function defineGetSize( getStyleProperty ) {

	// -------------------------- box sizing -------------------------- //

	var boxSizingProp = getStyleProperty('boxSizing');
	var isBoxSizeOuter;

	/**
	 * WebKit measures the outer-width on style.width on border-box elems
	 * IE & Firefox measures the inner-width
	 */
	( function() {
	  if ( !boxSizingProp ) {
	    return;
	  }

	  var div = document.createElement('div');
	  div.style.width = '200px';
	  div.style.padding = '1px 2px 3px 4px';
	  div.style.borderStyle = 'solid';
	  div.style.borderWidth = '1px 2px 3px 4px';
	  div.style[ boxSizingProp ] = 'border-box';

	  var body = document.body || document.documentElement;
	  body.appendChild( div );
	  var style = getStyle( div );

	  isBoxSizeOuter = getStyleSize( style.width ) === 200;
	  body.removeChild( div );
	})();


	// -------------------------- getSize -------------------------- //

	function getSize( elem ) {
	  // use querySeletor if elem is string
	  if ( typeof elem === 'string' ) {
	    elem = document.querySelector( elem );
	  }

	  // do not proceed on non-objects
	  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
	    return;
	  }

	  var style = getStyle( elem );

	  // if hidden, everything is 0
	  if ( style.display === 'none' ) {
	    return getZeroSize();
	  }

	  var size = {};
	  size.width = elem.offsetWidth;
	  size.height = elem.offsetHeight;

	  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
	    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );

	  // get all measurements
	  for ( var i=0, len = measurements.length; i < len; i++ ) {
	    var measurement = measurements[i];
	    var value = style[ measurement ];
	    value = mungeNonPixel( elem, value );
	    var num = parseFloat( value );
	    // any 'auto', 'medium' value will be 0
	    size[ measurement ] = !isNaN( num ) ? num : 0;
	  }

	  var paddingWidth = size.paddingLeft + size.paddingRight;
	  var paddingHeight = size.paddingTop + size.paddingBottom;
	  var marginWidth = size.marginLeft + size.marginRight;
	  var marginHeight = size.marginTop + size.marginBottom;
	  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
	  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

	  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

	  // overwrite width and height if we can get it from style
	  var styleWidth = getStyleSize( style.width );
	  if ( styleWidth !== false ) {
	    size.width = styleWidth +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
	  }

	  var styleHeight = getStyleSize( style.height );
	  if ( styleHeight !== false ) {
	    size.height = styleHeight +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
	  }

	  size.innerWidth = size.width - ( paddingWidth + borderWidth );
	  size.innerHeight = size.height - ( paddingHeight + borderHeight );

	  size.outerWidth = size.width + marginWidth;
	  size.outerHeight = size.height + marginHeight;

	  return size;
	}

	// IE8 returns percent values, not pixels
	// taken from jQuery's curCSS
	function mungeNonPixel( elem, value ) {
	  // IE8 and has percent value
	  if ( getComputedStyle || value.indexOf('%') === -1 ) {
	    return value;
	  }
	  var style = elem.style;
	  // Remember the original values
	  var left = style.left;
	  var rs = elem.runtimeStyle;
	  var rsLeft = rs && rs.left;

	  // Put in the new values to get a computed value out
	  if ( rsLeft ) {
	    rs.left = elem.currentStyle.left;
	  }
	  style.left = value;
	  value = style.pixelLeft;

	  // Revert the changed values
	  style.left = left;
	  if ( rsLeft ) {
	    rs.left = rsLeft;
	  }

	  return value;
	}

	return getSize;

	}

	// transport
	if ( true ) {
	  // CommonJS for Component
	  module.exports = defineGetSize( __webpack_require__(378) );
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD for RequireJS
	  define( [ 'get-style-property/get-style-property' ], defineGetSize );
	} else {
	  // browser global
	  window.getSize = defineGetSize( window.getStyleProperty );
	}

	})( typeof window !== 'undefined' ? window : null );


/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * getStyleProperty v1.0.4
	 * original by kangax
	 * http://perfectionkills.com/feature-testing-css-properties/
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true */
	/*global define: false, exports: false, module: false */

	( function( window ) {

	'use strict';

	var prefixes = 'Webkit Moz ms Ms O'.split(' ');
	var docElemStyle = document.documentElement.style;

	function getStyleProperty( propName ) {
	  if ( !propName ) {
	    return;
	  }

	  // test standard property first
	  if ( typeof docElemStyle[ propName ] === 'string' ) {
	    return propName;
	  }

	  // capitalize
	  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

	  // test vendor specific properties
	  var prefixed;
	  for ( var i=0, len = prefixes.length; i < len; i++ ) {
	    prefixed = prefixes[i] + propName;
	    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
	      return prefixed;
	    }
	  }
	}

	// transport
	if ( true ) {
	  // AMD
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return getStyleProperty;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ( typeof exports === 'object' ) {
	  // CommonJS for Component
	  module.exports = getStyleProperty;
	} else {
	  // browser global
	  window.getStyleProperty = getStyleProperty;
	}

	})( window );


/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * matchesSelector v1.0.3
	 * matchesSelector( element, '.selector' )
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, module: false */

	( function( ElemProto ) {

	  'use strict';

	  var matchesMethod = ( function() {
	    // check for the standard method name first
	    if ( ElemProto.matches ) {
	      return 'matches';
	    }
	    // check un-prefixed
	    if ( ElemProto.matchesSelector ) {
	      return 'matchesSelector';
	    }
	    // check vendor prefixes
	    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

	    for ( var i=0, len = prefixes.length; i < len; i++ ) {
	      var prefix = prefixes[i];
	      var method = prefix + 'MatchesSelector';
	      if ( ElemProto[ method ] ) {
	        return method;
	      }
	    }
	  })();

	  // ----- match ----- //

	  function match( elem, selector ) {
	    return elem[ matchesMethod ]( selector );
	  }

	  // ----- appendToFragment ----- //

	  function checkParent( elem ) {
	    // not needed if already has parent
	    if ( elem.parentNode ) {
	      return;
	    }
	    var fragment = document.createDocumentFragment();
	    fragment.appendChild( elem );
	  }

	  // ----- query ----- //

	  // fall back to using QSA
	  // thx @jonathantneal https://gist.github.com/3062955
	  function query( elem, selector ) {
	    // append to fragment if no parent
	    checkParent( elem );

	    // match elem with all selected elems of parent
	    var elems = elem.parentNode.querySelectorAll( selector );
	    for ( var i=0, len = elems.length; i < len; i++ ) {
	      // return true if match
	      if ( elems[i] === elem ) {
	        return true;
	      }
	    }
	    // otherwise return false
	    return false;
	  }

	  // ----- matchChild ----- //

	  function matchChild( elem, selector ) {
	    checkParent( elem );
	    return match( elem, selector );
	  }

	  // ----- matchesSelector ----- //

	  var matchesSelector;

	  if ( matchesMethod ) {
	    // IE9 supports matchesSelector, but doesn't work on orphaned elems
	    // check for that
	    var div = document.createElement('div');
	    var supportsOrphans = match( div, 'div' );
	    matchesSelector = supportsOrphans ? match : matchChild;
	  } else {
	    matchesSelector = query;
	  }

	  // transport
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return matchesSelector;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof exports === 'object' ) {
	    module.exports = matchesSelector;
	  }
	  else {
	    // browser global
	    window.matchesSelector = matchesSelector;
	  }

	})( Element.prototype );


/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Outlayer Item
	 */

	( function( window ) {
	'use strict';

	if (!window) return;

	// ----- get style ----- //

	var getComputedStyle = window.getComputedStyle;
	var getStyle = getComputedStyle ?
	  function( elem ) {
	    return getComputedStyle( elem, null );
	  } :
	  function( elem ) {
	    return elem.currentStyle;
	  };


	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}

	function isEmptyObj( obj ) {
	  for ( var prop in obj ) {
	    return false;
	  }
	  prop = null;
	  return true;
	}

	// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
	function toDash( str ) {
	  return str.replace( /([A-Z])/g, function( $1 ){
	    return '-' + $1.toLowerCase();
	  });
	}

	// -------------------------- Outlayer definition -------------------------- //

	function outlayerItemDefinition( EventEmitter, getSize, getStyleProperty ) {

	// -------------------------- CSS3 support -------------------------- //

	var transitionProperty = getStyleProperty('transition');
	var transformProperty = getStyleProperty('transform');
	var supportsCSS3 = transitionProperty && transformProperty;
	var is3d = !!getStyleProperty('perspective');

	var transitionEndEvent = {
	  WebkitTransition: 'webkitTransitionEnd',
	  MozTransition: 'transitionend',
	  OTransition: 'otransitionend',
	  transition: 'transitionend'
	}[ transitionProperty ];

	// properties that could have vendor prefix
	var prefixableProperties = [
	  'transform',
	  'transition',
	  'transitionDuration',
	  'transitionProperty'
	];

	// cache all vendor properties
	var vendorProperties = ( function() {
	  var cache = {};
	  for ( var i=0, len = prefixableProperties.length; i < len; i++ ) {
	    var prop = prefixableProperties[i];
	    var supportedProp = getStyleProperty( prop );
	    if ( supportedProp && supportedProp !== prop ) {
	      cache[ prop ] = supportedProp;
	    }
	  }
	  return cache;
	})();

	// -------------------------- Item -------------------------- //

	function Item( element, layout ) {
	  if ( !element ) {
	    return;
	  }

	  this.element = element;
	  // parent layout class, i.e. Masonry, Isotope, or Packery
	  this.layout = layout;
	  this.position = {
	    x: 0,
	    y: 0
	  };

	  this._create();
	}

	// inherit EventEmitter
	extend( Item.prototype, EventEmitter.prototype );

	Item.prototype._create = function() {
	  // transition objects
	  this._transn = {
	    ingProperties: {},
	    clean: {},
	    onEnd: {}
	  };

	  this.css({
	    position: 'absolute'
	  });
	};

	// trigger specified handler for event type
	Item.prototype.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};

	Item.prototype.getSize = function() {
	  this.size = getSize( this.element );
	};

	/**
	 * apply CSS styles to element
	 * @param {Object} style
	 */
	Item.prototype.css = function( style ) {
	  var elemStyle = this.element.style;

	  for ( var prop in style ) {
	    // use vendor property if available
	    var supportedProp = vendorProperties[ prop ] || prop;
	    elemStyle[ supportedProp ] = style[ prop ];
	  }
	};

	 // measure position, and sets it
	Item.prototype.getPosition = function() {
	  var style = getStyle( this.element );
	  var layoutOptions = this.layout.options;
	  var isOriginLeft = layoutOptions.isOriginLeft;
	  var isOriginTop = layoutOptions.isOriginTop;
	  var x = parseInt( style[ isOriginLeft ? 'left' : 'right' ], 10 );
	  var y = parseInt( style[ isOriginTop ? 'top' : 'bottom' ], 10 );

	  // clean up 'auto' or other non-integer values
	  x = isNaN( x ) ? 0 : x;
	  y = isNaN( y ) ? 0 : y;
	  // remove padding from measurement
	  var layoutSize = this.layout.size;
	  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
	  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

	  this.position.x = x;
	  this.position.y = y;
	};

	// set settled position, apply padding
	Item.prototype.layoutPosition = function() {
	  var layoutSize = this.layout.size;
	  var layoutOptions = this.layout.options;
	  var style = {};

	  if ( layoutOptions.isOriginLeft ) {
	    style.left = ( this.position.x + layoutSize.paddingLeft ) + 'px';
	    // reset other property
	    style.right = '';
	  } else {
	    style.right = ( this.position.x + layoutSize.paddingRight ) + 'px';
	    style.left = '';
	  }

	  if ( layoutOptions.isOriginTop ) {
	    style.top = ( this.position.y + layoutSize.paddingTop ) + 'px';
	    style.bottom = '';
	  } else {
	    style.bottom = ( this.position.y + layoutSize.paddingBottom ) + 'px';
	    style.top = '';
	  }

	  this.css( style );
	  this.emitEvent( 'layout', [ this ] );
	};


	// transform translate function
	var translate = is3d ?
	  function( x, y ) {
	    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
	  } :
	  function( x, y ) {
	    return 'translate(' + x + 'px, ' + y + 'px)';
	  };


	Item.prototype._transitionTo = function( x, y ) {
	  this.getPosition();
	  // get current x & y from top/left
	  var curX = this.position.x;
	  var curY = this.position.y;

	  var compareX = parseInt( x, 10 );
	  var compareY = parseInt( y, 10 );
	  var didNotMove = compareX === this.position.x && compareY === this.position.y;

	  // save end position
	  this.setPosition( x, y );

	  // if did not move and not transitioning, just go to layout
	  if ( didNotMove && !this.isTransitioning ) {
	    this.layoutPosition();
	    return;
	  }

	  var transX = x - curX;
	  var transY = y - curY;
	  var transitionStyle = {};
	  // flip cooridinates if origin on right or bottom
	  var layoutOptions = this.layout.options;
	  transX = layoutOptions.isOriginLeft ? transX : -transX;
	  transY = layoutOptions.isOriginTop ? transY : -transY;
	  transitionStyle.transform = translate( transX, transY );

	  this.transition({
	    to: transitionStyle,
	    onTransitionEnd: {
	      transform: this.layoutPosition
	    },
	    isCleaning: true
	  });
	};

	// non transition + transform support
	Item.prototype.goTo = function( x, y ) {
	  this.setPosition( x, y );
	  this.layoutPosition();
	};

	// use transition and transforms if supported
	Item.prototype.moveTo = supportsCSS3 ?
	  Item.prototype._transitionTo : Item.prototype.goTo;

	Item.prototype.setPosition = function( x, y ) {
	  this.position.x = parseInt( x, 10 );
	  this.position.y = parseInt( y, 10 );
	};

	// ----- transition ----- //

	/**
	 * @param {Object} style - CSS
	 * @param {Function} onTransitionEnd
	 */

	// non transition, just trigger callback
	Item.prototype._nonTransition = function( args ) {
	  this.css( args.to );
	  if ( args.isCleaning ) {
	    this._removeStyles( args.to );
	  }
	  for ( var prop in args.onTransitionEnd ) {
	    args.onTransitionEnd[ prop ].call( this );
	  }
	};

	/**
	 * proper transition
	 * @param {Object} args - arguments
	 *   @param {Object} to - style to transition to
	 *   @param {Object} from - style to start transition from
	 *   @param {Boolean} isCleaning - removes transition styles after transition
	 *   @param {Function} onTransitionEnd - callback
	 */
	Item.prototype._transition = function( args ) {
	  // redirect to nonTransition if no transition duration
	  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
	    this._nonTransition( args );
	    return;
	  }

	  var _transition = this._transn;
	  // keep track of onTransitionEnd callback by css property
	  for ( var prop in args.onTransitionEnd ) {
	    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
	  }
	  // keep track of properties that are transitioning
	  for ( prop in args.to ) {
	    _transition.ingProperties[ prop ] = true;
	    // keep track of properties to clean up when transition is done
	    if ( args.isCleaning ) {
	      _transition.clean[ prop ] = true;
	    }
	  }

	  // set from styles
	  if ( args.from ) {
	    this.css( args.from );
	    // force redraw. http://blog.alexmaccaw.com/css-transitions
	    var h = this.element.offsetHeight;
	    // hack for JSHint to hush about unused var
	    h = null;
	  }
	  // enable transition
	  this.enableTransition( args.to );
	  // set styles that are transitioning
	  this.css( args.to );

	  this.isTransitioning = true;

	};

	var itemTransitionProperties = transformProperty && ( toDash( transformProperty ) +
	  ',opacity' );

	Item.prototype.enableTransition = function(/* style */) {
	  // only enable if not already transitioning
	  // bug in IE10 were re-setting transition style will prevent
	  // transitionend event from triggering
	  if ( this.isTransitioning ) {
	    return;
	  }

	  // make transition: foo, bar, baz from style object
	  // TODO uncomment this bit when IE10 bug is resolved
	  // var transitionValue = [];
	  // for ( var prop in style ) {
	  //   // dash-ify camelCased properties like WebkitTransition
	  //   transitionValue.push( toDash( prop ) );
	  // }
	  // enable transition styles
	  // HACK always enable transform,opacity for IE10
	  this.css({
	    transitionProperty: itemTransitionProperties,
	    transitionDuration: this.layout.options.transitionDuration
	  });
	  // listen for transition end event
	  this.element.addEventListener( transitionEndEvent, this, false );
	};

	Item.prototype.transition = Item.prototype[ transitionProperty ? '_transition' : '_nonTransition' ];

	// ----- events ----- //

	Item.prototype.onwebkitTransitionEnd = function( event ) {
	  this.ontransitionend( event );
	};

	Item.prototype.onotransitionend = function( event ) {
	  this.ontransitionend( event );
	};

	// properties that I munge to make my life easier
	var dashedVendorProperties = {
	  '-webkit-transform': 'transform',
	  '-moz-transform': 'transform',
	  '-o-transform': 'transform'
	};

	Item.prototype.ontransitionend = function( event ) {
	  // disregard bubbled events from children
	  if ( event.target !== this.element ) {
	    return;
	  }
	  var _transition = this._transn;
	  // get property name of transitioned property, convert to prefix-free
	  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

	  // remove property that has completed transitioning
	  delete _transition.ingProperties[ propertyName ];
	  // check if any properties are still transitioning
	  if ( isEmptyObj( _transition.ingProperties ) ) {
	    // all properties have completed transitioning
	    this.disableTransition();
	  }
	  // clean style
	  if ( propertyName in _transition.clean ) {
	    // clean up style
	    this.element.style[ event.propertyName ] = '';
	    delete _transition.clean[ propertyName ];
	  }
	  // trigger onTransitionEnd callback
	  if ( propertyName in _transition.onEnd ) {
	    var onTransitionEnd = _transition.onEnd[ propertyName ];
	    onTransitionEnd.call( this );
	    delete _transition.onEnd[ propertyName ];
	  }

	  this.emitEvent( 'transitionEnd', [ this ] );
	};

	Item.prototype.disableTransition = function() {
	  this.removeTransitionStyles();
	  this.element.removeEventListener( transitionEndEvent, this, false );
	  this.isTransitioning = false;
	};

	/**
	 * removes style property from element
	 * @param {Object} style
	**/
	Item.prototype._removeStyles = function( style ) {
	  // clean up transition styles
	  var cleanStyle = {};
	  for ( var prop in style ) {
	    cleanStyle[ prop ] = '';
	  }
	  this.css( cleanStyle );
	};

	var cleanTransitionStyle = {
	  transitionProperty: '',
	  transitionDuration: ''
	};

	Item.prototype.removeTransitionStyles = function() {
	  // remove transition
	  this.css( cleanTransitionStyle );
	};

	// ----- show/hide/remove ----- //

	// remove element from DOM
	Item.prototype.removeElem = function() {
	  this.element.parentNode.removeChild( this.element );
	  this.emitEvent( 'remove', [ this ] );
	};

	Item.prototype.remove = function() {
	  // just remove element if no transition support or no transition
	  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
	    this.removeElem();
	    return;
	  }

	  // start transition
	  var _this = this;
	  this.on( 'transitionEnd', function() {
	    _this.removeElem();
	    return true; // bind once
	  });
	  this.hide();
	};

	Item.prototype.reveal = function() {
	  delete this.isHidden;
	  // remove display: none
	  this.css({ display: '' });

	  var options = this.layout.options;
	  this.transition({
	    from: options.hiddenStyle,
	    to: options.visibleStyle,
	    isCleaning: true
	  });
	};

	Item.prototype.hide = function() {
	  // set flag
	  this.isHidden = true;
	  // remove display: none
	  this.css({ display: '' });

	  var options = this.layout.options;
	  this.transition({
	    from: options.visibleStyle,
	    to: options.hiddenStyle,
	    // keep hidden stuff hidden
	    isCleaning: true,
	    onTransitionEnd: {
	      opacity: function() {
	        // check if still hidden
	        // during transition, item may have been un-hidden
	        if ( this.isHidden ) {
	          this.css({ display: 'none' });
	        }
	      }
	    }
	  });
	};

	Item.prototype.destroy = function() {
	  this.css({
	    position: '',
	    left: '',
	    right: '',
	    top: '',
	    bottom: '',
	    transition: '',
	    transform: ''
	  });
	};

	return Item;

	}

	// -------------------------- transport -------------------------- //
	if (true) {
	  // CommonJS
	  module.exports = outlayerItemDefinition(
	    __webpack_require__(376),
	    __webpack_require__(377),
	    __webpack_require__(381)
	  );
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( [
	      'eventEmitter/EventEmitter',
	      'get-size/get-size',
	      'get-style-property/get-style-property'
	    ],
	    outlayerItemDefinition );
	} else {
	  // browser global
	  window.Outlayer = {};
	  window.Outlayer.Item = outlayerItemDefinition(
	    window.EventEmitter,
	    window.getSize,
	    window.getStyleProperty
	  );
	}

	})( typeof window !== 'undefined' ? window : null );


/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * getStyleProperty v1.0.4
	 * original by kangax
	 * http://perfectionkills.com/feature-testing-css-properties/
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true */
	/*global define: false, exports: false, module: false */

	( function( window ) {

	'use strict';

	var prefixes = 'Webkit Moz ms Ms O'.split(' ');
	var docElemStyle = document.documentElement.style;

	function getStyleProperty( propName ) {
	  if ( !propName ) {
	    return;
	  }

	  // test standard property first
	  if ( typeof docElemStyle[ propName ] === 'string' ) {
	    return propName;
	  }

	  // capitalize
	  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

	  // test vendor specific properties
	  var prefixed;
	  for ( var i=0, len = prefixes.length; i < len; i++ ) {
	    prefixed = prefixes[i] + propName;
	    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
	      return prefixed;
	    }
	  }
	}

	// transport
	if ( true ) {
	  // AMD
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return getStyleProperty;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ( typeof exports === 'object' ) {
	  // CommonJS for Component
	  module.exports = getStyleProperty;
	} else {
	  // browser global
	  window.getStyleProperty = getStyleProperty;
	}

	})( window );


/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * getSize v1.1.8
	 * measure size of elements
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, exports: false, require: false, module: false */

	( function( window, undefined ) {
	'use strict';

	if (!window) return;

	// -------------------------- helpers -------------------------- //

	var getComputedStyle = window.getComputedStyle;
	var getStyle = getComputedStyle ?
	  function( elem ) {
	    return getComputedStyle( elem, null );
	  } :
	  function( elem ) {
	    return elem.currentStyle;
	  };

	// get a number from a string, not a percentage
	function getStyleSize( value ) {
	  var num = parseFloat( value );
	  // not a percent like '100%', and a number
	  var isValid = value.indexOf('%') === -1 && !isNaN( num );
	  return isValid && num;
	}

	// -------------------------- measurements -------------------------- //

	var measurements = [
	  'paddingLeft',
	  'paddingRight',
	  'paddingTop',
	  'paddingBottom',
	  'marginLeft',
	  'marginRight',
	  'marginTop',
	  'marginBottom',
	  'borderLeftWidth',
	  'borderRightWidth',
	  'borderTopWidth',
	  'borderBottomWidth'
	];

	function getZeroSize() {
	  var size = {
	    width: 0,
	    height: 0,
	    innerWidth: 0,
	    innerHeight: 0,
	    outerWidth: 0,
	    outerHeight: 0
	  };
	  for ( var i=0, len = measurements.length; i < len; i++ ) {
	    var measurement = measurements[i];
	    size[ measurement ] = 0;
	  }
	  return size;
	}



	function defineGetSize( getStyleProperty ) {

	// -------------------------- box sizing -------------------------- //

	var boxSizingProp = getStyleProperty('boxSizing');
	var isBoxSizeOuter;

	/**
	 * WebKit measures the outer-width on style.width on border-box elems
	 * IE & Firefox measures the inner-width
	 */
	( function() {
	  if ( !boxSizingProp ) {
	    return;
	  }

	  var div = document.createElement('div');
	  div.style.width = '200px';
	  div.style.padding = '1px 2px 3px 4px';
	  div.style.borderStyle = 'solid';
	  div.style.borderWidth = '1px 2px 3px 4px';
	  div.style[ boxSizingProp ] = 'border-box';

	  var body = document.body || document.documentElement;
	  body.appendChild( div );
	  var style = getStyle( div );

	  isBoxSizeOuter = getStyleSize( style.width ) === 200;
	  body.removeChild( div );
	})();


	// -------------------------- getSize -------------------------- //

	function getSize( elem ) {
	  // use querySeletor if elem is string
	  if ( typeof elem === 'string' ) {
	    elem = document.querySelector( elem );
	  }

	  // do not proceed on non-objects
	  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
	    return;
	  }

	  var style = getStyle( elem );

	  // if hidden, everything is 0
	  if ( style.display === 'none' ) {
	    return getZeroSize();
	  }

	  var size = {};
	  size.width = elem.offsetWidth;
	  size.height = elem.offsetHeight;

	  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
	    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );

	  // get all measurements
	  for ( var i=0, len = measurements.length; i < len; i++ ) {
	    var measurement = measurements[i];
	    var value = style[ measurement ];
	    value = mungeNonPixel( elem, value );
	    var num = parseFloat( value );
	    // any 'auto', 'medium' value will be 0
	    size[ measurement ] = !isNaN( num ) ? num : 0;
	  }

	  var paddingWidth = size.paddingLeft + size.paddingRight;
	  var paddingHeight = size.paddingTop + size.paddingBottom;
	  var marginWidth = size.marginLeft + size.marginRight;
	  var marginHeight = size.marginTop + size.marginBottom;
	  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
	  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

	  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

	  // overwrite width and height if we can get it from style
	  var styleWidth = getStyleSize( style.width );
	  if ( styleWidth !== false ) {
	    size.width = styleWidth +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
	  }

	  var styleHeight = getStyleSize( style.height );
	  if ( styleHeight !== false ) {
	    size.height = styleHeight +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
	  }

	  size.innerWidth = size.width - ( paddingWidth + borderWidth );
	  size.innerHeight = size.height - ( paddingHeight + borderHeight );

	  size.outerWidth = size.width + marginWidth;
	  size.outerHeight = size.height + marginHeight;

	  return size;
	}

	// IE8 returns percent values, not pixels
	// taken from jQuery's curCSS
	function mungeNonPixel( elem, value ) {
	  // IE8 and has percent value
	  if ( getComputedStyle || value.indexOf('%') === -1 ) {
	    return value;
	  }
	  var style = elem.style;
	  // Remember the original values
	  var left = style.left;
	  var rs = elem.runtimeStyle;
	  var rsLeft = rs && rs.left;

	  // Put in the new values to get a computed value out
	  if ( rsLeft ) {
	    rs.left = elem.currentStyle.left;
	  }
	  style.left = value;
	  value = style.pixelLeft;

	  // Revert the changed values
	  style.left = left;
	  if ( rsLeft ) {
	    rs.left = rsLeft;
	  }

	  return value;
	}

	return getSize;

	}

	// transport
	if ( true ) {
	  // CommonJS for Component
	  module.exports = defineGetSize( __webpack_require__(383) );
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD for RequireJS
	  define( [ 'get-style-property/get-style-property' ], defineGetSize );
	} else {
	  // browser global
	  window.getSize = defineGetSize( window.getStyleProperty );
	}

	})( typeof window !== 'undefined' ? window : null );


/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * getStyleProperty v1.0.4
	 * original by kangax
	 * http://perfectionkills.com/feature-testing-css-properties/
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true */
	/*global define: false, exports: false, module: false */

	( function( window ) {

	'use strict';

	var prefixes = 'Webkit Moz ms Ms O'.split(' ');
	var docElemStyle = document.documentElement.style;

	function getStyleProperty( propName ) {
	  if ( !propName ) {
	    return;
	  }

	  // test standard property first
	  if ( typeof docElemStyle[ propName ] === 'string' ) {
	    return propName;
	  }

	  // capitalize
	  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

	  // test vendor specific properties
	  var prefixed;
	  for ( var i=0, len = prefixes.length; i < len; i++ ) {
	    prefixed = prefixes[i] + propName;
	    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
	      return prefixed;
	    }
	  }
	}

	// transport
	if ( true ) {
	  // AMD
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return getStyleProperty;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ( typeof exports === 'object' ) {
	  // CommonJS for Component
	  module.exports = getStyleProperty;
	} else {
	  // browser global
	  window.getStyleProperty = getStyleProperty;
	}

	})( window );


/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * imagesLoaded v3.1.8
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */

	( function( window, factory ) { 'use strict';
	  // universal module definition

	  /*global define: false, module: false, require: false */

	  if ( true ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      __webpack_require__(385),
	      __webpack_require__(386)
	    );
	  } else if ( typeof define === 'function' && define.amd ) {
	    // AMD
	    define( [
	      'eventEmitter/EventEmitter',
	      'eventie/eventie'
	    ], function( EventEmitter, eventie ) {
	      return factory( window, EventEmitter, eventie );
	    });
	  } else {
	    // browser global
	    window.imagesLoaded = factory(
	      window,
	      window.EventEmitter,
	      window.eventie
	    );
	  }

	})( window,

	// --------------------------  factory -------------------------- //

	function factory( window, EventEmitter, eventie ) {

	'use strict';

	var $ = window.jQuery;
	var console = window.console;
	var hasConsole = typeof console !== 'undefined';

	// -------------------------- helpers -------------------------- //

	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}

	var objToString = Object.prototype.toString;
	function isArray( obj ) {
	  return objToString.call( obj ) === '[object Array]';
	}

	// turn element or nodeList into an array
	function makeArray( obj ) {
	  var ary = [];
	  if ( isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( typeof obj.length === 'number' ) {
	    // convert nodeList to array
	    for ( var i=0, len = obj.length; i < len; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	}

	  // -------------------------- imagesLoaded -------------------------- //

	  /**
	   * @param {Array, Element, NodeList, String} elem
	   * @param {Object or Function} options - if function, use as callback
	   * @param {Function} onAlways - callback function
	   */
	  function ImagesLoaded( elem, options, onAlways ) {
	    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
	    if ( !( this instanceof ImagesLoaded ) ) {
	      return new ImagesLoaded( elem, options );
	    }
	    // use elem as selector string
	    if ( typeof elem === 'string' ) {
	      elem = document.querySelectorAll( elem );
	    }

	    this.elements = makeArray( elem );
	    this.options = extend( {}, this.options );

	    if ( typeof options === 'function' ) {
	      onAlways = options;
	    } else {
	      extend( this.options, options );
	    }

	    if ( onAlways ) {
	      this.on( 'always', onAlways );
	    }

	    this.getImages();

	    if ( $ ) {
	      // add jQuery Deferred object
	      this.jqDeferred = new $.Deferred();
	    }

	    // HACK check async to allow time to bind listeners
	    var _this = this;
	    setTimeout( function() {
	      _this.check();
	    });
	  }

	  ImagesLoaded.prototype = new EventEmitter();

	  ImagesLoaded.prototype.options = {};

	  ImagesLoaded.prototype.getImages = function() {
	    this.images = [];

	    // filter & find items if we have an item selector
	    for ( var i=0, len = this.elements.length; i < len; i++ ) {
	      var elem = this.elements[i];
	      // filter siblings
	      if ( elem.nodeName === 'IMG' ) {
	        this.addImage( elem );
	      }
	      // find children
	      // no non-element nodes, #143
	      var nodeType = elem.nodeType;
	      if ( !nodeType || !( nodeType === 1 || nodeType === 9 || nodeType === 11 ) ) {
	        continue;
	      }
	      var childElems = elem.querySelectorAll('img');
	      // concat childElems to filterFound array
	      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
	        var img = childElems[j];
	        this.addImage( img );
	      }
	    }
	  };

	  /**
	   * @param {Image} img
	   */
	  ImagesLoaded.prototype.addImage = function( img ) {
	    var loadingImage = new LoadingImage( img );
	    this.images.push( loadingImage );
	  };

	  ImagesLoaded.prototype.check = function() {
	    var _this = this;
	    var checkedCount = 0;
	    var length = this.images.length;
	    this.hasAnyBroken = false;
	    // complete if no images
	    if ( !length ) {
	      this.complete();
	      return;
	    }

	    function onConfirm( image, message ) {
	      if ( _this.options.debug && hasConsole ) {
	        console.log( 'confirm', image, message );
	      }

	      _this.progress( image );
	      checkedCount++;
	      if ( checkedCount === length ) {
	        _this.complete();
	      }
	      return true; // bind once
	    }

	    for ( var i=0; i < length; i++ ) {
	      var loadingImage = this.images[i];
	      loadingImage.on( 'confirm', onConfirm );
	      loadingImage.check();
	    }
	  };

	  ImagesLoaded.prototype.progress = function( image ) {
	    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
	    // HACK - Chrome triggers event before object properties have changed. #83
	    var _this = this;
	    setTimeout( function() {
	      _this.emit( 'progress', _this, image );
	      if ( _this.jqDeferred && _this.jqDeferred.notify ) {
	        _this.jqDeferred.notify( _this, image );
	      }
	    });
	  };

	  ImagesLoaded.prototype.complete = function() {
	    var eventName = this.hasAnyBroken ? 'fail' : 'done';
	    this.isComplete = true;
	    var _this = this;
	    // HACK - another setTimeout so that confirm happens after progress
	    setTimeout( function() {
	      _this.emit( eventName, _this );
	      _this.emit( 'always', _this );
	      if ( _this.jqDeferred ) {
	        var jqMethod = _this.hasAnyBroken ? 'reject' : 'resolve';
	        _this.jqDeferred[ jqMethod ]( _this );
	      }
	    });
	  };

	  // -------------------------- jquery -------------------------- //

	  if ( $ ) {
	    $.fn.imagesLoaded = function( options, callback ) {
	      var instance = new ImagesLoaded( this, options, callback );
	      return instance.jqDeferred.promise( $(this) );
	    };
	  }


	  // --------------------------  -------------------------- //

	  function LoadingImage( img ) {
	    this.img = img;
	  }

	  LoadingImage.prototype = new EventEmitter();

	  LoadingImage.prototype.check = function() {
	    // first check cached any previous images that have same src
	    var resource = cache[ this.img.src ] || new Resource( this.img.src );
	    if ( resource.isConfirmed ) {
	      this.confirm( resource.isLoaded, 'cached was confirmed' );
	      return;
	    }

	    // If complete is true and browser supports natural sizes,
	    // try to check for image status manually.
	    if ( this.img.complete && this.img.naturalWidth !== undefined ) {
	      // report based on naturalWidth
	      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	      return;
	    }

	    // If none of the checks above matched, simulate loading on detached element.
	    var _this = this;
	    resource.on( 'confirm', function( resrc, message ) {
	      _this.confirm( resrc.isLoaded, message );
	      return true;
	    });

	    resource.check();
	  };

	  LoadingImage.prototype.confirm = function( isLoaded, message ) {
	    this.isLoaded = isLoaded;
	    this.emit( 'confirm', this, message );
	  };

	  // -------------------------- Resource -------------------------- //

	  // Resource checks each src, only once
	  // separate class from LoadingImage to prevent memory leaks. See #115

	  var cache = {};

	  function Resource( src ) {
	    this.src = src;
	    // add to cache
	    cache[ src ] = this;
	  }

	  Resource.prototype = new EventEmitter();

	  Resource.prototype.check = function() {
	    // only trigger checking once
	    if ( this.isChecked ) {
	      return;
	    }
	    // simulate loading on detached element
	    var proxyImage = new Image();
	    eventie.bind( proxyImage, 'load', this );
	    eventie.bind( proxyImage, 'error', this );
	    proxyImage.src = this.src;
	    // set flag
	    this.isChecked = true;
	  };

	  // ----- events ----- //

	  // trigger specified handler for event type
	  Resource.prototype.handleEvent = function( event ) {
	    var method = 'on' + event.type;
	    if ( this[ method ] ) {
	      this[ method ]( event );
	    }
	  };

	  Resource.prototype.onload = function( event ) {
	    this.confirm( true, 'onload' );
	    this.unbindProxyEvents( event );
	  };

	  Resource.prototype.onerror = function( event ) {
	    this.confirm( false, 'onerror' );
	    this.unbindProxyEvents( event );
	  };

	  // ----- confirm ----- //

	  Resource.prototype.confirm = function( isLoaded, message ) {
	    this.isConfirmed = true;
	    this.isLoaded = isLoaded;
	    this.emit( 'confirm', this, message );
	  };

	  Resource.prototype.unbindProxyEvents = function( event ) {
	    eventie.unbind( event.target, 'load', this );
	    eventie.unbind( event.target, 'error', this );
	  };

	  // -----  ----- //

	  return ImagesLoaded;

	});


/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * EventEmitter v4.2.11 - git.io/ee
	 * Unlicense - http://unlicense.org/
	 * Oliver Caldwell - http://oli.me.uk/
	 * @preserve
	 */

	;(function () {
	    'use strict';

	    /**
	     * Class for managing events.
	     * Can be extended to provide event functionality in other classes.
	     *
	     * @class EventEmitter Manages event registering and emitting.
	     */
	    function EventEmitter() {}

	    // Shortcuts to improve speed and size
	    var proto = EventEmitter.prototype;
	    var exports = this;
	    var originalGlobalValue = exports.EventEmitter;

	    /**
	     * Finds the index of the listener for the event in its storage array.
	     *
	     * @param {Function[]} listeners Array of listeners to search through.
	     * @param {Function} listener Method to look for.
	     * @return {Number} Index of the specified listener, -1 if not found
	     * @api private
	     */
	    function indexOfListener(listeners, listener) {
	        var i = listeners.length;
	        while (i--) {
	            if (listeners[i].listener === listener) {
	                return i;
	            }
	        }

	        return -1;
	    }

	    /**
	     * Alias a method while keeping the context correct, to allow for overwriting of target method.
	     *
	     * @param {String} name The name of the target method.
	     * @return {Function} The aliased method
	     * @api private
	     */
	    function alias(name) {
	        return function aliasClosure() {
	            return this[name].apply(this, arguments);
	        };
	    }

	    /**
	     * Returns the listener array for the specified event.
	     * Will initialise the event object and listener arrays if required.
	     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	     * Each property in the object response is an array of listener functions.
	     *
	     * @param {String|RegExp} evt Name of the event to return the listeners from.
	     * @return {Function[]|Object} All listener functions for the event.
	     */
	    proto.getListeners = function getListeners(evt) {
	        var events = this._getEvents();
	        var response;
	        var key;

	        // Return a concatenated array of all matching events if
	        // the selector is a regular expression.
	        if (evt instanceof RegExp) {
	            response = {};
	            for (key in events) {
	                if (events.hasOwnProperty(key) && evt.test(key)) {
	                    response[key] = events[key];
	                }
	            }
	        }
	        else {
	            response = events[evt] || (events[evt] = []);
	        }

	        return response;
	    };

	    /**
	     * Takes a list of listener objects and flattens it into a list of listener functions.
	     *
	     * @param {Object[]} listeners Raw listener objects.
	     * @return {Function[]} Just the listener functions.
	     */
	    proto.flattenListeners = function flattenListeners(listeners) {
	        var flatListeners = [];
	        var i;

	        for (i = 0; i < listeners.length; i += 1) {
	            flatListeners.push(listeners[i].listener);
	        }

	        return flatListeners;
	    };

	    /**
	     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	     *
	     * @param {String|RegExp} evt Name of the event to return the listeners from.
	     * @return {Object} All listener functions for an event in an object.
	     */
	    proto.getListenersAsObject = function getListenersAsObject(evt) {
	        var listeners = this.getListeners(evt);
	        var response;

	        if (listeners instanceof Array) {
	            response = {};
	            response[evt] = listeners;
	        }

	        return response || listeners;
	    };

	    /**
	     * Adds a listener function to the specified event.
	     * The listener will not be added if it is a duplicate.
	     * If the listener returns true then it will be removed after it is called.
	     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to attach the listener to.
	     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addListener = function addListener(evt, listener) {
	        var listeners = this.getListenersAsObject(evt);
	        var listenerIsWrapped = typeof listener === 'object';
	        var key;

	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
	                listeners[key].push(listenerIsWrapped ? listener : {
	                    listener: listener,
	                    once: false
	                });
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of addListener
	     */
	    proto.on = alias('addListener');

	    /**
	     * Semi-alias of addListener. It will add a listener that will be
	     * automatically removed after its first execution.
	     *
	     * @param {String|RegExp} evt Name of the event to attach the listener to.
	     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addOnceListener = function addOnceListener(evt, listener) {
	        return this.addListener(evt, {
	            listener: listener,
	            once: true
	        });
	    };

	    /**
	     * Alias of addOnceListener.
	     */
	    proto.once = alias('addOnceListener');

	    /**
	     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	     * You need to tell it what event names should be matched by a regex.
	     *
	     * @param {String} evt Name of the event to create.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.defineEvent = function defineEvent(evt) {
	        this.getListeners(evt);
	        return this;
	    };

	    /**
	     * Uses defineEvent to define multiple events.
	     *
	     * @param {String[]} evts An array of event names to define.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.defineEvents = function defineEvents(evts) {
	        for (var i = 0; i < evts.length; i += 1) {
	            this.defineEvent(evts[i]);
	        }
	        return this;
	    };

	    /**
	     * Removes a listener function from the specified event.
	     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to remove the listener from.
	     * @param {Function} listener Method to remove from the event.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeListener = function removeListener(evt, listener) {
	        var listeners = this.getListenersAsObject(evt);
	        var index;
	        var key;

	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key)) {
	                index = indexOfListener(listeners[key], listener);

	                if (index !== -1) {
	                    listeners[key].splice(index, 1);
	                }
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of removeListener
	     */
	    proto.off = alias('removeListener');

	    /**
	     * Adds listeners in bulk using the manipulateListeners method.
	     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	     * You can also pass it a regular expression to add the array of listeners to all events that match it.
	     * Yeah, this function does quite a bit. That's probably a bad thing.
	     *
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to add.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addListeners = function addListeners(evt, listeners) {
	        // Pass through to manipulateListeners
	        return this.manipulateListeners(false, evt, listeners);
	    };

	    /**
	     * Removes listeners in bulk using the manipulateListeners method.
	     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	     * You can also pass it an event name and an array of listeners to be removed.
	     * You can also pass it a regular expression to remove the listeners from all events that match it.
	     *
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to remove.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeListeners = function removeListeners(evt, listeners) {
	        // Pass through to manipulateListeners
	        return this.manipulateListeners(true, evt, listeners);
	    };

	    /**
	     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	     * The first argument will determine if the listeners are removed (true) or added (false).
	     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	     * You can also pass it an event name and an array of listeners to be added/removed.
	     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	     *
	     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
	        var i;
	        var value;
	        var single = remove ? this.removeListener : this.addListener;
	        var multiple = remove ? this.removeListeners : this.addListeners;

	        // If evt is an object then pass each of its properties to this method
	        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
	            for (i in evt) {
	                if (evt.hasOwnProperty(i) && (value = evt[i])) {
	                    // Pass the single listener straight through to the singular method
	                    if (typeof value === 'function') {
	                        single.call(this, i, value);
	                    }
	                    else {
	                        // Otherwise pass back to the multiple function
	                        multiple.call(this, i, value);
	                    }
	                }
	            }
	        }
	        else {
	            // So evt must be a string
	            // And listeners must be an array of listeners
	            // Loop over it and pass each one to the multiple method
	            i = listeners.length;
	            while (i--) {
	                single.call(this, evt, listeners[i]);
	            }
	        }

	        return this;
	    };

	    /**
	     * Removes all listeners from a specified event.
	     * If you do not specify an event then all listeners will be removed.
	     * That means every event will be emptied.
	     * You can also pass a regex to remove all events that match it.
	     *
	     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeEvent = function removeEvent(evt) {
	        var type = typeof evt;
	        var events = this._getEvents();
	        var key;

	        // Remove different things depending on the state of evt
	        if (type === 'string') {
	            // Remove all listeners for the specified event
	            delete events[evt];
	        }
	        else if (evt instanceof RegExp) {
	            // Remove all events matching the regex.
	            for (key in events) {
	                if (events.hasOwnProperty(key) && evt.test(key)) {
	                    delete events[key];
	                }
	            }
	        }
	        else {
	            // Remove all listeners in all events
	            delete this._events;
	        }

	        return this;
	    };

	    /**
	     * Alias of removeEvent.
	     *
	     * Added to mirror the node API.
	     */
	    proto.removeAllListeners = alias('removeEvent');

	    /**
	     * Emits an event of your choice.
	     * When emitted, every listener attached to that event will be executed.
	     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	     * So they will not arrive within the array on the other side, they will be separate.
	     * You can also pass a regular expression to emit to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	     * @param {Array} [args] Optional array of arguments to be passed to each listener.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.emitEvent = function emitEvent(evt, args) {
	        var listeners = this.getListenersAsObject(evt);
	        var listener;
	        var i;
	        var key;
	        var response;

	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key)) {
	                i = listeners[key].length;

	                while (i--) {
	                    // If the listener returns true then it shall be removed from the event
	                    // The function is executed either with a basic call or an apply if there is an args array
	                    listener = listeners[key][i];

	                    if (listener.once === true) {
	                        this.removeListener(evt, listener.listener);
	                    }

	                    response = listener.listener.apply(this, args || []);

	                    if (response === this._getOnceReturnValue()) {
	                        this.removeListener(evt, listener.listener);
	                    }
	                }
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of emitEvent
	     */
	    proto.trigger = alias('emitEvent');

	    /**
	     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	     * @param {...*} Optional additional arguments to be passed to each listener.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.emit = function emit(evt) {
	        var args = Array.prototype.slice.call(arguments, 1);
	        return this.emitEvent(evt, args);
	    };

	    /**
	     * Sets the current value to check against when executing listeners. If a
	     * listeners return value matches the one set here then it will be removed
	     * after execution. This value defaults to true.
	     *
	     * @param {*} value The new value to check for when executing listeners.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.setOnceReturnValue = function setOnceReturnValue(value) {
	        this._onceReturnValue = value;
	        return this;
	    };

	    /**
	     * Fetches the current value to check against when executing listeners. If
	     * the listeners return value matches this one then it should be removed
	     * automatically. It will return true by default.
	     *
	     * @return {*|Boolean} The current value to check for or the default, true.
	     * @api private
	     */
	    proto._getOnceReturnValue = function _getOnceReturnValue() {
	        if (this.hasOwnProperty('_onceReturnValue')) {
	            return this._onceReturnValue;
	        }
	        else {
	            return true;
	        }
	    };

	    /**
	     * Fetches the events object and creates one if required.
	     *
	     * @return {Object} The events storage object.
	     * @api private
	     */
	    proto._getEvents = function _getEvents() {
	        return this._events || (this._events = {});
	    };

	    /**
	     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	     *
	     * @return {Function} Non conflicting EventEmitter class.
	     */
	    EventEmitter.noConflict = function noConflict() {
	        exports.EventEmitter = originalGlobalValue;
	        return EventEmitter;
	    };

	    // Expose the class either via AMD, CommonJS or the global object
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return EventEmitter;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    else if (typeof module === 'object' && module.exports){
	        module.exports = EventEmitter;
	    }
	    else {
	        exports.EventEmitter = EventEmitter;
	    }
	}.call(this));


/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * eventie v1.0.6
	 * event binding helper
	 *   eventie.bind( elem, 'click', myFn )
	 *   eventie.unbind( elem, 'click', myFn )
	 * MIT license
	 */

	/*jshint browser: true, undef: true, unused: true */
	/*global define: false, module: false */

	( function( window ) {

	'use strict';

	var docElem = document.documentElement;

	var bind = function() {};

	function getIEEvent( obj ) {
	  var event = window.event;
	  // add event.target
	  event.target = event.target || event.srcElement || obj;
	  return event;
	}

	if ( docElem.addEventListener ) {
	  bind = function( obj, type, fn ) {
	    obj.addEventListener( type, fn, false );
	  };
	} else if ( docElem.attachEvent ) {
	  bind = function( obj, type, fn ) {
	    obj[ type + fn ] = fn.handleEvent ?
	      function() {
	        var event = getIEEvent( obj );
	        fn.handleEvent.call( fn, event );
	      } :
	      function() {
	        var event = getIEEvent( obj );
	        fn.call( obj, event );
	      };
	    obj.attachEvent( "on" + type, obj[ type + fn ] );
	  };
	}

	var unbind = function() {};

	if ( docElem.removeEventListener ) {
	  unbind = function( obj, type, fn ) {
	    obj.removeEventListener( type, fn, false );
	  };
	} else if ( docElem.detachEvent ) {
	  unbind = function( obj, type, fn ) {
	    obj.detachEvent( "on" + type, obj[ type + fn ] );
	    try {
	      delete obj[ type + fn ];
	    } catch ( err ) {
	      // can't delete window object properties
	      obj[ type + fn ] = undefined;
	    }
	  };
	}

	var eventie = {
	  bind: bind,
	  unbind: unbind
	};

	// ----- module definition ----- //

	if ( true ) {
	  // AMD
	  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (eventie), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ( typeof exports === 'object' ) {
	  // CommonJS
	  module.exports = eventie;
	} else {
	  // browser global
	  window.eventie = eventie;
	}

	})( window );


/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	var isBrowser = (typeof window !== 'undefined');
	var Packery = isBrowser ? window.Packery || __webpack_require__(388) : null;
	var imagesloaded = isBrowser ? __webpack_require__(406) : null;

	function PackeryMixin() {
	    return function(reference, options) {
	        return {
	            packery: false,

	            domChildren: [],

	            initializePackery: function(force) {
	                if (!this.packery || force) {
	                    this.packery = new Packery(this.refs[reference].getDOMNode(), options);
	                    this.domChildren = this.getNewDomChildren();
	                }
	            },

	            getNewDomChildren: function () {
	                var node = this.refs[reference].getDOMNode();
	                var children = options.itemSelector ? node.querySelectorAll(options.itemSelector) : node.children;

	                return Array.prototype.slice.call(children);
	            },

	            diffDomChildren: function() {
	                var oldChildren = this.domChildren;
	                var newChildren = this.getNewDomChildren();

	                var removed = oldChildren.filter(function(oldChild) {
	                    return !~newChildren.indexOf(oldChild);
	                });

	                var added = newChildren.filter(function(newChild) {
	                    return !~oldChildren.indexOf(newChild);
	                });

	                var moved = [];

	                if (removed.length === 0) {
	                    moved = oldChildren.filter(function(child, index) {
	                        return index !== newChildren.indexOf(child);
	                    });
	                }

	                this.domChildren = newChildren;

	                return {
	                    old: oldChildren,
	                    'new': newChildren,
	                    removed: removed,
	                    added: added,
	                    moved: moved
	                };
	            },

	            performLayout: function() {
	                var diff = this.diffDomChildren();

	                if (diff.removed.length > 0) {
	                    this.packery.remove(diff.removed);
	                    this.packery.reloadItems();
	                }

	                if (diff.added.length > 0) {
	                    this.packery.appended(diff.added);
	                }

	                if (diff.moved.length > 0) {
	                    this.packery.reloadItems();
	                }

	                this.packery.layout();
	            },

	            imagesLoaded: function() {
	                imagesloaded(this.refs[reference].getDOMNode(), function(instance) {
	                    this.packery.layout();
	                }.bind(this));
	            },

	            componentDidMount: function() {
	                if (!isBrowser) return;

	                this.initializePackery();
	                this.performLayout();
	                this.imagesLoaded();
	            },

	            componentDidUpdate: function() {
	                if (!isBrowser) return;

	                this.performLayout();
	                this.imagesLoaded();
	            },

	            componentWillReceiveProps: function() {
	                this._timer = setTimeout(function() {
	                    this.packery.reloadItems();
	                    this.forceUpdate();
	                }.bind(this), 0);
	            },

	            componentWillUnmount: function() {
	                clearTimeout(this._timer);
	            }
	        }
	    };
	}

	module.exports = PackeryMixin();


/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Packery v1.3.0
	 * bin-packing layout library
	 * http://packery.metafizzy.co
	 *
	 * Commercial use requires one-time purchase of a commercial license
	 * http://packery.metafizzy.co/license.html
	 *
	 * Non-commercial use is licensed under the GPL v3 License
	 *
	 * Copyright 2014 Metafizzy
	 */

	( function( window ) {

	'use strict';

	// -------------------------- Packery -------------------------- //

	// used for AMD definition and requires
	function packeryDefinition( classie, getSize, Outlayer, Rect, Packer, Item ) {

	// create an Outlayer layout class
	var Packery = Outlayer.create('packery');
	Packery.Item = Item;

	Packery.prototype._create = function() {
	  // call super
	  Outlayer.prototype._create.call( this );

	  // initial properties
	  this.packer = new Packer();

	  // Left over from v1.0
	  this.stamp( this.options.stamped );

	  // create drag handlers
	  var _this = this;
	  this.handleDraggabilly = {
	    dragStart: function( draggie ) {
	      _this.itemDragStart( draggie.element );
	    },
	    dragMove: function( draggie ) {
	      _this.itemDragMove( draggie.element, draggie.position.x, draggie.position.y );
	    },
	    dragEnd: function( draggie ) {
	      _this.itemDragEnd( draggie.element );
	    }
	  };

	  this.handleUIDraggable = {
	    start: function handleUIDraggableStart( event ) {
	      _this.itemDragStart( event.currentTarget );
	    },
	    drag: function handleUIDraggableDrag( event, ui ) {
	      _this.itemDragMove( event.currentTarget, ui.position.left, ui.position.top );
	    },
	    stop: function handleUIDraggableStop( event ) {
	      _this.itemDragEnd( event.currentTarget );
	    }
	  };

	};


	// ----- init & layout ----- //

	/**
	 * logic before any new layout
	 */
	Packery.prototype._resetLayout = function() {
	  this.getSize();

	  this._getMeasurements();

	  // reset packer
	  var packer = this.packer;
	  // packer settings, if horizontal or vertical
	  if ( this.options.isHorizontal ) {
	    packer.width = Number.POSITIVE_INFINITY;
	    packer.height = this.size.innerHeight + this.gutter;
	    packer.sortDirection = 'rightwardTopToBottom';
	  } else {
	    packer.width = this.size.innerWidth + this.gutter;
	    packer.height = Number.POSITIVE_INFINITY;
	    packer.sortDirection = 'downwardLeftToRight';
	  }

	  packer.reset();

	  // layout
	  this.maxY = 0;
	  this.maxX = 0;
	};

	/**
	 * update columnWidth, rowHeight, & gutter
	 * @private
	 */
	Packery.prototype._getMeasurements = function() {
	  this._getMeasurement( 'columnWidth', 'width' );
	  this._getMeasurement( 'rowHeight', 'height' );
	  this._getMeasurement( 'gutter', 'width' );
	};

	Packery.prototype._getItemLayoutPosition = function( item ) {
	  this._packItem( item );
	  return item.rect;
	};


	/**
	 * layout item in packer
	 * @param {Packery.Item} item
	 */
	Packery.prototype._packItem = function( item ) {
	  this._setRectSize( item.element, item.rect );
	  // pack the rect in the packer
	  this.packer.pack( item.rect );
	  this._setMaxXY( item.rect );
	};

	/**
	 * set max X and Y value, for size of container
	 * @param {Packery.Rect} rect
	 * @private
	 */
	Packery.prototype._setMaxXY = function( rect ) {
	  this.maxX = Math.max( rect.x + rect.width, this.maxX );
	  this.maxY = Math.max( rect.y + rect.height, this.maxY );
	};

	/**
	 * set the width and height of a rect, applying columnWidth and rowHeight
	 * @param {Element} elem
	 * @param {Packery.Rect} rect
	 */
	Packery.prototype._setRectSize = function( elem, rect ) {
	  var size = getSize( elem );
	  var w = size.outerWidth;
	  var h = size.outerHeight;
	  // size for columnWidth and rowHeight, if available
	  // only check if size is non-zero, #177
	  if ( w || h ) {
	    var colW = this.columnWidth + this.gutter;
	    var rowH = this.rowHeight + this.gutter;
	    w = this.columnWidth ? Math.ceil( w / colW ) * colW : w + this.gutter;
	    h = this.rowHeight ? Math.ceil( h / rowH ) * rowH : h + this.gutter;
	  }
	  // rect must fit in packer
	  rect.width = Math.min( w, this.packer.width );
	  rect.height = Math.min( h, this.packer.height );
	};

	Packery.prototype._getContainerSize = function() {
	  if ( this.options.isHorizontal ) {
	    return {
	      width: this.maxX - this.gutter
	    };
	  } else {
	    return {
	      height: this.maxY - this.gutter
	    };
	  }
	};


	// -------------------------- stamp -------------------------- //

	/**
	 * makes space for element
	 * @param {Element} elem
	 */
	Packery.prototype._manageStamp = function( elem ) {

	  var item = this.getItem( elem );
	  var rect;
	  if ( item && item.isPlacing ) {
	    rect = item.placeRect;
	  } else {
	    var offset = this._getElementOffset( elem );
	    rect = new Rect({
	      x: this.options.isOriginLeft ? offset.left : offset.right,
	      y: this.options.isOriginTop ? offset.top : offset.bottom
	    });
	  }

	  this._setRectSize( elem, rect );
	  // save its space in the packer
	  this.packer.placed( rect );
	  this._setMaxXY( rect );
	};

	// -------------------------- methods -------------------------- //

	function verticalSorter( a, b ) {
	  return a.position.y - b.position.y || a.position.x - b.position.x;
	}

	function horizontalSorter( a, b ) {
	  return a.position.x - b.position.x || a.position.y - b.position.y;
	}

	Packery.prototype.sortItemsByPosition = function() {
	  var sorter = this.options.isHorizontal ? horizontalSorter : verticalSorter;
	  this.items.sort( sorter );
	};

	/**
	 * Fit item element in its current position
	 * Packery will position elements around it
	 * useful for expanding elements
	 *
	 * @param {Element} elem
	 * @param {Number} x - horizontal destination position, optional
	 * @param {Number} y - vertical destination position, optional
	 */
	Packery.prototype.fit = function( elem, x, y ) {
	  var item = this.getItem( elem );
	  if ( !item ) {
	    return;
	  }

	  // prepare internal properties
	  this._getMeasurements();

	  // stamp item to get it out of layout
	  this.stamp( item.element );
	  // required for positionPlaceRect
	  item.getSize();
	  // set placing flag
	  item.isPlacing = true;
	  // fall back to current position for fitting
	  x = x === undefined ? item.rect.x: x;
	  y = y === undefined ? item.rect.y: y;

	  // position it best at its destination
	  item.positionPlaceRect( x, y, true );

	  this._bindFitEvents( item );
	  item.moveTo( item.placeRect.x, item.placeRect.y );
	  // layout everything else
	  this.layout();

	  // return back to regularly scheduled programming
	  this.unstamp( item.element );
	  this.sortItemsByPosition();
	  // un set placing flag, back to normal
	  item.isPlacing = false;
	  // copy place rect position
	  item.copyPlaceRectPosition();
	};

	/**
	 * emit event when item is fit and other items are laid out
	 * @param {Packery.Item} item
	 * @private
	 */
	Packery.prototype._bindFitEvents = function( item ) {
	  var _this = this;
	  var ticks = 0;
	  function tick() {
	    ticks++;
	    if ( ticks !== 2 ) {
	      return;
	    }
	    _this.emitEvent( 'fitComplete', [ _this, item ] );
	  }
	  // when item is laid out
	  item.on( 'layout', function() {
	    tick();
	    return true;
	  });
	  // when all items are laid out
	  this.on( 'layoutComplete', function() {
	    tick();
	    return true;
	  });
	};

	// -------------------------- resize -------------------------- //

	// debounced, layout on resize
	Packery.prototype.resize = function() {
	  // don't trigger if size did not change
	  var size = getSize( this.element );
	  // check that this.size and size are there
	  // IE8 triggers resize on body size change, so they might not be
	  var hasSizes = this.size && size;
	  var innerSize = this.options.isHorizontal ? 'innerHeight' : 'innerWidth';
	  if ( hasSizes && size[ innerSize ] === this.size[ innerSize ] ) {
	    return;
	  }

	  this.layout();
	};

	// -------------------------- drag -------------------------- //

	/**
	 * handle an item drag start event
	 * @param {Element} elem
	 */
	Packery.prototype.itemDragStart = function( elem ) {
	  this.stamp( elem );
	  var item = this.getItem( elem );
	  if ( item ) {
	    item.dragStart();
	  }
	};

	/**
	 * handle an item drag move event
	 * @param {Element} elem
	 * @param {Number} x - horizontal change in position
	 * @param {Number} y - vertical change in position
	 */
	Packery.prototype.itemDragMove = function( elem, x, y ) {
	  var item = this.getItem( elem );
	  if ( item ) {
	    item.dragMove( x, y );
	  }

	  // debounce
	  var _this = this;
	  // debounce triggering layout
	  function delayed() {
	    _this.layout();
	    delete _this.dragTimeout;
	  }

	  this.clearDragTimeout();

	  this.dragTimeout = setTimeout( delayed, 40 );
	};

	Packery.prototype.clearDragTimeout = function() {
	  if ( this.dragTimeout ) {
	    clearTimeout( this.dragTimeout );
	  }
	};

	/**
	 * handle an item drag end event
	 * @param {Element} elem
	 */
	Packery.prototype.itemDragEnd = function( elem ) {
	  var item = this.getItem( elem );
	  var itemDidDrag;
	  if ( item ) {
	    itemDidDrag = item.didDrag;
	    item.dragStop();
	  }
	  // if elem didn't move, or if it doesn't need positioning
	  // unignore and unstamp and call it a day
	  if ( !item || ( !itemDidDrag && !item.needsPositioning ) ) {
	    this.unstamp( elem );
	    return;
	  }
	  // procced with dragged item

	  classie.add( item.element, 'is-positioning-post-drag' );

	  // save this var, as it could get reset in dragStart
	  var onLayoutComplete = this._getDragEndLayoutComplete( elem, item );

	  if ( item.needsPositioning ) {
	    item.on( 'layout', onLayoutComplete );
	    item.moveTo( item.placeRect.x, item.placeRect.y );
	  } else if ( item ) {
	    // item didn't need placement
	    item.copyPlaceRectPosition();
	  }

	  this.clearDragTimeout();
	  this.on( 'layoutComplete', onLayoutComplete );
	  this.layout();

	};

	/**
	 * get drag end callback
	 * @param {Element} elem
	 * @param {Packery.Item} item
	 * @returns {Function} onLayoutComplete
	 */
	Packery.prototype._getDragEndLayoutComplete = function( elem, item ) {
	  var itemNeedsPositioning = item && item.needsPositioning;
	  var completeCount = 0;
	  var asyncCount = itemNeedsPositioning ? 2 : 1;
	  var _this = this;

	  return function onLayoutComplete() {
	    completeCount++;
	    // don't proceed if not complete
	    if ( completeCount !== asyncCount ) {
	      return true;
	    }
	    // reset item
	    if ( item ) {
	      classie.remove( item.element, 'is-positioning-post-drag' );
	      item.isPlacing = false;
	      item.copyPlaceRectPosition();
	    }

	    _this.unstamp( elem );
	    // only sort when item moved
	    _this.sortItemsByPosition();

	    // emit item drag event now that everything is done
	    if ( itemNeedsPositioning ) {
	      _this.emitEvent( 'dragItemPositioned', [ _this, item ] );
	    }
	    // listen once
	    return true;
	  };
	};

	/**
	 * binds Draggabilly events
	 * @param {Draggabilly} draggie
	 */
	Packery.prototype.bindDraggabillyEvents = function( draggie ) {
	  draggie.on( 'dragStart', this.handleDraggabilly.dragStart );
	  draggie.on( 'dragMove', this.handleDraggabilly.dragMove );
	  draggie.on( 'dragEnd', this.handleDraggabilly.dragEnd );
	};

	/**
	 * binds jQuery UI Draggable events
	 * @param {jQuery} $elems
	 */
	Packery.prototype.bindUIDraggableEvents = function( $elems ) {
	  $elems
	    .on( 'dragstart', this.handleUIDraggable.start )
	    .on( 'drag', this.handleUIDraggable.drag )
	    .on( 'dragstop', this.handleUIDraggable.stop );
	};

	Packery.Rect = Rect;
	Packery.Packer = Packer;

	return Packery;

	}

	// -------------------------- transport -------------------------- //
	if ( true ) {
	  // CommonJS
	  module.exports = packeryDefinition(
	    __webpack_require__(389),
	    __webpack_require__(390),
	    __webpack_require__(392),
	    __webpack_require__(402),
	    __webpack_require__(403),
	    __webpack_require__(404)
	  );
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( [
	      'classie/classie',
	      'get-size/get-size',
	      'outlayer/outlayer',
	      './rect',
	      './packer',
	      './item'
	    ],
	    packeryDefinition );
	} else {
	  // browser global
	  window.Packery = packeryDefinition(
	    window.classie,
	    window.getSize,
	    window.Outlayer,
	    window.Packery.Rect,
	    window.Packery.Packer,
	    window.Packery.Item
	  );
	}

	})( window );


/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * classie v1.0.1
	 * class helper functions
	 * from bonzo https://github.com/ded/bonzo
	 * MIT license
	 * 
	 * classie.has( elem, 'my-class' ) -> true/false
	 * classie.add( elem, 'my-new-class' )
	 * classie.remove( elem, 'my-unwanted-class' )
	 * classie.toggle( elem, 'my-class' )
	 */

	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, module: false */

	( function( window ) {

	'use strict';

	// class helper functions from bonzo https://github.com/ded/bonzo

	function classReg( className ) {
	  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}

	// classList support for class management
	// altho to be fair, the api sucks because it won't accept multiple classes at once
	var hasClass, addClass, removeClass;

	if ( 'classList' in document.documentElement ) {
	  hasClass = function( elem, c ) {
	    return elem.classList.contains( c );
	  };
	  addClass = function( elem, c ) {
	    elem.classList.add( c );
	  };
	  removeClass = function( elem, c ) {
	    elem.classList.remove( c );
	  };
	}
	else {
	  hasClass = function( elem, c ) {
	    return classReg( c ).test( elem.className );
	  };
	  addClass = function( elem, c ) {
	    if ( !hasClass( elem, c ) ) {
	      elem.className = elem.className + ' ' + c;
	    }
	  };
	  removeClass = function( elem, c ) {
	    elem.className = elem.className.replace( classReg( c ), ' ' );
	  };
	}

	function toggleClass( elem, c ) {
	  var fn = hasClass( elem, c ) ? removeClass : addClass;
	  fn( elem, c );
	}

	var classie = {
	  // full names
	  hasClass: hasClass,
	  addClass: addClass,
	  removeClass: removeClass,
	  toggleClass: toggleClass,
	  // short names
	  has: hasClass,
	  add: addClass,
	  remove: removeClass,
	  toggle: toggleClass
	};

	// transport
	if ( true ) {
	  // AMD
	  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (classie), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ( typeof exports === 'object' ) {
	  // CommonJS
	  module.exports = classie;
	} else {
	  // browser global
	  window.classie = classie;
	}

	})( window );


/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * getSize v1.1.8
	 * measure size of elements
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, exports: false, require: false, module: false */

	( function( window, undefined ) {
	'use strict';

	if (!window) return;

	// -------------------------- helpers -------------------------- //

	var getComputedStyle = window.getComputedStyle;
	var getStyle = getComputedStyle ?
	  function( elem ) {
	    return getComputedStyle( elem, null );
	  } :
	  function( elem ) {
	    return elem.currentStyle;
	  };

	// get a number from a string, not a percentage
	function getStyleSize( value ) {
	  var num = parseFloat( value );
	  // not a percent like '100%', and a number
	  var isValid = value.indexOf('%') === -1 && !isNaN( num );
	  return isValid && num;
	}

	// -------------------------- measurements -------------------------- //

	var measurements = [
	  'paddingLeft',
	  'paddingRight',
	  'paddingTop',
	  'paddingBottom',
	  'marginLeft',
	  'marginRight',
	  'marginTop',
	  'marginBottom',
	  'borderLeftWidth',
	  'borderRightWidth',
	  'borderTopWidth',
	  'borderBottomWidth'
	];

	function getZeroSize() {
	  var size = {
	    width: 0,
	    height: 0,
	    innerWidth: 0,
	    innerHeight: 0,
	    outerWidth: 0,
	    outerHeight: 0
	  };
	  for ( var i=0, len = measurements.length; i < len; i++ ) {
	    var measurement = measurements[i];
	    size[ measurement ] = 0;
	  }
	  return size;
	}



	function defineGetSize( getStyleProperty ) {

	// -------------------------- box sizing -------------------------- //

	var boxSizingProp = getStyleProperty('boxSizing');
	var isBoxSizeOuter;

	/**
	 * WebKit measures the outer-width on style.width on border-box elems
	 * IE & Firefox measures the inner-width
	 */
	( function() {
	  if ( !boxSizingProp ) {
	    return;
	  }

	  var div = document.createElement('div');
	  div.style.width = '200px';
	  div.style.padding = '1px 2px 3px 4px';
	  div.style.borderStyle = 'solid';
	  div.style.borderWidth = '1px 2px 3px 4px';
	  div.style[ boxSizingProp ] = 'border-box';

	  var body = document.body || document.documentElement;
	  body.appendChild( div );
	  var style = getStyle( div );

	  isBoxSizeOuter = getStyleSize( style.width ) === 200;
	  body.removeChild( div );
	})();


	// -------------------------- getSize -------------------------- //

	function getSize( elem ) {
	  // use querySeletor if elem is string
	  if ( typeof elem === 'string' ) {
	    elem = document.querySelector( elem );
	  }

	  // do not proceed on non-objects
	  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
	    return;
	  }

	  var style = getStyle( elem );

	  // if hidden, everything is 0
	  if ( style.display === 'none' ) {
	    return getZeroSize();
	  }

	  var size = {};
	  size.width = elem.offsetWidth;
	  size.height = elem.offsetHeight;

	  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
	    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );

	  // get all measurements
	  for ( var i=0, len = measurements.length; i < len; i++ ) {
	    var measurement = measurements[i];
	    var value = style[ measurement ];
	    value = mungeNonPixel( elem, value );
	    var num = parseFloat( value );
	    // any 'auto', 'medium' value will be 0
	    size[ measurement ] = !isNaN( num ) ? num : 0;
	  }

	  var paddingWidth = size.paddingLeft + size.paddingRight;
	  var paddingHeight = size.paddingTop + size.paddingBottom;
	  var marginWidth = size.marginLeft + size.marginRight;
	  var marginHeight = size.marginTop + size.marginBottom;
	  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
	  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

	  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

	  // overwrite width and height if we can get it from style
	  var styleWidth = getStyleSize( style.width );
	  if ( styleWidth !== false ) {
	    size.width = styleWidth +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
	  }

	  var styleHeight = getStyleSize( style.height );
	  if ( styleHeight !== false ) {
	    size.height = styleHeight +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
	  }

	  size.innerWidth = size.width - ( paddingWidth + borderWidth );
	  size.innerHeight = size.height - ( paddingHeight + borderHeight );

	  size.outerWidth = size.width + marginWidth;
	  size.outerHeight = size.height + marginHeight;

	  return size;
	}

	// IE8 returns percent values, not pixels
	// taken from jQuery's curCSS
	function mungeNonPixel( elem, value ) {
	  // IE8 and has percent value
	  if ( getComputedStyle || value.indexOf('%') === -1 ) {
	    return value;
	  }
	  var style = elem.style;
	  // Remember the original values
	  var left = style.left;
	  var rs = elem.runtimeStyle;
	  var rsLeft = rs && rs.left;

	  // Put in the new values to get a computed value out
	  if ( rsLeft ) {
	    rs.left = elem.currentStyle.left;
	  }
	  style.left = value;
	  value = style.pixelLeft;

	  // Revert the changed values
	  style.left = left;
	  if ( rsLeft ) {
	    rs.left = rsLeft;
	  }

	  return value;
	}

	return getSize;

	}

	// transport
	if ( true ) {
	  // CommonJS for Component
	  module.exports = defineGetSize( __webpack_require__(391) );
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD for RequireJS
	  define( [ 'get-style-property/get-style-property' ], defineGetSize );
	} else {
	  // browser global
	  window.getSize = defineGetSize( window.getStyleProperty );
	}

	})( typeof window !== 'undefined' ? window : null );


/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * getStyleProperty v1.0.4
	 * original by kangax
	 * http://perfectionkills.com/feature-testing-css-properties/
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true */
	/*global define: false, exports: false, module: false */

	( function( window ) {

	'use strict';

	var prefixes = 'Webkit Moz ms Ms O'.split(' ');
	var docElemStyle = document.documentElement.style;

	function getStyleProperty( propName ) {
	  if ( !propName ) {
	    return;
	  }

	  // test standard property first
	  if ( typeof docElemStyle[ propName ] === 'string' ) {
	    return propName;
	  }

	  // capitalize
	  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

	  // test vendor specific properties
	  var prefixed;
	  for ( var i=0, len = prefixes.length; i < len; i++ ) {
	    prefixed = prefixes[i] + propName;
	    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
	      return prefixed;
	    }
	  }
	}

	// transport
	if ( true ) {
	  // AMD
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return getStyleProperty;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ( typeof exports === 'object' ) {
	  // CommonJS for Component
	  module.exports = getStyleProperty;
	} else {
	  // browser global
	  window.getStyleProperty = getStyleProperty;
	}

	})( window );


/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Outlayer v1.2.0
	 * the brains and guts of a layout library
	 * MIT license
	 */

	( function( window ) {
	'use strict';

	if (!window) return;

	// ----- vars ----- //

	var document = window.document;
	var console = window.console;
	var jQuery = window.jQuery;

	var noop = function() {};

	// -------------------------- helpers -------------------------- //

	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}


	var objToString = Object.prototype.toString;
	function isArray( obj ) {
	  return objToString.call( obj ) === '[object Array]';
	}

	// turn element or nodeList into an array
	function makeArray( obj ) {
	  var ary = [];
	  if ( isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( obj && typeof obj.length === 'number' ) {
	    // convert nodeList to array
	    for ( var i=0, len = obj.length; i < len; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	}

	// http://stackoverflow.com/a/384380/182183
	var isElement = ( typeof HTMLElement === 'function' || typeof HTMLElement === 'object' ) ?
	  function isElementDOM2( obj ) {
	    return obj instanceof HTMLElement;
	  } :
	  function isElementQuirky( obj ) {
	    return obj && typeof obj === 'object' &&
	      obj.nodeType === 1 && typeof obj.nodeName === 'string';
	  };

	// index of helper cause IE8
	var indexOf = Array.prototype.indexOf ? function( ary, obj ) {
	    return ary.indexOf( obj );
	  } : function( ary, obj ) {
	    for ( var i=0, len = ary.length; i < len; i++ ) {
	      if ( ary[i] === obj ) {
	        return i;
	      }
	    }
	    return -1;
	  };

	function removeFrom( obj, ary ) {
	  var index = indexOf( ary, obj );
	  if ( index !== -1 ) {
	    ary.splice( index, 1 );
	  }
	}

	// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
	function toDashed( str ) {
	  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
	    return $1 + '-' + $2;
	  }).toLowerCase();
	}


	function outlayerDefinition( eventie, docReady, EventEmitter, getSize, matchesSelector, Item ) {

	// -------------------------- Outlayer -------------------------- //

	// globally unique identifiers
	var GUID = 0;
	// internal store of all Outlayer intances
	var instances = {};


	/**
	 * @param {Element, String} element
	 * @param {Object} options
	 * @constructor
	 */
	function Outlayer( element, options ) {
	  // use element as selector string
	  if ( typeof element === 'string' ) {
	    element = document.querySelector( element );
	  }

	  // bail out if not proper element
	  if ( !element || !isElement( element ) ) {
	    if ( console ) {
	      console.error( 'Bad ' + this.constructor.namespace + ' element: ' + element );
	    }
	    return;
	  }

	  this.element = element;

	  // options
	  this.options = extend( {}, this.constructor.defaults );
	  this.option( options );

	  // add id for Outlayer.getFromElement
	  var id = ++GUID;
	  this.element.outlayerGUID = id; // expando
	  instances[ id ] = this; // associate via id

	  // kick it off
	  this._create();

	  if ( this.options.isInitLayout ) {
	    this.layout();
	  }
	}

	// settings are for internal use only
	Outlayer.namespace = 'outlayer';
	Outlayer.Item = Item;

	// default options
	Outlayer.defaults = {
	  containerStyle: {
	    position: 'relative'
	  },
	  isInitLayout: true,
	  isOriginLeft: true,
	  isOriginTop: true,
	  isResizeBound: true,
	  isResizingContainer: true,
	  // item options
	  transitionDuration: '0.4s',
	  hiddenStyle: {
	    opacity: 0,
	    transform: 'scale(0.001)'
	  },
	  visibleStyle: {
	    opacity: 1,
	    transform: 'scale(1)'
	  }
	};

	// inherit EventEmitter
	extend( Outlayer.prototype, EventEmitter.prototype );

	/**
	 * set options
	 * @param {Object} opts
	 */
	Outlayer.prototype.option = function( opts ) {
	  extend( this.options, opts );
	};

	Outlayer.prototype._create = function() {
	  // get items from children
	  this.reloadItems();
	  // elements that affect layout, but are not laid out
	  this.stamps = [];
	  this.stamp( this.options.stamp );
	  // set container style
	  extend( this.element.style, this.options.containerStyle );

	  // bind resize method
	  if ( this.options.isResizeBound ) {
	    this.bindResize();
	  }
	};

	// goes through all children again and gets bricks in proper order
	Outlayer.prototype.reloadItems = function() {
	  // collection of item elements
	  this.items = this._itemize( this.element.children );
	};


	/**
	 * turn elements into Outlayer.Items to be used in layout
	 * @param {Array or NodeList or HTMLElement} elems
	 * @returns {Array} items - collection of new Outlayer Items
	 */
	Outlayer.prototype._itemize = function( elems ) {

	  var itemElems = this._filterFindItemElements( elems );
	  var Item = this.constructor.Item;

	  // create new Outlayer Items for collection
	  var items = [];
	  for ( var i=0, len = itemElems.length; i < len; i++ ) {
	    var elem = itemElems[i];
	    var item = new Item( elem, this );
	    items.push( item );
	  }

	  return items;
	};

	/**
	 * get item elements to be used in layout
	 * @param {Array or NodeList or HTMLElement} elems
	 * @returns {Array} items - item elements
	 */
	Outlayer.prototype._filterFindItemElements = function( elems ) {
	  // make array of elems
	  elems = makeArray( elems );
	  var itemSelector = this.options.itemSelector;
	  var itemElems = [];

	  for ( var i=0, len = elems.length; i < len; i++ ) {
	    var elem = elems[i];
	    // check that elem is an actual element
	    if ( !isElement( elem ) ) {
	      continue;
	    }
	    // filter & find items if we have an item selector
	    if ( itemSelector ) {
	      // filter siblings
	      if ( matchesSelector( elem, itemSelector ) ) {
	        itemElems.push( elem );
	      }
	      // find children
	      var childElems = elem.querySelectorAll( itemSelector );
	      // concat childElems to filterFound array
	      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
	        itemElems.push( childElems[j] );
	      }
	    } else {
	      itemElems.push( elem );
	    }
	  }

	  return itemElems;
	};

	/**
	 * getter method for getting item elements
	 * @returns {Array} elems - collection of item elements
	 */
	Outlayer.prototype.getItemElements = function() {
	  var elems = [];
	  for ( var i=0, len = this.items.length; i < len; i++ ) {
	    elems.push( this.items[i].element );
	  }
	  return elems;
	};

	// ----- init & layout ----- //

	/**
	 * lays out all items
	 */
	Outlayer.prototype.layout = function() {
	  this._resetLayout();
	  this._manageStamps();

	  // don't animate first layout
	  var isInstant = this.options.isLayoutInstant !== undefined ?
	    this.options.isLayoutInstant : !this._isLayoutInited;
	  this.layoutItems( this.items, isInstant );

	  // flag for initalized
	  this._isLayoutInited = true;
	};

	// _init is alias for layout
	Outlayer.prototype._init = Outlayer.prototype.layout;

	/**
	 * logic before any new layout
	 */
	Outlayer.prototype._resetLayout = function() {
	  this.getSize();
	};


	Outlayer.prototype.getSize = function() {
	  this.size = getSize( this.element );
	};

	/**
	 * get measurement from option, for columnWidth, rowHeight, gutter
	 * if option is String -> get element from selector string, & get size of element
	 * if option is Element -> get size of element
	 * else use option as a number
	 *
	 * @param {String} measurement
	 * @param {String} size - width or height
	 * @private
	 */
	Outlayer.prototype._getMeasurement = function( measurement, size ) {
	  var option = this.options[ measurement ];
	  var elem;
	  if ( !option ) {
	    // default to 0
	    this[ measurement ] = 0;
	  } else {
	    // use option as an element
	    if ( typeof option === 'string' ) {
	      elem = this.element.querySelector( option );
	    } else if ( isElement( option ) ) {
	      elem = option;
	    }
	    // use size of element, if element
	    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
	  }
	};

	/**
	 * layout a collection of item elements
	 * @api public
	 */
	Outlayer.prototype.layoutItems = function( items, isInstant ) {
	  items = this._getItemsForLayout( items );

	  this._layoutItems( items, isInstant );

	  this._postLayout();
	};

	/**
	 * get the items to be laid out
	 * you may want to skip over some items
	 * @param {Array} items
	 * @returns {Array} items
	 */
	Outlayer.prototype._getItemsForLayout = function( items ) {
	  var layoutItems = [];
	  for ( var i=0, len = items.length; i < len; i++ ) {
	    var item = items[i];
	    if ( !item.isIgnored ) {
	      layoutItems.push( item );
	    }
	  }
	  return layoutItems;
	};

	/**
	 * layout items
	 * @param {Array} items
	 * @param {Boolean} isInstant
	 */
	Outlayer.prototype._layoutItems = function( items, isInstant ) {
	  var _this = this;
	  function onItemsLayout() {
	    _this.emitEvent( 'layoutComplete', [ _this, items ] );
	  }

	  if ( !items || !items.length ) {
	    // no items, emit event with empty array
	    onItemsLayout();
	    return;
	  }

	  // emit layoutComplete when done
	  this._itemsOn( items, 'layout', onItemsLayout );

	  var queue = [];

	  for ( var i=0, len = items.length; i < len; i++ ) {
	    var item = items[i];
	    // get x/y object from method
	    var position = this._getItemLayoutPosition( item );
	    // enqueue
	    position.item = item;
	    position.isInstant = isInstant || item.isLayoutInstant;
	    queue.push( position );
	  }

	  this._processLayoutQueue( queue );
	};

	/**
	 * get item layout position
	 * @param {Outlayer.Item} item
	 * @returns {Object} x and y position
	 */
	Outlayer.prototype._getItemLayoutPosition = function( /* item */ ) {
	  return {
	    x: 0,
	    y: 0
	  };
	};

	/**
	 * iterate over array and position each item
	 * Reason being - separating this logic prevents 'layout invalidation'
	 * thx @paul_irish
	 * @param {Array} queue
	 */
	Outlayer.prototype._processLayoutQueue = function( queue ) {
	  for ( var i=0, len = queue.length; i < len; i++ ) {
	    var obj = queue[i];
	    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant );
	  }
	};

	/**
	 * Sets position of item in DOM
	 * @param {Outlayer.Item} item
	 * @param {Number} x - horizontal position
	 * @param {Number} y - vertical position
	 * @param {Boolean} isInstant - disables transitions
	 */
	Outlayer.prototype._positionItem = function( item, x, y, isInstant ) {
	  if ( isInstant ) {
	    // if not transition, just set CSS
	    item.goTo( x, y );
	  } else {
	    item.moveTo( x, y );
	  }
	};

	/**
	 * Any logic you want to do after each layout,
	 * i.e. size the container
	 */
	Outlayer.prototype._postLayout = function() {
	  this.resizeContainer();
	};

	Outlayer.prototype.resizeContainer = function() {
	  if ( !this.options.isResizingContainer ) {
	    return;
	  }
	  var size = this._getContainerSize();
	  if ( size ) {
	    this._setContainerMeasure( size.width, true );
	    this._setContainerMeasure( size.height, false );
	  }
	};

	/**
	 * Sets width or height of container if returned
	 * @returns {Object} size
	 *   @param {Number} width
	 *   @param {Number} height
	 */
	Outlayer.prototype._getContainerSize = noop;

	/**
	 * @param {Number} measure - size of width or height
	 * @param {Boolean} isWidth
	 */
	Outlayer.prototype._setContainerMeasure = function( measure, isWidth ) {
	  if ( measure === undefined ) {
	    return;
	  }

	  var elemSize = this.size;
	  // add padding and border width if border box
	  if ( elemSize.isBorderBox ) {
	    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
	      elemSize.borderLeftWidth + elemSize.borderRightWidth :
	      elemSize.paddingBottom + elemSize.paddingTop +
	      elemSize.borderTopWidth + elemSize.borderBottomWidth;
	  }

	  measure = Math.max( measure, 0 );
	  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
	};

	/**
	 * trigger a callback for a collection of items events
	 * @param {Array} items - Outlayer.Items
	 * @param {String} eventName
	 * @param {Function} callback
	 */
	Outlayer.prototype._itemsOn = function( items, eventName, callback ) {
	  var doneCount = 0;
	  var count = items.length;
	  // event callback
	  var _this = this;
	  function tick() {
	    doneCount++;
	    if ( doneCount === count ) {
	      callback.call( _this );
	    }
	    return true; // bind once
	  }
	  // bind callback
	  for ( var i=0, len = items.length; i < len; i++ ) {
	    var item = items[i];
	    item.on( eventName, tick );
	  }
	};

	// -------------------------- ignore & stamps -------------------------- //


	/**
	 * keep item in collection, but do not lay it out
	 * ignored items do not get skipped in layout
	 * @param {Element} elem
	 */
	Outlayer.prototype.ignore = function( elem ) {
	  var item = this.getItem( elem );
	  if ( item ) {
	    item.isIgnored = true;
	  }
	};

	/**
	 * return item to layout collection
	 * @param {Element} elem
	 */
	Outlayer.prototype.unignore = function( elem ) {
	  var item = this.getItem( elem );
	  if ( item ) {
	    delete item.isIgnored;
	  }
	};

	/**
	 * adds elements to stamps
	 * @param {NodeList, Array, Element, or String} elems
	 */
	Outlayer.prototype.stamp = function( elems ) {
	  elems = this._find( elems );
	  if ( !elems ) {
	    return;
	  }

	  this.stamps = this.stamps.concat( elems );
	  // ignore
	  for ( var i=0, len = elems.length; i < len; i++ ) {
	    var elem = elems[i];
	    this.ignore( elem );
	  }
	};

	/**
	 * removes elements to stamps
	 * @param {NodeList, Array, or Element} elems
	 */
	Outlayer.prototype.unstamp = function( elems ) {
	  elems = this._find( elems );
	  if ( !elems ){
	    return;
	  }

	  for ( var i=0, len = elems.length; i < len; i++ ) {
	    var elem = elems[i];
	    // filter out removed stamp elements
	    removeFrom( elem, this.stamps );
	    this.unignore( elem );
	  }

	};

	/**
	 * finds child elements
	 * @param {NodeList, Array, Element, or String} elems
	 * @returns {Array} elems
	 */
	Outlayer.prototype._find = function( elems ) {
	  if ( !elems ) {
	    return;
	  }
	  // if string, use argument as selector string
	  if ( typeof elems === 'string' ) {
	    elems = this.element.querySelectorAll( elems );
	  }
	  elems = makeArray( elems );
	  return elems;
	};

	Outlayer.prototype._manageStamps = function() {
	  if ( !this.stamps || !this.stamps.length ) {
	    return;
	  }

	  this._getBoundingRect();

	  for ( var i=0, len = this.stamps.length; i < len; i++ ) {
	    var stamp = this.stamps[i];
	    this._manageStamp( stamp );
	  }
	};

	// update boundingLeft / Top
	Outlayer.prototype._getBoundingRect = function() {
	  // get bounding rect for container element
	  var boundingRect = this.element.getBoundingClientRect();
	  var size = this.size;
	  this._boundingRect = {
	    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
	    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
	    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
	    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
	  };
	};

	/**
	 * @param {Element} stamp
	**/
	Outlayer.prototype._manageStamp = noop;

	/**
	 * get x/y position of element relative to container element
	 * @param {Element} elem
	 * @returns {Object} offset - has left, top, right, bottom
	 */
	Outlayer.prototype._getElementOffset = function( elem ) {
	  var boundingRect = elem.getBoundingClientRect();
	  var thisRect = this._boundingRect;
	  var size = getSize( elem );
	  var offset = {
	    left: boundingRect.left - thisRect.left - size.marginLeft,
	    top: boundingRect.top - thisRect.top - size.marginTop,
	    right: thisRect.right - boundingRect.right - size.marginRight,
	    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
	  };
	  return offset;
	};

	// -------------------------- resize -------------------------- //

	// enable event handlers for listeners
	// i.e. resize -> onresize
	Outlayer.prototype.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};

	/**
	 * Bind layout to window resizing
	 */
	Outlayer.prototype.bindResize = function() {
	  // bind just one listener
	  if ( this.isResizeBound ) {
	    return;
	  }
	  eventie.bind( window, 'resize', this );
	  this.isResizeBound = true;
	};

	/**
	 * Unbind layout to window resizing
	 */
	Outlayer.prototype.unbindResize = function() {
	  if ( this.isResizeBound ) {
	    eventie.unbind( window, 'resize', this );
	  }
	  this.isResizeBound = false;
	};

	// original debounce by John Hann
	// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

	// this fires every resize
	Outlayer.prototype.onresize = function() {
	  if ( this.resizeTimeout ) {
	    clearTimeout( this.resizeTimeout );
	  }

	  var _this = this;
	  function delayed() {
	    _this.resize();
	    delete _this.resizeTimeout;
	  }

	  this.resizeTimeout = setTimeout( delayed, 100 );
	};

	// debounced, layout on resize
	Outlayer.prototype.resize = function() {
	  // don't trigger if size did not change
	  // or if resize was unbound. See #9
	  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
	    return;
	  }

	  this.layout();
	};

	/**
	 * check if layout is needed post layout
	 * @returns Boolean
	 */
	Outlayer.prototype.needsResizeLayout = function() {
	  var size = getSize( this.element );
	  // check that this.size and size are there
	  // IE8 triggers resize on body size change, so they might not be
	  var hasSizes = this.size && size;
	  return hasSizes && size.innerWidth !== this.size.innerWidth;
	};

	// -------------------------- methods -------------------------- //

	/**
	 * add items to Outlayer instance
	 * @param {Array or NodeList or Element} elems
	 * @returns {Array} items - Outlayer.Items
	**/
	Outlayer.prototype.addItems = function( elems ) {
	  var items = this._itemize( elems );
	  // add items to collection
	  if ( items.length ) {
	    this.items = this.items.concat( items );
	  }
	  return items;
	};

	/**
	 * Layout newly-appended item elements
	 * @param {Array or NodeList or Element} elems
	 */
	Outlayer.prototype.appended = function( elems ) {
	  var items = this.addItems( elems );
	  if ( !items.length ) {
	    return;
	  }
	  // layout and reveal just the new items
	  this.layoutItems( items, true );
	  this.reveal( items );
	};

	/**
	 * Layout prepended elements
	 * @param {Array or NodeList or Element} elems
	 */
	Outlayer.prototype.prepended = function( elems ) {
	  var items = this._itemize( elems );
	  if ( !items.length ) {
	    return;
	  }
	  // add items to beginning of collection
	  var previousItems = this.items.slice(0);
	  this.items = items.concat( previousItems );
	  // start new layout
	  this._resetLayout();
	  this._manageStamps();
	  // layout new stuff without transition
	  this.layoutItems( items, true );
	  this.reveal( items );
	  // layout previous items
	  this.layoutItems( previousItems );
	};

	/**
	 * reveal a collection of items
	 * @param {Array of Outlayer.Items} items
	 */
	Outlayer.prototype.reveal = function( items ) {
	  var len = items && items.length;
	  if ( !len ) {
	    return;
	  }
	  for ( var i=0; i < len; i++ ) {
	    var item = items[i];
	    item.reveal();
	  }
	};

	/**
	 * hide a collection of items
	 * @param {Array of Outlayer.Items} items
	 */
	Outlayer.prototype.hide = function( items ) {
	  var len = items && items.length;
	  if ( !len ) {
	    return;
	  }
	  for ( var i=0; i < len; i++ ) {
	    var item = items[i];
	    item.hide();
	  }
	};

	/**
	 * get Outlayer.Item, given an Element
	 * @param {Element} elem
	 * @param {Function} callback
	 * @returns {Outlayer.Item} item
	 */
	Outlayer.prototype.getItem = function( elem ) {
	  // loop through items to get the one that matches
	  for ( var i=0, len = this.items.length; i < len; i++ ) {
	    var item = this.items[i];
	    if ( item.element === elem ) {
	      // return item
	      return item;
	    }
	  }
	};

	/**
	 * get collection of Outlayer.Items, given Elements
	 * @param {Array} elems
	 * @returns {Array} items - Outlayer.Items
	 */
	Outlayer.prototype.getItems = function( elems ) {
	  if ( !elems || !elems.length ) {
	    return;
	  }
	  var items = [];
	  for ( var i=0, len = elems.length; i < len; i++ ) {
	    var elem = elems[i];
	    var item = this.getItem( elem );
	    if ( item ) {
	      items.push( item );
	    }
	  }

	  return items;
	};

	/**
	 * remove element(s) from instance and DOM
	 * @param {Array or NodeList or Element} elems
	 */
	Outlayer.prototype.remove = function( elems ) {
	  elems = makeArray( elems );

	  var removeItems = this.getItems( elems );
	  // bail if no items to remove
	  if ( !removeItems || !removeItems.length ) {
	    return;
	  }

	  this._itemsOn( removeItems, 'remove', function() {
	    this.emitEvent( 'removeComplete', [ this, removeItems ] );
	  });

	  for ( var i=0, len = removeItems.length; i < len; i++ ) {
	    var item = removeItems[i];
	    item.remove();
	    // remove item from collection
	    removeFrom( item, this.items );
	  }
	};

	// ----- destroy ----- //

	// remove and disable Outlayer instance
	Outlayer.prototype.destroy = function() {
	  // clean up dynamic styles
	  var style = this.element.style;
	  style.height = '';
	  style.position = '';
	  style.width = '';
	  // destroy items
	  for ( var i=0, len = this.items.length; i < len; i++ ) {
	    var item = this.items[i];
	    item.destroy();
	  }

	  this.unbindResize();

	  delete this.element.outlayerGUID;
	  // remove data for jQuery
	  if ( jQuery ) {
	    jQuery.removeData( this.element, this.constructor.namespace );
	  }

	};

	// -------------------------- data -------------------------- //

	/**
	 * get Outlayer instance from element
	 * @param {Element} elem
	 * @returns {Outlayer}
	 */
	Outlayer.data = function( elem ) {
	  var id = elem && elem.outlayerGUID;
	  return id && instances[ id ];
	};


	// -------------------------- create Outlayer class -------------------------- //

	/**
	 * create a layout class
	 * @param {String} namespace
	 */
	Outlayer.create = function( namespace, options ) {
	  // sub-class Outlayer
	  function Layout() {
	    Outlayer.apply( this, arguments );
	  }
	  // inherit Outlayer prototype, use Object.create if there
	  if ( Object.create ) {
	    Layout.prototype = Object.create( Outlayer.prototype );
	  } else {
	    extend( Layout.prototype, Outlayer.prototype );
	  }
	  // set contructor, used for namespace and Item
	  Layout.prototype.constructor = Layout;

	  Layout.defaults = extend( {}, Outlayer.defaults );
	  // apply new options
	  extend( Layout.defaults, options );
	  // keep prototype.settings for backwards compatibility (Packery v1.2.0)
	  Layout.prototype.settings = {};

	  Layout.namespace = namespace;

	  Layout.data = Outlayer.data;

	  // sub-class Item
	  Layout.Item = function LayoutItem() {
	    Item.apply( this, arguments );
	  };

	  Layout.Item.prototype = new Item();

	  // -------------------------- declarative -------------------------- //

	  /**
	   * allow user to initialize Outlayer via .js-namespace class
	   * options are parsed from data-namespace-option attribute
	   */
	  docReady( function() {
	    var dashedNamespace = toDashed( namespace );
	    var elems = document.querySelectorAll( '.js-' + dashedNamespace );
	    var dataAttr = 'data-' + dashedNamespace + '-options';

	    for ( var i=0, len = elems.length; i < len; i++ ) {
	      var elem = elems[i];
	      var attr = elem.getAttribute( dataAttr );
	      var options;
	      try {
	        options = attr && JSON.parse( attr );
	      } catch ( error ) {
	        // log error, do not initialize
	        if ( console ) {
	          console.error( 'Error parsing ' + dataAttr + ' on ' +
	            elem.nodeName.toLowerCase() + ( elem.id ? '#' + elem.id : '' ) + ': ' +
	            error );
	        }
	        continue;
	      }
	      // initialize
	      var instance = new Layout( elem, options );
	      // make available via $().data('layoutname')
	      if ( jQuery ) {
	        jQuery.data( elem, namespace, instance );
	      }
	    }
	  });

	  // -------------------------- jQuery bridge -------------------------- //

	  // make into jQuery plugin
	  if ( jQuery && jQuery.bridget ) {
	    jQuery.bridget( namespace, Layout );
	  }

	  return Layout;
	};

	// ----- fin ----- //

	// back in global
	Outlayer.Item = Item;

	return Outlayer;

	}

	// -------------------------- transport -------------------------- //
	if (true) {
	  // CommonJS
	  module.exports = outlayerDefinition(
	    __webpack_require__(393),
	    __webpack_require__(394),
	    __webpack_require__(396),
	    __webpack_require__(397),
	    __webpack_require__(399),
	    __webpack_require__(400)
	  );
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( [
	      'eventie/eventie',
	      'doc-ready/doc-ready',
	      'eventEmitter/EventEmitter',
	      'get-size/get-size',
	      'matches-selector/matches-selector',
	      './item'
	    ],
	    outlayerDefinition );
	} else {
	  // browser global
	  window.Outlayer = outlayerDefinition(
	    window.eventie,
	    window.docReady,
	    window.EventEmitter,
	    window.getSize,
	    window.matchesSelector,
	    window.Outlayer.Item
	  );
	}

	})( typeof window !== 'undefined' ? window : null );


/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * eventie v1.0.5
	 * event binding helper
	 *   eventie.bind( elem, 'click', myFn )
	 *   eventie.unbind( elem, 'click', myFn )
	 * MIT license
	 */

	/*jshint browser: true, undef: true, unused: true */
	/*global define: false, module: false */

	( function( window ) {
	'use strict';

	if (!window) return;

	var docElem = document.documentElement;

	var bind = function() {};

	function getIEEvent( obj ) {
	  var event = window.event;
	  // add event.target
	  event.target = event.target || event.srcElement || obj;
	  return event;
	}

	if ( docElem.addEventListener ) {
	  bind = function( obj, type, fn ) {
	    obj.addEventListener( type, fn, false );
	  };
	} else if ( docElem.attachEvent ) {
	  bind = function( obj, type, fn ) {
	    obj[ type + fn ] = fn.handleEvent ?
	      function() {
	        var event = getIEEvent( obj );
	        fn.handleEvent.call( fn, event );
	      } :
	      function() {
	        var event = getIEEvent( obj );
	        fn.call( obj, event );
	      };
	    obj.attachEvent( "on" + type, obj[ type + fn ] );
	  };
	}

	var unbind = function() {};

	if ( docElem.removeEventListener ) {
	  unbind = function( obj, type, fn ) {
	    obj.removeEventListener( type, fn, false );
	  };
	} else if ( docElem.detachEvent ) {
	  unbind = function( obj, type, fn ) {
	    obj.detachEvent( "on" + type, obj[ type + fn ] );
	    try {
	      delete obj[ type + fn ];
	    } catch ( err ) {
	      // can't delete window object properties
	      obj[ type + fn ] = undefined;
	    }
	  };
	}

	var eventie = {
	  bind: bind,
	  unbind: unbind
	};

	// ----- module definition ----- //
	if ( true ) {
	  // CommonJS
	  module.exports = eventie;
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( eventie );
	} else {
	  // browser global
	  window.eventie = eventie;
	}

	})( typeof window !== 'undefined' ? window : null );


/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * docReady v1.0.3
	 * Cross browser DOMContentLoaded event emitter
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true, unused: true*/
	/*global define: false, require: false, module: false */

	( function( window ) {
	'use strict';

	if (!window) return;

	var document = window.document;
	// collection of functions to be triggered on ready
	var queue = [];

	function docReady( fn ) {
	  // throw out non-functions
	  if ( typeof fn !== 'function' ) {
	    return;
	  }

	  if ( docReady.isReady ) {
	    // ready now, hit it
	    fn();
	  } else {
	    // queue function when ready
	    queue.push( fn );
	  }
	}

	docReady.isReady = false;

	// triggered on various doc ready events
	function init( event ) {
	  // bail if IE8 document is not ready just yet
	  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
	  if ( docReady.isReady || isIE8NotReady ) {
	    return;
	  }
	  docReady.isReady = true;

	  // process queue
	  for ( var i=0, len = queue.length; i < len; i++ ) {
	    var fn = queue[i];
	    fn();
	  }
	}

	function defineDocReady( eventie ) {
	  eventie.bind( document, 'DOMContentLoaded', init );
	  eventie.bind( document, 'readystatechange', init );
	  eventie.bind( window, 'load', init );

	  return docReady;
	}

	// transport
	if ( true ) {
	  module.exports = defineDocReady( __webpack_require__(395) );
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  // if RequireJS, then doc is already ready
	  docReady.isReady = typeof requirejs === 'function';
	  define( [ 'eventie/eventie' ], defineDocReady );
	} else {
	  // browser global
	  window.docReady = defineDocReady( window.eventie );
	}

	})( typeof window !== 'undefined' ? window : null );


/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * eventie v1.0.5
	 * event binding helper
	 *   eventie.bind( elem, 'click', myFn )
	 *   eventie.unbind( elem, 'click', myFn )
	 * MIT license
	 */

	/*jshint browser: true, undef: true, unused: true */
	/*global define: false, module: false */

	( function( window ) {
	'use strict';

	if (!window) return;

	var docElem = document.documentElement;

	var bind = function() {};

	function getIEEvent( obj ) {
	  var event = window.event;
	  // add event.target
	  event.target = event.target || event.srcElement || obj;
	  return event;
	}

	if ( docElem.addEventListener ) {
	  bind = function( obj, type, fn ) {
	    obj.addEventListener( type, fn, false );
	  };
	} else if ( docElem.attachEvent ) {
	  bind = function( obj, type, fn ) {
	    obj[ type + fn ] = fn.handleEvent ?
	      function() {
	        var event = getIEEvent( obj );
	        fn.handleEvent.call( fn, event );
	      } :
	      function() {
	        var event = getIEEvent( obj );
	        fn.call( obj, event );
	      };
	    obj.attachEvent( "on" + type, obj[ type + fn ] );
	  };
	}

	var unbind = function() {};

	if ( docElem.removeEventListener ) {
	  unbind = function( obj, type, fn ) {
	    obj.removeEventListener( type, fn, false );
	  };
	} else if ( docElem.detachEvent ) {
	  unbind = function( obj, type, fn ) {
	    obj.detachEvent( "on" + type, obj[ type + fn ] );
	    try {
	      delete obj[ type + fn ];
	    } catch ( err ) {
	      // can't delete window object properties
	      obj[ type + fn ] = undefined;
	    }
	  };
	}

	var eventie = {
	  bind: bind,
	  unbind: unbind
	};

	// ----- module definition ----- //
	if ( true ) {
	  // CommonJS
	  module.exports = eventie;
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( eventie );
	} else {
	  // browser global
	  window.eventie = eventie;
	}

	})( typeof window !== 'undefined' ? window : null );


/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * EventEmitter v4.2.0 - git.io/ee
	 * Oliver Caldwell
	 * MIT license
	 * @preserve
	 */

	(function () {
		// Place the script in strict mode
		'use strict';

		/**
		 * Class for managing events.
		 * Can be extended to provide event functionality in other classes.
		 *
		 * @class EventEmitter Manages event registering and emitting.
		 */
		function EventEmitter() {}

		// Shortcuts to improve speed and size

		// Easy access to the prototype
		var proto = EventEmitter.prototype;

		/**
		 * Finds the index of the listener for the event in it's storage array.
		 *
		 * @param {Function[]} listeners Array of listeners to search through.
		 * @param {Function} listener Method to look for.
		 * @return {Number} Index of the specified listener, -1 if not found
		 * @api private
		 */
		function indexOfListener(listeners, listener) {
			var i = listeners.length;
			while (i--) {
				if (listeners[i].listener === listener) {
					return i;
				}
			}

			return -1;
		}

		/**
		 * Returns the listener array for the specified event.
		 * Will initialise the event object and listener arrays if required.
		 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
		 * Each property in the object response is an array of listener functions.
		 *
		 * @param {String|RegExp} evt Name of the event to return the listeners from.
		 * @return {Function[]|Object} All listener functions for the event.
		 */
		proto.getListeners = function getListeners(evt) {
			var events = this._getEvents();
			var response;
			var key;

			// Return a concatenated array of all matching events if
			// the selector is a regular expression.
			if (typeof evt === 'object') {
				response = {};
				for (key in events) {
					if (events.hasOwnProperty(key) && evt.test(key)) {
						response[key] = events[key];
					}
				}
			}
			else {
				response = events[evt] || (events[evt] = []);
			}

			return response;
		};

		/**
		 * Takes a list of listener objects and flattens it into a list of listener functions.
		 *
		 * @param {Object[]} listeners Raw listener objects.
		 * @return {Function[]} Just the listener functions.
		 */
		proto.flattenListeners = function flattenListeners(listeners) {
			var flatListeners = [];
			var i;

			for (i = 0; i < listeners.length; i += 1) {
				flatListeners.push(listeners[i].listener);
			}

			return flatListeners;
		};

		/**
		 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
		 *
		 * @param {String|RegExp} evt Name of the event to return the listeners from.
		 * @return {Object} All listener functions for an event in an object.
		 */
		proto.getListenersAsObject = function getListenersAsObject(evt) {
			var listeners = this.getListeners(evt);
			var response;

			if (listeners instanceof Array) {
				response = {};
				response[evt] = listeners;
			}

			return response || listeners;
		};

		/**
		 * Adds a listener function to the specified event.
		 * The listener will not be added if it is a duplicate.
		 * If the listener returns true then it will be removed after it is called.
		 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
		 *
		 * @param {String|RegExp} evt Name of the event to attach the listener to.
		 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.addListener = function addListener(evt, listener) {
			var listeners = this.getListenersAsObject(evt);
			var listenerIsWrapped = typeof listener === 'object';
			var key;

			for (key in listeners) {
				if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
					listeners[key].push(listenerIsWrapped ? listener : {
						listener: listener,
						once: false
					});
				}
			}

			return this;
		};

		/**
		 * Alias of addListener
		 */
		proto.on = proto.addListener;

		/**
		 * Semi-alias of addListener. It will add a listener that will be
		 * automatically removed after it's first execution.
		 *
		 * @param {String|RegExp} evt Name of the event to attach the listener to.
		 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.addOnceListener = function addOnceListener(evt, listener) {
			return this.addListener(evt, {
				listener: listener,
				once: true
			});
		};

		/**
		 * Alias of addOnceListener.
		 */
		proto.once = proto.addOnceListener;

		/**
		 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
		 * You need to tell it what event names should be matched by a regex.
		 *
		 * @param {String} evt Name of the event to create.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.defineEvent = function defineEvent(evt) {
			this.getListeners(evt);
			return this;
		};

		/**
		 * Uses defineEvent to define multiple events.
		 *
		 * @param {String[]} evts An array of event names to define.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.defineEvents = function defineEvents(evts) {
			for (var i = 0; i < evts.length; i += 1) {
				this.defineEvent(evts[i]);
			}
			return this;
		};

		/**
		 * Removes a listener function from the specified event.
		 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
		 *
		 * @param {String|RegExp} evt Name of the event to remove the listener from.
		 * @param {Function} listener Method to remove from the event.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.removeListener = function removeListener(evt, listener) {
			var listeners = this.getListenersAsObject(evt);
			var index;
			var key;

			for (key in listeners) {
				if (listeners.hasOwnProperty(key)) {
					index = indexOfListener(listeners[key], listener);

					if (index !== -1) {
						listeners[key].splice(index, 1);
					}
				}
			}

			return this;
		};

		/**
		 * Alias of removeListener
		 */
		proto.off = proto.removeListener;

		/**
		 * Adds listeners in bulk using the manipulateListeners method.
		 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
		 * You can also pass it a regular expression to add the array of listeners to all events that match it.
		 * Yeah, this function does quite a bit. That's probably a bad thing.
		 *
		 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
		 * @param {Function[]} [listeners] An optional array of listener functions to add.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.addListeners = function addListeners(evt, listeners) {
			// Pass through to manipulateListeners
			return this.manipulateListeners(false, evt, listeners);
		};

		/**
		 * Removes listeners in bulk using the manipulateListeners method.
		 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
		 * You can also pass it an event name and an array of listeners to be removed.
		 * You can also pass it a regular expression to remove the listeners from all events that match it.
		 *
		 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
		 * @param {Function[]} [listeners] An optional array of listener functions to remove.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.removeListeners = function removeListeners(evt, listeners) {
			// Pass through to manipulateListeners
			return this.manipulateListeners(true, evt, listeners);
		};

		/**
		 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
		 * The first argument will determine if the listeners are removed (true) or added (false).
		 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
		 * You can also pass it an event name and an array of listeners to be added/removed.
		 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
		 *
		 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
		 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
		 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
			var i;
			var value;
			var single = remove ? this.removeListener : this.addListener;
			var multiple = remove ? this.removeListeners : this.addListeners;

			// If evt is an object then pass each of it's properties to this method
			if (typeof evt === 'object' && !(evt instanceof RegExp)) {
				for (i in evt) {
					if (evt.hasOwnProperty(i) && (value = evt[i])) {
						// Pass the single listener straight through to the singular method
						if (typeof value === 'function') {
							single.call(this, i, value);
						}
						else {
							// Otherwise pass back to the multiple function
							multiple.call(this, i, value);
						}
					}
				}
			}
			else {
				// So evt must be a string
				// And listeners must be an array of listeners
				// Loop over it and pass each one to the multiple method
				i = listeners.length;
				while (i--) {
					single.call(this, evt, listeners[i]);
				}
			}

			return this;
		};

		/**
		 * Removes all listeners from a specified event.
		 * If you do not specify an event then all listeners will be removed.
		 * That means every event will be emptied.
		 * You can also pass a regex to remove all events that match it.
		 *
		 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.removeEvent = function removeEvent(evt) {
			var type = typeof evt;
			var events = this._getEvents();
			var key;

			// Remove different things depending on the state of evt
			if (type === 'string') {
				// Remove all listeners for the specified event
				delete events[evt];
			}
			else if (type === 'object') {
				// Remove all events matching the regex.
				for (key in events) {
					if (events.hasOwnProperty(key) && evt.test(key)) {
						delete events[key];
					}
				}
			}
			else {
				// Remove all listeners in all events
				delete this._events;
			}

			return this;
		};

		/**
		 * Emits an event of your choice.
		 * When emitted, every listener attached to that event will be executed.
		 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
		 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
		 * So they will not arrive within the array on the other side, they will be separate.
		 * You can also pass a regular expression to emit to all events that match it.
		 *
		 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
		 * @param {Array} [args] Optional array of arguments to be passed to each listener.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.emitEvent = function emitEvent(evt, args) {
			var listeners = this.getListenersAsObject(evt);
			var listener;
			var i;
			var key;
			var response;

			for (key in listeners) {
				if (listeners.hasOwnProperty(key)) {
					i = listeners[key].length;

					while (i--) {
						// If the listener returns true then it shall be removed from the event
						// The function is executed either with a basic call or an apply if there is an args array
						listener = listeners[key][i];
						response = listener.listener.apply(this, args || []);
						if (response === this._getOnceReturnValue() || listener.once === true) {
							this.removeListener(evt, listener.listener);
						}
					}
				}
			}

			return this;
		};

		/**
		 * Alias of emitEvent
		 */
		proto.trigger = proto.emitEvent;

		/**
		 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
		 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
		 *
		 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
		 * @param {...*} Optional additional arguments to be passed to each listener.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.emit = function emit(evt) {
			var args = Array.prototype.slice.call(arguments, 1);
			return this.emitEvent(evt, args);
		};

		/**
		 * Sets the current value to check against when executing listeners. If a
		 * listeners return value matches the one set here then it will be removed
		 * after execution. This value defaults to true.
		 *
		 * @param {*} value The new value to check for when executing listeners.
		 * @return {Object} Current instance of EventEmitter for chaining.
		 */
		proto.setOnceReturnValue = function setOnceReturnValue(value) {
			this._onceReturnValue = value;
			return this;
		};

		/**
		 * Fetches the current value to check against when executing listeners. If
		 * the listeners return value matches this one then it should be removed
		 * automatically. It will return true by default.
		 *
		 * @return {*|Boolean} The current value to check for or the default, true.
		 * @api private
		 */
		proto._getOnceReturnValue = function _getOnceReturnValue() {
			if (this.hasOwnProperty('_onceReturnValue')) {
				return this._onceReturnValue;
			}
			else {
				return true;
			}
		};

		/**
		 * Fetches the events object and creates one if required.
		 *
		 * @return {Object} The events storage object.
		 * @api private
		 */
		proto._getEvents = function _getEvents() {
			return this._events || (this._events = {});
		};

		// Expose the class either via AMD, CommonJS or the global object
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return EventEmitter;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
		else if (typeof module !== 'undefined' && module.exports){
			module.exports = EventEmitter;
		}
		else {
			this.EventEmitter = EventEmitter;
		}
	}.call(this));


/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * getSize v1.1.8
	 * measure size of elements
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, exports: false, require: false, module: false */

	( function( window, undefined ) {
	'use strict';

	if (!window) return;

	// -------------------------- helpers -------------------------- //

	var getComputedStyle = window.getComputedStyle;
	var getStyle = getComputedStyle ?
	  function( elem ) {
	    return getComputedStyle( elem, null );
	  } :
	  function( elem ) {
	    return elem.currentStyle;
	  };

	// get a number from a string, not a percentage
	function getStyleSize( value ) {
	  var num = parseFloat( value );
	  // not a percent like '100%', and a number
	  var isValid = value.indexOf('%') === -1 && !isNaN( num );
	  return isValid && num;
	}

	// -------------------------- measurements -------------------------- //

	var measurements = [
	  'paddingLeft',
	  'paddingRight',
	  'paddingTop',
	  'paddingBottom',
	  'marginLeft',
	  'marginRight',
	  'marginTop',
	  'marginBottom',
	  'borderLeftWidth',
	  'borderRightWidth',
	  'borderTopWidth',
	  'borderBottomWidth'
	];

	function getZeroSize() {
	  var size = {
	    width: 0,
	    height: 0,
	    innerWidth: 0,
	    innerHeight: 0,
	    outerWidth: 0,
	    outerHeight: 0
	  };
	  for ( var i=0, len = measurements.length; i < len; i++ ) {
	    var measurement = measurements[i];
	    size[ measurement ] = 0;
	  }
	  return size;
	}



	function defineGetSize( getStyleProperty ) {

	// -------------------------- box sizing -------------------------- //

	var boxSizingProp = getStyleProperty('boxSizing');
	var isBoxSizeOuter;

	/**
	 * WebKit measures the outer-width on style.width on border-box elems
	 * IE & Firefox measures the inner-width
	 */
	( function() {
	  if ( !boxSizingProp ) {
	    return;
	  }

	  var div = document.createElement('div');
	  div.style.width = '200px';
	  div.style.padding = '1px 2px 3px 4px';
	  div.style.borderStyle = 'solid';
	  div.style.borderWidth = '1px 2px 3px 4px';
	  div.style[ boxSizingProp ] = 'border-box';

	  var body = document.body || document.documentElement;
	  body.appendChild( div );
	  var style = getStyle( div );

	  isBoxSizeOuter = getStyleSize( style.width ) === 200;
	  body.removeChild( div );
	})();


	// -------------------------- getSize -------------------------- //

	function getSize( elem ) {
	  // use querySeletor if elem is string
	  if ( typeof elem === 'string' ) {
	    elem = document.querySelector( elem );
	  }

	  // do not proceed on non-objects
	  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
	    return;
	  }

	  var style = getStyle( elem );

	  // if hidden, everything is 0
	  if ( style.display === 'none' ) {
	    return getZeroSize();
	  }

	  var size = {};
	  size.width = elem.offsetWidth;
	  size.height = elem.offsetHeight;

	  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
	    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );

	  // get all measurements
	  for ( var i=0, len = measurements.length; i < len; i++ ) {
	    var measurement = measurements[i];
	    var value = style[ measurement ];
	    value = mungeNonPixel( elem, value );
	    var num = parseFloat( value );
	    // any 'auto', 'medium' value will be 0
	    size[ measurement ] = !isNaN( num ) ? num : 0;
	  }

	  var paddingWidth = size.paddingLeft + size.paddingRight;
	  var paddingHeight = size.paddingTop + size.paddingBottom;
	  var marginWidth = size.marginLeft + size.marginRight;
	  var marginHeight = size.marginTop + size.marginBottom;
	  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
	  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

	  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

	  // overwrite width and height if we can get it from style
	  var styleWidth = getStyleSize( style.width );
	  if ( styleWidth !== false ) {
	    size.width = styleWidth +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
	  }

	  var styleHeight = getStyleSize( style.height );
	  if ( styleHeight !== false ) {
	    size.height = styleHeight +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
	  }

	  size.innerWidth = size.width - ( paddingWidth + borderWidth );
	  size.innerHeight = size.height - ( paddingHeight + borderHeight );

	  size.outerWidth = size.width + marginWidth;
	  size.outerHeight = size.height + marginHeight;

	  return size;
	}

	// IE8 returns percent values, not pixels
	// taken from jQuery's curCSS
	function mungeNonPixel( elem, value ) {
	  // IE8 and has percent value
	  if ( getComputedStyle || value.indexOf('%') === -1 ) {
	    return value;
	  }
	  var style = elem.style;
	  // Remember the original values
	  var left = style.left;
	  var rs = elem.runtimeStyle;
	  var rsLeft = rs && rs.left;

	  // Put in the new values to get a computed value out
	  if ( rsLeft ) {
	    rs.left = elem.currentStyle.left;
	  }
	  style.left = value;
	  value = style.pixelLeft;

	  // Revert the changed values
	  style.left = left;
	  if ( rsLeft ) {
	    rs.left = rsLeft;
	  }

	  return value;
	}

	return getSize;

	}

	// transport
	if ( true ) {
	  // CommonJS for Component
	  module.exports = defineGetSize( __webpack_require__(398) );
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD for RequireJS
	  define( [ 'get-style-property/get-style-property' ], defineGetSize );
	} else {
	  // browser global
	  window.getSize = defineGetSize( window.getStyleProperty );
	}

	})( typeof window !== 'undefined' ? window : null );


/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * getStyleProperty v1.0.4
	 * original by kangax
	 * http://perfectionkills.com/feature-testing-css-properties/
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true */
	/*global define: false, exports: false, module: false */

	( function( window ) {

	'use strict';

	var prefixes = 'Webkit Moz ms Ms O'.split(' ');
	var docElemStyle = document.documentElement.style;

	function getStyleProperty( propName ) {
	  if ( !propName ) {
	    return;
	  }

	  // test standard property first
	  if ( typeof docElemStyle[ propName ] === 'string' ) {
	    return propName;
	  }

	  // capitalize
	  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

	  // test vendor specific properties
	  var prefixed;
	  for ( var i=0, len = prefixes.length; i < len; i++ ) {
	    prefixed = prefixes[i] + propName;
	    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
	      return prefixed;
	    }
	  }
	}

	// transport
	if ( true ) {
	  // AMD
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return getStyleProperty;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ( typeof exports === 'object' ) {
	  // CommonJS for Component
	  module.exports = getStyleProperty;
	} else {
	  // browser global
	  window.getStyleProperty = getStyleProperty;
	}

	})( window );


/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * matchesSelector v1.0.3
	 * matchesSelector( element, '.selector' )
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, module: false */

	( function( ElemProto ) {

	  'use strict';

	  var matchesMethod = ( function() {
	    // check for the standard method name first
	    if ( ElemProto.matches ) {
	      return 'matches';
	    }
	    // check un-prefixed
	    if ( ElemProto.matchesSelector ) {
	      return 'matchesSelector';
	    }
	    // check vendor prefixes
	    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

	    for ( var i=0, len = prefixes.length; i < len; i++ ) {
	      var prefix = prefixes[i];
	      var method = prefix + 'MatchesSelector';
	      if ( ElemProto[ method ] ) {
	        return method;
	      }
	    }
	  })();

	  // ----- match ----- //

	  function match( elem, selector ) {
	    return elem[ matchesMethod ]( selector );
	  }

	  // ----- appendToFragment ----- //

	  function checkParent( elem ) {
	    // not needed if already has parent
	    if ( elem.parentNode ) {
	      return;
	    }
	    var fragment = document.createDocumentFragment();
	    fragment.appendChild( elem );
	  }

	  // ----- query ----- //

	  // fall back to using QSA
	  // thx @jonathantneal https://gist.github.com/3062955
	  function query( elem, selector ) {
	    // append to fragment if no parent
	    checkParent( elem );

	    // match elem with all selected elems of parent
	    var elems = elem.parentNode.querySelectorAll( selector );
	    for ( var i=0, len = elems.length; i < len; i++ ) {
	      // return true if match
	      if ( elems[i] === elem ) {
	        return true;
	      }
	    }
	    // otherwise return false
	    return false;
	  }

	  // ----- matchChild ----- //

	  function matchChild( elem, selector ) {
	    checkParent( elem );
	    return match( elem, selector );
	  }

	  // ----- matchesSelector ----- //

	  var matchesSelector;

	  if ( matchesMethod ) {
	    // IE9 supports matchesSelector, but doesn't work on orphaned elems
	    // check for that
	    var div = document.createElement('div');
	    var supportsOrphans = match( div, 'div' );
	    matchesSelector = supportsOrphans ? match : matchChild;
	  } else {
	    matchesSelector = query;
	  }

	  // transport
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return matchesSelector;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof exports === 'object' ) {
	    module.exports = matchesSelector;
	  }
	  else {
	    // browser global
	    window.matchesSelector = matchesSelector;
	  }

	})( Element.prototype );


/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Outlayer Item
	 */

	( function( window ) {
	'use strict';

	if (!window) return;

	// ----- get style ----- //

	var getComputedStyle = window.getComputedStyle;
	var getStyle = getComputedStyle ?
	  function( elem ) {
	    return getComputedStyle( elem, null );
	  } :
	  function( elem ) {
	    return elem.currentStyle;
	  };


	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}

	function isEmptyObj( obj ) {
	  for ( var prop in obj ) {
	    return false;
	  }
	  prop = null;
	  return true;
	}

	// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
	function toDash( str ) {
	  return str.replace( /([A-Z])/g, function( $1 ){
	    return '-' + $1.toLowerCase();
	  });
	}

	// -------------------------- Outlayer definition -------------------------- //

	function outlayerItemDefinition( EventEmitter, getSize, getStyleProperty ) {

	// -------------------------- CSS3 support -------------------------- //

	var transitionProperty = getStyleProperty('transition');
	var transformProperty = getStyleProperty('transform');
	var supportsCSS3 = transitionProperty && transformProperty;
	var is3d = !!getStyleProperty('perspective');

	var transitionEndEvent = {
	  WebkitTransition: 'webkitTransitionEnd',
	  MozTransition: 'transitionend',
	  OTransition: 'otransitionend',
	  transition: 'transitionend'
	}[ transitionProperty ];

	// properties that could have vendor prefix
	var prefixableProperties = [
	  'transform',
	  'transition',
	  'transitionDuration',
	  'transitionProperty'
	];

	// cache all vendor properties
	var vendorProperties = ( function() {
	  var cache = {};
	  for ( var i=0, len = prefixableProperties.length; i < len; i++ ) {
	    var prop = prefixableProperties[i];
	    var supportedProp = getStyleProperty( prop );
	    if ( supportedProp && supportedProp !== prop ) {
	      cache[ prop ] = supportedProp;
	    }
	  }
	  return cache;
	})();

	// -------------------------- Item -------------------------- //

	function Item( element, layout ) {
	  if ( !element ) {
	    return;
	  }

	  this.element = element;
	  // parent layout class, i.e. Masonry, Isotope, or Packery
	  this.layout = layout;
	  this.position = {
	    x: 0,
	    y: 0
	  };

	  this._create();
	}

	// inherit EventEmitter
	extend( Item.prototype, EventEmitter.prototype );

	Item.prototype._create = function() {
	  // transition objects
	  this._transn = {
	    ingProperties: {},
	    clean: {},
	    onEnd: {}
	  };

	  this.css({
	    position: 'absolute'
	  });
	};

	// trigger specified handler for event type
	Item.prototype.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};

	Item.prototype.getSize = function() {
	  this.size = getSize( this.element );
	};

	/**
	 * apply CSS styles to element
	 * @param {Object} style
	 */
	Item.prototype.css = function( style ) {
	  var elemStyle = this.element.style;

	  for ( var prop in style ) {
	    // use vendor property if available
	    var supportedProp = vendorProperties[ prop ] || prop;
	    elemStyle[ supportedProp ] = style[ prop ];
	  }
	};

	 // measure position, and sets it
	Item.prototype.getPosition = function() {
	  var style = getStyle( this.element );
	  var layoutOptions = this.layout.options;
	  var isOriginLeft = layoutOptions.isOriginLeft;
	  var isOriginTop = layoutOptions.isOriginTop;
	  var x = parseInt( style[ isOriginLeft ? 'left' : 'right' ], 10 );
	  var y = parseInt( style[ isOriginTop ? 'top' : 'bottom' ], 10 );

	  // clean up 'auto' or other non-integer values
	  x = isNaN( x ) ? 0 : x;
	  y = isNaN( y ) ? 0 : y;
	  // remove padding from measurement
	  var layoutSize = this.layout.size;
	  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
	  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

	  this.position.x = x;
	  this.position.y = y;
	};

	// set settled position, apply padding
	Item.prototype.layoutPosition = function() {
	  var layoutSize = this.layout.size;
	  var layoutOptions = this.layout.options;
	  var style = {};

	  if ( layoutOptions.isOriginLeft ) {
	    style.left = ( this.position.x + layoutSize.paddingLeft ) + 'px';
	    // reset other property
	    style.right = '';
	  } else {
	    style.right = ( this.position.x + layoutSize.paddingRight ) + 'px';
	    style.left = '';
	  }

	  if ( layoutOptions.isOriginTop ) {
	    style.top = ( this.position.y + layoutSize.paddingTop ) + 'px';
	    style.bottom = '';
	  } else {
	    style.bottom = ( this.position.y + layoutSize.paddingBottom ) + 'px';
	    style.top = '';
	  }

	  this.css( style );
	  this.emitEvent( 'layout', [ this ] );
	};


	// transform translate function
	var translate = is3d ?
	  function( x, y ) {
	    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
	  } :
	  function( x, y ) {
	    return 'translate(' + x + 'px, ' + y + 'px)';
	  };


	Item.prototype._transitionTo = function( x, y ) {
	  this.getPosition();
	  // get current x & y from top/left
	  var curX = this.position.x;
	  var curY = this.position.y;

	  var compareX = parseInt( x, 10 );
	  var compareY = parseInt( y, 10 );
	  var didNotMove = compareX === this.position.x && compareY === this.position.y;

	  // save end position
	  this.setPosition( x, y );

	  // if did not move and not transitioning, just go to layout
	  if ( didNotMove && !this.isTransitioning ) {
	    this.layoutPosition();
	    return;
	  }

	  var transX = x - curX;
	  var transY = y - curY;
	  var transitionStyle = {};
	  // flip cooridinates if origin on right or bottom
	  var layoutOptions = this.layout.options;
	  transX = layoutOptions.isOriginLeft ? transX : -transX;
	  transY = layoutOptions.isOriginTop ? transY : -transY;
	  transitionStyle.transform = translate( transX, transY );

	  this.transition({
	    to: transitionStyle,
	    onTransitionEnd: {
	      transform: this.layoutPosition
	    },
	    isCleaning: true
	  });
	};

	// non transition + transform support
	Item.prototype.goTo = function( x, y ) {
	  this.setPosition( x, y );
	  this.layoutPosition();
	};

	// use transition and transforms if supported
	Item.prototype.moveTo = supportsCSS3 ?
	  Item.prototype._transitionTo : Item.prototype.goTo;

	Item.prototype.setPosition = function( x, y ) {
	  this.position.x = parseInt( x, 10 );
	  this.position.y = parseInt( y, 10 );
	};

	// ----- transition ----- //

	/**
	 * @param {Object} style - CSS
	 * @param {Function} onTransitionEnd
	 */

	// non transition, just trigger callback
	Item.prototype._nonTransition = function( args ) {
	  this.css( args.to );
	  if ( args.isCleaning ) {
	    this._removeStyles( args.to );
	  }
	  for ( var prop in args.onTransitionEnd ) {
	    args.onTransitionEnd[ prop ].call( this );
	  }
	};

	/**
	 * proper transition
	 * @param {Object} args - arguments
	 *   @param {Object} to - style to transition to
	 *   @param {Object} from - style to start transition from
	 *   @param {Boolean} isCleaning - removes transition styles after transition
	 *   @param {Function} onTransitionEnd - callback
	 */
	Item.prototype._transition = function( args ) {
	  // redirect to nonTransition if no transition duration
	  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
	    this._nonTransition( args );
	    return;
	  }

	  var _transition = this._transn;
	  // keep track of onTransitionEnd callback by css property
	  for ( var prop in args.onTransitionEnd ) {
	    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
	  }
	  // keep track of properties that are transitioning
	  for ( prop in args.to ) {
	    _transition.ingProperties[ prop ] = true;
	    // keep track of properties to clean up when transition is done
	    if ( args.isCleaning ) {
	      _transition.clean[ prop ] = true;
	    }
	  }

	  // set from styles
	  if ( args.from ) {
	    this.css( args.from );
	    // force redraw. http://blog.alexmaccaw.com/css-transitions
	    var h = this.element.offsetHeight;
	    // hack for JSHint to hush about unused var
	    h = null;
	  }
	  // enable transition
	  this.enableTransition( args.to );
	  // set styles that are transitioning
	  this.css( args.to );

	  this.isTransitioning = true;

	};

	var itemTransitionProperties = transformProperty && ( toDash( transformProperty ) +
	  ',opacity' );

	Item.prototype.enableTransition = function(/* style */) {
	  // only enable if not already transitioning
	  // bug in IE10 were re-setting transition style will prevent
	  // transitionend event from triggering
	  if ( this.isTransitioning ) {
	    return;
	  }

	  // make transition: foo, bar, baz from style object
	  // TODO uncomment this bit when IE10 bug is resolved
	  // var transitionValue = [];
	  // for ( var prop in style ) {
	  //   // dash-ify camelCased properties like WebkitTransition
	  //   transitionValue.push( toDash( prop ) );
	  // }
	  // enable transition styles
	  // HACK always enable transform,opacity for IE10
	  this.css({
	    transitionProperty: itemTransitionProperties,
	    transitionDuration: this.layout.options.transitionDuration
	  });
	  // listen for transition end event
	  this.element.addEventListener( transitionEndEvent, this, false );
	};

	Item.prototype.transition = Item.prototype[ transitionProperty ? '_transition' : '_nonTransition' ];

	// ----- events ----- //

	Item.prototype.onwebkitTransitionEnd = function( event ) {
	  this.ontransitionend( event );
	};

	Item.prototype.onotransitionend = function( event ) {
	  this.ontransitionend( event );
	};

	// properties that I munge to make my life easier
	var dashedVendorProperties = {
	  '-webkit-transform': 'transform',
	  '-moz-transform': 'transform',
	  '-o-transform': 'transform'
	};

	Item.prototype.ontransitionend = function( event ) {
	  // disregard bubbled events from children
	  if ( event.target !== this.element ) {
	    return;
	  }
	  var _transition = this._transn;
	  // get property name of transitioned property, convert to prefix-free
	  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

	  // remove property that has completed transitioning
	  delete _transition.ingProperties[ propertyName ];
	  // check if any properties are still transitioning
	  if ( isEmptyObj( _transition.ingProperties ) ) {
	    // all properties have completed transitioning
	    this.disableTransition();
	  }
	  // clean style
	  if ( propertyName in _transition.clean ) {
	    // clean up style
	    this.element.style[ event.propertyName ] = '';
	    delete _transition.clean[ propertyName ];
	  }
	  // trigger onTransitionEnd callback
	  if ( propertyName in _transition.onEnd ) {
	    var onTransitionEnd = _transition.onEnd[ propertyName ];
	    onTransitionEnd.call( this );
	    delete _transition.onEnd[ propertyName ];
	  }

	  this.emitEvent( 'transitionEnd', [ this ] );
	};

	Item.prototype.disableTransition = function() {
	  this.removeTransitionStyles();
	  this.element.removeEventListener( transitionEndEvent, this, false );
	  this.isTransitioning = false;
	};

	/**
	 * removes style property from element
	 * @param {Object} style
	**/
	Item.prototype._removeStyles = function( style ) {
	  // clean up transition styles
	  var cleanStyle = {};
	  for ( var prop in style ) {
	    cleanStyle[ prop ] = '';
	  }
	  this.css( cleanStyle );
	};

	var cleanTransitionStyle = {
	  transitionProperty: '',
	  transitionDuration: ''
	};

	Item.prototype.removeTransitionStyles = function() {
	  // remove transition
	  this.css( cleanTransitionStyle );
	};

	// ----- show/hide/remove ----- //

	// remove element from DOM
	Item.prototype.removeElem = function() {
	  this.element.parentNode.removeChild( this.element );
	  this.emitEvent( 'remove', [ this ] );
	};

	Item.prototype.remove = function() {
	  // just remove element if no transition support or no transition
	  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
	    this.removeElem();
	    return;
	  }

	  // start transition
	  var _this = this;
	  this.on( 'transitionEnd', function() {
	    _this.removeElem();
	    return true; // bind once
	  });
	  this.hide();
	};

	Item.prototype.reveal = function() {
	  delete this.isHidden;
	  // remove display: none
	  this.css({ display: '' });

	  var options = this.layout.options;
	  this.transition({
	    from: options.hiddenStyle,
	    to: options.visibleStyle,
	    isCleaning: true
	  });
	};

	Item.prototype.hide = function() {
	  // set flag
	  this.isHidden = true;
	  // remove display: none
	  this.css({ display: '' });

	  var options = this.layout.options;
	  this.transition({
	    from: options.visibleStyle,
	    to: options.hiddenStyle,
	    // keep hidden stuff hidden
	    isCleaning: true,
	    onTransitionEnd: {
	      opacity: function() {
	        // check if still hidden
	        // during transition, item may have been un-hidden
	        if ( this.isHidden ) {
	          this.css({ display: 'none' });
	        }
	      }
	    }
	  });
	};

	Item.prototype.destroy = function() {
	  this.css({
	    position: '',
	    left: '',
	    right: '',
	    top: '',
	    bottom: '',
	    transition: '',
	    transform: ''
	  });
	};

	return Item;

	}

	// -------------------------- transport -------------------------- //
	if (true) {
	  // CommonJS
	  module.exports = outlayerItemDefinition(
	    __webpack_require__(396),
	    __webpack_require__(397),
	    __webpack_require__(401)
	  );
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( [
	      'eventEmitter/EventEmitter',
	      'get-size/get-size',
	      'get-style-property/get-style-property'
	    ],
	    outlayerItemDefinition );
	} else {
	  // browser global
	  window.Outlayer = {};
	  window.Outlayer.Item = outlayerItemDefinition(
	    window.EventEmitter,
	    window.getSize,
	    window.getStyleProperty
	  );
	}

	})( typeof window !== 'undefined' ? window : null );


/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * getStyleProperty v1.0.4
	 * original by kangax
	 * http://perfectionkills.com/feature-testing-css-properties/
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true */
	/*global define: false, exports: false, module: false */

	( function( window ) {

	'use strict';

	var prefixes = 'Webkit Moz ms Ms O'.split(' ');
	var docElemStyle = document.documentElement.style;

	function getStyleProperty( propName ) {
	  if ( !propName ) {
	    return;
	  }

	  // test standard property first
	  if ( typeof docElemStyle[ propName ] === 'string' ) {
	    return propName;
	  }

	  // capitalize
	  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

	  // test vendor specific properties
	  var prefixed;
	  for ( var i=0, len = prefixes.length; i < len; i++ ) {
	    prefixed = prefixes[i] + propName;
	    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
	      return prefixed;
	    }
	  }
	}

	// transport
	if ( true ) {
	  // AMD
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return getStyleProperty;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ( typeof exports === 'object' ) {
	  // CommonJS for Component
	  module.exports = getStyleProperty;
	} else {
	  // browser global
	  window.getStyleProperty = getStyleProperty;
	}

	})( window );


/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Rect
	 * low-level utility class for basic geometry
	 */

	( function( window ) {

	"use strict";

	// -------------------------- Packery -------------------------- //

	// global namespace
	var Packery = window.Packery = function() {};

	function rectDefinition() {

	// -------------------------- Rect -------------------------- //

	function Rect( props ) {
	  // extend properties from defaults
	  for ( var prop in Rect.defaults ) {
	    this[ prop ] = Rect.defaults[ prop ];
	  }

	  for ( prop in props ) {
	    this[ prop ] = props[ prop ];
	  }

	}

	// make available
	Packery.Rect = Rect;

	Rect.defaults = {
	  x: 0,
	  y: 0,
	  width: 0,
	  height: 0
	};

	/**
	 * Determines whether or not this rectangle wholly encloses another rectangle or point.
	 * @param {Rect} rect
	 * @returns {Boolean}
	**/
	Rect.prototype.contains = function( rect ) {
	  // points don't have width or height
	  var otherWidth = rect.width || 0;
	  var otherHeight = rect.height || 0;
	  return this.x <= rect.x &&
	    this.y <= rect.y &&
	    this.x + this.width >= rect.x + otherWidth &&
	    this.y + this.height >= rect.y + otherHeight;
	};

	/**
	 * Determines whether or not the rectangle intersects with another.
	 * @param {Rect} rect
	 * @returns {Boolean}
	**/
	Rect.prototype.overlaps = function( rect ) {
	  var thisRight = this.x + this.width;
	  var thisBottom = this.y + this.height;
	  var rectRight = rect.x + rect.width;
	  var rectBottom = rect.y + rect.height;

	  // http://stackoverflow.com/a/306332
	  return this.x < rectRight &&
	    thisRight > rect.x &&
	    this.y < rectBottom &&
	    thisBottom > rect.y;
	};

	/**
	 * @param {Rect} rect - the overlapping rect
	 * @returns {Array} freeRects - rects representing the area around the rect
	**/
	Rect.prototype.getMaximalFreeRects = function( rect ) {

	  // if no intersection, return false
	  if ( !this.overlaps( rect ) ) {
	    return false;
	  }

	  var freeRects = [];
	  var freeRect;

	  var thisRight = this.x + this.width;
	  var thisBottom = this.y + this.height;
	  var rectRight = rect.x + rect.width;
	  var rectBottom = rect.y + rect.height;

	  // top
	  if ( this.y < rect.y ) {
	    freeRect = new Rect({
	      x: this.x,
	      y: this.y,
	      width: this.width,
	      height: rect.y - this.y
	    });
	    freeRects.push( freeRect );
	  }

	  // right
	  if ( thisRight > rectRight ) {
	    freeRect = new Rect({
	      x: rectRight,
	      y: this.y,
	      width: thisRight - rectRight,
	      height: this.height
	    });
	    freeRects.push( freeRect );
	  }

	  // bottom
	  if ( thisBottom > rectBottom ) {
	    freeRect = new Rect({
	      x: this.x,
	      y: rectBottom,
	      width: this.width,
	      height: thisBottom - rectBottom
	    });
	    freeRects.push( freeRect );
	  }

	  // left
	  if ( this.x < rect.x ) {
	    freeRect = new Rect({
	      x: this.x,
	      y: this.y,
	      width: rect.x - this.x,
	      height: this.height
	    });
	    freeRects.push( freeRect );
	  }

	  return freeRects;
	};

	Rect.prototype.canFit = function( rect ) {
	  return this.width >= rect.width && this.height >= rect.height;
	};

	return Rect;

	}

	// -------------------------- transport -------------------------- //
	if ( true ) {
	  // CommonJS
	  module.exports = rectDefinition();
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( rectDefinition );
	} else {
	  // browser global
	  window.Packery = window.Packery || {};
	  window.Packery.Rect = rectDefinition();
	}

	})( window );


/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Packer
	 * bin-packing algorithm
	 */

	( function( window ) {

	'use strict';

	// -------------------------- Packer -------------------------- //

	function packerDefinition( Rect ) {

	/**
	 * @param {Number} width
	 * @param {Number} height
	 * @param {String} sortDirection
	 *   topLeft for vertical, leftTop for horizontal
	 */
	function Packer( width, height, sortDirection ) {
	  this.width = width || 0;
	  this.height = height || 0;
	  this.sortDirection = sortDirection || 'downwardLeftToRight';

	  this.reset();
	}

	Packer.prototype.reset = function() {
	  this.spaces = [];
	  this.newSpaces = [];

	  var initialSpace = new Rect({
	    x: 0,
	    y: 0,
	    width: this.width,
	    height: this.height
	  });

	  this.spaces.push( initialSpace );
	  // set sorter
	  this.sorter = sorters[ this.sortDirection ] || sorters.downwardLeftToRight;
	};

	// change x and y of rect to fit with in Packer's available spaces
	Packer.prototype.pack = function( rect ) {
	  for ( var i=0, len = this.spaces.length; i < len; i++ ) {
	    var space = this.spaces[i];
	    if ( space.canFit( rect ) ) {
	      this.placeInSpace( rect, space );
	      break;
	    }
	  }
	};

	Packer.prototype.placeInSpace = function( rect, space ) {
	  // place rect in space
	  rect.x = space.x;
	  rect.y = space.y;

	  this.placed( rect );
	};

	// update spaces with placed rect
	Packer.prototype.placed = function( rect ) {
	  // update spaces
	  var revisedSpaces = [];
	  for ( var i=0, len = this.spaces.length; i < len; i++ ) {
	    var space = this.spaces[i];
	    var newSpaces = space.getMaximalFreeRects( rect );
	    // add either the original space or the new spaces to the revised spaces
	    if ( newSpaces ) {
	      revisedSpaces.push.apply( revisedSpaces, newSpaces );
	    } else {
	      revisedSpaces.push( space );
	    }
	  }

	  this.spaces = revisedSpaces;

	  this.mergeSortSpaces();
	};

	Packer.prototype.mergeSortSpaces = function() {
	  // remove redundant spaces
	  Packer.mergeRects( this.spaces );
	  this.spaces.sort( this.sorter );
	};

	// add a space back
	Packer.prototype.addSpace = function( rect ) {
	  this.spaces.push( rect );
	  this.mergeSortSpaces();
	};

	// -------------------------- utility functions -------------------------- //

	/**
	 * Remove redundant rectangle from array of rectangles
	 * @param {Array} rects: an array of Rects
	 * @returns {Array} rects: an array of Rects
	**/
	Packer.mergeRects = function( rects ) {
	  for ( var i=0, len = rects.length; i < len; i++ ) {
	    var rect = rects[i];
	    // skip over this rect if it was already removed
	    if ( !rect ) {
	      continue;
	    }
	    // clone rects we're testing, remove this rect
	    var compareRects = rects.slice(0);
	    // do not compare with self
	    compareRects.splice( i, 1 );
	    // compare this rect with others
	    var removedCount = 0;
	    for ( var j=0, jLen = compareRects.length; j < jLen; j++ ) {
	      var compareRect = compareRects[j];
	      // if this rect contains another,
	      // remove that rect from test collection
	      var indexAdjust = i > j ? 0 : 1;
	      if ( rect.contains( compareRect ) ) {
	        // console.log( 'current test rects:' + testRects.length, testRects );
	        // console.log( i, j, indexAdjust, rect, compareRect );
	        rects.splice( j + indexAdjust - removedCount, 1 );
	        removedCount++;
	      }
	    }
	  }

	  return rects;
	};


	// -------------------------- sorters -------------------------- //

	// functions for sorting rects in order
	var sorters = {
	  // top down, then left to right
	  downwardLeftToRight: function( a, b ) {
	    return a.y - b.y || a.x - b.x;
	  },
	  // left to right, then top down
	  rightwardTopToBottom: function( a, b ) {
	    return a.x - b.x || a.y - b.y;
	  }
	};


	// --------------------------  -------------------------- //

	return Packer;

	}

	// -------------------------- transport -------------------------- //
	if ( true ) {
	  // CommonJS
	  module.exports = packerDefinition(
	    __webpack_require__(402)
	  );
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( [ './rect' ], packerDefinition );
	} else {
	  // browser global
	  var Packery = window.Packery = window.Packery || {};
	  Packery.Packer = packerDefinition( Packery.Rect );
	}

	})( window );


/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Packery Item Element
	**/

	( function( window ) {

	'use strict';

	// -------------------------- Item -------------------------- //

	function itemDefinition( getStyleProperty, Outlayer, Rect ) {

	var transformProperty = getStyleProperty('transform');

	// sub-class Item
	var Item = function PackeryItem() {
	  Outlayer.Item.apply( this, arguments );
	};

	Item.prototype = new Outlayer.Item();

	var protoCreate = Item.prototype._create;
	Item.prototype._create = function() {
	  // call default _create logic
	  protoCreate.call( this );
	  this.rect = new Rect();
	  // rect used for placing, in drag or Packery.fit()
	  this.placeRect = new Rect();
	};

	// -------------------------- drag -------------------------- //

	Item.prototype.dragStart = function() {
	  this.getPosition();
	  this.removeTransitionStyles();
	  // remove transform property from transition
	  if ( this.isTransitioning && transformProperty ) {
	    this.element.style[ transformProperty ] = 'none';
	  }
	  this.getSize();
	  // create place rect, used for position when dragged then dropped
	  // or when positioning
	  this.isPlacing = true;
	  this.needsPositioning = false;
	  this.positionPlaceRect( this.position.x, this.position.y );
	  this.isTransitioning = false;
	  this.didDrag = false;
	};

	/**
	 * handle item when it is dragged
	 * @param {Number} x - horizontal position of dragged item
	 * @param {Number} y - vertical position of dragged item
	 */
	Item.prototype.dragMove = function( x, y ) {
	  this.didDrag = true;
	  var packerySize = this.layout.size;
	  x -= packerySize.paddingLeft;
	  y -= packerySize.paddingTop;
	  this.positionPlaceRect( x, y );
	};

	Item.prototype.dragStop = function() {
	  this.getPosition();
	  var isDiffX = this.position.x !== this.placeRect.x;
	  var isDiffY = this.position.y !== this.placeRect.y;
	  // set post-drag positioning flag
	  this.needsPositioning = isDiffX || isDiffY;
	  // reset flag
	  this.didDrag = false;
	};

	// -------------------------- placing -------------------------- //

	/**
	 * position a rect that will occupy space in the packer
	 * @param {Number} x
	 * @param {Number} y
	 * @param {Boolean} isMaxYContained
	 */
	Item.prototype.positionPlaceRect = function( x, y, isMaxYOpen ) {
	  this.placeRect.x = this.getPlaceRectCoord( x, true );
	  this.placeRect.y = this.getPlaceRectCoord( y, false, isMaxYOpen );
	};

	/**
	 * get x/y coordinate for place rect
	 * @param {Number} coord - x or y
	 * @param {Boolean} isX
	 * @param {Boolean} isMaxOpen - does not limit value to outer bound
	 * @returns {Number} coord - processed x or y
	 */
	Item.prototype.getPlaceRectCoord = function( coord, isX, isMaxOpen ) {
	  var measure = isX ? 'Width' : 'Height';
	  var size = this.size[ 'outer' + measure ];
	  var segment = this.layout[ isX ? 'columnWidth' : 'rowHeight' ];
	  var parentSize = this.layout.size[ 'inner' + measure ];

	  // additional parentSize calculations for Y
	  if ( !isX ) {
	    parentSize = Math.max( parentSize, this.layout.maxY );
	    // prevent gutter from bumping up height when non-vertical grid
	    if ( !this.layout.rowHeight ) {
	      parentSize -= this.layout.gutter;
	    }
	  }

	  var max;

	  if ( segment ) {
	    segment += this.layout.gutter;
	    // allow for last column to reach the edge
	    parentSize += isX ? this.layout.gutter : 0;
	    // snap to closest segment
	    coord = Math.round( coord / segment );
	    // contain to outer bound
	    // contain non-growing bound, allow growing bound to grow
	    var mathMethod;
	    if ( this.layout.options.isHorizontal ) {
	      mathMethod = !isX ? 'floor' : 'ceil';
	    } else {
	      mathMethod = isX ? 'floor' : 'ceil';
	    }
	    var maxSegments = Math[ mathMethod ]( parentSize / segment );
	    maxSegments -= Math.ceil( size / segment );
	    max = maxSegments;
	  } else {
	    max = parentSize - size;
	  }

	  coord = isMaxOpen ? coord : Math.min( coord, max );
	  coord *= segment || 1;

	  return Math.max( 0, coord );
	};

	Item.prototype.copyPlaceRectPosition = function() {
	  this.rect.x = this.placeRect.x;
	  this.rect.y = this.placeRect.y;
	};

	// -----  ----- //

	// remove element from DOM
	Item.prototype.removeElem = function() {
	  this.element.parentNode.removeChild( this.element );
	  // add space back to packer
	  this.layout.packer.addSpace( this.rect );
	  this.emitEvent( 'remove', [ this ] );
	};

	// -----  ----- //

	return Item;

	}

	// -------------------------- transport -------------------------- //
	if ( true ) {
	  // CommonJS
	  module.exports = itemDefinition(
	    __webpack_require__(405),
	    __webpack_require__(392),
	    __webpack_require__(402)
	  );
	} else if ( typeof define === 'function' && define.amd ) {
	  // AMD
	  define( [
	      'get-style-property/get-style-property',
	      'outlayer/outlayer',
	      './rect'
	    ],
	    itemDefinition );
	} else {
	  // browser global
	  window.Packery.Item = itemDefinition(
	    window.getStyleProperty,
	    window.Outlayer,
	    window.Packery.Rect
	  );
	}

	})( window );


/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * getStyleProperty v1.0.4
	 * original by kangax
	 * http://perfectionkills.com/feature-testing-css-properties/
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true */
	/*global define: false, exports: false, module: false */

	( function( window ) {

	'use strict';

	var prefixes = 'Webkit Moz ms Ms O'.split(' ');
	var docElemStyle = document.documentElement.style;

	function getStyleProperty( propName ) {
	  if ( !propName ) {
	    return;
	  }

	  // test standard property first
	  if ( typeof docElemStyle[ propName ] === 'string' ) {
	    return propName;
	  }

	  // capitalize
	  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

	  // test vendor specific properties
	  var prefixed;
	  for ( var i=0, len = prefixes.length; i < len; i++ ) {
	    prefixed = prefixes[i] + propName;
	    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
	      return prefixed;
	    }
	  }
	}

	// transport
	if ( true ) {
	  // AMD
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return getStyleProperty;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ( typeof exports === 'object' ) {
	  // CommonJS for Component
	  module.exports = getStyleProperty;
	} else {
	  // browser global
	  window.getStyleProperty = getStyleProperty;
	}

	})( window );


/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * imagesLoaded v3.1.8
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */

	( function( window, factory ) { 'use strict';
	  // universal module definition

	  /*global define: false, module: false, require: false */

	  if ( true ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      __webpack_require__(407),
	      __webpack_require__(408)
	    );
	  } else if ( typeof define === 'function' && define.amd ) {
	    // AMD
	    define( [
	      'eventEmitter/EventEmitter',
	      'eventie/eventie'
	    ], function( EventEmitter, eventie ) {
	      return factory( window, EventEmitter, eventie );
	    });
	  } else {
	    // browser global
	    window.imagesLoaded = factory(
	      window,
	      window.EventEmitter,
	      window.eventie
	    );
	  }

	})( window,

	// --------------------------  factory -------------------------- //

	function factory( window, EventEmitter, eventie ) {

	'use strict';

	var $ = window.jQuery;
	var console = window.console;
	var hasConsole = typeof console !== 'undefined';

	// -------------------------- helpers -------------------------- //

	// extend objects
	function extend( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	}

	var objToString = Object.prototype.toString;
	function isArray( obj ) {
	  return objToString.call( obj ) === '[object Array]';
	}

	// turn element or nodeList into an array
	function makeArray( obj ) {
	  var ary = [];
	  if ( isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( typeof obj.length === 'number' ) {
	    // convert nodeList to array
	    for ( var i=0, len = obj.length; i < len; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	}

	  // -------------------------- imagesLoaded -------------------------- //

	  /**
	   * @param {Array, Element, NodeList, String} elem
	   * @param {Object or Function} options - if function, use as callback
	   * @param {Function} onAlways - callback function
	   */
	  function ImagesLoaded( elem, options, onAlways ) {
	    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
	    if ( !( this instanceof ImagesLoaded ) ) {
	      return new ImagesLoaded( elem, options );
	    }
	    // use elem as selector string
	    if ( typeof elem === 'string' ) {
	      elem = document.querySelectorAll( elem );
	    }

	    this.elements = makeArray( elem );
	    this.options = extend( {}, this.options );

	    if ( typeof options === 'function' ) {
	      onAlways = options;
	    } else {
	      extend( this.options, options );
	    }

	    if ( onAlways ) {
	      this.on( 'always', onAlways );
	    }

	    this.getImages();

	    if ( $ ) {
	      // add jQuery Deferred object
	      this.jqDeferred = new $.Deferred();
	    }

	    // HACK check async to allow time to bind listeners
	    var _this = this;
	    setTimeout( function() {
	      _this.check();
	    });
	  }

	  ImagesLoaded.prototype = new EventEmitter();

	  ImagesLoaded.prototype.options = {};

	  ImagesLoaded.prototype.getImages = function() {
	    this.images = [];

	    // filter & find items if we have an item selector
	    for ( var i=0, len = this.elements.length; i < len; i++ ) {
	      var elem = this.elements[i];
	      // filter siblings
	      if ( elem.nodeName === 'IMG' ) {
	        this.addImage( elem );
	      }
	      // find children
	      // no non-element nodes, #143
	      var nodeType = elem.nodeType;
	      if ( !nodeType || !( nodeType === 1 || nodeType === 9 || nodeType === 11 ) ) {
	        continue;
	      }
	      var childElems = elem.querySelectorAll('img');
	      // concat childElems to filterFound array
	      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
	        var img = childElems[j];
	        this.addImage( img );
	      }
	    }
	  };

	  /**
	   * @param {Image} img
	   */
	  ImagesLoaded.prototype.addImage = function( img ) {
	    var loadingImage = new LoadingImage( img );
	    this.images.push( loadingImage );
	  };

	  ImagesLoaded.prototype.check = function() {
	    var _this = this;
	    var checkedCount = 0;
	    var length = this.images.length;
	    this.hasAnyBroken = false;
	    // complete if no images
	    if ( !length ) {
	      this.complete();
	      return;
	    }

	    function onConfirm( image, message ) {
	      if ( _this.options.debug && hasConsole ) {
	        console.log( 'confirm', image, message );
	      }

	      _this.progress( image );
	      checkedCount++;
	      if ( checkedCount === length ) {
	        _this.complete();
	      }
	      return true; // bind once
	    }

	    for ( var i=0; i < length; i++ ) {
	      var loadingImage = this.images[i];
	      loadingImage.on( 'confirm', onConfirm );
	      loadingImage.check();
	    }
	  };

	  ImagesLoaded.prototype.progress = function( image ) {
	    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
	    // HACK - Chrome triggers event before object properties have changed. #83
	    var _this = this;
	    setTimeout( function() {
	      _this.emit( 'progress', _this, image );
	      if ( _this.jqDeferred && _this.jqDeferred.notify ) {
	        _this.jqDeferred.notify( _this, image );
	      }
	    });
	  };

	  ImagesLoaded.prototype.complete = function() {
	    var eventName = this.hasAnyBroken ? 'fail' : 'done';
	    this.isComplete = true;
	    var _this = this;
	    // HACK - another setTimeout so that confirm happens after progress
	    setTimeout( function() {
	      _this.emit( eventName, _this );
	      _this.emit( 'always', _this );
	      if ( _this.jqDeferred ) {
	        var jqMethod = _this.hasAnyBroken ? 'reject' : 'resolve';
	        _this.jqDeferred[ jqMethod ]( _this );
	      }
	    });
	  };

	  // -------------------------- jquery -------------------------- //

	  if ( $ ) {
	    $.fn.imagesLoaded = function( options, callback ) {
	      var instance = new ImagesLoaded( this, options, callback );
	      return instance.jqDeferred.promise( $(this) );
	    };
	  }


	  // --------------------------  -------------------------- //

	  function LoadingImage( img ) {
	    this.img = img;
	  }

	  LoadingImage.prototype = new EventEmitter();

	  LoadingImage.prototype.check = function() {
	    // first check cached any previous images that have same src
	    var resource = cache[ this.img.src ] || new Resource( this.img.src );
	    if ( resource.isConfirmed ) {
	      this.confirm( resource.isLoaded, 'cached was confirmed' );
	      return;
	    }

	    // If complete is true and browser supports natural sizes,
	    // try to check for image status manually.
	    if ( this.img.complete && this.img.naturalWidth !== undefined ) {
	      // report based on naturalWidth
	      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
	      return;
	    }

	    // If none of the checks above matched, simulate loading on detached element.
	    var _this = this;
	    resource.on( 'confirm', function( resrc, message ) {
	      _this.confirm( resrc.isLoaded, message );
	      return true;
	    });

	    resource.check();
	  };

	  LoadingImage.prototype.confirm = function( isLoaded, message ) {
	    this.isLoaded = isLoaded;
	    this.emit( 'confirm', this, message );
	  };

	  // -------------------------- Resource -------------------------- //

	  // Resource checks each src, only once
	  // separate class from LoadingImage to prevent memory leaks. See #115

	  var cache = {};

	  function Resource( src ) {
	    this.src = src;
	    // add to cache
	    cache[ src ] = this;
	  }

	  Resource.prototype = new EventEmitter();

	  Resource.prototype.check = function() {
	    // only trigger checking once
	    if ( this.isChecked ) {
	      return;
	    }
	    // simulate loading on detached element
	    var proxyImage = new Image();
	    eventie.bind( proxyImage, 'load', this );
	    eventie.bind( proxyImage, 'error', this );
	    proxyImage.src = this.src;
	    // set flag
	    this.isChecked = true;
	  };

	  // ----- events ----- //

	  // trigger specified handler for event type
	  Resource.prototype.handleEvent = function( event ) {
	    var method = 'on' + event.type;
	    if ( this[ method ] ) {
	      this[ method ]( event );
	    }
	  };

	  Resource.prototype.onload = function( event ) {
	    this.confirm( true, 'onload' );
	    this.unbindProxyEvents( event );
	  };

	  Resource.prototype.onerror = function( event ) {
	    this.confirm( false, 'onerror' );
	    this.unbindProxyEvents( event );
	  };

	  // ----- confirm ----- //

	  Resource.prototype.confirm = function( isLoaded, message ) {
	    this.isConfirmed = true;
	    this.isLoaded = isLoaded;
	    this.emit( 'confirm', this, message );
	  };

	  Resource.prototype.unbindProxyEvents = function( event ) {
	    eventie.unbind( event.target, 'load', this );
	    eventie.unbind( event.target, 'error', this );
	  };

	  // -----  ----- //

	  return ImagesLoaded;

	});


/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * EventEmitter v4.2.11 - git.io/ee
	 * Unlicense - http://unlicense.org/
	 * Oliver Caldwell - http://oli.me.uk/
	 * @preserve
	 */

	;(function () {
	    'use strict';

	    /**
	     * Class for managing events.
	     * Can be extended to provide event functionality in other classes.
	     *
	     * @class EventEmitter Manages event registering and emitting.
	     */
	    function EventEmitter() {}

	    // Shortcuts to improve speed and size
	    var proto = EventEmitter.prototype;
	    var exports = this;
	    var originalGlobalValue = exports.EventEmitter;

	    /**
	     * Finds the index of the listener for the event in its storage array.
	     *
	     * @param {Function[]} listeners Array of listeners to search through.
	     * @param {Function} listener Method to look for.
	     * @return {Number} Index of the specified listener, -1 if not found
	     * @api private
	     */
	    function indexOfListener(listeners, listener) {
	        var i = listeners.length;
	        while (i--) {
	            if (listeners[i].listener === listener) {
	                return i;
	            }
	        }

	        return -1;
	    }

	    /**
	     * Alias a method while keeping the context correct, to allow for overwriting of target method.
	     *
	     * @param {String} name The name of the target method.
	     * @return {Function} The aliased method
	     * @api private
	     */
	    function alias(name) {
	        return function aliasClosure() {
	            return this[name].apply(this, arguments);
	        };
	    }

	    /**
	     * Returns the listener array for the specified event.
	     * Will initialise the event object and listener arrays if required.
	     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	     * Each property in the object response is an array of listener functions.
	     *
	     * @param {String|RegExp} evt Name of the event to return the listeners from.
	     * @return {Function[]|Object} All listener functions for the event.
	     */
	    proto.getListeners = function getListeners(evt) {
	        var events = this._getEvents();
	        var response;
	        var key;

	        // Return a concatenated array of all matching events if
	        // the selector is a regular expression.
	        if (evt instanceof RegExp) {
	            response = {};
	            for (key in events) {
	                if (events.hasOwnProperty(key) && evt.test(key)) {
	                    response[key] = events[key];
	                }
	            }
	        }
	        else {
	            response = events[evt] || (events[evt] = []);
	        }

	        return response;
	    };

	    /**
	     * Takes a list of listener objects and flattens it into a list of listener functions.
	     *
	     * @param {Object[]} listeners Raw listener objects.
	     * @return {Function[]} Just the listener functions.
	     */
	    proto.flattenListeners = function flattenListeners(listeners) {
	        var flatListeners = [];
	        var i;

	        for (i = 0; i < listeners.length; i += 1) {
	            flatListeners.push(listeners[i].listener);
	        }

	        return flatListeners;
	    };

	    /**
	     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	     *
	     * @param {String|RegExp} evt Name of the event to return the listeners from.
	     * @return {Object} All listener functions for an event in an object.
	     */
	    proto.getListenersAsObject = function getListenersAsObject(evt) {
	        var listeners = this.getListeners(evt);
	        var response;

	        if (listeners instanceof Array) {
	            response = {};
	            response[evt] = listeners;
	        }

	        return response || listeners;
	    };

	    /**
	     * Adds a listener function to the specified event.
	     * The listener will not be added if it is a duplicate.
	     * If the listener returns true then it will be removed after it is called.
	     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to attach the listener to.
	     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addListener = function addListener(evt, listener) {
	        var listeners = this.getListenersAsObject(evt);
	        var listenerIsWrapped = typeof listener === 'object';
	        var key;

	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
	                listeners[key].push(listenerIsWrapped ? listener : {
	                    listener: listener,
	                    once: false
	                });
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of addListener
	     */
	    proto.on = alias('addListener');

	    /**
	     * Semi-alias of addListener. It will add a listener that will be
	     * automatically removed after its first execution.
	     *
	     * @param {String|RegExp} evt Name of the event to attach the listener to.
	     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addOnceListener = function addOnceListener(evt, listener) {
	        return this.addListener(evt, {
	            listener: listener,
	            once: true
	        });
	    };

	    /**
	     * Alias of addOnceListener.
	     */
	    proto.once = alias('addOnceListener');

	    /**
	     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	     * You need to tell it what event names should be matched by a regex.
	     *
	     * @param {String} evt Name of the event to create.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.defineEvent = function defineEvent(evt) {
	        this.getListeners(evt);
	        return this;
	    };

	    /**
	     * Uses defineEvent to define multiple events.
	     *
	     * @param {String[]} evts An array of event names to define.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.defineEvents = function defineEvents(evts) {
	        for (var i = 0; i < evts.length; i += 1) {
	            this.defineEvent(evts[i]);
	        }
	        return this;
	    };

	    /**
	     * Removes a listener function from the specified event.
	     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to remove the listener from.
	     * @param {Function} listener Method to remove from the event.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeListener = function removeListener(evt, listener) {
	        var listeners = this.getListenersAsObject(evt);
	        var index;
	        var key;

	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key)) {
	                index = indexOfListener(listeners[key], listener);

	                if (index !== -1) {
	                    listeners[key].splice(index, 1);
	                }
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of removeListener
	     */
	    proto.off = alias('removeListener');

	    /**
	     * Adds listeners in bulk using the manipulateListeners method.
	     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	     * You can also pass it a regular expression to add the array of listeners to all events that match it.
	     * Yeah, this function does quite a bit. That's probably a bad thing.
	     *
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to add.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.addListeners = function addListeners(evt, listeners) {
	        // Pass through to manipulateListeners
	        return this.manipulateListeners(false, evt, listeners);
	    };

	    /**
	     * Removes listeners in bulk using the manipulateListeners method.
	     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	     * You can also pass it an event name and an array of listeners to be removed.
	     * You can also pass it a regular expression to remove the listeners from all events that match it.
	     *
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to remove.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeListeners = function removeListeners(evt, listeners) {
	        // Pass through to manipulateListeners
	        return this.manipulateListeners(true, evt, listeners);
	    };

	    /**
	     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	     * The first argument will determine if the listeners are removed (true) or added (false).
	     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	     * You can also pass it an event name and an array of listeners to be added/removed.
	     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	     *
	     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
	        var i;
	        var value;
	        var single = remove ? this.removeListener : this.addListener;
	        var multiple = remove ? this.removeListeners : this.addListeners;

	        // If evt is an object then pass each of its properties to this method
	        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
	            for (i in evt) {
	                if (evt.hasOwnProperty(i) && (value = evt[i])) {
	                    // Pass the single listener straight through to the singular method
	                    if (typeof value === 'function') {
	                        single.call(this, i, value);
	                    }
	                    else {
	                        // Otherwise pass back to the multiple function
	                        multiple.call(this, i, value);
	                    }
	                }
	            }
	        }
	        else {
	            // So evt must be a string
	            // And listeners must be an array of listeners
	            // Loop over it and pass each one to the multiple method
	            i = listeners.length;
	            while (i--) {
	                single.call(this, evt, listeners[i]);
	            }
	        }

	        return this;
	    };

	    /**
	     * Removes all listeners from a specified event.
	     * If you do not specify an event then all listeners will be removed.
	     * That means every event will be emptied.
	     * You can also pass a regex to remove all events that match it.
	     *
	     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.removeEvent = function removeEvent(evt) {
	        var type = typeof evt;
	        var events = this._getEvents();
	        var key;

	        // Remove different things depending on the state of evt
	        if (type === 'string') {
	            // Remove all listeners for the specified event
	            delete events[evt];
	        }
	        else if (evt instanceof RegExp) {
	            // Remove all events matching the regex.
	            for (key in events) {
	                if (events.hasOwnProperty(key) && evt.test(key)) {
	                    delete events[key];
	                }
	            }
	        }
	        else {
	            // Remove all listeners in all events
	            delete this._events;
	        }

	        return this;
	    };

	    /**
	     * Alias of removeEvent.
	     *
	     * Added to mirror the node API.
	     */
	    proto.removeAllListeners = alias('removeEvent');

	    /**
	     * Emits an event of your choice.
	     * When emitted, every listener attached to that event will be executed.
	     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	     * So they will not arrive within the array on the other side, they will be separate.
	     * You can also pass a regular expression to emit to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	     * @param {Array} [args] Optional array of arguments to be passed to each listener.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.emitEvent = function emitEvent(evt, args) {
	        var listeners = this.getListenersAsObject(evt);
	        var listener;
	        var i;
	        var key;
	        var response;

	        for (key in listeners) {
	            if (listeners.hasOwnProperty(key)) {
	                i = listeners[key].length;

	                while (i--) {
	                    // If the listener returns true then it shall be removed from the event
	                    // The function is executed either with a basic call or an apply if there is an args array
	                    listener = listeners[key][i];

	                    if (listener.once === true) {
	                        this.removeListener(evt, listener.listener);
	                    }

	                    response = listener.listener.apply(this, args || []);

	                    if (response === this._getOnceReturnValue()) {
	                        this.removeListener(evt, listener.listener);
	                    }
	                }
	            }
	        }

	        return this;
	    };

	    /**
	     * Alias of emitEvent
	     */
	    proto.trigger = alias('emitEvent');

	    /**
	     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	     *
	     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	     * @param {...*} Optional additional arguments to be passed to each listener.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.emit = function emit(evt) {
	        var args = Array.prototype.slice.call(arguments, 1);
	        return this.emitEvent(evt, args);
	    };

	    /**
	     * Sets the current value to check against when executing listeners. If a
	     * listeners return value matches the one set here then it will be removed
	     * after execution. This value defaults to true.
	     *
	     * @param {*} value The new value to check for when executing listeners.
	     * @return {Object} Current instance of EventEmitter for chaining.
	     */
	    proto.setOnceReturnValue = function setOnceReturnValue(value) {
	        this._onceReturnValue = value;
	        return this;
	    };

	    /**
	     * Fetches the current value to check against when executing listeners. If
	     * the listeners return value matches this one then it should be removed
	     * automatically. It will return true by default.
	     *
	     * @return {*|Boolean} The current value to check for or the default, true.
	     * @api private
	     */
	    proto._getOnceReturnValue = function _getOnceReturnValue() {
	        if (this.hasOwnProperty('_onceReturnValue')) {
	            return this._onceReturnValue;
	        }
	        else {
	            return true;
	        }
	    };

	    /**
	     * Fetches the events object and creates one if required.
	     *
	     * @return {Object} The events storage object.
	     * @api private
	     */
	    proto._getEvents = function _getEvents() {
	        return this._events || (this._events = {});
	    };

	    /**
	     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	     *
	     * @return {Function} Non conflicting EventEmitter class.
	     */
	    EventEmitter.noConflict = function noConflict() {
	        exports.EventEmitter = originalGlobalValue;
	        return EventEmitter;
	    };

	    // Expose the class either via AMD, CommonJS or the global object
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return EventEmitter;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    else if (typeof module === 'object' && module.exports){
	        module.exports = EventEmitter;
	    }
	    else {
	        exports.EventEmitter = EventEmitter;
	    }
	}.call(this));


/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * eventie v1.0.6
	 * event binding helper
	 *   eventie.bind( elem, 'click', myFn )
	 *   eventie.unbind( elem, 'click', myFn )
	 * MIT license
	 */

	/*jshint browser: true, undef: true, unused: true */
	/*global define: false, module: false */

	( function( window ) {

	'use strict';

	var docElem = document.documentElement;

	var bind = function() {};

	function getIEEvent( obj ) {
	  var event = window.event;
	  // add event.target
	  event.target = event.target || event.srcElement || obj;
	  return event;
	}

	if ( docElem.addEventListener ) {
	  bind = function( obj, type, fn ) {
	    obj.addEventListener( type, fn, false );
	  };
	} else if ( docElem.attachEvent ) {
	  bind = function( obj, type, fn ) {
	    obj[ type + fn ] = fn.handleEvent ?
	      function() {
	        var event = getIEEvent( obj );
	        fn.handleEvent.call( fn, event );
	      } :
	      function() {
	        var event = getIEEvent( obj );
	        fn.call( obj, event );
	      };
	    obj.attachEvent( "on" + type, obj[ type + fn ] );
	  };
	}

	var unbind = function() {};

	if ( docElem.removeEventListener ) {
	  unbind = function( obj, type, fn ) {
	    obj.removeEventListener( type, fn, false );
	  };
	} else if ( docElem.detachEvent ) {
	  unbind = function( obj, type, fn ) {
	    obj.detachEvent( "on" + type, obj[ type + fn ] );
	    try {
	      delete obj[ type + fn ];
	    } catch ( err ) {
	      // can't delete window object properties
	      obj[ type + fn ] = undefined;
	    }
	  };
	}

	var eventie = {
	  bind: bind,
	  unbind: unbind
	};

	// ----- module definition ----- //

	if ( true ) {
	  // AMD
	  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (eventie), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ( typeof exports === 'object' ) {
	  // CommonJS
	  module.exports = eventie;
	} else {
	  // browser global
	  window.eventie = eventie;
	}

	})( window );


/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _storeAuthStore = __webpack_require__(343);

	var _storeAuthStore2 = _interopRequireDefault(_storeAuthStore);

	var _storeBoxStore = __webpack_require__(338);

	var _storeBoxStore2 = _interopRequireDefault(_storeBoxStore);

	var _storeCartStore = __webpack_require__(348);

	var _storeCartStore2 = _interopRequireDefault(_storeCartStore);

	var _actionsAuthActions = __webpack_require__(344);

	var _actionsAuthActions2 = _interopRequireDefault(_actionsAuthActions);

	var _actionsBoxActions = __webpack_require__(314);

	var _actionsBoxActions2 = _interopRequireDefault(_actionsBoxActions);

	/**
	 * @Component
	 */

	var _altAltContainer = __webpack_require__(307);

	var _altAltContainer2 = _interopRequireDefault(_altAltContainer);

	var _NavbarNavbar = __webpack_require__(350);

	var _NavbarNavbar2 = _interopRequireDefault(_NavbarNavbar);

	var _NavbarNavbarBox = __webpack_require__(410);

	var _NavbarNavbarBox2 = _interopRequireDefault(_NavbarNavbarBox);

	exports['default'] = _reactAddons2['default'].createClass({
	  displayName: 'Box',

	  contextTypes: {
	    router: _reactAddons2['default'].PropTypes.instanceOf(_reactRouter2['default']).isRequired
	  },

	  getInitialState: function getInitialState() {
	    return {
	      auth: _storeAuthStore2['default'].getState().auth,
	      info: _storeBoxStore2['default'].getState().info,
	      count: _storeCartStore2['default'].getCountCart()
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    _storeAuthStore2['default'].listen(this._onChangeAuthStore);
	    _storeBoxStore2['default'].listen(this._onChangeBoxStore);
	    _storeCartStore2['default'].listen(this._onChangeCartStore);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    _storeAuthStore2['default'].unlisten(this._onChangeAuthStore);
	    _storeBoxStore2['default'].unlisten(this._onChangeBoxStore);
	    _storeCartStore2['default'].unlisten(this._onChangeCartStore);
	  },

	  _onChangeAuthStore: function _onChangeAuthStore(state) {
	    this.setState({
	      auth: state.auth
	    });
	  },

	  _onChangeBoxStore: function _onChangeBoxStore(state) {
	    this.setState({
	      info: state.info
	    });
	  },

	  _onChangeCartStore: function _onChangeCartStore(state) {
	    this.setState({
	      count: _storeCartStore2['default'].getCountCart()
	    });
	  },

	  render: function render() {
	    return _reactAddons2['default'].createElement(
	      'div',
	      { className: 'header-product' },
	      _reactAddons2['default'].createElement(_NavbarNavbar2['default'], {
	        count: this.state.count,
	        AuthActions: _actionsAuthActions2['default'],
	        auth: this.state.auth }),
	      _reactAddons2['default'].createElement(_NavbarNavbarBox2['default'], {
	        info: this.state.info,
	        auth: this.state.auth,
	        handleBoxLogin: this.props.handleBoxLogin,
	        BoxActions: _actionsBoxActions2['default'] })
	    );
	  }

	});
	module.exports = exports['default'];

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	exports['default'] = _reactAddons2['default'].createClass({
	  displayName: 'NavbarBox',

	  propTypes: {
	    name: _reactAddons2['default'].PropTypes.string,
	    likesCount: _reactAddons2['default'].PropTypes.number
	  },

	  getInitialState: function getInitialState() {
	    return {
	      hideHeader: false
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    window.addEventListener('scroll', this.handleScroll);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	  },

	  handleScroll: function handleScroll(e) {
	    var scrollTop = window.scrollY;
	    var hideHeader = scrollTop >= 50;
	    this.setState({
	      hideHeader: hideHeader
	    });
	  },

	  render: function render() {
	    var classesNavbar = (0, _classnames2['default'])({
	      "navbar": true,
	      "navbar-default": true,
	      "navbar-product": true,
	      "navbar-static-top": true,
	      "navbar-fixed-top": this.state.hideHeader,
	      "position-top": !this.state.hideHeader
	    }),
	        type = null;

	    switch (this.props.info.get('type')) {
	      case "product":
	        type = "Sản phẩm";
	        break;
	      case "article":
	        type = "Bài viết";
	        break;
	      case "photo":
	        type = "Ảnh";
	        break;
	    }

	    return _reactAddons2['default'].createElement(
	      'nav',
	      { className: classesNavbar },
	      _reactAddons2['default'].createElement(
	        'div',
	        { className: 'infoListProduct text-center' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'btn-group' },
	          _reactAddons2['default'].createElement(
	            'button',
	            { onClick: this.handleLikeBox, type: 'button', className: 'btn btn-default navbar-btn' },
	            _reactAddons2['default'].createElement('i', { className: 'fa fa-heart gray' })
	          ),
	          _reactAddons2['default'].createElement(
	            'button',
	            { type: 'button', className: 'btn btn-default count-like navbar-btn' },
	            _reactAddons2['default'].createElement(
	              'span',
	              null,
	              this.props.info.get('likesCount')
	            )
	          )
	        ),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'nameinfoListProduct' },
	          this.props.info.get('name')
	        ),
	        _reactAddons2['default'].createElement(
	          'span',
	          { className: 'countListProduct' },
	          this.props.info.get('postsCount'),
	          ' ',
	          type
	        )
	      )
	    );
	  },

	  boxLogin: function boxLogin(cb) {
	    if (!this.props.auth.get('access_token')) {
	      this.props.handleBoxLogin();
	    } else {
	      cb();
	    }
	  },

	  handleLikeBox: function handleLikeBox() {
	    var _this = this;

	    var self = this;
	    this.boxLogin(function () {
	      var itemID = _this.props.info.get('id'),
	          token = _this.props.auth.get('access_token');

	      // actions like box
	      self.props.BoxActions.like({ itemID: itemID, token: token });
	    });
	  }

	});
	module.exports = exports['default'];

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	exports['default'] = _reactAddons2['default'].createClass({
	  displayName: 'BoxItem',

	  propTypes: {},

	  render: function render() {
	    var img_url = "/img/404.jpg";
	    var price = this.props.price !== null ? this.props.price.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '0';

	    if (this.props.images) {
	      var url = this.props.images[0];
	      img_url = url.replace(/image\//gi, 'image/230x/');
	    }

	    return _reactAddons2['default'].createElement(
	      'div',
	      { onClick: this.handleClick, className: 'col-xs-6 col-sm-4 col-md-3 col-lg-3' },
	      _reactAddons2['default'].createElement(
	        'div',
	        { className: 'thumbnail' },
	        _reactAddons2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/product/' + this.props.id },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'imgWrapper' },
	            _reactAddons2['default'].createElement('img', { className: 'img-rounded', 'data-holder-rendered': 'true', src: img_url, alt: 'images' })
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'infoSanpham' },
	            _reactAddons2['default'].createElement(
	              'span',
	              { className: 'titleSanpham' },
	              this.props.code
	            ),
	            _reactAddons2['default'].createElement(
	              'span',
	              { className: 'price' },
	              _reactAddons2['default'].createElement(
	                'span',
	                { className: 'price-sale' },
	                price,
	                ' VNĐ'
	              )
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'infoBox' },
	            _reactAddons2['default'].createElement(
	              'span',
	              { className: 'nameBox' },
	              this.props.boxName
	            )
	          )
	        )
	      )
	    );
	  },
	  handleClick: function handleClick() {
	    this.props.onClick(this.props.data);
	  }
	});
	module.exports = exports['default'];
	/*<span className="price-list">153.000 VNĐ</span>*/

/***/ },
/* 412 */
/***/ function(module, exports) {

	function topPosition(domElt) {
	  if (!domElt) {
	    return 0;
	  }
	  return domElt.offsetTop + topPosition(domElt.offsetParent);
	}

	module.exports = function (React) {
	  if (React.addons && React.addons.InfiniteScroll) {
	    return React.addons.InfiniteScroll;
	  }
	  React.addons = React.addons || {};
	  var InfiniteScroll = React.addons.InfiniteScroll = React.createClass({
	    getDefaultProps: function () {
	      return {
	        pageStart: 0,
	        hasMore: false,
	        loadMore: function () {},
	        threshold: 250
	      };
	    },
	    componentDidMount: function () {
	      this.pageLoaded = this.props.pageStart;
	      this.attachScrollListener();
	    },
	    componentDidUpdate: function () {
	      this.attachScrollListener();
	    },
	    render: function () {
	      var props = this.props;
	      return React.DOM.div(null, props.children, props.hasMore && (props.loader || InfiniteScroll._defaultLoader));
	    },
	    scrollListener: function () {
	      var el = this.getDOMNode();
	      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	      if (topPosition(el) + el.offsetHeight - scrollTop - window.innerHeight < Number(this.props.threshold)) {
	        this.detachScrollListener();
	        // call loadMore after detachScrollListener to allow
	        // for non-async loadMore functions
	        this.props.loadMore(this.pageLoaded += 1);
	      }
	    },
	    attachScrollListener: function () {
	      if (!this.props.hasMore) {
	        return;
	      }
	      window.addEventListener('scroll', this.scrollListener);
	      window.addEventListener('resize', this.scrollListener);
	      this.scrollListener();
	    },
	    detachScrollListener: function () {
	      window.removeEventListener('scroll', this.scrollListener);
	      window.removeEventListener('resize', this.scrollListener);
	    },
	    componentWillUnmount: function () {
	      this.detachScrollListener();
	    }
	  });
	  InfiniteScroll.setDefaultLoader = function (loader) {
	    InfiniteScroll._defaultLoader = loader;
	  };
	  return InfiniteScroll;
	};

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _regeneratorRuntime = __webpack_require__(258)['default'];

	var _Promise = __webpack_require__(288)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _decorators = __webpack_require__(311);

	var _actionsCityActions = __webpack_require__(414);

	var _actionsCityActions2 = _interopRequireDefault(_actionsCityActions);

	/**
	 * @Component
	 */

	var _componentsHeader = __webpack_require__(415);

	var _componentsHeader2 = _interopRequireDefault(_componentsHeader);

	var _componentsFormBoxSignIn = __webpack_require__(416);

	var _componentsFormBoxSignIn2 = _interopRequireDefault(_componentsFormBoxSignIn);

	var _componentsFormOrderTest = __webpack_require__(417);

	var _componentsFormOrderTest2 = _interopRequireDefault(_componentsFormOrderTest);

	var Application = (function (_React$Component) {
	  _inherits(Application, _React$Component);

	  function Application(props) {
	    var _this = this;

	    _classCallCheck(this, _Application);

	    _get(Object.getPrototypeOf(_Application.prototype), 'constructor', this).call(this, props);

	    this.renderBody = function () {
	      if (_this.props.location.pathname === "/cart") {
	        return _reactAddons2['default'].createElement(_componentsFormOrderTest2['default'], {
	          handleBoxLogin: _this.handleBoxLogin });
	      }

	      if (_this.props.location.pathname !== "/cart") {
	        return _this.props.children;
	      }
	      return _reactAddons2['default'].createElement('div', null);
	    };

	    this.renderBoxLogin = function () {
	      if (_this.state.boxLogin) {
	        return _reactAddons2['default'].createElement(_componentsFormBoxSignIn2['default'], { hideBoxLogin: _this.hideBoxLogin, location: _this.props.location });
	      }
	    };

	    this.handleBoxLogin = function () {
	      _this.setState({
	        boxLogin: true
	      });
	    };

	    this.hideBoxLogin = function () {
	      _this.setState({
	        boxLogin: false
	      });
	    };

	    this.state = {
	      boxLogin: false,
	      current: 1
	    };
	  }

	  _createClass(Application, [{
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        'div',
	        null,
	        _reactAddons2['default'].createElement(_componentsHeader2['default'], null),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'row' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'col-md-12 col-lg-12' },
	              this.renderBody()
	            )
	          )
	        ),
	        this.renderBoxLogin()
	      );
	    }
	  }]);

	  var _Application = Application;
	  Application = (0, _decorators.prepareRoute)(function callee$1$0(_ref) {
	    var params = _ref.params;
	    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
	      while (1) switch (context$2$0.prev = context$2$0.next) {
	        case 0:
	          context$2$0.next = 2;
	          return _regeneratorRuntime.awrap(_Promise.all([_actionsCityActions2['default'].getCity()]));

	        case 2:
	          return context$2$0.abrupt('return', context$2$0.sent);

	        case 3:
	        case 'end':
	          return context$2$0.stop();
	      }
	    }, null, this);
	  })(Application) || Application;
	  return Application;
	})(_reactAddons2['default'].Component);

	exports['default'] = Application;
	;
	module.exports = exports['default'];

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _regeneratorRuntime = __webpack_require__(258)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _axios = __webpack_require__(315);

	var _axios2 = _interopRequireDefault(_axios);

	var _configSample = __webpack_require__(334);

	var CityActions = (function () {
	  function CityActions() {
	    _classCallCheck(this, CityActions);
	  }

	  _createClass(CityActions, [{
	    key: 'getCity',
	    value: function getCity() {
	      var self;
	      return _regeneratorRuntime.async(function getCity$(context$2$0) {
	        while (1) switch (context$2$0.prev = context$2$0.next) {
	          case 0:
	            self = this;
	            context$2$0.next = 3;
	            return _regeneratorRuntime.awrap(_axios2['default'].get(_configSample.Api_URL + '/city').then(function (res) {
	              self.dispatch(res.data);
	            })['catch'](function (res) {
	              self.actions.getCityFailed(res.data);
	            }));

	          case 3:
	          case 'end':
	            return context$2$0.stop();
	        }
	      }, null, this);
	    }

	    /**
	     * tìm quận huyện theo tình thành
	     * @param  {string} city [tên tỉnh/thành phố]
	     * @dispatch {[quận huyện]}
	     */
	  }, {
	    key: 'getDistrict',
	    value: function getDistrict(_ref) {
	      var city = _ref.city;

	      var self = this;

	      _axios2['default'].post(_configSample.Api_URL + '/district', {
	        city: city
	      }).then(function (res) {
	        self.dispatch(res.data);
	      })['catch'](function (res) {
	        self.actions.getDistrictFailed(res.data);
	      });
	    }

	    /**
	     * send lỗi cho Store
	     * @param  {Error} err [Error request]
	     * @dispatch {Error} [send Store]
	     */
	  }, {
	    key: 'getCityFailed',
	    value: function getCityFailed(err) {
	      this.dispatch(err);
	    }

	    /**
	     * send lỗi cho Store
	     * @param  {Error} err [Error request]
	     * @dispatch {Error} [send Store]
	     */
	  }, {
	    key: 'getDistrictFailed',
	    value: function getDistrictFailed(err) {
	      this.dispatch(err);
	    }
	  }]);

	  return CityActions;
	})();

	module.exports = _Alt2['default'].createActions(CityActions);

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	/* @jsx React.DOM */
	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _storeAuthStore = __webpack_require__(343);

	var _storeAuthStore2 = _interopRequireDefault(_storeAuthStore);

	var _storeCartStore = __webpack_require__(348);

	var _storeCartStore2 = _interopRequireDefault(_storeCartStore);

	var _actionsAuthActions = __webpack_require__(344);

	var _actionsAuthActions2 = _interopRequireDefault(_actionsAuthActions);

	/**
	 * @Component
	 */

	var _NavbarNavbar = __webpack_require__(350);

	var _NavbarNavbar2 = _interopRequireDefault(_NavbarNavbar);

	var Nav = (function (_React$Component) {
	  _inherits(Nav, _React$Component);

	  function Nav(props) {
	    var _this = this;

	    _classCallCheck(this, Nav);

	    _get(Object.getPrototypeOf(Nav.prototype), 'constructor', this).call(this, props);

	    this._onChangeAuthStore = function (state) {
	      _this.setState({
	        auth: state.auth
	      });
	    };

	    this._onChangeCartStore = function (state) {
	      _this.setState({
	        count: _storeCartStore2['default'].getCountCart()
	      });
	    };

	    this.state = {
	      auth: _storeAuthStore2['default'].getState().auth,
	      count: _storeCartStore2['default'].getCountCart()
	    };
	  }

	  _createClass(Nav, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storeAuthStore2['default'].listen(this._onChangeAuthStore);
	      _storeCartStore2['default'].listen(this._onChangeCartStore);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storeAuthStore2['default'].unlisten(this._onChangeAuthStore);
	      _storeCartStore2['default'].unlisten(this._onChangeCartStore);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // console.log(this.state.auth.toJS());
	      return _reactAddons2['default'].createElement(_NavbarNavbar2['default'], {
	        count: this.state.count,
	        AuthActions: _actionsAuthActions2['default'],
	        auth: this.state.auth });
	    }
	  }], [{
	    key: 'contextTypes',
	    value: {
	      router: _reactAddons2['default'].PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  return Nav;
	})(_reactAddons2['default'].Component);

	exports['default'] = Nav;
	;
	module.exports = exports['default'];

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _react = __webpack_require__(240);

	var _react2 = _interopRequireDefault(_react);

	/**
	 * @Component
	 */

	var _SignIn = __webpack_require__(353);

	var _SignIn2 = _interopRequireDefault(_SignIn);

	var BoxsignIn = (function (_React$Component) {
	  _inherits(BoxsignIn, _React$Component);

	  function BoxsignIn(props) {
	    _classCallCheck(this, BoxsignIn);

	    _get(Object.getPrototypeOf(BoxsignIn.prototype), 'constructor', this).call(this, props);

	    this.state = {};
	  }

	  _createClass(BoxsignIn, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'boxLogin' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'row row-form' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'col-xs-12 col-sm-7 col-md-5 col-centered' },
	              _react2['default'].createElement(
	                'div',
	                { className: 'centrix' },
	                _react2['default'].createElement(
	                  _SignIn2['default'],
	                  { replaceWith: this.props.hideBoxLogin, nextPath: this.props.location.pathname },
	                  _react2['default'].createElement('div', { onClick: this.hideBoxLogin.bind(this), className: 'closeBox fa fa-times' })
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'hideBoxLogin',
	    value: function hideBoxLogin() {
	      this.props.hideBoxLogin();
	    }
	  }]);

	  return BoxsignIn;
	})(_react2['default'].Component);

	exports['default'] = BoxsignIn;
	;
	module.exports = exports['default'];

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _storeCartStore = __webpack_require__(348);

	var _storeCartStore2 = _interopRequireDefault(_storeCartStore);

	var _storeAuthStore = __webpack_require__(343);

	var _storeAuthStore2 = _interopRequireDefault(_storeAuthStore);

	var _storeCityStore = __webpack_require__(418);

	var _storeCityStore2 = _interopRequireDefault(_storeCityStore);

	var _storeShipStore = __webpack_require__(419);

	var _storeShipStore2 = _interopRequireDefault(_storeShipStore);

	var _actionsCartActions = __webpack_require__(346);

	var _actionsCartActions2 = _interopRequireDefault(_actionsCartActions);

	var _actionsCityActions = __webpack_require__(414);

	var _actionsCityActions2 = _interopRequireDefault(_actionsCityActions);

	/**
	 * @Component
	 */

	var _HeaderNavbarNavbarCart = __webpack_require__(421);

	var _HeaderNavbarNavbarCart2 = _interopRequireDefault(_HeaderNavbarNavbarCart);

	var _HeaderNavbarNavbarCartShip = __webpack_require__(422);

	var _HeaderNavbarNavbarCartShip2 = _interopRequireDefault(_HeaderNavbarNavbarCartShip);

	var _formNguoiNhan = __webpack_require__(423);

	var _formNguoiNhan2 = _interopRequireDefault(_formNguoiNhan);

	var FormOrder = (function (_React$Component) {
	  _inherits(FormOrder, _React$Component);

	  function FormOrder(props) {
	    var _this = this;

	    _classCallCheck(this, FormOrder);

	    _get(Object.getPrototypeOf(FormOrder.prototype), 'constructor', this).call(this, props);

	    this._onChangeCartStore = function (state) {
	      _this.setState({
	        listCart: _storeCartStore2['default'].getState().listCart,
	        status: _storeCartStore2['default'].getState().status,
	        cartId: _storeCartStore2['default'].getState().cartId,
	        totalCart: _storeCartStore2['default'].getTotalCart(),
	        weightCart: _storeCartStore2['default'].getWeightCart(),
	        totalCartSale: _storeCartStore2['default'].getTotalCartSale()
	      });
	    };

	    this._onChangeAuthStore = function (state) {
	      _this.setState({
	        auth: state.auth
	      });
	    };

	    this._onChangeCityStore = function (state) {
	      _this.setState({
	        city: _storeCityStore2['default'].getState().city,
	        district: _storeCityStore2['default'].getState().district
	      });
	    };

	    this._onChangeShipStore = function (state) {
	      _this.setState({
	        phiship: _storeShipStore2['default'].getState().phiship
	      });
	    };

	    this.renderItem = function () {
	      return _this.state.listCart.map(function (cart, i) {
	        var url = cart.get('imageUrl');
	        var imgUrl = url.replace(/image\//gi, 'image/50x50/');

	        var price = null;
	        var salePrice = null;
	        if (cart.get('price')) {
	          price = _this.formatNumber(cart.get('price'));
	        }
	        if (cart.get('salePrice')) {
	          salePrice = _this.formatNumber(cart.get('salePrice'));
	        }

	        var classer = (0, _classnames2['default'])({
	          disabled: cart.get('status') !== "available"
	        });

	        return _reactAddons2['default'].createElement(
	          'tr',
	          { key: i, className: classer },
	          _reactAddons2['default'].createElement(
	            'th',
	            { className: 'hidden-sm hidden-xs', scope: 'row' },
	            i + 1
	          ),
	          _reactAddons2['default'].createElement(
	            'td',
	            null,
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'imageIcon' },
	              _reactAddons2['default'].createElement('img', { src: imgUrl })
	            ),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'nameInfo' },
	              _reactAddons2['default'].createElement(
	                'span',
	                { className: 'code' },
	                cart.get('code')
	              ),
	              _reactAddons2['default'].createElement(
	                'span',
	                { className: 'name' },
	                cart.get('boxName')
	              )
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'td',
	            null,
	            _this.renderPrice(cart, price, salePrice)
	          ),
	          _reactAddons2['default'].createElement(
	            'td',
	            { className: 'hidden-sm hidden-xs acenter' },
	            _reactAddons2['default'].createElement(
	              'div',
	              null,
	              '1'
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'td',
	            { className: 'hidden-sm hidden-xs aright' },
	            _reactAddons2['default'].createElement(
	              'div',
	              null,
	              salePrice || price,
	              'đ'
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'td',
	            { className: 'delete' },
	            _reactAddons2['default'].createElement(
	              'div',
	              null,
	              _reactAddons2['default'].createElement('i', { onClick: _this._onClickDestroy.bind(_this, cart.get('id')), className: 'destroy' })
	            )
	          )
	        );
	      });
	    };

	    this.formatNumber = function (number) {
	      return number.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
	    };

	    this.renderPrice = function (cart, price, salePrice) {
	      if (cart.get('salePrice')) {
	        return _reactAddons2['default'].createElement(
	          'div',
	          null,
	          _reactAddons2['default'].createElement(
	            'span',
	            { className: 'sale' },
	            price,
	            'đ'
	          ),
	          _reactAddons2['default'].createElement(
	            'span',
	            null,
	            salePrice,
	            'đ'
	          )
	        );
	      } else {
	        return _reactAddons2['default'].createElement(
	          'div',
	          null,
	          _reactAddons2['default'].createElement(
	            'span',
	            null,
	            price,
	            'đ'
	          )
	        );
	      }
	    };

	    this._onChangeSelectCity = function (citySelect) {
	      _actionsCityActions2['default'].getDistrict({ city: citySelect });
	      _this.setState({
	        shippingMethod: ''
	      });
	    };

	    this._ChangeDisable = function (value) {
	      _this.setState({
	        disabled: value
	      });
	    };

	    this.resetHinhthucVC = function () {
	      _this.setState({
	        hinhthucVC: null
	      });
	    };

	    this._onClickDestroy = function (pId) {
	      _actionsCartActions2['default'].destroyCart(_this.state.cartId, pId);
	    };

	    this._next = function () {
	      _this.setState({
	        current: _this.state.current + 1
	      });
	    };

	    this._prev = function () {
	      _this.setState({
	        current: _this.state.current - 1
	      });
	    };

	    this.state = {
	      hideHeader: false,
	      status: _storeCartStore2['default'].getState().status,
	      cartId: _storeCartStore2['default'].getState().cartId,
	      listCart: _storeCartStore2['default'].getState().listCart,
	      totalCart: _storeCartStore2['default'].getTotalCart(),
	      weightCart: _storeCartStore2['default'].getWeightCart(),
	      totalCartSale: _storeCartStore2['default'].getTotalCartSale(),
	      current: 1,
	      auth: _storeAuthStore2['default'].getState().auth,
	      city: _storeCityStore2['default'].getState().city,
	      district: _storeCityStore2['default'].getState().district,
	      phiship: _storeShipStore2['default'].getState().phiship
	    };
	  }

	  _createClass(FormOrder, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storeCartStore2['default'].listen(this._onChangeCartStore);
	      _storeAuthStore2['default'].listen(this._onChangeAuthStore);
	      _storeCityStore2['default'].listen(this._onChangeCityStore);
	      _storeShipStore2['default'].listen(this._onChangeShipStore);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storeCartStore2['default'].unlisten(this._onChangeCartStore);
	      _storeAuthStore2['default'].unlisten(this._onChangeAuthStore);
	      _storeCityStore2['default'].unlisten(this._onChangeCityStore);
	      _storeShipStore2['default'].unlisten(this._onChangeShipStore);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classNavbarOrder = (0, _classnames2['default'])({
	        "navbar-product-detail": true,
	        sticky: this.state.hideHeader
	      });

	      if (this.state.current === 1) {
	        return _reactAddons2['default'].createElement(
	          'div',
	          { className: 'cart' },
	          _reactAddons2['default'].createElement(_HeaderNavbarNavbarCart2['default'], {
	            CartActions: _actionsCartActions2['default'],
	            auth: this.state.auth,
	            cartId: this.state.cartId,
	            status: this.state.status,
	            handleBoxLogin: this.props.handleBoxLogin,
	            next: this._next,
	            prev: this._prev }),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'cart-table' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'table-responsive' },
	              _reactAddons2['default'].createElement(
	                'table',
	                { className: 'table table-hover' },
	                _reactAddons2['default'].createElement(
	                  'thead',
	                  null,
	                  _reactAddons2['default'].createElement(
	                    'tr',
	                    null,
	                    _reactAddons2['default'].createElement(
	                      'th',
	                      { className: 'hidden-sm hidden-xs' },
	                      '#'
	                    ),
	                    _reactAddons2['default'].createElement(
	                      'th',
	                      { className: 'td-sanpham' },
	                      'Sản phẩm'
	                    ),
	                    _reactAddons2['default'].createElement(
	                      'th',
	                      null,
	                      'Giá'
	                    ),
	                    _reactAddons2['default'].createElement(
	                      'th',
	                      { className: 'hidden-sm hidden-xs acenter' },
	                      'SL'
	                    ),
	                    _reactAddons2['default'].createElement(
	                      'th',
	                      { className: 'hidden-sm hidden-xs aright' },
	                      'Thành tiền'
	                    ),
	                    _reactAddons2['default'].createElement(
	                      'th',
	                      { className: 'delete' },
	                      'Xóa'
	                    )
	                  )
	                ),
	                _reactAddons2['default'].createElement(
	                  'tbody',
	                  null,
	                  this.renderItem()
	                ),
	                _reactAddons2['default'].createElement(
	                  'tfoot',
	                  null,
	                  _reactAddons2['default'].createElement(
	                    'tr',
	                    { className: 'padT20' },
	                    _reactAddons2['default'].createElement('td', { className: 'hidden-sm hidden-xs' }),
	                    _reactAddons2['default'].createElement('td', { className: 'hidden-sm hidden-xs' }),
	                    _reactAddons2['default'].createElement('td', { className: 'hidden-sm hidden-xs' }),
	                    _reactAddons2['default'].createElement(
	                      'td',
	                      { colSpan: '1' },
	                      'Trước giảm giá:'
	                    ),
	                    _reactAddons2['default'].createElement(
	                      'td',
	                      { className: 'aright', colSpan: '1' },
	                      this.formatNumber(this.state.totalCart),
	                      'đ'
	                    ),
	                    _reactAddons2['default'].createElement(
	                      'td',
	                      { colSpan: '1' },
	                      ' '
	                    )
	                  ),
	                  _reactAddons2['default'].createElement(
	                    'tr',
	                    { className: 'total' },
	                    _reactAddons2['default'].createElement('td', { className: 'hidden-sm hidden-xs' }),
	                    _reactAddons2['default'].createElement('td', { className: 'hidden-sm hidden-xs' }),
	                    _reactAddons2['default'].createElement('td', { className: 'hidden-sm hidden-xs' }),
	                    _reactAddons2['default'].createElement(
	                      'td',
	                      { colSpan: '1' },
	                      'Tổng:'
	                    ),
	                    _reactAddons2['default'].createElement(
	                      'td',
	                      { className: 'aright', colSpan: '1' },
	                      this.formatNumber(this.state.totalCartSale),
	                      'đ'
	                    ),
	                    _reactAddons2['default'].createElement(
	                      'td',
	                      { colSpan: '1' },
	                      ' '
	                    )
	                  )
	                )
	              )
	            )
	          )
	        );
	      }

	      if (this.state.current === 2) {
	        return _reactAddons2['default'].createElement(
	          'div',
	          { className: 'cart' },
	          _reactAddons2['default'].createElement(_HeaderNavbarNavbarCartShip2['default'], {
	            next: this._next,
	            prev: this._prev }),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'cart-form-ship' },
	            _reactAddons2['default'].createElement(_formNguoiNhan2['default'], {
	              ref: 'formNguoiNhan',
	              city: this.state.city,
	              district: this.state.district,
	              product: this.state.product,
	              onChangeTest: this.resetHinhthucVC,
	              onChangeSelectCity: this._onChangeSelectCity,
	              onChangeDisable: this._ChangeDisable })
	          )
	        );
	      }

	      return _reactAddons2['default'].createElement('div', null);
	    }
	  }]);

	  return FormOrder;
	})(_reactAddons2['default'].Component);

	exports['default'] = FormOrder;
	module.exports = exports['default'];
	/* NavbarCart */

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _Array$from = __webpack_require__(339)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _actionsCityActions = __webpack_require__(414);

	var _actionsCityActions2 = _interopRequireDefault(_actionsCityActions);

	var _immutable = __webpack_require__(342);

	var _immutable2 = _interopRequireDefault(_immutable);

	var CityStore = (function () {
	  function CityStore() {
	    _classCallCheck(this, CityStore);

	    this.bindActions(_actionsCityActions2['default']); // getCity, getDistrict, getCityFailed, getDistrictFailed

	    this.on('init', this.bootstrap);
	    this.on('bootstrap', this.bootstrap);

	    this.city = _immutable2['default'].List();
	    this.district = _immutable2['default'].List();
	  }

	  _createClass(CityStore, [{
	    key: 'bootstrap',
	    value: function bootstrap() {
	      if (!_immutable2['default'].List.isList(this.city)) {
	        this.city = _immutable2['default'].fromJS(this.city);
	      }
	      if (!_immutable2['default'].List.isList(this.district)) {
	        this.district = _immutable2['default'].fromJS(this.district);
	      }
	    }
	  }, {
	    key: 'onGetCity',
	    value: function onGetCity(data) {
	      this.city = this.city.merge(_Array$from(data));
	    }
	  }, {
	    key: 'onGetDistrict',
	    value: function onGetDistrict(data) {
	      this.district = _immutable2['default'].List(data);
	    }
	  }, {
	    key: 'onGetCityFailed',
	    value: function onGetCityFailed(err) {
	      console.log('onGetCityFailed');
	    }
	  }, {
	    key: 'onGetDistrictFailed',
	    value: function onGetDistrictFailed(err) {
	      // console.log(err);
	      console.log('onGetDistrictFailed');
	    }
	  }]);

	  return CityStore;
	})();

	module.exports = _Alt2['default'].createStore(CityStore, 'CityStore');

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _immutable = __webpack_require__(342);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _actionsShipActions = __webpack_require__(420);

	var _actionsShipActions2 = _interopRequireDefault(_actionsShipActions);

	var ShipStore = (function () {
	  function ShipStore() {
	    _classCallCheck(this, ShipStore);

	    this.bindActions(_actionsShipActions2['default']); // getPhiShip
	    this.on('init', this.bootstrap);
	    this.on('bootstrap', this.bootstrap);

	    this.phiship = new _immutable.Map();
	  }

	  _createClass(ShipStore, [{
	    key: 'bootstrap',
	    value: function bootstrap() {
	      if (!_immutable2['default'].Map.isMap(this.phiship)) {
	        this.phiship = _immutable2['default'].fromJS(this.phiship);
	      }
	    }
	  }, {
	    key: 'onGetPhiShip',
	    value: function onGetPhiShip(data) {
	      this.phiship = new _immutable.Map(data);
	    }
	  }]);

	  return ShipStore;
	})();

	module.exports = _Alt2['default'].createStore(ShipStore, 'ShipStore');

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _axios = __webpack_require__(315);

	var _axios2 = _interopRequireDefault(_axios);

	var _configSample = __webpack_require__(334);

	var ShipActions = (function () {
	  function ShipActions() {
	    _classCallCheck(this, ShipActions);
	  }

	  _createClass(ShipActions, [{
	    key: 'getPhiShip',

	    /**
	     * tính toán phí ship
	     * @param  {string} options.city     - tên tỉnh thành
	     * @param  {string} options.district - tên quận huyện
	     * @param  {number} options.weight   - trọng lượng hành ship
	     * @dispatch {object}                  - phí ship và phương thức thanh toán
	     */
	    value: function getPhiShip(_ref) {
	      var city = _ref.city;
	      var district = _ref.district;
	      var weight = _ref.weight;

	      var self = this;

	      _axios2['default'].get(_configSample.Api_URL + '/ship', {
	        params: {
	          city: city,
	          district: district,
	          weight: weight
	        }
	      }).then(function (res) {
	        self.dispatch(res.data);
	      })['catch'](function (res) {
	        console.log('catch', res);
	      });
	    }
	  }]);

	  return ShipActions;
	})();

	module.exports = _Alt2['default'].createActions(ShipActions);

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	exports['default'] = _reactAddons2['default'].createClass({
	  displayName: 'NavbarCart',

	  mixins: [_reactRouter.Navigation],

	  getInitialState: function getInitialState() {
	    return {
	      hideHeader: false,
	      NavbarWidth: null
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    window.addEventListener('scroll', this.handleScroll);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	  },

	  componentWillUpdate: function componentWillUpdate() {
	    if (this.props.status = "success") {}
	  },

	  handleScroll: function handleScroll(e) {
	    var offsetWidth = this.refs.navbar.getDOMNode().offsetWidth;
	    var scrollTop = window.scrollY;
	    var hideHeader = scrollTop >= 80;
	    this.setState({
	      hideHeader: hideHeader,
	      NavbarWidth: offsetWidth
	    });
	  },

	  render: function render() {
	    var classesNavbar = (0, _classnames2['default'])({
	      "navbar": true,
	      "navbar-defaul": true,
	      "sticky": this.state.hideHeader
	    });

	    return _reactAddons2['default'].createElement(
	      'div',
	      { ref: 'navbar' },
	      _reactAddons2['default'].createElement(
	        'nav',
	        { className: classesNavbar, style: { width: this.state.NavbarWidth } },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'navbar-header' },
	          _reactAddons2['default'].createElement(
	            'div',
	            null,
	            _reactAddons2['default'].createElement('i', { className: 'icon icont-cart' })
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            null,
	            _reactAddons2['default'].createElement(
	              'span',
	              { className: 'title-nav-cart' },
	              'Cart'
	            )
	          )
	        ),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'nav navbar-nav navbar-right' },
	          _reactAddons2['default'].createElement(
	            'button',
	            { onClick: this._onClickCapNhat, type: 'button', className: 'btn btn-default navbar-btn' },
	            'Cập nhật'
	          ),
	          _reactAddons2['default'].createElement(
	            'button',
	            { onClick: this._onClickMua, type: 'button', className: 'btn btn-primary navbar-btn' },
	            'Mua'
	          )
	        )
	      )
	    );
	  },

	  boxLogin: function boxLogin(cb) {
	    if (!this.props.auth.get('access_token')) {
	      this.props.handleBoxLogin();
	    } else {
	      cb();
	    }
	  },

	  _onClickCapNhat: function _onClickCapNhat(e) {
	    this.props.CartActions.capnhatCart();
	  },

	  _onClickMua: function _onClickMua(e) {
	    var self = this;
	    this.boxLogin(function () {
	      self.transitionTo('/checkout');
	    });
	  }

	});
	module.exports = exports['default'];

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	exports['default'] = _reactAddons2['default'].createClass({
	  displayName: 'NavbarCartShip',

	  mixins: [_reactRouter.Navigation],

	  getInitialState: function getInitialState() {
	    return {
	      hideHeader: false,
	      NavbarWidth: null
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    window.addEventListener('scroll', this.handleScroll);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	  },

	  handleScroll: function handleScroll() {
	    var offsetWidth = this.refs.navbar.getDOMNode().offsetWidth;
	    var scrollTop = window.scrollY;
	    var hideHeader = scrollTop >= 80;
	    this.setState({
	      hideHeader: hideHeader,
	      NavbarWidth: offsetWidth
	    });
	  },

	  render: function render() {
	    var classesNavbar = (0, _classnames2['default'])({
	      "navbar": true,
	      "navbar-defaul": true,
	      "sticky": this.state.hideHeader
	    });

	    return _reactAddons2['default'].createElement(
	      'div',
	      { ref: 'navbar' },
	      _reactAddons2['default'].createElement(
	        'nav',
	        { className: classesNavbar, style: { width: this.state.NavbarWidth } },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'navbar-header' },
	          _reactAddons2['default'].createElement(
	            'div',
	            null,
	            _reactAddons2['default'].createElement('i', { className: 'icon icont-cart' })
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            null,
	            _reactAddons2['default'].createElement(
	              'span',
	              { className: 'title-nav-cart' },
	              'Thông tin vận chuyển'
	            )
	          )
	        ),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'nav navbar-nav navbar-right' },
	          _reactAddons2['default'].createElement(
	            'button',
	            { onClick: this._onClickHoantat, disabled: this.props.disabled, type: 'button', className: 'btn btn-primary navbar-btn' },
	            'Tiếp'
	          )
	        )
	      )
	    );
	  },

	  _onClickHoantat: function _onClickHoantat(e) {
	    this.transitionTo('/checkout-ship-method');
	  }

	});
	module.exports = exports['default'];

/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _Object$keys = __webpack_require__(354)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _validatorjs = __webpack_require__(356);

	var _validatorjs2 = _interopRequireDefault(_validatorjs);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _actionsShipActions = __webpack_require__(420);

	var _actionsShipActions2 = _interopRequireDefault(_actionsShipActions);

	/**
	 * @Component
	 */

	var _FormInputValidationLabel = __webpack_require__(358);

	var _FormInputValidationLabel2 = _interopRequireDefault(_FormInputValidationLabel);

	var _FormSelectValidationLabel = __webpack_require__(424);

	var _FormSelectValidationLabel2 = _interopRequireDefault(_FormSelectValidationLabel);

	var Validations = {
	  mobilePhone: {
	    rules: { mobilePhone: ["required", "regex:/^([0-9]{10,11})$/"] },
	    messages: { "required.mobilePhone": "Nhập số điện thoại của bạn!", "regex.mobilePhone": "Số điện thoại không hợp lệ!" },
	    hasError: false,
	    errorMessage: '',
	    errorTextRequest: ''
	  },
	  name: {
	    rules: { name: ["required"] },
	    messages: { "required.name": "Nhập tên của bạn!" },
	    hasError: false,
	    errorMessage: '',
	    errorTextRequest: ''
	  },
	  diachi: {
	    rules: { diachi: ["required"] },
	    messages: { "required.diachi": "Nhập địa chỉ của bạn!" },
	    hasError: false,
	    errorMessage: '',
	    errorTextRequest: ''
	  },
	  city: {
	    rules: { city: ["required"] },
	    messages: { "required.city": "Chọn tỉnh thành của bạn!" },
	    hasError: false,
	    errorMessage: ''
	  },
	  district: {
	    rules: { district: ["required"] },
	    messages: { "required.district": "Chọn quận huyện của bạn!" },
	    hasError: false,
	    errorMessage: ''
	  }
	};

	var FormOrder = (function (_React$Component) {
	  _inherits(FormOrder, _React$Component);

	  function FormOrder(props) {
	    _classCallCheck(this, FormOrder);

	    _get(Object.getPrototypeOf(FormOrder.prototype), 'constructor', this).call(this, props);
	    this._bind('_onChangeInputHandler', '_setDisabledSubmit', '_setAndValidateInput', '_onChangeSelectCity', '_actionsShip', 'getValue', '_onChangeSelectDistrict');

	    this.state = {
	      ValidationData: Validations,
	      disabled: true,
	      cost: 0,
	      shippingMethod: ''
	    };
	  }

	  _createClass(FormOrder, [{
	    key: '_bind',
	    value: function _bind() {
	      var _this = this;

	      for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
	        methods[_key] = arguments[_key];
	      }

	      methods.forEach(function (method) {
	        return _this[method] = _this[method].bind(_this);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        'div',
	        null,
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'ship-address' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'row' },
	            _reactAddons2['default'].createElement(
	              'h4',
	              { className: 'ship-address-title text-center' },
	              'Thông tin người nhận'
	            ),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'col-sm-6 col-md-6' },
	              _reactAddons2['default'].createElement(_FormInputValidationLabel2['default'], {
	                ref: 'name',
	                type: 'text',
	                placeholder: 'Họ tên',
	                name: 'name',
	                validator: this.state.ValidationData.name,
	                onChange: this._onChangeInputHandler })
	            ),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'col-sm-6 col-md-6' },
	              _reactAddons2['default'].createElement(_FormInputValidationLabel2['default'], {
	                ref: 'mobilePhone',
	                type: 'text',
	                placeholder: 'Điện thoại',
	                name: 'mobilePhone',
	                validator: this.state.ValidationData.mobilePhone,
	                onChange: this._onChangeInputHandler })
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'row' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'col-sm-12 col-md-12' },
	              _reactAddons2['default'].createElement(_FormInputValidationLabel2['default'], {
	                ref: 'diachi',
	                type: 'text',
	                placeholder: 'Địa chỉ',
	                name: 'diachi',
	                validator: this.state.ValidationData.diachi,
	                onChange: this._onChangeInputHandler })
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'row' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'col-sm-6 col-md-6' },
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'form-group' },
	                _reactAddons2['default'].createElement(_FormSelectValidationLabel2['default'], {
	                  ref: 'city',
	                  type: 'city',
	                  name: 'city',
	                  List: this.props.city,
	                  validator: this.state.ValidationData.city,
	                  onChangeTest: function () {},
	                  onChangeCity: this._onChangeSelectCity,
	                  onChange: this._onChangeInputHandler,
	                  firstValue: 'Tỉnh Thành' })
	              )
	            ),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'col-sm-6 col-md-6' },
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'form-group' },
	                _reactAddons2['default'].createElement(_FormSelectValidationLabel2['default'], {
	                  ref: 'district',
	                  type: 'district',
	                  name: 'district',
	                  List: this.props.district,
	                  validator: this.state.ValidationData.district,
	                  onChangeTest: function () {},
	                  onChangeDistrict: this._onChangeSelectDistrict,
	                  onChange: this._onChangeInputHandler,
	                  firstValue: 'Quận Huyện' })
	              )
	            )
	          )
	        ),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'btn-continue' },
	          _reactAddons2['default'].createElement(
	            'button',
	            { onClick: this.props.next, disabled: this.state.disabled, type: 'button', className: 'btn btn-primary navbar-btn btn-block' },
	            'Tiếp'
	          )
	        )
	      );
	    }
	  }, {
	    key: '_setAndValidateInput',
	    value: function _setAndValidateInput(name, value) {
	      var ValidationData = this.state.ValidationData;
	      var data = {};
	      var _ValidationData$name = ValidationData[name];
	      var rules = _ValidationData$name.rules;
	      var messages = _ValidationData$name.messages;

	      ValidationData[name].hasFocus = true;
	      ValidationData[name].hasError = false;
	      ValidationData[name].errorMessage = '';
	      ValidationData[name].errorTextRequest = '';

	      data[name] = value || '';

	      var validation = new _validatorjs2['default'](data, rules, messages);

	      if (validation.fails()) {
	        ValidationData[name].hasError = true;
	        ValidationData[name].errorMessage = validation.errors.first(name);
	      }

	      this.setState({ ValidationData: ValidationData });
	    }
	  }, {
	    key: '_setDisabledSubmit',
	    value: function _setDisabledSubmit() {
	      var ValidationData = this.state.ValidationData,
	          total = _Object$keys(ValidationData).length,
	          done = 0,
	          disabled = undefined;

	      _Object$keys(ValidationData).forEach(function (key) {
	        if (ValidationData[key].hasFocus && ValidationData[key].hasError === false) {
	          done += 1;
	        }
	      });

	      disabled = done === total ? false : true;

	      this.setState({ disabled: disabled });

	      // if(this.state.disabled !== disabled) {
	      // this.props.onChangeDisable(disabled);
	      // }

	      if (!disabled) {
	        this._actionsShip();
	      }
	    }
	  }, {
	    key: '_onChangeInputHandler',
	    value: function _onChangeInputHandler(name, value) {
	      this._setAndValidateInput(name, value);
	      this._setDisabledSubmit();
	    }
	  }, {
	    key: '_onChangeSelectCity',
	    value: function _onChangeSelectCity(citySelect) {
	      this.refs.district.resetValue();
	      this._setAndValidateInput('district', null);
	      this.props.onChangeSelectCity(citySelect);
	      this._setDisabledSubmit();
	    }
	  }, {
	    key: '_onChangeSelectDistrict',
	    value: function _onChangeSelectDistrict(districtSelect) {
	      this._setAndValidateInput('district', districtSelect);
	      this._setDisabledSubmit();
	    }
	  }, {
	    key: '_actionsShip',
	    value: function _actionsShip() {
	      var city = this.refs.city.getValues();
	      var district = this.refs.district.getValues();
	      var weight = this.props.weight;
	      if (city && district && weight) {
	        _actionsShipActions2['default'].getPhiShip({ city: city, district: district, weight: weight });
	      }
	      console.log('_actionsShip');
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      var diachi = this.refs.diachi.getValue();
	      var name = this.refs.name.getValue();
	      var mobilePhone = this.refs.mobilePhone.getValue();
	      var city = this.refs.city.getValues();
	      var district = this.refs.district.getValues();
	      return {
	        name: name,
	        address: diachi,
	        phone: mobilePhone,
	        city: city,
	        district: district
	      };
	    }
	  }]);

	  return FormOrder;
	})(_reactAddons2['default'].Component);

	exports['default'] = FormOrder;
	;
	module.exports = exports['default'];

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	exports['default'] = _reactAddons2['default'].createClass({
	  displayName: 'selectValidationLabel',

	  getInitialState: function getInitialState() {
	    return {
	      value: ''
	    };
	  },
	  propTypes: {
	    firstValue: _reactAddons2['default'].PropTypes.string
	  },
	  // List: React.PropTypes.array,
	  getDefaultProps: function getDefaultProps() {
	    return {
	      firstValue: ''
	    };
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])({
	      "form-group": true,
	      "has-error": this.props.validator.hasError
	    });

	    var erros = _reactAddons2['default'].createElement('label', { className: 'control-label', htmlFor: this.props.name });

	    if (this.props.validator.errorTextRequest !== "") {
	      erros = _reactAddons2['default'].createElement(
	        'label',
	        { className: 'control-label', htmlFor: this.props.name },
	        this.props.validator.errorTextRequest
	      );
	    } else {
	      erros = _reactAddons2['default'].createElement(
	        'label',
	        { className: 'control-label', htmlFor: this.props.name },
	        this.props.validator.errorMessage
	      );
	    }

	    return _reactAddons2['default'].createElement(
	      'div',
	      { className: classes },
	      erros,
	      this.renderSelect()
	    );
	  },

	  renderSelect: function renderSelect() {
	    if (this.props.type === "district") {
	      return _reactAddons2['default'].createElement(
	        'select',
	        { ref: 'select', className: 'form-control', onChange: this._onChange },
	        _reactAddons2['default'].createElement(
	          'option',
	          { value: '' },
	          this.props.firstValue
	        ),
	        this.props.List && this.props.List.toJS().map(function (city, i) {
	          return _reactAddons2['default'].createElement(
	            'option',
	            { key: i, value: city.name },
	            city.name
	          );
	        })
	      );
	    } else {
	      return _reactAddons2['default'].createElement(
	        'select',
	        { ref: 'select', className: 'form-control', onChange: this._onChange },
	        _reactAddons2['default'].createElement(
	          'option',
	          { value: '' },
	          this.props.firstValue
	        ),
	        this.props.List && this.props.List.toJS().map(function (city, i) {
	          return _reactAddons2['default'].createElement(
	            'option',
	            { key: i, value: city },
	            city
	          );
	        })
	      );
	    }
	  },

	  _onChange: function _onChange(e) {
	    var value = e.target.value;
	    this.setValues(value);
	    if (this.props.onChangeCity) {
	      this.props.onChangeCity(value);
	    }
	    if (this.props.onChangeDistrict) {
	      this.props.onChangeDistrict(value);
	    }
	    this.props.onChange(this.props.name, value);
	    this.props.onChangeTest();
	  },
	  setValues: function setValues(txt) {
	    this.setState({ value: txt });
	    this.value = txt;
	  },
	  resetValue: function resetValue() {
	    this.setState({ value: '' });
	    this.value = null;
	    this.refs.select.getDOMNode()[0].selected = true;
	    this.props.onChangeTest();
	  },
	  getValues: function getValues() {
	    return this.value;
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _decorators = __webpack_require__(311);

	var Posts = (function (_React$Component) {
	  _inherits(Posts, _React$Component);

	  function Posts(props) {
	    _classCallCheck(this, Posts);

	    _get(Object.getPrototypeOf(Posts.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Posts, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.HeadParams.setTitle("Posts | tocu.vn");
	      this.props.HeadParams.setDescription("Posts | Description");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        'div',
	        null,
	        _reactAddons2['default'].createElement(
	          'p',
	          null,
	          'Posts! ',
	          this.props.params.id
	        ),
	        _reactAddons2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/' },
	          'to Home!'
	        )
	      );
	    }
	  }]);

	  return Posts;
	})(_reactAddons2['default'].Component);

	exports['default'] = Posts;
	;
	module.exports = exports['default'];

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _decorators = __webpack_require__(311);

	var Album = (function (_React$Component) {
	  _inherits(Album, _React$Component);

	  function Album(props) {
	    _classCallCheck(this, Album);

	    _get(Object.getPrototypeOf(Album.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Album, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.HeadParams.setTitle("Album | tocu.vn");
	      this.props.HeadParams.setDescription("Album | Description");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        'div',
	        null,
	        _reactAddons2['default'].createElement(
	          'p',
	          null,
	          'Album! ',
	          this.props.params.id
	        ),
	        _reactAddons2['default'].createElement(
	          _reactRouter.Link,
	          { to: '/' },
	          'to Home!'
	        )
	      );
	    }
	  }]);

	  return Album;
	})(_reactAddons2['default'].Component);

	exports['default'] = Album;
	;
	module.exports = exports['default'];

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _extends = __webpack_require__(1)['default'];

	var _regeneratorRuntime = __webpack_require__(258)['default'];

	var _Promise = __webpack_require__(288)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _decorators = __webpack_require__(311);

	var _storeSanphamStore = __webpack_require__(349);

	var _storeSanphamStore2 = _interopRequireDefault(_storeSanphamStore);

	var _actionsSanphamActions = __webpack_require__(335);

	var _actionsSanphamActions2 = _interopRequireDefault(_actionsSanphamActions);

	var _actionsVerifyActions = __webpack_require__(347);

	var _actionsVerifyActions2 = _interopRequireDefault(_actionsVerifyActions);

	var _actionsSaleActions = __webpack_require__(428);

	var _actionsSaleActions2 = _interopRequireDefault(_actionsSaleActions);

	/**
	 * @Component
	 */

	var _componentsFormBoxSignIn = __webpack_require__(416);

	var _componentsFormBoxSignIn2 = _interopRequireDefault(_componentsFormBoxSignIn);

	var _componentsFormBoxVerify = __webpack_require__(429);

	var _componentsFormBoxVerify2 = _interopRequireDefault(_componentsFormBoxVerify);

	var _componentsProduct = __webpack_require__(432);

	var _componentsProduct2 = _interopRequireDefault(_componentsProduct);

	var _componentsHeader = __webpack_require__(415);

	var _componentsHeader2 = _interopRequireDefault(_componentsHeader);

	var _componentsProductSidebar = __webpack_require__(439);

	var _componentsProductSidebar2 = _interopRequireDefault(_componentsProductSidebar);

	var _componentsProductBoxAuto = __webpack_require__(440);

	var _componentsProductBoxAuto2 = _interopRequireDefault(_componentsProductBoxAuto);

	var _componentsSale = __webpack_require__(441);

	var _componentsSale2 = _interopRequireDefault(_componentsSale);

	var ProductID = (function (_React$Component) {
	  _inherits(ProductID, _React$Component);

	  function ProductID(props) {
	    var _this = this;

	    _classCallCheck(this, _ProductID);

	    _get(Object.getPrototypeOf(_ProductID.prototype), 'constructor', this).call(this, props);

	    this.onChangeSanphamStore = function (state) {
	      _this.setState(_extends({}, state.product.toJS()));
	    };

	    this.renderProductDetail = function () {
	      return _reactAddons2['default'].createElement(_componentsProduct2['default'], {
	        handleBoxLogin: _this.handleBoxLogin });
	    };

	    this.renderBoxLogin = function () {
	      if (_this.state.boxLogin) {
	        return _reactAddons2['default'].createElement(_componentsFormBoxSignIn2['default'], { hideBoxLogin: _this.hideBoxLogin, location: _this.props.location });
	      }
	    };

	    this.handleBoxLogin = function (val) {
	      _this.setState({
	        boxLogin: true
	      });
	    };

	    this.hideBoxLogin = function () {
	      _this.setState({
	        boxLogin: false
	      });
	    };

	    this.state = _extends({
	      boxLogin: false,
	      current: 1
	    }, _storeSanphamStore2['default'].getState().product.toJS());
	  }

	  _createClass(ProductID, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.HeadParams.setTitle(this.state.code + ' | tocu.vn');
	      this.props.HeadParams.setDescription('' + this.state.boxName);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storeSanphamStore2['default'].listen(this.onChangeSanphamStore);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storeSanphamStore2['default'].unlisten(this.onChangeSanphamStore);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        'div',
	        null,
	        _reactAddons2['default'].createElement(_componentsHeader2['default'], null),
	        _reactAddons2['default'].createElement(
	          'section',
	          { id: 'productDetail' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'row' },
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'col-md-9 col-lg-9' },
	                this.renderProductDetail(),
	                _reactAddons2['default'].createElement(_componentsProductBoxAuto2['default'], null)
	              ),
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'col-md-3 col-lg-3' },
	                _reactAddons2['default'].createElement(
	                  'div',
	                  { className: 'row row-sidebar' },
	                  _reactAddons2['default'].createElement(_componentsProductSidebar2['default'], _extends({
	                    boxId: this.state.BoxId
	                  }, this.state.Box)),
	                  _reactAddons2['default'].createElement(
	                    'div',
	                    { className: 'col-md-12 col-lg-12' },
	                    _reactAddons2['default'].createElement(_componentsSale2['default'], null)
	                  )
	                )
	              )
	            )
	          )
	        ),
	        this.renderBoxLogin()
	      );
	    }
	  }]);

	  var _ProductID = ProductID;
	  ProductID = (0, _decorators.prepareRoute)(function callee$1$0(_ref) {
	    var params = _ref.params;
	    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
	      while (1) switch (context$2$0.prev = context$2$0.next) {
	        case 0:
	          context$2$0.next = 2;
	          return _regeneratorRuntime.awrap(_Promise.all([_actionsSanphamActions2['default'].getSanphamID(params), _actionsSaleActions2['default'].getProductSale()]));

	        case 2:
	          return context$2$0.abrupt('return', context$2$0.sent);

	        case 3:
	        case 'end':
	          return context$2$0.stop();
	      }
	    }, null, this);
	  })(ProductID) || ProductID;
	  return ProductID;
	})(_reactAddons2['default'].Component);

	exports['default'] = ProductID;
	;
	module.exports = exports['default'];
	/* Header */ /* 6 box auto */ /* Sidebar */ /* Sale */

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _regeneratorRuntime = __webpack_require__(258)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _axios = __webpack_require__(315);

	var _axios2 = _interopRequireDefault(_axios);

	var _configSample = __webpack_require__(334);

	var SaleActions = (function () {
			function SaleActions() {
					_classCallCheck(this, SaleActions);
			}

			_createClass(SaleActions, [{
					key: 'getProductSale',
					value: function getProductSale() {
							var self;
							return _regeneratorRuntime.async(function getProductSale$(context$2$0) {
									while (1) switch (context$2$0.prev = context$2$0.next) {
											case 0:
													self = this;
													context$2$0.next = 3;
													return _regeneratorRuntime.awrap(_axios2['default'].get(_configSample.Api_URL + '/product', {
															params: {
																	filters: 'salePrice!=null',
																	limit: 5
															}
													}).then(function (res) {
															self.dispatch(res.data);
													}));

											case 3:
											case 'end':
													return context$2$0.stop();
									}
							}, null, this);
					}
			}]);

			return SaleActions;
	})();

	module.exports = _Alt2['default'].createActions(SaleActions);

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _react = __webpack_require__(240);

	var _react2 = _interopRequireDefault(_react);

	/**
	 * @Component
	 */

	var _Verify = __webpack_require__(430);

	var _Verify2 = _interopRequireDefault(_Verify);

	var BoxsignIn = (function (_React$Component) {
	  _inherits(BoxsignIn, _React$Component);

	  function BoxsignIn(props) {
	    _classCallCheck(this, BoxsignIn);

	    _get(Object.getPrototypeOf(BoxsignIn.prototype), 'constructor', this).call(this, props);

	    this.state = {};
	  }

	  _createClass(BoxsignIn, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'boxLogin' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'row' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'col-xs-12 col-sm-7 col-md-5 col-centered' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'centrix' },
	              _react2['default'].createElement(
	                _Verify2['default'],
	                { hideBoxVerify: this.props.hideBoxVerify },
	                _react2['default'].createElement('div', { onClick: this.hideBoxVerify.bind(this), className: 'closeBox fa fa-times' })
	              )
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'hideBoxVerify',
	    value: function hideBoxVerify() {
	      this.props.hideBoxVerify();
	    }
	  }]);

	  return BoxsignIn;
	})(_react2['default'].Component);

	exports['default'] = BoxsignIn;
	;
	module.exports = exports['default'];

/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _storeVerifyStore = __webpack_require__(431);

	var _storeVerifyStore2 = _interopRequireDefault(_storeVerifyStore);

	var _storeAuthStore = __webpack_require__(343);

	var _storeAuthStore2 = _interopRequireDefault(_storeAuthStore);

	var _actionsVerifyActions = __webpack_require__(347);

	var _actionsVerifyActions2 = _interopRequireDefault(_actionsVerifyActions);

	exports['default'] = _reactAddons2['default'].createClass({
	  displayName: 'Verify',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],

	  contextTypes: {
	    router: _reactAddons.PropTypes.object.isRequired
	  },

	  getInitialState: function getInitialState() {
	    return _extends({
	      auth: _storeAuthStore2['default'].getState().auth
	    }, _storeVerifyStore2['default'].getState());
	  },

	  componentDidMount: function componentDidMount() {
	    _reactAddons2['default'].findDOMNode(this.refs.code).focus();
	    _storeAuthStore2['default'].listen(this._onChangeAuthStore);
	    _storeVerifyStore2['default'].listen(this._onChangeVerifyStore);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    _storeAuthStore2['default'].unlisten(this._onChangeAuthStore);
	    _storeVerifyStore2['default'].unlisten(this._onChangeVerifyStore);
	  },

	  _onChangeAuthStore: function _onChangeAuthStore(state) {
	    this.setState({
	      auth: state.auth
	    });
	  },

	  _onChangeVerifyStore: function _onChangeVerifyStore(state) {
	    this.setState(_extends({}, state));
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    if (this.state.verifyState) {
	      this.onToNexPath();
	    }
	  },

	  getCode: function getCode() {
	    _actionsVerifyActions2['default'].getCode();
	  },

	  render: function render() {
	    return _reactAddons2['default'].createElement(
	      'div',
	      { className: 'form-signup verify' },
	      _reactAddons2['default'].createElement(
	        'div',
	        { className: 'verify-body' },
	        this.props.children,
	        _reactAddons2['default'].createElement(
	          'h4',
	          null,
	          'Xác thực số điện thoại!'
	        ),
	        _reactAddons2['default'].createElement(
	          'p',
	          null,
	          'Chúng tôi đã gửi một mã xác thực vào số điện thoại ',
	          this.state.auth.get('mobilePhone'),
	          '.'
	        ),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'form-group' },
	          _reactAddons2['default'].createElement(
	            'label',
	            { className: 'text-danger' },
	            this.state.verifyFaild.get('message') || this.state.codeFaild.get('message')
	          ),
	          _reactAddons2['default'].createElement('input', { ref: 'code', className: 'form-control', name: 'macode', placeholder: 'Mã xác thực', type: 'text' })
	        ),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'row' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'col-xs-5 col-md-5' },
	            _reactAddons2['default'].createElement(
	              'button',
	              { className: 'btn btn-link', onClick: this.getCode, disabled: this.state.codeFaild.size > 0 ? true : false },
	              _reactAddons2['default'].createElement('i', { className: 'fa fa-refresh' }),
	              'Send a new code.'
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'col-xs-7 col-md-7' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'pull-right' },
	              _reactAddons2['default'].createElement(
	                'button',
	                { onClick: this.onCancel, className: 'btn btn-default' },
	                _reactAddons2['default'].createElement(
	                  'span',
	                  null,
	                  'Cancel'
	                )
	              ),
	              _reactAddons2['default'].createElement(
	                'button',
	                { onClick: this.onVerify, className: 'btn btn-primary' },
	                _reactAddons2['default'].createElement(
	                  'span',
	                  null,
	                  'Verify'
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  },

	  onCancel: function onCancel() {
	    this.onToNexPath();
	  },

	  onVerify: function onVerify() {
	    var code = _reactAddons2['default'].findDOMNode(this.refs.code).value;
	    _actionsVerifyActions2['default'].getVerify(code);
	  },

	  onToNexPath: function onToNexPath() {
	    if (this.props.hideBoxVerify) {
	      this.props.hideBoxVerify();
	      return;
	    }

	    var router = this.context.router;
	    var location = router.state.location;

	    var query = location.query;

	    if (query && query.nextPath) {
	      return router.transitionTo(query.nextPath);
	    } else {
	      return router.transitionTo('/');
	    }
	  }

	});
	module.exports = exports['default'];

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _immutable = __webpack_require__(342);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _actionsVerifyActions = __webpack_require__(347);

	var _actionsVerifyActions2 = _interopRequireDefault(_actionsVerifyActions);

	var VerifyStore = (function () {
	  function VerifyStore() {
	    _classCallCheck(this, VerifyStore);

	    this.bindActions(_actionsVerifyActions2['default']); // getVerify, getVerifyFaild, getCode, getCodeFaild
	    this.on('init', this.bootstrap);
	    this.on('bootstrap', this.bootstrap);

	    this.codeFaild = new _immutable.Map({});
	    this.verifyFaild = new _immutable.Map({});
	    this.verifyState = false;
	  }

	  _createClass(VerifyStore, [{
	    key: 'bootstrap',
	    value: function bootstrap() {
	      if (!_immutable2['default'].Map.isMap(this.codeFaild)) {
	        this.codeFaild = _immutable2['default'].fromJS(this.codeFaild);
	      }
	      if (!_immutable2['default'].Map.isMap(this.verifyFaild)) {
	        this.verifyFaild = _immutable2['default'].fromJS(this.verifyFaild);
	      }
	    }
	  }, {
	    key: 'onGetCode',
	    value: function onGetCode(data) {
	      console.log('onGetCode', data);
	      this.codeFaild = new _immutable.Map({});
	    }
	  }, {
	    key: 'onGetVerify',
	    value: function onGetVerify(data) {
	      console.log('onGetVerify', data);
	      this.verifyState = true;
	      this.verifyFaild = new _immutable.Map({});
	      this.codeFaild = new _immutable.Map({});
	    }
	  }, {
	    key: 'onGetCodeFaild',
	    value: function onGetCodeFaild(err) {
	      console.log('onGetCodeFaild', err);
	      this.codeFaild = new _immutable.Map(err);
	      this.verifyFaild = new _immutable.Map({});
	    }
	  }, {
	    key: 'onGetVerifyFaild',
	    value: function onGetVerifyFaild(err) {
	      console.log('onGetVerifyFaild', err);
	      this.verifyFaild = new _immutable.Map(err);
	      this.verifyState = false;
	    }
	  }]);

	  return VerifyStore;
	})();

	module.exports = _Alt2['default'].createStore(VerifyStore, 'VerifyStore');

/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _storeAuthStore = __webpack_require__(343);

	var _storeAuthStore2 = _interopRequireDefault(_storeAuthStore);

	var _storeCartStore = __webpack_require__(348);

	var _storeCartStore2 = _interopRequireDefault(_storeCartStore);

	var _actionsCartActions = __webpack_require__(346);

	var _actionsCartActions2 = _interopRequireDefault(_actionsCartActions);

	var _storeSanphamStore = __webpack_require__(349);

	var _storeSanphamStore2 = _interopRequireDefault(_storeSanphamStore);

	var _actionsSanphamActions = __webpack_require__(335);

	var _actionsSanphamActions2 = _interopRequireDefault(_actionsSanphamActions);

	/**
	 * @Component
	 */

	var _HeaderNavbarNavbarProductDetail = __webpack_require__(433);

	var _HeaderNavbarNavbarProductDetail2 = _interopRequireDefault(_HeaderNavbarNavbarProductDetail);

	var _ImgSlideProduct = __webpack_require__(434);

	var _ImgSlideProduct2 = _interopRequireDefault(_ImgSlideProduct);

	var _InfoSanpham = __webpack_require__(436);

	var _InfoSanpham2 = _interopRequireDefault(_InfoSanpham);

	var _Detail = __webpack_require__(437);

	var _Detail2 = _interopRequireDefault(_Detail);

	var _Mau = __webpack_require__(438);

	var _Mau2 = _interopRequireDefault(_Mau);

	var Products = (function (_React$Component) {
	  _inherits(Products, _React$Component);

	  function Products(props) {
	    var _this = this;

	    _classCallCheck(this, Products);

	    _get(Object.getPrototypeOf(Products.prototype), 'constructor', this).call(this, props);

	    this._onChangeAuthStore = function (state) {
	      _this.setState({
	        auth: state.auth
	      });
	    };

	    this._onChangeSanphamStore = function (state) {
	      _this.setState({
	        product: state.product
	      });
	    };

	    this._onChangeCartStore = function (state) {
	      _this.setState({
	        cartId: state.cartId
	      });
	    };

	    this.state = {
	      auth: _storeAuthStore2['default'].getState().auth,
	      product: _storeSanphamStore2['default'].getState().product,
	      cartId: _storeCartStore2['default'].getState().cartId
	    };
	  }

	  _createClass(Products, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storeAuthStore2['default'].listen(this._onChangeAuthStore);
	      _storeSanphamStore2['default'].listen(this._onChangeSanphamStore);
	      _storeCartStore2['default'].listen(this._onChangeCartStore);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storeAuthStore2['default'].unlisten(this._onChangeAuthStore);
	      _storeSanphamStore2['default'].unlisten(this._onChangeSanphamStore);
	      _storeCartStore2['default'].unlisten(this._onChangeCartStore);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        'div',
	        { className: 'productDetail' },
	        _reactAddons2['default'].createElement(_HeaderNavbarNavbarProductDetail2['default'], {
	          auth: this.state.auth,
	          product: this.state.product,
	          cartId: this.state.cartId,
	          SanphamActions: _actionsSanphamActions2['default'],
	          CartActions: _actionsCartActions2['default'],
	          handleBoxLogin: this.props.handleBoxLogin }),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'product' },
	          _reactAddons2['default'].createElement(_ImgSlideProduct2['default'], {
	            dataUrlImg: this.state.product.get('images') || [] }),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'product-detail' },
	            _reactAddons2['default'].createElement(_Detail2['default'], {
	              product: this.state.product }),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'row' },
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'col-md-6' },
	                _reactAddons2['default'].createElement(_InfoSanpham2['default'], {
	                  product: this.state.product })
	              ),
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'col-md-6' },
	                _reactAddons2['default'].createElement(_Mau2['default'], {
	                  model: this.state.product.get('Model') })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Products;
	})(_reactAddons2['default'].Component);

	exports['default'] = Products;
	module.exports = exports['default'];
	/* Slide image */ /* Detail */ /* Thong tin San pham */ /* Thong tin nguoi mau */

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	var NavbarProductID = (function (_React$Component) {
	  _inherits(NavbarProductID, _React$Component);

	  function NavbarProductID(props) {
	    _classCallCheck(this, NavbarProductID);

	    _get(Object.getPrototypeOf(NavbarProductID.prototype), 'constructor', this).call(this, props);
	    this._bind('Like', 'Share', 'Cart', 'handleScroll');

	    this.state = {
	      hideHeader: false,
	      NavbarWidth: null
	    };
	  }

	  _createClass(NavbarProductID, [{
	    key: '_bind',
	    value: function _bind() {
	      var _this = this;

	      for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
	        methods[_key] = arguments[_key];
	      }

	      methods.forEach(function (method) {
	        return _this[method] = _this[method].bind(_this);
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('scroll', this.handleScroll);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this.handleScroll);
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll(e) {
	      var offsetWidth = this.refs.navbar.getDOMNode().offsetWidth;
	      var scrollTop = window.scrollY;
	      var hideHeader = scrollTop >= 80;
	      this.setState({
	        hideHeader: hideHeader,
	        NavbarWidth: offsetWidth
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classesNavbar = (0, _classnames2['default'])({
	        "navbar-product-detail": true,
	        "sticky": this.state.hideHeader
	      });

	      return _reactAddons2['default'].createElement(
	        'div',
	        { ref: 'navbar' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: classesNavbar, style: { width: this.state.NavbarWidth } },
	          _reactAddons2['default'].createElement(
	            'nav',
	            { className: 'navbar navbar-tocu' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'navbar-header' },
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'btn-group' },
	                _reactAddons2['default'].createElement(
	                  'button',
	                  { onClick: this.Like, type: 'button', className: 'btn btn-default navbar-btn' },
	                  _reactAddons2['default'].createElement(
	                    'i',
	                    { className: 'fa fa-heart gray' },
	                    ' '
	                  ),
	                  ' Thích'
	                ),
	                _reactAddons2['default'].createElement(
	                  'button',
	                  { type: 'button', className: 'btn btn-default count-like navbar-btn' },
	                  _reactAddons2['default'].createElement(
	                    'span',
	                    null,
	                    this.props.product.get('likesCount')
	                  )
	                )
	              ),
	              _reactAddons2['default'].createElement(
	                'button',
	                { onClick: this.Share, type: 'button', className: 'btn btn-default navbar-btn' },
	                _reactAddons2['default'].createElement(
	                  'i',
	                  { className: 'fa fa-facebook-square gray' },
	                  '  '
	                ),
	                'Chia sẻ'
	              )
	            ),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'nav navbar-nav navbar-right' },
	              this.renderBtn()
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderBtn',
	    value: function renderBtn() {
	      switch (this.props.product.get('status')) {
	        case "available":
	          return _reactAddons2['default'].createElement(
	            'button',
	            { onClick: this.Cart, type: 'button', className: 'btn btn-primary navbar-btn' },
	            _reactAddons2['default'].createElement(
	              'i',
	              { className: 'fa fa-shopping-cart gray' },
	              '  '
	            ),
	            ' Mua'
	          );
	        case "suspended":
	          return _reactAddons2['default'].createElement(
	            'button',
	            { onClick: this.Cart, type: 'button', className: 'btn btn-warning navbar-btn', disabled: true },
	            _reactAddons2['default'].createElement(
	              'i',
	              { className: 'fa fa-clock-o gray' },
	              '  '
	            ),
	            ' Mua'
	          );
	        default:
	          return _reactAddons2['default'].createElement(
	            'button',
	            { onClick: this.Cart, type: 'button', className: 'btn btn-warning navbar-btn', disabled: true },
	            _reactAddons2['default'].createElement(
	              'i',
	              { className: 'fa fa-clock-o gray' },
	              '  '
	            ),
	            ' Mua'
	          );
	      }
	    }
	  }, {
	    key: 'boxLogin',
	    value: function boxLogin(cb) {
	      if (!this.props.auth.get('access_token')) {
	        this.props.handleBoxLogin();
	      } else {
	        cb();
	      }
	    }
	  }, {
	    key: 'Like',
	    value: function Like() {
	      this.boxLogin((function () {
	        var token = this.props.auth.get('access_token');
	        var type = this.props.product.get('Box').get('type');
	        var itemId = this.props.product.get('id');

	        this.props.SanphamActions.like({ itemId: itemId, token: token, type: type });
	      }).bind(this));
	    }
	  }, {
	    key: 'Share',
	    value: function Share() {
	      console.log('Share');
	    }
	  }, {
	    key: 'Cart',
	    value: function Cart() {
	      var _props$product$toJS = this.props.product.toJS();

	      var id = _props$product$toJS.id;
	      var code = _props$product$toJS.code;
	      var boxName = _props$product$toJS.boxName;
	      var images = _props$product$toJS.images;
	      var price = _props$product$toJS.price;
	      var salePrice = _props$product$toJS.salePrice;
	      var weight = _props$product$toJS.weight;
	      var status = _props$product$toJS.status;

	      if (!this.props.cartId) {
	        this.props.CartActions.createCart({ id: id, code: code, boxName: boxName, imageUrl: images[0], price: price, salePrice: salePrice, weight: weight, quantity: 1, status: status });
	        console.log('createCart');
	      } else {
	        this.props.CartActions.pushToCart({ id: id, code: code, boxName: boxName, imageUrl: images[0], price: price, salePrice: salePrice, weight: weight, quantity: 1, status: status }, this.props.cartId);
	        console.log('pushToCart');
	      }
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      hideNavbar: _reactAddons2['default'].PropTypes.bool,
	      countLike: _reactAddons2['default'].PropTypes.number
	    },
	    enumerable: true
	  }]);

	  return NavbarProductID;
	})(_reactAddons2['default'].Component);

	exports['default'] = NavbarProductID;
	;
	module.exports = exports['default'];

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	/**
	 * @Component
	 */

	var _lightBoxSlideImg = __webpack_require__(435);

	var _lightBoxSlideImg2 = _interopRequireDefault(_lightBoxSlideImg);

	var ImgSlideProduct = (function (_React$Component) {
	  _inherits(ImgSlideProduct, _React$Component);

	  function ImgSlideProduct(props) {
	    _classCallCheck(this, ImgSlideProduct);

	    _get(Object.getPrototypeOf(ImgSlideProduct.prototype), 'constructor', this).call(this, props);
	    this.ShowLightBox = this.ShowLightBox.bind(this);
	    this.HideLightBox = this.HideLightBox.bind(this);
	    this.renderLightBox = this.renderLightBox.bind(this);
	    this.handleClickSlideTab = this.handleClickSlideTab.bind(this);

	    this.state = {
	      current: 0,
	      showLightBox: false
	    };
	  }

	  _createClass(ImgSlideProduct, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      return _reactAddons2['default'].createElement(
	        'div',
	        { className: 'imgProduct' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'imageContainer' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { ref: 'test', className: 'gallerySlide' },
	            _reactAddons2['default'].createElement(
	              'ul',
	              null,
	              this.props.dataUrlImg.map(function (url, i) {
	                var classSes = "";
	                if (_this.state.current === i) {
	                  classSes = "active";
	                }
	                var img_url = url.replace(/image\//gi, 'image/x468/');
	                return _reactAddons2['default'].createElement(
	                  'li',
	                  { key: i, className: classSes },
	                  _reactAddons2['default'].createElement(
	                    'figure',
	                    null,
	                    _reactAddons2['default'].createElement('img', { onClick: _this.ShowLightBox.bind(_this, i), src: img_url, alt: '' })
	                  )
	                );
	              })
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'slide-tabs' },
	            _reactAddons2['default'].createElement(
	              'ul',
	              null,
	              this.props.dataUrlImg.map(function (url, i) {
	                var classSes = "";
	                if (_this.state.current === i) {
	                  classSes = "active";
	                }
	                return _reactAddons2['default'].createElement('li', { key: i, className: classSes, onClick: _this.handleClickSlideTab.bind(_this, i) });
	              })
	            )
	          )
	        ),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'imageSlide-tabs' },
	          _reactAddons2['default'].createElement(
	            'ul',
	            null,
	            this.props.dataUrlImg.map(function (url, i) {
	              var classSes = "";
	              if (_this.state.current === i) {
	                classSes = "active";
	              }
	              var img_url = url.replace(/image\//gi, 'image/90x60/');
	              return _reactAddons2['default'].createElement(
	                'li',
	                { key: i, className: classSes },
	                _reactAddons2['default'].createElement(
	                  'figure',
	                  null,
	                  _reactAddons2['default'].createElement('img', { src: img_url, onClick: _this.handleClickSlideTab.bind(_this, i), alt: '' })
	                )
	              );
	            })
	          )
	        ),
	        this.renderLightBox()
	      );
	    }
	  }, {
	    key: 'renderLightBox',
	    value: function renderLightBox() {
	      if (this.state.showLightBox) {
	        return _reactAddons2['default'].createElement(_lightBoxSlideImg2['default'], {
	          dataUrlImg: this.props.dataUrlImg,
	          current: this.state.current,
	          showLightBox: this.state.showLightBox,
	          HideLightBox: this.HideLightBox
	        });
	      }
	    }
	  }, {
	    key: 'ShowLightBox',
	    value: function ShowLightBox(i, e) {
	      this.setState({
	        showLightBox: true,
	        current: i
	      });
	    }
	  }, {
	    key: 'HideLightBox',
	    value: function HideLightBox() {
	      this.setState({
	        showLightBox: false
	      });
	    }
	  }, {
	    key: 'handleClickSlideTab',
	    value: function handleClickSlideTab(i, e) {
	      this.setState({
	        current: i
	      });
	    }
	  }]);

	  return ImgSlideProduct;
	})(_reactAddons2['default'].Component);

	exports['default'] = ImgSlideProduct;
	;
	module.exports = exports['default'];

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	var lightBoxSlideImg = (function (_React$Component) {
	  _inherits(lightBoxSlideImg, _React$Component);

	  function lightBoxSlideImg(props) {
	    _classCallCheck(this, lightBoxSlideImg);

	    _get(Object.getPrototypeOf(lightBoxSlideImg.prototype), 'constructor', this).call(this, props);

	    this.state = {
	      current: this.props.current
	    };
	  }

	  _createClass(lightBoxSlideImg, [{
	    key: 'render',
	    value: function render() {
	      var length = this.props.dataUrlImg.size;
	      var phantram = 100 / length;
	      var translateX = phantram * this.state.current;
	      var PanesStyle = {
	        width: length * 100 + '%',
	        WebkitTransform: 'translate3d(-' + translateX + '%, 0px, 0px)',
	        MsTransform: 'translate3d(-' + translateX + '%, 0px, 0px)',
	        OTransform: 'translate3d(-' + translateX + '%, 0px, 0px)',
	        transform: 'translate3d(-' + translateX + '%, 0px, 0px)'
	      };

	      var PaneStyle = {
	        width: phantram + '%'
	      };

	      var classes = (0, _classnames2['default'])({
	        lightBoxSlideImg: true
	      });

	      var classesPrev = (0, _classnames2['default'])({
	        "next-prev": true,
	        "prev": true,
	        "hide": this.state.current === 0
	      });

	      var classesNext = (0, _classnames2['default'])({
	        "next-prev": true,
	        "next": true,
	        "hide": this.state.current === length - 1
	      });

	      return _reactAddons2['default'].createElement(
	        'div',
	        { className: 'lightBoxSlideImg' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'panes', style: PanesStyle },
	          this.props.dataUrlImg.map(function (url, i) {
	            return _reactAddons2['default'].createElement(
	              'div',
	              { key: i, className: 'pane', style: PaneStyle },
	              _reactAddons2['default'].createElement(
	                'figure',
	                null,
	                _reactAddons2['default'].createElement('img', { src: url })
	              )
	            );
	          })
	        ),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'paneNextPrev' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: classesPrev, onClick: this.Prev.bind(this) },
	            _reactAddons2['default'].createElement('i', { className: 'fa fa-angle-left' })
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: classesNext, onClick: this.Next.bind(this) },
	            _reactAddons2['default'].createElement('i', { className: 'fa fa-angle-right' })
	          )
	        ),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'closeBox', onClick: this.HideLightBox.bind(this) },
	          _reactAddons2['default'].createElement('i', { className: 'fa fa-times' })
	        )
	      );
	    }
	  }, {
	    key: 'HideLightBox',
	    value: function HideLightBox() {
	      this.props.HideLightBox();
	    }
	  }, {
	    key: 'Prev',
	    value: function Prev() {
	      var current = this.state.current - 1;
	      this.setState({
	        current: current
	      });
	    }
	  }, {
	    key: 'Next',
	    value: function Next() {
	      var current = this.state.current + 1;
	      this.setState({
	        current: current
	      });
	    }
	  }]);

	  return lightBoxSlideImg;
	})(_reactAddons2['default'].Component);

	exports['default'] = lightBoxSlideImg;
	;
	module.exports = exports['default'];

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _immutable = __webpack_require__(342);

	var _immutable2 = _interopRequireDefault(_immutable);

	var InfoSanpham = (function (_React$Component) {
	  _inherits(InfoSanpham, _React$Component);

	  function InfoSanpham() {
	    _classCallCheck(this, InfoSanpham);

	    _get(Object.getPrototypeOf(InfoSanpham.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(InfoSanpham, [{
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        'ul',
	        null,
	        _reactAddons2['default'].createElement(
	          'li',
	          null,
	          'Mã số: ',
	          _reactAddons2['default'].createElement(
	            'strong',
	            null,
	            this.props.product.get('code')
	          )
	        ),
	        _reactAddons2['default'].createElement(
	          'li',
	          null,
	          'Tình trạng: ',
	          _reactAddons2['default'].createElement(
	            'strong',
	            null,
	            'Còn hàng'
	          )
	        ),
	        _reactAddons2['default'].createElement(
	          'li',
	          null,
	          _reactAddons2['default'].createElement(
	            'p',
	            { className: 'status' },
	            this.props.product.get('description')
	          )
	        )
	      );
	    }
	  }]);

	  return InfoSanpham;
	})(_reactAddons2['default'].Component);

	exports['default'] = InfoSanpham;
	;

	InfoSanpham.propTypes = {
	  product: _reactAddons.PropTypes.instanceOf(_immutable2['default'].Map).isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _immutable = __webpack_require__(342);

	var _immutable2 = _interopRequireDefault(_immutable);

	var Detail = (function (_React$Component) {
	  _inherits(Detail, _React$Component);

	  function Detail() {
	    _classCallCheck(this, Detail);

	    _get(Object.getPrototypeOf(Detail.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Detail, [{
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        'div',
	        { className: 'detail' },
	        _reactAddons2['default'].createElement(
	          'h1',
	          null,
	          this.props.product.get('code')
	        ),
	        this.renderPrice()
	      );
	    }
	  }, {
	    key: 'renderPrice',
	    value: function renderPrice() {
	      /**
	       * format number to string   [250000 => "250.000"]
	       * @type {number}
	       */
	      var price = null;
	      var salePrice = null;
	      if (this.props.product.get('price')) {
	        price = this.props.product.get('price').toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
	      }
	      if (this.props.product.get('salePrice')) {
	        salePrice = this.props.product.get('salePrice').toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
	      }

	      if (this.props.product.get('salePrice')) {
	        return _reactAddons2['default'].createElement(
	          'h3',
	          { className: 'price' },
	          _reactAddons2['default'].createElement(
	            'span',
	            { className: 'price-list' },
	            price,
	            ' VNĐ'
	          ),
	          _reactAddons2['default'].createElement(
	            'span',
	            { className: 'price-sale' },
	            salePrice,
	            ' VNĐ'
	          )
	        );
	      } else {
	        return _reactAddons2['default'].createElement(
	          'h3',
	          { className: 'price' },
	          _reactAddons2['default'].createElement(
	            'span',
	            { className: 'price-sale' },
	            price,
	            ' VNĐ'
	          )
	        );
	      }
	    }
	  }]);

	  return Detail;
	})(_reactAddons2['default'].Component);

	exports['default'] = Detail;
	;

	Detail.propTypes = {
	  product: _reactAddons.PropTypes.instanceOf(_immutable2['default'].Map).isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _immutable = __webpack_require__(342);

	var _immutable2 = _interopRequireDefault(_immutable);

	var Mau = (function (_React$Component) {
	  _inherits(Mau, _React$Component);

	  function Mau() {
	    _classCallCheck(this, Mau);

	    _get(Object.getPrototypeOf(Mau.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Mau, [{
	    key: 'render',
	    value: function render() {
	      if (this.props.model) {
	        return _reactAddons2['default'].createElement(
	          'ul',
	          null,
	          _reactAddons2['default'].createElement(
	            'li',
	            { className: 'border-bottom-2' },
	            _reactAddons2['default'].createElement(
	              'strong',
	              null,
	              'Mẫu: '
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'li',
	            null,
	            'Cao: ',
	            _reactAddons2['default'].createElement(
	              'strong',
	              null,
	              this.props.model.get('height'),
	              ' cm'
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'li',
	            null,
	            'Nặng: ',
	            _reactAddons2['default'].createElement(
	              'strong',
	              null,
	              this.props.model.get('weight'),
	              ' kg'
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'li',
	            null,
	            'Vòng 1: ',
	            _reactAddons2['default'].createElement(
	              'strong',
	              null,
	              this.props.model.get('bust'),
	              ' cm'
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'li',
	            null,
	            'Vòng 2: ',
	            _reactAddons2['default'].createElement(
	              'strong',
	              null,
	              this.props.model.get('waist'),
	              ' cm'
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'li',
	            null,
	            'Vòng 3: ',
	            _reactAddons2['default'].createElement(
	              'strong',
	              null,
	              this.props.model.get('hip'),
	              ' cm'
	            )
	          )
	        );
	      } else {
	        return _reactAddons2['default'].createElement(
	          'ul',
	          null,
	          _reactAddons2['default'].createElement(
	            'li',
	            { className: 'border-bottom-2' },
	            _reactAddons2['default'].createElement(
	              'strong',
	              null,
	              'Mẫu: '
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'li',
	            null,
	            'Cao: ',
	            _reactAddons2['default'].createElement(
	              'strong',
	              null,
	              ' cm'
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'li',
	            null,
	            'Nặng: ',
	            _reactAddons2['default'].createElement(
	              'strong',
	              null,
	              ' kg'
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'li',
	            null,
	            'Vòng 1: ',
	            _reactAddons2['default'].createElement(
	              'strong',
	              null,
	              ' cm'
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'li',
	            null,
	            'Vòng 2: ',
	            _reactAddons2['default'].createElement(
	              'strong',
	              null,
	              ' cm'
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'li',
	            null,
	            'Vòng 3: ',
	            _reactAddons2['default'].createElement(
	              'strong',
	              null,
	              ' cm'
	            )
	          )
	        );
	      }
	    }
	  }]);

	  return Mau;
	})(_reactAddons2['default'].Component);

	exports['default'] = Mau;
	;

	Mau.propTypes = {
	  product: _reactAddons.PropTypes.instanceOf(_immutable2['default'].Map)
	};
	module.exports = exports['default'];

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _actionsSanphamActions = __webpack_require__(335);

	var _actionsSanphamActions2 = _interopRequireDefault(_actionsSanphamActions);

	var _axios = __webpack_require__(315);

	var _axios2 = _interopRequireDefault(_axios);

	var _reactRouter = __webpack_require__(238);

	var _configSample = __webpack_require__(334);

	var ReactAsync = __webpack_require__(365);
	var MasonryMixin = __webpack_require__(370);

	var masonryOptions = {
	  transitionDuration: 0
	};

	var Sidebar = _reactAddons2['default'].createClass({
	  displayName: 'Sidebar',

	  mixins: [MasonryMixin('masonryContainer', masonryOptions)],

	  getInitialState: function getInitialState() {
	    return {
	      page: 0,
	      hasMore: true,
	      skip: 0,
	      limit: 15,
	      posts: []
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    var self = this,
	        boxId = this.props.boxId;

	    _axios2['default'].get(_configSample.Api_URL + '/product/box/' + boxId + '?skip=' + 0 + '&limit=' + 15).then(function (res) {
	      self.setState({
	        posts: self.state.posts.concat(res.data)
	      });
	    });
	  },

	  render: function render() {
	    return _reactAddons2['default'].createElement(
	      'div',
	      { className: 'col-md-12 col-lg-12' },
	      _reactAddons2['default'].createElement(
	        'div',
	        { className: 'thumbnail sidebar' },
	        _reactAddons2['default'].createElement(
	          'nav',
	          { className: 'navbar navbar-default navbar-static-top' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'nav navbar-nav navbar-text' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'icon-img' },
	              this.renderIcon()
	            ),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'titleBox' },
	              _reactAddons2['default'].createElement(
	                'span',
	                null,
	                this.props.name
	              )
	            )
	          )
	        ),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'masonry-sidebar' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { ref: 'masonryContainer' },
	            this.state.posts.map((function (element, i) {
	              var img_url = "/img/404.jpg";
	              if (element.images) {
	                var url = element.images[0];
	                img_url = url.replace(/image\//gi, 'image/100x/');
	              }

	              return _reactAddons2['default'].createElement(
	                'div',
	                { onClick: this.handleViewSP.bind(null, element), key: i, className: 'col-xs-4 col-sm-4' },
	                _reactAddons2['default'].createElement(
	                  _reactRouter.Link,
	                  { to: '/product/' + element.id },
	                  _reactAddons2['default'].createElement(
	                    'div',
	                    { className: 'imgWrapper' },
	                    _reactAddons2['default'].createElement('img', { className: 'img-rounded', 'data-holder-rendered': 'true', src: img_url, alt: 'images' })
	                  )
	                )
	              );
	            }).bind(this))
	          )
	        )
	      )
	    );
	  },

	  handleViewSP: function handleViewSP(sp) {
	    _actionsSanphamActions2['default'].actionSanphamID(sp);
	  },

	  renderIcon: function renderIcon() {
	    switch (this.props.type) {
	      case "product":
	        return _reactAddons2['default'].createElement('span', { className: 'imgIcon imgIcon-list imgIcon-store' });
	      case "article":
	        return _reactAddons2['default'].createElement('span', { className: 'imgIcon imgIcon-list imgIcon-bg-blue' });
	      case "photo":
	        return _reactAddons2['default'].createElement('span', { className: 'imgIcon imgIcon-list imgIcon-bg-yellow' });
	    }
	  }

	});

	module.exports = Sidebar;
	/* navbar sidebar */ /* Gird item */

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(218)["default"];

	var _inherits = __webpack_require__(224)["default"];

	var _createClass = __webpack_require__(234)["default"];

	var _classCallCheck = __webpack_require__(237)["default"];

	var _interopRequireDefault = __webpack_require__(15)["default"];

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var BoxAuto = (function (_React$Component) {
	  _inherits(BoxAuto, _React$Component);

	  function BoxAuto() {
	    _classCallCheck(this, BoxAuto);

	    _get(Object.getPrototypeOf(BoxAuto.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(BoxAuto, [{
	    key: "render",
	    value: function render() {
	      return _reactAddons2["default"].createElement(
	        "div",
	        { className: "row row-bottom-detail" },
	        _reactAddons2["default"].createElement(
	          "div",
	          { className: "col-xs-6 col-sm-4 col-md-4 col-lg-4" },
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "thumbnail" },
	            _reactAddons2["default"].createElement(
	              "a",
	              { className: "", href: "/box/1" },
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "img-Wrapper" },
	                _reactAddons2["default"].createElement("img", { className: "img-max-height", src: "http://api.tocu.vn/image/220x220/be9645becb337e08394a-1-1.jpg", alt: "images" }),
	                _reactAddons2["default"].createElement("div", { className: "divshowdow" })
	              ),
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "thumbnail-list-news" },
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "list-news" },
	                  _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "list-item" },
	                    _reactAddons2["default"].createElement(
	                      "div",
	                      { className: "item" },
	                      _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "newsItem newCreditItem" },
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsImg" },
	                          _reactAddons2["default"].createElement("span", { className: "imgIcon imgIcon-list imgIcon-bg-red imgIcon-bg-store" })
	                        ),
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsText newsInfo" },
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            { className: "creditTitle" },
	                            "Cardigan"
	                          ),
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            null,
	                            _reactAddons2["default"].createElement(
	                              "strong",
	                              { className: "creditCost" },
	                              "150.000 đ"
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "list-item", style: { backgroundImage: "url(http://api.tocu.vn/image/220x53/b8fa64ef4cef5471b9c5-11-2.jpg)" } },
	                    _reactAddons2["default"].createElement(
	                      "div",
	                      { className: "item" },
	                      _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "newsItem newCreditItem" },
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsImg" },
	                          _reactAddons2["default"].createElement(
	                            "span",
	                            { className: "imgIcon imgIcon-list" },
	                            _reactAddons2["default"].createElement("img", { src: "http://api.tocu.vn/image/50x50/b8fa64ef4cef5471b9c5-11-2.jpg" })
	                          )
	                        ),
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsText newsInfo" },
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            { className: "creditTitle" },
	                            "Cardigan dày"
	                          ),
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            null,
	                            _reactAddons2["default"].createElement(
	                              "strong",
	                              { className: "creditCost" },
	                              "130.000 đ"
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "thumbnail-info" },
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "infoItem" },
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "titleItem" },
	                    "Sơ mi xô Nhật Hàn"
	                  ),
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "countItem" },
	                    "122 sản phẩm"
	                  )
	                ),
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "socialItem" },
	                  _reactAddons2["default"].createElement("span", { className: "SmallIcon likeSmallIcon" }),
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "socialMetaCount" },
	                    "132k"
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _reactAddons2["default"].createElement(
	          "div",
	          { className: "col-xs-6 col-sm-4 col-md-4 col-lg-4" },
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "thumbnail" },
	            _reactAddons2["default"].createElement(
	              "a",
	              { className: "", href: "/box/1" },
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "img-Wrapper" },
	                _reactAddons2["default"].createElement("img", { className: "img-max-height", src: "http://api.tocu.vn/image/220x220/be9645becb337e08394a-1-1.jpg", alt: "images" }),
	                _reactAddons2["default"].createElement("div", { className: "divshowdow" })
	              ),
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "thumbnail-list-news" },
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "list-news" },
	                  _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "list-item" },
	                    _reactAddons2["default"].createElement(
	                      "div",
	                      { className: "item" },
	                      _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "newsItem newCreditItem" },
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsImg" },
	                          _reactAddons2["default"].createElement("span", { className: "imgIcon imgIcon-list imgIcon-bg-red imgIcon-bg-store" })
	                        ),
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsText newsInfo" },
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            { className: "creditTitle" },
	                            "Cardigan"
	                          ),
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            null,
	                            _reactAddons2["default"].createElement(
	                              "strong",
	                              { className: "creditCost" },
	                              "150.000 đ"
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "list-item", style: { backgroundImage: "url(http://api.tocu.vn/image/220x53/b8fa64ef4cef5471b9c5-11-2.jpg)" } },
	                    _reactAddons2["default"].createElement(
	                      "div",
	                      { className: "item" },
	                      _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "newsItem newCreditItem" },
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsImg" },
	                          _reactAddons2["default"].createElement(
	                            "span",
	                            { className: "imgIcon imgIcon-list" },
	                            _reactAddons2["default"].createElement("img", { src: "http://api.tocu.vn/image/50x50/b8fa64ef4cef5471b9c5-11-2.jpg" })
	                          )
	                        ),
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsText newsInfo" },
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            { className: "creditTitle" },
	                            "Cardigan dày"
	                          ),
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            null,
	                            _reactAddons2["default"].createElement(
	                              "strong",
	                              { className: "creditCost" },
	                              "130.000 đ"
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "thumbnail-info" },
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "infoItem" },
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "titleItem" },
	                    "Sơ mi xô Nhật Hàn"
	                  ),
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "countItem" },
	                    "122 sản phẩm"
	                  )
	                ),
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "socialItem" },
	                  _reactAddons2["default"].createElement("span", { className: "SmallIcon likeSmallIcon" }),
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "socialMetaCount" },
	                    "132k"
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _reactAddons2["default"].createElement(
	          "div",
	          { className: "col-xs-6 col-sm-4 col-md-4 col-lg-4" },
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "thumbnail" },
	            _reactAddons2["default"].createElement(
	              "a",
	              { className: "", href: "/box/1" },
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "img-Wrapper" },
	                _reactAddons2["default"].createElement("img", { className: "img-max-height", src: "http://api.tocu.vn/image/220x220/be9645becb337e08394a-1-1.jpg", alt: "images" }),
	                _reactAddons2["default"].createElement("div", { className: "divshowdow" })
	              ),
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "thumbnail-list-news" },
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "list-news" },
	                  _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "list-item" },
	                    _reactAddons2["default"].createElement(
	                      "div",
	                      { className: "item" },
	                      _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "newsItem newCreditItem" },
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsImg" },
	                          _reactAddons2["default"].createElement("span", { className: "imgIcon imgIcon-list imgIcon-bg-red imgIcon-bg-store" })
	                        ),
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsText newsInfo" },
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            { className: "creditTitle" },
	                            "Cardigan"
	                          ),
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            null,
	                            _reactAddons2["default"].createElement(
	                              "strong",
	                              { className: "creditCost" },
	                              "150.000 đ"
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "list-item", style: { backgroundImage: "url(http://api.tocu.vn/image/220x53/b8fa64ef4cef5471b9c5-11-2.jpg)" } },
	                    _reactAddons2["default"].createElement(
	                      "div",
	                      { className: "item" },
	                      _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "newsItem newCreditItem" },
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsImg" },
	                          _reactAddons2["default"].createElement(
	                            "span",
	                            { className: "imgIcon imgIcon-list" },
	                            _reactAddons2["default"].createElement("img", { src: "http://api.tocu.vn/image/50x50/b8fa64ef4cef5471b9c5-11-2.jpg" })
	                          )
	                        ),
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsText newsInfo" },
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            { className: "creditTitle" },
	                            "Cardigan dày"
	                          ),
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            null,
	                            _reactAddons2["default"].createElement(
	                              "strong",
	                              { className: "creditCost" },
	                              "130.000 đ"
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "thumbnail-info" },
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "infoItem" },
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "titleItem" },
	                    "Sơ mi xô Nhật Hàn"
	                  ),
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "countItem" },
	                    "122 sản phẩm"
	                  )
	                ),
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "socialItem" },
	                  _reactAddons2["default"].createElement("span", { className: "SmallIcon likeSmallIcon" }),
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "socialMetaCount" },
	                    "132k"
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _reactAddons2["default"].createElement(
	          "div",
	          { className: "col-xs-6 col-sm-4 col-md-4 col-lg-4" },
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "thumbnail" },
	            _reactAddons2["default"].createElement(
	              "a",
	              { className: "", href: "/box/1" },
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "img-Wrapper" },
	                _reactAddons2["default"].createElement("img", { className: "img-max-height", src: "http://api.tocu.vn/image/220x220/be9645becb337e08394a-1-1.jpg", alt: "images" }),
	                _reactAddons2["default"].createElement("div", { className: "divshowdow" })
	              ),
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "thumbnail-list-news" },
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "list-news" },
	                  _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "list-item" },
	                    _reactAddons2["default"].createElement(
	                      "div",
	                      { className: "item" },
	                      _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "newsItem newCreditItem" },
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsImg" },
	                          _reactAddons2["default"].createElement("span", { className: "imgIcon imgIcon-list imgIcon-bg-red imgIcon-bg-store" })
	                        ),
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsText newsInfo" },
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            { className: "creditTitle" },
	                            "Cardigan"
	                          ),
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            null,
	                            _reactAddons2["default"].createElement(
	                              "strong",
	                              { className: "creditCost" },
	                              "150.000 đ"
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "list-item", style: { backgroundImage: "url(http://api.tocu.vn/image/220x53/b8fa64ef4cef5471b9c5-11-2.jpg)" } },
	                    _reactAddons2["default"].createElement(
	                      "div",
	                      { className: "item" },
	                      _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "newsItem newCreditItem" },
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsImg" },
	                          _reactAddons2["default"].createElement(
	                            "span",
	                            { className: "imgIcon imgIcon-list" },
	                            _reactAddons2["default"].createElement("img", { src: "http://api.tocu.vn/image/50x50/b8fa64ef4cef5471b9c5-11-2.jpg" })
	                          )
	                        ),
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsText newsInfo" },
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            { className: "creditTitle" },
	                            "Cardigan dày"
	                          ),
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            null,
	                            _reactAddons2["default"].createElement(
	                              "strong",
	                              { className: "creditCost" },
	                              "130.000 đ"
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "thumbnail-info" },
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "infoItem" },
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "titleItem" },
	                    "Sơ mi xô Nhật Hàn"
	                  ),
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "countItem" },
	                    "122 sản phẩm"
	                  )
	                ),
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "socialItem" },
	                  _reactAddons2["default"].createElement("span", { className: "SmallIcon likeSmallIcon" }),
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "socialMetaCount" },
	                    "132k"
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _reactAddons2["default"].createElement(
	          "div",
	          { className: "col-xs-6 col-sm-4 col-md-4 col-lg-4" },
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "thumbnail" },
	            _reactAddons2["default"].createElement(
	              "a",
	              { className: "", href: "/box/1" },
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "img-Wrapper" },
	                _reactAddons2["default"].createElement("img", { className: "img-max-height", src: "http://api.tocu.vn/image/220x220/be9645becb337e08394a-1-1.jpg", alt: "images" }),
	                _reactAddons2["default"].createElement("div", { className: "divshowdow" })
	              ),
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "thumbnail-list-news" },
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "list-news" },
	                  _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "list-item" },
	                    _reactAddons2["default"].createElement(
	                      "div",
	                      { className: "item" },
	                      _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "newsItem newCreditItem" },
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsImg" },
	                          _reactAddons2["default"].createElement("span", { className: "imgIcon imgIcon-list imgIcon-bg-red imgIcon-bg-store" })
	                        ),
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsText newsInfo" },
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            { className: "creditTitle" },
	                            "Cardigan"
	                          ),
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            null,
	                            _reactAddons2["default"].createElement(
	                              "strong",
	                              { className: "creditCost" },
	                              "150.000 đ"
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "list-item", style: { backgroundImage: "url(http://api.tocu.vn/image/220x53/b8fa64ef4cef5471b9c5-11-2.jpg)" } },
	                    _reactAddons2["default"].createElement(
	                      "div",
	                      { className: "item" },
	                      _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "newsItem newCreditItem" },
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsImg" },
	                          _reactAddons2["default"].createElement(
	                            "span",
	                            { className: "imgIcon imgIcon-list" },
	                            _reactAddons2["default"].createElement("img", { src: "http://api.tocu.vn/image/50x50/b8fa64ef4cef5471b9c5-11-2.jpg" })
	                          )
	                        ),
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsText newsInfo" },
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            { className: "creditTitle" },
	                            "Cardigan dày"
	                          ),
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            null,
	                            _reactAddons2["default"].createElement(
	                              "strong",
	                              { className: "creditCost" },
	                              "130.000 đ"
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "thumbnail-info" },
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "infoItem" },
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "titleItem" },
	                    "Sơ mi xô Nhật Hàn"
	                  ),
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "countItem" },
	                    "122 sản phẩm"
	                  )
	                ),
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "socialItem" },
	                  _reactAddons2["default"].createElement("span", { className: "SmallIcon likeSmallIcon" }),
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "socialMetaCount" },
	                    "132k"
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _reactAddons2["default"].createElement(
	          "div",
	          { className: "col-xs-6 col-sm-4 col-md-4 col-lg-4" },
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "thumbnail" },
	            _reactAddons2["default"].createElement(
	              "a",
	              { className: "", href: "/box/1" },
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "img-Wrapper" },
	                _reactAddons2["default"].createElement("img", { className: "img-max-height", src: "http://api.tocu.vn/image/220x220/be9645becb337e08394a-1-1.jpg", alt: "images" }),
	                _reactAddons2["default"].createElement("div", { className: "divshowdow" })
	              ),
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "thumbnail-list-news" },
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "list-news" },
	                  _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "list-item" },
	                    _reactAddons2["default"].createElement(
	                      "div",
	                      { className: "item" },
	                      _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "newsItem newCreditItem" },
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsImg" },
	                          _reactAddons2["default"].createElement("span", { className: "imgIcon imgIcon-list imgIcon-bg-red imgIcon-bg-store" })
	                        ),
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsText newsInfo" },
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            { className: "creditTitle" },
	                            "Cardigan"
	                          ),
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            null,
	                            _reactAddons2["default"].createElement(
	                              "strong",
	                              { className: "creditCost" },
	                              "150.000 đ"
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "list-item", style: { backgroundImage: "url(http://api.tocu.vn/image/220x53/b8fa64ef4cef5471b9c5-11-2.jpg)" } },
	                    _reactAddons2["default"].createElement(
	                      "div",
	                      { className: "item" },
	                      _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "newsItem newCreditItem" },
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsImg" },
	                          _reactAddons2["default"].createElement(
	                            "span",
	                            { className: "imgIcon imgIcon-list" },
	                            _reactAddons2["default"].createElement("img", { src: "http://api.tocu.vn/image/50x50/b8fa64ef4cef5471b9c5-11-2.jpg" })
	                          )
	                        ),
	                        _reactAddons2["default"].createElement(
	                          "div",
	                          { className: "newsText newsInfo" },
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            { className: "creditTitle" },
	                            "Cardigan dày"
	                          ),
	                          _reactAddons2["default"].createElement(
	                            "p",
	                            null,
	                            _reactAddons2["default"].createElement(
	                              "strong",
	                              { className: "creditCost" },
	                              "130.000 đ"
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              _reactAddons2["default"].createElement(
	                "div",
	                { className: "thumbnail-info" },
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "infoItem" },
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "titleItem" },
	                    "Sơ mi xô Nhật Hàn"
	                  ),
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "countItem" },
	                    "122 sản phẩm"
	                  )
	                ),
	                _reactAddons2["default"].createElement(
	                  "div",
	                  { className: "socialItem" },
	                  _reactAddons2["default"].createElement("span", { className: "SmallIcon likeSmallIcon" }),
	                  _reactAddons2["default"].createElement(
	                    "span",
	                    { className: "socialMetaCount" },
	                    "132k"
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return BoxAuto;
	})(_reactAddons2["default"].Component);

	exports["default"] = BoxAuto;
	;
	module.exports = exports["default"];

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _react = __webpack_require__(240);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(238);

	var _storeSaleStore = __webpack_require__(442);

	var _storeSaleStore2 = _interopRequireDefault(_storeSaleStore);

	var _actionsSanphamActions = __webpack_require__(335);

	var _actionsSanphamActions2 = _interopRequireDefault(_actionsSanphamActions);

	var Sale = (function (_React$Component) {
	  _inherits(Sale, _React$Component);

	  function Sale(props) {
	    _classCallCheck(this, Sale);

	    _get(Object.getPrototypeOf(Sale.prototype), 'constructor', this).call(this, props);
	    this._onChangeSaleStore = this._onChangeSaleStore.bind(this);

	    this.state = {
	      listSale: _storeSaleStore2['default'].getState().listSale
	    };
	  }

	  _createClass(Sale, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storeSaleStore2['default'].listen(this._onChangeSaleStore);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storeSaleStore2['default'].unlisten(this._onChangeSaleStore);
	    }
	  }, {
	    key: '_onChangeSaleStore',
	    value: function _onChangeSaleStore(state) {
	      this.setState({
	        listSale: state.listSale
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      return _react2['default'].createElement(
	        'div',
	        { className: 'panel panel-default' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel-heading' },
	          'Giảm giá'
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'list-group' },
	          this.state.listSale.map(function (item, i) {
	            var img_url = undefined,
	                price = undefined,
	                price_sale = undefined;

	            if (item.get('images').size) {
	              var url = item.get('images').get(0);
	              img_url = url.replace(/image\//gi, 'image/50x50/');
	            }
	            price = item.get('price').toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
	            price_sale = item.get('salePrice') !== null ? item.get('salePrice').toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.') : '0';

	            return _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/product/' + item.get('id'), onClick: _this.handleClick.bind(_this, item.toJS()), key: i, className: 'list-group-item' },
	              _react2['default'].createElement(
	                'div',
	                { className: 'list-group-body-item' },
	                _react2['default'].createElement(
	                  'div',
	                  { className: 'img' },
	                  _react2['default'].createElement(
	                    'span',
	                    { className: 'imgIcon' },
	                    _react2['default'].createElement('img', { src: img_url })
	                  )
	                ),
	                _react2['default'].createElement(
	                  'div',
	                  { className: 'newsText' },
	                  _react2['default'].createElement(
	                    'div',
	                    { className: 'title' },
	                    item.get('code')
	                  ),
	                  _react2['default'].createElement(
	                    'div',
	                    { className: 'price' },
	                    _react2['default'].createElement(
	                      'span',
	                      { className: 'price-list' },
	                      price,
	                      ' đ'
	                    ),
	                    _react2['default'].createElement(
	                      'span',
	                      { className: 'price-sale' },
	                      price_sale,
	                      ' đ'
	                    )
	                  )
	                )
	              )
	            );
	          })
	        )
	      );
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(sp) {
	      _actionsSanphamActions2['default'].actionSanphamID(sp);
	    }
	  }]);

	  return Sale;
	})(_react2['default'].Component);

	exports['default'] = Sale;
	;
	module.exports = exports['default'];

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _Array$from = __webpack_require__(339)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	var _Alt = __webpack_require__(204);

	var _Alt2 = _interopRequireDefault(_Alt);

	var _immutable = __webpack_require__(342);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _actionsSaleActions = __webpack_require__(428);

	var _actionsSaleActions2 = _interopRequireDefault(_actionsSaleActions);

	var SaleStore = (function () {
	  function SaleStore() {
	    _classCallCheck(this, SaleStore);

	    this.bindActions(_actionsSaleActions2['default']); // getProductSale
	    this.on('init', this.bootstrap);
	    this.on('bootstrap', this.bootstrap);

	    this.listSale = _immutable2['default'].List();
	  }

	  _createClass(SaleStore, [{
	    key: 'bootstrap',
	    value: function bootstrap() {
	      if (!_immutable2['default'].List.isList(this.listSale)) {
	        this.listSale = _immutable2['default'].fromJS(this.listSale);
	      }
	    }
	  }, {
	    key: 'onGetProductSale',
	    value: function onGetProductSale(data) {
	      this.listSale = this.listSale.merge(_Array$from(data));
	    }
	  }]);

	  return SaleStore;
	})();

	module.exports = _Alt2['default'].createStore(SaleStore, 'SaleStore');

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _validatorjs = __webpack_require__(356);

	var _validatorjs2 = _interopRequireDefault(_validatorjs);

	var _storeAuthStore = __webpack_require__(343);

	var _storeAuthStore2 = _interopRequireDefault(_storeAuthStore);

	var _actionsAuthActions = __webpack_require__(344);

	var _actionsAuthActions2 = _interopRequireDefault(_actionsAuthActions);

	/**
	 * @Component
	 */

	var _componentsFormSignIn = __webpack_require__(353);

	var _componentsFormSignIn2 = _interopRequireDefault(_componentsFormSignIn);

	var SignIn = (function (_React$Component) {
	  _inherits(SignIn, _React$Component);

	  function SignIn(props, context) {
	    _classCallCheck(this, SignIn);

	    _get(Object.getPrototypeOf(SignIn.prototype), 'constructor', this).call(this, props, context);
	  }

	  _createClass(SignIn, [{
	    key: 'componentWillMount',

	    // let {test} = this.context;
	    // console.log('onEnter SignIn')
	    // console.log(test)
	    value: function componentWillMount() {
	      this.props.HeadParams.setTitle("SignIn | tocu.vn");
	      this.props.HeadParams.setDescription("SignIn tocu.vn");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        'div',
	        { className: 'container' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'row row-form' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'col-xs-12 col-sm-7 col-md-5 col-centered' },
	            _reactAddons2['default'].createElement(_componentsFormSignIn2['default'], null)
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'onEnter',
	    value: function onEnter(next, transition) {}
	  }, {
	    key: 'contextTypes',
	    value: {
	      router: _reactAddons2['default'].PropTypes.object.isRequired
	    },
	    enumerable: true
	  }]);

	  return SignIn;
	})(_reactAddons2['default'].Component);

	exports['default'] = SignIn;
	;
	module.exports = exports['default'];

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _regeneratorRuntime = __webpack_require__(258)['default'];

	var _Promise = __webpack_require__(288)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _validatorjs = __webpack_require__(356);

	var _validatorjs2 = _interopRequireDefault(_validatorjs);

	var _actionsCityActions = __webpack_require__(414);

	var _actionsCityActions2 = _interopRequireDefault(_actionsCityActions);

	var _decorators = __webpack_require__(311);

	/**
	 * @Component
	 */

	var _componentsFormSignUp = __webpack_require__(445);

	var _componentsFormSignUp2 = _interopRequireDefault(_componentsFormSignUp);

	var SignUp = (function (_React$Component) {
	  _inherits(SignUp, _React$Component);

	  _createClass(SignUp, null, [{
	    key: 'onEnter',
	    value: function onEnter(next, transition) {
	      console.log('onEnter SignUp');
	    }
	  }, {
	    key: 'contextTypes',
	    value: {
	      router: _reactAddons2['default'].PropTypes.instanceOf(_reactRouter2['default']).isRequired
	    },
	    enumerable: true
	  }]);

	  function SignUp(props) {
	    _classCallCheck(this, _SignUp);

	    _get(Object.getPrototypeOf(_SignUp.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(SignUp, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.HeadParams.setTitle("SignUp | tocu.vn");
	      this.props.HeadParams.setDescription("SignUp tocu.vn");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        'div',
	        { className: 'container' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'row row-form' },
	          _reactAddons2['default'].createElement(_componentsFormSignUp2['default'], null)
	        )
	      );
	    }
	  }]);

	  var _SignUp = SignUp;
	  SignUp = (0, _decorators.prepareRoute)(function callee$1$0(_ref) {
	    var params = _ref.params;
	    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
	      while (1) switch (context$2$0.prev = context$2$0.next) {
	        case 0:
	          context$2$0.next = 2;
	          return _regeneratorRuntime.awrap(_Promise.all([_actionsCityActions2['default'].getCity()]));

	        case 2:
	          return context$2$0.abrupt('return', context$2$0.sent);

	        case 3:
	        case 'end':
	          return context$2$0.stop();
	      }
	    }, null, this);
	  })(SignUp) || SignUp;
	  return SignUp;
	})(_reactAddons2['default'].Component);

	exports['default'] = SignUp;
	;
	module.exports = exports['default'];

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = __webpack_require__(1)['default'];

	var _Object$keys = __webpack_require__(354)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _validatorjs = __webpack_require__(356);

	var _validatorjs2 = _interopRequireDefault(_validatorjs);

	var _reactRouter = __webpack_require__(238);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _storeAuthStore = __webpack_require__(343);

	var _storeAuthStore2 = _interopRequireDefault(_storeAuthStore);

	var _actionsAuthActions = __webpack_require__(344);

	var _actionsAuthActions2 = _interopRequireDefault(_actionsAuthActions);

	var _storeCityStore = __webpack_require__(418);

	var _storeCityStore2 = _interopRequireDefault(_storeCityStore);

	var _actionsCityActions = __webpack_require__(414);

	var _actionsCityActions2 = _interopRequireDefault(_actionsCityActions);

	var _storeVerifyStore = __webpack_require__(431);

	var _storeVerifyStore2 = _interopRequireDefault(_storeVerifyStore);

	var _actionsVerifyActions = __webpack_require__(347);

	var _actionsVerifyActions2 = _interopRequireDefault(_actionsVerifyActions);

	/**
	 * @Component
	 */

	var _altAltContainer = __webpack_require__(307);

	var _altAltContainer2 = _interopRequireDefault(_altAltContainer);

	var _select = __webpack_require__(357);

	var _select2 = _interopRequireDefault(_select);

	var _Verify = __webpack_require__(430);

	var _Verify2 = _interopRequireDefault(_Verify);

	var _inputValidation = __webpack_require__(446);

	var _inputValidation2 = _interopRequireDefault(_inputValidation);

	var Validations = {
	  mobilePhone: {
	    rules: { mobilePhone: ["required", "regex:/^([0-9]{10,11})$/"] },
	    messages: { "required.mobilePhone": "Nhập số điện thoại của bạn!", "regex.mobilePhone": "Số điện thoại không hợp lệ!" },
	    hasError: false,
	    errorMessage: '',
	    errorTextRequest: ''
	  },
	  name: {
	    rules: { name: ["required"] },
	    messages: { "required.name": "Nhập tên của bạn!" },
	    hasError: false,
	    errorMessage: '',
	    errorTextRequest: ''
	  },
	  password: {
	    rules: { password: ["required"] },
	    messages: { "required.password": "Nhập password của bạn!" },
	    hasError: false,
	    errorMessage: '',
	    errorTextRequest: ''
	  }
	};

	exports['default'] = _reactAddons2['default'].createClass({
	  displayName: 'SignUp',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],

	  contextTypes: {
	    router: _reactAddons.PropTypes.object.isRequired
	  },

	  getInitialState: function getInitialState() {
	    return _extends({
	      disabled: true,
	      ValidationData: Validations,
	      boxMaxacnhan: false
	    }, _storeAuthStore2['default'].getState(), _storeCityStore2['default'].getState(), _storeVerifyStore2['default'].getState());
	  },

	  componentDidMount: function componentDidMount() {
	    _storeAuthStore2['default'].listen(this._onChangeAuthStore);
	    _storeCityStore2['default'].listen(this._onChangeCityStore);
	    _storeVerifyStore2['default'].listen(this._onChangeVerifyStore);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    _storeAuthStore2['default'].unlisten(this._onChangeAuthStore);
	    _storeCityStore2['default'].unlisten(this._onChangeCityStore);
	    _storeVerifyStore2['default'].unlisten(this._onChangeVerifyStore);
	  },

	  _onChangeAuthStore: function _onChangeAuthStore(state) {
	    if (state.createUseState === "success") {
	      _actionsVerifyActions2['default'].getCode();
	      this.setState(_extends({
	        boxMaxacnhan: true
	      }, state));
	      return;
	    }
	    this.setState(_extends({}, state));
	  },

	  _onChangeCityStore: function _onChangeCityStore(state) {
	    this.setState(_extends({}, state));
	  },

	  _onChangeVerifyStore: function _onChangeVerifyStore(state) {
	    this.setState(_extends({}, state));
	  },

	  render: function render() {
	    return _reactAddons2['default'].createElement(
	      'div',
	      { className: 'col-xs-12 col-sm-7 col-md-5 col-centered' },
	      this.renderFrom(),
	      this.renderMaxacnhan()
	    );
	  },

	  renderFrom: function renderFrom() {
	    if (!this.state.boxMaxacnhan) {
	      var classNameFrom = (0, _classnames2['default'])({
	        "form-signup": true,
	        "hide": this.state.boxMaxacnhan
	      });

	      return _reactAddons2['default'].createElement(
	        'div',
	        { className: classNameFrom },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'form-header' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'form-title text-center' },
	            'Đăng Ký Tổ Cú'
	          )
	        ),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'form-body' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'form-group' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'logo' },
	              _reactAddons2['default'].createElement(
	                _reactRouter.Link,
	                { to: '/' },
	                _reactAddons2['default'].createElement('img', { src: '/img/logo.png' })
	              )
	            )
	          ),
	          this.state.createUseState === "failed" && _reactAddons2['default'].createElement(
	            'p',
	            { className: 'text-center text-danger' },
	            this.state.failedCreateMessage
	          ),
	          _reactAddons2['default'].createElement(
	            'form',
	            null,
	            _reactAddons2['default'].createElement(_inputValidation2['default'], {
	              ref: 'name',
	              type: 'name',
	              placeholder: 'Họ tên',
	              name: 'name',
	              validator: this.state.ValidationData.name,
	              onChange: this._onChangeInputHandler }),
	            _reactAddons2['default'].createElement(_inputValidation2['default'], {
	              ref: 'mobilePhone',
	              type: 'mobilePhone',
	              placeholder: 'Số điện thoại',
	              name: 'mobilePhone',
	              validator: this.state.ValidationData.mobilePhone,
	              onChange: this._onChangeInputHandler }),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'row' },
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'col-xs-6' },
	                _reactAddons2['default'].createElement(_select2['default'], {
	                  ref: 'city',
	                  type: 'city',
	                  List: this.state.city,
	                  onChange: this._onChangeSelectCity,
	                  firstValue: 'Tỉnh Thành' })
	              ),
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'col-xs-6' },
	                _reactAddons2['default'].createElement(_select2['default'], {
	                  ref: 'district',
	                  type: 'district',
	                  List: this.state.district,
	                  firstValue: 'Quận Huyện' })
	              )
	            ),
	            _reactAddons2['default'].createElement(_inputValidation2['default'], {
	              ref: 'password',
	              type: 'password',
	              placeholder: 'Mật khẩu',
	              name: 'password',
	              validator: this.state.ValidationData.password,
	              onChange: this._onChangeInputHandler }),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'form-group' },
	              _reactAddons2['default'].createElement(
	                'button',
	                { className: 'form-control btn btn-primary',
	                  onClick: this.CreateAuth,
	                  type: 'submit',
	                  disabled: this.state.disabled },
	                this.state.createUseState !== "loading" && "Tạo Tài Khoản",
	                this.state.createUseState === "loading" && _reactAddons2['default'].createElement('i', { className: 'fa fa-spinner fa-pulse' })
	              )
	            )
	          )
	        ),
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'form-footer text-center' },
	          _reactAddons2['default'].createElement(
	            _reactRouter.Link,
	            { to: 'signin' },
	            'Đăng Nhập'
	          )
	        )
	      );
	    }
	  },

	  renderMaxacnhan: function renderMaxacnhan() {
	    if (this.state.boxMaxacnhan) {
	      return _reactAddons2['default'].createElement(_Verify2['default'], {
	        auth: this.state.auth,
	        codeFaild: this.state.codeFaild,
	        verifyFaild: this.state.verifyFaild,
	        verifyState: this.state.verifyState,
	        VerifyActions: _actionsVerifyActions2['default'] });
	    }
	  },

	  _setAndValidateInput: function _setAndValidateInput(name, value) {
	    var ValidationData = this.state.ValidationData;
	    var data = {};
	    var _ValidationData$name = ValidationData[name];
	    var rules = _ValidationData$name.rules;
	    var messages = _ValidationData$name.messages;

	    ValidationData[name].hasFocus = true;
	    ValidationData[name].hasError = false;
	    ValidationData[name].errorMessage = '';
	    ValidationData[name].errorTextRequest = '';

	    data[name] = value || '';

	    var validation = new _validatorjs2['default'](data, rules, messages);

	    if (validation.fails()) {
	      ValidationData[name].hasError = true;
	      ValidationData[name].errorMessage = validation.errors.first(name);
	    }

	    this.setState({ ValidationData: ValidationData });
	  },

	  _setDisabledSubmit: function _setDisabledSubmit() {
	    var ValidationData = this.state.ValidationData,
	        total = _Object$keys(ValidationData).length,
	        done = 0,
	        disabled = undefined;

	    _Object$keys(ValidationData).forEach(function (key) {
	      if (ValidationData[key].hasFocus && ValidationData[key].hasError === false) {
	        done += 1;
	      }
	    });

	    disabled = done === total ? false : true;
	    this.setState({ disabled: disabled });
	  },

	  _onChangeInputHandler: function _onChangeInputHandler(name, value) {
	    this._setAndValidateInput(name, value);
	    this._setDisabledSubmit();
	  },

	  _onChangeSelectCity: function _onChangeSelectCity(citySelect) {
	    _actionsCityActions2['default'].getDistrict({ city: citySelect });
	  },

	  CreateAuth: function CreateAuth(e) {
	    e.preventDefault();
	    var name = this.refs.name.getValue();
	    var mobilePhone = this.refs.mobilePhone.getValue();
	    var city = this.refs.city.getValue();
	    var district = this.refs.district.getValue();
	    var password = this.refs.password.getValue();

	    _actionsAuthActions2['default'].CreateUser({ name: name, mobilePhone: mobilePhone, city: city, district: district, password: password });
	  }

	});
	module.exports = exports['default'];

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	/* @jsx React.DOM */
	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	exports['default'] = _reactAddons2['default'].createClass({
	  displayName: 'inputValidation',

	  getInitialState: function getInitialState() {
	    return {
	      value: this.props.defaultValue
	    };
	  },
	  propTypes: {
	    validation: _reactAddons2['default'].PropTypes.object,
	    onChange: _reactAddons2['default'].PropTypes.func,
	    placeholder: _reactAddons2['default'].PropTypes.string,
	    name: _reactAddons2['default'].PropTypes.string,
	    type: _reactAddons2['default'].PropTypes.string
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      validation: { hasError: false },
	      placeholder: '',
	      type: 'text'
	    };
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])({
	      "form-group": true,
	      "has-error": this.props.validator.hasError
	    });
	    var classesInput = (0, _classnames2['default'])({
	      "form-control": true,
	      "input-lg": this.props.size === "lg"
	    });

	    var erros;

	    if (this.props.validator.errorTextRequest !== "") {
	      erros = _reactAddons2['default'].createElement(
	        'label',
	        { className: 'control-label', htmlFor: this.props.name },
	        this.props.validator.errorTextRequest
	      );
	    } else {
	      erros = _reactAddons2['default'].createElement(
	        'label',
	        { className: 'control-label', htmlFor: this.props.name },
	        this.props.validator.errorMessage
	      );
	    }

	    return _reactAddons2['default'].createElement(
	      'div',
	      { className: classes },
	      this.props.validator.hasError && erros,
	      _reactAddons2['default'].createElement('input', {
	        className: classesInput,
	        type: this.props.type,
	        value: this.state.value,
	        name: this.props.name,
	        onChange: this._onChange,
	        onBlur: this._onBlur,
	        placeholder: this.props.placeholder })
	    );
	  },
	  _onChange: function _onChange(e) {
	    var value = e.target.value;
	    this.setValue(value);
	    this.props.onChange(this.props.name, value);
	  },
	  _onBlur: function _onBlur(e) {
	    var value = e.target.value;
	    this.props.onChange(this.props.name, value);
	  },
	  setValue: function setValue(txt) {
	    this.setState({ value: txt });
	  },
	  getValue: function getValue() {
	    return this.state.value;
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = __webpack_require__(218)["default"];

	var _inherits = __webpack_require__(224)["default"];

	var _createClass = __webpack_require__(234)["default"];

	var _classCallCheck = __webpack_require__(237)["default"];

	var _interopRequireDefault = __webpack_require__(15)["default"];

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var NotFound = (function (_React$Component) {
	  _inherits(NotFound, _React$Component);

	  function NotFound(props) {
	    _classCallCheck(this, NotFound);

	    _get(Object.getPrototypeOf(NotFound.prototype), "constructor", this).call(this, props);
	  }

	  _createClass(NotFound, [{
	    key: "render",
	    value: function render() {
	      return _reactAddons2["default"].createElement(
	        "div",
	        null,
	        _reactAddons2["default"].createElement("img", { src: "/img/404.jpg", style: { width: "100%", height: "100%" } })
	      );
	    }
	  }]);

	  return NotFound;
	})(_reactAddons2["default"].Component);

	exports["default"] = NotFound;
	;
	module.exports = exports["default"];

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _regeneratorRuntime = __webpack_require__(258)['default'];

	var _Promise = __webpack_require__(288)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _decorators = __webpack_require__(311);

	var _reactRouter = __webpack_require__(238);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _storeCityStore = __webpack_require__(418);

	var _storeCityStore2 = _interopRequireDefault(_storeCityStore);

	var _storeCartStore = __webpack_require__(348);

	var _storeCartStore2 = _interopRequireDefault(_storeCartStore);

	var _storeShipStore = __webpack_require__(419);

	var _storeShipStore2 = _interopRequireDefault(_storeShipStore);

	var _actionsCityActions = __webpack_require__(414);

	var _actionsCityActions2 = _interopRequireDefault(_actionsCityActions);

	/**
	 * @Component
	 */

	var _componentsHeaderNavbarNavbarCartShipMethod = __webpack_require__(449);

	var _componentsHeaderNavbarNavbarCartShipMethod2 = _interopRequireDefault(_componentsHeaderNavbarNavbarCartShipMethod);

	var Application = (function (_React$Component) {
	  _inherits(Application, _React$Component);

	  function Application(props) {
	    var _this = this;

	    _classCallCheck(this, _Application);

	    _get(Object.getPrototypeOf(_Application.prototype), 'constructor', this).call(this, props);

	    this._onChangeCityStore = function (state) {
	      _this.setState({
	        city: _storeCityStore2['default'].getState().city,
	        district: _storeCityStore2['default'].getState().district
	      });
	    };

	    this._onChangeCartStore = function (state) {
	      _this.setState({
	        listCart: _storeCartStore2['default'].getState().listCart,
	        cartId: _storeCartStore2['default'].getState().cartId,
	        totalCart: _storeCartStore2['default'].getTotalCart(),
	        weightCart: _storeCartStore2['default'].getWeightCart()
	      });
	    };

	    this._onChangeShipStore = function (state) {
	      _this.setState({
	        phiship: _storeShipStore2['default'].getState().phiship
	      });
	    };

	    this.renderListCart = function () {
	      return _this.state.listCart.map(function (cart, i) {
	        var url = cart.get('imageUrl');
	        var imgUrl = url.replace(/image\//gi, 'image/50x50/');

	        var price = null;
	        var salePrice = null;
	        if (cart.get('price')) {
	          price = _this.formatNumber(cart.get('price'));
	        }
	        if (cart.get('salePrice')) {
	          salePrice = _this.formatNumber(cart.get('salePrice'));
	        }

	        var classer = (0, _classnames2['default'])({
	          "list-group-item": true,
	          disabled: cart.get('status') !== "available"
	        });

	        return _reactAddons2['default'].createElement(
	          'li',
	          { key: i, className: classer },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'list-group-body-item' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'img' },
	              _reactAddons2['default'].createElement(
	                'span',
	                { className: 'imgIcon' },
	                _reactAddons2['default'].createElement('img', { src: imgUrl })
	              )
	            ),
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'newsText' },
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'title' },
	                cart.get('code')
	              ),
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'price' },
	                _reactAddons2['default'].createElement(
	                  'span',
	                  { className: 'price-list' },
	                  salePrice || price,
	                  'đ'
	                )
	              )
	            )
	          )
	        );
	      });
	    };

	    this.formatNumber = function (number) {
	      if (typeof number === "number") {
	        return number.toString().replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.');
	      } else {
	        return 0;
	      }
	    };

	    this.state = {
	      disabled: true,
	      city: _storeCityStore2['default'].getState().city,
	      district: _storeCityStore2['default'].getState().district,
	      listCart: _storeCartStore2['default'].getState().listCart,
	      cartId: _storeCartStore2['default'].getState().cartId,
	      totalCart: _storeCartStore2['default'].getTotalCart(),
	      weightCart: _storeCartStore2['default'].getWeightCart(),
	      phiship: _storeShipStore2['default'].getState().phiship
	    };
	  }

	  _createClass(Application, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storeCityStore2['default'].listen(this._onChangeCityStore);
	      _storeCartStore2['default'].listen(this._onChangeCartStore);
	      _storeShipStore2['default'].listen(this._onChangeShipStore);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storeCityStore2['default'].unlisten(this._onChangeCityStore);
	      _storeCartStore2['default'].unlisten(this._onChangeCartStore);
	      _storeShipStore2['default'].unlisten(this._onChangeShipStore);
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.HeadParams.setTitle("Checkout | tocu.vn");
	      this.props.HeadParams.setDescription("Checkout | Description");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _reactAddons2['default'].createElement(
	        'div',
	        { id: 'checkout' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'row' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'col-md-12 col-lg-12' },
	              _reactAddons2['default'].createElement(
	                'div',
	                { className: 'checkout' },
	                _reactAddons2['default'].createElement(_componentsHeaderNavbarNavbarCartShipMethod2['default'], {
	                  disabled: this.state.disabled,
	                  next: this._next,
	                  prev: this._prev }),
	                _reactAddons2['default'].createElement(
	                  'div',
	                  { className: 'checkout-body' },
	                  _reactAddons2['default'].createElement(
	                    'div',
	                    { className: 'sidebar' },
	                    _reactAddons2['default'].createElement(
	                      'div',
	                      { className: 'panel-group', id: 'accordion', role: 'tablist', 'aria-multiselectable': 'true' },
	                      _reactAddons2['default'].createElement(
	                        'div',
	                        { className: 'panel panel-default' },
	                        _reactAddons2['default'].createElement(
	                          'div',
	                          { className: 'panel-heading', role: 'tab', id: 'headingOne' },
	                          _reactAddons2['default'].createElement(
	                            'h4',
	                            { className: 'panel-title' },
	                            _reactAddons2['default'].createElement(
	                              'a',
	                              { role: 'button', 'data-toggle': 'collapse', href: '#collapseOne', 'aria-expanded': 'true', 'aria-controls': 'collapseOne' },
	                              'GIỎ HÀNG ',
	                              _reactAddons2['default'].createElement('i', { className: 'fa fa-angle-down pull-right' })
	                            )
	                          )
	                        ),
	                        _reactAddons2['default'].createElement(
	                          'div',
	                          { 'aria-expanded': 'true', id: 'collapseOne', className: 'panel-collapse collapse in', role: 'tabpanel', 'aria-labelledby': 'headingOne' },
	                          _reactAddons2['default'].createElement(
	                            'div',
	                            { className: 'panel-body' },
	                            _reactAddons2['default'].createElement(
	                              'ul',
	                              { className: 'list-group' },
	                              this.renderListCart()
	                            ),
	                            _reactAddons2['default'].createElement(
	                              'div',
	                              { className: 'panel-footer' },
	                              _reactAddons2['default'].createElement(
	                                'div',
	                                { className: 'panel-table' },
	                                _reactAddons2['default'].createElement(
	                                  'div',
	                                  { className: 'panel-key' },
	                                  'Tổng:'
	                                ),
	                                _reactAddons2['default'].createElement(
	                                  'div',
	                                  { className: 'panel-val' },
	                                  this.formatNumber(this.state.totalCart),
	                                  'đ'
	                                )
	                              )
	                            )
	                          )
	                        )
	                      ),
	                      _reactAddons2['default'].createElement(
	                        'div',
	                        { className: 'panel panel-default' },
	                        _reactAddons2['default'].createElement(
	                          'div',
	                          { className: 'panel-heading', role: 'tab', id: 'headingTwo' },
	                          _reactAddons2['default'].createElement(
	                            'h4',
	                            { className: 'panel-title' },
	                            _reactAddons2['default'].createElement(
	                              'a',
	                              { className: '', role: 'button', 'data-toggle': 'collapse', href: '#collapseTwo', 'aria-expanded': 'true', 'aria-controls': 'collapseTwo' },
	                              'VẬN CHUYỂN ',
	                              _reactAddons2['default'].createElement('i', { className: 'fa fa-angle-down pull-right' })
	                            )
	                          )
	                        ),
	                        _reactAddons2['default'].createElement(
	                          'div',
	                          { 'aria-expanded': 'true', id: 'collapseTwo', className: 'panel-collapse collapse in', role: 'tabpanel', 'aria-labelledby': 'headingTwo' },
	                          _reactAddons2['default'].createElement(
	                            'div',
	                            { className: 'panel-body panel-vanchuyen' },
	                            _reactAddons2['default'].createElement(
	                              'ul',
	                              { className: 'list-group' },
	                              _reactAddons2['default'].createElement(
	                                'li',
	                                { className: 'list-group-item' },
	                                _reactAddons2['default'].createElement(
	                                  'div',
	                                  { className: 'panel-list' },
	                                  _reactAddons2['default'].createElement(
	                                    'div',
	                                    { className: 'panel-key' },
	                                    'Phí:'
	                                  ),
	                                  _reactAddons2['default'].createElement(
	                                    'div',
	                                    { className: 'panel-val' },
	                                    this.formatNumber(this.state.phiship.get('cost')),
	                                    'đ'
	                                  )
	                                )
	                              ),
	                              _reactAddons2['default'].createElement(
	                                'li',
	                                { className: 'list-group-item' },
	                                _reactAddons2['default'].createElement(
	                                  'div',
	                                  { className: 'panel-list' },
	                                  _reactAddons2['default'].createElement(
	                                    'div',
	                                    { className: 'panel-key' },
	                                    'Thời gian:'
	                                  ),
	                                  _reactAddons2['default'].createElement(
	                                    'div',
	                                    { className: 'panel-val' },
	                                    '3 ngày'
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  _reactAddons2['default'].createElement(
	                    'div',
	                    { className: 'body-checkout' },
	                    this.props.children
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  var _Application = Application;
	  Application = (0, _decorators.prepareRoute)(function callee$1$0(_ref) {
	    var params = _ref.params;
	    return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
	      while (1) switch (context$2$0.prev = context$2$0.next) {
	        case 0:
	          context$2$0.next = 2;
	          return _regeneratorRuntime.awrap(_Promise.all([_actionsCityActions2['default'].getCity()]));

	        case 2:
	          return context$2$0.abrupt('return', context$2$0.sent);

	        case 3:
	        case 'end':
	          return context$2$0.stop();
	      }
	    }, null, this);
	  })(Application) || Application;
	  return Application;
	})(_reactAddons2['default'].Component);

	exports['default'] = Application;
	module.exports = exports['default'];

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(218)['default'];

	var _inherits = __webpack_require__(224)['default'];

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	var NavbarCart = (function (_React$Component) {
	  _inherits(NavbarCart, _React$Component);

	  function NavbarCart(props) {
	    _classCallCheck(this, NavbarCart);

	    _get(Object.getPrototypeOf(NavbarCart.prototype), 'constructor', this).call(this, props);

	    this.state = {
	      hideHeader: false
	    };
	  }

	  _createClass(NavbarCart, [{
	    key: 'render',
	    value: function render() {
	      var classesNavbar = (0, _classnames2['default'])({
	        "navbar": true,
	        "navbar-defaul": true
	      });

	      return _reactAddons2['default'].createElement(
	        'div',
	        { ref: 'navbar' },
	        _reactAddons2['default'].createElement(
	          'ol',
	          { className: 'breadcrumb' },
	          _reactAddons2['default'].createElement(
	            'li',
	            null,
	            _reactAddons2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/cart' },
	              'Cart'
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'li',
	            null,
	            _reactAddons2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/checkout' },
	              'Thông tin người nhận'
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'li',
	            null,
	            _reactAddons2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/checkout-ship-method', className: 'active' },
	              'PT vận chuyển'
	            )
	          ),
	          _reactAddons2['default'].createElement(
	            'li',
	            null,
	            _reactAddons2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/checkout-pay-method' },
	              'PT thanh toán'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return NavbarCart;
	})(_reactAddons2['default'].Component);

	exports['default'] = NavbarCart;
	;
	module.exports = exports['default'];

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _storeCityStore = __webpack_require__(418);

	var _storeCityStore2 = _interopRequireDefault(_storeCityStore);

	var _storeCartStore = __webpack_require__(348);

	var _storeCartStore2 = _interopRequireDefault(_storeCartStore);

	var _storeShipStore = __webpack_require__(419);

	var _storeShipStore2 = _interopRequireDefault(_storeShipStore);

	var _actionsCityActions = __webpack_require__(414);

	var _actionsCityActions2 = _interopRequireDefault(_actionsCityActions);

	/**
	 * @Component
	 */

	var _componentsHeaderNavbarNavbarCartShip = __webpack_require__(422);

	var _componentsHeaderNavbarNavbarCartShip2 = _interopRequireDefault(_componentsHeaderNavbarNavbarCartShip);

	var _componentsFormOrderFormNguoiNhan = __webpack_require__(423);

	var _componentsFormOrderFormNguoiNhan2 = _interopRequireDefault(_componentsFormOrderFormNguoiNhan);

	exports['default'] = _reactAddons2['default'].createClass({
	  displayName: 'Cart-checkout',

	  mixins: [_reactRouter.Navigation],

	  getInitialState: function getInitialState() {
	    return {
	      city: _storeCityStore2['default'].getState().city,
	      district: _storeCityStore2['default'].getState().district,
	      listCart: _storeCartStore2['default'].getState().listCart,
	      cartId: _storeCartStore2['default'].getState().cartId,
	      totalCart: _storeCartStore2['default'].getTotalCart(),
	      weightCart: _storeCartStore2['default'].getWeightCart(),
	      phiship: _storeShipStore2['default'].getState().phiship
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    _storeCityStore2['default'].listen(this._onChangeCityStore);
	    _storeCartStore2['default'].listen(this._onChangeCartStore);
	    _storeShipStore2['default'].listen(this._onChangeShipStore);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    _storeCityStore2['default'].unlisten(this._onChangeCityStore);
	    _storeCartStore2['default'].unlisten(this._onChangeCartStore);
	    _storeShipStore2['default'].unlisten(this._onChangeShipStore);
	  },

	  _onChangeCityStore: function _onChangeCityStore(state) {
	    this.setState({
	      city: _storeCityStore2['default'].getState().city,
	      district: _storeCityStore2['default'].getState().district
	    });
	  },

	  _onChangeCartStore: function _onChangeCartStore(state) {
	    this.setState({
	      listCart: _storeCartStore2['default'].getState().listCart,
	      cartId: _storeCartStore2['default'].getState().cartId,
	      totalCart: _storeCartStore2['default'].getTotalCart(),
	      weightCart: _storeCartStore2['default'].getWeightCart()
	    });
	  },

	  _onChangeShipStore: function _onChangeShipStore(state) {
	    this.setState({
	      phiship: _storeShipStore2['default'].getState().phiship
	    });
	  },

	  componentWillMount: function componentWillMount() {
	    this.props.HeadParams.setTitle("Checkout | tocu.vn");
	    this.props.HeadParams.setDescription("Checkout | Description");
	  },

	  render: function render() {
	    return _reactAddons2['default'].createElement(_componentsFormOrderFormNguoiNhan2['default'], {
	      ref: 'formNguoiNhan',
	      city: this.state.city,
	      district: this.state.district,
	      weight: this.state.weightCart,
	      next: this._next,
	      onChangeSelectCity: this._onChangeSelectCity });
	  },

	  _next: function _next(e) {
	    console.log('_next');
	    console.log(this.refs.formNguoiNhan.getValue());
	    this.transitionTo('/checkout-ship-method');
	  },

	  _onChangeSelectCity: function _onChangeSelectCity(citySelect) {
	    _actionsCityActions2['default'].getDistrict({ city: citySelect });
	    this.setState({
	      shippingMethod: ''
	    });
	  }

	});
	module.exports = exports['default'];

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _storeCityStore = __webpack_require__(418);

	var _storeCityStore2 = _interopRequireDefault(_storeCityStore);

	var _storeCartStore = __webpack_require__(348);

	var _storeCartStore2 = _interopRequireDefault(_storeCartStore);

	var _storeShipStore = __webpack_require__(419);

	var _storeShipStore2 = _interopRequireDefault(_storeShipStore);

	var _actionsCityActions = __webpack_require__(414);

	var _actionsCityActions2 = _interopRequireDefault(_actionsCityActions);

	/**
	 * @Component
	 */

	exports['default'] = _reactAddons2['default'].createClass({
	  displayName: 'Cart-shipMethod',

	  mixins: [_reactRouter.Navigation],

	  componentWillMount: function componentWillMount() {
	    // this.props.HeadParams.setTitle("Checkout | tocu.vn");
	    // this.props.HeadParams.setDescription("Checkout | Description");
	  },

	  render: function render() {
	    return _reactAddons2['default'].createElement(
	      'div',
	      null,
	      _reactAddons2['default'].createElement(
	        'div',
	        { className: 'ship-address' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'row' },
	          _reactAddons2['default'].createElement(
	            'h4',
	            { className: 'ship-address-title' },
	            'Phương thức vận chuyển'
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'col-sm-12 col-md-12' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'radio' },
	              _reactAddons2['default'].createElement(
	                'label',
	                null,
	                _reactAddons2['default'].createElement('input', { type: 'radio', name: 'optionsRadios', value: 'option1' }),
	                'Chuyển phát nhanh'
	              )
	            )
	          )
	        )
	      ),
	      _reactAddons2['default'].createElement(
	        'div',
	        { className: 'btn-continue' },
	        _reactAddons2['default'].createElement(
	          'button',
	          { onClick: this._next, type: 'button', className: 'btn btn-primary navbar-btn btn-block' },
	          'Tiếp'
	        )
	      )
	    );
	  },

	  _next: function _next() {
	    this.transitionTo('/checkout-pay-method');
	  }

	});
	module.exports = exports['default'];

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _reactAddons = __webpack_require__(16);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(238);

	var _classnames = __webpack_require__(337);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _storeCityStore = __webpack_require__(418);

	var _storeCityStore2 = _interopRequireDefault(_storeCityStore);

	var _storeCartStore = __webpack_require__(348);

	var _storeCartStore2 = _interopRequireDefault(_storeCartStore);

	var _storeShipStore = __webpack_require__(419);

	var _storeShipStore2 = _interopRequireDefault(_storeShipStore);

	var _actionsCityActions = __webpack_require__(414);

	var _actionsCityActions2 = _interopRequireDefault(_actionsCityActions);

	/**
	 * @Component
	 */

	exports['default'] = _reactAddons2['default'].createClass({
	  displayName: 'Checkout-payMethod',

	  mixins: [_reactRouter.Navigation],

	  componentWillMount: function componentWillMount() {
	    // this.props.HeadParams.setTitle("Checkout | tocu.vn");
	    // this.props.HeadParams.setDescription("Checkout | Description");
	  },

	  render: function render() {
	    return _reactAddons2['default'].createElement(
	      'div',
	      null,
	      _reactAddons2['default'].createElement(
	        'div',
	        { className: 'ship-address' },
	        _reactAddons2['default'].createElement(
	          'div',
	          { className: 'row' },
	          _reactAddons2['default'].createElement(
	            'h4',
	            { className: 'ship-address-title' },
	            'Phương thức thanh toán'
	          ),
	          _reactAddons2['default'].createElement(
	            'div',
	            { className: 'col-sm-12 col-md-12' },
	            _reactAddons2['default'].createElement(
	              'div',
	              { className: 'radio' },
	              _reactAddons2['default'].createElement(
	                'label',
	                null,
	                _reactAddons2['default'].createElement('input', { type: 'radio', name: 'optionsRadios', value: 'option1' }),
	                'Chuyển khoản nội địa'
	              )
	            )
	          )
	        )
	      ),
	      _reactAddons2['default'].createElement(
	        'div',
	        { className: 'btn-continue' },
	        _reactAddons2['default'].createElement(
	          'button',
	          { type: 'button', className: 'btn btn-primary navbar-btn btn-block' },
	          'Tiếp'
	        )
	      )
	    );
	  }

	});
	module.exports = exports['default'];

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(234)['default'];

	var _classCallCheck = __webpack_require__(237)['default'];

	var _interopRequireDefault = __webpack_require__(15)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _env = __webpack_require__(454);

	var _env2 = _interopRequireDefault(_env);

	var HeadParams = (function () {
	  function HeadParams(_ref) {
	    var title = _ref.title;
	    var desc = _ref.desc;
	    var keys = _ref.keys;

	    _classCallCheck(this, HeadParams);

	    this.title = title || 'Tocu.vn';
	    this.description = desc || "tocu";
	    this.keywords = keys || "tocu";
	  }

	  /**
	   * set Title page
	   * @param {string} title
	   */

	  _createClass(HeadParams, [{
	    key: 'setTitle',
	    value: function setTitle(title) {
	      this.title = title;

	      if (_env2['default'].CLIENT) {
	        var TagTitle = document.querySelector('head > title');
	        TagTitle.text = title;
	      }
	    }

	    /**
	     * set Description
	     * @param {string} description
	     */
	  }, {
	    key: 'setDescription',
	    value: function setDescription(description) {
	      this.description = description;

	      if (_env2['default'].CLIENT) {
	        var MetaDescription = document.querySelector('head > meta[name=description]');
	        MetaDescription.setAttribute('content', description);
	      }
	    }
	  }]);

	  return HeadParams;
	})();

	exports['default'] = HeadParams;
	;
	module.exports = exports['default'];

/***/ },
/* 454 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  CLIENT: typeof window !== 'undefined',
	  SERVER: typeof window === 'undefined'
	};

/***/ }
]);