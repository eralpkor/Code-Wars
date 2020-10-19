/* https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

Sum of array singles

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. */

function repeats(arr){
  let result = {};
  let higher = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.hasOwnProperty(arr[i])) {
      result[arr[i]] = 1;
    } else {
      result[arr[i]] ++
    }
  }

  for (const key in result) {
    if (result.hasOwnProperty(key)) {
      if (result[key] < 2) {
        higher.push(+key)
      }
    }
  }

  return higher.reduce((acc, val) => {
    return acc + val
  }, 0)
};

function repeats1(arr) {
  return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((acc, val) => acc + val)
}

console.log(repeats([4,5,7,5,4,8])) // 15
console.log(repeats1([4,5,7,5,4,8])) // 15