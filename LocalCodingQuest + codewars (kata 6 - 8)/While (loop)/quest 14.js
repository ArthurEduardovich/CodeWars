function squaresNeeded(grains){
    let count = 1;
    let i = 1;
    let sum = 2;
    while (sum <= grains) {
        sum += i ** 2;
        i++;
        count++;
    }
    return count;
}
console.log(squaresNeeded(4));