import React from "react";

export default class TodoForm extends React.Component {
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.element.value);
    this.element.value = "";
  };

  render() {
    return (
      <form id="taskForm" onSubmit={this.handleOnSubmit}>
        <input
          id="taskInput"
          type="text"
          placeholder="What needs to be done?"
          ref={el => (this.element = el)}
        />
      </form>
    );
  }
}
