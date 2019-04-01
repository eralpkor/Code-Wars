function smaller(array) {
  return array.map(function(num, i) {
    return array.slice(i+1).filter(function(value) {
      return value < num;
    }).length;
  })
}

// [1, 2, 3].splice(1)

function smaller(array) {
  var len = array.length;
  var output = [];

  for (var i = len; i > 0; i--) {
    var num = array[i];
    array.pop();
    var res = array
     .filter(function(value) {
      return value > num;
    }).length;
    output.push(res);
  }
  return output;
}

function smaller(arr) {
  let result = [];
  let count = 0;

  if (arr.length === 0) return result;
  if (arr[0] > arr[1]) {
    count++;
  } else {
    count = count;

  }
  result = result.concat(smaller(arr.slice(1)));
  return result;
}

