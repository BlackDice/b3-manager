(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["b3chief"] = factory();
	else
		root["b3chief"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Chief = undefined;

	var _stampit = __webpack_require__(1);

	var _stampit2 = _interopRequireDefault(_stampit);

	var _Tree = __webpack_require__(147);

	var _Subject = __webpack_require__(329);

	var _Node = __webpack_require__(232);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Chief = exports.Chief = _stampit2.default.compose(_Tree.Tree, _Subject.Subject, _Node.Node);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQ2hpZWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxJQUFNLHdCQUFRLGtCQUFRLE9BQVIsMENBQWQiLCJmaWxlIjoiQ2hpZWYuanMiLCJzb3VyY2VSb290IjoiRDovd29ya3NwYWNlL2JlaGF2aW9yMy1jaGllZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGFtcGl0IGZyb20gJ3N0YW1waXQnO1xuXG5pbXBvcnQgeyBUcmVlIH0gZnJvbSAnLi9UcmVlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICcuL1N1YmplY3QnO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vTm9kZSc7XG5cbmV4cG9ydCBjb25zdCBDaGllZiA9IHN0YW1waXQuY29tcG9zZShcblx0VHJlZSwgU3ViamVjdCwgTm9kZVxuKTtcbiJdfQ==

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var _lodashAssign = __webpack_require__(2);

	var _lodashAssign2 = _interopRequireDefault(_lodashAssign);

	var _lodashIsObject = __webpack_require__(12);

	var _lodashIsObject2 = _interopRequireDefault(_lodashIsObject);

	var _lodashIsFunction = __webpack_require__(11);

	var _lodashIsFunction2 = _interopRequireDefault(_lodashIsFunction);

	var _stampSpecification = __webpack_require__(33);

	var _stampSpecification2 = _interopRequireDefault(_stampSpecification);

	var isComposable = _lodashIsObject2['default'];
	exports.isComposable = isComposable;
	var isStamp = function isStamp(obj) {
	  return (0, _lodashIsFunction2['default'])(obj) && (0, _lodashIsFunction2['default'])(obj.compose);
	};

	exports.isStamp = isStamp;
	function extractFunctions() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  var functions = args.reduce(function (result, arg) {
	    if ((0, _lodashIsFunction2['default'])(arg)) {
	      return result.concat(arg);
	    }
	    if (Array.isArray(arg)) {
	      return result.concat(extractFunctions.apply(undefined, _toConsumableArray(arg)) || []);
	    }
	    if ((0, _lodashIsObject2['default'])(arg)) {
	      return result.concat(extractFunctions.apply(undefined, _toConsumableArray(Object.values(arg))) || []);
	    }
	    return result;
	  }, []);
	  return functions.length === 0 ? undefined : functions;
	}

	var rawUtilities = {
	  methods: function methods() {
	    for (var _len2 = arguments.length, methodsObject = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      methodsObject[_key2] = arguments[_key2];
	    }

	    return (this.compose || _stampSpecification2['default']).call(this, { methods: _lodashAssign2['default'].apply(undefined, [{}].concat(methodsObject)) });
	  },
	  properties: function properties() {
	    for (var _len3 = arguments.length, propertiesObject = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      propertiesObject[_key3] = arguments[_key3];
	    }

	    return (this.compose || _stampSpecification2['default']).call(this, { properties: _lodashAssign2['default'].apply(undefined, [{}].concat(propertiesObject)) });
	  },
	  initializers: function initializers() {
	    return (this.compose || _stampSpecification2['default']).call(this, { initializers: extractFunctions.apply(undefined, arguments) });
	  },
	  deepProperties: function deepProperties() {
	    for (var _len4 = arguments.length, propertiesObject = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	      propertiesObject[_key4] = arguments[_key4];
	    }

	    return (this.compose || _stampSpecification2['default']).call(this, { deepProperties: _stampSpecification.merge.apply(undefined, [{}].concat(propertiesObject)) });
	  },
	  staticProperties: function staticProperties() {
	    for (var _len5 = arguments.length, propertiesObject = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	      propertiesObject[_key5] = arguments[_key5];
	    }

	    return (this.compose || _stampSpecification2['default']).call(this, { staticProperties: _lodashAssign2['default'].apply(undefined, [{}].concat(propertiesObject)) });
	  },
	  staticDeepProperties: function staticDeepProperties() {
	    for (var _len6 = arguments.length, propertiesObject = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	      propertiesObject[_key6] = arguments[_key6];
	    }

	    return (this.compose || _stampSpecification2['default']).call(this, { staticDeepProperties: _stampSpecification.merge.apply(undefined, [{}].concat(propertiesObject)) });
	  }
	};

	var baseStampit = (0, _stampSpecification2['default'])({
	  staticProperties: (0, _lodashAssign2['default'])({
	    refs: rawUtilities.properties,
	    props: rawUtilities.properties,
	    init: rawUtilities.initializers,
	    deepProps: rawUtilities.deepProperties,
	    statics: rawUtilities.staticProperties,

	    create: function create() {
	      return this.apply(undefined, arguments);
	    }
	  }, rawUtilities)
	});

	function convertStampitToComposeArgument() {
	  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var methods = _ref.methods;
	  var properties = _ref.properties;
	  var props = _ref.props;
	  var refs = _ref.refs;
	  var initializers = _ref.initializers;
	  var init = _ref.init;
	  var deepProperties = _ref.deepProperties;
	  var deepProps = _ref.deepProps;
	  var propertyDescriptors = _ref.propertyDescriptors;
	  var staticProperties = _ref.staticProperties;
	  var statics = _ref.statics;
	  var staticDeepProperties = _ref.staticDeepProperties;
	  var staticPropertyDescriptors = _ref.staticPropertyDescriptors;
	  var configuration = _ref.configuration;
	  var deepConfiguration = _ref.deepConfiguration;

	  var p = (0, _lodashIsObject2['default'])(props) || (0, _lodashIsObject2['default'])(refs) || (0, _lodashIsObject2['default'])(properties) ? (0, _lodashAssign2['default'])({}, props, refs, properties) : undefined;
	  var dp = (0, _lodashIsObject2['default'])(deepProps) || (0, _lodashIsObject2['default'])(deepProperties) ? (0, _stampSpecification.merge)({}, deepProps, deepProperties) : undefined;
	  var sp = (0, _lodashIsObject2['default'])(statics) || (0, _lodashIsObject2['default'])(staticProperties) ? (0, _lodashAssign2['default'])({}, statics, staticProperties) : undefined;
	  return {
	    methods: methods,
	    properties: p,
	    initializers: extractFunctions(init, initializers),
	    deepProperties: dp,
	    staticProperties: sp,
	    staticDeepProperties: staticDeepProperties,
	    propertyDescriptors: propertyDescriptors,
	    staticPropertyDescriptors: staticPropertyDescriptors,
	    configuration: configuration,
	    deepConfiguration: deepConfiguration
	  };
	}

	function stampit() {
	  for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	    args[_key7] = arguments[_key7];
	  }

	  var convertedArgs = args.filter(isComposable).map(convertStampitToComposeArgument);
	  return baseStampit.compose.apply(baseStampit, _toConsumableArray(convertedArgs));
	}

	exports['default'] = (0, _lodashAssign2['default'])(stampit, {
	  isStamp: isStamp,
	  isComposable: isComposable,
	  compose: baseStampit.compose,
	  refs: rawUtilities.properties,
	  props: rawUtilities.properties,
	  init: rawUtilities.initializers,
	  deepProps: rawUtilities.deepProperties,
	  statics: rawUtilities.staticProperties
	}, rawUtilities);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(3),
	    copyObject = __webpack_require__(5),
	    createAssigner = __webpack_require__(6),
	    isArrayLike = __webpack_require__(8),
	    isPrototype = __webpack_require__(22),
	    keys = __webpack_require__(23);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.c = 3;
	 * }
	 *
	 * function Bar() {
	 *   this.e = 5;
	 * }
	 *
	 * Foo.prototype.d = 4;
	 * Bar.prototype.f = 6;
	 *
	 * _.assign({ 'a': 1 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3, 'e': 5 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(4);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignValue;


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(3);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : source[key];

	    assignValue(object, key, newValue);
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var isIterateeCall = __webpack_require__(7),
	    rest = __webpack_require__(15);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return rest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(4),
	    isArrayLike = __webpack_require__(8),
	    isIndex = __webpack_require__(14),
	    isObject = __webpack_require__(12);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(9),
	    isFunction = __webpack_require__(11),
	    isLength = __webpack_require__(13);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(10);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(16),
	    toInteger = __webpack_require__(17);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as
	 * an array.
	 *
	 * **Note:** This method is based on the
	 * [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = rest;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(18);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(19);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(11),
	    isObject = __webpack_require__(12),
	    isSymbol = __webpack_require__(20);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(21);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 22 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(24),
	    baseKeys = __webpack_require__(26),
	    indexKeys = __webpack_require__(27),
	    isArrayLike = __webpack_require__(8),
	    isIndex = __webpack_require__(14),
	    isPrototype = __webpack_require__(22);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(25);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototype(object) === null);
	}

	module.exports = baseHas;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}

	module.exports = getPrototype;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}

	module.exports = baseKeys;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(28),
	    isArguments = __webpack_require__(29),
	    isArray = __webpack_require__(31),
	    isLength = __webpack_require__(13),
	    isString = __webpack_require__(32);

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	module.exports = indexKeys;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(30);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(8),
	    isObjectLike = __webpack_require__(21);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(31),
	    isObjectLike = __webpack_require__(21);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.merge = undefined;
	exports.default = compose;

	var _mergeWith = __webpack_require__(34);

	var _mergeWith2 = _interopRequireDefault(_mergeWith);

	var _assign = __webpack_require__(146);

	var _assign2 = _interopRequireDefault(_assign);

	var _isFunction = __webpack_require__(57);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _isObject = __webpack_require__(58);

	var _isObject2 = _interopRequireDefault(_isObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	This is an example implementation of the Stamp Specifications.
	See https://github.com/stampit-org/stamp-specification
	The code is optimized to be as readable as possible.
	 */

	var isDescriptor = _isObject2.default;
	var merge = exports.merge = function merge(dst, src) {
	  return (0, _mergeWith2.default)(dst, src, function (dstValue, srcValue) {
	    if (Array.isArray(dstValue)) {
	      if (Array.isArray(srcValue)) return dstValue.concat(srcValue);
	      if ((0, _isObject2.default)(srcValue)) return merge({}, srcValue);
	    }
	  });
	};

	/**
	 * Creates new factory instance.
	 * @param {object} descriptor The information about the object the factory will be creating.
	 * @returns {Function} The new factory function.
	 */
	function createFactory(descriptor) {
	  return function Stamp(options) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var obj = Object.create(descriptor.methods || {});

	    merge(obj, descriptor.deepProperties);
	    (0, _assign2.default)(obj, descriptor.properties);
	    Object.defineProperties(obj, descriptor.propertyDescriptors || {});

	    if (!descriptor.initializers || descriptor.initializers.length === 0) return obj;

	    return descriptor.initializers.filter(_isFunction2.default).reduce(function (resultingObj, initializer) {
	      var returnedValue = initializer.call(resultingObj, options, { instance: resultingObj, stamp: Stamp, args: [options].concat(args) });
	      return returnedValue === undefined ? resultingObj : returnedValue;
	    }, obj);
	  };
	}

	/**
	 * Returns a new stamp given a descriptor and a compose function implementation.
	 * @param {object} [descriptor={}] The information about the object the stamp will be creating.
	 * @param {Function} composeFunction The "compose" function implementation.
	 * @returns {Function}
	 */
	function createStamp(descriptor, composeFunction) {
	  var Stamp = createFactory(descriptor);

	  merge(Stamp, descriptor.staticDeepProperties);
	  (0, _assign2.default)(Stamp, descriptor.staticProperties);
	  Object.defineProperties(Stamp, descriptor.staticPropertyDescriptors || {});

	  var composeImplementation = (0, _isFunction2.default)(Stamp.compose) ? Stamp.compose : composeFunction;
	  Stamp.compose = function () {
	    return composeImplementation.apply(this, arguments);
	  };
	  (0, _assign2.default)(Stamp.compose, descriptor);

	  return Stamp;
	}

	/**
	 * Mutates the dstDescriptor by merging the srcComposable data into it.
	 * @param {object} dstDescriptor The descriptor object to merge into.
	 * @param {object} [srcComposable] The composable (either descriptor or stamp) to merge data form.
	 * @returns {object} Returns the dstDescriptor argument.
	 */
	function mergeComposable(dstDescriptor, srcComposable) {
	  var srcDescriptor = srcComposable && srcComposable.compose || srcComposable;
	  if (!isDescriptor(srcDescriptor)) return dstDescriptor;

	  var combineProperty = function combineProperty(propName, action) {
	    if (!(0, _isObject2.default)(srcDescriptor[propName])) return;
	    if (!(0, _isObject2.default)(dstDescriptor[propName])) dstDescriptor[propName] = {};
	    action(dstDescriptor[propName], srcDescriptor[propName]);
	  };

	  combineProperty('methods', _assign2.default);
	  combineProperty('properties', _assign2.default);
	  combineProperty('deepProperties', merge);
	  combineProperty('propertyDescriptors', _assign2.default);
	  combineProperty('staticProperties', _assign2.default);
	  combineProperty('staticDeepProperties', merge);
	  combineProperty('staticPropertyDescriptors', _assign2.default);
	  combineProperty('configuration', _assign2.default);
	  combineProperty('deepConfiguration', merge);
	  if (Array.isArray(srcDescriptor.initializers)) {
	    if (!Array.isArray(dstDescriptor.initializers)) dstDescriptor.initializers = [];
	    dstDescriptor.initializers.push.apply(dstDescriptor.initializers, srcDescriptor.initializers.filter(_isFunction2.default));
	  }

	  return dstDescriptor;
	}

	/**
	 * Given the list of composables (stamp descriptors and stamps) returns a new stamp (composable factory function).
	 * @param {...(object|Function)} [composables] The list of composables.
	 * @returns {Function} A new stamp (aka composable factory function).
	 */
	function compose() {
	  for (var _len2 = arguments.length, composables = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    composables[_key2] = arguments[_key2];
	  }

	  var descriptor = [this].concat(composables).filter(_isObject2.default).reduce(mergeComposable, {});
	  return createStamp(descriptor, compose);
	}
	//# sourceMappingURL=compose.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(35),
	    createAssigner = __webpack_require__(138);

	/**
	 * This method is like `_.merge` except that it accepts `customizer` which
	 * is invoked to produce the merged values of the destination and source
	 * properties. If `customizer` returns `undefined`, merging is handled by the
	 * method instead. The `customizer` is invoked with seven arguments:
	 * (objValue, srcValue, key, object, source, stack).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   if (_.isArray(objValue)) {
	 *     return objValue.concat(srcValue);
	 *   }
	 * }
	 *
	 * var object = {
	 *   'fruits': ['apple'],
	 *   'vegetables': ['beet']
	 * };
	 *
	 * var other = {
	 *   'fruits': ['banana'],
	 *   'vegetables': ['carrot']
	 * };
	 *
	 * _.mergeWith(object, other, customizer);
	 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	 */
	var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
	  baseMerge(object, source, srcIndex, customizer);
	});

	module.exports = mergeWith;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(36),
	    arrayEach = __webpack_require__(75),
	    assignMergeValue = __webpack_require__(76),
	    baseMergeDeep = __webpack_require__(77),
	    isArray = __webpack_require__(95),
	    isObject = __webpack_require__(58),
	    isTypedArray = __webpack_require__(132),
	    keysIn = __webpack_require__(134);

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  if (!(isArray(source) || isTypedArray(source))) {
	    var props = keysIn(source);
	  }
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  });
	}

	module.exports = baseMerge;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(37),
	    stackClear = __webpack_require__(45),
	    stackDelete = __webpack_require__(46),
	    stackGet = __webpack_require__(47),
	    stackHas = __webpack_require__(48),
	    stackSet = __webpack_require__(49);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(38),
	    listCacheDelete = __webpack_require__(39),
	    listCacheGet = __webpack_require__(42),
	    listCacheHas = __webpack_require__(43),
	    listCacheSet = __webpack_require__(44);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	module.exports = listCacheClear;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(40);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(41);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(40);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(40);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(40);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(37);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	module.exports = stackClear;


/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	module.exports = stackDelete;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(37),
	    MapCache = __webpack_require__(50);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache && cache.__data__.length == LARGE_ARRAY_SIZE) {
	    cache = this.__data__ = new MapCache(cache.__data__);
	  }
	  cache.set(key, value);
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(51),
	    mapCacheDelete = __webpack_require__(69),
	    mapCacheGet = __webpack_require__(72),
	    mapCacheHas = __webpack_require__(73),
	    mapCacheSet = __webpack_require__(74);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(52),
	    ListCache = __webpack_require__(37),
	    Map = __webpack_require__(65);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(53),
	    hashDelete = __webpack_require__(61),
	    hashGet = __webpack_require__(62),
	    hashHas = __webpack_require__(63),
	    hashSet = __webpack_require__(64);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(54);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	module.exports = hashClear;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(55);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(56);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(57),
	    isHostObject = __webpack_require__(59),
	    isObject = __webpack_require__(58),
	    toSource = __webpack_require__(60);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = isNative;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(58);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 58 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 59 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 60 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	module.exports = hashDelete;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(54);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(54);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(54);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(55),
	    root = __webpack_require__(66);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(68);

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);

	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);

	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();

	module.exports = root;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)(module), (function() { return this; }())))

/***/ },
/* 67 */
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
/* 68 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}

	module.exports = checkGlobal;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(70);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	module.exports = mapCacheDelete;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(71);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 71 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(70);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(70);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(70);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 75 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(41);

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (typeof key == 'number' && value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignMergeValue;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var assignMergeValue = __webpack_require__(76),
	    baseClone = __webpack_require__(78),
	    copyArray = __webpack_require__(100),
	    isArguments = __webpack_require__(88),
	    isArray = __webpack_require__(95),
	    isArrayLikeObject = __webpack_require__(89),
	    isFunction = __webpack_require__(57),
	    isObject = __webpack_require__(58),
	    isPlainObject = __webpack_require__(131),
	    isTypedArray = __webpack_require__(132),
	    toPlainObject = __webpack_require__(133);

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    newValue = srcValue;
	    if (isArray(srcValue) || isTypedArray(srcValue)) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	      else {
	        newValue = objValue;
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  stack.set(srcValue, newValue);

	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	  }
	  stack['delete'](srcValue);
	  assignMergeValue(object, key, newValue);
	}

	module.exports = baseMergeDeep;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(36),
	    arrayEach = __webpack_require__(75),
	    assignValue = __webpack_require__(79),
	    baseAssign = __webpack_require__(80),
	    cloneBuffer = __webpack_require__(99),
	    copyArray = __webpack_require__(100),
	    copySymbols = __webpack_require__(101),
	    getAllKeys = __webpack_require__(103),
	    getTag = __webpack_require__(106),
	    initCloneArray = __webpack_require__(111),
	    initCloneByTag = __webpack_require__(112),
	    initCloneObject = __webpack_require__(127),
	    isArray = __webpack_require__(95),
	    isBuffer = __webpack_require__(129),
	    isHostObject = __webpack_require__(59),
	    isObject = __webpack_require__(58),
	    keys = __webpack_require__(82);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  // Recursively populate clone (susceptible to call stack limits).
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(41);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignValue;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(81),
	    keys = __webpack_require__(82);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(79);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : source[key];

	    assignValue(object, key, newValue);
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(83),
	    baseKeys = __webpack_require__(85),
	    indexKeys = __webpack_require__(86),
	    isArrayLike = __webpack_require__(90),
	    isIndex = __webpack_require__(97),
	    isPrototype = __webpack_require__(98);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(84);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototype(object) === null);
	}

	module.exports = baseHas;


/***/ },
/* 84 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}

	module.exports = getPrototype;


/***/ },
/* 85 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}

	module.exports = baseKeys;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(87),
	    isArguments = __webpack_require__(88),
	    isArray = __webpack_require__(95),
	    isLength = __webpack_require__(93),
	    isString = __webpack_require__(96);

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	module.exports = indexKeys;


/***/ },
/* 87 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(89);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(90),
	    isObjectLike = __webpack_require__(94);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(91),
	    isFunction = __webpack_require__(57),
	    isLength = __webpack_require__(93);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(92);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 92 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 93 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 94 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 95 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(95),
	    isObjectLike = __webpack_require__(94);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 97 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 98 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 99 */
/***/ function(module, exports) {

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;


/***/ },
/* 100 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(81),
	    getSymbols = __webpack_require__(102);

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	module.exports = copySymbols;


/***/ },
/* 102 */
/***/ function(module, exports) {

	/** Built-in value references. */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	function getSymbols(object) {
	  // Coerce `object` to an object to avoid non-object errors in V8.
	  // See https://bugs.chromium.org/p/v8/issues/detail?id=3443 for more details.
	  return getOwnPropertySymbols(Object(object));
	}

	// Fallback for IE < 11.
	if (!getOwnPropertySymbols) {
	  getSymbols = function() {
	    return [];
	  };
	}

	module.exports = getSymbols;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(104),
	    getSymbols = __webpack_require__(102),
	    keys = __webpack_require__(82);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(105),
	    isArray = __webpack_require__(95);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ },
/* 105 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(107),
	    Map = __webpack_require__(65),
	    Promise = __webpack_require__(108),
	    Set = __webpack_require__(109),
	    WeakMap = __webpack_require__(110),
	    toSource = __webpack_require__(60);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(55),
	    root = __webpack_require__(66);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(55),
	    root = __webpack_require__(66);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(55),
	    root = __webpack_require__(66);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(55),
	    root = __webpack_require__(66);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 111 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(113),
	    cloneDataView = __webpack_require__(115),
	    cloneMap = __webpack_require__(116),
	    cloneRegExp = __webpack_require__(120),
	    cloneSet = __webpack_require__(121),
	    cloneSymbol = __webpack_require__(124),
	    cloneTypedArray = __webpack_require__(126);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	module.exports = initCloneByTag;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(114);

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	module.exports = cloneArrayBuffer;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(66);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(113);

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	module.exports = cloneDataView;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(117),
	    arrayReduce = __webpack_require__(118),
	    mapToArray = __webpack_require__(119);

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	module.exports = cloneMap;


/***/ },
/* 117 */
/***/ function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `Map#set` because it doesn't return the map instance in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	module.exports = addMapEntry;


