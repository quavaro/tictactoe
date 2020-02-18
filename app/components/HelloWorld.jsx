const React = require('react');
const Board = require('./Board');
const Styles = require('app/style.css');

const squarea = 9;

/* the main page for the index route of this app */
const HelloWorld = function() {
  return (
    <div>
      <Board area={squarea} />
    </div>
  );
}

module.exports = HelloWorld;