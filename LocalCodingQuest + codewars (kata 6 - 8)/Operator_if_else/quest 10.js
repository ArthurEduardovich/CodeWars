// Find the ordinal number of a value that differs from the other two
function orderNumberOfDifferentValue(a, b, c) {
    if (a === b) {
        return 3;
    }
    if (a === c) {
        return 2;
    }
    if (b === c) {
        return 1;
    }
}