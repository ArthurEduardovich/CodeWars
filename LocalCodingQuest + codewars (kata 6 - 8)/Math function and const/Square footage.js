function square(a, b, c, d){
  const calcAreaFootage = () => Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2) + Math.pow(d, 2);
  return calcAreaFootage();
}

console.log(square(1, 2, 4, 8))