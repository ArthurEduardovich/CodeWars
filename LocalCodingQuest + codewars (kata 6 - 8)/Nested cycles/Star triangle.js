function starTriangle (n) {
  let r = '';
  for (let i = 1; i <= n; i++) {
    if (i === 1 ) r+= '';
    else r+= '\n'
    for (let j = 1; j <= i; j++) {
      r+= '*';
    }
  }
  return r;
}
console.log(starTriangle(7))