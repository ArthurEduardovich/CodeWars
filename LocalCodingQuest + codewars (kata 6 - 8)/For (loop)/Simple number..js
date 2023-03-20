function isPrime(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i !== 0) continue;
    count++;
  }
  return count > 2 || count === 1? false: true;
}
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(29))
console.log(isPrime(30))

