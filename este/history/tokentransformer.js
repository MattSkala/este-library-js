// Generated by github.com/steida/coffee2closure 0.0.14
/**
  @fileoverview goog.history.Html5History default behavior is that setToken
  replaces pathname of current location, but keeps search query as is.

  This transformer treats tokens as "pathAndAfter"; hence they may also include
  query string and a query string is replaced when a new history state is
  pushed.
*/
goog.provide('este.history.TokenTransformer');

/**
  @constructor
  @implements {goog.history.Html5History.TokenTransformer}
*/
este.history.TokenTransformer = function() {}

/**
  @override
*/
este.history.TokenTransformer.prototype.retrieveToken = function(pathPrefix, location) {
  return (location.pathname.substr(pathPrefix.length)) + location.search;
};

/**
  @override
*/
este.history.TokenTransformer.prototype.createUrl = function(token, pathPrefix, location) {
  return pathPrefix + token;
};