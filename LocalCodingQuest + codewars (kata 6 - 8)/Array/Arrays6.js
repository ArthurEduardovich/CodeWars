// 1 Value of an element from the middle of the array
function getMiddleElement(obj, prop){

    const propToUpper = prop.toLowerCase(); // модифицируем имя свойства 

    // Проверяем имеет ли объект свойство передаваемое вторым аргументов в функцию
    if (!obj.hasOwnProperty(propToUpper)){
        return `No such property: ${prop}`;
    };
    if (obj[propToUpper].length % 2 === 0) {
        return obj[propToUpper][(obj[propToUpper].length / 2) - 1]
    };
    if (obj[propToUpper].length % 2 === 1) {
        return obj[propToUpper][Math.floor(obj[propToUpper].length / 2)]
    };
};

// console.log(getMiddleElement({ numbers1: [1, 2, 3, 4, 5, 6, 7, 8], numbers2: [1, 2, 3, 4, 5, 6, 7, 8, 9] }, "numbers1"));

// 2 Combining arrays
function arrayJoiner(arr1, arr2, arr3, arr4){
    return arr1.concat(arr2).concat(arr3).concat(arr4);
};
// console.log(arrayJoiner([1],[2],[3],[4]));

// 3 Combining modified arrays
const arrayModifier = (arr1, arr2) => {
    arr2.unshift(arr1.shift());
    arr2.push(arr1.pop());
    return arr1.concat(arr2); 
};

// console.log(arrayModifier(["black", "white", "red", "green", "blue"], ["yellow", "orange"]));

// 4 Morse code
function codeMorse(str){
    const morse = {
        A: '.-',
        B: '-...',
        C: '-.-.',
        D: '-..',
        E: '.',
        F: '..-.',
        G: '--.',
        H: '....',
        I: '..',
        J: '.---',
        K: '-.-',
        L: '.-..',
        M: '--',
        N: '-.',
        O: '---',
        P: '.--.',
        Q: '--.-',
        R: '.-.',
        S: '...',
        T: '-',
        U: '..-',
        V: '...-',
        W: '.--',
        X: '-..-',
        Y: '-.--',
        Z: '--..',
      };
    const arrResult = [];
    for (let i = 0; i < str.length; i++){
        if (str[i] === ' ') continue;
        if (morse.hasOwnProperty(str[i].toUpperCase())){
            arrResult.push(morse[str[i].toUpperCase()]);
            arrResult.push(' ');
        } else {
            arrResult.push(str[i]);
            arrResult.push(' ')
        }
    };
    return arrResult.join('').trim();
};
console.log(codeMorse("MarcO"))
console.log(codeMorse(" 94 6"))