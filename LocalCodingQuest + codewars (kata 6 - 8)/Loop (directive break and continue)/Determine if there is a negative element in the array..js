function isNegativeInArray (arr){
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result = true;
      break;
    }
  }
  return result;
}
console.log(isNegativeInArray([-1, 2, 3, 4, 4]))