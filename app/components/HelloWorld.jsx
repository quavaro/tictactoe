const React = require('react');
const Board = require('./Board');


const squarea = 9;

/* the main page for the index route of this app */
const HelloWorld = function() {
  const [nextTurn, setNextTurn] = React.useState(0);
  const [winner, setWinner] = React.useState('Who will win?')
  const symbols = ['X','O'];
  const turnHandler = function() {
    setNextTurn((nextTurn+1)%2);
  }
  return (
    <div className="gameSpace">
      <div className="info">
        <div className="turn">It's {symbols[nextTurn]}'s turn to play.</div>
        
      </div>
      <div>
        <Board area={squarea} turn={nextTurn} setTurn={turnHandler}/>
      </div>
      <div className="winner"></div>
    </div>
  );
}

module.exports = HelloWorld;