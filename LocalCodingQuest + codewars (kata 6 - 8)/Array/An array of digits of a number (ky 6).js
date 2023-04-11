function arrayOfDigits(n){
        let nToStr = String(n);
        let arr = [];
        let i = 0;
        do {
            arr.push(Number(nToStr[i]))
            i++;
        } while (i < nToStr.length);

        return arr;
    }
console.log(arrayOfDigits(12345));

console.log(Math.trunc(123456 % 10));
