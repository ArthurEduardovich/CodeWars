function sumTriangularNumbers (n) {
  const a = n * (n + 1) * (n + 2) / 6;
  return a;
}
console.log(sumTriangularNumbers(34))