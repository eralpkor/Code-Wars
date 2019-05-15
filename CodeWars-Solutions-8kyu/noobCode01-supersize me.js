/* noobCode 01: SUPERSIZE ME.... or rather, this integer!
https://www.codewars.com/kata/noobcode-01-supersize-me-dot-dot-dot-or-rather-this-integer/train/javascript
Write a function that rearranges an integer into its largest possible value.

superSize(123456) //654321
superSize(105) // 510
superSize(12) // 21
If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

 */

function superSize(num){
  var result = num.toString().split('').map(Number);
  var nums = result.sort(function (a, b) {
    return b - a;
  }).join('');

  return +nums;
}

// Same result
function superSize(num){
  return +(num.toString().split('').sort((a, b) => {
    b - a;
  }).join(''));
}
