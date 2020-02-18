const React = require('react');

const Tile = function({index, player}) {
  const [symbol, setSymbol] = React.useState(' ');
  const symbols = ['X','O'];

  return (
    <button key={index} onClick={() => setSymbol((turn+1)%2)}>{symbols[player]}</button>
      );
}

module.exports = Tile;