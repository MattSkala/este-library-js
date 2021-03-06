// Generated by github.com/steida/coffee2closure 0.0.14
suite('este.ui.InvisibleOverlay', function() {
  var InvisibleOverlay, cssText, decorateElement, overlay;
  InvisibleOverlay = este.ui.InvisibleOverlay;
  overlay = null;
  decorateElement = null;
  cssText = "position: fixed;\nleft: 0; right: 0; top: 0; bottom: 0;\nz-index: 2147483647;\nbackground-color: #000";
  setup(function() {
    overlay = new InvisibleOverlay;
    return decorateElement = document.createElement('div');
  });
  suite('InvisibleOverlay.create', function() {
    return test('should return instance', function() {
      return assert.instanceOf(overlay, InvisibleOverlay);
    });
  });
  suite('render', function() {
    return test('should add styles which makes element invisible with max size and zIndex', function() {
      var element;
      overlay.render();
      element = overlay.getElement();
      assert.equal(element.style.cssText, cssText);
      return assert.equal(goog.style.getOpacity(element), 0);
    });
  });
  return suite('decorateElement', function() {
    return test('should add styles which makes element invisible with max size and zIndex', function() {
      return overlay.decorate(decorateElement);
    });
  });
});