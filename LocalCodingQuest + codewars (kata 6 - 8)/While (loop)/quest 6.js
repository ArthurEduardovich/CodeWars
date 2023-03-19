const powerOf3 = (n) => {
    let i = 1;
    while (i < n) {
        i = i * 3;
    }
    return i === n;
}
console.log(powerOf3(29));