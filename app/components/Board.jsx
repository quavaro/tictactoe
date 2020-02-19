const React = require('react');
const Tile = require('./Tiles');
const utils = require('../logic/utils.js');

/* takes an array prop 'tiles' and returns a <ul> element 
   with each item as <li> elements */
const Board = function({ area, turn, setTurn, checkWinner }) {
    let tiles = [];
    const handleWin = function() {
      return checkWinner();
    }
    const handleBoardClick = function (event){
      setTurn();
    };
    
    for(let i=0; i<area; i++){
      tiles.push(<Tile index={i} player={turn}  onBoardClick={handleBoardClick} winEvent={handleWin} />);
    }
    return (
      <div id="board">{tiles}</div>
    );
}

module.exports = Board;