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
// console.log(countDigitInNumber(123123, 3));

// 4 Выбрать из строки все цифры и записать их в массив
function digitsToArray(str) {
  let array = [];
  let countList = '0123456789';
  for (const el of str) {
    if (countList.indexOf(el) !== -1) array.push(Number(el));
  }
  return array;
}
// console.log(digitsToArray('abc123'));

// 5 Выбрать из строки все числа и записать их в массив
function numbersToArray (str) {
  let numList = '0123456789';
  let array = [];
  let acc = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '') continue;
    if (numList.includes(str[i])) {
        acc+= str[i];
    } else {
        array.push(Number(acc));
        acc = '';
    }
  }
  return array;
}
console.log(numbersToArray('a bc 12 3')); // [12, 3]
