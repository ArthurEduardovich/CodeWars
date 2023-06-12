function wordsInColumn(text) {
  const maxElLength = Math.max(...text.split(' ').map((e) => e.length));
  let result = '';
  let trim = '';
  const arr = text.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < maxElLength) {
      result += ' '.repeat(maxElLength - arr[i].length) + arr[i] + '\n';
    } else {
      result += arr[i] + '\n';
    }
  }
  return result.slice(0, -1);
}
console.log(wordsInColumn('Enjoy every moment'));
