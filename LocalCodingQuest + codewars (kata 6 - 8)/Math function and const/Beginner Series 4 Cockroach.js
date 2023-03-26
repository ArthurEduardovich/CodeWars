
// TARAKAN
const cockroachSpeed = (s) => Math.floor((s * 1000000) / 36000);

// MANGO
function mango(quantity, price){
  let a = Math.floor(quantity / 3);
  return (quantity - a) * price;
}
console.log(mango(2, 3))