const specTheWord = (str) => {
  const vowel = 'aeiou';
  const obj = {
    vowel: '',
    vowelCount: 0,
    consonant: '',
    consonantCount: 0,
  };
  for (const el of str) {
    if (vowel.includes(el)) {
      obj.vowel += el;
      obj.vowelCount++;
    } else {
      obj.consonant += el;
      obj.consonantCount++;
    }
  }
  return obj;
};

let str = 'baby';
let news = str.padEnd(0, 'cute')
console.log(news)   
