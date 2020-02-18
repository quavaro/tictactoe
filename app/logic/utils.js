function checkWinPath(tile1, tile2, tile3) {
  if(tile1 == 'X' && tile2 == 'X' && tile3 == 'X'){
    return 'X';
  }
  else if (tile1 == 'O' && tile2 == 'O' && tile3 == 'O'){
    return 'O';
  }
else return ' ';
}

function getWinner() {
  const tilesHTML = document.getElementsByTagName('button');
  let tiles = []
  for(let i=0; i<tilesHTML.length; i++){
    tiles.push(tilesHTML[i].innerHTML);
  }
  if(checkWinPath(tiles[0], tiles[1], tiles[2]) != ' '){
    return tiles;
  }
}

module.exports = {
  getWinner: getWinner
}