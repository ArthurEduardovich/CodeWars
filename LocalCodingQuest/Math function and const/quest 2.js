
// Среднее геометрическое двух чисел
function geometricMean(a, b) {
    let geometricMean = Math.sqrt(a * b);
    return geometricMean.toFixed(2);
}
console.log(geometricMean(4, 9));