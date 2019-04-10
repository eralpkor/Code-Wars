/* Is the date today
https://www.codewars.com/kata/is-the-date-today/train/javascript
Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by just checking just the day. */

function isToday(date) {
  const today = new Date();
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
}

function isToday(date) {
  return new Date().toDateString() === date.toDateString();
}