var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Cuddle the cats'
        }, {
          id: 4,
          text: 'Deal with cat poop'
        }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;
