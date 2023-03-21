function fillArray (n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    if (i % 3 === 0) continue;
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(fillArray(20));