function sumsInArray(arr){
  let r = [];
  for (let i = 0; i < arr.length; i++) {
    let s = 0;
    for (let j = 0; j < arr[i].length; j++) {
      s+= arr[i][j];
    }
    r.push(s);
  }
  return r;
}
console.log(sumsInArray([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18]]))