function getSum(a, b) {
  let r = 0;
  for (let i = a; i <= b; i++) {
    r+= i;
  }
  return r;
}
console.log(getSum(0, -1)) // -1
console.log(getSum(0, 1))
console.log(getSum(2, 2))
console.log(getSum(1, 1))
console.log(getSum(-1, 2))
console.log(getSum(-1, 0))
console.log(getSum(-5, -2))