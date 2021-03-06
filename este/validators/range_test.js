// Generated by github.com/steida/coffee2closure 0.0.14
suite('este.validators.range', function() {
  var range;
  range = null;
  setup(function() {
    return range = este.validators.range(1, 3)();
  });
  suite('validate', function() {
    suite('should be valid:', function() {
      test('3', function() {
        range.value = 3;
        return assert.isTrue(range.validate());
      });
      test('"3"', function() {
        range.value = '3';
        return assert.isTrue(range.validate());
      });
      test('1', function() {
        range.value = 1;
        return assert.isTrue(range.validate());
      });
      return test('"1"', function() {
        range.value = '1';
        return assert.isTrue(range.validate());
      });
    });
    return suite('should be invalid:', function() {
      test('4', function() {
        range.value = 4;
        return assert.isFalse(range.validate());
      });
      test('"4"', function() {
        range.value = '4';
        return assert.isFalse(range.validate());
      });
      test('0', function() {
        range.value = 0;
        return assert.isFalse(range.validate());
      });
      return test('"0"', function() {
        range.value = '0';
        return assert.isFalse(range.validate());
      });
    });
  });
  return suite('getMsg', function() {
    test('should return message', function() {
      return assert.equal(range.getMsg(), 'Please enter a value between 1 and 3.');
    });
    return test('should return alternative message', function() {
      var getMsg;
      getMsg = function() {
        return "Foo " + this.min + " " + this.max;
      };
      range = este.validators.range(1, 3, getMsg)();
      return assert.equal(range.getMsg(), 'Foo 1 3');
    });
  });
});