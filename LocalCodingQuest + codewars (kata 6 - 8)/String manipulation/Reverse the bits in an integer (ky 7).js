function reverseBits(n) {
  const n1 = n.toString(2).split('').reverse().join('');
  return parseInt(n1, 2);
}
console.log(reverseBits(417));
