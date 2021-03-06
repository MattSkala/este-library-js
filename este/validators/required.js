// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview Validate value existence. Returns false for null, undefined,
  empty string and empty array. String is trimmed before length check.
*/
goog.provide('este.validators.Required');
goog.provide('este.validators.required');
goog.require('este.validators.Base');
goog.require('goog.string');

/**
  @param {function(): string=} getMsg
  @constructor
  @extends {este.validators.Base}
*/
este.validators.Required = function(getMsg) {
  este.validators.Required.superClass_.constructor.call(this, getMsg);
}
goog.inherits(este.validators.Required, este.validators.Base);

/**
  @override
*/
este.validators.Required.prototype.isValidable = function() {
  return true;
};

/**
  @override
*/
este.validators.Required.prototype.validate = function() {
  switch (goog.typeOf(this.value)) {
    case 'string':
      return goog.string.trim(this.value + '').length > 0;
    case 'array':
      return this.value.length > 0;
    default:
      return this.value != null;
  }
};

/**
  @override
*/
este.validators.Required.prototype.getMsg = function() {

/**
    @desc Required validator message.
  */
  este.validators.Required.MSG_VALIDATOR_REQUIRED = goog.getMsg('This field is required.');
  return este.validators.Required.MSG_VALIDATOR_REQUIRED;
};

/**
  @param {function(): string=} getMsg
  @return {function(): este.validators.Required}
*/
este.validators.required = function(getMsg) {
  return function() {
    return new este.validators.Required(getMsg);
  };
};