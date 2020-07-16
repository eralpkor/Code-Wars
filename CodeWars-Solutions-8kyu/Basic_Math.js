// Basic Math (Add or Subtract)

// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

function calculate(str) {
  let result = str.split('plus')
                  .join(' ')
                  .split('minus')
                  .join(' -')
                  .split(' ')
                  .reduce((acc, val) => acc + +val, 0);
  return String(result);
}

function calculate(str) {
  return eval(str.split("plus").join("+").split("minus").join("-")).toString();
}