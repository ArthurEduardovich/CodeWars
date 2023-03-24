function nearestCafe(x, n, m){
  const distanceN = Math.abs(n - x);
  const distanceM = Math.abs(m - x);
  return (distanceN > distanceM)? 'Merci':
         (distanceM > distanceN)? 'Nonstop':
           'Merci';
}
console.log(nearestCafe(10, 1, 5));