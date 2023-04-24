
function myFn(...rest) {
   return `Вы передали ${rest.length} параметров`;
};
// console.log(myFn(1,2,3,4,5,6,7,8,10,10));


const sum = (...rest) => {
   let total = 0;
   for (let i = 0; i < rest.length; i++) {
     total += rest[i];
   }
   return total;
 }
// console.log(sum(1,2,3,4));

const HIGH_TEMPERATURES = {
   yesterday: 75,
   today: 77,
   tomorrow: 80
 };
 
const {today: newToday} = HIGH_TEMPERATURES;
console.log(newToday);

 

