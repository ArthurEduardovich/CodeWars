function sum(arr){
  var result = 0;
  arr.map((el) => result+= el);
  return result;
};
console.log(sum([1, 3, 3]));