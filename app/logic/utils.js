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
  let tiles = [];
  let result;
  for(let i=0; i<tilesHTML.length; i++){
    tiles.push(tilesHTML[i].innerHTML);
  }
  result = checkWinPath(tiles[0], tiles[1], tiles[2])
  if(result != ' '){
    return tiles;
  }
}

module.exports = {
  getWinner: getWinner
}