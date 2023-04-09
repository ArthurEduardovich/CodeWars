function sumOfN (n) {
    let resultArr = [0]
        if (n < 0) {
            for (let i = -1, j = 0; i >= n; i--, j++) {
                resultArr.push(resultArr[j] + i)
            }
        } else {
            for (let i = 1, j = 0; i <= n; i++, j++) {
                resultArr.push(resultArr[j] + i)
            }
        }
        return resultArr;
    }

console.log(sumOfN(6))
// console.log(sumOfN(-4))
// console.log(sumOfN(-6))
