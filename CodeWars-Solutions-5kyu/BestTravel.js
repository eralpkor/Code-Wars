// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?

// Example:

// With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

// The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

// The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

// The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or null integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. With C++, C, Rust, Swift, Go, Kotlin return -1.

// Examples:

// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, Rust, Swift, Go)

// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

// helper function to find all sub arrays
function subArrays(arr) {
  // let subArr = []
  if (arr.length === 1) {
    return [arr];
  } else {
    subArr = subArrays(arr.slice(1));
    return subArr.concat(subArr.map(e => e.concat(arr[0])), [[arr[0]]]);
  }
}

// helper function to find all subarrays of length n within an array of arrays
function filterByLength(arr, n) {
  const result = arr.filter(a => a.length === n);
  return result;
}


function chooseBestSum(distance, maxTown, ls) {
  if (ls.length < maxTown) {
    return null;
  }

  const cache = filterByLength(subArrays(ls), maxTown);
  // const trip = [];
  let dist = 0;
  console.log(cache);

  for (const a of cache) {
    let sum = a.reduce((acc, val) => acc + val);
    console.log(sum);
    if (sum <= distance && sum >= dist) {
      dist = sum;
    }
  }

  return dist;
}

var ts = [50, 55, 57, 58, 60]

console.log(chooseBestSum(163, 3, ts)) // 163
// console.log(subArrays([1, 2, 3, 4, 5]))
// console.log(filterByLength([1, 2, 3, 4, 5], 3))


 // while (left < right) {
    //   num = element + ls[left] + ls[right];
    //   cache.push(num);
    //   left++;
    //   num = 0;
    // }

    // for (let i = 0; i < ls.length; i++) {
    //   const element = ls[i];
    //   let left = i + 1;
    //   let right = ls.length - 1;
  
    //   for (let j = right; j > left; j--) {
    //     num = element + ls[left] + ls[j];
    //     cache.push(num);
    //   }
    // }


    // for (let i = 0; i < ls.length - maxTown + 1; i++) {
    //   for (let j = i + 1; j < ls.length - 1; j++) {
        
    //   }
    // }