function positionOfPoint(x, y) {
    if (x === 0 && y === 0) {
        return 0;
    }
    if (x !== 0 && y === 0) {
        return 1;
    }
    if (y !== 0 && x === 0) {
        return 2;
    }
    return 3;
}
console.log(positionOfPoint(-5, 3))