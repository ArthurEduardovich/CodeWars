function findUniq(arr){
    const result = arr.filter((el, i) => {
        if (i === arr.indexOf(el) && i === arr.lastIndexOf(el)) return true;
    })
    return Number(result);
}
// console.log(findUniq([1, 1, 2, 1, 1, 1]));