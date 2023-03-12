// Check the truth of the statement "Each of the three given numbers is positive.

const eachIsPositive = (a, b, c) => (a > 0 && b > 0 && c > 0);

// Check the truth of the statement "At least one of the three given numbers is positive

const atLeastOneIsPositive = (a, b, c) => (a > 0 || b > 0 || c > 0);

// Check the truth of the statement "Only one of the three given numbers is positive.

const onlyOneIsPositive = (a, b, c) => {
    if ((a <= 0 && b > 0 && c <= 0) || (a > 0 && b <= 0 && c <= 0) || (a <= 0 && b <= 0 && c > 0)) {
        return true;
    }
    return false;
}

