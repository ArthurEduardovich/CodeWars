const summation = (num) => {
  let r = 0;
  for (let i = 1; i<= num; i++) {
    r+= i;
  }
  return r;
}
console.log(summation(8))