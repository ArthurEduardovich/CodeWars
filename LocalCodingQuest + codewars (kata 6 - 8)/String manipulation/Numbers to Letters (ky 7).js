function switcher(x){
    // let collectionWord = [];
    // for (let i = 96; i <= 121; i++){
    //     collectionWord.push(String.fromCharCode(i));
    // }
    // return collectionWord
    const result = [];
    const xSort = x.map((el) => Number(el)).sort((x, y) => x - y);
    for (let i = 0; i < xSort.length; i++){
        result.push(String.fromCodePoint(121 - xSort[i]))
    }
    return result;
}
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); // codewars
