const maxDiff = (arr) => {
    
    return arr.length < 2? 0: Math.max(...arr) - Math.min(...arr);
}
console.log(maxDiff([16]))
console.log(maxDiff([]))
console.log(0 - -0)