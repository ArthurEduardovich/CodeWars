function halvingSum(n) {
  let sum = 0;
  for (let i = n; i >= 1; i = Math.floor(i / 2)) {
    sum+= i;
  }
  return sum;
}
console.log(halvingSum(25));
console.log(halvingSum(127));