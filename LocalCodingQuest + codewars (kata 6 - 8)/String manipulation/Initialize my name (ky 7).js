function initializeNames(name) {
  if (name.split(' ').length < 3) return name;
  const nameToArr = name.split(' ');
  let result = [];
  for (let i = 0; i < nameToArr.length; i++) {
    if (i > 0 && i < nameToArr.length - 1) {
      result.push(nameToArr[i][0] + '.');
    } else {
      result.push(nameToArr[i]);
    }
  }
  return result.join(' ');
}
console.log(initializeNames('Lois Mary Lane'));
