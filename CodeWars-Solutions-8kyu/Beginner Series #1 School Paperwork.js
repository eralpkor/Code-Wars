/* Beginner Series #1 School Paperwork
https://www.codewars.com/kata/beginner-series-number-1-school-paperwork/train/javascript
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need.

Example:
paperwork(5, 5) == 25
Note! if n or m < 0 return 0!  */

var paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m;