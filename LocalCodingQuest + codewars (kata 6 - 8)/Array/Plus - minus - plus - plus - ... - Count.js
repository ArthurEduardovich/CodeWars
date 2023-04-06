const catchSignChange = arr => {
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++){
        if (modifyMathSign(arr[i]) !== modifyMathSign(arr[i + 1])) count++;
        else count;
    }
    return count;
}

function modifyMathSign(value){
    if (value < 0 || Object.is(value, -0)){
        return -1;
    } else {
        return 1;
    }
}
console.log(catchSignChange([1, -3, -4, 0, 5]))