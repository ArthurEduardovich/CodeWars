// Найдите площадь круга, если известна длина окружности.
function circleArea (circleLength) {
    // Находим радиус круга
    const radiusArea = () => circleLength / (Math.PI * 2);
    // Находим площадь круга
    const areaRing = () => Math.PI * (Math.pow(radiusArea(), 2));
    // Результат с округлением до ближайшего целого
    return Math.round(areaRing());
}
console.log(circleArea(16))