# entries [![CI][ci-badge]][ci-link]

Utility to get key-value pairs from an object.

## Installation

```sh
$ component install ndhoule/entries
$ npm install @ndhoule/entries
```

## API

### `entries(object : Object)`

Return a nested array containing an object's iterable, own key-value pairs.

```javascript
entries({ a: 1, b: 2 });
// => [['a', 1], ['b', 2]]
```

## License

Released under the [MIT license](LICENSE.md).

[ci-link]: https://travis-ci.org/ndhoule/arity
[ci-badge]: https://travis-ci.org/ndhoule/arity.svg?branch=master
