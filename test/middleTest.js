const { assert } = require('chai');
const middle = require('../middle.js');

describe('#middle', () => {
  it('should return an empty array if passed an array with less than 3 elements', () => {
    assert.deepEqual(middle([1, 2]), []);
    assert.deepEqual(middle([1]), []);
  });
  it('should return the exact middle element in an array with an odd number of elements', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
    assert.deepEqual(middle([1, 2, 3,]), [2]);
  });
  it('should return the middle two elements when passed in an array with an even number of elements', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});