/* https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript

Ordered Count of Characters

Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]] */

var orderedCount = function (text) {
  let arr = Object.entries([...text].reduce((acc, val) => {
    return !acc.hasOwnProperty(val) ? acc[val] = 1 : acc[val]++, acc;
  }, {}));
  // Create array from string without duplicates 
  let set = [...new Set(text)];
  // create an 2D array sorted as argument
  return arr.reduce((acc, val) => {
    acc[set.indexOf(val[0])] = val;
    return acc;
  }, []);
}


console.log(orderedCount('abracadabra')) //  [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]]
console.log('First one ',orderedCount('233312')) 
