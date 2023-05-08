function howManySmaller(arr,n){
    const res = arr.map((el) => {
        return (Number(el.toFixed(2)))
    })
    let count = 0;
    for (let i = res.length - 1; i >= 0; i--){
        if (res[i] < n) count++;
    }
    return count;
}
console.log(howManySmaller([1.234,1.235,1.228], 1.24)); // 2
console.log(howManySmaller([1.1888,1.1868,1.1838],1.19)); // 1