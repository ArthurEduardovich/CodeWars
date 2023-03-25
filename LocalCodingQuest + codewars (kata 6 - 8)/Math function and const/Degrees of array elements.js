function powerArray(arr){
  let arrResult = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) arrResult.push(Math.pow(arr[i], 2))
    else arrResult.push(Math.pow(arr[i], 3))
  }
  return arrResult;
}

console.log(powerArray([1, 2, 3, 5]))