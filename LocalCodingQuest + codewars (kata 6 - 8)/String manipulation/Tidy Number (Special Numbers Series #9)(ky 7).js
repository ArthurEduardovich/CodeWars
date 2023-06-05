function tidyNumber(n) {
  return (
    n
      .toString()
      .split('')
      .sort()
      .join('') === n.toString()
  );
}
console.log(tidyNumber(2335));
