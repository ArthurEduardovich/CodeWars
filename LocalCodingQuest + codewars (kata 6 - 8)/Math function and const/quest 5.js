// Длина окружности
const circleLength = (d) => {
    const lengthArea = d * Math.PI;
    return lengthArea.toFixed(2);
}
console.log(circleLength(9));