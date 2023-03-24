const changeNumber = (num) => {
  if (num < 0) {
    return Math.abs(num);
  }
  if (num >= 0) {
    return num * 2;
  }
}
console.log(changeNumber(0));