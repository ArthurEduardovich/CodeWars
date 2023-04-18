
const solution = (n) => {
   
   if (n <= 0) {
      return 0;
   }

   let sum = 0;
   for (let i = 0; i < n; i++) {
      if (i % 3 == 0 || i % 5 == 0) sum+= i;
      else continue; 
   }
   return sum;
}

// console.log(solution(96))

console.log(null == 0) // false
console.log(null == undefined) // true
console.log(null ** 2) // true


function elementNumber (arr,str){
   let modifyStr = str.trim().toLowerCase();
   
   
 }

