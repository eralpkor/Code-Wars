/* How many are smaller than me?
https://www.codewars.com/kata/how-many-are-smaller-than-me/train/javascript
function smaller(arr)
that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

For example:

smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
smaller([1, 2, 0]) === [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II? */

// Helper recursion version slightly faster
function smaller(array) {
  var result = []
  var temp = 0;

  function helper(arr) {
    if (arr.length === 0) return;

    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[0] > arr[i]) {
        temp++;
        continue;
      }
      temp = temp;
      continue;
    }
    result.push(temp);
    temp = 0;
    helper(arr.slice(1));
  }

  helper(array);
  return result;
}










function smaller(arr) {
  return arr.map(function (num, i) {
    return arr.slice(i).filter(function (val) {
      return val < num;
    }).length;
  })
}


// sorter but slower
function smaller(arr) {
  return arr.map((num, i) => {
    return arr.slice(i).filter(v => v < num).length
  });
}