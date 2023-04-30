function solve(arr){
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        let count = 0;
        for (let j = i + 1; j < arr.length; j++){
            if (item > arr[j]) count++;
            else break;
        }
        if (count === arr.length - (i + 1)) result.push(item)
    }
    return result;
};

console.log(solve([67,54,27,85,66,88,31,24,49])) // [88,49]