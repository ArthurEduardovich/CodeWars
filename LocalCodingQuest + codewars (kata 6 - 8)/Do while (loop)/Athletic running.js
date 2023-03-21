function running (n) {
   let i = 1;
   let sum = n;
   do {
     sum+= ((sum / 100) * 10);
     i++;
   } while (i < 10);
   return Math.round(sum);
  }
console.log(running(10))
