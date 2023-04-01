function bestRestaurant(res1, res2){
  let nameWinner;
  let totalScoreRes1 = res1['food'] + res1['service'] + res1['waitingTime'];
  let totalScoreRes2 = res2['food'] + res2['service'] + res2['waitingTime'];
  let totalWinner;

  if (totalScoreRes1 > totalScoreRes2){
    nameWinner = res1['name'];
    totalWinner = totalScoreRes1;
  } else if (totalScoreRes2 > totalScoreRes1){
    nameWinner = res2['name'];
    totalWinner = totalScoreRes2;
  } else {
    nameWinner = "It's a tie!";
    totalWinner = totalScoreRes2;
  }
  return {
    bestRestaurant: nameWinner,
    totalScore: totalWinner
  };
}
console.log(bestRestaurant({ name: "Chittos", food: 4.5, service: 4, waitingTime: 4 }, { name: "Best Burger", food: 4.7, service: 3, waitingTime: 4.8 }))