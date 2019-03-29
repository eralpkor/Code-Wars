/* Check the exam
https://www.codewars.com/kata/check-the-exam/train/javascript
The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. The second one is "answers" array and contains student's answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0 */

function checkExam(array1, array2) {
  var score = 0;
  array1.forEach(function(e1, i) {
    if (e1 === array2[i]) {
      score += 4
    }
    if (array2[i] === '') {
      score += 0;
    }
    else if (e1 !== array2[i]) {
      score -= 1;
    }
  })
  return score < 0 ? 0 : score;
}

// Sorter version
function checkExam(array1, array2) {
  var score = null;
  array1.forEach(function(e1, i) {
    e1 === array2[i] ? score += 4 : array2[i] === '' ? e1 !== array2[i] : score--;
  })
  return score < 0 ? 0 : score;
}

