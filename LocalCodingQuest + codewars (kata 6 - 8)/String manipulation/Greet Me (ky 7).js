const greet = function (name) {
  const firstWord = name[0].toUpperCase();
  return `Hello ${firstWord}${name.slice(1).toLowerCase()}!`;
};
console.log(greet('rilay'));
