function firstEvenElement(arr){
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i], i);
      break;
    }
  }
  return result;
}
console.log(firstEvenElement([1, 3, 5, 6]));