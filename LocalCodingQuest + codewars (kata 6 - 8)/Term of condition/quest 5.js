// Check the truth of the statement "Both numbers a and b are even".
const areNumbersEven = (a, b) => {
    return (a % 2 === 0 && b % 2 === 0);
}
console.log(areNumbersEven(-3, 8));

// Check the truth of the statement "At least one of the numbers a or b is odd.
function atLeastOneIsOdd(a, b) {
    if (a % 2 !== 0 || b % 2 !== 0) {
        return true;
    }
    return false;
}

//Check the truth of the statement "At least one of the numbers a or b is even.
const atLeastOneIsEven = (a, b) => (a % 2 === 0 || b % 2 === 0);

// For the given two numbers check the truth of the statement "Only one of the numbers is odd".
const exactlyOneIsOdd = (a, b) => {
    if ((a % 2 !== 0 && b % 2 === 0) || (b % 2 !== 0 && a % 2 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(exactlyOneIsOdd(-5, -5));

// Check the truth of the statement "Only one of the three given numbers is an even number.

function exactlyOneIsEven(a, b, c) {
    if (a % 2 === 0 && b % 2 !== 0 && c % 2 !== 0) {
        return true;
    } else if (b % 2 === 0 && a % 2 !== 0 && c % 2 !== 0) {
        return true;
    } else if (c % 2 === 0 && b % 2 !== 0 && a % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}











