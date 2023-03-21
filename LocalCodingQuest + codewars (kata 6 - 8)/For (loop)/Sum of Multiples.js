function sumMul (n, m) {
  let sum = n;
  for (let i = n; i <= m; i++) {
    if (i % 2 !== 0) continue;
    sum+= i + 3;
    i+= n;
  }
  return m > n && m !== 0? sum: 'INVALID';
}
console.log(sumMul(0, 0));
console.log(sumMul(2, 9));
console.log(sumMul(4, -7));
console.log(sumMul(3, 13));