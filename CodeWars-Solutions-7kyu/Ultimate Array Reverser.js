// Ultimate Array Reverser
// https://www.codewars.com/kata/ultimate-array-reverser/train/javascript
// Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

// Example:
// Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
// Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}


const ultimateReverse = s => {
  let str = s.join('').split('').reverse();
  let result = [];
  s.forEach(function(el) {
    result.push(str.splice(0, el.length).join(''));
  });

  return result;
};


// shorter...
const ultimateReverse = s => {
  let reversed = s.join('').split('').reverse();
  return s.map(word => reversed.splice(0, word.length).join(''));
}