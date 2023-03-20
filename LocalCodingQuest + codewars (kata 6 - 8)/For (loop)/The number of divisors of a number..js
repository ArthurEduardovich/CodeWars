function numberOfDividers(n) {
  let count = 1;
  for (let i = 2; i <= n; i++) {
    if (n % i !== 0) continue;
    count++;
  }
return count;
}

console.log(numberOfDividers(1));
console.log(numberOfDividers(2));
console.log(numberOfDividers(3));
console.log(numberOfDividers(128));