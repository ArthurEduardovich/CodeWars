// 1
function twoArrays(arr1) {
    const twoArr = arr1.slice();
    arr1[0] = undefined;
    return [arr1, twoArr];
};

// console.log(twoArrays([1, 2, 3]));

// 2
function toString(...arg) {
    return arg.join(' ')
};

// console.log(toString(['hello'],['world'], '!!!')); // 'hello world!!!'

// 3

function copyDifference (arr) {
    if (!Array.isArray(arr)) return arr;
    const copy1 = arr.slice();
    const copy2 = JSON.parse(JSON.stringify(arr));
    return [copy1, copy2];
};

console.log(copyDifference ([ ['Java'], ['Script'] ])); //  [['Java'], ['Script']], [['Java'], ['Script']]
