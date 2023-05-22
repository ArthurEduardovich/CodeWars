function billboard(name, price = 30){
  const result = name.repeat(price).length;
  return result
} 
console.log(billboard('Jeong-Ho Aristotelis')); // 600 
