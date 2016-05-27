'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var stampit = _interopDefault(require('stampit'));
var warning = _interopDefault(require('warning'));
var invariant = _interopDefault(require('invariant'));
var uid = _interopDefault(require('uid'));
var _debug = _interopDefault(require('debug'));
var events = require('events');

var babelHelpers = {};

babelHelpers.extends = Object.assign || function (target) {
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

babelHelpers;


var __commonjs_global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports, __commonjs_global), module.exports; }

var babelpolyfill = __commonjs(function (module) {
/* eslint-disable */

var nodePolyfills = {
	// '<= 0.x': [
	// 	'babel-polyfill',
	// ],
	'<= 5.x': ['core-js/fn/reflect/apply', 'core-js/fn/reflect/construct', 'core-js/fn/reflect/delete-property'],
	'<= 6.x': ['core-js/fn/object/values']
};

// var semver = require('semver');

function loadPolyfillForVersion(version) {
	if (version === undefined) {
		version = '0';
	}
	for (var nodeVersion in nodePolyfills) {
		// if (semver.satisfies(version, nodeVersion)) {
		nodePolyfills[nodeVersion].forEach(require);
		// }
	}
}

module.exports = loadPolyfillForVersion;
});

var isObjectLike = __commonjs(function (module) {
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
});

var require$$0$1 = (isObjectLike && typeof isObjectLike === 'object' && 'default' in isObjectLike ? isObjectLike['default'] : isObjectLike);

var isArray = __commonjs(function (module) {
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
});

var require$$2 = (isArray && typeof isArray === 'object' && 'default' in isArray ? isArray['default'] : isArray);

var isString = __commonjs(function (module) {
var isArray = require$$2,
    isObjectLike = require$$0$1;

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
});

var require$$0 = (isString && typeof isString === 'object' && 'default' in isString ? isString['default'] : isString);

var isObject = __commonjs(function (module) {
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
});

var _isObject = (isObject && typeof isObject === 'object' && 'default' in isObject ? isObject['default'] : isObject);

var isFunction = __commonjs(function (module) {
var isObject = _isObject;

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
});

var _isFunction = (isFunction && typeof isFunction === 'object' && 'default' in isFunction ? isFunction['default'] : isFunction);

var _isPrototype = __commonjs(function (module) {
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
});

var require$$0$3 = (_isPrototype && typeof _isPrototype === 'object' && 'default' in _isPrototype ? _isPrototype['default'] : _isPrototype);

var _isIndex = __commonjs(function (module) {
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
});

var require$$1 = (_isIndex && typeof _isIndex === 'object' && 'default' in _isIndex ? _isIndex['default'] : _isIndex);

var isLength = __commonjs(function (module) {
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
});

var require$$1$2 = (isLength && typeof isLength === 'object' && 'default' in isLength ? isLength['default'] : isLength);

var _baseProperty = __commonjs(function (module) {
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
});

var require$$0$4 = (_baseProperty && typeof _baseProperty === 'object' && 'default' in _baseProperty ? _baseProperty['default'] : _baseProperty);

var _getLength = __commonjs(function (module) {
var baseProperty = require$$0$4;

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
});

var require$$2$1 = (_getLength && typeof _getLength === 'object' && 'default' in _getLength ? _getLength['default'] : _getLength);

var isArrayLike = __commonjs(function (module) {
var getLength = require$$2$1,
    isFunction = _isFunction,
    isLength = require$$1$2;

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
});

var require$$1$1 = (isArrayLike && typeof isArrayLike === 'object' && 'default' in isArrayLike ? isArrayLike['default'] : isArrayLike);

var isArrayLikeObject = __commonjs(function (module) {
var isArrayLike = require$$1$1,
    isObjectLike = require$$0$1;

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
});

var require$$0$5 = (isArrayLikeObject && typeof isArrayLikeObject === 'object' && 'default' in isArrayLikeObject ? isArrayLikeObject['default'] : isArrayLikeObject);

var isArguments = __commonjs(function (module) {
var isArrayLikeObject = require$$0$5;

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
});

var require$$3$1 = (isArguments && typeof isArguments === 'object' && 'default' in isArguments ? isArguments['default'] : isArguments);

var _baseTimes = __commonjs(function (module) {
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
});

