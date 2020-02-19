function getTileStates(){
  const board = document.getElementById('board');
  const tilesHTML = board.getElementsByTagName('button');
  let tiles = [];
  for(let i=0; i<tilesHTML.length; i++){
    tiles.push(tilesHTML[i].innerHTML);
  }
  return tiles;
}

function checkWinPaths(tiles) {
  if(tiles.includes(0) && tiles.includes(1) && tiles.includes(2) || 
    tiles.includes(3) && tiles.includes(4) && tiles.includes(5) || 
    tiles.includes(6) && tiles.includes(7) && tiles.includes(8) || 
    tiles.includes(0) && tiles.includes(3) && tiles.includes(6) || 
    tiles.includes(0) && tiles.includes(4) && tiles.includes(8) || 
    tiles.includes(1) && tiles.includes(4) && tiles.includes(7) || 
    tiles.includes(2) && tiles.includes(5) && tiles.includes(8) || 
    tiles.includes(2) && tiles.includes(4) && tiles.includes(6) )
  {
     return true;
  }
  else return false;
}

function getWinner(tiles, values) {
  let result;
  let xTiles= []
  let oTiles= [];
  for(let i=0;i<tiles.length; i++){
    if(values[i]=='X') {
      xTiles.push(tiles[i]);
    }
    else if(values[i]=='O') {
      oTiles.push(tiles[i]);
    }
  }
  
  if(checkWinPaths(xTiles)){
    return 'X';
  }
  else if(checkWinPaths(oTiles)){
    return 'O';
  }
  else return false;
}

module.exports = {
  getWinner: getWinner,
  getTileStates: getTileStates
}