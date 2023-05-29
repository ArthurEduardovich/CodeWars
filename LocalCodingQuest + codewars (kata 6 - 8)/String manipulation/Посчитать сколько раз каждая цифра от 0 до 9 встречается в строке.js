const digitsCount = (str) => {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9' && str[i] !== ' '){
        arr[str[i]]++;
    }
  }
  return arr;
};
console.log(digitsCount('const 112'))
