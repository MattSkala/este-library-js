// Generated by github.com/steida/coffee2closure 0.0.14
goog.require('goog.array');
/**
  @fileoverview Validate existence value in list.
*/
goog.provide('este.validators.Inclusion');
goog.provide('este.validators.inclusion');
goog.require('este.validators.Base');

/**
  @param {!Array} inclusion
  @param {function(): string=} getMsg
  @constructor
  @extends {este.validators.Base}
*/
este.validators.Inclusion = function(inclusion, getMsg) {
  this.inclusion = inclusion;
  este.validators.Inclusion.superClass_.constructor.call(this, getMsg);
}
goog.inherits(este.validators.Inclusion, este.validators.Base);

/**
  @type {Array}
  @protected
*/
este.validators.Inclusion.prototype.inclusion = null;

/**
  @override
*/
este.validators.Inclusion.prototype.validate = function() {
  var _ref;
  return _ref = this.value, goog.array.indexOf(this.inclusion, _ref) >= 0;
};

/**
  @override
*/
este.validators.Inclusion.prototype.getMsg = function() {

/**
    @desc Inclusion validator message.
  */
  este.validators.Inclusion.MSG_VALIDATOR_INCLUSION = goog.getMsg('Please enter one of these values: {$inclusion}.', {
    'inclusion': this.inclusion.join(', ')
  });
  return este.validators.Inclusion.MSG_VALIDATOR_INCLUSION;
};

/**
  @param {!Array} inclusion
  @param {function(): string=} getMsg
  @return {function(): este.validators.Inclusion}
*/
este.validators.inclusion = function(inclusion, getMsg) {
  return function() {
    return new este.validators.Inclusion(inclusion, getMsg);
  };
};