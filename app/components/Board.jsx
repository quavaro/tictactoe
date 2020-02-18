const React = require('react');
const Tile = require('./Tiles');

/* takes an array prop 'tiles' and returns a <ul> element 
   with each item as <li> elements */
const Board = function({ area, turn, setTurn }) {
  let tiles = [];
  let boardState = [];
  const [symbol, setSymbol] = React.useState(' ');
  
  const handleBoardClick = function (event){
    setTurn();
  };
  for(let i=0; i<area; i++){
    tiles.push(<Tile index={i} value={symbol} onBoardClick={handleBoardClick} />);
  }
      console.log(tiles);

  return (
    <div className="board">{tiles}</div>
  );
}

module.exports = Board;