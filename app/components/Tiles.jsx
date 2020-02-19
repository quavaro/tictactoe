const React = require('react');

const Tile = function({index, symbol, onBoardClick}) {

    return (
      <button key={index} className={symbol} onClick={() => { onBoardClick(event);}}>{symbol}</button>
        );

}

module.exports = Tile;