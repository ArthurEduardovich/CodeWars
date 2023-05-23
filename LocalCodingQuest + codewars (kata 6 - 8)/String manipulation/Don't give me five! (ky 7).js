function dontGiveMeFive(start, end) {
  const resArr = [];
  for (let i = start; i <= end; i++) {
    resArr.push(String(i));
  }
  return resArr.filter((el) => !el.includes('5')).length;
}
console.log(dontGiveMeFive(1, 9)); // 8