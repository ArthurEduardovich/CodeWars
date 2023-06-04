function product(string) {
  return string.replace(/[^?]/g, '').length * string.replace(/[^!]/g, '').length;
}
console.log(product('!???'));
