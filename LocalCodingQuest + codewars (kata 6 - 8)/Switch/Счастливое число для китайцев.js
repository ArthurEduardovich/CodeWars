const luckyChineseNumber = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (String(arr[i]).includes('8')) result.push(arr[i]);
  }
  return result;
};
console.log(luckyChineseNumber([124, 81, 18, 99]));
