function array(str){
    const result = str.split(',');
    return result.length >= 3? result.slice(1, -1).filter((el) => el !== ',').join(' '): null;
}
console.log(array('1,2,3')); // '2'
console.log(array('A1,B2')); // null