function letterCheck(arr) {
  const elOne = arr[0].toLowerCase().split('');
  const elTwo = arr[1].toLowerCase().split('');
  for (const el of elTwo) {
    if (elOne.includes(el)) continue;
    else return false;
  }
  return true;
}
console.log(letterCheck(["parses", "parsecs"])); // false