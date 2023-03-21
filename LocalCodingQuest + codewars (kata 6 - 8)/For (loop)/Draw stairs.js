function drawStairs (n) {
  let result = '';
  let space = ' ';
  for (let i = 1, j = 1; i < n; i++) {
    result+= 'I\n' + space;
    space+= ' ';
  }
  return n > 0? `${result}I`: '';
}
console.log(drawStairs(10))