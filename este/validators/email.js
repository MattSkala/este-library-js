// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview Validate string email format.
*/
goog.provide('este.validators.Email');
goog.provide('este.validators.email');
goog.require('este.validators.Base');
goog.require('goog.format.EmailAddress');

/**
  @param {function(): string=} getMsg
  @constructor
  @extends {este.validators.Base}
*/
este.validators.Email = function(getMsg) {
  este.validators.Email.superClass_.constructor.call(this, getMsg);
}
goog.inherits(este.validators.Email, este.validators.Base);

/**
  @override
*/
este.validators.Email.prototype.validate = function() {
  goog.asserts.assertString(this.value);
  return goog.format.EmailAddress.isValidAddress(this.value);
};

/**
  @override
*/
este.validators.Email.prototype.getMsg = function() {

/**
    @desc Email validator message.
  */
  este.validators.Email.MSG_VALIDATOR_EMAIL = goog.getMsg('Please enter a valid email address.');
  return este.validators.Email.MSG_VALIDATOR_EMAIL;
};

/**
  @param {function(): string=} getMsg
  @return {function(): este.validators.Email}
*/
este.validators.email = function(getMsg) {
  return function() {
    return new este.validators.Email(getMsg);
  };
};