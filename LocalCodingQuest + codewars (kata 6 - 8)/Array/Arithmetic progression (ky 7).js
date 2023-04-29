function arithmeticSequenceElements(a, d, n) {
    const arr = [];
    for (let i = 1, j = a; i <= n; i++) {
        arr.push(j);
        j+= d;
    }
    return arr.join(', ');
}
console.log(arithmeticSequenceElements(1, 2, 5))