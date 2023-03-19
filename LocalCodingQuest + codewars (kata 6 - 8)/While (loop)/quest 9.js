function numberOfDigits(n){
    let result = n;
    let i = 10;
    let count = 0;
    while (result >= 1) {
        count++;
        result = result / i;
    }
    return count;
}

console.log(numberOfDigits(1000));