// Removing Elements
// https://www.codewars.com/kata/removing-elements/train/javascript
// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

// Example:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty, so you don't have to worry about that!


function removeEveryOther(arr){
  var result = [];
  for (let i = 0; i < arr.length; i+=2) {
    result.push(arr[i])
  }
  return result;
}

