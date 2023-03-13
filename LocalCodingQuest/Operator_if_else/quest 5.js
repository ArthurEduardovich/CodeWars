// Output the numbers in descending order.
const putInOrder = (a, b) => {
    if (a > b) {
        return [a, b];
    } else if (b > a) {
        return [b, a];
    } else {
        return [a, b];
    }
}