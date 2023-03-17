function powerOf2(n){
    let count = 0;
    let sum = n;
    while (sum >= 2) {
        sum = sum / 2;
        ++count;
    }
    return count;
}
console.log(powerOf2(32));