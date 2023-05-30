function getNumbersInfo(str) {
  const object = {
    negatives: 0,
    positives: 0,
    zeros: 0,
    odds: 0,
    evens: 0,
  };
  const strToArrNum = str
    .split(' ')
    .filter((el) => el !== '')
    .map(Number);
  if (strToArrNum.length == 0) return 'String is empty';
  strToArrNum.forEach((element) => {
    if (element < 0 && element % 2 === -0) {
      object.negatives++;
      object.evens++;
    } else if (element < 0 && element % 2 === -1) {
      object.negatives++;
      object.odds++;
    } else if (element > 0 && element % 2 === 0) {
      object.positives++;
      object.evens++;
    } else if (element > 0 && element % 2 === 1) {
      object.positives++;
      object.odds++;
    } else if (element === 0 || element === -0) {
      object.zeros++;
      object.evens++;
    }
  });
  return object;
}
console.log(getNumbersInfo('1 2 3 4 5 0'));
console.log(getNumbersInfo('   '));
console.log(getNumbersInfo(' 1 3 5 7 9 ')); // { negatives: 0, positives: 5, zeros: 0, odds: 5, evens: 0 }
