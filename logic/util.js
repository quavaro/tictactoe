function getWinner() {
  const tiles = document.getElementsbyTagName('button');
  tiles.forEach(element => {console.log(element)});
  
}

module.exports = {
  getWinner: getWinner
}