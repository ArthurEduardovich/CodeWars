const oppositeSum = (a, b, c) => {
  let sum = a + b + c;
  return (sum < 0)? Math.abs(sum): -sum;
}
console.log(oppositeSum(-1, -2 ,-3));