const React = require('react');

const Tile = function({index, player}) {
  

  
  
  if(clicked == false){
    return (
      <button key={index} > </button>
        );
  }    
  else {
    return (
      <button key={index}>{player}</button>
        );
  }
  
}

module.exports = Tile;