const sumArray = function (arr) {
    if (!Array.isArray(arr)) {
        return 0;
    }
    let indexMin = arr.indexOf(Math.min(...arr));
    let indexMax = arr.indexOf(Math.max(...arr));
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++){
        if (i === indexMin || i === indexMax) continue;
        sum+= arr[i]
    }
    return sum;
}
console.log(sumArray([ -6, -20, -1, -10, -12 ]))