// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview Validate number or string number.
*/
goog.provide('este.validators.Max');
goog.provide('este.validators.max');
goog.require('este.validators.Base');
goog.require('goog.math');
goog.require('goog.string');

/**
  @param {number} max
  @param {function(): string=} getMsg
  @constructor
  @extends {este.validators.Base}
*/
este.validators.Max = function(max, getMsg) {
  this.max = max;
  este.validators.Max.superClass_.constructor.call(this, getMsg);
}
goog.inherits(este.validators.Max, este.validators.Base);

/**
  @type {number}
  @protected
*/
este.validators.Max.prototype.max = 0;

/**
  @override
*/
este.validators.Max.prototype.validate = function() {
  var isStringOrNumber, value, _ref;
  isStringOrNumber = (_ref = typeof this.value) === 'string' || _ref === 'number';
  goog.asserts.assert(isStringOrNumber, 'Expected string or number.');
  value = this.value;
  if (goog.isString(value)) {
    value = goog.string.toNumber(value);
  }
  value = /** @type {number} */(value);
  if (!goog.math.isFiniteNumber(value)) {
    return false;
  }
  return value <= this.max;
};

/**
  @override
*/
este.validators.Max.prototype.getMsg = function() {

/**
    @desc Max validator message.
  */
  este.validators.Max.MSG_VALIDATOR_MAX = goog.getMsg('Please enter a value less than or equal to {$max}.', {
    'max': this.max
  });
  return este.validators.Max.MSG_VALIDATOR_MAX;
};

/**
  @param {number} max
  @param {function(): string=} getMsg
  @return {function(): este.validators.Max}
*/
este.validators.max = function(max, getMsg) {
  return function() {
    return new este.validators.Max(max, getMsg);
  };
};