'use strict';

function createStartFn(chai) {
  return function() {
    chai.use(require('chai-string'));
  };
}