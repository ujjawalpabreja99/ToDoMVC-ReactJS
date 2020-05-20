import React from "react";

export default class Description extends React.Component {
  render() {
    const todo = this.props.todo;
    if (todo.status === "Completed") {
      return (
        <label onDoubleClick={this.props.handleDoubleClick}>
          <s>{todo.description}</s>
        </label>
      );
    } else {
      return (
        <label onDoubleClick={this.props.handleDoubleClick}>
          {todo.description}
        </label>
      );
    }
  }
}
