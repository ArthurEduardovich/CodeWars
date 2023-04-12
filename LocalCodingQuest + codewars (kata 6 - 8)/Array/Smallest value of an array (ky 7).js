function min(arr, toReturn){
    if (!Array.isArray(arr)){
        return 0;
    }

    let minValue = arr[0], indexMin = 0;

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < arr[0]){
            minValue = arr[i]
            indexMin = i;
        }
    }
    return toReturn == 'value'? minValue:
    indexMin;
}
console.log(min([50,10], 'index'));