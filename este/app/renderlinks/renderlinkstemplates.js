// This file was automatically generated from renderlinkstemplates.soy.
// Please don't edit this file by hand.

goog.provide('este.app.renderlinks.templates');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
este.app.renderlinks.templates.links = function(opt_data, opt_ignored) {
  var output = '';
  var linkList3 = opt_data.links;
  var linkListLen3 = linkList3.length;
  for (var linkIndex3 = 0; linkIndex3 < linkListLen3; linkIndex3++) {
    var linkData3 = linkList3[linkIndex3];
    output += '<a ' + ((linkData3.selected) ? 'class="este-selected"' : '') + ' href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(linkData3.href)) + '">' + soy.$$escapeHtml(linkData3.title) + '</a> ';
  }
  return output;
};
