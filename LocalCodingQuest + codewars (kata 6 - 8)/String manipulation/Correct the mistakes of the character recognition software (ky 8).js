function correct(str) {
  function replaces(s) {
    const result = s === "0" ? 'O' : s === "5" ? 'S' : s === "1" ? 'I' : s;
    return result;
  }
  return str.replace(/['015']/g, replaces);
}
console.log(correct('DUBL1N'));
