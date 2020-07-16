// https://www.codewars.com/kata/5572f7c346eb58ae9c000047
// ###Task: You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// ####Rules/Note:

// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// ###Pattern:

// 1
// 22
// 333
// ....
// .....
// nnnnnn
// ###Examples:

// pattern(5):

// 1
// 22
// 333
// 4444
// 55555


function pattern(n){
  // set output to empty string
  var output="";
  // check if n is less than 1 to stop running rest of the code
    if (n < 1) {
     return output;
   }
   // loop thoroug th rows
   for (let i = 1; i <= n; i++) {
   // loop through the colums
     for (let j = 1; j <= i; j++) {
     // add to the string output
       output += i;
     }
     // adding a new line except for the last one
     if (i !== n) {output += '\n';}
   }
   
  return output;
 }