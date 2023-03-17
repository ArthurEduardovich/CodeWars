function calculate(num1, operation, num2) {
    if (num2 === 0 && operation === '/') {
        return null;
    }
    switch (operation) {
        case '+':
            return `${num1} ${operation} ${num2} = ${num1 + num2}`;
            break;
        case '-':
            return `${num1} ${operation} ${num2} = ${num1 - num2}`;
            break;
        case '*':
            return `${num1} ${operation} ${num2} = ${num1 * num2}`;
            break;
        case '/':
            return `${num1} ${operation} ${num2} = ${num1 / num2}`;
            break;
        default:
            return null;
    }
}
console.log(calculate(3.2, '/', 8))