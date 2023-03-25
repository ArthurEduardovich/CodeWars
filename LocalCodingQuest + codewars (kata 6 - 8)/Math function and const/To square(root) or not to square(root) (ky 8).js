function squareOrSquareRoot (array) {
  let resultArray = [];
  for (let i = 0; i < array.length; i++){
    if (Number.isInteger(Math.sqrt(array[i]))) resultArray.push(Math.sqrt(array[i]));
    else resultArray.push(Math.pow(array[i], 2));
  }
  return resultArray;
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))