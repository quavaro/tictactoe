const React = require('react');
const Board = require('./Board');
const utils = require('../logic/utils.js');

const squarea = 9;

/* the main page for the index route of this app */
const HelloWorld = function() {
  const [nextTurn, setNextTurn] = React.useState(0);
  const [winner, setWinner] = React.useState("Who will win in this epic battle of wills?");

  
  
  const symbols = ['X','O'];
  const turnHandler = function() {
      setNextTurn((nextTurn+1)%2);
  }
  const scoreHandler = function() {
    const checkWinner = utils.getWinner();
    if(checkWinner){
      setWinner(checkWinner + ' WINS!');
      setNextTurn(-1);
    }
  }
  return (
    <div className="gameSpace">
      <div className="turn">
        It's <span className={symbols[nextTurn]}>{symbols[nextTurn]}</span>'s turn to play.
      </div>
      <div>
        <Board area={squarea} turn={nextTurn} setTurn={turnHandler} checkWinner={scoreHandler}/>
      </div>
      <div className="winner">{winner}</div>
    </div>
  );
}

module.exports = HelloWorld;