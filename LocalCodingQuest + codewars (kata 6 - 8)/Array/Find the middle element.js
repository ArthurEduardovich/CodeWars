function gimme (arr) {
    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== maxValue && arr[i] !== minValue) {
            return i;
        }
    }
}

console.log(gimme([-2, -3, -1]))
console.log(gimme([-5, -10, -14]))
console.log(gimme([-2, -3.2, 1]))
console.log(gimme([-5.2, -10.6, 14])) // 0