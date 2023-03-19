
// "Very Even" Numbers.

function isVeryEvenNumber(number) {
  const numStr = number.toString();
  if (numStr.length === 1) {
    return number % 2 === 0;
  }
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  return isVeryEvenNumber(sum);
}
console.log(isVeryEvenNumber(99));