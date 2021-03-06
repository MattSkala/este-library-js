// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview este.demos.app.simple.products.list.Presenter.
*/
goog.provide('este.demos.app.simple.products.list.Presenter');
goog.require('este.app.Presenter');
goog.require('este.demos.app.simple.products.Collection');
goog.require('este.demos.app.simple.products.list.View');

/**
  @constructor
  @extends {este.app.Presenter}
*/
este.demos.app.simple.products.list.Presenter = function() {
  este.demos.app.simple.products.list.Presenter.superClass_.constructor.call(this);
  this.view = new este.demos.app.simple.products.list.View;
}
goog.inherits(este.demos.app.simple.products.list.Presenter, este.app.Presenter);

/**
  @override
*/
este.demos.app.simple.products.list.Presenter.prototype.load = function(params) {
  var result,
    _this = this;
  window['console']['log']('loading products index');
  result = new goog.result.SimpleResult;
  setTimeout(function() {
    var products;
    products = new este.demos.app.simple.products.Collection([
      {
        'id': 0,
        'name': 'products/0',
        'description': 'slow loading, 6s'
      }, {
        'id': 1,
        'name': 'products/1',
        'description': '2s loading'
      }, {
        'id': 2,
        'name': 'products/2',
        'description': '2s loading'
      }
    ]);
    return result.setValue(products);
  }, 1000);
  return result;
};

/**
  @override
*/
este.demos.app.simple.products.list.Presenter.prototype.show = function(result) {
  this.view.products = /** @type {este.demos.app.simple.products.Collection} */(result.getValue());
};