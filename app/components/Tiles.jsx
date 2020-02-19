const React = require('react');

const Tile = function({index, symbol, onBoardClick}) {
    return (
      <button key={index} className={symbol} onClick={() => { onBoardClick(event, index, symbol);}}>{symbol}</button>
        );
}

module.exports = Tile;