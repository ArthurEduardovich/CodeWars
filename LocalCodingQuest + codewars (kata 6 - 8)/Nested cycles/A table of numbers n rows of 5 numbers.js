function numericalTable (n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (i === 1) result+= '';
    else result+= '\n'
    for (let j = 1; j <= 5; j++) {
      if (j === 5) result+= i;
      else result+= i + ' ';
    }
  }
  return result;
}

console.log(numericalTable(2));