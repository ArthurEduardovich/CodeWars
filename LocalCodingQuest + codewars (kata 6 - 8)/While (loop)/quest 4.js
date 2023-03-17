function multOfEven(n){
    let i = 2;
    let sum = 1;
    while (i <= n) {
        sum = sum * i;
        i+= 2;
    }
    return sum;
}
console.log(multOfEven(6));