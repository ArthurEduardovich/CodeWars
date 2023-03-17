function factorial(n){
    let i = 1;
    let sum = 1;
    while (i <= n) {
        sum = sum * i;
        i++
    }
    return sum;
}
console.log(factorial(8))