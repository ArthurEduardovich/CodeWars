function factorial(n){
    let sum = 1;
    let i = 1;
    while (i <= n) {
        sum*= i;
        i++;
    }
    return sum;
}
console.log(factorial(7));