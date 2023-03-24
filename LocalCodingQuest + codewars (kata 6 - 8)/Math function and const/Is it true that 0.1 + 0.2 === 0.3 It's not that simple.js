function isSumEqualsNumber(a, b, c){
  return (a + b).toFixed(2) === c.toFixed(2);
}
console.log(isSumEqualsNumber(0.1, 0.2, 0.3));
