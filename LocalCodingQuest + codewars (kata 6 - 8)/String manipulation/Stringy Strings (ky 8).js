// var # 1
function stringy(size) {
  return '10'.repeat(size).slice(0, size);
}
console.log(stringy(11));

// var # 2
function stringy2(size) {
  let result = '';
  for (let i = 1; i <= size; i++) {
    if (i % 2 === 0) result += '0';
    else result += '1';
  }
  return result;
}
console.log(stringy2(11));