var require$$4 = (_baseTimes && typeof _baseTimes === 'object' && 'default' in _baseTimes ? _baseTimes['default'] : _baseTimes);

var _indexKeys = __commonjs(function (module) {
var baseTimes = require$$4,
    isArguments = require$$3$1,
    isArray = require$$2,
    isLength = require$$1$2,
    isString = require$$0;

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
});

var require$$3 = (_indexKeys && typeof _indexKeys === 'object' && 'default' in _indexKeys ? _indexKeys['default'] : _indexKeys);

var _baseKeys = __commonjs(function (module) {
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
});

var require$$4$1 = (_baseKeys && typeof _baseKeys === 'object' && 'default' in _baseKeys ? _baseKeys['default'] : _baseKeys);

var _getPrototype = __commonjs(function (module) {
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
});

var require$$0$6 = (_getPrototype && typeof _getPrototype === 'object' && 'default' in _getPrototype ? _getPrototype['default'] : _getPrototype);

var _baseHas = __commonjs(function (module) {
var getPrototype = require$$0$6;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
  // that are composed entirely of index properties, return `false` for
  // `hasOwnProperty` checks of them.
  return object != null &&
    (hasOwnProperty.call(object, key) ||
      (typeof object == 'object' && key in object && getPrototype(object) === null));
}

module.exports = baseHas;
});

var require$$5 = (_baseHas && typeof _baseHas === 'object' && 'default' in _baseHas ? _baseHas['default'] : _baseHas);

var keys = __commonjs(function (module) {
var baseHas = require$$5,
    baseKeys = require$$4$1,
    indexKeys = require$$3,
    isArrayLike = require$$1$1,
    isIndex = require$$1,
    isPrototype = require$$0$3;

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
});

var require$$0$2 = (keys && typeof keys === 'object' && 'default' in keys ? keys['default'] : keys);

var _arrayMap = __commonjs(function (module) {
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;
});

var require$$0$7 = (_arrayMap && typeof _arrayMap === 'object' && 'default' in _arrayMap ? _arrayMap['default'] : _arrayMap);

var _baseValues = __commonjs(function (module) {
var arrayMap = require$$0$7;

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;
});

var require$$1$3 = (_baseValues && typeof _baseValues === 'object' && 'default' in _baseValues ? _baseValues['default'] : _baseValues);

var values = __commonjs(function (module) {
var baseValues = require$$1$3,
    keys = require$$0$2;

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

module.exports = values;
});

var _values = (values && typeof values === 'object' && 'default' in values ? values['default'] : values);

var SUCCESS = 1;
var FAILURE = 2;
var RUNNING = 3;
var ERROR = 4;
var COMPOSITE = 'composite';
var DECORATOR = 'decorator';
var ACTION = 'action';

/**
* This function is used to create unique IDs for trees and nodes.
*
* (consult http://www.ietf.org/rfc/rfc4122.txt).
*
* @class createUUID
* @constructor
* @return {String} A unique ID.
**/

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
    cls.prototype = Object.create(baseClass.prototype);
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

var BaseNode = Class(null, {

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
    this.id = createUUID();
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
    if (status !== RUNNING) {
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

var Action = Class(BaseNode, {

  /**
   * Node category. Default to `ACTION`.
   * @property {String} category
   * @readonly
   **/
  category: ACTION,

  /**
   * Initialization method.
   * @method initialize
   * @constructor
   **/
  initialize: function initialize(params) {
    BaseNode.prototype.initialize.call(this);
  }
});

/**
 * This action node returns `ERROR` always.
 *
 * @module b3
 * @class Error
 * @extends Action
 **/
var Error = Class(Action, {

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
    return ERROR;
  }
});

/**
 * This action node returns `FAILURE` always.
 *
 * @module b3
 * @class Failer
 * @extends Action
 **/
var Failer = Class(Action, {

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
    return FAILURE;
  }
});

/**
 * This action node returns RUNNING always.
 *
 * @module b3
 * @class Runner
 * @extends Action
 **/
var Runner = Class(Action, {

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
    return RUNNING;
  }
});

/**
 * This action node returns `SUCCESS` always.
 *
 * @module b3
 * @class Succeeder
 * @extends Action
 **/

var Succeeder = Class(Action, {

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
    return SUCCESS;
  }
});

/**
 * Wait a few seconds.
 *
 * @module b3
 * @class Wait
 * @extends Action
 **/

