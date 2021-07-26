const { assert } = require('chai');
const tail = require('../tail');

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  })
  it("should return an empty array when given a single element", () => {
    assert.deepEqual(tail(['hi']),[]);
  })
  it("should not modify the original array", () => {
    let og = ['this','is','the','og']
    let theSlice = tail(og);
    assert.strictEqual(og.length,4);
  })
});
