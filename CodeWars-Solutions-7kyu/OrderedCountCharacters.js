/* https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript

Ordered Count of Characters

Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]] */

var orderedCount = function (text) {
  // let obj =  
  return Object.entries([...text].reduce((acc, val) => {
    return !acc.hasOwnProperty(val) ? acc[val] = 1 : acc[val]++, acc;
  }, {}));

  // for (const [a, b] of obj) {
  //   console.log(a, b)
  // }
}

function orderCount(sortMe, text) {
  var arr = orderedCount(sortMe);
  for (const [a, b] of arr) {
    for (let i = 0; i < arr.length; i++) {
      
    }
  }
}

console.log(orderedCount('abracadabra')) //  [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]]
console.log('First one ',orderedCount('233312')) 
// expected [ [ '1', 1 ], [ '2', 2 ], [ '3', 3 ] ] to deeply equal [ [ '2', 2 ], [ '3', 3 ], [ '1', 1 ] ]
console.log('Last one ' ,orderCount('233312')) //  [['2', 2], ['3', 3], ['1', 1 ]]
/* expected [ [ '0', 7 ],
  [ '1', 11 ],
  [ '2', 12 ],
  [ '3', 13 ],
  [ '4', 4 ],
  [ '5', 8 ],
  [ '6', 7 ],
  [ '7', 8 ],
  [ '8', 9 ],
  [ '9', 9 ] ] 
  to deeply equal 
  [ [ '5', 8 ],
  [ '6', 7 ],
  [ '1', 11 ],
  [ '7', 8 ],
  [ '8', 9 ],
  [ '9', 9 ],
  [ '0', 7 ],
  [ '2', 12 ],
  [ '3', 13 ],
  [ '4', 4 ] ] */