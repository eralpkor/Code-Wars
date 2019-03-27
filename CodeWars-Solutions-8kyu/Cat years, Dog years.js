/* Cat years, Dog years
https://www.codewars.com/kata/cat-years-dog-years/train/javascript
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */

function humanYearsCatYearsDogYears(humanYears) {
  var result = [];
  result.push(humanYears, (humanYears - 1 ? 16 : 11) + 4 * humanYears, (humanYears - 1 ? 14 : 10 ) + 5 * humanYears);
  return result;
}

var humanYearsCatYearsDogYears = humanYears => [humanYears,( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,( humanYears - 1 ? 14 : 10 ) + 5 * humanYears];