function fakeBin(x) {
  let result = '';
  for (const el of x) {
    if (+el < 5) result += '0';
    else result += '1';
  }
  return result;
}
