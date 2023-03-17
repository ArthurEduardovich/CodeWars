// Lesser of three numbers
const minOfThree = (a, b, c) => {
    if (a < b && a < c) {
        return a;
    }
    if (b < a && b < c) {
        return b;
    }
    if (c < a && c < b) {
        return c;
    }
    return a || b || c;
}
