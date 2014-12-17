# entries [![Circle CI](https://circleci.com/gh/ndhoule/entries.svg?style=svg&circle-token=c1aad67f0096cfa0997f27d5e3d314347c7679cf)](https://circleci.com/gh/ndhoule/entries)

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
