/* https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript

Maximum Multiple

Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 */



function maxMultiple(divisor, bound) {
  return bound - bound % divisor
}

console.log(maxMultiple(2,7)) // 6
console.log(maxMultiple(37,200)) // ,185