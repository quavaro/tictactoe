const React = require("react");
const util = require("../logic/util.js");
const Clockface = require("./clockface.jsx");

function PageRoot () {
  const [date, setDate] = React.useState(0);
  new Date();
  
  const [count, setCount] = React.useState(0);
  const doIncrement = () => {
    setCount(count+1);
  }
  return <div><h1>This is my page now. It belongs to {util.getName("Klingon")}</h1>
    <h2>The current count is {count}</h2>
    <button onClick={doIncrement}>Increment</button>
  <Clockface hours={date.getHours()} minutes={date.getMinutes()} seconds={date.getSeconds()}/>
  </div>

}

module.exports = PageRoot;