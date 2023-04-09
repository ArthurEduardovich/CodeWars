function generateRange(min, max, step){
    let resultArr = []

    for (let i = min; i <= max; i+= step){
        resultArr.push(i)
    }
    return resultArr;
}
console.log(generateRange(2, 10, 2))