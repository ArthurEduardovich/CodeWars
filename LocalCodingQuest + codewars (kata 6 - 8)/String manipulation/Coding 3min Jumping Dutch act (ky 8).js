const sc = (floor) => {
  if (floor === 1) return '';
  if (floor <= 6) {
    return 'Aa~ '.repeat(floor - 1) + 'Pa! Aa!';
  } else {
    return 'Aa~ '.repeat(floor - 1) + 'Pa!';
  }
};
console.log(sc(6));
