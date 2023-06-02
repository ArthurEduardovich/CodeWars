function unscrambleEggs(word) {
  const re = /egg/gi;
  return word.replace(re, '');
}
console.log(unscrambleEggs('ceggodegge heggeregge')); // code here
