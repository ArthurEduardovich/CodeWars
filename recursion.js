// 1 recursion
function countdown(n) {

    if (n < 1   ) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}

console.log(countdown(5));

// 2 recursion от 6 до 9
function rangeOfNumbers(startNum, endNum){
    if (startNum === endNum + 1){
        return []
    } else {
        const arr = rangeOfNumbers(startNum + 1, endNum);
        arr.unshift(startNum)
        return arr;
    }
}
console.log(rangeOfNumbers(6, 9)) // 6,7,8,9