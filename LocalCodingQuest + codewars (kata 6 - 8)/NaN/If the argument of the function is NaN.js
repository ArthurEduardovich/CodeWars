const multBy5 = (value) => {
    if (Number.isNaN(value) === true) {
        return 'Value is NaN'
    };
    if (isNaN(value) === true) {
        return NaN;
    }
    return value * 5;
}

console.log(multBy5(3))
console.log(multBy5(0))
console.log(multBy5('a'))