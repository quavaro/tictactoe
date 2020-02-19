const React = require('react');
const Tile = require('./Tiles');
const utils = require('../logic/utils.js');

/* takes an array prop 'tiles' and returns a <ul> element 
   with each item as <li> elements */
const Board = function({ area, turn, setTurn, checkWinner}) {
    const [tiles, setTiles] = React.useState([' '],[' '],[' '],[' '],[' '],[' '],[' '],[' '],[' ']);
    setTiles
    //const symbols = ['X','O'];
    //const [symbol, setSymbol] = React.useState(' ');

    const handleBoardClick = function (event){
      setTurn();
      const currentChar = event.target.innerHTML;
    };
    
    for(let i=0; i<area; i++){
      return (
        <div id="board">
          <Tile index={i} symbol={tiles[i]} onBoardClick={handleBoardClick}  />
        </div>
      );
    }
}

module.exports = Board;