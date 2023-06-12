function solve(eq) {
  const sym = ['/', '*', '+', '-'];
  let result = '';
  let temp = '';
  for (let i = eq.length - 1; i >= 0; i--) {
    if (sym.includes(eq[i])) {
      result += temp.split('').reverse().join('') + eq[i];
      temp = '';
    } else {
      temp += eq[i];
    }
  }
  return result + temp.split('').reverse().join('');
}
console.log(solve('100*b/y')); // y/b*100
