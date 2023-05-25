function numOfLettersAndOther(str) {
  if (!Boolean(str)) return 'String is empty';
  let countOther = 0;
  for (const el of str) {
    if (el.toLowerCase() === el.toUpperCase()) countOther++;
  }
  return `Letters: ${str.length - countOther}, other symbols: ${countOther}`;
}

function twoStringsBattle(str1, str2) {
  const calcUpperWord = (s) => {
    let count = 0;
    for (const el of s) {
      if (el.toUpperCase() === el) count++;
    }
    return count;
  };
  if (calcUpperWord(str1) === calcUpperWord(str2)) return 'Draw';
  if (calcUpperWord(str1) > calcUpperWord(str2))
    return `${str1} has won with number of ${calcUpperWord(str1)}`;
  if (calcUpperWord(str2) > calcUpperWord(str1))
    return `${str2} has won with number of ${calcUpperWord(str2)}`;
}

const stringAndCommand = (str, command) => {
  if (!Boolean(str)) return 'String is empty';
  let count = 0;
  for (const el of str) {
    if (command === 'countUpperCase') {
      if (el.toUpperCase() === el) count++;
    }
    if (command === 'countLowerCase') {
      if (el.toLowerCase() === el) count++;
    }
  }
  return `Command: ${command}, result: ${count}`;
};
// console.log(stringAndCommand('sun', 'countUpperCase'));

function letterAndSymbol(str) {
  let symbol = '',
    word = '';
  for (const el of str) {
    if (el.toLowerCase() === el.toUpperCase()) symbol += el;
    else word += el;
  }
  return [word, symbol];
}

function numOfLowerAndUpperCase(str) {
  let lowerCount = 0, upperCount = 0;
  for (const el of str) {
    if (el.toLowerCase() === el.toUpperCase() || el === ' ') continue;
    if (el.toLowerCase() !== el) upperCount++;
    if (el.toUpperCase() !== el) lowerCount++;
  }
  return [lowerCount, upperCount];
}
