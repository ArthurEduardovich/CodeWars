// For the two given numbers, check the truth of the statement "Numbers have the same parity".

const equalParity = (a, b) => {
    if (a % 2 === 0 && b % 2 === 0) {
        return true;
    } else if (a % 2 !== 0 && b % 2 !== 0) {
        return true;
    } else {
        return false;
    }
};