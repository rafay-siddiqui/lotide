const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅😁✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑😔🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
