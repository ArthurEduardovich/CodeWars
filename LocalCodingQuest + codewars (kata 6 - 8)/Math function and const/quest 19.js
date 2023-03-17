// Угол в радианной мере.
const angleInRadians = (angle) => {
    const resultRadiant = angle / (180 / Math.PI);
    return Math.round(resultRadiant);
}
console.log(angleInRadians(180))


