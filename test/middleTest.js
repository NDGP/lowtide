// const eqArraysEquals = require('../assertArraysEqual');
// const middle = require('../middle')

const middle = require('../middle');
const assert = require('chai').assert;

describe("#head", () =>{
  it("should return [2] for [1,2,3]", () =>{
    assert.deepEqual(middle([1,2,3]), [2])
  })
});