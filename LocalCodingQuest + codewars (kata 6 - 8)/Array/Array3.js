// 1
const arrayOfFirstLetters = function (arr) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++){
        resultArr.push(arr[i][0])
    }
    return resultArr;
}
// console.log(arrayOfFirstLetters(['Alice','Katrine']))

// 2
const separateNumsAndStrings = arr => {
    let numberArray = []
    let stringArray = []

    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'number') numberArray.push(arr[i])
        if (typeof arr[i] === 'string') stringArray.push(arr[i])
    }
    return [numberArray, stringArray]
}
// console.log(separateNumsAndStrings([1, 2, 'a', 4, 'b']))

// 3
function separatePosAndNeg (arr) {
    let negativeNumber = []
    let positiveNumber = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) continue;
        if (arr[i] < 0) negativeNumber.push(arr[i])
        if (arr[i] > 0) positiveNumber.push(arr[i])
    }
    return [positiveNumber, negativeNumber]
}

// 4
function separateEvenAndOdd (arr) {
    let oddNum = []
    let evenNum = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) evenNum.push(arr[i])
        if (arr[i] % 2 !== 0) oddNum.push(arr[i])
    }
    return [evenNum, oddNum]
}
// console.log(separateEvenAndOdd([-5,1,8]))

// 5
function splitString (arr) {
    let resultArray = []

    for (let i = 0; i < arr.length; i++) {
        resultArray.push(arr[i])
    }
    return resultArray;
}
console.log(splitString('Arthur'))