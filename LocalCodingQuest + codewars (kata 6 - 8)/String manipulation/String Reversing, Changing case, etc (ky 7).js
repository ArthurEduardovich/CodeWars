function reverseAndMirror(s1, s2) {
  function miror(s) {
    let result = [];
    for (const el of s) {
      if (el === el.toLowerCase()) result.unshift(el.toUpperCase());
      else result.unshift(el.toLowerCase());
    }
    return result;
  }
  return miror(s2).join('') + '@@@' + miror(s1).join('') + miror(s1).reverse().join('');
}
console.log(reverseAndMirror('FizZ', 'buZZ')); // "zzUB@@@zZIffIZz"
