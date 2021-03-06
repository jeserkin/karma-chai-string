var path = require('path');

var pattern = function (path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var chaiStringPlugin = function (files) {
  files.unshift(pattern(path.resolve(__dirname, '../src/adapter.js')));
  files.unshift(pattern(require.resolve('chai-string')));
};

chaiStringPlugin.$inject = ['config.files'];
module.exports = {
  'framework:chai-string': ['factory', chaiStringPlugin]
};
