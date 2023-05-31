function scrollingText(str) {
  const arr = [];
  const length = str.length;
  arr.push(str.toUpperCase());
  for (let i = 0; i < length - 1; i++) {
    arr.push(arr[i].slice(1) + arr[i].slice(0, 1));
  }
  return arr;
}
console.log(scrollingText('ABC'));
