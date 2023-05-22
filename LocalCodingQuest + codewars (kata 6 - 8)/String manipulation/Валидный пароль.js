const validPassword = str => {
  if (str.length <= 7) {
    return str.padEnd(7, '$')
  }
  return str;
}
console.log(validPassword('abc'));