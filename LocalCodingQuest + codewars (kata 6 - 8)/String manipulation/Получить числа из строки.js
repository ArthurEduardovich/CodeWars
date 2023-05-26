// 1 Посчитать количество вхождений заданной цифры в строку
function countDigit(str, num) {
  let count = 0;
  for (const el of str) {
    if (el === num) count++;
  }
  return count;
}

// 2 Сколько цифр в строке?
const countDigits = (str) => {
  let count = 0;
  for (const el of str) {
    if (!isNaN(el) && el !== ' ') count++;
  }
  return count;
};
// console.log(countDigits('dasfaw2314dafa1 ??Ddasditrue')); // 5

// 3 Посчитать сколько раз заданная цифра входит в число
function countDigitInNumber(number, digit) {
  const nToStr = String(number);
  let count = 0;
  for (const el of nToStr) {
    if (el === String(digit)) count++;
  }
  return `In number ${number} digit ${digit} occurs ${count} times`;
}
console.log(countDigitInNumber(123123, 3));
