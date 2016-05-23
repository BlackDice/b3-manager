'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var stampit = _interopDefault(require('stampit'));
var warning = _interopDefault(require('warning'));
var _isString = _interopDefault(require('lodash.isstring'));
var _isObject = _interopDefault(require('lodash.isobject'));
var _isFunction = _interopDefault(require('lodash.isfunction'));
var invariant = _interopDefault(require('invariant'));
var uid = _interopDefault(require('uid'));
var enumify = require('enumify');
var debug = _interopDefault(require('debug'));
var events = require('events');
var _upperFirst = _interopDefault(require('lodash.upperfirst'));

const SUCCESS = 1;
const FAILURE = 2;
const RUNNING = 3;
const ERROR = 4;
const COMPOSITE = 'composite';
const DECORATOR = 'decorator';
const ACTION = 'action';

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

const defaultUidLength = 12;

const Uid = stampit.methods({
	createUid() {
		let length = arguments.length <= 0 || arguments[0] === undefined ? defaultUidLength : arguments[0];

		return uid(length);
	}
});

const Private = stampit().init((options, _ref) => {
	let instance = _ref.instance;

	instance.map = new WeakMap();
}).methods({
	init(owner) {
		const ownerMap = new Map();
		this.map.set(owner, ownerMap);
		return ownerMap;
	},
	for(owner) {
		return this.map.get(owner);
	},
	get(owner, key) {
		return this.for(owner).get(key);
	},
	set(owner, key, value) {
		this.for(owner).set(key, value);
	}
});

const Behavior = stampit({
	initializers: [initializeNodeMap],
	methods: {
		registerBehaviorNode, createBehaviorNode,
		createBehaviorTree
	}
}).compose(Uid);

const privates$1 = Private.create();

function initializeNodeMap() {
	privates$1.init(this);
	privates$1.set(this, 'nodes', new Map());

	const standardNodes = Object.values(Object.assign({}, Decorators, Composites, Actions));
	standardNodes.forEach(this.registerBehaviorNode, this);
}

function registerBehaviorNode(nodeClass) {
	invariant(_isFunction(nodeClass), 'The registerNode() method has to be called with constructor function of node class.');

	invariant(nodeClass.prototype && _isFunction(nodeClass.prototype.tick), 'Node class passed to registerNode() is missing the mandatory tick method on its prototype.' + // eslint-disable-line max-len
	'Either use B3.Class(B3.BaseNode, {}) or define your own class with such method.');

	const nodeName = nodeClass.prototype.name;

	invariant(_isString(nodeName) && nodeName.length, 'Passed node class %s to registerNode() call needs to have a unique string name specified.', nodeClass // eslint-disable-line max-len
	);

	const nodes = privates$1.get(this, 'nodes');

	invariant(!nodes.has(nodeName), 'The name of node has to be unique. There is already node `%s` registered.', nodeName);

	nodes.set(nodeName, nodeClass);
}

function createBehaviorNode(nodeName) {
	let properties = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	invariant(_isString(nodeName), 'Called createBehaviorNode() without name of node to create.' + 'Name is expected to be a non-empty string.');

	const nodeClass = privates$1.get(this, 'nodes').get(nodeName);
	if (nodeClass === undefined) {
		return null;
	}

	const behaviorNode = Reflect.construct(nodeClass, []);
	behaviorNode.id = `${ nodeName }-${ this.createUid() }`;

	if (_isObject(properties) && _isObject(behaviorNode.properties)) {
		Object.assign(behaviorNode.properties, properties);
	}

	return behaviorNode;
}

function createBehaviorTree(id) {
	const behaviorTree = new BehaviorTree();
	if (_isString(id) && id.length) {
		behaviorTree.id = id;
	}
	return behaviorTree;
}

