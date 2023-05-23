const calculate = str => {
  const loses = 'loses';
  const gains = 'gains';
  const strArr = str.split(' ').filter((el) => !isNaN(el));
  if (str.includes(loses)) {
    return +strArr[0] - +strArr[1];
  } else {
    return +strArr[0] + +strArr[1];
  }
}
console.log(calculate("Panda has 48 apples and loses 4"));