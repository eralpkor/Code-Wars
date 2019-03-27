/* Be Concise IV - Index of an element in an array
https://www.codewars.com/kata/be-concise-iv-index-of-an-element-in-an-array/train/javascript
Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. You may assume that all array elements are unique. */

// original code
// function find(array, element) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) return i;
//   }
//   return "Not found";
// }
function find(a, e) {
  return a.indexOf(e) === -1 ? 'Not found' : a.indexOf(e);
}

var find=(a,e)=>a.indexOf(e)==-1?"Not found":a.indexOf(e);