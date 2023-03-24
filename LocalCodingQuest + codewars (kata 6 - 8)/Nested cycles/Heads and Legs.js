function animals (heads, legs) {
  if (heads === 0 && legs === 0) {
    return [0, 0];
  }
  if (heads === 0 || legs === 0) {
    return  'No solution';
  }
    let calcChicken = (heads - ((legs - (heads * 2)) / 2));
    let calcCow = heads - calcChicken;
    if (Number.isInteger(calcChicken) === false || Number.isInteger(calcCow) === false || calcCow < 0 || calcChicken < 0) return 'No solution';
    else return [calcChicken, calcCow];
}
console.log(animals(-45, 5));
console.log(animals(500, 0));
console.log(animals(72, 200));