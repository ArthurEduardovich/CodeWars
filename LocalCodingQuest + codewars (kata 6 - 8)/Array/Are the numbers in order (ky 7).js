function inAscOrder (arr) {
    const result = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) return false;
    }
    return result;
}

function inAscOrder2 (arr) {
    return arr.join('') === arr.sort((x, y) => x - y).join('')
}

console.log(inAscOrder2([1, 6, 12, 22, 24]))