var Wait = Class(Action, {

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

    Action.prototype.initialize.call(this);
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
      return SUCCESS;
    }

    return RUNNING;
  }
});

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

var Composite = Class(BaseNode, {

  /**
   * Node category. Default to `b3.COMPOSITE`.
   *
   * @property category
   * @type {String}
   * @readonly
   **/
  category: COMPOSITE,

  /**
   * Initialization method.
   *
   * @method initialize
   * @constructor
   **/
  initialize: function initialize(params) {
    BaseNode.prototype.initialize.call(this);
    this.children = (params.children || []).slice(0);
  }
});

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

var MemPriority = Class(Composite, {

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

      if (status !== FAILURE) {
        if (status === RUNNING) {
          _tick.blackboard.set('runningChild', i, _tick.tree.id, this.id);
        }

        return status;
      }
    }

    return FAILURE;
  }
});

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

var MemSequence = Class(Composite, {

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

      if (status !== SUCCESS) {
        if (status === RUNNING) {
          _tick.blackboard.set('runningChild', i, _tick.tree.id, this.id);
        }
        return status;
      }
    }

    return SUCCESS;
  }
});

/**
 * Priority ticks its children sequentially until one of them returns
 * `SUCCESS`, `RUNNING` or `ERROR`. If all children return the failure state,
 * the priority also returns `FAILURE`.
 *
 * @module b3
 * @class Priority
 * @extends Composite
 **/

var Priority = Class(Composite, {

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

      if (status !== FAILURE) {
        return status;
      }
    }

    return FAILURE;
  }
});

/**
 * The Sequence node ticks its children sequentially until one of them
 * returns `FAILURE`, `RUNNING` or `ERROR`. If all children return the
 * success state, the sequence also returns `SUCCESS`.
 *
 * @module b3
 * @class Sequence
 * @extends Composite
 **/

var Sequence = Class(Composite, {

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

      if (status !== SUCCESS) {
        return status;
      }
    }

    return SUCCESS;
  }
});

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

var Decorator = Class(BaseNode, {

  /**
   * Node category. Default to DECORATOR.
   * @property {String} category
   * @readonly
   **/
  category: DECORATOR,

  /**
   * Initialization method.
   * @method initialize
   * @constructor
   **/
  initialize: function initialize(params) {
    BaseNode.prototype.initialize.call(this);
    this.child = params.child || null;
  }
});

/**
 * The Inverter decorator inverts the result of the child, returning `SUCCESS`
 * for `FAILURE` and `FAILURE` for `SUCCESS`.
 *
 * @module b3
 * @class Inverter
 * @extends Decorator
 **/

var Inverter = Class(Decorator, {

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
      return ERROR;
    }

    var status = this.child._execute(_tick);

    if (status == SUCCESS) {
      status = FAILURE;
    } else if (status == FAILURE) {
      status = SUCCESS;
    }

    return status;
  }
});

/**
 * This decorator limit the number of times its child can be called. After a
 * certain number of times, the Limiter decorator returns `FAILURE` without 
 * executing the child.
 *
 * @module b3
 * @class Limiter
 * @extends Decorator
 **/

var Limiter = Class(Decorator, {

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
    Decorator.prototype.initialize.call(this, params);

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
      return ERROR;
    }

    var i = _tick.blackboard.get('i', _tick.tree.id, this.id);

    if (i < this.maxLoop) {
      var status = this.child._execute(_tick);

      if (status == SUCCESS || status == FAILURE) _tick.blackboard.set('i', i + 1, _tick.tree.id, this.id);

      return status;
    }

    return FAILURE;
  }
});

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

var MaxTime = Class(Decorator, {

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
    Decorator.prototype.initialize.call(this, params);

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
      return ERROR;
    }

    var currTime = new Date().getTime();
    var startTime = _tick.blackboard.get('startTime', _tick.tree.id, this.id);

    var status = this.child._execute(_tick);
    if (currTime - startTime > this.maxTime) {
      return FAILURE;
    }

    return status;
  }
});

/**
 * RepeatUntilFailure is a decorator that repeats the tick signal until the 
 * node child returns `FAILURE`, `RUNNING` or `ERROR`. Optionally, a maximum 
 * number of repetitions can be defined.
 *
 * @module b3
 * @class RepeatUntilFailure
 * @extends Decorator
 **/