const Logger = stampit.methods({
	debug(category) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		debug(`b3:chief:${ category }`)(...args);
	}
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const Persist = stampit({
	initializers: initializer,
	methods: { persist, retrieve, destroy }
}).compose(Logger);

function initializer() {
	var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	let adapter = _ref2.adapter;
	let _ref = arguments[1];
	let instance = _ref.instance;

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

let PersistType = function (_Enum) {
	_inherits(TYPE, _Enum);

	function TYPE() {
		_classCallCheck(this, TYPE);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(TYPE).apply(this, arguments));
	}

	return TYPE;
}(enumify.Enum);
PersistType.initEnum(['TREE', 'SUBJECT']);

const EventEmittable = stampit({
	initializers: function initEventEmitter() {
		Reflect.apply(events.EventEmitter, this, []);
	},
	methods: ['emit', 'on', 'once', 'removeListener'].reduce((methods, methodName) => {
		methods[methodName] = events.EventEmitter.prototype[methodName];
		return methods;
	}, {})
});

const ModelPrivate = Private.methods({
	getProperty(owner, propertyName) {
		return this.get(owner, 'props')[propertyName];
	},
	setProperty(owner, propertyName, propertyValue) {
		const props = this.get(owner, 'props');
		props[propertyName] = propertyValue;
	}
});

function Model(modelName) {
	let privates = arguments.length <= 1 || arguments[1] === undefined ? ModelPrivate.create() : arguments[1];


	function initializeModelPrivateArea() {
		privates.init(this);
		privates.set(this, 'props', {});
	}

	const getter = setupPropertyAccessor(privates, true);
	const property = setupPropertyAccessor(privates);

	function valueOf() {
		return Object.assign({}, privates.get(this, 'props'));
	}

	const properties = {
		get() {
			return Object.keys(privates.get(this, 'props'));
		}
	};

	function toString() {
		return `model of ${ modelName }`;
	}

	function getModelName() {
		return modelName;
	}

	return stampit.compose(EventEmittable, {
		initializers: [initializeModelPrivateArea],
		methods: { getModelName, toString, valueOf },
		staticProperties: { getter, property },
		staticPropertyDescriptors: { properties }
	});
}

function setupPropertyAccessor(privates) {
	let readonly = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	return function accessProperty(propertyName) {
		let defaultValue = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


		const methodSuffix = _upperFirst(propertyName);
		const methods = {};

		methods[`get${ methodSuffix }`] = function getPropertyValue() {
			return privates.getProperty(this, propertyName);
		};

		function setPropertyValue(newValue) {
			const oldValue = privates.getProperty(this, propertyName);
			privates.setProperty(this, propertyName, newValue);
			this.emit('change', propertyName, newValue, oldValue);
		}

		if (readonly !== true) {
			methods[`set${ methodSuffix }`] = setPropertyValue;
		}

		function initializePropertyValue(data) {
			if (data && data.hasOwnProperty(propertyName)) {
				privates.setProperty(this, propertyName, data[propertyName]);
			} else if (_isFunction(defaultValue)) {
				const obtainedValue = Reflect.apply(defaultValue, this, [data]);
				privates.setProperty(this, propertyName, obtainedValue);
			}
		}

		return this.compose({
			deepConfiguration: { properties: [propertyName] },
			methods, initializers: [initializePropertyValue]
		});
	};
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const privates$3 = ModelPrivate.create();

const NodeModel = Model('Node', privates$3).getter('id').getter('treeId').getter('name').getter('title').getter('description').getter('behaviorNode').methods({ getProperties }).init(initializeNodeModel);

function initializeNodeModel(_ref) {
	let behaviorNode = _ref.behaviorNode;

	privates$3.setProperty(this, 'behaviorNode', behaviorNode);
}

function getProperties() {
	return _extends({}, this.getBehaviorNode().properties);
}

const privates$2 = ModelPrivate.create();

const TreeModel = Model('Tree', privates$2).getter('id').getter('rootNode').getter('behaviorTree').property('name', 'New tree').property('description').methods({
	addNode, changeRootNode,
	listNodes, toString
}).init(initializeTreeModel, initializeRootNode);

function initializeTreeModel(_ref) {
	let createNode = _ref.createNode;

	privates$2.set(this, 'createNode', createNode);
	privates$2.set(this, 'nodes', new Set());
}

function initializeRootNode(_ref2) {
	let rootNodeName = _ref2.rootNodeName;
	let rootNodeProperties = _ref2.rootNodeProperties;

	this.changeRootNode(rootNodeName, rootNodeProperties);
}

function addNode(nodeName, nodeProperties) {
	const createNode = privates$2.get(this, 'createNode');
	const behaviorNode = createNode(nodeName, nodeProperties);
	const nodeModel = buildNodeModel(behaviorNode, this.getId());
	privates$2.get(this, 'nodes').add(nodeModel);
	return nodeModel;
}

function changeRootNode(nodeName, nodeProperties) {
	const nodes = privates$2.get(this, 'nodes');
	const createNode = privates$2.get(this, 'createNode');

	const currentRootNode = this.getRootNode();
	nodes.delete(currentRootNode);

	const behaviorRootNode = createNode(nodeName, nodeProperties);
	this.getBehaviorTree().root = behaviorRootNode;

	const newRootNode = buildNodeModel(behaviorRootNode, this.getId());
	nodes.add(newRootNode);
	privates$2.setProperty(this, 'rootNode', newRootNode);

	return newRootNode;
}

function listNodes() {
	return Array.from(privates$2.get(this, 'nodes').values());
}

function buildNodeModel(behaviorNode, treeId) {
	return NodeModel.create({
		behaviorNode, treeId,
		id: behaviorNode.id,
		name: behaviorNode.name,
		title: behaviorNode.title,
		description: behaviorNode.description
	});
}

function toString() {
	return `${ this.getName() || 'Tree' } [${ this.getId() }]`;
}

const TreeList = stampit({
	initializers: [initializeTreeMap],
	methods: {
		createTree, removeTree,
		getTree, listTrees
	}
}).compose(Behavior, Uid, EventEmittable, Persist);

const privates = Private.create();

function initializeTreeMap() {
	var _this = this;

	privates.init(this);
	privates.set(this, 'trees', new Map());
	privates.set(this, 'createNode', function () {
		return _this.createBehaviorNode(...arguments);
	});
}

function createTree(rootNodeName, rootNodeProperties) {

	const treeId = `tree-${ rootNodeName }-${ this.createUid() }`;
	const behaviorTree = this.createBehaviorTree(treeId);

	const tree = TreeModel({
		id: treeId, behaviorTree,
		rootNodeName, rootNodeProperties,
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
	const tree = privates.get(this, 'trees').get(treeId);
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

const SubjectModel = Model('Subject').getter('id').property('treeId');

const SubjectList = stampit({
	initializers: initializeData,
	methods: {
		addSubject, removeSubject,
		getSubject, listSubjects
	}
}).compose(Uid, EventEmittable, Persist);

const privates$4 = Private.create();

function initializeData() {
	privates$4.init(this);
	privates$4.set(this, 'subjects', new Map());
}

function addSubject(tree) {
	invariant(tree, 'The tree model expected for addSubject call for assigning tree to subject.');

	const subjectId = this.createUid();
	const subject = SubjectModel({
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
	const subject = privates$4.get(this, 'subjects').get(subjectId);
	warning(subject, 'Trying to remove subject with ID `%s` that no longer exists.', subjectId);

	this.destroy(PersistType.SUBJECT, subjectId);
	privates$4.get(this, 'subjects').delete(subjectId);
	this.emit('subject.remove', subject);
	return subject;
}

function listSubjects() {
	let tree = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	const subjects = privates$4.get(this, 'subjects');
	if (tree === null) {
		return Array.from(subjects.values());
	}
	const treeId = tree.getId();
	const result = [];
	for (const subject of subjects.values()) {
		if (subject.getTreeId() === treeId) {
			result.push(subject);
		}
	}
	return result;
}

const Chief = stampit.compose(TreeList, SubjectList);

module.exports = Chief;
//# sourceMappingURL=main.js.map