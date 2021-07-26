const assertObjectsEqual = require('../assertObjectsEqual');

let test1 = {
  yo: "what's up",
  not: "much you"
};
let test2 = {
  yo: "what's up",
  not: "much you"
};
let test3 = {
  yo: "what's up",
  not: "much how about you"
};
assertObjectsEqual(test1,test2);
assertObjectsEqual(test1,test3);