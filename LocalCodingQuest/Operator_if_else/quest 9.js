// New value of three quantities/
const newValues = (a, b, c) => {
    const doublingToValue = () => [a * 2, b * 2, c * 2];
    if (a < b && b < c) {
        return doublingToValue();
    }
    return [-a, -b, -c];
}