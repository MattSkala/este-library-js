// Generated by github.com/steida/coffee2closure 0.0.14
suite('este.app.Presenter', function() {
  var Presenter, createUrl, presenter, redirect, screen, storage, view;
  Presenter = este.app.Presenter;
  presenter = null;
  createUrl = null;
  redirect = null;
  screen = null;
  view = null;
  storage = null;
  setup(function() {
    presenter = new Presenter;
    createUrl = function() {};
    redirect = function() {};
    presenter.createUrl = createUrl;
    presenter.redirect = redirect;
    screen = {
      show: function() {},
      hide: function() {},
      dispose: function() {}
    };
    view = {
      element: null,
      getElement: function() {
        return this.element;
      },
      render: function() {
        return this.element = {};
      },
      dispose: function() {}
    };
    storage = {
      dispose: function() {}
    };
    presenter.screen = screen;
    presenter.view = view;
    return presenter.storage = storage;
  });
  suite('constructor', function() {
    return test('should work', function() {
      return assert.instanceOf(presenter, Presenter);
    });
  });
  suite('load', function() {
    test('should return instance of goog.result.SimpleResult', function() {
      var result;
      result = presenter.load();
      return assert.instanceOf(result, goog.result.SimpleResult);
    });
    return test('should return successful instance of goog.result.SimpleResult', function() {
      var result;
      result = presenter.load();
      return assert.equal(result.getState(), goog.result.Result.State.SUCCESS);
    });
  });
  suite('beforeShow', function() {
    return test('should call screen show', function(done) {
      screen.show = function(view) {
        assert.equal(view, presenter.view);
        return done();
      };
      return presenter.beforeShow();
    });
  });
  suite('beforeHide', function() {
    return test('should call screen hide', function(done) {
      screen.hide = function(view) {
        assert.equal(view, presenter.view);
        return done();
      };
      return presenter.beforeHide();
    });
  });
  return suite('dispose', function() {
    return test('should dispose view', function(done) {
      presenter.view.dispose = function() {
        return done();
      };
      return presenter.dispose();
    });
  });
});