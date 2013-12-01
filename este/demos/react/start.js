// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview Demo for Facebook React in Este.
*/
goog.provide('este.demos.react.start');
goog.require('este.demos.react.todoApp');
goog.require('este.react');

/**
  @param {string} selector
*/
este.demos.react.start = function(selector) {
  var parentElement, todoApp;
  todoApp = este.demos.react.todoApp();
  parentElement = document.querySelector(selector);
  return este.react.render(todoApp, parentElement);
};
goog.exportSymbol('este.demos.react.start', este.demos.react.start);