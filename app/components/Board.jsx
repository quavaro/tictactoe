const React = require('react');
const Tile = require('./Tiles');
const utils = require('../logic/utils.js');

/* takes an array prop 'tiles' and returns a <ul> element 
   with each item as <li> elements */
const Board = function({ area, turn, setTurn, checkWinner}) {
    const [tiles, setTiles] = React.useState([' '],[' '],[' '],[' '],[' '],[' '],[' '],[' '],[' ']);
    //const symbols = ['X','O'];
    //const [symbol, setSymbol] = React.useState(' ');
console.log(tiles);
    const handleBoardClick = function (event, index, symbol){
      setTurn();
      const currentChar = event.target.innerHTML;
      for(let i=0; i<area; i++){
        if(i==index){
          setTiles(tiles.concat(symbol));
        }
        else setTiles(tiles.concat(' '))
      }
    };
    let tileMarkup= [];
    for(let i=0; i<area; i++){
      tileMarkup.push(<Tile index={i} symbol={tiles[i] ? tiles[i] : ' ' } onBoardClick={handleBoardClick}  />);
    }
      return (
        <div id="board">
          {tileMarkup}
        </div>
      );
}

module.exports = Board;