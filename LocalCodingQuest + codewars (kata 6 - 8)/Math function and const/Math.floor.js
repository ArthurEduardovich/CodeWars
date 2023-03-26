// 1
const distanceInMeters = (length) => {
  return Math.floor(length / 100);
}
// console.log(distanceInMeters(4814))

// 2
const weightInTons = (m) => Math.floor(m / 1000);

// 3
const fileSizeInK = (n) => Math.floor(n / 1024);

//4
const countOfRugs = (a, b) => Math.floor(a / b);

//5
const changeMoney = (x, amount) => Math.floor(amount / x);

//6
const amountOfMinutes = (n) => Math.floor(n / 60);
console.log(amountOfMinutes(7000))