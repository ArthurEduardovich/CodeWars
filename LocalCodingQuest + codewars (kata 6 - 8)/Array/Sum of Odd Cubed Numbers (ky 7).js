const cubeOdd = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') return undefined;
        if (arr[i] % 2 !== 0) sum+= Math.pow(arr[i], 3);
    }
    return sum;
}
console.log(cubeOdd([1, 2, 3, 4]))