function solve(arr) {
    
    return arr.find((el) => {
        if (el < 0 && !arr.includes(Math.abs(el))) return true;
        if (el > 0 && !arr.includes(el * -1)) return true;
    })
}


console.log(solve([-3,1,2,3,-1,-4,-2])); // -4
console.log(solve([-110,110,-38,-38,-62,62,-38,-38,-38])) // -38
console.log(solve([1,-1,2,-2,3])) // 3