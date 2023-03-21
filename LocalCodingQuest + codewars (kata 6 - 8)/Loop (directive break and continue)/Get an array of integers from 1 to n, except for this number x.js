function fillArray(n, x){
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i === x) continue;
    arr.push(i);
  }
  return arr;
}
console.log(fillArray(5, 2));