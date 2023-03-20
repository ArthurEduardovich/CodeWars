const SeriesSum = (n) => {
  let sum = 1;
  let j = 4;
  for (let i = 1; i < n; i++) {
    sum+= 1/j;
    j+= 3;
  }
  return n === 0? '0.00': sum.toFixed(2);
};
console.log(SeriesSum(4));
console.log(SeriesSum(5));
console.log(SeriesSum(0));