const sumEvenNumbers = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && Number.isInteger(arr[i])) sum+= arr[i];
    }
    return sum;
}