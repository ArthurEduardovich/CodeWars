function splitArray(arr){
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i < arr.length; i++){
      if (i <= Math.ceil(arr.length / 2) - 1) {
      arr1.push(arr[i]);
      } else {
      arr2.push(arr[i]);
      }
    }
    return [arr1, arr2];
  };

function splitArray2(arr) {
    const mid = Math.ceil(arr.length / 2);
    const arr1 = arr.slice(0, mid);
    const arr2 = arr.slice(mid);
    return [arr1, arr2];
};

console.log(splitArray([1, 2, 3, 4, 5, 6, 7]))