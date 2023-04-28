function minSum(arr) {
    const arrSort = arr.sort( (x, y) => y - x) // сортируем массив по убиванию
    let sum = 0; // контейнер для суммы
    for (let i = 0; i <= arrSort.length / 2 - 1; i++) {
        sum+= (arrSort[i] * arrSort[arrSort.length - 1 - i])
    }
    return sum;
}

console.log(minSum([5,4,2,3]))
console.log(minSum([12,6,10,26,3,24]))