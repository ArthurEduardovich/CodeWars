// Объём льда в бутылке
function iceBrickVolume(radius, bottleLength, rimLength) {
    return (bottleLength - rimLength) * 2 * radius * radius;
}
console.log(iceBrickVolume(1, 10, 2)) // 16