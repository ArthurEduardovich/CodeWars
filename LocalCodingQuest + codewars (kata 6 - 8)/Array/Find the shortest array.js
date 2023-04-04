// 1
const shortArray = (arr1, arr2, arr3) => {
    if (arr1.length < arr2.length && arr1.length < arr3.length){
        return arr1;
    }
    if (arr2.length < arr1.length && arr2.length < arr3.length){
        return arr2;
    }
    return arr3;
}
console.log(shortArray([1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5]))

// 2
function operationLength(arr1, arr2){
    const sum = arr1.length + arr2.length;
    const difference = arr1.length - arr2.length;
    const multi = arr1.length * arr2.length;
    return [sum, difference, multi];
}