// Площадь круга
const circleArea = (r) => {
    const radius = Math.pow(r, 2);
    return Math.round((Math.PI * radius));
}
console.log(circleArea(3))