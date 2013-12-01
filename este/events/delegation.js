// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview Simple and useful event delegation. This is special low level
  component. For general usage este.ui.Component is preferred.

  @see /demos/events/delegation.html
*/
goog.provide('este.events.Delegation');
goog.provide('este.events.Delegation.create');
goog.require('este.Base');
goog.require('goog.dom');
goog.require('goog.userAgent');

/**
  @param {Element} element
  @param {Array.<string>|string} types
  @param {boolean=} forceIE
  @constructor
  @extends {este.Base}
*/
este.events.Delegation = function(element, types, forceIE) {
  var isIe, type, _i, _len;
  this.element = element;
  if (typeof types === 'string') {
    types = [types];
  }
  for (_i = 0, _len = types.length; _i < _len; _i++) {
    type = types[_i];
    if (type === 'focus' || type === 'blur') {
      isIe = forceIE || goog.userAgent.IE;
      if (isIe) {
        if (type === 'focus') {
          type = 'focusin';
        }
        if (type === 'blur') {
          type = 'focusout';
        }
      }
      this.on(this.element, type, this.onElementType, !isIe);
    } else {
      this.on(this.element, type, this.onElementType);
    }
  }
  este.events.Delegation.superClass_.constructor.call(this);
}
goog.inherits(este.events.Delegation, este.Base);

/**
  @param {Element} element
  @param {Array.<string>|string} eventTypes
  @param {function(Node): boolean=} targetFilter
  @param {function(Node): boolean=} targetParentFilter
  @return {este.events.Delegation}
*/
este.events.Delegation.create = function(element, eventTypes, targetFilter, targetParentFilter) {
  var delegation;
  delegation = new este.events.Delegation(element, eventTypes);
  if (targetFilter) {
    delegation.targetFilter = targetFilter;
  }
  if (targetParentFilter) {
    delegation.targetParentFilter = targetParentFilter;
  }
  return delegation;
};

/**
  @type {Element}
  @protected
*/
este.events.Delegation.prototype.element = null;

/**
  @type {function(Node): boolean}
*/
este.events.Delegation.prototype.targetFilter = function(node) {
  return true;
};

/**
  @type {function(Node): boolean}
*/
este.events.Delegation.prototype.targetParentFilter = function(node) {
  return true;
};

/**
  @param {goog.events.BrowserEvent} e
  @protected
*/
este.events.Delegation.prototype.onElementType = function(e) {
  if (!this.matchFilter(e)) {
    return;
  }
  return this.dispatchEvent(e);
};

/**
  @param {goog.events.BrowserEvent} e
  @return {boolean} True for match
  @protected
*/
este.events.Delegation.prototype.matchFilter = function(e) {
  var element, target, targetMatched, targetParentMatched, _ref;
  targetMatched = false;
  targetParentMatched = null;
  element = e.target;
  target = null;
  while (goog.dom.isElement(element)) {
    if (!targetMatched) {
      targetMatched = this.targetFilter(element);
      target = element;
    } else if (!targetParentMatched) {
      targetParentMatched = this.targetParentFilter(element);
    } else {
      break;
    }
    element = element.parentNode;
  }
  if (!targetMatched || targetParentMatched === false) {
    return false;
  }
  e.target = target;
  if ((_ref = e.type) === 'mouseover' || _ref === 'mouseout') {
    return !e.relatedTarget || !goog.dom.contains(target, e.relatedTarget);
  }
  return true;
};