var RepeatUntilFailure = Class(Decorator, {

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
    Decorator.prototype.initialize.call(this, params);
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
      return ERROR;
    }

    var i = _tick.blackboard.get('i', _tick.tree.id, this.id);
    var status = ERROR;

    while (this.maxLoop < 0 || i < this.maxLoop) {
      status = this.child._execute(_tick);

      if (status == SUCCESS) {
        i++;
      } else {
        break;
      }
    }

    i = _tick.blackboard.set('i', i, _tick.tree.id, this.id);
    return status;
  }
});

/**
 * RepeatUntilSuccess is a decorator that repeats the tick signal until the 
 * node child returns `SUCCESS`, `RUNNING` or `ERROR`. Optionally, a maximum 
 * number of repetitions can be defined.
 *
 * @module b3
 * @class RepeatUntilSuccess
 * @extends Decorator
 **/

var RepeatUntilSuccess = Class(Decorator, {

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
    Decorator.prototype.initialize.call(this, params);
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
      return ERROR;
    }

    var i = _tick.blackboard.get('i', _tick.tree.id, this.id);
    var status = ERROR;

    while (this.maxLoop < 0 || i < this.maxLoop) {
      status = this.child._execute(_tick);

      if (status == FAILURE) {
        i++;
      } else {
        break;
      }
    }

    i = _tick.blackboard.set('i', i, _tick.tree.id, this.id);
    return status;
  }
});

/**
 * Repeater is a decorator that repeats the tick signal until the child node 
 * return `RUNNING` or `ERROR`. Optionally, a maximum number of repetitions 
 * can be defined.
 *
 * @module b3
 * @class Repeater
 * @extends Decorator
 **/

var Repeater = Class(Decorator, {

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
    Decorator.prototype.initialize.call(this, params);
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
      return ERROR;
    }

    var i = _tick.blackboard.get('i', _tick.tree.id, this.id);
    var status = SUCCESS;

    while (this.maxLoop < 0 || i < this.maxLoop) {
      status = this.child._execute(_tick);

      if (status == SUCCESS || status == FAILURE) {
        i++;
      } else {
        break;
      }
    }

    i = _tick.blackboard.set('i', i, _tick.tree.id, this.id);
    return status;
  }
});



var Decorators = Object.freeze({
	Inverter: Inverter,
	Limiter: Limiter,
	MaxTime: MaxTime,
	RepeatUntilFailure: RepeatUntilFailure,
	RepeatUntilSuccess: RepeatUntilSuccess,
	Repeater: Repeater
});



var Composites = Object.freeze({
	MemPriority: MemPriority,
	MemSequence: MemSequence,
	Priority: Priority,
	Sequence: Sequence
});



var Actions = Object.freeze({
	Error: Error,
	Failer: Failer,
	Runner: Runner,
	Succeeder: Succeeder,
	Wait: Wait
});

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

