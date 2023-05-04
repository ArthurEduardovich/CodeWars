// 1 The sum of the odd numbers in the array. Instruction continue
function oddSum (arr) {
  let sum = 0;
  for (const el of arr) {
    if (el % 2 === 0) continue;
    sum+= el;
  }
  return sum;
}

// 2 Sum of even numbers. The continue method
function evenSum (arr) {
  let evenSum = 0;
  for (const el of arr) {
    if (el % 2 !== 0) continue;
    evenSum+= el;
  }
  return evenSum;
}

// 3 The arithmetic mean of the even numbers in the array. Method continue
function evenAvr (arr) {
  if (!Array.isArray(arr)) return 0;
  let evenSum = 0;
  let count = 0;
  for (const el of arr) {
    if (el % 2 !== 0) continue;
    evenSum+= el;
    count++;
  }
  return evenSum === 0 && count === 0? 0: evenSum / count;
}
// console.log(evenAvr([2, 2]))

// 4 Correct the error in the code. Method continue
function onlyNegative (arr) {
  if (!Array.isArray(arr)) return [];
  const negativeArr = [];
  for (let el of arr) {
    if (el > 0) continue;
    negativeArr.push(el)
  }
  return negativeArr;
}
// console.log(onlyNegative([]))

// 5 Clear array from boolean








