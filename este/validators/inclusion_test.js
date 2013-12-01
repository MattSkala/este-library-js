// Generated by github.com/steida/coffee2closure 0.0.14
suite('este.validators.inclusion', function() {
  var inclusion;
  inclusion = null;
  setup(function() {
    return inclusion = este.validators.inclusion(['Foo', 'Bla'])();
  });
  suite('validate', function() {
    suite('should be valid:', function() {
      test('"Foo"', function() {
        inclusion.value = 'Foo';
        return assert.isTrue(inclusion.validate());
      });
      return test('"Bla"', function() {
        inclusion.value = 'Bla';
        return assert.isTrue(inclusion.validate());
      });
    });
    return suite('should be invalid:', function() {
      return test('"a"', function() {
        inclusion.value = 'a';
        return assert.isFalse(inclusion.validate());
      });
    });
  });
  return suite('getMsg', function() {
    test('should return message', function() {
      return assert.equal(inclusion.getMsg(), 'Please enter one of these values: Foo, Bla.');
    });
    return test('should return alternative message', function() {
      var getMsg;
      getMsg = function() {
        return "Foo " + this.inclusion;
      };
      inclusion = este.validators.inclusion(['Foo', 'Bla'], getMsg)();
      return assert.equal(inclusion.getMsg(), 'Foo Foo,Bla');
    });
  });
});