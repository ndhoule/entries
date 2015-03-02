/* globals describe, it */

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

  if (typeof Object.create === 'function') {
    describe('IE9+ tests', function() {
      it('should ignore inherited properties (IE9+)', function() {
        var parent = { parent: true };
        var child = Object.create(parent, {
          child: { value: true }
        });

        expect(entries(child)).to.deep.equal([['child', true]]);
      });

      it('should ignore non-enumerable properties (IE9+)', function() {
        var source = Object.create({}, {
          visible: { value: true, enumerable: true },
          invisible: { value: true, enumerable: false }
        });

        expect(entries(source)).to.deep.equal([['visible', true]]);
      });
    });
  }
});
