const React = require('react');

const Tile = function({index, value, setValue, onBoardClick}) {
    let symbols = ['X','O'];
  
    setValue(value);

  
  if(value == ' '){
    return (
      <button key={index} onClick={() => {onBoardClick();}}>{value}</button>
        );
  }    
  else {
    return (
      <button key={index} className={value}>{value}</button>
        );
  }
  
}

module.exports = Tile;