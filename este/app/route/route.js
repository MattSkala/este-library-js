// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview este.app.Route.
*/
goog.provide('este.app.Route');
goog.require('este.Base');

/**
  @param {string} path
  @param {este.app.Presenter} presenter
  @constructor
  @extends {este.Base}
*/
este.app.Route = function(path, presenter) {
  this.path = path;
  this.presenter = presenter;
  este.app.Route.superClass_.constructor.call(this);
}
goog.inherits(este.app.Route, este.Base);

/**
  Path has to start with '/' prefix. If HTML5 pustState is not supported,
  then url will be prefixed with hash ('#/').
  Various url definitions: este/router/route_test.coffee
  @type {string}
*/
este.app.Route.prototype.path = '';

/**
  @type {este.app.Presenter}
*/
este.app.Route.prototype.presenter = null;

/**
  @override
*/
este.app.Route.prototype.disposeInternal = function() {
  this.presenter.dispose();
  este.app.Route.superClass_.disposeInternal.call(this);
};