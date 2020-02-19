const React = require('react');

const Tile = function({index, symbol, onBoardClick}) {
  if(symbol == ' ' ){
    return (
      <button key={index} onClick={() => { onBoardClick(event);}}>{symbol}</button>
        );
  }    
  else {
    return (
      <button key={index} className={symbol} onClick={() => { onBoardClick(event);}}>{symbol}</button>
        );
  }
  
}

module.exports = Tile;