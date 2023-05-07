function findDeletedNumber(arr, mixArr) {
    return arr.reduce((acc, el) => acc+=el, 0) - mixArr.reduce((acc, el) => acc+=el, 0)
}
console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]));