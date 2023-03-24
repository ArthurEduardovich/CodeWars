const oppositeArray = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] >= 0) {
      result.push(-arr[i])
    } else {
      result.push(Math.abs(arr[i]))
    }
  }
  return result;
}
console.log(oppositeArray([1, -2, 3]))