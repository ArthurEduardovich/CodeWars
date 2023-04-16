function duplicates(arr){
    return arr.filter((el, i) => {

        // if (i !== arr.indexOf(el) && i !== arr.lastIndexOf(el)){
        //     return true
        // } 
        if (i === arr.indexOf(el, arr.indexOf(el)) && i !== arr.lastIndexOf(el)){
            return true;
        } else {
            return false;
        }
    })
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5'])) // [4, 3, 1]
console.log(duplicates([1, 1, 1, 2, 4, 2, 3, 3, 5, 6, 8, 10, 11, 10, 12])) // [1, 2, 3, 10]


