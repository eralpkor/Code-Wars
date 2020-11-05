/* https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

Backspaces in string

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  "" */

function cleanString(s) {
  s = s.split``; // O(len).
  let i = 0

  while (i < s.length) {
    if (s[i] === '#') {
      s[i] = '';
      s[i-1] = '';
      s = s.filter(v => v !== '');
      i -= 2;
    }
    i++
  }

  return s.join``;
};

function clean_string(s) {
  const r = new Array;
  [...s].map((v) => (v === '#' ? r.pop() : r.push(v)));
  return r.join``;
}

console.log(cleanString('abc#d##c')) // "ac"
console.log(clean_string('abc#d##c')) // "ac"

console.log(clean_string('abc####d##c#')) // ""
