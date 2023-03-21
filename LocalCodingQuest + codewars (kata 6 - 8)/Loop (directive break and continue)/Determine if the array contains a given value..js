function isElementIncluded(arr, x){
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      result = true;
      break;
    }
  }
  return result;
}
console.log(isElementIncluded([2, 2, 1], 3))