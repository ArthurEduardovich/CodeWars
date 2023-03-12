// Check the truth of the statement "Both inequalities a > 2 and b <= 3 are true".
const inequalitiesAreFulfilled = (a, b) => {
    if (a > 2 && b <= 3) {
        return true;
    } else {
        return false;
    }
};

function inequalitiesAreFulfilled2 (a, b) {
    return (a > 2 && b <= 3);
}