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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅😁✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑😔🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let temp = [];
  let midIdx = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    temp.push(array[midIdx]);
    return temp;
  } else {
    temp.push(array[midIdx - 1]);
    temp.push(array[midIdx]);
    return temp;
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);