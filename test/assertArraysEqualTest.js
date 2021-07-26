const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 2]));
console.log(assertArraysEqual([1, 2, 3], [1, 2]));
console.log(assertArraysEqual(["hello", " what's up"], ["hello", " what's up"]));
console.log(assertArraysEqual(["hello", " what's up"], ["not much", " you?"]));