function fibonacciNumbers(n){
  let arr = [0, 1];
  for (let i = 2, j = 0; i < n; i++) {
    arr.push(arr[j] + arr[j + 1]);
    j++;
  }
  return arr;
}
console.log(fibonacciNumbers(2));