// The smallest number and its ordinal number.
function smallerOfTwo (a, b) {
    let exodusArr = [];
    if (a > b) {
        exodusArr.push(b, 2)
        return exodusArr;
    }
    if (b > a) {
        exodusArr.push(a, 1);
        return exodusArr;
    }
    if (a === b) {
        exodusArr.push(a, 1);
        return exodusArr;
    }
}
console.log(smallerOfTwo(2, 2))