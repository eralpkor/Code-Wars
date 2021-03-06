/* Get the mean of an array
https://www.codewars.com/kata/get-the-mean-of-an-array/train/javascript
demic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty. */

function getAverage(marks){
  var result = marks.reduce(function(a, n) {
    return a += n, a;
  })
  return Math.floor(result / marks.length)
}