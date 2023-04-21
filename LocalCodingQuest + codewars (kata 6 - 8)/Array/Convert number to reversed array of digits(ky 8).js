function digitize(n) {
  return String(n).split('').map((el)=> Number(el)).reverse();
}