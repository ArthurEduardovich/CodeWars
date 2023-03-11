// Расстояние между двумя точками на плоскости.
const distance = (x1, y1, x2, y2) => {
    const distanceResult = () => Math.sqrt(((Math.pow(x2 - x1, 2)) + (Math.pow(y2 - y1, 2))));
    return Math.trunc(distanceResult());
}
console.log(distance(3, 9, 7, 11));