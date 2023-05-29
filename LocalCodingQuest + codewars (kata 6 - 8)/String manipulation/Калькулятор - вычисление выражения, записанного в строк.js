function calculateExpression(str) {
  let arr = [];
  let acc = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '+' && str[i] !== '-' && str[i] !== '*' && str[i] !== '/') {
      acc += str[i];
    } else {
      arr.push(+acc);
      arr.push(str[i]);
      acc = '';
    }
  }
  function calculate([fistN, op, twoN] = arr) {
    if (op === '+') return fistN + twoN;
    if (op === '-') return fistN - twoN;
    if (op === '/') return fistN / twoN;
    if (op === '*') return fistN * twoN;
  }
  arr.push(+acc);
  return calculate();
}
console.log(calculateExpression('0.25+20.05')); // 20.3
console.log(calculateExpression('1.5/0.5')); // 3
