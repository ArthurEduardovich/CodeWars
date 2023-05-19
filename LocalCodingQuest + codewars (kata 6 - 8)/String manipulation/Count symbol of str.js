// 1
function numberOfOccurrences (str, sym){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === sym) ++count;
    }
    return count;
}

// 2
function firsAndLastElement (str){
    if (str == '') return 'String is empty';
    const countElements = s => {
        let count = 0;
        for (const el of str){
            if (el === s) ++count;
        }
        return count;
    }
    return `Count of first element: ${countElements(str[0])}, count of last element: ${countElements(str[str.length - 1])}`;
}
// console.log(firstAndLastElement('abracadabra'));

// 3
function lowerAndUpperCase(str, el){
    let upperCount = 0;
    let lowerCount = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === el.toUpperCase()) ++upperCount;
        if (str[i] === el.toLowerCase()) ++lowerCount;
    }
    return `Number of lowercase is ${lowerCount} and uppercase is ${upperCount}`;
}

// 4
function numberOfOccurrencesBothEl (str, el1, el2){
    const lowerStr = str.toLowerCase();
    const lowerEl1 = el1.toLowerCase();
    const lowerEl2 = el2.toLowerCase();
    let countEl1 = 0;
    let countEl2 = 0;
    for (const el of lowerStr){
        if (lowerEl1 === el) countEl1++;
        if (lowerEl2 === el) countEl2++;
    }
    return `First element: ${countEl1}, second element: ${countEl2}`;
}

// 5
function indexOfOccurences(str, sym){
    let result = []
    for (let i = 0; i < str.length; i++){
        if (str[i] === sym) result.push(i);
    }
    return result.join(' ');
}

// 6
function stringOfOccurrences(str = 0, sym = 0){
    const error = 'There is no such element in the string';
    if (str === 0 || sym === 0) return error;
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === sym) count++;
    }
    return count > 0? `The element "${sym}" occurs in the string ${count} times`: error;
}

// 7
function occurencesInObject(str){
    let one = 0;
    let two = 0;
    let three = 0;
    for (const el of str){
        if (el === '1') one++;
        if (el === '2') two++;
        if (el === '3') three++;
    }
    return {
        'one': one,
        'two': two,
        'three': three
    }
}
// console.log(occurencesInObject('1234212131231'));

// 8
function replaceElWithIndex(str, sym){
    const strLower = str.toLowerCase();
    const symLower = sym.toLowerCase();
    let result = '';
    for (let i = 0; i < strLower.length; i++){
        if (strLower[i] === symLower) result+= i;
        else result+= str[i];
    }
    return result;
}
// console.log(replaceElWithIndex('Hello World', 'l'));

