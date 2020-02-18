const React = require('react');
const Board = require('./Board');
const utils = require('../logic/utils.js');

const squarea = 9;

/* the main page for the index route of this app */
const HelloWorld = function() {
  
  //state
  const [nextTurn, setNextTurn] = React.useState(0);
  const [winner, setWinner] = React.useState("Who will win in this epic battle of wills?");

  const symbols = ['X','O'];
  let checkWinner;
  
  const scoreHandler = function() {
    checkWinner = utils.getWinner();
    console.log(checkWinner);
    if(checkWinner){
      setWinner(checkWinner + ' WINS!');
    }
  }
  
  const turnHandler = function() {
    if(checkWinner){
      setNextTurn(-1);
    }
    else setNextTurn((nextTurn+1)%2);
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