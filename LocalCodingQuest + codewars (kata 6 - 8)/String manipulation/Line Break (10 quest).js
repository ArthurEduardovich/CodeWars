// 1
function noSpaces(s) {
  if (s === '') return s;
  let res = ''
  for (const item of s){
    if (item !== ' ') res+= item;
  }
  return res;
}
// console.log(noSpaces('Hello world'))
// console.log(noSpaces(' a b c '))
// console.log(noSpaces(''))

// 2 Separating letters into upper and lower case
function lettersDivider (str) {
  let upperWords = ''
  let lowerWords = ''
  for (let item of str) {
    if (item === item.toUpperCase()) upperWords+= item;
    if (item === item.toLowerCase()) lowerWords+= item;
  }
  return [lowerWords, upperWords]
}

// 3 Checking for inverted lines
function reversedString(str, reverseStr) {
  return reverseStr.split('').reverse().join('') === str;
}
// console.log(reversedString('hello','olleh' ))
