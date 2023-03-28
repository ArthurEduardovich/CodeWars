// 1
function convertNumber(num){
  return [+num.toString(10), +num.toString(2), +num.toString(8), num.toString(16)]
}
console.log(convertNumber(32));

// 2
function convertNumber(num, n){
  return num.toString(n);
}
console.log(convertNumber(217, 42))