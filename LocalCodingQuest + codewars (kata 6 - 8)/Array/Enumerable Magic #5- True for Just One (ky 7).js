function one(arr, fun){
    const result = arr.filter(fun);
    return result.length != 1? false: true;
}

console.log(one([1,2,3,4,5], function(item){ return item < 2}))