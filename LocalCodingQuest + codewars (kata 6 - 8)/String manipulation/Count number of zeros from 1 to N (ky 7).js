function countZeros(n) {
    let count = 0;
    for (let i = 1; i <= n; i++){
        let nToStr = String(i);
        for (let j = 0; j < nToStr.length; j++){
            if (nToStr[j] === '0') count++;
        }
    }
    return count;
}
console.log(countZeros(200)); // 31