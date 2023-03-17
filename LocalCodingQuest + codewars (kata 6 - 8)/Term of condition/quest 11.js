// Check the truth of the statement "All digits of a three-digit number are different.

const areAllDigitsDifferent = (num) => {
    const numToString = String(num);
    if (numToString[0] !== numToString[1] && numToString[1] !== numToString[2] && numToString[0] !== numToString[2]) {
        return true;
    }
    return false;
}
console.log(areAllDigitsDifferent(234));