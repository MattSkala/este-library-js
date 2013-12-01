// Generated by github.com/steida/coffee2closure 0.0.14
suite('este.app.View', function() {
  var View, view;
  View = este.app.View;
  view = null;
  setup(function() {
    return view = new View;
  });
  suite('constructor', function() {
    return test('should work', function() {
      return assert.instanceOf(view, View);
    });
  });
  suite('createUrl', function() {
    return test('should throw error', function() {
      var e, error;
      error = null;
      try {
        view.createUrl();
      } catch (_error) {
        e = _error;
        error = e;
      }
      return assert.isNotNull(error);
    });
  });
  return suite('redirect', function() {
    return test('should throw error', function() {
      var e, error;
      error = null;
      try {
        view.redirect();
      } catch (_error) {
        e = _error;
        error = e;
      }
      return assert.isNotNull(error);
    });
  });
});