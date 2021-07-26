const assertArraysEqual = require('../assertArraysEqual')
const map = require('../map')

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word + " change"), ["ground change", "control change", "to change", "major change", "tom change"]);
assertArraysEqual(map(words, word => 'hello'), ['hello', 'hello', 'hello', 'hello', 'hello']);