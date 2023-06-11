function changeDigitsOrder(num) {
  num = num.toString().split('').sort();
  const firstNum = num[0];
  if (firstNum === '0') {
    const two = num[1];
    num[0] = two;
    num[1] = '0';
    return Number(num.join(''));
  } else {
    return Number(num.join(''));
  }
}
console.log(changeDigitsOrder(7326)); // 2367
console.log(changeDigitsOrder(2051)); // 1025
