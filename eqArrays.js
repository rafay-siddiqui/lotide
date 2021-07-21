const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅😁✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑😔🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);