function changeColor(arr){
  const greenIndexOne = arr[1].lastIndexOf('green');
  const greenIndexTwo = arr[1].indexOf('green');
  if (greenIndexOne != -1 && greenIndexTwo != -1){
    arr[1][greenIndexOne] = 'yellow';
    return arr;
  };
  if (greenIndexTwo == -1){
    arr[1][greenIndexOne] = 'yellow';
    return arr;
  };
  return arr;
};

// console.log(changeColor([["red", "green", "blue"], ["black", "green", "white"]]))

console.log(Math.trunc(456 % 100 / 10))

// 2
function average(n1, n2, n3, n4, n5){
  return Math.ceil( (Math.floor(n1) + Math.floor(n2) + Math.floor(n3) + Math.floor(n4) + Math.floor(n5)) / 5);
};
console.log(average(1,2,3,4,5))







