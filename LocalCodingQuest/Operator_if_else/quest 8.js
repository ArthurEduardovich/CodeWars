// The sum of two large numbers.
const sumOfTwoLargest = (a, b, c) => {
    let min = Math.min(a, b, c);
    if (min === a) {
        return b + c;
    } else if (min === b) {
        return a + c;
    } else if (min === c) {
        return a + b;
    }
}