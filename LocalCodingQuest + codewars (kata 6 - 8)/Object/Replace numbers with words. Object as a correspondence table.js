function getNumberName(n){
  const obj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten'
  }
  return (obj.hasOwnProperty(n))? obj[n]: 'unknown number';
};
console.log(getNumberName(11))