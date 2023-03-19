function sumOfDigits(n) {
    let nToStr = n + '';
    let i = 0;
    let sum = 0;
    while (i < nToStr.length) {
        sum+= +nToStr[i];
        i++;
    }
    return sum;
}
console.log(sumOfDigits(13881))