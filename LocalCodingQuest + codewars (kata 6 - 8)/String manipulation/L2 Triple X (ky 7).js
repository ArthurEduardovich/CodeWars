function tripleX(str) {
  const firstX = str.indexOf('x'); // индекс первого 'x'
  const twoX = str.indexOf('x', firstX + 1); // индекс второго 'x'
  return twoX - firstX === 1;
}
console.log(tripleX('xxwarmx')); // true
