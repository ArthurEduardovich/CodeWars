function modifyArray(arr){
    if (arr.length % 3 === 0){
      arr.splice(arr.length - 3);
      return arr;
    };
    if (arr.length % 3 !== 0){
        for (let i = arr.length; i >= 0; i--){
            if (arr.length % 3 === 0) break;
            else {
                arr.pop();
            }
        }
    };
    return arr;
};

console.log(modifyArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))




function modifyArray2(arr) {
    if (arr.length % 3 === 0) {
      return arr.slice(0, arr.length - 3);
    } else {
      return arr.slice(0, arr.length - (arr.length % 3));
    }
  }

  console.log(modifyArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  