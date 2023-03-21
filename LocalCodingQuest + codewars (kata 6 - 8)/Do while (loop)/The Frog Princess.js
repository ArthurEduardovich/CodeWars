const frogPrincess = (n) => {
  let count = 0;
  let i = n;
  let sum = 0;
  do {
    sum+= i;
    i+= 3;
    count++;
  } while (sum <= 1000)
  return count;
}
console.log(frogPrincess(12));