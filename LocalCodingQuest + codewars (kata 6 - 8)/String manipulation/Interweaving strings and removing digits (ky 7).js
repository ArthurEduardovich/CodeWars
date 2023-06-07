function interweave(s1, s2) {
  s1 = s1.split('');
  s2 = s2.split('');
  const arr = [];
  let str = s1.join('') + s2.join('');
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) arr.push(s1.shift());
    else arr.push(s2.shift());
  }
  return arr.join('').replace(/[0-9]/g, '');
}
console.log(interweave('h3lo', 'el4')); // hello
console.log(interweave('', '')); // ''
