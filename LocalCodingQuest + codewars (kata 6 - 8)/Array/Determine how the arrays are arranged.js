function arrayOrder(arr1, arr2, arr3){
    const arrayLength = [arr1.length, arr2.length, arr3.length];
    if (arrayLength[0] < arrayLength[1] && arrayLength[1] < arrayLength[2]){
        return 'Arrays are in ascending order'
    }
    if (arrayLength[0] > arrayLength[1] && arrayLength[1] > arrayLength[2]){
        return 'Arrays are in descending order'
    }
    return 'Not sure'
}