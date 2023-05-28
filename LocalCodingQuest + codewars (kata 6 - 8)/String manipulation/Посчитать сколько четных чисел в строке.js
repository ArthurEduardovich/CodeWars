// 1
function countEven(str) {
  let count = 0;
  let acc = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== ' '){
        acc+= str[i];
    } else if (acc !== '') {
        Number(acc) % 2 === 0? count++: count;
        acc = ''
    }
  }
  acc !== '' && Number(acc) % 2 === 0? count++: count;
  return count;
}

console.log(countEven('12 34 56'));
console.log(countEven('Hello, World!'));

const countEven2 = (str) => {
  const result = str.match(/\d+/g);
  if (!Boolean(result)) return 0;
  return result.map(Number).reduce((acc, el) => {
    if (el % 2 === 0) acc++;
    return acc;
  }, 0);
};

// console.log(countEven2('12 34 56'));
