function getWinner() {
  const tilesHTML = document.getElementsByTagName('button');
  let tiles = []
  for(let i=0; i<tilesHTML.length; i++){
    tiles.push(tilesHTML[i].innerHTML);
  }
}

module.exports = {
  getWinner: getWinner
}