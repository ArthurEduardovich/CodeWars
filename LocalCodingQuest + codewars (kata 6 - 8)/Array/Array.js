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
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i + 1] % 2 !== 0 && i === arr.length - 1){
            return [arr[i], i];
        }
    }
}