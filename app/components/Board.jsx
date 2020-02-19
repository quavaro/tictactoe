const React = require('react');
const Tile = require('./Tiles');
const utils = require('../logic/utils.js');

/* takes an array prop 'tiles' and returns a <ul> element 
   with each item as <li> elements */
const Board = function({ area, turn, setTurn, checkWinner}) {
    const tiles = ;
    const symbols = ['X','O'];
    const [symbol, setSymbol] = React.useState(' ');

    const handleBoardClick = function (event){
      setTurn();
    };
    
    for(let i=0; i<area; i++){
      if(turn>=0){
        tiles.push(<Tile index={i} symbol={symbols[turn]} onBoardClick={handleBoardClick}  />);
      }
      //else checkWinner();
    }
    return (
      <div id="board">{tiles}</div>
    );
}

module.exports = Board;