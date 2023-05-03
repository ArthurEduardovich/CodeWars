// 1 Interrupt filling of the array at number 20
function stopAtTwenty (arr, start, end) {
  for (let i = start; i <= end; i++) {
    if (i > 20) break;
    else {
      arr.push(i)
    }
  }
  return arr;
}
// console.log(stopAtTwenty([], 1, 30));

// 2 Fix bugs in the code
function stopAt7(arr) {
  let arr2 = [];
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    arr2.push(i);
    if (i === 7) break;
  }
  return arr2;
}

// 3 Stop filling the array at the 8th element
function stopAt8Element (arr, startNum, endNum) {
  for (let i = startNum; i <= endNum; i++) {
    if (arr.length == 8) break;
    else {
      arr.push(i);
    }
  }
  return arr;
}
// console.log(stopAt8Element([], 1, 30));

// 4 Fix bugs in the code
function stopAt10Element (arr, num1, num2) {
  for (let i = num1; i <= num2 && arr.length < 10; i++) {
    arr.push(i)
  }
  return arr;
}

// 5 Counting strings with length equal to 3 is interrupted when encountering a given string
function noMoreThan3Char (arrStr, str) {
  let count = 0;
  for (const item of arrStr) {
    if (item === str) break;
    if (item.length === 3) count++;
  }
  return count;
}
console.log(noMoreThan3Char(['tag', 'CAT', 'pet', 'clouds', '-12', '120', 'go', 'K'], 'go'))

// 6 Interrupt the character count in the string at the letter R
function stopAtR (str) {
  const strToArr = str.split('');
  const index = strToArr.findIndex((el) => el === 'R');
  const result = index !== -1? strToArr.slice(0, index): strToArr;
  return result.length;
}
// console.log(stopAtR('rftgjkfdttfjRhZKlbgf')); // 12

// 7 Correct the error in the code
function stopCountAtEl (str, el) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === el.toUpperCase() && str[i].toLowerCase() === el.toLowerCase()) break;
    else count++;
  }
  return count;
}
// console.log(stopCountAtEl('rftgjkffjR', 'R')) // 0

// 8 Counting the sum of the numbers in the array is interrupted when encountering a three-digit number
function stopAt3DigitNum (arr) {
  let sum = 0;
  for (const item of arr) {
    if (item > 0 && item > 99 && item < 999) break;
    sum+= item;
  }
  return sum;
}
console.log(stopAt3DigitNum([1, 12, 35, 57, 123, 36, 3, 4, 2345]))

// 9 Number summation stops when a string or boolean is encountered
function stopAtStringOrBoolean (arr) {
  let sum = 1;
  for (const item of arr) {
    if (typeof item === 'string' || typeof item === 'boolean') break;
    sum*= item;
  }
  return sum;
}

















