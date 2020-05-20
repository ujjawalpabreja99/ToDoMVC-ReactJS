import React from "react";
import ToggleCompleteTodos from "./Components/ToggleCompleteTodos";
import TodoForm from "./Components/TodoForm";

export default class TodoInput extends React.Component {
  render() {
    return (
      <li id="inputLI">
        <ToggleCompleteTodos
          todosCount={this.props.todosCount}
          toggleCompleted={this.props.toggleCompleted}
        />
        <TodoForm addTodo={this.props.addTodo} />
      </li>
    );
  }
}
