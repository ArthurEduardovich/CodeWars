function getDivisorsCnt(n){
  let count = 0;
  for (let i = 0; i <= n; i++) {
    (n % i === 0)? count++: count;
  }
  return count;
}
console.log(getDivisorsCnt(4));
console.log(getDivisorsCnt(5));
console.log(getDivisorsCnt(12));