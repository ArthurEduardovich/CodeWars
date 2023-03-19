function noBoringZeros(n) {
    if (n === 0) {
        return n;
    }
    while (n % 10 === 0) {
        n /= 10;
    }
    return n;
}
console.log(noBoringZeros(0));