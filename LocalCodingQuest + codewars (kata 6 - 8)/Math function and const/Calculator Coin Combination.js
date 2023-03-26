function coinCombo (cents) {
  let a = 25, b = 10, c = 5, d = 1;
  let a1 = 0, b1 = 0, c1 = 0, d1 = 0;
  if (!cents) {
    return [a1, b1, c1, d1]
  }
  for (let i = cents; i >= 0;) {
    if (i >= a) {
      a1++;
      i -= a;
      continue;
    }
    if (i >= b && i < a) {
      b1++;
      i -= b;
      continue;
    }
    if (i >= c && i < b) {
      c1++;
      i -= c;
      continue;
    }
    if (i >= d && i < c) {
      d1++;
      i -= d;
      continue;
    }
    return [d1, c1, b1, a1];
  }
}
console.log(coinCombo(43))