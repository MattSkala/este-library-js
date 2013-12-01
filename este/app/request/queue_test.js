// Generated by github.com/steida/coffee2closure 0.0.14
suite('este.app.request.Queue', function() {
  var Queue, mockRequest, queue, request;
  Queue = este.app.request.Queue;
  queue = null;
  request = null;
  setup(function() {
    queue = new Queue;
    return request = mockRequest();
  });
  mockRequest = function() {
    return {
      equal: function(req) {
        return this === req;
      }
    };
  };
  suite('constructor', function() {
    return test('should work', function() {
      return assert.instanceOf(queue, Queue);
    });
  });
  suite('isEmpty', function() {
    return test('should work', function() {
      assert.isTrue(queue.isEmpty());
      queue.add(request);
      return assert.isFalse(queue.isEmpty());
    });
  });
  suite('clear', function() {
    return test('should clear queue', function() {
      queue.add(request);
      queue.clear();
      return assert.isTrue(queue.isEmpty());
    });
  });
  return suite('dispose', function() {
    return test('should clear queue', function() {
      queue.add(request);
      queue.dispose();
      return assert.isTrue(queue.isEmpty());
    });
  });
});