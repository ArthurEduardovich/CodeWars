function points(games) {
    let totalScore = 0;
    for (let i = 0; i < 10; i++){
        if (+games[i][0] > +games[i][2]) totalScore+= 3;
        if (+games[i][0] === +games[i][2]) totalScore++;
    }
    return totalScore;
  }
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))