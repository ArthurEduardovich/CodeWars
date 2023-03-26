function dutyFree(normPrice, discount, hol){
  const calcNumDiscount = () => (normPrice / 100) * discount;
  return Math.floor(hol / calcNumDiscount());
}
console.log(dutyFree(12, 50, 1000))