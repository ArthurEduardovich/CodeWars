function sumOrProduct(array, n) {
    // 1. Фильтруем массив по убиванию
    const sortArr = array.sort((x, y) => y - x);
    let sumMax = 0;
    let sumMin = 1;
    
    // 2. Циклом находим сумму максимальных чисел и минимальных
    for (let i = 0; i < n; i++) {
        sumMax+= sortArr[i];
        sumMin*= sortArr[sortArr.length - 1 - i];
    }
   
    // 3. Возвращаем результат в зависимости от условия
    return sumMax > sumMin? "sum":
           sumMin > sumMax? "product":
           "same";
}

console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3))