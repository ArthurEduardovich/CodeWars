function vowelStart(str) {
  const modifyStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let result = '';
  const word = 'aeiou';
  for (const el of modifyStr) {
    if (word.includes(el)) result += ' ' + el;
    else result += el;
  }
  return result.trim();
}
console.log(vowelStart('my number is 0208-533-2325'));
