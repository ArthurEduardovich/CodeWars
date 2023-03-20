function power(a, n) {
  let sum = 1;
  for (let i = 0; i < n; i++){
    sum*= a;
  }
  return sum;
}
console.log(power(6, 7)); // 279 936