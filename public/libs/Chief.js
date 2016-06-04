'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var stampit = _interopDefault(require('stampit'));
var warning = _interopDefault(require('warning'));
var lodash = require('lodash');
var invariant = _interopDefault(require('invariant'));
var uid = _interopDefault(require('uid'));
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

var _core = __commonjs(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
});

var require$$0$1 = (_core && typeof _core === 'object' && 'default' in _core ? _core['default'] : _core);

var _global = __commonjs(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
});

var require$$1 = (_global && typeof _global === 'object' && 'default' in _global ? _global['default'] : _global);

var _uid = __commonjs(function (module) {
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
});

var require$$20 = (_uid && typeof _uid === 'object' && 'default' in _uid ? _uid['default'] : _uid);

var _shared = __commonjs(function (module) {
var global = require$$1
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
});

var require$$22 = (_shared && typeof _shared === 'object' && 'default' in _shared ? _shared['default'] : _shared);

var _wks = __commonjs(function (module) {
var store      = require$$22('wks')
  , uid        = require$$20
  , Symbol     = require$$1.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

var require$$0$3 = (_wks && typeof _wks === 'object' && 'default' in _wks ? _wks['default'] : _wks);

var _iterDetect = __commonjs(function (module) {
var ITERATOR     = require$$0$3('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
});

var require$$0$2 = (_iterDetect && typeof _iterDetect === 'object' && 'default' in _iterDetect ? _iterDetect['default'] : _iterDetect);

var _iterators = __commonjs(function (module) {
module.exports = {};
});

var require$$2 = (_iterators && typeof _iterators === 'object' && 'default' in _iterators ? _iterators['default'] : _iterators);

var _cof = __commonjs(function (module) {
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
});

var require$$0$4 = (_cof && typeof _cof === 'object' && 'default' in _cof ? _cof['default'] : _cof);

var _classof = __commonjs(function (module) {
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require$$0$4
  , TAG = require$$0$3('toStringTag')
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
});

var require$$16 = (_classof && typeof _classof === 'object' && 'default' in _classof ? _classof['default'] : _classof);

var core_getIteratorMethod = __commonjs(function (module) {
var classof   = require$$16
  , ITERATOR  = require$$0$3('iterator')
  , Iterators = require$$2;
module.exports = require$$0$1.getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
});

var require$$1$1 = (core_getIteratorMethod && typeof core_getIteratorMethod === 'object' && 'default' in core_getIteratorMethod ? core_getIteratorMethod['default'] : core_getIteratorMethod);

var _propertyDesc = __commonjs(function (module) {
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
});

var require$$5 = (_propertyDesc && typeof _propertyDesc === 'object' && 'default' in _propertyDesc ? _propertyDesc['default'] : _propertyDesc);

var _fails = __commonjs(function (module) {
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
});

var require$$23 = (_fails && typeof _fails === 'object' && 'default' in _fails ? _fails['default'] : _fails);

var _descriptors = __commonjs(function (module) {
// Thank's IE8 for his funny defineProperty
module.exports = !require$$23(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
});

var require$$0$5 = (_descriptors && typeof _descriptors === 'object' && 'default' in _descriptors ? _descriptors['default'] : _descriptors);

var _isObject = __commonjs(function (module) {
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
});

var require$$4 = (_isObject && typeof _isObject === 'object' && 'default' in _isObject ? _isObject['default'] : _isObject);

var _toPrimitive = __commonjs(function (module) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require$$4;
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
});

var require$$3 = (_toPrimitive && typeof _toPrimitive === 'object' && 'default' in _toPrimitive ? _toPrimitive['default'] : _toPrimitive);

var _domCreate = __commonjs(function (module) {
var isObject = require$$4
  , document = require$$1.document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
});

var require$$2$2 = (_domCreate && typeof _domCreate === 'object' && 'default' in _domCreate ? _domCreate['default'] : _domCreate);

var _ie8DomDefine = __commonjs(function (module) {
module.exports = !require$$0$5 && !require$$23(function(){
  return Object.defineProperty(require$$2$2('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
});

var require$$1$2 = (_ie8DomDefine && typeof _ie8DomDefine === 'object' && 'default' in _ie8DomDefine ? _ie8DomDefine['default'] : _ie8DomDefine);

var _anObject = __commonjs(function (module) {
var isObject = require$$4;
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
});

var require$$0$6 = (_anObject && typeof _anObject === 'object' && 'default' in _anObject ? _anObject['default'] : _anObject);

var _objectDp = __commonjs(function (module, exports) {
var anObject       = require$$0$6
  , IE8_DOM_DEFINE = require$$1$2
  , toPrimitive    = require$$3
  , dP             = Object.defineProperty;

exports.f = require$$0$5 ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
});

var require$$6 = (_objectDp && typeof _objectDp === 'object' && 'default' in _objectDp ? _objectDp['default'] : _objectDp);

var _createProperty = __commonjs(function (module) {
'use strict';
var $defineProperty = require$$6
  , createDesc      = require$$5;

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
});

var require$$2$1 = (_createProperty && typeof _createProperty === 'object' && 'default' in _createProperty ? _createProperty['default'] : _createProperty);

var _toInteger = __commonjs(function (module) {
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
});

var require$$1$4 = (_toInteger && typeof _toInteger === 'object' && 'default' in _toInteger ? _toInteger['default'] : _toInteger);

var _toLength = __commonjs(function (module) {
// 7.1.15 ToLength
var toInteger = require$$1$4
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
});

var require$$1$3 = (_toLength && typeof _toLength === 'object' && 'default' in _toLength ? _toLength['default'] : _toLength);

var _isArrayIter = __commonjs(function (module) {
// check on default Array iterator
var Iterators  = require$$2
  , ITERATOR   = require$$0$3('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
});

var require$$3$1 = (_isArrayIter && typeof _isArrayIter === 'object' && 'default' in _isArrayIter ? _isArrayIter['default'] : _isArrayIter);

var _iterCall = __commonjs(function (module) {
// call something on iterator step with safe closing on error
var anObject = require$$0$6;
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
});

var require$$4$1 = (_iterCall && typeof _iterCall === 'object' && 'default' in _iterCall ? _iterCall['default'] : _iterCall);

var _defined = __commonjs(function (module) {
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
});

var require$$6$1 = (_defined && typeof _defined === 'object' && 'default' in _defined ? _defined['default'] : _defined);

var _toObject = __commonjs(function (module) {
// 7.1.13 ToObject(argument)
var defined = require$$6$1;
module.exports = function(it){
  return Object(defined(it));
};
});

var require$$2$3 = (_toObject && typeof _toObject === 'object' && 'default' in _toObject ? _toObject['default'] : _toObject);

var _hide = __commonjs(function (module) {
var dP         = require$$6
  , createDesc = require$$5;
module.exports = require$$0$5 ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
});

var require$$0$7 = (_hide && typeof _hide === 'object' && 'default' in _hide ? _hide['default'] : _hide);

var _aFunction = __commonjs(function (module) {
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
});

var require$$1$6 = (_aFunction && typeof _aFunction === 'object' && 'default' in _aFunction ? _aFunction['default'] : _aFunction);

var _ctx = __commonjs(function (module) {
// optional / simple context binding
var aFunction = require$$1$6;
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
});

var require$$5$1 = (_ctx && typeof _ctx === 'object' && 'default' in _ctx ? _ctx['default'] : _ctx);

var _export = __commonjs(function (module, exports) {
var global    = require$$1
  , core      = require$$0$1
  , ctx       = require$$5$1
  , hide      = require$$0$7
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
});

var require$$1$5 = (_export && typeof _export === 'object' && 'default' in _export ? _export['default'] : _export);

var es6_array_from = __commonjs(function (module) {
'use strict';
var ctx            = require$$5$1
  , $export        = require$$1$5
  , toObject       = require$$2$3
  , call           = require$$4$1
  , isArrayIter    = require$$3$1
  , toLength       = require$$1$3
  , createProperty = require$$2$1
  , getIterFn      = require$$1$1;

$export($export.S + $export.F * !require$$0$2(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});
});

var _sharedKey = __commonjs(function (module) {
var shared = require$$22('keys')
  , uid    = require$$20;
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
});

var require$$0$9 = (_sharedKey && typeof _sharedKey === 'object' && 'default' in _sharedKey ? _sharedKey['default'] : _sharedKey);

var _has = __commonjs(function (module) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
});

var require$$0$10 = (_has && typeof _has === 'object' && 'default' in _has ? _has['default'] : _has);

var _objectGpo = __commonjs(function (module) {
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require$$0$10
  , toObject    = require$$2$3
  , IE_PROTO    = require$$0$9('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
});

var require$$1$7 = (_objectGpo && typeof _objectGpo === 'object' && 'default' in _objectGpo ? _objectGpo['default'] : _objectGpo);

var _setToStringTag = __commonjs(function (module) {
var def = require$$6.f
  , has = require$$0$10
  , TAG = require$$0$3('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
});

var require$$3$2 = (_setToStringTag && typeof _setToStringTag === 'object' && 'default' in _setToStringTag ? _setToStringTag['default'] : _setToStringTag);

var _html = __commonjs(function (module) {
module.exports = require$$1.document && document.documentElement;
});

var require$$3$4 = (_html && typeof _html === 'object' && 'default' in _html ? _html['default'] : _html);

var _enumBugKeys = __commonjs(function (module) {
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
});

var require$$0$12 = (_enumBugKeys && typeof _enumBugKeys === 'object' && 'default' in _enumBugKeys ? _enumBugKeys['default'] : _enumBugKeys);

var _toIndex = __commonjs(function (module) {
var toInteger = require$$1$4
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
});

var require$$0$13 = (_toIndex && typeof _toIndex === 'object' && 'default' in _toIndex ? _toIndex['default'] : _toIndex);

var _iobject = __commonjs(function (module) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require$$0$4;
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
});

var require$$1$11 = (_iobject && typeof _iobject === 'object' && 'default' in _iobject ? _iobject['default'] : _iobject);

var _toIobject = __commonjs(function (module) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require$$1$11
  , defined = require$$6$1;
module.exports = function(it){
  return IObject(defined(it));
};
});

var require$$1$10 = (_toIobject && typeof _toIobject === 'object' && 'default' in _toIobject ? _toIobject['default'] : _toIobject);

var _arrayIncludes = __commonjs(function (module) {
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require$$1$10
  , toLength  = require$$1$3
  , toIndex   = require$$0$13;
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
});

var require$$1$9 = (_arrayIncludes && typeof _arrayIncludes === 'object' && 'default' in _arrayIncludes ? _arrayIncludes['default'] : _arrayIncludes);

var _objectKeysInternal = __commonjs(function (module) {
var has          = require$$0$10
  , toIObject    = require$$1$10
  , arrayIndexOf = require$$1$9(false)
  , IE_PROTO     = require$$0$9('IE_PROTO');

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
});

var require$$1$8 = (_objectKeysInternal && typeof _objectKeysInternal === 'object' && 'default' in _objectKeysInternal ? _objectKeysInternal['default'] : _objectKeysInternal);

var _objectKeys = __commonjs(function (module) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require$$1$8
  , enumBugKeys = require$$0$12;

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
});

var require$$2$4 = (_objectKeys && typeof _objectKeys === 'object' && 'default' in _objectKeys ? _objectKeys['default'] : _objectKeys);

var _objectDps = __commonjs(function (module) {
var dP       = require$$6
  , anObject = require$$0$6
  , getKeys  = require$$2$4;

module.exports = require$$0$5 ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
});

var require$$4$2 = (_objectDps && typeof _objectDps === 'object' && 'default' in _objectDps ? _objectDps['default'] : _objectDps);

var _objectCreate = __commonjs(function (module) {
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require$$0$6
  , dPs         = require$$4$2
  , enumBugKeys = require$$0$12
  , IE_PROTO    = require$$0$9('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require$$2$2('iframe')
    , i      = enumBugKeys.length
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require$$3$4.appendChild(iframe);
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
});

var require$$0$11 = (_objectCreate && typeof _objectCreate === 'object' && 'default' in _objectCreate ? _objectCreate['default'] : _objectCreate);

var _iterCreate = __commonjs(function (module) {
'use strict';
var create         = require$$0$11
  , descriptor     = require$$5
  , setToStringTag = require$$3$2
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require$$0$7(IteratorPrototype, require$$0$3('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
});

var require$$3$3 = (_iterCreate && typeof _iterCreate === 'object' && 'default' in _iterCreate ? _iterCreate['default'] : _iterCreate);

var _redefine = __commonjs(function (module) {
module.exports = require$$0$7;
});

var require$$6$2 = (_redefine && typeof _redefine === 'object' && 'default' in _redefine ? _redefine['default'] : _redefine);

var _library = __commonjs(function (module) {
module.exports = true;
});

var require$$19 = (_library && typeof _library === 'object' && 'default' in _library ? _library['default'] : _library);

var _iterDefine = __commonjs(function (module) {
'use strict';
var LIBRARY        = require$$19
  , $export        = require$$1$5
  , redefine       = require$$6$2
  , hide           = require$$0$7
  , has            = require$$0$10
  , Iterators      = require$$2
  , $iterCreate    = require$$3$3
  , setToStringTag = require$$3$2
  , getPrototypeOf = require$$1$7
  , ITERATOR       = require$$0$3('iterator')
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
});

var require$$0$8 = (_iterDefine && typeof _iterDefine === 'object' && 'default' in _iterDefine ? _iterDefine['default'] : _iterDefine);

var _stringAt = __commonjs(function (module) {
var toInteger = require$$1$4
  , defined   = require$$6$1;
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
});

var require$$1$12 = (_stringAt && typeof _stringAt === 'object' && 'default' in _stringAt ? _stringAt['default'] : _stringAt);

var es6_string_iterator = __commonjs(function (module) {
'use strict';
var $at  = require$$1$12(true);

// 21.1.3.27 String.prototype[@@iterator]()
require$$0$8(String, 'String', function(iterated){
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
});

var from$1 = __commonjs(function (module) {
module.exports = require$$0$1.Array.from;
});

var require$$0 = (from$1 && typeof from$1 === 'object' && 'default' in from$1 ? from$1['default'] : from$1);

var from = __commonjs(function (module) {
module.exports = { "default": require$$0, __esModule: true };
});

var _Array$from = (from && typeof from === 'object' && 'default' in from ? from['default'] : from);

var _forOf = __commonjs(function (module) {
var ctx         = require$$5$1
  , call        = require$$4$1
  , isArrayIter = require$$3$1
  , anObject    = require$$0$6
  , toLength    = require$$1$3
  , getIterFn   = require$$1$1
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
});

var require$$2$5 = (_forOf && typeof _forOf === 'object' && 'default' in _forOf ? _forOf['default'] : _forOf);

var _arrayFromIterable = __commonjs(function (module) {
var forOf = require$$2$5;

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};
});

var require$$0$16 = (_arrayFromIterable && typeof _arrayFromIterable === 'object' && 'default' in _arrayFromIterable ? _arrayFromIterable['default'] : _arrayFromIterable);

var _collectionToJson = __commonjs(function (module) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require$$16
  , from    = require$$0$16;
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
});

var require$$0$15 = (_collectionToJson && typeof _collectionToJson === 'object' && 'default' in _collectionToJson ? _collectionToJson['default'] : _collectionToJson);

var es7_map_toJson = __commonjs(function (module) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require$$1$5;

$export($export.P + $export.R, 'Map', {toJSON: require$$0$15('Map')});
});

var _isArray = __commonjs(function (module) {
// 7.2.2 IsArray(argument)
var cof = require$$0$4;
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
});

var require$$14 = (_isArray && typeof _isArray === 'object' && 'default' in _isArray ? _isArray['default'] : _isArray);

var _arraySpeciesConstructor = __commonjs(function (module) {
var isObject = require$$4
  , isArray  = require$$14
  , SPECIES  = require$$0$3('species');

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
});

var require$$0$19 = (_arraySpeciesConstructor && typeof _arraySpeciesConstructor === 'object' && 'default' in _arraySpeciesConstructor ? _arraySpeciesConstructor['default'] : _arraySpeciesConstructor);

var _arraySpeciesCreate = __commonjs(function (module) {
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require$$0$19;

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
});

var require$$0$18 = (_arraySpeciesCreate && typeof _arraySpeciesCreate === 'object' && 'default' in _arraySpeciesCreate ? _arraySpeciesCreate['default'] : _arraySpeciesCreate);

var _arrayMethods = __commonjs(function (module) {
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = require$$5$1
  , IObject  = require$$1$11
  , toObject = require$$2$3
  , toLength = require$$1$3
  , asc      = require$$0$18;
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
});

var require$$1$13 = (_arrayMethods && typeof _arrayMethods === 'object' && 'default' in _arrayMethods ? _arrayMethods['default'] : _arrayMethods);

var _anInstance = __commonjs(function (module) {
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
});

var require$$3$5 = (_anInstance && typeof _anInstance === 'object' && 'default' in _anInstance ? _anInstance['default'] : _anInstance);

var _redefineAll = __commonjs(function (module) {
var hide = require$$0$7;
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
});

var require$$7 = (_redefineAll && typeof _redefineAll === 'object' && 'default' in _redefineAll ? _redefineAll['default'] : _redefineAll);

var _meta = __commonjs(function (module) {
var META     = require$$20('meta')
  , isObject = require$$4
  , has      = require$$0$10
  , setDesc  = require$$6.f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require$$23(function(){
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
});

var require$$6$3 = (_meta && typeof _meta === 'object' && 'default' in _meta ? _meta['default'] : _meta);

var _collection = __commonjs(function (module) {
'use strict';
var global         = require$$1
  , $export        = require$$1$5
  , meta           = require$$6$3
  , fails          = require$$23
  , hide           = require$$0$7
  , redefineAll    = require$$7
  , forOf          = require$$2$5
  , anInstance     = require$$3$5
  , isObject       = require$$4
  , setToStringTag = require$$3$2
  , dP             = require$$6.f
  , each           = require$$1$13(0)
  , DESCRIPTORS    = require$$0$5;

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
});

var require$$0$17 = (_collection && typeof _collection === 'object' && 'default' in _collection ? _collection['default'] : _collection);

var _setSpecies = __commonjs(function (module) {
'use strict';
var global      = require$$1
  , core        = require$$0$1
  , dP          = require$$6
  , DESCRIPTORS = require$$0$5
  , SPECIES     = require$$0$3('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
});

var require$$2$6 = (_setSpecies && typeof _setSpecies === 'object' && 'default' in _setSpecies ? _setSpecies['default'] : _setSpecies);

var _iterStep = __commonjs(function (module) {
module.exports = function(done, value){
  return {value: value, done: !!done};
};
});

var require$$3$6 = (_iterStep && typeof _iterStep === 'object' && 'default' in _iterStep ? _iterStep['default'] : _iterStep);

var _collectionStrong = __commonjs(function (module) {
'use strict';
var dP          = require$$6.f
  , create      = require$$0$11
  , hide        = require$$0$7
  , redefineAll = require$$7
  , ctx         = require$$5$1
  , anInstance  = require$$3$5
  , defined     = require$$6$1
  , forOf       = require$$2$5
  , $iterDefine = require$$0$8
  , step        = require$$3$6
  , setSpecies  = require$$2$6
  , DESCRIPTORS = require$$0$5
  , fastKey     = require$$6$3.fastKey
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
});

var require$$1$14 = (_collectionStrong && typeof _collectionStrong === 'object' && 'default' in _collectionStrong ? _collectionStrong['default'] : _collectionStrong);

var es6_map = __commonjs(function (module) {
'use strict';
var strong = require$$1$14;

// 23.1 Map Objects
module.exports = require$$0$17('Map', function(get){
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
});

var _addToUnscopables = __commonjs(function (module) {
module.exports = function(){ /* empty */ };
});

var require$$4$3 = (_addToUnscopables && typeof _addToUnscopables === 'object' && 'default' in _addToUnscopables ? _addToUnscopables['default'] : _addToUnscopables);

var es6_array_iterator = __commonjs(function (module) {
'use strict';
var addToUnscopables = require$$4$3
  , step             = require$$3$6
  , Iterators        = require$$2
  , toIObject        = require$$1$10;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require$$0$8(Array, 'Array', function(iterated, kind){
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
});

var web_dom_iterable = __commonjs(function (module) {
var global        = require$$1
  , hide          = require$$0$7
  , Iterators     = require$$2
  , TO_STRING_TAG = require$$0$3('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
});

var map$1 = __commonjs(function (module) {
module.exports = require$$0$1.Map;
});

var require$$0$14 = (map$1 && typeof map$1 === 'object' && 'default' in map$1 ? map$1['default'] : map$1);

var map = __commonjs(function (module) {
module.exports = { "default": require$$0$14, __esModule: true };
});

var _Map = (map && typeof map === 'object' && 'default' in map ? map['default'] : map);

var _invoke = __commonjs(function (module) {
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
});

var require$$4$4 = (_invoke && typeof _invoke === 'object' && 'default' in _invoke ? _invoke['default'] : _invoke);

var _bind = __commonjs(function (module) {
'use strict';
var aFunction  = require$$1$6
  , isObject   = require$$4
  , invoke     = require$$4$4
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
});

var require$$1$15 = (_bind && typeof _bind === 'object' && 'default' in _bind ? _bind['default'] : _bind);

var es6_reflect_construct = __commonjs(function (module) {
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export   = require$$1$5
  , create    = require$$0$11
  , aFunction = require$$1$6
  , anObject  = require$$0$6
  , isObject  = require$$4
  , bind      = require$$1$15;

// MS Edge supports only 2 arguments
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
$export($export.S + $export.F * require$$23(function(){
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
});

var construct$1 = __commonjs(function (module) {
module.exports = require$$0$1.Reflect.construct;
});

var require$$0$20 = (construct$1 && typeof construct$1 === 'object' && 'default' in construct$1 ? construct$1['default'] : construct$1);

var construct = __commonjs(function (module) {
module.exports = { "default": require$$0$20, __esModule: true };
});

var _Reflect$construct = (construct && typeof construct === 'object' && 'default' in construct ? construct['default'] : construct);

var _objectPie = __commonjs(function (module, exports) {
exports.f = {}.propertyIsEnumerable;
});

var require$$0$22 = (_objectPie && typeof _objectPie === 'object' && 'default' in _objectPie ? _objectPie['default'] : _objectPie);

var _objectGops = __commonjs(function (module, exports) {
exports.f = Object.getOwnPropertySymbols;
});

var require$$1$16 = (_objectGops && typeof _objectGops === 'object' && 'default' in _objectGops ? _objectGops['default'] : _objectGops);

var _objectAssign = __commonjs(function (module) {
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require$$2$4
  , gOPS     = require$$1$16
  , pIE      = require$$0$22
  , toObject = require$$2$3
  , IObject  = require$$1$11
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require$$23(function(){
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
});

var require$$4$5 = (_objectAssign && typeof _objectAssign === 'object' && 'default' in _objectAssign ? _objectAssign['default'] : _objectAssign);

var es6_object_assign = __commonjs(function (module) {
// 19.1.3.1 Object.assign(target, source)
var $export = require$$1$5;

$export($export.S + $export.F, 'Object', {assign: require$$4$5});
});

var assign$1 = __commonjs(function (module) {
module.exports = require$$0$1.Object.assign;
});

var require$$0$21 = (assign$1 && typeof assign$1 === 'object' && 'default' in assign$1 ? assign$1['default'] : assign$1);

var assign = __commonjs(function (module) {
module.exports = { "default": require$$0$21, __esModule: true };
});

var _Object$assign = (assign && typeof assign === 'object' && 'default' in assign ? assign['default'] : assign);

var _extends = __commonjs(function (module, exports) {
"use strict";

exports.__esModule = true;

var _assign = _Object$assign;

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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
});

var _extends$1 = (_extends && typeof _extends === 'object' && 'default' in _extends ? _extends['default'] : _extends);

var _wksExt = __commonjs(function (module, exports) {
exports.f = require$$0$3;
});

var require$$18 = (_wksExt && typeof _wksExt === 'object' && 'default' in _wksExt ? _wksExt['default'] : _wksExt);

var iterator$1 = __commonjs(function (module) {
module.exports = require$$18.f('iterator');
});

var require$$0$23 = (iterator$1 && typeof iterator$1 === 'object' && 'default' in iterator$1 ? iterator$1['default'] : iterator$1);

var iterator = __commonjs(function (module) {
module.exports = { "default": require$$0$23, __esModule: true };
});

var require$$1$17 = (iterator && typeof iterator === 'object' && 'default' in iterator ? iterator['default'] : iterator);

var _wksDefine = __commonjs(function (module) {
var global         = require$$1
  , core           = require$$0$1
  , LIBRARY        = require$$19
  , wksExt         = require$$18
  , defineProperty = require$$6.f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
});

var require$$17 = (_wksDefine && typeof _wksDefine === 'object' && 'default' in _wksDefine ? _wksDefine['default'] : _wksDefine);

var es7_symbol_observable = __commonjs(function (module) {
require$$17('observable');
});

var es7_symbol_asyncIterator = __commonjs(function (module) {
require$$17('asyncIterator');
});

var _objectGopn = __commonjs(function (module, exports) {
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require$$1$8
  , hiddenKeys = require$$0$12.concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
});

var require$$0$27 = (_objectGopn && typeof _objectGopn === 'object' && 'default' in _objectGopn ? _objectGopn['default'] : _objectGopn);

var _objectGopd = __commonjs(function (module, exports) {
var pIE            = require$$0$22
  , createDesc     = require$$5
  , toIObject      = require$$1$10
  , toPrimitive    = require$$3
  , has            = require$$0$10
  , IE8_DOM_DEFINE = require$$1$2
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require$$0$5 ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
});

var require$$0$28 = (_objectGopd && typeof _objectGopd === 'object' && 'default' in _objectGopd ? _objectGopd['default'] : _objectGopd);

var _objectGopnExt = __commonjs(function (module) {
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require$$1$10
  , gOPN      = require$$0$27.f
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
});

var require$$8 = (_objectGopnExt && typeof _objectGopnExt === 'object' && 'default' in _objectGopnExt ? _objectGopnExt['default'] : _objectGopnExt);

var _enumKeys = __commonjs(function (module) {
// all enumerable object keys, includes symbols
var getKeys = require$$2$4
  , gOPS    = require$$1$16
  , pIE     = require$$0$22;
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
});

var require$$15 = (_enumKeys && typeof _enumKeys === 'object' && 'default' in _enumKeys ? _enumKeys['default'] : _enumKeys);

var _keyof = __commonjs(function (module) {
var getKeys   = require$$2$4
  , toIObject = require$$1$10;
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
});

var require$$16$1 = (_keyof && typeof _keyof === 'object' && 'default' in _keyof ? _keyof['default'] : _keyof);

var es6_symbol = __commonjs(function (module) {
'use strict';
// ECMAScript 6 symbols shim
var global         = require$$1
  , has            = require$$0$10
  , DESCRIPTORS    = require$$0$5
  , $export        = require$$1$5
  , redefine       = require$$6$2
  , META           = require$$6$3.KEY
  , $fails         = require$$23
  , shared         = require$$22
  , setToStringTag = require$$3$2
  , uid            = require$$20
  , wks            = require$$0$3
  , wksExt         = require$$18
  , wksDefine      = require$$17
  , keyOf          = require$$16$1
  , enumKeys       = require$$15
  , isArray        = require$$14
  , anObject       = require$$0$6
  , toIObject      = require$$1$10
  , toPrimitive    = require$$3
  , createDesc     = require$$5
  , _create        = require$$0$11
  , gOPNExt        = require$$8
  , $GOPD          = require$$0$28
  , $DP            = require$$6
  , $keys          = require$$2$4
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
  require$$0$27.f = gOPNExt.f = $getOwnPropertyNames;
  require$$0$22.f  = $propertyIsEnumerable;
  require$$1$16.f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require$$19){
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require$$0$7($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
});

var index$1 = __commonjs(function (module) {
module.exports = require$$0$1.Symbol;
});

var require$$0$26 = (index$1 && typeof index$1 === 'object' && 'default' in index$1 ? index$1['default'] : index$1);

var symbol = __commonjs(function (module) {
module.exports = { "default": require$$0$26, __esModule: true };
});

var require$$0$25 = (symbol && typeof symbol === 'object' && 'default' in symbol ? symbol['default'] : symbol);

var _typeof = __commonjs(function (module, exports) {
"use strict";

exports.__esModule = true;

var _iterator = require$$1$17;

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require$$0$25;

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

var require$$2$7 = (_typeof && typeof _typeof === 'object' && 'default' in _typeof ? _typeof['default'] : _typeof);

var es6_object_create = __commonjs(function (module) {
var $export = require$$1$5
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require$$0$11});
});

var create$1 = __commonjs(function (module) {
var $Object = require$$0$1.Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
});

var require$$0$29 = (create$1 && typeof create$1 === 'object' && 'default' in create$1 ? create$1['default'] : create$1);

var create = __commonjs(function (module) {
module.exports = { "default": require$$0$29, __esModule: true };
});

var _Object$create = (create && typeof create === 'object' && 'default' in create ? create['default'] : create);

var _setProto = __commonjs(function (module) {
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require$$4
  , anObject = require$$0$6;
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require$$5$1(Function.call, require$$0$28.f(Object.prototype, '__proto__').set, 2);
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
});

var require$$9 = (_setProto && typeof _setProto === 'object' && 'default' in _setProto ? _setProto['default'] : _setProto);

var es6_object_setPrototypeOf = __commonjs(function (module) {
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require$$1$5;
$export($export.S, 'Object', {setPrototypeOf: require$$9.set});
});

var setPrototypeOf$1 = __commonjs(function (module) {
module.exports = require$$0$1.Object.setPrototypeOf;
});

var require$$0$30 = (setPrototypeOf$1 && typeof setPrototypeOf$1 === 'object' && 'default' in setPrototypeOf$1 ? setPrototypeOf$1['default'] : setPrototypeOf$1);

var setPrototypeOf = __commonjs(function (module) {
module.exports = { "default": require$$0$30, __esModule: true };
});

var require$$4$6 = (setPrototypeOf && typeof setPrototypeOf === 'object' && 'default' in setPrototypeOf ? setPrototypeOf['default'] : setPrototypeOf);

var _task = __commonjs(function (module, exports, global) {
var ctx                = require$$5$1
  , invoke             = require$$4$4
  , html               = require$$3$4
  , cel                = require$$2$2
  , global             = require$$1
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
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
  if(require$$0$4(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
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
});

var require$$1$18 = (_task && typeof _task === 'object' && 'default' in _task ? _task['default'] : _task);

var _microtask = __commonjs(function (module) {
var global    = require$$1
  , macrotask = require$$1$18.set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require$$0$4(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};
});

var require$$6$4 = (_microtask && typeof _microtask === 'object' && 'default' in _microtask ? _microtask['default'] : _microtask);

var _speciesConstructor = __commonjs(function (module) {
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require$$0$6
  , aFunction = require$$1$6
  , SPECIES   = require$$0$3('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
});

var require$$8$1 = (_speciesConstructor && typeof _speciesConstructor === 'object' && 'default' in _speciesConstructor ? _speciesConstructor['default'] : _speciesConstructor);

var es6_promise = __commonjs(function (module, exports, global) {
'use strict';
var LIBRARY            = require$$19
  , global             = require$$1
  , ctx                = require$$5$1
  , classof            = require$$16
  , $export            = require$$1$5
  , isObject           = require$$4
  , anObject           = require$$0$6
  , aFunction          = require$$1$6
  , anInstance         = require$$3$5
  , forOf              = require$$2$5
  , setProto           = require$$9.set
  , speciesConstructor = require$$8$1
  , task               = require$$1$18.set
  , microtask          = require$$6$4()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[require$$0$3('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require$$7($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
require$$3$2($Promise, PROMISE);
require$$2$6(PROMISE);
Wrapper = require$$0$1[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require$$0$2(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
});

var promise$1 = __commonjs(function (module) {
module.exports = require$$0$1.Promise;
});

var require$$0$31 = (promise$1 && typeof promise$1 === 'object' && 'default' in promise$1 ? promise$1['default'] : promise$1);

var promise = __commonjs(function (module) {
module.exports = { "default": require$$0$31, __esModule: true };
});

var require$$5$2 = (promise && typeof promise === 'object' && 'default' in promise ? promise['default'] : promise);

var runtime = __commonjs(function (module, exports, global) {
"use strict";

var _promise = require$$5$2;

var _promise2 = _interopRequireDefault(_promise);

var _setPrototypeOf = require$$4$6;

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = _Object$create;

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require$$2$7;

var _typeof3 = _interopRequireDefault(_typeof2);

var _iterator = require$$1$17;

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require$$0$25;

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol = typeof _symbol2.default === "function" && _iterator2.default || "@@iterator";

  var inModule = (typeof module === "undefined" ? "undefined" : (0, _typeof3.default)(module)) === "object";
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
    var generator = (0, _create2.default)((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

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
    if (_setPrototypeOf2.default) {
      (0, _setPrototypeOf2.default)(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
    }
    genFun.prototype = (0, _create2.default)(Gp);
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
      return value instanceof AwaitArgument ? _promise2.default.resolve(value.arg).then(invokeNext, invokeThrow) : _promise2.default.resolve(value).then(function (unwrapped) {
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

    if ((typeof process === "undefined" ? "undefined" : (0, _typeof3.default)(process)) === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var invokeNext = invoke.bind(generator, "next");
    var invokeThrow = invoke.bind(generator, "throw");
    var invokeReturn = invoke.bind(generator, "return");
    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return invoke(method, arg);
      }

      return previousPromise =
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
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : new _promise2.default(function (resolve) {
        resolve(callInvokeWithMethodAndArg());
      });
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
          context._sent = arg;

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
}(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
(typeof global === "undefined" ? "undefined" : (0, _typeof3.default)(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : (0, _typeof3.default)(self)) === "object" ? self : undefined);
});

var require$$0$24 = (runtime && typeof runtime === 'object' && 'default' in runtime ? runtime['default'] : runtime);

var index = __commonjs(function (module, exports, global) {
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : __commonjs_global;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require$$0$24;

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

module.exports = { "default": module.exports, __esModule: true };
});

var _regeneratorRuntime = (index && typeof index === 'object' && 'default' in index ? index['default'] : index);

var _objectToArray = __commonjs(function (module) {
var getKeys   = require$$2$4
  , toIObject = require$$1$10
  , isEnum    = require$$0$22.f;
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
});

var require$$0$33 = (_objectToArray && typeof _objectToArray === 'object' && 'default' in _objectToArray ? _objectToArray['default'] : _objectToArray);

var es7_object_values = __commonjs(function (module) {
// https://github.com/tc39/proposal-object-values-entries
var $export = require$$1$5
  , $values = require$$0$33(false);

$export($export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});
});

var values$1 = __commonjs(function (module) {
module.exports = require$$0$1.Object.values;
});

var require$$0$32 = (values$1 && typeof values$1 === 'object' && 'default' in values$1 ? values$1['default'] : values$1);

var values = __commonjs(function (module) {
module.exports = { "default": require$$0$32, __esModule: true };
});

var _Object$values = (values && typeof values === 'object' && 'default' in values ? values['default'] : values);

var core_getIterator = __commonjs(function (module) {
var anObject = require$$0$6
  , get      = require$$1$1;
module.exports = require$$0$1.getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
});

var require$$0$35 = (core_getIterator && typeof core_getIterator === 'object' && 'default' in core_getIterator ? core_getIterator['default'] : core_getIterator);

var getIterator$1 = __commonjs(function (module) {
module.exports = require$$0$35;
});

var require$$0$34 = (getIterator$1 && typeof getIterator$1 === 'object' && 'default' in getIterator$1 ? getIterator$1['default'] : getIterator$1);

var getIterator = __commonjs(function (module) {
module.exports = { "default": require$$0$34, __esModule: true };
});

var _getIterator = (getIterator && typeof getIterator === 'object' && 'default' in getIterator ? getIterator['default'] : getIterator);

var SUCCESS = 1;
var FAILURE = 2;
var RUNNING = 3;
var ERROR = 4;
var COMPOSITE = 'composite';
var DECORATOR = 'decorator';
var ACTION = 'action';
var CONDITION = 'condition';

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
    cls.prototype = _Object$create(baseClass.prototype);
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
var Error$1 = Class(Action, {

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
	Error: Error$1,
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

Class(null, {

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

/**
 * Condition is the base class for all condition nodes. Thus, if you want to 
 * create new custom condition nodes, you need to inherit from this class. 
 *
 * @class Condition
 * @extends BaseNode
 **/

var Condition = Class(BaseNode, {

  /**
   * Node category. Default to `b3.CONDITION`.
   * @property {String} category
   * @readonly
   **/
  category: CONDITION,

  /**
   * Initialization method.
   * @method initialize
   * @constructor
   **/
  initialize: function initialize(params) {
    BaseNode.prototype.initialize.call(this);
  }

});

var defaultUidLength = 12;

var Uid = stampit.methods({
	createUid: function createUid() {
		var prefix = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
		var length = arguments.length <= 1 || arguments[1] === undefined ? defaultUidLength : arguments[1];

		var generated = uid(length);
		return prefix === null ? generated : prefix + '-' + generated;
	}
});

var _collectionWeak = __commonjs(function (module) {
'use strict';
var redefineAll       = require$$7
  , getWeak           = require$$6$3.getWeak
  , anObject          = require$$0$6
  , isObject          = require$$4
  , anInstance        = require$$3$5
  , forOf             = require$$2$5
  , createArrayMethod = require$$1$13
  , $has              = require$$0$10
  , arrayFind         = createArrayMethod(5)
  , arrayFindIndex    = createArrayMethod(6)
  , id                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak(anObject(key), true);
    if(data === true)uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};
});

var require$$3$7 = (_collectionWeak && typeof _collectionWeak === 'object' && 'default' in _collectionWeak ? _collectionWeak['default'] : _collectionWeak);

var es6_weakMap = __commonjs(function (module) {
'use strict';
var each         = require$$1$13(0)
  , redefine     = require$$6$2
  , meta         = require$$6$3
  , assign       = require$$4$5
  , weak         = require$$3$7
  , isObject     = require$$4
  , has          = require$$0$10
  , getWeak      = meta.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = weak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      var data = getWeak(key);
      if(data === true)return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require$$0$17('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(isObject(a) && !isExtensible(a)){
        if(!this._f)this._f = new InternalMap;
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
});

var weakMap$1 = __commonjs(function (module) {
module.exports = require$$0$1.WeakMap;
});

var require$$0$36 = (weakMap$1 && typeof weakMap$1 === 'object' && 'default' in weakMap$1 ? weakMap$1['default'] : weakMap$1);

var weakMap = __commonjs(function (module) {
module.exports = { "default": require$$0$36, __esModule: true };
});

var _WeakMap = (weakMap && typeof weakMap === 'object' && 'default' in weakMap ? weakMap['default'] : weakMap);

var Private = stampit().init(function (options, _ref) {
	var instance = _ref.instance;

	instance.map = new _WeakMap();
}).methods({
	init: function init(owner) {
		var ownerMap = new _Map();
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
		return value;
	}
});

var _marked = [prepareNodes, createNodesFromDescriptors].map(_regeneratorRuntime.mark);

var Behavior = stampit({
	initializers: [initializeBehaviorNodeMap, initializeBehaviorTree],
	methods: { listBehaviorNodes: listBehaviorNodes }
}).compose(Uid);

var standardBaseNodes = {
	Action: Action,
	Composite: Composite,
	Condition: Condition,
	Decorator: Decorator
};

var privates$1 = Private.create();

/**
 * @typedef {NodeDescriptor}
 * @type {object}
 * @property {!string} name of node
 * @property {!function} tick handle tick of node
 * @property {string} base name of node
 */

/**
 * @param {NodeDescriptor[]} [options.nodes] additional nodes to register
 */
function initializeBehaviorNodeMap() {
	var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	var nodes = _ref.nodes;

	privates$1.init(this);

	var nodeMap = privates$1.set(this, 'nodes', new _Map());
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _getIterator(prepareNodes(nodeMap, nodes)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var nodeClass = _step.value;

			nodeMap.set(nodeClass.prototype.name, nodeClass);
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

function prepareNodes(nodeMap, nodeDescriptors) {
	return _regeneratorRuntime.wrap(function prepareNodes$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					return _context.delegateYield(_Object$values(Composites), 't0', 1);

				case 1:
					return _context.delegateYield(_Object$values(Decorators), 't1', 2);

				case 2:
					return _context.delegateYield(_Object$values(Actions), 't2', 3);

				case 3:
					return _context.delegateYield(createNodesFromDescriptors(nodeMap, nodeDescriptors), 't3', 4);

				case 4:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this);
}

function createNodesFromDescriptors(nodeMap, nodeDescriptors) {
	var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, descriptor, baseNodeName, baseNodeClass;

	return _regeneratorRuntime.wrap(function createNodesFromDescriptors$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					if (nodeDescriptors) {
						_context2.next = 2;
						break;
					}

					return _context2.abrupt('return');

				case 2:

					invariant(nodeDescriptors[require$$1$17], 'Specified options.nodes must be an iterable object, eg. array.');

					_iteratorNormalCompletion2 = true;
					_didIteratorError2 = false;
					_iteratorError2 = undefined;
					_context2.prev = 6;
					_iterator2 = _getIterator(nodeDescriptors);

				case 8:
					if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
						_context2.next = 19;
						break;
					}

					descriptor = _step2.value;

					validateNodeDescriptor(descriptor);

					baseNodeName = descriptor.base;
					baseNodeClass = findBaseNode(baseNodeName, nodeMap);


					invariant(typeof baseNodeClass === 'function', 'A node descriptor %s has invalid base node %s specified. ' + 'The node is not registered yet nor is built in one.', descriptor.name, baseNodeName);

					_context2.next = 16;
					return Class(baseNodeClass, descriptor);

				case 16:
					_iteratorNormalCompletion2 = true;
					_context2.next = 8;
					break;

				case 19:
					_context2.next = 25;
					break;

				case 21:
					_context2.prev = 21;
					_context2.t0 = _context2['catch'](6);
					_didIteratorError2 = true;
					_iteratorError2 = _context2.t0;

				case 25:
					_context2.prev = 25;
					_context2.prev = 26;

					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}

				case 28:
					_context2.prev = 28;

					if (!_didIteratorError2) {
						_context2.next = 31;
						break;
					}

					throw _iteratorError2;

				case 31:
					return _context2.finish(28);

				case 32:
					return _context2.finish(25);

				case 33:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked[1], this, [[6, 21, 25, 33], [26,, 28, 32]]);
}

function validateNodeDescriptor(descriptor) {
	invariant(lodash.isObject(descriptor), 'A node descriptor must be an object.');

	var nodeName = descriptor.name;

	invariant(lodash.isString(nodeName) && nodeName.length, 'A node descriptor must have a name property of non-empty string.');

	invariant(lodash.isFunction(descriptor.tick), 'A node descriptor %s must have a tick method specified.', nodeName);
}

function findBaseNode(nodeName, nodeMap) {
	if (lodash.isString(nodeName) && nodeName.length) {
		return nodeMap.get(nodeName) || standardBaseNodes[nodeName];
	}
	return null;
}

function initializeBehaviorTree() {
	var _this = this;

	var createBehaviorNode = function createBehaviorNode(nodeName) {
		var params = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

		invariant(lodash.isString(nodeName) && nodeName.length, 'Called createBehaviorNode() without name of node to create.' + 'Name is expected to be a non-empty string.');

		var nodeClass = privates$1.get(_this, 'nodes').get(nodeName);
		if (nodeClass === undefined) {
			return null;
		}

		var clonedParams = lodash.isObject(params) ? _extends$1({}, params) : {};
		var behaviorNode = _Reflect$construct(nodeClass, [clonedParams]);
		behaviorNode.id = _this.createUid(nodeName);

		return behaviorNode;
	};

	var BehaviorTreeWithNodes = Class(BehaviorTree, {
		createBehaviorNode: createBehaviorNode
	});

	/**
  * Create instance of B3.BehaviorTree
  * @param {string} [id] optional id to be set on instance
  * @return {BehaviorTree}
  */
	this.createBehaviorTree = function (id) {
		var behaviorTree = new BehaviorTreeWithNodes();
		if (lodash.isString(id) && id.length) {
			behaviorTree.id = id;
		}
		return behaviorTree;
	};
}

/**
 * @typedef {RegisteredNode}
 * @type {object}
 * @property {!function} constructor of the node
 * @property {!string} name of node
 * @property {!string} category of the node
 * @property {?object} parameters of the node
 */

/**
 * Retrieve list of currently registered behavior nodes
 * @return {RegisteredNode[]}
 */
function listBehaviorNodes() {
	return _Array$from(privates$1.get(this, 'nodes').values()).map(function (behaviorNode) {
		return {
			constructor: behaviorNode,
			name: behaviorNode.prototype.name,
			category: behaviorNode.prototype.category,
			parameters: behaviorNode.prototype.parameters
		};
	});
}

var es6_reflect_apply = __commonjs(function (module) {
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export   = require$$1$5
  , aFunction = require$$1$6
  , anObject  = require$$0$6
  , _apply    = Function.apply;

$export($export.S, 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList){
    return _apply.call(aFunction(target), thisArgument, anObject(argumentsList));
  }
});
});

var apply$1 = __commonjs(function (module) {
module.exports = require$$0$1.Reflect.apply;
});

var require$$0$37 = (apply$1 && typeof apply$1 === 'object' && 'default' in apply$1 ? apply$1['default'] : apply$1);

var apply = __commonjs(function (module) {
module.exports = { "default": require$$0$37, __esModule: true };
});

var _Reflect$apply = (apply && typeof apply === 'object' && 'default' in apply ? apply['default'] : apply);

var EventEmittable = stampit({
	initializers: function initEventEmitter() {
		_Reflect$apply(events.EventEmitter, this, []);
	},
	methods: ['emit', 'on', 'once', 'removeListener'].reduce(function (methods, methodName) {
		methods[methodName] = events.EventEmitter.prototype[methodName];
		return methods;
	}, {})
});

var es7_set_toJson = __commonjs(function (module) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require$$1$5;

$export($export.P + $export.R, 'Set', {toJSON: require$$0$15('Set')});
});

var es6_set = __commonjs(function (module) {
'use strict';
var strong = require$$1$14;

// 23.2 Set Objects
module.exports = require$$0$17('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
});

var set$3 = __commonjs(function (module) {
module.exports = require$$0$1.Set;
});

var require$$0$38 = (set$3 && typeof set$3 === 'object' && 'default' in set$3 ? set$3['default'] : set$3);

var set$2 = __commonjs(function (module) {
module.exports = { "default": require$$0$38, __esModule: true };
});

var _Set = (set$2 && typeof set$2 === 'object' && 'default' in set$2 ? set$2['default'] : set$2);

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
		return _Object$assign({}, privates.get(this, 'props'));
	}

	var data = { get: valueOf };

	function toString() {
		return 'model of ' + modelName;
	}

	function getModelName() {
		return modelName;
	}

	return stampit.compose(EventEmittable, {
		initializers: [initializeModelPrivateArea],
		methods: { getModelName: getModelName, toString: toString, valueOf: valueOf },
		propertyDescriptors: { data: data },
		staticProperties: { getter: getter, property: property }
	});
}

function setupPropertyAccessor(privates) {
	var readonly = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	return function accessProperty(propertyName) {
		var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


		var methodSuffix = lodash.upperFirst(propertyName);
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
			} else if (lodash.isFunction(defaultValue)) {
				var obtainedValue = _Reflect$apply(defaultValue, this, [data]);
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

var privates$3 = ModelPrivate.methods({
	getChildren: function getChildren(owner) {
		var ensure = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

		var children = this.getProperty(owner, 'children');
		if (children === null && ensure === true) {
			children = new _Set();
			this.setProperty(owner, 'children', children);
		}
		return children;
	}
}).create();

var NodeModel = Model('Node', privates$3).getter('id').getter('treeId').getter('name').getter('title').getter('description').getter('children').getter('parent').getter('behaviorNode').methods({
	hasChild: hasChild, addChild: addChild, removeChild: removeChild,
	hasChildren: hasChildren, getChildren: getChildren, acceptsChildren: acceptsChildren,
	getProperties: getProperties, toString: toString$1
}).init(initializeNodeModel);

function initializeNodeModel(_ref) {
	var behaviorNode = _ref.behaviorNode;

	privates$3.setProperty(this, 'behaviorNode', behaviorNode);
}

function getProperties() {
	return _extends$1({}, this.getBehaviorNode().properties);
}

function getChildren() {
	var children = privates$3.getChildren(this, false);
	if (children === null) {
		return [];
	}
	return _Array$from(children);
}

function hasChildren() {
	var children = privates$3.getChildren(this, false);
	return children !== null && children.size > 0;
}

function hasChild(childNode) {
	var children = privates$3.getChildren(this, false);
	return children !== null && children.has(childNode);
}

function acceptsChildren() {
	var behaviorNode = this.getBehaviorNode();
	if (behaviorNode.children !== undefined) {
		return true;
	}
	if (behaviorNode.child !== undefined) {
		return behaviorNode.child === null;
	}
	return false;
}

function addChild(childNode) {
	invariant(this.acceptsChildren(), 'Node %s cannot accept child %s', this, childNode);

	var children = privates$3.getChildren(this);

	invariant(!children.has(childNode), 'Node %s is child of %s already', childNode, this);

	var parentNode = childNode.getParent();
	invariant(parentNode === null || parentNode === this, 'Trying to add node %s that has parent %s already', childNode, parentNode);

	children.add(childNode);
	privates$3.setProperty(childNode, 'parent', this);

	var behaviorNode = this.getBehaviorNode();
	if (behaviorNode.children === undefined) {
		behaviorNode.child = childNode.getBehaviorNode();
	} else {
		behaviorNode.children.push(childNode.getBehaviorNode());
	}
}

function removeChild(childNode) {
	var children = privates$3.getChildren(this, false);
	if (children === null) {
		return null;
	}

	warning(children.has(childNode), 'Trying to remove child node %s from %s. Node is child of %s.', childNode, this, childNode.getParent());

	children.delete(childNode);
	privates$3.setProperty(childNode, 'parent', null);

	var behaviorNode = this.getBehaviorNode();
	if (behaviorNode.children === undefined) {
		behaviorNode.child = null;
	} else {
		var childBehaviorNode = childNode.getBehaviorNode();
		var childIndex = behaviorNode.children.indexOf(childBehaviorNode);
		behaviorNode.children.splice(childIndex, 1);
	}

	return childNode;
}

function toString$1() {
	return this.getId();
}

var privates$2 = ModelPrivate.create();

var TreeModel = Model('Tree', privates$2).getter('id').getter('rootNode').getter('behaviorTree').property('name', 'New tree').property('description').methods({
	addNode: addNode, removeNode: removeNode, getNode: getNode, listNodes: listNodes,
	changeRootNode: changeRootNode, toString: toString
}).init(initializeTreeModel, initializeRootNode);

function initializeTreeModel() {
	privates$2.set(this, 'nodes', new _Set());
}

function initializeRootNode(_ref) {
	var rootNodeName = _ref.rootNodeName;
	var rootNodeProperties = _ref.rootNodeProperties;

	if (rootNodeName) {
		this.changeRootNode(rootNodeName, rootNodeProperties);
	}
}

function addNode(nodeName, nodeProperties) {
	var behaviorTree = this.getBehaviorTree();
	var behaviorNode = behaviorTree.createBehaviorNode(nodeName, nodeProperties);
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
		for (var _iterator = _getIterator(nodes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

	var currentRootNode = this.getRootNode();
	nodes.delete(currentRootNode);

	var newRootNode = this.addNode(nodeName, nodeProperties);
	this.getBehaviorTree().root = newRootNode.getBehaviorNode();

	privates$2.setProperty(this, 'rootNode', newRootNode);
	return newRootNode;
}

function listNodes() {
	return _Array$from(privates$2.get(this, 'nodes').values());
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
}).compose(Behavior, Uid, EventEmittable);

var privates = Private.create();

function initializeTreeMap() {
	privates.init(this);
	privates.set(this, 'trees', new _Map());
}

function createTree(rootNodeName, rootNodeProperties) {

	var treeId = this.createUid('tree');
	var behaviorTree = this.createBehaviorTree(treeId);

	var tree = TreeModel({
		id: treeId, behaviorTree: behaviorTree,
		rootNodeName: rootNodeName, rootNodeProperties: rootNodeProperties
	});

	privates.get(this, 'trees').set(tree.getId(), tree);
	this.emit('tree.create', tree);
	return tree;
}

function getTree(treeId) {
	return privates.get(this, 'trees').get(treeId) || null;
}

function removeTree(treeId) {
	var tree = this.getTree(treeId);
	warning(tree, 'Trying to remove tree with ID `%s` that no longer exists.', treeId);

	if (tree) {
		privates.get(this, 'trees').delete(treeId);
		this.emit('tree.remove', tree);
		return tree;
	}

	return null;
}

function listTrees() {
	return _Array$from(privates.get(this, 'trees').values());
}

var SubjectModel = Model('Subject').getter('id').property('treeId');

var SubjectList = stampit({
	initializers: initializeData,
	methods: {
		addSubject: addSubject, removeSubject: removeSubject,
		getSubject: getSubject, listSubjects: listSubjects
	}
}).compose(Uid, EventEmittable);

var privates$4 = Private.create();

function initializeData() {
	privates$4.init(this);
	privates$4.set(this, 'subjects', new _Map());
}

function addSubject(tree) {
	invariant(tree, 'The tree model expected for addSubject call for assigning tree to subject.');

	var subjectId = this.createUid('subject');
	var subject = SubjectModel({
		id: subjectId,
		treeId: tree.getId()
	});

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

	privates$4.get(this, 'subjects').delete(subjectId);
	this.emit('subject.remove', subject);
	return subject;
}

function listSubjects() {
	var tree = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	var subjects = privates$4.get(this, 'subjects');
	if (tree === null) {
		return _Array$from(subjects.values());
	}
	var treeId = tree.getId();
	var result = [];
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _getIterator(subjects.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
//# sourceMappingURL=chief.browser.js.map