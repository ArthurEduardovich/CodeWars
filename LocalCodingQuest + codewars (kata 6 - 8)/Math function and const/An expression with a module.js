const expressionValue = (a, b, c) => {
  let one = Math.abs(a - c) + Math.abs(b - c)
  let two = Math.abs(a + b + c);
  return +(one / two).toFixed(2);
};