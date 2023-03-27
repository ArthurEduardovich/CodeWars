function consecutive(arr) {
  let resultArr = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++){
    resultArr.push(i);
  }
  return resultArr.length - arr.length;
}
console.log(consecutive([5, 9, 11, 17])); // 9
console.log(consecutive([1, 2, 3, 4])); // 0
console.log(consecutive([4, 8, 6])); // 2
console.log(consecutive([4, 8, 6, 10, 12])); // 4
console.log(consecutive([1, 3, 12, 16]));