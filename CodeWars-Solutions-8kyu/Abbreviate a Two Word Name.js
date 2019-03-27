// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.
// This is a good solution if names were starting with uppercase

// My Solution
function abbrevName(name) {
  return (name[0] + '.' + name[name.indexOf(' ') + 1]).toUpperCase();
}

//