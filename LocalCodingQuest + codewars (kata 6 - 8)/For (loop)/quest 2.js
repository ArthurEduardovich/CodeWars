const sumMultN = (n, m) => {
  let sum = 0;
  for (let i = n; i <= m; i++) {
    if (i % n !== 0) continue;
    sum += i;
  }
  return sum;
};
console.log(sumMultN(2, 9));