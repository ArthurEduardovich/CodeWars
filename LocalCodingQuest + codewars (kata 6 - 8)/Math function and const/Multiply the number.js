function multiply(number){
  let quantityValueNumber = String(Math.abs(number)).length;
  return number * 5 ** quantityValueNumber;
}
console.log(multiply(-2))

console.log(String(-2).length)