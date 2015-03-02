'use strict';

var assert = require('assert');
var entries = require('..');

describe('entries', function() {
  it('produce a nested array of key-value pairs', function() {
    var input = { a: 1, b: 2, '3': 'c', '4': 'd' };
    var expected = [ ['a', 1], ['b', 2], ['3', 'c'], ['4', 'd'] ];

    assert.deepEqual(entries(input).sort(), expected.sort());
  });

  it('should work with nested objects', function() {
    var input = { a: {} };

    assert.equal(entries(input)[0][1], input.a);
  });

  it('should work on an empty object', function() {
    assert.deepEqual(entries({}), []);
  });
});
