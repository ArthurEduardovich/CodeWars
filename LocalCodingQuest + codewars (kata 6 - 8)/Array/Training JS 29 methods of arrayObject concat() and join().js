function bigToSmall(arr){
    return [].concat(...arr).sort((x,y) => y - x).join('>');
}
console.log(bigToSmall([[1,2],[3,4],[5,6]]))