function polydivisible(num) {
  const str = num.toString();
  const arr = [];
  const length = str.length;
  for (let i = 1; i <= length; i++) {
    arr.push(Number(str.slice(0, i)) / i);
  }
  return arr.filter((el) => !Number.isInteger(el)).length === 0;
}
console.log(polydivisible(1232));
