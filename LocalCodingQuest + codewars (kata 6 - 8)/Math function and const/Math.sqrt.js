const squareRoot = (x) => x >= 0? +Math.sqrt(x).toFixed(2): 'Root of a negative number is NaN';
// *************************
const isSquare = (x) => {
  let sqrtX = Math.sqrt(x);
  if (Number.isInteger(sqrtX)){
    return `${x} is square of ${sqrtX}`;
  } else {
    return `${x} is not a square`;
  }
}
// console.log(isSquare(9))
// **************************
function expression(a, b, c){
  return +(Math.sqrt(a) + (Math.sqrt(Math.abs(b - c)) / (Math.pow(a, 3) + Math.pow(b, 2) + Math.pow(c, 4)))).toFixed(2);
}
// console.log(expression(1, 1, 1))

// **************************

const quadraticEquation = (a, b, c) => {
  const D = Math.pow(b, 2) - (4 * a * c);
  if (D < 0) {
    return 'There are no roots';
  }
  const x1 = ((-b + Math.sqrt(D)) / (2 * a));
  const x2 = ((-b - Math.sqrt(D)) / (2 * a));
  return [x1, x2]
}
// console.log(quadraticEquation(1, 2, 1))

// ***************************

function perimeter(x1, y1, x2, y2, x3, y3){
  const AB = Math.sqrt((Math.pow(x2 - x1, 2)) + (Math.pow(y2 - y1, 2)));
  const AC = Math.sqrt((Math.pow(x3 - x1, 2)) + (Math.pow(y3 - y1, 2)));
  const BC = Math.sqrt((Math.pow(x3 - x2, 2)) + (Math.pow(y3 - y2, 2)));
  return +(AB + AC + BC).toFixed(2);
}
console.log(perimeter(1, 1, 4, 1, 1, 5));