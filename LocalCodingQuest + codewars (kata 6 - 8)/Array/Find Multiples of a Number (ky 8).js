function findMultiples(integer, limit) {
    let resultArr = [];
    for (let i = integer; i <= limit; i+= integer){
        resultArr.push(i)
    }
    return resultArr;
}
console.log(findMultiples(5, 7))
  