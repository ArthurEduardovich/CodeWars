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
        







