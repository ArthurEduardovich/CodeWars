function addStr(arr,str,n){
    if (arr.includes(str)){
      arr.splice(arr.indexOf(str), 1);
    };
    if (n > arr.length){
      arr.push(str);
      return arr;
    };
    if (n <= arr.length){
      arr.splice(n - 1, 0, str);
      return arr;
    };
};

console.log(addStr(["Alice", "Tom", "Tomas","Leo"], "Dina", 1));