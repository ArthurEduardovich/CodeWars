function numberToSecret(str){
  /***************************/
  const obj = {
    0: 't',
    1: '&',
    2: ':',
    3: 'B',
    4: '@',
    5: 'Q',
    6:  8,
    7: 'W',
    8: 'x',
    9: '#'
  }
  /**************************/
  return `${obj[str[0]]}${obj[str[1]]}${obj[str[2]]}${obj[str[3]]}`
}
console.log(numberToSecret('1134'));
console.log(numberToSecret('3456'));