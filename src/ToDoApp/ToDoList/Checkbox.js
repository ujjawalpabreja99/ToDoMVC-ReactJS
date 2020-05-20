import React from "react";

export default class Checkbox extends React.Component {
  render() {
    const todo = this.props.todo;
    return (
      <div class="checkbox-container circular-container">
        <label class="checkbox-label">
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => this.props.onChange(todo.id)}
            checked={todo.status === "Completed"}
          />
          <span class="checkbox-custom circular" />
        </label>
      </div>
    );
  }
}
