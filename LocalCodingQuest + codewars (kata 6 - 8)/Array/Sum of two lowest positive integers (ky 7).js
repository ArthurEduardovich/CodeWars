function sumTwoSmallestNumbers (arr) {
    return arr.sort((x,y) =>  x - y).slice(0, 2).reduce((a, b) => a + b);
};
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));