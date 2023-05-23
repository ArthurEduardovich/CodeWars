const scoreToTally = function (score) {
  const check = 'abcde';
  let result = '';
  let cloneScore = score;
  for (let i = 0; i < score / 5; i++) {
    if (cloneScore < 5) {
      result += check[cloneScore - 1];
      break;
    } else if (cloneScore % 5 === 0) {
      result += check[4] + ' <br>';
    } else if (cloneScore > 5) {
      result += check[4] + ' <br>';
      cloneScore -= 5;
    }
  }
  return result;
};
console.log(scoreToTally(33));
// a, b, c, d, e => 1, 2, 3, 4, 5
// 10 => 'e <br>e <br>'
// 3 => 'c'
