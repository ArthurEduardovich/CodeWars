function getCount(str) {
    return str.split('').reduce((acc, el) => {
        if (el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u') acc++;
        return acc;
    }, 0)
}
console.log(getCount('abracadabra'))