  function isPronic(n) {
    let r =  Math.floor(Math.sqrt(n));
    if (r * (r + 1) === n) {
      return true;
    }
    return false;
  }
console.log(isPronic(42));