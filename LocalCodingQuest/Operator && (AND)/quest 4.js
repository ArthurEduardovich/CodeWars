const numberDescription = (num) => {
    if (num < 0 && num % 2 === Math.abs(0)) {
        return 'negative even number';
    }
    if (num < 0 && num % 2 !== Math.abs(0)) {
        return 'negative odd number';
    }
    if (num > 0 && num % 2 === 0) {
        return 'positive even number';
    }
    if (num > 0 && num % 2 !== 0) {
        return 'positive odd number';
    }
    return 'zero number';
}
console.log(numberDescription(4))