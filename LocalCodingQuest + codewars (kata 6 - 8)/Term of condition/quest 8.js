// Check the truth of the statement "Two out of three given numbers are positive".

const exactlyTwoArePositive = (a, b, c) => {
    if (a > 0 && b > 0 && c <= 0) {
        return true;
    }
    if (a > 0 && c > 0 && b <= 0) {
        return true;
    }
    if (b > 0 && c > 0 && a <= 0) {
        return true;
    }
    return false;
}

// Check the truth of the statement "This number is a two-digit even number.

const isTwoDigitEvenNumber = (num) => {
    if (num > 9 && num < 100 && num % 2 === 0) {
        return true;
    }
    return false;
}

// Check the truth of the statement "This number is a three-digit odd number.

const isThreeDigitOddNumber = (num) => {
    if (num > 99 && num < 1000 && num % 2 !== 0) {
        return true;
    }
    return false;
}























