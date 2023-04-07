const oddOrEven = function (arr) {
    let sum = 0;
    if (arr.length == 0) return 'even'
    for (let i = 0; i < arr.length; i++) {
        sum+= arr.reduce((a, b) => a + b, 0);
    }
    return sum % 2 === 0? 'even': 'odd';
}
console.log(oddOrEven([1, 4, 5, 6,7, 11]))