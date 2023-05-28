function calculateExpression(str) {
  let arr = [];
  let indexSymbol = 0;
  let acc = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])){
        acc+= str[i];
    } else {
        arr.push(+acc);
        acc = ''
        indexSymbol = i;
    }
  }
  arr.push(+acc)
  return 
}
console.log(calculateExpression('21+39')) // 60
