const React = require('react');
const Tile = require('./Tiles');
const utils = require('../logic/utils.js');

/* takes an array prop 'tiles' and returns a <ul> element 
   with each item as <li> elements */
const Board = function({ area, turn, setTurn, checkWinner}) {
    //let tiles = [];
    const [tiles, setTiles] = React.useState([]);
    for (let i=0; i<area; i++){
     tiles.push(' ');
    }
    //const symbols = ['X','O'];
    //const [symbol, setSymbol] = React.useState(' ');

    const handleBoardClick = function (event){
      setTurn();
      const currentChar = event.target.innerHTML;
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