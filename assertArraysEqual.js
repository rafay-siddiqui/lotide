let eqArrays = function(arr1, arr2) {
  let idx = 0;
  while (idx < arr1.length) {
    if (arr1[idx] !== arr2[idx]) {
      return false;
    }
    idx += 1;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅😁✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑😔🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(assertArraysEqual([1,2,3],[1,2,3]));
console.log(assertArraysEqual([1,2,3],[1,2,2]));
console.log(assertArraysEqual([1,2,3],[1,2]));
console.log(assertArraysEqual(["hello"," what's up"],["hello"," what's up"]));
console.log(assertArraysEqual(["hello"," what's up"],["not much"," you?"]));