const countBy = function (x, n) {
    let resultArr = []

    for (let i = 0, j = x; i < n; i++, j+= x){
        resultArr.push(j)
    }
    return resultArr;
}
console.log(countBy(62, 2))