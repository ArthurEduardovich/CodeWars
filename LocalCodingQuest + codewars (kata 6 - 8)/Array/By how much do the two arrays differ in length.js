const differenceOfArrays  = (arr1, arr2) => {
    const mathSign = Math.sign(arr1.length - arr2.length);
    if (mathSign < 0){
        return arr2.length - arr1.length;
    } else {
        return arr1.length - arr2.length;
    }
}