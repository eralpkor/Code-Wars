/* https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

Alternate capitalization

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces. */

function capitalize(s){
  let first = '';
  let second = '';

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      first += s[i].toUpperCase();
      second += s[i].toLowerCase();
    } else {
      first += s[i].toLowerCase();
      second += s[i].toUpperCase();
    }
  }
  
  return [first, second]
};

console.log(capitalize("codewars")) //['CoDeWaRs', 'cOdEwArS']

// refactor
const caps = (s) => {
  return [[...s].map((val, i) => i % 2 === 0 ? val.toUpperCase() : val).join(''),
          [...s].map((val, i) => i % 2 !== 0 ? val.toUpperCase() : val).join('')]
}

console.log(caps('codewars'))