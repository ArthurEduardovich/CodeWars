function calculateYears (principal, interest, tax, desired) {
    if (principal === desired) {
        return 0;
    }
    let a = principal;
    let b = 0;
    let count = 0;
    while (a <= desired) {
        b = ((a * interest) - ((a * interest) * tax)); // 41
        a+= b; // 1000 + 41 = 1041
        count++;
    }
    return count;
}
console.log(calculateYears(1000,0.05,0.18,1000));