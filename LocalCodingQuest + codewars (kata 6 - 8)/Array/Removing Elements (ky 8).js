const removeEveryOther = (arr) => {
    const result = arr.filter((el, index) => {
        if (index % 2 == 0) return el;
    })
    return result;
}

console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]))