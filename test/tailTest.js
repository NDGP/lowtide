const tail = require('../tail');
const assert = require('chai').assert;


describe('#tail', () => {
  it("should return ['Lighthouse','labs'] for ['Yo Yo, 'Lighthouse', 'Labs'", () =>{
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  })
})