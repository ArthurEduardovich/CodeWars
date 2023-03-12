const closestMultiple10 = num => {
    let result = 0;
    if ((num % 10) < 5) {
        result = num - (num % 10);
    } else {
        result = num + (10 - (num % 10));
    }
    return result;
};
console.log(closestMultiple10(100));
