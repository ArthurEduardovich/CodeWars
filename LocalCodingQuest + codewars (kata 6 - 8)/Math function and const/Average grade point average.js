// 1
const average = (marks) => {
  let sum = 0;
  for (let i = 0; i < marks.length; i++){
    sum+= marks[i];
  }
  return (sum / marks.length).toFixed(1);
}

// 2
function formatArray(arr){
  let resultArr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++){
    resultArr.push(+((arr[i]).toFixed(j)))
    j++;
  }
  return resultArr;
}
console.log(formatArray([1.345, 2.234, 3.12345, 4.565474]));