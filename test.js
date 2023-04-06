function modifyMathSign(value){
    if (value < 0 || Object.is(value, -0)){
        return -1;
    } else {
        return 1;
    }
}
console.log(modifyMathSign(-1))
console.log(modifyMathSign(1))
console.log(modifyMathSign(-0))
console.log(modifyMathSign(0))







