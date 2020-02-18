const React = require('react');

const Tile = function({index, player, boardClickHandler}) {
  

  const [symbol, setSymbol] = React.useState(' ');
  const symbols = ['X','O'];
  if(symbol == ' '){
    return (
      <button key={index} onClick={() => {setSymbol(symbols[player]); console.log('child click'); boardClickHandler();}}>{symbol}</button>
        );
  }    
  else {
    return (
      <button key={index}>{symbol}</button>
        );
  }
  
}

module.exports = Tile;