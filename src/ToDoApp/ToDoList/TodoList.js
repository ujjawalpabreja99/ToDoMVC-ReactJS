import React from "react";
import TodoItem from "./TodoItem";

export default class ToDoList extends React.Component {
  render() {
    return (
      <ul id="tasksUL">
        {this.props.todos.map(todo => {
          return (
            <TodoItem
              todo={todo}
              toggleTodo={this.props.toggleTodo}
              editTodo={this.props.editTodo}
              deleteTodo={this.props.deleteTodo}
              archiveTodo={this.props.archiveTodo}
            />
          );
        })}
      </ul>
    );
  }
}
