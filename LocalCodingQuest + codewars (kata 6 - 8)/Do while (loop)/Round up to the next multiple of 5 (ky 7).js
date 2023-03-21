function roundToNext5 (n) {
  if (n === 0) {
    return 0;
  }
  if (n > 0) {
    for (let i = n; i <= i + 5; i++) {
      if (i % 5 !== 0) continue;
      return i;
    }
  }
  if (n < 0) {
    for (let i = n; i <= i + 5; i++) {
      if (i % 5 !== -0) continue;
      return i;
    }
  }
}
console.log(roundToNext5(-2))
console.log(roundToNext5(-36))
