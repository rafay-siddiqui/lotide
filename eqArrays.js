let eqArrays = function(arr1, arr2) {
  let idx = 0;
  let longer = 0;
  if (arr1.length > arr2.length) {
    longer += arr1.length;
  } else {
    longer += arr2.length;
  }
  while (idx < longer) {
    if (arr1[idx] !== arr2[idx]) {
      return false;
    }
    idx += 1;
  }
  return true;
};

let assertEqual = require('./assertEqual')
module.exports = eqArrays;