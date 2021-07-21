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

const letterPositions = function(sentence) {
  const results = {};
  let letters = sentence.split("");
  letters.forEach(function(letter, idx) {
    if (results[letter] && letter !== " ") {
      results[letter].push(idx);
    } else if (!results[letter] && letter !== " ") {
      results[letter] = [idx];
    }
  });
  return results;
};

console.log(letterPositions("lighthouse in the house")); // ==> { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] }

let resultHouse = letterPositions("woahw");
assertArraysEqual(resultHouse["w"],[0,4]);