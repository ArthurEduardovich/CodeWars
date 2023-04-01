const winner = {
  rock: {scissors: "", lizard: ""},
  paper: {rock: "", spock: ""},
  scissors: {paper: "", lizard: ""},
  lizard: {spock: "", paper: ""},
  spock: {scissors: "", rock: ""},
};

function getWinner(player1, player2){
  if(player1 === player2){
    return 'Draw';
  }
  if(winner[player1].hasOwnProperty(player2)){
    return 'Player 1 won';
  }
  else {
    return 'Player 2 won';
  }
}
console.log(getWinner('spock','paper'))