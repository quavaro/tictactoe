const React = require('react');
const Tile = require('./Tiles');
const handleClick = function handleClick(event){
  setSymbol(symbols[turn]
}
/* takes an array prop 'tiles' and returns a <ul> element 
   with each item as <li> elements */
const Board = function({ area }) {
  const [turn, setTurn] = React.useState(0);
  let tiles = [];
  for(let i=0; i<area; i++){
    tiles.push(<Tile index={i} player={turn} onClick={() => setTurn((turn+1)%2)} />);
  }
  return (
    <div className="board">{tiles}</div>
  );
}

module.exports = Board;