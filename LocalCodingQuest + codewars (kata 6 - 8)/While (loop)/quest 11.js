function differenceOfSquares(n){
    let a = 0;
    let b = 0;
    let i = 1;
    while (i <= n) {
        a+= i;
        b+= i ** 2;
        i++;
    }
    return (Math.pow(a, 2) - b);
}
console.log(differenceOfSquares(10));