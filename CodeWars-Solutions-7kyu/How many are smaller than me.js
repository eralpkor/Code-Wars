/* How many are smaller than me?
https://www.codewars.com/kata/how-many-are-smaller-than-me/train/javascript
function smaller(arr)
that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

For example:

smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
smaller([1, 2, 0]) === [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II? */

function smaller(array) {
  var result = []
  var len = array.length - 1;
  var cache = 0;
  var num = 0;

  while (len >= array.length) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[len]) {
        cache++
      } else {
        cache = cache;
    }
    }
    result.push(cache);
    array.splice(0, 1);
    cache = 0;
    len--;
  }
  
  return result;
}


function smaller(array) {
  var result = [];
  cache = 0;
  for (let i = array.length - 1; i >= 0; i--) {

    if (array[0] > array[i]) {
      cache++;
    } else {
      cache = cache;
    }
    result.push(cache);
    array.splice(0, 1);
  }
  return result;
}

function smaller(array) {
  var base = 0
  while (base <= array.length) {
    
  }
}