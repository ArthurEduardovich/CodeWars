function names (arr){
    if (!arr.includes('Alice')){
      arr.push('Alice');
      return arr;
    } else {
      arr.splice(arr.indexOf('Alice') + 1)
      return arr;
    };
};