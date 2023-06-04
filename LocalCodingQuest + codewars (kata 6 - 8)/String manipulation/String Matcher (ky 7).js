function isMatching(string, str1, str2) {
  const modStr1AndStr2 = (str1 + str2).replace(/\s/g, '').toLowerCase().split('').sort().join('');
  const modString = string.replace(/\s/g, '').toLowerCase().split('').sort().join('');
  return modStr1AndStr2 === modString;
}
console.log(isMatching('bouh', '0', 'buh')); // false
console.log(isMatching('email box', 'b aIl', 'Mo x e')); // true
