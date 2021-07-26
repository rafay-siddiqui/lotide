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

module.exports = without;