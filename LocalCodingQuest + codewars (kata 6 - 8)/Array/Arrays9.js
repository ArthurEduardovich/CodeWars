// 1
function getAllStr(arr){
const arr1 = arr.filter((el)=> {
if (typeof el === 'string') return true;
    })
return arr1.join(' ').trim();
}
// console.log(getAllStr([1,2,3]))

// 2
function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 1) sum+= arr[i];
    }
    return sum;
}

// 3
function findNull(arr){
    const result = arr.indexOf(null);
    return result != -1? result: "null not found"
}
// console.log(findNull([1, 2, 3, null, 4]))

// 4
function quantityOfNumbers(arr){
    const resultArr = arr.filter((el) => typeof el === 'number');
    return resultArr.length;
}

// 5
function reverse(arr){
    for (let i = 0; i < arr.length / 2; i++){
        let temp = arr[i]; // 1
        arr[i] = arr[arr.length - 1 - i] // 1 = 5
        arr[arr.length - 1 - i] = temp; // 5 = 1
    }
    return arr;
};
console.log(reverse([1, 2, 3, 4, 5]));