// Which point is closer to the origin of coordinates?
function distanceComparison(x1, y1, x2, y2){
    const M1 = Math.pow(x1, 2) + Math.pow(y1, 2);
    const M2 = Math.pow(x2, 2) + Math.pow(y2, 2);
    if (M1 < M2) {
        return 1;
    } else if (M2 < M1) {
        return 2;
    } else {
        return 0;
    }
}