function pattern(n){
    let result = ''
    for (let i = 1; i <= n; i++){
        if (i !== n) result+= `${i}\n1${'*'.repeat(i)}`;
        else result+= i;
    }
    return result;
}
console.log(pattern(10)); // "1\n1*2\n1**3\n1***4\n1****5\n1*****6\n1******7"