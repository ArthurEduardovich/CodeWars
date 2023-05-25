const abbrevName = str => {
  const space = str.indexOf(' ');
  return `${str[0].toUpperCase()}.${str[space + 1].toUpperCase()}`
}
console.log(abbrevName('Sam Harris'));