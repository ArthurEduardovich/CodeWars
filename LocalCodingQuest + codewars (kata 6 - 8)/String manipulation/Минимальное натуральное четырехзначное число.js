function changeDigitsOrder(num) {
  return String(num).split('').sort().join('');
}
console.log(changeDigitsOrder(3200)); // 
