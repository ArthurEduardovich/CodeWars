
const numberToString = (num) => String(num);
const numberToString2 = (num) => num + '';
const numberToString3 = (num) => num += '';

console.log(typeof numberToString(123));
console.log(typeof numberToString2(123));
console.log(typeof numberToString3(123))