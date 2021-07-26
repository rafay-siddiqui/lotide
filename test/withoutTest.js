const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const test1 = [1,2,3,4,5,"hello","goodbye"];
console.log(without(test1, [4,5,"goodbye"])); // => [1,2,3,"hello"]
assertArraysEqual(test1, [1,2,3,4,5,"hello","goodbye"]);