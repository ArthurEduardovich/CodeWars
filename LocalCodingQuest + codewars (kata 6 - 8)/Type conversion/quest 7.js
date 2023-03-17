
const arithmeticExpression = function (a, b) {
    const sumToString = String(a + b);
    return `${a} + ${b} = ${sumToString}`;
}
console.log(arithmeticExpression(5, 5))