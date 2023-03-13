// quest 8
function largerOfTwo (a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return a || b;
    }
}

// quest 9
const countOfPositive = (a, b, c) => {
    let count = 0;
    if (a > 0) {
        ++count;
    };
    if (b > 0) {
        ++count;
    }
    if (c > 0) {
        ++count;
    }
    return count;
}