// Cумма, разность, произведение и частное абсолютных величин (модулей) двух чисел.

function absoluteValuesOperations(a, b) {
    const modulA = Math.abs(a);
    const modulB = Math.abs(b);
    const sum = modulA + modulB;
    const difference = modulA - modulB;
    const multi = modulA * modulB;
    const division = Math.round(modulA / modulB);
    return [sum, difference, multi, division];
}
console.log(absoluteValuesOperations(5, -3));