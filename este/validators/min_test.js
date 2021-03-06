// Generated by github.com/steida/coffee2closure 0.0.14
suite('este.validators.min', function() {
  var min;
  min = null;
  setup(function() {
    return min = este.validators.min(3)();
  });
  suite('validate', function() {
    suite('should be valid:', function() {
      return test('3', function() {
        min.value = 3;
        return assert.isTrue(min.validate());
      });
    });
    return suite('should be invalid:', function() {
      test('2', function() {
        min.value = 2;
        return assert.isFalse(min.validate());
      });
      return test('"2"', function() {
        min.value = '2';
        return assert.isFalse(min.validate());
      });
    });
  });
  return suite('getMsg', function() {
    test('should return message', function() {
      return assert.equal(min.getMsg(), 'Please enter a value greater than or equal to 3.');
    });
    return test('should return alternative message', function() {
      var getMsg;
      getMsg = function() {
        return "Foo " + this.min;
      };
      min = este.validators.min(3, getMsg)();
      return assert.equal(min.getMsg(), 'Foo 3');
    });
  });
});