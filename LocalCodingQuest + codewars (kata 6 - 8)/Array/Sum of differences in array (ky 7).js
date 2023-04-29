const sumOfDifferences = arr => {
    // сортируем массив в порядке убывания
    const sortArray = arr.sort((x, y) => y - x);

    // инициализируем переменную куда будем складывать сумму вычислений
    let sum = 0;

    // проверяем переданный массив (не равно ли число элементов в массиве - нулю)
    if (arr.length === 0) return sum;

    // через цикл находим итоговую сумму
    for (let i = 0; i < sortArray.length - 1; i++) {
        sum+= (sortArray[i] - sortArray[i + 1]);
    }
    return sum;
} 

console.log(sumOfDifferences([1, 2, 10]))