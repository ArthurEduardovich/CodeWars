function getSumOfDigits(integer){
    let sum = 0;
    let integerToString = integer.toString()
    for (let i = 0; i < integerToString.length; i++){
        sum+= Number(integerToString[i])
    }
    return sum
}
console.log(getSumOfDigits(123));