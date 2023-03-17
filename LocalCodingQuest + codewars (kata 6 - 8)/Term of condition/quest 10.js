// Check the truth of the statement "Among the three given numbers, there are at least two numbers that are opposite in value.

const atLeastOnePairOfOpposite = (a, b, c) => {
    if ((a >= 0 && b <= 0 && a + b === 0) || (a <= 0 && b >= 0 && a + b === 0) ){
        return true;
    }
    if ((b >= 0 && c <= 0 && b + c === 0) || (b <= 0 && c >= 0 && b + c === 0) ){
        return true;
    }
    if ((a >= 0 && c <= 0 && a + c === 0) || (a <= 0 && c >= 0 && a + c === 0) ){
        return true;
    }
    return false;
}