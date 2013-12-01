// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

goog.provide('este.demos.app.simple.products.list.templates');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
este.demos.app.simple.products.list.templates.element = function(opt_data, opt_ignored) {
  return '<h3>List of Products</h3>' + este.demos.app.simple.products.list.templates.links(opt_data) + '<p>This timeouted <a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.timeoutHref)) + '">link</a> needs 12 sec to load, therefore timeout event is dispatched.<br>Error <a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.errorHref)) + '">link</a> causes error, therefore error event is dispatched.</p>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
este.demos.app.simple.products.list.templates.links = function(opt_data, opt_ignored) {
  var output = '<ul>';
  var linkList39 = opt_data.links;
  var linkListLen39 = linkList39.length;
  for (var linkIndex39 = 0; linkIndex39 < linkListLen39; linkIndex39++) {
    var linkData39 = linkList39[linkIndex39];
    output += '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData39['href'])) + '">' + soy.$$escapeHtml(linkData39['name']) + '</a>&nbsp; (' + soy.$$escapeHtml(linkData39['description']) + ')</li>';
  }
  output += '</ul>';
  return output;
};
