function isPowerOfTen(n){
  return Number.isInteger(Math.log10(n));
}
// console.log(isPowerOfTen(20));

function countPowersInArray(arr){
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    if ((Math.log10(arr[i]) % 1 === 0) || (Math.log2(arr[i]) % 1 === 0)){
      count++;
    } else {
      count;
    }
  }
  return count;
}
// console.log(countPowersInArray([10, 100, 0.1, 4, 8]))

function logs(x , a, b){
  let logA = (Math.log10(a) / Math.log10(x))
  let logB = (Math.log10(b) / Math.log10(x));
  return logA + logB;
}
// console.log(logs(1000, 2, 3))

console.log(Math.log2(1))



