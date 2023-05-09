// 1
function removeAtIndex (arr, i) {
    arr.splice(i, 1);
    return arr;
}
console.log(removeAtIndex([1, 2, 3, 4, 5, 6], 2));

// 2 
function insertAtIndex (arr, i, el) {
    arr.splice(i, 0, el);
    return arr;
}
// console.log(insertAtIndex([1, 2, 3, 4, 5, 6], 2, 'LIFE'));

// 3
function replaceAtIndex (arr, index, newValue) {
    arr.splice(index, 1, newValue);
    return arr;
}
// console.log(replaceAtIndex([1, 2, 3, 4, 5, 6], 1, 55))