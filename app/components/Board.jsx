const React = require('react');
const Tile = require('./Tiles');

/* takes an array prop 'tiles' and returns a <ul> element 
   with each item as <li> elements */
const Board = function({ area }) {
  const [turn, setTurn] = React.useState(0);
  let tiles = [];
  const handleBoardClick = function (event){
    setTurn((turn+1)%2);
  };
  for(let i=0; i<area; i++){
    tiles.push(<Tile index={i} player={turn} onBoardClick={handleBoardClick} />);
  }
  return (
    <div className="board">{tiles}</div>
  );
}

module.exports = Board;