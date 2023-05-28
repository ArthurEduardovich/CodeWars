// 1
function numberToArray1(str) {
  const listNum = '0123456789';
  const arr = [];
  let acc = '';
  for (let i = 0; i < str.length; i++) {
    if (listNum.includes(str[i]) && i === str.length - 1) {
      acc += str[i];
      arr.push(Number(acc));
    } else if (listNum.includes(str[i])) {
      acc += str[i];
    } else if (acc !== '') {
      arr.push(Number(acc));
      acc = ''
    }
  }
  return arr;
}
// 2
function numToArray2(str){
    const result = str.match(/\d+/g);
    return result? result.map(Number): []
}

console.log(numToArray2('5fgsdg5 531 fa- da1-% 1 0 1 '))
