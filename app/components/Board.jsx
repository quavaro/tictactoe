const React = require('react');
const Tile = require('./Tiles');
const utils = require('../logic/utils.js');

/* takes an array prop 'tiles' and returns a <ul> element 
   with each item as <li> elements */
const Board = function({ area, turn, setTurn, checkWinner}) {
    let tiles = [];
    const [tilesSet, setTiles] = React.useState([]);
    const symbols = ['X','O'];
    //const [symbol, setSymbol] = React.useState(' ');

    const handleBoardClick = function (event, index, symbol){
       tiles = utils.getTileStates();
       tiles[index]=symbols[turn];
      setTurn();  
      setTiles(tilesSet.concat({{index}: symbols[turn]}));
      console.log(tilesSet);
    };
    let tileMarkup= [];
    for(let i=0; i<area; i++){
      tileMarkup.push(<Tile index={i} symbol={(tilesSet.indexOf(i)>-1) ? tiles[i] : ' ' } onBoardClick={handleBoardClick}  />);
    }
      return (
        <div id="board">
          {tileMarkup}
        </div>
      );
}

module.exports = Board;