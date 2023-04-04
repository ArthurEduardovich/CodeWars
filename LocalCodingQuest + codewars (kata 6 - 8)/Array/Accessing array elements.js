// 1
function compoundWord(array){
    return array[0] + array[1];
}

// 2
function mult(array){
    return array[0] * array[array.length - 1];
}

// 3
function lastElement(array){
    return array[array.length - 1];
}

// 4
function nestedArray(array){
    return array[array.length - 1][0];
}

// 5
const typeofArr = (array) => typeof array[0];

// 6
function newString(arr){
   let resultStr = '';
   resultStr = arr[0] + ' ' + arr[1] + arr[1] + arr[1] + ' ' + arr[2] + arr[2] + arr[2] + arr[2];
   return resultStr;
}
// console.log(newString(['1', '2', '3', '4']))

// 7

function mathOperations(arr1, arr2){
    if (arr1[arr1.length - 1] > arr2[arr2.length - 1]){
        return (arr1[arr1.length - 1] - arr2[arr2.length - 1])
    }
    if (arr1[arr1.length - 1] < arr2[arr2.length - 1]){
        return (arr1[arr1.length - 1] + arr2[arr2.length - 1])
    }
    if (arr1[arr1.length - 1] === arr2[arr2.length - 1]){
        return (arr1[arr1.length - 1] * arr2[arr2.length - 1])
    }
}
// console.log(mathOperations([1, 2, 3],[4, 5, 12]))

// 8

function average(arr1, arr2, arr3){
    const calcSum = () => arr1[0] + arr2[1] + arr3[arr3.length - 1];
    return Math.round(calcSum() / 3)
}

// 9
function arrWithHole(arr){
    
}