const myTestArray = [true, 'tt'];

const countNumbers = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') continue;
        count++;
    }
    return count;
}
console.log(countNumbers(myTestArray));