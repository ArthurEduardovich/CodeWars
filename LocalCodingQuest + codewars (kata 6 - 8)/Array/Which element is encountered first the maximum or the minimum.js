function indexMaxMin (arr) {
    let minValue = arr[0], indexMin = 0;
    let maxValue = arr[0], indexMax = 0;

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > maxValue){
            maxValue = arr[i];
            indexMax = i;
        }
        if (arr[i] < minValue){
            minValue = arr[i]
            indexMin = i;
        }
    }
    
    return indexMax < indexMin? 'max':
           indexMax > indexMin? 'min':
           undefined;
}
console.log(indexMaxMin([1, 2, 3, 5, 10, 0]))