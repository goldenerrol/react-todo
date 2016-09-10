var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          // ... is the Spread operator, lets you spread out all the properties of
          // an object. In this case, the props of each Todo item! being passed to Todo.jsx
          //Todo Key tells which value is the key value (unique ID)
          <Todo key={todo.id} {...todo}/>
        );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
