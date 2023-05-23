const vowel2index = (str) => {
  const lowerStr = str.toLowerCase();
  let result = '';
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i].includes('a') || lowerStr[i].includes('e') || lowerStr[i].includes('i') || lowerStr[i].includes('o') || lowerStr[i].includes('u')) result+= i + 1;
    else result += str[i];
  }
  return result;
};
console.log(vowel2index('this is my string'));
