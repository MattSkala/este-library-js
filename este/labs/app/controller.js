// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview este.labs.app.Controller.
*/
goog.provide('este.labs.app.Controller');
goog.require('este.labs.app.Route');
goog.require('goog.labs.Promise');
goog.require('este.react');

/**
  @constructor
*/
este.labs.app.Controller = function() {}

/**
  @type {string}
*/
este.labs.app.Controller.prototype.route = '/';

/**
  @type {function(): React.ReactComponent}
*/
este.labs.app.Controller.prototype.reactClass = este.react.create(/** @lends {React.ReactComponent.prototype} */({
  render: function() {
    return this.pre(goog.DEBUG && "Warning: Missing React component.\n\n###*\n  @constructor\n  @extends {este.labs.app.Controller}\n###\nconstructor: ->\n  @route = '/'\n\n  # Define your React component here.\n  @reactClass = app.home.react.Index");
  }
}));

/**
  @type {React.ReactComponent}
*/
este.labs.app.Controller.prototype.react = null;

/**
  @type {Object.<string, Function>}
*/
este.labs.app.Controller.prototype.handlers = null;

/**
  @param {Object} params
*/
este.labs.app.Controller.prototype.load = function(params) {
  return goog.labs.Promise.resolve(params);
};

/**
  @param {(Object|Array)} params
  @return {string}
*/
este.labs.app.Controller.prototype.createUrl = function(params) {
  return new este.labs.app.Route(this.route).createUrl(params);
};

/**
  @param {(Object|Array)} params
  @return {string}
*/
este.labs.app.Controller.prototype.redirect = function(params) {};