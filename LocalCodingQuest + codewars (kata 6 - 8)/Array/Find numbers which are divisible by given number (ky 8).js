function divisibleBy(num, divisor){
    const result = num.filter((el) => {
        if (el % divisor == 0) return true;
        return false;
    });
    return result;
}

console.log(divisibleBy([1,2,3,4,5,6], 2))