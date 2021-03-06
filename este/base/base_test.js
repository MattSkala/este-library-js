// Generated by github.com/steida/coffee2closure 0.0.14
suite('este.Base', function() {
  var Base, base;
  Base = este.Base;
  base = null;
  setup(function() {
    return base = new este.Base;
  });
  suite('constructor', function() {
    return test('should work', function() {
      return assert.instanceOf(base, este.Base);
    });
  });
  suite('on', function() {
    return test('should be alias for getHandler().listen', function(done) {
      base.getHandler = function() {
        return {
          listen: function(a, b, c, d, e) {
            assert.equal(a, 1);
            assert.equal(b, 2);
            assert.equal(c, 3);
            assert.equal(d, 4);
            assert.equal(e, 5);
            return done();
          }
        };
      };
      return base.on(1, 2, 3, 4, 5);
    });
  });
  suite('once', function() {
    return test('should be alias for getHandler().listenOnce', function(done) {
      base.getHandler = function() {
        return {
          listenOnce: function(a, b, c, d, e) {
            assert.equal(a, 1);
            assert.equal(b, 2);
            assert.equal(c, 3);
            assert.equal(d, 4);
            assert.equal(e, 5);
            return done();
          }
        };
      };
      return base.once(1, 2, 3, 4, 5);
    });
  });
  return suite('off', function() {
    return test('should be alias for getHandler().unlisten', function(done) {
      base.getHandler = function() {
        return {
          unlisten: function(a, b, c, d, e) {
            assert.equal(a, 1);
            assert.equal(b, 2);
            assert.equal(c, 3);
            assert.equal(d, 4);
            assert.equal(e, 5);
            return done();
          }
        };
      };
      return base.off(1, 2, 3, 4, 5);
    });
  });
});