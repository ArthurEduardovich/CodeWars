// 1
const words = function (arr) {
    let maxLengthWords = arr[0].length, indexMax = 0;
    let minLengthWords = arr[0].length, indexMin = 0;
    for (let i = 1; i < arr.length; i++){
        if (arr[i].length > maxLengthWords) {
            maxLengthWords = arr[i].length;
            indexMax = i;
        }
        if (arr[i].length < minLengthWords){
            minLengthWords = arr[i].length;
            indexMin = i;
        }
    }
    return [arr[indexMin], arr[indexMax]];
}

// 2
const maxEven = function (arr) {
    let maxEven, indexFirstMax;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            maxEven = arr[i]
            indexFirstMax = i;
            break;
        }
    }
    for (let j = indexFirstMax; j < arr.length; j++){
        if (arr[j] % 2 === 0 && arr[j] > maxEven) maxEven = arr[j];
    }
    return maxEven; 
}
console.log(maxEven([1])) // undefined
console.log(maxEven([13,2,8,27,25,26,21,14,22])) // 26

// 3
const minOdd = function (arr) {
   let minEven = undefined, indexMin;
   for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0){
        minEven = arr[i]
        indexMin = i;
        break;
    }
   }
   for (let j = indexMin; j < arr.length; j++){
    if (arr[j] % 2 !== 0 && arr[j] < minEven){
        minEven = arr[j];
    }
   }
   return minEven;
}
console.log(minOdd([28,27,26,3,22,16,10,10]))

// 4

const mostExpensiveCar = function (arr) {

    let minPriceAuto = arr[0][1];
    let nameAuto = arr[0][0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i][1] > minPriceAuto) {
            minPriceAuto = arr[i][1]
            nameAuto = arr[i][0]
        }
    }
    return nameAuto;
}

// 5

const largestNumberOfMushrooms = function (arr) {
    let nameChild = arr[0][0];
    let numberMushrooms = arr[0][1];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i][1] > numberMushrooms) {
            numberMushrooms = arr[i][1]
            nameChild = arr[i][0]
        }
    }
    return `${nameChild}: ${numberMushrooms}`
}

// 6
function theColdestDay (arr) {
    let dayIndex = null;
    let minTemperature = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= minTemperature) {
            minTemperature = arr[i]
            dayIndex = i + 1;
        }
    }
    return `April ${dayIndex} was the coldest day of the month: it was ${minTemperature} degrees.`
}