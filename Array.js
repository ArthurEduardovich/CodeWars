function deepCopyArray(arr) {
    if (!Array.isArray(arr)) {
      return arr;
    }
    
    const copy = [];
    for (let i = 0; i < arr.length; i++) {
      copy.push(deepCopyArray(arr[i]));
    }
    return copy;
  }

console.log(deepCopyArray([1, [2, [3, 4], 5], 6]))