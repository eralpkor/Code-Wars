/* https://www.codewars.com/kata/56c30ad8585d9ab99b000c54/train/javascript

Play with two Strings

Your task is to Combine two Strings. But consider the rule...

By the way you don't have to check errors or incorrect input values, everything is ok without bad tricks, only two input strings and as result one output string;-)...

And here's the rule:
Input Strings a and b: For every character in string a swap the casing of every occurrence of the same character in string b. Then do the same casing swap with the inputs reversed. Return a single string consisting of the changed version of a followed by the changed version of b. A char of a is in b regardless if it's in upper or lower case - see the testcases too.
I think that's all;-)...

Some easy examples:

Input: "abc" and "cde"      => Output: "abCCde" 
Input: "ab" and "aba"       => Output: "aBABA"
Input: "abab" and "bababa"  => Output: "ABABbababa"
Once again for the last example - description from KenKamau, see discourse;-):

a) swap the case of characters in string b for every occurrence of that character in string a
char 'a' occurs twice in string a, so we swap all 'a' in string b twice. This means we start with "bababa" then "bAbAbA" => "bababa"
char 'b' occurs twice in string a and so string b moves as follows: start with "bababa" then "BaBaBa" => "bababa"

b) then, swap the case of characters in string a for every occurrence in string b
char 'a' occurs 3 times in string b. So string a swaps cases as follows: start with "abab" then => "AbAb" => "abab" => "AbAb"
char 'b' occurs 3 times in string b. So string a swaps as follow: start with "AbAb" then => "ABAB" => "AbAb" => "ABAB".

c) merge new strings a and b
return "ABABbababa" */

function workOnStrings(a, b){
  let aLower = a.toLowerCase();
  let bLower = b.toLowerCase();


  // create a lowercase obj
  let aObj = [...aLower].reduce((acc, val) => {
    return (!acc.hasOwnProperty(val)) ? acc[val] = 1 : acc[val]++, acc;
  }, {});
  
  let bObj = [...bLower].reduce((acc, val) => {
    return (!acc.hasOwnProperty(val)) ? acc[val] = 1 : acc[val]++, acc;
  }, {});
  
  function swap(s, n) {
    var temp = s.toLowerCase();
    if (bObj.hasOwnProperty(temp)) {
      n = bObj[temp];
    } else {
      n = 0;
    }

    for (let i = 0; i < n; i++) {
      if (s === s.toUpperCase()) {
        s = s.toLowerCase()
      } else {
        s = s.toUpperCase();
      }
    }
    return s;
  }
  function swap2(s, n) {
    var temp = s.toLowerCase();
    if (aObj.hasOwnProperty(temp)) {
      n = aObj[temp];
    } else {
      n = 0;
    }

    for (let i = 0; i < n; i++) {
      if (s === s.toUpperCase()) {
        s = s.toLowerCase()
      } else {
        s = s.toUpperCase();
      }
    }
    return s;
  }

  let aArr = [...a].map(swap).join('');
  let bArr = [...b].map(swap2).join('');
  
  return aArr.concat(bArr);
}

console.log(workOnStrings("abab", "bababa")) //"ABAB bababa");
console.log(workOnStrings("abc","cde")) // "abCCde"
console.log(workOnStrings("abcdeFgtrzw", "defgGgfhjkwqe")) // "abcDeFGtrzW DEFGgGFhjkWqE"

// expected 'abcDeFgtrzW DEfGGGfhjkWqE' to equal 'abcDeFGtrzW DEFGgGFhjkWqE' abcDefGtrzWDEFGGGFhjkWqE

// expected 'abcDefgtrzWDEfGgGfhjkWqE' to equal 'abcDeFGtrzWDEFGgGFhjkWqE' // to lower

// expected 'abcDeFgtrzWDEfGGGfhjkWqE' to equal 'abcDeFGtrzWDEFGgGFhjkWqE'



// console.log(swap('E', 3))


// for (let i = 0; i < aLower.length; i++) {
  //   if (!aObj.hasOwnProperty(aLower[i])) {
  //     aObj[aLower[i]] = [1, false]
  //   } else {
  //     aObj[aLower[i]][0] ++
  //   }
  // }


  // for (let i = 0; i < bLower.length; i++) {
  //   if (!bObj.hasOwnProperty(bLower[i])) {
  //     bObj[bLower[i]] = [1, false]
  //   } else {
  //     bObj[bLower[i]][0] ++
  //   }
  // }


  // for (const key in aObj) {
  //   if (aObj.hasOwnProperty(key)) {
  //     if (aObj[key][0] % 2 === 0) {
  //       aObj[key][1] = true
  //     }
  //   }
  // }
  // for (const key in bObj) {
  //   if (bObj.hasOwnProperty(key)) {
  //     if (bObj[key][0] % 2 === 0) {
  //       bObj[key][1] = true
  //     }
  //   }
  // }