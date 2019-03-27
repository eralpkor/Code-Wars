/* Calculate average
https://www.codewars.com/kata/calculate-average/train/javascript
Write function avg which calculates average of numbers in given list. */

function find_average(a) {
  return a.reduce(function(a, v) {
    return a + v;
  }) / a.length;
}

var find_average = (a) => a.reduce((a, v) => a + v) / a.length;

