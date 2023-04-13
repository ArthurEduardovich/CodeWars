function mergeArrays (a, b) {
    const result = []
    const concatArray = a.concat(b).length;

    for (let i = 0; ; i++){
        if (a[i] !== undefined && b[i] !== undefined){
            result.push(a[i])
            result.push(b[i])
        } else if (a[i] === undefined && b[i] != undefined){
            result.push(b[i])
        } else if (b[i] === undefined && a[i] !== undefined) {
            result.push(a[i])
        } else {
            break;
        }
    }
    return result;
}


console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']));


// a - number
// b - string