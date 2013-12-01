// Generated by github.com/steida/coffee2closure 0.0.14
suite('este.labs.app.Route', function() {
  var Route, testData;
  Route = este.labs.app.Route;
  testData = [
    {
      path: 'user/:user',
      url: 'user/joe',
      params: {
        user: 'joe'
      }
    }, {
      path: 'users/:id?',
      url: 'users',
      params: {
        id: void 0
      }
    }, {
      path: 'users/:id?',
      url: 'users/1',
      params: {
        id: '1'
      }
    }, {
      path: 'user/:id/:operation?',
      url: 'user/1',
      params: {
        id: '1',
        operation: void 0
      }
    }, {
      path: 'user/:id/:operation?',
      url: 'user/1/edit',
      params: {
        id: '1',
        operation: 'edit'
      }
    }, {
      path: 'products.:format',
      url: 'products.json',
      params: {
        format: 'json'
      }
    }, {
      path: 'products.:format',
      url: 'products.xml',
      params: {
        format: 'xml'
      }
    }, {
      path: 'products.:format?',
      url: 'products',
      params: {
        format: void 0
      }
    }, {
      path: 'user/:id.:format?',
      url: 'user/12',
      params: {
        id: '12',
        format: void 0
      }
    }, {
      path: 'user/:id.:format?',
      url: 'user/12.json',
      params: {
        id: '12',
        format: 'json'
      }
    }, {
      path: '/',
      url: '/',
      params: null
    }, {
      path: 'assets/*',
      url: 'assets/este.js',
      params: ['este.js']
    }, {
      path: 'assets/*.*',
      url: 'assets/steida.js',
      params: ['steida', 'js']
    }, {
      path: 'assets/*',
      url: 'assets/js/este.js',
      params: ['js/este.js']
    }, {
      path: 'assets/*.*',
      url: 'assets/js/steida.js',
      params: ['js/steida', 'js']
    }
  ];
  suite('testData', function() {
    suite('match', function() {
      return test('should match url', function() {
        var data, route, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = testData.length; _i < _len; _i++) {
          data = testData[_i];
          route = new Route(data.path);
          _results.push(assert.isTrue(route.match(data.url)));
        }
        return _results;
      });
    });
    suite('parseParams', function() {
      return test('should return params from url', function() {
        var data, params, route, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = testData.length; _i < _len; _i++) {
          data = testData[_i];
          route = new Route(data.path);
          params = route.parseParams(data.url);
          _results.push(assert.deepEqual(params, data.params, data.url));
        }
        return _results;
      });
    });
    return suite('createUrl', function() {
      return test('should return url from params', function() {
        var data, route, url, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = testData.length; _i < _len; _i++) {
          data = testData[_i];
          route = new Route(data.path);
          url = route.createUrl(data.params);
          _results.push(assert.equal(url, data.url, data.url));
        }
        return _results;
      });
    });
  });
  suite('instance match', function() {
    return test('should work', function() {
      assert.isTrue(new Route('/').match('/'));
      assert.isFalse(new Route('/').match('/f'));
      assert.isTrue(new Route('/foo').match('/foo'));
      assert.isFalse(new Route('/foo').match('/boo'));
      assert.isTrue(new Route('/:foo').match('/foo'));
      assert.isFalse(new Route('/:foo').match('/'));
      assert.isTrue(new Route('/users/:foo?').match('/users'));
      return assert.isTrue(new Route('/users/:foo?').match('/users/foo'));
    });
  });
  return suite('static match', function() {
    return test('should work', function() {
      var a, b, routes;
      routes = [a = new Route('/'), b = new Route('/foo')];
      assert.equal(a, Route.match(routes, '/'));
      assert.equal(b, Route.match(routes, '/foo'));
      return assert.isNull(Route.match(routes, '/bar'));
    });
  });
});