function palindromeChainLength(n) {
  if (String(n).split('').reverse().join('') === String(n)) return 0;
  let count = 0;
  let acc = String(n);
  while (acc !== acc.split('').reverse().join('')) {
    acc = String(+acc + +acc.split('').reverse().join(''));
    count++;
  }
  return count;
}
console.log(palindromeChainLength(89));
