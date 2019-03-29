/* Train to remove duplicates from an array with filter()
https://www.codewars.com/kata/train-to-remove-duplicates-from-an-array-with-filter/train/javascript
In this kata your task is to remove all the duplicates from the array using a standart build-in method - Array.prototype.filter(); return the array containing unique values only.

Tip: use the index of value(s) to solve this kata

If you are not familiar with filter() - info is here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

For example:

var arr = [4];

unique(arr); // should return [4]

var arr = [1,1,1,2,2,3];

unique(arr); // should return [1,2,3] */

var unique = (a) => a.filter((v, i, a) => a.indexOf(v) === i);