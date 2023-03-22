function numericalTriangle(n){
  let r = '';
  for (let i = 1; i <= n; i++) {
    if (i === 1) r+= ''
    else r+= '\n'
    for (let j = 1; j <= i; j++) {
      if (j < i) r+= i + ' ';
      else r+= i;
    }
  }
  return r;
}
console.log(numericalTriangle(3))