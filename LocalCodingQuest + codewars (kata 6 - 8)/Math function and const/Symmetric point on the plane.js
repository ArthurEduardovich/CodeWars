const oppositePoint = (x, y) => {
  let invertX = x >= 0? -x: Math.abs(x);
  let invertY = y >= 0? -y: Math.abs(y);
  return `N(${invertX}, ${invertY})`
}
console.log(oppositePoint(4, 0))