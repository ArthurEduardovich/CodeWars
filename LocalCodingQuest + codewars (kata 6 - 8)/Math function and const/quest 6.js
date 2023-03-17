// Даны два числа. Найдите сумму, разность, произведение и частное их квадратов.
function squareOperations(a, b) {
    let sum = Math.pow(a, 2) + Math.pow(b, 2); // сумма квадратов a и b
    let difference = Math.pow(a, 2) - Math.pow(b, 2); // разность квадратов а и b
    let piece = Math.pow(a, 2) * Math.pow(b, 2); // произведение квадратов a и b
    let sharing = Math.round(Math.pow(a, 2) / Math.pow(b, 2)); // частное квадратов а и b
    return [sum, difference, piece, sharing];
}
console.log(squareOperations(5, 3));
