function sumOfFractionals(n){
  let j = 1;
  for (let i = 2; i <= n; i++) {
    j+= 1/i;
  }
  return +j.toFixed(2);
}
console.log(sumOfFractionals(5));