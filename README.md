# entries [![CI](https://travis-ci.org/ndhoule/entries.svg?branch=master

Utility to get key-value pairs from an object.

## Installation

```sh
$ component install ndhoule/entries
```

## API

### `entries(object)`

Return a nested array containing an object's iterable, own key-value pairs.

```javascript
entries({ a: 1, b: 2 });
// => [['a', 1], ['b', 2]]
```

## License

Code copyright 2014 [Nathan Houle](mailto:nathan+github@nathanhoule.com). Released under the [MIT license](LICENSE.md).
