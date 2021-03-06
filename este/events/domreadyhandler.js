// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview DomReady ported from jQuery. Manually tested.

  Warning: DomReady is antipattern and you should use only in case, when you
  don't have access to page HTML, for example when you write third party code.
  In any other case, use script called before BODY element closing tag. There
  is one exception. If your SPA renders UI from start, and you want to prevent
  app blinking on app start, put app start() method directly in HEAD element
  right after app styles.
  @see /demos/events/domreadyhandler.html
*/
goog.provide('este.events.domReady');
goog.provide('este.events.DomReadyHandler');
goog.require('goog.events.EventHandler');
goog.require('goog.events.EventTarget');

/**
  @constructor
  @extends {goog.events.EventTarget}
*/
este.events.DomReadyHandler = function() {
  var _this = this;
  este.events.DomReadyHandler.superClass_.constructor.call(this);
  if (document.readyState === 'complete') {
    setTimeout(function() {
      return _this.dispatchReadyEvent();
    }, 1);
  } else {
    this.handler = new goog.events.EventHandler(this);
    this.registerEvents();
  }
  return;
}
goog.inherits(este.events.DomReadyHandler, goog.events.EventTarget);

/**
  @enum {string}
*/
este.events.DomReadyHandler.EventType = {
  READY: 'ready'
};

/**
  @type {goog.events.EventHandler}
*/
este.events.DomReadyHandler.prototype.handler = null;

/**
  @protected
*/
este.events.DomReadyHandler.prototype.registerEvents = function() {
  if (document.addEventListener) {
    this.handler.listen(document, 'DOMContentLoaded', this.onReady);
  } else {
    this.handler.listen(document, 'readystatechange', this.onReadyStateChange);
    if (this.canDoScrollCheck()) {
      this.doScrollCheck();
    }
  }
  return this.handler.listen(window, 'load', this.onReady);
};

/**
  @return {boolean}
  @protected
*/
este.events.DomReadyHandler.prototype.canDoScrollCheck = function() {
  var e, topLevel;
  topLevel = false;
  try {
    topLevel = window.frameElement === null;
  } catch (_error) {
    e = _error;
  }
  return topLevel && !!document.documentElement.doScroll;
};

/**
  @param {goog.events.BrowserEvent} e
  @protected
*/
este.events.DomReadyHandler.prototype.onReady = function(e) {
  return this.dispatchReadyEvent();
};

/**
  @param {goog.events.BrowserEvent} e
  @protected
*/
este.events.DomReadyHandler.prototype.onReadyStateChange = function(e) {
  if (document.readyState !== 'complete') {
    return;
  }
  return this.dispatchReadyEvent();
};

/**
  @protected
*/
este.events.DomReadyHandler.prototype.doScrollCheck = function() {
  var e,
    _this = this;
  try {
    document.documentElement.doScroll('left');
  } catch (_error) {
    e = _error;
    setTimeout(function() {
      return _this.doScrollCheck();
    }, 1);
    return;
  }
  return this.dispatchReadyEvent();
};

/**
  @protected
*/
este.events.DomReadyHandler.prototype.dispatchReadyEvent = function() {
  var _ref;
  this.dispatchEvent('ready');
  return (_ref = this.handler) != null ? _ref.dispose() : void 0;
};

/**
  @override
*/
este.events.DomReadyHandler.prototype.disposeInternal = function() {
  var _ref;
  este.events.DomReadyHandler.superClass_.disposeInternal.call(this);
  if ((_ref = this.handler) != null) {
    _ref.dispose();
  }
};
este.events.domReady = new este.events.DomReadyHandler;