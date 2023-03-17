function calculate(a, b, operation){
    let sum = 0;
    switch (operation) {
        case '+':
            sum = Math.round(a + b);
            break;
        case '-':
            sum = Math.round(a - b);
            break;
        case '*':
            sum = Math.round(a * b);
            break;
        case '/':
            sum = Math.round(a / b);
            break;
        case '%':
            sum = Math.round(a % b);
            break;
    }
    let result = `${a} ${operation} ${b} = ${sum}`;
    return result;
}
console.log(calculate(5, 3, "*"));