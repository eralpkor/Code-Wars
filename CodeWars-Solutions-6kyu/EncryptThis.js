/* https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

Encrypt this!

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo" */

var encryptThis = function(text) {
  const arr = text.split(' ');
  
  return arr.map((val, i) => {
    if (val.length === 1) {
      return val.charCodeAt(0)
    } else {
      let char = val.split('');
      char[0] = val.charCodeAt(0);
      char[1] = val[val.length - 1];
      char[val.length - 1] = val[1];
      return char.join('')
    }
  }).join(' ');   
}

console.log(encryptThis("hello world"));

console.log(encryptThis('hello eralp'))