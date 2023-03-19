function quotientAndRemainder(n, k){
    let count = 0;
    let i = 0;
    if (n < k) {
        return [0, n];
    }
    if (n > k || n === k) {
        while (i < n) {
            if (i + k > n) {
                break;
            }
            i = i + k;
            count++;
        }
    }
    return [count, n - i];
}
console.log(quotientAndRemainder(5, 7))