/***/ },
/* 118 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 119 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 120 */
/***/ function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	module.exports = cloneRegExp;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(122),
	    arrayReduce = __webpack_require__(118),
	    setToArray = __webpack_require__(123);

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	module.exports = cloneSet;


/***/ },
/* 122 */
/***/ function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  set.add(value);
	  return set;
	}

	module.exports = addSetEntry;


/***/ },
/* 123 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(125);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	module.exports = cloneSymbol;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(66);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(113);

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	module.exports = cloneTypedArray;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(128),
	    getPrototype = __webpack_require__(84),
	    isPrototype = __webpack_require__(98);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(58);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	module.exports = baseCreate;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var constant = __webpack_require__(130),
	    root = __webpack_require__(66);

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = (freeModule && freeModule.exports === freeExports)
	  ? freeExports
	  : undefined;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = !Buffer ? constant(false) : function(value) {
	  return value instanceof Buffer;
	};

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)(module)))

/***/ },
/* 130 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var getter = _.constant(object);
	 *
	 * getter() === object;
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(84),
	    isHostObject = __webpack_require__(59),
	    isObjectLike = __webpack_require__(94);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(93),
	    isObjectLike = __webpack_require__(94);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(81),
	    keysIn = __webpack_require__(134);

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	module.exports = toPlainObject;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var baseKeysIn = __webpack_require__(135),
	    indexKeys = __webpack_require__(86),
	    isIndex = __webpack_require__(97),
	    isPrototype = __webpack_require__(98);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  var index = -1,
	      isProto = isPrototype(object),
	      props = baseKeysIn(object),
	      propsLength = props.length,
	      indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  while (++index < propsLength) {
	    var key = props[index];
	    if (!(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var Reflect = __webpack_require__(136),
	    iteratorToArray = __webpack_require__(137);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var enumerate = Reflect ? Reflect.enumerate : undefined,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.keysIn` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  object = object == null ? object : Object(object);

	  var result = [];
	  for (var key in object) {
	    result.push(key);
	  }
	  return result;
	}

	// Fallback for IE < 9 with es6-shim.
	if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
	  baseKeysIn = function(object) {
	    return iteratorToArray(enumerate(object));
	  };
	}

	module.exports = baseKeysIn;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(66);

	/** Built-in value references. */
	var Reflect = root.Reflect;

	module.exports = Reflect;


