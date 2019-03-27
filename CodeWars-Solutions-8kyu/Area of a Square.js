/* Area of a Square

Write the function squareArea(A) (square_area($A) in PHP) that finds the area of the red square when you have the length of the circular arc A. */

function squareArea(A){
  return +(Math.pow(2 * A / Math.PI, 2).toFixed(2));
}


