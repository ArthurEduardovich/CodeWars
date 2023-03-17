// The minimum and maximum of three numbers.
const minAndMax = (a, b, c) => {
    return [Math.min(a, b, c), Math.max(a, b, c)];
}

// Not the biggest and not the smallest number.
const middleOfThree = (a, b, c) => {
    if ((a > b && a < c) || (a < b && a > c)) {
        return a;
    } else if ((b > a && b < c) || (b < a && b > c)) {
        return b;
    } else {
        return c;
    }
}
console.log(middleOfThree(0, -4, 5));