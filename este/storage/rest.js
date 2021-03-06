// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview Rest JSON storage.
  @see /demos/storage/rest.html
*/
goog.provide('este.storage.Rest');
goog.require('este.json');
goog.require('este.storage.Base');
goog.require('goog.labs.net.xhr');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.uri.utils');

/**
  @param {string} namespace
  @param {string|number=} version
  @param {Object=} queryParams
  @constructor
  @extends {este.storage.Base}
*/
este.storage.Rest = function(namespace, version, queryParams) {
  este.storage.Rest.superClass_.constructor.call(this, namespace, version);
  this.namespace = namespace.replace(':version', this.version);
  this.queryParams = queryParams != null ? queryParams : null;
}
goog.inherits(este.storage.Rest, este.storage.Base);

/**
  @type {Object}
  @protected
*/
este.storage.Rest.prototype.queryParams = null;

/**
  @protected
*/
este.storage.Rest.prototype.xhrOptions = {
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
};

/**
  @override
*/
este.storage.Rest.prototype.addInternal = function(model, url) {
  var data, restUrl, result;
  restUrl = this.getRestUrl(url);
  data = model.toJson(true);
  data = este.json.stringify(data);
  result = goog.labs.net.xhr.postJson(restUrl, data, this.xhrOptions);
  return goog.result.transform(result, function(json) {
    model.set(json);
    return model;
  });
};

/**
  @override
*/
este.storage.Rest.prototype.loadInternal = function(model, url) {
  var id, restUrl, result;
  id = model.getId();
  restUrl = this.getRestUrl(url, id);
  result = goog.labs.net.xhr.getJson(restUrl, this.xhrOptions);
  return goog.result.transform(result, function(json) {
    model.set(json);
    return model;
  });
};

/**
  @override
  @suppress {accessControls} Workaround for addJsonParsingCallbacks_.
*/
este.storage.Rest.prototype.saveInternal = function(model, url) {
  var data, id, jsonResult, restUrl, result;
  id = model.getId();
  restUrl = this.getRestUrl(url, id);
  data = model.toJson(true);
  data = este.json.stringify(data);
  result = goog.labs.net.xhr.send('PUT', restUrl, data, this.xhrOptions);
  jsonResult = goog.labs.net.xhr.addJsonParsingCallbacks_(result, this.xhrOptions);
  return goog.result.transform(jsonResult, function(json) {
    model.set(json);
    return model;
  });
};

/**
  @override
*/
este.storage.Rest.prototype.removeInternal = function(model, url) {
  var id, restUrl, result;
  id = model.getId();
  restUrl = this.getRestUrl(url, id);
  result = goog.labs.net.xhr.send('DELETE', restUrl, null, this.xhrOptions);
  return goog.result.transform(result, function() {
    return model;
  });
};

/**
  @override
*/
este.storage.Rest.prototype.queryInternal = function(collection, url, params) {
  var restUrl, result;
  restUrl = this.getRestUrl(url);
  if (params) {
    restUrl = goog.uri.utils.appendParamsFromMap(restUrl, params);
  }
  result = goog.labs.net.xhr.getJson(restUrl, this.xhrOptions);
  return goog.result.transform(result, function(json) {
    collection.reset(json);
    return collection;
  });
};

/**
  @param {string} url
  @param {string=} id
  @protected
*/
este.storage.Rest.prototype.getRestUrl = function(url, id) {
  var restUrl;
  restUrl = goog.uri.utils.appendPath(this.namespace, url);
  if (id) {
    restUrl = goog.uri.utils.appendPath(restUrl, id);
  }
  if (this.queryParams) {
    restUrl = goog.uri.utils.appendParamsFromMap(restUrl, this.queryParams);
  }
  return restUrl;
};

/**
  @param {goog.result.Result} result
  @return {XMLHttpRequest}
*/
este.storage.Rest.prototype.getXhrFromResult = function(result) {
  var results, value;
  while (true) {
    results = result.getParentResults();
    if (!results || !results.length) {
      return null;
    }
    result = results[0];
    value = result.getValue();
    if (value instanceof XMLHttpRequest) {
      return value;
    }
  }
};