const React = require('react');
const Tile = require('./Tiles');

/* takes an array prop 'tiles' and returns a <ul> element 
   with each item as <li> elements */
const Board = function({ area }) {
  const [turn, setTurn] = React.useState(0);
  const [symbol, setSymbol] = React.useState(' ');
  
  
  const symbols = ['X','O'];
  let tiles = [];
  for(let i=0; i<area; i++){
    tiles.push(<Tile player={symbol} onClick={() => {setSymbol(symbols[turn])}} />);
  }
  return (
    <div className="board" onClick={() => setTurn((turn+1)%2)}>{tiles}</div>
  );
}

module.exports = Board;