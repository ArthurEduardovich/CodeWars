function divisors (integer) {
let result = [];
for (let i = 2; i < integer; i++) {
  (integer % i === 0)? result.push(i): result;
  }
return result.length > 1? result: `${integer} is prime`;
};

console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(13));