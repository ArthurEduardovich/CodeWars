function digitize(n) {
  return n.toString().split('').reverse().map((el) => Number(el))
}
console.log(digitize(32333))