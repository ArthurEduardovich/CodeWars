const trim = (str, size) => {
  const lengthStr = str.length;
  if ((size >= lengthStr && size > 3) || size >= lengthStr) return str;
  if (size < lengthStr && size > 3) return str.slice(0, size - 3) + '...';
  return str.slice(0, size) + '...'
};
console.log(trim('He', 1));
console.log(trim('Creating kata is fun', 14));
console.log(trim('bLoe MLF', 3)); // blo...
console.log(trim('gUwDz', 1)); // g...
console.log(trim('Fh', 3)) // Fh...
console.log(trim('Hey', 3)) // Hey
console.log(trim('NA', 3))
