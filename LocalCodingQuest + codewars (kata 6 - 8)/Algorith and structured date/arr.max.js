const arr = [-1392, -1920, -7, -453, -91234];

// function lowWriteOff (array) {
//   let value = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < array.length; i++){
//     value = Math.min(Math.abs(value), Math.abs(array[i]))
//   }
//   return -value;
// }
// console.log(lowWriteOff(arr));
function lowWriteOff (array) {
  result = array.reduce() => Math.max(array)
  return result;
}
console.log(lowWriteOff(arr))
