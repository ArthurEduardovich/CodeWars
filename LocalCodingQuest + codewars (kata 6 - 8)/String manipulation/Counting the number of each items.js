// 1
const countEachE1 = (str) => {
  const obj = {};
  for (const el of str) {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  }
  return obj;
};

// 2
const countElFromStartToMiddle = (str) => {
  const obj = {};
  const middle = Math.ceil(str.length / 2);
  for (let i = 0; i < middle; i++) {
    if (obj[str[i]]) ++obj[str[i]];
    else obj[str[i]] = 1;
  }
  return obj;
};
// console.log(countElFromStartToMiddle('Madam'));

// 3
const countElFrom4Ind = (str) => {
  if (str.length <= 4) return 'The string is not long enough';
  const obj = {};
  for (let i = 4; i < str.length; i++) {
    if (obj[str[i]]) obj[str[i]]++;
    else obj[str[i]] = 1;
  }
  return obj;
};

// 4
const countElFromEndToMiddle = (str) => {
  const middleLength = Math.floor(str.length / 2) + 1; // находим середину строки
  const object = {}; // пустой объект куда будем складывать элементы и считать их количество
  for (let i = str.length - 1; i >= middleLength; i--) {
    if (object[str[i]]) {
      object[str[i]]++;
    } else {
      object[str[i]] = 1;
    }
  }
  return object;
};
// console.log(countElFromEndToMiddle('Madam'));

// 5
const objectKeys = (str) => {
  const object = {};
  for (let i = 0; i < str.length; i++) {
    if (object[str[i]]) continue;
    else object[str[i]] = true;
  }
  return Object.keys(object);
};
// console.log(objectKeys('level'));

// 6
const countFirstAndSecondEl = (str) => {
  if (str === '') return 'Empty string';
  const strToLower = str.toLowerCase();
  const firstElement = str[0].toLowerCase();
  const secondElement = str[1].toLowerCase();
  if (firstElement === secondElement) return 'The first and second symbols are the same';
  let countFirst = 0;
  let countSecond = 0;
  for (let i = 0; i < strToLower.length; i++) {
    if (strToLower[i] === firstElement) countFirst++;
    if (strToLower[i] === secondElement) countSecond++;
  }
  return `${firstElement} - ${countFirst}, ${secondElement} - ${countSecond}`;
};
// console.log(countFirstAndSecondEl('Every'));

// 7
const objectValues = (str) => {
    
};
