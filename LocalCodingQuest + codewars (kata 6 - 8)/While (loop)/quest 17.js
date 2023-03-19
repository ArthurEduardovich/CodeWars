function largestPower(n){
    let result = 0;
    let k = 1;
    let count = 0;
    while (result < n) {
        if (3 ** k >= n) {
            break;
        }
        result = 3 ** k;
        k++;
        count++;
    }
    return count;
}
console.log(largestPower(1))