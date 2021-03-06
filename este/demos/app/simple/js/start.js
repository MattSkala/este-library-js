// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview este.demos.app.simple.start.
*/
goog.provide('este.demos.app.simple.start');
goog.require('este.app.create');
goog.require('este.demos.app.simple.error.Presenter');
goog.require('este.demos.app.simple.products.detail.Presenter');
goog.require('este.demos.app.simple.products.list.Presenter');
goog.require('este.demos.app.simple.timeout.Presenter');

/**
  @param {Object} data JSON from server
*/
este.demos.app.simple.start = function(data) {
  var simpleApp;
  simpleApp = este.app.create('simple-app', {
    forceHash: true
  });
  simpleApp.addRoutes({
    '/': new este.demos.app.simple.products.list.Presenter,
    '/timeout': new este.demos.app.simple.timeout.Presenter,
    '/error': new este.demos.app.simple.error.Presenter,
    '/product/:id': new este.demos.app.simple.products.detail.Presenter
  });
  (function() {
    var progressEl, timer;
    progressEl = document.getElementById('progress');
    timer = null;
    goog.events.listen(simpleApp, 'load', function(e) {
      var _ref;
      goog.dom.classlist.add(progressEl, 'loading');
      progressEl.innerHTML = 'loading';
      if ((_ref = e.request.params) != null ? _ref.id : void 0) {
        progressEl.innerHTML += ' ' + e.request.params.id;
      }
      clearInterval(timer);
      return timer = setInterval(function() {
        return progressEl.innerHTML += '.';
      }, 250);
    });
    goog.events.listen(simpleApp, 'show', function(e) {
      clearInterval(timer);
      goog.dom.classlist.remove(progressEl, 'loading');
      return progressEl.innerHTML = 'loaded';
    });
    goog.events.listen(simpleApp, 'timeout', function(e) {
      clearInterval(timer);
      goog.dom.classlist.remove(progressEl, 'loading');
      return progressEl.innerHTML = 'timeouted';
    });
    return goog.events.listen(simpleApp, 'error', function(e) {
      clearInterval(timer);
      goog.dom.classlist.remove(progressEl, 'loading');
      return progressEl.innerHTML = 'error';
    });
  })();
  return simpleApp.run();
};
goog.exportSymbol('este.demos.app.simple.start', este.demos.app.simple.start);