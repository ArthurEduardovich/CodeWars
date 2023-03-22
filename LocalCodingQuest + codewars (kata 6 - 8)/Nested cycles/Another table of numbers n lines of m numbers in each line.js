function numericalTable (n, m) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (i === 1 ) result+= '';
    else result+= '\n'
    for (let j = 1; j <= m; j++) {
      if (j < m) result+= i + ' ';
      else result+= i;
    }
  }
  return result;
}
console.log(numericalTable(4, 3));