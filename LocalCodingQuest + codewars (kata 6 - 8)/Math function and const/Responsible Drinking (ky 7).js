function hydrate(s) {
  const waterCounter = s
    .replace(/[^0-9]/g, '')
    .split('')
    .map((el) => Number(el))
    .reduce((acc, el) => (acc += el));
  const glass = waterCounter > 1 ? 'glasses' : 'glass';
  return `${waterCounter} ${glass} of water`;
}
console.log(hydrate('2 glasses of wine and 1 shot'));
