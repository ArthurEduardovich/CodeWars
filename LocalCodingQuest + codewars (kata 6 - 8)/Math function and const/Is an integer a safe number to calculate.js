function safeNumber(x){
  return Number.isSafeInteger(x);
}
console.log(safeNumber(12))