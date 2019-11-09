// Find all pairs


// Array can be empty or contain only one value; in this case return 0
// If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
// Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
// Examples
// [1, 2, 5, 6, 5, 2]  -->  2
// ...because there are 2 pairs: 2 and 5

// [1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
// ...because there are 4 pairs: 2, 20, 6 and 2 (again)


function duplicates(array) {
  var counts = {};
  var num = 0;
  array.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  Object.values(counts).forEach(value => {
    if (value % 2 === 1) {
      value = value - 1;
      value = value / 2;
      num += value;
    } else {
      value = value / 2;
      num += value;
    }
  });
  return num;
}

function duplicates(array) {
  let res = 0, odd = new Set();
  for (let x of array) {
    if (odd.delete(x))
      res++;
    else
      odd.add(x);
  }
  return res;
}

function duplicates(array){
  return Array.from(new Set(array)).reduce((a,b) => a + Math.floor(array.filter(elem => elem===b).length / 2), 0)
}