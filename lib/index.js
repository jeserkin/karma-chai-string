var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var chaiStringPlugin = function(files) {
  files.unshift(pattern(path.resolve(__dirname, '../src/adapter.js')));
  files.unshift(pattern(path.resolve(require.resolve('chai-string'), './chai-string.js')));
};

chaiStringPlugin.$inject = ['config.files'];
module.exports = {'framework:chai': ['factory', chaiStringPlugin]};