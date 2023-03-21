function arrayOfDigits(n) {
  let arr = [];
  let i = 0;
  let a = n;
  do {
    arr.push(a % 10);
    a = Math.floor(a / 10);
    i++;
  } while (i < String(n).length)
  return arr;
}
console.log(arrayOfDigits(123456));
