/**
 * https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript
 * 
 * 
 * Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
 * 
 * The left side letters and their power: 
 * w - 4
 p - 3
 b - 2
 s - 1

 The right side letters and their power:
  m - 4
 q - 3
 d - 2
 z - 1
 */

function alphabetWar(fight) {
  let left = 0, right = 0;
  const arr = fight.split('');
  const leftArr = [['w', 4], ['p', 3], ['b', 2], ['s', 1]];
  const rightArr = [['m', 4], ['q', 3], ['d', 2], ['z', 1]];

  // for LEFT
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < leftArr.length; j++) {
      if (arr[i] === leftArr[j][0]) {
        left += leftArr[j][1];
        arr.splice(arr.indexOf(leftArr[j][0]), 1);
        i--
      }
    }
  }

  // for RIGHT
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < rightArr.length; j++) {
      if (arr[i] === rightArr[j][0]) {
        right += rightArr[j][1];
        arr.splice(arr.indexOf(rightArr[j][0]), 1);
        i--
      }
    }
  }

  return right > left ? 'Right side wins!' : right < left ? 'Left side wins!' : "Let's fight again!"
}

function alphabetWar1(fight) {
  let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
  let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
  return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}

console.log(alphabetWar("z")) // , "Right side wins!" );
console.log(alphabetWar("zdqmwpbs")) // , "Let's fight again!" );
console.log(alphabetWar("zzzzs")) //, "Right side wins!" );

