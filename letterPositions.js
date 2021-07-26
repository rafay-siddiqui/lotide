const letterPositions = function(sentence) {
  const results = {};
  let letters = sentence.split("");
  letters.forEach(function(letter, idx) {
    if (results[letter] && letter !== " ") {
      results[letter].push(idx);
    } else if (!results[letter] && letter !== " ") {
      results[letter] = [idx];
    }
  });
  return results;
};

module.exports = letterPositions;