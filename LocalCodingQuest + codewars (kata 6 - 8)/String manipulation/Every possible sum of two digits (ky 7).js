function digits(n) {
  const nToArr = n
    .toString()
    .split('')
    .map((el) => Number(el));
  const result = [];
  for (let i = 0; i < nToArr.length; i++) {
    for (let j = i + 1; j < nToArr.length; j++) {
      result.push(nToArr[i] + nToArr[j]);
    }
  }
  return result;
}
console.log(digits(156));
