function findAndDouble(arr1, arr2, arr3, n){
    if (arr1.includes(n) && arr1.indexOf(n) === arr1.lastIndexOf(n)){
        arr1[arr1.indexOf(n)] = arr1[arr1.indexOf(n)] * 2;
    } else if (arr1.includes(n) && arr1.indexOf(n) !== arr1.lastIndexOf(n)){
        arr1[arr1.indexOf(n)] = arr1[arr1.indexOf(n)] * 2;
    } else {
        arr1.push(n * 2);;
    }

    if (arr2.includes(n) && arr2.indexOf(n) === arr2.lastIndexOf(n)){
        arr2[arr2.indexOf(n)] = arr2[arr2.indexOf(n)] * 2;
    } else if (arr2.includes(n) && arr2.indexOf(n) !== arr2.lastIndexOf(n)){
        arr2[arr2.indexOf(n)] = arr2[arr2.indexOf(n)] * 2;
    } else {
        arr2.push(n * 2);
    }

    if (arr3.includes(n) && arr3.indexOf(n) === arr3.lastIndexOf(n)){
        arr3[arr3.indexOf(n)] = arr3[arr3.indexOf(n)] * 2;
    } else if (arr3.includes(n) && arr3.indexOf(n) !== arr3.lastIndexOf(n)){
        arr3[arr3.indexOf(n)] = arr3[arr3.indexOf(n)] * 2;
    } else {
        arr3.push(n * 2);
    }
    return [arr1, arr2, arr3]
}
console.log(findAndDouble([1, 2, 3], [2, 5, 1], [7, 8, 9], 2))

function findAndDouble2(arr1, arr2, arr3, n){
    function modifyArray(arr) {
        if (arr.includes(n) && arr.indexOf(n) === arr.lastIndexOf(n)){
            arr[arr.indexOf(n)] = arr[arr.indexOf(n)] * 2;
        } else if (arr.includes(n) && arr.indexOf(n) !== arr.lastIndexOf(n)){
            arr[arr.indexOf(n)] = arr[arr.indexOf(n)] * 2;
        } else {
            arr.push(n * 2);
        }
        return arr;
    }

    arr1 = modifyArray(arr1);
    arr2 = modifyArray(arr2);
    arr3 = modifyArray(arr3);

    return [arr1, arr2, arr3]
}