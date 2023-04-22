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
// console.log(codeMorse("MarcO"))
// console.log(codeMorse(" 94 6"))

// 5 Fixed bugs
function bugFixer(arr){
    for (const c of arr){
        if (c === 'bug'){
            arr.splice(arr.indexOf(c), 1, 'FIX')
        }
    }
    return arr;
}
// console.log(bugFixer([1, 2, "bug", "One", "Two", "Three", "bug", "bug"]));

// 6 Dogs communiqe
function dogResponse(arr){
    const calcRepeat = () => arr[0].length - arr[1];

    const barkOrHello = 
    calcRepeat() < 0? 'hello!':
    'bark! '.repeat(calcRepeat()).trimEnd();

    return `${arr[0]}: ${barkOrHello}`
};

// console.log(dogResponse(['Bobby', 2]))

// 7 ToDo
function mainTasks(tasks, toDoFirst, toDoLast){
        
    const toDoFirstValue = `Before ${tasks[tasks.indexOf(toDoFirst) + 1]}`
    const toDoLastValue = `After ${tasks[tasks.indexOf(toDoLast) - 1]}`

    const obj = {
        [toDoFirst]: toDoFirstValue,
        [toDoLast]: toDoLastValue,
    }
    return obj;
};

console.log(mainTasks(["Getting up", "Working", "Eating", "Reading", "Sleeping"], "Getting up", "Reading"));