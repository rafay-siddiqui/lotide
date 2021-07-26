const countLetters = function(string) {
  let count = {};
  for (let letter of string) {
    if (letter === " ") {
      continue;
    } else if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }
  return count;
};

module.exports = countLetters;