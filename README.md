# karma-chai-string
A Karma plugin. Adapter for chai-string plugin.

[![npm](https://img.shields.io/npm/v/karma-chai-string.svg)](https://www.npmjs.com/package/karma-chai-string)
[![license](https://img.shields.io/npm/l/karma-chai-string.svg?style=flat)](https://www.npmjs.com/package/karma-chai-string)

## Installation

```
$ npm install karma-chai-string --save-dev
```

Add `chai-string` to the `frameworks` key in your Karma configuration, before `chai`:

```js
module.exports = function(config) {
  config.set({
    frameworks: ['chai-string', 'chai']
  });
}
```