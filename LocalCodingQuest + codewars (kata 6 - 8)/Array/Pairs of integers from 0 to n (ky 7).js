function generatePairs(n) {
    let resultArr = [];
    
    let a = 0;
    let b = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = b; j <= n; j++){
            resultArr.push([a, j])
        }
        a+= 1;
        b+= 1;
    }
    resultArr.push([n, n])
    return resultArr;
}
console.log(generatePairs(4))