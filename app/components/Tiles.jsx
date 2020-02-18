const React = require('react');

const Tile = function({index, value, onBoardClick}) {
  

  
  if(value == ' '){
    return (
      <button key={index} onClick={() => {onBoardClick();}}>{value}</button>
        );
  }    
  else {
    return (
      <button key={index} className={symbol}>{value}</button>
        );
  }
  
}

module.exports = Tile;