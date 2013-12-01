// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

goog.provide('este.demos.app.simple.products.detail.templates');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
este.demos.app.simple.products.detail.templates.element = function(opt_data, opt_ignored) {
  return '<h3>Product/' + soy.$$escapeHtml(opt_data.id) + ' rendered</h3><h4>Redirection without link demo</h4><p>You should always use links for redirection, this example shows how to perform redirect from code.</p><button>redirect to products</button>';
};
