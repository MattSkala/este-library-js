// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview Wrapper for submit event with fix for IE8.

  @see /demos/events/submithandler.html
*/
goog.provide('este.events.SubmitEvent');
goog.provide('este.events.SubmitHandler');
goog.provide('este.events.SubmitHandler.EventType');
goog.require('este.Base');
goog.require('este.dom');
goog.require('goog.events.BrowserEvent');
goog.require('goog.userAgent');

/**
  @param {Element|Document=} node
  @constructor
  @extends {este.Base}
*/
este.events.SubmitHandler = function(node) {
  var eventType;
  if (node == null) {
    node = document;
  }
  este.events.SubmitHandler.superClass_.constructor.call(this);
  eventType = goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9) ? 'focusin' : 'submit';
  this.on(node, eventType, this);
}
goog.inherits(este.events.SubmitHandler, este.Base);

/**
  @enum {string}
*/
este.events.SubmitHandler.EventType = {
  SUBMIT: 'submit'
};

/**
  @param {goog.events.BrowserEvent} e
  @protected
*/
este.events.SubmitHandler.prototype.handleEvent = function(e) {
  var form, json, submitEvent, target;
  target = /** @type {Element} */(e.target);
  if (e.type === 'focusin') {
    form = goog.dom.getAncestorByTagNameAndClass(target, 'form');
    if (form) {
      this.on(form, 'submit', this);
    }
    return;
  }
  e.preventDefault();
  json = este.dom.serializeForm(target);
  submitEvent = new este.events.SubmitEvent(json, e);
  return this.dispatchEvent(submitEvent);
};

/**
  @fileoverview este.events.SubmitEvent.
*/

/**
  @param {Object} json
  @param {goog.events.BrowserEvent} browserEvent
  @constructor
  @extends {goog.events.BrowserEvent}
*/
este.events.SubmitEvent = function(json, browserEvent) {
  this.json = json;
  este.events.SubmitEvent.superClass_.constructor.call(this, browserEvent);
}
goog.inherits(este.events.SubmitEvent, goog.events.BrowserEvent);

/**
  @type {Object}
*/
este.events.SubmitEvent.prototype.json = null;