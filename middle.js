const middle = function(array) {
  let temp = [];
  let midIdx = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    temp.push(array[midIdx]);
    return temp;
  } else {
    temp.push(array[midIdx - 1]);
    temp.push(array[midIdx]);
    return temp;
  }
};

module.exports = middle;