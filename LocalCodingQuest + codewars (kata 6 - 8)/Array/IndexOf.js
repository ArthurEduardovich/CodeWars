// TASK 1
function f1(arr, el){
    const result = arr.indexOf(el);
    console.log(result);
};
// f1([1, 2, 3, 4, 5], 5); // 4

// TASK 2
function f2(arr, el){
    const result = 
    arr.indexOf(el) !== -1? arr.indexOf(el): false;
    console.log(result);
};
// f2([1, 2, 3, 4, 5, 6, 7],7); // false

// TASK 3
const f3 = (arr, el) => {
    if (arr.indexOf(el) !== -1) return console.log(true);
    return console.log(false);
};
// f3(['a', 'b', 'c', 'd'],'W');

// TASK 5
const f4 = function(arr, i, el){
    const result = arr.indexOf(el, i);
    console.log(result);
};
// f4([11, 22, 33, 44, 55, 66], 2, 11);

// TAKS 6
const f6 = function(str, el){
    const strToArray = str.split('');
    return strToArray.indexOf(el);
};
// console.log(f6('kat', 'a'))

// TASK 7 immitation IndexOf()
function f7(arr1, n){
    let index = -1;
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] === n){
            index = i;
            break;
        }
    };
    return index;
};
// console.log(f7([1, 33, 17, 64, 101, 99], 919)); // -1

// TASK 8
function f8(arr, n){
    const resultArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === n) resultArr.push(i);
    };
    return resultArr;
};
// console.log(f8([101, 109, 200, 200, 201, 200, 909, 1001, 1, 1.05], 200)) // [2, 3, 5]