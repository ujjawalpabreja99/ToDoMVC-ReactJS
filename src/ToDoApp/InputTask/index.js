import React from "react";
// import { addTodo } from "../../Stores/store";

export default class InputTask extends React.Component {
  render() {
    const handleOnSubmit = event => {
      event.preventDefault();
      this.props.addTodo(this.element.value);
      this.element.value = "";
    };
    return (
      <li id="inputLI">
        <form id="taskForm" onSubmit={handleOnSubmit}>
          <input
            id="taskInput"
            type="text"
            placeholder="What needs to be done?"
            ref={el => (this.element = el)}
          />
        </form>
      </li>
    );
  }
}
