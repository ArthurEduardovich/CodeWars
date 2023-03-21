function bankPercent (money, percent, period){
  let i = 1;
  do {
    money+= ((money / 100) * percent);
    i++;
  } while (i <= period);
  return money.toFixed(2);
}

console.log(bankPercent(1000, 10, 1)); // 1.100
console.log(bankPercent(1000, 10, 2));   // 1.210