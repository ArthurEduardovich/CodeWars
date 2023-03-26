function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq)) === false) {
    return -1;
  } else {
  for (let i = sq + 1; i <= Number.MAX_SAFE_INTEGER; i++){
    if (Number.isInteger(Math.sqrt(i))) {
      return i;
     }
    }
  }
}
console.log(findNextSquare(114));