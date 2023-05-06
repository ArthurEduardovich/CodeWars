function evenVsOdd (num1, num2){
  let sumOfOdd = 0;
  let sumOfEven = 0;
  for (let i = num1; i <= num2; i++){
    if (i % 2) sumOfOdd+= i;
    else sumOfEven+= i;
  }
  return sumOfOdd > sumOfEven? "Sum of odd win":
    sumOfOdd < sumOfEven? "Sum of even win":
      "Draw";
}
console.log(evenVsOdd(-17, 17)) // Draw
console.log(evenVsOdd(-1, 11)) // Odd win