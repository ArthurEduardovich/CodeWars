// 1 Слово из отдельных букв
function wordFromLetters (letters) {
    let resString = '';
    for (let i = 0; i < letters.length; i++) {
        resString+= letters[i];
    }
    return resString;
}

// 2 Число из отдельных цифр
function getNumber (digits){
    let resString = '';
    for (let i = 0; i < digits.length; i++){
        resString+= digits[i];
    }
    return Number(resString);
}

// 3 Массив чисел в строку
function numbersToString (numbers){
    let resultString = '';
    for (let i = 0; i < numbers.length; i++){
        if (i === numbers.length - 1) resultString+= numbers[i];
        else resultString+= numbers[i] + ','
    }
    return resultString;
}
// console.log(numbersToString([1, 20, 90]));

// 4 Список покупок
function shoppingList (items) {
    let strItem = '';
    for (let i = 0; i < items.length; i++){
        strItem+= '\n' + '-' + items[i]; 
    }
    return `Shopping list:${strItem}`
}

// 5 Составить предложение из отдельных слов
function wordsToSentence(arr){
    if (arr.length < 1) return '';
    let firstWord = '';
    for (let i = 0; i < arr[0].length; i++){
        if (i !== 0) firstWord+= arr[0][i].toLowerCase();
        else firstWord+= arr[0][i].toUpperCase();
    }
    if (arr.length === 1) return firstWord + '.';
    for (let i = 1; i < arr.length; i++){
        if (i !== arr.length - 1) firstWord+= ' ' + arr[i].toLowerCase();
        else firstWord+= ' ' + arr[i].toLowerCase() + '.';
    }
    return firstWord;
}
// console.log(wordsToSentence(["heLLo", "wORLd"])); // 'Hello world.'

// 6 Целые положительные числа из массива в строку
function stringOfPositiveIntegers(arr){
    let res = '';
    for (let i = 0; i < arr.length; i++){
        if (Number.isInteger(arr[i]) && arr[i] > 0) res+= ' ' + arr[i] + ';'
    }
    return `(${res})`;
}
// console.log(stringOfPositiveIntegers( [-11, 2.56, 3, -4.7, 5.01, -60, 71, 0, 9, 1000] ) );

// 7 Выбрать из массива слова, начинающиеся с заданной буквы
function getWordsStartingWith(arr, word){
    let res = '';
    for (let i = 0; i < arr.length; i++){
        let firstWordsLetter = arr[i][0].toLowerCase();
        if (firstWordsLetter === word.toLowerCase()) res+= arr[i] + ' ';
        else continue
    }
    return res.trimEnd();
}
// console.log(getWordsStartingWith(['Ant', 'case', 'art', 'A'], 'a')); // 'Ant art A'

// 8 Выбрать из массива все слова, которые имеют определенную длину
