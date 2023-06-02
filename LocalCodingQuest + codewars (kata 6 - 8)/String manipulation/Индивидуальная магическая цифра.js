function magicNumber(str) {
  let sum = 0;
  for (const el of str) {
    if (el === '/') continue;
    else sum += +el;
  }
  function recursion(s) {
    let result = s;
    while (result >= 10) {
      result = result
        .toString()
        .split('')
        .reduce((acc, el) => (acc += +el), 0);
    }
    return result;
  }
  return recursion(sum);
}
console.log(magicNumber('7/9/1992'));
