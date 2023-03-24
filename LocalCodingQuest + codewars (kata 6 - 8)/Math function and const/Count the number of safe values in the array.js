function countOfSafeNumbers(arr){
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number.isSafeInteger(arr[i]) === false) continue;
    count++;
  }
  return count;
}





console.log(countOfSafeNumbers([NaN, Infinity, -0]));