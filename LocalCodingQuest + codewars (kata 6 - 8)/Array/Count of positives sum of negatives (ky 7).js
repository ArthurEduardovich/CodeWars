// 1
const countPositivesSumNegatives = function (input) {
    let sumNegative = 0;
    let count = 0;
    if (!Array.isArray(input)) return [];
    for (let i = 0; i < input.length; i++){

        if (input[i] < 0) sumNegative+= input[i];
        if (input[i] > 0) count++;
    }
    return count !== 0 || sumNegative !== 0? [count, sumNegative]: [];
}
console.log(countPositivesSumNegatives(1))

// 2
function findAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum+= array[i];
    }
    return sum == 0? 0: sum / array.length;
}
console.log(findAverage([]))