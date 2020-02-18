const React = require('react');

const Tile = function({index, player}) {
  
  const symbols = ['X','O'];

  return (
    <button key={index}>{symbols[player]}</button>
      );
}

module.exports = Tile;