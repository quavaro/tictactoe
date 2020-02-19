function getTileStates(){
  const board = document.getElementById('board');
  const tilesHTML = board.getElementsByTagName('button');
  let tiles = [];
  for(let i=0; i<tilesHTML.length; i++){
    tiles.push(tilesHTML[i].innerHTML);
  }
  return tiles;
}

function checkWinPath(tile1, tile2, tile3) {
  if(tile1 == 'X' && tile2 == 'X' && tile3 == 'X'){
    return 'X';
  }
  else if (tile1 == 'O' && tile2 == 'O' && tile3 == 'O'){
    return 'O';
  }
else return ' ';
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
  
  if(result != ' '){
    return tiles[3];
  }
  
  result = checkWinPath(tiles[0], tiles[1], tiles[2])
  if(result != ' '){
    return tiles[0];
  }
  
  result = checkWinPath(tiles[6], tiles[7], tiles[8])
  if(result != ' '){
    return tiles[6];
  }
  
  result = checkWinPath(tiles[0], tiles[3], tiles[6])
  if(result != ' '){
    return tiles[0];
  }
  
  result = checkWinPath(tiles[1], tiles[4], tiles[7])
  if(result != ' '){
    return tiles[1];
  }
  
  result = checkWinPath(tiles[2], tiles[5], tiles[8])
  if(result != ' '){
    return tiles[2];
  }
  result = checkWinPath(tiles[0], tiles[4], tiles[8])
  if(result != ' '){
    return tiles[0];
  }
  result = checkWinPath(tiles[2], tiles[4], tiles[6])
  if(result != ' '){
    return tiles[2];
  }
  return false;
}

module.exports = {
  getWinner: getWinner,
  getTileStates: getTileStates
}