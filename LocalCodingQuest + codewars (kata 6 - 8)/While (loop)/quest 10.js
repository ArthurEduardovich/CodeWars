function englishWords(n) {
   let i = 5;
   let a = 0;
   let count = 0;
   while (a < n) {
   a+= i;
   i+= 2;
   count++;
   }
   return count;
}

console.log(englishWords(45)); // 9