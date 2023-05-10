function switcher(x){
    let collectionWord = [];
    for (let i = 123; i >= 97; i--){
        collectionWord.push(String.fromCharCode(i));
    }
    collectionWord.push('!','?',' ')
    const xToNumber = x.map((el) => Number(el));
    let str = ''
    for (let j = 0; j < xToNumber.length; j++){
        str+= collectionWord[xToNumber[j]]
    }
    return str;
}
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); // 'codewars'
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4'])); // 'btswmdsbd kkw'
