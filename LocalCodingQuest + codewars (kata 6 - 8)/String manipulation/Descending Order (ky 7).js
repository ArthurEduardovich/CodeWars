function descendingOrder(n) {
  const sortN = n
    .toString()
    .split('')
    .map((el) => Number(el))
    .sort((x, y) => y - x);
  return +sortN.join('');
}
console.log(descendingOrder(123456789)); // 987654321
