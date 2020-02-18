function getWinner() {
  const tiles = document.getElementsByTagName('button');
  tiles.forEach(element => {console.log(element)});
  
}

module.exports = {
  getWinner: getWinner
}