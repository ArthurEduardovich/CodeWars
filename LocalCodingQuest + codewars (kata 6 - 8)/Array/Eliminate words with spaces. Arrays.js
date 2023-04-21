function changeElement(arr, str){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] === ' '){
                arr.splice(i, 1, str)
            } else {
                continue;
            }
        }
    }
    return arr;
}