var Tick = Class(null, {

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

var BehaviorTree = Class(null, {

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
    this.id = createUUID();
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

      if (node.category === COMPOSITE && spec.children) {
        for (var i = 0; i < spec.children.length; i++) {
          var cid = spec.children[i];
          node.children.push(nodes[cid]);
        }
      } else if (node.category === DECORATOR && spec.child) {
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
      if (node.category === COMPOSITE && node.children) {
        var children = [];
        for (var i = node.children.length - 1; i >= 0; i--) {
          children.push(node.children[i].id);
          stack.push(node.children[i]);
        }
        spec.children = children;
      } else if (node.category === DECORATOR && node.child) {
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
    var tick = new Tick();
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

var defaultUidLength = 12;

var Uid = stampit.methods({
	createUid: function createUid() {
		var length = arguments.length <= 0 || arguments[0] === undefined ? defaultUidLength : arguments[0];

		return uid(length);
	}
});

var Private = stampit().init(function (options, _ref) {
	var instance = _ref.instance;

	instance.map = new WeakMap();
}).methods({
	init: function init(owner) {
		var ownerMap = new Map();
		this.map.set(owner, ownerMap);
		return ownerMap;
	},
	for: function _for(owner) {
		return this.map.get(owner);
	},
	get: function get(owner, key) {
		return this.for(owner).get(key);
	},
	set: function set(owner, key, value) {
		this.for(owner).set(key, value);
	}
});

var Behavior = stampit({
	initializers: [initializeNodeMap],
	methods: {
		registerBehaviorNode: registerBehaviorNode, createBehaviorNode: createBehaviorNode, listBehaviorNodes: listBehaviorNodes,
		createBehaviorTree: createBehaviorTree
	}
}).compose(Uid);

var privates$1 = Private.create();

function initializeNodeMap() {
	privates$1.init(this);
	privates$1.set(this, 'nodes', new Map());

	var standardNodes = _values(Object.assign({}, Decorators, Composites, Actions));
	standardNodes.forEach(this.registerBehaviorNode, this);
}

function registerBehaviorNode(nodeClass) {
	invariant(_isFunction(nodeClass), 'The registerNode() method has to be called with constructor function of node class.');

	invariant(nodeClass.prototype && _isFunction(nodeClass.prototype.tick), 'Node class passed to registerNode() is missing the mandatory tick method on its prototype.' + // eslint-disable-line max-len
	'Either use B3.Class(B3.BaseNode, {}) or define your own class with such method.');

	var nodeName = nodeClass.prototype.name;

	invariant(require$$0(nodeName) && nodeName.length, 'Passed node class %s to registerNode() call needs to have a unique string name specified.', nodeClass // eslint-disable-line max-len
	);

	var nodes = privates$1.get(this, 'nodes');

	invariant(!nodes.has(nodeName), 'The name of node has to be unique. There is already node `%s` registered.', nodeName);

	nodes.set(nodeName, nodeClass);
}

function createBehaviorNode(nodeName) {
	var properties = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	invariant(require$$0(nodeName), 'Called createBehaviorNode() without name of node to create.' + 'Name is expected to be a non-empty string.');

	var nodeClass = privates$1.get(this, 'nodes').get(nodeName);
	if (nodeClass === undefined) {
		return null;
	}

	var behaviorNode = Reflect.construct(nodeClass, []);
	behaviorNode.id = nodeName + '-' + this.createUid();

	if (_isObject(properties) && _isObject(behaviorNode.properties)) {
		Object.assign(behaviorNode.properties, properties);
	}

	return behaviorNode;
}

function listBehaviorNodes() {
	return Array.from(privates$1.get(this, 'nodes').values()).map(function (behaviorNode) {
		return {
			name: behaviorNode.prototype.name,
			category: behaviorNode.prototype.category,
			parameters: behaviorNode.prototype.parameters
		};
	});
}

function createBehaviorTree(id) {
	var behaviorTree = new BehaviorTree();
	if (require$$0(id) && id.length) {
		behaviorTree.id = id;
	}
	return behaviorTree;
}

var Logger = stampit.methods({
	debug: function debug(category) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		_debug('b3:chief:' + category).apply(undefined, args);
	}
});

var Persist = stampit({
	initializers: initializer,
	methods: { persist: persist, retrieve: retrieve, destroy: destroy }
}).compose(Logger);

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
	if (_isObject(adapter)) {
		return adapter;
	}
	// warning(false, 'Valid adapter object was not found in first argument. No data will be persisted.'); // eslint-disable-line max-len
	return {};
}

var PersistType = {
	TREE: 'TREE',
	SUBJECT: 'SUBJECT'
};

var EventEmittable = stampit({
	initializers: function initEventEmitter() {
		Reflect.apply(events.EventEmitter, this, []);
	},
	methods: ['emit', 'on', 'once', 'removeListener'].reduce(function (methods, methodName) {
		methods[methodName] = events.EventEmitter.prototype[methodName];
		return methods;
	}, {})
});

var isSymbol = __commonjs(function (module) {
var isObjectLike = require$$0$1;

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
});

var require$$0$11 = (isSymbol && typeof isSymbol === 'object' && 'default' in isSymbol ? isSymbol['default'] : isSymbol);

var _checkGlobal = __commonjs(function (module) {
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
});

var require$$0$13 = (_checkGlobal && typeof _checkGlobal === 'object' && 'default' in _checkGlobal ? _checkGlobal['default'] : _checkGlobal);

var _root = __commonjs(function (module, exports, global) {
var checkGlobal = require$$0$13;

/** Detect free variable `global` from Node.js. */
var freeGlobal = checkGlobal(typeof global == 'object' && global);

/** Detect free variable `self`. */
var freeSelf = checkGlobal(typeof self == 'object' && self);

/** Detect `this` as the global object. */
var thisGlobal = checkGlobal(typeof __commonjs_global == 'object' && __commonjs_global);

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || thisGlobal || Function('return this')();

module.exports = root;
});

var require$$0$12 = (_root && typeof _root === 'object' && 'default' in _root ? _root['default'] : _root);

var _Symbol = __commonjs(function (module) {
var root = require$$0$12;

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;
});

var require$$1$4 = (_Symbol && typeof _Symbol === 'object' && 'default' in _Symbol ? _Symbol['default'] : _Symbol);

var _baseToString = __commonjs(function (module) {
var Symbol = require$$1$4,
    isSymbol = require$$0$11;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

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

module.exports = baseToString;
});

var require$$0$10 = (_baseToString && typeof _baseToString === 'object' && 'default' in _baseToString ? _baseToString['default'] : _baseToString);

var toString$1 = __commonjs(function (module) {
var baseToString = require$$0$10;

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
});

var require$$0$9 = (toString$1 && typeof toString$1 === 'object' && 'default' in toString$1 ? toString$1['default'] : toString$1);

var _stringToArray = __commonjs(function (module) {
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

module.exports = stringToArray;
});

var require$$1$5 = (_stringToArray && typeof _stringToArray === 'object' && 'default' in _stringToArray ? _stringToArray['default'] : _stringToArray);

var _reHasComplexSymbol = __commonjs(function (module) {
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

module.exports = reHasComplexSymbol;
});

var require$$2$2 = (_reHasComplexSymbol && typeof _reHasComplexSymbol === 'object' && 'default' in _reHasComplexSymbol ? _reHasComplexSymbol['default'] : _reHasComplexSymbol);

var _baseSlice = __commonjs(function (module) {
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
});

var require$$0$14 = (_baseSlice && typeof _baseSlice === 'object' && 'default' in _baseSlice ? _baseSlice['default'] : _baseSlice);

var _castSlice = __commonjs(function (module) {
var baseSlice = require$$0$14;

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

module.exports = castSlice;
});

var require$$3$2 = (_castSlice && typeof _castSlice === 'object' && 'default' in _castSlice ? _castSlice['default'] : _castSlice);

var _createCaseFirst = __commonjs(function (module) {
var castSlice = require$$3$2,
    reHasComplexSymbol = require$$2$2,
    stringToArray = require$$1$5,
    toString = require$$0$9;

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
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

module.exports = createCaseFirst;
});

var require$$0$8 = (_createCaseFirst && typeof _createCaseFirst === 'object' && 'default' in _createCaseFirst ? _createCaseFirst['default'] : _createCaseFirst);

var upperFirst = __commonjs(function (module) {
var createCaseFirst = require$$0$8;

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
});

var _upperFirst = (upperFirst && typeof upperFirst === 'object' && 'default' in upperFirst ? upperFirst['default'] : upperFirst);

var ModelPrivate = Private.methods({
	getProperty: function getProperty(owner, propertyName) {
		return this.get(owner, 'props')[propertyName];
	},
	setProperty: function setProperty(owner, propertyName, propertyValue) {
		var props = this.get(owner, 'props');
		props[propertyName] = propertyValue;
	}
});

function Model(modelName) {
	var privates = arguments.length <= 1 || arguments[1] === undefined ? ModelPrivate.create() : arguments[1];


	function initializeModelPrivateArea() {
		privates.init(this);
		privates.set(this, 'props', {});
	}

	var getter = setupPropertyAccessor(privates, true);
	var property = setupPropertyAccessor(privates);

	function valueOf() {
		return Object.assign({}, privates.get(this, 'props'));
	}

	var properties = {
		get: function get() {
			return Object.keys(privates.get(this, 'props'));
		}
	};

	function toString() {
		return 'model of ' + modelName;
	}

	function getModelName() {
		return modelName;
	}

	return stampit.compose(EventEmittable, {
		initializers: [initializeModelPrivateArea],
		methods: { getModelName: getModelName, toString: toString, valueOf: valueOf },
		staticProperties: { getter: getter, property: property },
		staticPropertyDescriptors: { properties: properties }
	});
}

function setupPropertyAccessor(privates) {
	var readonly = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	return function accessProperty(propertyName) {
		var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


		var methodSuffix = _upperFirst(propertyName);
		var methods = {};

		methods['get' + methodSuffix] = function getPropertyValue() {
			return privates.getProperty(this, propertyName);
		};

		function setPropertyValue(newValue) {
			var oldValue = privates.getProperty(this, propertyName);
			privates.setProperty(this, propertyName, newValue);
			this.emit('change', propertyName, newValue, oldValue);
		}

		if (readonly !== true) {
			methods['set' + methodSuffix] = setPropertyValue;
		}

		function initializePropertyValue(data) {
			var initValue = defaultValue;
			if (data && data.hasOwnProperty(propertyName)) {
				initValue = data[propertyName];
			} else if (_isFunction(defaultValue)) {
				var obtainedValue = Reflect.apply(defaultValue, this, [data]);
				initValue = obtainedValue;
			}
			privates.setProperty(this, propertyName, initValue);
		}

		return this.compose({
			deepConfiguration: { properties: [propertyName] },
			methods: methods, initializers: [initializePropertyValue]
		});
	};
}

var privates$3 = ModelPrivate.create();

var NodeModel = Model('Node', privates$3).getter('id').getter('treeId').getter('name').getter('title').getter('description').getter('children').getter('parent').getter('behaviorNode').methods({
	addChild: addChild, removeChild: removeChild, getChildren: getChildren,
	ensureChildren: ensureChildren, getProperties: getProperties
}).init(initializeNodeModel);

function initializeNodeModel(_ref) {
	var behaviorNode = _ref.behaviorNode;

	privates$3.setProperty(this, 'behaviorNode', behaviorNode);
}

function getProperties() {
	return babelHelpers.extends({}, this.getBehaviorNode().properties);
}

function getChildren() {
	var children = privates$3.getProperty(this, 'children');
	if (children === null) {
		return [];
	}
	return Array.from(children);
}

function addChild(childNode) {
	var children = this.ensureChildren();
	children.add(childNode);
	privates$3.setProperty(childNode, 'parent', this);
}

function removeChild(childNode) {
	var children = privates$3.getProperty(this, 'children');
	if (children !== null) {
		children.delete(childNode);
		privates$3.setProperty(childNode, 'parent', null);
	}
}

function ensureChildren() {
	var children = privates$3.getProperty(this, 'children');
	if (children === null) {
		children = new Set();
		privates$3.setProperty(this, 'children', children);
	}
	return children;
}

var privates$2 = ModelPrivate.create();

var TreeModel = Model('Tree', privates$2).getter('id').getter('rootNode').getter('behaviorTree').property('name', 'New tree').property('description').methods({
	addNode: addNode, removeNode: removeNode, getNode: getNode, listNodes: listNodes,
	changeRootNode: changeRootNode, toString: toString
}).init(initializeTreeModel, initializeRootNode);

function initializeTreeModel(_ref) {
	var createNode = _ref.createNode;

	privates$2.set(this, 'createNode', createNode);
	privates$2.set(this, 'nodes', new Set());
}

function initializeRootNode(_ref2) {
	var rootNodeName = _ref2.rootNodeName;
	var rootNodeProperties = _ref2.rootNodeProperties;

	if (rootNodeName) {
		this.changeRootNode(rootNodeName, rootNodeProperties);
	}
}

function addNode(nodeName, nodeProperties) {
	var createNode = privates$2.get(this, 'createNode');
	var behaviorNode = createNode(nodeName, nodeProperties);
	var nodeModel = buildNodeModel(behaviorNode, this.getId());
	privates$2.get(this, 'nodes').add(nodeModel);
	return nodeModel;
}

function removeNode(nodeModel) {
	privates$2.get(this, 'nodes').delete(nodeModel);
	var parent = nodeModel.getParent();
	if (parent !== null) {
		parent.removeChild(nodeModel);
	}
}

function getNode(nodeId) {
	var nodes = privates$2.get(this, 'nodes');
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var node = _step.value;

			if (node.getId() === nodeId) {
				return node;
			}
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

	return null;
}

function changeRootNode(nodeName, nodeProperties) {
	var nodes = privates$2.get(this, 'nodes');
	var createNode = privates$2.get(this, 'createNode');

	var currentRootNode = this.getRootNode();
	nodes.delete(currentRootNode);

	var behaviorRootNode = createNode(nodeName, nodeProperties);
	this.getBehaviorTree().root = behaviorRootNode;

	var newRootNode = buildNodeModel(behaviorRootNode, this.getId());
	nodes.add(newRootNode);
	privates$2.setProperty(this, 'rootNode', newRootNode);

	return newRootNode;
}

function listNodes() {
	return Array.from(privates$2.get(this, 'nodes').values());
}

function buildNodeModel(behaviorNode, treeId) {
	return NodeModel.create({
		behaviorNode: behaviorNode, treeId: treeId,
		id: behaviorNode.id,
		name: behaviorNode.name,
		title: behaviorNode.title,
		description: behaviorNode.description
	});
}

function toString() {
	return (this.getName() || 'Tree') + ' [' + this.getId() + ']';
}

var TreeList = stampit({
	initializers: [initializeTreeMap],
	methods: {
		createTree: createTree, removeTree: removeTree,
		getTree: getTree, listTrees: listTrees
	}
}).compose(Behavior, Uid, EventEmittable, Persist);

var privates = Private.create();

function initializeTreeMap() {
	var _this = this;

	privates.init(this);
	privates.set(this, 'trees', new Map());
	privates.set(this, 'createNode', function () {
		return _this.createBehaviorNode.apply(_this, arguments);
	});
}

function createTree(rootNodeName, rootNodeProperties) {

	var treeId = 'tree-' + rootNodeName + '-' + this.createUid();
	var behaviorTree = this.createBehaviorTree(treeId);

	var tree = TreeModel({
		id: treeId, behaviorTree: behaviorTree,
		rootNodeName: rootNodeName, rootNodeProperties: rootNodeProperties,
		createNode: privates.get(this, 'createNode')
	});

	privates.get(this, 'trees').set(tree.getId(), tree);
	this.persist(PersistType.TREE, tree);
	this.emit('tree.create', tree);
	return tree;
}

function getTree(treeId) {
	return privates.get(this, 'trees').get(treeId) || null;
}

function removeTree(treeId) {
	var tree = privates.get(this, 'trees').get(treeId);
	warning(tree, 'Trying to remove tree with ID `%s` that no longer exists.', treeId);

	this.destroy(PersistType.TREE, treeId);
	privates.get(this, 'trees').delete(treeId);

	if (tree) {
		this.emit('tree.remove', tree);
		return tree;
	}

	return null;
}

function listTrees() {
	return Array.from(privates.get(this, 'trees').values());
}

var SubjectModel = Model('Subject').getter('id').property('treeId');

var SubjectList = stampit({
	initializers: initializeData,
	methods: {
		addSubject: addSubject, removeSubject: removeSubject,
		getSubject: getSubject, listSubjects: listSubjects
	}
}).compose(Uid, EventEmittable, Persist);

var privates$4 = Private.create();

function initializeData() {
	privates$4.init(this);
	privates$4.set(this, 'subjects', new Map());
}

function addSubject(tree) {
	invariant(tree, 'The tree model expected for addSubject call for assigning tree to subject.');

	var subjectId = this.createUid();
	var subject = SubjectModel({
		id: subjectId,
		treeId: tree.getId()
	});

	this.persist(PersistType.SUBJECT, subject);
	privates$4.get(this, 'subjects').set(subjectId, subject);
	this.emit('subject.add', subject);
	return subject;
}

function getSubject(subjectId) {
	return privates$4.get(this, 'subjects').get(subjectId) || null;
}

function removeSubject(subjectId) {
	var subject = privates$4.get(this, 'subjects').get(subjectId);
	warning(subject, 'Trying to remove subject with ID `%s` that no longer exists.', subjectId);

	this.destroy(PersistType.SUBJECT, subjectId);
	privates$4.get(this, 'subjects').delete(subjectId);
	this.emit('subject.remove', subject);
	return subject;
}

function listSubjects() {
	var tree = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	var subjects = privates$4.get(this, 'subjects');
	if (tree === null) {
		return Array.from(subjects.values());
	}
	var treeId = tree.getId();
	var result = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = subjects.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var subject = _step.value;

			if (subject.getTreeId() === treeId) {
				result.push(subject);
			}
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

	return result;
}

var Chief = stampit.compose(TreeList, SubjectList);

module.exports = Chief;
//# sourceMappingURL=main.browser.js.map