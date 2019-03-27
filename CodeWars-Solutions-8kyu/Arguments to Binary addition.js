/* Arguments to Binary addition
// https://www.codewars.com/kata/arguments-to-binary-addition/train/javascript
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base */

function arr2bin(arr){
  if (arr.includes(NaN)) return 'NaN';
  return arr.filter(function(v) {
    return parseInt(v) === v;
  }).reduce(function(a, v) {
    return a + v || 0;
  }, 0).toString(2); // JavaScript numbers natively support conversion to binary representations via the toString method:
}

// (255).toString(); // "255" (default is radix 10)
// (255).toString(2); // "11111111" (radix 2, i.e. binary)
// (255).toString(16); // "ff" (radix 16, i.e. hexadecimal)

// 
function arr2bin1(arr){
  return arr.reduce((acc, val) => acc + (typeof val === "number" ? val : 0), 0).toString(2);
}