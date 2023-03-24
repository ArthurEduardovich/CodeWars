function checkingForfSafe(a, b){
  const sum = () =>  a * b;
  return  Number.isSafeInteger(sum()) === true? true: false;
}

const checkingForfSafe2 = (a, b) => Number.isSafeInteger(a * b);

console.log(checkingForfSafe2(5, 5))