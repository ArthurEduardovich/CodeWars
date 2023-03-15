const identityPlane = (x,y) => {
    if (x > 0 && y > 0) {
        return 'I';
    }
    if (x < 0 && y > 0) {
        return 'II';
    }
    if (x < 0 && y < 0) {
        return 'III';
    }
    if (x > 0 && y < 0) {
        return 'IV';
    }
}