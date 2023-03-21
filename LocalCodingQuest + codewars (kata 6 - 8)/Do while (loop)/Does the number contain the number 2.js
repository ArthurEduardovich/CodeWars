function doesNumberContain2 (n) {
  let nToStr = String(n);
  let i = 0;
  let count = 0;
  do {
    if (nToStr[i] === '2') {
      count++;
      i++;
    } else {
      count+=0;
      i++;
    }
  } while (i < nToStr.length)
  return count === 0? false: true;
}
console.log(doesNumberContain2(1550));