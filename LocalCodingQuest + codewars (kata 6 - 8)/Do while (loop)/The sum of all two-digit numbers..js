  function sumOfTwoDigitsNumbers () {
    let i = 10;
    let sum = 0;
    let a = 10;
    do {
      sum+= a;
      i++;
      a++;
    } while (i <= 99);
    return sum;
  }
console.log(sumOfTwoDigitsNumbers())