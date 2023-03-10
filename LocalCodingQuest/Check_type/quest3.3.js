const typeOfSum = (val1, val2, val3) => {
    const sum = val1 + val2 + val3;
    return typeof sum;
}
console.log(typeOfSum('a',2,3))