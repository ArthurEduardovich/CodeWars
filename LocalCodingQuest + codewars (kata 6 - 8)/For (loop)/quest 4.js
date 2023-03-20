function fractional(n){
  let a = 1;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    a+= i;
    b*= i;
  }
  return +(a / b).toFixed(3);
}
console.log(fractional(4));