function triangular( n ) {
    if (n <= 0) {
        return 0;
    }
    let result = 0;
    for (let i = n; i >= 1; i--) {
        result+= n - (i - 1);
    }
    return result;
}
console.log(triangular(4));