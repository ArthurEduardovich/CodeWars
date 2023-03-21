function evenDigits(n){
  let arrResult = [];
  let nToStr = String(n);
  let i = 0;
  do {
    if (+nToStr[i] % 2 !== 0) {
      i++;
    } else {
      arrResult.push(+nToStr[i]);
      i++;
    }
  } while (i < nToStr.length)
  return arrResult;
}
console.log(evenDigits(110325));