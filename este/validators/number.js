// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview Validate string number format.
*/
goog.provide('este.validators.Number');
goog.provide('este.validators.number');
goog.require('este.validators.Base');
goog.require('goog.string');

/**
  @param {function(): string=} getMsg
  @constructor
  @extends {este.validators.Base}
*/
este.validators.Number = function(getMsg) {
  este.validators.Number.superClass_.constructor.call(this, getMsg);
}
goog.inherits(este.validators.Number, este.validators.Base);

/**
  @override
*/
este.validators.Number.prototype.validate = function() {
  var value;
  goog.asserts.assertString(this.value);
  value = goog.string.toNumber(this.value);
  return typeof value === 'number' && goog.math.isFiniteNumber(value);
};

/**
  @override
*/
este.validators.Number.prototype.getMsg = function() {
  
/**
    @desc Number validator message.
  */
  return este.validators.Number.MSG_VALIDATOR_NUMBER = goog.getMsg('Please enter a valid number.');
};

/**
  @param {function(): string=} getMsg
  @return {function(): este.validators.Number}
*/
este.validators.number = function(getMsg) {
  return function() {
    return new este.validators.Number(getMsg);
  };
};