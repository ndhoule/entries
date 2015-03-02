/* globals describe, it */

'use strict';

var assert = require('assert');
var entries = require('..');
var es5It = typeof Object.create === 'function' ? it : xit;

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

  es5It('should ignore inherited properties', function() {
    var parent = { parent: true };
    var child = Object.create(parent, {
      child: { value: true, enumerable: true }
    });

    assert.deepEqual(entries(child), [['child', true]]);
  });

  es5It('should ignore non-enumerable properties', function() {
    var source = Object.create({}, {
      visible: { value: true, enumerable: true },
      invisible: { value: true, enumerable: false }
    });

    assert.deepEqual(entries(source), [['visible', true]]);
  });
});
