function getNumberFromString(s) {
  return +s.replace(/\D/g,'');
}
console.log(getNumberFromString('thiS is number: 7'));