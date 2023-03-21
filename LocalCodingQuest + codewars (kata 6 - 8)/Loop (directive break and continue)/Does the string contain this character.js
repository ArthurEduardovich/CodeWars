function iSymbInString(str, symb){
  let result = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === symb) {
      result = true;
      break;
    }
  }
  return result;
}
console.log(iSymbInString('beautiful', 'f'));