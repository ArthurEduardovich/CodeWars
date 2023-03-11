// Площадь закрашенной фигуры
const area = (a, b) => {
    let areaA = Math.pow(a, 2);
    let areaB = Math.pow(b, 2);
    return areaA - areaB;
}
console.log(area(9,5));