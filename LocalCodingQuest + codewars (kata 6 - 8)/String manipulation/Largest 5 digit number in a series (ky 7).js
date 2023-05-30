function solution(str) {
  const arr = [];
  for (let i = 0; i <= str.length - 5; i++) {
    arr.push(+str.slice(i, i + 5));
  }
  return Math.max(...arr);
}
console.log(solution('731674765'))