/***/ },
/* 137 */
/***/ function(module, exports) {

	/**
	 * Converts `iterator` to an array.
	 *
	 * @private
	 * @param {Object} iterator The iterator to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function iteratorToArray(iterator) {
	  var data,
	      result = [];

	  while (!(data = iterator.next()).done) {
	    result.push(data.value);
	  }
	  return result;
	}

	module.exports = iteratorToArray;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var isIterateeCall = __webpack_require__(139),
	    rest = __webpack_require__(140);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return rest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(41),
	    isArrayLike = __webpack_require__(90),
	    isIndex = __webpack_require__(97),
	    isObject = __webpack_require__(58);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(141),
	    toInteger = __webpack_require__(142);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as
	 * an array.
	 *
	 * **Note:** This method is based on the
	 * [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = rest;


/***/ },
/* 141 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(143);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(144);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(57),
	    isObject = __webpack_require__(58),
	    isSymbol = __webpack_require__(145);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(94);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(79),
	    copyObject = __webpack_require__(81),
	    createAssigner = __webpack_require__(138),
	    isArrayLike = __webpack_require__(90),
	    isPrototype = __webpack_require__(98),
	    keys = __webpack_require__(82);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.c = 3;
	 * }
	 *
	 * function Bar() {
	 *   this.e = 5;
	 * }
	 *
	 * Foo.prototype.d = 4;
	 * Bar.prototype.f = 6;
	 *
	 * _.assign({ 'a': 1 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3, 'e': 5 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Tree = undefined;

	var _map = __webpack_require__(148);

	var _map2 = _interopRequireDefault(_map);

	var _symbol = __webpack_require__(218);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _stampit = __webpack_require__(1);

	var _stampit2 = _interopRequireDefault(_stampit);

	var _Node = __webpack_require__(232);

	var _Persist = __webpack_require__(302);

	var _Behavior = __webpack_require__(247);

	var _Tree = __webpack_require__(324);

	var _Tree2 = _interopRequireDefault(_Tree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Tree = exports.Tree = (0, _stampit2.default)({
		initializers: initialize,
		methods: { createTree: createTree, saveTree: saveTree }
	}).compose(_Node.Node, _Persist.Persist, _Behavior.Behavior);

	var bTreeMap = (0, _symbol2.default)('map of behavior trees');

	function initialize() {
		this[bTreeMap] = new _map2.default();
	}

	function createTree(rootNodeName, rootNodeProperties) {
		var _this = this;

		var behaviorTree = new this.B3.BehaviorTree();

		var createNode = function createNode() {
			return _this.createNode.apply(_this, arguments);
		};

		var rootNode = createNode(rootNodeName, rootNodeProperties);
		behaviorTree.root = rootNode.getBehaviorNode();

		var tree = (0, _Tree2.default)({ behaviorTree: behaviorTree, rootNode: rootNode, createNode: createNode });

		this.saveTree(tree);
		return tree;
	}

	function saveTree(tree) {
		this[bTreeMap].set(tree.getId(), tree);
		this.persist(_Persist.TYPE.TREE, tree);
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcVHJlZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7QUFFTyxJQUFNLHNCQUFPLHVCQUFRO0FBQzNCLGVBQWMsVUFEYTtBQUUzQixVQUFTLEVBQUUsc0JBQUYsRUFBYyxrQkFBZDtBQUZrQixDQUFSLEVBR2pCLE9BSGlCLGtEQUFiOztBQUtQLElBQU0sV0FBVyxzQkFBTyx1QkFBUCxDQUFqQjs7QUFFQSxTQUFTLFVBQVQsR0FBc0I7QUFDckIsTUFBSyxRQUFMLElBQWlCLG1CQUFqQjtBQUNBOztBQUVELFNBQVMsVUFBVCxDQUFvQixZQUFwQixFQUFrQyxrQkFBbEMsRUFBc0Q7QUFBQTs7QUFDckQsS0FBTSxlQUFlLElBQUksS0FBSyxFQUFMLENBQVEsWUFBWixFQUFyQjs7QUFFQSxLQUFNLGFBQWEsU0FBYixVQUFhO0FBQUEsU0FBYSxNQUFLLFVBQUwsd0JBQWI7QUFBQSxFQUFuQjs7QUFFQSxLQUFNLFdBQVcsV0FBVyxZQUFYLEVBQXlCLGtCQUF6QixDQUFqQjtBQUNBLGNBQWEsSUFBYixHQUFvQixTQUFTLGVBQVQsRUFBcEI7O0FBRUEsS0FBTSxPQUFPLG9CQUFVLEVBQUUsMEJBQUYsRUFBZ0Isa0JBQWhCLEVBQTBCLHNCQUExQixFQUFWLENBQWI7O0FBRUEsTUFBSyxRQUFMLENBQWMsSUFBZDtBQUNBLFFBQU8sSUFBUDtBQUNBOztBQUVELFNBQVMsUUFBVCxDQUFrQixJQUFsQixFQUF3QjtBQUN2QixNQUFLLFFBQUwsRUFBZSxHQUFmLENBQW1CLEtBQUssS0FBTCxFQUFuQixFQUFpQyxJQUFqQztBQUNBLE1BQUssT0FBTCxDQUFhLGNBQVksSUFBekIsRUFBK0IsSUFBL0I7QUFDQSIsImZpbGUiOiJUcmVlLmpzIiwic291cmNlUm9vdCI6IkQ6L3dvcmtzcGFjZS9iZWhhdmlvcjMtY2hpZWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhbXBpdCBmcm9tICdzdGFtcGl0JztcblxuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgeyBQZXJzaXN0LCBUWVBFIGFzIFBlcnNpc3RUeXBlIH0gZnJvbSAnLi9QZXJzaXN0JztcbmltcG9ydCB7IEJlaGF2aW9yIH0gZnJvbSAnLi9CZWhhdmlvcic7XG5cbmltcG9ydCBUcmVlTW9kZWwgZnJvbSAnLi9tb2RlbC9UcmVlJztcblxuZXhwb3J0IGNvbnN0IFRyZWUgPSBzdGFtcGl0KHtcblx0aW5pdGlhbGl6ZXJzOiBpbml0aWFsaXplLFxuXHRtZXRob2RzOiB7IGNyZWF0ZVRyZWUsIHNhdmVUcmVlIH0sXG59KS5jb21wb3NlKE5vZGUsIFBlcnNpc3QsIEJlaGF2aW9yKTtcblxuY29uc3QgYlRyZWVNYXAgPSBTeW1ib2woJ21hcCBvZiBiZWhhdmlvciB0cmVlcycpO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xuXHR0aGlzW2JUcmVlTWFwXSA9IG5ldyBNYXAoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHJlZShyb290Tm9kZU5hbWUsIHJvb3ROb2RlUHJvcGVydGllcykge1xuXHRjb25zdCBiZWhhdmlvclRyZWUgPSBuZXcgdGhpcy5CMy5CZWhhdmlvclRyZWUoKTtcblxuXHRjb25zdCBjcmVhdGVOb2RlID0gKC4uLmFyZ3MpID0+IHRoaXMuY3JlYXRlTm9kZSguLi5hcmdzKTtcblxuXHRjb25zdCByb290Tm9kZSA9IGNyZWF0ZU5vZGUocm9vdE5vZGVOYW1lLCByb290Tm9kZVByb3BlcnRpZXMpO1xuXHRiZWhhdmlvclRyZWUucm9vdCA9IHJvb3ROb2RlLmdldEJlaGF2aW9yTm9kZSgpO1xuXG5cdGNvbnN0IHRyZWUgPSBUcmVlTW9kZWwoeyBiZWhhdmlvclRyZWUsIHJvb3ROb2RlLCBjcmVhdGVOb2RlIH0pO1xuXG5cdHRoaXMuc2F2ZVRyZWUodHJlZSk7XG5cdHJldHVybiB0cmVlO1xufVxuXG5mdW5jdGlvbiBzYXZlVHJlZSh0cmVlKSB7XG5cdHRoaXNbYlRyZWVNYXBdLnNldCh0cmVlLmdldElkKCksIHRyZWUpO1xuXHR0aGlzLnBlcnNpc3QoUGVyc2lzdFR5cGUuVFJFRSwgdHJlZSk7XG59XG4iXX0=

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(149), __esModule: true };

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(195);
	__webpack_require__(199);
	__webpack_require__(215);
	module.exports = __webpack_require__(159).Map;

/***/ },
/* 150 */
/***/ function(module, exports) {

	

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(152)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(155)(String, 'String', function(iterated){
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
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(153)
	  , defined   = __webpack_require__(154);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 153 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 154 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(156)
	  , $export        = __webpack_require__(157)
	  , redefine       = __webpack_require__(172)
	  , hide           = __webpack_require__(162)
	  , has            = __webpack_require__(173)
	  , Iterators      = __webpack_require__(174)
	  , $iterCreate    = __webpack_require__(175)
	  , setToStringTag = __webpack_require__(191)
	  , getPrototypeOf = __webpack_require__(193)
	  , ITERATOR       = __webpack_require__(192)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(158)
	  , core      = __webpack_require__(159)
	  , ctx       = __webpack_require__(160)
	  , hide      = __webpack_require__(162)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 158 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 159 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(161);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
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
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 161 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(163)
	  , createDesc = __webpack_require__(171);
	module.exports = __webpack_require__(167) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(164)
	  , IE8_DOM_DEFINE = __webpack_require__(166)
	  , toPrimitive    = __webpack_require__(170)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(167) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(165);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(167) && !__webpack_require__(168)(function(){
	  return Object.defineProperty(__webpack_require__(169)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(168)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(165)
	  , document = __webpack_require__(158).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(165);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 171 */
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
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(162);

/***/ },
/* 173 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(176)
	  , descriptor     = __webpack_require__(171)
	  , setToStringTag = __webpack_require__(191)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(162)(IteratorPrototype, __webpack_require__(192)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(164)
	  , dPs         = __webpack_require__(177)
	  , enumBugKeys = __webpack_require__(189)
	  , IE_PROTO    = __webpack_require__(186)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(169)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(190).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(163)
	  , anObject = __webpack_require__(164)
	  , getKeys  = __webpack_require__(178);

	module.exports = __webpack_require__(167) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(179)
	  , enumBugKeys = __webpack_require__(189);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(173)
	  , toIObject    = __webpack_require__(180)
	  , arrayIndexOf = __webpack_require__(183)(false)
	  , IE_PROTO     = __webpack_require__(186)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(181)
	  , defined = __webpack_require__(154);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(182);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 182 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(180)
	  , toLength  = __webpack_require__(184)
	  , toIndex   = __webpack_require__(185);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(153)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(153)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(187)('keys')
	  , uid    = __webpack_require__(188);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(158)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 188 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 189 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(158).document && document.documentElement;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(163).f
	  , has = __webpack_require__(173)
	  , TAG = __webpack_require__(192)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(187)('wks')
	  , uid        = __webpack_require__(188)
	  , Symbol     = __webpack_require__(158).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(173)
	  , toObject    = __webpack_require__(194)
	  , IE_PROTO    = __webpack_require__(186)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(154);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(196);
	var global        = __webpack_require__(158)
	  , hide          = __webpack_require__(162)
	  , Iterators     = __webpack_require__(174)
	  , TO_STRING_TAG = __webpack_require__(192)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(197)
	  , step             = __webpack_require__(198)
	  , Iterators        = __webpack_require__(174)
	  , toIObject        = __webpack_require__(180);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(155)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
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

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 197 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(200);

	// 23.1 Map Objects
	module.exports = __webpack_require__(210)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(163).f
	  , create      = __webpack_require__(176)
	  , hide        = __webpack_require__(162)
	  , redefineAll = __webpack_require__(201)
	  , ctx         = __webpack_require__(160)
	  , anInstance  = __webpack_require__(202)
	  , defined     = __webpack_require__(154)
	  , forOf       = __webpack_require__(203)
	  , $iterDefine = __webpack_require__(155)
	  , step        = __webpack_require__(198)
	  , setSpecies  = __webpack_require__(208)
	  , DESCRIPTORS = __webpack_require__(167)
	  , fastKey     = __webpack_require__(209).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(162);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(160)
	  , call        = __webpack_require__(204)
	  , isArrayIter = __webpack_require__(205)
	  , anObject    = __webpack_require__(164)
	  , toLength    = __webpack_require__(184)
	  , getIterFn   = __webpack_require__(206)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(164);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(174)
	  , ITERATOR   = __webpack_require__(192)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(207)
	  , ITERATOR  = __webpack_require__(192)('iterator')
	  , Iterators = __webpack_require__(174);
	module.exports = __webpack_require__(159).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(182)
	  , TAG = __webpack_require__(192)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(158)
	  , core        = __webpack_require__(159)
	  , dP          = __webpack_require__(163)
	  , DESCRIPTORS = __webpack_require__(167)
	  , SPECIES     = __webpack_require__(192)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(188)('meta')
	  , isObject = __webpack_require__(165)
	  , has      = __webpack_require__(173)
	  , setDesc  = __webpack_require__(163).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(168)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(158)
	  , $export        = __webpack_require__(157)
	  , meta           = __webpack_require__(209)
	  , fails          = __webpack_require__(168)
	  , hide           = __webpack_require__(162)
	  , redefineAll    = __webpack_require__(201)
	  , forOf          = __webpack_require__(203)
	  , anInstance     = __webpack_require__(202)
	  , isObject       = __webpack_require__(165)
	  , setToStringTag = __webpack_require__(191)
	  , dP             = __webpack_require__(163).f
	  , each           = __webpack_require__(211)(0)
	  , DESCRIPTORS    = __webpack_require__(167);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(160)
	  , IObject  = __webpack_require__(181)
	  , toObject = __webpack_require__(194)
	  , toLength = __webpack_require__(184)
	  , asc      = __webpack_require__(212);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(213);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(165)
	  , isArray  = __webpack_require__(214)
	  , SPECIES  = __webpack_require__(192)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(182);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(157);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(216)('Map')});

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(207)
	  , from    = __webpack_require__(217);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(203);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(219), __esModule: true };

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(220);
	__webpack_require__(150);
	__webpack_require__(230);
	__webpack_require__(231);
	module.exports = __webpack_require__(159).Symbol;

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(158)
	  , has            = __webpack_require__(173)
	  , DESCRIPTORS    = __webpack_require__(167)
	  , $export        = __webpack_require__(157)
	  , redefine       = __webpack_require__(172)
	  , META           = __webpack_require__(209).KEY
	  , $fails         = __webpack_require__(168)
	  , shared         = __webpack_require__(187)
	  , setToStringTag = __webpack_require__(191)
	  , uid            = __webpack_require__(188)
	  , wks            = __webpack_require__(192)
	  , wksExt         = __webpack_require__(221)
	  , wksDefine      = __webpack_require__(222)
	  , keyOf          = __webpack_require__(223)
	  , enumKeys       = __webpack_require__(224)
	  , isArray        = __webpack_require__(214)
	  , anObject       = __webpack_require__(164)
	  , toIObject      = __webpack_require__(180)
	  , toPrimitive    = __webpack_require__(170)
	  , createDesc     = __webpack_require__(171)
	  , _create        = __webpack_require__(176)
	  , gOPNExt        = __webpack_require__(227)
	  , $GOPD          = __webpack_require__(229)
	  , $DP            = __webpack_require__(163)
	  , $keys          = __webpack_require__(178)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(228).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(226).f  = $propertyIsEnumerable;
	  __webpack_require__(225).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(156)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(162)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(192);

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(158)
	  , core           = __webpack_require__(159)
	  , LIBRARY        = __webpack_require__(156)
	  , wksExt         = __webpack_require__(221)
	  , defineProperty = __webpack_require__(163).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(178)
	  , toIObject = __webpack_require__(180);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(178)
	  , gOPS    = __webpack_require__(225)
	  , pIE     = __webpack_require__(226);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 225 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 226 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(180)
	  , gOPN      = __webpack_require__(228).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(179)
	  , hiddenKeys = __webpack_require__(189).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(226)
	  , createDesc     = __webpack_require__(171)
	  , toIObject      = __webpack_require__(180)
	  , toPrimitive    = __webpack_require__(170)
	  , has            = __webpack_require__(173)
	  , IE8_DOM_DEFINE = __webpack_require__(166)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(167) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(222)('asyncIterator');

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(222)('observable');

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Node = undefined;

	var _assign = __webpack_require__(234);

	var _assign2 = _interopRequireDefault(_assign);

	var _construct = __webpack_require__(238);

	var _construct2 = _interopRequireDefault(_construct);

	var _map = __webpack_require__(148);

	var _map2 = _interopRequireDefault(_map);

	var _symbol = __webpack_require__(218);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _stampit = __webpack_require__(1);

	var _stampit2 = _interopRequireDefault(_stampit);

	var _lodash = __webpack_require__(243);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _lodash3 = __webpack_require__(244);

	var _lodash4 = _interopRequireDefault(_lodash3);

	var _lodash5 = __webpack_require__(245);

	var _lodash6 = _interopRequireDefault(_lodash5);

	var _invariant = __webpack_require__(246);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Behavior = __webpack_require__(247);

	var _Uid = __webpack_require__(286);

	var _Node = __webpack_require__(288);

	var _Node2 = _interopRequireDefault(_Node);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Node = exports.Node = _stampit2.default.compose(_Behavior.Behavior, _Uid.Uid, {
		initializers: [initializeMap, initializeBehaviorNodes],
		methods: { registerNode: registerNode, createNode: createNode }
	});

	var bNodeMap = (0, _symbol2.default)('map of nodes');

	function initializeMap() {
		this[bNodeMap] = new _map2.default();
	}

	function initializeBehaviorNodes() {
		this.getBehaviorNodes().forEach(this.registerNode, this);
	}

	function registerNode(nodeClass) {
		!(0, _lodash6.default)(nodeClass) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The registerNode() method has to be called with constructor function of node class.') : (0, _invariant2.default)(false) : void 0;

		!(nodeClass.prototype && (0, _lodash6.default)(nodeClass.prototype.tick)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Node class passed to registerNode() is missing the mandatory tick method on its prototype.' + // eslint-disable-line max-len
		'Either use B3.Class(B3.BaseNode, {}) or define your own class with such method.') : (0, _invariant2.default)(false) : void 0;

		var nodeName = nodeClass.prototype.name;

		!((0, _lodash2.default)(nodeName) && nodeName.length) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Passed node class %s to registerNode() call needs to have a unique string name specified.', nodeClass // eslint-disable-line max-len
		) : (0, _invariant2.default)(false) : void 0;

		!!this[bNodeMap].has(nodeName) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The name of node has to be unique. There is already node `%s` registered.', nodeName) : (0, _invariant2.default)(false) : void 0;

		this[bNodeMap].set(nodeName, nodeClass);
	}

	function createNode(nodeName) {
		var properties = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

		!(0, _lodash2.default)(nodeName) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Called createNode() without name of node to create. Name is expected to be a non-empty string.' // eslint-disable-line max-len
		) : (0, _invariant2.default)(false) : void 0;

		var nodeClass = this[bNodeMap].get(nodeName);
		if (nodeClass === undefined) {
			return null;
		}

		var behaviorNode = (0, _construct2.default)(nodeClass, []);

		if ((0, _lodash4.default)(properties) && (0, _lodash4.default)(behaviorNode.properties)) {
			(0, _assign2.default)(behaviorNode.properties, properties);
		}

		behaviorNode.id = nodeName + '-' + this.createUid();

		return _Node2.default.build(behaviorNode);
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcTm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTSxzQkFBTyxrQkFBUSxPQUFSLCtCQUErQjtBQUNsRCxlQUFjLENBQUMsYUFBRCxFQUFnQix1QkFBaEIsQ0FEb0M7QUFFbEQsVUFBUyxFQUFFLDBCQUFGLEVBQWdCLHNCQUFoQjtBQUZ5QyxDQUEvQixDQUFiOztBQUtQLElBQU0sV0FBVyxzQkFBTyxjQUFQLENBQWpCOztBQUVBLFNBQVMsYUFBVCxHQUF5QjtBQUN4QixNQUFLLFFBQUwsSUFBaUIsbUJBQWpCO0FBQ0E7O0FBRUQsU0FBUyx1QkFBVCxHQUFtQztBQUNsQyxNQUFLLGdCQUFMLEdBQXdCLE9BQXhCLENBQWdDLEtBQUssWUFBckMsRUFBbUQsSUFBbkQ7QUFDQTs7QUFFRCxTQUFTLFlBQVQsQ0FBc0IsU0FBdEIsRUFBaUM7QUFDaEMsRUFBVSxzQkFBWSxTQUFaLENBQVYsMkVBQ0MscUZBREQ7O0FBSUEsR0FBVSxVQUFVLFNBQVYsSUFBdUIsc0JBQVksVUFBVSxTQUFWLENBQW9CLElBQWhDLENBQWpDLDRFQUNDLCtGO0FBQ0Esa0ZBRkQ7O0FBS0EsS0FBTSxXQUFXLFVBQVUsU0FBVixDQUFvQixJQUFyQzs7QUFFQSxHQUFVLHNCQUFVLFFBQVYsS0FBdUIsU0FBUyxNQUExQyw0RUFDQywyRkFERCxFQUM4RixTO0FBRDlGOztBQUlBLEVBQVUsQ0FBQyxLQUFLLFFBQUwsRUFBZSxHQUFmLENBQW1CLFFBQW5CLENBQVgsMkVBQ0MsMkVBREQsRUFDOEUsUUFEOUU7O0FBSUEsTUFBSyxRQUFMLEVBQWUsR0FBZixDQUFtQixRQUFuQixFQUE2QixTQUE3QjtBQUNBOztBQUVELFNBQVMsVUFBVCxDQUFvQixRQUFwQixFQUFpRDtBQUFBLEtBQW5CLFVBQW1CLHlEQUFOLElBQU07O0FBQ2hELEVBQVUsc0JBQVUsUUFBVixDQUFWLDJFQUNDLGdHO0FBREQ7O0FBSUEsS0FBTSxZQUFZLEtBQUssUUFBTCxFQUFlLEdBQWYsQ0FBbUIsUUFBbkIsQ0FBbEI7QUFDQSxLQUFJLGNBQWMsU0FBbEIsRUFBNkI7QUFDNUIsU0FBTyxJQUFQO0FBQ0E7O0FBRUQsS0FBTSxlQUFlLHlCQUFrQixTQUFsQixFQUE2QixFQUE3QixDQUFyQjs7QUFFQSxLQUFJLHNCQUFVLFVBQVYsS0FBeUIsc0JBQVUsYUFBYSxVQUF2QixDQUE3QixFQUFpRTtBQUNoRSx3QkFBYyxhQUFhLFVBQTNCLEVBQXVDLFVBQXZDO0FBQ0E7O0FBRUQsY0FBYSxFQUFiLEdBQXFCLFFBQXJCLFNBQWlDLEtBQUssU0FBTCxFQUFqQzs7QUFFQSxRQUFPLGVBQVUsS0FBVixDQUFnQixZQUFoQixDQUFQO0FBQ0EiLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZVJvb3QiOiJEOi93b3Jrc3BhY2UvYmVoYXZpb3IzLWNoaWVmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YW1waXQgZnJvbSAnc3RhbXBpdCc7XG5cbmltcG9ydCBfaXNTdHJpbmcgZnJvbSAnbG9kYXNoLmlzc3RyaW5nJztcbmltcG9ydCBfaXNPYmplY3QgZnJvbSAnbG9kYXNoLmlzb2JqZWN0JztcbmltcG9ydCBfaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2guaXNmdW5jdGlvbic7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5cbmltcG9ydCB7IEJlaGF2aW9yIH0gZnJvbSAnLi9CZWhhdmlvcic7XG5pbXBvcnQgeyBVaWQgfSBmcm9tICcuL1VpZCc7XG5pbXBvcnQgTm9kZU1vZGVsIGZyb20gJy4vbW9kZWwvTm9kZSc7XG5cbmV4cG9ydCBjb25zdCBOb2RlID0gc3RhbXBpdC5jb21wb3NlKEJlaGF2aW9yLCBVaWQsIHtcblx0aW5pdGlhbGl6ZXJzOiBbaW5pdGlhbGl6ZU1hcCwgaW5pdGlhbGl6ZUJlaGF2aW9yTm9kZXNdLFxuXHRtZXRob2RzOiB7IHJlZ2lzdGVyTm9kZSwgY3JlYXRlTm9kZSB9LFxufSk7XG5cbmNvbnN0IGJOb2RlTWFwID0gU3ltYm9sKCdtYXAgb2Ygbm9kZXMnKTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZU1hcCgpIHtcblx0dGhpc1tiTm9kZU1hcF0gPSBuZXcgTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVCZWhhdmlvck5vZGVzKCkge1xuXHR0aGlzLmdldEJlaGF2aW9yTm9kZXMoKS5mb3JFYWNoKHRoaXMucmVnaXN0ZXJOb2RlLCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJOb2RlKG5vZGVDbGFzcykge1xuXHRpbnZhcmlhbnQoX2lzRnVuY3Rpb24obm9kZUNsYXNzKSxcblx0XHQnVGhlIHJlZ2lzdGVyTm9kZSgpIG1ldGhvZCBoYXMgdG8gYmUgY2FsbGVkIHdpdGggY29uc3RydWN0b3IgZnVuY3Rpb24gb2Ygbm9kZSBjbGFzcy4nXG5cdCk7XG5cblx0aW52YXJpYW50KG5vZGVDbGFzcy5wcm90b3R5cGUgJiYgX2lzRnVuY3Rpb24obm9kZUNsYXNzLnByb3RvdHlwZS50aWNrKSxcblx0XHQnTm9kZSBjbGFzcyBwYXNzZWQgdG8gcmVnaXN0ZXJOb2RlKCkgaXMgbWlzc2luZyB0aGUgbWFuZGF0b3J5IHRpY2sgbWV0aG9kIG9uIGl0cyBwcm90b3R5cGUuJyArIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuXHRcdCdFaXRoZXIgdXNlIEIzLkNsYXNzKEIzLkJhc2VOb2RlLCB7fSkgb3IgZGVmaW5lIHlvdXIgb3duIGNsYXNzIHdpdGggc3VjaCBtZXRob2QuJ1xuXHQpO1xuXG5cdGNvbnN0IG5vZGVOYW1lID0gbm9kZUNsYXNzLnByb3RvdHlwZS5uYW1lO1xuXG5cdGludmFyaWFudChfaXNTdHJpbmcobm9kZU5hbWUpICYmIG5vZGVOYW1lLmxlbmd0aCxcblx0XHQnUGFzc2VkIG5vZGUgY2xhc3MgJXMgdG8gcmVnaXN0ZXJOb2RlKCkgY2FsbCBuZWVkcyB0byBoYXZlIGEgdW5pcXVlIHN0cmluZyBuYW1lIHNwZWNpZmllZC4nLCBub2RlQ2xhc3MgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuXHQpO1xuXG5cdGludmFyaWFudCghdGhpc1tiTm9kZU1hcF0uaGFzKG5vZGVOYW1lKSxcblx0XHQnVGhlIG5hbWUgb2Ygbm9kZSBoYXMgdG8gYmUgdW5pcXVlLiBUaGVyZSBpcyBhbHJlYWR5IG5vZGUgYCVzYCByZWdpc3RlcmVkLicsIG5vZGVOYW1lXG5cdCk7XG5cblx0dGhpc1tiTm9kZU1hcF0uc2V0KG5vZGVOYW1lLCBub2RlQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb2RlKG5vZGVOYW1lLCBwcm9wZXJ0aWVzID0gbnVsbCkge1xuXHRpbnZhcmlhbnQoX2lzU3RyaW5nKG5vZGVOYW1lKSxcblx0XHQnQ2FsbGVkIGNyZWF0ZU5vZGUoKSB3aXRob3V0IG5hbWUgb2Ygbm9kZSB0byBjcmVhdGUuIE5hbWUgaXMgZXhwZWN0ZWQgdG8gYmUgYSBub24tZW1wdHkgc3RyaW5nLicgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG5cdCk7XG5cblx0Y29uc3Qgbm9kZUNsYXNzID0gdGhpc1tiTm9kZU1hcF0uZ2V0KG5vZGVOYW1lKTtcblx0aWYgKG5vZGVDbGFzcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCBiZWhhdmlvck5vZGUgPSBSZWZsZWN0LmNvbnN0cnVjdChub2RlQ2xhc3MsIFtdKTtcblxuXHRpZiAoX2lzT2JqZWN0KHByb3BlcnRpZXMpICYmIF9pc09iamVjdChiZWhhdmlvck5vZGUucHJvcGVydGllcykpIHtcblx0XHRPYmplY3QuYXNzaWduKGJlaGF2aW9yTm9kZS5wcm9wZXJ0aWVzLCBwcm9wZXJ0aWVzKTtcblx0fVxuXG5cdGJlaGF2aW9yTm9kZS5pZCA9IGAke25vZGVOYW1lfS0ke3RoaXMuY3JlYXRlVWlkKCl9YDtcblxuXHRyZXR1cm4gTm9kZU1vZGVsLmJ1aWxkKGJlaGF2aW9yTm9kZSk7XG59XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(233)))

/***/ },
/* 233 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
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
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
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

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(235), __esModule: true };

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(236);
	module.exports = __webpack_require__(159).Object.assign;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(157);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(237)});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(178)
	  , gOPS     = __webpack_require__(225)
	  , pIE      = __webpack_require__(226)
	  , toObject = __webpack_require__(194)
	  , IObject  = __webpack_require__(181)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(168)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(239), __esModule: true };

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(240);
	module.exports = __webpack_require__(159).Reflect.construct;

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export   = __webpack_require__(157)
	  , create    = __webpack_require__(176)
	  , aFunction = __webpack_require__(161)
	  , anObject  = __webpack_require__(164)
	  , isObject  = __webpack_require__(165)
	  , bind      = __webpack_require__(241);

	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(168)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(161)
	  , isObject   = __webpack_require__(165)
	  , invoke     = __webpack_require__(242)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 242 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
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
	  } return              fn.apply(that, args);
	};

/***/ },
/* 243 */
/***/ function(module, exports) {

	/**
	 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 244 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 245 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isFunction;


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

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

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(233)))

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Behavior = undefined;

	var _assign = __webpack_require__(234);

	var _assign2 = _interopRequireDefault(_assign);

	var _values = __webpack_require__(248);

	var _values2 = _interopRequireDefault(_values);

	var _stampit = __webpack_require__(1);

	var _stampit2 = _interopRequireDefault(_stampit);

	var _index = __webpack_require__(252);

	var B3 = _interopRequireWildcard(_index);

	var _decorators = __webpack_require__(271);

	var Decorators = _interopRequireWildcard(_decorators);

	var _composites = __webpack_require__(279);

	var Composites = _interopRequireWildcard(_composites);

	var _actions = __webpack_require__(280);

	var Actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Behavior = exports.Behavior = (0, _stampit2.default)({
		properties: { B3: B3 },
		methods: { getBehaviorNodes: getBehaviorNodes }
	});

	function getBehaviorNodes() {
		return (0, _values2.default)((0, _assign2.default)({}, Decorators, Composites, Actions));
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcQmVoYXZpb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7SUFBWSxFOztBQUNaOztJQUFZLFU7O0FBQ1o7O0lBQVksVTs7QUFDWjs7SUFBWSxPOzs7Ozs7QUFFTCxJQUFNLDhCQUFXLHVCQUFRO0FBQy9CLGFBQVksRUFBRSxNQUFGLEVBRG1CO0FBRS9CLFVBQVMsRUFBRSxrQ0FBRjtBQUZzQixDQUFSLENBQWpCOztBQUtQLFNBQVMsZ0JBQVQsR0FBNEI7QUFDM0IsUUFBTyxzQkFDTixzQkFBYyxFQUFkLEVBQWtCLFVBQWxCLEVBQThCLFVBQTlCLEVBQTBDLE9BQTFDLENBRE0sQ0FBUDtBQUdBIiwiZmlsZSI6IkJlaGF2aW9yLmpzIiwic291cmNlUm9vdCI6IkQ6L3dvcmtzcGFjZS9iZWhhdmlvcjMtY2hpZWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhbXBpdCBmcm9tICdzdGFtcGl0JztcblxuaW1wb3J0ICogYXMgQjMgZnJvbSAnLi9iZWhhdmlvcjNqcy9zcmMvaW5kZXguanMnO1xuaW1wb3J0ICogYXMgRGVjb3JhdG9ycyBmcm9tICcuL2JlaGF2aW9yM2pzL3NyYy9kZWNvcmF0b3JzJztcbmltcG9ydCAqIGFzIENvbXBvc2l0ZXMgZnJvbSAnLi9iZWhhdmlvcjNqcy9zcmMvY29tcG9zaXRlcyc7XG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4vYmVoYXZpb3IzanMvc3JjL2FjdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgQmVoYXZpb3IgPSBzdGFtcGl0KHtcblx0cHJvcGVydGllczogeyBCMyB9LFxuXHRtZXRob2RzOiB7IGdldEJlaGF2aW9yTm9kZXMgfSxcbn0pO1xuXG5mdW5jdGlvbiBnZXRCZWhhdmlvck5vZGVzKCkge1xuXHRyZXR1cm4gT2JqZWN0LnZhbHVlcyhcblx0XHRPYmplY3QuYXNzaWduKHt9LCBEZWNvcmF0b3JzLCBDb21wb3NpdGVzLCBBY3Rpb25zKVxuXHQpO1xufVxuIl19

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(249), __esModule: true };

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(250);
	module.exports = __webpack_require__(159).Object.values;

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(157)
	  , $values = __webpack_require__(251)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(178)
	  , toIObject = __webpack_require__(180)
	  , isEnum    = __webpack_require__(226).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Repeater = exports.RepeatUntilSuccess = exports.RepeatUntilFailure = exports.MaxTime = exports.Limiter = exports.Inverter = exports.Tick = exports.Decorator = exports.Condition = exports.Composite = exports.Blackboard = exports.BehaviorTree = exports.BaseNode = exports.Action = exports.Sequence = exports.Priority = exports.MemSequence = exports.MemPriority = exports.Wait = exports.Succeeder = exports.Runner = exports.Failer = exports.Error = exports.createUUID = exports.Class = exports.CONDITION = exports.ACTION = exports.DECORATOR = exports.COMPOSITE = exports.ERROR = exports.RUNNING = exports.FAILURE = exports.SUCCESS = exports.VERSION = undefined;

	var _constants = __webpack_require__(253);

	var _b = __webpack_require__(254);

	var _Error = __webpack_require__(258);

	var _Error2 = _interopRequireDefault(_Error);

	var _Failer = __webpack_require__(261);

	var _Failer2 = _interopRequireDefault(_Failer);

	var _Runner = __webpack_require__(262);

	var _Runner2 = _interopRequireDefault(_Runner);

	var _Succeeder = __webpack_require__(263);

	var _Succeeder2 = _interopRequireDefault(_Succeeder);

	var _Wait = __webpack_require__(264);

	var _Wait2 = _interopRequireDefault(_Wait);

	var _MemPriority = __webpack_require__(265);

	var _MemPriority2 = _interopRequireDefault(_MemPriority);

	var _MemSequence = __webpack_require__(267);

	var _MemSequence2 = _interopRequireDefault(_MemSequence);

	var _Priority = __webpack_require__(268);

	var _Priority2 = _interopRequireDefault(_Priority);

	var _Sequence = __webpack_require__(269);

	var _Sequence2 = _interopRequireDefault(_Sequence);

	var _Action = __webpack_require__(259);

	var _Action2 = _interopRequireDefault(_Action);

	var _BaseNode = __webpack_require__(260);

	var _BaseNode2 = _interopRequireDefault(_BaseNode);

	var _BehaviorTree = __webpack_require__(270);

	var _BehaviorTree2 = _interopRequireDefault(_BehaviorTree);

	var _Blackboard = __webpack_require__(282);

	var _Blackboard2 = _interopRequireDefault(_Blackboard);

	var _Composite = __webpack_require__(283);

	var _Composite2 = _interopRequireDefault(_Composite);

	var _Condition = __webpack_require__(284);

	var _Condition2 = _interopRequireDefault(_Condition);

	var _Decorator = __webpack_require__(273);

	var _Decorator2 = _interopRequireDefault(_Decorator);

	var _Tick = __webpack_require__(285);

	var _Tick2 = _interopRequireDefault(_Tick);

	var _Inverter = __webpack_require__(272);

	var _Inverter2 = _interopRequireDefault(_Inverter);

	var _Limiter = __webpack_require__(274);

	var _Limiter2 = _interopRequireDefault(_Limiter);

	var _MaxTime = __webpack_require__(275);

	var _MaxTime2 = _interopRequireDefault(_MaxTime);

	var _RepeatUntilFailure = __webpack_require__(276);

	var _RepeatUntilFailure2 = _interopRequireDefault(_RepeatUntilFailure);

	var _RepeatUntilSuccess = __webpack_require__(277);

	var _RepeatUntilSuccess2 = _interopRequireDefault(_RepeatUntilSuccess);

	var _Repeater = __webpack_require__(278);

	var _Repeater2 = _interopRequireDefault(_Repeater);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.VERSION = _constants.VERSION;
	exports.SUCCESS = _constants.SUCCESS;
	exports.FAILURE = _constants.FAILURE;
	exports.RUNNING = _constants.RUNNING;
	exports.ERROR = _constants.ERROR;
	exports.COMPOSITE = _constants.COMPOSITE;
	exports.DECORATOR = _constants.DECORATOR;
	exports.ACTION = _constants.ACTION;
	exports.CONDITION = _constants.CONDITION;
	exports.Class = _b.Class;
	exports.createUUID = _b.createUUID;
	exports.Error = _Error2.default;
	exports.Failer = _Failer2.default;
	exports.Runner = _Runner2.default;
	exports.Succeeder = _Succeeder2.default;
	exports.Wait = _Wait2.default;
	exports.MemPriority = _MemPriority2.default;
	exports.MemSequence = _MemSequence2.default;
	exports.Priority = _Priority2.default;
	exports.Sequence = _Sequence2.default;
	exports.Action = _Action2.default;
	exports.BaseNode = _BaseNode2.default;
	exports.BehaviorTree = _BehaviorTree2.default;
	exports.Blackboard = _Blackboard2.default;
	exports.Composite = _Composite2.default;
	exports.Condition = _Condition2.default;
	exports.Decorator = _Decorator2.default;
	exports.Tick = _Tick2.default;
	exports.Inverter = _Inverter2.default;
	exports.Limiter = _Limiter2.default;
	exports.MaxTime = _MaxTime2.default;
	exports.RepeatUntilFailure = _RepeatUntilFailure2.default;
	exports.RepeatUntilSuccess = _RepeatUntilSuccess2.default;
	exports.Repeater = _Repeater2.default;

/***/ },
/* 253 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var VERSION = exports.VERSION = '0.2.0';
	var SUCCESS = exports.SUCCESS = 1;
	var FAILURE = exports.FAILURE = 2;
	var RUNNING = exports.RUNNING = 3;
	var ERROR = exports.ERROR = 4;
	var COMPOSITE = exports.COMPOSITE = 'composite';
	var DECORATOR = exports.DECORATOR = 'decorator';
	var ACTION = exports.ACTION = 'action';
	var CONDITION = exports.CONDITION = 'condition';

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * List of internal and helper functions in Behavior3JS.
	 *
	 * @module functions
	**/

	"use strict";

	/**
	* This function is used to create unique IDs for trees and nodes.
	*
	* (consult http://www.ietf.org/rfc/rfc4122.txt).
	*
	* @class createUUID
	* @constructor
	* @return {String} A unique ID.
	**/

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _create = __webpack_require__(255);

	var _create2 = _interopRequireDefault(_create);

	exports.createUUID = createUUID;
	exports.Class = Class;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createUUID() {
	  var s = [];
	  var hexDigits = "0123456789abcdef";
	  for (var i = 0; i < 36; i++) {
	    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	  }
	  // bits 12-15 of the time_hi_and_version field to 0010
	  s[14] = "4";

	  // bits 6-7 of the clock_seq_hi_and_reserved to 01
	  s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1);

	  s[8] = s[13] = s[18] = s[23] = "-";

	  var uuid = s.join("");
	  return uuid;
	};

	/**
	 * Class is a meta-factory function to create classes in JavaScript. It is a
	 * shortcut for the CreateJS syntax style. By default, the class created by 
	 * this function have an initialize function (the constructor). Optionally, 
	 * you can specify the inheritance by passing another class as parameter.
	 *
	 * By default, all classes created using this function, may receive only a
	 * dictionary parameter as argument. This pattern is commonly used by jQuery 
	 * and its plugins.
	 *
	 * Since 0.2.0, Class also receives a `properties` parameter, a dictionary
	 * which will be used to fill the new class prototype.
	 *
	 * Usage
	 * -----
	 *
	 *     // Creating a simple class
	 *     var BaseClass = b3.Class();
	 *
	 *     var ChildClass = b3.Class(BaseClass, {
	 *       // constructor
	 *       initialize: function(params) {
	 *
	 *         // call super initialize
	 *         BaseClass.initialize.call(this, params);
	 *         ...
	 *       }
	 *     });
	 *
	 * @class Class
	 * @constructor
	 * @param {Object} baseClass The super class.
	 * @param {Object} properties A dictionary with attributes and methods.
	 * @return {Object} A new class.
	 **/
	function Class(baseClass, properties) {
	  // create a new class
	  var cls = function cls(params) {
	    this.initialize(params || {});
	  };

	  // if base class is provided, inherit
	  if (baseClass) {
	    cls.prototype = (0, _create2.default)(baseClass.prototype);
	    cls.prototype.constructor = cls;
	  }

	  // create initialize if does not exist on baseClass
	  if (!cls.prototype.initialize) {
	    cls.prototype.initialize = function () {};
	  }

	  // copy properties
	  if (properties) {
	    for (var key in properties) {
	      cls.prototype[key] = properties[key];
	    }
	  }

	  return cls;
	};

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(256), __esModule: true };

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(257);
	var $Object = __webpack_require__(159).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(157)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(176)});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(253);

	var _b = __webpack_require__(254);

	var _Action = __webpack_require__(259);

	var _Action2 = _interopRequireDefault(_Action);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * This action node returns `ERROR` always.
	 *
	 * @module b3
	 * @class Error
	 * @extends Action
	 **/
	exports.default = (0, _b.Class)(_Action2.default, {

	  /**
	   * Node name. Default to `Error`.
	   * @property {String} name
	   * @readonly
	   **/
	  name: 'Error',

	  /**
	   * Tick method.
	   * @method tick
	   * @param {b3.Tick} tick A tick instance.
	   * @return {Constant} Always return `ERROR`.
	   **/
	  tick: function tick(_tick) {
	    return _constants.ERROR;
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _BaseNode = __webpack_require__(260);

	var _BaseNode2 = _interopRequireDefault(_BaseNode);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Action is the base class for all action nodes. Thus, if you want to create
	 * new custom action nodes, you need to inherit from this class. For example,
	 * take a look at the Runner action:
	 *
	 *     var Runner = b3.Class(b3.Action, {
	 *       name: 'Runner',
	 *
	 *       tick: function(tick) {
	 *         return b3.RUNNING;
	 *       }
	 *     });
	 *
	 * @module b3
	 * @class Action
	 * @extends BaseNode
	 **/

	exports.default = (0, _b.Class)(_BaseNode2.default, {

	  /**
	   * Node category. Default to `ACTION`.
	   * @property {String} category
	   * @readonly
	   **/
	  category: _constants.ACTION,

	  /**
	   * Initialization method.
	   * @method initialize
	   * @constructor
	   **/
	  initialize: function initialize(params) {
	    _BaseNode2.default.prototype.initialize.call(this);
	  }
	});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _constants = __webpack_require__(253);

	"use strict";

	/**
	 * The BaseNode class is used as super class to all nodes in BehaviorJS. It 
	 * comprises all common variables and methods that a node must have to 
	 * execute.
	 *
	 * **IMPORTANT:** Do not inherit from this class, use `Composite`, 
	 * `Decorator`, `Action` or `Condition`, instead.
	 *
	 * The attributes are specially designed to serialization of the node in a 
	 * JSON format. In special, the `parameters` attribute can be set into the 
	 * visual editor (thus, in the JSON file), and it will be used as parameter 
	 * on the node initialization at `BehaviorTree.load`.
	 *
	 * BaseNode also provide 5 callback methods, which the node implementations 
	 * can override. They are `enter`, `open`, `tick`, `close` and `exit`. See 
	 * their documentation to know more. These callbacks are called inside the 
	 * `_execute` method, which is called in the tree traversal.
	 *
	 * @module b3
	 * @class BaseNode
	 **/

	exports.default = (0, _b.Class)(null, {

	  /**
	   * Node ID.
	   * @property {string} id
	   * @readonly
	   **/
	  id: null,

	  /**
	   * Node name. Must be a unique identifier, preferable the same name of the 
	   * class. You have to set the node name in the prototype.
	   *
	   * @property {String} name
	   * @readonly
	   **/
	  name: null,

	  /**
	   * Node category. Must be `COMPOSITE`, `DECORATOR`, `ACTION` or 
	   * `CONDITION`. This is defined automatically be inheriting the 
	   * correspondent class.
	   *
	   * @property {CONSTANT} category
	   * @readonly
	   **/
	  category: null,

	  /**
	   * Node title.
	   * @property {String} title
	   * @optional
	   * @readonly
	   **/
	  title: null,

	  /**
	   * Node description.
	   * @property {String} description
	   * @optional
	   * @readonly
	   **/
	  description: null,

	  /**
	   * A dictionary (key, value) describing the node parameters. Useful for 
	   * defining parameter values in the visual editor. Note: this is only 
	   * useful for nodes when loading trees from JSON files.
	   *
	   * **Deprecated since 0.2.0. This is too similar to the properties 
	   * attribute, thus, this attribute is deprecated in favor to 
	   * `properties`.**
	   *
	   * @property {Object} parameters
	   * @deprecated since 0.2.0.
	   * @readonly
	   **/
	  parameters: null,

	  /**
	   * A dictionary (key, value) describing the node properties. Useful for 
	   * defining custom variables inside the visual editor.
	   *
	   * @property properties
	   * @type {Object}
	   * @readonly
	   **/
	  properties: null,

	  /**
	   * Initialization method.
	   * @method initialize
	   * @constructor
	   **/
	  initialize: function initialize(params) {
	    this.id = (0, _b.createUUID)();
	    this.title = this.title || this.name;
	    this.description = '';
	    this.parameters = {};
	    this.properties = {};
	  },

	  /**
	   * This is the main method to propagate the tick signal to this node. This 
	   * method calls all callbacks: `enter`, `open`, `tick`, `close`, and 
	   * `exit`. It only opens a node if it is not already open. In the same 
	   * way, this method only close a node if the node  returned a status 
	   * different of `RUNNING`.
	   *
	   * @method _execute
	   * @param {Tick} tick A tick instance.
	   * @return {Constant} The tick state.
	   * @protected
	   **/
	  _execute: function _execute(tick) {
	    // ENTER
	    this._enter(tick);

	    // OPEN
	    if (!tick.blackboard.get('isOpen', tick.tree.id, this.id)) {
	      this._open(tick);
	    }

	    // TICK
	    var status = this._tick(tick);

	    // CLOSE
	    if (status !== _constants.RUNNING) {
	      this._close(tick);
	    }

	    // EXIT
	    this._exit(tick);

	    return status;
	  },

	  /**
	   * Wrapper for enter method.
	   * @method _enter
	   * @param {Tick} tick A tick instance.
	   * @protected
	   **/
	  _enter: function _enter(tick) {
	    tick._enterNode(this);
	    this.enter(tick);
	  },

	  /**
	   * Wrapper for open method.
	   * @method _open
	   * @param {Tick} tick A tick instance.
	   * @protected
	   **/
	  _open: function _open(tick) {
	    tick._openNode(this);
	    tick.blackboard.set('isOpen', true, tick.tree.id, this.id);
	    this.open(tick);
	  },

	  /**
	   * Wrapper for tick method.
	   * @method _tick
	   * @param {Tick} tick A tick instance.
	   * @return {Constant} A state constant.
	   * @protected
	   **/
	  _tick: function _tick(tick) {
	    tick._tickNode(this);
	    return this.tick(tick);
	  },

	  /**
	   * Wrapper for close method.
	   * @method _close
	   * @param {Tick} tick A tick instance.
	   * @protected
	   **/
	  _close: function _close(tick) {
	    tick._closeNode(this);
	    tick.blackboard.set('isOpen', false, tick.tree.id, this.id);
	    this.close(tick);
	  },

	  /**
	   * Wrapper for exit method.
	   * @method _exit
	   * @param {Tick} tick A tick instance.
	   * @protected
	   **/
	  _exit: function _exit(tick) {
	    tick._exitNode(this);
	    this.exit(tick);
	  },

	  /**
	   * Enter method, override this to use. It is called every time a node is 
	   * asked to execute, before the tick itself.
	   *
	   * @method enter
	   * @param {Tick} tick A tick instance.
	   **/
	  enter: function enter(tick) {},

	  /**
	   * Open method, override this to use. It is called only before the tick 
	   * callback and only if the not isn't closed.
	   *
	   * Note: a node will be closed if it returned `RUNNING` in the tick.
	   *
	   * @method open
	   * @param {Tick} tick A tick instance.
	   **/
	  open: function open(tick) {},

	  /**
	   * Tick method, override this to use. This method must contain the real 
	   * execution of node (perform a task, call children, etc.). It is called
	   * every time a node is asked to execute.
	   *
	   * @method tick
	   * @param {Tick} tick A tick instance.
	   **/
	  tick: function tick(_tick2) {},

	  /**
	   * Close method, override this to use. This method is called after the tick
	   * callback, and only if the tick return a state different from 
	   * `RUNNING`.
	   *
	   * @method close
	   * @param {Tick} tick A tick instance.
	   **/
	  close: function close(tick) {},

	  /**
	   * Exit method, override this to use. Called every time in the end of the 
	   * execution.
	   *
	   * @method exit
	   * @param {Tick} tick A tick instance.
	   **/
	  exit: function exit(tick) {}
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _Action = __webpack_require__(259);

	var _Action2 = _interopRequireDefault(_Action);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * This action node returns `FAILURE` always.
	 *
	 * @module b3
	 * @class Failer
	 * @extends Action
	 **/
	exports.default = (0, _b.Class)(_Action2.default, {

	  /**
	   * Node name. Default to `Failer`.
	   * @property {String} name
	   * @readonly
	   **/
	  name: 'Failer',

	  /**
	   * Tick method.
	   * @method tick
	   * @param {b3.Tick} tick A tick instance.
	   * @return {Constant} Always return `FAILURE`.
	   **/
	  tick: function tick(_tick) {
	    return _constants.FAILURE;
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _Action = __webpack_require__(259);

	var _Action2 = _interopRequireDefault(_Action);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * This action node returns RUNNING always.
	 *
	 * @module b3
	 * @class Runner
	 * @extends Action
	 **/
	exports.default = (0, _b.Class)(_Action2.default, {

	  /**
	   * Node name. Default to `Runner`.
	   * @property {String} name
	   * @readonly
	   **/
	  name: 'Runner',

	  /**
	   * Tick method.
	   * @method tick
	   * @param {b3.Tick} tick A tick instance.
	   * @return {Constant} Always return `RUNNING`.
	   **/
	  tick: function tick(_tick) {
	    return _constants.RUNNING;
	  }
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _Action = __webpack_require__(259);

	var _Action2 = _interopRequireDefault(_Action);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * This action node returns `SUCCESS` always.
	 *
	 * @module b3
	 * @class Succeeder
	 * @extends Action
	 **/

	exports.default = (0, _b.Class)(_Action2.default, {

	  /**
	   * Node name. Default to `Succeeder`.
	   * @property {String} name
	   * @readonly
	   **/
	  name: 'Succeeder',

	  /**
	   * Tick method.
	   * @method tick
	   * @param {b3.Tick} tick A tick instance.
	   * @return {Constant} Always return `SUCCESS`.
	   **/
	  tick: function tick(_tick) {
	    return _constants.SUCCESS;
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _Action = __webpack_require__(259);

	var _Action2 = _interopRequireDefault(_Action);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * Wait a few seconds.
	 *
	 * @module b3
	 * @class Wait
	 * @extends Action
	 **/

	exports.default = (0, _b.Class)(_Action2.default, {

	  /**
	   * Node name. Default to `Wait`.
	   * @property {String} name
	   * @readonly
	   **/
	  name: 'Wait',

	  /**
	   * Node title. Default to `Wait XXms`. Used in Editor.
	   * @property {String} title
	   * @readonly
	   **/
	  title: 'Wait <milliseconds>ms',

	  /**
	   * Node parameters.
	   * @property {String} parameters
	   * @readonly
	   **/
	  parameters: { 'milliseconds': 0 },

	  /**
	   * Initialization method.
	   *
	   * Settings parameters:
	   *
	   * - **milliseconds** (*Integer*) Maximum time, in milliseconds, a child
	   *                                can execute.
	   *
	   * @method initialize
	   * @param {Object} settings Object with parameters.
	   * @constructor
	   **/
	  initialize: function initialize(settings) {
	    settings = settings || {};

	    _Action2.default.prototype.initialize.call(this);
	    this.endTime = settings.milliseconds || 0;
	  },

	  /**
	   * Open method.
	   * @method open
	   * @param {Tick} tick A tick instance.
	   **/
	  open: function open(tick) {
	    var startTime = new Date().getTime();
	    tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
	  },

	  /**
	   * Tick method.
	   * @method tick
	   * @param {Tick} tick A tick instance.
	   * @return {Constant} A state constant.
	   **/
	  tick: function tick(_tick) {
	    var currTime = new Date().getTime();
	    var startTime = _tick.blackboard.get('startTime', _tick.tree.id, this.id);

	    if (currTime - startTime > this.endTime) {
	      return _constants.SUCCESS;
	    }

	    return _constants.RUNNING;
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _composite = __webpack_require__(266);

	var _composite2 = _interopRequireDefault(_composite);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * MemPriority is similar to Priority node, but when a child returns a 
	 * `RUNNING` state, its index is recorded and in the next tick the, 
	 * MemPriority calls the child recorded directly, without calling previous 
	 * children again.
	 *
	 * @module b3
	 * @class MemPriority
	 * @extends Composite
	 **/

	exports.default = (0, _b.Class)(_composite2.default, {

	  /**
	   * Node name. Default to `MemPriority`.
	   * @property {String} name
	   * @readonly
	   **/
	  name: 'MemPriority',

	  /**
	   * Open method.
	   * @method open
	   * @param {b3.Tick} tick A tick instance.
	   **/
	  open: function open(tick) {
	    tick.blackboard.set('runningChild', 0, tick.tree.id, this.id);
	  },

	  /**
	   * Tick method.
	   * @method tick
	   * @param {b3.Tick} tick A tick instance.
	   * @return {Constant} A state constant.
	   **/
	  tick: function tick(_tick) {
	    var child = _tick.blackboard.get('runningChild', _tick.tree.id, this.id);
	    for (var i = child; i < this.children.length; i++) {
	      var status = this.children[i]._execute(_tick);

	      if (status !== _constants.FAILURE) {
	        if (status === _constants.RUNNING) {
	          _tick.blackboard.set('runningChild', i, _tick.tree.id, this.id);
	        }

	        return status;
	      }
	    }

	    return _constants.FAILURE;
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _BaseNode = __webpack_require__(260);

	var _BaseNode2 = _interopRequireDefault(_BaseNode);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * Composite is the base class for all composite nodes. Thus, if you want to 
	 * create new custom composite nodes, you need to inherit from this class. 
	 *
	 * When creating composite nodes, you will need to propagate the tick signal 
	 * to the children nodes manually. To do that, override the `tick` method and
	 * call the `_execute` method on all nodes. For instance, take a look at how 
	 * the Sequence node inherit this class and how it call its children:
	 *
	 *     // Inherit from Composite, using the util function Class.
	 *     var Sequence = Class(Composite, {
	 *
	 *       // Remember to set the name of the node. 
	 *       name: 'Sequence',
	 *
	 *       // Override the tick function
	 *       tick: function(tick) {
	 *
	 *         // Iterates over the children
	 *         for (var i=0; i<this.children.length; i++) {
	 *
	 *           // Propagate the tick
	 *           var status = this.children[i]._execute(tick);
	 *
	 *           if (status !== SUCCESS) {
	 *               return status;
	 *           }
	 *         }
	 *
	 *         return SUCCESS;
	 *       }
	 *     });
	 * 
	 * @module b3
	 * @class Composite
	 * @extends BaseNode
	 **/

	exports.default = (0, _b.Class)(_BaseNode2.default, {

	  /**
	   * Node category. Default to `b3.COMPOSITE`.
	   *
	   * @property category
	   * @type {String}
	   * @readonly
	   **/
	  category: _constants.COMPOSITE,

	  /**
	   * Initialization method.
	   *
	   * @method initialize
	   * @constructor
	   **/
	  initialize: function initialize(params) {
	    _BaseNode2.default.prototype.initialize.call(this);
	    this.children = (params.children || []).slice(0);
	  }
	});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _composite = __webpack_require__(266);

	var _composite2 = _interopRequireDefault(_composite);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * MemSequence is similar to Sequence node, but when a child returns a 
	 * `RUNNING` state, its index is recorded and in the next tick the 
	 * MemPriority call the child recorded directly, without calling previous 
	 * children again.
	 *
	 * @module b3
	 * @class MemPriority
	 * @extends Composite
	 **/

	exports.default = (0, _b.Class)(_composite2.default, {

	  /**
	   * Node name. Default to `MemSequence`.
	   * @property {String} name
	   * @readonly
	   **/
	  name: 'MemSequence',

	  /**
	   * Open method.
	   * @method open
	   * @param {b3.Tick} tick A tick instance.
	   **/
	  open: function open(tick) {
	    tick.blackboard.set('runningChild', 0, tick.tree.id, this.id);
	  },

	  /**
	   * Tick method.
	   * @method tick
	   * @param {b3.Tick} tick A tick instance.
	   * @return {Constant} A state constant.
	   **/
	  tick: function tick(_tick) {
	    var child = _tick.blackboard.get('runningChild', _tick.tree.id, this.id);
	    for (var i = child; i < this.children.length; i++) {
	      var status = this.children[i]._execute(_tick);

	      if (status !== _constants.SUCCESS) {
	        if (status === _constants.RUNNING) {
	          _tick.blackboard.set('runningChild', i, _tick.tree.id, this.id);
	        }
	        return status;
	      }
	    }

	    return _constants.SUCCESS;
	  }
	});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _composite = __webpack_require__(266);

	var _composite2 = _interopRequireDefault(_composite);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * Priority ticks its children sequentially until one of them returns 
	 * `SUCCESS`, `RUNNING` or `ERROR`. If all children return the failure state,
	 * the priority also returns `FAILURE`.
	 *
	 * @module b3
	 * @class Priority
	 * @extends Composite
	 **/

	exports.default = (0, _b.Class)(_composite2.default, {

	  /**
	   * Node name. Default to `Priority`.
	   * @property {String} name
	   * @readonly
	   **/
	  name: 'Priority',

	  /**
	   * Tick method.
	   * @method tick
	   * @param {Tick} tick A tick instance.
	   * @return {Constant} A state constant.
	   **/
	  tick: function tick(_tick) {
	    for (var i = 0; i < this.children.length; i++) {
	      var status = this.children[i]._execute(_tick);

	      if (status !== _constants.FAILURE) {
	        return status;
	      }
	    }

	    return _constants.FAILURE;
	  }
	});

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _composite = __webpack_require__(266);

	var _composite2 = _interopRequireDefault(_composite);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * The Sequence node ticks its children sequentially until one of them 
	 * returns `FAILURE`, `RUNNING` or `ERROR`. If all children return the 
	 * success state, the sequence also returns `SUCCESS`.
	 *
	 * @module b3
	 * @class Sequence
	 * @extends Composite
	 **/

	exports.default = (0, _b.Class)(_composite2.default, {

	  /**
	   * Node name. Default to `Sequence`.
	   * @property {String} name
	   * @readonly
	   **/
	  name: 'Sequence',

	  /**
	   * Tick method.
	   * @method tick
	   * @param {b3.Tick} tick A tick instance.
	   * @return {Constant} A state constant.
	   **/
	  tick: function tick(_tick) {
	    for (var i = 0; i < this.children.length; i++) {
	      var status = this.children[i]._execute(_tick);

	      if (status !== _constants.SUCCESS) {
	        return status;
	      }
	    }

	    return _constants.SUCCESS;
	  }
	});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _constants = __webpack_require__(253);

	var _decorators = __webpack_require__(271);

	var Decorators = _interopRequireWildcard(_decorators);

	var _composites = __webpack_require__(279);

	var Composites = _interopRequireWildcard(_composites);

	var _actions = __webpack_require__(280);

	var Actions = _interopRequireWildcard(_actions);

	var _tick = __webpack_require__(281);

	var _tick2 = _interopRequireDefault(_tick);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	"use strict";

	/**
	 * The BehaviorTree class, as the name implies, represents the Behavior Tree 
	 * structure.
	 * 
	 * There are two ways to construct a Behavior Tree: by manually setting the 
	 * root node, or by loading it from a data structure (which can be loaded 
	 * from a JSON). Both methods are shown in the examples below and better 
	 * explained in the user guide.
	 *
	 * The tick method must be called periodically, in order to send the tick 
	 * signal to all nodes in the tree, starting from the root. The method 
	 * `BehaviorTree.tick` receives a target object and a blackboard as 
	 * parameters. The target object can be anything: a game agent, a system, a 
	 * DOM object, etc. This target is not used by any piece of Behavior3JS, 
	 * i.e., the target object will only be used by custom nodes.
	 * 
	 * The blackboard is obligatory and must be an instance of `Blackboard`. This
	 * requirement is necessary due to the fact that neither `BehaviorTree` or 
	 * any node will store the execution variables in its own object (e.g., the 
	 * BT does not store the target, information about opened nodes or number of 
	 * times the tree was called). But because of this, you only need a single 
	 * tree instance to control multiple (maybe hundreds) objects.
	 * 
	 * Manual construction of a Behavior Tree
	 * --------------------------------------
	 * 
	 *     var tree = new b3.BehaviorTree();
	 *  
	 *     tree.root = new b3.Sequence({children:[
	 *       new b3.Priority({children:[
	 *         new MyCustomNode(),
	 *         new MyCustomNode()
	 *       ]}),
	 *       ...
	 *     ]});
	 *     
	 * 
	 * Loading a Behavior Tree from data structure
	 * -------------------------------------------
	 * 
	 *     var tree = new b3.BehaviorTree();
	 *
	 *     tree.load({
	 *       'title'       : 'Behavior Tree title'
	 *       'description' : 'My description'
	 *       'root'        : 'node-id-1'
	 *       'nodes'       : {
	 *         'node-id-1' : {
	 *           'name'        : 'Priority', // this is the node type
	 *           'title'       : 'Root Node', 
	 *           'description' : 'Description', 
	 *           'children'    : ['node-id-2', 'node-id-3'], 
	 *         },
	 *         ...
	 *       }
	 *     })
	 *     
	 *
	 * @module b3
	 * @class BehaviorTree
	 **/

	exports.default = (0, _b.Class)(null, {

	  /**
	   * The tree id, must be unique. By default, created with `createUUID`.
	   * @property {String} id
	   * @readOnly
	   **/
	  id: null,

	  /**
	   * The tree title.
	   * @property {String} title
	   * @readonly
	   **/
	  title: null,

	  /**
	   * Description of the tree.
	   * @property {String} description
	   * @readonly
	   **/
	  description: null,

	  /**
	   * A dictionary with (key-value) properties. Useful to define custom 
	   * variables in the visual editor.
	   *
	   * @property {Object} properties
	   * @readonly
	   **/
	  properties: null,

	  /**
	   * The reference to the root node. Must be an instance of `BaseNode`.
	   * @property {BaseNode} root
	   **/
	  root: null,

	  /**
	   * The reference to the debug instance.
	   * @property {Object} debug
	   **/
	  debug: null,

	  /**
	   * Initialization method.
	   * @method initialize
	   * @constructor
	   **/
	  initialize: function initialize() {
	    this.id = (0, _b.createUUID)();
	    this.title = 'The behavior tree';
	    this.description = 'Default description';
	    this.properties = {};
	    this.root = null;
	    this.debug = null;
	  },

	  /**
	   * This method loads a Behavior Tree from a data structure, populating this
	   * object with the provided data. Notice that, the data structure must 
	   * follow the format specified by Behavior3JS. Consult the guide to know 
	   * more about this format.
	   *
	   * You probably want to use custom nodes in your BTs, thus, you need to 
	   * provide the `names` object, in which this method can find the nodes by 
	   * `names[NODE_NAME]`. This variable can be a namespace or a dictionary, 
	   * as long as this method can find the node by its name, for example:
	   *
	   *     //json
	   *     ...
	   *     'node1': {
	   *       'name': MyCustomNode,
	   *       'title': ...
	   *     }
	   *     ...
	   *     
	   *     //code
	   *     var bt = new b3.BehaviorTree();
	   *     bt.load(data, {'MyCustomNode':MyCustomNode})
	   *     
	   * 
	   * @method load
	   * @param {Object} data The data structure representing a Behavior Tree.
	   * @param {Object} [names] A namespace or dict containing custom nodes.
	   **/
	  load: function load(data, names) {
	    names = names || {};

	    this.title = data.title || this.title;
	    this.description = data.description || this.description;
	    this.properties = data.properties || this.properties;

	    var nodes = {};
	    var id, spec, node;
	    // Create the node list (without connection between them)
	    for (id in data.nodes) {
	      spec = data.nodes[id];
	      var Cls;

	      if (spec.name in names) {
	        // Look for the name in custom nodes
	        Cls = names[spec.name];
	      } else if (spec.name in Decorators) {
	        // Look for the name in default nodes
	        Cls = Decorators[spec.name];
	      } else if (spec.name in Composites) {
	        Cls = Composites[spec.name];
	      } else if (spec.name in Actions) {
	        Cls = Actions[spec.name];
	      } else {
	        // Invalid node name
	        throw new EvalError('BehaviorTree.load: Invalid node name + "' + spec.name + '".');
	      }

	      node = new Cls(spec.properties);
	      node.id = spec.id || node.id;
	      node.title = spec.title || node.title;
	      node.description = spec.description || node.description;
	      node.properties = spec.properties || node.properties;

	      nodes[id] = node;
	    }

	    // Connect the nodes
	    for (id in data.nodes) {
	      spec = data.nodes[id];
	      node = nodes[id];

	      if (node.category === _constants.COMPOSITE && spec.children) {
	        for (var i = 0; i < spec.children.length; i++) {
	          var cid = spec.children[i];
	          node.children.push(nodes[cid]);
	        }
	      } else if (node.category === _constants.DECORATOR && spec.child) {
	        node.child = nodes[spec.child];
	      }
	    }

	    this.root = nodes[data.root];
	  },

	  /**
	   * This method dump the current BT into a data structure.
	   *
	   * Note: This method does not record the current node parameters. Thus, 
	   * it may not be compatible with load for now.
	   * 
	   * @method dump
	   * @return {Object} A data object representing this tree.
	   **/
	  dump: function dump() {
	    var data = {};
	    var customNames = [];

	    data.title = this.title;
	    data.description = this.description;
	    data.root = this.root ? this.root.id : null;
	    data.properties = this.properties;
	    data.nodes = {};
	    data.custom_nodes = [];

	    if (!this.root) return data;

	    var stack = [this.root];
	    while (stack.length > 0) {
	      var node = stack.pop();

	      var spec = {};
	      spec.id = node.id;
	      spec.name = node.name;
	      spec.title = node.title;
	      spec.description = node.description;
	      spec.properties = node.properties;
	      spec.parameters = node.parameters;

	      // verify custom node
	      var proto = node.constructor && node.constructor.prototype;
	      var nodeName = proto && proto.name || node.name;
	      if (!Decorators[nodeName] && !Composites[nodeName] && !Actions[nodeName] && customNames.indexOf(nodeName) < 0) {
	        var subdata = {};
	        subdata.name = nodeName;
	        subdata.title = proto && proto.title || node.title;
	        subdata.category = node.category;

	        customNames.push(nodeName);
	        data.custom_nodes.push(subdata);
	      }

	      // store children/child
	      if (node.category === _constants.COMPOSITE && node.children) {
	        var children = [];
	        for (var i = node.children.length - 1; i >= 0; i--) {
	          children.push(node.children[i].id);
	          stack.push(node.children[i]);
	        }
	        spec.children = children;
	      } else if (node.category === _constants.DECORATOR && node.child) {
	        stack.push(node.child);
	        spec.child = node.child.id;
	      }

	      data.nodes[node.id] = spec;
	    }

	    return data;
	  },

	  /**
	   * Propagates the tick signal through the tree, starting from the root.
	   * 
	   * This method receives a target object of any type (Object, Array, 
	   * DOMElement, whatever) and a `Blackboard` instance. The target object has
	   * no use at all for all Behavior3JS components, but surely is important 
	   * for custom nodes. The blackboard instance is used by the tree and nodes 
	   * to store execution variables (e.g., last node running) and is obligatory
	   * to be a `Blackboard` instance (or an object with the same interface).
	   * 
	   * Internally, this method creates a Tick object, which will store the 
	   * target and the blackboard objects.
	   * 
	   * Note: BehaviorTree stores a list of open nodes from last tick, if these 
	   * nodes weren't called after the current tick, this method will close them
	   * automatically.
	   * 
	   * @method tick
	   * @param {Object} target A target object.
	   * @param {Blackboard} blackboard An instance of blackboard object.
	   * @return {Constant} The tick signal state.
	   **/
	  tick: function tick(target, blackboard) {
	    if (!blackboard) {
	      throw 'The blackboard parameter is obligatory and must be an ' + 'instance of b3.Blackboard';
	    }

	    /* CREATE A TICK OBJECT */
	    var tick = new _tick2.default();
	    tick.debug = this.debug;
	    tick.target = target;
	    tick.blackboard = blackboard;
	    tick.tree = this;

	    /* TICK NODE */
	    var state = this.root._execute(tick);

	    /* CLOSE NODES FROM LAST TICK, IF NEEDED */
	    var lastOpenNodes = blackboard.get('openNodes', this.id);
	    var currOpenNodes = tick._openNodes.slice(0);

	    // does not close if it is still open in this tick
	    var start = 0;
	    var i;
	    for (i = 0; i < Math.min(lastOpenNodes.length, currOpenNodes.length); i++) {
	      start = i + 1;
	      if (lastOpenNodes[i] !== currOpenNodes[i]) {
	        break;
	      }
	    }

	    // close the nodes
	    for (i = lastOpenNodes.length - 1; i >= start; i--) {
	      lastOpenNodes[i]._close(tick);
	    }

	    /* POPULATE BLACKBOARD */
	    blackboard.set('openNodes', currOpenNodes, this.id);
	    blackboard.set('nodeCount', tick._nodeCount, this.id);

	    return state;
	  }
	});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Inverter = __webpack_require__(272);

	Object.defineProperty(exports, 'Inverter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Inverter).default;
	  }
	});

	var _Limiter = __webpack_require__(274);

	Object.defineProperty(exports, 'Limiter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Limiter).default;
	  }
	});

	var _MaxTime = __webpack_require__(275);

	Object.defineProperty(exports, 'MaxTime', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MaxTime).default;
	  }
	});

	var _RepeatUntilFailure = __webpack_require__(276);

	Object.defineProperty(exports, 'RepeatUntilFailure', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_RepeatUntilFailure).default;
	  }
	});

	var _RepeatUntilSuccess = __webpack_require__(277);

	Object.defineProperty(exports, 'RepeatUntilSuccess', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_RepeatUntilSuccess).default;
	  }
	});

	var _Repeater = __webpack_require__(278);

	Object.defineProperty(exports, 'Repeater', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Repeater).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _Decorator = __webpack_require__(273);

	var _Decorator2 = _interopRequireDefault(_Decorator);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * The Inverter decorator inverts the result of the child, returning `SUCCESS`
	 * for `FAILURE` and `FAILURE` for `SUCCESS`.
	 *
	 * @module b3
	 * @class Inverter
	 * @extends Decorator
	 **/

	exports.default = (0, _b.Class)(_Decorator2.default, {

	  /**
	   * Node name. Default to `Inverter`.
	   * @property {String} name
	   * @readonly
	   **/
	  name: 'Inverter',

	  /**
	   * Tick method.
	   * @method tick
	   * @param {Tick} tick A tick instance.
	   * @return {Constant} A state constant.
	   **/
	  tick: function tick(_tick) {
	    if (!this.child) {
	      return _constants.ERROR;
	    }

	    var status = this.child._execute(_tick);

	    if (status == _constants.SUCCESS) {
	      status = _constants.FAILURE;
	    } else if (status == _constants.FAILURE) {
	      status = _constants.SUCCESS;
	    }

	    return status;
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _BaseNode = __webpack_require__(260);

	var _BaseNode2 = _interopRequireDefault(_BaseNode);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * Decorator is the base class for all decorator nodes. Thus, if you want to 
	 * create new custom decorator nodes, you need to inherit from this class. 
	 *
	 * When creating decorator nodes, you will need to propagate the tick signal
	 * to the child node manually, just like the composite nodes. To do that, 
	 * override the `tick` method and call the `_execute` method on the child 
	 * node. For instance, take a look at how the Inverter node inherit this 
	 * class and how it call its children:
	 *
	 *     // Inherit from Decorator, using the util function Class.
	 *     var Inverter = b3.Class(b3.Decorator, {
	 *       name: 'Inverter',
	 *
	 *       tick: function(tick) {
	 *         if (!this.child) {
	 *           return b3.ERROR;
	 *         }
	 *
	 *         // Propagate the tick
	 *         var status = this.child._execute(tick);
	 *
	 *         if (status == b3.SUCCESS) {
	 *           status = b3.FAILURE;
	 *         } else if (status == b3.FAILURE) {
	 *           status = b3.SUCCESS;
	 *         }
	 *
	 *         return status;
	 *       }
	 *     });
	 *
	 * @module b3
	 * @class Decorator
	 * @extends BaseNode
	 **/

	exports.default = (0, _b.Class)(_BaseNode2.default, {

	  /**
	   * Node category. Default to DECORATOR.
	   * @property {String} category
	   * @readonly
	   **/
	  category: _constants.DECORATOR,

	  /**
	   * Initialization method.
	   * @method initialize
	   * @constructor
	   **/
	  initialize: function initialize(params) {
	    _BaseNode2.default.prototype.initialize.call(this);
	    this.child = params.child || null;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _Decorator = __webpack_require__(273);

	var _Decorator2 = _interopRequireDefault(_Decorator);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * This decorator limit the number of times its child can be called. After a
	 * certain number of times, the Limiter decorator returns `FAILURE` without 
	 * executing the child.
	 *
	 * @module b3
	 * @class Limiter
	 * @extends Decorator
	 **/

	exports.default = (0, _b.Class)(_Decorator2.default, {

	  /**
	   * Node name. Default to `Limiter`.
	   * @property {String} name
	   * @readonly
	   **/
	  name: 'Limiter',

	  /**
	   * Node title. Default to `Limit X Activations`. Used in Editor.
	   * @property {String} title
	   * @readonly
	   **/
	  title: 'Limit <maxLoop> Activations',

	  /**
	   * Node parameters.
	   * @property {String} parameters
	   * @readonly
	   **/
	  parameters: { 'maxLoop': 1 },

	  /**
	   * Initialization method. 
	   *
	   * Settings parameters:
	   *
	   * - **maxLoop** (*Integer*) Maximum number of repetitions.
	   * - **child** (*BaseNode*) The child node.
	   *
	   * @method initialize
	   * @param {Object} params Object with parameters.
	   * @constructor
	   **/
	  initialize: function initialize(params) {
	    _Decorator2.default.prototype.initialize.call(this, params);

	    if (!params.maxLoop) {
	      throw "maxLoop parameter in Limiter decorator is an obligatory " + "parameter";
	    }

	    this.maxLoop = params.maxLoop;
	  },

	  /**
	   * Open method.
	   * @method open
	   * @param {Tick} tick A tick instance.
	   **/
	  open: function open(tick) {
	    tick.blackboard.set('i', 0, tick.tree.id, this.id);
	  },

	  /**
	   * Tick method.
	   * @method tick
	   * @param {Tick} tick A tick instance.
	   * @return {Constant} A state constant.
	   **/
	  tick: function tick(_tick) {
	    if (!this.child) {
	      return _constants.ERROR;
	    }

	    var i = _tick.blackboard.get('i', _tick.tree.id, this.id);

	    if (i < this.maxLoop) {
	      var status = this.child._execute(_tick);

	      if (status == _constants.SUCCESS || status == _constants.FAILURE) _tick.blackboard.set('i', i + 1, _tick.tree.id, this.id);

	      return status;
	    }

	    return _constants.FAILURE;
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _Decorator = __webpack_require__(273);

	var _Decorator2 = _interopRequireDefault(_Decorator);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * The MaxTime decorator limits the maximum time the node child can execute. 
	 * Notice that it does not interrupt the execution itself (i.e., the child 
	 * must be non-preemptive), it only interrupts the node after a `RUNNING` 
	 * status.
	 *
	 * @module b3
	 * @class MaxTime
	 * @extends Decorator
	 **/

	exports.default = (0, _b.Class)(_Decorator2.default, {

	  /**
	   * Node name. Default to `MaxTime`.
	   * @property {String} name
	   * @readonly
	   **/
	  name: 'MaxTime',

	  /**
	   * Node title. Default to `Max XXms`. Used in Editor.
	   * @property {String} title
	   * @readonly
	   **/
	  title: 'Max <maxTime>ms',

	  /**
	   * Node parameters.
	   * @property {String} parameters
	   * @readonly
	   **/
	  parameters: { 'maxTime': 0 },

	  /**
	   * Initialization method.
	   *
	   * Settings parameters:
	   *
	   * - **maxTime** (*Integer*) Maximum time a child can execute.
	   * - **child** (*BaseNode*) The child node.
	   *
	   * @method initialize
	   * @param {Object} params Object with parameters.
	   * @constructor
	   **/
	  initialize: function initialize(params) {
	    _Decorator2.default.prototype.initialize.call(this, params);

	    if (!params.maxTime) {
	      throw "maxTime parameter in MaxTime decorator is an obligatory " + "parameter";
	    }

	    this.maxTime = params.maxTime;
	  },

	  /**
	   * Open method.
	   * @method open
	   * @param {Tick} tick A tick instance.
	   **/
	  open: function open(tick) {
	    var startTime = new Date().getTime();
	    tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
	  },

	  /**
	   * Tick method.
	   * @method tick
	   * @param {Tick} tick A tick instance.
	   * @return {Constant} A state constant.
	   **/
	  tick: function tick(_tick) {
	    if (!this.child) {
	      return _constants.ERROR;
	    }

	    var currTime = new Date().getTime();
	    var startTime = _tick.blackboard.get('startTime', _tick.tree.id, this.id);

	    var status = this.child._execute(_tick);
	    if (currTime - startTime > this.maxTime) {
	      return _constants.FAILURE;
	    }

	    return status;
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _Decorator = __webpack_require__(273);

	var _Decorator2 = _interopRequireDefault(_Decorator);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * RepeatUntilFailure is a decorator that repeats the tick signal until the 
	 * node child returns `FAILURE`, `RUNNING` or `ERROR`. Optionally, a maximum 
	 * number of repetitions can be defined.
	 *
	 * @module b3
	 * @class RepeatUntilFailure
	 * @extends Decorator
	 **/

	exports.default = (0, _b.Class)(_Decorator2.default, {

	  /**
	   * Node name. Default to `RepeatUntilFailure`.
	   * @property {String} name
	   * @readonly
	   **/
	  name: 'RepeatUntilFailure',

	  /**
	   * Node title. Default to `Repeat Until Failure`.
	   * @property {String} title
	   * @readonly
	   **/
	  title: 'Repeat Until Failure',

	  /**
	   * Node parameters.
	   * @property {String} parameters
	   * @readonly
	   **/
	  parameters: { 'maxLoop': -1 },

	  /**
	   * Initialization method.
	   *
	   * Settings parameters:
	   *
	   * - **maxLoop** (*Integer*) Maximum number of repetitions. Default to -1 
	   *                           (infinite).
	   * - **child** (*BaseNode*) The child node.
	   *
	   * @method initialize
	   * @param {Object} params Object with parameters.
	   * @constructor
	   **/
	  initialize: function initialize(params) {
	    _Decorator2.default.prototype.initialize.call(this, params);
	    this.maxLoop = params.maxLoop || -1;
	  },

	  /**
	   * Open method.
	   * @method open
	   * @param {Tick} tick A tick instance.
	   **/
	  open: function open(tick) {
	    tick.blackboard.set('i', 0, tick.tree.id, this.id);
	  },

	  /**
	   * Tick method.
	   * @method tick
	   * @param {Tick} tick A tick instance.
	   * @return {Constant} A state constant.
	   **/
	  tick: function tick(_tick) {
	    if (!this.child) {
	      return _constants.ERROR;
	    }

	    var i = _tick.blackboard.get('i', _tick.tree.id, this.id);
	    var status = _constants.ERROR;

	    while (this.maxLoop < 0 || i < this.maxLoop) {
	      status = this.child._execute(_tick);

	      if (status == _constants.SUCCESS) {
	        i++;
	      } else {
	        break;
	      }
	    }

	    i = _tick.blackboard.set('i', i, _tick.tree.id, this.id);
	    return status;
	  }
	});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _Decorator = __webpack_require__(273);

	var _Decorator2 = _interopRequireDefault(_Decorator);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * RepeatUntilSuccess is a decorator that repeats the tick signal until the 
	 * node child returns `SUCCESS`, `RUNNING` or `ERROR`. Optionally, a maximum 
	 * number of repetitions can be defined.
	 *
	 * @module b3
	 * @class RepeatUntilSuccess
	 * @extends Decorator
	 **/

	exports.default = (0, _b.Class)(_Decorator2.default, {

	  /**
	   * Node name. Default to `RepeatUntilSuccess`.
	   * @property {String} name
	   * @readonly
	   **/
	  name: 'RepeatUntilSuccess',

	  /**
	   * Node title. Default to `Repeat Until Success`.
	   * @property {String} title
	   * @readonly
	   **/
	  title: 'Repeat Until Success',

	  /**
	   * Node parameters.
	   * @property {String} parameters
	   * @readonly
	   **/
	  parameters: { 'maxLoop': -1 },

	  /**
	   * Initialization method.
	   *
	   * Settings parameters:
	   *
	   * - **maxLoop** (*Integer*) Maximum number of repetitions. Default to -1 
	   *                           (infinite).
	   * - **child** (*BaseNode*) The child node.
	   *
	   * @method initialize
	   * @param {Object} params Object with parameters.
	   * @constructor
	   **/
	  initialize: function initialize(params) {
	    _Decorator2.default.prototype.initialize.call(this, params);
	    this.maxLoop = params.maxLoop || -1;
	  },

	  /**
	   * Open method.
	   * @method open
	   * @param {Tick} tick A tick instance.
	   **/
	  open: function open(tick) {
	    tick.blackboard.set('i', 0, tick.tree.id, this.id);
	  },

	  /**
	   * Tick method.
	   * @method tick
	   * @param {Tick} tick A tick instance.
	   * @return {Constant} A state constant.
	   **/
	  tick: function tick(_tick) {
	    if (!this.child) {
	      return _constants.ERROR;
	    }

	    var i = _tick.blackboard.get('i', _tick.tree.id, this.id);
	    var status = _constants.ERROR;

	    while (this.maxLoop < 0 || i < this.maxLoop) {
	      status = this.child._execute(_tick);

	      if (status == _constants.FAILURE) {
	        i++;
	      } else {
	        break;
	      }
	    }

	    i = _tick.blackboard.set('i', i, _tick.tree.id, this.id);
	    return status;
	  }
	});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _Decorator = __webpack_require__(273);

	var _Decorator2 = _interopRequireDefault(_Decorator);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * Repeater is a decorator that repeats the tick signal until the child node 
	 * return `RUNNING` or `ERROR`. Optionally, a maximum number of repetitions 
	 * can be defined.
	 *
	 * @module b3
	 * @class Repeater
	 * @extends Decorator
	 **/

	exports.default = (0, _b.Class)(_Decorator2.default, {

	  /**
	   * Node name. Default to `Repeater`.
	   * @property {String} name
	   * @readonly
	   **/
	  name: 'Repeater',

	  /**
	   * Node title. Default to `Repeat XXx`. Used in Editor.
	   * @property {String} title
	   * @readonly
	   **/
	  title: 'Repeat <maxLoop>x',

	  /**
	   * Node parameters.
	   * @property {String} parameters
	   * @readonly
	   **/
	  parameters: { 'maxLoop': -1 },

	  /**
	   * Initialization method.
	   *
	   * Settings parameters:
	   *
	   * - **maxLoop** (*Integer*) Maximum number of repetitions. Default to -1 
	   *                           (infinite).
	   * - **child** (*BaseNode*) The child node.
	   * 
	   * @method initialize
	   * @param {Object} params Object with parameters.
	   * @constructor
	   **/
	  initialize: function initialize(params) {
	    _Decorator2.default.prototype.initialize.call(this, params);
	    this.maxLoop = params.maxLoop || -1;
	  },

	  /**
	   * Open method.
	   * @method open
	   * @param {Tick} tick A tick instance.
	   **/
	  open: function open(tick) {
	    tick.blackboard.set('i', 0, tick.tree.id, this.id);
	  },

	  /**
	   * Tick method.
	   * @method tick
	   * @param {Tick} tick A tick instance.
	   **/
	  tick: function tick(_tick) {
	    if (!this.child) {
	      return _constants.ERROR;
	    }

	    var i = _tick.blackboard.get('i', _tick.tree.id, this.id);
	    var status = _constants.SUCCESS;

	    while (this.maxLoop < 0 || i < this.maxLoop) {
	      status = this.child._execute(_tick);

	      if (status == _constants.SUCCESS || status == _constants.FAILURE) {
	        i++;
	      } else {
	        break;
	      }
	    }

	    i = _tick.blackboard.set('i', i, _tick.tree.id, this.id);
	    return status;
	  }
	});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _MemPriority = __webpack_require__(265);

	Object.defineProperty(exports, 'MemPriority', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MemPriority).default;
	  }
	});

	var _MemSequence = __webpack_require__(267);

	Object.defineProperty(exports, 'MemSequence', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MemSequence).default;
	  }
	});

	var _Priority = __webpack_require__(268);

	Object.defineProperty(exports, 'Priority', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Priority).default;
	  }
	});

	var _Sequence = __webpack_require__(269);

	Object.defineProperty(exports, 'Sequence', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Sequence).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Error = __webpack_require__(258);

	Object.defineProperty(exports, 'Error', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Error).default;
	  }
	});

	var _Failer = __webpack_require__(261);

	Object.defineProperty(exports, 'Failer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Failer).default;
	  }
	});

	var _Runner = __webpack_require__(262);

	Object.defineProperty(exports, 'Runner', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Runner).default;
	  }
	});

	var _Succeeder = __webpack_require__(263);

	Object.defineProperty(exports, 'Succeeder', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Succeeder).default;
	  }
	});

	var _Wait = __webpack_require__(264);

	Object.defineProperty(exports, 'Wait', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Wait).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	"use strict";

	/**
	 * A new Tick object is instantiated every tick by BehaviorTree. It is passed
	 * as parameter to the nodes through the tree during the traversal.
	 * 
	 * The role of the Tick class is to store the instances of tree, debug, 
	 * target and blackboard. So, all nodes can access these informations.
	 * 
	 * For internal uses, the Tick also is useful to store the open node after 
	 * the tick signal, in order to let `BehaviorTree` to keep track and close 
	 * them when necessary.
	 *
	 * This class also makes a bridge between nodes and the debug, passing the 
	 * node state to the debug if the last is provided.
	 *
	 * @module b3
	 * @class Tick
	 **/

	exports.default = (0, _b.Class)(null, {

	  /**
	   * The tree reference.
	   * @property {b3.BehaviorTree} tree
	   * @readOnly
	   **/
	  tree: null,

	  /**
	   * The debug reference.
	   * @property {Object} debug
	   * @readOnly
	   */
	  debug: null,

	  /**
	   * The target object reference.
	   * @property {Object} target
	   * @readOnly
	   **/
	  target: null,

	  /**
	   * The blackboard reference.
	   * @property {b3.Blackboard} blackboard
	   * @readOnly
	   **/
	  blackboard: null,

	  /**
	   * The list of open nodes. Update during the tree traversal.
	   * @property {Array} _openNodes
	   * @protected
	   * @readOnly
	   **/
	  _openNodes: [],

	  /**
	   * The number of nodes entered during the tick. Update during the tree 
	   * traversal.
	   * 
	   * @property {Integer} _nodeCount
	   * @protected
	   * @readOnly
	   **/
	  _nodeCount: 0,

	  /**
	   * Initialization method.
	   * @method initialize
	   * @constructor
	   **/
	  initialize: function initialize() {
	    // set by BehaviorTree
	    this.tree = null;
	    this.debug = null;
	    this.target = null;
	    this.blackboard = null;

	    // updated during the tick signal
	    this._openNodes = [];
	    this._nodeCount = 0;
	  },

	  /**
	   * Called when entering a node (called by BaseNode).
	   * @method _enterNode
	   * @param {Object} node The node that called this method.
	   * @protected
	   **/
	  _enterNode: function _enterNode(node) {
	    this._nodeCount++;
	    this._openNodes.push(node);

	    // TODO: call debug here
	  },

	  /**
	   * Callback when opening a node (called by BaseNode).
	   * @method _openNode
	   * @param {Object} node The node that called this method.
	   * @protected
	   **/
	  _openNode: function _openNode(node) {
	    // TODO: call debug here
	  },

	  /**
	   * Callback when ticking a node (called by BaseNode).
	   * @method _tickNode
	   * @param {Object} node The node that called this method.
	   * @protected
	   **/
	  _tickNode: function _tickNode(node) {
	    // TODO: call debug here
	  },

	  /**
	   * Callback when closing a node (called by BaseNode).
	   * @method _closeNode
	   * @param {Object} node The node that called this method.
	   * @protected
	   **/
	  _closeNode: function _closeNode(node) {
	    // TODO: call debug here
	    this._openNodes.pop();
	  },

	  /**
	   * Callback when exiting a node (called by BaseNode).
	   * @method _exitNode
	   * @param {Object} node The node that called this method.
	   * @protected
	   **/
	  _exitNode: function _exitNode(node) {
	    // TODO: call debug here
	  }
	});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	"use strict";

	/**
	 * The Blackboard is the memory structure required by `BehaviorTree` and its 
	 * nodes. It only have 2 public methods: `set` and `get`. These methods works
	 * in 3 different contexts: global, per tree, and per node per tree.
	 *
	 * Suppose you have two different trees controlling a single object with a 
	 * single blackboard, then:
	 *
	 * - In the global context, all nodes will access the stored information. 
	 * - In per tree context, only nodes sharing the same tree share the stored 
	 *   information.
	 * - In per node per tree context, the information stored in the blackboard 
	 *   can only be accessed by the same node that wrote the data.
	 *
	 * The context is selected indirectly by the parameters provided to these 
	 * methods, for example:
	 *
	 *     // getting/setting variable in global context
	 *     blackboard.set('testKey', 'value');
	 *     var value = blackboard.get('testKey');
	 *
	 *     // getting/setting variable in per tree context
	 *     blackboard.set('testKey', 'value', tree.id);
	 *     var value = blackboard.get('testKey', tree.id);
	 *
	 *     // getting/setting variable in per node per tree context
	 *     blackboard.set('testKey', 'value', tree.id, node.id);
	 *     var value = blackboard.get('testKey', tree.id, node.id);
	 *
	 * Note: Internally, the blackboard store these memories in different 
	 * objects, being the global on `_baseMemory`, the per tree on `_treeMemory` 
	 * and the per node per tree dynamically create inside the per tree memory 
	 * (it is accessed via `_treeMemory[id].nodeMemory`). Avoid to use these 
	 * variables manually, use `get` and `set` instead.
	 *
	 * @module b3
	 * @class Blackboard
	 **/

	exports.default = (0, _b.Class)(null, {

	  /**
	   * Initialization method.
	   * @method initialize
	   * @constructor
	   **/
	  initialize: function initialize() {
	    this._baseMemory = {};
	    this._treeMemory = {};
	  },

	  /**
	   * Internal method to retrieve the tree context memory. If the memory does
	   * not exist, this method creates it.
	   *
	   * @method _getTreeMemory
	   * @param {string} treeScope The id of the tree in scope.
	   * @return {Object} The tree memory.
	   * @protected
	   **/
	  _getTreeMemory: function _getTreeMemory(treeScope) {
	    if (!this._treeMemory[treeScope]) {
	      this._treeMemory[treeScope] = {
	        'nodeMemory': {},
	        'openNodes': [],
	        'traversalDepth': 0,
	        'traversalCycle': 0
	      };
	    }
	    return this._treeMemory[treeScope];
	  },

	  /**
	   * Internal method to retrieve the node context memory, given the tree 
	   * memory. If the memory does not exist, this method creates is.
	   *
	   * @method _getNodeMemory
	   * @param {String} treeMemory the tree memory.
	   * @param {String} nodeScope The id of the node in scope.
	   * @return {Object} The node memory.
	   * @protected
	   **/
	  _getNodeMemory: function _getNodeMemory(treeMemory, nodeScope) {
	    var memory = treeMemory.nodeMemory;
	    if (!memory[nodeScope]) {
	      memory[nodeScope] = {};
	    }

	    return memory[nodeScope];
	  },

	  /**
	   * Internal method to retrieve the context memory. If treeScope and 
	   * nodeScope are provided, this method returns the per node per tree 
	   * memory. If only the treeScope is provided, it returns the per tree 
	   * memory. If no parameter is provided, it returns the global memory. 
	   * Notice that, if only nodeScope is provided, this method will still 
	   * return the global memory.
	   *
	   * @method _getMemory
	   * @param {String} treeScope The id of the tree scope.
	   * @param {String} nodeScope The id of the node scope.
	   * @return {Object} A memory object.
	   * @protected
	   **/
	  _getMemory: function _getMemory(treeScope, nodeScope) {
	    var memory = this._baseMemory;

	    if (treeScope) {
	      memory = this._getTreeMemory(treeScope);

	      if (nodeScope) {
	        memory = this._getNodeMemory(memory, nodeScope);
	      }
	    }

	    return memory;
	  },

	  /**
	   * Stores a value in the blackboard. If treeScope and nodeScope are 
	   * provided, this method will save the value into the per node per tree 
	   * memory. If only the treeScope is provided, it will save the value into 
	   * the per tree memory. If no parameter is provided, this method will save 
	   * the value into the global memory. Notice that, if only nodeScope is 
	   * provided (but treeScope not), this method will still save the value into
	   * the global memory.
	   *
	   * @method set
	   * @param {String} key The key to be stored.
	   * @param {String} value The value to be stored.
	   * @param {String} treeScope The tree id if accessing the tree or node 
	   *                           memory.
	   * @param {String} nodeScope The node id if accessing the node memory.
	   **/
	  set: function set(key, value, treeScope, nodeScope) {
	    var memory = this._getMemory(treeScope, nodeScope);
	    memory[key] = value;
	  },

	  /**
	   * Retrieves a value in the blackboard. If treeScope and nodeScope are
	   * provided, this method will retrieve the value from the per node per tree
	   * memory. If only the treeScope is provided, it will retrieve the value
	   * from the per tree memory. If no parameter is provided, this method will
	   * retrieve from the global memory. If only nodeScope is provided (but
	   * treeScope not), this method will still try to retrieve from the global
	   * memory.
	   *
	   * @method get
	   * @param {String} key The key to be retrieved.
	   * @param {String} treeScope The tree id if accessing the tree or node 
	   *                           memory.
	   * @param {String} nodeScope The node id if accessing the node memory.
	   * @return {Object} The value stored or undefined.
	   **/
	  get: function get(key, treeScope, nodeScope) {
	    var memory = this._getMemory(treeScope, nodeScope);
	    return memory[key];
	  }
	});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _BaseNode = __webpack_require__(260);

	var _BaseNode2 = _interopRequireDefault(_BaseNode);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * Composite is the base class for all composite nodes. Thus, if you want to 
	 * create new custom composite nodes, you need to inherit from this class. 
	 *
	 * When creating composite nodes, you will need to propagate the tick signal 
	 * to the children nodes manually. To do that, override the `tick` method and
	 * call the `_execute` method on all nodes. For instance, take a look at how 
	 * the Sequence node inherit this class and how it call its children:
	 *
	 *     // Inherit from Composite, using the util function Class.
	 *     var Sequence = Class(Composite, {
	 *
	 *       // Remember to set the name of the node. 
	 *       name: 'Sequence',
	 *
	 *       // Override the tick function
	 *       tick: function(tick) {
	 *
	 *         // Iterates over the children
	 *         for (var i=0; i<this.children.length; i++) {
	 *
	 *           // Propagate the tick
	 *           var status = this.children[i]._execute(tick);
	 *
	 *           if (status !== SUCCESS) {
	 *               return status;
	 *           }
	 *         }
	 *
	 *         return SUCCESS;
	 *       }
	 *     });
	 * 
	 * @module b3
	 * @class Composite
	 * @extends BaseNode
	 **/

	exports.default = (0, _b.Class)(_BaseNode2.default, {

	  /**
	   * Node category. Default to `b3.COMPOSITE`.
	   *
	   * @property category
	   * @type {String}
	   * @readonly
	   **/
	  category: _constants.COMPOSITE,

	  /**
	   * Initialization method.
	   *
	   * @method initialize
	   * @constructor
	   **/
	  initialize: function initialize(params) {
	    _BaseNode2.default.prototype.initialize.call(this);
	    this.children = (params.children || []).slice(0);
	  }
	});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	var _BaseNode = __webpack_require__(260);

	var _BaseNode2 = _interopRequireDefault(_BaseNode);

	var _constants = __webpack_require__(253);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	"use strict";

	/**
	 * Condition is the base class for all condition nodes. Thus, if you want to 
	 * create new custom condition nodes, you need to inherit from this class. 
	 *
	 * @class Condition
	 * @extends BaseNode
	 **/

	exports.default = (0, _b.Class)(_BaseNode2.default, {

	  /**
	   * Node category. Default to `b3.CONDITION`.
	   * @property {String} category
	   * @readonly
	   **/
	  category: _constants.CONDITION,

	  /**
	   * Initialization method.
	   * @method initialize
	   * @constructor
	   **/
	  initialize: function initialize(params) {
	    _BaseNode2.default.prototype.initialize.call(this);
	  }

	});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _b = __webpack_require__(254);

	"use strict";

	/**
	 * A new Tick object is instantiated every tick by BehaviorTree. It is passed
	 * as parameter to the nodes through the tree during the traversal.
	 * 
	 * The role of the Tick class is to store the instances of tree, debug, 
	 * target and blackboard. So, all nodes can access these informations.
	 * 
	 * For internal uses, the Tick also is useful to store the open node after 
	 * the tick signal, in order to let `BehaviorTree` to keep track and close 
	 * them when necessary.
	 *
	 * This class also makes a bridge between nodes and the debug, passing the 
	 * node state to the debug if the last is provided.
	 *
	 * @module b3
	 * @class Tick
	 **/

	exports.default = (0, _b.Class)(null, {

	  /**
	   * The tree reference.
	   * @property {b3.BehaviorTree} tree
	   * @readOnly
	   **/
	  tree: null,

	  /**
	   * The debug reference.
	   * @property {Object} debug
	   * @readOnly
	   */
	  debug: null,

	  /**
	   * The target object reference.
	   * @property {Object} target
	   * @readOnly
	   **/
	  target: null,

	  /**
	   * The blackboard reference.
	   * @property {b3.Blackboard} blackboard
	   * @readOnly
	   **/
	  blackboard: null,

	  /**
	   * The list of open nodes. Update during the tree traversal.
	   * @property {Array} _openNodes
	   * @protected
	   * @readOnly
	   **/
	  _openNodes: [],

	  /**
	   * The number of nodes entered during the tick. Update during the tree 
	   * traversal.
	   * 
	   * @property {Integer} _nodeCount
	   * @protected
	   * @readOnly
	   **/
	  _nodeCount: 0,

	  /**
	   * Initialization method.
	   * @method initialize
	   * @constructor
	   **/
	  initialize: function initialize() {
	    // set by BehaviorTree
	    this.tree = null;
	    this.debug = null;
	    this.target = null;
	    this.blackboard = null;

	    // updated during the tick signal
	    this._openNodes = [];
	    this._nodeCount = 0;
	  },

	  /**
	   * Called when entering a node (called by BaseNode).
	   * @method _enterNode
	   * @param {Object} node The node that called this method.
	   * @protected
	   **/
	  _enterNode: function _enterNode(node) {
	    this._nodeCount++;
	    this._openNodes.push(node);

	    // TODO: call debug here
	  },

	  /**
	   * Callback when opening a node (called by BaseNode).
	   * @method _openNode
	   * @param {Object} node The node that called this method.
	   * @protected
	   **/
	  _openNode: function _openNode(node) {
	    // TODO: call debug here
	  },

	  /**
	   * Callback when ticking a node (called by BaseNode).
	   * @method _tickNode
	   * @param {Object} node The node that called this method.
	   * @protected
	   **/
	  _tickNode: function _tickNode(node) {
	    // TODO: call debug here
	  },

	  /**
	   * Callback when closing a node (called by BaseNode).
	   * @method _closeNode
	   * @param {Object} node The node that called this method.
	   * @protected
	   **/
	  _closeNode: function _closeNode(node) {
	    // TODO: call debug here
	    this._openNodes.pop();
	  },

	  /**
	   * Callback when exiting a node (called by BaseNode).
	   * @method _exitNode
	   * @param {Object} node The node that called this method.
	   * @protected
	   **/
	  _exitNode: function _exitNode(node) {
	    // TODO: call debug here
	  }
	});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Uid = undefined;

	var _stampit = __webpack_require__(1);

	var _stampit2 = _interopRequireDefault(_stampit);

	var _uid = __webpack_require__(287);

	var _uid2 = _interopRequireDefault(_uid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultUidLength = 12;

	var Uid = exports.Uid = _stampit2.default.methods({
		createUid: function createUid() {
			var length = arguments.length <= 0 || arguments[0] === undefined ? defaultUidLength : arguments[0];

			return (0, _uid2.default)(length);
		}
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcVWlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLG1CQUFtQixFQUF6Qjs7QUFFTyxJQUFNLG9CQUFNLGtCQUFRLE9BQVIsQ0FBZ0I7QUFDbEMsVUFEa0MsdUJBQ0c7QUFBQSxNQUEzQixNQUEyQix5REFBbEIsZ0JBQWtCOztBQUNwQyxTQUFPLG1CQUFJLE1BQUosQ0FBUDtBQUNBO0FBSGlDLENBQWhCLENBQVoiLCJmaWxlIjoiVWlkLmpzIiwic291cmNlUm9vdCI6IkQ6L3dvcmtzcGFjZS9iZWhhdmlvcjMtY2hpZWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhbXBpdCBmcm9tICdzdGFtcGl0JztcbmltcG9ydCB1aWQgZnJvbSAndWlkJztcblxuY29uc3QgZGVmYXVsdFVpZExlbmd0aCA9IDEyO1xuXG5leHBvcnQgY29uc3QgVWlkID0gc3RhbXBpdC5tZXRob2RzKHtcblx0Y3JlYXRlVWlkKGxlbmd0aCA9IGRlZmF1bHRVaWRMZW5ndGgpIHtcblx0XHRyZXR1cm4gdWlkKGxlbmd0aCk7XG5cdH0sXG59KTtcbiJdfQ==

/***/ },
/* 287 */
/***/ function(module, exports) {

	/**
	 * Export `uid`
	 */

	module.exports = uid;

	/**
	 * Create a `uid`
	 *
	 * @param {String} len
	 * @return {String} uid
	 */

	function uid(len) {
	  len = len || 7;
	  return Math.random().toString(35).substr(2, len);
	}


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Model = __webpack_require__(289);

	var NodeModel = (0, _Model.Model)('Node').compose((0, _Model.Getter)('name'), (0, _Model.Getter)('title'), (0, _Model.Getter)('description'), (0, _Model.Getter)('behaviorNode'), (0, _Model.Statics)({ build: build }));

	exports.default = NodeModel;


	function build(behaviorNode) {
		return NodeModel.create({
			behaviorNode: behaviorNode,
			id: behaviorNode.id,
			name: behaviorNode.name,
			title: behaviorNode.title,
			description: behaviorNode.description
		});
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbW9kZWxcXE5vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsSUFBTSxZQUFZLGtCQUFNLE1BQU4sRUFBYyxPQUFkLENBQ2pCLG1CQUFPLE1BQVAsQ0FEaUIsRUFFakIsbUJBQU8sT0FBUCxDQUZpQixFQUdqQixtQkFBTyxhQUFQLENBSGlCLEVBSWpCLG1CQUFPLGNBQVAsQ0FKaUIsRUFLakIsb0JBQVEsRUFBRSxZQUFGLEVBQVIsQ0FMaUIsQ0FBbEI7O2tCQVFlLFM7OztBQUVmLFNBQVMsS0FBVCxDQUFlLFlBQWYsRUFBNkI7QUFDNUIsUUFBTyxVQUFVLE1BQVYsQ0FBaUI7QUFDdkIsNEJBRHVCO0FBRXZCLE1BQUksYUFBYSxFQUZNO0FBR3ZCLFFBQU0sYUFBYSxJQUhJO0FBSXZCLFNBQU8sYUFBYSxLQUpHO0FBS3ZCLGVBQWEsYUFBYTtBQUxILEVBQWpCLENBQVA7QUFPQSIsImZpbGUiOiJOb2RlLmpzIiwic291cmNlUm9vdCI6IkQ6L3dvcmtzcGFjZS9iZWhhdmlvcjMtY2hpZWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbCwgR2V0dGVyLCBTdGF0aWNzIH0gZnJvbSAnLi9Nb2RlbCc7XG5cbmNvbnN0IE5vZGVNb2RlbCA9IE1vZGVsKCdOb2RlJykuY29tcG9zZShcblx0R2V0dGVyKCduYW1lJyksXG5cdEdldHRlcigndGl0bGUnKSxcblx0R2V0dGVyKCdkZXNjcmlwdGlvbicpLFxuXHRHZXR0ZXIoJ2JlaGF2aW9yTm9kZScpLFxuXHRTdGF0aWNzKHsgYnVpbGQgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGVNb2RlbDtcblxuZnVuY3Rpb24gYnVpbGQoYmVoYXZpb3JOb2RlKSB7XG5cdHJldHVybiBOb2RlTW9kZWwuY3JlYXRlKHtcblx0XHRiZWhhdmlvck5vZGUsXG5cdFx0aWQ6IGJlaGF2aW9yTm9kZS5pZCxcblx0XHRuYW1lOiBiZWhhdmlvck5vZGUubmFtZSxcblx0XHR0aXRsZTogYmVoYXZpb3JOb2RlLnRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uOiBiZWhhdmlvck5vZGUuZGVzY3JpcHRpb24sXG5cdH0pO1xufVxuIl19

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _map = __webpack_require__(148);

	var _map2 = _interopRequireDefault(_map);

	var _defineProperty2 = __webpack_require__(290);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _apply = __webpack_require__(294);

	var _apply2 = _interopRequireDefault(_apply);

	var _symbol = __webpack_require__(218);

	var _symbol2 = _interopRequireDefault(_symbol);

	exports.Model = Model;
	exports.Getter = Getter;
	exports.Property = Property;
	exports.Initialize = Initialize;
	exports.Methods = Methods;
	exports.Statics = Statics;

	var _lodash = __webpack_require__(297);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _lodash3 = __webpack_require__(245);

	var _lodash4 = _interopRequireDefault(_lodash3);

	var _stampit = __webpack_require__(1);

	var _stampit2 = _interopRequireDefault(_stampit);

	var _EventEmittable = __webpack_require__(300);

	var _EventEmittable2 = _interopRequireDefault(_EventEmittable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Model(modelName) {
		var bModel = (0, _symbol2.default)('model ' + modelName);

		function initializer() {
			this[bModel] = modelName;
		}

		function isCreatorOf(checkObject) {
			return Boolean(checkObject && checkObject[bModel]);
		}

		function toString() {
			return 'model of ' + modelName + ' ' + (this.getId && this.getId());
		}

		function getModelName() {
			return modelName;
		}

		return (0, _stampit2.default)({
			initializers: initializer,
			methods: { toString: toString, getModelName: getModelName },
			statics: { isCreatorOf: isCreatorOf }
		}).compose(_EventEmittable2.default, Getter('id'));
	}

	function Getter(propertyName) {
		var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

		var getterName = 'get' + (0, _lodash2.default)(propertyName);
		var bValue = getPropertySymbol(propertyName);

		function getter() {
			return this[bValue];
		}

		function initializeValue(data) {
			if ((0, _lodash4.default)(defaultValue)) {
				this[bValue] = (0, _apply2.default)(defaultValue, this, [data]);
				return;
			}

			var value = data[propertyName];
			if (value === undefined) {
				value = defaultValue;
			}
			this[bValue] = value;
		}

		return (0, _stampit2.default)({
			initializers: [initializeValue],
			methods: (0, _defineProperty3.default)({}, getterName, getter)
		});
	}

	function Property(propertyName, defaultValue) {
		var setterName = 'set' + (0, _lodash2.default)(propertyName);
		var bValue = getPropertySymbol(propertyName);

		function setter(newValue) {
			var oldValue = this[bValue];
			this[bValue] = newValue;
			this.emit('change', propertyName, newValue, oldValue);
		}

		return _stampit2.default.methods((0, _defineProperty3.default)({}, setterName, setter)).compose(Getter(propertyName, defaultValue));
	}

	function Initialize() {
		for (var _len = arguments.length, initializers = Array(_len), _key = 0; _key < _len; _key++) {
			initializers[_key] = arguments[_key];
		}

		return _stampit2.default.initializers(initializers);
	}

	function Methods(methods) {
		return _stampit2.default.methods(methods);
	}

	function Statics(statics) {
		return _stampit2.default.statics(statics);
	}

	var propertySymbolMap = new _map2.default();

	function getPropertySymbol(propertyName) {
		if (!propertySymbolMap.has(propertyName)) {
			var symbol = (0, _symbol2.default)('property ' + propertyName + ' value');
			propertySymbolMap.set(propertyName, symbol);
			return symbol;
		}
		return propertySymbolMap.get(propertyName);
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbW9kZWxcXE1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFNZ0IsSyxHQUFBLEs7UUE2QkEsTSxHQUFBLE07UUEyQkEsUSxHQUFBLFE7UUFnQkEsVSxHQUFBLFU7UUFJQSxPLEdBQUEsTztRQUlBLE8sR0FBQSxPOztBQXRGaEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVPLFNBQVMsS0FBVCxDQUFlLFNBQWYsRUFBMEI7QUFDaEMsS0FBTSxTQUFTLGlDQUFnQixTQUFoQixDQUFmOztBQUVBLFVBQVMsV0FBVCxHQUF1QjtBQUN0QixPQUFLLE1BQUwsSUFBZSxTQUFmO0FBQ0E7O0FBRUQsVUFBUyxXQUFULENBQXFCLFdBQXJCLEVBQWtDO0FBQ2pDLFNBQU8sUUFBUSxlQUFlLFlBQVksTUFBWixDQUF2QixDQUFQO0FBQ0E7O0FBRUQsVUFBUyxRQUFULEdBQW9CO0FBQ25CLHVCQUFtQixTQUFuQixVQUFnQyxLQUFLLEtBQUwsSUFBYyxLQUFLLEtBQUwsRUFBOUM7QUFDQTs7QUFFRCxVQUFTLFlBQVQsR0FBd0I7QUFDdkIsU0FBTyxTQUFQO0FBQ0E7O0FBRUQsUUFBTyx1QkFBUTtBQUNkLGdCQUFjLFdBREE7QUFFZCxXQUFTLEVBQUUsa0JBQUYsRUFBWSwwQkFBWixFQUZLO0FBR2QsV0FBUyxFQUFFLHdCQUFGO0FBSEssRUFBUixFQUlKLE9BSkksMkJBTU4sT0FBTyxJQUFQLENBTk0sQ0FBUDtBQVFBOztBQUVNLFNBQVMsTUFBVCxDQUFnQixZQUFoQixFQUFtRDtBQUFBLEtBQXJCLFlBQXFCLHlEQUFOLElBQU07O0FBQ3pELEtBQU0scUJBQW1CLHNCQUFZLFlBQVosQ0FBekI7QUFDQSxLQUFNLFNBQVMsa0JBQWtCLFlBQWxCLENBQWY7O0FBRUEsVUFBUyxNQUFULEdBQWtCO0FBQ2pCLFNBQU8sS0FBSyxNQUFMLENBQVA7QUFDQTs7QUFFRCxVQUFTLGVBQVQsQ0FBeUIsSUFBekIsRUFBK0I7QUFDOUIsTUFBSSxzQkFBWSxZQUFaLENBQUosRUFBK0I7QUFDOUIsUUFBSyxNQUFMLElBQWUscUJBQWMsWUFBZCxFQUE0QixJQUE1QixFQUFrQyxDQUFDLElBQUQsQ0FBbEMsQ0FBZjtBQUNBO0FBQ0E7O0FBRUQsTUFBSSxRQUFRLEtBQUssWUFBTCxDQUFaO0FBQ0EsTUFBSSxVQUFVLFNBQWQsRUFBeUI7QUFDeEIsV0FBUSxZQUFSO0FBQ0E7QUFDRCxPQUFLLE1BQUwsSUFBZSxLQUFmO0FBQ0E7O0FBRUQsUUFBTyx1QkFBUTtBQUNkLGdCQUFjLENBQUMsZUFBRCxDQURBO0FBRWQsNkNBQVksVUFBWixFQUF5QixNQUF6QjtBQUZjLEVBQVIsQ0FBUDtBQUlBOztBQUVNLFNBQVMsUUFBVCxDQUFrQixZQUFsQixFQUFnQyxZQUFoQyxFQUE4QztBQUNwRCxLQUFNLHFCQUFtQixzQkFBWSxZQUFaLENBQXpCO0FBQ0EsS0FBTSxTQUFTLGtCQUFrQixZQUFsQixDQUFmOztBQUVBLFVBQVMsTUFBVCxDQUFnQixRQUFoQixFQUEwQjtBQUN6QixNQUFNLFdBQVcsS0FBSyxNQUFMLENBQWpCO0FBQ0EsT0FBSyxNQUFMLElBQWUsUUFBZjtBQUNBLE9BQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsWUFBcEIsRUFBa0MsUUFBbEMsRUFBNEMsUUFBNUM7QUFDQTs7QUFFRCxRQUFPLGtCQUNMLE9BREssbUNBQ00sVUFETixFQUNtQixNQURuQixHQUVMLE9BRkssQ0FFRyxPQUFPLFlBQVAsRUFBcUIsWUFBckIsQ0FGSCxDQUFQO0FBSUE7O0FBRU0sU0FBUyxVQUFULEdBQXFDO0FBQUEsbUNBQWQsWUFBYztBQUFkLGNBQWM7QUFBQTs7QUFDM0MsUUFBTyxrQkFBUSxZQUFSLENBQXFCLFlBQXJCLENBQVA7QUFDQTs7QUFFTSxTQUFTLE9BQVQsQ0FBaUIsT0FBakIsRUFBMEI7QUFDaEMsUUFBTyxrQkFBUSxPQUFSLENBQWdCLE9BQWhCLENBQVA7QUFDQTs7QUFFTSxTQUFTLE9BQVQsQ0FBaUIsT0FBakIsRUFBMEI7QUFDaEMsUUFBTyxrQkFBUSxPQUFSLENBQWdCLE9BQWhCLENBQVA7QUFDQTs7QUFFRCxJQUFNLG9CQUFvQixtQkFBMUI7O0FBRUEsU0FBUyxpQkFBVCxDQUEyQixZQUEzQixFQUF5QztBQUN4QyxLQUFJLENBQUMsa0JBQWtCLEdBQWxCLENBQXNCLFlBQXRCLENBQUwsRUFBMEM7QUFDekMsTUFBTSxTQUFTLG9DQUFtQixZQUFuQixZQUFmO0FBQ0Esb0JBQWtCLEdBQWxCLENBQXNCLFlBQXRCLEVBQW9DLE1BQXBDO0FBQ0EsU0FBTyxNQUFQO0FBQ0E7QUFDRCxRQUFPLGtCQUFrQixHQUFsQixDQUFzQixZQUF0QixDQUFQO0FBQ0EiLCJmaWxlIjoiTW9kZWwuanMiLCJzb3VyY2VSb290IjoiRDovd29ya3NwYWNlL2JlaGF2aW9yMy1jaGllZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfdXBwZXJGaXJzdCBmcm9tICdsb2Rhc2gudXBwZXJmaXJzdCc7XG5pbXBvcnQgX2lzRnVuY3Rpb24gZnJvbSAnbG9kYXNoLmlzZnVuY3Rpb24nO1xuaW1wb3J0IHN0YW1waXQgZnJvbSAnc3RhbXBpdCc7XG5cbmltcG9ydCBFdmVudEVtaXR0YWJsZSBmcm9tICcuLi9jb3JlL0V2ZW50RW1pdHRhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIE1vZGVsKG1vZGVsTmFtZSkge1xuXHRjb25zdCBiTW9kZWwgPSBTeW1ib2woYG1vZGVsICR7bW9kZWxOYW1lfWApO1xuXG5cdGZ1bmN0aW9uIGluaXRpYWxpemVyKCkge1xuXHRcdHRoaXNbYk1vZGVsXSA9IG1vZGVsTmFtZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzQ3JlYXRvck9mKGNoZWNrT2JqZWN0KSB7XG5cdFx0cmV0dXJuIEJvb2xlYW4oY2hlY2tPYmplY3QgJiYgY2hlY2tPYmplY3RbYk1vZGVsXSk7XG5cdH1cblxuXHRmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gYG1vZGVsIG9mICR7bW9kZWxOYW1lfSAke3RoaXMuZ2V0SWQgJiYgdGhpcy5nZXRJZCgpfWA7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRNb2RlbE5hbWUoKSB7XG5cdFx0cmV0dXJuIG1vZGVsTmFtZTtcblx0fVxuXG5cdHJldHVybiBzdGFtcGl0KHtcblx0XHRpbml0aWFsaXplcnM6IGluaXRpYWxpemVyLFxuXHRcdG1ldGhvZHM6IHsgdG9TdHJpbmcsIGdldE1vZGVsTmFtZSB9LFxuXHRcdHN0YXRpY3M6IHsgaXNDcmVhdG9yT2YgfSxcblx0fSkuY29tcG9zZShcblx0XHRFdmVudEVtaXR0YWJsZSxcblx0XHRHZXR0ZXIoJ2lkJylcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEdldHRlcihwcm9wZXJ0eU5hbWUsIGRlZmF1bHRWYWx1ZSA9IG51bGwpIHtcblx0Y29uc3QgZ2V0dGVyTmFtZSA9IGBnZXQke191cHBlckZpcnN0KHByb3BlcnR5TmFtZSl9YDtcblx0Y29uc3QgYlZhbHVlID0gZ2V0UHJvcGVydHlTeW1ib2wocHJvcGVydHlOYW1lKTtcblxuXHRmdW5jdGlvbiBnZXR0ZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXNbYlZhbHVlXTtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXRpYWxpemVWYWx1ZShkYXRhKSB7XG5cdFx0aWYgKF9pc0Z1bmN0aW9uKGRlZmF1bHRWYWx1ZSkpIHtcblx0XHRcdHRoaXNbYlZhbHVlXSA9IFJlZmxlY3QuYXBwbHkoZGVmYXVsdFZhbHVlLCB0aGlzLCBbZGF0YV0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCB2YWx1ZSA9IGRhdGFbcHJvcGVydHlOYW1lXTtcblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cdFx0fVxuXHRcdHRoaXNbYlZhbHVlXSA9IHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIHN0YW1waXQoe1xuXHRcdGluaXRpYWxpemVyczogW2luaXRpYWxpemVWYWx1ZV0sXG5cdFx0bWV0aG9kczogeyBbZ2V0dGVyTmFtZV06IGdldHRlciB9LFxuXHR9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb3BlcnR5KHByb3BlcnR5TmFtZSwgZGVmYXVsdFZhbHVlKSB7XG5cdGNvbnN0IHNldHRlck5hbWUgPSBgc2V0JHtfdXBwZXJGaXJzdChwcm9wZXJ0eU5hbWUpfWA7XG5cdGNvbnN0IGJWYWx1ZSA9IGdldFByb3BlcnR5U3ltYm9sKHByb3BlcnR5TmFtZSk7XG5cblx0ZnVuY3Rpb24gc2V0dGVyKG5ld1ZhbHVlKSB7XG5cdFx0Y29uc3Qgb2xkVmFsdWUgPSB0aGlzW2JWYWx1ZV07XG5cdFx0dGhpc1tiVmFsdWVdID0gbmV3VmFsdWU7XG5cdFx0dGhpcy5lbWl0KCdjaGFuZ2UnLCBwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gc3RhbXBpdFxuXHRcdC5tZXRob2RzKHsgW3NldHRlck5hbWVdOiBzZXR0ZXIgfSlcblx0XHQuY29tcG9zZShHZXR0ZXIocHJvcGVydHlOYW1lLCBkZWZhdWx0VmFsdWUpKVxuXHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbml0aWFsaXplKC4uLmluaXRpYWxpemVycykge1xuXHRyZXR1cm4gc3RhbXBpdC5pbml0aWFsaXplcnMoaW5pdGlhbGl6ZXJzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1ldGhvZHMobWV0aG9kcykge1xuXHRyZXR1cm4gc3RhbXBpdC5tZXRob2RzKG1ldGhvZHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3RhdGljcyhzdGF0aWNzKSB7XG5cdHJldHVybiBzdGFtcGl0LnN0YXRpY3Moc3RhdGljcyk7XG59XG5cbmNvbnN0IHByb3BlcnR5U3ltYm9sTWFwID0gbmV3IE1hcCgpO1xuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eVN5bWJvbChwcm9wZXJ0eU5hbWUpIHtcblx0aWYgKCFwcm9wZXJ0eVN5bWJvbE1hcC5oYXMocHJvcGVydHlOYW1lKSkge1xuXHRcdGNvbnN0IHN5bWJvbCA9IFN5bWJvbChgcHJvcGVydHkgJHtwcm9wZXJ0eU5hbWV9IHZhbHVlYCk7XG5cdFx0cHJvcGVydHlTeW1ib2xNYXAuc2V0KHByb3BlcnR5TmFtZSwgc3ltYm9sKTtcblx0XHRyZXR1cm4gc3ltYm9sO1xuXHR9XG5cdHJldHVybiBwcm9wZXJ0eVN5bWJvbE1hcC5nZXQocHJvcGVydHlOYW1lKTtcbn1cbiJdfQ==

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(291);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(292), __esModule: true };

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(293);
	var $Object = __webpack_require__(159).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(157);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(167), 'Object', {defineProperty: __webpack_require__(163).f});

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(295), __esModule: true };

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(296);
	module.exports = __webpack_require__(159).Reflect.apply;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(157)
	  , aFunction = __webpack_require__(161)
	  , anObject  = __webpack_require__(164)
	  , _apply    = Function.apply;

	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(aFunction(target), thisArgument, anObject(argumentsList));
	  }
	});

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 4.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	var baseSlice = __webpack_require__(298),
	    toString = __webpack_require__(299);

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return string.match(reComplexSymbol);
	}

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : baseSlice(array, start, end);
	}

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new function.
	 */
	function createCaseFirst(methodName) {
	  return function(string) {
	    string = toString(string);

	    var strSymbols = reHasComplexSymbol.test(string)
	      ? stringToArray(string)
	      : undefined;

	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);

	    var trailing = strSymbols
	      ? castSlice(strSymbols, 1).join('')
	      : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst = createCaseFirst('toUpperCase');

	module.exports = upperFirst;


/***/ },
/* 298 */
/***/ function(module, exports) {

	/**
	 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	module.exports = baseSlice;


/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);

	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);

	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var Symbol = root.Symbol;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)(module), (function() { return this; }())))

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _apply = __webpack_require__(294);

	var _apply2 = _interopRequireDefault(_apply);

	var _stampit = __webpack_require__(1);

	var _stampit2 = _interopRequireDefault(_stampit);

	var _events = __webpack_require__(301);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _stampit2.default)({
		initializers: function initEventEmitter() {
			(0, _apply2.default)(_events.EventEmitter, this, []);
		},
		methods: ['emit', 'on', 'once'].reduce(function (methods, methodName) {
			methods[methodName] = _events.EventEmitter.prototype[methodName];
			return methods;
		}, {})
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcY29yZVxcRXZlbnRFbWl0dGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7a0JBRWUsdUJBQVE7QUFDdEIsZUFBYyxTQUFTLGdCQUFULEdBQTRCO0FBQ3pDLDZDQUE0QixJQUE1QixFQUFrQyxFQUFsQztBQUNBLEVBSHFCO0FBSXRCLFVBQVMsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLE1BQWYsRUFBdUIsTUFBdkIsQ0FBOEIsVUFBQyxPQUFELEVBQVUsVUFBVixFQUF5QjtBQUMvRCxVQUFRLFVBQVIsSUFBc0IscUJBQWEsU0FBYixDQUF1QixVQUF2QixDQUF0QjtBQUNBLFNBQU8sT0FBUDtBQUNBLEVBSFEsRUFHTixFQUhNO0FBSmEsQ0FBUixDIiwiZmlsZSI6IkV2ZW50RW1pdHRhYmxlLmpzIiwic291cmNlUm9vdCI6IkQ6L3dvcmtzcGFjZS9iZWhhdmlvcjMtY2hpZWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhbXBpdCBmcm9tICdzdGFtcGl0JztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YW1waXQoe1xuXHRpbml0aWFsaXplcnM6IGZ1bmN0aW9uIGluaXRFdmVudEVtaXR0ZXIoKSB7XG5cdFx0UmVmbGVjdC5hcHBseShFdmVudEVtaXR0ZXIsIHRoaXMsIFtdKTtcblx0fSxcblx0bWV0aG9kczogWydlbWl0JywgJ29uJywgJ29uY2UnXS5yZWR1Y2UoKG1ldGhvZHMsIG1ldGhvZE5hbWUpID0+IHtcblx0XHRtZXRob2RzW21ldGhvZE5hbWVdID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZVttZXRob2ROYW1lXTtcblx0XHRyZXR1cm4gbWV0aG9kcztcblx0fSwge30pLFxufSk7XG4iXX0=

/***/ },
/* 301 */
/***/ function(module, exports) {

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

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TYPE = exports.Persist = undefined;

	var _getPrototypeOf = __webpack_require__(303);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(307);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(308);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(312);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _stampit = __webpack_require__(1);

	var _stampit2 = _interopRequireDefault(_stampit);

	var _enumify = __webpack_require__(318);

	var _lodash = __webpack_require__(244);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _warning = __webpack_require__(319);

	var _warning2 = _interopRequireDefault(_warning);

	var _logger = __webpack_require__(320);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Persist = exports.Persist = (0, _stampit2.default)({
		initializers: initializer,
		methods: { persist: persist, retrieve: retrieve, destroy: destroy }
	}).compose(_logger2.default);

	function initializer() {
		var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		var adapter = _ref2.adapter;
		var _ref = arguments[1];
		var instance = _ref.instance;

		instance.adapter = instance.adapter || ensureAdapter(adapter);
	}

	function persist() {}

	function retrieve() {}

	function destroy() {}

	function ensureAdapter(adapter) {
		if ((0, _lodash2.default)(adapter)) {
			return adapter;
		}
		process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Valid adapter object was not found in first argument. No data will be persisted.') : void 0; // eslint-disable-line max-len
		return {};
	}

	var TYPE = exports.TYPE = function (_Enum) {
		(0, _inherits3.default)(TYPE, _Enum);

		function TYPE() {
			(0, _classCallCheck3.default)(this, TYPE);
			return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TYPE).apply(this, arguments));
		}

		return TYPE;
	}(_enumify.Enum);

	TYPE.initEnum(['TREE', 'SUBJECT']);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcUGVyc2lzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFTyxJQUFNLDRCQUFVLHVCQUFRO0FBQzlCLGVBQWMsV0FEZ0I7QUFFOUIsVUFBUyxFQUFFLGdCQUFGLEVBQVcsa0JBQVgsRUFBcUIsZ0JBQXJCO0FBRnFCLENBQVIsRUFHcEIsT0FIb0Isa0JBQWhCOztBQUtQLFNBQVMsV0FBVCxHQUFxRDtBQUFBLG1FQUFsQixFQUFrQjs7QUFBQSxLQUE5QixPQUE4QixTQUE5QixPQUE4QjtBQUFBO0FBQUEsS0FBWixRQUFZLFFBQVosUUFBWTs7QUFDcEQsVUFBUyxPQUFULEdBQW1CLFNBQVMsT0FBVCxJQUFvQixjQUFjLE9BQWQsQ0FBdkM7QUFDQTs7QUFFRCxTQUFTLE9BQVQsR0FBbUIsQ0FFbEI7O0FBRUQsU0FBUyxRQUFULEdBQW9CLENBRW5COztBQUVELFNBQVMsT0FBVCxHQUFtQixDQUVsQjs7QUFFRCxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0M7QUFDL0IsS0FBSSxzQkFBUyxPQUFULENBQUosRUFBdUI7QUFDdEIsU0FBTyxPQUFQO0FBQ0E7QUFDRCxnRUFBUSxLQUFSLEVBQWUsa0ZBQWYsVztBQUNBLFFBQU8sRUFBUDtBQUNBOztJQUVZLEksV0FBQSxJOzs7Ozs7Ozs7OztBQUNiLEtBQUssUUFBTCxDQUFjLENBQUMsTUFBRCxFQUFTLFNBQVQsQ0FBZCIsImZpbGUiOiJQZXJzaXN0LmpzIiwic291cmNlUm9vdCI6IkQ6L3dvcmtzcGFjZS9iZWhhdmlvcjMtY2hpZWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhbXBpdCBmcm9tICdzdGFtcGl0JztcbmltcG9ydCB7IEVudW0gfSBmcm9tICdlbnVtaWZ5JztcbmltcG9ydCBpc09iamVjdCBmcm9tICdsb2Rhc2guaXNvYmplY3QnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZyc7XG5cbmltcG9ydCBMb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuXG5leHBvcnQgY29uc3QgUGVyc2lzdCA9IHN0YW1waXQoe1xuXHRpbml0aWFsaXplcnM6IGluaXRpYWxpemVyLFxuXHRtZXRob2RzOiB7IHBlcnNpc3QsIHJldHJpZXZlLCBkZXN0cm95IH0sXG59KS5jb21wb3NlKExvZ2dlcik7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVyKHsgYWRhcHRlciB9ID0ge30sIHsgaW5zdGFuY2UgfSkge1xuXHRpbnN0YW5jZS5hZGFwdGVyID0gaW5zdGFuY2UuYWRhcHRlciB8fCBlbnN1cmVBZGFwdGVyKGFkYXB0ZXIpO1xufVxuXG5mdW5jdGlvbiBwZXJzaXN0KCkge1xuXG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlKCkge1xuXG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cbn1cblxuZnVuY3Rpb24gZW5zdXJlQWRhcHRlcihhZGFwdGVyKSB7XG5cdGlmIChpc09iamVjdChhZGFwdGVyKSkge1xuXHRcdHJldHVybiBhZGFwdGVyO1xuXHR9XG5cdHdhcm5pbmcoZmFsc2UsICdWYWxpZCBhZGFwdGVyIG9iamVjdCB3YXMgbm90IGZvdW5kIGluIGZpcnN0IGFyZ3VtZW50LiBObyBkYXRhIHdpbGwgYmUgcGVyc2lzdGVkLicpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cblx0cmV0dXJuIHt9O1xufVxuXG5leHBvcnQgY2xhc3MgVFlQRSBleHRlbmRzIEVudW0ge31cblRZUEUuaW5pdEVudW0oWydUUkVFJywgJ1NVQkpFQ1QnXSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(233)))

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(304), __esModule: true };

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(305);
	module.exports = __webpack_require__(159).Object.getPrototypeOf;

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(194)
	  , $getPrototypeOf = __webpack_require__(193);

	__webpack_require__(306)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(157)
	  , core    = __webpack_require__(159)
	  , fails   = __webpack_require__(168);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 307 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(309);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(310);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(218);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(311), __esModule: true };

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(151);
	__webpack_require__(195);
	module.exports = __webpack_require__(221).f('iterator');

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(313);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(317);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(309);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(314), __esModule: true };

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(315);
	module.exports = __webpack_require__(159).Object.setPrototypeOf;

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(157);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(316).set});

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(165)
	  , anObject = __webpack_require__(164);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(160)(Function.call, __webpack_require__(229).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(256), __esModule: true };

