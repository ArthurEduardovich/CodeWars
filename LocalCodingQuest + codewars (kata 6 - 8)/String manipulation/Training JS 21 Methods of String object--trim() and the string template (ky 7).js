function fiveLine(s){
    let res = '';
    for (let i = 1; i <= 5; i++){
        if (i !== 5) res+= s.trim().repeat(i) + `\n`;
        else res+= s.trim().repeat(i)
    }
    return res;
}
console.log(fiveLine('a'));