// 1
const maxSum = (a, b) => Math.max(a, b);

// 2
const max = (arr) => {
  return arr.length === 0? []: Math.max(...arr);
}

// 3
const maxMin = (arr) => {
  if (arr.length){
    return [Math.max(...arr), Math.min(...arr)]
  } else {
    return [];
  }
}
console.log(maxMin([3, 4, 8, 1]));

// 4
const differenceMaxMin = (arr) => {
  if (arr.length) return Math.max(...arr) - Math.min(...arr);
  return null;
}

// 5
const maxNegative = (arr) => {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] >= 0) continue;
    else resultArr.push(arr[i]);
  }
  return (resultArr.length > 0)? Math.max(...resultArr): null;
}
console.log(maxNegative([3, 54, -21, -89, 0]))