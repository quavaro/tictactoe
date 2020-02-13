const React = require("react");
const util = require("../logic/util.js");
const Clockface = require("./clockface.jsx");

function PageRoot () {
  return <div><h1>This is my page now. It belongs to {util.getName("Klingon")}</h1>
  <Clockface />
  </div>

}

module.exports = PageRoot;