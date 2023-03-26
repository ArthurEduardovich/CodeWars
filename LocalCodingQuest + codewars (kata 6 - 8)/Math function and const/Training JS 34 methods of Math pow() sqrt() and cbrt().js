function cutCube(volume,n){
  return !(Math.cbrt(volume / n) % 1) && !(Math.cbrt(n) % 1);
}
console.log(cutCube(50000,50))


