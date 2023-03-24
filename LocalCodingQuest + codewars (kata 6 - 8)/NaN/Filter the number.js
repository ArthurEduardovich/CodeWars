
const filterString = (value) => {
  let result = '';
  if (isNaN(value)) {
      for (let i = 0; i < value.length; i++) {
      if (isNaN(value[i])) continue;
      else result+= value[i];
      }
    } else {
    return +value;
  }
  return +result;
}
console.log(filterString('a1b2c3'));