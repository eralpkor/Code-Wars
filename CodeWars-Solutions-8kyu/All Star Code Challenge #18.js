// All Star Code Challenge #18

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// strCount('Hello', 'o') // => 1
// strCount('Hello', 'l') // => 2
// strCount('', 'z')      // => 0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1
// Solution 1 using forEach
function strCount(str, letter){
  var count = 0;
  str.split('').forEach(function(val) {
    if (val === letter) {
      count++;
    }
  });
  return count;
}
// Solution 2 with reduce
function strCount1(str, letter) {
  return str.split('').reduce(function(acc, val) {
    return val === letter ? acc++ : 0, acc;
  }, 0);
}
// ES6 solution with arrow functions.
var strCount2 = (s, l) => s.split('').reduce((a, v) => {v === l ? a++ : 0; return a;}, 0);