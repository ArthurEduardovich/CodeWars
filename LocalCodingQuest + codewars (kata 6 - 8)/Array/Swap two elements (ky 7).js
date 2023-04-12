function swapTwo(arr, a, b) {
    const result = [];

    for (let i = 0; i < arr.length; i++){
        if (i === arr.indexOf(a)){
            result.push(b)
        } else if (i === arr.lastIndexOf(b)){
            result.push(a)
        } else {
            result.push(arr[i])
        }
    }
    return result;
}

console.log(swapTwo([1, 2, 3, 4, 1, 2, 3, 4], 2, 4)) // [1, 4, 3, 4, 1, 2, 3, 2]