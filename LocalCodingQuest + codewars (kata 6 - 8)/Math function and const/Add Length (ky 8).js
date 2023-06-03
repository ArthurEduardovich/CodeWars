function addLength(str) {
  const strToArr = str.split(' ');
  let resultArr = [];
  for (let i = 0; i < strToArr.length; i++) {
    resultArr.push(`${strToArr[i]} ${strToArr[i].length}`);
  }
  return resultArr;
}
