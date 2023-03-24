function invert(array) {
  let result = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] >= 0) result.push(-array[i]);
    if (array[i] < 0) result.push(Math.abs(array[i]))
  }
  return result;
}