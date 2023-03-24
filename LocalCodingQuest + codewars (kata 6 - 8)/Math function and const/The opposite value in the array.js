function oppositeInArray(arr, num){
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num && arr[i] === 0 && num === 0) return i;
    if (arr[i] < 0 && Math.abs(arr[i]) === num) return i;
    if (arr[i] >= 0 && (-arr[i]) === num) return i;
  }
}
console.log(oppositeInArray([100, 0, 1, 222], 222))