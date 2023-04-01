const winner = {
  rock: "scissors", // ножницы
  paper: "rock", // камень
  scissors: "paper", // бумага
};

function getWinner(player1, player2){
  let result =
    (player1 === player2)? 'Draw':
      (player2.length - player1.length === 4)? 'Player 1 won':
        (player1.length - player2.length === 1)? 'Player 1 won':
          (player1.length - player2.length === 3)? 'Player 1 won':
            'Player 2 won';
  return result;
}
console.log(getWinner('rock','paper'));