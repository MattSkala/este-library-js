// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview Digits validator.
*/
goog.provide('este.validators.Digits');
goog.provide('este.validators.digits');
goog.require('este.validators.Base');

/**
  @param {function(): string=} getMsg
  @constructor
  @extends {este.validators.Base}
*/
este.validators.Digits = function(getMsg) {
  este.validators.Digits.superClass_.constructor.call(this, getMsg);
}
goog.inherits(este.validators.Digits, este.validators.Base);

/**
  @override
*/
este.validators.Digits.prototype.validate = function() {
  goog.asserts.assertString(this.value);
  return /^\d+$/.test(this.value);
};

/**
  @override
*/
este.validators.Digits.prototype.getMsg = function() {
  
/**
    @desc Digits validator message.
  */
  return este.validators.Digits.MSG_VALIDATOR_DIGITS = goog.getMsg('Please enter only digits.');
};

/**
  @param {function(): string=} getMsg
  @return {function(): este.validators.Digits}
*/
este.validators.digits = function(getMsg) {
  return function() {
    return new este.validators.Digits(getMsg);
  };
};