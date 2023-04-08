function squares(arr){
    let squareSum = 0;
    let sumSqaure = 0;
    for (let i = 0; i < arr.length; i++){
    squareSum+= arr[i];
    sumSqaure+= arr[i] ** 2;
    }
    return ( Math.pow(squareSum, 2) - sumSqaure );
    }
    console.log(squares([2, 1, 4]))

const sumOfGoals = (arr) => {
    let sumGoal = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            sumGoal+= arr[i][j];
        }
    }
    return sumGoal;
}
console.log(sumOfGoals([[1,2,3],[3,3,3]]))
        

function changeMaxAndMin(arr){
    let max = arr[0], indexMax = 0;
    let min = arr[0], indexMin = 0;
    for (let i = 1; i < arr.length; i++){
      if (arr[i] > max) {
        max = arr[i]
        indexMax = i;
      }
      if (arr[i] < min) {
        min = arr[i];
        indexMin = i;
      }
    
    }
    arr[indexMax] = min;
    arr[indexMin] = max;
    return arr;
  }
  console.log(changeMaxAndMin([29,14,9,3,24,0]))


const theLongestWord = function (arr) {
    let maxLengthStr = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > maxLengthStr.length) maxLengthStr = arr[i]
    }
    return maxLengthStr;
}

