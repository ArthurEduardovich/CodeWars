function calculateLength(arr1, arr2){
    const lengthArr1 = arr1.length;
    const lengthArr2 = arr2.length;

    if (lengthArr1 == 0 || lengthArr2 == 0){
        return 'One of the arrays is empty'
    }
    if (lengthArr1 > lengthArr2){
        return `The first array is ${Math.round(((lengthArr1-lengthArr2) / lengthArr2) * 100)}% longer than the second array`
    }
    if (lengthArr2 > lengthArr1){
        return `The second array is ${Math.round(((lengthArr2-lengthArr1) / lengthArr1) * 100)}% longer than the first array`
    }
    if (lengthArr1 === lengthArr2){
        return `The arrays are the same length`
    } 
}