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