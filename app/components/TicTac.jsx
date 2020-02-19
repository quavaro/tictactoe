const React = require('react');
const Board = require('./Board');
const utils = require('../logic/utils.js');

const squarea = 9;

/* the main page for the index route of this app */
const TicTac = function() {
  
  //state
  const [nextTurn, setNextTurn] = React.useState(0);
  const [winner, setWinner] = React.useState("Who will win this epic battle of wills?");
  
  const symbols = ['X','O'];

  //check for winner and set turn if there is none yet
  const turnHandler = function() {
    if(winner == "Who will win this epic battle of wills?"){
      setNextTurn((nextTurn+1)%2);
    }
    else {
      setNextTurn(-1);
    }
  }
  
  const winHandler = (tiles, values) => {
    const checkWinner = utils.getWinner(tiles, values);
    if(checkWinner){
      setWinner(checkWinner + ' WINS!');
    }
  }
  
  return (
    <div className="gameSpace">
      <div className="turn">
        It's <span className={symbols[nextTurn]}>{symbols[nextTurn]}</span>'s turn to play.
      </div>
      <div>
        <Board area={squarea} turn={nextTurn} setTurn={turnHandler} checkWinner={winHandler}/>
      </div>
      <div className="winner">{winner}</div>
    </div>
  );
}

module.exports = TicTac;