// Check the truth of the statement "All digits of a three-digit number are ordered in ascending order.

const areDigitsInAscendingOrder = (num) => {
    const numToString = String(num);
    const numberOne = numToString[0];
    const numberTwo = numToString[1];
    const numberThree = numToString[2];
    if (numberOne < numberTwo && numberTwo < numberThree) {
        return true;
    }
    return false;
}