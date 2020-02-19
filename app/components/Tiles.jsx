const React = require('react');

const Tile = function({index, symbol, onBoardClick}) {
  if(symbol == ' ' ){
    return (
      <button key={index} onClick={() => { onBoardClick();}}>{symbol}</button>
        );
  }    
  else {
    return (
      <button key={index} className={symbol}>{symbol}</button>
        );
  }
  
}

module.exports = Tile;