function isAnagram(test, original) {
  if (test.length !== original.length) return false;
  const testMod = test.toLowerCase().split('').sort().join('');
  const originalMod = original.toLowerCase().split('').sort().join('');
  return testMod === originalMod;
}
console.log(isAnagram('djddgdjhA', 'djddgAjhU')); // false
