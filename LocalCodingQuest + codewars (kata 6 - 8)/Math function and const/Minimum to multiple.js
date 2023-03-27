function minimum(a, x) {
  let arr = [];
  for (let i = 0; i <= x; i++){
    if ((a + i) % x === 0) arr.push(i);
    else continue;
  }
  for (let j = x; j >= 0; j--){
    if ((a - j) % x === 0) arr.push(j);
    else continue;
  }
  return Math.min(...arr);
}
let a = 25;
let b = -25;
console.log(minimum(10, 6));
console.log(Math.min());