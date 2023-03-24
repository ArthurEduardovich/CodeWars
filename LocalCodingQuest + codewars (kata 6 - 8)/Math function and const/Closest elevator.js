function elevator(left, right, call){
  return Math.abs(left - call) >= Math.abs(right - call)? 'right': 'left';
}
console.log(elevator(0, 2, 1));