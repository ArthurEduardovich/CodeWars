const squares = (x, n) => {
  let resultArray = [];
  if (n < 0 || n === 0){
    return resultArray;
  } else {
    let j = x;
    for (let i = 0; i < n; i++){
      resultArray.push(j);
      j = Math.pow(j, 2);
    }
  }
return resultArray;
}
console.log(squares(2, 5))