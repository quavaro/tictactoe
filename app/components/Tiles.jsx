const React = require('react');

const Tile = function({index, player, onBoardClick}) {
  

  const [symbol, setSymbol] = React.useState(' ');
  const symbols = ['X','O'];
  
  if(symbol == ' '){
    return (
      <button key={index} onClick={() => {onBoardClick(); console.log(player);setSymbol(symbols[player]); }}>{symbol}</button>
        );
  }    
  else {
    return (
      <button key={index} className={symbol}>{symbol}</button>
        );
  }
  
}

module.exports = Tile;