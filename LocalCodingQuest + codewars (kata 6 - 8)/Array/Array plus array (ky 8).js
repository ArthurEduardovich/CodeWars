function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, el) => acc+= el, 0)
}
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));  // -21