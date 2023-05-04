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
function cleanFromBoolean (arr) {
  if (!Array.isArray(arr)) return "Error, this arg no is Array";
  const newArr = [];
  for (const el of arr) {
    if (typeof el === "boolean") continue;
    newArr.push(el);
  }
  return newArr;
}

// 6 Delete all rows from the array. The continue method
function deleteString (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") continue;
    arr.splice(i , 1)
    i--;
  }
  return arr;
}
// console.log(deleteString([1, 2, 3, 'true', 'false', 10, 10, 'a'])) // [1,2,3,10,10]

// 7 Output phone numbers from the array
function onlyPhoneNumbers (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 10 && !isNaN((arr[i] * 1)) ) continue;
    arr.splice(i, 1);
    i--;
  }
  return arr;
}
// console.log(onlyPhoneNumbers(["1234567890", "14.04.1980", 'Address is', "1234567890"]))
// console.log(onlyPhoneNumbers(["1234567890", "7938469021", "Peter Smit", "12890"]))

// 8 Double the elements of the array, except for one
function twiceExpectOne  (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) continue;
    arr[i] = arr[i] * 2;
  }
  return arr;
}
// console.log(twiceExpectOne([1, 2, 3, 4, 5]))

// 9 Divide of 10
function divideOn10 (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10) continue;
    arr[i] = arr[i] / 10;
  }
  return arr;
}
// console.log(divideOn10([1, 2, 3, 4, 11]))

// 10 Array of squares
function powerOfTwo (arr) {
  const res = [];
  if (arr[0] === 1) res.push(arr[0])
  for (let i = 0; i < arr.length; i++){
    let checkNum = arr[i];
    for (let j = i + 1; j < arr.length; j++){
      if (Math.pow(checkNum, 2) !== arr[j]) continue;
      res.push(arr[j])
    }
  }
  return res;
}
// console.log(powerOfTwo([1, 3, 9, 27]));










