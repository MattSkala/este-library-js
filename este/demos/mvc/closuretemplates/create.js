// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview Factory for este.demos.mvc.closureTemplates.Component.
*/
goog.provide('este.demos.mvc.closureTemplates.create');
goog.require('este.demos.mvc.closureTemplates.Collection');
goog.require('este.demos.mvc.closureTemplates.Component');

/**
  @param {string} selector
  @return {este.demos.mvc.closureTemplates.Component}
*/
este.demos.mvc.closureTemplates.create = function(selector) {
  var component, element, todos;
  todos = new este.demos.mvc.closureTemplates.Collection;
  component = new este.demos.mvc.closureTemplates.Component(todos);
  element = document.querySelector(selector);
  component.render(element);
  return component;
};