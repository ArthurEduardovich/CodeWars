function getDivisorsCnt(n){
  let count = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) continue;
    count++;
  }
  return count;
}
console.log(getDivisorsCnt(4));
console.log(getDivisorsCnt(5));
console.log(getDivisorsCnt(12));