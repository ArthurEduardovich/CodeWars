// Check the truth of the statement "At least one of the inequalities a >= 0 or b < - 2 is true".
const inequalitiesAreFulfilled = (a, b) => {
    return (a >= 0 || b < -2);
};

// For the given numbers a, b, c, check if the double inequality a < b < c is true.
function inequalitiesAreFulfilled2(a, b, c){
    return (a < b && b < c);
};

// For the given numbers a, b, c, check the truth of the statement: "The number b is between the numbers a and c."
const isPropositionTrue = (a, b, c) => {
    return (b < a && b > c) || (b > a && b < c);
}
console.log(isPropositionTrue(9, 8 ,-9))