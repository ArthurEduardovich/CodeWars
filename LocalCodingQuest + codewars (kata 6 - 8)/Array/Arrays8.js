// 1
const isString = (arr) => {
    if ((arr.find((el) => typeof el === 'string'))) return true;
    return false;
};
// console.log(isString([1, 2, 22, 99, 1]));

// 2
const numbersAndStrings = (arr) => {
    const arrN = [];
    const arrS = [];
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'string') arrS.push(arr[i]);
        if (typeof arr[i] === 'number') arrN.push(arr[i]);
    }
    return [arrN, arrS];
}
// console.log(numbersAndStrings([1, 'e', 2, 'r']))

// 3
function positiveAndNegative (arr){
    const arrNegative = [];
    const arrPositive = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) arrNegative.push(arr[i]);
        if (arr[i] >= 0) arrPositive.push(arr[i]);    
    }
    return [arrPositive, arrNegative];
}
// console.log(positiveAndNegative ([1, 2, 3, -1, -2, -10]));

// 4
function findEvenAndPositive(arr){
    const result = arr.find((el) => el % 2 === 0 && el >= 0);
    return result !== undefined? result: "No even and positive numbers found";
};
console.log(findEvenAndPositive([-100, -200, -300, 400, -500, -600]))

