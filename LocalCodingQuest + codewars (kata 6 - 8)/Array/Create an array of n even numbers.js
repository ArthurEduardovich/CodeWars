// 1
function createEvenArray(n){
  let result = [];
  for (let i = 0, j = 0; i < n; i++){
    result.push(j);
    j+= 2;
  }
  return result;
}
console.log(createEvenArray(5))

// 2
function createOddArray(n){
  var arrResult = [];
  for(let i = 0, j = 1; i < n; i++){
    arrResult.push(j);
    j+= 2;
  }
  return arrResult;
}
console.log(createOddArray(5));

// 3
function pushElement(arr, value){
  arr.push(value);
  return arr;
}
console.log(pushElement([1, 2],'a'))

// 4
function createNegativeArray(n){
  let resultArray = [];
  for(let i = 0, j= -1; i < n; i++){
    resultArray.push(j);
    j-= 1;
  }
  return resultArray;
}

// 5
function alternationArray(n){
  var result = [];
  for(let i = 0; i <= n; i++){
    if(i % 2 === 0) result.push(i);
    if(i % 2 !== 0) result.push(-i);
  }
  return result;
}

// 6
function createArrayFromNToM(n, m){
  var result = [];
  for(let i = n; i <= m; i++){
    result.push(i);
  }
  return result;
}
console.log(createArrayFromNToM(5, 10))
