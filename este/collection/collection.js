// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview Collection. Sorting & Filtering included.
  @see /demos/model/collection.html
*/
goog.provide('este.Collection');
goog.require('este.Base');
goog.require('este.Model');
goog.require('goog.array');

/**
  @param {Array.<Object>=} array
  @constructor
  @extends {este.Base}
*/
este.Collection = function(array) {
  este.Collection.superClass_.constructor.call(this);
  this.ids = {};
  this.array = [];
  if (array) {
    this.add(array);
  }
  return;
}
goog.inherits(este.Collection, este.Base);

/**
  http://www.restapitutorial.com/lessons/restfulresourcenaming.html
  Url has to start with '/'. Function type is usefull for inheritance.
  If empty, model.url is used.
  @type {string|function(): string}
  @protected
*/
este.Collection.prototype.url = '';

/**
  @type {Object.<string, boolean>}
  @protected
*/
este.Collection.prototype.ids = null;

/**
  @type {Array.<Object>}
  @protected
*/
este.Collection.prototype.array = null;

/**
  @type {function(new:este.Model, Object=)}
  @protected
*/
este.Collection.prototype.model = este.Model;

/**
  @type {Function}
  @protected
*/
este.Collection.prototype.sortBy = null;

/**
  @type {Function}
  @protected
*/
este.Collection.prototype.sortCompare = goog.array.defaultCompare;

/**
  @type {boolean}
  @protected
*/
este.Collection.prototype.sortReversed = false;

/**
  @return {string}
*/
este.Collection.prototype.getUrl = function() {
  var url;
  url = this.url || this.model.prototype.url;
  if (goog.isFunction(url)) {
    url = url();
  }
  return url;
};

/**
  @param {Array.<Object|este.Model>|Object|este.Model} arg
  @return {boolean} True if any element were added.
*/
este.Collection.prototype.add = function(arg) {
  var added, array, item, _i, _len;
  array = goog.isArray(arg) ? arg : [arg];
  added = [];
  for (_i = 0, _len = array.length; _i < _len; _i++) {
    item = array[_i];
    if (!(item instanceof this.model)) {
      item = new this.model(item);
    }
    this.ensureUnique(item);
    if (item instanceof este.Base) {
      item.addParent(this);
    }
    added.push(item);
  }
  if (!added.length) {
    return false;
  }
  this.array.push.apply(this.array, added);
  this.sortInternal();
  this.dispatchAddEvent(added);
  return true;
};

/**
  @param {Array.<este.Model>|este.Model} arg
  @return {boolean} True if any element were removed.
*/
este.Collection.prototype.remove = function(arg) {
  var array, item, removed, _i, _len;
  array = goog.isArray(arg) ? arg : [arg];
  removed = [];
  for (_i = 0, _len = array.length; _i < _len; _i++) {
    item = array[_i];
    this.removeUnique(item);
    if (item instanceof este.Base) {
      item.removeParent(this);
    }
    if (goog.array.remove(this.array, item)) {
      removed.push(item);
    }
  }
  if (!removed.length) {
    return false;
  }
  this.dispatchRemoveEvent(removed);
  return true;
};

/**
  Replace whole collection.
  @param {Array.<Object|este.Model>|Object|este.Model} arg
  @return {boolean} True if any element were added.
*/
este.Collection.prototype.reset = function(arg) {
  this.clear();
  return this.add(arg);
};

/**
  Clear collection.
*/
este.Collection.prototype.clear = function() {
  return this.remove(this.array.slice(0));
};

/**
  @param {Function} callback
*/
este.Collection.prototype.removeIf = function(callback) {
  var toRemove;
  toRemove = goog.array.filter(this.array, callback);
  return this.remove(toRemove);
};

/**
  @param {este.Model} model
  @return {boolean}
*/
este.Collection.prototype.contains = function(model) {
  return goog.array.contains(this.array, model);
};

/**
  @param {number} index
  @return {este.Model}
*/
este.Collection.prototype.at = function(index) {
  var model;
  model = this.array[index];
  return /** @type {este.Model} */(model);
};

/**
  @return {number}
*/
este.Collection.prototype.getLength = function() {
  return this.array.length;
};

/**
  @return {Array.<este.Model>}
*/
este.Collection.prototype.toArray = function() {
  return this.array;
};

/**
  Serialize into JSON.
  @param {boolean=} raw If true, _cid, metas, and getters are ignored.
  @return {Array.<Object>}
*/
este.Collection.prototype.toJson = function(raw) {
  var item, _i, _len, _ref, _results;
  _ref = this.array;
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    item = _ref[_i];
    _results.push(item.toJson(raw));
  }
  return _results;
};

/**
  Find item.
  @param {Function} fn
  @return {este.Model}
*/
este.Collection.prototype.find = function(fn) {
  var model;
  model = goog.array.find(this.array, fn);
  return /** @type {este.Model} */(model);
};

