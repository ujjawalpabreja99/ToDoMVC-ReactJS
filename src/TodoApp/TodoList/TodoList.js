import React from "react";
import TodoItem from "./TodoItem";

export default class ToDoList extends React.Component {
  render() {
    return (
      <ul id="tasksUL">
        {this.props.todos.map(todo => {
          return <TodoItem {...this.props} todo={todo} />;
        })}
      </ul>
    );
  }
}
