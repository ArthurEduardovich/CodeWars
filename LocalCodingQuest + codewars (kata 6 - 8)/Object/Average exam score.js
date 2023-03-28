const averageScore = (exam1, exam2, exam3, exam4, exam5, userName) => {
  let resultScore = 0;
  let count = 0;
  if (exam1['name'] === userName){
    resultScore+= exam1['score'];
    count++;
  }
  if (exam2['name'] === userName){
    resultScore+= exam2['score'];
    count++;
  }
  if (exam3['name'] === userName){
    resultScore+= exam3['score'];
    count++;
  }
  if (exam4['name'] === userName){
    resultScore+= exam4['score'];
    count++;
  }
  if (exam5['name'] === userName){
    resultScore+= exam5['score'];
    count++;
  }
  if (count > 0){
    return resultScore / count;
  } else {
    return 0;
  }
}
console.log(averageScore({ score: 5, name: "John Doe" }, { score: 4, name: "John Lee" }, { score: 3, name: "John Dough" }, { score: 2, name: "John Derek" }, { score: 1, name: "John Book" }, "John Doe"))