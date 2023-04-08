const removeSmallest = function (arr) {
    let minValue = Math.min(...arr);
    let indexFirstMin = arr.indexOf(minValue);
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === minValue && i == indexFirstMin) continue;
        resultArr.push(arr[i])
    }
    return resultArr;
}
console.log(removeSmallest([1, 2, 3, 4, 5]))
console.log(removeSmallest([]))