/***/ },
/* 318 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.copyProperties = copyProperties;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var INITIALIZED = Symbol();

	/**
	 * This is an abstract class that is not intended to be
	 * used directly. Extend it to turn your class into an enum
	 * (initialization is performed via `MyClass.initEnum()`).
	 */

	var Enum = exports.Enum = function () {
	    /**
	     * `initEnum()` closes the class. Then calling this constructor
	     * throws an exception.
	     * 
	     * If your subclass has a constructor then you can control
	     * what properties are added to `this` via the argument you
	     * pass to `super()`. No arguments are fine, too.
	     */

	    function Enum() {
	        var instanceProperties = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

	        _classCallCheck(this, Enum);

	        // new.target would be better than this.constructor,
	        // but isn’t supported by Babel
	        if ({}.hasOwnProperty.call(this.constructor, INITIALIZED)) {
	            throw new Error('Enum classes can’t be instantiated');
	        }
	        if ((typeof instanceProperties === 'undefined' ? 'undefined' : _typeof(instanceProperties)) === 'object' && instanceProperties !== null) {
	            copyProperties(this, instanceProperties);
	        }
	    }
	    /**
	     * Set up the enum, close the class.
	     * 
	     * @param arg Either an object whose properties provide the names
	     * and values (which must be mutable objects) of the enum constants.
	     * Or an Array whose elements are used as the names of the enum constants
	     * The values are create by instantiating the current class.
	     */

	    _createClass(Enum, [{
	        key: 'toString',

	        /**
	         * Default `toString()` method for enum constant.
	         */
	        value: function toString() {
	            return this.constructor.name + '.' + this.name;
	        }
	    }], [{
	        key: 'initEnum',
	        value: function initEnum(arg) {
	            Object.defineProperty(this, 'enumValues', {
	                value: [],
	                configurable: false,
	                writable: false,
	                enumerable: true
	            });
	            if (Array.isArray(arg)) {
	                this._enumValuesFromArray(arg);
	            } else {
	                this._enumValuesFromObject(arg);
	            }
	            Object.freeze(this.enumValues);
	            this[INITIALIZED] = true;
	            return this;
	        }
	    }, {
	        key: '_enumValuesFromArray',
	        value: function _enumValuesFromArray(arr) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var key = _step.value;

	                    this._pushEnumValue(new this(), key);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: '_enumValuesFromObject',
	        value: function _enumValuesFromObject(obj) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = Object.keys(obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var key = _step2.value;

	                    var value = new this(obj[key]);
	                    this._pushEnumValue(value, key);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    }, {
	        key: '_pushEnumValue',
	        value: function _pushEnumValue(enumValue, name) {
	            enumValue.name = name;
	            enumValue.ordinal = this.enumValues.length;
	            Object.defineProperty(this, name, {
	                value: enumValue,
	                configurable: false,
	                writable: false,
	                enumerable: true
	            });
	            this.enumValues.push(enumValue);
	        }

	        /**
	         * Given the name of an enum constant, return its value.
	         */

	    }, {
	        key: 'enumValueOf',
	        value: function enumValueOf(name) {
	            return this.enumValues.find(function (x) {
	                return x.name === name;
	            });
	        }

	        /**
	         * Make enum classes iterable
	         */

	    }, {
	        key: Symbol.iterator,
	        value: function value() {
	            return this.enumValues[Symbol.iterator]();
	        }
	    }]);

	    return Enum;
	}();

	function copyProperties(target, source) {
	    // Ideally, we’d use Reflect.ownKeys() here,
	    // but I don’t want to depend on a polyfill
	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	        for (var _iterator3 = Object.getOwnPropertyNames(source)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var key = _step3.value;

	            var desc = Object.getOwnPropertyDescriptor(source, key);
	            Object.defineProperty(target, key, desc);
	        }
	    } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	            }
	        } finally {
	            if (_didIteratorError3) {
	                throw _iteratorError3;
	            }
	        }
	    }

	    return target;
	}

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(233)))

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Logger = undefined;

	var _stampit = __webpack_require__(1);

	var _stampit2 = _interopRequireDefault(_stampit);

	var _debug2 = __webpack_require__(321);

	var _debug3 = _interopRequireDefault(_debug2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Logger = exports.Logger = _stampit2.default.methods({
		debug: function debug(category) {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			(0, _debug3.default)('b3:chief:' + category).apply(undefined, args);
		}
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbG9nZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNLDBCQUFTLGtCQUFRLE9BQVIsQ0FBZ0I7QUFDckMsTUFEcUMsaUJBQy9CLFFBRCtCLEVBQ1o7QUFBQSxvQ0FBTixJQUFNO0FBQU4sT0FBTTtBQUFBOztBQUN4QixxQ0FBa0IsUUFBbEIsbUJBQWlDLElBQWpDO0FBQ0E7QUFIb0MsQ0FBaEIsQ0FBZiIsImZpbGUiOiJsb2dnZXIuanMiLCJzb3VyY2VSb290IjoiRDovd29ya3NwYWNlL2JlaGF2aW9yMy1jaGllZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGFtcGl0IGZyb20gJ3N0YW1waXQnO1xuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcblxuZXhwb3J0IGNvbnN0IExvZ2dlciA9IHN0YW1waXQubWV0aG9kcyh7XG5cdGRlYnVnKGNhdGVnb3J5LCAuLi5hcmdzKSB7XG5cdFx0ZGVidWcoYGIzOmNoaWVmOiR7Y2F0ZWdvcnl9YCkoLi4uYXJncyk7XG5cdH0sXG59KTtcbiJdfQ==

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(322);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(323);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 323 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _set = __webpack_require__(325);

	var _set2 = _interopRequireDefault(_set);

	var _symbol = __webpack_require__(218);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _Model = __webpack_require__(289);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bNodes = (0, _symbol2.default)('list of all nodes in tree');

	exports.default = (0, _Model.Model)('Tree').compose((0, _Model.Initialize)(initializeTreeModel), (0, _Model.Property)('name'), (0, _Model.Property)('description'), (0, _Model.Property)('behaviorTree'), (0, _Model.Property)('rootNode'), (0, _Model.Methods)({ addNode: addNode }));


	function initializeTreeModel(_ref, _ref2) {
		var behaviorTree = _ref.behaviorTree;
		var createNode = _ref.createNode;
		var stamp = _ref2.stamp;

		this[bNodes] = new _set2.default();

		stamp.compose.methods.createNode = createNode;
	}

	function addNode(nodeName, nodeProperties) {
		var nodeModel = this.createNode(nodeName, nodeProperties);
		this[bNodes].add(nodeModel);
		return nodeModel;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbW9kZWxcXFRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBLElBQU0sU0FBUyxzQkFBTywyQkFBUCxDQUFmOztrQkFFZSxrQkFBTSxNQUFOLEVBQWMsT0FBZCxDQUNkLHVCQUFXLG1CQUFYLENBRGMsRUFFZCxxQkFBUyxNQUFULENBRmMsRUFHZCxxQkFBUyxhQUFULENBSGMsRUFJZCxxQkFBUyxjQUFULENBSmMsRUFLZCxxQkFBUyxVQUFULENBTGMsRUFNZCxvQkFBUSxFQUFFLGdCQUFGLEVBQVIsQ0FOYyxDOzs7QUFTZixTQUFTLG1CQUFULGNBQXNFO0FBQUEsS0FBdkMsWUFBdUMsUUFBdkMsWUFBdUM7QUFBQSxLQUF6QixVQUF5QixRQUF6QixVQUF5QjtBQUFBLEtBQVQsS0FBUyxTQUFULEtBQVM7O0FBQ3JFLE1BQUssTUFBTCxJQUFlLG1CQUFmOztBQUVBLE9BQU0sT0FBTixDQUFjLE9BQWQsQ0FBc0IsVUFBdEIsR0FBbUMsVUFBbkM7QUFDQTs7QUFFRCxTQUFTLE9BQVQsQ0FBaUIsUUFBakIsRUFBMkIsY0FBM0IsRUFBMkM7QUFDMUMsS0FBTSxZQUFZLEtBQUssVUFBTCxDQUFnQixRQUFoQixFQUEwQixjQUExQixDQUFsQjtBQUNBLE1BQUssTUFBTCxFQUFhLEdBQWIsQ0FBaUIsU0FBakI7QUFDQSxRQUFPLFNBQVA7QUFDQSIsImZpbGUiOiJUcmVlLmpzIiwic291cmNlUm9vdCI6IkQ6L3dvcmtzcGFjZS9iZWhhdmlvcjMtY2hpZWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbCwgUHJvcGVydHksIEluaXRpYWxpemUsIE1ldGhvZHMgfSBmcm9tICcuL01vZGVsJztcblxuY29uc3QgYk5vZGVzID0gU3ltYm9sKCdsaXN0IG9mIGFsbCBub2RlcyBpbiB0cmVlJyk7XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsKCdUcmVlJykuY29tcG9zZShcblx0SW5pdGlhbGl6ZShpbml0aWFsaXplVHJlZU1vZGVsKSxcblx0UHJvcGVydHkoJ25hbWUnKSxcblx0UHJvcGVydHkoJ2Rlc2NyaXB0aW9uJyksXG5cdFByb3BlcnR5KCdiZWhhdmlvclRyZWUnKSxcblx0UHJvcGVydHkoJ3Jvb3ROb2RlJyksXG5cdE1ldGhvZHMoeyBhZGROb2RlIH0pXG4pO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplVHJlZU1vZGVsKHsgYmVoYXZpb3JUcmVlLCBjcmVhdGVOb2RlIH0sIHsgc3RhbXAgfSkge1xuXHR0aGlzW2JOb2Rlc10gPSBuZXcgU2V0KCk7XG5cblx0c3RhbXAuY29tcG9zZS5tZXRob2RzLmNyZWF0ZU5vZGUgPSBjcmVhdGVOb2RlO1xufVxuXG5mdW5jdGlvbiBhZGROb2RlKG5vZGVOYW1lLCBub2RlUHJvcGVydGllcykge1xuXHRjb25zdCBub2RlTW9kZWwgPSB0aGlzLmNyZWF0ZU5vZGUobm9kZU5hbWUsIG5vZGVQcm9wZXJ0aWVzKTtcblx0dGhpc1tiTm9kZXNdLmFkZChub2RlTW9kZWwpO1xuXHRyZXR1cm4gbm9kZU1vZGVsO1xufVxuIl19

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(326), __esModule: true };

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(195);
	__webpack_require__(327);
	__webpack_require__(328);
	module.exports = __webpack_require__(159).Set;

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(200);

	// 23.2 Set Objects
	module.exports = __webpack_require__(210)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(157);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(216)('Set')});

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Subject = undefined;

	var _map = __webpack_require__(148);

	var _map2 = _interopRequireDefault(_map);

	var _symbol = __webpack_require__(218);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _stampit = __webpack_require__(1);

	var _stampit2 = _interopRequireDefault(_stampit);

	var _invariant = __webpack_require__(246);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _warning = __webpack_require__(319);

	var _warning2 = _interopRequireDefault(_warning);

	var _Persist = __webpack_require__(302);

	var _Uid = __webpack_require__(286);

	var _Subject = __webpack_require__(330);

	var _Subject2 = _interopRequireDefault(_Subject);

	var _Tree = __webpack_require__(324);

	var _Tree2 = _interopRequireDefault(_Tree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Subject = exports.Subject = (0, _stampit2.default)({
		initializers: initializeData,
		methods: {
			getSubject: getSubject, iterateSubjects: iterateSubjects,
			addSubject: addSubject, removeSubject: removeSubject
		}
	}).compose(_Uid.Uid, _Persist.Persist);

	var bSubjectMap = (0, _symbol2.default)('map of subjects');

	function initializeData() {
		this[bSubjectMap] = new _map2.default();
	}

	function addSubject(tree) {
		!_Tree2.default.isCreatorOf(tree) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The tree model expected for addSubject call for assigning tree to subject.') : (0, _invariant2.default)(false) : void 0;

		var subjectId = this.createUid();
		var subject = (0, _Subject2.default)({
			id: subjectId,
			treeId: tree.getId()
		});

		this.persist(_Persist.TYPE.SUBJECT, subject);
		this[bSubjectMap].set(subjectId, subject);
		return subject;
	}

	function getSubject(subjectId) {
		return this[bSubjectMap].get(subjectId) || null;
	}

	function removeSubject(subjectId) {
		process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(this[bSubjectMap].has(subjectId), 'Trying to remove subject with ID `%s` that no longer exists.', subjectId) : void 0;
		this.destroy(_Persist.TYPE.SUBJECT, subjectId);
		this[bSubjectMap].delete(subjectId);
	}

	function iterateSubjects() {
		return this[bSubjectMap].values();
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcU3ViamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNLDRCQUFVLHVCQUFRO0FBQzlCLGVBQWMsY0FEZ0I7QUFFOUIsVUFBUztBQUNSLHdCQURRLEVBQ0ksZ0NBREo7QUFFUix3QkFGUSxFQUVJO0FBRko7QUFGcUIsQ0FBUixFQU1wQixPQU5vQiw0QkFBaEI7O0FBUVAsSUFBTSxjQUFjLHNCQUFPLGlCQUFQLENBQXBCOztBQUVBLFNBQVMsY0FBVCxHQUEwQjtBQUN6QixNQUFLLFdBQUwsSUFBb0IsbUJBQXBCO0FBQ0E7O0FBRUQsU0FBUyxVQUFULENBQW9CLElBQXBCLEVBQTBCO0FBQ3pCLEVBQVUsZUFBVSxXQUFWLENBQXNCLElBQXRCLENBQVYsMkVBQ0MsNEVBREQ7O0FBSUEsS0FBTSxZQUFZLEtBQUssU0FBTCxFQUFsQjtBQUNBLEtBQU0sVUFBVSx1QkFBYTtBQUM1QixNQUFJLFNBRHdCO0FBRTVCLFVBQVEsS0FBSyxLQUFMO0FBRm9CLEVBQWIsQ0FBaEI7O0FBS0EsTUFBSyxPQUFMLENBQWEsY0FBWSxPQUF6QixFQUFrQyxPQUFsQztBQUNBLE1BQUssV0FBTCxFQUFrQixHQUFsQixDQUFzQixTQUF0QixFQUFpQyxPQUFqQztBQUNBLFFBQU8sT0FBUDtBQUNBOztBQUVELFNBQVMsVUFBVCxDQUFvQixTQUFwQixFQUErQjtBQUM5QixRQUFPLEtBQUssV0FBTCxFQUFrQixHQUFsQixDQUFzQixTQUF0QixLQUFvQyxJQUEzQztBQUNBOztBQUVELFNBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQztBQUNqQyxnRUFBUSxLQUFLLFdBQUwsRUFBa0IsR0FBbEIsQ0FBc0IsU0FBdEIsQ0FBUixFQUNDLDhEQURELEVBQ2lFLFNBRGpFO0FBR0EsTUFBSyxPQUFMLENBQWEsY0FBWSxPQUF6QixFQUFrQyxTQUFsQztBQUNBLE1BQUssV0FBTCxFQUFrQixNQUFsQixDQUF5QixTQUF6QjtBQUNBOztBQUVELFNBQVMsZUFBVCxHQUEyQjtBQUMxQixRQUFPLEtBQUssV0FBTCxFQUFrQixNQUFsQixFQUFQO0FBQ0EiLCJmaWxlIjoiU3ViamVjdC5qcyIsInNvdXJjZVJvb3QiOiJEOi93b3Jrc3BhY2UvYmVoYXZpb3IzLWNoaWVmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YW1waXQgZnJvbSAnc3RhbXBpdCc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcblxuaW1wb3J0IHsgUGVyc2lzdCwgVFlQRSBhcyBQZXJzaXN0VHlwZSB9IGZyb20gJy4vUGVyc2lzdCc7XG5pbXBvcnQgeyBVaWQgfSBmcm9tICcuL1VpZCc7XG5cbmltcG9ydCBTdWJqZWN0TW9kZWwgZnJvbSAnLi9tb2RlbC9TdWJqZWN0JztcbmltcG9ydCBUcmVlTW9kZWwgZnJvbSAnLi9tb2RlbC9UcmVlJztcblxuZXhwb3J0IGNvbnN0IFN1YmplY3QgPSBzdGFtcGl0KHtcblx0aW5pdGlhbGl6ZXJzOiBpbml0aWFsaXplRGF0YSxcblx0bWV0aG9kczoge1xuXHRcdGdldFN1YmplY3QsIGl0ZXJhdGVTdWJqZWN0cyxcblx0XHRhZGRTdWJqZWN0LCByZW1vdmVTdWJqZWN0LFxuXHR9LFxufSkuY29tcG9zZShVaWQsIFBlcnNpc3QpO1xuXG5jb25zdCBiU3ViamVjdE1hcCA9IFN5bWJvbCgnbWFwIG9mIHN1YmplY3RzJyk7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVEYXRhKCkge1xuXHR0aGlzW2JTdWJqZWN0TWFwXSA9IG5ldyBNYXAoKTtcbn1cblxuZnVuY3Rpb24gYWRkU3ViamVjdCh0cmVlKSB7XG5cdGludmFyaWFudChUcmVlTW9kZWwuaXNDcmVhdG9yT2YodHJlZSksXG5cdFx0J1RoZSB0cmVlIG1vZGVsIGV4cGVjdGVkIGZvciBhZGRTdWJqZWN0IGNhbGwgZm9yIGFzc2lnbmluZyB0cmVlIHRvIHN1YmplY3QuJ1xuXHQpO1xuXG5cdGNvbnN0IHN1YmplY3RJZCA9IHRoaXMuY3JlYXRlVWlkKCk7XG5cdGNvbnN0IHN1YmplY3QgPSBTdWJqZWN0TW9kZWwoe1xuXHRcdGlkOiBzdWJqZWN0SWQsXG5cdFx0dHJlZUlkOiB0cmVlLmdldElkKCksXG5cdH0pO1xuXG5cdHRoaXMucGVyc2lzdChQZXJzaXN0VHlwZS5TVUJKRUNULCBzdWJqZWN0KTtcblx0dGhpc1tiU3ViamVjdE1hcF0uc2V0KHN1YmplY3RJZCwgc3ViamVjdCk7XG5cdHJldHVybiBzdWJqZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRTdWJqZWN0KHN1YmplY3RJZCkge1xuXHRyZXR1cm4gdGhpc1tiU3ViamVjdE1hcF0uZ2V0KHN1YmplY3RJZCkgfHwgbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3ViamVjdChzdWJqZWN0SWQpIHtcblx0d2FybmluZyh0aGlzW2JTdWJqZWN0TWFwXS5oYXMoc3ViamVjdElkKSxcblx0XHQnVHJ5aW5nIHRvIHJlbW92ZSBzdWJqZWN0IHdpdGggSUQgYCVzYCB0aGF0IG5vIGxvbmdlciBleGlzdHMuJywgc3ViamVjdElkXG5cdCk7XG5cdHRoaXMuZGVzdHJveShQZXJzaXN0VHlwZS5TVUJKRUNULCBzdWJqZWN0SWQpO1xuXHR0aGlzW2JTdWJqZWN0TWFwXS5kZWxldGUoc3ViamVjdElkKTtcbn1cblxuZnVuY3Rpb24gaXRlcmF0ZVN1YmplY3RzKCkge1xuXHRyZXR1cm4gdGhpc1tiU3ViamVjdE1hcF0udmFsdWVzKCk7XG59XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(233)))

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Model = __webpack_require__(289);

	exports.default = (0, _Model.Model)('Subject').compose((0, _Model.Property)('treeId'));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcbW9kZWxcXFN1YmplY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O2tCQUVlLGtCQUFNLFNBQU4sRUFBaUIsT0FBakIsQ0FDZCxxQkFBUyxRQUFULENBRGMsQyIsImZpbGUiOiJTdWJqZWN0LmpzIiwic291cmNlUm9vdCI6IkQ6L3dvcmtzcGFjZS9iZWhhdmlvcjMtY2hpZWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbCwgUHJvcGVydHkgfSBmcm9tICcuL01vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgTW9kZWwoJ1N1YmplY3QnKS5jb21wb3NlKFxuXHRQcm9wZXJ0eSgndHJlZUlkJylcbik7XG4iXX0=

/***/ }
/******/ ])
});
;