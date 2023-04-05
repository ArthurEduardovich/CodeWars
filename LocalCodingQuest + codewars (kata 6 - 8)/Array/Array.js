// 2
const countPositive = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] <= 0) continue;
        count++;
    }
    return count;
}

// 2
const countZeros = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0) count++;
        continue;
    }
    return count;
}

// 3
const countEven = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) count++;
        continue;
    }
    return count;
}

// 4
const countEvenPositive = (arr) => {
    let count = 0;
    let i = 0;
    while (i < arr.length){
        if (arr[i] % 2 === 0 && arr[i] > 0) count++;
        i++;
    }
    return count;
}

// 5
const countNumbers = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'number') count++;
        continue;
    }
    return count;
}


// 6
function counOfSquares (arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'number' && Number.isInteger(Math.sqrt(arr[i]))){
            count++;
        } else {
            count;
        }
    }
    return count;
}

// 7
const counOfPositivePairs  = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0 && arr[i + 1] > 0){
            count++;
        } else {
            count;
        }
    }
    return count;
}

// 8

const countOppositeSignsPairs = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if ((arr[i] < 0 && arr[i + 1] > 0)){
            count++;
        } else if (arr[i] > 0 && arr[i + 1] < 0) {
            count++;
        } else {
            count;
        }
    }
    return count;
}
// console.log(counOfPositivePairs([-2,0,2,4,5,-2]))

// 9
function numberOfOrderedTriples(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2]){
            count++;
        } else {
            count;
        }
    }
    return count;
}

// 10
const firstNegative = (arr) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            return [arr[i], i]
        } else {
            continue;
        }
    }
}

// 11
const firstBigger = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]){
        return arr[i]
    }
  }
}
// console.log(firstBigger([0,0,8,9,6,1]))
// console.log(firstBigger([8,0,7,0,0,0]))
// console.log(firstBigger([1,4,9,3]))
// console.log(firstBigger([0,2,2]))
// console.log(firstBigger([5,9,8]))

// 12
const lastEvenElement = (arr) => {
    let num = 0;
    let index = 0;
    for (let i = arr.length - 1; i >= 0; i--){
            if (arr[i] % 2 === 0){
               return [arr[i], i]
            } 
        }   
}

// 13
function fahrenheit(t1, t2){
    let resultArr = [];
    for (let i = t1; i <= t2; i++){
        resultArr.push(+(i * (9/5) + 32).toFixed(1))
    }
    return resultArr;
}
console.log(fahrenheit(1,10))

// 14
function changeArray(prices){
    return prices.map((el) => el * 2);
}
console.log(changeArray([10, 20]))

// 15
function isNegativeInArray(arr){
    let result = false;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) result = true;
    }
    return result;
}

// 16
function isZeroInArray(arr){
    let result = false;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0) result = true;
    }
    return result;
}

// 17
function isElementInArray(arr){
    let num = false;
    for (let i = 0; i < arr.length; i++){
        if (arr[i + 1] === arr[i] + arr[i + 2]) {
        num = arr[i + 1];
        break;
        }
    }
    return num !== false? `true: it is ${num}`: num;
}
// console.log(isElementInArray( [-5,-3,2,-2]))
// console.log(isElementInArray([-1,0,-1,-1,-2,0,1,0,-1]))

// 18
function countOfWords(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length === 5) count++;
    }
    return count;
}