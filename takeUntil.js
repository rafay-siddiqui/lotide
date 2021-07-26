let takeUntil = function(array, callback) {
  let output = [];
  for (let x of array) {
    if (callback(x)) {
      break;
    }
    output.push(x);
  }
  return output;
};

module.exports = takeUntil;

