let eqArrays = require('./eqArrays');

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

module.exports = eqObjects;