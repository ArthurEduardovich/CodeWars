function womensAge(n) {
    let nDiffrenece2 = n / 2;
    let variable2 = 0;
    if (n % 2 === 0) {
        variable2 = nDiffrenece2;
    } else {
        variable2 = Math.ceil(--nDiffrenece2);
    }
    let variable1 = 0;
    if (n % 2 === 0) {
        variable1 = 20;
    } else {
        variable1 = 21;
    }
    return `${n}? That's just ${variable1}, in base ${variable2}!`
}
console.log(womensAge(22))