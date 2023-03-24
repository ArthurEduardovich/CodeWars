const oppositePoint = (x) => {
  if (x >= 0) {
    return `N(${-x})`
  }
  return `N(${Math.abs(x)})`
}
console.log(oppositePoint(4))