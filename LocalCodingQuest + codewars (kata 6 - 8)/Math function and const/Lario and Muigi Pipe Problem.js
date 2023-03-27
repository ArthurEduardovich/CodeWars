function pipeFix(numbers){
  let arr = [];
  for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++){
    arr.push(i)
  }
  return arr;
}
console.log(pipeFix([1,2,3,5,6,8,9]));