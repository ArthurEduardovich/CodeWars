const arr = [1, 3, 3, 4, 4, -5, 7, -5, true, true, false];

const duplicate = arr.filter((el) => arr.indexOf(el) !== arr.lastIndexOf(el));

const unique = arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el));
console.log(unique);    

const allElement = arr.filter((el, i) => i === arr.indexOf(el));
console.log(allElement);

const duplicateLast = arr.filter((el, i) => i != arr.indexOf(el) && i === arr.lastIndexOf(el));
console.log(duplicateLast);