function highAndLow(num) {
  const numToArray = num.split(' ').map((el) => +el);
  return `${Math.max(...numToArray)} ${Math.min(...numToArray)}`;
}
console.log(highAndLow('1 2 3 4 5'));
