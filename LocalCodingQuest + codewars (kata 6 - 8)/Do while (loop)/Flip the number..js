function invertNumber(n){
  let a = n + '';
  let b = n;
  let c = '';
  let i = 0;
  do {
      c+= b % 10;
      b = Math.floor(b / 10);
      i++;
  } while (i <= a.length)
  return (c[c.length - 1] === '0')? +c / 10: +c;
}

console.log(invertNumber()) // 58056