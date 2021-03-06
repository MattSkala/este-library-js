// Generated by github.com/steida/coffee2closure 0.0.14
suite('este.string', function() {
  var string;
  string = este.string;
  suite('toFancyUrl', function() {
    return test('should rewrite string to be usable as url', function() {
      assert.equal('escrzyaie', string.toFancyUrl('ěščřžýáíé'));
      assert.equal('ou-jee', string.toFancyUrl('Ou jee'));
      assert.equal('ou-jee', string.toFancyUrl('  Ou jee'));
      assert.equal('ou-jee', string.toFancyUrl('Ou jee  '));
      assert.equal('foo-bla', string.toFancyUrl('foo-bla'));
      assert.equal('foo-bla', string.toFancyUrl('foo--bla'));
      assert.equal('foo-bla', string.toFancyUrl('-foo-bla'));
      assert.equal('foo-bla', string.toFancyUrl('foo-bla-'));
      assert.equal('', string.toFancyUrl('@#$'));
      assert.equal('100', string.toFancyUrl('100%'));
      return assert.equal('100', string.toFancyUrl('100 %'));
    });
  });
  suite('chunk', function() {
    var arrange, chunked;
    chunked = null;
    arrange = function(str) {
      return chunked = string.chunk(str, 2);
    };
    test('should not chunk string less than 2', function() {
      arrange('f');
      assert.lengthOf(chunked, 1);
      return assert.equal(chunked[0], 'f');
    });
    test('should not chunk string equal than 2', function() {
      arrange('fo');
      assert.lengthOf(chunked, 1);
      return assert.equal(chunked[0], 'fo');
    });
    return test('should chunk string greater than 2', function() {
      arrange('foo');
      assert.lengthOf(chunked, 2);
      assert.equal(chunked[0], 'fo');
      return assert.equal(chunked[1], 'o');
    });
  });
  suite('chunkToObject', function() {
    var arrange, chunked;
    chunked = null;
    arrange = function(str) {
      return chunked = string.chunkToObject(str, 2);
    };
    test('should not chunk string less than 2', function() {
      arrange('f');
      assert.lengthOf(chunked, 1);
      assert.equal(chunked[0].text, 'f');
      assert.equal(chunked[0].index, 0);
      return assert.equal(chunked[0].total, 1);
    });
    test('should not chunk string equal than 2', function() {
      arrange('fo');
      assert.lengthOf(chunked, 1);
      assert.equal(chunked[0].text, 'fo');
      assert.equal(chunked[0].index, 0);
      return assert.equal(chunked[0].total, 1);
    });
    return test('should chunk string greater than 2', function() {
      arrange('foo');
      assert.lengthOf(chunked, 2);
      assert.equal(chunked[0].text, 'fo');
      assert.equal(chunked[0].index, 0);
      assert.equal(chunked[0].total, 2);
      assert.equal(chunked[1].text, 'o');
      assert.equal(chunked[1].index, 1);
      return assert.equal(chunked[1].total, 2);
    });
  });
  return suite('stripSlashHashPrefixes', function() {
    return test('should strip slashes and hashes on string start', function() {
      assert.equal('', string.stripSlashHashPrefixes(''));
      assert.equal('foo', string.stripSlashHashPrefixes('foo'));
      assert.equal('foo', string.stripSlashHashPrefixes('//foo'));
      return assert.equal('foo', string.stripSlashHashPrefixes('##foo'));
    });
  });
});