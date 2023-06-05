function duplicateSandwich(arr) {
  const indexDup = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) indexDup.push(i);
    else continue;
  }
  return arr.slice(indexDup[0] + 1, indexDup[1]);
}
console.log(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8])); // => [2, 3, 4, 5, 6]
