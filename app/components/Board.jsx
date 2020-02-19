const React = require('react');
const Tile = require('./Tiles');
const utils = require('../logic/utils.js');

/* takes an array prop 'tiles' and returns a <ul> element 
   with each item as <li> elements */
const Board = function({ area, turn, setTurn, checkWinner}) {
    const [tiles, setTiles] = React.useState([]);
    const [values, setValues] = React.useState([]);
    const symbols = ['X','O'];
    //const [symbol, setSymbol] = React.useState(' ');

    const handleBoardClick = function (event, index, symbol){
      setTiles(tiles.concat(index));
      setValues(values.concat(symbols[turn]));
      setTurn(tiles, values); 
    };
  
    let tileMarkup= [];
    React.useEffect(() => {
    setInterval(() => checkWinner, 1000);
  }, []);  
       
    for(let i=0; i<area; i++){
      let tileInQuestion = tiles.indexOf(i);
      tileMarkup.push(<Tile index={i} symbol={(tileInQuestion>-1) ? values[tileInQuestion] : ' ' } onBoardClick={handleBoardClick}  />);
    }
    return (
      <div id="board">
      {tileMarkup}
      </div>
    );
}

module.exports = Board;