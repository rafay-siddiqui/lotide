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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let objKey in object1) {
    if (object1[objKey] instanceof Array) {
      if (!eqArrays(object1[objKey], object2[objKey])) {
        return false;
      }
    }
    if (object1[objKey] !== object2[objKey] && !(object1[objKey] instanceof Array)) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅😁✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑😔🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

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