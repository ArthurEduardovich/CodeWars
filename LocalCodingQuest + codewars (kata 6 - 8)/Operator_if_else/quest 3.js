const countOfPosAndNeg = (a, b, c) => {
    const arr = [a, b, c];
    let countOfPositive = 0;
    let countOfNegative = 0;
    for (let i = 0; i <= 3; i++) {
        if (arr[i] > 0) {
            ++countOfPositive;
        }
        if (arr[i] < 0) {
            ++countOfNegative;
        }
    }
    return [countOfPositive, countOfNegative];
}
console.log(countOfPosAndNeg(5, 13, 9));