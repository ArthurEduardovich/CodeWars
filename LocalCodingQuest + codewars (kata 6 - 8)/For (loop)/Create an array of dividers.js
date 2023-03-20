function dividers(n){
  let resultArr = [1];
  for (let i = 2; i <= n; i++) {
    if (n % i !== 0) continue;
    resultArr.push(i);
  }
  return resultArr;
}
console.log(dividers(12));