const removeConsecutiveDuplicates = (str) =>{
  const strToArr = str.split(' ');
  const arrRes = [];
  for (let i = 0; i < strToArr.length; i++){
    if (strToArr[i] !== strToArr[i + 1]) arrRes.push(strToArr[i]);
  }
  return arrRes.join(' ');
}
console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))