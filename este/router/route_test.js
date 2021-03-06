// Generated by github.com/steida/coffee2closure 0.0.14
suite('este.router.Route', function() {
  var Route, route, setupTestData, testData;
  Route = este.router.Route;
  testData = null;
  route = null;
  setup(function() {
    setupTestData();
    return route = new Route('/', (function() {}), {});
  });
  setupTestData = function() {
    return testData = {
      'user/joe': {
        path: 'user/:user',
        params: {
          user: 'joe'
        }
      },
      'users': {
        path: 'users/:id?',
        params: {
          id: void 0
        }
      },
      'users/1': {
        path: 'users/:id?',
        params: {
          id: '1'
        }
      },
      'assets/este.js': {
        path: 'assets/*',
        params: ['este.js']
      },
      'assets/steida.js': {
        path: 'assets/*.*',
        params: ['steida', 'js']
      },
      'assets/js/este.js': {
        path: 'assets/*',
        params: ['js/este.js']
      },
      'assets/js/steida.js': {
        path: 'assets/*.*',
        params: ['js/steida', 'js']
      },
      'user/1': {
        path: 'user/:id/:operation?',
        params: {
          id: '1',
          operation: void 0
        }
      },
      'user/1/edit': {
        path: 'user/:id/:operation?',
        params: {
          id: '1',
          operation: 'edit'
        }
      },
      'products.json': {
        path: 'products.:format',
        params: {
          format: 'json'
        }
      },
      'products.xml': {
        path: 'products.:format',
        params: {
          format: 'xml'
        }
      },
      'products': {
        path: 'products.:format?',
        params: {
          format: void 0
        }
      },
      'user/12': {
        path: 'user/:id.:format?',
        params: {
          id: '12',
          format: void 0
        }
      },
      'user/12.json': {
        path: 'user/:id.:format?',
        params: {
          id: '12',
          format: 'json'
        }
      },
      '/': {
        path: '/',
        params: null
      }
    };
  };
  suite('constructor', function() {
    return test('should work', function() {
      return assert.instanceOf(route, Route);
    });
  });
  suite('process', function() {
    test('should parse', function() {
      var data, length, url;
      length = 0;
      for (url in testData) {
        data = testData[url];
        route = new Route(data.path, function(params) {
          assert.deepEqual(params, data.params);
          return length++;
        }, {});
        route.process(url);
      }
      return assert.equal(length, goog.object.getKeys(testData).length);
    });
    test('should pass isNavigation', function() {
      var data, length, url;
      length = 0;
      for (url in testData) {
        data = testData[url];
        route = new Route(data.path, function(params, p_isNav) {
          assert.deepEqual(params, data.params);
          assert.isTrue(p_isNav);
          return length++;
        }, {});
        route.process(url, true);
      }
      return assert.equal(length, goog.object.getKeys(testData).length);
    });
    test('should return true for matched route', function() {
      route = new Route('foo', function() {});
      return assert.isTrue(route.process('foo', false));
    });
    return test('should return false for unmatched route', function() {
      route = new Route('foo', function() {});
      return assert.isFalse(route.process('bar', false));
    });
  });
  return suite('createUrl', function() {
    return test('serialization should work', function() {
      var data, url;
      for (url in testData) {
        data = testData[url];
        route = new Route(data.path, (function() {}), {});
        assert.deepEqual(url, route.createUrl(data.params));
      }
    });
  });
});