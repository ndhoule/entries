'use strict';

/**
 * `hasOwnProperty` reference.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Takes an array and returns a nested array containing all the object's own
 * key-value pairs.
 *
 * Note that the order of the output will vary across platforms, depending on
 * how that platform handles object iteration order.
 *
 * @param {Object} object
 * @return {Array[]} An array of the object's key-value pairs.
 */

var entries = function entries(object) {
  var results = [];

  for (var key in object) {
    if (has.call(object, key)) {
      results.push([key, object[key]]);
    }
  }

  return results;
}

/**
 * Exports.
 */

module.exports = entries;
