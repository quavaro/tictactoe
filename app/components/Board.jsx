const React = require('react');
const Tile = require('./Tiles');
const utils = require('../logic/utils.js');

/* takes an array prop 'tiles' and returns a <ul> element 
   with each item as <li> elements */
const Board = function({ area, turn, setTurn, checkWinner}) {
    let tiles = [];
    const [tilesSet, setTiles] = React.useState({0:' ',1:' ',2:' ',3:' ',4:' ',5:' ',6:' ',7:' ',8:' ',9:' '});

    const symbols = ['X','O'];
    //const [symbol, setSymbol] = React.useState(' ');

    const handleBoardClick = function (event, index, symbol){
      const i = index.toString();
      setTurn();  
      setTiles(tilesSet[index] = symbol);
      console.log(tilesSet);
    };
    let tileMarkup= [];
    for(let i=0; i<area; i++){
      tileMarkup.push(<Tile index={i} symbol={tilesSet[i]} onBoardClick={handleBoardClick}  />);
    }
      return (
        <div id="board">
          {tileMarkup}
        </div>
      );
}

module.exports = Board;