// 1 Подсчитать количество главсных букв в строке
function countVowels(str) {
  const vowels = 'aeiouAEIOU'; // переменная с гласными буквами
  let countVowels = 0; // счётчик гласных букв
  for (const el of str) {
    if (vowels.includes(el)) countVowels++;
  }
  return countVowels;
}
// console.log(countVowels('hello'));

// 2 Количество гласных и согласных букв в слове
const countLetters = (str) => {
  const vowels = 'aeiou'; // переменная с гласными буквами в нижнем регистре
  const strToLower = str.toLowerCase(); // опускаем строку к нижнему регистру
  const obj = { vowel: 0, consonant: 0 }; // объект куда будет считать количество гласных с согласных букв
  for (const el of strToLower) {
    if (el === '' || el === ' ') continue;
    if (vowels.includes(el)) obj.vowel++;
    else obj.consonant++;
  }
  return obj;
};
// console.log(countLetters('Hello'));

// 3 Посчитать количество согласных букв в строке
const countOnlyConsonant = (str) => {
  const vowels = 'aeiou'; // переменная с согласными буквами, будем сравнивать с ней
  let countConsonants = 0;
  for (const el of str) {
    if (vowels.includes(el)) continue;
    else countConsonants++;
  }
  return countConsonants;
};
// console.log(countOnlyConsonant('abc'));

// 4 Посчитать гласные строчные и прописные
const countLetters2 = function (str) {
  const vowelsLower = 'aeiou';
  const vowelsUpper = vowelsLower.toUpperCase();
  const obj = {
    vowelLowerCase: 0,
    vowelUpperCase: 0,
    others: 0,
  };
  for (const el of str) {
    if (vowelsLower.includes(el)) obj.vowelLowerCase++;
    else if (vowelsUpper.includes(el)) obj.vowelUpperCase++;
    else obj.others++;
  }
  return obj;
};
// console.log(countLetters2('aAbcde'));

// 5 Какая строка содержит больше гласных
const whatWin1 = (str1, str2) => {
  const vowels = 'aeiou';
  const calcVowels = (s) => {
    // отдельная функция будет считать количество гласных букв в каждой строке
    let count = 0;
    for (const el of s) {
      if (vowels.includes(el)) count++;
    }
    return count;
  };
  return calcVowels(str1) > calcVowels(str2)
    ? 'First word wins!'
    : calcVowels(str1) < calcVowels(str2)
    ? 'Second word wins!'
    : `It's a draw!`;
};
// console.log(whatWin('a', 'b'));

// 6 Какая строка содержит больше согласных?
const whatWin2 = (str1, str2) => {
  const vowel = 'aeiou';
  const counterOfVowel = (s) => {
    let count = 0;
    for (const el of s) {
      if (vowel.includes(el) || el === ' ') continue;
      else count++;
    }
    return count;
  };
  return counterOfVowel(str1) > counterOfVowel(str2)
    ? 'First word wins!'
    : counterOfVowel(str1) < counterOfVowel(str2)
    ? 'Second word wins!'
    : `It's a draw!`;
};
// console.log(whatWin2('run', 'late'));

// 
