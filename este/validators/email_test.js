// Generated by github.com/steida/coffee2closure 0.0.14
suite('este.validators.email', function() {
  var email;
  email = null;
  setup(function() {
    return email = este.validators.email()();
  });
  suite('validate', function() {
    suite('should be valid:', function() {
      return test('foo@bla.com', function() {
        email.value = 'foo@bla.com';
        return assert.isTrue(email.validate());
      });
    });
    return suite('should be invalid:', function() {
      test('foo@@bla.com', function() {
        email.value = 'foo@@bla.com';
        return assert.isFalse(email.validate());
      });
      return test('""', function() {
        email.value = '';
        return assert.isFalse(email.validate());
      });
    });
  });
  return suite('getMsg', function() {
    test('should return message', function() {
      return assert.equal(email.getMsg(), 'Please enter a valid email address.');
    });
    return test('should return alternative message', function() {
      var getMsg;
      getMsg = function() {
        return 'This is not email.';
      };
      email = este.validators.email(getMsg)();
      return assert.equal(email.getMsg(), getMsg());
    });
  });
});