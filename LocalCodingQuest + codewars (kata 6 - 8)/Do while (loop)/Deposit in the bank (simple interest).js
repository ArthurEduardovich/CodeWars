function bankPercent(p) {
  let interest = ((1000 / 100) * p);
  let sum = 1000;
  let count = 0;
  do {
    sum+= interest;
    count++;
  } while (sum < 1500);
  return count;
}
console.log(bankPercent(10));