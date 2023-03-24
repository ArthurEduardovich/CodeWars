const changeMax = (a, b) => {
  if (a > b && a <= 0) {
    return Math.abs(a);
  }
  if (a > b && a >= 0) {
    return -a;
  }
  if (b > a && b <= 0) {
    return Math.abs(b);
  }
  if (b > a && b >= 0) {
    return -b;
  }
  if (a === b) {
    return 'The numbers are equal';
  }
}
console.log(changeMax(-7, 0))