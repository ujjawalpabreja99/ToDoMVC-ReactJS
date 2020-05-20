import React from "react";

export default class CompleteCheckbox extends React.Component {
  render() {
    const todo = this.props.todo;
    return (
      <div class="checkbox-container circular-container">
        <label class="checkbox-label">
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => this.props.toggleTodo(todo.id)}
            checked={todo.status === "Completed"}
          />
          <span class="checkbox-custom circular" />
        </label>
      </div>
    );
  }
}
