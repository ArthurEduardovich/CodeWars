function countNaN(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isNaN(arr[i] === true || arr[i] )) count++;
        count;
    }
    return count;
}

console.log(countNaN(['hello', 'hello' * 5]))