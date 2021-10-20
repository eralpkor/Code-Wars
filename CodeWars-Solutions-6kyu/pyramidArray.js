// https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript

// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

const pyramid = n => {
  const result = [];
  let arr = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      arr.push(1)
    }
    result.push(arr);
    arr = [];
  }

  return result;
}

function pyramid2(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    result.push(Array(i).fill(1))
  }

  return result;
}

console.log(pyramid2(5))