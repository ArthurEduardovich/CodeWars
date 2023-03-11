// Площадь кольца, ограниченного двумя окружностями.
const ringArea = (r1, r2) => {
    // Площадю круга равна произведению PI на квадрат радиуса круга.
    const areaCircle1 =  Math.PI * Math.pow(r1, 2);
    const areaCircle2 =  Math.PI * Math.pow(r2, 2);
    const areaSmallRing = Math.floor(areaCircle1 - areaCircle2);
    return areaSmallRing;
}
console.log(ringArea(7, 5));