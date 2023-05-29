function firstDigitCount(str) {
  let count = 0;
  let acc = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9' && acc === '') acc = str[i];
    if (str[i] === acc) count++;
  }
  return count;
}
console.log(firstDigitCount('Arrow11'));
