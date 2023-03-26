// 1
function integerPartsOfElements(arr){
  return arr.map((el) => Math.trunc(el));
}

// 2
function nDecimalDigits(num, n){
  return (Math.trunc(num * Math.pow(10, n))) / Math.pow(10, n);
}
console.log(nDecimalDigits(6.642867, 3))