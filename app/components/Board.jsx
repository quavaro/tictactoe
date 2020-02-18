const React = require('react');
const Tile = require('./Tiles');

/* takes an array prop 'tiles' and returns a <ul> element 
   with each item as <li> elements */
const Board = function({ area }) {
  let tiles = [];
  for(let i=0; i<area; i++){
    tiles.push(<Tile index={i} />);
  }
  return (
    <div className="board">{tiles}</div>
  );
}

module.exports = Board;