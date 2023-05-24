const strOfLowerAndUpperCase = (str) => {
  let upper = '';
  let lower = '';
  for (const el of str) {
    if (el === ' ') return 'String empty';
    if (el.toLowerCase() !== el) upper += el;
    if (el.toUpperCase() !== el) lower += el;
  }
  return upper.length > 0 && lower.length > 0
    ? `${lower} ${upper}`
    : upper.length > 0 && lower.length == 0
    ? upper
    : lower;
};
