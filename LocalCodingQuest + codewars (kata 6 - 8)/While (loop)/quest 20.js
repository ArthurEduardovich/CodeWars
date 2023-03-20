function squaresNeeded(grains) {
  let s = 0;

  while(2 ** s - 1 < grains) {
    s++;
  }
  return s;
}
console.log(squaresNeeded(4))