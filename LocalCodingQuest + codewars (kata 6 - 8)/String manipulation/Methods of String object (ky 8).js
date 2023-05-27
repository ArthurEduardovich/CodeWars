function firstToLast(str, c) {
  return str.lastIndexOf(c) - str.indexOf(c) || -1;
}
// console.log(firstToLast('kpieyodjoqftftgfvqucvtqcwznsdvwbpmpjvixbzapllxmkqccedrprhxz', 'm'));
// console.log(firstToLast('ababc', 'a'));
// console.log(firstToLast('abadc', 'c'));
