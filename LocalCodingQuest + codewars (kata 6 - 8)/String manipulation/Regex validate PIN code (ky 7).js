function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}
console.log(validatePIN('11234')); // false
