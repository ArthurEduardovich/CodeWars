const arrayDiff = (a, b) => {
    const result = a.filter((el) => !b.includes(el));
    return result; 
}
console.log(arrayDiff([1, 2, 3, 1, 2], [1, 2])) // [3]