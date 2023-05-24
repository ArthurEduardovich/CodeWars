function numOfUpperCase(str) {
  let count = 0;
  for (const el of str) {
    if (el.toLowerCase() !== el) count++;
  }
  return count;
};
