// 1
function victoryInSwim(arr){
  const arrResult = [];
  for (let i = 0; i < arr.length; i++){
    arrResult.push(arr[i][1]);
  }
  return Math.min(...arrResult);
}

// 2
const minPositive = (arr) => {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] <= 0) continue;
    else arrRes.push(arr[i])
  }
  return arrRes.length === 0? null: Math.min(...arrRes);
}
console.log(minPositive([]))












