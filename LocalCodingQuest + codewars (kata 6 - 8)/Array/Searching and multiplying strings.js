function arrayModify(array, str){
  let indexStr = array.indexOf(str);
  for(let i = 0; i < array.length; i++){
    if(array[i] !== str) continue;
    array.push(str.repeat(indexStr));
    break;
  }
  return array;
}
console.log(arrayModify([0, 'E', 'A', 'F'],'A'))