/**
  Find item by Id.
  @param {string|number} id
  @return {este.Model}
*/
este.Collection.prototype.findById = function(id) {
  var _this = this;
  return this.find(function(item) {
    return id.toString() === item.getId();
  });
};

/**
  Find item by client id.
  @param {string|number} id
  @return {este.Model}
*/
este.Collection.prototype.findByClientId = function(id) {
  var _this = this;
  return this.find(function(item) {
    return id === item.get('_cid');
  });
};

/**
  @param {{
    by: (Function|undefined),
    compare: (Function|undefined),
    reversed: (boolean|undefined)
  }=} options
*/
este.Collection.prototype.sort = function(options) {
  if (options) {
    if (options.by != null) {
      this.sortBy = options.by;
    }
    if (options.compare != null) {
      this.sortCompare = options.compare;
    }
    if (options.reversed != null) {
      this.sortReversed = options.reversed;
    }
  }
  this.sortInternal();
  this.dispatchSortEvent();
};

/**
  @return {function(new:este.Model)}
*/
este.Collection.prototype.getModel = function() {
  return this.model;
};

/**
  Returns array of serialized models. Why array and not este.Collection?
  Because it would be costly. Every collection registers child model events.
  @param {Function|Object} filter
  @param {boolean=} raw
  @return {Array.<Object>}
*/
este.Collection.prototype.filter = function(filter, raw) {
  var filtered, item, _i, _len, _ref;
  if (raw == null) {
    raw = false;
  }
  if (typeof filter === 'function') {
    filtered = [];
    _ref = this.array;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      item = _ref[_i];
      if (filter(item)) {
        filtered.push(item.toJson(raw));
      }
    }
    return filtered;
  }
  return this.filter(function(item) {
    var key, value;
    for (key in filter) {
      value = filter[key];
      if (item.get(key) !== value) {
        return false;
      }
    }
    return true;
  }, raw);
};

/**
  Calls a function for each element in an collection.
  @param {Function} fn
*/
este.Collection.prototype.each = function(fn) {
  goog.array.forEach(this.array, fn);
};

/**
  @return {Array.<este.validators.Base>}
*/
este.Collection.prototype.validate = function() {
  var allErrors;
  allErrors = [];
  this.each(function(item) {
    var errors;
    if (!item || !goog.isFunction(item.validate)) {
      return;
    }
    errors = item.validate();
    if (!errors) {
      return;
    }
    return allErrors.push.apply(allErrors, errors);
  });
  if (allErrors.length) {
    return allErrors;
  }
  return null;
};

/**
  @param {Array} added
  @protected
*/
este.Collection.prototype.dispatchAddEvent = function(added) {
  var addEvent;
  addEvent = new este.Model.Event(este.Model.EventType.ADD, this);
  addEvent.added = added;
  return this.dispatchCollectionEvent(addEvent);
};

/**
  @param {Array} removed
  @protected
*/
este.Collection.prototype.dispatchRemoveEvent = function(removed) {
  var removeEvent;
  removeEvent = new este.Model.Event(este.Model.EventType.REMOVE, this);
  removeEvent.removed = removed;
  return this.dispatchCollectionEvent(removeEvent);
};

/**
  @protected
*/
este.Collection.prototype.dispatchSortEvent = function() {
  var sortEvent;
  sortEvent = new este.Model.Event(este.Model.EventType.SORT, this);
  return this.dispatchCollectionEvent(sortEvent);
};

/**
  @param {este.Model.Event} e
  @protected
*/
este.Collection.prototype.dispatchCollectionEvent = function(e) {
  var updateEvent;
  this.dispatchEvent(e);
  updateEvent = new este.Model.Event(este.Model.EventType.UPDATE, this);
  updateEvent.origin = e;
  return this.dispatchEvent(updateEvent);
};

/**
  @protected
*/
este.Collection.prototype.sortInternal = function() {
  var _this = this;
  if (!this.sortBy || !this.sortCompare) {
    return;
  }
  this.array.sort(function(a, b) {
    a = _this.sortBy(a);
    b = _this.sortBy(b);
    return _this.sortCompare(a, b);
  });
  if (this.sortReversed) {
    this.array.reverse();
  }
};

/**
  Ensure only just one model in collection.
  @param {este.Model} model
  @protected
*/
este.Collection.prototype.ensureUnique = function(model) {
  var id;
  id = model.getId() || model.get('_cid');
  if (this.ids['$' + id]) {
    goog.asserts.fail("Not allowed to add two models with the same id: " + id);
  }
  return this.ids['$' + id] = true;
};

/**
  Remove unique id.
  @param {este.Model} model
  @protected
*/
este.Collection.prototype.removeUnique = function(model) {
  var id;
  id = model.getId() || model.get('_cid');
  return delete this.ids['$' + id];
};

/**
  @override
*/
este.Collection.prototype.disposeInternal = function() {
  this.clear();
  este.Collection.superClass_.disposeInternal.call(this);
};