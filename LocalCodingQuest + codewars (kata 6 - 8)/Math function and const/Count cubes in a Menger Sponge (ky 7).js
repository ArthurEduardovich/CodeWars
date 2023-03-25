function calc_ms(n) {
  let r = 1;
  for (let i = 1; i <= n; i++){
    r*= 20;
  }
  return r;
}
console.log(calc_ms(0))