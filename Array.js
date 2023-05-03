function findUniq(arr) {
  return arr.sort().join('').toUpperCase()
}
console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']))