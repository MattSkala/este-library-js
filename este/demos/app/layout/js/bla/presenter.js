// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview este.demos.app.layout.bla.Presenter.
*/
goog.provide('este.demos.app.layout.bla.Presenter');
goog.require('este.app.Presenter');
goog.require('este.demos.app.layout.bla.View');
goog.require('este.demos.app.layout.layouts.sidebar.View');

/**
  @constructor
  @extends {este.app.Presenter}
*/
este.demos.app.layout.bla.Presenter = function() {
  este.demos.app.layout.bla.Presenter.superClass_.constructor.call(this);
  this.view = new este.demos.app.layout.layouts.sidebar.View({
    content: new este.demos.app.layout.bla.View
  });
}
goog.inherits(este.demos.app.layout.bla.Presenter, este.app.Presenter);