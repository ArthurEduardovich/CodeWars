function sumOfOdd(n){
    let i = 1;
    let sum = 0;
    while (i <= n) {
        sum+= i;
        i+=2;
    }
    return sum;
}
console.log(sumOfOdd(20));  