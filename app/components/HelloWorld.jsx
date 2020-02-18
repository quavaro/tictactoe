const React = require('react');
const Board = require('./Board');


const squarea = 9;

/* the main page for the index route of this app */
const HelloWorld = function() {
  const [nextTurn, setNextTurn] = React.useState(0);
  const symbols = ['X','O'];
  const turnHandler = function() {
    setNextTurn((nextTurn+1)%2);
  }
  return (
    <div className="gameSpace">
      <div className="info">
        <div className="turn">It's <span className={symbols[nextTurn]}>{symbols[nextTurn]}</span>'s turn to play.</div>
        <div className="winner"></div>
      </div>
      <div>
        <Board area={squarea} turn={nextTurn} setTurn={turnHandler}/>
      </div>
    </div>
  );
}

module.exports = HelloWorld;