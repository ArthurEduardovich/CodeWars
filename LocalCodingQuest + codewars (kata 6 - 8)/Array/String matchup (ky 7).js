const solve = function (a, b) {
    let resultArr = []
    for (let i = 0; i < b.length; i++){
        let count = 0;
        for (let j = 0; j < a.length; j++){
            if (b[i] === a[j]) count++;
        }
        resultArr.push(count);
    }
    return resultArr;
}
console.log(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']))