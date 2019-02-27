'use strict';

function createStartFn(chai) {
  return function () {
    var chaiStringUtil = chaiString;
    chai.use(chaiStringUtil(chai));
  };
}
