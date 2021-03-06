// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview Wrapper for goog.json using native implementation where
  available. Use compiler define to strip code for IE6/7.
  @namespace este.json
*/
goog.provide('este.json');
goog.require('goog.json');

/**
 @define {boolean} Whether native JSON is supported.
*/
goog.define('este.json.SUPPORTS_NATIVE_JSON', false);

/**
  @param {*} object The object to serialize.
  @return {string} A JSON string representation of the input.
*/
este.json.stringify = function(object) {
  if (este.json.nativeJsonIsSupported()) {
    return goog.global['JSON'].stringify(object);
  }
  return goog.json.serialize(object);
};

/**
  @param {string} str The JSON string to parse.
  @return {Object} The object generated from the JSON string.
*/
este.json.parse = function(str) {
  if (este.json.nativeJsonIsSupported()) {
    return goog.global['JSON'].parse(str);
  }
  return goog.json.parse(str);
};

/**
  @return {boolean}
*/
este.json.nativeJsonIsSupported = function() {
  return este.json.SUPPORTS_NATIVE_JSON || goog.global['JSON'];
};

/**
  @param {*} a
  @param {*} b
  @return {boolean}
*/
este.json.equal = function(a, b) {
  return este.json.stringify(a) === este.json.stringify(b);
};