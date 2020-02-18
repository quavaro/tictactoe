const React = require('react');

const Tile = function({index}) {
  const [turn, setTurn] = React.useState(0);
  const symbols = ['X','O'];

  return (
    <button key={index} onClick={() => setTurn((turn+1)%2)}>{symbols[turn]</button>
      );
}

module.exports = Tile;