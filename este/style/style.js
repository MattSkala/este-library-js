// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview Style utils.
  @namespace este.style
*/
goog.provide('este.style');
goog.require('goog.style');
goog.require('este.dom');
goog.require('goog.editor.style');
goog.require('goog.array');

/**
  @param {Element} element
  @param {string} stylePropertyName
  @return {string}
*/
este.style.getComputedStyle = function(element, stylePropertyName) {
  element = /** @type {Element} */(element);
  if (goog.userAgent.IE) {
    return goog.style.getCascadedStyle(element, stylePropertyName);
  } else {
    return goog.style.getComputedStyle(element, stylePropertyName);
  }
};

/**
  @param {Element} element
  @return {boolean}
*/
este.style.isVisible = function(element) {
  var ancestors;
  ancestors = este.dom.getAncestors(element);
  return goog.array.every(ancestors, function(el) {
    return goog.dom.isElement(el) && este.style.getComputedStyle(el, 'display') !== 'none';
  });
};