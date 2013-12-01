// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

goog.provide('este.ui.lightbox.templates');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
este.ui.lightbox.templates.view = function(opt_data, opt_ignored) {
  var output = '';
  /** @desc Este Lightbox previous button text */
  var MSG_UNNAMED_114 = goog.getMsg('previous');
  /** @desc Este Lightbox next button text */
  var MSG_UNNAMED_116 = goog.getMsg('next');
  /** @desc Este Lightbox close button text */
  var MSG_UNNAMED_118 = goog.getMsg('close');
  output += '<div class="e-ui-lightbox-background"></div><div class="e-ui-lightbox-image-wrapper"><img class="e-ui-lightbox-image" src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.src)) + '"></div><div class="e-ui-lightbox-sidebar"><div class="e-ui-lightbox-title">' + soy.$$escapeHtml(opt_data.title) + ' ' + soy.$$escapeHtml(opt_data.idx + 1) + '/' + soy.$$escapeHtml(opt_data.total) + '</div><button class="e-ui-lightbox-previous ' + ((opt_data.idx == 0) ? 'e-ui-lightbox-disabled' : '') + '">' + MSG_UNNAMED_114 + '</button><button class="e-ui-lightbox-next ' + ((opt_data.idx == opt_data.total - 1) ? 'e-ui-lightbox-disabled' : '') + '">' + MSG_UNNAMED_116 + '</button><button class="e-ui-lightbox-close">' + MSG_UNNAMED_118 + '</button></div>';
  return output;
};
