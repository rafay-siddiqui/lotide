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
  if (eqArrays(actual, expected)) {
    console.log(`✅😁✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑😔🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let without = function(arr1, arr2) {
  let newArr = arr1.slice();
  arr2.forEach(function(eleRemove) {
    newArr.forEach(function(eleOriginal, idx1) {
      if (eleRemove === eleOriginal) {
        newArr.splice(idx1, 1);
      }
    });
  });
  return newArr;
};


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const test1 = [1,2,3,4,5,"hello","goodbye"];
console.log(without(test1, [4,5,"goodbye"])); // => [1,2,3,"hello"]
assertArraysEqual(test1, [1,2,3,4,5,"hello","goodbye"]);

//assertArraysEqual(["hello","world","lighthouse"],["hello","world"]);