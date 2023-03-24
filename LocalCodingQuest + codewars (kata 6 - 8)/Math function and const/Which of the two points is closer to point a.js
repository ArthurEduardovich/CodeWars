const nearestPoint = (a, b, c) => {
  const distanceB = Math.abs(b - a);
  const distanceC = Math.abs(c - a);
  if (distanceB > distanceC) {
    return 'c';
  }
  if (distanceC > distanceB) {
    return 'b';
  }
  if (distanceC === distanceB) {
    return 'distances are equal';
  }
}
console.log(nearestPoint(9, 6, 14))
console.log(nearestPoint(3, 0, 4))