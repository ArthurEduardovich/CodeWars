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

// 4 Number of spaces in lines
function numOfSpaces  (str1, str2) {
  const concatStr = str1.concat(str2)
  let count = 0;
  for (const item of concatStr) {
    if (item == ' ') count++;
  }
  return count;
}
// console.log(numOfSpaces('123', '4 5 6')); // 2

// 5 String vs. array comparison
function stringAndArray (str, arr) {
  if (str.length !== arr.length) return "Elements are not equal";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== arr[i]) return "Elements are not equal";
  }
  return "Elements are equal"
}

// 6 Even and odd index division
function oddAndEven (str) {
  let oddIndexSymbol = ''
  let evenIndexSymbol = ''
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) evenIndexSymbol+= str[i];
    if (i % 2 === 1) oddIndexSymbol+= str[i];
  }
  return new Array(oddIndexSymbol, evenIndexSymbol);
}

// 7 Limiting string length
function limitedLength (str, num) {
  let resStr = ''
  for (let i = 0; i < num; i++) {
    resStr+= str[i]
  }
  return resStr;
}

// 8 Is the string a palindrome?
function palindrome (str) {
  let strReverse = ''
  for (let i = str.length - 1; i >= 0; i--){
    strReverse+= str[i]
  }
  return strReverse === str
}
console.log(palindrome('racecar'))