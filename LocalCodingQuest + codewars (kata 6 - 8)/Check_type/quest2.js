const numbersIncrement = (value) => {
    if (typeof value === 'number') {
        return ++value;
    }
    return 'It is not a number'
}
console.log(numbersIncrement({}))
console.log(numbersIncrement(2))