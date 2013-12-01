// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

goog.provide('este.demos.mvc.closureTemplates.templates');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
este.demos.mvc.closureTemplates.templates.element = function(opt_data, opt_ignored) {
  var output = '';
  /** @desc este.demos.mvc.closureTemplates.templates placeholder. */
  var MSG_UNNAMED_110 = goog.getMsg('What to do?');
  /** @desc este.demos.mvc.closureTemplates.templates add button text. */
  var MSG_UNNAMED_112 = goog.getMsg('add');
  output += '<form class="new-todo"><input name="title" autofocus placeholder="' + MSG_UNNAMED_110 + '"><button>' + MSG_UNNAMED_112 + '</button></form><ul>';
  var todoList58 = opt_data.todos;
  var todoListLen58 = todoList58.length;
  for (var todoIndex58 = 0; todoIndex58 < todoListLen58; todoIndex58++) {
    var todoData58 = todoList58[todoIndex58];
    output += '<li>' + soy.$$escapeHtml(todoData58['title']) + '</li>';
  }
  output += '</ul>';
  return output;
};
