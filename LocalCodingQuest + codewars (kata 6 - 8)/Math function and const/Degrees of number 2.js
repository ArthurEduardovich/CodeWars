function powersOfTwo(n){
  let resultArr = [];
  for (let i = 0; i < n; i++) {
    resultArr.push(2 << i)
  }
  return resultArr;
}

console.log(powersOfTwo(4))