function doubleArray(arr, n){
    arr[0].splice(0, n);
    arr[1].splice(0, n);
    return arr;
}