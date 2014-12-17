'use strict';

var expect = require('chaijs/chai').expect;
var entries = require('..');

describe('entries', function() {
  it('produce a nested array of key-value pairs', function() {
    var input = { a: 1, b: 2, '3': 'c', '4': 'd' };
    var expected = [ ['a', 1], ['b', 2], ['3', 'c'], ['4', 'd'] ];

    expect(entries(input)).to.deep.have.members(expected);
  });

  it('should work with nested objects', function() {
    var input = { a: {} };

    expect(entries(input)[0][1]).to.equal(input.a);
  });

  it('should work on an empty object', function() {
    expect(entries({})).to.deep.have.members([]);
  });
});
