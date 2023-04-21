function addOrDelete(arr, str, num){
    const strModify = str.trim().toLowerCase();
    if (strModify === ''){
        return arr;
    };
    if (arr.includes(strModify)){
        arr.splice(arr.indexOf(strModify), 1);
        return arr;
    }
    if (!arr.includes(strModify)){
        arr.splice(num, 0, strModify)
        return arr;
    }
}

console.log(addOrDelete(['a', 'b', 'c', 'd'], 'f', 0))