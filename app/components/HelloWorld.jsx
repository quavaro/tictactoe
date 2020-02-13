const react = require("react");
const getName = require("../logic/util.js")

function PageRoot () {
  return <h1>This is my page now. It belongs to {getName}</h1>
}

module.exports = PageRoot;