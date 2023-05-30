function rotate(str) {
  if (!str) return [];
  const arr = [];
  arr.unshift(str);
  for (let i = 0; i < str.length - 1; i++) {
    arr.unshift(arr[0].slice(-1) + arr[0].slice(0, -1));
  }
  return arr;
}
// console.log(rotate('Hello'));
