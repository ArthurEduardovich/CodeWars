const totalBill = (str) => {
  const strToArr = str.split('').filter((el) => el !== ' ');
  let totalSum = 0;
  for (let i = 1; i <= strToArr.length; i++) {
    if (strToArr[i - 1] === 'r' && i % 5 !== 0) totalSum += 2;
    else continue;
  }
  return totalSum;
};
console.log(totalBill('rrrrrrrrrrrrrrrrrr   rr r'));
