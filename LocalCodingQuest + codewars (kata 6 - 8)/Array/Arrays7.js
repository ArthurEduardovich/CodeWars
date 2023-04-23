// 1
function squaresOfEven(n) {
  if (n <= 0) return "Error: n must be a positive number";
  const arr = [];
  for (let i = n; i <= (n * 3); i++){
    if (i % 2 === 0) arr.push(Math.pow(i, 2));
    else continue;
  }
  return arr;
}
// console.log(squaresOfEven(5));

// 2
function multiplesOf5 (n){
  const arr = [];
  for (let i = 0; i <= n; i++){
    if (!(i % 5)) arr.push(i);
    else continue;
  }
  return arr;
}
// console.log(multiplesOf5(10))

// 3
function fillArray(n, m){
  const arr = [];
  for (let i = 0; i <= n; i++){
    if (!(i % 3)) arr.push(Math.pow(i, m));
    else continue;
  }
  return arr;
}
// console.log(fillArray(20, 0))

// 4
function negativeArray(n){
  const arr = [];
  for (let i = n; i >= 1; i--){
    arr.push(i * -1);
  }
  return arr;
}
// console.log(negativeArray(10))

// 5
function fillArray(n, m){
  let start = n;
  let end = m;
  const arr = [];
  if (n > m){
    start = m;
    end = n;
  }
  if (m === n) return [n];
  for (let i = start; i <= end; i++){
    arr.push(i);
  }
  return arr;
};
// console.log(fillArray(-5, 5))

// 6
function fillProgression(a1, d, n){
  const arr = []; // массив куда будем собирать элементы
  let start = a1; //
  for (let i = 0; i < n; i++){
    arr.push(start);
    start+= d;
  }
  return arr;
}
// console.log(fillProgression(-11, 4, 6))

// 7
function progressionMembers(firstMember, denominator, n){
  const arr = [];
  let summator = firstMember;
  for (let i = 0; i < n; i++){
    arr.push(summator);
    summator*= denominator;
  }
  return arr;
};
console.log(progressionMembers(1, 2, 10))