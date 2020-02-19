const React = require('react');

const Tile = function({index, player, winEvent, onBoardClick}) {
  

  const [symbol, setSymbol] = React.useState(' ');
  const symbols = ['X','O'];
  
  if(symbol == ' ' && !winEvent()){
    return (
      <button key={index} onClick={() => { 
          setSymbol(symbols[player]); 
          onBoardClick();
        }}>{symbol}</button>
        );
  }    
  else {
    return (
      <button key={index} className={symbol}>{symbol}</button>
        );
  }
  
}

module.exports = Tile;