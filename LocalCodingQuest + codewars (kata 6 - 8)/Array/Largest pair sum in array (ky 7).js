
function largestPairSum (arr) {
    const resultArr = arr.sort((x, y) => y - x);
    return resultArr[0] + resultArr[1];
}

console.log(largestPairSum([10,14,2,23,19])) // 42



function largestPairSum2 (arr) {
    return arr.sort((x,y) => y - x).slice(0, 2).reduce((a,b) => a + b);
}

console.log(largestPairSum2([10,14,2,23,19])) // 42