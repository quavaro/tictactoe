const React = require('react');

const Tile = function({index, player}) {
  //if(player)
  const [symbol, setSymbol] = React.useState(' ');

  const symbols = ['X','O'];

  return (
    <button key={index} onClick={() => setSymbol(symbols[player])}>{symbol}</button>
      );
}

module.exports = Tile;