function solve (n) {
  if (n % 10 !== 0) {
    return -1;
  }
  let sum = n;
  let count = 0;
  while (sum > 0) {
    if (sum >= 500) {
      sum -= 500;
      count++;
    }
    if (sum >= 200 && sum < 500) {
      sum -= 200;
      count++;
    }
    if (sum >= 100 && sum < 200) {
      sum -= 100;
      count++;
    }
    if (sum >= 50 && sum < 100) {
      sum -= 50;
      count++;
    }
    if (sum >= 20 && sum < 50) {
      sum -= 20;
      count++;
    }
    if (sum >= 10 && sum < 20) {
      sum -= 10;
      count++;
    }
  }
  return count;
}
console.log(solve(1250));
