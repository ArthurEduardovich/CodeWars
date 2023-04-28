function solve(arr) {
    const sortArr = arr.sort((a, b) => b - a);
    const result = [];
    for (let i = 0; i < Math.floor(sortArr.length / 2); i++){
        result.push(sortArr[i])
        result.push(sortArr[sortArr.length - 1 - i])
    }
    if (result.length !== sortArr.length){
        result.push(sortArr[Math.ceil(sortArr.length / 2) - 1]);
    }
    return result;
}

console.log(solve([15,11,10,7,12])) // [15,7,12,10,11]
console.log(solve([78,79,52,87,16,74,31,63,80])) // 87,16,80,31,79,52,78,63,74